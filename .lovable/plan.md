

# Honest Assessment + Real Fix Path

## Confidence Level: Low (with code-only fixes), High (with infra fix)

I've spent multiple rounds optimizing the **frontend code** (lightweight fetch, lazy answers, removed AbortController, added retries) — but the network logs prove the problem is **not in the code**.

## The Hard Evidence

Direct database test just now:
```
Query: SELECT id, keyword, question, category, priority, city_slug
       FROM pet_qa_keywords
       WHERE state = 'Kuala Lumpur' AND language = 'en'
       ORDER BY priority DESC;

Execution Time: 0.893 ms
Index used: idx_pet_qa_state_lang_priority ✓
Rows: 258
```

Yet your browser is receiving:
```
Status: 504 — upstream request timeout
```

A 0.9ms query cannot legitimately produce a 504 unless the **backend instance itself** is overloaded or the **Supabase REST gateway (PostgREST)** is queuing/dropping requests.

## Why More Code Changes Won't Help

I could keep adding pagination, server-side functions, edge-function wrappers — but **none of that addresses an instance that can't serve a sub-millisecond query**. We'd be polishing a car that has no engine.

## The Real Fix (2 Steps)

### Step 1 — Required: Upgrade Lovable Cloud Instance
The backend is hitting compute/connection-pool limits. You need to:

1. Open your project → **Backend** (Lovable Cloud) → **Advanced settings**
2. Click **Upgrade instance** to a larger size
3. Wait ~3–5 minutes for infrastructure to resize
4. Retest `/qa/selangor`, `/qa/kuala-lumpur`, `/qa/johor`

Docs: https://docs.lovable.dev/features/cloud#advanced-settings-upgrade-instance

This is the single change most likely to actually fix the 504s. Without it, no code change I make will work reliably.

### Step 2 — Defensive: Backend Edge Function Wrapper
Once the instance is healthy, I'll add a small edge function `get-state-qa-list` that:
- Accepts `state`, `language`, `limit`, `offset`
- Runs the query server-side with a connection from the function pool (not the public REST gateway)
- Returns paginated results
- Handles state-name normalization + EN fallback in one place

This bypasses the PostgREST gateway path that's currently 504-ing, giving us a more resilient route even under future load spikes.

## What I Need From You

**Please upgrade the Lovable Cloud instance first.** If after the upgrade the pages still 504, then it's a deeper infrastructure issue and we should escalate to Lovable support — not keep rewriting client code.

Once you confirm the upgrade is complete, I'll implement Step 2 (the edge function wrapper) as durable insurance.

## Files I'll Touch (After Upgrade Confirmed)
- **New**: `supabase/functions/get-state-qa-list/index.ts` — paginated, normalized read
- **New**: `supabase/functions/get-qa-answer/index.ts` — single-answer fetch by id
- **Modify**: `src/components/qa/StateQASection.tsx` — call edge functions instead of PostgREST direct
- **Modify**: `supabase/config.toml` — register the two new functions with `verify_jwt = false`

## Honest Outcome Forecast
- If you upgrade the instance → **High confidence** (~90%) the pages load.
- If you don't upgrade and I only change code → **Low confidence** (~25%). We've already done the meaningful code optimizations and they didn't help.


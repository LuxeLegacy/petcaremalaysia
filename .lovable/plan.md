

# Fix perpetual "Loading questions…" on `/qa/selangor`, `/qa/kuala-lumpur`, `/qa/johor`

## What's actually happening

The Q&A list query fires from the browser to PostgREST and **never resolves** — no error, no data, just hangs. The current code only retries on a thrown error or returned error object, so a hung promise stays hung and the spinner never goes away.

I confirmed:
- DB has the data (258 rows for KL, 220+ for Selangor/Johor).
- The exact query the frontend runs returns in milliseconds via service role.
- RLS policy `Public read access for pet QA` is `USING (true)` on the public role — so anon access is allowed.
- The issue is the same Lovable Cloud connection-layer instability that previously made the edge function time out.

So the bug is: **no client-side timeout on the supabase query**, so when the network request hangs, the UI never recovers.

## Fix

### 1. Add a hard client-side timeout to every list batch fetch

Wrap each `supabase.from('pet_qa_keywords').select(...)` call in a `Promise.race` against a 6-second timer. If the timer wins, throw a timeout error so the existing retry loop kicks in. After all retries fail, surface the inline retry UI (which already exists) instead of an infinite spinner.

### 2. Same timeout on the lazy answer fetch

Apply the same `Promise.race` to `loadAnswer(id)` so opening an accordion item can't hang forever either; on timeout, set the answer-error state (already wired up).

### 3. Fall back to a smaller initial batch on first attempt

For the very first batch only, request **20 rows** instead of 50. Smaller payload = lower chance of tripping the gateway's flaky path. Subsequent "Load more" batches stay at 50. Once 20 rows render, the page is no longer "empty/loading" even if the connection is degraded.

### 4. Drop two unused indexes the request may be implicitly favoring poorly

(Skipped — DB plan is already sub-millisecond. No schema changes.)

### 5. Clear the stale module-level cache when retrying

`handleRetryInitial` already deletes the cache key. Confirmed working — no change needed there, just keeping it.

## Files changed

- **`src/components/qa/StateQASection.tsx`** — only file touched.
  - Add `withTimeout<T>(promise, ms)` helper.
  - Wrap the supabase `runQuery` call inside `fetchListBatch` with `withTimeout(..., 6000)`.
  - First-call batch size = 20; subsequent = 50 (introduce `INITIAL_BATCH_SIZE = 20`, keep `BATCH_SIZE = 50`).
  - Wrap the lazy `loadAnswer` supabase call with `withTimeout(..., 5000)`.
  - On total failure, the existing `initialError` UI with **Try Again** button shows instead of the perpetual spinner.

## What the user will see after the fix

- If the gateway responds normally: 20 questions appear in ≤6 s; "Load More" pulls 50 more at a time.
- If the gateway hangs: after ~18 s (3 attempts × 6 s) the spinner is replaced with a clean "Couldn't load this batch — Try Again" card.
- The hand-written state profile content above the Q&A keeps rendering instantly in every case, so the page is never visually blank.


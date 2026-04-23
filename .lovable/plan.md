

# Rebuild `/qa/selangor`, `/qa/kuala-lumpur`, `/qa/johor` from scratch

## Why the current pages fail

The edge function `get-state-qa-list` is now returning `500 upstream request timeout` even though the underlying query runs in under 1 ms with the right index. The bottleneck is the connection path between the edge runtime and Postgres under load — not the SQL, not the index, not the frontend code we already optimized.

Pulling 220–258 rows in a single request keeps tripping that timeout, even with lightweight columns. The fix is to stop relying on “one big request” entirely.

## What I’ll build

A **balanced, content-first state page** with a **resilient dynamic Q&A** below it. The page never looks empty, even if the database is slow.

### Page structure (top → bottom)

1. **Hero** — state name, badge, breadcrumb back to `/qa`.
2. **State snapshot** — capital, climate, registered clinic count, consultation price range, top local risks. Hand-written per state, always renders.
3. **Local emergency contacts** — DVS state office, SPCA, 999. Always renders.
4. **Local case study** — short hand-written narrative tied to that state. Always renders.
5. **Searchable Q&A module** (the rebuilt dynamic part):
   - Search bar + popular search chips
   - City filter + category filter
   - Accordion list, lazy-loaded answers
6. **CostCTA** (existing direct-response component).
7. **Explore other states** link.

If the database fails or is slow, sections 1–4 + 6–7 still render normally. Only the Q&A module shows its own loading/retry state.

### New resilient fetch strategy for the Q&A module

Instead of fetching all rows at once, the new approach uses **small keyset-paginated batches**:

- Initial load: request first **50 rows only**, ordered by `priority DESC, id ASC`.
- “Show More” button: fetches the next 50 using `id > lastId` (keyset pagination — no `OFFSET`, much faster and stable).
- Each batch has its own short retry (2 attempts) and clean error UI; a failed batch does not blank the page or wipe what already loaded.
- Answers continue to be **lazy-loaded by id** when the user opens an accordion item.
- Add a small **client-side cache keyed by `state+language`** so navigating away and back is instant and avoids re-hitting the gateway.

### Edge functions

- Replace `get-state-qa-list` with a simpler version that:
  - Accepts `stateSlug`, `language`, `limit` (default 50, max 100), `afterId` (keyset cursor).
  - Returns at most 50 lightweight rows (`id, keyword, question, category, priority, city_slug`) plus a `nextCursor`.
  - Adds an internal 8-second timeout and returns a clean JSON error instead of dragging until the gateway 504s.
  - Keeps state-name normalization (`kuala-lumpur` → `Kuala Lumpur` / `W.P. Kuala Lumpur`) and EN fallback for `ms`/`zh`.
- Keep `get-qa-answer` as-is (already minimal: one row by id).

### State pages get hand-written content too

Add `STATE_PROFILES` entries for `selangor`, `kuala-lumpur`, `johor` (currently only the 11 fallback states have these). This is what guarantees the page is never empty, gives us the unique SEO content above the Q&A, and removes the duplicate-content risk that originally started this thread.

### Routing & SEO

- Keep the existing routes; `StateQAPage` always shows the new content sections, and now also shows `StateQASection` underneath when `STATES_CONFIG[slug].hasData` is true.
- `buildSEO` already produces unique titles/descriptions per state from `STATE_PROFILES` — it will now apply to all 14 states, including the three rebuilt ones.

### Files I’ll change

- **Update**: `src/pages/StateQAPage.tsx` — render state profile sections **above** `StateQASection`, not as an either/or.
- **Rewrite**: `src/components/qa/StateQASection.tsx` — keyset pagination, per-batch retry, in-memory cache, never shows a full-page error if first batch fails (shows inline retry inside the module instead).
- **Update**: `supabase/functions/get-state-qa-list/index.ts` — keyset pagination, hard 8s internal timeout, smaller payload contract.
- **Update**: `src/data/qa/stateProfiles.ts` — add Selangor, Kuala Lumpur, Johor profiles (intro, contacts, top risks, case study, 6 local Q&As each, trilingual).
- No DB schema changes needed; the existing index `idx_pet_qa_state_lang_priority` already supports the new query.

## What this fixes

- `/qa/selangor`, `/qa/kuala-lumpur`, `/qa/johor` always render meaningful, unique state content immediately — no more empty pages.
- The dynamic Q&A loads in small, fast batches that fit well under the gateway’s timeout window, dramatically reducing the 504/500 failure rate.
- Even if the Q&A module fails, the rest of the page still ranks and converts.
- All 14 state pages now have the same unique-content backbone, eliminating the duplicate-content concern across the hub.


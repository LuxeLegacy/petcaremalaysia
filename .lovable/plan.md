
Fix the empty `/qa/selangor`, `/qa/kuala-lumpur`, and `/qa/johor` pages by changing the fetch strategy, not the content.

What’s happening now
- The data is present: Johor has 221 English rows, Kuala Lumpur 258, Selangor 258.
- The database index already exists and is being used. The query plan for Selangor runs in about 1.4ms with `idx_pet_qa_state_lang_priority`.
- The current failures are browser-side aborts, not “no data” and not the original missing-index issue anymore. The preview logs show `AbortError: signal is aborted without reason`, and the code in `StateQASection.tsx` is forcibly aborting the request after 10 seconds.
- The page still fetches every row plus the full `answer` field up front, even though only 10 items are shown initially. That makes the request more fragile than it needs to be.

Implementation plan

1. Make the initial Q&A request lightweight
- Change `StateQASection.tsx` so the first query only requests list fields:
  - `id, keyword, question, category, priority, city_slug`
- Do not fetch `answer` in the first load.
- Keep the city/category filters working from this lightweight dataset.

2. Lazy-load answers only when a question is opened
- When an accordion item expands, fetch that row’s `answer` by `id`.
- Cache loaded answers in component state so each answer is fetched once.
- This removes the biggest payload from the initial request and should stop the “empty page” behavior.

3. Replace the hard 10s abort with a safer strategy
- Remove the aggressive 10-second abort for the main list fetch, or increase it substantially and treat `AbortError` separately.
- Keep retry behavior, but only for genuine transient failures.
- Show a more accurate message like “The list is taking longer than expected” instead of implying the content is missing.

4. Add server-side paging for resilience
- Fetch the first page only, aligned with visible UI count.
- Load more rows when the user clicks “Show More”.
- This avoids pulling 221–258 records when the user only sees 10 at a time.

5. Keep the database schema consistent in code
- Add a migration file for `idx_pet_qa_state_lang_priority` if it is missing from `supabase/migrations/`.
- The index exists in the backend now, but the repo should also contain the migration so the optimization is preserved across environments.

6. Verify route/state handling stays correct
- Keep the special slug-to-state mapping:
  - `kuala-lumpur` → `Kuala Lumpur`
  - `selangor` → `Selangor`
  - `johor` → `Johor`
- Confirm the Q&A pages still use the database-backed path for these 3 states and the profile fallback only for the other states.

7. Optional fallback if backend remains slow after payload reduction
- If these pages still hang after the lighter fetch, the next likely cause is backend queue/compute saturation rather than query design.
- In that case, check Lovable Cloud instance health and, if needed, increase the backend instance size in Advanced settings.

Files to update
- `src/components/qa/StateQASection.tsx`
  - split list fetch vs answer fetch
  - remove or relax hard abort
  - add answer cache
  - fetch “Show More” from backend instead of slicing a giant preloaded array
- `supabase/migrations/...`
  - add the composite index migration if it is not already committed

Expected outcome
- `/qa/selangor`, `/qa/kuala-lumpur`, and `/qa/johor` stop showing the error box and load reliably.
- Initial page render becomes much faster because it no longer downloads every full answer up front.
- The fix becomes durable because the index is preserved in migrations, not just in the live backend.

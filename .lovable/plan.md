

# Fix Empty State Q&A Pages + Duplicate Content Across Fallback States

## Problem 1: Empty Pages (Selangor, KL, Johor)

The Supabase queries are returning **504 upstream timeouts** when fetching 220-258 rows ordered by `priority`. Data is present in the database (221 Johor, 258 KL, 258 Selangor English rows) but the query is too slow without a proper index.

### Fix

- **Add a composite database index** on `pet_qa_keywords (state, language, priority DESC)` so the filtered + sorted query is served instantly instead of doing a full table scan.
- **Trim the payload**: stop selecting `answer` in the initial fetch when only a list view is shown. Currently every row pulls the full answer text (~250 words × 258 rows ≈ heavy payload). Either:
  - Keep `answer` (acceptable once index is in place), OR
  - Lazy-load `answer` per row when the accordion expands.
  Recommendation: just add the index — payload is fine if the query is fast.
- **Add a query timeout + retry**: wrap the supabase call with an `AbortController` (10s) and one retry, so transient gateway hiccups don't leave a permanent empty state.
- **Improve the empty state**: when the fetch errors or times out, show an error message with a "Retry" button instead of the misleading "No Q&A available for X yet" message.

## Problem 2: Duplicate Content Across 11 Fallback States

Every state without DB data (Penang, Perak, Sarawak, Sabah, Melaka, Kedah, Pahang, Kelantan, Terengganu, Negeri Sembilan, Perlis) currently renders the **identical** `NoDataFallback`:
- Same heading text (only state name swapped)
- Same 4 emergency contacts (all KL/Selangor numbers)
- Same 6 national Q&As, word-for-word
- Same CTAs

This is the exact thin-duplicate pattern flagged in the project's content-uniqueness memory and **will trigger Google duplicate-content penalties**.

### Fix Strategy

Replace the single shared fallback with **state-specific content** built from a per-state data file:

1. **Create `src/data/qa/stateProfiles.ts`** — one entry per state with:
   - **Local DVS contact** (state veterinary department phone + address from official DVS Malaysia directory)
   - **State capital + 2-3 major cities** with population
   - **3-5 state-specific local risks** (e.g. Sarawak: tropical leptospirosis, hornbill region; Sabah: monkey bites near Kinabalu; Kelantan: flood-season parasites; Penang: dengue hotspots; Pahang: snake-bite zones; Perlis: paddy-field exposure)
   - **State-specific clinic count + price range** (already available in city metadata)
   - **One unique local case study or anecdote** (50-80 words, vet-authored tone)
   - **6 state-tailored Q&As** rotated from a pool of 30+ phrasings, with answers referencing the local DVS, climate, common breeds, and nearest 24/7 hub city

2. **Update `NoDataFallback` → `StateProfileFallback`** to render this state-specific data:
   - State-specific intro paragraph (150-200 words) mentioning the capital, climate, top pet risks
   - State DVS contact card (replaces generic Selangor SPCA/PAWS)
   - 6 unique state Q&As (instead of identical national 6)
   - "Nearest 24/7 emergency hub" callout pointing to the closest active state (KL/Selangor/Johor)
   - Local statistics block (registered clinics, avg consultation cost in that state)

3. **Trilingual**: each state profile includes `en`, `ms`, `zh` variants — natural localizations, not machine-translated.

4. **Update SEO**:
   - `seoTitle` and `seoDesc` in `StateQAPage` become state-specific (mention DVS, top risk, capital city) instead of the current generic template.
   - Add a per-state `Article` schema and a small `FAQPage` schema with the 6 unique Q&As (deduped against the homepage FAQPage per existing schema-consolidation rules).

## Files Touched

- **DB migration**: add index `idx_pet_qa_state_lang_priority` on `pet_qa_keywords(state, language, priority DESC)`.
- **New**: `src/data/qa/stateProfiles.ts` — 11 state profiles × 3 languages.
- **Modify**: `src/components/qa/StateQASection.tsx` — add AbortController + 10s timeout + retry; surface error state.
- **Modify**: `src/pages/StateQAPage.tsx` — replace `NoDataFallback` with new `StateProfileFallback` component reading from `stateProfiles.ts`; make SEO title/description state-specific.
- **New**: `src/components/qa/StateProfileFallback.tsx` — renders the unique per-state content.

## Outcome

- `/qa/selangor`, `/qa/kuala-lumpur`, `/qa/johor` load their 220-258 Q&As reliably.
- Each of the 11 fallback state pages (`/qa/perak`, `/qa/penang`, `/qa/negeri-sembilan`, etc.) shows genuinely unique content with local DVS contacts, regional pet risks, and state-tailored Q&As — eliminating the duplicate-content penalty risk.


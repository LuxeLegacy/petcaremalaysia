

# Fix: Q&A Badge Count and Category Filter Counts

## Two bugs identified

### Bug 1: Hardcoded "145+ Q&A" badge on `/qa` hub page
The `QAPage.tsx` `StateQACard` component displays a hardcoded `i18n.qaCount` string ("145+ Q&A") for all states with `hasData: true`. Johor has 221 Q&A entries but still shows "145+". This should show the actual count or at minimum "220+ Q&A".

**Fix**: Update the badge text in `QAPage.tsx` to show a per-state count. Either:
- Make it dynamic by querying counts from the database, OR
- Update the hardcoded label to be per-state (simpler): add a `qaCount` field to each state object (e.g., Selangor: "258+", Johor: "220+").

I recommend the per-state approach to avoid an extra database call on the hub page.

### Bug 2: Category filter counts show 0 when a category is selected
In `StateQASection.tsx` line 328, category counts are computed from `filteredQAs` — which already includes the category filter. So when you click "symptom-urgent", `filteredQAs` only contains symptom-urgent items, making all other category counts show 0.

**Fix**: Create a separate `baseFilteredQAs` memo that applies only search + city filters (no category filter). Use this for computing category counts, while keeping `filteredQAs` (with category) for the actual list display.

## Files changed

1. **`src/pages/QAPage.tsx`** — Add per-state `qaCount` to the `MALAYSIAN_STATES` array and use it in the badge.
2. **`src/components/qa/StateQASection.tsx`** — Split filtering into `baseFilteredQAs` (search+city only) and `filteredQAs` (search+city+category). Use `baseFilteredQAs` for category button counts.


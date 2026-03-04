

## Root Cause Analysis

There are **four distinct problems** causing these pages to render empty:

1. **No multilingual Q&A data in the database.** The `pet_qa_keywords` table has 258 rows, all English, all for Selangor only. No MS/ZH translations exist. No data for any other state.

2. **Missing states in STATES_CONFIG.** `StateQAPage.tsx` and `QAPage.tsx` only list 12 states. `negeri-sembilan` and `perlis` are missing, so those URLs hit the "State not found" fallback.

3. **No language fallback.** `StateQASection` queries `.eq('language', language)`. When language is `ms` or `zh`, it returns 0 rows and shows "No Q&A available."

4. **Thin "Coming Soon" placeholder.** States without data show a minimal 3-line card with zero useful content.

---

## Implementation Plan

### 1. Add Negeri Sembilan and Perlis to state configs

**Files:** `src/pages/StateQAPage.tsx`, `src/pages/QAPage.tsx`

- Add `'negeri-sembilan': { name: 'Negeri Sembilan', hasData: false }` and `'perlis': { name: 'Perlis', hasData: false }` to both STATES_CONFIG and MALAYSIAN_STATES arrays.
- Add `'negeri-sembilan'` and `'perlis'` entries to the `stateNameMap` in `StateQASection.tsx` (already exists for the DB query mapping).

### 2. Add English Q&A fallback in StateQASection

**File:** `src/components/qa/StateQASection.tsx`

- Modify the `fetchQAs` function: if the query returns 0 rows and `language !== 'en'`, re-query with `language = 'en'`.
- Show a small banner: "Showing English Q&A. [Language] translation coming soon." (trilingual text).
- This ensures `/ms/qa/selangor` shows the 258 English Q&As instead of nothing.

### 3. Add useful fallback content for states with no data

**File:** `src/pages/StateQAPage.tsx`

Replace the minimal "Coming Soon" card with a richer section containing:
- Trilingual heading and description
- **Emergency contacts** block (DVS hotline, SPCA, emergency vet number)
- **Popular national Q&A** -- display 5-8 curated questions from the existing Selangor data as "Most asked across Malaysia"
- **Links to nearby state pages** that have data and to the main Q&A hub
- **Link to the emergency assessment tool** (`/assessment`)

This gives every state page genuine useful content even before Q&A data is populated.

### 4. Translate static UI text on state Q&A pages

**Files:** `src/pages/StateQAPage.tsx`, `src/components/qa/StateQASection.tsx`

All hardcoded English strings ("Back to Q&A Hub", "Coming Soon", "Pet Emergency Q&A for...", "145+ Questions", search placeholder, popular searches, category labels, "Show More/Less", etc.) will be replaced with trilingual objects keyed by `language`.

### 5. Translate state names for MS/ZH display

State names like "W.P. Kuala Lumpur" are fine for all languages, but section titles should adapt. Add trilingual title templates:
- EN: "Pet Emergency Q&A for {state}"
- MS: "Soalan & Jawapan Kecemasan Haiwan untuk {state}"  
- ZH: "{state}宠物急症问答"

---

## Technical Details

```text
Current flow:
  /ms/qa/selangor
  → LanguageContext detects 'ms'
  → StateQAPage renders with language='ms'
  → StateQASection queries: .eq('state','Selangor').eq('language','ms')
  → 0 rows → "No Q&A available"

Fixed flow:
  /ms/qa/selangor
  → Same detection
  → StateQASection queries .eq('language','ms') → 0 rows
  → Fallback query .eq('language','en') → 258 rows
  → Shows English Q&As + "Showing in English" banner
```

**Files to modify:**
- `src/pages/StateQAPage.tsx` -- add states, translate UI, rich fallback
- `src/pages/QAPage.tsx` -- add states, translate UI
- `src/components/qa/StateQASection.tsx` -- language fallback, translate labels

No database changes needed. No new files.


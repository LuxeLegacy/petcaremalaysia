

# Plan: Replicate Selangor Q&A Data for Johor

## Summary

Populate the `pet_qa_keywords` database table with Johor-specific Q&A content (mirroring the 145 state-level Selangor entries) and flip the `hasData` flag so `/qa/johor` renders the interactive Q&A section instead of the fallback.

## What exists today

- Selangor has 145 state-level Q&A rows (no `city_slug`) across 6 categories: `symptom-urgent` (72), `emergency-general` (26), `emergency-location` (14), `toxin-ingestion` (14), `cost-logistics` (10), `transport-triage` (9).
- Selangor also has ~113 city-specific rows across 10 cities.
- Johor has 0 rows in the database. Its page shows the fallback UI.

## Implementation steps

### 1. Generate and insert Johor state-level Q&A rows (~145 entries)

Using a database migration, bulk-insert Q&A rows for `state = 'Johor'` with `city_slug = NULL`. Content will be adapted from the Selangor dataset with Johor-specific references:

- Replace "Selangor" with "Johor" in keywords, questions, and answers
- Replace Selangor-specific location references (Shah Alam, PJ, etc.) with Johor equivalents (Johor Bahru, Tampoi, Skudai, Iskandar Puteri)
- Update local context: JB-specific emergency clinics, MBJB council references, Johor DVS contacts
- Keep same categories and priority structure

This will be done via multiple SQL INSERT statements in a single migration.

### 2. Generate and insert Johor city-level Q&A rows (~80 entries)

Insert city-specific Q&A rows for 5 key Johor cities: `johor-bahru`, `tampoi`, `skudai`, `iskandar-puteri`, `bukit-indah` — each with ~16 localized Q&As covering the same 6 categories.

### 3. Update `StateQAPage.tsx` — flip `hasData` flag

Change line 15 from:
```
'johor': { name: 'Johor', hasData: false },
```
to:
```
'johor': { name: 'Johor', hasData: true },
```

This single change makes the page render `<StateQASection>` instead of the `<NoDataFallback>` component.

## Technical details

- **Database table**: `pet_qa_keywords` — columns: `keyword`, `question`, `answer`, `state`, `city_slug`, `category`, `language` (defaults to `en`), `priority`
- **No schema changes needed** — same table structure as Selangor
- **No new components needed** — `StateQASection` already handles any state dynamically via the `stateNameMap`
- **City filter dropdown** will auto-populate from Johor cities in `cityData.ts` (already has JB Hub + Iskandar Hub cities)

## Files changed

1. **Database migration** — bulk INSERT of ~225 Johor Q&A rows
2. **`src/pages/StateQAPage.tsx`** — single line change (`hasData: true`)


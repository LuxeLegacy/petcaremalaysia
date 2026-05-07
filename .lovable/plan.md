## Schema Markup — Remaining Work (Batch A)

Skipping #13 (AggregateRating) and #14 (Person/Author) — no real data to back them; fabricating either risks Google manual action.

### Scope

All work happens in `scripts/prerender.mjs` (the prerender injects JSON-LD into static HTML, which is what crawlers read). No runtime React changes needed.

### 1. FAQPage on city location pages + `/qa` hub  (#7 completion)

- **City pages** (`/<state>/<city>`, `/ms/<state>/<city>`, `/zh/<state>/<city>`): pull the 6–8 most relevant Q&As already shown in the "Your Questions Answered" section for that city (trilingual) and emit a single consolidated `FAQPage` JSON-LD per page.
- **`/qa` hub + `/ms/qa` + `/zh/qa`**: emit `FAQPage` built from the top hub-level Q&As.
- Respect existing rule: **one** `FAQPage` per page (no duplicates with state-level FAQ if a page already has one).

### 2. Upgrade LocalBusiness → VeterinaryCare on city pages  (#9 strengthening)

- Change `@type` from `LocalBusiness` to `VeterinaryCare` on city/state location pages (more specific, better for vet-intent queries).
- Keep all existing fields (name, address, geo, areaServed, url, telephone).
- Where multiple clinics are listed, emit an `ItemList` of `VeterinaryCare` items.

### 3. HowTo schema  (#11)

Add `HowTo` JSON-LD to:
- **`/assessment`** (and `/ms/assessment`, `/zh/assessment`) — steps = the 17-step triage flow summarised as: Observe symptom → Check vital signs → Score urgency → Get nearest vet recommendation. Include `totalTime`, `tool` (none), `supply` (none).
- **`/emergency-guide`** (+ MS/ZH) — steps derived from the guide's section headings (stabilise → identify red flags → call vet → transport safely).
- **Prevention pages** under the dental + urinary hubs that have step-based content — `HowTo` per page using existing H2/H3 step structure.

All HowTo entries include the mandatory medical disclaimer in `description` ("Educational only — always consult a licensed Malaysian vet"), per existing safety constraints.

### Technical notes

- Add helper builders in `scripts/prerender.mjs`: `buildFAQPage(qas)`, `buildVeterinaryCare(clinic)`, `buildHowTo(steps, meta)`.
- Wire them into the relevant `renderPage()` branches by route prefix.
- Trilingual: pull localised question/answer/step text from existing data files (`cityData.ts`, YQA Q&A bank, assessment steps, guide content). No invented copy.
- Validate after prerender by spot-checking 3 pages with Google Rich Results Test URLs (manual, post-deploy).

### Out of scope (explicitly skipped)

- #13 AggregateRating — no review data source exists.
- #14 Person/Author — no named vet reviewer with credentials available.

### Deliverable

After implementation: items #7, #9, #11 fully done. Schema scorecard becomes **7 done, 2 intentionally skipped (documented), 0 outstanding**.

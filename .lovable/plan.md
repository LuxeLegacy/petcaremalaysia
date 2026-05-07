## Phase 3 — Content Optimization

Audit findings:
- 169 city pages render `CityPageContent` with `CityFAQSection` (currently 16 EN / 9 MS / 9 ZH FAQs from `cityContentGenerator.ts`).
- No embedded Google Maps anywhere — only `window.open` map links in `NearbyVetsSection`.
- ~15 dog-dental + ~15 urinary topic-cluster pages (`src/data/dog-dental/en`, `src/data/urinary/en`); no "Quick Answer" boxes; cost references scattered, no consistent table.
- 20 PAA Q&A articles in `src/data/paa/`; titles/intros not consistently structured for "People Also Ask" snippets.
- Disclaimers exist on Footer + assessment results, but topic-cluster pages lack a standardized vet disclaimer block.

### 1. "Near me" language (#21)
Update title/description templates and one hero subhead per city/state page (EN/MS/ZH). Files: `src/pages/CityPage.tsx`, `src/components/city/CityHeroSection.tsx`, prerender city titles in `scripts/prerender.mjs`.
- EN: `Vets Near Me in {city} — 24/7 Emergency Care | PetCareMY`
- MS: `Vet Berdekatan Saya di {city} — Kecemasan 24/7 | PetCareMY`
- ZH: `{city}附近兽医 — 24/7急诊护理 | PetCareMY`
Also sprinkle "near me / berdekatan / 附近" in the H1 subhead and intro paragraph.

### 2. Embedded Google Maps (#22)
New `src/components/city/CityMapEmbed.tsx` using a no-API-key embed:
```html
<iframe loading="lazy" src="https://www.google.com/maps?q=vet+clinic+{city}+{state}+Malaysia&output=embed" />
```
Wire into `CityPageContent` between clinics and FAQ. Wrap in `<details>` collapsed by default on mobile to protect LCP. Add "Open in Google Maps" link fallback for users with privacy blockers.

### 3. Quick Answer boxes (#23)
New shared `src/components/common/QuickAnswerBox.tsx` (pastel-pink card, "Quick Answer" pill, 1–3 sentence definitive answer + RM cost where relevant). Inject at the top of every:
- Dog-dental sub-page (15 pages × 3 langs)
- Urinary sub-page (15 pages × 3 langs)
- PAA article page (20 × 3 langs)
Pull from existing `tldr` / `summary` field where present; for entries missing a TL;DR, generate from first paragraph + cost figure (one-time data-file edit, no invented numbers — uses existing cost ranges).

### 4. Malaysia cost tables (#24)
New `src/components/common/MalaysiaCostTable.tsx` rendering an HTML `<table>` (vet, suburban, kampung tiers; low–high RM). Inject on:
- Every dog-dental treatment + diagnosis page (e.g., dental cleaning, x-rays, periodontal treatment)
- Every urinary diagnosis/treatment page (urinalysis, x-ray, catheter, hospitalization)
Cost rows live in a single source: `src/data/malaysia-vet-costs.ts` (trilingual tier labels, numeric RM ranges). One file, looked up by topic key.

### 5. Expand FAQ to 10+ per language (#25)
Pad MS + ZH templates in `src/lib/cityContentGenerator.ts` from 9 → 12 each (matching the EN structure: emergency, cost, service, govt, general). Add 2 new EN entries too (insurance + 24/7 transport) → 18 EN. New questions optimized for "people also ask" phrasing ("How much…", "Where can I…", "What time…").

### 6. Restructure Q&A for PAA alignment (#26)
For all 20 PAA articles + state Q&A pages, ensure each top-level Q&A:
- Question phrased as a real Google PAA query ("How much does X cost in Malaysia?")
- First answer sentence is a direct ≤30-word answer (snippet-bait)
- Followed by 2–4 supporting sentences with RM figures
Apply in `src/data/paa/*.ts` answer fields and `cityContentGenerator.ts` FAQ answer field. Add a small lint script `scripts/check-qa-format.mjs` that warns when first sentence > 30 words.

### 7. Keyword cannibalization (#27)
Audit identified candidate overlaps:
- `en-vet-visit-cost` vs `en-pet-insurance-cost` — both target "vet cost Malaysia"
- `en-pet-dental-care` vs dog-dental hub `/dog-dental-disease`
- `en-grooming-cost` vs blog "grooming" articles
- `en-pet-boarding-cost` vs blog boarding
- `en-flea-treatment` vs urinary/dental cross-mentions
Action per pair: differentiate by **search intent + canonical**. Update titles/H1 to specify intent ("How much…" vs "Best…" vs "Where…"); add canonical pointing to the deeper hub article; add internal cross-links from the lighter article to the canonical hub. No content deletion.

### 8. Veterinary disclaimers on topic cluster (#28)
New `src/components/common/VetDisclaimer.tsx` — pastel-pink bordered card with mandatory text:
> "Educational content only. Not a substitute for professional veterinary advice. Always consult a licensed Malaysian veterinarian (DVS-registered) before acting on any information. Call your nearest 24/7 vet immediately for emergencies."
Trilingual variants. Inject at the bottom of every dog-dental, urinary, PAA article, blog medical post. Add `medicalAudience` field to existing `MedicalWebPage` schema.

### Out of scope
- Visual map markers / live clinic pins (would need Maps JS API + key — current iframe embed is keyless).
- AI rewriting of all answers — only first-sentence snippet alignment is automated; deeper rewrites only where existing answer fails the 30-word lint.

### Validation
- Build passes, prerender outputs include "near me" titles, map iframe, QuickAnswer + cost table + disclaimer in HTML source on a sampled dog-dental page.
- Manually spot-check 3 city pages, 2 dental pages, 2 PAA articles in EN/MS/ZH after deploy.

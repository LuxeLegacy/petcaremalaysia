# Phase 4 Content Expansion — 3 Topic Cluster Hubs (Scaffold + Seed)

Mirror the existing **Dog Dental Authority Hub** pattern (hub + category + slug routes, trilingual data, ItemList/MedicalCondition schema, cross-linking to PAA/Blog/Vet directory) for three new clusters. Ship architecture now and 5–10 fully-written seed pages per hub; the remaining pages can be added incrementally without further architectural work.

## The 3 hubs

| # | Hub | Route base | Target final size | Seed pages this round |
|---|-----|------------|-------------------|----------------------|
| 29 | Dog Skin Problems | `/dog-skin-problems` | 40–50 | 8 |
| 30 | Dog Vomiting & Diarrhea | `/dog-vomiting-diarrhea` | 25–30 | 6 |
| 31 | Cat Dental Disease | `/cat-dental-disease` | 30–35 | 8 |

All routes also mounted at `/:lang/...` for MS and ZH.

## Seed content per hub

**Dog Skin Problems (8):** hub page, conditions (hot-spots, mange/scabies, ringworm, allergic dermatitis, yeast infection), symptoms (itching/scratching, hair loss), emergency-signs.

**Dog Vomiting & Diarrhea (6):** hub page, when-to-see-vet (red flags), causes (dietary indiscretion, parasites, gastroenteritis), symptoms (blood in vomit/stool), home-monitoring guide.

**Cat Dental Disease (8):** hub page, conditions (gingivitis, periodontal, stomatitis, tooth resorption, FORL), symptoms (drooling, dropping food), emergency-signs.

Each page includes: TL;DR snippet, AI-snippet bullet facts, direct-response intro (Kennedy/Halbert tone), symptom/cause/treatment sections, FAQ (single consolidated FAQPage schema), strict NO-DIY medical guardrails with emergency overrides, RM cost ranges, cross-links to vet clinics directory and Pet Surgery Cost calculator, Q&A CTA component.

## Technical Details

### File structure (per hub, mirroring `src/data/dog-dental/`)

```text
src/data/dog-skin/
  types.ts            # shared interfaces (copy from dog-dental/types.ts)
  index.ts            # registry: slug -> {en, ms, zh}
  en/
    hub.ts
    conditions-hot-spots.ts
    conditions-mange.ts
    conditions-ringworm.ts
    conditions-allergic-dermatitis.ts
    conditions-yeast-infection.ts
    symptoms-itching.ts
    symptoms-hair-loss.ts
    emergency-signs.ts
  ms/  (same 8 files, translated)
  zh/  (same 8 files, 「」 quotes)
```

Same layout for `src/data/dog-vomiting/` (6 files × 3 langs) and `src/data/cat-dental/` (8 files × 3 langs).

### Routing

Add lazy router pages mirroring `DogDentalRouter.tsx`:

- `src/pages/DogSkinRouter.tsx`
- `src/pages/DogVomitingRouter.tsx`
- `src/pages/CatDentalRouter.tsx`

Register in `src/App.tsx` (next to existing dog-dental routes):

```text
/dog-skin-problems[/:category[/:slug]]
/:lang/dog-skin-problems[/:category[/:slug]]
/dog-vomiting-diarrhea[/:category[/:slug]]
/:lang/dog-vomiting-diarrhea[/:category[/:slug]]
/cat-dental-disease[/:category[/:slug]]
/:lang/cat-dental-disease[/:category[/:slug]]
```

Each router resolves language from `:lang`, looks up content from its data index, renders the shared hub/article template, and 404s on unknown slugs.

### SEO surfaces

- Append all new URLs (EN + `/ms/` + `/zh/` variants) to `public/sitemap.xml`, `public/sitemap-ms.xml`, `public/sitemap-zh.xml`, `public/all-urls.csv`, `public/sitemap-urls.csv`, and the edge `supabase/functions/sitemap/index.ts`.
- Update `public/llms.txt` with the three new hub entries under Authority Hubs.
- Each hub page emits `ItemList` schema linking child pages; each article emits `MedicalWebPage` + single consolidated `FAQPage` schema (no duplicates).

### Cross-linking

- Add hub cards to the existing `/qa` hub and centralized authority-hub indexes.
- PAA articles whose categories match (skin, GI, dental) get a "Related deep dive" link to the new hub pages.
- Each new article shows the Pet Surgery Cost CTA and Q&A CTA component.

### Constraints honored

- Trilingual: EN default, MS at `/ms/`, ZH at `/zh/` with 「」 quotes.
- Medical safety: no dosing, no DIY treatment; red-flag symptoms trigger emergency override panel and WhatsApp +60 11‑5695 9227 CTA.
- Pastel pink theme with dark berry/charcoal text — no custom colors, semantic tokens only.
- Mobile CTAs ≤ 390px viewport-safe wording.
- Content uniqueness: max 20% identical sentences across pages within a hub; minimum 12 alternate phrasings for repeated concepts.
- Homepage layout untouched.

### Out of scope (follow-up rounds)

- Filling out the remaining 32–42 pages per hub.
- Items #32–#40 (blog gaps, state hub pages, comparison tables, author bios, backlinks, GBP, directories, video). Will be planned separately.

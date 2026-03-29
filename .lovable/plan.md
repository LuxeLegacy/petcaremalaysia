

# Urinary Tract Disease Hub — Phase 1 (Lean, EN Only)

## Scope
~20 English-only pages covering the root hub, species hubs, emergency pages, top symptoms, and top conditions. No BM/ZH translations, no diagnosis/treatment/recovery/prevention pages in this phase.

## Pages to Build (20 EN data files)

| # | Slug | Category | Type |
|---|------|----------|------|
| 1 | hub | hub | Root hub |
| 2 | cats-hub | hub | Cat species hub |
| 3 | dogs-hub | hub | Dog species hub |
| 4 | emergency-signs | emergency | Global emergency router |
| 5 | cats-emergency-signs | emergency | Cat emergency signs |
| 6 | cats-emergency-blocked-cat | emergency | Blocked cat (life-threatening) |
| 7 | cats-when-to-see-a-vet | emergency | Cat vet urgency guide |
| 8 | dogs-emergency-signs | emergency | Dog emergency signs |
| 9 | dogs-emergency-cant-urinate | emergency | Dog can't urinate |
| 10 | dogs-when-to-see-a-vet | emergency | Dog vet urgency guide |
| 11 | cats-symptoms-blood-in-urine | symptoms | Cat |
| 12 | cats-symptoms-straining-to-urinate | symptoms | Cat |
| 13 | cats-symptoms-frequent-small-urinations | symptoms | Cat |
| 14 | cats-symptoms-not-passing-urine | symptoms | Cat |
| 15 | dogs-symptoms-blood-in-urine | symptoms | Dog |
| 16 | dogs-symptoms-straining-to-urinate | symptoms | Dog |
| 17 | dogs-symptoms-frequent-small-urinations | symptoms | Dog |
| 18 | cats-conditions-feline-idiopathic-cystitis | conditions | Cat (FIC/FLUTD core) |
| 19 | cats-conditions-urethral-obstruction | conditions | Cat (emergency condition) |
| 20 | dogs-conditions-bacterial-cystitis-uti | conditions | Dog (most common) |

## URL Structure
```text
/urinary-tract-disease                                    → root hub
/urinary-tract-disease/cats                               → cat hub
/urinary-tract-disease/dogs                               → dog hub
/urinary-tract-disease/emergency-signs                    → global emergency
/urinary-tract-disease/cats/emergency-signs               → cat emergency
/urinary-tract-disease/cats/emergency-signs/blocked-cat   → blocked cat
/urinary-tract-disease/cats/when-to-see-a-vet             → cat vet guide
/urinary-tract-disease/cats/symptoms/blood-in-urine       → cat symptom
/urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis → cat condition
/urinary-tract-disease/dogs/symptoms/straining-to-urinate → dog symptom
... etc
```

## Files to Create

### 1. Types — `src/data/urinary/types.ts`
Mirrors dental types with species field added. Same interfaces: `UrinaryPageBase`, `UrinaryHubPage`, `UrinaryEmergencyPage`, `UrinarySymptomPage`, `UrinaryConditionPage`. Includes all AEO/GEO enrichment fields.

### 2. Data Files — `src/data/urinary/en/` (20 files)
Each file exports a typed object with veterinary-accurate content, Malaysia context, RM cost ranges, and citations. Content generated inline following the dental pattern.

### 3. Registry — `src/data/urinary/index.ts`
Imports all 20 EN files, exposes `getUrinaryPage(slug, lang)`, `getUrinaryHub(lang)`, `getUrinaryPagesByCategory()`, `getAllUrinarySlugs()`.

### 4. Router — `src/pages/UrinaryRouter.tsx`
Parses `/:speciesOrStandalone?/:categoryOrSlug?/:slug?` to resolve the correct page. Handles standalone slugs (emergency-signs), species hubs (cats, dogs), and nested species/category/slug paths.

### 5. Components — `src/components/urinary/`
Adapt from dog-dental components with minimal changes:
- `UrinaryHubPageComponent.tsx` — species-aware hub with emergency banner
- `UrinaryEmergencyPage.tsx` — emergency signs table with urgency levels
- `UrinarySymptomPage.tsx` — what it indicates, red flags, care pathways
- `UrinaryConditionPage.tsx` — signs, severity stages, when to see vet
- `UrinaryBreadcrumb.tsx` — species-aware breadcrumb trail
- `UrinarySchemaMarkup.tsx` — MedicalWebPage + FAQPage JSON-LD

Shared components reused directly: `AEOGEOSections`, `InternalLinkFunnel`, `EmergencyOverride`.

### 6. Routes — `src/App.tsx`
Add route entries:
```text
/urinary-tract-disease
/urinary-tract-disease/:speciesOrStandalone
/urinary-tract-disease/:species/:categoryOrSlug
/urinary-tract-disease/:species/:category/:slug
```
Plus `/:lang/` prefixed variants (6 total routes).

## Implementation Order
Due to the number of files (~30), this will be implemented across multiple batches:
1. Types + registry skeleton + router + App.tsx routes
2. UI components (adapted from dental)
3. EN data files batch 1: hubs + emergency pages (10 files)
4. EN data files batch 2: symptoms + conditions (10 files)

## What Is NOT Included (Phase 2+)
- BM/ZH translations
- Diagnosis, treatment, recovery, prevention pages
- Cross-species directory pages (/urinary-tract-disease/symptoms, /conditions, /treatments)
- /veterinary-care/* service path pages
- Sitemap integration
- Blog/PAA cross-linking


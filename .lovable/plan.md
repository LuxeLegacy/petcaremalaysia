

## Problem

All 16 blog article components (`PetEmergencyGuide.tsx`, `EmergencySymptomsGuide.tsx`, `VetDirectoryGuide.tsx`, etc.) have their content hardcoded in English. They import `useLanguage()` but never use the `language` value to switch content. Only `EmergencyPetCareGuide` and `PetFoodBrandsGuide` (defined inline in `BlogPostPage.tsx`) use the translation system via `getEmergencyGuideContent(language)` and `getNutritionGuideContent(language)`.

## Scale

- 16 blog article components, each 300-700 lines of hardcoded English text
- Each needs full Malay (MS) and Chinese (ZH) translations
- Total: ~8,000+ lines of content to translate across all components
- This is approximately 50,000-80,000 words of translation work

## Approach

For each of the 16 articles, the work follows this pattern:

1. **Create a translation data file** in `src/lib/blogTranslations/` (e.g., `petEmergencyGuideContent.ts`) exporting a function like `getPetEmergencyGuideContent(language)` that returns all text strings for EN/MS/ZH
2. **Update the component** to call that function with `language` from `useLanguage()` and replace all hardcoded strings with content object properties

### Articles to translate (16 total):
1. PetEmergencyGuide (pillar page)
2. EmergencySymptomsGuide
3. VetDirectoryGuide
4. FirstAidGuide
5. TreatmentCostsGuide
6. PetPoisonsGuide
7. DogEmergencyGuide
8. CatEmergencyGuide
9. HeatstrokeGuide
10. ChokingGuide
11. AccidentGuide
12. InsuranceGuide
13. PoisoningTreatmentGuide
14. EmergencyTransportGuide
15. PostEmergencyCareGuide
16. EmergencyPreventionGuide

### File structure
```text
src/lib/blogTranslations/
  petEmergencyGuide.ts        (EN/MS/ZH content)
  emergencySymptomsGuide.ts
  vetDirectoryGuide.ts
  firstAidGuide.ts
  treatmentCostsGuide.ts
  petPoisonsGuide.ts
  dogEmergencyGuide.ts
  catEmergencyGuide.ts
  heatstrokeGuide.ts
  chokingGuide.ts
  accidentGuide.ts
  insuranceGuide.ts
  poisoningTreatmentGuide.ts
  emergencyTransportGuide.ts
  postEmergencyCareGuide.ts
  emergencyPreventionGuide.ts
  index.ts                    (re-exports all)
```

## Important note

This is a very large task -- each article requires extracting 50-150+ distinct text strings and providing natural MS and ZH translations. Due to the volume, I recommend tackling this in batches of 3-4 articles at a time across multiple messages, starting with the highest-priority pillar page (`PetEmergencyGuide`) and the most-visited articles.


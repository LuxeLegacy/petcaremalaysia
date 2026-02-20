
# Dog Dental Disease Authority Site Hub

## Overview
Build a comprehensive, trilingual (EN/MS/ZH) "Dog Dental Disease" content hub at `/dog-dental-disease/` with ~30 pages organized into 8 categories: Hub, Conditions, Symptoms, Severity, Diagnostics, Treatments, Recovery, and Prevention. Each page follows strict medical safety guidelines (no medication names, no dosing, no DIY procedure instructions).

## Architecture

### Data-Driven Approach
Following the existing PAA article system pattern, all content will be defined as TypeScript data objects in a new `src/data/dog-dental/` directory. A single router component renders each page dynamically based on its type (condition, symptom, treatment, etc.), keeping the codebase DRY.

### URL Structure (trilingual)
```text
/dog-dental-disease                          (Hub page)
/dog-dental-disease/conditions/:slug         (4 pages)
/dog-dental-disease/symptoms/:slug           (7 pages)
/dog-dental-disease/severity/:slug           (3 pages)
/dog-dental-disease/emergency-signs          (1 page)
/dog-dental-disease/when-to-see-a-vet        (1 page)
/dog-dental-disease/diagnosis/:slug          (3 pages)
/dog-dental-disease/treatments/:slug         (5 pages)
/dog-dental-disease/recovery/:slug           (3 pages)
/dog-dental-disease/prevention/:slug         (3 pages)

+ /ms/ and /zh/ prefixed versions of all above
```

Total: ~30 unique pages x 3 languages = ~90 URL entries

---

## Technical Plan

### Phase 1: Data Layer

**New files to create:**

1. **`src/data/dog-dental/types.ts`** -- Type definitions for the hub's page data structures (DentalConditionPage, DentalSymptomPage, DentalTreatmentPage, etc.) with fields for: title, slug, category, lang, educational overview, signs, severity staging, red flags, related links, FAQ pairs, SEO metadata, and author info.

2. **`src/data/dog-dental/en/`** -- 30 English content files:
   - `hub.ts` -- Primary hub page content
   - `conditions-plaque.ts`, `conditions-gingivitis.ts`, `conditions-periodontal.ts`, `conditions-abscess.ts`
   - `symptoms-bad-breath.ts`, `symptoms-red-gums.ts`, `symptoms-swollen-gums.ts`, `symptoms-bleeding-gums.ts`, `symptoms-dropping-food.ts`, `symptoms-pawing-mouth.ts`, `symptoms-facial-swelling.ts`
   - `severity-early.ts`, `severity-moderate.ts`, `severity-advanced.ts`
   - `emergency-signs.ts`, `when-to-see-vet.ts`
   - `diagnosis-oral-exam.ts`, `diagnosis-dental-probing.ts`, `diagnosis-dental-xrays.ts`
   - `treatments-professional-cleaning.ts`, `treatments-tooth-extraction.ts`, `treatments-antibiotic-therapy.ts`, `treatments-pain-management.ts`, `treatments-preventive-care.ts`
   - `recovery-post-procedure.ts`, `recovery-healing-timeline.ts`, `recovery-monitoring.ts`
   - `prevention-brushing.ts`, `prevention-checkups.ts`, `prevention-diet.ts`

3. **`src/data/dog-dental/ms/`** -- 30 Malay content files (same structure)

4. **`src/data/dog-dental/zh/`** -- 30 Chinese content files (same structure)

5. **`src/data/dog-dental/index.ts`** -- Registry that imports all content files and provides lookup functions by slug, category, and language.

### Phase 2: Page Templates (Components)

**New files:**

6. **`src/components/dog-dental/DentalHubPage.tsx`** -- The primary hub page with:
   - H1 with SEO title
   - Educational overview of canine dental disease progression (plaque to bone loss)
   - Visual category cards linking to Conditions, Symptoms, Severity, Diagnostics, Treatments, Recovery, Prevention
   - Emergency override block (prominent red banner linking to emergency-signs)
   - FAQ section with JSON-LD
   - Author box (E-E-A-T)

7. **`src/components/dog-dental/ConditionPage.tsx`** -- Template for condition pages following the spec: Educational Overview, Common Signs, Severity Staging, Red Flags, How Vets Diagnose, Treatment Categories (links only), Recovery Expectations, Long-Term Prevention, When to See a Vet.

8. **`src/components/dog-dental/SymptomPage.tsx`** -- Template for symptom pages: What It May Indicate, Oral Infection vs Other Causes, Emergency Red Flags, Severity Routing, Veterinary Evaluation Overview, Care Pathway Links.

9. **`src/components/dog-dental/TreatmentPage.tsx`** -- Template for treatment category pages: What It Involves (non-procedural), When Vets Recommend It, Benefits, Risks and Anesthesia Considerations, Follow-Up Care, Associated Conditions.

10. **`src/components/dog-dental/SeverityPage.tsx`** -- Template for severity tier pages with progression visuals and routing to appropriate conditions/treatments.

11. **`src/components/dog-dental/DiagnosisPage.tsx`** -- Template for diagnostic overview pages (educational, non-procedural).

12. **`src/components/dog-dental/RecoveryPage.tsx`** -- Template for recovery content.

13. **`src/components/dog-dental/PreventionPage.tsx`** -- Template for prevention content.

14. **`src/components/dog-dental/EmergencyOverride.tsx`** -- Reusable emergency escalation block that auto-inserts when content mentions facial swelling, refusal to eat, fever, etc. Links to `/dog-dental-disease/emergency-signs` and `/veterinary-care/emergency`.

15. **`src/components/dog-dental/DentalBreadcrumb.tsx`** -- Breadcrumb component: Home > Dog Dental Disease > [Category] > [Page].

16. **`src/components/dog-dental/InternalLinkFunnel.tsx`** -- Renders the "Next Steps" funnel links following the strict linking logic (Symptom -> Severity -> Condition -> Diagnosis -> When to See Vet). Never links symptoms directly to treatments.

### Phase 3: Router

17. **`src/pages/DogDentalRouter.tsx`** -- Single router page component that:
    - Reads URL params (category + slug)
    - Looks up content from the registry by slug + current language
    - Renders the appropriate template component
    - Returns 404 for unknown slugs

18. **`src/App.tsx`** -- Add routes:
    ```
    /dog-dental-disease
    /dog-dental-disease/:category/:slug
    /dog-dental-disease/emergency-signs
    /dog-dental-disease/when-to-see-a-vet
    /:lang/dog-dental-disease (and all sub-paths)
    ```

### Phase 4: SEO and Schema

19. Each page will include:
    - Article schema (author, dates, publisher)
    - FAQPage schema (from related Q&A pairs)
    - BreadcrumbList schema
    - MedicalWebPage schema (where applicable)
    - Speakable specification

20. **Sitemap edge function update** -- Add all ~30 dog dental slugs to `supabase/functions/sitemap/index.ts` with trilingual hreflang annotations, priority 0.9 for hub, 0.7 for sub-pages.

### Phase 5: Internal Linking Integration

21. Add links from existing pet dental care PAA articles to the new hub.
22. Add the hub to the blog listing / navigation where appropriate.
23. Cross-link with existing emergency and vet directory content.

---

## Content Safety Rules (Enforced in Templates)
- No medication names or dosing information
- No step-by-step procedure instructions for clinical procedures
- Emergency override block auto-appears on pages mentioning red-flag terms
- All treatment pages use "category-level" educational framing only
- Tone: Educational, neutral, safety-focused throughout

## Implementation Order
1. Types and data layer (Phase 1)
2. Page template components (Phase 2)
3. Router and App.tsx routes (Phase 3)
4. SEO schemas and sitemap (Phase 4)
5. Internal linking (Phase 5)

Due to the scale (~90+ files), implementation will proceed in batches: English content first, then Malay and Chinese translations.



## Enriching Dog Dental Disease Pages with AEO/GEO Content

### Current State
- 31 EN pages across 8 categories, each with ~200-400 words of content
- Page templates render only the existing typed fields — no AEO/GEO elements exist
- No citations, no "Snippet for AI", no quick facts, no Malaysia-specific statistics

### Approach

**Phase 1: Extend types + update templates** (all 8 page components)

Add optional fields to `DentalPageBase` in `types.ts`:
```typescript
snippetForAI?: string;          // 40-60 word direct answer for LLM extraction
tldr?: string[];                // 3-5 bullet TL;DR
quickFacts?: { label: string; value: string }[];  // max 6 structured facts
malaysiaContext?: string;       // Malaysia-specific paragraph
statistics?: { stat: string; source: string }[];  // data points with attribution
costRange?: { item: string; range: string }[];    // RM pricing
citations?: { title: string; source: string; url: string; year: string }[];
keyTakeaways?: string[];        // bottom-of-page summary bullets
```

Update all 8 template components (ConditionPage, SymptomPage, SeverityPage, EmergencyPage, DiagnosisPage, TreatmentPage, RecoveryPage, PreventionPage) + DentalHubPage to conditionally render these new sections when present.

Also update `DentalSchemaMarkup.tsx` to include Speakable and enhanced Article schema.

**Phase 2: Enrich all 31 EN data files** (batched across multiple messages)

Each page gets enriched with:

**15 AEO elements:**
1. Snippet for AI (40-60 word direct answer block)
2. TL;DR bullets (3-5 points)
3. Quick Facts box (up to 6 key-value pairs)
4. ISO timestamps (already present)
5. Expanded FAQs (increase from 1-2 to 4-6 per page)
6. Direct answer in first sentence of overview
7. "What It Means for Your Dog" plain-language paragraph
8. Cost/pricing data in RM where relevant
9. Structured severity indicators
10. Breed-specific risk factors
11. Malaysia-specific veterinary context
12. Step-by-step "what to expect" for procedures
13. Key takeaways summary
14. Comparison data (e.g., treated vs untreated outcomes)
15. Answer-box formatted symptom checklist

**10 GEO elements:**
1. Veterinary statistics with source attribution
2. Peer-reviewed citation references
3. Malaysian veterinary regulatory references (DVS Malaysia)
4. Structured data for voice assistant extraction (Speakable schema)
5. Clear entity definitions (condition → cause → treatment pathway)
6. Temporal context (how long conditions take to develop/resolve)
7. Geographic relevance signals (tropical climate, Malaysian breeds)
8. Professional consensus statements
9. Comparative cost data (Malaysia vs regional)
10. Evidence quality indicators ("according to veterinary research...")

**Citations & Resources** (3-5 per page):
- AVDC (American Veterinary Dental College) guidelines
- WSAVA dental health guidelines
- Malaysian Veterinary Council references
- Published veterinary dentistry research
- DVS Malaysia (Department of Veterinary Services) data

### File changes

**Types & templates (Phase 1):**
- `src/data/dog-dental/types.ts` — add optional enrichment fields
- `src/components/dog-dental/ConditionPage.tsx` — render new sections
- `src/components/dog-dental/SymptomPage.tsx`
- `src/components/dog-dental/SeverityPage.tsx`
- `src/components/dog-dental/EmergencyPage.tsx`
- `src/components/dog-dental/DiagnosisPage.tsx`
- `src/components/dog-dental/TreatmentPage.tsx`
- `src/components/dog-dental/RecoveryPage.tsx`
- `src/components/dog-dental/PreventionPage.tsx`
- `src/components/dog-dental/DentalHubPageComponent.tsx`
- `src/components/dog-dental/DentalSchemaMarkup.tsx` — Speakable + enhanced schema

**Data enrichment (Phase 2 — batched):**
- Batch A: Hub + 4 Conditions (5 files)
- Batch B: 7 Symptoms (7 files)
- Batch C: 3 Severity + 2 Emergency/Vet (5 files)
- Batch D: 3 Diagnosis + 5 Treatments (8 files)
- Batch E: 3 Recovery + 3 Prevention (6 files)

### Execution order
Phase 1 (types + templates) ships first so all pages gain the new sections as soon as data is added. Phase 2 batches follow in subsequent messages.


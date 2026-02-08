

# Plan: PAA Article Template Components

## Overview
Build 8 reusable template components that follow the master prompt's exact article structure specification. These will serve as building blocks for all 620 PAA articles, rendered under the existing `/qa` route system.

## Components to Create

### 1. DirectAnswerBox
**File: `src/components/paa/DirectAnswerBox.tsx`**
- Purple gradient box (linear-gradient #667eea to #764ba2) with white text
- Renders the direct answer as the FIRST element in every article
- Props: `answer: string`

### 2. QuickFactsBox
**File: `src/components/paa/QuickFactsBox.tsx`**
- Yellow background (#fff3cd) stats card
- Displays: Average Cost, Time Required, Difficulty Level, Professional Needed, Insurance Coverage
- Props: `facts: { avgCost, timeRequired, difficulty, professionalNeeded, insuranceCoverage }`

### 3. ComparisonTable
**File: `src/components/paa/ComparisonTable.tsx`**
- Responsive cost comparison table
- Columns: Option, Cost Range (RM), Time Required, Best For, Pros/Cons
- Props: `rows: Array<{ option, costRange, timeRequired, bestFor, prosCons }>`

### 4. LocalResources
**File: `src/components/paa/LocalResources.tsx`**
- Green background (#e8f5e9) section
- Three sub-sections: Emergency Contacts, Government Resources, Animal Welfare Organizations
- All Malaysia-specific with DVS, SPCA, PAWS links
- Props: `resources?: { emergencyContacts, governmentResources, animalWelfare }` (defaults to standard Malaysia resources)

### 5. InsuranceInfo
**File: `src/components/paa/InsuranceInfo.tsx`**
- Yellow background (#fff8e1) with coverage details
- Three sub-sections: Typically Covered (green), Common Exclusions (red warning), How to File a Claim
- Props: `covered, exclusions, claimSteps` (with sensible Malaysia defaults)

### 6. CitationsSection
**File: `src/components/paa/CitationsSection.tsx`**
- Grey background (#f5f5f5) reference list
- Numbered citations with source, title, publication, year, optional link
- Props: `citations: Array<{ source, title, publication, year, url? }>`

### 7. AuthorBox
**File: `src/components/paa/AuthorBox.tsx`**
- E-E-A-T compliant author card
- Avatar (fallback initials), name, credentials, bio
- Props: `name, credentials, bio, avatarUrl?`

### 8. RelatedQuestions
**File: `src/components/paa/RelatedQuestions.tsx`**
- Shows 3-5 related PAA questions with brief answers and links
- Props: `questions: Array<{ question, briefAnswer, slug }>`

### 9. PAAArticlePage (Master Template)
**File: `src/components/paa/PAAArticlePage.tsx`**
- Composes all 8 components above in the correct order
- Accepts a single article data object and renders the full page
- Includes all 7 schema types (FAQPage, Article, HowTo, QAPage, WebPage with Speakable, BreadcrumbList, LocalBusiness)
- Uses existing Header/Footer/SEOHead

### 10. PAA Article Data Type
**File: `src/lib/paaTypes.ts`**
- TypeScript interfaces for article data structure
- Matches the JSON schema from the master prompt

## Route Integration

Add a new route pattern under `/qa`:
```
/qa/article/:slug
/:lang/qa/article/:slug
```

This keeps PAA articles under the Q&A section without touching the homepage or existing `/qa` hub.

**File changes:**
- `src/App.tsx` -- add 2 new route entries
- `src/pages/PAAArticleRouter.tsx` -- new page that maps slug to article data and renders `PAAArticlePage`

## Files Summary

| File | Action |
|------|--------|
| `src/lib/paaTypes.ts` | Create - TypeScript interfaces |
| `src/components/paa/DirectAnswerBox.tsx` | Create |
| `src/components/paa/QuickFactsBox.tsx` | Create |
| `src/components/paa/ComparisonTable.tsx` | Create |
| `src/components/paa/LocalResources.tsx` | Create |
| `src/components/paa/InsuranceInfo.tsx` | Create |
| `src/components/paa/CitationsSection.tsx` | Create |
| `src/components/paa/AuthorBox.tsx` | Create |
| `src/components/paa/RelatedQuestions.tsx` | Create |
| `src/components/paa/PAAArticlePage.tsx` | Create - master template |
| `src/pages/PAAArticleRouter.tsx` | Create - slug router |
| `src/App.tsx` | Edit - add routes |

## Styling
All components will use Tailwind classes that match the master prompt's color spec:
- Direct Answer: gradient `from-[#667eea] to-[#764ba2]`
- Quick Facts: `bg-[#fff3cd]`
- Local Resources: `bg-[#e8f5e9]`
- Insurance: `bg-[#fff8e1]`
- Exclusions warning: `bg-[#ffebee] border-l-4 border-[#c62828]`
- Citations: `bg-[#f5f5f5]`
- TL;DR: `bg-[#e8f4fd]`

## Schema Markup (all 7 types in PAAArticlePage)
1. FAQPage -- from relatedQuestions
2. Article -- headline, author, dates
3. HowTo -- from steps (when applicable)
4. QAPage -- question + accepted answer
5. WebPage with Speakable -- direct answer text
6. BreadcrumbList -- Home > Q&A > Article
7. LocalBusiness -- when location-relevant

## No Changes To
- Homepage (`/`)
- Existing blog articles
- Existing Q&A hub (`/qa`) or state pages (`/qa/:state`)


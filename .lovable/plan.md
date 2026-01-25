

## Fix "Article Coming Soon" on Blog Pages

### Root Cause Identified

The issue is **NOT with city pages or the sitemap slugs**. The problem is that **4 blog articles listed in BlogPage.tsx don't have corresponding content components** in BlogPostPage.tsx:

| Missing Article Slug | Category |
|---------------------|----------|
| `pet-insurance-comparison` | Insurance |
| `common-pet-illnesses-malaysia` | Health |
| `pet-grooming-tips` | Grooming |
| `vaccinations-schedule-pets` | Health |

When users click on these articles (from English, Malay, or Chinese blog listing), they see "Article Coming Soon" because BlogPostPage.tsx falls through to the default fallback message.

### Two Options to Fix

**Option A: Remove Unfinished Articles from Blog Listing (Recommended)**

1. **Update `src/pages/BlogPage.tsx`**: Remove the 4 blog posts that don't have content yet
2. **Update `supabase/functions/sitemap/index.ts`**: Ensure these 4 slugs are NOT in the sitemap (they weren't added in the last update, so this should be fine)

**Option B: Create Content for Missing Articles**

1. Create 4 new component files in `src/components/blog/`:
   - `InsuranceComparisonGuide.tsx` for `pet-insurance-comparison`
   - `CommonIllnessesGuide.tsx` for `common-pet-illnesses-malaysia`
   - `GroomingTipsGuide.tsx` for `pet-grooming-tips`
   - `VaccinationScheduleGuide.tsx` for `vaccinations-schedule-pets`
2. Add trilingual content (EN/MS/ZH) to each component
3. Register the new slugs in `BlogPostPage.tsx`
4. Add the slugs to the sitemap edge function

### Recommended Approach: Option A (Remove Unfinished Articles)

This is faster and prevents users from encountering "Coming Soon" pages. The removed articles can be added back when content is ready.

**Files to modify:**
- `src/pages/BlogPage.tsx` - Remove the 4 blogPost entries with unfinished slugs

**Current 22 articles → 18 articles** (matching what's actually implemented)

### Verification

After the fix, all blog article links in all languages will lead to actual content pages, eliminating the "Article Coming Soon" errors.




## Fix Blog Slug Mismatch in Sitemap Edge Function

### Problem Identified

The sitemap edge function (`supabase/functions/sitemap/index.ts`) uses **incorrect blog slugs** that don't match the actual slugs defined in `BlogPage.tsx` and `BlogPostPage.tsx`. This causes all Malay (`/ms/`) and Chinese (`/zh/`) blog article URLs to show "Article Coming Soon" because the slug doesn't match any route handler.

### Slug Mapping (Incorrect → Correct)

| Current Sitemap Slug | Correct Slug (from BlogPage.tsx) |
|---------------------|----------------------------------|
| `pet-emergency-guide` | `pet-emergency-guide-malaysia` |
| `emergency-symptoms-guide` | `pet-emergency-symptoms-malaysia` |
| `vet-directory` | `24-hour-vet-directory-malaysia` |
| `first-aid-guide` | `pet-emergency-first-aid-guide-malaysia` |
| `treatment-costs` | `pet-emergency-costs-malaysia` |
| `common-pet-poisons` | `common-pet-poisons-malaysia` |
| `dog-emergency-guide` | `dog-emergency-guide-malaysia` |
| `cat-emergency-guide` | `cat-emergency-guide-malaysia` |
| `heatstroke-guide` | `pet-heatstroke-malaysia` |
| `choking-guide` | `pet-choking-emergency-malaysia` |
| `accident-guide` | `pet-accident-emergency-malaysia` |
| `insurance-guide` | `pet-insurance-malaysia` |
| `poisoning-treatment-guide` | `pet-poisoning-treatment-malaysia` |
| `emergency-transport-guide` | `pet-emergency-transport-malaysia` |
| `post-emergency-care-guide` | `post-emergency-pet-care-malaysia` |
| `emergency-prevention-guide` | `pet-emergency-prevention-malaysia` |

**Also missing:** `emergency-pet-care-guide` (the original emergency care guide)

### Solution

Update `supabase/functions/sitemap/index.ts` lines 22-39 to use the correct slugs:

```typescript
const blogSlugs = [
  'pet-emergency-guide-malaysia',
  'emergency-pet-care-guide',
  'pet-emergency-symptoms-malaysia',
  '24-hour-vet-directory-malaysia',
  'pet-emergency-first-aid-guide-malaysia',
  'pet-emergency-costs-malaysia',
  'common-pet-poisons-malaysia',
  'dog-emergency-guide-malaysia',
  'cat-emergency-guide-malaysia',
  'pet-heatstroke-malaysia',
  'pet-choking-emergency-malaysia',
  'pet-accident-emergency-malaysia',
  'pet-insurance-malaysia',
  'pet-poisoning-treatment-malaysia',
  'pet-emergency-transport-malaysia',
  'post-emergency-pet-care-malaysia',
  'pet-emergency-prevention-malaysia',
  'pet-nutrition-guide-malaysia',
];
```

### Files to Modify

1. **`supabase/functions/sitemap/index.ts`** - Update the `blogSlugs` array (lines 22-39) with the correct slugs matching `BlogPage.tsx`

### Expected Outcome

- All 18 blog articles × 3 languages = **54 valid blog URLs** in sitemap
- Malay URLs (e.g., `/ms/blog/pet-emergency-guide-malaysia`) will correctly render article content
- Chinese URLs (e.g., `/zh/blog/pet-emergency-guide-malaysia`) will correctly render article content
- No more "Article Coming Soon" errors for valid articles




## Diagnosis: Old URL Slugs Causing "Article Coming Soon" Errors

### Root Cause Identified

The URLs you're visiting use **old/incorrect slugs** that don't match the registered routes in `BlogPostPage.tsx`:

| URL You're Visiting (WRONG) | Correct URL |
|---|---|
| `/zh/blog/poisoning-treatment-guide` | `/zh/blog/pet-poisoning-treatment-malaysia` |
| `/zh/blog/post-emergency-care-guide` | `/zh/blog/post-emergency-pet-care-malaysia` |
| `/ms/blog/emergency-transport-guide` | `/ms/blog/pet-emergency-transport-malaysia` |
| `/ms/blog/heatstroke-guide` | `/ms/blog/pet-heatstroke-malaysia` |
| etc. | |

The code and sitemap are now correct - all internal links and the sitemap use proper slugs. However, the old incorrect URLs (possibly from Google's index, browser history, or external links) don't have route handlers and fall through to the "Coming Soon" placeholder.

### Solution: Add URL Redirects for Old Slugs

I'll add redirect handling in `BlogPostPage.tsx` to automatically redirect old slug patterns to the correct ones. This ensures:

1. Users with old bookmarks get redirected to working pages
2. Google's indexed old URLs redirect properly (SEO-friendly 301-style behavior)
3. All language versions (EN/MS/ZH) work correctly

### Implementation Plan

**File to modify:** `src/pages/BlogPostPage.tsx`

1. **Create a slug redirect map** at the top of the file:
```typescript
const slugRedirects: Record<string, string> = {
  // Old shortened slugs → Correct full slugs
  'poisoning-treatment-guide': 'pet-poisoning-treatment-malaysia',
  'post-emergency-care-guide': 'post-emergency-pet-care-malaysia',
  'emergency-transport-guide': 'pet-emergency-transport-malaysia',
  'heatstroke-guide': 'pet-heatstroke-malaysia',
  'choking-guide': 'pet-choking-emergency-malaysia',
  'accident-guide': 'pet-accident-emergency-malaysia',
  'insurance-guide': 'pet-insurance-malaysia',
  'prevention-guide': 'pet-emergency-prevention-malaysia',
  'emergency-symptoms-guide': 'pet-emergency-symptoms-malaysia',
  'vet-directory': '24-hour-vet-directory-malaysia',
  'first-aid-guide': 'pet-emergency-first-aid-guide-malaysia',
  'treatment-costs': 'pet-emergency-costs-malaysia',
  'pet-emergency-guide': 'pet-emergency-guide-malaysia',
};
```

2. **Add redirect logic** at the start of BlogPostPage component:
```typescript
const BlogPostPage = () => {
  const { slug, lang } = useParams();
  const navigate = useNavigate();

  // Redirect old slugs to correct ones
  useEffect(() => {
    if (slug && slugRedirects[slug]) {
      const correctSlug = slugRedirects[slug];
      const newPath = lang 
        ? `/${lang}/blog/${correctSlug}` 
        : `/blog/${correctSlug}`;
      navigate(newPath, { replace: true });
    }
  }, [slug, lang, navigate]);

  // If redirecting, show loading or null
  if (slug && slugRedirects[slug]) {
    return null; // Will redirect
  }

  // ... rest of component
};
```

### Expected Outcome

- `/zh/blog/poisoning-treatment-guide` → Redirects to `/zh/blog/pet-poisoning-treatment-malaysia` ✅
- `/ms/blog/post-emergency-care-guide` → Redirects to `/ms/blog/post-emergency-pet-care-malaysia` ✅
- All old slug variants in any language will work correctly
- No more "Article Coming Soon" for URLs with old slugs


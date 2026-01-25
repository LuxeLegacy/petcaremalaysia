

## Update Sitemap with Multilingual URLs and Proper hreflang Annotations

### Current Issues

1. **Wrong hreflang format**: Homepage uses `?lang=en` query parameters instead of proper path prefixes (`/ms/`, `/zh/`)
2. **Missing language URLs**: Only English URLs are listed for all city pages
3. **Missing page types**: Blog articles, Q&A pages, legal pages are not in the sitemap
4. **No hreflang on most pages**: City pages and other content lack language alternate links

### Solution Overview

Completely rewrite the `supabase/functions/sitemap/index.ts` edge function to:
1. Dynamically generate all URLs for all three languages
2. Add proper `xhtml:link` hreflang annotations to every URL
3. Include all page types (main pages, city pages, blog articles, Q&A pages)
4. Use correct URL structure: EN = no prefix, MS = `/ms/`, ZH = `/zh/`

### Files to Modify

**`supabase/functions/sitemap/index.ts`** - Complete rewrite with:

1. **Define all page data arrays**:
   - Main pages: `/`, `/locations`, `/services`, `/blog`, `/qa`, `/sitemap`
   - Blog articles: 16 articles at `/blog/{slug}`
   - Q&A state pages: `/qa/{state}` for each state
   - City pages: ~105 cities from the cities data
   - Legal pages: `/terms`, `/privacy`, `/disclaimer`

2. **Generate proper hreflang structure** for each URL:
```xml
<url>
  <loc>https://petcaremalaysia.com/selangor/petaling-jaya</loc>
  <lastmod>2025-01-25</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
  <xhtml:link rel="alternate" hreflang="en" href="https://petcaremalaysia.com/selangor/petaling-jaya"/>
  <xhtml:link rel="alternate" hreflang="ms" href="https://petcaremalaysia.com/ms/selangor/petaling-jaya"/>
  <xhtml:link rel="alternate" hreflang="zh" href="https://petcaremalaysia.com/zh/selangor/petaling-jaya"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://petcaremalaysia.com/selangor/petaling-jaya"/>
</url>
```

3. **Include ALL language versions as separate URL entries**:
   - Each page gets 3 entries (EN, MS, ZH)
   - Each entry has hreflang links pointing to all 3 versions
   - `x-default` points to English version

### URL Structure

| Page Type | English | Malay | Chinese |
|-----------|---------|-------|---------|
| Homepage | `/` | `/ms` | `/zh` |
| City page | `/selangor/petaling-jaya` | `/ms/selangor/petaling-jaya` | `/zh/selangor/petaling-jaya` |
| Blog article | `/blog/first-aid-guide` | `/ms/blog/first-aid-guide` | `/zh/blog/first-aid-guide` |
| Q&A page | `/qa` | `/ms/qa` | `/zh/qa` |

### Data to Include

**Main Pages (5 x 3 = 15 URLs)**:
- `/`, `/locations`, `/services`, `/blog`, `/qa`

**Blog Articles (16 x 3 = 48 URLs)**:
- `pet-emergency-guide`, `emergency-symptoms-guide`, `vet-directory`, `first-aid-guide`, `treatment-costs`, `common-pet-poisons`, `dog-emergency-guide`, `cat-emergency-guide`, `heatstroke-guide`, `choking-guide`, `accident-guide`, `insurance-guide`, `poisoning-treatment-guide`, `emergency-transport-guide`, `post-emergency-care-guide`, `emergency-prevention-guide`

**City Pages (~105 x 3 = ~315 URLs)**:
- All cities from `src/data/cities.csv` organized by state

**Q&A State Pages (13 x 3 = 39 URLs)**:
- Kuala Lumpur, Selangor, Johor, Penang, Perak, Sarawak, Sabah, Melaka, Kedah, Pahang, Kelantan, Terengganu, Negeri Sembilan

**Legal Pages (3 URLs - English only)**:
- `/terms`, `/privacy`, `/disclaimer`

### Total URLs: ~420 URLs

### Key Implementation Details

1. **Helper function** to generate URL entry with hreflang:
```typescript
function generateUrlEntry(path: string, priority: number, changefreq: string): string {
  const base = 'https://petcaremalaysia.com';
  const enUrl = path === '/' ? base + '/' : base + path;
  const msUrl = base + '/ms' + (path === '/' ? '' : path);
  const zhUrl = base + '/zh' + (path === '/' ? '' : path);
  
  return `
  <url>
    <loc>${enUrl}</loc>
    <lastmod>2025-01-25</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="ms" href="${msUrl}"/>
    <xhtml:link rel="alternate" hreflang="zh" href="${zhUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>
  </url>`;
}
```

2. **Generate entries for all three languages** for each page
3. **Include all city data** matching the cities.csv structure

### Expected Outcome

- **~420 total URLs** in sitemap (140 base pages x 3 languages)
- Every URL has proper hreflang annotations
- Google can properly discover and index all language versions
- Eliminates duplicate content issues between language versions
- Proper `x-default` fallback for unmatched languages


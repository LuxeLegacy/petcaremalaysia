

## Problem

Two issues:

1. **`_redirects` proxy rules to external URLs are ignored.** The hosting platform serves the SPA catch-all for `/sitemap-ms.xml` and `/sitemap-zh.xml` because there are no physical files at those paths. The main `/sitemap.xml` works only because `public/sitemap.xml` exists as a static file.

2. **Edge function not serving filtered content.** Even if the proxy worked, the deployed edge function still returns all 3 languages for `?lang=ms`. The updated code may not have been deployed.

## Fix

Generate static `public/sitemap-ms.xml` and `public/sitemap-zh.xml` files, mirroring how `public/sitemap.xml` already works. The sitemap content is deterministic (hardcoded URLs and dates), so static files are the correct approach.

### Steps

**1. Redeploy the edge function** to ensure the `lang` parameter filtering works correctly. Then call it with `?lang=ms` and `?lang=zh` to verify correct filtered output.

**2. Create `public/sitemap-ms.xml`** -- A static XML file containing only Malay (`/ms/...`) URLs with full hreflang cross-links. Generated from the edge function output once it's working, or built directly from the same URL list used in the edge function.

**3. Create `public/sitemap-zh.xml`** -- Same approach for Chinese (`/zh/...`) URLs.

**4. Clean up `_redirects`** -- Remove the non-functional proxy rules for sitemap files since we're using static files instead. Keep only:
```
/robots.txt      /robots.txt     200
/favicon.ico     /favicon.ico    200
/google*.html    /google:splat.html   200
/*    /index.html   200
```

**5. Clean up `vite.config.ts`** -- Remove all sitemap proxy entries since they're no longer needed.

### Technical Detail

Each language sitemap will contain ~168 `<url>` entries (one per page), each with the language-specific `<loc>` and full trilingual `<xhtml:link>` hreflang annotations. The structure mirrors the existing `public/sitemap.xml` but filtered to one language's URLs only.

**Files to modify:** `public/sitemap-ms.xml` (new), `public/sitemap-zh.xml` (new), `public/_redirects`, `vite.config.ts`
**Edge function:** redeploy `supabase/functions/sitemap/index.ts`


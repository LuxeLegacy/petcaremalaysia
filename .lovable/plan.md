

## Plan: Generate Language-Specific Sitemaps

### What needs to happen

Currently `/sitemap.xml` serves one combined sitemap with all 3 languages. We need `/ms/sitemap.xml` and `/zh/sitemap.xml` to serve sitemaps containing only Malay or Chinese URLs respectively.

### Changes

**1. Edge function: `supabase/functions/sitemap/index.ts`**
- Parse a `lang` query parameter from the request URL
- When `lang=ms`: generate sitemap with only `/ms/...` URLs (still include hreflang cross-links to en/zh)
- When `lang=zh`: generate sitemap with only `/zh/...` URLs (still include hreflang cross-links)
- When no lang param (default): keep current behavior (all URLs)
- Add a new helper `generateLanguageSpecificUrl()` that outputs a single `<url>` block for only the requested language variant, but retains all hreflang alternate links

**2. Redirects: `public/_redirects`**
- Add two new redirect rules before the SPA catch-all:
  ```
  /ms/sitemap.xml  https://xdincsheohvgxewpfwlg.supabase.co/functions/v1/sitemap?lang=ms  200
  /zh/sitemap.xml  https://xdincsheohvgxewpfwlg.supabase.co/functions/v1/sitemap?lang=zh  200
  ```

**3. Vite proxy: `vite.config.ts`**
- Add dev proxy entries for `/ms/sitemap.xml` and `/zh/sitemap.xml` pointing to the edge function with the lang query param

No database changes needed. The edge function will be auto-deployed.


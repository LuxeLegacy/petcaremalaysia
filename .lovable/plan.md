

## Problem

The `_redirects` rules for `/ms/sitemap.xml` and `/zh/sitemap.xml` are being overridden by the SPA catch-all `/* /index.html 200`. The root-level `/sitemap.xml` works because it matches before the catch-all, but the nested `/ms/` paths do not.

## Fix

Move the language-specific sitemaps to root-level paths that reliably match before the catch-all:

**1. `public/_redirects`** -- Replace nested paths with root-level ones:
```
/sitemap-ms.xml  https://xdincsheohvgxewpfwlg.supabase.co/functions/v1/sitemap?lang=ms  200
/sitemap-zh.xml  https://xdincsheohvgxewpfwlg.supabase.co/functions/v1/sitemap?lang=zh  200
```
Keep the existing `/ms/sitemap.xml` rules as well (in case the platform starts supporting them), but add these as primary paths.

**2. `vite.config.ts`** -- Add matching dev proxy entries for `/sitemap-ms.xml` and `/sitemap-zh.xml`.

**3. `public/robots.txt`** -- Add sitemap declarations pointing to the new working URLs:
```
Sitemap: https://petcaremalaysia.com/sitemap.xml
Sitemap: https://petcaremalaysia.com/sitemap-ms.xml
Sitemap: https://petcaremalaysia.com/sitemap-zh.xml
```

No edge function changes needed -- the existing `?lang=ms` and `?lang=zh` parameters already work.


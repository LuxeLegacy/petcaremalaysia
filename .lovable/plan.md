## Phase 2 — Technical Optimization

Quick audit findings:
- **#15 Code-split:** Already done. Every route in `src/App.tsx` uses `React.lazy()`; `vite.config.ts` has manual vendor chunks (react, ui, query, form, chart, supabase, date, carousel). Marking complete — only proposing minor tweaks.
- **#16 Cache-Control:** `public/_headers` already sets immutable 1-yr for `/assets/*`, `*.css`, `*.js`, `*.woff2` and no-cache for HTML. Will add headers for images/fonts/icons that are currently missing.
- **#17 Lazy images:** ~9 `<img>` tags in components without `loading="lazy"`. Need to add (excluding above-fold logo/hero).
- **#18 Security headers:** None present. Add via `_headers`.
- **#19 Twitter Card:** `twitter:card/url/title/description` already in prerender. Missing: `twitter:image`, `twitter:site`. Add.
- **#20 OG locale:** `og:locale` already per-page in prerender. Missing: `og:locale:alternate` for the other two languages. Add.

### Changes

**A. `public/_headers` — caching + security (`#16`, `#18`)**

Add image/font caching and security headers:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(self), camera=(), microphone=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://*.supabase.co https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://*.supabase.co https://*.lovable.app https://www.google-analytics.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'

/*.png
  Cache-Control: public, max-age=31536000, immutable
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
/*.webp
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable
/*.ico
  Cache-Control: public, max-age=86400
/*.xml
  Cache-Control: public, max-age=3600
```
CSP set permissively to avoid breaking Supabase/GA/inline styles used by shadcn — can tighten later once monitored.

**B. Lazy-load below-fold images (`#17`)**

Add `loading="lazy"` and `decoding="async"` to `<img>` in:
- `src/pages/BlogPostPage.tsx` (lines 136, 816)
- `src/pages/BlogPage.tsx` (line 341 — card thumbnails)
- `src/components/blog/ArticleLayout.tsx` (line 121)
- `src/components/home/BlogSection.tsx` (line 68 — below fold)
- `src/components/home/MissionSection.tsx` (line 26)
- `src/components/assessment/SummaryScreen.tsx` (line 340)

Skip: `Header.tsx`, `Footer.tsx` logos and `HomeSections.tsx` line 15 (above fold) — keep eager.

**C. `scripts/prerender.mjs` + `index.html` — social tags (`#19`, `#20`)**

In `buildHead()` and `index.html`:
- Add `twitter:image` (use `${SITE}/og-image.png` fallback, same as og:image).
- Add `twitter:site` = `@petcaremalaysia`.
- Add `og:locale:alternate` for the two non-active languages on every page.

### Out of scope
- #15 considered complete; no rebuild of routing needed.
- CSP hashes/nonces deferred (would require build pipeline change). Unsafe-inline kept until then.

### Validation
- After deploy: spot-check `curl -I https://petcaremalaysia.com/assets/<hash>.js` for `Cache-Control: immutable`, `curl -I /` for security headers, view-source for new twitter/og tags, Lighthouse pass for lazy-load.

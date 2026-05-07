# Bundle Size & Caching Fix

## Goal
Cut the 4MB JS bundle to small per-route chunks and enable browser/CDN caching.

## Changes

### 1. Route-level code splitting (`src/App.tsx`)
Convert all 22 page imports to `React.lazy()` and wrap `<Routes>` in `<Suspense>` with a lightweight fallback. Keep `Index` (homepage) eagerly loaded so the LCP route stays instant; lazy-load everything else (CityPage, BlogPage, BlogPostPage, QAPage, StateQAPage, AssessmentPage, AdminPage, EmergencyGuidePage, PAAArticleRouter, SearchPage, CategoryPage, DogDentalRouter, UrinaryRouter, NotFound, VetClinicsPage, LocationsPage, ServicesPage, SitemapPage, TermsPage, PrivacyPage, DisclaimerPage).

Result: each route ships its own ~50-200KB chunk instead of one 4MB blob.

### 2. Manual vendor chunks (`vite.config.ts`)
Add `build.rollupOptions.output.manualChunks` to split big libs into long-cacheable chunks:
- `react-vendor`: react, react-dom, react-router-dom
- `ui-vendor`: all `@radix-ui/*`, lucide-react, cmdk, sonner, vaul
- `query-vendor`: @tanstack/react-query, react-helmet-async
- `form-vendor`: react-hook-form, @hookform/resolvers, zod
- `chart-vendor`: recharts (heavy — only loads on pages that import it)
- `supabase-vendor`: @supabase/supabase-js
- `date-vendor`: date-fns, react-day-picker

Also set `build.chunkSizeWarningLimit: 600` and `build.cssCodeSplit: true`.

### 3. Long-term caching headers (`public/_headers`)
Lovable hosting honors a Netlify-style `_headers` file. Add:

```text
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/
  Cache-Control: public, max-age=0, must-revalidate
```

Vite emits hashed filenames into `/assets/`, so 1-year immutable caching is safe. HTML stays revalidated so prerendered title/canonical/JSON-LD updates ship instantly.

### 4. Verification
- Run `npm run build` and confirm no single chunk > 600KB.
- Confirm `dist/_headers` exists in output (files in `public/` are copied verbatim).
- Spot-check `dist/index.html` still references hashed `/assets/*.js` files.

## Out of scope
- No changes to page component logic, routing structure, or prerender script.
- No removal of dependencies (could be a follow-up if recharts/embla aren't actually used everywhere).

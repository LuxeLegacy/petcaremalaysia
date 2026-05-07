## Problem

`index.html` ships with `<html lang="en">`. The prerender script correctly rewrites it to `lang="ms"` / `lang="zh"` for prerendered MS/ZH routes, and `SEOHead` updates it via Helmet on pages that mount it. But:

1. Not every page renders `SEOHead` (e.g. several routers/landing pages rely on the default).
2. After client-side navigation between languages (e.g. user switches EN → MS via the language switcher), `document.documentElement.lang` is never updated.
3. Any non-prerendered SPA fallback under `/ms/*` or `/zh/*` keeps `lang="en"`.

## Fix

Single source of truth for the runtime `<html lang>`: update it from `LanguageContext` whenever the detected language changes.

### Change 1 — `src/contexts/LanguageContext.tsx`
In `LanguageProviderInner`, add an effect that syncs the attribute:

```ts
useEffect(() => {
  document.documentElement.lang = language;
}, [language]);
```

This guarantees `<html lang>` matches `/ms/` → `ms` and `/zh/` → `zh` on every route, including SPA fallback and post-navigation changes, and `en` on `/` or `/en`.

### Change 2 — verify prerender (no code change expected)
`scripts/prerender.mjs` line 256 already does `html.replace(/<html lang="[^"]*">/, …)` per language. Confirm all MS/ZH route loops pass `lang` correctly (they do — `LANGS = ['en','ms','zh']`). No change needed.

### Out of scope
- `SEOHead` already sets `<html lang>` via Helmet; leave as-is — it stays consistent with the context update.
- Hreflang tags and canonicals already correct.

## Verification

1. Build and inspect a few prerendered files:
   - `dist/ms/index.html` → `<html lang="ms">`
   - `dist/zh/selangor/kajang/index.html` → `<html lang="zh">`
   - `dist/index.html` → `<html lang="en">`
2. In preview, navigate `/` → `/ms` via the language switcher and confirm `document.documentElement.lang` flips to `ms` (DevTools).
3. Hard-load `/zh/blog` (SPA fallback) and confirm `lang="zh"` after hydration.

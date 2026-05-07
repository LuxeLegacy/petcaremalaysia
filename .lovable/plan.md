# Close remaining prerender gaps for unique titles

The prerender script already writes 786 per-route HTML files with unique `<title>`, meta description, canonical, hreflang, OG tags, H1, and intro snippet. Four route groups still ship the default homepage `<title>` because they aren't enumerated in the script. This plan adds them and fixes one slug bug.

## What gets added

Update `scripts/prerender.mjs` to additionally render:

1. **Blog posts** — 22 slugs from `src/pages/BlogPage.tsx` × 3 languages = 66 pages. Path: `/blog/:slug`. Title pattern: `{Article Title} — Pet Emergency Guide Malaysia | PetCareMY`. Description pulled from the existing post metadata in BlogPage.tsx.
2. **PAA category hubs** — 12 categories × 3 languages = 36 pages. Path: `/category/:slug`. Categories extracted from `src/data/paa/*.ts` (the `category` field on each article).
3. **Legal pages** — `/terms`, `/privacy`, `/disclaimer`. English only (legal pages are not localised today). 3 pages.
4. **Search page** — `/search`. English only. 1 page.

Net add: ~106 additional prerendered HTML files. New total: ~892.

## Bug fix

Urinary standalone `emergency-signs.ts` (no species prefix) currently writes to `/urinary-tract-disease/emergency/signs/index.html` because the parser splits on the first dash. Fix the urinary loop to special-case standalone slugs (no `cats-`/`dogs-` prefix) and route them to `/urinary-tract-disease/{slug}` directly.

## Title patterns (direct response style)

- **Blog posts**: use the existing post `title` + `| PetCareMY` suffix; description from the post's existing `excerpt` field.
- **Categories**: `{Category Name} — Pet Care Guides Malaysia | PetCareMY` / `Panduan Penjagaan Haiwan {Category} | PetCareMY` / `{Category}马来西亚宠物护理指南 | PetCareMY`.
- **Legal**: `Terms of Service | PetCare Malaysia`, `Privacy Policy | PetCare Malaysia`, `Disclaimer | PetCare Malaysia`.
- **Search**: `Search Pet Care Guides — PetCare Malaysia`.

All retain the existing hreflang trio, canonical, OG tags, and an off-screen H1 + intro snippet for crawlers.

## Files touched

- `scripts/prerender.mjs` — add blog/category/legal/search loops, fix urinary standalone slug routing.

No source code changes, no React changes, no new dependencies. Build pipeline already runs the script automatically (`npm run build`).

## Verification

After implementation: run `npm run build`, then spot-check titles on:
- `dist/blog/pet-emergency-guide-malaysia/index.html`
- `dist/category/emergency/index.html`
- `dist/terms/index.html`
- `dist/urinary-tract-disease/emergency-signs/index.html` (bug fix)

Each should show a unique `<title>` instead of the homepage default.

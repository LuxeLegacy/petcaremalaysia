# Fix 2 Broken Q&A Articles (404)

## Root cause

Both indexed URLs reference Q&A article slugs that don't match what the app/prerender produces:

1. **`/qa/article/what-vaccines-do-dogs-need-malaysia`** — Sitemaps and `all-urls.csv` use this slug, but the actual article (`src/data/paa/en-dog-vaccines.ts`) is registered as `what-vaccines-dogs-need-malaysia` (no "do"). Two related PAA articles also internally link to the wrong slug.

2. **`/qa/article/how-to-adopt-pet-malaysia`** — The article exists in `en-pet-adoption.ts` with matching slug and is registered. The 404 is most likely a stale prerender / cached build artifact. We will re-verify after the build.

## Fix strategy: restore canonical content (preferred over 301)

Restore the indexed URLs so they 200 with their full article content. This preserves accumulated SEO signals.

### 1. Align the dog-vaccines slug to match the indexed URL

Update the article slug from `what-vaccines-dogs-need-malaysia` → `what-vaccines-do-dogs-need-malaysia` (match what Google has indexed and what's in sitemaps).

Files to edit:
- `src/data/paa/en-dog-vaccines.ts` — change `slug` field
- `src/data/paa/en-best-dog-breeds.ts` — fix internal `relatedQuestions` link
- `src/data/paa/en-pet-adoption.ts` — fix internal `relatedQuestions` link

(The MS and ZH variants of dog-vaccines use their own translated slugs; sitemap-ms.xml and sitemap-zh.xml use `vaksin-yang-diperlukan-anjing-malaysia` and `ma-lai-xi-ya-gou-xu-yao-shen-me-yi-miao` respectively — verify those match `ms-dog-vaccines.ts` and `zh-dog-vaccines.ts`.)

### 2. Belt-and-suspenders 301 redirect for the old slug

Add a client-side redirect inside `PAAArticleRouter.tsx`: if the requested slug is `what-vaccines-dogs-need-malaysia` (the old one), `Navigate replace` to `/qa/article/what-vaccines-do-dogs-need-malaysia`. This catches any external backlinks still using the old slug.

### 3. Re-verify the adoption URL

After the next prerender run, confirm `dist/qa/article/how-to-adopt-pet-malaysia/index.html` exists and contains the article HTML + Article JSON-LD. If it's still missing, the issue is in `extractPaaSlugs()` or `writeRoute()`. In that case, add a small console log + targeted fix so the file is emitted.

### 4. Update sitemaps and CSVs only if needed

Sitemaps already point at `what-vaccines-do-dogs-need-malaysia`, which after fix #1 will be the live slug — no sitemap change required. `public/all-urls.csv` already matches.

## Out of scope

- No content rewriting, no design changes.
- No changes to MS/ZH article files unless slug mismatch is found during verification.
- No changes to the Supabase sitemap edge function unless it emits a wrong slug.

## Verification checklist

- `bun run build` succeeds.
- `dist/qa/article/what-vaccines-do-dogs-need-malaysia/index.html` exists with Article JSON-LD.
- `dist/qa/article/how-to-adopt-pet-malaysia/index.html` exists with Article JSON-LD.
- Visiting `/qa/article/what-vaccines-dogs-need-malaysia` (old slug) in the SPA redirects to the new slug.
- No TypeScript errors from internal `relatedQuestions` slug changes.


# Complete Remaining PAA System Features

## Task 1: Sync public/sitemap.xml (was interrupted)

Replace the entire `public/sitemap.xml` by calling the live sitemap edge function and writing its XML output verbatim. This expands the file from ~1,200 lines to ~4,600 lines covering all 474 URLs with full hreflang annotations.

- File: `public/sitemap.xml` (full rewrite)

---

## Task 2: Homepage — 12 PAA Category Cards

Add a new section on the homepage below the hero that displays 12 category cards. Each card shows an icon, category title, article count, and links to the category page.

The 12 categories:
1. Pet Insurance
2. Dog Care
3. Cat Care
4. Vet Care
5. Pet Nutrition
6. Grooming
7. Vaccines & Health
8. Adoption
9. Pet Travel
10. Pest & Parasite Control
11. Pet Food
12. Senior & Emergency Care

- Create `src/components/home/PAACategoryCards.tsx`
- Edit `src/components/home/HomeSections.tsx` to add the section after the hero

---

## Task 3: Homepage — Search Bar with Autocomplete

Add a search input (with live autocomplete dropdown) in the homepage hero area. As the user types, it filters across all 30+ PAA article titles and shows matching results. Selecting a result navigates to that article URL (respecting the current language prefix).

- Create `src/components/home/PAASearchBar.tsx`
- Edit `src/components/home/HomeSections.tsx` to embed the search bar in the hero section

---

## Task 4: Search Page (/search?q=)

A dedicated page that reads the `q` query parameter, filters all PAA articles by title, keywords, and category, and displays paginated results with article cards.

- Create `src/pages/SearchPage.tsx`
- Edit `src/App.tsx` to add routes `/search` and `/:lang/search`

---

## Task 5: Category Pages (/category/[slug])

Dedicated SEO-optimised pages per category (e.g., `/category/pet-insurance`, `/category/dog-care`) that list all articles in that category. Reuses the existing `PAAArticleListing` component with a pre-selected category filter.

- Create `src/pages/CategoryPage.tsx`
- Edit `src/App.tsx` to add routes `/category/:slug` and `/:lang/category/:slug`

---

## Task 6: Scale to 60 PAA Articles (30 new articles)

Create 10 new topics, each authored in EN, MS, and ZH (30 new data files total). New topics:

1. Pet boarding/kennel costs
2. Pet dental care costs
3. Pet microchipping Malaysia
4. Pet training classes cost
5. Senior pet care guide
6. Pet allergy treatment
7. Pet spaying/neutering cost
8. Pet emergency first aid kit
9. Pet licensing requirements Malaysia
10. Pet-friendly hotels Malaysia

For each topic:
- Create `src/data/paa/en-[slug].ts`
- Create `src/data/paa/ms-[slug].ts`
- Create `src/data/paa/zh-[slug].ts`
- Register all 30 new articles in `src/data/paa/index.ts`

Then update the sitemap edge function (`supabase/functions/sitemap/index.ts`) to add the 10 new `paaArticleGroups` entries, and re-sync `public/sitemap.xml`.

---

## Technical Notes

- All new routes follow the `/:lang/` prefix pattern (en/ms/zh) already established in `src/App.tsx`
- Search and category pages import from `allArticles` export in `src/data/paa/index.ts` — client-side filtering, no backend required
- Category pages pass a `defaultCategory` prop to the existing `PAAArticleListing` component
- The search bar uses the `useNavigate` hook from react-router-dom to redirect to `/search?q=...`
- The sitemap sync is always the final step after new articles are registered

## Implementation Order

1. Sync `public/sitemap.xml`
2. PAA Category Cards on homepage
3. Search Bar on homepage
4. Search Page
5. Category Pages
6. 30 new PAA articles (10 topics x 3 languages)
7. Sitemap edge function update + re-sync `public/sitemap.xml`

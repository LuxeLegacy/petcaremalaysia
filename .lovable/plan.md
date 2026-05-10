# Fix blank /services/* pages

## Root cause

The `/services` hub on `ServicesPage.tsx` links to 7 sub-routes (`/services/emergency`, `/services/vet`, `/services/grooming`, `/services/boarding`, `/services/adoption`, `/services/insurance`, `/services/nutrition`), and the Footer + HomeSections also link to them. **None of these routes exist in `src/App.tsx`** — the only services route is `/services` itself. Every `/services/<slug>` URL therefore falls through to the `*` catch-all and renders `NotFound`, which appears blank-ish to users.

This is unrelated to the earlier vendor-chunk crash; it is a missing-routes problem.

## Plan

1. Create one reusable page component `src/pages/ServiceDetailPage.tsx` that:
   - Reads `:slug` from the URL.
   - Looks up content (title, hero copy, full description, icon, color, related links) from a new data file `src/lib/serviceDetails.ts` keyed by slug, with EN / MS / ZH text.
   - Renders Header, SEOHead (with proper title/description/canonical per language), a hero, a content section in direct-response style (problem → consequence → solution → CTA), an internal-link funnel to related hubs already on the site (Vet Clinics directory, Assessment tool, Emergency Guide, Insurance section, Blog), and the existing `PeopleAlsoAskSection`.
   - Returns `<NotFound />` for unknown slugs.

2. Add the 7 slugs in `serviceDetails.ts`: `emergency`, `vet`, `grooming`, `boarding`, `adoption`, `insurance`, `nutrition`. Copy follows the project's Dan Kennedy / Gary Halbert direct-response rules (fear, greed, FOMO, Malaysian RM facts) and the medical-safety constraint (no DIY/dosing for emergency and vet pages).

3. Register routes in `src/App.tsx` (lazy-loaded, like other pages):
   ```
   /services/:slug
   /:lang/services/:slug
   ```
   Placed before the catch-all `*` route.

4. Add the new URLs to the static sitemaps (`public/sitemap-urls.csv`, `public/all-urls.csv`, `public/sitemap-ms.xml`, `public/sitemap-zh.xml`) so they get indexed.

5. Verify on the live preview that `/services/emergency`, `/services/vet`, `/services/grooming`, `/ms/services/emergency`, `/zh/services/emergency` all render content (not the blank NotFound), and that header/footer links work.

## Technical details

- Reuse existing components (`Header`, `Footer`, `SEOHead`, `PeopleAlsoAskSection`, `CostCTA`, `MalaysiaCostTable` where relevant) — no new UI primitives.
- Insurance page links to existing `InsuranceSection` content; Emergency page links to `/assessment` and `/emergency-guide`; Vet page links to `/vet-clinics`; Nutrition / Grooming / Boarding / Adoption pages link to the city directory and blog posts.
- All copy localized in EN, MS, ZH using corner brackets 「」 for ZH quotes.
- Single consolidated FAQPage schema per page (≤6 Q&As) per project rules.
- No homepage changes. No backend or DB changes.

## Expected outcome

All `/services/<slug>` URLs render full direct-response landing pages in the active language instead of blank NotFound, and existing footer/home/services-hub links work end to end.

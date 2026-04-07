

# Vet Clinic Directory Page

## What
A new `/vet-clinics` page that lists all vet clinics from the database, with state and city dropdown/search filters. Users can browse the full directory or narrow down by location.

## New Files

### 1. `src/hooks/useAllVetClinics.ts`
- Fetches all clinics from `vet_clinics` table (no city/state filter)
- Extracts unique states and cities for filter dropdowns

### 2. `src/pages/VetClinicsPage.tsx`
- Full-page layout with Header/Footer/SEOHead
- Hero section with title "Vet Clinics in Malaysia"
- Two filter controls: State dropdown, City dropdown (filtered by selected state)
- Results grid reusing the same clinic card layout from CityPageContent (name, address, phone, email, website, badges)
- Shows count of matching clinics
- Empty state when no results

### 3. App.tsx route
- Add `/vet-clinics` route (before `/:lang` catch)

## UI Details
- State filter: Select dropdown listing all unique states from data
- City filter: Select dropdown listing cities within selected state (or all cities if no state selected)
- Clinic cards: Same design as city page cards (name, address, phone, email, website buttons, emergency/24-7 badges)
- Results count shown above grid
- Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop

## Technical Notes
- Query fetches all records ordered by state, city, then rating desc
- Client-side filtering for state/city (dataset is ~166 records, no need for server-side)
- Reuses existing UI components (Button, Input, Card, Select)


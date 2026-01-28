

# Connect Emergency Vets to Real Database

## Overview

Currently, the "Emergency Vets Near You" section on the assessment results page displays **placeholder/fake data**. The database already contains real Malaysian vet clinics with accurate details. This plan connects the component to live data.

## Current State

- **Placeholder data**: Uses hardcoded template strings like `${city} Emergency Veterinary Clinic`
- **Real data available**: Database has 12+ clinics across Shah Alam, Kuala Lumpur, Petaling Jaya, Johor Bahru, and Georgetown
- **Hook ready**: `useVetClinics` hook exists but is not integrated into the assessment flow

## Implementation

### 1. Update NearbyVetsSection Component

**File**: `src/components/assessment/NearbyVetsSection.tsx`

Changes:
- Import and use the existing `useVetClinics` hook
- Add loading and empty states for better UX
- Display real clinic data including:
  - Actual clinic names
  - Real addresses and phone numbers
  - Star ratings and review counts
  - 24-hour and emergency service badges
  - Website links when available
- Prioritize emergency clinics at the top of the list
- Limit display to 3-5 clinics for readability

### 2. Enhanced Display Features

- **Emergency badge**: Highlight clinics marked as `is_emergency: true`
- **24-hour indicator**: Show green badge for 24-hour clinics
- **Star rating**: Display rating with review count
- **Services tags**: Show available services (Emergency Care, Surgery, etc.)
- **Website button**: Add button to open clinic website when available
- **Fallback message**: Show helpful message when no clinics found for the user's location

## Data Flow

```text
User completes assessment
         |
         v
Results page loads with city/state
         |
         v
useVetClinics(city, state) fetches from database
         |
         v
Display real clinics sorted by rating
         |
         v
User can call, get directions, or visit website
```

## What Users Will See

**Before** (placeholder):
- Fake clinic names like "Shah Alam Emergency Veterinary Clinic"
- Fake phone numbers like "+60 3-1234 5678"
- No ratings or real services

**After** (real data):
- Actual clinics: "Shah Alam Veterinary Hospital", "PJ Animal Medical Centre"
- Real phone numbers: "+60 3-5510 1234"
- Star ratings: "4.8 stars (127 reviews)"
- Real services: "Emergency Care, Surgery, Vaccinations"

---

## Technical Notes

- The hook uses case-insensitive matching (`ilike`) for city/state lookups
- Results are sorted by rating (highest first)
- Emergency clinics will be prioritized in the display order
- If no clinics found for a location, a helpful fallback message will be shown suggesting the user search manually


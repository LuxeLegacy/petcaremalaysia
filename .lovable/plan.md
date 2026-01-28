
# Plan: Change Entry Screen from Postcode to City/State Selection

## Overview
Replace the current postcode text input with two dropdown selectors for State and City. This provides a better UX by letting users directly select their location rather than entering a postcode.

## Current Implementation
- Entry screen asks for a 5-digit Malaysian postcode
- `lookupPostcode()` function converts postcode to city/state
- State stored in: `zipcode`, `city`, `state` fields
- Validation requires valid postcode + resolved city

## Proposed Changes

### 1. Update EntryScreen Component
**File:** `src/components/assessment/EntryScreen.tsx`

Replace postcode input with:
- **State dropdown** - List of 16 Malaysian states
- **City dropdown** - Populated dynamically based on selected state
- Keep the same card layout and styling
- Remove postcode-related validation

UI Structure:
```text
┌─────────────────────────────────────────┐
│     ⚠️ Every minute counts              │
│                                         │
│   Free Pet Emergency Assessment         │
│   Get instant triage recommendations    │
│                                         │
│   Select your state                     │
│   ┌───────────────────────────────┐     │
│   │ Choose state...            ▼  │     │
│   └───────────────────────────────┘     │
│                                         │
│   Select your city                      │
│   ┌───────────────────────────────┐     │
│   │ Choose city...             ▼  │     │
│   └───────────────────────────────┘     │
│                                         │
│   [    Start Free Assessment     ]      │
│                                         │
│   Powered by 2.3M ER cases...           │
└─────────────────────────────────────────┘
```

### 2. Update Props Interface
**File:** `src/components/assessment/EntryScreen.tsx`

```typescript
// Before
interface EntryScreenProps {
  zipcode: string;
  city: string;
  state: string;
  onZipcodeChange: (zipcode: string) => void;
  onStart: () => void;
}

// After
interface EntryScreenProps {
  city: string;
  state: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
  onStart: () => void;
}
```

### 3. Update useAssessment Hook
**File:** `src/hooks/useAssessment.ts`

Changes:
- Remove `setZipcode` function (no longer needed)
- Add `setLocation(city, state)` function or allow direct field updates
- Update `isStepValid(0)` to check `!!state.city && !!state.state` instead of postcode validation
- Keep `zipcode` field in state but make it optional (empty string default)

### 4. Update AssessmentContainer
**File:** `src/components/assessment/AssessmentContainer.tsx`

- Update EntryScreen usage to pass new props
- Replace `setZipcode` with `updateField('city', ...)` and `updateField('state', ...)`

### 5. Create Location Data Helpers
**File:** `src/lib/locationUtils.ts`

Add new helper functions:
```typescript
// Get unique list of states from cityData
export function getStates(): string[]

// Get cities filtered by state
export function getCitiesByState(state: string): string[]
```

### 6. Update Database Save (Optional)
The `zipcode` field in `assessment_leads` table can remain nullable (already is). We'll save empty string for zipcode when using city/state selection.

---

## Technical Details

### States List (derived from cityData.ts)
The 16 Malaysian states available:
- W.P. Kuala Lumpur
- Selangor
- Johor
- Penang
- Perak
- Sarawak
- Sabah
- Melaka
- Negeri Sembilan
- Kedah
- Kelantan
- Terengganu
- Pahang
- Perlis
- Labuan

### Dropdown Component
Use the existing Radix UI Select component from `@/components/ui/select` for consistent styling.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/assessment/EntryScreen.tsx` | Replace postcode input with state/city dropdowns |
| `src/hooks/useAssessment.ts` | Update validation logic, remove postcode dependency |
| `src/components/assessment/AssessmentContainer.tsx` | Update EntryScreen props |
| `src/lib/locationUtils.ts` | Add `getStates()` and `getCitiesByState()` helpers |

---

## Validation Logic

**Before:**
```typescript
const isValid = isValidPostcode(zipcode) && !!city;
```

**After:**
```typescript
const isValid = !!state && !!city;
```

---

## Implementation Order

1. Add helper functions to `locationUtils.ts`
2. Update `EntryScreen.tsx` with new UI
3. Update `useAssessment.ts` validation
4. Update `AssessmentContainer.tsx` props
5. Test the flow end-to-end

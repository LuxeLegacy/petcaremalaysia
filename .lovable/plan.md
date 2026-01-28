
# Pet Emergency Assessment Tool Implementation Plan

## Overview

Build a comprehensive 17-step pet emergency triage tool with user contact collection and a high-converting results page using Dan Kennedy and Gary Halbert direct response copywriting principles.

---

## Complete Assessment Flow

### Entry Screen
- Location input (postcode/zipcode)
- Urgency messaging: "Every minute counts in a pet emergency"
- "Start Free Assessment" CTA button

### Questions 1-17

| Step | Question | Options |
|------|----------|---------|
| 1 | What type of pet? | Dog, Cat |
| 2 | What breed? | Dropdown (breed list by pet type) |
| 3 | How old is your pet? | Puppy/Kitten (0-1), Young adult (1-3), Adult (3-7), Senior (7+) |
| 4 | What is your pet's sex? | Male, Female |
| 5 | Is your pet spayed/neutered? | Yes, No, Not sure |
| 6 | What is your pet's weight? | Small (<5kg), Medium (5-10kg), Large (10-25kg), Extra Large (25kg+) |
| 7 | Does your pet have existing conditions? | Multi-select checkboxes (Heart disease, Diabetes, Kidney disease, Allergies, Cancer, Arthritis, None known) |
| 8 | Has your pet recently ingested anything unusual? | Chocolate, Medication, Plants, Chemicals/poison, None/unknown |
| 9 | Where does your pet typically stay? | Indoor only, Outdoor only, Both indoor/outdoor |
| 10 | Is your pet insured? | Yes, No, Not sure |
| 11-12 | (Buffer steps or additional questions) | TBD |
| 13 | Is your pet breathing normally? | Yes, normal; Labored/difficult; Very rapid; Weak/shallow |
| 14 | Is your pet alert and responsive? | Fully alert; Lethargic/weak; Disoriented; Unresponsive |
| 15 | Is there any bleeding? | None; Minor/controlled; Moderate; Severe/uncontrolled |
| 16 | How long has this been happening? | Just now (<30min); 1-6 hours; 6-24 hours; More than 24 hours |
| 17 | Summary + Description | Pet Profile Summary (editable), Free-text description, Photo upload (optional, max 5) |

### Contact Collection Screen (After Step 17)
Before showing results, collect:
- **Your Name** (required)
- **Email Address** (required)
- **Phone Number** (optional)
- **Pet's Name** (required)

### Results Page
Display personalized triage results with:
- User's name, email, pet's name
- Location (city/state from zipcode)
- Urgency level assessment
- Recommended actions
- Nearby emergency vets
- Product/service sections (placeholders for future)

---

## File Structure

```text
src/
├── pages/
│   └── AssessmentPage.tsx          # Main assessment page with routing
│   └── AssessmentResultsPage.tsx   # Results display page
├── components/
│   └── assessment/
│       ├── AssessmentContainer.tsx      # Main state management container
│       ├── AssessmentProgress.tsx       # Progress bar component
│       ├── AssessmentHeader.tsx         # Header with step counter
│       ├── EntryScreen.tsx              # Initial zipcode entry
│       ├── QuestionCard.tsx             # Reusable question card component
│       ├── OptionButton.tsx             # Selectable option button
│       ├── OptionCheckbox.tsx           # Multi-select checkbox option
│       ├── BreedSelector.tsx            # Breed dropdown by pet type
│       ├── SummaryScreen.tsx            # Step 17 summary + description
│       ├── ContactCollectionForm.tsx    # Pre-results contact form
│       ├── ResultsDisplay.tsx           # Main results component
│       ├── UrgencyIndicator.tsx         # Visual urgency level
│       ├── InsuranceSection.tsx         # Placeholder for insurance CTAs
│       ├── AffiliateProductsSection.tsx # Placeholder for affiliate products
│       ├── OwnProductsSection.tsx       # Placeholder for own products
│       └── NearbyVetsSection.tsx        # Emergency vets based on location
├── lib/
│   └── assessmentData.ts           # Questions, options, breed lists
│   └── assessmentLogic.ts          # Triage scoring/urgency calculation
│   └── locationUtils.ts            # Zipcode to city/state lookup
└── hooks/
    └── useAssessment.ts            # Assessment state management hook
```

---

## Technical Implementation

### State Management
```typescript
interface AssessmentState {
  // Entry
  zipcode: string;
  city: string;
  state: string;
  
  // Pet Profile
  petType: 'dog' | 'cat' | null;
  breed: string;
  age: string;
  sex: 'male' | 'female' | null;
  fixed: 'yes' | 'no' | 'not_sure' | null;
  weight: string;
  conditions: string[];
  ingestion: string;
  environment: string;
  insured: 'yes' | 'no' | 'not_sure' | null;
  
  // Vital Signs
  breathing: string;
  alertness: string;
  bleeding: string;
  duration: string;
  
  // Description
  description: string;
  photos: File[];
  
  // Contact Info
  userName: string;
  userEmail: string;
  userPhone: string;
  petName: string;
  
  // Progress
  currentStep: number;
}
```

### Urgency Calculation Logic
Calculate urgency score based on:
- Breathing status (weight: high)
- Alertness level (weight: high)
- Bleeding severity (weight: high)
- Duration of symptoms (weight: medium)
- Ingestion type (weight: medium)
- Pre-existing conditions (weight: low)

Urgency levels: CRITICAL, HIGH, MODERATE, LOW

---

## Results Page Copywriting (Dan Kennedy / Gary Halbert Style)

### Headline Variations (Based on Urgency)

**CRITICAL:**
```text
[Pet Name] NEEDS EMERGENCY CARE RIGHT NOW
[User Name], every second counts. Here's exactly what to do...
```

**HIGH:**
```text
WARNING: [Pet Name] Shows Concerning Signs
[User Name], don't wait until it's too late. See a vet within 2 hours.
```

**MODERATE:**
```text
Good News, [User Name]: [Pet Name] Can Wait a Few Hours
But here's what smart pet owners do next...
```

**LOW:**
```text
[Pet Name] Looks Okay For Now, [User Name]
But here's how to make SURE nothing gets worse...
```

### Results Page Sections

1. **Urgency Banner**
   - Color-coded (red/orange/yellow/green)
   - Clear action statement
   - Countdown urgency for critical cases

2. **Pet Summary Card**
   - Pet name, type, breed, age
   - Location (City, State)
   - Assessment timestamp

3. **Recommended Actions**
   - Numbered steps with urgency
   - One-click call to nearest 24/7 vet
   - First aid tips if applicable

4. **Insurance Section (Placeholder)**
   ```text
   🛡️ PROTECT [Pet Name] FROM FUTURE EMERGENCIES
   Most Malaysian pet owners discover pet insurance AFTER
   a RM3,000+ vet bill. Don't be one of them.
   [Compare Insurance Plans] →
   ```

5. **Affiliate Products Section (Placeholder)**
   ```text
   🏥 ESSENTIAL SUPPLIES FOR [Pet Name]'S RECOVERY
   Products recommended by board-certified vets...
   [Coming Soon]
   ```

6. **Own Products Section (Placeholder)**
   ```text
   📘 FREE PET EMERGENCY GUIDE
   Download our 47-page guide every Malaysian pet owner needs.
   [Get Free Guide] →
   ```

7. **Nearby Emergency Vets**
   - Based on zipcode/city
   - Click-to-call functionality
   - Distance and hours displayed

---

## Routes to Add

```typescript
// In App.tsx
<Route path="/assessment" element={<AssessmentPage />} />
<Route path="/:lang/assessment" element={<AssessmentPage />} />
<Route path="/assessment/results" element={<AssessmentResultsPage />} />
<Route path="/:lang/assessment/results" element={<AssessmentResultsPage />} />
```

---

## Database (Optional Enhancement)

If lead capture is needed, create a table:

```sql
CREATE TABLE assessment_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  
  -- Contact Info
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT,
  pet_name TEXT NOT NULL,
  
  -- Location
  zipcode TEXT,
  city TEXT,
  state TEXT,
  
  -- Assessment Data (JSON)
  assessment_data JSONB,
  
  -- Results
  urgency_level TEXT,
  urgency_score INTEGER
);

-- Enable RLS
ALTER TABLE assessment_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (lead capture)
CREATE POLICY "Allow anonymous inserts" ON assessment_leads
  FOR INSERT TO anon WITH CHECK (true);
```

---

## UI/UX Design Specifications

### Visual Style (From Reference Images)
- Clean white card with subtle shadow
- Red/primary color progress bar
- Large, tappable option buttons
- "Step X of 17" indicator top-right
- "Back" button at bottom
- Footer: "Powered by 2.3M ER cases + Board-certified vet rules"

### Mobile-First Approach
- Full-width cards on mobile
- Large touch targets (min 44px)
- Sticky progress bar
- Swipe gestures for navigation

### Accessibility
- High contrast text
- Clear focus states
- Screen reader compatible
- Keyboard navigation support

---

## Implementation Order

1. Create assessment data structures and types
2. Build reusable UI components (OptionButton, QuestionCard, Progress)
3. Implement EntryScreen with zipcode input
4. Build all 17 question screens
5. Create SummaryScreen (Step 17)
6. Build ContactCollectionForm
7. Implement results page with urgency logic
8. Add placeholder sections for products
9. Connect to existing vet clinic data
10. Add routes to App.tsx
11. Test full flow
12. (Optional) Add database lead capture

---

## Translations Required

Add assessment translations to `src/lib/translations.ts` for:
- All question text (EN, MS, ZH)
- Option labels
- Results page copy
- CTA buttons
- Error messages

---

## Success Metrics

- Completion rate: Target >70%
- Lead capture rate: Target >80% of completions
- Time to complete: Target <3 minutes
- Bounce rate on results: Target <30%


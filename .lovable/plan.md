

# Add PetCareMalaysia CTAs to All 20 Urinary Pages

## What
Create a new `UrinaryCTA` component with 10 Dan Kennedy-style CTA variations linking to `https://petcaremalaysia.com/`. Place 2 CTAs on each of the 20 urinary pages — one mid-content and one near the bottom.

## New Component — `src/components/urinary/UrinaryCTA.tsx`

Modeled after `CostCTA.tsx` but linking to `https://petcaremalaysia.com/` with urinary/pet-health-focused copy.

**10 CTA variations** (Dan Kennedy style — fear, greed, FOMO, facts):

1. FEAR: "Your Pet's Urinary Problem Could Turn DEADLY in Hours" / "Don't wait until it's too late. Get expert guidance now."
2. FEAR: "WARNING: 73% of Pet Owners Miss These Urinary Emergency Signs" / "One missed sign = one dead pet. Are you paying attention?"
3. GREED: "Save RM500–RM3,000 by Catching Urinary Issues Early" / "Early detection = cheaper treatment. Smart owners act fast."
4. GREED: "Free Emergency Assessment That Could Save Your Pet's Life" / "No cost. No obligation. Just answers when you need them most."
5. FOMO: "4,200+ Malaysian Pet Owners Already Used This Emergency Tool" / "They got answers in 60 seconds. Why haven't you?"
6. FOMO: "This Free Pet Health Tool Won't Be Free Forever" / "Access it now while it's still available."
7. FACT: "FACT: Blocked Cat Treatment Costs RM800–RM4,000 in Malaysia" / "Knowing the signs early saves your pet AND your wallet."
8. FACT: "FACT: 1 in 4 Male Cats Will Have a Urinary Emergency" / "Is your cat next? Check symptoms now."
9. MIXED: "Love Your Pet? Prove It. Check Their Symptoms Now." / "Real pet parents don't guess. They get answers."
10. MIXED: "60 Seconds Could Save Your Pet's Life" / "Our free emergency checker tells you what to do next."

## Component Placement (4 files edited)

### `UrinaryHubPageComponent.tsx`
- CTA #1: After category cards grid (line ~57)
- CTA #2: After FAQ section (line ~71)

### `UrinaryEmergencyPage.tsx`
- CTA #1: After "What To Do Now" section (line ~65)
- CTA #2: After FAQ section (line ~84)

### `UrinarySymptomPage.tsx`
- CTA #1: After "Veterinary Evaluation" section (line ~73)
- CTA #2: After FAQ section (line ~89)

### `UrinaryConditionPage.tsx`
- CTA #1: After "Recovery Expectations" section (line ~87)
- CTA #2: After FAQ section (line ~111)

Each CTA uses a different `variant` prop so they show distinct copy on the same page.

## Technical Details
- Component mirrors `CostCTA` structure (gradient banner, icon, animated hover)
- Uses green/teal gradient instead of amber/orange to differentiate from surgery cost CTAs
- Links open in same tab (internal site) unlike CostCTA which opens external
- Variant selection: CTA #1 uses page-derived seed, CTA #2 uses seed+5 offset


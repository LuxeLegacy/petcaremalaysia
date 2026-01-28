
# Plan: Free Pet Emergency Guide Page and Assessment Results Integration

## Overview
Create a dedicated page to host the comprehensive 47-page Pet Emergency Guide HTML document and link it as a "free bonus" download from the assessment results page's `OwnProductsSection` component.

## What This Accomplishes
- Provides a fully accessible, web-viewable version of the Pet Emergency Guide
- Creates a compelling CTA in the assessment results that drives users to the guide
- Maximizes the value proposition for users who complete the assessment
- Establishes the guide as a lead magnet for future marketing efforts

---

## Implementation Steps

### 1. Create the Emergency Guide Page Component
**File: `src/pages/EmergencyGuidePage.tsx`**

Create a new page that:
- Renders the complete HTML guide content as a React component
- Uses the existing site layout (Header/Footer)
- Includes SEO metadata (title, description, canonical URL)
- Provides a "Download PDF" button for users who want an offline version
- Has a professional, print-ready styling matching the original document

The page will convert the uploaded HTML structure into React components with:
- Cover page with branding
- Table of contents with anchor navigation
- All 5 sections: Emergency First Aid, Symptoms Checklist, Poison Control, Vet Directory, and Emergency Preparedness
- Warning boxes, call-to-action boxes, and styled tables
- Print-optimized CSS media queries

### 2. Add Route to App.tsx
**File: `src/App.tsx`**

Add routes for the guide page:
```
/emergency-guide
/:lang/emergency-guide
```

### 3. Update OwnProductsSection Component
**File: `src/components/assessment/OwnProductsSection.tsx`**

Modify the existing component to:
- Link the "Get Free Guide" button to `/emergency-guide`
- Add visual enhancement (gift icon, urgency messaging)
- Use direct response copywriting to maximize clicks

### 4. Copy the HTML File to Public Folder (Optional PDF)
The HTML file will be converted into a React component. If a PDF download is needed later, the file can be hosted in the public folder.

---

## Technical Details

### Page Structure for EmergencyGuidePage
```text
+------------------------------------------+
|  Header (existing component)             |
+------------------------------------------+
|  Hero Section                            |
|  - "Free Pet Emergency Guide"            |
|  - "47-page resource for Malaysian pets" |
|  - Download PDF button                   |
+------------------------------------------+
|  Table of Contents (clickable links)     |
+------------------------------------------+
|  Section 1: Emergency First Aid          |
|  - CPR for Dogs/Cats                     |
|  - Choking, Bleeding, Snake Bites        |
|  - Heatstroke, Poisoning, Bloat          |
+------------------------------------------+
|  Section 2: Symptoms Checklist           |
|  - Respiratory, Neurological, GI         |
|  - Tables with checkboxes                |
+------------------------------------------+
|  Section 3: Poison Control Reference     |
|  - Toxic foods, plants, chemicals        |
+------------------------------------------+
|  Section 4: 24-Hour Vet Directory        |
|  - Clinics organized by Malaysian state  |
+------------------------------------------+
|  Section 5: Emergency Preparedness       |
|  - First aid kit checklist               |
|  - Pet medical records template          |
+------------------------------------------+
|  Footer (existing component)             |
+------------------------------------------+
```

### Files to Create
| File | Purpose |
|------|---------|
| `src/pages/EmergencyGuidePage.tsx` | Main guide page with all content |
| `src/components/guide/GuideSection.tsx` | Reusable section wrapper |
| `src/components/guide/WarningBox.tsx` | Warning/alert box component |
| `src/components/guide/SymptomTable.tsx` | Styled checklist table |

### Files to Modify
| File | Changes |
|------|---------|
| `src/App.tsx` | Add `/emergency-guide` routes |
| `src/components/assessment/OwnProductsSection.tsx` | Link button to guide page with enhanced copy |

### OwnProductsSection Updated Design
The section will be updated with:
- Link component wrapping the CTA button pointing to `/emergency-guide`
- Added urgency/value messaging ("Normally RM49 - FREE for Assessment Completers")
- Enhanced visual hierarchy with gift emoji and checkmarks

---

## User Flow
```text
1. User completes pet emergency assessment
   ↓
2. Results page displays urgency level + recommendations
   ↓
3. User sees "FREE Pet Emergency Guide" section
   ↓
4. Clicks "Get Free Guide" button
   ↓
5. Opens /emergency-guide page with full 47-page content
   ↓
6. User can read online or print (print-optimized CSS)
```

---

## SEO Considerations
- Page title: "Free Pet Emergency Guide | 47-Page Resource | Pet Care Malaysia"
- Meta description: "Download our comprehensive 47-page pet emergency guide. Includes step-by-step first aid, poison control reference, and 24-hour vet directory for all Malaysian states."
- Structured data: Article + FAQPage schema
- Canonical URL: `/emergency-guide`

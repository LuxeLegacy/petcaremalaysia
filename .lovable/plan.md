
# Plan: Admin Page for Emergency Guide Opt-ins

## Overview
Add a dedicated "Guide Downloads" tab to the existing admin dashboard that displays and manages email opt-ins from the `/emergency-guide` page. This provides separate analytics and a filtered view specifically for lead magnet conversions.

## Current Situation
- Guide opt-ins are stored in `assessment_leads` table with `urgency_level = 'guide_download'`
- Currently mixed with assessment leads in the existing Leads table
- No dedicated analytics for guide downloads

---

## Implementation Steps

### 1. Create AdminGuideLeads Component
**File: `src/components/admin/AdminGuideLeads.tsx`**

A dedicated component to display guide download opt-ins with:
- Summary stats: total downloads, downloads today/this week/this month
- Searchable table with name, email, date
- Export to CSV functionality (for email marketing tools)
- Delete individual leads option

### 2. Update AdminPage with New Tab
**File: `src/pages/AdminPage.tsx`**

Add a third tab "Guide Downloads" with:
- BookOpen icon to distinguish from assessment leads
- Dedicated analytics cards for guide downloads
- Filter only `urgency_level = 'guide_download'` leads

### 3. Update Analytics Hook (Optional Enhancement)
**File: `src/hooks/useAssessmentLeads.ts`**

Add guide-specific analytics:
- `guideDownloads` count
- `guideDownloadsToday/Week/Month`
- Conversion rate from assessment to guide download

### 4. Update AdminAnalytics Component
**File: `src/components/admin/AdminAnalytics.tsx`**

Add a summary card showing guide download stats alongside assessment stats

---

## UI Layout

```text
Admin Dashboard Header
+-----------+-----------+------------------+
| Analytics |   Leads   | Guide Downloads  |  <-- New tab
+-----------+-----------+------------------+

Guide Downloads Tab Content:
+------------------------------------------+
| Summary Cards                            |
| +--------+ +--------+ +--------+ +-----+ |
| | Total  | | Today  | | Week   | |Month| |
| | 127    | | 12     | | 45     | | 89  | |
| +--------+ +--------+ +--------+ +-----+ |
+------------------------------------------+
| Search: [_______________] [Export CSV]   |
+------------------------------------------+
| Date       | Name      | Email           |
|------------|-----------|-----------------|
| 2026-02-04 | Ahmad     | ahmad@mail.com  |
| 2026-02-03 | Siti      | siti@mail.com   |
| ...        | ...       | ...             |
+------------------------------------------+
```

---

## Files to Create
| File | Purpose |
|------|---------|
| `src/components/admin/AdminGuideLeads.tsx` | Guide downloads table and stats |

## Files to Modify
| File | Changes |
|------|---------|
| `src/pages/AdminPage.tsx` | Add "Guide Downloads" tab |
| `src/hooks/useAssessmentLeads.ts` | Add guide-specific analytics |
| `src/components/admin/AdminAnalytics.tsx` | Show guide download count in summary |

---

## Technical Details

### Filtering Guide Downloads
```typescript
// Filter leads by urgency_level
const guideLeads = leads.filter(lead => lead.urgency_level === 'guide_download');
const assessmentLeads = leads.filter(lead => lead.urgency_level !== 'guide_download');
```

### Guide Downloads Table Columns
- Date (formatted)
- Name
- Email (with copy button)
- Source (from assessment_data.source)
- Actions (view details)

### Export CSV for Email Marketing
The export will generate a simple CSV with:
- Name, Email, Date
- Ready for import into Mailchimp, ConvertKit, or other email tools

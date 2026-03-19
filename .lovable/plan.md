

# Fix: Johor "Coming Soon" on /qa listing page

## Problem

The `/qa` hub page (`QAPage.tsx`) has its own `MALAYSIAN_STATES` array where Johor still has `hasData: false`. Only `StateQAPage.tsx` was updated during the previous implementation.

## Fix

**File: `src/pages/QAPage.tsx`** — line 15, change:
```typescript
{ name: 'Johor', slug: 'johor', hasData: false },
```
to:
```typescript
{ name: 'Johor', slug: 'johor', hasData: true },
```

Single line change. No other files affected.


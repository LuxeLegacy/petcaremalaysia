

# Remove "Coming Soon" state cards on /qa

All 14 Malaysian states now have content (either DB-backed Q&A or hand-written `STATE_PROFILES` fallback content via `StateProfileFallback`). The "Coming Soon" visual treatment on the `/qa` hub is no longer accurate.

## What changes

**File: `src/pages/QAPage.tsx`**

1. Set `hasData: true` for all 14 states in the `MALAYSIAN_STATES` array, since every state slug now resolves to a real content page.
2. Replace the empty `qaCount` strings with appropriate per-state badge labels:
   - DB-backed states (Selangor, Kuala Lumpur, Johor) keep their existing `258+` / `220+` Q&A counts.
   - The other 11 states get a localized **"Local Guide"** badge (EN: `Local Guide`, MS: `Panduan Tempatan`, ZH: `本地指南`) — accurate since their pages render the `StateProfileFallback` with DVS contacts, top risks, and clinic counts.
3. Remove the entire "Coming Soon" branch of `StateQACard` (the dashed-border card variant). Every card now uses the active card style with hover, MapPin icon in the primary color, and a "View Q&A / View Guide" CTA.
4. Drop the now-unused `comingSoon` and `qaForSoon` entries from the `i18n` object.
5. Tweak the description copy for non-DB states so it reads as a confident local guide (e.g. EN: `Local emergency vet contacts and pet care guide for {state}`) instead of the current "questions specific to" phrasing, which only fits DB states.

## Result

The `/qa` grid shows 14 uniformly active state cards. No dashed borders, no "Coming Soon" badges, no muted "will be available soon" copy. Three states show their Q&A count badge; the other eleven show a "Local Guide" badge. Every card is clickable and lands on a populated page.


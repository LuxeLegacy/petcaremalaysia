

# Remove Secondary CTA Buttons from Homepage Hero

## What Changes

Remove the three secondary buttons shown in the screenshot from the hero section on the homepage:
- "Find 24/7 Vet Near Me Now" (search button)
- "CALL EMERGENCY HOTLINE" (phone button)
- "Ask Pet Questions" (help button)

The primary red "Is Your Pet in Danger? Check Now" assessment CTA and everything else remains untouched.

## Technical Details

- **File**: `src/components/home/HomeSections.tsx`
- **Action**: Delete the `<div>` block (around lines 53-72) containing the three `<Button>` elements wrapped in the `flex flex-col sm:flex-row gap-4` container
- No other files or components affected


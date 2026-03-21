

# Fix Overflowing CTA Button on Mobile

## Problem
The button text "Is Your Pet in Danger? Check Now — FREE" is too long for 390px mobile viewports, causing horizontal overflow.

## Change — `src/components/home/HomeSections.tsx` (line 44)

Shorten the button text to fit mobile while keeping urgency:

```
Is Your Pet in Danger? Check Now — FREE
→
Pet Emergency? Check Now — Free
```

This cuts ~15 characters while retaining the urgency hook and CTA action.


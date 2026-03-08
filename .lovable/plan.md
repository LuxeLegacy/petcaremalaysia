

## Changes

### 1. Add logo image to Header and Footer
- Copy uploaded image to `src/assets/logo.png`
- **Header**: Replace the emoji+text logo with an `<img>` tag using the uploaded logo, sized ~40px height
- **Footer**: Same replacement

### 2. Set as favicon
- Copy uploaded image to `public/favicon.png` (overwrite existing)
- `index.html` already references `/favicon.png?v=2`, so bump to `?v=3` to bust cache

### 3. Hero section Malaysia flag colors
Malaysia flag: dark blue (`#010066`), red (`#CC0001`), yellow (`#FC0`), white. Current hero gradient is green (`hsl(145 45% 35%)` to `hsl(160 40% 40%)`).

- Change `--gradient-hero` in light mode to a blue-to-red gradient inspired by Malaysia flag: `linear-gradient(135deg, hsl(220 80% 25%) 0%, hsl(0 85% 40%) 100%)`
- Dark mode: `linear-gradient(135deg, hsl(220 80% 15%) 0%, hsl(0 80% 30%) 100%)`
- Add a yellow/gold accent to the hero trust badge or CTA area via Tailwind classes

### 4. Replace phone number with WhatsApp
Replace all instances of `+60 12-345 6789` / `tel:+60123456789` with WhatsApp link to `+60 11-5695 9227`:
- **Footer** (line 109-114): Change `href="tel:..."` to `href="https://wa.me/60115695927"`, update display text
- **HomeSections.tsx EmergencyBanner** (line 216-219): Same change
- **CityPageContent.tsx** (line 60): Update display number
- **CitySchemaMarkup.tsx** (lines 50, 92): Update telephone fields
- **translations.ts** placeholders (lines 779, 1244, 1709): Keep as placeholder format, no change needed (these are form placeholders, not the actual contact number)

**Files to modify**: `src/assets/logo.png` (new), `public/favicon.png` (overwrite), `index.html`, `src/index.css`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/home/HomeSections.tsx`, `src/components/city/CityPageContent.tsx`, `src/components/city/CitySchemaMarkup.tsx`


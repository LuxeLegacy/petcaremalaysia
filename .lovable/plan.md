

# Much Lighter Pink Theme with Dark Text Contrast

## Problem
The current theme uses a saturated dark pink gradient hero with white text — resulting in poor contrast and a heavy/gloomy look. White text (`primary-foreground: 0 0% 100%`) on pink backgrounds is hard to read.

## Strategy
1. Make the overall palette **pastel pink** — very light, airy, soft
2. Use **dark text on light backgrounds** everywhere — no white text on pink
3. Make the hero gradient light pink instead of dark pink, with dark text
4. Keep buttons readable with proper contrast

## Changes

### File 1: `src/index.css` — `:root` block

| Variable | Current | New | Reason |
|---|---|---|---|
| `--primary` | `340 55% 55%` | `340 65% 65%` | Lighter rose pink |
| `--primary-foreground` | `0 0% 100%` (white) | `340 20% 20%` (dark berry) | **Dark text on pink buttons** |
| `--accent` | `15 85% 60%` | `15 80% 65%` | Lighter coral |
| `--accent-foreground` | `0 0% 100%` (white) | `15 30% 20%` (dark) | **Dark text on accent** |
| `--sage` | `340 40% 60%` | `340 50% 75%` | Much lighter pink |
| `--terracotta` | `350 60% 60%` | `350 50% 72%` | Lighter |
| `--soft-gold` | `350 45% 75%` | `350 40% 85%` | Lighter |
| `--gradient-hero` | `hsl(340 60% 45%)→hsl(350 70% 60%)` | `hsl(350 60% 92%)→hsl(340 50% 85%)` | **Very light pastel pink gradient** |
| `--gradient-card` | `hsl(0 0% 100%)→hsl(350 25% 98%)` | `hsl(0 0% 100%)→hsl(350 30% 96%)` | Slightly more visible pink tint |

### File 2: `src/components/home/HomeSections.tsx` — Hero section
- Change `text-primary-foreground` → `text-foreground` (dark text)
- Change `text-primary-foreground/90` and `/80` → `text-foreground/80` etc.
- Change overlay from `from-primary/80 to-primary/60` → remove or use `from-white/40 to-white/20`

### File 3: `src/pages/QAPage.tsx` — Hero section
- Same pattern: swap white text classes to dark text on the light gradient hero

### File 4: `src/pages/StateQAPage.tsx` — Hero section  
- Same swap

### File 5: `src/pages/ServicesPage.tsx` — Hero section
- Same swap

### File 6: `src/pages/LocationsPage.tsx` — Hero section
- Same swap

### File 7: `src/components/home/FinalCtaSection.tsx` — CTA section
- Same swap: dark text on light pink background

### File 8: `src/components/city/CityHeroSection.tsx` — if uses gradient-hero
- Same swap

## Result
- Very light pastel pink backgrounds everywhere
- Dark berry/charcoal text for strong readability
- Buttons use dark text on medium-pink backgrounds
- No more white-on-pink contrast issues


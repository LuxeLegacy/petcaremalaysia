

# Light Pink Color Theme

Update `src/index.css` `:root` variables to a light pink palette while keeping the Malaysian identity.

## Changes (`:root` block only)

| Variable | Current | New |
|---|---|---|
| `--background` | `45 30% 97%` | `350 30% 97%` (pink-tinted white) |
| `--foreground` | `25 20% 15%` | `340 15% 20%` |
| `--card` | `0 0% 100%` | `0 0% 100%` (unchanged) |
| `--card-foreground` | `25 20% 15%` | `340 15% 20%` |
| `--popover-foreground` | `25 20% 15%` | `340 15% 20%` |
| `--primary` | `145 45% 35%` | `340 55% 55%` (rose pink) |
| `--primary-foreground` | `0 0% 100%` | unchanged |
| `--secondary` | `40 35% 92%` | `350 30% 94%` (soft pink) |
| `--secondary-foreground` | `25 20% 20%` | `340 15% 25%` |
| `--muted` | `40 20% 94%` | `350 20% 95%` |
| `--muted-foreground` | `25 15% 45%` | `340 10% 50%` |
| `--accent` | `28 85% 55%` | `15 85% 60%` (warm coral) |
| `--border` | `35 20% 88%` | `350 15% 90%` |
| `--input` | `35 20% 88%` | `350 15% 90%` |
| `--ring` | `145 45% 35%` | `340 55% 55%` |
| `--warm-cream` | `45 40% 95%` | `350 35% 96%` |
| `--sage` | `145 30% 45%` | `340 40% 60%` |
| `--terracotta` | `15 70% 55%` | `350 60% 60%` |
| `--soft-gold` | `40 60% 70%` | `350 45% 75%` |
| `--midnight` | `220 25% 20%` | `340 20% 25%` |
| `--gradient-hero` | dark blue→red | `hsl(340 60% 45%) → hsl(350 70% 60%)` (pink gradient) |
| `--gradient-warm` | cream tones | `hsl(350 30% 97%) → hsl(350 30% 94%)` |
| `--gradient-card` | white→cream | `hsl(0 0% 100%) → hsl(350 25% 98%)` |

## Scope
- Single file: `src/index.css` — light mode `:root` only
- Dark mode unchanged
- No component changes needed


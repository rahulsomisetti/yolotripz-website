# Yolotripz branding

## Where to upload files

Place PNGs in **`public/branding/`** (paths are stable — swap files without renaming):

| File | Role | Suggested size |
|------|------|----------------|
| **`logo-primary.png`** | Horizontal lockup — header, metadata reference | **~560×140** to **800×200** @2× export; wide transparent PNG preferred |
| **`logo-mark.png`** | Symbol only — footer, mobile menu, studio gate | **160×160** min square; **320×320** @2× |
| **`favicon.png`** | Browser tab + Apple touch fallback | **32×32** min; **64×64** or **180×180** for crisp tabs |
| **`og-share.png`** | Open Graph / Twitter large card | **1200×630** designed layout (or minimal branded panel) |

After replacing **`logo-primary.png`**, regenerate CSS tokens:

```bash
npm run brand:extract
```

This updates **`src/styles/brand-generated.css`** and writes a machine-readable summary to **`public/branding/last-extraction.json`**.

If assets are missing locally, generate neutral placeholders (safe to overwrite with `--force`):

```bash
npm run brand:placeholders
```

## Semantic tokens → UI

All values are **HSL components** (no `hsl()` wrapper) for Tailwind: `hsl(var(--token) / <alpha>)`.

| Token | Typical use |
|-------|----------------|
| **`--brand-primary`** | Mapped to **`--navy`** — headings, hero scrims, body text hue |
| **`--brand-accent`** | Mapped to **`--gold`** — thin highlights, eyebrow labels, warm accents |
| **`--brand-link`** | Mapped to **`--accent`** — inline links, subtle interactive text |
| **`--brand-cta`** | Mapped to **`--primary`** + **`--ring`** — primary buttons, focus rings |
| **`--brand-muted`** / **`--brand-muted-foreground`** | Secondary surfaces and supporting copy |
| **`--brand-border`** | Borders, inputs, hairlines |
| **`--brand-surface`** / **`--brand-surface-tint`** | Card white vs page ground |
| **`--brand-shadow-rgb`** | RGB triplet for soft shadows (`rgb(var(--brand-shadow-rgb) / α)`) |

Legacy Tailwind names (**`navy`**, **`gold`**, **`accent`**, **`primary`**, etc.) still work; they now **read from** these brand tokens via **`src/app/globals.css`**.

## Extraction behaviour

The script samples saturated pixels from the horizontal logo, finds dominant and secondary hue peaks, then **caps saturation** and anchors neutrals to the same hue family so the site stays **calm and consultancy-led**, not portal-neon.

If the logo is mostly grayscale or very small, the script writes **conservative defaults** (see `last-extraction.json`).

## Manual polish

After extraction, spot-check:

- **Hero / country heroes** — navy scrims still read against photography; tweak photo exposure before pushing brand darker.
- **Primary button on tinted backgrounds** — if contrast feels low, nudge **`--brand-cta`** lightness in `brand-generated.css` by ±2–4%.
- **OG image** — replace **`og-share.png`** with a proper editorial layout (team, office, or typographic lockup); the placeholder is only structural.

## Code touchpoints

- **`src/lib/brand/assets.ts`** — public paths
- **`src/components/brand/SiteLogo.tsx`** — responsive `next/image` lockups
- **`src/components/layout/SiteHeader.tsx`** / **`SiteFooter.tsx`**
- **`src/lib/seo.ts`** — favicon + OG/Twitter images
- **`src/components/ui/button.tsx`** — CTA / secondary / ghost mapped to tokens

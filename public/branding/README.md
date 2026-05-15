# `/public/branding`

Upload your final PNGs here (see **`docs/BRANDING.md`**).

Quick start:

1. Add **`logo-primary.png`**, **`logo-mark.png`**, **`favicon.png`**, **`og-share.png`** (or run `npm run brand:placeholders` once for neutral stand-ins).
2. Run **`npm run brand:extract`** after updating the horizontal logo so site colors follow your mark.

Do not rename files — paths are referenced in **`src/lib/brand/assets.ts`** and **`src/lib/seo.ts`**.

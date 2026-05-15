# Yolotripz — local image requirements

**Purpose:** Replace the temporary neutral placeholders (currently identical small JPEGs) with **your own photography**. All paths live under **`public/images/`** and are imported via **`src/lib/site-images.ts`**.

**Visual direction (all assets):**

- Premium, editorial, calm — **consultancy**, not package-tour marketing.
- Natural light, shallow depth-of-field where possible; **avoid** neon gradients, clip-art, and generic “stock smile” poses.
- Prefer **real office / counselling / family-student moments** shot in Coastal Karnataka context when possible.

**Formats:** Code paths use **`.jpg`** only (`siteImages`). Export as high-quality JPEG (or convert WebP/PNG to `.jpg` with the **exact** filenames below). Do not use `public/` in URLs — use `/images/...`.

**Focal safety:** Compose with **subject slightly above centre** so `object-cover` crops on mobile still feel intentional.

---

## Hero (`/public/images/hero/`)

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `homepage-hero.jpg` | **1920 × 1080** (min); ideal **2400 × 1350** | Homepage hero (`HeroSection`) — full-bleed under navy + gradients | Counselling table or lounge: **student + parent + counsellor**, candid, warm skin tones, shallow DOF |
| `september-intake.jpg` | **1920 × 900** | Homepage “September intake” band (`SeptemberIntakeSection`) | Calendar / desk planning motif — still **human** (hands marking dates, open notebook), not clipart |

---

## Study abroad (`/public/images/study-abroad/`)

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `hero.jpg` | **1920 × 1000** | `/study-abroad` hero (`StudyAbroadHero`) | Wide interior or campus walkway in soft light; **PG decision energy**, not tourist skyline collage |

---

## Visa (`/public/images/visa/`)

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `hero.jpg` | **1800 × 960** | `/visa-services` hero (`VisaServicesHero`) — low-opacity backdrop | Organised documents + **calm hands** (paperwork clarity), cool neutrals, **no** passport montage cliché |

---

## Travel (`/public/images/travel/`)

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `hero.jpg` | **1800 × 960** | `/travel-services` hero (`TravelServicesHero`) | Premium travel **supporting** study (e.g. airport lounge silhouette, single suitcase, window seat soft light) — not holiday brochure |

---

## Countries — cards (`/public/images/countries/`)

Used on homepage **country comparison** cards (`CountryComparisonSection`). One image per slug.

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `uk-card.jpg` | **1200 × 800** | UK destination card | London/Oxbridge **atmospheric** detail (spire, library interior) — moody, not postcard collage |
| `australia-card.jpg` | **1200 × 800** | Australia card | Open campus / harbour distance haze — **optimistic but restrained** |
| `new-zealand-card.jpg` | **1200 × 800** | New Zealand card | Landscape + **negative space** (calm, wide) |
| `canada-card.jpg` | **1200 × 800** | Canada card | Urban campus winter or autumn — **grounded**, not ski-resort |
| `germany-card.jpg` | **1200 × 800** | Germany card | Tram/campus/modern architecture — **precision**, muted palette |
| `emerging-europe-asia-card.jpg` | **1200 × 800** | Emerging Europe & Asia card | Abstract architectural rhythm or lecture hall — **selective / premium**, not busy bazaar |

---

## Testimonials & founder (`/public/images/testimonials/`)

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `section-ambient.jpg` | **2000 × 1200** | Homepage testimonials — **wide editorial strip** above quote cards (`TestimonialsSection`) | Soft office texture / curtain light — **almost monochrome**, reads as calm context inside the content column |
| `founder-yolotripz.jpg` | **1200 × 1500** (portrait) | About page founder (`AboutFounder`) | Founder portrait — **eye-level**, neutral background, **warm trust** |

---

## Blog previews (`/public/images/blog/`)

Homepage insight cards (`BlogPreviewSection`). Filenames match **slug** from `getBlogPostsForHomePreview()`.

| File | Recommended size | Where it appears | Visual direction |
|------|------------------|------------------|------------------|
| `preview-default.jpg` | **960 × 600** | Reserved for future fallback patterns | Subtle abstract texture (optional) |
| `preview-september-intake-timeline.jpg` | **960 × 600** | Card for slug `september-intake-timeline` | Calendar + tea / desk — **planning calm** |
| `preview-how-to-read-an-overseas-offer.jpg` | **960 × 600** | Card for slug `how-to-read-an-overseas-offer` | Close-up offer envelope / highlight pen — **detail** |
| `preview-parent-checklist-study-abroad.jpg` | **960 × 600** | Card for slug `parent-checklist-study-abroad` | Parent + student side profile reviewing papers — **quiet focus** |

> When you add new homepage preview slugs in `src/content/insights/repository.ts`, add matching **`preview-<slug>.jpg`** here and document a row above.

---

## Still using remote / CMS imagery (not this folder)

- **Sanity-driven** article heroes on `/insights/[slug]` and CMS-backed destinations, universities, packages — continue to use **Sanity CDN** (`next/image` + `remotePatterns` for `cdn.sanity.io`).
- **Insights hub** cards use CMS images when present; local **`/images/blog/`** previews are for the **homepage preview strip** only.

---

## Quick checklist after you upload

1. Replace each placeholder JPG with your final asset (same path + filename).
2. Prefer **sRGB**, moderate JPEG quality (≈ **78–85**) or WebP **75–82** for web.
3. Run **`npm run build`** and spot-check: `/`, `/study-abroad`, `/visa-services`, `/travel-services`, `/about`, `/contact`.

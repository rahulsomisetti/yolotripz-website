/**
 * Central paths for **local** marketing images under `public/images/`.
 * URLs are root-relative (`/images/...`) — never prefix `public/` in code.
 *
 * Replace each file with your own photography (see `docs/IMAGE_REQUIREMENTS.md`).
 * Filenames stay stable — swap assets without touching TS.
 * Use **lowercase `.jpg`** matching these paths (case-sensitive on Linux/Vercel).
 */
export const siteImages = {
  hero: {
    /** Homepage hero — full-bleed behind navy + gradients */
    home: "/images/hero/homepage-hero.jpg",
    /** September CTA band (optional mood) */
    septemberIntake: "/images/hero/september-intake.jpg",
  },
  studyAbroad: {
    /** Study abroad pillar hero */
    hero: "/images/study-abroad/hero.jpg",
  },
  visa: {
    /** Visa services pillar — soft editorial background */
    hero: "/images/visa/hero.jpg",
  },
  travel: {
    /** Travel pillar — calm premium mood */
    hero: "/images/travel/hero.jpg",
  },
  countries: {
    /** One card image per destination hub (slug matches `content/home` countries) */
    card: (slug: string) => `/images/countries/${slug}-card.jpg`,
  },
  testimonials: {
    /** Wide soft texture / office light — sits behind testimonial cards */
    sectionAmbient: "/images/testimonials/section-ambient.jpg",
    /** About page founder portrait */
    founder: "/images/testimonials/founder-yolotripz.jpg",
  },
  blog: {
    /** When a homepage preview post has no CMS image */
    cardFallback: "/images/blog/preview-default.jpg",
    /** Homepage insight cards — match slug to `getBlogPostsForHomePreview` */
    previewCard: (slug: string) => `/images/blog/preview-${slug}.jpg`,
  },
} as const;

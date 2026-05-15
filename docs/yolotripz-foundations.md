# Yolotripz — Product & Technical Foundations

**Status:** Foundations only (no full pages).  
**Stack:** Next.js 15 · App Router · React · TypeScript · Tailwind CSS · Framer Motion  
**Positioning:** Premium overseas education consultancy (counselling-first; visas & travel as support).

---

## 1. Folder structure

Proposed **App Router** layout. Keeps marketing UI, shared primitives, and content separate; scales when you add forms, CMS, or analytics later.

```
src/
├── app/
│   ├── layout.tsx                 # Root: fonts, metadata defaults, providers
│   ├── globals.css                # Tailwind + CSS variables (design tokens)
│   ├── (marketing)/               # Route group: shared marketing shell optional
│   │   ├── layout.tsx             # Optional: sticky nav + footer wrapper
│   │   ├── page.tsx               # Homepage (when built)
│   │   ├── study-abroad/
│   │   ├── countries/[slug]/
│   │   ├── visas/
│   │   ├── travel/
│   │   ├── about/
│   │   ├── contact/
│   │   └── insights/              # Blog / articles
│   ├── api/                       # Optional: lead capture, webhooks
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── ui/                        # Design-system primitives (atoms)
│   ├── layout/                    # Shell: Nav, Footer, Section, Container
│   ├── sections/                  # Composed marketing blocks (molecules/organisms)
│   ├── forms/                     # Lead / counselling forms
│   └── motion/                    # Reusable motion wrappers (prefers-reduced-motion)
├── lib/
│   ├── cn.ts                      # className merge utility
│   ├── constants.ts               # Nav links, CTAs, phone/WhatsApp
│   └── seo.ts                     # Default metadata helpers, JSON-LD builders
├── content/                       # Optional: MDX or JSON for copy iteration
│   └── (navigation, faqs, country blurbs)
└── types/
    └── index.ts                   # Shared TS types (nav item, CTA, etc.)
```

**Naming:** `PascalCase` for components; `kebab-case` for route segments; colocate small tests or stories only if you adopt them later.

---

## 2. Design system

**Principles**

| Principle | Implementation |
|-----------|----------------|
| **Calm** | Generous whitespace, limited accent surface, no loud gradients |
| **Trust** | Predictable rhythm, clear hierarchy, restrained decoration |
| **Premium** | Fewer elements, better alignment, subtle depth (not glassmorphism overload) |
| **Conversion** | One primary action per viewport band; repeated soft CTAs, not competing banners |

**Tokens (CSS variables in `globals.css`, mapped in Tailwind)**

- **Space:** 4px base scale — `4, 8, 12, 16, 24, 32, 48, 64, 96` (avoid arbitrary gaps in components).
- **Radius:** `sm` 8px, `md` 12px, `lg` 16px, `xl` 24px (cards and buttons aligned to same family).
- **Elevation:** Two levels only — `shadow-soft` (cards at rest), `shadow-soft-hover` (lift on hover).
- **Borders:** Hairline `1px` at ~6–10% opacity of navy for separation without clutter.
- **Focus:** Visible focus ring using accent blue (keyboard users / trust signal).

**Semantic roles**

- `background` / `foreground` / `muted` / `muted-foreground` / `accent` / `accent-foreground` / `border` / `ring`.

---

## 3. Color palette

| Token | Hex | Usage |
|-------|-----|--------|
| **Navy (primary)** | `#0F2A44` | Headers, nav, key text, hero backgrounds (or overlays on imagery) |
| **Gold (secondary)** | `#C9A45C` | Highlights, key numbers, subtle dividers — **sparingly** (premium = restraint) |
| **Accent blue** | `#2F6FED` | Primary buttons, links on hover, focus rings, intake urgency strip (still calm if used as bar + white text) |
| **Surface** | `#FFFFFF` | Default page background |
| **Muted surface** | `#F4F6F8` | Section alternation, card interiors, FAQ background |
| **Text secondary** | Derived from navy at ~65–70% opacity (or `#4A5F72`) | Supporting copy |
| **Success / caution** | Optional later | Visa timelines only if needed; avoid traffic-light UI |

**Rules**

- Body text never pure black on white — use navy or softened charcoal.
- Gold never for long paragraphs (readability).
- Hero photos: `navy` gradient scrim (bottom or left) for text contrast without cheapening photography.

---

## 4. Typography system

**Font pairing**

- **Headings:** `Poppins` or `Montserrat` (pick **one** for consistency; Poppins slightly warmer for parents).
- **Body:** `Inter` (default) or `Open Sans` — Inter preferred for UI density and numerals.

**Load strategy:** `next/font` — subset weights; avoid loading more than 3–4 weights total.

**Scale (desktop reference; mobile scales down one step)**

| Role | Approx size | Weight | Line height | Letter-spacing |
|------|-------------|--------|--------------|----------------|
| Display / H1 | 40–48px | 600 | 1.1 | -0.02em |
| H2 | 32–36px | 600 | 1.15 | -0.01em |
| H3 | 24–28px | 600 | 1.2 | 0 |
| Lead | 18–20px | 400 | 1.55 | 0 |
| Body | 16px | 400 | 1.6 | 0 |
| Small / caption | 13–14px | 500 | 1.45 | 0.01em (labels) |

**Rules**

- Max line length ~65–75ch for body.
- **Numerals:** Tabular lining figures for fees, intake months (if showing comparison tables later).
- **India / rupee context:** Use ₹ in body; keep financial copy scannable (short clauses, not walls of text).

---

## 5. Component architecture

**Layers**

1. **`components/ui`** — Atomic, stateless, token-driven: `Button`, `LinkButton`, `Badge`, `Card`, `Input`, `Textarea`, `Label`, `Accordion`, `Separator`.
2. **`components/layout`** — `SiteHeader`, `SiteFooter`, `Container`, `Section` (vertical rhythm + optional `id` for anchors), `PageHeader` (title + lead for inner pages).
3. **`components/sections`** — Marketing compositions: `Hero`, `TrustBar`, `CountryGrid`, `ProcessSteps`, `TestimonialStrip`, `IntakeBanner`, `BlogPreview`, `CtaBand`, `LeadFormTeaser`.
4. **`components/forms`** — `CounsellingForm`, `ContactForm` (React Hook Form + Zod when implemented), shared `FormField` wrappers.
5. **`components/motion`** — `FadeIn`, `StaggerChildren`, `MotionSection` (respect `prefers-reduced-motion`).

**Data flow**

- Static marketing copy: start in `content/*.ts` or const objects; graduate to CMS if needed.
- No business logic inside `ui`; sections receive props or read from content modules.

**Co-location**

- Section-specific assets: optional `sections/Hero/hero.module.css` only if Tailwind becomes unwieldy; default stays Tailwind.

---

## 6. Layout strategy

- **Max content width:** `min(100%, 72rem)` (~1152px) for text-heavy columns; hero may bleed full width with inner `Container`.
- **Grid:** 12-column mental model; implement as `grid-cols-1 md:grid-cols-2 lg:grid-cols-12` only where needed (most sections = 1–2 columns).
- **Vertical rhythm:** Section padding `py-16 md:py-24`; tighter `py-12` for compact bands (trust bar, urgency strip).
- **Sticky chrome:** `SiteHeader` sticky with subtle border-bottom + backdrop blur **optional** (blur must stay subtle for “premium calm”).
- **Footer:** Sitemap links, trust line (since 2017, Mudbidri), secondary CTAs, legal.
- **Conversion layer:** Floating WhatsApp button (fixed) + one in-header CTA (`Book counselling`) — z-index and safe-area insets for notched phones.

---

## 7. Section hierarchy

**Homepage (when built) — top-to-bottom story**

1. Hero — promise + dual CTA (counselling primary, WhatsApp secondary)  
2. Trust bar — credentials / proof chips  
3. Problem framing — “wrong choice = cost + time” (calm, advisory tone)  
4. Country comparison entry — cards linking to country pages  
5. Why Yolotripz — differentiation (honesty, process, local trust)  
6. Process — 5 steps, single visual language  
7. Social proof — testimonials  
8. Intake urgency — September / January (non-aggressive deadline copy)  
9. Insights preview — 3 articles max  
10. Final CTA — repeat counselling + contact  

**Inner pages**

- **Study Abroad:** Pillars (PG, counselling, outcomes) → process → CTA.  
- **Country:** Snapshot → who it suits → intakes → work rights summary (non-legal disclaimer) → CTA.  
- **Visas / Travel:** Support framing under education; clear “not legal advice” tone.  
- **About:** Team story, timeline since 2017, geography (Coastal Karnataka).  
- **Contact:** Form + WhatsApp + location map optional.  
- **Insights:** List + post template (future).

Each important page ends with a **CTA band** + optional **FAQ accordion** (reduces anxiety, supports SEO).

---

## 8. Animation philosophy

**Principles**

- Motion **explains hierarchy** (what appeared first) rather than entertaining.
- Default durations **200–350ms**; entrances **stagger 40–60ms** per child, max ~4–5 items visible stagger.
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` or Framer’s `easeOut` — avoid bouncy springs on consultancy UI.

**What animates**

- Scroll-reveal: opacity + **small** `y` (8–16px), once per section (`whileInView`, `viewport.once: true`).
- Hover: **translate-y -1px** + shadow level change on cards/buttons; underline animation on text links.
- **Counters** (stats): only if numbers are real; respect reduced motion (show final value).

**Accessibility**

- `prefers-reduced-motion: reduce` → disable transforms; optional instant opacity only.
- No auto-playing carousels; no infinite motion in peripheral UI.

---

## 9. Reusable UI component plan

| Component | Responsibility |
|-----------|----------------|
| `Button` | Variants: `primary` (accent blue), `secondary` (outline navy), `ghost`; sizes `sm` `md` `lg`; `asChild` pattern if using Radix-style composition |
| `LinkButton` | Next `Link` styled as `Button` |
| `Card` | Padding variants, optional `href` wrap for country tiles |
| `Badge` | Intake month, “PG focus”, neutral chips |
| `Accordion` | FAQ; single or multiple open; keyboard accessible |
| `Input` / `Textarea` / `Select` | Form primitives with error states |
| `Section` | `title`, `eyebrow`, `children`, `variant` (`default` / `muted`) |
| `Container` | Horizontal padding + max-width |
| `Eyebrow` | Small caps / label above headings |
| `Stat` | Label + value (counter-ready) |
| `Divider` | Gold or neutral hairline between blocks |
| `IntakeBanner` | Dismissible optional; link to contact |
| `WhatsAppFab` | Fixed position, aria-label, WhatsApp deep link from `lib/constants` |

**Third-party alignment:** Prefer building accordions with native `<details>` or Headless UI–style patterns only if bundle justified; keep dependencies minimal.

---

## 10. Mobile-first strategy

**Breakpoints (Tailwind defaults)**

- Design **320px+** first: single column, full-width CTAs, thumb-friendly tap targets **min 44×44px**.
- `sm` 640px: two-column where it aids scan (e.g. country cards).
- `lg` 1024px: full nav (horizontal links); below `lg` use **drawer or disclosure menu** without hiding CTAs (keep “Book counselling” visible or in sticky bar).
- **Typography:** Slightly smaller display on mobile; maintain readable 16px body minimum.
- **Imagery:** Art direction: crop for faces on small screens; `sizes` on `next/image` for LCP.
- **Forms:** One column; floating labels optional; minimize fields above the fold for conversion tests later.
- **Performance:** System font fallback stack; lazy below-fold imagery; avoid heavy video autoplay on mobile.

---

## Next implementation step (not in this doc)

When you approve: scaffold Next.js 15, wire Tailwind to CSS variables above, add `fonts`, then build `layout` + `ui` primitives, then assemble **one** page (homepage) using `sections` in the order listed.

---

*Document version: 1.0 — foundations only.*

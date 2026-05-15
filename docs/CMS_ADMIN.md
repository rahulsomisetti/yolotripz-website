# Yolotripz · Sanity CMS admin guide

This project uses **Sanity v3** as the headless CMS and **Next.js 15** as the front end. Editors work in **Sanity Studio**; the site reads published content via **GROQ** queries.

## Architecture (scalable)

| Layer | Path | Role |
|--------|------|------|
| **Schemas** | `sanity/schemaTypes/` | Content model (fields, validation, previews). |
| **Desk structure** | `sanity/deskStructure.ts` | Grouped sidebar for non-technical admins. |
| **Studio config** | `sanity.config.ts`, `sanity.cli.ts` | Project wiring + CLI. |
| **Read client** | `src/sanity/lib/client.ts` | Server-side `createClient` (returns `null` if env missing). |
| **GROQ** | `src/sanity/lib/queries.ts` | Single source of query strings (swap for typegen later). |
| **Fetchers** | `src/sanity/fetchers.ts` | Thin async API used by routes and pages. |
| **Portable Text** | `src/components/sanity/SanityPortableText.tsx` | Rich text → React. |
| **Next routes** | `src/app/**` | Dynamic pages + `/studio` embed + `/api/cms/search`. |

**Principle:** keep GROQ in one folder, keep fetchers dumb, and let pages map Sanity shapes → UI. When the dataset grows, add **Sanity Presentation / live preview** and **GROQ typegen** without renaming routes.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- **`NEXT_PUBLIC_SANITY_PROJECT_ID`** — from [sanity.io/manage](https://www.sanity.io/manage).
- **`NEXT_PUBLIC_SANITY_DATASET`** — usually `production` (or `development` for a staging dataset).
- **`NEXT_PUBLIC_SANITY_API_VERSION`** — date string (default `2024-01-01`).
- **`SANITY_API_READ_TOKEN`** (optional) — only if the dataset is private or you add preview/draft later. **Never** expose write tokens to the browser.

## First-time setup (technical)

1. Create a Sanity project at [sanity.io](https://www.sanity.io) (or `npm create sanity@latest` in another folder and copy the project ID).
2. Put the project ID + dataset into `.env.local`.
3. From the repo root: `npm install`
4. **CORS:** In Sanity manage → API → add `http://localhost:3000` (and your production domain) for browser Studio + fetches.
5. Run **`npm run studio`** to open the Studio locally (default port **3333**), **or** visit **`/studio`** on the Next dev server (embedded Studio).
6. Publish at least one document of each type you need, then open the matching URL on the site (see table below).

## Content types → URLs

| Sanity type | Example URL | Notes |
|-------------|-------------|--------|
| `blogPost` | `/insights/[slug]` | Merged with legacy static insights; **Sanity wins** if the same slug exists in both. |
| `university` | `/universities/[slug]` | References `country`. |
| `course` | `/courses/[slug]` | References `university` (+ optional `country`). |
| `country` | `/destinations/[slug]` | **CMS countries** — distinct from static premium `/countries/*` pages. |
| `travelPackage` | `/packages/[slug]` | Travel catalogue. |
| `testimonial` | Homepage “Stories” | Documents with **`showOnHomepage`** replace default static quotes when any exist. |
| `intakeAlert` | `/intakes` | Listing page. |
| `faq` | `/faq` | Listing + Portable Text answers. |

## SEO fields

Most document types include **`seoFields`**:

- **Meta title / description** — map to Next `metadata` via `metadataFromSanity()` in `src/sanity/lib/metadata.ts`.
- **OG image** — use `sanityImageUrl()` from `src/sanity/lib/image.ts` when you add `<Image>` from `next/image` (CDN host `cdn.sanity.io` is already allowed in `next.config.ts`).
- **noIndex** — sets `robots` to noindex when checked.

## Images

- Upload images in Studio; use **hotspot** where enabled for crops.
- Next.js requires `remotePatterns` for `cdn.sanity.io` (already configured).

## Search & filtering

- **HTTP search:** `GET /api/cms/search?q=visa&type=blogPost`  
  - `q` — search string (glob-based GROQ `match`).  
  - `type` — optional filter: `blogPost`, `university`, `course`, `country`, `travelPackage`, `intakeAlert`, `faq`, or `all`.
- **Studio filtering:** use Sanity’s built-in **search** (omni-search) and Vision for GROQ experiments (`@sanity/vision` plugin is enabled in `sanity.config.ts`).

## Slugs

- Every routable document has a **`slug`** field (`slug.current` in API).
- Avoid collisions between **Sanity `blogPost`** slugs and **legacy** `src/content/insights/posts.ts` slugs unless you intend to override static articles with CMS content.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Next.js app (includes `/studio` route). |
| `npm run studio` | Standalone Sanity Studio (CLI). |
| `npm run sanity:typegen` | Extract schema + generate TypeScript types (after schemas stabilize). |

## Production notes

- **Deploy Studio:** `sanity deploy` (optional) for hosted Studio, or rely on embedded `/studio` behind auth in production (recommended: protect `/studio` with middleware or host Studio separately).
- **Deploy GraphQL/API:** default CDN reads are fine for public datasets; add ISR `revalidate` on routes (already set on CMS pages).
- **Tokens:** use read-only token server-side only; use Sanity’s webhook to revalidate paths on publish (future enhancement).

## Support for editors (non-technical)

1. Open **Studio** (`npm run studio` or site `/studio`).
2. Use the left sidebar groups: **Editorial**, **Programs & places**, **Marketing**.
3. Click **Create**, fill title first — **slug** is usually generated automatically.
4. Add **excerpt/summary** before publish (helps SEO + cards on the site).
5. Use **Preview** of documents in the editor; publish when ready (drafts do not appear on the public site unless you add preview mode).

For questions about field meaning, each schema includes short **descriptions** on important fields.

## Troubleshooting: `npm install` (Windows)

If automated installs failed with **`ERESOLVE`** (Next 15 vs `next-sanity` 12), this repo pins **`next-sanity@^9.8.27`**, which supports Next 15 — do not upgrade to `next-sanity@12` until you are on Next 16.

If you see many **`npm warn tar ENOENT`** / **`TAR_ENTRY_ERROR`** lines or **`exit_code: 1`**:

1. Close editors/terminals using `node_modules`, then delete **`node_modules`** (and optionally **`package-lock.json`**).
2. Run **`npm cache verify`** (or **`npm cache clean --force`** if the cache is suspect).
3. Run **`npm install`** again from the project root (PowerShell **as Administrator** if cleanup fails).
4. Exclude the project folder from aggressive real-time antivirus scanning if installs keep corrupting nested paths under `node_modules`.

After a clean install, run **`npm run lint`** and **`npm run dev`** to confirm Studio (`/studio`) and the site load.

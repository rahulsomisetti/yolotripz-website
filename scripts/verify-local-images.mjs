/**
 * Lists missing files under `public/` for every marketing image path.
 * Keep this list aligned with `src/lib/site-images.ts` + `content/home` country slugs
 * + `HOME_PREVIEW_SLUGS` in `src/content/insights/repository.ts`.
 *
 * Run: `npm run images:verify`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const COUNTRY_SLUGS = [
  "uk",
  "australia",
  "new-zealand",
  "canada",
  "germany",
  "emerging-europe-asia",
];

const BLOG_PREVIEW_SLUGS = [
  "september-intake-timeline",
  "how-to-read-an-overseas-offer",
  "parent-checklist-study-abroad",
];

const REQUIRED_URLS = [
  "/images/hero/homepage-hero.jpg",
  "/images/hero/september-intake.jpg",
  "/images/study-abroad/hero.jpg",
  "/images/visa/hero.jpg",
  "/images/travel/hero.jpg",
  ...COUNTRY_SLUGS.map((slug) => `/images/countries/${slug}-card.jpg`),
  "/images/testimonials/section-ambient.jpg",
  "/images/testimonials/founder-yolotripz.jpg",
  "/images/blog/preview-default.jpg",
  ...BLOG_PREVIEW_SLUGS.map((slug) => `/images/blog/preview-${slug}.jpg`),
];

function toFilesystemPath(urlPath) {
  return path.join(root, "public", urlPath.replace(/^\//, ""));
}

const missing = REQUIRED_URLS.map((url) => ({ url, fs: toFilesystemPath(url) })).filter(({ fs }) => !fs.existsSync(fs));

if (missing.length) {
  console.error("Missing local image files (expected under public/):\n");
  for (const { url, fs } of missing) {
    console.error(`  ${url}`);
    console.error(`    → ${path.relative(root, fs)}`);
  }
  console.error("\nFix: use exact lowercase .jpg names, or run: npm run images:placeholders\n");
  process.exit(1);
}

console.log("OK — all", REQUIRED_URLS.length, "required local images exist.");

/**
 * Moves/copies user uploads from common wrong paths into paths expected by `site-images.ts`.
 * Also links alternate extensions (.jpeg, .png, .webp) when the .jpg path is missing or tiny.
 *
 * Run after uploading: `npm run images:sync`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicImages = path.join(root, "public", "images");

/** Minimum bytes to treat as a real upload (skip tiny placeholders). */
const MIN_REAL_BYTES = 2048;

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

/** [canonical relative path from public/images, ...alternate relative paths to try] */
const ALIASES = [
  ["hero/homepage-hero.jpg", ["homepage-hero.jpg", "hero/homepage-hero.jpeg", "homepage-hero.jpeg", "homepage-hero.png", "homepage-hero.webp"]],
  ["hero/september-intake.jpg", ["september-intake.jpg", "hero/september-intake.jpeg", "september-intake.jpeg"]],
  ["study-abroad/hero.jpg", ["study-abroad/hero.jpeg", "study-abroad-hero.jpg"]],
  ["visa/hero.jpg", ["visa/hero.jpeg", "visa-hero.jpg"]],
  ["travel/hero.jpg", ["travel/hero.jpeg", "travel-hero.jpg"]],
  ["testimonials/section-ambient.jpg", ["testimonials/section-ambient.jpeg", "section-ambient.jpg"]],
  ["testimonials/founder-yolotripz.jpg", ["testimonials/founder-yolotripz.jpeg", "founder-yolotripz.jpg", "founder.jpg"]],
  ["blog/preview-default.jpg", ["blog/preview-default.jpeg"]],
  ...COUNTRY_SLUGS.map((slug) => [
    `countries/${slug}-card.jpg`,
    [`countries/${slug}-card.jpeg`, `${slug}-card.jpg`, `${slug}.jpg`],
  ]),
  ...BLOG_PREVIEW_SLUGS.map((slug) => [
    `blog/preview-${slug}.jpg`,
    [`blog/preview-${slug}.jpeg`, `preview-${slug}.jpg`],
  ]),
];

function fileSize(rel) {
  const abs = path.join(publicImages, rel);
  if (!fs.existsSync(abs)) return 0;
  return fs.statSync(abs).size;
}

function isReal(rel) {
  return fileSize(rel) >= MIN_REAL_BYTES;
}

function copyIfBetter(sourceRel, destRel) {
  const srcAbs = path.join(publicImages, sourceRel);
  const destAbs = path.join(publicImages, destRel);
  if (!fs.existsSync(srcAbs)) return false;
  const srcSize = fs.statSync(srcAbs).size;
  if (srcSize < MIN_REAL_BYTES) return false;
  const destSize = fs.existsSync(destAbs) ? fs.statSync(destAbs).size : 0;
  if (destSize >= srcSize && isReal(destRel)) return false;
  fs.mkdirSync(path.dirname(destAbs), { recursive: true });
  fs.copyFileSync(srcAbs, destAbs);
  console.log(`synced ${sourceRel} → ${destRel} (${srcSize} bytes)`);
  return true;
}

let synced = 0;
for (const [canonical, alternates] of ALIASES) {
  if (isReal(canonical)) continue;
  for (const alt of alternates) {
    if (copyIfBetter(alt, canonical)) {
      synced += 1;
      break;
    }
  }
}

const stillMissing = [];
for (const [canonical] of ALIASES) {
  if (!isReal(canonical)) stillMissing.push(canonical);
}

console.log(`\nSynced ${synced} file(s).`);
if (stillMissing.length) {
  console.warn("Still missing or placeholder-only (<2KB):");
  for (const p of stillMissing) console.warn(`  public/images/${p}`);
} else {
  console.log("All canonical image paths have real uploads.");
}

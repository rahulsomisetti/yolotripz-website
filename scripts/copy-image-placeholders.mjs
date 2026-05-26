/**
 * Ensures required JPEG paths exist under `public/images/`.
 * Creates a minimal source only when missing; copies to destinations only when missing or tiny.
 *
 * Usage: `node scripts/copy-image-placeholders.mjs`
 * Force overwrite: `node scripts/copy-image-placeholders.mjs --force`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public/images/hero/homepage-hero.jpg");
const force = process.argv.includes("--force");
const MIN_REAL_BYTES = 2048;

const destinations = [
  "public/images/hero/september-intake.jpg",
  "public/images/study-abroad/hero.jpg",
  "public/images/visa/hero.jpg",
  "public/images/travel/hero.jpg",
  "public/images/countries/uk-card.jpg",
  "public/images/countries/usa-card.jpg",
  "public/images/countries/australia-card.jpg",
  "public/images/countries/new-zealand-card.jpg",
  "public/images/countries/canada-card.jpg",
  "public/images/countries/ireland-card.jpg",
  "public/images/countries/germany-card.jpg",
  "public/images/countries/emerging-europe-asia-card.jpg",
  "public/images/testimonials/section-ambient.jpg",
  "public/images/testimonials/founder-yolotripz.jpg",
  "public/images/blog/preview-default.jpg",
  "public/images/blog/preview-september-intake-timeline.jpg",
  "public/images/blog/preview-how-to-read-an-overseas-offer.jpg",
  "public/images/blog/preview-parent-checklist-study-abroad.jpg",
];

function shouldWrite(dest) {
  if (force) return true;
  if (!fs.existsSync(dest)) return true;
  return fs.statSync(dest).size < MIN_REAL_BYTES;
}

async function ensureSource() {
  fs.mkdirSync(path.dirname(src), { recursive: true });
  if (!shouldWrite(src)) return;
  await sharp({
    create: {
      width: 64,
      height: 64,
      channels: 3,
      background: { r: 232, g: 238, b: 244 },
    },
  })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(src);
  console.log("Created minimal source JPEG:", path.relative(root, src));
}

await ensureSource();

if (!fs.existsSync(src)) {
  console.error("Missing source:", src);
  process.exit(1);
}

let written = 0;
for (const rel of destinations) {
  const dest = path.join(root, rel);
  if (!shouldWrite(dest)) {
    console.log("skip (exists)", rel);
    continue;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  console.log("OK", rel);
  written += 1;
}

console.log(`Done: ${written} placeholder(s) written${force ? " (forced)" : ""}.`);

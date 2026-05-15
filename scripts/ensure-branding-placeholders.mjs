/**
 * Creates neutral placeholder PNGs under `public/branding/` when missing.
 * Does not overwrite your files unless you pass `--force`.
 *
 * Usage: `node scripts/ensure-branding-placeholders.mjs`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dir = path.join(root, "public", "branding");
const force = process.argv.includes("--force");

function svgPrimary() {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="140" viewBox="0 0 560 140">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1a2f4a"/>
          <stop offset="100%" stop-color="#243d5c"/>
        </linearGradient>
      </defs>
      <rect width="560" height="140" rx="12" fill="url(#g)"/>
      <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.22)" font-family="system-ui,sans-serif" font-size="13" letter-spacing="0.28em">REPLACE LOGO</text>
    </svg>`,
  );
}

function svgMark() {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="36" fill="#1a2f4a"/>
      <circle cx="80" cy="80" r="36" fill="none" stroke="rgba(212,175,106,0.55)" stroke-width="3"/>
      <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.35)" font-family="system-ui,sans-serif" font-size="11" letter-spacing="0.2em">MARK</text>
    </svg>`,
  );
}

function svgOg() {
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="og" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f4f7fa"/>
          <stop offset="55%" stop-color="#eef3f8"/>
          <stop offset="100%" stop-color="#e4ecf4"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#og)"/>
      <rect x="72" y="72" width="120" height="120" rx="28" fill="#1a2f4a" opacity="0.92"/>
      <text x="240" y="200" fill="#1a2f4a" font-family="system-ui,sans-serif" font-size="52" font-weight="600" letter-spacing="-0.02em">Yolotripz</text>
      <text x="240" y="270" fill="#3d556d" font-family="system-ui,sans-serif" font-size="26" font-weight="400">Overseas education consultants · Coastal Karnataka</text>
      <text x="240" y="520" fill="#6b7f92" font-family="system-ui,sans-serif" font-size="18">Replace with photography or designed OG art (1200×630)</text>
    </svg>`,
  );
}

async function writeIfNeeded(rel, pngFromBuffer) {
  const dest = path.join(dir, rel);
  if (!force && fs.existsSync(dest)) {
    console.log("keep existing:", rel);
    return;
  }
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await pngFromBuffer(dest);
  console.log("wrote", path.join("public/branding", rel));
}

async function main() {
  await writeIfNeeded("logo-primary.png", async (dest) => {
    await sharp(svgPrimary()).png({ compressionLevel: 9 }).toFile(dest);
  });
  await writeIfNeeded("logo-mark.png", async (dest) => {
    await sharp(svgMark()).png({ compressionLevel: 9 }).toFile(dest);
  });
  await writeIfNeeded("favicon.png", async (dest) => {
    await sharp(svgMark()).resize(32, 32).png({ compressionLevel: 9 }).toFile(dest);
  });
  await writeIfNeeded("og-share.png", async (dest) => {
    await sharp(svgOg()).png({ compressionLevel: 9 }).toFile(dest);
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

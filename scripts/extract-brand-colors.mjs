/**
 * Reads `public/branding/logo-primary.png`, derives a calm consultancy palette,
 * writes `src/styles/brand-generated.css` and `public/branding/last-extraction.json`.
 *
 * Run after you upload a real logo: `npm run brand:extract`
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "branding", "logo-primary.png");
const outCss = path.join(root, "src", "styles", "brand-generated.css");
const outJson = path.join(root, "public", "branding", "last-extraction.json");

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      default:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return { h, s, l };
}

function hslToCss(h, s, l) {
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

function hslToRgb(h, s, l) {
  let r;
  let g;
  let b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      let tt = t;
      if (tt < 0) tt += 1;
      if (tt > 1) tt -= 1;
      if (tt < 1 / 6) return p + (q - p) * 6 * tt;
      if (tt < 1 / 2) return q;
      if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function circularDist(a, b) {
  const d = Math.abs(a - b);
  return Math.min(d, 1 - d);
}

const DEFAULT = {
  "--brand-primary": "210 55% 16%",
  "--brand-primary-foreground": "0 0% 100%",
  "--brand-accent": "41 42% 52%",
  "--brand-link": "221 48% 42%",
  "--brand-cta": "221 44% 40%",
  "--brand-cta-foreground": "0 0% 100%",
  "--brand-muted": "210 18% 96%",
  "--brand-muted-foreground": "210 20% 34%",
  "--brand-border": "210 16% 86%",
  "--brand-surface": "0 0% 100%",
  "--brand-surface-tint": "210 26% 99%",
  "--brand-shadow-rgb": "18 42 62",
};

function buildCss(vars) {
  const lines = Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`);
  return `/**
 * AUTO-GENERATED — do not edit by hand.
 * Source: public/branding/logo-primary.png (npm run brand:extract)
 * Revert: restore defaults from git or re-run after replacing the logo.
 */
:root {
${lines.join("\n")}
}
`;
}

async function main() {
  if (!fs.existsSync(logoPath)) {
    console.error("Missing", logoPath);
    process.exit(1);
  }

  const { data, info } = await sharp(logoPath)
    .resize(120, 120, { fit: "inside" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const buckets = Array.from({ length: 36 }, () => ({ w: 0, h: 0, s: 0, l: 0, n: 0 }));
  let colorful = 0;
  let totalSample = 0;

  for (let i = 0; i < data.length; i += info.channels) {
    const a = info.channels === 4 ? data[i + 3] : 255;
    if (a < 40) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const { h, s, l } = rgbToHsl(r, g, b);
    totalSample += 1;
    if (l > 0.93 || l < 0.07) continue;
    if (s < 0.14) continue;
    colorful += 1;
    const bi = Math.min(35, Math.floor(h * 36));
    const w = s * (1 - Math.abs(l - 0.48) * 1.35);
    buckets[bi].w += w;
    buckets[bi].h += h * w;
    buckets[bi].s += s * w;
    buckets[bi].l += l * w;
    buckets[bi].n += w;
  }

  const ratio = totalSample ? colorful / totalSample : 0;
  if (ratio < 0.04 || totalSample < 40) {
    console.warn("Logo appears achromatic or too small — writing conservative defaults.");
    const vars = { ...DEFAULT };
    fs.writeFileSync(outCss, buildCss(vars), "utf8");
    fs.writeFileSync(
      outJson,
      JSON.stringify(
        {
          ok: false,
          reason: "low_color_signal",
          ratio,
          applied: vars,
        },
        null,
        2,
      ),
      "utf8",
    );
    console.log("Wrote defaults to", path.relative(root, outCss));
    return;
  }

  const scored = buckets
    .map((b, i) => ({ i, score: b.w, h: b.n ? b.h / b.n : i / 36, s: b.n ? b.s / b.n : 0, l: b.n ? b.l / b.n : 0 }))
    .filter((b) => b.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) {
    console.warn("No hue peaks found — writing conservative defaults.");
    const vars = { ...DEFAULT };
    fs.writeFileSync(outCss, buildCss(vars), "utf8");
    fs.writeFileSync(
      outJson,
      JSON.stringify({ ok: false, reason: "no_hue_peaks", applied: vars }, null, 2),
      "utf8",
    );
    console.log("Wrote defaults to", path.relative(root, outCss));
    return;
  }

  const dom = scored[0];
  let sec = scored.find((b) => circularDist(b.h, dom.h) > 0.12 && b.score > dom.score * 0.22);
  if (!sec) {
    sec = { h: (dom.h + 0.09) % 1, s: clamp(dom.s * 0.85, 0.22, 0.42), l: clamp(dom.l + 0.12, 0.42, 0.62), score: 0, i: -1 };
  }

  const H = dom.h;
  const H2 = sec.h;

  const primary = hslToCss(H, clamp(dom.s * 0.45, 0.14, 0.28), 0.175);
  const accent = hslToCss(H2, clamp(sec.s * 0.75, 0.22, 0.42), clamp(sec.l, 0.48, 0.58));
  const link = hslToCss(H, clamp(dom.s * 0.55, 0.26, 0.42), 0.44);
  const cta = hslToCss(H, clamp(dom.s * 0.52, 0.28, 0.42), 0.4);
  const muted = hslToCss(H, 0.07, 0.965);
  const mutedFg = hslToCss(H, 0.12, 0.34);
  const border = hslToCss(H, 0.09, 0.88);
  const surfaceTint = hslToCss(H, 0.045, 0.992);

  const shadowRgb = hslToRgb(H, clamp(dom.s * 0.35, 0.12, 0.28), 0.22);
  const shadowStr = `${shadowRgb.r} ${shadowRgb.g} ${shadowRgb.b}`;

  const vars = {
    "--brand-primary": primary,
    "--brand-primary-foreground": "0 0% 100%",
    "--brand-accent": accent,
    "--brand-link": link,
    "--brand-cta": cta,
    "--brand-cta-foreground": "0 0% 100%",
    "--brand-muted": muted,
    "--brand-muted-foreground": mutedFg,
    "--brand-border": border,
    "--brand-surface": "0 0% 100%",
    "--brand-surface-tint": surfaceTint,
    "--brand-shadow-rgb": shadowStr,
  };

  fs.writeFileSync(outCss, buildCss(vars), "utf8");
  fs.writeFileSync(
    outJson,
    JSON.stringify(
      {
        ok: true,
        dominantHue: Math.round(H * 360),
        secondaryHue: Math.round(H2 * 360),
        colorfulPixelRatio: Number(ratio.toFixed(3)),
        cssVariables: vars,
      },
      null,
      2,
    ),
    "utf8",
  );
  console.log("Wrote", path.relative(root, outCss));
  console.log("Wrote", path.relative(root, outJson));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

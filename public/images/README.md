# Local marketing images

Paths in code use **`/images/...`** (files live under **`public/images/`** — never put `public/` in the URL).

## Common mistake

Uploading to the **wrong folder** breaks the site. Examples:

| Wrong | Correct |
|-------|---------|
| `public/images/homepage-hero.jpg` | `public/images/hero/homepage-hero.jpg` |
| `public/images/september-intake.jpg` | `public/images/hero/september-intake.jpg` |
| `public/images/uk.jpg` | `public/images/countries/uk-card.jpg` |

After uploading (anywhere under `public/images/`), run:

```bash
npm run images:sync
```

That copies misplaced files into the paths `src/lib/site-images.ts` expects.

## Commands

- **`npm run images:sync`** — fix folder/filename mismatches (safe; won’t replace large files with placeholders)
- **`npm run images:verify`** — list any required files still missing
- **`npm run images:placeholders`** — tiny gray JPEGs only where files are missing (&lt;2KB); use **`--force`** to overwrite

Use **lowercase `.jpg`** filenames. See **`docs/IMAGE_REQUIREMENTS.md`** for the full list.

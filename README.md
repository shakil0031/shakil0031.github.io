# Shakil Ahmed · Portfolio

Terminal-style portfolio built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Uses Astro 5 because it works on Node 20. Astro 6+ needs Node 22 or newer.

## Where to edit

| What | File |
|---|---|
| **Colors / dark & light mode** | `src/config/theme.ts`: pick palettes in `modes`, or edit the hex values |
| All text (bio, projects, experience, links) | `src/data/profile.ts` |
| Fonts and type sizes | `src/styles/global.css` (font link is in `src/layouts/Base.astro`) |
| Sections and layout | `src/components/*.astro`, `src/pages/index.astro` |
| Résumé download | put your CV at `public/resume.pdf` |

The site has dark mode (graphite) and light mode (glacier). It follows the visitor's system setting, and the toggle in the top bar overrides it. Change which palette each mode uses with `modes` in `theme.ts`.

## Deploy

Hosted on GitHub Pages at <https://shakil0031.github.io>. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.

One-time setup: in the repo on GitHub, go to Settings → Pages and set **Source** to **GitHub Actions**.

This is a user site served from the domain root, so `astro.config.mjs` sets `site` and no `base`.

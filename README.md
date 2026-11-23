# NEXDAN website

Company website for **NEXDAN — Next Digital Advancement Network** (نيكسدان), built by Finova Solutions for its Saudi partners.

The site is bilingual. Arabic is the default language and is served right to left at `/`. English is served at `/en/`.

## Tech stack

- [Astro](https://astro.build) 7, static output
- Fonts: Tajawal (Arabic) and Montserrat (Latin), self-hosted through Fontsource
- No client-side framework; plain CSS with brand tokens in `src/styles/global.css`

## Getting started

Requires Node.js 22.23.4 or later.

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  i18n/content.ts        All page copy, Arabic and English side by side
  layouts/Base.astro     <html> shell: lang, dir (rtl/ltr), meta tags, fonts
  components/Home.astro  Home page sections (hero, name meaning, pillars, mission, contact)
  pages/index.astro      Arabic home page (/)
  pages/en/index.astro   English home page (/en/)
  pages/404.astro        Bilingual not-found page (noindex)
  styles/global.css      Brand tokens and shared styles
public/                  Static files served as-is (favicon, share image og.jpg, robots.txt)
docs/brand-reference/    Brand story posters supplied by NEXDAN (reference only)
```

## Editing content

Change text in `src/i18n/content.ts`. Every key exists in both `ar` and `en`; update both together so the two languages stay in step.

## Brand

Deep navy backgrounds, gold accents and white type, following the NEXDAN brand story posters in `docs/brand-reference/`. Use CSS logical properties (`margin-inline`, `padding-inline-start`, `border-inline-start`) rather than left/right, so layouts flip correctly between Arabic and English.

## Plans

- [30-day SEO plan](docs/seo-30-day-plan.md): Jeddah first, then Riyadh and the whole Kingdom; Arabic first.

## Open items

- Final domain (`site` in `astro.config.mjs` and the `Sitemap:` line in `public/robots.txt`)
- Official logo files (SVG) to replace the text logo and favicon
- Confirmed contact email (placeholder `info@nexdan.sa` in `src/i18n/content.ts`)
- Confirm the scope of the three service descriptions in `content.services`
- Social profile links and office address for the structured data in `Base.astro`

## Deployment

The build output in `dist/` is a static site and can be hosted on Netlify, Vercel, Cloudflare Pages or GitHub Pages.

## Ownership

© NEXDAN. All rights reserved. Developed by Finova Solutions (Private) Limited.

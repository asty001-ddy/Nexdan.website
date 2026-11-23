# NEXDAN website: notes for contributors

- Bilingual Astro site. Arabic (`ar`, RTL) is the default at `/`; English (`en`, LTR) is at `/en/`.
- All copy lives in `src/i18n/content.ts`. Any new key must be added to both languages.
- Use CSS logical properties so layouts mirror correctly in RTL. Avoid `left`/`right` except where a design is direction-independent.
- Brand: navy (`--night`, `--navy-raised`), gold (`--gold`, reserved for actions and the network map), white, plus `--mist` for the light sections (services, process). Tokens are in `src/styles/global.css`. Font: IBM Plex Sans Arabic (OFL), one superfamily with matching Arabic and Latin.
- Infographics use sourced public figures only; keep the source link under the chart. Product screens in the services section are illustrative and say so.
- Avoid template chrome: no tracked-caps labels above headings, no numbered markers unless the content is a sequence, no scroll-reveal on every section. The hero map is the one animated moment.
- Brand reference posters are in `docs/brand-reference/`; they are not served on the site.
- Run `npm run build` before committing to make sure the site builds.

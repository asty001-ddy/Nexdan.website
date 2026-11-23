# NEXDAN website: notes for contributors

- Bilingual Astro site. Arabic (`ar`, RTL) is the default at `/`; English (`en`, LTR) is at `/en/`.
- All copy lives in `src/i18n/content.ts`. Any new key must be added to both languages.
- Use CSS logical properties so layouts mirror correctly in RTL. Avoid `left`/`right` except where a design is direction-independent.
- Brand: navy (`--navy-*`), gold (`--gold-*`), white. Tokens are in `src/styles/global.css`. Fonts: Tajawal for Arabic, Montserrat for Latin.
- Brand reference posters are in `docs/brand-reference/`; they are not served on the site.
- Run `npm run build` before committing to make sure the site builds.

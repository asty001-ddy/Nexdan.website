// @ts-check
import { defineConfig } from 'astro/config';

// Arabic is the default language (served at /), English lives under /en/.
export default defineConfig({
  site: 'https://nexdan.sa', // TODO: replace with the final domain
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});

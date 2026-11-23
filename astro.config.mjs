// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Arabic is the default language (served at /), English lives under /en/.
export default defineConfig({
  site: 'https://nexdan.sa', // TODO: replace with the final domain
  // Inline the small stylesheet so it doesn't block first paint.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    // Lists both languages with hreflang alternates matching the <link> tags in Base.astro.
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
      filter: (page) => !page.includes('/404'),
      // Add x-default (Arabic) so the sitemap agrees with the <link> tags.
      serialize(item) {
        const ar = item.links?.find((l) => l.lang === 'ar');
        // Copy the array: the integration shares one links array between twin pages.
        if (ar) item.links = [...item.links.filter((l) => l.lang !== 'x-default'), { lang: 'x-default', url: ar.url }];
        return item;
      },
    }),
  ],
});

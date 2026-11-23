# NEXDAN: 30-day SEO plan

**Goal:** rank NEXDAN for AI, software and IoT solutions, first in Jeddah, then Riyadh, then across Saudi Arabia, and position it as a Vision 2030 technology company.
**Language:** Arabic first. Every page has an English version at `/en/...`.
**Owner of each task:** developer (Dev), NEXDAN team (Team), or both.

Rules that apply throughout:

- Write Arabic first, then translate. Keep both versions in `src/i18n/content.ts` or the page files.
- Never publish fake reviews, invented clients or made-up results. Use real projects only, and leave a section out until there is a real example.
- Every new page gets: one H1, a unique title and meta description in each language, a canonical link, and `hreflang` links to its other-language twin.

---

## Week 1: foundations and Google Business Profile

### Technical setup (Dev)

- [ ] Confirm the final domain and set `site` in `astro.config.mjs` (currently the placeholder `https://nexdan.sa`).
- [ ] Add `@astrojs/sitemap` so `sitemap-index.xml` lists both languages, and add `public/robots.txt` pointing to it.
- [ ] Add JSON-LD structured data to the home page: `Organization` (name: NEXDAN / نيكسدان, logo, url, sameAs: social profiles) and `ProfessionalService` with `areaServed`: Jeddah, Riyadh, Saudi Arabia, and the Jeddah address once confirmed.
- [ ] Verify the domain in Google Search Console and Bing Webmaster Tools, and submit the sitemap to both.
- [ ] Replace the text logo and favicon with the official logo files (SVG).

### Google Business Profile (Team, with Dev support)

- [ ] Create the profile for the **Jeddah office** (required: a real address where staff work; if clients do not visit, set it as a service-area business and hide the address).
- [ ] Name exactly as registered: نيكسدان NEXDAN. No keywords in the name.
- [ ] Primary category: **Software company**. Add secondary categories that match real services, such as computer consultant or IT services, choosing the closest options Google offers.
- [ ] Service areas: Jeddah, Makkah Region, Riyadh, then Saudi Arabia.
- [ ] Services, each with a short Arabic description: AI solutions, custom software development, IoT solutions, digital transformation consulting, system integration.
- [ ] Hours: Sunday to Thursday office hours; mark Fridays and Saturdays accurately.
- [ ] Photos (real, not stock): office exterior with signage, reception, team at work, a workshop or client meeting, a product screen. Minimum 10 at launch, then 2–3 a week.
- [ ] Add the website link (Arabic home page), phone, and WhatsApp messaging if used.
- [ ] Send the review request below to every past client, pilot partner and project contact this week. Target: 10 reviews.

**Review request (Arabic):**

> السلام عليكم [الاسم]،
> شكراً لثقتكم بنيكسدان في [المشروع]. نبني حضورنا في جدة والمملكة، ورأيكم يهمنا كثيراً.
> هل تتكرمون بكتابة تقييم قصير عن تجربتكم معنا؟ يستغرق دقيقة واحدة: [رابط التقييم]
> مع خالص الشكر،
> [الاسم]، نيكسدان

**Review request (English):**

> Hello [Name],
> Thank you for trusting NEXDAN with [project]. We are building our presence in Jeddah and across the Kingdom, and your view matters to us.
> Would you write a short review of your experience? It takes a minute: [review link]
> With thanks,
> [Name], NEXDAN

Follow up once after 3 days. Reply to every review within 48 hours, in the reviewer's language. Do not offer gifts or discounts for reviews.

### Profile post, week 1 (Team)

- [ ] **Who we are:** NEXDAN's story and the meaning of the name (Next, Digital, Advancement, Network), with a team photo.

---

## Week 2: the money page

### Page (Dev builds, Team supplies facts)

URL: `/ai-solutions-jeddah/` (Arabic) and `/en/ai-solutions-jeddah/` (English). Short Latin slugs avoid encoded Arabic characters when links are shared.

| Element | Arabic (primary) | English |
| --- | --- | --- |
| Title (≤ 60 characters) | حلول الذكاء الاصطناعي والبرمجيات للشركات في جدة \| نيكسدان | AI, Software and IoT Solutions in Jeddah \| NEXDAN |
| H1 | حلول ذكاء اصطناعي وبرمجيات وإنترنت أشياء لشركات جدة والمملكة | AI, software and IoT solutions for businesses in Jeddah and across Saudi Arabia |
| Meta description (≤ 155 characters) | نيكسدان شركة سعودية مقرها جدة، تبني حلول الذكاء الاصطناعي والبرمجيات وإنترنت الأشياء للشركات في جدة والرياض والمملكة، بما يخدم رؤية 2030. | NEXDAN is a Jeddah-based Saudi company building AI, software and IoT solutions for businesses in Jeddah, Riyadh and across the Kingdom, in line with Vision 2030. |

**Outline:**

1. **What we do:** three short blocks, AI solutions, custom software, IoT solutions, each with one sentence on the business result and a link to its service page.
2. **Where we work:** Jeddah headquarters; projects in Riyadh and across the Kingdom; Arabic-first teams.
3. **Why choose NEXDAN:** Saudi company aligned with Vision 2030 and the National Strategy for Data and AI; Arabic and English products; data handled under Saudi data protection law; one team from idea to launch.
4. **Proof:** real projects or pilot results only. Leave out until available.
5. **How we work:** four steps, discovery, prototype, build, support.
6. **FAQ (5 questions):** cost range, timeline, data hosting in the Kingdom, working with existing systems, support after launch. Mark up with `FAQPage` JSON-LD.
7. **One call to action:** book a consultation (form or WhatsApp).

### Profile post, week 2 (Team)

- [ ] **What we build:** AI, software and IoT, linking to the new money page.
- [ ] Reply to all new reviews; send one reminder to anyone who has not reviewed.

---

## Week 3: service pages and the first local articles

### Service pages (Dev; Team confirms scope)

The site is currently one page. This week adds three service pages, in both languages:

- [ ] `/ai-solutions/`: الذكاء الاصطناعي للشركات
- [ ] `/software-development/`: تطوير البرمجيات
- [ ] `/iot-solutions/`: حلول إنترنت الأشياء

Each: title and H1 naming the service and "Saudi Arabia" (السعودية), with the money page covering Jeddah specifically.

### Neighbourhood articles (Team writes in Arabic, Dev publishes both languages)

Publish two this week and three next week:

1. **إنترنت الأشياء في مستودعات جدة: كيف تحمي الحساسات البضائع من رطوبة الصيف**
   IoT in Jeddah warehouses: how sensors protect goods from summer humidity near Jeddah Islamic Port
2. **موسم الحج والعمرة: كيف يدير الذكاء الاصطناعي ذروة الحجوزات في ممر جدة ومكة**
   Hajj and Umrah season: how AI handles booking peaks along the Jeddah–Makkah corridor
3. **حساسات ذكية لمباني جدة التاريخية: حماية البلد بإنترنت الأشياء**
   Smart sensors for historic Jeddah: protecting Al-Balad with IoT
4. **من جدة إلى الرياض: ماذا تعني الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي لشركتك المتوسطة**
   From Jeddah to Riyadh: what the National Strategy for Data and AI means for mid-sized companies
5. **قبل إكسبو 2030 الرياض: البرمجيات التي تحتاجها شركات الضيافة والفعاليات الآن**
   Before Expo 2030 Riyadh: the software hospitality and events companies need now

Each article: 800–1,200 words, one real example or data point with its source, one link to its service page, one link to the money page, and a closing call to action.

### Profile post, week 3 (Team)

- [ ] Share article 1 with a photo from a real site visit or the team at work.

---

## Week 4: link the site together and audit it

### Internal link loop (Dev)

```
Home ──► Money page (Jeddah) ──► Service pages ──► Articles
  ▲              ▲                     ▲              │
  └──────────────┴─────────────────────┴──────────────┘
```

| From | Links to | Example Arabic anchor text |
| --- | --- | --- |
| Home | Money page, all three service pages, latest two articles | حلول الذكاء الاصطناعي في جدة |
| Money page | All three service pages, contact | تطوير البرمجيات للشركات |
| Each service page | Money page, its two closest articles, contact | حلول إنترنت الأشياء في السعودية |
| Each article | Its service page, the money page, home (logo) | الذكاء الاصطناعي للشركات في جدة |
| Header and footer (every page) | Home, money page, service pages, contact, language switch | — |

Anchor text describes the page it points to. Avoid "click here" and avoid repeating the exact same anchor on every link.

### Technical audit (Dev)

Crawl the site with Screaming Frog (free up to 500 URLs) and check Search Console.

| Check | How to find it | Fix |
| --- | --- | --- |
| Broken links | Crawl: response codes 4xx | Update or remove the link; redirect moved pages |
| Duplicate titles or descriptions | Crawl: Page Titles and Meta Description tabs, filter "Duplicate" | Write a unique title and description per page and language |
| Missing or multiple H1s | Crawl: H1 tab | Exactly one H1 per page |
| Redirect chains | Crawl: Reports, Redirect Chains | Point every link straight at the final URL |
| Canonical issues | Crawl: Canonicals tab | Each page canonicalises to itself; no canonical to a redirect or a 404 |
| hreflang errors | Crawl: hreflang tab; Search Console international targeting | Each Arabic page links to its English twin and back, plus `x-default` to Arabic |
| Missing pages in index | Search Console: Pages report | Fix the reason given, then request indexing |
| Speed | PageSpeed Insights on mobile | Keep Lighthouse performance at 90+ (currently 99–100) |

### Profile post, week 4 (Team)

- [ ] Vision 2030 post: how NEXDAN's work supports the Kingdom's digital goals, linking to article 4.

### Measure at day 30

- [ ] Search Console: impressions and clicks for "الذكاء الاصطناعي جدة", "شركة برمجيات جدة", "إنترنت الأشياء السعودية" and the English equivalents.
- [ ] Google Business Profile: number of reviews (target 10+), searches, calls and website clicks.
- [ ] Decide the next city page: Riyadh (`/ai-solutions-riyadh/`) with the same structure.

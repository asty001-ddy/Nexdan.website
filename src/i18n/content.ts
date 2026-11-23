// All page copy lives here, one object per language, so Arabic and English stay in step.
// Brand lines (name meaning, pillars, mission) come from the NEXDAN "Our Story" posters
// (docs/brand-reference/). Service descriptions were added for search and clarity; confirm
// their scope with the NEXDAN team before launch.

export type Lang = 'ar' | 'en';

export const content = {
  ar: {
    meta: {
      title: 'نيكسدان | حلول الذكاء الاصطناعي والبرمجيات وإنترنت الأشياء',
      description:
        'نيكسدان شركة سعودية تبني حلول الذكاء الاصطناعي والبرمجيات وإنترنت الأشياء للشركات في جدة والرياض وجميع مناطق المملكة، بما يتماشى مع رؤية 2030.',
      ogLocale: 'ar_SA',
    },
    skip: 'تخطَّ إلى المحتوى',
    nav: {
      label: 'القائمة الرئيسية',
      services: 'خدماتنا',
      process: 'كيف نعمل',
      pillars: 'ركائزنا',
      mission: 'رسالتنا',
      contact: 'تواصل معنا',
      switch: 'English',
      switchHref: '/en/',
    },
    hero: {
      tagline: 'Next Digital Advancement Network',
      title: 'نبني حلول الذكاء الاصطناعي والبرمجيات وإنترنت الأشياء لشركات المملكة',
      lead: 'نيكسدان، شبكة الجيل القادم للتقدّم الرقمي، شركة سعودية وُلدت من رؤية لبناء منظومة رقمية متكاملة. نعمل مع الشركات في جدة والرياض وسائر مناطق المملكة على حلول ذكية ترفع الكفاءة وتدعم النمو، بما يتماشى مع رؤية السعودية 2030.',
      cta: 'ناقش مشروعك معنا',
      secondary: 'تعرّف على خدماتنا',
    },
    map: {
      label: 'خريطة المملكة العربية السعودية، تربط فيها خطوط الشبكة جدة والرياض بمدن المملكة',
      jeddah: 'جدة',
      riyadh: 'الرياض',
    },
    services: {
      title: 'ما نقدّمه',
      intro: 'نصمّم ونبني الأنظمة الرقمية التي تعتمد عليها شركتك، من الفكرة الأولى حتى الإطلاق.',
      note: 'الشاشات المعروضة أمثلة توضيحية.',
      items: [
        {
          icon: 'ai',
          title: 'الذكاء الاصطناعي للشركات',
          text: 'مساعدات ذكية، وأتمتة لمعالجة المستندات، وتحليلات تنبؤية مبنية على بيانات شركتك، باللغتين العربية والإنجليزية.',
        },
        {
          icon: 'code',
          title: 'تطوير البرمجيات',
          text: 'منصات ويب وتطبيقات جوال وأنظمة داخلية تُبنى حسب طريقة عمل فريقك، وتتكامل مع الأنظمة التي تستخدمها اليوم.',
        },
        {
          icon: 'iot',
          title: 'حلول إنترنت الأشياء',
          text: 'حساسات وأجهزة متصلة تراقب المباني والمستودعات والمعدّات، مع لوحات متابعة وتنبيهات لحظية.',
        },
      ],
    },
    demos: {
      ai: {
        file: 'فاتورة-مورد.pdf',
        status: 'تمت القراءة',
        heading: 'البيانات المستخرجة',
        fields: [
          ['المورد', 'شركة الساحل للتوريد'],
          ['رقم الفاتورة', 'INV-20418'],
          ['التاريخ', '12/11/2026'],
          ['الإجمالي', '48,300 ر.س'],
        ],
      },
      software: {
        app: 'بوابة العملاء',
        kpis: [['طلبات اليوم', '128'], ['قيد التنفيذ', '34'], ['مكتملة', '94']],
        chart: 'الطلبات خلال الأسبوع',
        days: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس'],
      },
      iot: {
        place: 'مستودع 3، جدة',
        metric: 'الرطوبة',
        value: '68%',
        limit: 'الحد',
        limitValue: '60%',
        alert: 'الرطوبة أعلى من الحد المسموح',
      },
    },
    ambition: {
      title: 'المملكة تبني اقتصاد الذكاء الاصطناعي',
      intro: 'أطلقت المملكة الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي عام 2020، وهذه أهدافها بحلول 2030. نيكسدان تبني الحلول التي تحتاجها الشركات لتكون جزءاً منها.',
      start: '2020',
      end: '2030',
      startLabel: 'إطلاق الاستراتيجية',
      endLabel: 'موعد تحقيق الأهداف',
      now: 'اليوم',
      invest: { value: '75', unit: 'مليار ريال', label: 'استثمارات محلية وأجنبية مستهدفة في البيانات والذكاء الاصطناعي', key: 'كل خط يمثل مليار ريال' },
      people: { value: '20,000', label: 'متخصص وخبير في البيانات والذكاء الاصطناعي', key: 'كل نقطة تمثل 100 متخصص' },
      startups: { value: '+300', label: 'شركة ناشئة في البيانات والذكاء الاصطناعي', key: 'كل مربع يمثل شركة ناشئة' },
      rank: { value: '15', label: 'هدف المملكة: ضمن أفضل 15 دولة في الذكاء الاصطناعي عالمياً', key: 'ترتيب الدول' },
      source: 'المصدر: الاستراتيجية الوطنية للبيانات والذكاء الاصطناعي، سعوديبيديا',
      sourceUrl: 'https://saudipedia.com/en/national-strategy-for-data-and-ai-nsdai',
    },
    process: {
      title: 'كيف نعمل',
      intro: 'أربع مراحل واضحة، ولكل مرحلة مخرج تستلمه قبل الانتقال إلى التي تليها.',
      outputLabel: 'المخرج',
      steps: [
        { title: 'الاكتشاف', text: 'نفهم سير العمل والبيانات والأنظمة الحالية، ونحدد أين تصنع التقنية فرقاً.', output: 'خطة المشروع' },
        { title: 'النموذج الأولي', text: 'نبني نسخة أولية يجربها فريقك قبل الالتزام بالتطوير الكامل.', output: 'نموذج قابل للتجربة' },
        { title: 'التطوير', text: 'نطوّر الحل ونربطه بأنظمتك ونختبره مع المستخدمين.', output: 'نظام جاهز للإطلاق' },
        { title: 'الدعم', text: 'نتابع الأداء ونحدّث الحل مع نمو أعمالك.', output: 'تحسين مستمر' },
      ],
    },
    ecosystem: {
      title: 'كيف تترابط المنظومة',
      intro: 'ثلاث قدرات تقنية تقوم على أربع ركائز، لخدمة الأفراد والشركات والمجتمع.',
      capabilities: ['الذكاء الاصطناعي', 'البرمجيات', 'إنترنت الأشياء'],
      beneficiaries: ['الأفراد', 'الشركات', 'المجتمع'],
      rings: ['القدرات', 'الركائز', 'المستفيدون'],
      label: 'مخطط دائري: نيكسدان في المركز، تحيط بها ثلاث قدرات، ثم أربع ركائز، ثم المستفيدون',
    },
    name: {
      title: 'معنى الاسم',
      letters: [
        { letter: 'N', word: 'Next', meaning: 'الجيل القادم' },
        { letter: 'D', word: 'Digital', meaning: 'التحوّل الرقمي' },
        { letter: 'A', word: 'Advancement', meaning: 'التقدّم والابتكار' },
        { letter: 'N', word: 'Network', meaning: 'شبكة مترابطة' },
      ],
    },
    pillars: {
      title: 'ركائزنا',
      items: [
        { icon: 'growth', title: 'تمكين الأعمال', text: 'بحلول رقمية ذكية' },
        { icon: 'network', title: 'ربط القطاعات', text: 'في منصة متكاملة' },
        { icon: 'ai', title: 'توظيف الذكاء الاصطناعي', text: 'لرفع الكفاءة والإنتاجية' },
        { icon: 'layers', title: 'بناء منظومة رقمية', text: 'قابلة للتوسّع عالمياً' },
      ],
    },
    mission: {
      title: 'رسالتنا',
      text: 'تسريع التقدّم الرقمي عبر حلول مبتكرة وشبكة متكاملة، تضيف قيمة حقيقية للأفراد والشركات والمجتمع.',
    },
    contact: {
      title: 'تواصل معنا',
      heading: 'لنبنِ ما هو قادم',
      text: 'أخبرنا بما تريد بناءه وأين تعمل شركتك، وسنرتّب معك اجتماعاً أولياً لفهم احتياجك.',
      email: 'info@nexdan.sa',
      subject: 'استفسار عن مشروع',
    },
    footer: '© نيكسدان. جميع الحقوق محفوظة.',
    notFound: {
      title: 'الصفحة غير موجودة',
      text: 'ربما نُقلت هذه الصفحة أو كُتب الرابط بشكل خاطئ.',
      back: 'العودة إلى الصفحة الرئيسية',
    },
  },
  en: {
    meta: {
      title: 'AI, Software & IoT Solutions in Saudi Arabia | NEXDAN',
      description:
        'NEXDAN builds AI, software and IoT solutions for businesses in Jeddah, Riyadh and across Saudi Arabia, in line with Vision 2030. Tell us about your project.',
      ogLocale: 'en_US',
    },
    skip: 'Skip to content',
    nav: {
      label: 'Main',
      services: 'Services',
      process: 'How we work',
      pillars: 'Pillars',
      mission: 'Mission',
      contact: 'Contact',
      switch: 'العربية',
      switchHref: '/',
    },
    hero: {
      tagline: 'Next Digital Advancement Network',
      title: 'We build AI, software and IoT solutions for Saudi businesses',
      lead: 'NEXDAN is a Saudi company founded to build an integrated digital ecosystem. We work with businesses in Jeddah, Riyadh and across the Kingdom on intelligent solutions that raise efficiency and support growth, in line with Saudi Vision 2030.',
      cta: 'Discuss your project',
      secondary: 'See our services',
    },
    map: {
      label: 'Map of Saudi Arabia with network lines linking Jeddah and Riyadh to cities across the Kingdom',
      jeddah: 'Jeddah',
      riyadh: 'Riyadh',
    },
    services: {
      title: 'What we do',
      intro: 'We design and build the digital systems your business runs on, from the first idea to launch.',
      note: 'Screens shown are illustrative examples.',
      items: [
        {
          icon: 'ai',
          title: 'AI for business',
          text: 'Assistants, document automation and forecasting built on your company’s data, in Arabic and English.',
        },
        {
          icon: 'code',
          title: 'Software development',
          text: 'Web platforms, mobile apps and internal systems built around how your team works, and connected to the systems you already use.',
        },
        {
          icon: 'iot',
          title: 'IoT solutions',
          text: 'Connected sensors and devices that monitor buildings, warehouses and equipment, with live dashboards and alerts.',
        },
      ],
    },
    demos: {
      ai: {
        file: 'supplier-invoice.pdf',
        status: 'Read',
        heading: 'Extracted fields',
        fields: [
          ['Supplier', 'Coastal Supply Co.'],
          ['Invoice no.', 'INV-20418'],
          ['Date', '12/11/2026'],
          ['Total', 'SAR 48,300'],
        ],
      },
      software: {
        app: 'Customer portal',
        kpis: [['Orders today', '128'], ['In progress', '34'], ['Completed', '94']],
        chart: 'Orders this week',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
      },
      iot: {
        place: 'Warehouse 3, Jeddah',
        metric: 'Humidity',
        value: '68%',
        limit: 'Limit',
        limitValue: '60%',
        alert: 'Humidity above the allowed limit',
      },
    },
    ambition: {
      title: 'The Kingdom is building an AI economy',
      intro: 'Saudi Arabia launched its National Strategy for Data and AI in 2020. These are its targets for 2030. NEXDAN builds the systems companies need to take part.',
      start: '2020',
      end: '2030',
      startLabel: 'Strategy launched',
      endLabel: 'Target year',
      now: 'Today',
      invest: { value: '75', unit: 'billion SAR', label: 'Local and foreign investment targeted in data and AI', key: 'Each line is SAR 1 billion' },
      people: { value: '20,000', label: 'Data and AI specialists and experts', key: 'Each dot is 100 specialists' },
      startups: { value: '300+', label: 'Data and AI startups supported', key: 'Each square is one startup' },
      rank: { value: '15', label: 'The goal: a top 15 country in AI worldwide', key: 'Country ranking' },
      source: 'Source: National Strategy for Data and AI, Saudipedia',
      sourceUrl: 'https://saudipedia.com/en/national-strategy-for-data-and-ai-nsdai',
    },
    process: {
      title: 'How we work',
      intro: 'Four clear stages, each ending with something you receive before we move to the next.',
      outputLabel: 'You get',
      steps: [
        { title: 'Discovery', text: 'We map your workflow, data and current systems, and agree where technology will make a difference.', output: 'Project plan' },
        { title: 'Prototype', text: 'We build an early version your team can try before committing to the full build.', output: 'Working prototype' },
        { title: 'Build', text: 'We build the solution, connect it to your systems and test it with your users.', output: 'Launch-ready system' },
        { title: 'Support', text: 'We monitor performance and update the solution as your business grows.', output: 'Ongoing improvement' },
      ],
    },
    ecosystem: {
      title: 'How the network fits together',
      intro: 'Three technical capabilities, built on four pillars, serving individuals, businesses and society.',
      capabilities: ['AI', 'Software', 'IoT'],
      beneficiaries: ['Individuals', 'Businesses', 'Society'],
      rings: ['Capabilities', 'Pillars', 'Who benefits'],
      label: 'Radial diagram: NEXDAN at the centre, surrounded by three capabilities, then four pillars, then who benefits',
    },
    name: {
      title: 'What the name means',
      letters: [
        { letter: 'N', word: 'Next', meaning: 'The future ahead' },
        { letter: 'D', word: 'Digital', meaning: 'Digital transformation' },
        { letter: 'A', word: 'Advancement', meaning: 'Progress and innovation' },
        { letter: 'N', word: 'Network', meaning: 'A connected ecosystem' },
      ],
    },
    pillars: {
      title: 'Our pillars',
      items: [
        { icon: 'growth', title: 'Business enablement', text: 'Through smart digital solutions' },
        { icon: 'network', title: 'Industry connectivity', text: 'A unified digital platform' },
        { icon: 'ai', title: 'Artificial intelligence', text: 'To drive efficiency and productivity' },
        { icon: 'layers', title: 'Scalable digital ecosystem', text: 'Ready for global expansion' },
      ],
    },
    mission: {
      title: 'Our mission',
      text: 'To accelerate digital advancement through innovative, integrated solutions, creating real value for individuals, businesses and society.',
    },
    contact: {
      title: 'Contact',
      heading: 'Let’s build what’s next',
      text: 'Tell us what you want to build and where your business operates, and we will arrange a first meeting to understand what you need.',
      email: 'info@nexdan.sa',
      subject: 'Project enquiry',
    },
    footer: '© NEXDAN. All rights reserved.',
    notFound: {
      title: 'Page not found',
      text: 'This page may have moved, or the link may be mistyped.',
      back: 'Back to the home page',
    },
  },
} as const;

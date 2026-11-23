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

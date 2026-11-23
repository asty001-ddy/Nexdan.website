// All page copy lives here, one object per language, so Arabic and English stay in step.
// Source: NEXDAN "Our Story" brand posters (docs/brand-reference/).

export type Lang = 'ar' | 'en';

export const content = {
  ar: {
    meta: {
      title: 'نيكسدان | شبكة الجيل القادم للتقدّم الرقمي',
      description:
        'نيكسدان منظومة رقمية سعودية متكاملة تسرّع التقدّم وتربط التقنيات بالقطاعات لتقديم حلول ذكية للأفراد والأعمال.',
    },
    nav: { story: 'قصتنا', pillars: 'ركائزنا', mission: 'رسالتنا', contact: 'تواصل معنا', switch: 'English', switchHref: '/en/' },
    hero: {
      tagline: 'Next Digital Advancement Network',
      title: 'شبكة الجيل القادم للتقدّم الرقمي',
      lead: 'ولدت نيكسدان من رؤية سعودية لبناء منظومة رقمية متكاملة تُسرّع التقدّم، وتربط بين التقنيات والقطاعات، لتصنع حلولاً ذكية تحسّن حياة الأفراد وتدعم نمو الأعمال في المملكة وخارجها.',
      cta: 'تواصل معنا',
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
      title: 'ما نبنيه',
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
    contact: { title: 'تواصل معنا', text: 'يسعدنا الحديث عن مشروعك القادم.', email: 'info@nexdan.sa' },
    footer: '© نيكسدان. جميع الحقوق محفوظة.',
  },
  en: {
    meta: {
      title: 'NEXDAN | Next Digital Advancement Network',
      description:
        'NEXDAN is a Saudi integrated digital ecosystem that accelerates progress and connects technology with industries to deliver intelligent solutions for people and businesses.',
    },
    nav: { story: 'Our story', pillars: 'What we build', mission: 'Mission', contact: 'Contact', switch: 'العربية', switchHref: '/' },
    hero: {
      tagline: 'Next Digital Advancement Network',
      title: 'The next digital advancement network',
      lead: 'NEXDAN was founded with a Saudi vision to build an integrated digital ecosystem that accelerates progress, connects technology with industries, and delivers intelligent solutions that enhance people’s lives and support business growth across Saudi Arabia and beyond.',
      cta: 'Get in touch',
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
      title: 'What we build',
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
    contact: { title: 'Contact', text: 'We would be glad to hear about your next project.', email: 'info@nexdan.sa' },
    footer: '© NEXDAN. All rights reserved.',
  },
} as const;

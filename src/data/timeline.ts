export interface TimelineEntry {
    year: { en: string; ar: string };
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    tags: string[];
}

export const TIMELINE: TimelineEntry[] = [
    {
        year: { en: "2014", ar: "2014" },
        title: {
            en: "CMS Development Era",
            ar: "عصر تطوير أنظمة إدارة المحتوى",
        },
        description: {
            en: "Built dynamic websites and content systems using WordPress, Joomla, and Drupal, focusing on UI, responsiveness, and user experience.",
            ar: "قمت ببناء مواقع ويب ديناميكية وأنظمة محتوى باستخدام WordPress و Joomla و Drupal، مع التركيز على واجهة المستخدم والاستجابة وتجربة المستخدم.",
        },
        tags: ["CMS", "WordPress", "Joomla", "Drupal", "PHP"],
    },
    {
        year: { en: "2018", ar: "2018" },
        title: {
            en: "Magento & eCommerce Engineering",
            ar: "هندسة ماجنتو والتجارة الإلكترونية",
        },
        description: {
            en: "Specialized in Magento 2 frontend development, contributing to enterprise eCommerce platforms for global brands.",
            ar: "ساهمت في تطوير واجهات متاجر Magento لعلامات عالمية مع التركيز على الأداء وتجربة المستخدم.",
        },
        tags: ["Magento", "Magento 2", "Knockout.js", "PHP"],
    },
    {
        year: { en: "2025", ar: "2025" },
        title: {
            en: "Modern Frontend & Full Stack",
            ar: "واجهة أمامية حديثة وتطوير تطبيقات كاملة",
        },
        description: {
            en: "Expanded into modern JavaScript ecosystems, building scalable web applications using React, Next.js, and the MERN stack.",
            ar: "تم التوسع في بيئات جافا سكريبت الحديثة، وبناء تطبيقات ويب قابلة للتوسع باستخدام React و Next.js ومجموعة MERN.",
        },
        tags: [
            "Frontend & Full Stack",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
        ],
    },
    {
        year: { en: "2026", ar: "2026" },
        title: {
            en: "Automation & System Integration Engineering",
            ar: "هندسة الأتمتة وتكامل الأنظمة",
        },
        description: {
            en: "Bridging frontend engineering with system integrations to build scalable automation workflows that deliver real business impact.",
            ar: "الربط بين هندسة الواجهة الأمامية وتكامل الأنظمة لبناء سير عمل آلي قابل للتطوير يحقق تأثيراً حقيقياً على الأعمال.",
        },
        tags: [
            "Automation & Integrations",
            "Make.com",
            "API",
            "CRM",
            "Automation",
            "Monday.com",
            "trello",
            "telegram",
        ],
    },
    {
        year: { en: "Today", ar: "اليوم" },
        title: {
            en: "Frontend + Automation + System Integration Engineer",
            ar: "مهندس واجهة أمامية + أتمتة + تكامل أنظمة",
        },
        description: {
            en: "I build scalable web applications and automation systems that improve performance, streamline workflows, and drive business results.",
            ar: "أقوم ببناء تطبيقات ويب قابلة للتوسع وأنظمة أتمتة تحسن الأداء وتبسط سير العمل وتؤدي إلى نتائج أعمال.",
        },
        tags: ["Automation & Integrations"],
    },
];

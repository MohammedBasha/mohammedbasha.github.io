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
        year: { en: "03-2026", ar: "03-2026" },
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
            "Trello",
            "Telegram",
        ],
    },
    {
        year: { en: "04-2026", ar: "04-2026" },
        title: {
            en: "Containerization & Deployment (Docker)",
            ar: "التغليف والنشر باستخدام Containers (Docker)",
        },
        description: {
            en: "Focused on making full-stack applications production-ready by containerizing services, managing environments, and enabling reproducible setups using Docker and Docker Compose.",
            ar: "يركز على جعل التطبيقات الكاملة جاهزة للإنتاج من خلال تحويل الخدمات إلى Containers، وإدارة البيئات، وتمكين عمليات الإعداد القابلة للتكرار باستخدام Docker و Docker Compose.",
        },
        tags: [
            "DevOps & Deployment",
            "Docker",
            "Docker Compose",
            "Environment Configuration",
            "Multi-service Architecture",
        ],
    },
    {
        year: { en: "Today", ar: "اليوم" },
        title: {
            en: "Frontend / Full-Stack + Automation + System Integration Engineer",
            ar: "مهندس تطوير واجهات أمامية / مطور تطبيقات متكاملة + أتمتة + تكامل أنظمة",
        },
        description: {
            en: "I build scalable, production-ready web applications and automation systems - designed to perform reliably, integrate seamlessly, and be easily deployed across environments.",
            ar: "أقوم ببناء تطبيقات ويب وأنظمة أتمتة قابلة للتطوير وجاهزة للإنتاج - مصممة للعمل بشكل موثوق، والتكامل بسلاسة، وسهولة النشر عبر البيئات المختلفة.",
        },
        tags: [],
    },
];

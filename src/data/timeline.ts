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
            en: "Containerization & Cloud Deployment",
            ar: "Containerization & Cloud Deployment",
        },
        description: {
            en: "Focused on production readiness by containerizing full-stack applications with Docker and Docker Compose, and deploying them using Google Cloud Platform (Cloud Run) for scalable, reproducible environments. Deployment: Docker · Docker Compose · Cloud Run · Artifact Registry · Environment Configuration · Multi-service Architecture",
            ar: "التركيز على جاهزية الإنتاج من خلال containerizing التطبيقات المتكاملة باستخدام Docker وDocker Compose، ونشرها باستخدام منصة Google Cloud (Cloud Run) لبيئات قابلة للتوسع والتكرار. Deployment: Docker · Docker Compose · Cloud Run · Artifact Registry · Environment Configuration · Multi-service Architecture",
        },
        tags: [
            "DevOps & Deployment",
            "Docker",
            "Docker Compose",
            "Environment Configuration",
            "Multi-service Architecture",
            "Google Cloud Platform",
            "GCP",
            "Cloud Run",
            "Artifact Registry",
        ],
    },
    {
        year: { en: "Today", ar: "اليوم" },
        title: {
            en: "Frontend / Full-Stack + Automation + System Integration Engineer",
            ar: "مهندس تطوير واجهات أمامية / مطور تطبيقات متكاملة + أتمتة + تكامل أنظمة",
        },
        description: {
            en: "I build scalable, production-ready web applications and automation systems designed to perform reliably, integrate seamlessly, and deploy consistently across cloud environments.",
            ar: "أقوم ببناء تطبيقات ويب وأنظمة أتمتة قابلة للتطوير وجاهزة للإنتاج، مصممة للعمل بشكل موثوق، والتكامل بسلاسة، والنشر بشكل متسق عبر بيئات الحوسبة السحابية.",
        },
        tags: [],
    },
];

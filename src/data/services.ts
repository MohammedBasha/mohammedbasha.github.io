export interface Service {
    id: string;
    slug: string;
    name: { en: string; ar: string };
    description: { en: string; ar: string };
    longDescription: { en: string; ar: string };
    icon: string;
    image: {
        en: string;
        ar: string;
    };
    filterTags: { en: string; ar: string };
}

export const SERVICES: Service[] = [
    {
        id: "magento-dev",
        slug: "magento-developer",
        name: { en: "Magento Development", ar: "تطوير ماجنتو" },
        description: {
            en: "Enterprise-grade Magento 2 solutions focused on performance, scalability, and conversion optimization.",
            ar: "حلول Magento 2 على مستوى المؤسسات تركز على الأداء وقابلية التوسع وتحسين معدل التحويل.",
        },
        longDescription: {
            en: "I build and optimize storefronts that deliver fast load times, seamless user experience, and measurable impact on revenue and customer engagement.",
            ar: "أقوم ببناء وتحسين واجهات المتاجر التي توفر أوقات تحميل سريعة، وتجربة مستخدم سلسة، وتأثيراً قابلًا للقياس على الإيرادات وتفاعل العملاء.",
        },
        icon: "ShoppingBag",
        image: {
            en: "service-magento-en",
            ar: "service-magento-ar",
        },
        filterTags: {
            en: "Magento",
            ar: "ماجنتو",
        },
    },
    {
        id: "cms-dev",
        slug: "cms-developer",
        name: { en: "CMS Development", ar: "تطوير أنظمة إدارة المحتوى" },
        description: {
            en: "Custom CMS solutions using WordPress, Drupal, and Joomla tailored for flexibility, scalability, and ease of content management.",
            ar: "حلول إدارة المحتوى المخصصة باستخدام WordPress و Drupal و Joomla مصممة خصيصاً لتوفير المرونة وقابلية التوسع وسهولة إدارة المحتوى.",
        },
        longDescription: {
            en: "From corporate websites to internal systems, I build platforms that are easy to manage, fast, and optimized for SEO and long-term growth.",
            ar: "من مواقع الشركات إلى الأنظمة الداخلية، أقوم ببناء منصات سهلة الإدارة وسريعة ومحسّنة لمحركات البحث والنمو على المدى الطويل.",
        },
        icon: "FileCode",
        image: {
            en: "service-cms-en",
            ar: "service-cms-ar",
        },
        filterTags: {
            en: "CMS",
            ar: "نظام إدارة المحتوى",
        },
    },
    {
        id: "frontend-fullstack",
        slug: "react-nextjs-developer",
        name: {
            en: "Modern Frontend & Full Stack",
            ar: "تطوير الواجهات الحديثة والتطوير الشامل",
        },
        description: {
            en: "High-performance web applications built with React, Next.js, and the MERN stack - designed as scalable, production-ready systems, containerized with Docker for consistent environments and simplified deployment.",
            ar: "تطبيقات ويب عالية الأداء مبنية باستخدام React و Next.js و MERN stack - مصممة كأنظمة قابلة للتوسع وجاهزة للإنتاج، ووضعها في Containers باستخدام Docker لبيئات متسقة ونشر مبسط.",
        },
        longDescription: {
            en: "I focus on scalable architecture, clean UI, and efficient data handling to deliver fast, reliable, and maintainable digital products.",
            ar: "أركز على بنية قابلة للتطوير، وواجهة مستخدم نظيفة، ومعالجة بيانات فعالة لتقديم منتجات رقمية سريعة وموثوقة وقابلة للصيانة.",
        },
        icon: "Code2",
        image: {
            en: "service-front-en",
            ar: "service-front-ar",
        },
        filterTags: {
            en: "Frontend & Full Stack",
            ar: "الواجهة الأمامية والتطوير الشامل",
        },
    },
    {
        id: "automation",
        slug: "automation-integration",
        name: {
            en: "Automation & Integrations",
            ar: "أتمتة سير العمل والتكاملات",
        },
        description: {
            en: "Workflow automation and system integrations that connect your tools and streamline operations, and run reliably across environments.",
            ar: "أتمتة سير العمل وتكامل الأنظمة التي تربط أدواتك وتبسط العمليات، وتعمل بشكل موثوق عبر البيئات المختلفة.",
        },
        longDescription: {
            en: "I design automation pipelines using Make.com and APIs to reduce manual work, improve efficiency, and enable scalable business processes.",
            ar: "أقوم بتصميم مسارات الأتمتة باستخدام Make.com وواجهات برمجة التطبيقات لتقليل العمل اليدوي، وتحسين الكفاءة، وتمكين عمليات الأعمال القابلة للتطوير.",
        },
        icon: "Zap",
        image: {
            en: "service-automation-en",
            ar: "service-automation-ar",
        },
        filterTags: {
            en: "Automation & Integrations",
            ar: "أتمتة وتكاملات",
        },
    },
];

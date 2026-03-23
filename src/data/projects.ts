type Localized<T> = {
    en: T;
    ar: T;
};

export interface Project {
    id: string;
    title: Localized<string>;
    description: Localized<string>;
    features: Localized<string[]>;
    impact: Localized<string[]>;
    techStack: string[];
    tags: string[];
    category: string;
    image?: string;
    link?: string;
    github?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "real-estate-automation-system",

        title: {
            en: "Real Estate Lead Automation & Matching System",
            ar: "نظام أتمتة ومطابقة Leads للعقارات",
        },

        description: {
            en: "A real estate automation system that streamlines lead management starting from WordPress forms, processes data through automation workflows, and synchronizes it with CRM tools. The system includes an intelligent matching engine that pairs buyer requests with available properties and sends real-time notifications to sales teams.",
            ar: "نظام أتمتة لإدارة Leads في قطاع العقارات يبدأ من نماذج WordPress، يتم فيه معالجة البيانات عبر سير عمل آلي وربطها بأنظمة CRM. يتضمن النظام محرك مطابقة ذكي يربط طلبات الشراء بالعقارات المتاحة ويرسل إشعارات فورية لفريق المبيعات.",
        },

        features: {
            en: [
                "Lead capture via WordPress forms",
                "Automated workflows using Make.com",
                "CRM synchronization with Monday.com and Trello",
                "Real-time lead processing and routing",
                "Intelligent property-to-buyer matching system",
                "Instant notifications via Telegram bot",
                "Centralized lead management pipeline",
                "Scalable automation architecture",
            ],
            ar: [
                "جمع الـ Leads عبر نماذج WordPress",
                "أتمتة سير العمل باستخدام Make.com",
                "ربط البيانات مع Monday.com و Trello",
                "معالجة وتوجيه الـ Leads بشكل لحظي",
                "نظام ذكي لمطابقة العقارات مع الطلبات",
                "إشعارات فورية عبر Telegram Bot",
                "إدارة مركزية لمسار العملاء المحتملين",
                "بنية أتمتة قابلة للتوسع",
            ],
        },

        impact: {
            en: [
                "Reduced manual work in lead handling and data entry",
                "Improved response time to potential buyers",
                "Increased efficiency of sales teams through automation",
                "Enabled real-time matching between supply and demand",
            ],
            ar: [
                "تقليل العمل اليدوي في إدارة البيانات والـ Leads",
                "تحسين سرعة الاستجابة للعملاء المحتملين",
                "رفع كفاءة فرق المبيعات عبر الأتمتة",
                "تحقيق مطابقة لحظية بين الطلب والعرض",
            ],
        },
        image: "/images/projects/real-estate-automation.webp",
        techStack: [
            "WordPress",
            "Make.com",
            "Monday.com",
            "Trello",
            "Telegram Bot API",
        ],
        tags: ["CMS", "Automation & Integrations"],
        category: "automation",
        link: "https://dubaiagentx.com/elementor-6/",
        github: "",
    },
    {
        id: "companions",
        title: {
            en: "Companions - SaaS Learning Management Platform",
            ar: "Companions - منصة إدارة تعلم SaaS",
        },

        description: {
            en: "A scalable SaaS LMS platform built with Next.js that enables organizations to manage courses, users, and subscriptions in one system. Designed with real-time features, secure authentication, and integrated billing to support growing digital education platforms.",
            ar: "منصة SaaS لإدارة التعلم مبنية باستخدام Next.js تتيح للشركات إدارة الدورات والمستخدمين والاشتراكات في نظام واحد. تم تصميمها لدعم التوسع مع ميزات الوقت الحقيقي ونظام مصادقة آمن وتكامل مع أنظمة الدفع.",
        },

        features: {
            en: [
                "Multi-tenant SaaS architecture",
                "Authentication & role-based access control",
                "Subscription & billing system integration",
                "Real-time updates and notifications",
                "Dashboard for course and user management",
            ],
            ar: [
                "بنية SaaS متعددة المستأجرين (Multi-tenant)",
                "نظام تسجيل دخول وصلاحيات المستخدمين",
                "تكامل مع أنظمة الاشتراكات والدفع",
                "تحديثات وإشعارات في الوقت الحقيقي",
                "لوحة تحكم لإدارة الدورات والمستخدمين",
            ],
        },

        impact: {
            en: [
                "Enables businesses to launch and scale online education platforms",
                "Reduces manual management through automation",
                "Supports subscription-based revenue models",
            ],
            ar: [
                "تمكّن الشركات من إطلاق منصات تعليم إلكتروني بسهولة",
                "تقليل العمل اليدوي من خلال الأتمتة",
                "دعم نماذج الربح القائمة على الاشتراكات",
            ],
        },
        image: "/images/projects/companions.webp",
        techStack: [
            "Next.js",
            "TypeScript",
            "Zod",
            "Supabase",
            "Tailwind",
            "Shadcn",
            "Clerk",
            "Sentry",
            "Vapi",
        ],
        tags: ["Frontend & Full Stack"],
        category: "modern-frontend",
        link: "https://companions-psnk8x1it-mohammed-bashas-projects-172f8453.vercel.app/",
        github: "https://github.com/MohammedBasha/companions",
    },
    {
        id: "spotify-clone",
        title: {
            en: "Spotify Clone - Real-Time Music Streaming Platform",
            ar: "Spotify Clone - منصة بث موسيقي في الوقت الحقيقي",
        },

        description: {
            en: "A full-stack MERN music streaming application with real-time playback, playlist management, and responsive mobile-first design. The platform also includes real-time chat functionality and a modern UI for seamless user experience.",
            ar: "تطبيق بث موسيقي متكامل مبني باستخدام MERN مع تشغيل موسيقى في الوقت الحقيقي، إدارة قوائم التشغيل، وتصميم متجاوب يعمل على الهواتف. يتضمن أيضاً خاصية الدردشة في الوقت الحقيقي وتجربة مستخدم حديثة.",
        },

        features: {
            en: [
                "Real-time music playback system",
                "Playlist creation and management",
                "Real-time chat functionality using Socket.IO",
                "Authentication and user management (Clerk)",
                "Responsive mobile-first UI with Tailwind CSS",
                "Media uploads and storage via Cloudinary",
                "State management with Zustand",
                "Reusable UI components with shadcn/ui",
            ],
            ar: [
                "نظام تشغيل موسيقى في الوقت الحقيقي",
                "إنشاء وإدارة قوائم التشغيل",
                "دردشة مباشرة باستخدام Socket.IO",
                "نظام تسجيل دخول وإدارة المستخدمين (Clerk)",
                "تصميم متجاوب باستخدام Tailwind CSS",
                "رفع وتخزين الوسائط عبر Cloudinary",
                "إدارة الحالة باستخدام Zustand",
                "مكونات UI قابلة لإعادة الاستخدام باستخدام shadcn/ui",
            ],
        },

        impact: {
            en: [
                "Provides a complete real-time streaming experience similar to modern music platforms",
                "Demonstrates handling of real-time communication and media streaming",
                "Showcases full-stack architecture with scalable frontend and backend integration",
            ],
            ar: [
                "يوفر تجربة بث موسيقي في الوقت الحقيقي مشابهة للمنصات الحديثة",
                "يعرض القدرة على التعامل مع التواصل اللحظي وبث الوسائط",
                "يُظهر بنية Full-Stack قابلة للتوسع مع تكامل بين الواجهة والخادم",
            ],
        },
        image: "/images/projects/spotify.webp",
        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Socket.IO",
            "Clerk",
            "Cloudinary",
            "Tailwind",
            "Shadcn",
            "Zustand",
        ],
        tags: ["Frontend & Full Stack"],
        category: "modern-frontend",
        link: "https://github.com/MohammedBasha/spotify-clone",
        github: "https://github.com/MohammedBasha/spotify-clone",
    },
    {
        id: "chat-app",
        title: {
            en: "Real-Time Chat Application - Scalable Messaging Platform",
            ar: "تطبيق دردشة في الوقت الحقيقي - منصة مراسلة قابلة للتوسع",
        },

        description: {
            en: "A full-stack real-time chat application built with the MERN stack, enabling instant messaging, image sharing, and live communication between users. The system is designed with Socket.IO for real-time updates, JWT-based authentication, and Cloudinary for media handling.",
            ar: "تطبيق دردشة متكامل مبني باستخدام MERN يتيح إرسال الرسائل الفورية، مشاركة الصور، والتواصل المباشر بين المستخدمين. يعتمد على Socket.IO للتحديثات اللحظية، ونظام JWT للمصادقة، وCloudinary لإدارة الوسائط.",
        },

        features: {
            en: [
                "Real-time messaging using Socket.IO",
                "JWT-based authentication and secure sessions",
                "Image and media uploads via Cloudinary",
                "User-to-user private conversations",
                "Responsive UI with Tailwind CSS and daisyUI",
                "Global state management with Zustand",
                "REST API built with Express.js",
                "Scalable MongoDB database with Mongoose",
            ],
            ar: [
                "مراسلة فورية باستخدام Socket.IO",
                "نظام مصادقة باستخدام JWT",
                "رفع الصور والوسائط عبر Cloudinary",
                "محادثات خاصة بين المستخدمين",
                "واجهة متجاوبة باستخدام Tailwind CSS و daisyUI",
                "إدارة الحالة باستخدام Zustand",
                "بناء API باستخدام Express.js",
                "قاعدة بيانات MongoDB قابلة للتوسع باستخدام Mongoose",
            ],
        },

        impact: {
            en: [
                "Enables real-time communication with low latency and high reliability",
                "Demonstrates handling of real-time systems and WebSocket architecture",
                "Provides a scalable foundation for building messaging or collaboration platforms",
            ],
            ar: [
                "يتيح تواصل فوري بزمن استجابة منخفض وموثوقية عالية",
                "يعرض القدرة على بناء أنظمة تعتمد على WebSockets والتفاعل اللحظي",
                "يوفر أساساً قابلاً للتوسع لبناء منصات مراسلة أو تعاون",
            ],
        },
        image: "/images/projects/chat-app.webp",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Socket.IO",
            "JWT",
            "Cloudinary",
            "Tailwind",
            "daisyUI",
            "Zustand",
            "Axios",
        ],
        tags: ["Frontend & Full Stack"],
        category: "modern-frontend",
        link: "https://github.com/MohammedBasha/chat-app-with-img",
        github: "https://github.com/MohammedBasha/chat-app-with-img",
    },
    {
        id: "x-clone",

        title: {
            en: "X Clone - Real-Time Social Media Platform",
            ar: "X Clone - منصة تواصل اجتماعي في الوقت الحقيقي",
        },

        description: {
            en: "A responsive full-stack social media platform inspired by X (Twitter), built using the MERN stack. It enables users to create posts, interact with content, and share media, with a scalable architecture and modern frontend powered by React and TanStack Query.",
            ar: "منصة تواصل اجتماعي متجاوبة مبنية باستخدام MERN مستوحاة من X (Twitter). تتيح للمستخدمين إنشاء المنشورات والتفاعل معها ومشاركة الوسائط مع بنية قابلة للتوسع وواجهة حديثة باستخدام React و TanStack Query.",
        },

        features: {
            en: [
                "Create, like, and interact with posts",
                "Media uploads (images/videos) via Cloudinary",
                "Responsive UI with Tailwind CSS",
                "Efficient data fetching with TanStack Query",
                "REST API built with Express.js",
                "MongoDB database with Mongoose ODM",
                "User authentication and session handling",
                "Scalable frontend architecture with React",
            ],
            ar: [
                "إنشاء المنشورات والإعجاب والتفاعل معها",
                "رفع الصور والفيديو عبر Cloudinary",
                "واجهة متجاوبة باستخدام Tailwind CSS",
                "جلب البيانات بكفاءة باستخدام TanStack Query",
                "بناء API باستخدام Express.js",
                "قاعدة بيانات MongoDB باستخدام Mongoose",
                "نظام مصادقة وإدارة جلسات المستخدمين",
                "واجهة قابلة للتوسع باستخدام React",
            ],
        },

        impact: {
            en: [
                "Demonstrates building a scalable social media platform with modern architecture",
                "Handles media uploads and content interaction efficiently",
                "Shows proficiency in state management, caching, and data fetching strategies",
            ],
            ar: [
                "يعرض القدرة على بناء منصة تواصل اجتماعي قابلة للتوسع",
                "يدير رفع الوسائط والتفاعل مع المحتوى بكفاءة",
                "يُظهر مهارات في إدارة الحالة وجلب البيانات وتحسين الأداء",
            ],
        },
        image: "/images/projects/x-clone.webp",
        techStack: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Cloudinary",
            "Tailwind",
            "TanStack Query",
        ],
        tags: ["Frontend & Full Stack"],
        category: "modern-frontend",
        link: "https://github.com/MohammedBasha/twitter-clone",
        github: "https://github.com/MohammedBasha/twitter-clone",
    },
    {
        id: "agent-provocateur-magento",

        title: {
            en: "Agent Provocateur - Luxury Magento eCommerce Frontend",
            ar: "Agent Provocateur - واجهة متجر فاخرة باستخدام Magento",
        },

        description: {
            en: "A high-performance Magento 2 storefront for a luxury fashion brand, focused on delivering a seamless shopping experience with optimized performance, custom UI components, and scalable frontend architecture tailored for large product catalogs.",
            ar: "واجهة متجر Magento 2 عالية الأداء لعلامة فاخرة، تركز على تقديم تجربة تسوق سلسة مع تحسين الأداء، وتطوير مكونات واجهة مخصصة، وبنية Frontend قابلة للتوسع لمتاجر ذات كتالوجات كبيرة.",
        },

        features: {
            en: [
                "Custom Magento 2 theme development",
                "Responsive, mobile-first UI implementation",
                "Core Web Vitals optimization (LCP, CLS, TTI)",
                "Performance tuning for large product catalogs",
                "Reusable UI components architecture",
                "Optimized product listing and product detail pages",
                "Cross-browser compatibility and accessibility improvements",
            ],
            ar: [
                "تطوير ثيم مخصص لـ Magento 2",
                "تصميم متجاوب يعمل بمنهج Mobile-first",
                "تحسين Core Web Vitals (LCP, CLS, TTI)",
                "تحسين الأداء للكتالوجات الكبيرة",
                "بنية مكونات UI قابلة لإعادة الاستخدام",
                "تحسين صفحات المنتجات وقوائم المنتجات",
                "توافق مع المتصفحات وتحسين إمكانية الوصول",
            ],
        },

        impact: {
            en: [
                "Improved storefront performance and page load speed",
                "Enhanced user experience leading to higher engagement",
                "Scalable frontend structure for handling large inventories",
                "Optimized architecture for long-term maintainability",
            ],
            ar: [
                "تحسين أداء المتجر وسرعة تحميل الصفحات",
                "تحسين تجربة المستخدم وزيادة التفاعل",
                "بنية قابلة للتوسع للتعامل مع كتالوجات كبيرة",
                "معمارية قابلة للصيانة على المدى الطويل",
            ],
        },

        techStack: [
            "Magento 2",
            "HTML",
            "CSS",
            "JavaScript",
            "Knockout.js",
            "RequireJS",
            "LESS",
        ],

        tags: ["Magento"],

        category: "Magento Frontend",

        image: "/images/projects/ap.webp",

        link: "https://www.agentprovocateur.com/int_en/accessories",

        github: "",
    },
    {
        id: "asics-magento",

        title: {
            en: "ASICS - High-Performance Magento eCommerce Platform",
            ar: "ASICS - منصة تجارة إلكترونية عالية الأداء باستخدام Magento",
        },

        description: {
            en: "Enterprise-level Magento 2 storefront for a global sports brand, focused on performance optimization, scalable frontend architecture, and seamless shopping experience across devices.",
            ar: "واجهة متجر Magento 2 على مستوى المؤسسات لعلامة رياضية عالمية، مع التركيز على تحسين الأداء وبنية Frontend قابلة للتوسع وتجربة مستخدم سلسة عبر جميع الأجهزة.",
        },

        features: {
            en: [
                "Custom Magento 2 frontend development",
                "Performance optimization and Core Web Vitals improvements",
                "Responsive and mobile-first UI",
                "Scalable architecture for high-traffic environments",
            ],
            ar: [
                "تطوير واجهات Magento 2 مخصصة",
                "تحسين الأداء و Core Web Vitals",
                "تصميم متجاوب يعمل على جميع الأجهزة",
                "بنية قابلة للتوسع للتعامل مع عدد زيارات كبير",
            ],
        },

        impact: {
            en: [
                "Improved site performance and loading speed",
                "Enhanced user experience across devices",
                "Handled high traffic with stable frontend performance",
            ],
            ar: [
                "تحسين سرعة وأداء الموقع",
                "تجربة مستخدم أفضل على جميع الأجهزة",
                "القدرة على التعامل مع زيارات عالية بكفاءة",
            ],
        },

        techStack: ["Magento 2", "JavaScript", "HTML", "CSS", "LESS"],

        tags: ["Magento"],

        category: "Magento Frontend",

        image: "/images/projects/asics.webp",
        link: "https://me.asics.com/en-ae/",
    },
    {
        id: "tiffany-magento",

        title: {
            en: "Tiffany & Co. - Luxury Magento eCommerce Experience",
            ar: "Tiffany & Co. - تجربة تجارة إلكترونية فاخرة باستخدام Magento",
        },

        description: {
            en: "Luxury Magento storefront engineered for premium user experience, focusing on refined UI, performance optimization, and seamless product browsing.",
            ar: "واجهة Magento فاخرة مصممة لتجربة مستخدم راقية مع التركيز على تصميم UI متقدم وتحسين الأداء وسهولة تصفح المنتجات.",
        },

        features: {
            en: [
                "Pixel-perfect luxury UI implementation",
                "Optimized product pages and navigation",
                "Performance-focused frontend enhancements",
                "Cross-device consistency",
            ],
            ar: [
                "تنفيذ واجهة فاخرة بدقة عالية",
                "تحسين صفحات المنتجات والتنقل",
                "تحسينات Frontend للأداء",
                "تجربة متناسقة على جميع الأجهزة",
            ],
        },

        impact: {
            en: [
                "Delivered premium shopping experience",
                "Improved usability and engagement",
                "Maintained high performance for luxury brand standards",
            ],
            ar: [
                "تقديم تجربة تسوق فاخرة",
                "تحسين سهولة الاستخدام والتفاعل",
                "الحفاظ على أداء عالي يتناسب مع العلامات الفاخرة",
            ],
        },

        techStack: ["Magento 2", "JavaScript", "HTML", "CSS"],

        tags: ["Magento"],

        category: "Magento Frontend",

        image: "/images/projects/tiffany.webp",
        link: "https://www.tiffany.ae/en-ae/",
    },
    {
        id: "zegna-magento",

        title: {
            en: "ZEGNA - Scalable Magento Frontend for Luxury Fashion",
            ar: "ZEGNA - واجهة Magento قابلة للتوسع لعلامة أزياء فاخرة",
        },

        description: {
            en: "Magento 2 frontend development for a luxury fashion brand, focused on scalability, performance, and clean UI architecture.",
            ar: "تطوير واجهات Magento 2 لعلامة أزياء فاخرة مع التركيز على قابلية التوسع والأداء وبنية واجهة نظيفة.",
        },

        features: {
            en: [
                "Custom frontend components",
                "Performance optimization",
                "Scalable UI architecture",
                "Mobile-first responsive design",
            ],
            ar: [
                "مكونات Frontend مخصصة",
                "تحسين الأداء",
                "بنية UI قابلة للتوسع",
                "تصميم متجاوب Mobile-first",
            ],
        },

        impact: {
            en: [
                "Improved scalability for large catalogs",
                "Enhanced frontend maintainability",
                "Optimized user experience",
            ],
            ar: [
                "تحسين قابلية التوسع للكتالوجات الكبيرة",
                "سهولة صيانة الواجهة",
                "تحسين تجربة المستخدم",
            ],
        },

        techStack: ["Magento 2", "JavaScript", "HTML", "CSS"],

        tags: ["Magento"],

        category: "Magento Frontend",

        image: "/images/projects/zegna.webp",
        link: "https://me.zegna.com/en-ae/",
    },
    {
        id: "krisma-magento",

        title: {
            en: "Krisma - Magento 2 Store with Porto Theme Customization",
            ar: "Krisma - متجر Magento 2 مع تخصيص Porto Theme",
        },

        description: {
            en: "Magento 2 eCommerce store built on Porto theme with customizations, performance enhancements, and tailored UI adjustments.",
            ar: "متجر Magento 2 مبني على Porto Theme مع تخصيصات وتحسينات أداء وتعديلات على واجهة المستخدم.",
        },

        features: {
            en: [
                "Porto theme customization",
                "UI/UX enhancements",
                "Performance tuning",
                "Responsive design improvements",
            ],
            ar: [
                "تخصيص Porto Theme",
                "تحسين تجربة المستخدم",
                "تحسين الأداء",
                "تصميم متجاوب",
            ],
        },

        impact: {
            en: [
                "Delivered faster store performance",
                "Improved user experience",
                "Customized theme for business needs",
            ],
            ar: [
                "تحسين سرعة المتجر",
                "تحسين تجربة المستخدم",
                "تخصيص المتجر حسب احتياجات العمل",
            ],
        },

        techStack: ["Magento 2", "Porto Theme", "CSS", "JavaScript"],

        tags: ["Magento"],

        category: "Magento Frontend",

        image: "/images/projects/krisma.webp",
        link: "https://krisma.com/en/",
    },
    {
        id: "satim-joomla",

        title: {
            en: "SATIM - Interbank Payment Platform Website",
            ar: "SATIM - موقع نظام الدفع بين البنوك",
        },

        description: {
            en: "A corporate website for an interbank electronic payment operator built using Joomla CMS, focusing on performance, accessibility, and multilingual support.",
            ar: "موقع لشركة متخصصة في أنظمة الدفع الإلكتروني بين البنوك مبني باستخدام Joomla مع التركيز على الأداء ودعم تعدد اللغات وسهولة الاستخدام.",
        },

        features: {
            en: [
                "Joomla CMS customization",
                "Multilingual website support",
                "Responsive UI",
                "Performance optimization",
            ],
            ar: [
                "تخصيص Joomla CMS",
                "دعم تعدد اللغات",
                "تصميم متجاوب",
                "تحسين الأداء",
            ],
        },

        impact: {
            en: [
                "Delivered a scalable corporate platform",
                "Improved accessibility and usability",
                "Enabled easy content management",
            ],
            ar: [
                "تقديم منصة مؤسسية قابلة للتوسع",
                "تحسين سهولة الاستخدام والوصول",
                "تسهيل إدارة المحتوى",
            ],
        },

        techStack: ["Joomla", "PHP", "JavaScript", "CSS", "jQuery"],

        tags: ["CMS"],

        category: "CMS",

        image: "/images/projects/satim.webp",
        link: "https://satim.dz/index.php/ar/",
    },
];

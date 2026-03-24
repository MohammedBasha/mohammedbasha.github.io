import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { SERVICES } from "@/data/services";
import { PROJECTS, Project } from "@/data/projects";
import { CONTACT } from "@/data/contact";
import { useI18n } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

// Image imports
import serviceMagentoEn from "/images/services/service-magento-en.webp";
import serviceMagentoAr from "/images/services/service-magento-ar.webp";
import serviceCmsEn from "/images/services/service-cms-en.webp";
import serviceCmsAr from "/images/services/service-cms-ar.webp";
import serviceFrontEn from "/images/services/service-front-en.webp";
import serviceFrontAr from "/images/services/service-front-ar.webp";
import serviceAutomationEn from "/images/services/service-automation-en.webp";
import serviceAutomationAr from "/images/services/service-automation-ar.webp";

import { Check } from "lucide-react";

const SERVICE_IMAGES: Record<string, string> = {
    "service-magento-en": serviceMagentoEn,
    "service-magento-ar": serviceMagentoAr,
    "service-cms-en": serviceCmsEn,
    "service-cms-ar": serviceCmsAr,
    "service-front-en": serviceFrontEn,
    "service-front-ar": serviceFrontAr,
    "service-automation-en": serviceAutomationEn,
    "service-automation-ar": serviceAutomationAr,
};

const SERVICE_SEO: Record<
    string,
    {
        title: { en: string; ar: string };
        content: { en: string; ar: string };
        features?: { en: string[]; ar: string[] };
        bestFor?: {
            en: string[];
            ar: string[];
        };
    }
> = {
    "magento-developer": {
        title: {
            en: "High-Performance Magento Storefronts That Increase Conversion",
            ar: "واجهات متاجر Magento عالية الأداء لزيادة التحويلات",
        },
        content: {
            en: "I build and optimize Magento 2 storefronts focused on speed, conversion, and scalability. From improving Core Web Vitals to creating custom UI components, I help eCommerce brands turn slow stores into high-performing revenue machines.",
            ar: "أبني وأحسّن واجهات متاجر Magento 2 مع التركيز على السرعة وزيادة التحويلات وقابلية التوسع. أساعد المتاجر البطيئة في التحول إلى متاجر سريعة تحقق نتائج فعلية في المبيعات.",
        },
        features: {
            en: [
                "Core Web Vitals optimization (LCP, CLS, TTI)",
                "Custom Magento 2 themes & UI components",
                "Performance audits & fixes",
                "Scalable frontend architecture for large catalogs",
            ],
            ar: [
                "تحسين Core Web Vitals",
                "تطوير ثيمات وواجهة مخصصة",
                "تحسين الأداء وحل المشاكل",
                "بناء بنية Frontend قابلة للتوسع",
            ],
        },
        bestFor: {
            en: [
                "eCommerce brands with slow Magento stores",
                "Businesses are struggling with low conversion rates",
                "Large catalogs needing scalable frontend performance",
            ],
            ar: [
                "المتاجر التي تعاني من بطء في الأداء",
                "الشركات التي تعاني من ضعف التحويلات",
                "المتاجر الكبيرة التي تحتاج بنية قابلة للتوسع",
            ],
        },
    },
    "react-nextjs-developer": {
        title: {
            en: "Scalable Web Apps & SaaS Platforms Built for Growth",
            ar: "تطبيقات React و Next.js حديثة، سريعة، قابلة للتوسع ومحسّنة لمحركات البحث",
        },
        content: {
            en: "I design and build modern web applications using React, Next.js, and TypeScript — optimized for performance, SEO, and scalability. Whether it's a startup MVP or a production SaaS platform, I deliver systems that are fast, maintainable, and ready to scale.",
            ar: "أبني تطبيقات ويب حديثة باستخدام React و Next.js و MERN مع التركيز على الأداء، SEO، وقابلية التوسع. سواء MVP أو منصة SaaS كاملة، أقدّم حلول جاهزة للنمو.",
        },
        features: {
            en: [
                "Full-stack MERN applications",
                "SEO-friendly Next.js apps",
                "API integrations & dashboards",
                "Clean architecture & reusable components",
            ],
            ar: [
                "تطبيقات MERN كاملة",
                "تطبيقات Next.js محسّنة لمحركات البحث",
                "تكامل APIs ولوحات تحكم",
                "بنية نظيفة وقابلة لإعادة الاستخدام",
            ],
        },
        bestFor: {
            en: [
                "Startups building MVPs or SaaS platforms",
                "Businesses needing scalable web applications",
                "Companies looking to improve performance & SEO",
            ],
            ar: [
                "الشركات الناشئة التي تبني MVP أو SaaS",
                "الشركات التي تحتاج تطبيقات قابلة للتوسع",
                "الشركات التي تريد تحسين الأداء و SEO",
            ],
        },
    },
    "cms-developer": {
        title: {
            en: "Custom CMS Solutions That Are Easy to Manage & Scale",
            ar: "حلول CMS مخصصة سهلة الإدارة وقابلة للتوسع",
        },
        content: {
            en: "I build and customize CMS platforms that make content management simple, flexible, and efficient. From custom WordPress builds to enterprise Drupal solutions, I create systems tailored to your business needs.",
            ar: "أبني وأخصص أنظمة إدارة محتوى تجعل إدارة الموقع سهلة ومرنة وقابلة للتوسع. من WordPress إلى Drupal و Joomla، أقدّم حلول تناسب احتياجات عملك.",
        },
        features: {
            en: [
                "Custom WordPress themes & plugins",
                "Headless CMS integrations",
                "Drupal & Joomla custom development",
                "Performance & security optimization",
            ],
            ar: [
                "تطوير ثيمات وإضافات مخصصة",
                "تكامل Headless CMS",
                "تطوير Drupal و Joomla",
                "تحسين الأداء والأمان",
            ],
        },
        bestFor: {
            en: [
                "Businesses needing easy content management",
                "Companies migrating or upgrading CMS platforms",
                "Teams looking for flexible and scalable CMS solutions",
            ],
            ar: [
                "الشركات التي تحتاج إدارة محتوى سهلة",
                "الشركات التي تقوم بترحيل أو تطوير CMS",
                "الفرق التي تحتاج حلول مرنة وقابلة للتوسع",
            ],
        },
    },
    "automation-integration": {
        title: {
            en: "Business Automation Systems That Save Time & Reduce Costs",
            ar: "أنظمة أتمتة الأعمال لتوفير الوقت وتقليل التكاليف",
        },
        content: {
            en: "I design automation systems that eliminate repetitive work and connect your tools into one seamless workflow. From CRM integrations to custom bots, I help businesses save time, reduce errors, and scale operations efficiently.",
            ar: "أصمم أنظمة أتمتة تقلل العمل اليدوي وتربط أدواتك في نظام واحد متكامل. أساعد الشركات على توفير الوقت وتقليل الأخطاء وتحسين العمليات.",
        },
        features: {
            en: [
                "Workflow automation (Make / Zapier / n8n)",
                "CRM & API integrations",
                "Custom bots & internal tools",
                "Process optimization & system design",
            ],
            ar: [
                "أتمتة العمليات (Make / Zapier / n8n)",
                "تكامل CRM و APIs",
                "تطوير Bots وأدوات داخلية",
                "تحسين العمليات",
            ],
        },
        bestFor: {
            en: [
                "Businesses are wasting time on manual processes",
                "Teams using multiple tools without integration",
                "Companies looking to scale operations efficiently",
            ],
            ar: [
                "الشركات التي تضيع وقت في العمليات اليدوية",
                "الفرق التي تستخدم أدوات متعددة بدون تكامل",
                "الشركات التي تريد تحسين العمليات والتوسع",
            ],
        },
    },
};

export default function ServicePage() {
    const { slug } = useParams<{ slug: string }>();
    const { t, dir, lang } = useI18n();
    const navigate = useNavigate();
    const service = SERVICES.find((s) => s.slug === slug);
    const seo = slug ? SERVICE_SEO[slug] : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Route-specific SEO: keep title/description/canonical in sync with the current service.
    useEffect(() => {
        if (!seo || !slug) return;

        const title = t(seo.title.en, seo.title.ar);
        const description = t(seo.content.en, seo.content.ar);

        document.title = title;

        const setMeta = (
            selector: string,
            value: string,
            attr: "content" | "href" = "content",
        ) => {
            const el = document.querySelector(selector) as
                | HTMLMetaElement
                | HTMLLinkElement
                | null;
            if (!el) return;
            if (attr === "content") {
                (el as HTMLMetaElement).content = value;
            } else {
                (el as HTMLLinkElement).href = value;
            }
        };

        setMeta('meta[name="description"]', description);
        setMeta('meta[property="og:title"]', title);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[name="twitter:title"]', title);
        setMeta('meta[name="twitter:description"]', description);

        const canonicalHref = `${window.location.origin}/services/${encodeURIComponent(
            slug,
        )}`;
        setMeta('link[rel="canonical"]', canonicalHref, "href");
    }, [seo, slug, t, lang]);

    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    if (!service) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground">
                    {t("Service not found.", "الخدمة غير موجودة.")}
                </p>
            </div>
        );
    }

    const relatedProjects = PROJECTS.filter((p) =>
        p.tags.some((tag) => service.filterTags["en"].includes(tag)),
    );

    const emailSubject = encodeURIComponent(
        t(
            `Project Inquiry: ${service.name.en}`,
            `استفسار مشروع: ${service.name.ar}`,
        ),
    );

    const emailBody = encodeURIComponent(
        t(
            `Hi Mohammed,\n\nI'm interested in your ${service.name.en} service. I'd like to discuss a potential project.\n\nBest regards`,
            `مرحباً محمد،\n\nأنا مهتم بخدمة ${service.name.ar}. أود مناقشة مشروع محتمل.\n\nمع تحياتي`,
        ),
    );
    const mailtoLink = `mailto:${CONTACT.email}?subject=${emailSubject}&body=${emailBody}`;

    const handleTagClick = (tag: string) => {
        navigate(`/projects?tag=${encodeURIComponent(tag)}`);
    };

    const serviceImageKey = lang === "ar" ? service.image.ar : service.image.en;
    const serviceImage = SERVICE_IMAGES[serviceImageKey];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main dir={dir} className="container mx-auto px-6 pt-32 pb-20">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft
                        className={`w-4 h-4 ${lang === "ar" ? "rotate-[180deg]" : ""}`}
                        strokeWidth={1.5}
                    />
                    {t("Back to Home", "العودة للرئيسية")}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Service hero image */}
                    {serviceImage && (
                        <div className="mb-10 mx-auto rounded-2xl overflow-hidden border border-border w-[80%]">
                            <img
                                src={serviceImage}
                                alt={t(service.name.en, service.name.ar)}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    )}

                    <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        {seo && t(seo.title.en, seo.title.ar)}
                    </h1>
                    <div className="max-w-3xl mb-10">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {seo && t(seo.content.en, seo.content.ar)}
                        </p>
                    </div>
                    <div className="max-w-3xl mb-8">
                        <h4 className="font-bold mb-2">
                            {t("Features:", "المزايا:")}
                        </h4>
                        <ul className="max-w-3xl text-muted-foreground">
                            {seo &&
                                t(seo.features.en, seo.features.ar).map(
                                    (item: string, i: number) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-green-500 mt-1">
                                                <Check className="text-green-500 w-5 h-5 mt-1" />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ),
                                )}
                        </ul>
                    </div>

                    <div className="max-w-3xl mb-8">
                        <h4 className="font-bold mb-2">
                            {t("Best for:", "مناسب لـ:")}
                        </h4>

                        <ul className="max-w-3xl text-muted-foreground">
                            {t(seo.bestFor.en, seo.bestFor.ar).map(
                                (item: string, i: number) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-green-500 mt-1">
                                            <Check className="text-green-500 w-5 h-5 mt-1" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mb-16"
                    >
                        <Mail className="w-4 h-4" />
                        {t("Start a Project", "ابدأ مشروعاً")}
                    </a>
                </motion.div>

                {relatedProjects.length > 0 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-8 text-foreground">
                            {t("Related Projects", "مشاريع ذات صلة")}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {relatedProjects.map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.4,
                                    }}
                                    onClick={() => setSelectedProject(project)}
                                    className="bg-card rounded-2xl border border-border card-glow overflow-hidden cursor-pointer"
                                >
                                    <div className="aspect-video bg-secondary/30 flex items-center justify-center">
                                        {project.image ? (
                                            <img
                                                src={`${project.image}`}
                                                alt={t(
                                                    project.title.en,
                                                    project.title.ar,
                                                )}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <span className="text-3xl font-bold text-primary/10 tracking-tighter select-none">
                                                {t(
                                                    project.title.en,
                                                    project.title.ar,
                                                )
                                                    .split(" ")
                                                    .map((w) => w[0])
                                                    .join("")}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3
                                            className={`text-lg font-semibold mb-2 text-foreground ${lang === "ar" ? "h-[6rem] md:h-[4rem]" : "h-[6rem] md:h-[4rem]"}`}
                                        >
                                            {t(
                                                project.title.en,
                                                project.title.ar,
                                            )}
                                        </h3>
                                        <p
                                            className={`text-sm text-muted-foreground leading-relaxed mb-4 ${lang === "ar" ? "h-[14rem] md:h-[8rem] xl:h-[7rem]" : "h-[18rem] md:h-[13rem] xl:h-[12rem]"}`}
                                        >
                                            {t(
                                                project.description.en,
                                                project.description.ar,
                                            )}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag) => (
                                                <button
                                                    key={tag}
                                                    onClick={() =>
                                                        handleTagClick(tag)
                                                    }
                                                    className="text-[10px] uppercase tracking-wider bg-secondary px-2 py-1 rounded text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer"
                                                >
                                                    {SERVICES.find(
                                                        (s) =>
                                                            s.filterTags.en ===
                                                            tag,
                                                    )?.filterTags[lang] || tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}

                {selectedProject && (
                    <Dialog
                        open={!!selectedProject}
                        onOpenChange={() => setSelectedProject(null)}
                    >
                        <DialogContent
                            className={`max-w-2xl max-h-[80vh] overflow-y-auto`}
                            dir={dir}
                        >
                            <DialogHeader>
                                <DialogTitle
                                    className={
                                        dir === "rtl"
                                            ? "text-right"
                                            : "text-left"
                                    }
                                >
                                    {t(
                                        selectedProject.title.en,
                                        selectedProject.title.ar,
                                    )}
                                </DialogTitle>
                            </DialogHeader>
                            {selectedProject.image && (
                                <img
                                    src={`${selectedProject.image}`}
                                    alt={t(
                                        selectedProject.title.en,
                                        selectedProject.title.ar,
                                    )}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    loading="lazy"
                                />
                            )}
                            <div className="space-y-4">
                                <p className="text-muted-foreground">
                                    {t(
                                        selectedProject.description.en,
                                        selectedProject.description.ar,
                                    )}
                                </p>
                                <div className="max-w-3xl mb-8">
                                    <h4 className="font-bold mb-2">
                                        {t("Features:", "المزايا:")}
                                    </h4>
                                    <ul className="max-w-3xl text-muted-foreground">
                                        {t(
                                            selectedProject.features.en,
                                            selectedProject.features.ar,
                                        ).map((item: string, i: number) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-green-500 mt-1">
                                                    <Check className="text-green-500 w-5 h-5 mt-1" />
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="max-w-3xl mb-8">
                                    <h4 className="font-bold mb-2">
                                        {t("Impact:", "التأثير:")}
                                    </h4>

                                    <ul className="max-w-3xl text-muted-foreground">
                                        {t(
                                            selectedProject.impact.en,
                                            selectedProject.impact.ar,
                                        ).map((item: string, i: number) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="text-green-500 mt-1">
                                                    <Check className="text-green-500 w-5 h-5 mt-1" />
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                    >
                                        {t("View Project", "عرض المشروع")}
                                    </a>
                                )}
                                <div>
                                    <h4 className="font-semibold mb-2">
                                        {t("Tech Stack", "التقنيات المستخدمة")}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map(
                                            (tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )}

                {/* Contact CTA */}
                <div className="mt-16 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                                {t(
                                    "Interested in this service?",
                                    "مهتم بهذه الخدمة؟",
                                )}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {t(
                                    "Get in touch to discuss your project requirements.",
                                    "تواصل معي لمناقشة متطلبات مشروعك.",
                                )}
                            </p>
                        </div>
                        <a
                            href={mailtoLink}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shrink-0"
                        >
                            <Mail className="w-4 h-4" />
                            {t("Contact Me", "تواصل معي")}
                        </a>
                    </div>
                </div>

                {/* Other Services */}
                <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">
                        {t("Other Services", "خدمات أخرى")}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {SERVICES.filter((s) => s.slug !== slug).map((s) => (
                            <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
                            >
                                {t(s.name.en, s.name.ar)}
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
}

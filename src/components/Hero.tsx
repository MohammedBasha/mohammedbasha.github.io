import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useRef } from "react";

const EASE = [0.33, 1, 0.68, 1] as const;

const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
        y: "0%",
        opacity: 1,
        transition: {
            delay: 0.5 + i * 0.04,
            duration: 0.6,
            ease: EASE as unknown as [number, number, number, number],
        },
    }),
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            duration: 0.8,
            ease: EASE as unknown as [number, number, number, number],
        },
    }),
};

function AnimatedText({
    text,
    startIndex = 0,
}: {
    text: string;
    startIndex?: number;
}) {
    const { lang } = useI18n();

    // For Arabic text, animate as a single unit to preserve letter connections
    if (lang === "ar") {
        return (
            <motion.span
                custom={startIndex}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
            >
                {text}
            </motion.span>
        );
    }

    // For English text, animate individual letters
    return (
        <span className="inline-flex overflow-hidden">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    custom={startIndex + i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}

function Stars() {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) return null;

    // Fewer animated elements keeps main-thread work lower.
    const stars = Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        lightColor: Math.random() > 0.5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-primary dark:bg-primary"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        opacity: [0, 1, 0.3, 1, 0],
                        scale: [0.5, 1.2, 0.8, 1, 0.5],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default function Hero() {
    const { t, lang } = useI18n();
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <Stars />

            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                }}
            />

            <motion.div style={{ y }} className="absolute inset-0">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative container mx-auto px-6"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        custom={0.3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="mb-5"
                    >
                        <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            {t("Available for projects", "متاح للمشاريع")}
                        </span>
                    </motion.div>

                    <h1 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.04em] mb-8">
                        <span className="block overflow-hidden">
                            <AnimatedText text={t("Mohammed", "محمد")} />
                        </span>
                        <span className="block overflow-hidden text-primary">
                            <AnimatedText
                                text={t("Basha", "باشا")}
                                startIndex={10}
                            />
                        </span>
                    </h1>

                    <motion.p
                        custom={1.2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-6"
                    >
                        {t(
                            "Product-Focused Frontend / Full-Stack Engineer | Automation, Docker & Cloud Deployment (GCP)",
                            "مهندس واجهة أمامية / مطور تطبيقات متكاملة أركز على المنتج | أتمتة، Docker، وCloud Deployment (GCP)",
                        )}
                    </motion.p>

                    <motion.p
                        custom={1.4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-sm text-muted-foreground/60 max-w-lg leading-relaxed mb-6"
                    >
                        {t(
                            "I build scalable web applications and automation systems - and take them from development to production by containerizing with Docker and deploying on Google Cloud Platform (Cloud Run). My focus is on performance, clean architecture, and delivering real business value.",
                            "أقوم ببناء تطبيقات ويب قابلة للتوسع وأنظمة أتمتة، وأتولى تطويرها ونقلها من مرحلة التطوير إلى مرحلة الإنتاج باستخدام تقنية Docker Containerizing ونشرها على منصة Google Cloud Platform (Cloud Run). أركز على الأداء، والبنية النظيفة، وتقديم قيمة حقيقية للأعمال.",
                        )}
                    </motion.p>

                    <motion.p
                        custom={1.6}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-sm text-muted-foreground/60 max-w-lg leading-relaxed mb-12"
                    >
                        {t(
                            "Worked on Magento storefronts for global brands like Zegna, ASICS, and Tiffany.",
                            "عملت على واجهات متاجر ماجنتو لعلامات تجارية عالمية مثل ASICS، Zegna، و Tiffany.",
                        )}
                    </motion.p>

                    <motion.div
                        custom={1.8}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-5"
                    >
                        <a
                            href="#portfolio"
                            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300"
                        >
                            {t("View Projects", "عرض الأعمال")}
                            <span
                                className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${lang === "ar" ? "rotate-[180deg]" : ""}`}
                            >
                                →
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-medium text-sm rounded-full hover:border-primary/40 transition-colors duration-300"
                        >
                            <Mail className="w-4 h-4" strokeWidth={1.5} />
                            {t("Let’s Work Together", "لنعمل معاً")}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2.5,
                            repeat: 3,
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowDown
                            className="w-4 h-4 text-muted-foreground"
                            strokeWidth={1.5}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

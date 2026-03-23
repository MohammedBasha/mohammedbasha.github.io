import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useRef, useEffect, useState } from "react";
import mohammedImg from "/images/mohammed-basha.webp";

const stats = [
    { value: 6, suffix: "+", en: "Years Experience", ar: "سنوات خبرة" },
    { value: 40, suffix: "+", en: "Projects Delivered", ar: "مشروع مُنجز" },
    {
        value: 99.9,
        suffix: "%",
        en: "System Reliability",
        ar: "موثوقية النظام",
    },
    {
        value: 40,
        suffix: "%",
        en: "Performance Improvement (LCP)",
        ar: "تحسين الأداء (LCP)",
    },
];

function AnimatedCounter({
    value,
    suffix,
    isInView,
}: {
    value: number;
    suffix: string;
    isInView: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const startTime = performance.now();
        const isDecimal = value % 1 !== 0;

        function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * value;
            setCount(
                isDecimal ? Math.round(current * 10) / 10 : Math.round(current),
            );
            if (progress < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function About() {
    const { t } = useI18n();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-spacing">
            <div className="container mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                        {t("About", "عني")}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] max-w-2xl">
                        {t(
                            "Building scalable products, ",
                            "بناء منتجات قابلة للتطوير، ",
                        )}{" "}
                        <span className="text-primary">
                            {t(
                                "not just interfaces",
                                "وليس مجرد واجهات مستخدم",
                            )}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — Personal Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border-2 border-border aspect-[3/4] max-w-md mx-auto lg:mx-0">
                            <img
                                src={mohammedImg}
                                alt="Mohammed Basha"
                                className="w-full h-full object-cover object-top"
                                loading="lazy"
                                width="400"
                                height="533"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/10" />
                            {/* Gradient overlay at bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute -inset-4 bg-primary/[0.03] blur-3xl rounded-full -z-10" />
                    </motion.div>

                    {/* Right — Text + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.33, 1, 0.68, 1],
                            delay: 0.15,
                        }}
                    >
                        <div className="space-y-5 text-muted-foreground leading-[1.8] text-[15px] mb-10">
                            <p>
                                {t(
                                    "Frontend + Automation + System Integration Engineer with 6+ years of experience delivering high-performance web applications and digital commerce solutions.",
                                    "مهندس واجهات أمامية + أتمتة + تكامل أنظمة بخبرة تزيد عن 6 سنوات في تقديم تطبيقات ويب عالية الأداء وحلول التجارة الرقمية.",
                                )}
                            </p>
                            <p>
                                {t(
                                    "I specialize in building scalable frontend systems and connecting them with automation workflows and business tools to improve performance, streamline operations, and drive real business outcomes.",
                                    "أنا متخصص في بناء أنظمة الواجهة الأمامية القابلة للتطوير وربطها بسير العمل الآلي وأدوات الأعمال لتحسين الأداء وتبسيط العمليات وتحقيق نتائج أعمال حقيقية.",
                                )}
                            </p>
                            <p>
                                {t(
                                    "From Magento 2 storefronts for global brands like Zegna, ASICS, and Tiffany, to modern SaaS platforms built with Next.js and MERN - I combine frontend engineering with system integrations to create efficient, scalable digital products.",
                                    "من واجهات متاجر Magento 2 للعلامات التجارية العالمية مثل Zegna و ASICS و Tiffany، إلى منصات SaaS الحديثة المبنية باستخدام Next.js و MERN - أقوم بدمج هندسة الواجهة الأمامية مع تكامل الأنظمة لإنشاء منتجات رقمية فعالة وقابلة للتطوير.",
                                )}
                            </p>
                            <p>
                                {t(
                                    "I focus on solving business problems through technology - not just building features.",
                                    "أركز على حل مشاكل الأعمال من خلال التكنولوجيا - وليس مجرد بناء الميزات.",
                                )}
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div ref={ref} className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.en}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.6,
                                        ease: [0.33, 1, 0.68, 1],
                                    }}
                                    className="relative bg-card rounded-xl p-6 border border-border card-glow group"
                                >
                                    <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            isInView={isInView}
                                        />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {t(stat.en, stat.ar)}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

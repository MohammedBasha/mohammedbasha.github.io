import { motion } from "framer-motion";
import { ShoppingBag, FileCode, Code2, Zap, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { SERVICES } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
    ShoppingBag,
    FileCode,
    Code2,
    Zap,
};

export default function Services() {
    const { t, lang } = useI18n();

    return (
        <section id="services" className="section-spacing">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                        {t("Services", "خدماتي")}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05] max-w-2xl">
                        {t(
                            "Solutions That Drive Performance ",
                            "حلول تطور الأداء ",
                        )}{" "}
                        <span className="text-primary">
                            {t("& Growth", "والنمو")}
                        </span>
                    </h2>
                </motion.div>

                <div className="space-y-0 border-t border-border">
                    {SERVICES.map((service, i) => {
                        const Icon = iconMap[service.icon] || Code2;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="group border-b border-border"
                            >
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="w-full flex items-center justify-between py-8 md:py-10 text-start transition-all duration-500 hover:ps-4"
                                >
                                    <div className="flex items-center gap-6 md:gap-8">
                                        <span className="text-xs font-mono text-muted-foreground/40 w-8">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                                            <Icon
                                                className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-500"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                                                {t(
                                                    service.name.en,
                                                    service.name.ar,
                                                )}
                                            </h3>
                                            <p className="text-sm text-muted-foreground mt-1 max-w-sm xl:max-w-md hidden md:block">
                                                {t(
                                                    service.description.en,
                                                    service.description.ar,
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="hidden md:inline-flex text-xs uppercase tracking-[0.15em] text-muted-foreground group-hover:text-primary transition-colors">
                                            {t("View Projects", "عرض المشاريع")}
                                        </span>
                                        <ArrowUpRight
                                            className={`w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-all duration-500 ${lang === "ar" ? "rotate-[-90deg] group-hover:rotate-[-135deg]" : "group-hover:rotate-45"}`}
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

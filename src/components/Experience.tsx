import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { useNavigate } from "react-router-dom";
import { TIMELINE } from "@/data/timeline";

export default function Experience() {
    const { t, dir } = useI18n();
    const navigate = useNavigate();

    const handleTagClick = (tag: string) => {
        navigate(`/projects?tag=${encodeURIComponent(tag.toLowerCase())}`);
    };

    return (
        <section id="experience" className="section-spacing">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                        {t("Experience", "الخبرة")}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
                        {t(
                            "Engineering Scalable Products & Systems ",
                            "هندسة المنتجات والأنظمة القابلة للتطوير ",
                        )}{" "}
                        <span className="text-primary">
                            {t("Over Time", "بمرور الوقت")}
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute start-0 md:start-[200px] top-0 bottom-0 w-px bg-border" />

                    {TIMELINE.map((entry, i) => (
                        <motion.div
                            key={entry.year.en}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.6,
                                ease: [0.33, 1, 0.68, 1],
                            }}
                            className="relative flex items-start gap-8 md:gap-12 mb-16 last:mb-0"
                        >
                            {/* Year */}
                            <div className="hidden md:block w-[180px] shrink-0 text-end">
                                <span className="font-mono text-sm text-primary font-medium">
                                    {t(entry.year.en, entry.year.ar)}
                                </span>
                            </div>

                            {/* Dot */}
                            <div
                                className={`absolute start-0 md:start-[200px] w-3 h-3 rounded-full bg-primary mt-1.5 ring-4 ring-background z-10 ${dir === "rtl" ? "translate-x-1/2" : "-translate-x-1/2"}`}
                            />

                            {/* Content */}
                            <div className="ms-6 md:ms-0 flex-1">
                                <span className="md:hidden font-mono text-xs text-primary mb-2 block">
                                    {t(entry.year.en, entry.year.ar)}
                                </span>
                                <h3
                                    className={`font-display text-xl md:text-2xl font-semibold text-foreground mb-3 ${i === TIMELINE.length - 1 ? "text-primary" : ""}`}
                                >
                                    {t(entry.title.en, entry.title.ar)}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4 h-12">
                                    {t(
                                        entry.description.en,
                                        entry.description.ar,
                                    )}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {entry.tags.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={(e) => e.preventDefault()}
                                            className="text-[10px] uppercase tracking-[0.1em] bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

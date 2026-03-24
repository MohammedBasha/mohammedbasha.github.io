import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { PROJECTS } from "@/data/projects";
import { SERVICES } from "@/data/services";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

const MAX_VISIBLE = 4;

const FILTERS = (lang: "en" | "ar") => {
    const map = new Map<string, { en: string; ar: string }>();

    SERVICES.forEach((s) => {
        const tag = s.filterTags;
        map.set(tag.en, tag); // use EN as unique key
    });

    return [
        { label: lang === "ar" ? "الكل" : "All", value: "all" },
        ...Array.from(map.values()).map((tag) => ({
            label: lang === "ar" ? tag.ar : tag.en,
            value: tag.en, // IMPORTANT: keep value in EN
        })),
    ];
};

interface Props {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    showAll?: boolean;
}

export default function Portfolio({
    activeFilter,
    onFilterChange,
    showAll = false,
}: Props) {
    const { t, dir, lang } = useI18n();
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState<
        (typeof PROJECTS)[0] | null
    >(null);

    const filtered = useMemo(
        () =>
            PROJECTS.filter(
                (p) => activeFilter === "all" || p.tags.includes(activeFilter),
            ),
        [activeFilter],
    );

    const visible = showAll ? filtered : filtered.slice(0, MAX_VISIBLE);
    const hasMore = !showAll && filtered.length > MAX_VISIBLE;

    const matchingService = useMemo(() => {
        if (activeFilter === "all") return null;
        return SERVICES.find((s) => s.filterTags.en === activeFilter) || null;
    }, [activeFilter]);

    const handleTagClick = (tag: string) => {
        navigate(`/projects?tag=${encodeURIComponent(tag)}`);
    };

    const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
        setSelectedProject(project);
    };

    return (
        <section id="portfolio" className="section-spacing">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
                >
                    <div>
                        <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                            {t("Portfolio", "الأعمال")}
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
                            {t("Selected Work ", "أعمال مختارة ")}
                            <span className="text-primary">
                                {t("& Case Studies", "ودراسة حالات")}
                            </span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        {FILTERS(lang).map((f) => (
                            <button
                                key={f.value}
                                onClick={() => onFilterChange(f.value)}
                                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.1em] font-medium border transition-all duration-300 ${
                                    activeFilter === f.value
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, i) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group relative bg-card rounded-xl border border-border overflow-hidden card-glow magnetic-hover cursor-pointer"
                                onClick={() => handleProjectClick(project)}
                            >
                                {/* Image area */}
                                <div className="aspect-[16/10] bg-secondary/20 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent" />
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={t(
                                                project.title.en,
                                                project.title.ar,
                                            )}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            width="400"
                                            height="250"
                                        />
                                    ) : (
                                        <span className="font-display text-5xl md:text-6xl font-bold text-foreground/[0.04] tracking-tighter select-none">
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

                                <div className="p-6 md:p-8">
                                    <h3 className="font-display text-lg md:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 h-[5.5rem] xl:h-14">
                                        {t(project.title.en, project.title.ar)}
                                    </h3>
                                    <p
                                        className={`text-sm text-muted-foreground leading-relaxed mb-5 ${lang === "ar" ? "h-[12rem] md:h-[9rem] xl:h-[5rem]" : "h-[17rem] md:h-[13rem] xl:h-[8rem]"}`}
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
                                                className="text-[10px] uppercase tracking-[0.1em] bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full hover:bg-primary/20 hover:text-primary transition-colors duration-200 cursor-pointer"
                                            >
                                                {SERVICES.find(
                                                    (s) =>
                                                        s.filterTags.en === tag,
                                                )?.filterTags[lang] || tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More */}
                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <Link
                            to={
                                matchingService
                                    ? `/services/${matchingService.slug}`
                                    : "/projects"
                            }
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                        >
                            {t("View All Projects", "عرض جميع المشاريع")}
                            <ArrowUpRight
                                className={`w-4 h-4 ${lang === "ar" ? "rotate-[-90deg]" : ""}`}
                            />
                        </Link>
                    </motion.div>
                )}
            </div>

            {/* Project Dialog */}
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
                                    dir === "rtl" ? "text-right" : "text-left"
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
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] uppercase tracking-[0.1em] bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                                    >
                                        {SERVICES.find(
                                            (s) => s.filterTags.en === tag,
                                        )?.filterTags[lang] || tag}
                                    </span>
                                ))}
                            </div>
                            {selectedProject.link &&
                                selectedProject.link !== "#" && (
                                    <div className="pt-4 border-t border-border">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                                        >
                                            {t(
                                                "View Live Project",
                                                "عرض المشروع",
                                            )}
                                            <ArrowUpRight
                                                className={`w-4 h-4 ${lang === "ar" ? "rotate-[-90deg]" : ""}`}
                                            />
                                        </a>
                                    </div>
                                )}
                            <div>
                                <h4 className="font-semibold mb-2">
                                    {t("Tech Stack", "التقنيات المستخدمة")}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}

import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState, useEffect, memo } from "react";
import { useI18n } from "@/lib/i18n";
import { TESTIMONIALS } from "@/data/testimonials";
import { useVisibleCards } from "@/hooks/use-screen-size";

export default memo(function Testimonials() {
    const { t, lang } = useI18n();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const visibleCards = useVisibleCards();

    const filteredTestimonials = TESTIMONIALS.filter((item) => {
        if (item.lang === "both") return true;
        if (lang === "ar") {
            return item.lang === "ar";
        }
        return item.lang === "en";
    });

    // Auto-slide logic - slide by visibleCards count
    useEffect(() => {
        if (filteredTestimonials.length <= visibleCards || isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex >= filteredTestimonials.length - visibleCards
                    ? 0
                    : prevIndex + 1,
            );
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, [filteredTestimonials.length, isHovered, visibleCards]);

    const maxIndex = Math.max(0, filteredTestimonials.length - visibleCards);

    const goToNext = () =>
        setCurrentIndex((prevIndex) =>
            prevIndex >= maxIndex ? 0 : prevIndex + 1,
        );

    const goToPrev = () =>
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? maxIndex : prevIndex - 1,
        );

    const handleDragEnd = (
        _: unknown,
        info: { offset: { x: number }; velocity: { x: number } },
    ) => {
        const moveX = info.offset.x;

        if (Math.abs(moveX) > 50) {
            if (moveX < 0) {
                goToNext();
            } else {
                goToPrev();
            }
        }

        setIsHovered(false);
    };

    const visibleTestimonials = filteredTestimonials.slice(
        currentIndex,
        currentIndex + visibleCards,
    );

    // Function to render a single testimonial card
    const renderTestimonialCard = (
        testimonial: (typeof filteredTestimonials)[0],
        index: number,
    ) => (
        <motion.div
            key={t(testimonial.name.en, testimonial.name.ar)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
            }}
            className="bg-card rounded-xl p-6 border border-border card-glow group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Quote
                className="w-8 h-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-500"
                strokeWidth={1}
            />
            <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => {
                    const fullStars = Math.floor(testimonial.rating);
                    const hasHalf = testimonial.rating % 1 !== 0;
                    if (i < fullStars) {
                        return (
                            <div key={i} className="w-4 h-4">
                                <Star
                                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    strokeWidth={1}
                                />
                            </div>
                        );
                    } else if (i === fullStars && hasHalf) {
                        return (
                            <div key={i} className="w-4 h-4 relative">
                                <Star
                                    className="w-4 h-4 text-gray-300 absolute"
                                    strokeWidth={1}
                                />
                                <div className="w-2 h-4 overflow-hidden absolute">
                                    <Star
                                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        strokeWidth={1}
                                    />
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={i} className="w-4 h-4">
                                <Star
                                    className="w-4 h-4 text-gray-300"
                                    strokeWidth={1}
                                />
                            </div>
                        );
                    }
                })}
            </div>
            <p className="text-sm text-muted-foreground leading-[1.8] mb-6 h-24 overflow-hidden">
                {t(testimonial.content.en, testimonial.content.ar)}
            </p>
            <div className="border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">
                    {t(testimonial.name.en, testimonial.name.ar)}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                    {t(testimonial.role.en, testimonial.role.ar)}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="testimonials" className="section-spacing">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.25em] text-primary mb-6 block font-medium">
                        {t("Testimonials", "شهادات")}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
                        {t(
                            "What Clients & Teams Say About ",
                            "ما يقوله العملاء والفرق عن ",
                        )}{" "}
                        <span className="text-primary">
                            {t("Working With Me", "العمل معي")}
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.33, 1, 0.68, 1],
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.1}
                                onDragStart={() => setIsHovered(true)}
                                onDragEnd={handleDragEnd}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {visibleTestimonials.map((testimonial, index) =>
                                    renderTestimonialCard(testimonial, index),
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation dots */}
                    {filteredTestimonials.length > visibleCards && (
                        <div className="flex justify-center gap-3 mt-8">
                            {Array.from(
                                {
                                    length:
                                        filteredTestimonials.length -
                                        visibleCards +
                                        1,
                                },
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentIndex
                                                ? "bg-primary scale-125"
                                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                        }`}
                                        aria-label={`Go to testimonial set ${index + 1}`}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
});

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
    const { t, lang } = useI18n();
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === "/";
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <div className="container mx-auto px-6">
                {/* Big CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-20 md:py-28 text-center"
                >
                    <h3 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold tracking-[-0.03em] text-foreground mb-6">
                        {t("Let's create something", "لنصنع شيئاً")}{" "}
                        <span className="text-primary">
                            {t("extraordinary", "استثنائياً")}
                        </span>
                    </h3>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            if (!isHomePage) {
                                navigate({ pathname: "/", hash: "#contact" });
                            } else {
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        {t("Start a Project", "ابدأ مشروعاً")}
                        <span
                            className={`${lang === "ar" ? "rotate-[-180deg]" : ""}`}
                        >
                            →
                        </span>
                    </a>
                </motion.div>

                {/* Bottom bar */}
                <div className="border-t border-border py-6 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">
                        © {year}
                        {t(
                            " Mohammed Basha. All rights reserved.",
                            " محمد باشا. جميع الحقوق محفوظة.",
                        )}
                    </span>
                </div>
            </div>
        </footer>
    );
}

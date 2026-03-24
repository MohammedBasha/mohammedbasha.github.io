import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, Moon, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { SERVICES } from "@/data/services";

const navItems = [
    { en: "About", ar: "عن", href: "#about" },
    { en: "Services", ar: "خدمات", href: "#services" },
    { en: "Work", ar: "أعمال", href: "#portfolio" },
    { en: "Experience", ar: "خبرات", href: "#experience" },
    { en: "Testimonials", ar: "شهادات", href: "#testimonials" },
    { en: "Contact", ar: "تواصل", href: "#contact" },
];

export default memo(function Navbar() {
    const { lang, setLang, t } = useI18n();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";
    const isServicePage = location.pathname.startsWith("/services");
    const currentServiceSlug = isServicePage
        ? location.pathname.split("/services/")[1]
        : null;

    useEffect(() => {
        let rafId: number | null = null;

        const updateScrolled = () => {
            setScrolled(window.scrollY > 50);
        };

        const onScroll = () => {
            if (rafId != null) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = null;
                updateScrolled();

                // Keep "About" highlighted when near the top.
                if (isHomePage && window.scrollY < 100) {
                    setActiveSection("about");
                }
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        updateScrolled();

        if (!isHomePage) {
            return () => {
                if (rafId != null) window.cancelAnimationFrame(rafId);
                window.removeEventListener("scroll", onScroll);
            };
        }

        const sectionIds = Array.from(
            new Set(navItems.map((item) => item.href.replace("#", ""))),
        );
        const observedIds = new Set<string>();

        const threshold = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length === 0) {
                    if (window.scrollY < 100) setActiveSection("about");
                    return;
                }

                const aboveThreshold = visible.filter(
                    (e) => e.intersectionRatio >= 0.3,
                );

                const best = (
                    aboveThreshold.length ? aboveThreshold : visible
                )[0];
                const id = (best.target as HTMLElement).id;
                if (id) setActiveSection(id);
            },
            { threshold },
        );

        const observeSectionIfPresent = (id: string) => {
            if (observedIds.has(id)) return;
            const el = document.getElementById(id);
            if (!el) return;
            observedIds.add(id);
            observer.observe(el);
        };

        // Observe anything already in the DOM.
        sectionIds.forEach(observeSectionIfPresent);

        return () => {
            if (rafId != null) window.cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, [isHomePage]);

    const handleLogoClick = (e: React.MouseEvent) => {
        if (isHomePage) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();

        const id = href.replace("#", "");

        if (!isHomePage) {
            // Navigate to home with hash, then Home page effect handles scrolling.
            setMobileOpen(false);
            navigate({ pathname: "/", hash: `#${id}` });
            return;
        }

        // Close mobile menu first
        setMobileOpen(false);

        // Add a small delay for mobile to allow menu animation to complete
        const scrollDelay = mobileOpen ? 350 : 0;

        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                // Calculate offset for fixed navbar
                const navbarHeight = 80; // h-20 = 80px
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }, scrollDelay);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-background/90 backdrop-blur-2xl border-b border-border"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between h-20 px-6">
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="font-display text-2xl font-bold tracking-tighter text-foreground"
                >
                    MB<span className="text-primary">.</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center md:gap-4 xl:gap-8">
                    {navItems.map((item) =>
                        item.href === "#services" ? (
                            <div
                                key={item.href}
                                className="relative group -mt-1"
                            >
                                <a
                                    href={`/${item.href}`}
                                    onClick={(e) =>
                                        handleNavClick(e, item.href)
                                    }
                                    className={`inline-flex items-center gap-1 text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 reveal-line pb-1 ${
                                        isServicePage ||
                                        (isHomePage &&
                                            activeSection === "services")
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {t(item.en, item.ar)}
                                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" />
                                </a>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                    <div className="bg-card/95 backdrop-blur-2xl border border-border rounded-xl p-2 min-w-[240px] shadow-lg">
                                        {SERVICES.map((service) => (
                                            <Link
                                                key={service.id}
                                                to={`/services/${service.slug}`}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                                                    currentServiceSlug ===
                                                    service.slug
                                                        ? "text-primary bg-primary/5 font-medium"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                                }`}
                                            >
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${
                                                        currentServiceSlug ===
                                                        service.slug
                                                            ? "bg-primary"
                                                            : "bg-primary/40"
                                                    }`}
                                                />
                                                {t(
                                                    service.name.en,
                                                    service.name.ar,
                                                )}
                                            </Link>
                                        ))}
                                        <div className="border-t border-border mt-1 pt-1">
                                            <Link
                                                to="/services"
                                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-primary hover:bg-secondary/50 transition-all duration-200 font-medium"
                                            >
                                                {t(
                                                    "View All Services",
                                                    "عرض جميع الخدمات",
                                                )}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                key={item.href}
                                href={`/${item.href}`}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`text-[13px] uppercase tracking-[0.15em] transition-colors duration-300 reveal-line pb-1 ${
                                    activeSection === item.href.replace("#", "")
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {t(item.en, item.ar)}
                            </a>
                        ),
                    )}
                </div>

                <div className="hidden md:flex items-center md:gap-1 xl:gap-3">
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun className="w-3.5 h-3.5" />
                        ) : (
                            <Moon className="w-3.5 h-3.5" />
                        )}
                    </button>
                    <button
                        onClick={() => setLang(lang === "en" ? "ar" : "en")}
                        className="flex items-center gap-1.5 text-[13px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-full border border-border hover:border-primary/40 duration-300"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        {lang === "en" ? "عربي" : "EN"}
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-foreground"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        className="md:hidden bg-background/98 backdrop-blur-2xl border-b border-border overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-5">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) =>
                                        handleNavClick(e, item.href)
                                    }
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`text-2xl font-display font-semibold ${
                                        (item.href === "#services" &&
                                            isServicePage) ||
                                        (isHomePage &&
                                            activeSection ===
                                                item.href.replace("#", ""))
                                            ? "text-primary"
                                            : "text-foreground"
                                    }`}
                                >
                                    {t(item.en, item.ar)}
                                </motion.a>
                            ))}
                            <div className="flex items-center gap-3 pt-4 border-t border-border">
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                        setMobileOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    {theme === "dark" ? (
                                        <Sun className="w-4 h-4" />
                                    ) : (
                                        <Moon className="w-4 h-4" />
                                    )}
                                    {theme === "dark" ? "Light" : "Dark"}
                                </button>
                                <span className="text-border">|</span>
                                <button
                                    onClick={() => {
                                        setLang(lang === "en" ? "ar" : "en");
                                        setMobileOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                >
                                    <Globe className="w-4 h-4" />
                                    {lang === "en" ? "عربي" : "English"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
});

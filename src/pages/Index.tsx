import { lazy, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import LazyOnVisible from "@/components/LazyOnVisible";

const LazyContact = lazy(() => import("@/components/Contact"));

const Index = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState(
        () => searchParams.get("tag") || "all",
    );

    useEffect(() => {
        const tag = searchParams.get("tag");
        if (tag && tag !== activeFilter) {
            setActiveFilter(tag);
        }
    }, [searchParams]);

    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const element = document.getElementById(
                location.hash.replace("#", ""),
            );
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter);
        if (filter === "all") {
            setSearchParams({});
        } else {
            setSearchParams({ tag: filter });
        }
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar />
            <Hero />
            <Marquee />
            <About />
            <Services />
            <Portfolio
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
            />
            <Experience />
            <Testimonials />
            <LazyOnVisible
                markerId="contact"
                rootMargin="300px"
                placeholder={<div style={{ minHeight: 760 }} />}
            >
                <LazyContact />
            </LazyOnVisible>
            <Footer />
            <WhatsAppButton />
            <ScrollToTop />
        </div>
    );
};

export default Index;

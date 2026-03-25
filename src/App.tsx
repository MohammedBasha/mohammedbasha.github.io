import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import { I18nProvider } from "@/lib/i18n";
import Index from "./pages/Index.tsx";

const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.tsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

// Component to handle 404 redirects from GitHub Pages
const RedirectHandler = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectPath = sessionStorage.getItem("redirectPath");
        if (redirectPath) {
            sessionStorage.removeItem("redirectPath");
            navigate(redirectPath);
        }
    }, [navigate]);

    return <>{children}</>;
};

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route
            path="/services"
            element={
                <Suspense fallback={null}>
                    <ServicesPage />
                </Suspense>
            }
        />
        <Route
            path="/services/:slug"
            element={
                <Suspense fallback={null}>
                    <ServicePage />
                </Suspense>
            }
        />
        <Route
            path="/projects"
            element={
                <Suspense fallback={null}>
                    <ProjectsPage />
                </Suspense>
            }
        />
        <Route
            path="*"
            element={
                <Suspense fallback={null}>
                    <NotFound />
                </Suspense>
            }
        />
    </Routes>
);

const App = () => (
    <TooltipProvider>
        <ThemeProvider>
            <I18nProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <RedirectHandler>
                        <AppRoutes />
                    </RedirectHandler>
                </BrowserRouter>
            </I18nProvider>
        </ThemeProvider>
    </TooltipProvider>
);

export default App;

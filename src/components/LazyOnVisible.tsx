import { ReactNode, Suspense, useEffect, useRef, useState } from "react";

type Props = {
    children: ReactNode;
    placeholder?: ReactNode;
    rootMargin?: string;
    threshold?: number | number[];
    disabled?: boolean;
    markerId?: string;
};

/**
 * Mount children only when the placeholder becomes visible.
 * Useful to keep heavy sections off the initial bundle work.
 */
export default function LazyOnVisible({
    children,
    placeholder = null,
    rootMargin = "200px",
    threshold = 0.01,
    disabled = false,
    markerId,
}: Props) {
    const markerRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(disabled);

    useEffect(() => {
        if (disabled) return;
        const el = markerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin, threshold },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [disabled, rootMargin, threshold]);

    // Keep the wrapper in the DOM so `id` exists for IntersectionObserver.
    // When visible, we only swap the content.
    return (
        <div id={markerId} ref={markerRef}>
            {!isVisible ? placeholder : <Suspense fallback={null}>{children}</Suspense>}
        </div>
    );
}


import { useState, useEffect } from "react";

export function useScreenSize() {
    const [screenSize, setScreenSize] = useState<
        "mobile" | "tablet" | "desktop"
    >("desktop");

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize("mobile");
            } else if (width < 1024) {
                setScreenSize("tablet");
            } else {
                setScreenSize("desktop");
            }
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    return screenSize;
}

export function useVisibleCards() {
    const screenSize = useScreenSize();

    switch (screenSize) {
        case "mobile":
            return 1;
        case "tablet":
            return 2;
        case "desktop":
            return 3;
        default:
            return 3;
    }
}

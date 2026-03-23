declare global {
    interface Window {
        gtag: (...args: unknown[]) => void;
    }
}

export const trackEvent = (action: string, label: string): void => {
    if (window.gtag) {
        window.gtag("event", action, {
            event_category: "engagement",
            event_label: label,
        });
    }
};

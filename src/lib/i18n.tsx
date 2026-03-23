import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

export type Lang = "en" | "ar";

interface I18nContextType {
    lang: "en" | "ar";
    setLang: (lang: "en" | "ar") => void;
    t: <T>(en: T, ar: T) => T;
    dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
    lang: "en",
    setLang: () => {},
    t: (en, _ar) => en,
    dir: "ltr",
});

export const useI18n = () => useContext(I18nContext);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>(() => {
        // Get language from localStorage or default to "en"
        const savedLang = localStorage.getItem("language") as Lang;
        return savedLang && (savedLang === "en" || savedLang === "ar")
            ? savedLang
            : "en";
    });

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        localStorage.setItem("language", newLang);
    };

    const t = <T,>(en: T, ar: T): T => {
        return lang === "ar" ? ar : en;
    };
    const dir = lang === "ar" ? "rtl" : "ltr";

    return (
        <I18nContext.Provider value={{ lang, setLang, t, dir }}>
            <div dir={dir} lang={lang}>
                {children}
            </div>
        </I18nContext.Provider>
    );
}

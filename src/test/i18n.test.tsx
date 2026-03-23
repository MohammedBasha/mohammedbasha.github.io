import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { I18nProvider, useI18n } from "../lib/i18n";

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};
Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
});

// Test component that uses i18n
function TestComponent() {
    const { t, lang, dir } = useI18n();
    return (
        <div>
            <p data-testid="greeting">{t("Hello", "مرحباً")}</p>
            <p data-testid="lang">{lang}</p>
            <p data-testid="dir">{dir}</p>
        </div>
    );
}

describe("I18nProvider", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("defaults to English when no language is saved", () => {
        localStorageMock.getItem.mockReturnValue(null);

        render(
            <I18nProvider>
                <TestComponent />
            </I18nProvider>,
        );

        expect(screen.getByTestId("greeting")).toHaveTextContent("Hello");
        expect(screen.getByTestId("lang")).toHaveTextContent("en");
        expect(screen.getByTestId("dir")).toHaveTextContent("ltr");
    });

    it("loads saved language from localStorage", () => {
        localStorageMock.getItem.mockReturnValue("ar");

        render(
            <I18nProvider>
                <TestComponent />
            </I18nProvider>,
        );

        expect(screen.getByTestId("greeting")).toHaveTextContent("مرحباً");
        expect(screen.getByTestId("lang")).toHaveTextContent("ar");
        expect(screen.getByTestId("dir")).toHaveTextContent("rtl");
    });
});

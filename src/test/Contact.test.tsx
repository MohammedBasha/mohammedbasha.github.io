import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import { I18nProvider } from "../lib/i18n";

describe("Contact Component", () => {
    it("renders contact form correctly", () => {
        render(
            <I18nProvider>
                <Contact />
            </I18nProvider>,
        );

        expect(screen.getByText("تواصل")).toBeInTheDocument();
    });
});

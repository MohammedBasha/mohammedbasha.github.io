import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ScrollToTop from "../components/ScrollToTop";

describe("ScrollToTop Component", () => {
    it("renders without crashing", () => {
        render(<ScrollToTop />);
        // Component should render without throwing
    });
});

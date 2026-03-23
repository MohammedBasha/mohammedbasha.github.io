import { describe, it, expect } from "vitest";
import { cn } from "../lib/utils";

describe("cn utility function", () => {
    it("combines class names correctly", () => {
        expect(cn("class1", "class2")).toBe("class1 class2");
    });

    it("handles conditional classes", () => {
        expect(cn("base", true && "active", false && "inactive")).toBe(
            "base active",
        );
    });

    it("merges Tailwind classes correctly", () => {
        expect(cn("px-2 py-1", "px-4")).toBe("px-4 py-1");
    });

    it("handles undefined and null values", () => {
        expect(cn("class1", undefined, null, "class2")).toBe("class1 class2");
    });

    it("handles empty strings", () => {
        expect(cn("class1", "", "class2")).toBe("class1 class2");
    });
});

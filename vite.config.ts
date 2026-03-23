import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Split vendor chunks for better caching.
        // Note: this Vite version expects manualChunks to be a function.
        manualChunks: (id) => {
          if (!id) return undefined;

          const inNodeModules = id.includes("node_modules");
          if (!inNodeModules) return undefined;

          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router-dom/")
          ) {
            return "react-vendor";
          }

          if (
            id.includes("node_modules/framer-motion/") ||
            id.includes("node_modules/lucide-react/")
          ) {
            return "ui-vendor";
          }

          if (
            id.includes("node_modules/react-hook-form/") ||
            id.includes("node_modules/@hookform/resolvers/") ||
            id.includes("node_modules/zod/")
          ) {
            return "form-vendor";
          }

          return undefined;
        },
      },
    },
    // Use Vite's built-in (esbuild) minifier to avoid requiring terser.
    // This still reduces payload sizes for Lighthouse.
    minify: "esbuild",
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Optimize images
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],
}));

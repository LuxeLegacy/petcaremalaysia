import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          // Anything that touches React at module-eval time MUST live in the same chunk as React.
          // Splitting Radix/lucide/etc. into a separate chunk causes `React.forwardRef` to be
          // undefined when that chunk evaluates before react-vendor.
          if (
            id.match(/node_modules\/(react|react-dom|scheduler|react-is)\//) ||
            id.includes("react-router") ||
            id.includes("@radix-ui") ||
            id.includes("lucide-react") ||
            id.includes("cmdk") ||
            id.includes("sonner") ||
            id.includes("vaul") ||
            id.includes("class-variance-authority") ||
            id.includes("tailwind-merge") ||
            id.includes("clsx") ||
            id.includes("@tanstack/react-query") ||
            id.includes("react-helmet-async") ||
            id.includes("recharts") ||
            id.match(/node_modules\/d3-/)
          )
            return "react-vendor";
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform") ||
            id.includes("zod")
          )
            return "form-vendor";
          if (id.includes("@supabase")) return "supabase-vendor";
          if (id.includes("date-fns") || id.includes("react-day-picker"))
            return "date-vendor";
          if (id.includes("embla-carousel")) return "carousel-vendor";
        },
      },
    },
  },
}));

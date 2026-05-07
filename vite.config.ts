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
          if (id.includes("react-router")) return "react-vendor";
          if (id.match(/node_modules\/(react|react-dom|scheduler)\//)) return "react-vendor";
          if (id.includes("@radix-ui")) return "ui-vendor";
          if (
            id.includes("lucide-react") ||
            id.includes("cmdk") ||
            id.includes("sonner") ||
            id.includes("vaul") ||
            id.includes("class-variance-authority") ||
            id.includes("tailwind-merge") ||
            id.includes("clsx")
          )
            return "ui-vendor";
          if (id.includes("@tanstack/react-query") || id.includes("react-helmet-async"))
            return "query-vendor";
          if (
            id.includes("react-hook-form") ||
            id.includes("@hookform") ||
            id.includes("zod")
          )
            return "form-vendor";
          if (id.includes("recharts") || id.includes("d3-")) return "chart-vendor";
          if (id.includes("@supabase")) return "supabase-vendor";
          if (id.includes("date-fns") || id.includes("react-day-picker"))
            return "date-vendor";
          if (id.includes("embla-carousel")) return "carousel-vendor";
        },
      },
    },
  },
}));

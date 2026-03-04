import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/sitemap.xml": {
        target: "https://xdincsheohvgxewpfwlg.supabase.co",
        changeOrigin: true,
        secure: true,
        rewrite: () => "/functions/v1/sitemap",
      },
      "/ms/sitemap.xml": {
        target: "https://xdincsheohvgxewpfwlg.supabase.co",
        changeOrigin: true,
        secure: true,
        rewrite: () => "/functions/v1/sitemap?lang=ms",
      },
      "/zh/sitemap.xml": {
        target: "https://xdincsheohvgxewpfwlg.supabase.co",
        changeOrigin: true,
        secure: true,
        rewrite: () => "/functions/v1/sitemap?lang=zh",
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

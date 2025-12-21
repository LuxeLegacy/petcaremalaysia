import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import CityPage from "./pages/CityPage";
import LocationsPage from "./pages/LocationsPage";
import ServicesPage from "./pages/ServicesPage";
import SitemapPage from "./pages/SitemapPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import QAPage from "./pages/QAPage";
import StateQAPage from "./pages/StateQAPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Sitemap - must be before /:lang to avoid matching */}
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Home */}
              <Route path="/" element={<Index />} />
              
              {/* Language-prefixed routes */}
              <Route path="/:lang" element={<Index />} />
              
              {/* Locations */}
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/:lang/locations" element={<LocationsPage />} />
              
              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/:lang/services" element={<ServicesPage />} />
              
              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/:lang/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/:lang/blog/:slug" element={<BlogPostPage />} />
              
              {/* Q&A */}
              <Route path="/qa" element={<QAPage />} />
              <Route path="/:lang/qa" element={<QAPage />} />
              <Route path="/qa/:state" element={<StateQAPage />} />
              <Route path="/:lang/qa/:state" element={<StateQAPage />} />
              
              {/* Legal pages */}
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              
              {/* City pages */}
              <Route path="/:state/:city" element={<CityPage />} />
              <Route path="/:lang/:state/:city" element={<CityPage />} />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

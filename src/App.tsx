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
import AssessmentPage from "./pages/AssessmentPage";
import AdminPage from "./pages/AdminPage";
import EmergencyGuidePage from "./pages/EmergencyGuidePage";
import PAAArticleRouter from "./pages/PAAArticleRouter";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import DogDentalRouter from "./pages/DogDentalRouter";
import UrinaryRouter from "./pages/UrinaryRouter";
import NotFound from "./pages/NotFound";
import VetClinicsPage from "./pages/VetClinicsPage";

const queryClient = new QueryClient();

// App component with LanguageProvider inside BrowserRouter for useLocation access
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Routes>
              {/* Sitemap - must be before /:lang to avoid matching */}
              <Route path="/sitemap" element={<SitemapPage />} />
              
              {/* Vet Clinics Directory */}
              <Route path="/vet-clinics" element={<VetClinicsPage />} />
              <Route path="/:lang/vet-clinics" element={<VetClinicsPage />} />
              
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
              <Route path="/qa/article/:slug" element={<PAAArticleRouter />} />
              <Route path="/:lang/qa/article/:slug" element={<PAAArticleRouter />} />
              <Route path="/qa/:state" element={<StateQAPage />} />
              <Route path="/:lang/qa/:state" element={<StateQAPage />} />
              
              {/* Assessment */}
              <Route path="/assessment" element={<AssessmentPage />} />
              <Route path="/:lang/assessment" element={<AssessmentPage />} />
              
              {/* Emergency Guide */}
              <Route path="/emergency-guide" element={<EmergencyGuidePage />} />
              <Route path="/:lang/emergency-guide" element={<EmergencyGuidePage />} />
              
              {/* Search */}
              <Route path="/search" element={<SearchPage />} />
              <Route path="/:lang/search" element={<SearchPage />} />

              {/* Category */}
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/:lang/category/:slug" element={<CategoryPage />} />

              {/* Dog Dental Disease Hub */}
              <Route path="/dog-dental-disease" element={<DogDentalRouter />} />
              <Route path="/dog-dental-disease/:category" element={<DogDentalRouter />} />
              <Route path="/dog-dental-disease/:category/:slug" element={<DogDentalRouter />} />
              <Route path="/:lang/dog-dental-disease" element={<DogDentalRouter />} />
              <Route path="/:lang/dog-dental-disease/:category" element={<DogDentalRouter />} />
              <Route path="/:lang/dog-dental-disease/:category/:slug" element={<DogDentalRouter />} />

              {/* Urinary Tract Disease Hub */}
              <Route path="/urinary-tract-disease" element={<UrinaryRouter />} />
              <Route path="/urinary-tract-disease/:a" element={<UrinaryRouter />} />
              <Route path="/urinary-tract-disease/:a/:b" element={<UrinaryRouter />} />
              <Route path="/urinary-tract-disease/:a/:b/:c" element={<UrinaryRouter />} />
              <Route path="/:lang/urinary-tract-disease" element={<UrinaryRouter />} />
              <Route path="/:lang/urinary-tract-disease/:a" element={<UrinaryRouter />} />
              <Route path="/:lang/urinary-tract-disease/:a/:b" element={<UrinaryRouter />} />
              <Route path="/:lang/urinary-tract-disease/:a/:b/:c" element={<UrinaryRouter />} />

              {/* Admin */}
              <Route path="/admin" element={<AdminPage />} />
              
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
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

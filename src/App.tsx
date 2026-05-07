import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";

const CityPage = lazy(() => import("./pages/CityPage"));
const LocationsPage = lazy(() => import("./pages/LocationsPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const DisclaimerPage = lazy(() => import("./pages/DisclaimerPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const QAPage = lazy(() => import("./pages/QAPage"));
const StateQAPage = lazy(() => import("./pages/StateQAPage"));
const AssessmentPage = lazy(() => import("./pages/AssessmentPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const EmergencyGuidePage = lazy(() => import("./pages/EmergencyGuidePage"));
const PAAArticleRouter = lazy(() => import("./pages/PAAArticleRouter"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const DogDentalRouter = lazy(() => import("./pages/DogDentalRouter"));
const UrinaryRouter = lazy(() => import("./pages/UrinaryRouter"));
const NotFound = lazy(() => import("./pages/NotFound"));
const VetClinicsPage = lazy(() => import("./pages/VetClinicsPage"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div style={{ minHeight: "50vh" }} aria-hidden="true" />
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/sitemap" element={<SitemapPage />} />

                <Route path="/vet-clinics" element={<VetClinicsPage />} />
                <Route path="/:lang/vet-clinics" element={<VetClinicsPage />} />

                <Route path="/" element={<Index />} />
                <Route path="/:lang" element={<Index />} />

                <Route path="/locations" element={<LocationsPage />} />
                <Route path="/:lang/locations" element={<LocationsPage />} />

                <Route path="/services" element={<ServicesPage />} />
                <Route path="/:lang/services" element={<ServicesPage />} />

                <Route path="/blog" element={<BlogPage />} />
                <Route path="/:lang/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/:lang/blog/:slug" element={<BlogPostPage />} />

                <Route path="/qa" element={<QAPage />} />
                <Route path="/:lang/qa" element={<QAPage />} />
                <Route path="/qa/article/:slug" element={<PAAArticleRouter />} />
                <Route path="/:lang/qa/article/:slug" element={<PAAArticleRouter />} />
                <Route path="/qa/:state" element={<StateQAPage />} />
                <Route path="/:lang/qa/:state" element={<StateQAPage />} />

                <Route path="/assessment" element={<AssessmentPage />} />
                <Route path="/:lang/assessment" element={<AssessmentPage />} />

                <Route path="/emergency-guide" element={<EmergencyGuidePage />} />
                <Route path="/:lang/emergency-guide" element={<EmergencyGuidePage />} />

                <Route path="/search" element={<SearchPage />} />
                <Route path="/:lang/search" element={<SearchPage />} />

                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/:lang/category/:slug" element={<CategoryPage />} />

                <Route path="/dog-dental-disease" element={<DogDentalRouter />} />
                <Route path="/dog-dental-disease/:category" element={<DogDentalRouter />} />
                <Route path="/dog-dental-disease/:category/:slug" element={<DogDentalRouter />} />
                <Route path="/:lang/dog-dental-disease" element={<DogDentalRouter />} />
                <Route path="/:lang/dog-dental-disease/:category" element={<DogDentalRouter />} />
                <Route path="/:lang/dog-dental-disease/:category/:slug" element={<DogDentalRouter />} />

                <Route path="/urinary-tract-disease" element={<UrinaryRouter />} />
                <Route path="/urinary-tract-disease/:a" element={<UrinaryRouter />} />
                <Route path="/urinary-tract-disease/:a/:b" element={<UrinaryRouter />} />
                <Route path="/urinary-tract-disease/:a/:b/:c" element={<UrinaryRouter />} />
                <Route path="/:lang/urinary-tract-disease" element={<UrinaryRouter />} />
                <Route path="/:lang/urinary-tract-disease/:a" element={<UrinaryRouter />} />
                <Route path="/:lang/urinary-tract-disease/:a/:b" element={<UrinaryRouter />} />
                <Route path="/:lang/urinary-tract-disease/:a/:b/:c" element={<UrinaryRouter />} />

                <Route path="/admin" element={<AdminPage />} />

                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />

                <Route path="/:state/:city" element={<CityPage />} />
                <Route path="/:lang/:state/:city" element={<CityPage />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

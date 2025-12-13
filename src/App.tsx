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

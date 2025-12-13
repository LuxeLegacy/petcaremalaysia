import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { 
  HeroSection, 
  ServicesSection, 
  LocationsSection, 
  EmergencyBanner 
} from '@/components/home/HomeSections';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="PetCare Malaysia — Emergency Vets, Clinics, Grooming & Pet Services"
        description="Find trusted pet care services across Malaysia. 24/7 emergency vets, clinics, grooming, boarding, pet food, and adoption services in 100+ locations."
        canonicalUrl="https://petcaremalaysia.com"
        language={language}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <EmergencyBanner />
          <ServicesSection />
          <LocationsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

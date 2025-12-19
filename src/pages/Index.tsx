import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { 
  HeroSection, 
  ServicesSection, 
  LocationsSection, 
  EmergencyBanner 
} from '@/components/home/HomeSections';
import { CrisisSection } from '@/components/home/CrisisSection';
import { StatisticsSection } from '@/components/home/StatisticsSection';
import { MissionSection } from '@/components/home/MissionSection';
import { GovernmentResources } from '@/components/home/GovernmentResources';
import { InsuranceSection } from '@/components/home/InsuranceSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { PeopleAlsoAskSection } from '@/components/home/PeopleAlsoAskSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="PetCare Malaysia — 24/7 Emergency Vets, Clinics & Pet Services | Find Help Now"
        description="Your pet could die tonight without emergency care. Find verified 24/7 vets in KL, PJ, Shah Alam & 100+ locations. 23,000+ pet owners trust us. Pet insurance from RM25/month."
        canonicalUrl="https://petcaremalaysia.com"
        language={language}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Section 1: Power Headline & Pattern Interrupt */}
          <HeroSection />
          
          {/* Emergency Banner */}
          <EmergencyBanner />
          
          {/* Section 2: The Hidden Crisis (Pain Agitation) */}
          <CrisisSection />
          
          {/* Section 3: Malaysia Pet Statistics (GEO + AEO) */}
          <StatisticsSection />
          
          {/* Section 4: Why PetCare Malaysia Exists (Story/Origin) */}
          <MissionSection />
          
          {/* Section 5: Government Resources & Regulations (Citations) */}
          <GovernmentResources />
          
          {/* Section 6: Services Grid */}
          <ServicesSection />
          
          {/* Section 7: Pet Insurance Breakdown (AEO) */}
          <InsuranceSection />
          
          {/* Section 8: Social Proof Gallery */}
          <TestimonialsSection />
          
          {/* Section 9: Location Coverage (GEO optimized) */}
          <LocationsSection />
          
          {/* Section 10: People Also Ask (SEO) */}
          <PeopleAlsoAskSection />
          
          {/* Section 11: Comprehensive FAQ (20 AEO Questions) */}
          <FAQSection />
          
          {/* Section 12: Final CTA with Urgency */}
          <FinalCtaSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;

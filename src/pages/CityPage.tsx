import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { CityPageContent } from '@/components/city/CityPageContent';
import { CitySchemaMarkup } from '@/components/city/CitySchemaMarkup';
import { getCityBySlug } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateCityFAQs } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowLeft } from 'lucide-react';

const CityPage = () => {
  const { state, city: citySlug } = useParams<{ state: string; city: string }>();
  const { language, t } = useLanguage();

  const city = getCityBySlug(state || '', citySlug || '');

  if (!city) {
    return (
      <>
        <Header />
        <main className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">{t.common.notFound}</h1>
            <p className="text-muted-foreground mb-6">
              We couldn't find pet services for this location.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const metadata = getCityMetadata(city.slug);
  const faqs = generateCityFAQs(city, language);
  const nearMe = language === 'ms' ? 'Vet Berdekatan Saya' : language === 'zh' ? '附近兽医' : 'Vets Near Me';
  const title = language === 'zh'
    ? `${city.name}${nearMe} — 24/7急诊护理 RM${metadata.avgEmergencyVetCost.min}+ | PetCareMY`
    : `${nearMe} in ${city.name} — 24/7 Emergency RM${metadata.avgEmergencyVetCost.min}+ | PetCareMY`;
  const description = `Find vets near you in ${city.name}, ${city.state}. Emergency care RM${metadata.avgEmergencyVetCost.min}-${metadata.avgEmergencyVetCost.max}, consultations RM${metadata.avgConsultationCost.min}+. ${metadata.petRisks[0]} is common here. ${metadata.nearestMajorCity ? `${metadata.distanceToHub} to 24/7 vet.` : 'Multiple 24/7 clinics available.'}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        path={`/${city.stateSlug}/${city.slug}`}
        language={language}
      />
      
      {/* JSON-LD Schema Markup - FAQs passed to ensure schema matches displayed content */}
      <CitySchemaMarkup city={city} faqs={faqs} />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <CityPageContent city={city} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CityPage;

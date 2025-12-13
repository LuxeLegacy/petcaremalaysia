import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { CityPageContent } from '@/components/city/CityPageContent';
import { getCityBySlug } from '@/lib/cityData';
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

  const title = `Pet Care ${city.name} — Vets, Grooming, Emergency & Prices | PetCare Malaysia`;
  const description = `Find vets, emergency care, grooming, and pet services in ${city.name}, ${city.state}. Compare clinics and call 24/7 help. Updated: ${new Date().toISOString().split('T')[0]}`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl={`https://petcaremalaysia.com/${city.stateSlug}/${city.slug}`}
        city={city}
        language={language}
      />
      
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

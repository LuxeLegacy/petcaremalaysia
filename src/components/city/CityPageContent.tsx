import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityData, getNearbyCities } from '@/lib/cityData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useVetClinics, VetClinic } from '@/hooks/useVetClinics';
import { Skeleton } from '@/components/ui/skeleton';
import { ClinicFilters } from './ClinicFilters';
import { CityHeroSection } from './CityHeroSection';
import { CityCrisisSection } from './CityCrisisSection';
import { CityTestimonialsSection } from './CityTestimonialsSection';
import { CityStatisticsSection } from './CityStatisticsSection';
import { CityInsuranceSection } from './CityInsuranceSection';
import { CityGovernmentSection } from './CityGovernmentSection';
import { CityFAQSection } from './CityFAQSection';
import { CityFinalCtaSection } from './CityFinalCtaSection';
import { CityPAASection } from './CityPAASection';
import { YourQuestionsAnsweredSection } from './YourQuestionsAnsweredSection';
import { AskPetQuestion } from './AskPetQuestion';
import { 
  Phone, 
  MapPin, 
  Star, 
  ChevronRight, 
  Heart, 
  Scissors, 
  ShoppingBag,
  AlertTriangle
} from 'lucide-react';

interface CityPageContentProps {
  city: CityData;
}

export const CityPageContent: React.FC<CityPageContentProps> = ({ city }) => {
  const { t } = useLanguage();
  const { data: clinics = [], isLoading: clinicsLoading } = useVetClinics(city.name, city.state);
  const [filteredClinics, setFilteredClinics] = useState<VetClinic[]>([]);
  const nearbyCities = getNearbyCities(city, 5);

  useEffect(() => {
    setFilteredClinics(clinics);
  }, [clinics]);

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <section className="bg-destructive/10 border-b border-destructive/20 py-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span className="text-sm font-medium">{t.cityPage.emergencyBanner}</span>
            </div>
            <Button variant="destructive" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              {t.cityPage.callNow}: +60 12-345 6789
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section with unique content */}
      <CityHeroSection city={city} />

      {/* Crisis/Urgency Section */}
      <CityCrisisSection city={city} />

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Emergency Vet */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-destructive">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <Phone className="h-5 w-5 text-destructive" />
                </div>
                <h2 className="text-xl font-semibold">{t.services.emergency.title}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                When seconds count, {city.name} has 24/7 emergency veterinary care ready to help. 
                Our partner clinics are equipped with trauma care, surgery suites, and critical care units.
              </p>
              <Button variant="destructive" size="sm" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Emergency Hotline
              </Button>
            </div>

            {/* Vet Clinics */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">{t.cityPage.vetClinics}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Regular check-ups, vaccinations, and health screenings keep your pet healthy. 
                {city.name} veterinary clinics offer comprehensive care from routine exams to specialized treatments.
              </p>
              <Link to={`/${city.stateSlug}/${city.slug}/vets`} className="text-primary text-sm font-medium hover:underline flex items-center">
                {t.cityPage.viewAll} Clinics <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Grooming */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Scissors className="h-5 w-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold">{t.cityPage.groomingBoarding}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Professional grooming keeps your pet comfortable in Malaysia's tropical climate. 
                From basic baths to full spa treatments, {city.name} groomers handle all breeds.
              </p>
              <Link to={`/${city.stateSlug}/${city.slug}/grooming`} className="text-primary text-sm font-medium hover:underline flex items-center">
                {t.cityPage.viewAll} Groomers <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Pet Food */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-gold">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <ShoppingBag className="h-5 w-5 text-gold" />
                </div>
                <h2 className="text-xl font-semibold">{t.cityPage.petFood}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Quality nutrition is essential for your pet's health. Find premium pet food brands, 
                specialty diets, and nutrition consultations in {city.name}.
              </p>
              <Link to="/tools/food-calculator" className="text-primary text-sm font-medium hover:underline flex items-center">
                Pet Food Calculator <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            {/* Adoption */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-terracotta">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-terracotta/10 rounded-lg">
                  <Heart className="h-5 w-5 text-terracotta" />
                </div>
                <h2 className="text-xl font-semibold">{t.cityPage.adoption}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Give a loving home to a pet in need. Local shelters and rescue organizations in {city.name} 
                have dogs, cats, and other animals waiting for their forever families.
              </p>
              <Link to={`/${city.stateSlug}/${city.slug}/adoption`} className="text-primary text-sm font-medium hover:underline flex items-center">
                Find Adoptable Pets <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Listings */}
      <section className="py-16 gradient-warm">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.cityPage.vetClinics} in {city.name}</h2>
          
          {clinicsLoading ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-5 shadow-card">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-3" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-9 w-full" />
                </div>
              ))}
            </div>
          ) : clinics.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-xl">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No vet clinics listed for {city.name} yet.</p>
              <p className="text-sm text-muted-foreground mt-1">Check back soon or try nearby areas.</p>
            </div>
          ) : (
            <>
              <ClinicFilters clinics={clinics} onFilteredClinics={setFilteredClinics} />
              
              {filteredClinics.length === 0 ? (
                <div className="text-center py-12 bg-card rounded-xl">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No clinics match your filters.</p>
                  <p className="text-sm text-muted-foreground mt-1">Try adjusting your search criteria.</p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredClinics.map((clinic) => (
                    <div key={clinic.id} className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">{clinic.name}</h3>
                        <div className="flex gap-1">
                          {clinic.is_emergency && (
                            <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded-full font-medium">
                              Emergency
                            </span>
                          )}
                          {clinic.is_24_hours && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                              24/7
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                        {clinic.address}
                      </p>
                      <div className="flex items-center gap-4 mb-4">
                        {clinic.rating && (
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 text-gold fill-gold" />
                            <span className="font-medium">{clinic.rating}</span>
                            {clinic.review_count && (
                              <span className="text-muted-foreground">({clinic.review_count})</span>
                            )}
                          </div>
                        )}
                        {clinic.services && clinic.services.length > 0 && (
                          <span className="text-xs text-muted-foreground">
                            {clinic.services.slice(0, 2).join(', ')}
                          </span>
                        )}
                      </div>
                      {clinic.phone && (
                        <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                          <a href={`tel:${clinic.phone}`}>
                            <Phone className="h-4 w-4" />
                            {clinic.phone}
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* AI-Powered Ask Pet Question */}
      <AskPetQuestion city={city} />

      {/* Your Questions Answered Section */}
      <YourQuestionsAnsweredSection city={city} />

      {/* Statistics Section */}
      <CityStatisticsSection city={city} />

      {/* Testimonials Section */}
      <CityTestimonialsSection city={city} />

      {/* Insurance Section */}
      <CityInsuranceSection city={city} />

      {/* Government Resources Section */}
      <CityGovernmentSection city={city} />

      {/* FAQ Section with unique city-specific questions */}
      <CityFAQSection city={city} />

      {/* People Also Ask Section */}
      <CityPAASection city={city} />

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h2 className="text-xl font-semibold mb-6">Nearby Areas</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  to={`/${nearbyCity.stateSlug}/${nearbyCity.slug}`}
                  className="px-4 py-2 bg-card rounded-lg border hover:border-primary transition-colors text-sm"
                >
                  {nearbyCity.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <CityFinalCtaSection city={city} />
    </div>
  );
};

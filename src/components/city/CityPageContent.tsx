import { useLanguage } from '@/contexts/LanguageContext';
import { CityData, getNearbyCities } from '@/lib/cityData';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useVetClinics } from '@/hooks/useVetClinics';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  ChevronRight, 
  Heart, 
  Scissors, 
  ShoppingBag,
  Shield,
  AlertTriangle
} from 'lucide-react';

interface CityPageContentProps {
  city: CityData;
}


const generateFAQs = (cityName: string, t: ReturnType<typeof useLanguage>['t']) => [
  {
    q: `What do I do if my dog collapses in ${cityName}?`,
    a: `Stay calm and check for breathing. Call the nearest 24/7 emergency vet immediately. Keep your pet warm and still during transport. Do not give any medication without veterinary advice.`,
  },
  {
    q: `Are there 24-hour vet clinics in ${cityName}?`,
    a: `Yes, ${cityName} has several 24/7 emergency veterinary clinics. The ${cityName} Veterinary Hospital offers round-the-clock emergency care for all pet emergencies.`,
  },
  {
    q: `How much does a vet visit cost in ${cityName}?`,
    a: `Standard consultations typically range from RM50-150. Emergency visits may cost RM150-500 depending on the treatment required. Many clinics offer payment plans.`,
  },
  {
    q: `Where can I adopt a pet in ${cityName}?`,
    a: `Local shelters and rescue organizations in ${cityName} have many pets awaiting adoption. Visit our adoption section for verified rescue contacts and available animals.`,
  },
  {
    q: `What vaccinations does my pet need in Malaysia?`,
    a: `Core vaccinations include rabies (required by law), distemper, parvovirus, and hepatitis for dogs. Cats need FVRCP and rabies. Consult a local vet for a complete schedule.`,
  },
  {
    q: `How do I find a good pet groomer in ${cityName}?`,
    a: `Look for certified groomers with positive reviews. Visit the facility first to check cleanliness. Ask about their experience with your pet's breed and coat type.`,
  },
];

export const CityPageContent: React.FC<CityPageContentProps> = ({ city }) => {
  const { t, language } = useLanguage();
  const { data: clinics = [], isLoading: clinicsLoading } = useVetClinics(city.name, city.state);
  const faqs = generateFAQs(city.name, t);
  const nearbyCities = getNearbyCities(city, 5);
  const lastUpdated = new Date().toISOString().split('T')[0];

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

      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container">
          {/* AI Snippet */}
          <div className="snippet bg-primary-foreground/10 rounded-xl p-4 mb-8 text-primary-foreground">
            <p className="text-sm">
              Find 24/7 emergency vets, trusted clinics and grooming in {city.name}. 
              For life-threatening emergencies call the nearest 24/7 clinic first — see our quick numbers and map below. 
              — Updated: {lastUpdated}
            </p>
          </div>

          {/* Breadcrumb */}
          <nav className="text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-primary-foreground">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/${city.stateSlug}`} className="hover:text-primary-foreground">{city.state}</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">{city.name}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t.cityPage.servicesIn} {city.name}
          </h1>

          <p className="text-lg text-primary-foreground/90 max-w-2xl mb-6">
            {city.name} is a vibrant area in {city.state} with excellent pet care facilities. 
            With our humid equatorial climate, heatstroke during midday is a common pet risk — carry water on walks.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 text-primary-foreground">
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{city.state}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{t.cityPage.open24h}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg">
              <Star className="h-4 w-4" />
              <span className="text-sm">4.7 {t.cityPage.rating}</span>
            </div>
          </div>
        </div>
      </section>

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
                Keep emergency numbers saved and know the fastest route to your nearest 24-hour clinic.
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
                From basic baths to full spa treatments, {city.name} groomers handle all breeds and coat types.
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

            {/* Insurance */}
            <div className="bg-card rounded-2xl p-6 shadow-card border-l-4 border-sage">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sage/10 rounded-lg">
                  <Shield className="h-5 w-5 text-sage" />
                </div>
                <h2 className="text-xl font-semibold">{t.cityPage.insurance}</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Protect your pet and your wallet with comprehensive pet insurance. 
                Compare plans available in Malaysia and find the right coverage for your furry friend.
              </p>
              <Link to="/services/insurance" className="text-primary text-sm font-medium hover:underline flex items-center">
                Compare Plans <ChevronRight className="h-4 w-4 ml-1" />
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
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {clinics.map((clinic) => (
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.cityPage.faq}</h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl p-5 shadow-soft">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* FAQ Schema (invisible) */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a
                }
              }))
            })
          }} />
        </div>
      </section>

      {/* Vet Advice */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full shrink-0">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Veterinarian's Advice</h3>
                <p className="text-muted-foreground">
                  "Regular health check-ups are essential for early detection of common issues in Malaysia's climate. 
                  Ensure your pet stays hydrated, especially during hot afternoons. 
                  Keep vaccinations up to date and consult a vet for any unusual behavior."
                </p>
                <p className="mt-3 text-sm font-medium text-primary">— Dr. Sarah Tan, DVM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{t.cityPage.nearbyAreas}</h2>
            
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  to={`/${nearbyCity.stateSlug}/${nearbyCity.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg shadow-soft hover:shadow-card transition-shadow text-sm font-medium"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {nearbyCity.name}
                </Link>
              ))}
              <Link
                to={`/${city.stateSlug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                View all in {city.state}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Last Updated */}
      <div className="container py-6 text-center text-sm text-muted-foreground">
        {t.cityPage.lastUpdated}: {lastUpdated}
      </div>
    </div>
  );
};

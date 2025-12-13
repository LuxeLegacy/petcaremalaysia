import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { hubsData, citiesData } from '@/lib/cityData';
import { MapPin, ChevronRight, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const LocationsPage = () => {
  const { language, t } = useLanguage();
  const [search, setSearch] = useState('');

  // Group hubs by state
  const stateGroups = hubsData.reduce((acc, hub) => {
    const state = hub.state;
    if (!acc[state]) acc[state] = { hubs: [], cities: [] };
    acc[state].hubs.push(hub);
    return acc;
  }, {} as Record<string, { hubs: typeof hubsData; cities: typeof citiesData }>);

  // Add cities to state groups
  citiesData.forEach(city => {
    const state = city.state;
    if (stateGroups[state]) {
      stateGroups[state].cities.push(city);
    }
  });

  const filteredStates = Object.entries(stateGroups).filter(([state, data]) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      state.toLowerCase().includes(searchLower) ||
      data.cities.some(c => c.name.toLowerCase().includes(searchLower))
    );
  });

  return (
    <>
      <SEOHead
        title="Pet Care Locations in Malaysia — All Cities & Regions | PetCare Malaysia"
        description="Find pet care services in 100+ locations across Malaysia. Browse by state to find vets, grooming, and emergency services near you."
        canonicalUrl="https://petcaremalaysia.com/locations"
        language={language}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="gradient-hero py-16">
            <div className="container">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t.nav.locations}
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mb-8">
                Pet care services available in 100+ locations across Malaysia. 
                Find vets, grooming, and emergency services near you.
              </p>
              
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search city or state..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-card"
                />
              </div>
            </div>
          </section>

          {/* Locations Grid */}
          <section className="py-16 bg-background">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredStates.map(([state, data]) => (
                  <div key={state} className="bg-card rounded-2xl p-6 shadow-card">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {state}
                    </h2>
                    <ul className="space-y-2">
                      {data.cities
                        .filter(city => 
                          !search || city.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .slice(0, 8)
                        .map((city) => (
                          <li key={city.slug}>
                            <Link
                              to={`/${city.stateSlug}/${city.slug}`}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                            >
                              {city.name}
                              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </li>
                        ))}
                    </ul>
                    {data.cities.length > 8 && (
                      <p className="mt-4 text-sm text-primary font-medium">
                        +{data.cities.length - 8} more areas
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {filteredStates.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No locations found for "{search}"
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default LocationsPage;

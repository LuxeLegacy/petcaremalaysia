import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAllVetClinics } from '@/hooks/useAllVetClinics';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MapPin, Star, Mail, Globe, AlertTriangle, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const VetClinicsPage = () => {
  const { language } = useLanguage();
  const { data: clinics = [], isLoading } = useAllVetClinics();
  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const states = useMemo(() => {
    const unique = [...new Set(clinics.map(c => c.state))].sort();
    return unique;
  }, [clinics]);

  const cities = useMemo(() => {
    const filtered = selectedState !== 'all'
      ? clinics.filter(c => c.state === selectedState)
      : clinics;
    return [...new Set(filtered.map(c => c.city))].sort();
  }, [clinics, selectedState]);

  const filteredClinics = useMemo(() => {
    return clinics.filter(c => {
      if (selectedState !== 'all' && c.state !== selectedState) return false;
      if (selectedCity !== 'all' && c.city !== selectedCity) return false;
      return true;
    });
  }, [clinics, selectedState, selectedCity]);

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    setSelectedCity('all');
  };

  return (
    <>
      <SEOHead
        title="Vet Clinics in Malaysia — Directory of Veterinary Clinics"
        description="Find veterinary clinics across Malaysia. Browse by state and city. Phone numbers, email, websites, and addresses for 160+ vet clinics nationwide."
        path="/vet-clinics"
        language={language}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="py-12 md:py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Vet Clinics in Malaysia</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our directory of {clinics.length}+ veterinary clinics across Malaysia. Filter by state and city to find the nearest clinic for your pet.
              </p>
            </div>
          </section>

          {/* Filters */}
          <section className="py-8 border-b">
            <div className="container">
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <div className="flex-1">
                  <label className="text-sm font-medium mb-1.5 block">State</label>
                  <Select value={selectedState} onValueChange={handleStateChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="All States" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All States</SelectItem>
                      {states.map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium mb-1.5 block">City</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Cities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Cities</SelectItem>
                      {cities.map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-10">
            <div className="container">
              {isLoading ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="bg-card rounded-xl p-5 shadow-card">
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-full mb-3" />
                      <Skeleton className="h-4 w-1/2 mb-4" />
                      <Skeleton className="h-9 w-full" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mb-6">
                    Showing {filteredClinics.length} clinic{filteredClinics.length !== 1 ? 's' : ''}
                    {selectedState !== 'all' ? ` in ${selectedState}` : ''}
                    {selectedCity !== 'all' ? `, ${selectedCity}` : ''}
                  </p>

                  {filteredClinics.length === 0 ? (
                    <div className="text-center py-16 bg-card rounded-xl">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground font-medium">No clinics found</p>
                      <p className="text-sm text-muted-foreground mt-1">Try selecting a different state or city.</p>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {filteredClinics.map(clinic => (
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
                          <p className="text-sm text-muted-foreground mb-1 flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                            {clinic.address}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3 ml-6">
                            {clinic.city}, {clinic.state}
                          </p>
                          <div className="flex items-center gap-4 mb-4">
                            {clinic.rating && (
                              <div className="flex items-center gap-1 text-sm">
                                <Star className="h-4 w-4 text-gold fill-gold" />
                                <span className="font-medium">{clinic.rating}</span>
                                {clinic.review_count ? (
                                  <span className="text-muted-foreground">({clinic.review_count})</span>
                                ) : null}
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-2">
                            {clinic.phone && (
                              <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                <a href={`tel:${clinic.phone}`}>
                                  <Phone className="h-4 w-4" />
                                  {clinic.phone}
                                </a>
                              </Button>
                            )}
                            {clinic.email && (
                              <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                <a href={`mailto:${clinic.email}`}>
                                  <Mail className="h-4 w-4" />
                                  {clinic.email}
                                </a>
                              </Button>
                            )}
                            {clinic.website && (
                              <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                <a href={clinic.website} target="_blank" rel="noopener noreferrer">
                                  <Globe className="h-4 w-4" />
                                  Visit Website
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default VetClinicsPage;

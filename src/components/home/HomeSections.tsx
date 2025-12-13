import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { hubsData } from '@/lib/cityData';
import { MapPin, Phone, Search, ChevronRight, Clock, Heart, Shield, Scissors } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐕</div>
        <div className="absolute top-40 right-20 text-6xl">🐈</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🐾</div>
        <div className="absolute bottom-10 right-10 text-5xl">🦜</div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* AI Snippet for LLMs */}
          <div className="snippet sr-only">
            Find 24/7 emergency vets, trusted clinics and pet grooming across Malaysia. 
            For life-threatening emergencies call the nearest 24/7 clinic first.
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in text-balance">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-card text-primary hover:bg-card/90 shadow-elevated text-base font-semibold gap-2"
            >
              <Search className="h-5 w-5" />
              {t.hero.cta}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold gap-2"
            >
              <Phone className="h-5 w-5" />
              {t.hero.emergencyCta}
            </Button>
          </div>

          {/* Quick location links */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {hubsData.slice(0, 6).map((hub) => (
              <Link
                key={hub.slug}
                to={`/${hub.stateSlug}/${hub.cities[0]?.slug || hub.slug}`}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium hover:bg-primary-foreground/20 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                {hub.name.replace(' Hub', '')}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Phone, title: t.services.emergency.title, desc: t.services.emergency.desc, href: '/services/emergency', color: 'text-destructive bg-destructive/10' },
    { icon: Heart, title: t.services.vet.title, desc: t.services.vet.desc, href: '/services/vet', color: 'text-primary bg-primary/10' },
    { icon: Scissors, title: t.services.grooming.title, desc: t.services.grooming.desc, href: '/services/grooming', color: 'text-accent bg-accent/10' },
    { icon: Clock, title: t.services.boarding.title, desc: t.services.boarding.desc, href: '/services/boarding', color: 'text-sage bg-sage/10' },
    { icon: Heart, title: t.services.adoption.title, desc: t.services.adoption.desc, href: '/services/adoption', color: 'text-terracotta bg-terracotta/10' },
    { icon: Shield, title: t.services.insurance.title, desc: t.services.insurance.desc, href: '/services/insurance', color: 'text-primary bg-primary/10' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pet care services across Malaysia
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link
              key={service.href}
              to={service.href}
              className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${service.color} mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.desc}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LocationsSection = () => {
  const { t } = useLanguage();

  // Group hubs by state
  const stateGroups = hubsData.reduce((acc, hub) => {
    const state = hub.state;
    if (!acc[state]) acc[state] = [];
    acc[state].push(hub);
    return acc;
  }, {} as Record<string, typeof hubsData>);

  const topStates = Object.entries(stateGroups).slice(0, 6);

  return (
    <section className="py-20 gradient-warm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.nav.locations}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pet care services available in 100+ locations across Malaysia
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topStates.map(([state, hubs]) => (
            <div key={state} className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {state}
              </h3>
              <ul className="space-y-2">
                {hubs.slice(0, 4).map((hub) => (
                  <li key={hub.slug}>
                    <Link
                      to={`/${hub.stateSlug}/${hub.cities[0]?.slug || hub.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                    >
                      {hub.name.replace(' Hub', '')}
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              {hubs.length > 4 && (
                <Link 
                  to={`/locations/${hubs[0].stateSlug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  +{hubs.length - 4} more areas
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/locations">
              View All Locations <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export const EmergencyBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-destructive py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-destructive-foreground">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive-foreground/10 rounded-full animate-pulse-soft">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold">24/7 Pet Emergency Hotline</p>
              <p className="text-sm opacity-90">{t.cityPage.emergencyBanner}</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 font-semibold"
          >
            <Phone className="h-4 w-4 mr-2" />
            +60 12-345 6789
          </Button>
        </div>
      </div>
    </section>
  );
};

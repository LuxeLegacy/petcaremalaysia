import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { hubsData } from '@/lib/cityData';
import { MapPin, Phone, Search, ChevronRight, Clock, Heart, Shield, Scissors, CheckCircle, MessageCircleQuestion, HelpCircle, AlertTriangle } from 'lucide-react';
import heroPets from '@/assets/hero-pets.jpg';

export const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative overflow-hidden gradient-hero lg:py-32 py-[50px]">
      {/* Background pet image */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src={heroPets} 
          alt="Happy dog and cat together" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pattern Interrupt Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in text-balance leading-tight">
            {t.hero.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up max-w-3xl mx-auto" style={{
          animationDelay: '0.1s'
        }}>
            {t.hero.subheadline}
          </p>

          {/* Emergency Assessment CTA - Primary */}
          <div className="animate-slide-up mb-4" style={{ animationDelay: '0.15s' }}>
            <Link to="/assessment">
              <Button 
                size="lg" 
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-elevated text-base md:text-lg font-bold gap-2 px-6 md:px-10 py-6 md:py-7 animate-pulse-soft"
              >
                <AlertTriangle className="h-5 w-5 md:h-6 md:w-6" />
                Is Your Pet in Danger? Check Now — FREE
              </Button>
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-2 font-medium">
              ⏱️ Every minute counts in a pet emergency. Get instant results.
            </p>
          </div>


          {/* Trust Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <CheckCircle className="h-4 w-4" />
            {t.hero.trustBadge}
          </div>

          {/* Quick location links */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            {hubsData.slice(0, 6).map(hub => <Link key={hub.slug} to={`/${hub.stateSlug}/${hub.cities[0]?.slug || hub.slug}`} className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium hover:bg-primary-foreground/20 transition-colors">
                <MapPin className="h-3.5 w-3.5" />
                {hub.name.replace(' Hub', '')}
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
};
export const ServicesSection = () => {
  const {
    t
  } = useLanguage();
  const services = [{
    icon: Phone,
    title: t.services.emergency.title,
    desc: t.services.emergency.desc,
    href: '/services/emergency',
    color: 'text-destructive bg-destructive/10'
  }, {
    icon: Heart,
    title: t.services.vet.title,
    desc: t.services.vet.desc,
    href: '/services/vet',
    color: 'text-primary bg-primary/10'
  }, {
    icon: Scissors,
    title: t.services.grooming.title,
    desc: t.services.grooming.desc,
    href: '/services/grooming',
    color: 'text-accent bg-accent/10'
  }, {
    icon: Clock,
    title: t.services.boarding.title,
    desc: t.services.boarding.desc,
    href: '/services/boarding',
    color: 'text-sage bg-sage/10'
  }, {
    icon: Heart,
    title: t.services.adoption.title,
    desc: t.services.adoption.desc,
    href: '/services/adoption',
    color: 'text-terracotta bg-terracotta/10'
  }, {
    icon: Shield,
    title: t.services.insurance.title,
    desc: t.services.insurance.desc,
    href: '/services/insurance',
    color: 'text-primary bg-primary/10'
  }, {
    icon: MessageCircleQuestion,
    title: 'Pet Care Q&A',
    desc: 'Get instant answers to 150+ pet emergency and care questions from our database',
    href: '/qa',
    color: 'text-blue-600 bg-blue-500/10'
  }];
  return <section className="py-20 bg-background" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => <Link key={service.href} to={service.href} className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
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
            </Link>)}
        </div>
      </div>
    </section>;
};
export const LocationsSection = () => {
  const {
    t
  } = useLanguage();
  const stateGroups = hubsData.reduce((acc, hub) => {
    const state = hub.state;
    if (!acc[state]) acc[state] = [];
    acc[state].push(hub);
    return acc;
  }, {} as Record<string, typeof hubsData>);
  const topStates = Object.entries(stateGroups).slice(0, 6);
  return <section className="py-20 bg-secondary/30" id="locations">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.nav.locations}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pet care services available in 100+ locations across Malaysia — GEO optimized for every state
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topStates.map(([state, hubs]) => <div key={state} className="bg-card rounded-2xl p-6 shadow-card">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {state}
              </h3>
              <ul className="space-y-2">
                {hubs.slice(0, 4).map(hub => <li key={hub.slug}>
                    <Link to={`/${hub.stateSlug}/${hub.cities[0]?.slug || hub.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group">
                      {hub.name.replace(' Hub', '')}
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>)}
              </ul>
              {hubs.length > 4 && <Link to={`/locations/${hubs[0].stateSlug}`} className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  +{hubs.length - 4} more areas
                </Link>}
            </div>)}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/locations">
              View All Locations <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export const EmergencyBanner = () => {
  const {
    t
  } = useLanguage();
  return <section className="bg-destructive py-6">
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
          <Button size="lg" className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 font-semibold" asChild>
            <a href="https://wa.me/601156959227" target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp: +60 11-5695 9227
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
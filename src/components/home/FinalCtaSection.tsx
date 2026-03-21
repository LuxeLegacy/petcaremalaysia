import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Bookmark, AlertCircle, Clock } from 'lucide-react';

export const FinalCtaSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 gradient-hero relative overflow-hidden" id="cta">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐕</div>
        <div className="absolute bottom-20 right-20 text-7xl">🐈</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">❤️</div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-foreground text-sm font-medium mb-6 animate-pulse-soft">
            <Clock className="h-4 w-4" />
            Every 8 Minutes Matters
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t.finalCta.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            {t.finalCta.subtitle}
          </p>

          {/* Urgency Text */}
          <div className="bg-primary/10 rounded-xl p-4 mb-8 border border-primary/20">
            <p className="flex items-center justify-center gap-2 text-foreground font-medium">
              <AlertCircle className="h-5 w-5" />
              {t.finalCta.urgency}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-card text-primary hover:bg-card/90 shadow-elevated text-base font-bold gap-2 px-8"
            >
              <Phone className="h-5 w-5" />
              {t.finalCta.primaryCta}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-primary/10 text-base font-semibold gap-2"
            >
              <Bookmark className="h-5 w-5" />
              {t.finalCta.secondaryCta}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse"></span>
              100+ Verified Locations
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse"></span>
              24/7 Always Available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse"></span>
              23,000+ Pets Saved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

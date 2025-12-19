import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Shield, Check, X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InsuranceSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background" id="insurance">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            AEO: Pet Insurance Malaysia
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.insurance.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.insurance.subtitle}
          </p>
          <p className="text-foreground font-medium mt-4 text-lg">
            {t.insurance.whyCover}
          </p>
        </div>

        {/* Insurance Providers Comparison */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-12">
          {/* Oyen */}
          <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.insurance.provider1}</h3>
                <p className="text-primary font-semibold">{t.insurance.provider1Price}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{t.insurance.provider1Coverage}</p>
            <a 
              href="https://oyen.my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Visit Oyen <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* MSIG */}
          <div className="bg-card rounded-2xl p-6 shadow-card border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t.insurance.provider2}</h3>
                <p className="text-accent font-semibold">{t.insurance.provider2Price}</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{t.insurance.provider2Coverage}</p>
            <a 
              href="https://www.msig.com.my" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
            >
              Visit MSIG <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Covered */}
          <div className="bg-primary/5 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              {t.insurance.covered}
            </h4>
            <ul className="space-y-2">
              {t.insurance.coveredItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Covered */}
          <div className="bg-destructive/5 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <X className="h-5 w-5 text-destructive" />
              {t.insurance.notCovered}
            </h4>
            <ul className="space-y-2">
              {t.insurance.notCoveredItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/services/insurance">
              {t.insurance.compare}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

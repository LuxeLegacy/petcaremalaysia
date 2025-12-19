import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle } from 'lucide-react';

export const CrisisSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-destructive/5" id="crisis">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
            <AlertTriangle className="h-4 w-4" />
            The Truth They Don&apos;t Tell You
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t.crisis.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t.crisis.subtitle}
          </p>

          {/* Statistics Grid */}
          <div className="grid gap-6 sm:grid-cols-3 mb-12">
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="text-4xl md:text-5xl font-bold text-destructive mb-2">
                {t.crisis.stat1}
              </div>
              <p className="text-muted-foreground text-sm">
                {t.crisis.stat1Desc}
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {t.crisis.stat2}
              </div>
              <p className="text-muted-foreground text-sm">
                {t.crisis.stat2Desc}
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {t.crisis.stat3}
              </div>
              <p className="text-muted-foreground text-sm">
                {t.crisis.stat3Desc}
              </p>
            </div>
          </div>

          {/* Emergency Scenarios */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated text-left">
            <h3 className="font-bold text-xl mb-6 text-center">
              Real Pet Emergencies That Can&apos;t Wait:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                <span className="text-2xl">{t.crisis.scenario1.split(' ')[0]}</span>
                <p className="text-foreground font-medium">
                  {t.crisis.scenario1.substring(t.crisis.scenario1.indexOf(' ') + 1)}
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20">
                <span className="text-2xl">{t.crisis.scenario2.split(' ')[0]}</span>
                <p className="text-foreground font-medium">
                  {t.crisis.scenario2.substring(t.crisis.scenario2.indexOf(' ') + 1)}
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/20">
                <span className="text-2xl">{t.crisis.scenario3.split(' ')[0]}</span>
                <p className="text-foreground font-medium">
                  {t.crisis.scenario3.substring(t.crisis.scenario3.indexOf(' ') + 1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

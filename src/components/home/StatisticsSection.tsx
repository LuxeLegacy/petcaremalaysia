import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Dog, Cat, TrendingUp, Home, DollarSign } from 'lucide-react';

export const StatisticsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Home, value: t.statistics.ownership, label: t.statistics.ownershipDesc, color: 'text-primary bg-primary/10' },
    { icon: Dog, value: t.statistics.dogs, label: t.statistics.dogsDesc, color: 'text-terracotta bg-terracotta/10' },
    { icon: Cat, value: t.statistics.cats, label: t.statistics.catsDesc, color: 'text-sage bg-sage/10' },
    { icon: DollarSign, value: t.statistics.spending, label: t.statistics.spendingDesc, color: 'text-gold bg-gold/10' },
    { icon: TrendingUp, value: t.statistics.growth, label: t.statistics.growthDesc, color: 'text-accent bg-accent/10' },
    { icon: Users, value: t.statistics.households, label: t.statistics.householdsDesc, color: 'text-primary bg-primary/10' },
  ];

  return (
    <section className="py-20 gradient-warm" id="statistics">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.statistics.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.statistics.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`inline-flex p-3 rounded-xl ${stat.color} mb-4`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Citation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground italic">
            {t.statistics.source}
          </p>
        </div>
      </div>
    </section>
  );
};

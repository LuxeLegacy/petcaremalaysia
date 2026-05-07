import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Check } from 'lucide-react';
import happyPets from '@/assets/happy-pets.jpg';

export const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background" id="mission">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.mission.title}</h2>
            <p className="text-muted-foreground">
              {t.mission.subtitle}
            </p>
          </div>

          {/* Story Card with Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="rounded-3xl overflow-hidden shadow-elevated">
              <img loading="lazy" decoding="async" 
                src={happyPets} 
                alt="Happy pets playing together" 
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 shadow-elevated">
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                "{t.mission.story}"
              </blockquote>
            </div>
          </div>

          {/* Promises */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[t.mission.promise1, t.mission.promise2, t.mission.promise3].map((promise, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-card"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{promise.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateVetAdvice } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Stethoscope, ArrowRight } from 'lucide-react';

interface CityFinalCtaSectionProps {
  city: CityData;
}

export const CityFinalCtaSection = ({ city }: CityFinalCtaSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const vetAdvice = generateVetAdvice(city, language);
  
  const emergencyTitle = {
    en: `Pet Emergency in ${city.name}?`,
    ms: `Kecemasan Haiwan di ${city.name}?`,
    zh: `${city.name}宠物紧急情况？`
  };
  
  const emergencySubtitle = {
    en: "Don't wait. Every minute counts when your pet's life is at stake.",
    ms: "Jangan tunggu. Setiap minit penting apabila nyawa haiwan anda dalam bahaya.",
    zh: "不要等待。当您的宠物生命危在旦夕时，每一分钟都很重要。"
  };
  
  const callNowLabel = {
    en: 'Call Emergency Vet Now',
    ms: 'Hubungi Vet Kecemasan Sekarang',
    zh: '立即拨打紧急兽医电话'
  };
  
  const findClinicLabel = {
    en: 'Find Nearest Clinic',
    ms: 'Cari Klinik Terdekat',
    zh: '查找最近的诊所'
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-destructive/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Vet Advice Quote */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-lg text-foreground italic mb-4">
                  "{vetAdvice.advice}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{vetAdvice.name}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{vetAdvice.credentials}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'en' ? `Advice for ${city.name} pet owners` : 
                   language === 'ms' ? `Nasihat untuk pemilik haiwan ${city.name}` : 
                   `给${city.name}宠物主人的建议`}
                </p>
              </div>
            </div>
          </div>
          
          {/* Emergency CTA */}
          <div className="bg-destructive/10 rounded-2xl border border-destructive/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {emergencyTitle[language]}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              {emergencySubtitle[language]}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-destructive" />
                <span>{metadata.distanceToHub || '< 15 min'} {language === 'en' ? 'to emergency care' : language === 'ms' ? 'ke rawatan kecemasan' : '到紧急护理'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-destructive" />
                <span>{metadata.populationTier === 'major' ? '3+' : '2+'} {language === 'en' ? '24/7 clinics nearby' : language === 'ms' ? 'klinik 24/7 berdekatan' : '附近24/7诊所'}</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <Phone className="h-5 w-5 mr-2" />
                {callNowLabel[language]}
              </Button>
              <Button size="lg" variant="outline" className="border-destructive/30 hover:bg-destructive/10">
                {findClinicLabel[language]}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Nearby Areas Quick Links */}
          {metadata.nearestMajorCity && (
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                {language === 'en' 
                  ? `Also serving pet owners from nearby areas including ${metadata.nearestMajorCity}`
                  : language === 'ms'
                  ? `Juga melayani pemilik haiwan dari kawasan berhampiran termasuk ${metadata.nearestMajorCity}`
                  : `同时服务来自附近地区的宠物主人，包括${metadata.nearestMajorCity}`}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

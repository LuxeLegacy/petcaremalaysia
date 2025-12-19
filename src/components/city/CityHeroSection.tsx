import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateCityHeadlines } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Users } from 'lucide-react';

interface CityHeroSectionProps {
  city: CityData;
}

export const CityHeroSection = ({ city }: CityHeroSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  
  const headlineContent = generateCityHeadlines(city, language);
  const headline = headlineContent.headline;
  const description = headlineContent.subheadline;
  
  const emergencyLabel = {
    en: '24/7 Emergency',
    ms: 'Kecemasan 24/7',
    zh: '24/7紧急服务'
  };
  
  const findVetLabel = {
    en: 'Find Nearest Vet',
    ms: 'Cari Klinik Terdekat',
    zh: '查找最近的兽医'
  };
  
  const populationLabel = {
    en: 'Pet owners served',
    ms: 'Pemilik haiwan dilayan',
    zh: '服务宠物主人'
  };
  
  const areaLabel = {
    en: metadata.areaType === 'urban' ? 'Urban Area' : metadata.areaType === 'suburban' ? 'Suburban Area' : 'Rural Area',
    ms: metadata.areaType === 'urban' ? 'Kawasan Bandar' : metadata.areaType === 'suburban' ? 'Kawasan Pinggir Bandar' : 'Kawasan Luar Bandar',
    zh: metadata.areaType === 'urban' ? '城市地区' : metadata.areaType === 'suburban' ? '郊区' : '乡村地区'
  };

  const estimatedPetOwners = Math.round(metadata.population * 0.15);

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{city.name}, {city.state}</span>
          </div>
          
          {/* Power Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {headline}
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-foreground">{estimatedPetOwners.toLocaleString()}+</strong> {populationLabel[language]}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm">
                <strong className="text-foreground">{metadata.distanceToHub || '< 15 min'}</strong> {language === 'en' ? 'to emergency vet' : language === 'ms' ? 'ke vet kecemasan' : '到紧急兽医'}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm">{areaLabel[language]}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
              <Phone className="h-5 w-5 mr-2" />
              {emergencyLabel[language]}
            </Button>
            <Button size="lg" variant="outline">
              {findVetLabel[language]}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

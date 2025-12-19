import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { generateTestimonials } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CityTestimonialsSectionProps {
  city: CityData;
}

export const CityTestimonialsSection = ({ city }: CityTestimonialsSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const testimonials = generateTestimonials(city, language);
  
  const sectionTitle = {
    en: `What ${city.name} Pet Owners Say`,
    ms: `Apa Kata Pemilik Haiwan ${city.name}`,
    zh: `${city.name}宠物主人怎么说`
  };
  
  const subtitle = {
    en: 'Real stories from pet owners in your area who found help when they needed it most.',
    ms: 'Kisah sebenar daripada pemilik haiwan di kawasan anda yang mendapat bantuan tepat pada masanya.',
    zh: '来自您所在地区宠物主人的真实故事，他们在最需要的时候找到了帮助。'
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle[language]}
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    "{testimonial.story}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-amber-400 fill-amber-400" 
                      />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-medium text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <span>{testimonial.petType}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              {language === 'en' ? 'Verified pet owners' : language === 'ms' ? 'Pemilik haiwan disahkan' : '已验证的宠物主人'}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              {language === 'en' ? `${city.name} residents` : language === 'ms' ? `Penduduk ${city.name}` : `${city.name}居民`}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              {language === 'en' ? 'Real experiences' : language === 'ms' ? 'Pengalaman sebenar' : '真实体验'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

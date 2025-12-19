import { CityData } from '@/lib/cityData';
import { getCityMetadata, getDVSOffice } from '@/lib/cityContent';
import { generateCityFAQs } from '@/lib/cityContentGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface CityFAQSectionProps {
  city: CityData;
}

export const CityFAQSection = ({ city }: CityFAQSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  const dvsOffice = getDVSOffice(city.state);
  const faqs = generateCityFAQs(city, language);
  
  const sectionTitle = {
    en: `Pet Care FAQs for ${city.name}`,
    ms: `Soalan Lazim Penjagaan Haiwan untuk ${city.name}`,
    zh: `${city.name}宠物护理常见问题`
  };
  
  const subtitle = {
    en: `Answers to common questions from ${city.name} pet owners`,
    ms: `Jawapan kepada soalan lazim daripada pemilik haiwan ${city.name}`,
    zh: `${city.name}宠物主人常见问题解答`
  };

  // Split FAQs into two columns for larger screens
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Frequently Asked Questions' : language === 'ms' ? 'Soalan Lazim' : '常见问题'}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle[language]}
            </p>
          </div>
          
          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {leftFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-left-${index}`}
                  className="bg-card border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Right Column */}
            <Accordion type="single" collapsible className="space-y-3">
              {rightFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-right-${index}`}
                  className="bg-card border border-border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* More Help */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              {language === 'en' 
                ? `Can't find what you're looking for?`
                : language === 'ms'
                ? `Tidak jumpa apa yang anda cari?`
                : `找不到您要找的内容？`}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#clinics" className="text-primary hover:underline">
                {language === 'en' ? 'Contact a vet' : language === 'ms' ? 'Hubungi vet' : '联系兽医'}
              </a>
              <span className="text-muted-foreground">•</span>
              <a href={`tel:${dvsOffice.phone}`} className="text-primary hover:underline">
                {language === 'en' ? 'Call DVS' : language === 'ms' ? 'Hubungi DVS' : '致电DVS'}
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="#emergency" className="text-primary hover:underline">
                {language === 'en' ? '24/7 Emergency' : language === 'ms' ? 'Kecemasan 24/7' : '24/7紧急服务'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

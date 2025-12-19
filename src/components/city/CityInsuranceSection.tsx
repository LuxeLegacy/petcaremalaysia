import { CityData } from '@/lib/cityData';
import { getCityMetadata } from '@/lib/cityContent';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Shield, Check, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CityInsuranceSectionProps {
  city: CityData;
}

export const CityInsuranceSection = ({ city }: CityInsuranceSectionProps) => {
  const { language } = useLanguage();
  const metadata = getCityMetadata(city.slug);
  
  const sectionTitle = {
    en: `Pet Insurance Costs in ${city.name}`,
    ms: `Kos Insurans Haiwan di ${city.name}`,
    zh: `${city.name}宠物保险费用`
  };
  
  const emergencyCost = `RM${metadata.avgEmergencyVetCost.min} - RM${metadata.avgEmergencyVetCost.max}`;
  
  const avgCosts = {
    en: {
      emergency: emergencyCost,
      surgery: metadata.vetPriceTier === 'premium' ? 'RM2,000 - RM8,000' : metadata.vetPriceTier === 'standard' ? 'RM1,500 - RM5,000' : 'RM1,000 - RM4,000',
      hospitalization: metadata.vetPriceTier === 'premium' ? 'RM200 - RM500/day' : metadata.vetPriceTier === 'standard' ? 'RM150 - RM350/day' : 'RM100 - RM250/day',
    },
    ms: {
      emergency: emergencyCost,
      surgery: metadata.vetPriceTier === 'premium' ? 'RM2,000 - RM8,000' : metadata.vetPriceTier === 'standard' ? 'RM1,500 - RM5,000' : 'RM1,000 - RM4,000',
      hospitalization: metadata.vetPriceTier === 'premium' ? 'RM200 - RM500/hari' : metadata.vetPriceTier === 'standard' ? 'RM150 - RM350/hari' : 'RM100 - RM250/hari',
    },
    zh: {
      emergency: emergencyCost,
      surgery: metadata.vetPriceTier === 'premium' ? 'RM2,000 - RM8,000' : metadata.vetPriceTier === 'standard' ? 'RM1,500 - RM5,000' : 'RM1,000 - RM4,000',
      hospitalization: metadata.vetPriceTier === 'premium' ? 'RM200 - RM500/天' : metadata.vetPriceTier === 'standard' ? 'RM150 - RM350/天' : 'RM100 - RM250/天',
    }
  };
  
  const costLabels = {
    en: { emergency: 'Emergency Visit', surgery: 'Major Surgery', hospitalization: 'Hospitalization' },
    ms: { emergency: 'Lawatan Kecemasan', surgery: 'Pembedahan Besar', hospitalization: 'Penghospitalan' },
    zh: { emergency: '急诊', surgery: '大手术', hospitalization: '住院' }
  };
  
  const insuranceBenefits = {
    en: [
      'Covers up to 80% of emergency costs',
      '24/7 vet helpline access',
      'No waiting period for accidents',
      'Coverage across all Malaysian states'
    ],
    ms: [
      'Melindungi sehingga 80% kos kecemasan',
      'Akses talian bantuan vet 24/7',
      'Tiada tempoh menunggu untuk kemalangan',
      'Perlindungan di seluruh negeri Malaysia'
    ],
    zh: [
      '覆盖高达80%的紧急费用',
      '24/7兽医热线',
      '意外无等待期',
      '覆盖马来西亚所有州属'
    ]
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'Financial Protection' : language === 'ms' ? 'Perlindungan Kewangan' : '财务保护'}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              {sectionTitle[language]}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cost Breakdown */}
            <Card className="border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  {language === 'en' ? `Average Vet Costs in ${city.name}` : 
                   language === 'ms' ? `Kos Purata Vet di ${city.name}` : 
                   `${city.name}平均兽医费用`}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">{costLabels[language].emergency}</span>
                  <span className="font-semibold text-foreground">{avgCosts[language].emergency}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">{costLabels[language].surgery}</span>
                  <span className="font-semibold text-foreground">{avgCosts[language].surgery}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">{costLabels[language].hospitalization}</span>
                  <span className="font-semibold text-foreground">{avgCosts[language].hospitalization}</span>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  {language === 'en' 
                    ? `*Prices based on ${metadata.vetPriceTier} pricing tier for ${city.name} area`
                    : language === 'ms'
                    ? `*Harga berdasarkan kadar ${metadata.vetPriceTier} untuk kawasan ${city.name}`
                    : `*价格基于${city.name}地区的${metadata.vetPriceTier}定价级别`}
                </p>
              </CardContent>
            </Card>
            
            {/* Insurance Benefits */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Shield className="h-5 w-5" />
                  {language === 'en' ? 'Why Get Pet Insurance?' : 
                   language === 'ms' ? 'Kenapa Dapatkan Insurans Haiwan?' : 
                   '为什么要买宠物保险？'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {insuranceBenefits[language].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
                
                <Button className="w-full mt-6">
                  {language === 'en' ? 'Compare Insurance Plans' : 
                   language === 'ms' ? 'Bandingkan Pelan Insurans' : 
                   '比较保险计划'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

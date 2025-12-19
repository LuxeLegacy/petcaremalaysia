import { useState } from 'react';
import { CityData } from '@/lib/cityData';
import { getCityMetadata, getDVSOffice, getLocalCouncil } from '@/lib/cityContent';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CityPAASectionProps {
  city: CityData;
}

interface PAQItem {
  question: string;
  answer: string;
  relatedQuestions?: string[];
}

export const CityPAASection = ({ city }: CityPAASectionProps) => {
  const { language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const metadata = getCityMetadata(city.slug);
  const dvsOffice = getDVSOffice(city.state);
  const council = getLocalCouncil(city.slug, city.state);

  // Generate city-specific questions using real metadata
  const generateCityPAA = (): PAQItem[] => {
    const topRisks = metadata.petRisks.slice(0, 3);
    const landmark = metadata.landmarks[0];
    
    if (language === 'ms') {
      return [
        {
          question: `Berapakah kos doktor haiwan di ${city.name}?`,
          answer: `Konsultasi doktor haiwan di ${city.name} adalah RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}. Lawatan kecemasan lebih mahal, kira-kira RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. ${metadata.vetPriceTier === 'premium' ? 'Sebagai kawasan premium, harga di sini lebih tinggi daripada purata.' : metadata.vetPriceTier === 'budget' ? 'Harga di sini lebih berpatutan berbanding pusat bandar.' : 'Harga setanding dengan kawasan serupa.'} Dandanan haiwan bermula dari RM${metadata.avgGroomingCost.min}.`,
          relatedQuestions: [`Klinik haiwan 24 jam di ${city.name}?`, `Insurans haiwan di ${city.name}?`]
        },
        {
          question: `Bagaimana mendaftar anjing di ${city.name}?`,
          answer: `Pendaftaran anjing di ${city.name} dikendalikan oleh ${council.name} (${council.shortName}). Yuran lesen: ${council.dogLicenseFee} (atau ${council.spayedFee} jika dimandulkan). Anjing juga mesti mempunyai mikrochip (RM50-RM100). Lawati ${council.website} atau pejabat mereka dengan rekod vaksinasi anjing.`,
          relatedQuestions: [`Denda anjing tidak berlesen di ${city.name}?`, `Peraturan haiwan ${council.shortName}?`]
        },
        {
          question: `Apakah risiko kesihatan haiwan di ${city.name}?`,
          answer: `Pemilik haiwan di ${city.name} perlu berhati-hati dengan: ${topRisks.join(', ')}. Kawasan ${metadata.areaType} seperti ${city.name} berhampiran ${landmark} juga mengalami masalah kulit akibat kelembapan dan risiko haba melampau. Pemeriksaan doktor haiwan setiap 6 bulan disyorkan.`,
          relatedQuestions: [`Vaksinasi haiwan di ${city.name}?`, `Doktor haiwan kecemasan ${city.name}?`]
        },
        {
          question: `Di mana pejabat DVS berhampiran ${city.name}?`,
          answer: `Pejabat Jabatan Perkhidmatan Veterinar terdekat untuk ${city.name} ialah ${dvsOffice.name} di ${dvsOffice.address}. Hubungi: ${dvsOffice.phone} atau ${dvsOffice.email}. Mereka mengendalikan mikrochip haiwan, sijil kesihatan, dan permit import/eksport.`,
          relatedQuestions: [`Mikrochip haiwan di ${city.name}?`, `Permit haiwan eksotik ${city.state}?`]
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          question: `${city.name}的兽医费用是多少？`,
          answer: `${city.name}的兽医咨询费用为RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}。紧急就诊费用更高，约RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}。${metadata.vetPriceTier === 'premium' ? '作为高档地区，这里的价格高于平均水平。' : metadata.vetPriceTier === 'budget' ? '这里的价格比市中心更实惠。' : '价格与类似地区相当。'}宠物美容从RM${metadata.avgGroomingCost.min}起。`,
          relatedQuestions: [`${city.name}24小时兽医？`, `${city.name}宠物保险？`]
        },
        {
          question: `如何在${city.name}登记狗？`,
          answer: `${city.name}的狗登记由${council.name}（${council.shortName}）处理。执照费：${council.dogLicenseFee}（绝育后${council.spayedFee}）。狗还必须植入微芯片（RM50-RM100）。请访问${council.website}或携带狗的疫苗记录前往办公室。`,
          relatedQuestions: [`${city.name}无照狗罚款？`, `${council.shortName}宠物规定？`]
        },
        {
          question: `${city.name}的宠物健康风险有哪些？`,
          answer: `${city.name}的宠物主人应注意：${topRisks.join('、')}。${landmark}附近的${metadata.areaType}环境也会因湿度导致皮肤问题和中暑风险。建议每6个月进行一次兽医检查。`,
          relatedQuestions: [`${city.name}宠物疫苗？`, `${city.name}紧急兽医？`]
        },
        {
          question: `${city.name}附近的DVS办公室在哪里？`,
          answer: `${city.name}最近的兽医服务部办公室是${dvsOffice.name}，地址：${dvsOffice.address}。联系方式：${dvsOffice.phone}或${dvsOffice.email}。他们处理宠物微芯片、健康证明和进出口许可证。`,
          relatedQuestions: [`${city.name}宠物微芯片？`, `${city.state}异国宠物许可证？`]
        }
      ];
    }
    
    // English (default)
    return [
      {
        question: `How much does a vet cost in ${city.name}?`,
        answer: `Vet consultations in ${city.name} cost RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}. Emergency visits are higher at RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. ${metadata.vetPriceTier === 'premium' ? 'As a premium area, prices here are above average.' : metadata.vetPriceTier === 'budget' ? 'Prices here are more affordable than city centers.' : 'Prices are comparable to similar areas.'} Pet grooming starts from RM${metadata.avgGroomingCost.min}.`,
        relatedQuestions: [`24-hour vet in ${city.name}?`, `Pet insurance in ${city.name}?`]
      },
      {
        question: `How do I register my dog in ${city.name}?`,
        answer: `Dog registration in ${city.name} is handled by ${council.name} (${council.shortName}). License fee: ${council.dogLicenseFee} (or ${council.spayedFee} if spayed/neutered). Dogs must also be microchipped (RM50-RM100). Visit ${council.website} or their office with your dog's vaccination records.`,
        relatedQuestions: [`Fine for unlicensed dog in ${city.name}?`, `${council.shortName} pet regulations?`]
      },
      {
        question: `What are the pet health risks in ${city.name}?`,
        answer: `Pet owners in ${city.name} should watch for: ${topRisks.join(', ')}. The ${metadata.areaType} environment near ${landmark} also sees humidity-related skin issues and heatstroke risks. Regular vet check-ups every 6 months are recommended.`,
        relatedQuestions: [`Pet vaccinations in ${city.name}?`, `Emergency vet ${city.name}?`]
      },
      {
        question: `Where is the DVS office near ${city.name}?`,
        answer: `The nearest Department of Veterinary Services office for ${city.name} is ${dvsOffice.name} at ${dvsOffice.address}. Contact: ${dvsOffice.phone} or ${dvsOffice.email}. They handle pet microchipping, health certificates, and import/export permits.`,
        relatedQuestions: [`Pet microchipping in ${city.name}?`, `Exotic pet permit ${city.state}?`]
      },
      {
        question: `Is there a 24-hour vet near ${city.name}?`,
        answer: `${metadata.nearestMajorCity ? `The nearest 24/7 emergency vet is ${metadata.distanceToHub} away in ${metadata.nearestMajorCity}.` : `Yes, ${city.name} has multiple 24/7 emergency veterinary clinics.`} Emergency vet costs in ${city.name} range from RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. Save emergency contacts before you need them.`,
        relatedQuestions: [`Pet emergency ${city.name} at night?`, `Cheapest emergency vet ${city.state}?`]
      },
      {
        question: `How much is pet grooming in ${city.name}?`,
        answer: `Pet grooming in ${city.name} costs RM${metadata.avgGroomingCost.min}-RM${metadata.avgGroomingCost.max} depending on pet size and services. Basic bath starts at RM${metadata.avgGroomingCost.min}. Full grooming with haircut, nail trim, and ear cleaning costs more. Groomers near ${landmark} offer various packages.`,
        relatedQuestions: [`Mobile pet groomer ${city.name}?`, `Cat grooming ${city.name}?`]
      }
    ];
  };

  const questions = generateCityPAA();

  const titles = {
    en: { title: 'People Also Ask', subtitle: `Common questions about pet care in ${city.name}` },
    ms: { title: 'Soalan Lazim', subtitle: `Soalan biasa tentang penjagaan haiwan di ${city.name}` },
    zh: { title: '大家都在问', subtitle: `关于${city.name}宠物护理的常见问题` }
  };

  const content = titles[language] || titles.en;

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold text-foreground">{content.title}</h2>
        </div>
        <p className="text-muted-foreground mb-8">{content.subtitle}</p>

        {/* PAA Items */}
        <div className="space-y-2 max-w-3xl">
          {questions.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg bg-card overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                aria-expanded={expandedIndex === index}
              >
                <span className="font-medium text-foreground pr-4">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                    expandedIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  expandedIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="p-4 pt-0 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.answer}
                  </p>
                  
                  {item.relatedQuestions && item.relatedQuestions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-xs text-muted-foreground mb-2">
                        {language === 'en' ? 'Related searches:' : language === 'ms' ? 'Carian berkaitan:' : '相关搜索：'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.relatedQuestions.map((rq, rqIndex) => (
                          <span
                            key={rqIndex}
                            className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full"
                          >
                            {rq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* City-specific note */}
        <p className="text-sm text-muted-foreground mt-6">
          {language === 'en' 
            ? `All pricing and regulations are specific to ${city.name}, ${city.state}. Contact ${council.shortName} for official information.`
            : language === 'ms'
            ? `Semua harga dan peraturan khusus untuk ${city.name}, ${city.state}. Hubungi ${council.shortName} untuk maklumat rasmi.`
            : `所有价格和法规均针对${city.name}，${city.state}。如需官方信息，请联系${council.shortName}。`
          }
        </p>
      </div>
    </section>
  );
};

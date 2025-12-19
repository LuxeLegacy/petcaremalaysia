import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PAQItem {
  question: string;
  answer: string;
  relatedQuestions?: string[];
}

export const PeopleAlsoAskSection = () => {
  const { language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const paaContent: Record<string, { title: string; subtitle: string; questions: PAQItem[] }> = {
    en: {
      title: 'People Also Ask',
      subtitle: 'Common questions about pet care in Malaysia',
      questions: [
        {
          question: 'How much does a vet visit cost in Malaysia?',
          answer: 'Standard vet consultations in Malaysia range from RM50-RM200 depending on location and clinic type. Emergency visits cost more, typically RM200-RM800. Premium areas like Bangsar and Mont Kiara charge higher rates. Always ask for a quote before treatment begins.',
          relatedQuestions: ['What is included in a basic vet consultation?', 'Are there affordable vet clinics in KL?']
        },
        {
          question: 'Is there a 24-hour vet near me in Malaysia?',
          answer: 'Yes, Malaysia has 24/7 emergency veterinary clinics in major cities including Kuala Lumpur, Petaling Jaya, Shah Alam, Johor Bahru, Penang, and Ipoh. Use our directory to find the nearest 24-hour vet clinic with real-time availability and directions.',
          relatedQuestions: ['What should I do in a pet emergency at night?', 'Do 24-hour vets charge more?']
        },
        {
          question: 'Do I need to license my dog in Malaysia?',
          answer: 'Yes, all dogs in Malaysia must be licensed with your local council (MBPJ, DBKL, MBSJ, etc.). License fees range from RM10-RM50 per year, with discounts for spayed/neutered pets. Dogs must also be microchipped under the Animal Welfare Act 2015.',
          relatedQuestions: ['How do I register my dog with MBPJ?', 'What happens if my dog is unlicensed?']
        },
        {
          question: 'What vaccinations does my pet need in Malaysia?',
          answer: 'Dogs need DHPP (distemper, hepatitis, parvovirus, parainfluenza) and rabies vaccinations. Cats need FVRCP and rabies. Puppies and kittens require 3 rounds of vaccinations starting at 6-8 weeks. Annual boosters cost RM60-RM150 at local veterinary clinics.',
          relatedQuestions: ['When should I vaccinate my puppy?', 'Is rabies vaccination mandatory in Malaysia?']
        },
        {
          question: 'How much does pet grooming cost in Malaysia?',
          answer: 'Pet grooming prices in Malaysia vary by pet size and services. Basic bath: RM30-60. Full grooming (bath, haircut, nail trim, ear cleaning): RM60-180. Premium spa treatments can cost RM150-300. Mobile groomers may charge extra for home visits.',
          relatedQuestions: ['How often should I groom my dog?', 'Are there cat groomers in Malaysia?']
        },
        {
          question: 'What is the best pet insurance in Malaysia?',
          answer: 'Popular pet insurance providers in Malaysia include Oyen, PolicyStreet Pet Insurance, and AIA Pet Insurance. Plans start from RM25/month covering accidents, illnesses, and some include preventive care. Compare coverage limits, waiting periods, and excluded conditions before choosing.',
          relatedQuestions: ['Is pet insurance worth it?', 'What does pet insurance cover?']
        },
        {
          question: 'Where can I adopt a pet in Malaysia?',
          answer: 'You can adopt pets from SPCA Selangor, PAWS Animal Welfare Society, Malaysian Dogs Deserve Better (MDDB), and various rescue organizations. Adoption fees (RM50-RM300) typically include vaccination, microchipping, and sterilization. Visit shelters in PJ, KL, and Shah Alam.',
          relatedQuestions: ['What is the adoption process in Malaysia?', 'Can I adopt a specific dog breed?']
        },
        {
          question: 'What pets are legal to own in Malaysia?',
          answer: 'Common legal pets include dogs (with license), cats, rabbits, hamsters, guinea pigs, fish, and most birds. Some exotic pets require permits from PERHILITAN. Illegal pets include primates, certain reptiles, and wildlife. Check DVS regulations before acquiring exotic pets.',
          relatedQuestions: ['Can I own a hedgehog in Malaysia?', 'Do I need a permit for exotic pets?']
        }
      ]
    },
    ms: {
      title: 'Soalan Lazim',
      subtitle: 'Soalan biasa tentang penjagaan haiwan peliharaan di Malaysia',
      questions: [
        {
          question: 'Berapakah kos lawatan doktor haiwan di Malaysia?',
          answer: 'Konsultasi doktor haiwan standard di Malaysia adalah antara RM50-RM200 bergantung pada lokasi dan jenis klinik. Lawatan kecemasan lebih mahal, biasanya RM200-RM800. Kawasan premium seperti Bangsar dan Mont Kiara mengenakan kadar lebih tinggi.',
          relatedQuestions: ['Apa yang termasuk dalam konsultasi asas?', 'Adakah klinik haiwan yang berpatutan di KL?']
        },
        {
          question: 'Adakah klinik haiwan 24 jam berhampiran saya di Malaysia?',
          answer: 'Ya, Malaysia mempunyai klinik veterinar kecemasan 24/7 di bandar-bandar utama termasuk Kuala Lumpur, Petaling Jaya, Shah Alam, Johor Bahru, Pulau Pinang, dan Ipoh. Gunakan direktori kami untuk mencari klinik haiwan 24 jam terdekat.',
          relatedQuestions: ['Apa yang perlu dilakukan semasa kecemasan haiwan malam?', 'Adakah vet 24 jam lebih mahal?']
        },
        {
          question: 'Adakah saya perlu melesen anjing di Malaysia?',
          answer: 'Ya, semua anjing di Malaysia mesti dilesenkan dengan majlis tempatan (MBPJ, DBKL, MBSJ, dll.). Yuran lesen adalah RM10-RM50 setahun, dengan diskaun untuk haiwan yang dimandulkan. Anjing juga mesti mempunyai mikrochip di bawah Akta Kebajikan Haiwan 2015.',
          relatedQuestions: ['Bagaimana mendaftar anjing dengan MBPJ?', 'Apa berlaku jika anjing tidak berlesen?']
        },
        {
          question: 'Apakah vaksinasi yang diperlukan haiwan saya di Malaysia?',
          answer: 'Anjing memerlukan vaksinasi DHPP dan rabies. Kucing memerlukan FVRCP dan rabies. Anak anjing dan anak kucing memerlukan 3 suntikan bermula dari umur 6-8 minggu. Penggalak tahunan berharga RM60-RM150 di klinik veterinar tempatan.',
          relatedQuestions: ['Bila perlu vaksin anak anjing?', 'Adakah vaksinasi rabies wajib di Malaysia?']
        }
      ]
    },
    zh: {
      title: '大家都在问',
      subtitle: '马来西亚宠物护理常见问题',
      questions: [
        {
          question: '马来西亚兽医诊费是多少？',
          answer: '马来西亚标准兽医咨询费用为RM50-RM200，取决于地点和诊所类型。紧急就诊费用更高，通常为RM200-RM800。Bangsar和Mont Kiara等高档地区收费更高。治疗前请务必询问报价。',
          relatedQuestions: ['基本兽医咨询包括什么？', '吉隆坡有便宜的兽医诊所吗？']
        },
        {
          question: '马来西亚我附近有24小时兽医吗？',
          answer: '是的，马来西亚主要城市包括吉隆坡、八打灵再也、莎阿南、新山、槟城和怡保都有24/7紧急兽医诊所。使用我们的目录查找最近的24小时兽医诊所。',
          relatedQuestions: ['夜间宠物紧急情况怎么办？', '24小时兽医收费更高吗？']
        },
        {
          question: '在马来西亚我需要为狗申请执照吗？',
          answer: '是的，马来西亚所有狗都必须在当地市议会（MBPJ、DBKL、MBSJ等）登记执照。执照费用为每年RM10-RM50，绝育宠物可享受折扣。根据2015年动物福利法，狗还必须植入微芯片。',
          relatedQuestions: ['如何在MBPJ注册我的狗？', '狗没有执照会怎样？']
        },
        {
          question: '我的宠物在马来西亚需要什么疫苗？',
          answer: '狗需要DHPP和狂犬病疫苗。猫需要FVRCP和狂犬病疫苗。幼犬和幼猫从6-8周大开始需要3轮疫苗接种。年度加强针在当地兽医诊所费用为RM60-RM150。',
          relatedQuestions: ['何时给幼犬接种疫苗？', '马来西亚狂犬病疫苗是强制性的吗？']
        }
      ]
    }
  };

  const content = paaContent[language] || paaContent.en;

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.questions.map(q => ({
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
          {content.questions.map((item, index) => (
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
                      <p className="text-xs text-muted-foreground mb-2">Related searches:</p>
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

        {/* More questions prompt */}
        <p className="text-sm text-muted-foreground mt-6">
          {language === 'en' ? "Can't find your answer? " : language === 'ms' ? "Tak jumpa jawapan? " : "找不到答案？"}
          <a href="#faq" className="text-primary hover:underline">
            {language === 'en' ? 'View all FAQs' : language === 'ms' ? 'Lihat semua FAQ' : '查看所有常见问题'}
          </a>
        </p>
      </div>
    </section>
  );
};

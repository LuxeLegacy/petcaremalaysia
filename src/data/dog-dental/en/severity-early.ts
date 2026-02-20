import type { DentalSeverityPage } from '../types';

export const enSeverityEarly: DentalSeverityPage = {
  slug: 'early',
  category: 'severity',
  lang: 'en',
  title: 'Early Stage Dog Dental Disease: Plaque & Mild Gingivitis',
  overview: `Early-stage dental disease includes plaque accumulation and the beginning of gingivitis. This is the most treatable and only fully reversible stage of dental disease in dogs. Signs are often subtle — mild bad breath and slight gum redness may be the only indicators.`,
  progression: [
    { stage: 'Plaque Formation', description: 'Soft bacterial film forms on teeth within hours of eating.', action: 'Daily brushing can remove plaque before it hardens.' },
    { stage: 'Tartar Development', description: 'Plaque hardens into tartar within 24–72 hours. Cannot be removed by brushing.', action: 'Professional veterinary cleaning required to remove tartar.' },
    { stage: 'Mild Gingivitis', description: 'Gum line becomes slightly red and may bleed when probed.', action: 'Professional cleaning + daily home care can fully reverse this stage.' },
  ],
  associatedConditions: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Preventive Dental Care', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  faqs: [
    { question: 'How do I know if my dog has early dental disease?', answer: 'Check for mild bad breath, yellowish film on teeth, and slight redness along the gum line. Your veterinarian can confirm during a routine dental examination.' },
  ],
  seo: {
    metaTitle: 'Early Stage Dog Dental Disease | Signs & Reversibility',
    metaDescription: 'Early dental disease in dogs is fully reversible. Learn to spot plaque, mild gingivitis, and how professional cleaning and daily care can protect your dog\'s teeth.',
    keywords: ['early dental disease dog', 'dog plaque stage', 'mild gingivitis dog', 'reversible dental disease dog'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Moderate Severity', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Prevention: Brushing', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

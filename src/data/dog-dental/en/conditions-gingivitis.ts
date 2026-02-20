import type { DentalConditionPage } from '../types';

export const enConditionsGingivitis: DentalConditionPage = {
  slug: 'gingivitis',
  category: 'conditions',
  lang: 'en',
  title: 'Gingivitis in Dogs: Early Gum Disease Signs & Treatment',
  overview: `Gingivitis is inflammation of the gums caused by plaque and tartar accumulation along the gum line. It is the earliest stage of periodontal disease and is the only stage that is fully reversible with professional treatment and proper home care.

Without intervention, gingivitis progresses to periodontal disease, where the supporting structures of the teeth — bone, ligaments, and tissue — begin to break down irreversibly.`,
  signs: ['Red, swollen gums', 'Bleeding gums when eating or during brushing', 'Bad breath (halitosis)', 'Gum line appears puffy or inflamed', 'Dog may show mild discomfort when mouth is touched'],
  severityStages: [
    { stage: 'Mild Gingivitis', description: 'Slight redness along the gum line. Gums may bleed slightly when probed.' },
    { stage: 'Moderate Gingivitis', description: 'Visible swelling and redness. Gums bleed easily. Bad breath noticeable.' },
    { stage: 'Severe Gingivitis', description: 'Significant swelling, spontaneous bleeding, and discomfort. Risk of progression to periodontal disease.' },
  ],
  redFlags: ['Gums that bleed without contact', 'Refusal to eat', 'Excessive drooling', 'Pawing at the mouth', 'Facial swelling'],
  diagnosisOverview: 'Veterinarians diagnose gingivitis through visual oral examination and dental probing. The probe measures the depth of the gum pocket — deeper pockets indicate more advanced disease.',
  treatmentCategories: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Preventive Dental Care', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: 'With professional cleaning and consistent home care, gingivitis can resolve within 1–2 weeks. Gums should return to a healthy pink color.',
  prevention: 'Daily tooth brushing, regular dental checkups, and appropriate dental chews help prevent gingivitis. Small breeds benefit from more frequent professional cleanings.',
  whenToSeeVet: 'If your dog\'s gums appear red, swollen, or bleed easily, schedule a veterinary dental examination promptly. Early gingivitis is fully reversible.',
  faqs: [
    { question: 'Is gingivitis in dogs reversible?', answer: 'Yes, gingivitis is the only stage of periodontal disease that is fully reversible with professional cleaning and proper daily dental care.' },
    { question: 'How long does it take for gingivitis to become periodontal disease?', answer: 'Without treatment, gingivitis can progress to early periodontal disease within weeks to months, depending on the dog\'s breed, age, and oral hygiene.' },
  ],
  seo: {
    metaTitle: 'Gingivitis in Dogs | Early Gum Disease Guide',
    metaDescription: 'Learn about gingivitis in dogs: recognizing red, swollen gums, why early treatment matters, and how professional cleaning can reverse this common dental condition.',
    keywords: ['dog gingivitis', 'gum disease dogs', 'red gums dog', 'dog dental disease early stage'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Red Gums Symptom', path: '/dog-dental-disease/symptoms/red-gums' },
  ],
};

import type { DentalSymptomPage } from '../types';

export const enSymptomsBleedingGums: DentalSymptomPage = {
  slug: 'bleeding-gums',
  category: 'symptoms',
  lang: 'en',
  title: 'Bleeding Gums in Dogs: Causes & What to Do',
  overview: `Bleeding gums in dogs are a clear sign of gum disease. While mild bleeding during initial tooth brushing attempts can be normal, spontaneous bleeding or bleeding when eating indicates gingivitis or more advanced periodontal disease.`,
  whatItIndicates: 'Bleeding gums indicate active inflammation — most commonly gingivitis or periodontal disease. Blood on chew toys, in the water bowl, or visible when the dog eats are all significant signs.',
  oralVsOtherCauses: 'Most bleeding gums in dogs are dental in origin. However, bleeding disorders, certain medications, or trauma can also cause oral bleeding. Your veterinarian can differentiate through examination and blood tests if needed.',
  emergencyRedFlags: ['Bleeding that doesn\'t stop within 10 minutes', 'Heavy bleeding from the mouth', 'Bleeding accompanied by facial swelling', 'Pale gums with oral bleeding'],
  severityRouting: [
    { label: 'Moderate (occasional bleeding)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Advanced (spontaneous or heavy bleeding)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Your veterinarian will examine the source of bleeding, check for loose teeth, and assess gum health. Dental X-rays may be needed to evaluate bone support around bleeding areas.',
  carePathways: [
    { label: 'Is this gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Could it be periodontal disease?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Is it normal for dog gums to bleed when brushing?', answer: 'Slight bleeding during the first few brushing sessions can occur if gums are already mildly inflamed. If bleeding persists beyond a week of gentle brushing or is heavy, see your veterinarian.' },
  ],
  seo: {
    metaTitle: 'Bleeding Gums in Dogs | Causes & When to Worry',
    metaDescription: 'Bleeding gums in dogs signal gum disease. Learn what causes oral bleeding, when it\'s an emergency, and the importance of veterinary dental evaluation.',
    keywords: ['dog bleeding gums', 'dog gums bleed', 'blood on dog toys', 'dog dental bleeding'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Red Gums', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
  ],
};

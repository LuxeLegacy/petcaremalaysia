import type { DentalSymptomPage } from '../types';

export const enSymptomsBadBreath: DentalSymptomPage = {
  slug: 'bad-breath',
  category: 'symptoms',
  lang: 'en',
  title: 'Bad Breath in Dogs: What Halitosis May Indicate',
  overview: `Bad breath (halitosis) is the most commonly reported dental symptom in dogs and is almost always a sign of underlying oral disease. While occasional mild breath odor can be normal, persistent or worsening bad breath should prompt a veterinary evaluation.

The most common cause is bacterial buildup from plaque and tartar on the teeth. However, bad breath can also indicate more serious conditions including advanced periodontal disease, tooth root abscess, or even systemic health issues.`,
  whatItIndicates: 'Persistent bad breath most commonly indicates plaque/tartar accumulation, gingivitis, or periodontal disease. In some cases, it may signal a tooth root abscess, oral tumor, or non-dental conditions such as kidney disease or diabetes.',
  oralVsOtherCauses: 'Dental causes produce a characteristic "rotten" smell from bacterial infection. A sweet or fruity smell may suggest diabetes. An ammonia-like smell can indicate kidney disease. Your veterinarian can help differentiate these causes.',
  emergencyRedFlags: ['Bad breath accompanied by facial swelling', 'Refusal to eat combined with foul oral odor', 'Bleeding from the mouth', 'Sudden onset of extremely foul breath with lethargy'],
  severityRouting: [
    { label: 'Early Stage (mild odor)', path: '/dog-dental-disease/severity/early' },
    { label: 'Moderate Stage (persistent odor)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Advanced Stage (severe odor with other signs)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'A veterinarian will perform a complete oral examination, check for tartar, gum inflammation, loose teeth, and masses. Dental X-rays may be recommended to assess below-the-gum-line disease.',
  carePathways: [
    { label: 'Check if it\'s plaque buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Could it be gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Understand severity levels', path: '/dog-dental-disease/severity/early' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Is bad breath normal in dogs?', answer: 'Mild occasional breath odor can be normal, especially after eating. However, persistent or worsening bad breath is not normal and usually indicates dental disease that needs veterinary attention.' },
    { question: 'Can brushing fix my dog\'s bad breath?', answer: 'If the bad breath is from early plaque buildup, regular brushing can help. However, if tartar has already formed or gums are inflamed, professional veterinary cleaning is needed first.' },
  ],
  seo: {
    metaTitle: 'Bad Breath in Dogs | Causes & When to See a Vet',
    metaDescription: 'Why does your dog have bad breath? Learn what halitosis indicates — from plaque buildup to serious dental disease — and when to seek veterinary care.',
    keywords: ['dog bad breath', 'halitosis dogs', 'dog breath smell', 'why does my dog have bad breath'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Red Gums', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Dental Checkups', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

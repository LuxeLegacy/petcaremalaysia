import type { DentalConditionPage } from '../types';

export const enConditionsPlaque: DentalConditionPage = {
  slug: 'plaque-buildup',
  category: 'conditions',
  lang: 'en',
  title: 'Plaque Buildup in Dogs: Causes, Signs & What to Do',
  overview: `Plaque is a soft, sticky film of bacteria that forms on your dog's teeth within hours of eating. If not removed through brushing or chewing, plaque hardens into tartar (calculus) within 24–72 hours, which can only be removed by a veterinary professional.

Plaque buildup is the starting point of all dental disease in dogs. While it causes no pain initially, unchecked plaque leads to gingivitis, periodontal disease, and eventually tooth loss. Small breeds are particularly susceptible due to tooth crowding.`,
  signs: ['Yellowish film on teeth', 'Mild bad breath', 'Slight gum redness at the gum line', 'Visible tartar (hardened yellowish-brown deposits)'],
  severityStages: [
    { stage: 'Early Plaque', description: 'Soft film visible on teeth, easily removable with brushing. No gum inflammation.' },
    { stage: 'Tartar Formation', description: 'Hardened deposits on teeth, especially near the gum line. Mild gum redness may begin.' },
    { stage: 'Early Gingivitis', description: 'Gum inflammation begins. Professional cleaning recommended.' },
  ],
  redFlags: ['Excessive drooling', 'Reluctance to eat hard food', 'Pawing at mouth', 'Bleeding gums when chewing'],
  diagnosisOverview: 'Your veterinarian will examine your dog\'s teeth and gums visually and may use a dental probe to check for tartar below the gum line. Dental X-rays may be recommended to assess bone health.',
  treatmentCategories: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Preventive Dental Care', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: 'After professional cleaning for plaque/tartar removal, most dogs recover within 24 hours and can resume normal eating the next day.',
  prevention: 'Daily brushing with dog-specific toothpaste is the gold standard for preventing plaque buildup. Regular veterinary dental checkups catch early accumulation before it progresses.',
  whenToSeeVet: 'If you notice hardened deposits on your dog\'s teeth, persistent bad breath, or any gum redness, schedule a veterinary dental examination.',
  faqs: [
    { question: 'How fast does plaque form on dog teeth?', answer: 'Plaque begins forming within hours of eating and can harden into tartar within 24–72 hours if not removed.' },
    { question: 'Can I remove tartar from my dog\'s teeth at home?', answer: 'No. Once plaque hardens into tartar, it can only be safely removed by a veterinary professional under anesthesia. Home scaling can damage enamel and gums.' },
  ],
  seo: {
    metaTitle: 'Plaque Buildup in Dogs | Causes, Signs & Prevention',
    metaDescription: 'Learn about plaque buildup in dogs: how it forms, warning signs, when to see a vet, and how professional cleaning prevents progression to periodontal disease.',
    keywords: ['dog plaque', 'tartar on dog teeth', 'plaque buildup dogs', 'dog teeth cleaning'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Gingivitis in Dogs', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Early Stage Severity', path: '/dog-dental-disease/severity/early' },
    { label: 'Brushing Prevention', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

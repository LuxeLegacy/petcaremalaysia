import type { DentalTreatmentPage } from '../types';

export const enTreatmentsProfessionalCleaning: DentalTreatmentPage = {
  slug: 'professional-cleaning',
  category: 'treatments',
  lang: 'en',
  title: 'Professional Dental Cleaning for Dogs: What It Involves',
  overview: `Professional dental cleaning (prophylaxis) is the cornerstone of veterinary dental care. It involves ultrasonic scaling to remove plaque and tartar above and below the gum line, followed by polishing. All professional dental cleanings for dogs require general anesthesia.`,
  whatItInvolves: 'Under general anesthesia, the veterinarian uses ultrasonic scalers to remove tartar, hand instruments for subgingival cleaning, and polishing paste to smooth tooth surfaces. Full-mouth X-rays and probing are typically performed during the same procedure.',
  whenRecommended: 'When tartar is visible, when gingivitis is present, as part of routine preventive care (annually or as recommended), and before any dental disease progresses to require extractions.',
  benefits: ['Removes tartar that brushing cannot', 'Reverses gingivitis', 'Allows thorough assessment of all teeth', 'Prevents progression to periodontal disease', 'Improves breath and comfort'],
  risksAndConsiderations: 'General anesthesia carries inherent risk, though modern veterinary anesthesia is very safe. Pre-anesthetic blood work assesses organ function. Senior dogs and those with health conditions require careful anesthetic planning. Non-anesthetic dental cleanings do NOT substitute for professional cleaning — they cannot address disease below the gum line.',
  followUpCare: 'Resume gentle brushing 3–5 days after cleaning. Soft food for 1–2 days if gums are tender. Follow your veterinarian\'s specific post-procedure instructions.',
  associatedConditions: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'How much does professional dental cleaning cost in Malaysia?', answer: 'Professional dental cleaning in Malaysia typically costs RM200–RM400 for a straightforward cleaning without extractions. Complex cases cost more.' },
    { question: 'Why does my dog need anesthesia for a dental cleaning?', answer: 'Anesthesia allows thorough cleaning below the gum line, dental X-rays, and proper assessment. Awake cleanings are cosmetic only and cannot treat disease.' },
  ],
  seo: {
    metaTitle: 'Professional Dog Dental Cleaning | What to Expect',
    metaDescription: 'Professional dental cleaning is essential for dog dental health. Learn what it involves, why anesthesia is needed, costs in Malaysia, and post-procedure care.',
    keywords: ['dog dental cleaning', 'professional teeth cleaning dog', 'dog teeth scaling', 'veterinary dental cleaning cost'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Post-Procedure Recovery', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: 'Pet Dental Care Costs', path: '/qa/article/how-much-does-pet-dental-care-cost-malaysia' },
  ],
};

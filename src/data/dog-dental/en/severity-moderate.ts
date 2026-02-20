import type { DentalSeverityPage } from '../types';

export const enSeverityModerate: DentalSeverityPage = {
  slug: 'moderate',
  category: 'severity',
  lang: 'en',
  title: 'Moderate Dog Dental Disease: Periodontal Progression',
  overview: `Moderate dental disease represents Stages 2–3 of periodontal disease, where inflammation has extended below the gum line and bone loss has begun (up to 50%). Professional treatment is essential at this stage to prevent tooth loss and systemic complications.`,
  progression: [
    { stage: 'Stage 2 — Early Periodontitis', description: 'Up to 25% bone loss visible on dental X-rays. Gum pockets deepen.', action: 'Professional cleaning under anesthesia with subgingival scaling. Daily home care critical.' },
    { stage: 'Stage 3 — Moderate Periodontitis', description: '25–50% bone loss. Some teeth may become loose. Persistent bad breath.', action: 'Professional cleaning, possible tooth extractions, and ongoing veterinary monitoring.' },
  ],
  associatedConditions: [
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: 'Can moderate periodontal disease be reversed?', answer: 'No. Once bone loss occurs, it is irreversible. Treatment aims to halt further progression, manage pain, and preserve remaining healthy teeth.' },
  ],
  seo: {
    metaTitle: 'Moderate Dog Dental Disease | Periodontal Stages 2-3',
    metaDescription: 'Moderate dental disease in dogs involves bone loss and deepening gum pockets. Learn what to expect, treatment options, and why prompt care prevents tooth loss.',
    keywords: ['moderate dental disease dog', 'periodontal disease stage 2', 'dog bone loss teeth', 'dog dental treatment needed'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Early Severity', path: '/dog-dental-disease/severity/early' },
    { label: 'Advanced Severity', path: '/dog-dental-disease/severity/advanced' },
  ],
};

import type { DentalSeverityPage } from '../types';

export const enSeverityAdvanced: DentalSeverityPage = {
  slug: 'advanced',
  category: 'severity',
  lang: 'en',
  title: 'Advanced Dog Dental Disease: Stage 4 Periodontal Disease',
  overview: `Advanced dental disease (Stage 4 periodontitis) involves over 50% bone loss around affected teeth. Teeth are severely mobile or already lost. This stage carries significant risk of systemic complications as oral bacteria can enter the bloodstream affecting the heart, kidneys, and liver. Aggressive treatment under anesthesia is typically needed.`,
  progression: [
    { stage: 'Stage 4 — Advanced Periodontitis', description: 'Over 50% bone loss. Severe tooth mobility. Multiple teeth may be affected.', action: 'Comprehensive dental procedure with multiple extractions likely. Pain management essential.' },
    { stage: 'Systemic Risk', description: 'Chronic oral infection can spread bacteria to major organs.', action: 'Prompt treatment reduces systemic health risks. Blood work may be recommended.' },
  ],
  associatedConditions: [
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  associatedTreatments: [
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Antibiotic Therapy', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: 'Can a dog live well after multiple tooth extractions?', answer: 'Yes. Dogs adapt remarkably well after extractions. Most owners report improved appetite, energy, and behavior once the source of chronic pain is removed.' },
  ],
  seo: {
    metaTitle: 'Advanced Dog Dental Disease | Stage 4 Guide',
    metaDescription: 'Advanced periodontal disease in dogs involves severe bone loss and systemic risks. Learn about treatment expectations, extractions, and recovery for Stage 4 dental disease.',
    keywords: ['advanced dental disease dog', 'stage 4 periodontal dog', 'severe dog dental disease', 'dog tooth loss'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Moderate Severity', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
  ],
};

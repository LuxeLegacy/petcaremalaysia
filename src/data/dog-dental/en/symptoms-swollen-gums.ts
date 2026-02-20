import type { DentalSymptomPage } from '../types';

export const enSymptomsSwollenGums: DentalSymptomPage = {
  slug: 'swollen-gums',
  category: 'symptoms',
  lang: 'en',
  title: 'Swollen Gums in Dogs: Causes & When to Worry',
  overview: `Swollen gums in dogs indicate inflammation that has progressed beyond mild redness. The gums may appear puffy, enlarged, or may even grow over portions of the teeth. This is a sign of moderate to advanced gum disease requiring veterinary evaluation.`,
  whatItIndicates: 'Swollen gums typically indicate moderate gingivitis progressing toward periodontal disease. Localized swelling near a specific tooth may suggest a tooth root abscess or fractured tooth.',
  oralVsOtherCauses: 'Dental swelling is usually localized along the gum line or around specific teeth. Generalized oral swelling may indicate an allergic reaction, epulis (benign growth), or oral mass requiring veterinary assessment.',
  emergencyRedFlags: ['Swelling extending to the face or under the eye', 'Rapid onset of swelling', 'Swelling with fever or lethargy', 'Difficulty breathing due to oral swelling'],
  severityRouting: [
    { label: 'Moderate (localized swelling)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Advanced (widespread or severe)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Veterinary assessment includes visual examination, probing to measure pocket depth, and dental X-rays to evaluate bone levels and rule out abscess or mass.',
  carePathways: [
    { label: 'Could it be periodontal disease?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Could it be a tooth abscess?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Emergency signs to watch for', path: '/dog-dental-disease/emergency-signs' },
  ],
  faqs: [
    { question: 'Why are my dog\'s gums swollen around one tooth?', answer: 'Localized swelling around a single tooth may indicate a tooth root abscess, a fractured tooth, or a gum growth (epulis). Veterinary evaluation with dental X-rays is recommended.' },
  ],
  seo: {
    metaTitle: 'Swollen Gums in Dogs | Causes & Veterinary Care',
    metaDescription: 'Swollen gums in dogs may indicate advancing dental disease or abscess. Learn the causes, emergency signs to watch for, and when to see a vet.',
    keywords: ['swollen gums dog', 'dog gum swelling', 'puffy gums dog', 'dog dental swelling'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Red Gums', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Facial Swelling', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

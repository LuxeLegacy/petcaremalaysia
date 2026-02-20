import type { DentalDiagnosisPage } from '../types';

export const enDiagnosisDentalProbing: DentalDiagnosisPage = {
  slug: 'dental-probing',
  category: 'diagnosis',
  lang: 'en',
  title: 'Dental Probing in Dogs: Measuring Gum Disease',
  overview: `Dental probing is a diagnostic technique where a veterinarian uses a thin, calibrated probe to measure the depth of the gum pocket around each tooth. It is performed under anesthesia as part of a comprehensive dental evaluation and is essential for staging periodontal disease.`,
  whatItInvolves: 'A periodontal probe is gently inserted between the tooth and gum at multiple points around each tooth. The depth reading (in millimeters) indicates gum health: 0–3mm is normal, 4–5mm indicates early to moderate disease, and 6mm+ indicates advanced periodontal disease.',
  whenRecommended: 'Dental probing is performed during every professional dental cleaning under anesthesia. It is essential for creating a treatment plan and documenting disease progression between visits.',
  whatItReveals: 'Probing reveals the extent of gum attachment loss around each tooth, helping veterinarians identify which teeth have active disease, which can be saved, and which may need extraction.',
  associatedConditions: [
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'Is dental probing painful for dogs?', answer: 'Dental probing is performed under anesthesia, so your dog does not feel pain during the procedure.' },
  ],
  seo: {
    metaTitle: 'Dental Probing in Dogs | Gum Disease Measurement',
    metaDescription: 'Dental probing measures gum pocket depth to stage periodontal disease in dogs. Learn how this diagnostic tool helps veterinarians plan dental treatment.',
    keywords: ['dental probing dogs', 'gum pocket depth dog', 'periodontal probing dog', 'dog dental diagnosis'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Oral Exam', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: 'Dental X-Rays', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

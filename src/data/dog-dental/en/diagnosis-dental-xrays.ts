import type { DentalDiagnosisPage } from '../types';

export const enDiagnosisDentalXrays: DentalDiagnosisPage = {
  slug: 'dental-x-rays',
  category: 'diagnosis',
  lang: 'en',
  title: 'Dental X-Rays for Dogs: Seeing Below the Gum Line',
  overview: `Dental radiographs (X-rays) are the most important diagnostic tool in veterinary dentistry. Over 60% of dental disease in dogs occurs below the gum line and is invisible during a visual exam. Full-mouth X-rays under anesthesia are the gold standard for comprehensive dental assessment.`,
  whatItInvolves: 'Small X-ray sensors are placed inside the dog\'s mouth while under anesthesia. Multiple images are taken to capture all tooth roots and surrounding bone. Digital X-rays provide instant results with minimal radiation exposure.',
  whenRecommended: 'Full-mouth dental X-rays are recommended during every professional dental cleaning, when dental disease is suspected, before extractions, and to evaluate trauma or fractures.',
  whatItReveals: 'Dental X-rays reveal tooth root health, bone loss around teeth, hidden abscesses, unerupted or impacted teeth, jaw fractures, tooth resorption, and tumors not visible on oral exam.',
  associatedConditions: [
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: 'Are dental X-rays safe for dogs?', answer: 'Yes. Modern digital dental X-rays use very low radiation doses. The diagnostic benefits far outweigh the minimal radiation risk.' },
    { question: 'Why can\'t my vet just look at the teeth?', answer: 'Over 60% of dental disease is hidden below the gum line. A tooth can appear normal on the surface while having significant root disease or bone loss only visible on X-ray.' },
  ],
  seo: {
    metaTitle: 'Dental X-Rays for Dogs | Below the Gum Line Diagnosis',
    metaDescription: 'Dental X-rays reveal hidden disease below your dog\'s gum line. Learn why radiographs are essential for accurate dental diagnosis and treatment planning.',
    keywords: ['dog dental x-ray', 'dental radiograph dog', 'dog teeth x-ray', 'veterinary dental imaging'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Oral Exam', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: 'Dental Probing', path: '/dog-dental-disease/diagnosis/dental-probing' },
  ],
};

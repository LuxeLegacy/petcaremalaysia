import type { DentalDiagnosisPage } from '../types';

export const enDiagnosisOralExam: DentalDiagnosisPage = {
  slug: 'oral-exam',
  category: 'diagnosis',
  lang: 'en',
  title: 'Veterinary Oral Exam for Dogs: What to Expect',
  overview: `A veterinary oral examination is the foundation of dental disease diagnosis. During a routine visit, your vet can perform an awake oral exam to assess visible tartar, gum color, and obvious abnormalities. However, a comprehensive oral exam under anesthesia is needed for thorough evaluation.`,
  whatItInvolves: 'An awake exam checks visible tooth surfaces, gum color, and breath. A comprehensive exam under anesthesia allows the vet to examine every tooth, probe gum pockets, check for mobility, and assess the tongue, palate, and oral tissues.',
  whenRecommended: 'Annual oral exams are recommended for all dogs. An anesthetized exam is recommended when dental disease is suspected, before professional cleaning, or if the dog shows dental symptoms.',
  whatItReveals: 'Oral exams can reveal tartar accumulation, gingivitis, fractured teeth, oral masses, tooth mobility, and gum recession. However, over 60% of dental disease is below the gum line — dental X-rays are needed for a complete picture.',
  associatedConditions: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'Does my dog need anesthesia for a dental exam?', answer: 'A basic visual check can be done while awake. However, a thorough exam with probing and X-rays requires anesthesia for safety and accuracy.' },
  ],
  seo: {
    metaTitle: 'Veterinary Oral Exam for Dogs | What to Expect',
    metaDescription: 'Learn what happens during a veterinary oral exam for dogs, when anesthesia is needed, and what the exam reveals about your dog\'s dental health.',
    keywords: ['dog oral exam', 'vet dental check dog', 'dog dental examination', 'dog teeth checkup'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Dental Probing', path: '/dog-dental-disease/diagnosis/dental-probing' },
    { label: 'Dental X-Rays', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

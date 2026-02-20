import type { DentalTreatmentPage } from '../types';

export const enTreatmentsAntibioticTherapy: DentalTreatmentPage = {
  slug: 'antibiotic-therapy',
  category: 'treatments',
  lang: 'en',
  title: 'Antibiotic Therapy for Dog Dental Infections: Overview',
  overview: `Antibiotic therapy may be part of a comprehensive treatment plan for dental infections in dogs. It is important to understand that antibiotics alone do not cure dental disease — they are used alongside professional dental procedures to manage infection.`,
  whatItInvolves: 'Your veterinarian may prescribe a course of antibiotics before or after dental procedures when active infection is present. The specific medication, dose, and duration are determined by the veterinarian based on each individual case.',
  whenRecommended: 'When there is evidence of active infection such as a tooth root abscess, facial swelling, or systemic signs of infection (fever, lethargy). Antibiotics may also be used pre-operatively in cases with significant infection to reduce bacterial load before surgery.',
  benefits: ['Helps control active infection', 'Reduces risk of systemic bacterial spread', 'Supports healing when combined with dental procedures', 'Can provide temporary comfort while awaiting surgery'],
  risksAndConsiderations: 'Antibiotics should only be used under veterinary supervision. Inappropriate use contributes to antibiotic resistance. Antibiotics alone cannot treat the underlying dental disease — they manage infection while the source (diseased tooth) is addressed through dental procedures.',
  followUpCare: 'Complete the full course of antibiotics as prescribed. Report any side effects to your veterinarian. Follow up as directed to ensure the infection has resolved.',
  associatedConditions: [
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'Can antibiotics cure my dog\'s dental disease?', answer: 'No. Antibiotics manage infection but cannot cure dental disease. The diseased tooth or tissue must be treated through professional dental procedures for resolution.' },
  ],
  seo: {
    metaTitle: 'Antibiotic Therapy for Dog Dental Infections',
    metaDescription: 'Understand the role of antibiotic therapy in treating dog dental infections. Learn when it\'s needed, why it can\'t replace dental procedures, and what to expect.',
    keywords: ['dog dental antibiotics', 'antibiotic therapy dog teeth', 'dog tooth infection treatment', 'dental infection dog'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
  ],
};

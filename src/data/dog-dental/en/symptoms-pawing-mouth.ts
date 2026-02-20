import type { DentalSymptomPage } from '../types';

export const enSymptomsPawingMouth: DentalSymptomPage = {
  slug: 'pawing-at-mouth',
  category: 'symptoms',
  lang: 'en',
  title: 'Dog Pawing at Mouth: Causes & When to Worry',
  overview: `Pawing at the mouth is a distress signal in dogs that indicates oral discomfort. While it can be caused by something stuck between the teeth or in the gums, persistent pawing often points to significant dental pain from abscess, fractured tooth, or advanced periodontal disease.`,
  whatItIndicates: 'Pawing at the mouth may indicate a foreign object stuck in teeth, a fractured tooth, tooth root abscess, advanced gum disease, or oral mass. It is a reliable indicator of acute oral pain.',
  oralVsOtherCauses: 'Dental causes are the most common. However, bee stings, allergic reactions causing oral swelling, or a foreign body lodged in the throat can also cause this behavior.',
  emergencyRedFlags: ['Pawing combined with difficulty breathing', 'Pawing with facial or throat swelling', 'Continuous pawing with drooling and distress', 'Pawing with bleeding from the mouth'],
  severityRouting: [
    { label: 'Moderate (intermittent pawing)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Advanced (persistent distress)', path: '/dog-dental-disease/severity/advanced' },
    { label: 'Emergency (with breathing difficulty)', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: 'Veterinary examination will include checking for foreign objects, fractured teeth, swelling, and masses. Sedation may be needed for a thorough oral exam.',
  carePathways: [
    { label: 'Could it be a tooth abscess?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Emergency signs', path: '/dog-dental-disease/emergency-signs' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Should I look inside my dog\'s mouth if they\'re pawing at it?', answer: 'You can gently look if your dog allows it, checking for visible objects or swelling. However, if your dog is in pain, they may bite — use caution and see a vet if you can\'t easily identify the cause.' },
  ],
  seo: {
    metaTitle: 'Dog Pawing at Mouth | Oral Pain Causes & Care',
    metaDescription: 'Dog pawing at their mouth signals oral pain. Learn the dental and non-dental causes, emergency warning signs, and when immediate veterinary care is needed.',
    keywords: ['dog pawing mouth', 'dog mouth pain', 'dog rubbing face', 'dog oral discomfort'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Dropping Food', path: '/dog-dental-disease/symptoms/dropping-food' },
    { label: 'Facial Swelling', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

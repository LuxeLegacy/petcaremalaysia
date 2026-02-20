import type { DentalTreatmentPage } from '../types';

export const enTreatmentsPreventiveCare: DentalTreatmentPage = {
  slug: 'preventive-dental-care',
  category: 'treatments',
  lang: 'en',
  title: 'Preventive Dental Care for Dogs: Professional Overview',
  overview: `Preventive dental care is the most cost-effective approach to maintaining your dog's oral health. A combination of professional veterinary care and daily home care can dramatically reduce the incidence and severity of dental disease.`,
  whatItInvolves: 'Preventive dental care includes regular veterinary dental examinations, professional cleanings as recommended, daily tooth brushing at home, and appropriate dietary and chewing strategies.',
  whenRecommended: 'Preventive care should begin from puppyhood with oral handling training and first dental check. Annual dental exams for all adult dogs. Professional cleaning frequency based on individual risk factors.',
  benefits: ['Prevents painful dental disease', 'Reduces lifetime dental care costs', 'Maintains fresh breath and healthy gums', 'Supports overall systemic health', 'Early detection of emerging problems'],
  risksAndConsiderations: 'There are no risks to preventive dental care. The only consideration is consistency — intermittent home care provides limited benefit. Dental chews and toys are supplements to, not replacements for, brushing and professional care.',
  followUpCare: 'Maintain daily brushing routine. Schedule annual dental examinations. Follow your veterinarian\'s recommendations for professional cleaning intervals.',
  associatedConditions: [
    { label: 'Plaque Buildup', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  faqs: [
    { question: 'What is the single most effective thing I can do for my dog\'s dental health?', answer: 'Daily tooth brushing with a dog-specific toothpaste is the most effective home care measure. Combined with annual veterinary dental examinations, it significantly reduces dental disease.' },
  ],
  seo: {
    metaTitle: 'Preventive Dental Care for Dogs | Professional Guide',
    metaDescription: 'Preventive dental care is the best investment in your dog\'s oral health. Learn how professional cleanings and daily brushing prevent costly dental disease.',
    keywords: ['preventive dental care dog', 'dog dental prevention', 'dog teeth care routine', 'preventing dog dental disease'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Brushing', path: '/dog-dental-disease/prevention/brushing' },
    { label: 'Dental Checkups', path: '/dog-dental-disease/prevention/dental-checkups' },
    { label: 'Diet & Chewing', path: '/dog-dental-disease/prevention/diet-and-chewing-behavior' },
  ],
};

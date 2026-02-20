import type { DentalPreventionPage } from '../types';

export const enPreventionCheckups: DentalPreventionPage = {
  slug: 'dental-checkups',
  category: 'prevention',
  lang: 'en',
  title: 'Regular Dental Checkups for Dogs: Why They Matter',
  overview: `Annual veterinary dental examinations are essential for catching dental disease early, when treatment is simplest and most affordable. Many dogs show no obvious signs of dental disease until it's advanced — routine checkups catch problems you can't see at home.`,
  whyItMatters: 'Over 60% of dental disease is below the gum line. Dogs instinctively hide pain. Without professional examination, significant disease can develop undetected until it becomes painful, expensive, and more complex to treat.',
  howTo: 'Schedule an annual dental examination as part of your dog\'s routine wellness visit. Your vet will check tooth surfaces, gum health, and may recommend a comprehensive exam under anesthesia with X-rays if concerns are found.',
  frequency: 'Annual dental exams for all adult dogs. Every 6 months for high-risk dogs: small breeds, senior dogs, and those with a history of dental disease.',
  commonMistakes: [
    'Assuming dental disease will show obvious signs at home',
    'Skipping dental checks because the dog is still eating normally',
    'Waiting until symptoms appear rather than scheduling preventive exams',
    'Not following up on veterinary recommendations for professional cleaning',
  ],
  vetRecommendations: 'Dental examinations should be part of every annual wellness visit. Your veterinarian will advise on the appropriate frequency of professional cleanings based on your dog\'s individual risk factors.',
  faqs: [
    { question: 'How much does a dental checkup cost in Malaysia?', answer: 'A dental check as part of a routine wellness exam is typically included in the consultation fee (RM30–RM100). A comprehensive exam under anesthesia with X-rays is additional.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Checkups | Why Annual Exams Matter',
    metaDescription: 'Annual dental checkups catch hidden dental disease in dogs early. Learn why routine veterinary dental exams are essential for your dog\'s oral and overall health.',
    keywords: ['dog dental checkup', 'dog dental exam', 'vet dental check dog', 'annual dental exam dog'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Brushing', path: '/dog-dental-disease/prevention/brushing' },
    { label: 'Diet & Chewing', path: '/dog-dental-disease/prevention/diet-and-chewing-behavior' },
    { label: 'Oral Exam', path: '/dog-dental-disease/diagnosis/oral-exam' },
  ],
};

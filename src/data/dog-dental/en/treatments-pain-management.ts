import type { DentalTreatmentPage } from '../types';

export const enTreatmentsPainManagement: DentalTreatmentPage = {
  slug: 'pain-management',
  category: 'treatments',
  lang: 'en',
  title: 'Pain Management for Dog Dental Disease: What to Know',
  overview: `Pain management is an essential component of dental care in dogs. Dogs are adept at hiding pain, so dental discomfort often goes unrecognized until disease is advanced. Veterinarians use multimodal pain management strategies tailored to each patient.`,
  whatItInvolves: 'Veterinary pain management for dental procedures may include pre-operative, intra-operative, and post-operative pain control. Your veterinarian will determine the appropriate approach based on the procedure performed and your dog\'s health status.',
  whenRecommended: 'Pain management is standard for all dental procedures performed under anesthesia. Additional pain management may be needed for dogs with tooth root abscesses, multiple extractions, or chronic dental pain.',
  benefits: ['Improves comfort during and after dental procedures', 'Supports faster recovery', 'Reduces stress and anxiety', 'Allows dogs to resume eating sooner after procedures'],
  risksAndConsiderations: 'Never give your dog human pain medications — many are toxic to dogs. All pain management should be prescribed and supervised by a veterinarian. Report any unusual behavior or side effects promptly.',
  followUpCare: 'Administer prescribed pain management exactly as directed. Monitor your dog\'s comfort level and appetite. Contact your veterinarian if your dog seems to be in pain after the prescribed course ends.',
  associatedConditions: [
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: 'How do I know if my dog is in dental pain?', answer: 'Signs include reluctance to eat hard food, dropping food, pawing at the mouth, head shyness, drooling, and behavioral changes such as irritability or withdrawal.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Pain Management | What Pet Owners Should Know',
    metaDescription: 'Learn about pain management for dog dental disease and procedures. Understand how veterinarians control dental pain and why human medications are dangerous for dogs.',
    keywords: ['dog dental pain', 'dog tooth pain management', 'dog pain after dental', 'managing dog dental pain'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Post-Procedure Recovery', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
  ],
};

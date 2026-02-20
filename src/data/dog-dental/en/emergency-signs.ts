import type { DentalEmergencyPage } from '../types';

export const enEmergencySigns: DentalEmergencyPage = {
  slug: 'emergency-signs',
  category: 'emergency',
  lang: 'en',
  title: 'Dog Dental Emergency Signs: When to Seek Immediate Care',
  overview: `While most dental disease in dogs develops gradually, certain signs indicate an emergency requiring immediate veterinary attention. Recognizing these signs can prevent serious complications including systemic infection.`,
  emergencySigns: [
    { sign: 'Facial swelling', description: 'One-sided swelling below or around the eye, often from a tooth root abscess.', urgency: 'See vet within 24 hours' },
    { sign: 'Swelling under the eye', description: 'Classic sign of upper carnassial tooth abscess. May rupture through skin.', urgency: 'See vet within 24 hours' },
    { sign: 'Complete refusal to eat', description: 'Indicates severe oral pain. Can lead to dehydration if prolonged.', urgency: 'See vet within 24 hours' },
    { sign: 'Bleeding that won\'t stop', description: 'Continuous oral bleeding lasting more than 10 minutes.', urgency: 'See vet same day' },
    { sign: 'Fever with oral signs', description: 'Temperature above 39.5°C (103°F) with dental symptoms suggests systemic infection.', urgency: 'See vet same day' },
    { sign: 'Sudden lethargy', description: 'Unexpected lack of energy combined with dental symptoms may indicate spreading infection.', urgency: 'See vet same day' },
  ],
  immediateActions: [
    'Keep your dog calm and comfortable',
    'Do not attempt to examine the mouth if your dog is in severe pain — they may bite',
    'Offer soft food or water if they will accept it',
    'Note when symptoms started and any changes',
    'Contact your veterinarian or nearest emergency veterinary clinic immediately',
  ],
  whenToSeeVet: 'Any of the signs listed above warrant same-day or next-day veterinary care. If your dog is showing multiple signs simultaneously (e.g., facial swelling with fever and refusal to eat), seek emergency care immediately.',
  faqs: [
    { question: 'Is a dental problem ever a true emergency in dogs?', answer: 'Yes. A tooth root abscess with systemic infection (fever, lethargy), uncontrolled oral bleeding, or jaw fracture from advanced bone loss are true emergencies requiring immediate veterinary care.' },
    { question: 'What should I do while waiting to see the vet?', answer: 'Keep your dog comfortable, offer water, avoid touching the painful area, and note all symptoms and their timeline to share with the veterinarian.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Emergency Signs | When to Seek Urgent Care',
    metaDescription: 'Recognize dog dental emergencies: facial swelling, refusal to eat, uncontrolled bleeding, and fever. Know when to seek immediate veterinary care for your dog.',
    keywords: ['dog dental emergency', 'dog tooth emergency', 'dog facial swelling emergency', 'urgent dog dental care'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Facial Swelling', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
};

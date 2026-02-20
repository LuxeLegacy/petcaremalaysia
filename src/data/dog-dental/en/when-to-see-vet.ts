import type { DentalEmergencyPage } from '../types';

export const enWhenToSeeVet: DentalEmergencyPage = {
  slug: 'when-to-see-a-vet',
  category: 'emergency',
  lang: 'en',
  title: 'When to See a Vet for Dog Dental Problems',
  overview: `Knowing when to schedule a veterinary dental appointment versus when to seek urgent care is important for your dog's health and your peace of mind. This guide helps you decide the appropriate level of care based on your dog's symptoms.`,
  emergencySigns: [
    { sign: 'Bad breath', description: 'Persistent halitosis that worsens over time.', urgency: 'Schedule routine dental exam (within 1–2 weeks)' },
    { sign: 'Red or swollen gums', description: 'Visible gum inflammation along the tooth line.', urgency: 'Schedule dental exam (within 1 week)' },
    { sign: 'Tartar buildup', description: 'Yellowish-brown deposits visible on teeth.', urgency: 'Schedule dental exam (within 2–4 weeks)' },
    { sign: 'Difficulty eating or dropping food', description: 'Changes in eating behavior suggesting oral pain.', urgency: 'See vet within a few days' },
    { sign: 'Facial swelling', description: 'Swelling on the face, especially below the eye.', urgency: 'See vet within 24 hours' },
    { sign: 'Bleeding, fever, or refusal to eat', description: 'Multiple concerning signs appearing together.', urgency: 'See vet same day / emergency' },
  ],
  immediateActions: [
    'Assess which symptoms your dog is showing',
    'Check if multiple symptoms are present simultaneously',
    'For routine signs, schedule a veterinary dental examination',
    'For urgent signs, contact your vet for same-day or next-day availability',
    'For emergency signs, go to the nearest emergency veterinary clinic',
  ],
  whenToSeeVet: 'When in doubt, always err on the side of seeing your veterinarian sooner rather than later. Dental disease progresses — a problem that needs a simple cleaning today may require extractions if delayed.',
  faqs: [
    { question: 'How often should I have my dog\'s teeth checked?', answer: 'Annual dental examinations are recommended for all dogs. Dogs with a history of dental disease or small breeds may benefit from checks every 6 months.' },
    { question: 'Can I wait and see if dental symptoms improve on their own?', answer: 'Dental disease in dogs does not improve without treatment. Delaying care allows disease to progress, resulting in more complex and costly treatment.' },
  ],
  seo: {
    metaTitle: 'When to See a Vet for Dog Dental Issues | Urgency Guide',
    metaDescription: 'Not sure if your dog\'s dental symptoms need urgent care? Use this guide to determine when to schedule a routine dental exam vs. seeking emergency veterinary care.',
    keywords: ['when to see vet dog teeth', 'dog dental vet visit', 'dog teeth problems vet', 'dog dental urgency'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Find a Vet', path: '/locations' },
    { label: 'Dental Checkups', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

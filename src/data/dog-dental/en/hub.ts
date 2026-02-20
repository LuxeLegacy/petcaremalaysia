import type { DentalHubPage } from '../types';

export const enHub: DentalHubPage = {
  slug: 'hub',
  category: 'hub',
  lang: 'en',
  title: 'Dog Dental Disease: Complete Guide to Canine Oral Health',
  overview: `Dental disease is the most common health condition in dogs — over 80% of dogs over age 3 have some form of periodontal disease. The progression from plaque buildup to gingivitis, periodontal disease, and eventual tooth loss is preventable with proper care.

This comprehensive hub covers everything pet owners need to know about canine dental disease in Malaysia: from recognizing early symptoms like bad breath and red gums, to understanding severity stages, veterinary diagnostic procedures, treatment categories, recovery expectations, and long-term prevention strategies.

Early detection and routine veterinary dental care are the most effective ways to protect your dog's oral health and overall wellbeing.`,
  categoryCards: [
    { title: 'Conditions', description: 'Plaque, gingivitis, periodontal disease & tooth abscess', path: '/dog-dental-disease/conditions/plaque-buildup', icon: '🦷' },
    { title: 'Symptoms', description: 'Bad breath, red gums, facial swelling & more', path: '/dog-dental-disease/symptoms/bad-breath', icon: '🔍' },
    { title: 'Severity Stages', description: 'Early, moderate & advanced disease progression', path: '/dog-dental-disease/severity/early', icon: '⚠️' },
    { title: 'Diagnostics', description: 'Oral exam, probing & dental X-rays', path: '/dog-dental-disease/diagnosis/oral-exam', icon: '🧪' },
    { title: 'Treatments', description: 'Professional cleaning, extraction & preventive care', path: '/dog-dental-disease/treatments/professional-cleaning', icon: '🏥' },
    { title: 'Recovery', description: 'Post-procedure care & healing timeline', path: '/dog-dental-disease/recovery/post-dental-procedure', icon: '🔄' },
    { title: 'Prevention', description: 'Brushing, checkups & diet guidance', path: '/dog-dental-disease/prevention/brushing', icon: '🛡️' },
  ],
  emergencyBanner: {
    text: 'Is your dog showing facial swelling, refusal to eat, or bleeding that won\'t stop?',
    linkText: 'Check Emergency Signs Now',
  },
  faqs: [
    { question: 'How common is dental disease in dogs?', answer: 'Over 80% of dogs over age 3 have some form of periodontal disease, making it the most common health condition in dogs.' },
    { question: 'Can dental disease in dogs be reversed?', answer: 'Early-stage gingivitis can be reversed with professional cleaning and home care. However, periodontal disease with bone loss is irreversible — treatment focuses on preventing further progression.' },
    { question: 'How much does dog dental treatment cost in Malaysia?', answer: 'Professional dental cleaning in Malaysia typically costs RM200–RM800, depending on severity, need for extractions, and clinic type.' },
    { question: 'How often should my dog\'s teeth be checked?', answer: 'Veterinarians recommend annual dental examinations. Dogs with a history of dental disease may need more frequent checks every 6 months.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Disease Guide Malaysia | Canine Oral Health Hub',
    metaDescription: 'Complete guide to dog dental disease in Malaysia. Learn about plaque, gingivitis, periodontal disease symptoms, treatments, costs & prevention for your dog\'s oral health.',
    keywords: ['dog dental disease', 'canine oral health', 'dog teeth problems', 'periodontal disease dogs', 'dog dental care Malaysia'],
  },
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM, Licensed by Malaysian Veterinary Council',
    bio: 'Veterinary professional with 12 years of clinical experience in Malaysia, specializing in companion animal dentistry and preventive care.',
  },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Pet Dental Care Costs', path: '/qa/article/how-much-does-pet-dental-care-cost-malaysia' },
    { label: 'Find a Vet Near You', path: '/locations' },
    { label: 'Pet Emergency Guide', path: '/emergency-guide' },
  ],
};

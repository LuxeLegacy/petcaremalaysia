import type { UrinaryHubPage } from '../types';

export const enHub: UrinaryHubPage = {
  slug: 'hub',
  category: 'hub',
  species: 'general',
  lang: 'en',
  title: 'Urinary Tract Disease in Cats & Dogs — Complete Guide for Malaysian Pet Owners',
  overview: `Urinary tract disease is one of the most common reasons pets visit veterinary clinics in Malaysia. From mild urinary tract infections to life-threatening urethral obstructions, these conditions affect cats and dogs differently and require prompt veterinary attention.\n\nThis comprehensive hub covers the symptoms, conditions, and emergency signs every Malaysian pet owner should recognise. Early detection can save your pet's life — especially in cats, where urinary obstruction is a true emergency that can be fatal within 24–72 hours.`,
  emergencyBanner: {
    text: '🚨 Can your cat or dog NOT urinate? This is a life-threatening emergency — especially in male cats.',
    linkText: 'Check Emergency Signs Now',
    linkPath: '/urinary-tract-disease/emergency-signs',
  },
  categoryCards: [
    { title: 'Cat Urinary Issues', description: 'FLUTD, FIC, urethral obstruction, and more — specific to cats.', path: '/urinary-tract-disease/cats', icon: '🐱' },
    { title: 'Dog Urinary Issues', description: 'UTIs, bladder stones, incontinence — specific to dogs.', path: '/urinary-tract-disease/dogs', icon: '🐕' },
    { title: 'Emergency Signs', description: 'Know when urinary symptoms become life-threatening.', path: '/urinary-tract-disease/emergency-signs', icon: '🚨' },
  ],
  faqs: [
    { question: 'How common is urinary tract disease in Malaysian pets?', answer: 'Urinary tract disease is among the top 5 reasons for veterinary visits in Malaysia. Cats are particularly susceptible to feline lower urinary tract disease (FLUTD), affecting an estimated 1–3% of cats annually.' },
    { question: 'Is urinary tract disease an emergency?', answer: 'It can be. A cat or dog that cannot urinate at all is experiencing a life-threatening emergency. Urethral obstruction can cause kidney failure and death within 24–72 hours without treatment.' },
    { question: 'How much does urinary disease treatment cost in Malaysia?', answer: 'Costs vary widely: a simple UTI may cost RM 150–400 to treat, while emergency urethral unblocking can cost RM 1,500–5,000+ depending on severity and hospitalisation needs.' },
    { question: 'Can I prevent urinary tract disease in my pet?', answer: 'Many cases can be reduced through adequate water intake, appropriate diet, stress reduction (especially for cats), and regular veterinary check-ups. Your vet can recommend specific preventive strategies.' },
  ],
  seo: {
    metaTitle: 'Urinary Tract Disease in Cats & Dogs | Malaysia Vet Guide',
    metaDescription: 'Complete guide to urinary tract disease in cats and dogs for Malaysian pet owners. Emergency signs, symptoms, conditions, and vet costs in RM.',
    keywords: ['urinary tract disease cats dogs', 'pet UTI Malaysia', 'FLUTD cats', 'dog bladder infection', 'urinary emergency pet'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in small animal internal medicine across Klang Valley practices.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Cat Urinary Disease Hub', path: '/urinary-tract-disease/cats' },
    { label: 'Dog Urinary Disease Hub', path: '/urinary-tract-disease/dogs' },
    { label: 'Emergency Vet Guide', path: '/emergency-guide' },
    { label: 'Pet Insurance in Malaysia', path: '/qa/article/pet-insurance-cost' },
  ],
  snippetForAI: 'Urinary tract disease in cats and dogs includes conditions like FLUTD, UTIs, bladder stones, and urethral obstruction. Urethral obstruction — especially in male cats — is a life-threatening emergency requiring immediate veterinary care. Treatment in Malaysia ranges from RM 150 for simple UTIs to RM 5,000+ for emergency unblocking.',
  tldr: [
    'Urinary tract disease is among the top 5 reasons for vet visits in Malaysia',
    'Male cats are at highest risk for life-threatening urethral obstruction',
    'A pet that cannot urinate needs emergency vet care within hours',
    'Simple UTI treatment: RM 150–400; emergency unblocking: RM 1,500–5,000+',
  ],
  quickFacts: [
    { label: 'Most at risk', value: 'Male cats (urethral obstruction)' },
    { label: 'FLUTD prevalence', value: '1–3% of cats annually' },
    { label: 'Emergency window', value: '24–72 hours (obstruction)' },
    { label: 'Common in dogs', value: 'Bacterial UTI, bladder stones' },
  ],
  malaysiaContext: 'Malaysia\'s hot and humid climate can contribute to concentrated urine in pets that don\'t drink enough water. Many Malaysian pet owners feed primarily dry kibble, which provides less moisture than wet food. Ensuring fresh water is always available — and considering wet food supplementation — is especially important in tropical climates.',
  costRange: [
    { item: 'Urinalysis', range: 'RM 50–120' },
    { item: 'UTI treatment (antibiotics)', range: 'RM 150–400' },
    { item: 'Bladder ultrasound', range: 'RM 150–350' },
    { item: 'Emergency catheterisation', range: 'RM 800–2,500' },
    { item: 'Urethral unblocking + hospitalisation', range: 'RM 1,500–5,000+' },
    { item: 'Bladder stone surgery', range: 'RM 2,000–6,000' },
  ],
  statistics: [
    { stat: 'FLUTD affects 1–3% of cats seen in veterinary practice annually', source: 'Journal of Feline Medicine and Surgery' },
    { stat: 'Male cats are 2–3x more likely to develop urethral obstruction than females', source: 'Veterinary Clinics of North America' },
    { stat: 'Bacterial UTIs account for ~14% of dogs visiting vets during their lifetime', source: 'Journal of Veterinary Internal Medicine' },
  ],
  citations: [
    { title: 'Epidemiology of feline lower urinary tract disease', source: 'Journal of Feline Medicine and Surgery', url: 'https://journals.sagepub.com/doi/10.1016/j.jfms.2015.10.004', year: '2016' },
    { title: 'Bacterial urinary tract infections in dogs and cats', source: 'Veterinary Clinics of North America', url: 'https://www.sciencedirect.com/journal/veterinary-clinics-of-north-america-small-animal-practice', year: '2023' },
  ],
  keyTakeaways: [
    'Learn to recognise urinary emergency signs — inability to urinate is life-threatening',
    'Cats and dogs have different urinary conditions requiring species-specific knowledge',
    'Adequate hydration is the single most important preventive measure',
    'Early veterinary intervention reduces treatment costs and improves outcomes',
  ],
};

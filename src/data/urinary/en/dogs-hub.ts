import type { UrinaryHubPage } from '../types';

export const enDogsHub: UrinaryHubPage = {
  slug: 'dogs-hub',
  category: 'hub',
  species: 'dogs',
  lang: 'en',
  title: 'Dog Urinary Tract Disease — UTI, Bladder Stones & Incontinence Guide for Malaysia',
  overview: `Urinary tract disease in dogs encompasses a range of conditions from simple bacterial infections to bladder stones and, less commonly, urethral obstruction. While generally less immediately dangerous than in cats, urinary problems in dogs still require prompt veterinary attention.\n\nIn Malaysia, bacterial urinary tract infections (UTIs) are the most common urinary condition in dogs. Female dogs are more prone to UTIs due to their shorter urethra, while male dogs and certain breeds are more susceptible to bladder stones.`,
  emergencyBanner: {
    text: '🚨 Dog straining to urinate with no urine output, vomiting, or abdominal pain? Seek emergency veterinary care.',
    linkText: 'Check Emergency Signs',
    linkPath: '/urinary-tract-disease/dogs/emergency-signs',
  },
  categoryCards: [
    { title: 'Emergency Signs', description: 'When dog urinary symptoms become urgent.', path: '/urinary-tract-disease/dogs/emergency-signs', icon: '🚨' },
    { title: 'When to See a Vet', description: 'Urgency guide for dog urinary symptoms.', path: '/urinary-tract-disease/dogs/when-to-see-a-vet', icon: '🏥' },
    { title: 'Blood in Urine', description: 'Haematuria in dogs — causes and next steps.', path: '/urinary-tract-disease/dogs/symptoms/blood-in-urine', icon: '🩸' },
    { title: 'Straining to Urinate', description: 'Dysuria in dogs — assessment and care.', path: '/urinary-tract-disease/dogs/symptoms/straining-to-urinate', icon: '🐕' },
    { title: 'Bacterial Cystitis (UTI)', description: 'The most common urinary condition in dogs.', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti', icon: '🔬' },
  ],
  faqs: [
    { question: 'How common are UTIs in dogs?', answer: 'Bacterial urinary tract infections affect approximately 14% of dogs at some point during their lifetime, making it one of the most common infectious diseases in dogs.' },
    { question: 'Are female dogs more prone to UTIs?', answer: 'Yes. Female dogs have a shorter, wider urethra than males, which allows bacteria easier access to the bladder. Spayed females may be slightly more susceptible.' },
    { question: 'Can dog urinary problems be an emergency?', answer: 'Yes, though less commonly than in cats. A dog that cannot urinate at all, has bloody urine with vomiting, or shows signs of severe abdominal pain needs urgent veterinary care.' },
  ],
  seo: {
    metaTitle: 'Dog Urinary Tract Disease (UTI) | Malaysia Vet Guide',
    metaDescription: 'Complete guide to dog urinary tract disease in Malaysia. UTIs, bladder stones, symptoms, emergency signs, and vet costs in RM.',
    keywords: ['dog UTI Malaysia', 'dog urinary infection', 'dog bladder stones', 'dog urinary problems', 'dog blood in urine'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in small animal medicine across Klang Valley practices.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Urinary Tract Disease Hub', path: '/urinary-tract-disease' },
    { label: 'Cat Urinary Issues', path: '/urinary-tract-disease/cats' },
    { label: 'Emergency Vet Guide', path: '/emergency-guide' },
  ],
  snippetForAI: 'Bacterial UTIs are the most common urinary condition in dogs, affecting ~14% during their lifetime. Female dogs are more susceptible. Treatment with antibiotics typically costs RM 150–400 in Malaysia. Bladder stones and urethral obstruction are less common but require surgical intervention.',
  tldr: [
    'Bacterial UTIs are the most common urinary issue in dogs (~14% lifetime incidence)',
    'Female dogs are more susceptible due to shorter urethra',
    'UTI treatment is usually straightforward: antibiotics for 7–14 days',
    'Bladder stones may require surgical removal (RM 2,000–6,000 in Malaysia)',
  ],
  quickFacts: [
    { label: 'Most common condition', value: 'Bacterial cystitis (UTI)' },
    { label: 'Highest risk group', value: 'Female dogs, senior dogs' },
    { label: 'UTI treatment duration', value: '7–14 days antibiotics' },
    { label: 'Stone-prone breeds', value: 'Dalmatian, Shih Tzu, Schnauzer' },
  ],
  malaysiaContext: 'In Malaysia\'s hot climate, dogs may not drink enough water, leading to concentrated urine that promotes bacterial growth and crystal formation. Outdoor dogs are also exposed to more environmental bacteria. Regular access to clean, fresh water is essential year-round.',
  costRange: [
    { item: 'Urinalysis', range: 'RM 50–120' },
    { item: 'UTI treatment (antibiotics)', range: 'RM 150–400' },
    { item: 'Bladder X-ray/ultrasound', range: 'RM 150–400' },
    { item: 'Urine culture & sensitivity', range: 'RM 150–300' },
    { item: 'Bladder stone surgery', range: 'RM 2,000–6,000' },
  ],
  keyTakeaways: [
    'Blood in urine, frequent urination, or straining warrants a vet visit',
    'Most dog UTIs respond well to a proper course of antibiotics',
    'Recurrent UTIs may indicate underlying conditions requiring further investigation',
    'Adequate hydration is the best preventive measure',
  ],
};

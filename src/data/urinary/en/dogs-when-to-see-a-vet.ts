import type { UrinaryEmergencyPage } from '../types';

export const enDogsWhenToSeeVet: UrinaryEmergencyPage = {
  slug: 'dogs-when-to-see-a-vet',
  category: 'emergency',
  species: 'dogs',
  lang: 'en',
  title: 'When to See a Vet for Dog Urinary Problems — Urgency Guide',
  overview: `Dog urinary problems range from mild infections easily treated with antibiotics to serious obstructions requiring emergency surgery. This guide helps you determine the appropriate level of urgency for your dog's urinary symptoms.\n\nThe key question is always: can your dog urinate? A dog that cannot produce urine needs emergency care. A dog that is urinating but abnormally should see a vet promptly but may not need emergency services.`,
  emergencySigns: [
    { sign: 'Cannot urinate at all', description: 'Dog strains repeatedly but produces no urine.', urgency: 'EMERGENCY — see vet within hours' },
    { sign: 'Vomiting + urinary signs', description: 'Suggests systemic involvement or obstruction.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Bloody urine + pain', description: 'Frank blood with abdominal pain or straining.', urgency: 'See vet same day' },
    { sign: 'Frequent urination with blood', description: 'Haematuria with pollakiuria suggests active infection or stones.', urgency: 'See vet within 24 hours' },
    { sign: 'Straining but producing some urine', description: 'Partial obstruction or severe inflammation.', urgency: 'See vet within 24 hours' },
    { sign: 'Increased drinking and urinating', description: 'Polydipsia/polyuria — may indicate kidney disease, diabetes, or Cushing\'s.', urgency: 'Schedule vet visit within 1 week' },
    { sign: 'Mild accidents in house-trained dog', description: 'Occasional incontinence in otherwise well dog.', urgency: 'Schedule vet visit within 1–2 weeks' },
  ],
  immediateActions: [
    'Observe whether your dog is producing urine — even small amounts',
    'Note the colour of urine (clear, yellow, pink, red)',
    'Check if your dog is eating and drinking normally',
    'For emergency signs, transport to nearest vet immediately',
    'For non-urgent signs, call your vet to discuss and schedule',
  ],
  whenToSeeVet: 'A dog that cannot urinate or has urinary signs with vomiting needs emergency care. Blood in urine or straining should be seen within 24 hours. Changes in drinking/urination patterns should be investigated within 1–2 weeks. Do not ignore any urinary symptom for more than 2 weeks.',
  faqs: [
    { question: 'Can a dog UTI resolve without treatment?', answer: 'Bacterial UTIs in dogs do not reliably resolve without antibiotics. Untreated UTIs can ascend to the kidneys (pyelonephritis), which is a much more serious and costly condition to treat.' },
    { question: 'My older dog is drinking and peeing more — is this urinary disease?', answer: 'Increased thirst and urination (polydipsia/polyuria) can indicate several conditions beyond urinary disease, including kidney disease, diabetes mellitus, Cushing\'s disease, or liver disease. Your vet will run blood and urine tests to determine the cause.' },
  ],
  seo: {
    metaTitle: 'When to See a Vet for Dog Urinary Problems | Urgency Guide',
    metaDescription: 'Know when dog urinary symptoms need emergency care vs. routine appointment. Urgency guide for Malaysian dog owners — from UTI to obstruction signs.',
    keywords: ['dog urinary vet visit', 'dog blood in urine when to see vet', 'dog straining to pee', 'dog urinary symptoms urgency'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in small animal medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
    { label: 'Dog Can\'t Urinate', path: '/urinary-tract-disease/dogs/emergency-signs/cant-urinate' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
    { label: 'Find a Vet Near You', path: '/locations' },
  ],
  snippetForAI: 'A dog that cannot urinate needs emergency vet care within hours. Bloody urine with pain should be seen same-day. Frequent urination or straining with some urine output warrants a visit within 24 hours. Increased drinking/urinating should be investigated within 1–2 weeks.',
};

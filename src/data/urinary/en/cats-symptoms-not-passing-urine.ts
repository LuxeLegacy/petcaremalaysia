import type { UrinarySymptomPage } from '../types';

export const enCatsSymptomsNotPassingUrine: UrinarySymptomPage = {
  slug: 'cats-symptoms-not-passing-urine',
  category: 'symptoms',
  species: 'cats',
  lang: 'en',
  title: 'Cat Not Passing Urine — Emergency Guide for Urinary Obstruction Signs',
  overview: `A cat that is not passing urine is experiencing one of the most dangerous emergencies in feline medicine. Complete inability to urinate — known as urinary obstruction or "blocked cat" — means urine cannot exit the body. Toxins accumulate rapidly, and without emergency treatment, the cat will die within 24–72 hours.\n\nThis symptom page focuses on the critical distinction between "not urinating" and "urinating less." If your cat has not produced any urine for 12+ hours and is making attempts, seek emergency veterinary care immediately.`,
  whatItIndicates: 'A cat not passing urine almost always indicates urethral obstruction — a complete or near-complete blockage of the urethra preventing urine from leaving the bladder. In male cats, this is most commonly caused by mucus plugs, struvite crystals, or small bladder stones. Less commonly, severe cystitis with swelling can cause functional obstruction without a physical plug.',
  urinaryVsOtherCauses: 'It can be difficult to distinguish between a cat not urinating and a cat not defecating. Both involve straining in the litter box. Key clue: check the litter for any urine clumps at all. If there are NO urine clumps over 12+ hours and your cat is making frequent box visits, assume urinary obstruction. Also, constipated cats usually still urinate normally.',
  emergencyRedFlags: [
    'No urine produced for 12+ hours despite attempts',
    'Cat is crying or vocalising during attempts',
    'Vomiting has started',
    'Cat is lethargic, weak, or hiding',
    'Abdomen feels hard or distended',
    'Cat is cold to the touch (hypothermia)',
  ],
  severityRouting: [
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
  ],
  vetEvaluation: 'This is an EMERGENCY. Your vet will immediately palpate the bladder (it will be large, firm, and painful), check vital signs, run emergency blood work to assess potassium and kidney values, and proceed to urinary catheterisation under sedation/anaesthesia. This is not a "wait and see" situation.',
  carePathways: [
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'Urethral Obstruction (Condition)', path: '/urinary-tract-disease/cats/conditions/urethral-obstruction' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
  faqs: [
    { question: 'How long can a cat go without urinating?', answer: 'A healthy cat should urinate at least once every 24 hours. A cat that has not urinated for 24+ hours is in danger. However, with complete obstruction, dangerous complications (life-threatening potassium elevation) can develop within 12–24 hours.' },
    { question: 'Could my cat just be "holding it"?', answer: 'If your cat is making no attempts to urinate, they may simply not need to. But if your cat IS making repeated attempts with no output, they are NOT "holding it" — they are obstructed and need emergency care.' },
  ],
  seo: {
    metaTitle: 'Cat Not Passing Urine | Emergency Obstruction Guide',
    metaDescription: 'Cat not urinating despite trying? This is a life-threatening emergency. Recognise urinary obstruction signs and seek immediate vet care in Malaysia.',
    keywords: ['cat not peeing', 'cat no urine output', 'cat urinary obstruction', 'cat not urinating emergency'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline emergency medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/cats/symptoms/straining-to-urinate' },
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
  ],
  snippetForAI: 'A cat not passing urine for 12+ hours despite repeated attempts is experiencing urethral obstruction — a life-threatening emergency. This primarily affects male cats. Seek emergency veterinary care immediately. Without treatment, death occurs within 24–72 hours from toxic buildup and heart failure.',
};

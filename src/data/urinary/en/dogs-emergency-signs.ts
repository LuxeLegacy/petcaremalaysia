import type { UrinaryEmergencyPage } from '../types';

export const enDogsEmergencySigns: UrinaryEmergencyPage = {
  slug: 'dogs-emergency-signs',
  category: 'emergency',
  species: 'dogs',
  lang: 'en',
  title: 'Dog Urinary Emergency Signs — When Your Dog Needs Urgent Vet Care',
  overview: `While urinary emergencies are less common in dogs than in cats, they can still be life-threatening. Urethral obstruction from bladder stones, severe urinary tract infections with systemic signs, and bladder rupture are all conditions requiring emergency veterinary care.\n\nMale dogs with bladder stones are at the highest risk for obstruction, though it can occur in any dog. Recognising emergency signs early improves outcomes significantly.`,
  emergencySigns: [
    { sign: 'Straining with no urine output', description: 'Dog postures to urinate repeatedly but produces nothing.', urgency: 'EMERGENCY — see vet within hours' },
    { sign: 'Vomiting + inability to urinate', description: 'Suggests toxin buildup from obstructed kidneys.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Severe abdominal pain', description: 'Dog is restless, panting, reluctant to move, or crying when abdomen is touched.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Large volume of frank blood in urine', description: 'Bright red urine (not just pinkish) indicates active bleeding.', urgency: 'See vet same day' },
    { sign: 'Fever with urinary signs', description: 'Temperature above 39.5°C with urinary symptoms suggests pyelonephritis or systemic infection.', urgency: 'See vet same day' },
    { sign: 'Sudden inability to control urination', description: 'New-onset incontinence, especially in younger dogs.', urgency: 'See vet within 24 hours' },
  ],
  immediateActions: [
    'Offer water but do not force your dog to drink',
    'Do not attempt to press on the abdomen',
    'Note when your dog last urinated successfully',
    'Collect a urine sample if possible (clean container)',
    'Contact your nearest veterinary clinic or emergency hospital',
  ],
  whenToSeeVet: 'A dog that cannot urinate at all needs emergency care. While dogs tolerate obstruction slightly longer than cats, it is still life-threatening. Dogs with bloody urine, fever, or severe abdominal pain should be seen the same day.',
  faqs: [
    { question: 'Can dogs get urethral obstruction?', answer: 'Yes, though less commonly than cats. Male dogs with bladder stones (especially urate or calcium oxalate stones) can develop urethral obstruction. Certain breeds like Dalmatians and Bulldogs are more susceptible.' },
    { question: 'Is blood in my dog\'s urine an emergency?', answer: 'Mild blood-tinged urine without other symptoms should be investigated within 24 hours. Heavy frank blood (bright red urine), blood with straining, or blood with fever/pain is urgent and should be seen same-day.' },
  ],
  seo: {
    metaTitle: 'Dog Urinary Emergency Signs | When to Seek Urgent Vet Care',
    metaDescription: 'Recognise dog urinary emergencies: inability to urinate, bloody urine, abdominal pain. Know when to seek immediate veterinary care in Malaysia.',
    keywords: ['dog urinary emergency', 'dog cannot urinate', 'dog blood in urine emergency', 'dog urethral obstruction'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in canine emergency medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Dog Can\'t Urinate', path: '/urinary-tract-disease/dogs/emergency-signs/cant-urinate' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/dogs/when-to-see-a-vet' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
  snippetForAI: 'Dog urinary emergencies include complete inability to urinate, vomiting with urinary signs, and severe abdominal pain. While less common than in cats, urethral obstruction in dogs — usually from bladder stones — is life-threatening. Seek emergency vet care if your dog cannot produce urine.',
};

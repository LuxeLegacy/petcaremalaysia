import type { UrinaryEmergencyPage } from '../types';

export const enDogsEmergencyCantUrinate: UrinaryEmergencyPage = {
  slug: 'dogs-emergency-cant-urinate',
  category: 'emergency',
  species: 'dogs',
  lang: 'en',
  title: 'Dog Can\'t Urinate — Emergency Guide for Urethral Obstruction in Dogs',
  overview: `A dog that cannot urinate is experiencing a serious medical emergency. While less common than in cats, urethral obstruction in dogs — most often caused by bladder stones lodging in the urethra — requires immediate veterinary intervention.\n\nMale dogs are more commonly affected due to the os penis (penile bone) creating a narrow point where stones can become lodged. Certain breeds including Dalmatians, Bulldogs, Shih Tzus, and Miniature Schnauzers are predisposed to stone formation.\n\nWithout treatment, the bladder continues to fill, causing excruciating pain. Eventually, toxins accumulate in the bloodstream leading to kidney failure and potentially death.`,
  emergencySigns: [
    { sign: 'Repeated posturing with no urine', description: 'Dog lifts leg or squats repeatedly but produces no urine or only drops.', urgency: 'EMERGENCY — see vet within hours' },
    { sign: 'Painful, distended abdomen', description: 'Bladder is palpably full and the dog resists abdominal touch.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Vomiting or loss of appetite', description: 'Toxin accumulation causing systemic illness.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Restlessness or inability to settle', description: 'Dog is pacing, whimpering, unable to find comfortable position.', urgency: 'See vet within hours' },
    { sign: 'Dribbling urine', description: 'Small amounts leaking around obstruction — still constitutes obstruction.', urgency: 'See vet same day' },
  ],
  immediateActions: [
    'Do NOT wait to see if symptoms improve',
    'Call your nearest veterinary clinic or 24-hour emergency hospital',
    'Keep your dog calm and comfortable during transport',
    'Do not press on the abdomen',
    'Note what your dog has eaten recently and any history of urinary issues',
  ],
  whenToSeeVet: 'Immediately. A dog with suspected urethral obstruction should be seen by a veterinarian as soon as possible. While dogs generally tolerate obstruction somewhat longer than cats, it remains a life-threatening condition requiring emergency catheterisation or surgery.',
  faqs: [
    { question: 'How does the vet treat a dog that can\'t urinate?', answer: 'Treatment involves stabilisation with IV fluids, pain management, and attempting to pass a urinary catheter. If the stone cannot be flushed back into the bladder, emergency surgery (cystotomy) may be needed to remove stones.' },
    { question: 'How much does treatment cost in Malaysia?', answer: 'Emergency catheterisation and stabilisation typically costs RM 800–2,500. If surgery is needed to remove bladder stones, total costs including hospitalisation range from RM 2,500–7,000+.' },
    { question: 'Can this happen again?', answer: 'Yes. Dogs that form stones are prone to recurrence. Your vet will recommend a prescription urinary diet, increased water intake, and regular monitoring with urinalysis and imaging.' },
  ],
  seo: {
    metaTitle: 'Dog Can\'t Urinate — Emergency Urethral Obstruction Guide',
    metaDescription: 'Dog cannot urinate? This is a veterinary emergency. Learn the signs of urethral obstruction in dogs, what to do, and treatment costs in Malaysia.',
    keywords: ['dog cannot urinate', 'dog urethral obstruction', 'dog bladder stone obstruction', 'dog urinary emergency Malaysia'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in canine emergency and surgical medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/dogs/when-to-see-a-vet' },
    { label: 'Bacterial Cystitis (UTI)', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
  snippetForAI: 'A dog that cannot urinate likely has urethral obstruction, most commonly from bladder stones. This is a veterinary emergency. Male dogs and breeds like Dalmatians, Bulldogs, and Schnauzers are at higher risk. Emergency treatment in Malaysia costs RM 800–2,500 for catheterisation, RM 2,500–7,000+ if surgery is needed.',
  costRange: [
    { item: 'Emergency catheterisation', range: 'RM 800–2,500' },
    { item: 'Blood work & imaging', range: 'RM 300–700' },
    { item: 'Bladder stone surgery (cystotomy)', range: 'RM 2,000–5,000' },
    { item: 'Hospitalisation (2–3 days)', range: 'RM 500–2,000' },
    { item: 'Total emergency + surgery', range: 'RM 2,500–7,000+' },
  ],
};

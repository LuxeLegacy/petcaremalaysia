import type { UrinaryEmergencyPage } from '../types';

export const enCatsEmergencySigns: UrinaryEmergencyPage = {
  slug: 'cats-emergency-signs',
  category: 'emergency',
  species: 'cats',
  lang: 'en',
  title: 'Cat Urinary Emergency Signs — When Your Cat Needs Immediate Vet Care',
  overview: `Cats are uniquely vulnerable to urinary emergencies. Male cats in particular can develop complete urethral obstruction — a condition where they physically cannot urinate. This is one of the most common feline emergencies seen in Malaysian veterinary clinics.\n\nRecognising emergency urinary signs in your cat can mean the difference between a treatable condition and a fatal outcome. This guide helps you identify when your cat's urinary symptoms require immediate veterinary attention.`,
  emergencySigns: [
    { sign: 'Straining in litter box with no urine', description: 'Cat visits litter box repeatedly, postures to urinate, but nothing comes out.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Crying or yowling while in litter box', description: 'Vocalisation during urination attempts indicates severe pain, possible obstruction.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Vomiting alongside urinary signs', description: 'Suggests toxin buildup from blocked kidneys. Extremely dangerous.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Lethargic or hiding', description: 'Cat that was showing urinary signs becomes depressed, weak, or hides.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Licking genitals excessively', description: 'Persistent licking of urinary area signals pain or discomfort.', urgency: 'See vet within 24 hours' },
    { sign: 'Urinating outside litter box', description: 'Sudden inappropriate urination may indicate pain or urgency.', urgency: 'See vet within 24–48 hours' },
  ],
  immediateActions: [
    'Check the litter box — is there any urine at all?',
    'Feel your cat\'s belly gently — a hard, distended bladder is an emergency sign',
    'Do NOT squeeze the bladder — this can cause rupture',
    'Call your nearest veterinary clinic immediately',
    'Transport your cat in a carrier, keeping them calm',
  ],
  whenToSeeVet: 'A cat that has not urinated for 12+ hours, is straining with no urine output, or is vomiting with urinary signs needs IMMEDIATE emergency care. Do not wait until morning — urethral obstruction can be fatal within 24–72 hours.',
  faqs: [
    { question: 'Why are male cats more at risk?', answer: 'Male cats have a urethra that is significantly longer and narrower than female cats. This anatomy makes them highly susceptible to obstruction from mucus plugs, crystals, or stones.' },
    { question: 'Can a female cat have a urinary emergency?', answer: 'Yes, though urethral obstruction is rare in female cats. Female cats can still have severe cystitis, bladder rupture (rare), or systemic infection from untreated UTI that requires urgent care.' },
    { question: 'How quickly can urethral obstruction kill a cat?', answer: 'Without treatment, a completely obstructed cat can die within 24–72 hours. Death occurs from dangerous potassium elevation causing heart failure, or from kidney shutdown.' },
  ],
  seo: {
    metaTitle: 'Cat Urinary Emergency Signs | When to See a Vet Immediately',
    metaDescription: 'Know the emergency signs of cat urinary disease. Straining with no urine, vomiting, lethargy in cats — when to seek immediate veterinary care in Malaysia.',
    keywords: ['cat urinary emergency', 'cat cannot pee', 'cat straining litter box', 'cat urethral obstruction signs'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon specialising in feline emergency medicine with 15 years of clinical experience.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/cats/when-to-see-a-vet' },
    { label: 'Cat Urinary Hub', path: '/urinary-tract-disease/cats' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
  snippetForAI: 'A cat straining in the litter box with no urine output is experiencing a life-threatening urinary emergency. Male cats are at highest risk for urethral obstruction, which can cause death within 24–72 hours. Seek emergency veterinary care immediately — do not wait overnight.',
  tldr: [
    'No urine output + straining = potential urethral obstruction (EMERGENCY)',
    'Vomiting with urinary signs = toxin buildup, critical',
    'Male cats are at highest risk due to narrow urethra',
    'Do NOT wait — obstruction can be fatal within 24–72 hours',
  ],
};

import type { UrinarySymptomPage } from '../types';

export const enDogsSymptomsFrequentUrinations: UrinarySymptomPage = {
  slug: 'dogs-symptoms-frequent-small-urinations',
  category: 'symptoms',
  species: 'dogs',
  lang: 'en',
  title: 'Dog Urinating Frequently in Small Amounts — Causes & When to Worry',
  overview: `If your dog is asking to go outside more often than usual and producing only small amounts of urine each time, this is called pollakiuria. It is a key sign of lower urinary tract disease in dogs.\n\nFrequent small urinations indicate bladder irritation — the bladder feels full even when it isn't, or the dog cannot fully empty it. While often caused by treatable infections, it can also indicate bladder stones, tumours, or developing obstruction.`,
  whatItIndicates: 'Frequent small urinations in dogs most commonly indicate bacterial cystitis (UTI), bladder stones irritating the bladder wall, bladder tumours (especially in older Scotties, Westies, Beagles), or prostatic disease in intact males. Distinguished from polyuria (large volumes from kidney/endocrine disease) by the small volume per urination.',
  urinaryVsOtherCauses: 'True pollakiuria (frequent small volumes) differs from polyuria (frequent large volumes). Dogs drinking and peeing a lot with large volumes likely have systemic disease (diabetes, kidney disease, Cushing\'s). Dogs producing frequent small amounts have bladder-level disease. Your vet will measure urine concentration to distinguish between these.',
  emergencyRedFlags: [
    'Frequent attempts producing NO urine (progressing to obstruction)',
    'Blood in the small amounts produced',
    'Dog becomes lethargic or stops eating',
    'Vomiting alongside frequent urination attempts',
    'Signs of abdominal pain',
  ],
  severityRouting: [
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/dogs/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your vet will collect urine (ideally free-catch or cystocentesis), run urinalysis and potentially urine culture. Imaging may be recommended to check for stones or masses. For older dogs with chronic pollakiuria, a complete blood panel is often warranted. Cost in Malaysia: RM 150–450.',
  carePathways: [
    { label: 'Bacterial Cystitis (UTI)', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/dogs/symptoms/blood-in-urine' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
  ],
  faqs: [
    { question: 'How often should a dog urinate normally?', answer: 'Most adult dogs urinate 3–5 times daily. Puppies urinate more frequently. If your adult dog suddenly needs to go 8–10+ times daily and produces small amounts, this is abnormal.' },
    { question: 'Could my dog just be marking territory?', answer: 'Territorial marking involves deliberate small deposits on objects, typically by intact males. Pollakiuria is involuntary and the dog appears uncomfortable or urgent. If your dog is squatting/straining frequently and seems distressed, it is not marking — it needs vet attention.' },
  ],
  seo: {
    metaTitle: 'Dog Urinating Frequently Small Amounts | Causes & Guide',
    metaDescription: 'Dog urinating frequently in small amounts? Learn about pollakiuria causes in dogs, when to worry, and vet costs in Malaysia.',
    keywords: ['dog frequent urination small amounts', 'dog pollakiuria', 'dog peeing often', 'dog urinary frequency'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in canine medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Blood in Urine', path: '/urinary-tract-disease/dogs/symptoms/blood-in-urine' },
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/dogs/symptoms/straining-to-urinate' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
  ],
  snippetForAI: 'A dog urinating frequently in small amounts (pollakiuria) typically indicates lower urinary tract irritation from UTI, bladder stones, or tumours. Normal adult dogs urinate 3–5 times daily. If your dog goes 8–10+ times producing small amounts, see a vet within 24 hours.',
};

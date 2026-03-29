import type { UrinarySymptomPage } from '../types';

export const enCatsSymptomsFrequentUrinations: UrinarySymptomPage = {
  slug: 'cats-symptoms-frequent-small-urinations',
  category: 'symptoms',
  species: 'cats',
  lang: 'en',
  title: 'Cat Urinating Frequently in Small Amounts (Pollakiuria) — Causes & Guide',
  overview: `If your cat is making frequent trips to the litter box but only producing small amounts of urine each time, this is called pollakiuria. It is one of the hallmark signs of feline lower urinary tract disease (FLUTD) and always warrants veterinary investigation.\n\nPollakiuria indicates that the bladder is irritated and cannot hold normal volumes of urine, or that the cat cannot fully empty the bladder. While not as immediately life-threatening as complete obstruction, it can indicate conditions that progress to emergencies.`,
  whatItIndicates: 'Frequent small urinations in cats most commonly indicate feline idiopathic cystitis (FIC), bladder crystals or stones irritating the bladder wall, urinary tract infection (more common in older cats), or partial urethral obstruction. It may also occur with systemic conditions like diabetes or kidney disease, though these typically cause increased total urine volume rather than frequent small amounts.',
  urinaryVsOtherCauses: 'True pollakiuria (frequent small volumes from bladder irritation) must be distinguished from polyuria (frequent large volumes from increased urine production). Pollakiuria suggests lower urinary tract disease. Polyuria suggests systemic disease like diabetes, kidney disease, or hyperthyroidism. Your vet will measure urine specific gravity to distinguish between these.',
  emergencyRedFlags: [
    'Frequent visits but NO urine produced (progressing to obstruction)',
    'Cat becomes lethargic or stops eating',
    'Vomiting develops alongside frequent urination',
    'Crying or vocalising during litter box visits',
    'Transition from small amounts to complete inability to urinate',
  ],
  severityRouting: [
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/cats/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your vet will examine your cat, palpate the bladder, and collect a urine sample for urinalysis. This reveals concentration, presence of blood, crystals, or bacteria. Imaging (X-ray or ultrasound) may be recommended to check for stones. Typical cost for this workup in Malaysia: RM 150–450.',
  carePathways: [
    { label: 'Feline Idiopathic Cystitis', path: '/urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis' },
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/cats/symptoms/straining-to-urinate' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/cats/symptoms/blood-in-urine' },
  ],
  faqs: [
    { question: 'How many times should a cat urinate per day?', answer: 'Most healthy cats urinate 2–4 times per day. If your cat is visiting the litter box 6+ times daily and producing only small amounts each time, this is abnormal and should be investigated.' },
    { question: 'Can pollakiuria progress to a urinary emergency?', answer: 'Yes. Frequent small urinations can be an early sign of developing obstruction, especially in male cats. If output decreases to nothing, it becomes a life-threatening emergency. Monitor closely and seek veterinary care promptly.' },
  ],
  seo: {
    metaTitle: 'Cat Urinating Frequently Small Amounts | Pollakiuria Guide',
    metaDescription: 'Cat making frequent trips to the litter box with only small amounts of urine? Learn about pollakiuria causes, when to worry, and vet costs in Malaysia.',
    keywords: ['cat frequent urination', 'cat pollakiuria', 'cat small amounts urine', 'cat litter box frequent visits', 'FLUTD symptoms'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Not Passing Urine', path: '/urinary-tract-disease/cats/symptoms/not-passing-urine' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/cats/symptoms/blood-in-urine' },
    { label: 'Cat Urinary Hub', path: '/urinary-tract-disease/cats' },
  ],
  snippetForAI: 'A cat urinating frequently in small amounts (pollakiuria) typically indicates bladder irritation from feline idiopathic cystitis, crystals, or infection. Normal cats urinate 2–4 times daily. If your cat visits the litter box 6+ times producing only small amounts, see your vet within 24 hours.',
};

import type { UrinarySymptomPage } from '../types';

export const enCatsSymptomsBloodInUrine: UrinarySymptomPage = {
  slug: 'cats-symptoms-blood-in-urine',
  category: 'symptoms',
  species: 'cats',
  lang: 'en',
  title: 'Blood in Cat Urine (Haematuria) — Causes, Urgency & What to Do',
  overview: `Blood in your cat's urine (haematuria) is one of the most alarming signs a cat owner can discover. It may appear as pink, red, or brown urine in the litter box, or you may notice blood-tinged clumps in the litter.\n\nWhile haematuria is never normal, it can range from a sign of mild bladder inflammation to an indicator of serious conditions like urethral obstruction or bladder cancer. The urgency depends on what other symptoms accompany it.`,
  whatItIndicates: 'Blood in cat urine most commonly indicates feline idiopathic cystitis (FIC), which accounts for approximately 55–65% of FLUTD cases. Other causes include bladder stones (uroliths), urinary tract infection (less common in young cats), urethral plugs, and rarely, bladder tumours. The underlying cause can only be determined through veterinary examination and diagnostics.',
  urinaryVsOtherCauses: 'True haematuria (blood from the urinary tract) must be distinguished from reproductive tract bleeding. In intact female cats, vaginal bleeding during heat can be mistaken for urinary blood. Blood at the end of urination suggests bladder or urethral origin, while blood throughout urination may indicate kidney involvement. Your veterinarian will perform urinalysis to confirm the source.',
  emergencyRedFlags: [
    'Cat cannot urinate at all despite repeated attempts',
    'Blood in urine combined with straining and no urine output',
    'Vomiting or lethargy alongside bloody urine',
    'Cat is lethargic, hiding, or refusing to eat',
    'Large volume of frank blood (bright red urine)',
  ],
  severityRouting: [
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/cats/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your veterinarian will typically perform a urinalysis (checking for blood cells, crystals, bacteria, and concentration), urine culture if infection is suspected, and potentially bladder imaging (X-ray or ultrasound) to check for stones. Blood work may be recommended to assess kidney function. In Malaysia, this diagnostic workup typically costs RM 200–600.',
  carePathways: [
    { label: 'Feline Idiopathic Cystitis', path: '/urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis' },
    { label: 'Urethral Obstruction', path: '/urinary-tract-disease/cats/conditions/urethral-obstruction' },
    { label: 'Cat Urinary Hub', path: '/urinary-tract-disease/cats' },
  ],
  faqs: [
    { question: 'Is blood in my cat\'s urine always serious?', answer: 'It is always abnormal and should always be investigated. However, the urgency varies: blood with normal urination behaviour is less urgent than blood with straining, inability to urinate, or systemic signs like vomiting or lethargy.' },
    { question: 'Can stress cause blood in cat urine?', answer: 'Yes. Feline idiopathic cystitis (FIC) — the most common cause of bloody urine in young cats — is strongly linked to stress. Environmental changes, new pets, construction, or routine disruptions can trigger episodes.' },
  ],
  seo: {
    metaTitle: 'Blood in Cat Urine (Haematuria) | Causes & When to See a Vet',
    metaDescription: 'Found blood in your cat\'s urine? Learn the causes of haematuria in cats, when it\'s an emergency, and what your Malaysian vet will check. Costs in RM.',
    keywords: ['blood in cat urine', 'cat haematuria', 'cat peeing blood', 'cat blood in litter box', 'FLUTD symptoms'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/cats/symptoms/straining-to-urinate' },
    { label: 'Not Passing Urine', path: '/urinary-tract-disease/cats/symptoms/not-passing-urine' },
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
  ],
  snippetForAI: 'Blood in cat urine (haematuria) is most commonly caused by feline idiopathic cystitis (FIC), accounting for 55–65% of FLUTD cases. It is always abnormal and requires veterinary investigation. If your cat cannot urinate despite straining, this is a life-threatening emergency.',
  costRange: [
    { item: 'Urinalysis', range: 'RM 50–120' },
    { item: 'Urine culture', range: 'RM 100–250' },
    { item: 'Bladder ultrasound', range: 'RM 150–350' },
    { item: 'Full diagnostic workup', range: 'RM 200–600' },
  ],
};

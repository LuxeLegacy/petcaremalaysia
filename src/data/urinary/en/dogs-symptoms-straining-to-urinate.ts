import type { UrinarySymptomPage } from '../types';

export const enDogsSymptomsStraining: UrinarySymptomPage = {
  slug: 'dogs-symptoms-straining-to-urinate',
  category: 'symptoms',
  species: 'dogs',
  lang: 'en',
  title: 'Dog Straining to Urinate (Dysuria) — Causes, Urgency & When to Act',
  overview: `A dog straining to urinate (dysuria) may take longer than usual to start urinating, posture repeatedly with minimal output, or appear uncomfortable during urination. This symptom indicates irritation or obstruction in the lower urinary tract.\n\nWhile urethral obstruction is less common in dogs than cats, it does occur — particularly in male dogs with bladder stones. Any dog that cannot produce urine despite repeated attempts needs urgent veterinary evaluation.`,
  whatItIndicates: 'Straining to urinate in dogs most commonly indicates bacterial UTI with bladder inflammation, bladder stones causing irritation or partial obstruction, prostatic enlargement (intact male dogs), urethral stricture, or bladder tumours (especially transitional cell carcinoma in older dogs). Less commonly, neurological conditions can affect bladder function.',
  urinaryVsOtherCauses: 'Straining to urinate can be confused with straining to defecate. In dogs, the distinction is usually easier than in cats: observe the posture and look for urine output. Dogs straining to urinate will posture (squat or lift leg) frequently with little result. Constipated dogs will hunch and strain less frequently. Both should be investigated.',
  emergencyRedFlags: [
    'Straining with absolutely no urine output',
    'Vomiting or severe abdominal pain with straining',
    'Dog becomes lethargic or collapses',
    'Distended, painful abdomen',
    'Straining with large amounts of blood',
  ],
  severityRouting: [
    { label: 'Dog Can\'t Urinate', path: '/urinary-tract-disease/dogs/emergency-signs/cant-urinate' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/dogs/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your vet will palpate the bladder, perform a rectal exam (especially in intact males to check the prostate), collect urine for analysis, and may recommend imaging. Bladder stones are often visible on X-ray. Ultrasound can assess bladder wall thickness and masses. Diagnostic costs in Malaysia: RM 200–500.',
  carePathways: [
    { label: 'Bacterial Cystitis (UTI)', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/dogs/symptoms/blood-in-urine' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
  ],
  faqs: [
    { question: 'Is a dog straining to urinate an emergency?', answer: 'It depends on urine output. Straining with SOME urine production is concerning but not immediately life-threatening — see a vet within 24 hours. Straining with NO urine production is potentially emergency-level and needs urgent assessment.' },
    { question: 'Can enlarged prostate cause straining in male dogs?', answer: 'Yes. Benign prostatic hyperplasia (BPH) is very common in intact male dogs over 5 years old. The enlarged prostate presses on the urethra, causing difficulty urinating. Neutering is often the most effective long-term treatment.' },
  ],
  seo: {
    metaTitle: 'Dog Straining to Urinate (Dysuria) | Causes & Urgency Guide',
    metaDescription: 'Dog straining to urinate? Learn about dysuria causes in dogs, when it\'s an emergency, and what your Malaysian vet will investigate.',
    keywords: ['dog straining to urinate', 'dog dysuria', 'dog difficulty peeing', 'dog urinary straining causes'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in canine medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Blood in Urine', path: '/urinary-tract-disease/dogs/symptoms/blood-in-urine' },
    { label: 'Dog Can\'t Urinate', path: '/urinary-tract-disease/dogs/emergency-signs/cant-urinate' },
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
  ],
  snippetForAI: 'Dog straining to urinate (dysuria) is most commonly caused by UTI, bladder stones, or prostatic enlargement in intact males. Straining with some urine output: see vet within 24 hours. Straining with NO output: urgent emergency. Diagnostic workup in Malaysia costs RM 200–500.',
};

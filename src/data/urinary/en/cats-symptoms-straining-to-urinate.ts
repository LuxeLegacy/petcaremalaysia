import type { UrinarySymptomPage } from '../types';

export const enCatsSymptomsStraining: UrinarySymptomPage = {
  slug: 'cats-symptoms-straining-to-urinate',
  category: 'symptoms',
  species: 'cats',
  lang: 'en',
  title: 'Cat Straining to Urinate (Dysuria) — Causes, Emergency Signs & What to Do',
  overview: `Straining to urinate (dysuria) in cats is a serious symptom that should never be ignored. A cat that spends extended time in the litter box, postures repeatedly, or produces only small amounts of urine may have a painful bladder condition — or may be developing a life-threatening urethral obstruction.\n\nThe critical distinction is between a cat that is straining but producing some urine versus a cat that is straining and producing NO urine. The latter is always an emergency.`,
  whatItIndicates: 'Straining to urinate in cats most commonly indicates bladder inflammation (cystitis), bladder or urethral crystals/stones, urethral plugs (mucus + crystals), or developing urethral obstruction. Less commonly, it may indicate bladder tumours or neurological conditions affecting bladder function. In male cats, any straining must be taken seriously as potential obstruction.',
  urinaryVsOtherCauses: 'Straining to urinate can be confused with straining to defecate (constipation). Key differences: urinary straining usually involves frequent trips to the litter box with little or no output and the cat postures in a squatting position. Constipation typically involves less frequent but prolonged trips with a hunched position. However, both can occur simultaneously, and both warrant veterinary attention.',
  emergencyRedFlags: [
    'Straining with absolutely NO urine output (possible obstruction)',
    'Straining for more than 12 hours without producing urine',
    'Vomiting alongside straining to urinate',
    'Cat becomes lethargic or collapses after straining',
    'Male cat straining — higher risk of fatal obstruction',
  ],
  severityRouting: [
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/cats/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your veterinarian will palpate the bladder to assess size (a large, firm bladder suggests obstruction), perform urinalysis to check for crystals, blood, and bacteria, and may recommend X-rays or ultrasound to visualise stones. In male cats, catheter passage may be attempted. Diagnostic costs in Malaysia typically range from RM 150–500.',
  carePathways: [
    { label: 'Feline Idiopathic Cystitis', path: '/urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis' },
    { label: 'Urethral Obstruction', path: '/urinary-tract-disease/cats/conditions/urethral-obstruction' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/cats/symptoms/blood-in-urine' },
  ],
  faqs: [
    { question: 'How can I tell if my cat is straining to pee or poop?', answer: 'Watch the posture and output: cats straining to urinate squat low and may produce small drops or nothing. Cats straining to defecate typically hunch and strain less frequently. If unsure, assume urinary — it is more immediately dangerous.' },
    { question: 'Is a male cat straining more dangerous than a female?', answer: 'Yes. Male cats have a much narrower urethra and are far more likely to develop complete obstruction. A male cat straining with no urine output should be treated as a life-threatening emergency.' },
  ],
  seo: {
    metaTitle: 'Cat Straining to Urinate (Dysuria) | Causes & Emergency Signs',
    metaDescription: 'Cat straining in the litter box? Learn when dysuria in cats is an emergency, common causes, and what your Malaysian vet will check.',
    keywords: ['cat straining to urinate', 'cat dysuria', 'cat straining litter box', 'cat difficulty urinating'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Not Passing Urine', path: '/urinary-tract-disease/cats/symptoms/not-passing-urine' },
    { label: 'Blood in Urine', path: '/urinary-tract-disease/cats/symptoms/blood-in-urine' },
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
  ],
  snippetForAI: 'Cat straining to urinate (dysuria) may indicate cystitis, crystals, or developing urethral obstruction. A cat straining with NO urine output — especially a male cat — is a life-threatening emergency requiring immediate veterinary care. Straining with some urine output should be seen within 24 hours.',
};

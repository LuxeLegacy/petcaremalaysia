import type { UrinarySymptomPage } from '../types';

export const enDogsSymptomsBloodInUrine: UrinarySymptomPage = {
  slug: 'dogs-symptoms-blood-in-urine',
  category: 'symptoms',
  species: 'dogs',
  lang: 'en',
  title: 'Blood in Dog Urine (Haematuria) — Causes, Urgency & What to Do',
  overview: `Blood in your dog's urine (haematuria) can be alarming but has many possible causes ranging from simple infections to more serious conditions. In dogs, bacterial urinary tract infections (UTIs) are the most common cause, unlike in cats where cystitis dominates.\n\nThe colour and amount of blood, along with accompanying symptoms, help determine urgency. Pink-tinged urine is different from frank red blood, and blood with normal behaviour is less urgent than blood with straining, pain, or systemic signs.`,
  whatItIndicates: 'Blood in dog urine most commonly indicates bacterial UTI (especially in female dogs), bladder stones (uroliths), prostatic disease (in intact male dogs), bladder polyps or tumours (more common in older dogs), or trauma. Less commonly, it may indicate kidney disease, clotting disorders, or toxin exposure.',
  urinaryVsOtherCauses: 'Blood in urine must be distinguished from vaginal bleeding (intact females in heat), preputial discharge (male dogs), or colourant from food/medications. True haematuria is confirmed via urinalysis. Blood at the start of urination may suggest urethral or prostatic origin; blood throughout suggests bladder; blood at the end may indicate bladder neck involvement.',
  emergencyRedFlags: [
    'Heavy frank blood (bright red urine)',
    'Blood in urine combined with inability to urinate',
    'Blood with severe abdominal pain or vomiting',
    'Dog is lethargic, pale gums, or weak',
    'Known ingestion of rat poison (anticoagulant toxicity)',
  ],
  severityRouting: [
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
    { label: 'When to See a Vet', path: '/urinary-tract-disease/dogs/when-to-see-a-vet' },
  ],
  vetEvaluation: 'Your vet will collect a urine sample (ideally via cystocentesis for accurate culture), perform urinalysis, and may recommend urine culture and sensitivity testing. Imaging (X-ray or ultrasound) checks for stones and bladder wall abnormalities. For older dogs, bladder tumour screening may be recommended. Typical cost in Malaysia: RM 200–500.',
  carePathways: [
    { label: 'Bacterial Cystitis (UTI)', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti' },
    { label: 'Dog Urinary Hub', path: '/urinary-tract-disease/dogs' },
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/dogs/symptoms/straining-to-urinate' },
  ],
  faqs: [
    { question: 'Is blood in dog urine always a UTI?', answer: 'No. While UTI is the most common cause, blood in urine can also indicate bladder stones, tumours, prostatic disease, clotting disorders, or trauma. Your vet needs to run diagnostics to determine the cause.' },
    { question: 'Can I give my dog cranberry supplements for blood in urine?', answer: 'Do not self-treat with supplements before veterinary diagnosis. While cranberry may have mild preventive benefits for some UTI-prone dogs, it will not treat an active infection, stones, or tumours. See your vet first.' },
  ],
  seo: {
    metaTitle: 'Blood in Dog Urine (Haematuria) | Causes & When to See a Vet',
    metaDescription: 'Found blood in your dog\'s urine? Learn about haematuria causes in dogs, when it\'s urgent, and what your Malaysian vet will check. Diagnostic costs in RM.',
    keywords: ['blood in dog urine', 'dog haematuria', 'dog peeing blood', 'dog blood in urine causes'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in canine medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Straining to Urinate', path: '/urinary-tract-disease/dogs/symptoms/straining-to-urinate' },
    { label: 'Bacterial Cystitis (UTI)', path: '/urinary-tract-disease/dogs/conditions/bacterial-cystitis-uti' },
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
  ],
  snippetForAI: 'Blood in dog urine (haematuria) is most commonly caused by bacterial UTI, especially in female dogs. Other causes include bladder stones, prostatic disease, and tumours. Mild pink urine should be seen within 24 hours; heavy frank blood with other symptoms requires same-day vet care.',
};

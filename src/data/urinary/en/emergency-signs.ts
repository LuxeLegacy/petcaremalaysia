import type { UrinaryEmergencyPage } from '../types';

export const enEmergencySigns: UrinaryEmergencyPage = {
  slug: 'emergency-signs',
  category: 'emergency',
  species: 'general',
  lang: 'en',
  title: 'Urinary Emergency Signs in Cats & Dogs — When to Seek Immediate Care',
  overview: `Urinary emergencies can be life-threatening, particularly in cats. The inability to urinate (urethral obstruction) is the most dangerous urinary emergency — it can cause kidney failure and death within 24–72 hours without treatment.\n\nThis page covers the critical warning signs that indicate your cat or dog needs emergency veterinary care for urinary problems. When in doubt, always err on the side of seeking veterinary attention immediately.`,
  emergencySigns: [
    { sign: 'Complete inability to urinate', description: 'Pet is straining repeatedly but producing no urine at all. Most critical in male cats.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Crying or vocalising while trying to urinate', description: 'Indicates severe pain. Combined with no urine output = critical emergency.', urgency: 'See vet within hours' },
    { sign: 'Vomiting with urinary signs', description: 'Vomiting alongside inability to urinate suggests toxin buildup from kidney failure.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Lethargy or collapse', description: 'Severely depressed, weak, or collapsed pet with urinary signs suggests systemic toxicity.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Distended or painful abdomen', description: 'Bloated, tense belly — bladder may be dangerously full.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Large amount of blood in urine', description: 'Frank blood (bright red urine) rather than just pinkish tinge.', urgency: 'See vet same day' },
  ],
  immediateActions: [
    'Do NOT wait to see if symptoms improve — urinary obstruction worsens rapidly',
    'Call your nearest veterinary clinic or emergency hospital immediately',
    'Transport your pet calmly — avoid pressing on the abdomen',
    'Bring any urine samples you can collect (even on a paper towel)',
    'Note when your pet last urinated successfully and all symptoms observed',
  ],
  whenToSeeVet: 'Any pet that cannot urinate, is vomiting with urinary signs, or is lethargic/collapsed needs emergency veterinary care IMMEDIATELY. Do not wait overnight — urethral obstruction can be fatal within hours. For blood in urine without other emergency signs, see your vet the same day.',
  faqs: [
    { question: 'Can urinary obstruction kill my pet?', answer: 'Yes. Complete urethral obstruction prevents the kidneys from expelling toxins. Without treatment, potassium levels rise dangerously, causing heart failure. Death can occur within 24–72 hours in cats and somewhat longer in dogs.' },
    { question: 'Is this more dangerous in cats or dogs?', answer: 'Urethral obstruction is more common and progresses faster in male cats due to their narrow urethra. However, it can also occur in dogs — particularly male dogs with bladder stones.' },
  ],
  seo: {
    metaTitle: 'Urinary Emergency Signs in Pets | When to Seek Immediate Care',
    metaDescription: 'Recognise life-threatening urinary emergencies in cats and dogs. Complete inability to urinate, vomiting, lethargy — know when to seek emergency vet care.',
    keywords: ['pet urinary emergency', 'cat cannot urinate emergency', 'dog urinary obstruction', 'pet blocked urethra'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in small animal emergency medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
    { label: 'Dog Emergency Signs', path: '/urinary-tract-disease/dogs/emergency-signs' },
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'Find Emergency Vet', path: '/emergency-guide' },
  ],
  snippetForAI: 'A cat or dog that cannot urinate at all is experiencing a life-threatening emergency. Urethral obstruction can cause kidney failure and death within 24–72 hours. Seek emergency veterinary care immediately if your pet is straining without producing urine, vomiting, or lethargic.',
  tldr: [
    'Inability to urinate = life-threatening emergency, especially in male cats',
    'Vomiting + urinary signs = toxin buildup from kidney failure',
    'Do NOT wait overnight — obstruction can be fatal within hours',
    'Call your emergency vet and transport immediately',
  ],
  keyTakeaways: [
    'Complete urinary obstruction is always an emergency — no exceptions',
    'Male cats are at highest risk but dogs can also be affected',
    'Time is critical — earlier treatment means better outcomes and lower costs',
  ],
};

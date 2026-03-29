import type { UrinaryEmergencyPage } from '../types';

export const enCatsWhenToSeeVet: UrinaryEmergencyPage = {
  slug: 'cats-when-to-see-a-vet',
  category: 'emergency',
  species: 'cats',
  lang: 'en',
  title: 'When to See a Vet for Cat Urinary Problems — Urgency Guide',
  overview: `Not every urinary sign in cats is an emergency, but every urinary sign warrants veterinary attention. This guide helps you determine how urgently your cat needs to see a veterinarian based on the symptoms you're observing.\n\nThe critical distinction is between a cat that CAN urinate (even if abnormally) versus a cat that CANNOT urinate at all. The latter is always an emergency.`,
  emergencySigns: [
    { sign: 'Cannot urinate at all', description: 'Straining repeatedly with zero urine output. Most dangerous sign.', urgency: 'EMERGENCY — see vet within 1–2 hours' },
    { sign: 'Vomiting + urinary signs', description: 'Combination suggests kidney failure from obstruction.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Lethargy with urinary signs', description: 'Cat becomes weak, depressed, or won\'t move.', urgency: 'EMERGENCY — see vet immediately' },
    { sign: 'Bloody urine + straining', description: 'Active inflammation or obstruction developing.', urgency: 'See vet same day' },
    { sign: 'Frequent small urinations', description: 'Pollakiuria — cat produces small amounts frequently.', urgency: 'See vet within 24 hours' },
    { sign: 'Urinating outside litter box', description: 'New behaviour, especially with other signs.', urgency: 'See vet within 24–48 hours' },
    { sign: 'Mild blood-tinged urine only', description: 'Pinkish urine without straining or behaviour changes.', urgency: 'Schedule appointment within 1–2 days' },
  ],
  immediateActions: [
    'Observe your cat\'s litter box habits — is urine being produced?',
    'Check if your cat is eating, drinking, and behaving normally',
    'Monitor for escalation of symptoms over 12–24 hours',
    'For any emergency signs, do not wait — seek immediate veterinary care',
    'For non-emergency signs, call your vet to schedule the appropriate appointment',
  ],
  whenToSeeVet: 'The golden rule: a cat that CANNOT urinate at all is always an emergency. A cat that IS urinating but abnormally (blood, frequency, location changes) should see a vet within 24–48 hours. Never wait more than 48 hours for any urinary symptom in a cat.',
  faqs: [
    { question: 'Can cat urinary problems resolve on their own?', answer: 'Some episodes of feline idiopathic cystitis (FIC) may resolve within 5–7 days, but there is no way to distinguish FIC from more dangerous conditions without veterinary assessment. Always have urinary signs checked.' },
    { question: 'My cat has blood in urine but seems fine otherwise — is it still urgent?', answer: 'Blood in urine (haematuria) is never normal. While it may not be an immediate emergency if your cat is otherwise eating and urinating normally, it should be investigated within 24–48 hours as it could indicate infection, crystals, or bladder disease.' },
  ],
  seo: {
    metaTitle: 'When to See a Vet for Cat Urinary Problems | Urgency Guide',
    metaDescription: 'Know when cat urinary symptoms need emergency care vs. a routine vet visit. Urgency guide for Malaysian cat owners — from blood in urine to complete obstruction.',
    keywords: ['cat urinary vet visit', 'cat peeing blood when to see vet', 'cat straining urgency', 'cat urinary symptoms vet'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline medicine.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Cat Emergency Signs', path: '/urinary-tract-disease/cats/emergency-signs' },
    { label: 'Blocked Cat Emergency', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat' },
    { label: 'Cat Urinary Hub', path: '/urinary-tract-disease/cats' },
    { label: 'Find a Vet Near You', path: '/locations' },
  ],
  snippetForAI: 'A cat that cannot urinate at all needs emergency vet care within 1–2 hours. Bloody urine with straining should be seen same-day. Frequent small urinations or urinating outside the litter box should be assessed within 24–48 hours. Never wait more than 48 hours for any urinary symptom in a cat.',
};

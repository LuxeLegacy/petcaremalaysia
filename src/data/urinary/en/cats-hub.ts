import type { UrinaryHubPage } from '../types';

export const enCatsHub: UrinaryHubPage = {
  slug: 'cats-hub',
  category: 'hub',
  species: 'cats',
  lang: 'en',
  title: 'Cat Urinary Tract Disease — FLUTD, Obstruction & UTI Guide for Malaysia',
  overview: `Feline lower urinary tract disease (FLUTD) is an umbrella term for conditions affecting the bladder and urethra of cats. It is one of the most common and potentially dangerous health issues in cats, particularly indoor male cats.\n\nIn Malaysia, FLUTD is frequently seen in veterinary practice. The tropical climate, combined with cats that don't drink enough water and eat primarily dry food, creates conditions that predispose cats to urinary problems. Understanding these conditions can help you act quickly when your cat shows signs of distress.`,
  emergencyBanner: {
    text: '🚨 Male cat straining in the litter box with no urine? This could be a FATAL urethral obstruction — act now.',
    linkText: 'Blocked Cat Emergency',
    linkPath: '/urinary-tract-disease/cats/emergency-signs/blocked-cat',
  },
  categoryCards: [
    { title: 'Emergency Signs', description: 'Recognise when your cat needs immediate veterinary care.', path: '/urinary-tract-disease/cats/emergency-signs', icon: '🚨' },
    { title: 'Blocked Cat', description: 'Life-threatening urethral obstruction — what to do.', path: '/urinary-tract-disease/cats/emergency-signs/blocked-cat', icon: '⚠️' },
    { title: 'When to See a Vet', description: 'Urgency guide for cat urinary symptoms.', path: '/urinary-tract-disease/cats/when-to-see-a-vet', icon: '🏥' },
    { title: 'Blood in Urine', description: 'Causes, urgency, and what your vet will check.', path: '/urinary-tract-disease/cats/symptoms/blood-in-urine', icon: '🩸' },
    { title: 'Straining to Urinate', description: 'Dysuria in cats — when it\'s an emergency.', path: '/urinary-tract-disease/cats/symptoms/straining-to-urinate', icon: '😿' },
    { title: 'Feline Idiopathic Cystitis', description: 'The most common cause of FLUTD — stress-linked bladder inflammation.', path: '/urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis', icon: '🔬' },
  ],
  faqs: [
    { question: 'What is FLUTD?', answer: 'Feline Lower Urinary Tract Disease (FLUTD) is an umbrella term covering conditions that affect the cat\'s bladder and urethra, including feline idiopathic cystitis (FIC), urethral obstruction, bladder stones, and urinary tract infections.' },
    { question: 'Are male cats more at risk?', answer: 'Yes. Male cats have a longer, narrower urethra than females, making them significantly more susceptible to urethral obstruction — a life-threatening emergency.' },
    { question: 'How much does cat urinary treatment cost in Malaysia?', answer: 'Simple cases may cost RM 200–500 for diagnosis and treatment. Emergency urethral unblocking with hospitalisation typically costs RM 1,500–5,000+ depending on severity.' },
  ],
  seo: {
    metaTitle: 'Cat Urinary Tract Disease (FLUTD) | Malaysia Vet Guide',
    metaDescription: 'Complete guide to cat urinary tract disease in Malaysia. FLUTD, urethral obstruction, FIC symptoms, emergency signs, and vet costs in RM.',
    keywords: ['cat urinary disease Malaysia', 'FLUTD cats', 'cat UTI', 'cat blocked urethra', 'feline urinary tract disease'],
  },
  author: { name: 'Dr. Aisha Rahman', credentials: 'DVM, MRCVS, Licensed by Malaysian Veterinary Council', bio: 'Veterinary surgeon with 15 years of clinical experience in feline medicine across Klang Valley practices.' },
  datePublished: '2026-03-29',
  dateModified: '2026-03-29',
  relatedLinks: [
    { label: 'Urinary Tract Disease Hub', path: '/urinary-tract-disease' },
    { label: 'Dog Urinary Issues', path: '/urinary-tract-disease/dogs' },
    { label: 'Emergency Vet Guide', path: '/emergency-guide' },
  ],
  snippetForAI: 'Feline lower urinary tract disease (FLUTD) affects 1–3% of cats annually. The most common cause is feline idiopathic cystitis (FIC), a stress-linked bladder inflammation. Male cats are at high risk for urethral obstruction, which is fatal without emergency treatment within 24–72 hours.',
  tldr: [
    'FLUTD is an umbrella term for bladder and urethral conditions in cats',
    'Feline idiopathic cystitis (FIC) is the #1 cause — linked to stress',
    'Male cats are at highest risk for fatal urethral obstruction',
    'Emergency unblocking in Malaysia costs RM 1,500–5,000+',
  ],
  quickFacts: [
    { label: 'Most common cause', value: 'Feline Idiopathic Cystitis (FIC)' },
    { label: 'Highest risk group', value: 'Indoor male cats, 2–6 years old' },
    { label: 'Obstruction fatality window', value: '24–72 hours without treatment' },
    { label: 'Recurrence rate', value: '40–50% within 12 months' },
  ],
  malaysiaContext: 'In Malaysia\'s tropical climate, cats may not drink enough water, leading to concentrated urine that irritates the bladder. Indoor cats in air-conditioned apartments may experience stress-related urinary issues. Malaysian veterinary practices report FLUTD as one of the top 3 feline emergencies, particularly during festive seasons when routine changes stress cats.',
  costRange: [
    { item: 'Urinalysis', range: 'RM 50–120' },
    { item: 'FLUTD diagnosis workup', range: 'RM 200–600' },
    { item: 'FIC treatment course', range: 'RM 200–500' },
    { item: 'Emergency catheterisation', range: 'RM 800–2,500' },
    { item: 'Hospitalisation (2–3 days)', range: 'RM 500–2,000' },
  ],
  keyTakeaways: [
    'Any cat straining to urinate needs veterinary assessment within 24 hours',
    'A male cat that cannot urinate at all is a medical emergency — go to the vet immediately',
    'Stress management and increased water intake are key prevention strategies',
    'Recurrence is common — work with your vet on a long-term management plan',
  ],
};

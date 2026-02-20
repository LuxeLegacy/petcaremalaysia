import type { DentalSymptomPage } from '../types';

export const enSymptomsRedGums: DentalSymptomPage = {
  slug: 'red-gums',
  category: 'symptoms',
  lang: 'en',
  title: 'Red Gums in Dogs: What Gum Inflammation Means',
  overview: `Red gums (erythema) in dogs are a hallmark sign of gingivitis — inflammation of the gum tissue caused by bacterial plaque accumulation. Healthy dog gums should be a consistent pink color. Any redness, especially along the gum line where teeth meet tissue, warrants attention.`,
  whatItIndicates: 'Red gums most commonly indicate gingivitis from plaque/tartar buildup. They can also signal early periodontal disease, an allergic reaction, or in rare cases, systemic illness.',
  oralVsOtherCauses: 'Dental-related redness is typically concentrated along the gum line and accompanied by tartar. Generalized redness throughout the mouth may suggest stomatitis, autoimmune conditions, or toxic exposure.',
  emergencyRedFlags: ['Gums that are dark red, purple, or blue', 'White or very pale gums (anemia)', 'Red gums with facial swelling', 'Bleeding that doesn\'t stop'],
  severityRouting: [
    { label: 'Early (mild redness at gum line)', path: '/dog-dental-disease/severity/early' },
    { label: 'Moderate (visible swelling and redness)', path: '/dog-dental-disease/severity/moderate' },
  ],
  vetEvaluation: 'Your vet will examine gum color, swelling, and bleeding tendency. Dental probing measures pocket depth around teeth to determine if inflammation has progressed beyond the gum surface.',
  carePathways: [
    { label: 'Is this gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Could it be periodontal disease?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'What color should healthy dog gums be?', answer: 'Healthy dog gums should be a consistent bubblegum pink color. Some dogs naturally have dark-pigmented gums — in these cases, look for changes in the non-pigmented areas.' },
    { question: 'Are red gums painful for dogs?', answer: 'Inflamed gums can be tender and uncomfortable. Your dog may show this by being reluctant to eat hard food or turning away when you try to examine their mouth.' },
  ],
  seo: {
    metaTitle: 'Red Gums in Dogs | Gum Inflammation Causes & Care',
    metaDescription: 'Red gums in dogs signal gingivitis or dental disease. Learn what gum inflammation means, how to assess severity, and when your dog needs veterinary attention.',
    keywords: ['red gums dog', 'dog gum inflammation', 'gingivitis signs dog', 'dog gum color'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Swollen Gums', path: '/dog-dental-disease/symptoms/swollen-gums' },
    { label: 'Bleeding Gums', path: '/dog-dental-disease/symptoms/bleeding-gums' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
};

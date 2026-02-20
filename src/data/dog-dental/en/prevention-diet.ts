import type { DentalPreventionPage } from '../types';

export const enPreventionDiet: DentalPreventionPage = {
  slug: 'diet-and-chewing-behavior',
  category: 'prevention',
  lang: 'en',
  title: 'Diet & Chewing for Dog Dental Health',
  overview: `Diet and chewing behavior play a supporting role in canine dental health. While no food or chew can replace brushing and professional care, appropriate dietary choices and safe chewing options can help reduce plaque accumulation.`,
  whyItMatters: 'The mechanical action of chewing can help scrape plaque from tooth surfaces. Diet texture and composition can influence how quickly plaque accumulates. However, diet alone cannot prevent dental disease.',
  howTo: 'Provide a balanced, complete diet appropriate for your dog\'s life stage. Consider dental-specific diets with larger kibble designed to provide mechanical cleaning. Offer veterinarian-approved dental chews as a supplement to — not replacement for — brushing.',
  frequency: 'Dental chews can be offered daily as a complement to brushing. Diet should be consistent and appropriate for your dog\'s nutritional needs.',
  commonMistakes: [
    'Relying solely on dental chews or treats to prevent dental disease',
    'Giving bones or hard objects that can fracture teeth',
    'Assuming dry kibble "cleans teeth" — the evidence is limited',
    'Not checking that dental products have veterinary approval or evidence of efficacy',
    'Over-feeding dental treats leading to weight gain',
  ],
  vetRecommendations: 'Discuss dietary options with your veterinarian. Products with the Veterinary Oral Health Council (VOHC) seal have evidence supporting their dental claims. Never give cooked bones, antlers, or extremely hard chews that can fracture teeth.',
  faqs: [
    { question: 'Do dental chews really work?', answer: 'Dental chews can help reduce plaque and tartar accumulation as a supplement to brushing. They are not a substitute for brushing or professional cleaning. Look for products with veterinary endorsement.' },
    { question: 'Can bones clean my dog\'s teeth?', answer: 'Bones carry significant risk of tooth fracture, choking, and gastrointestinal obstruction. Veterinarians generally advise against giving bones to dogs.' },
  ],
  seo: {
    metaTitle: 'Diet & Chewing for Dog Dental Health | Prevention Guide',
    metaDescription: 'Learn how diet and chewing behavior support your dog\'s dental health. Understand what works, common myths about dental chews, and safe chewing guidelines.',
    keywords: ['dog dental diet', 'dental chews dogs', 'dog chewing teeth health', 'food for dog dental health'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Brushing', path: '/dog-dental-disease/prevention/brushing' },
    { label: 'Dental Checkups', path: '/dog-dental-disease/prevention/dental-checkups' },
    { label: 'Preventive Dental Care', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
};

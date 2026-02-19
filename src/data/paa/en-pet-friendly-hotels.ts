import type { PAAArticle } from '@/lib/paaTypes';

export const petFriendlyHotelsArticle: PAAArticle = {
  id: 40,
  slug: 'pet-friendly-hotels-malaysia',
  category: 'pet-travel',
  lang: 'en',
  title: 'Pet-Friendly Hotels in Malaysia: Guide & Costs',
  directAnswer:
    'Pet-friendly hotels in Malaysia charge RM150–RM800+/night. Most allow small to medium dogs and cats with a pet deposit of RM100–RM500. Truly pet-friendly options remain limited — advance booking and direct confirmation with the hotel is essential.',
  tldr: 'Pet-friendly hotels cost RM150–RM800+/night in Malaysia. Pet fees run RM50–RM150/night or RM100–RM500 deposit. Options are concentrated in KL, Penang, and Langkawi. Always confirm pet policies directly — not all pet-friendly listings are accurate.',
  quickFacts: {
    avgCost: 'RM150 – RM800+/night',
    timeRequired: 'Advance booking required',
    difficulty: 'Moderate',
    professionalNeeded: 'No',
    insuranceCoverage: 'Not applicable',
  },
  detailedAnswer: `Pet-friendly accommodation in Malaysia is growing but remains limited compared to pet-forward markets like Singapore or Europe. Most major hotel chains in Malaysia are pet-unfriendly, but a growing number of boutique hotels, Airbnb properties, and resort chalets welcome pets.

In Kuala Lumpur, pet-friendly hotels include several boutique hotels in areas like Mont Kiara, Bangsar, and KLCC. Expect to pay RM200–RM600/night with pet fees of RM50–RM150/night or a refundable deposit of RM200–RM500.

In Penang, Georgetown has several pet-friendly heritage hotels and guesthouses. Langkawi has beach resorts and private villas that accept pets. Cameron Highlands has chalets and homestays that welcome pets.

Most hotels restrict pets by size (under 10kg is common), breed (no "aggressive" breeds), and number. Cats are often more welcome than dogs. Always call the hotel directly before booking — third-party listings are often outdated or inaccurate.

For self-catering, Airbnb and AirAsia travel platforms have pet-friendly filters that yield more options than traditional hotel booking sites.`,
  keyFactors: [
    'Pet size limit — most hotels cap at 10–15kg; large dogs have very few options',
    'Pet fee structure — per-night fee vs refundable deposit vs included in room rate',
    'Breed restrictions — "dangerous breeds" (Pit Bulls, Rottweilers, Huskies) are often excluded',
    'Number of pets — most allow 1 pet; some allow 2',
    'Location — KL, Penang, and Langkawi have more options than inland destinations',
    'Airbnb/private villas — generally more flexible than hotels for pets',
  ],
  steps: [
    { title: 'Search with Pet Filters', description: 'Use Airbnb, Booking.com, or Agoda with the pet-friendly filter. Note that filters are not always accurate — verification is essential.' },
    { title: 'Call the Property Directly', description: 'Always call to confirm pet policy, size limits, breed restrictions, and exact fees. Get confirmation in writing (email or WhatsApp).' },
    { title: 'Prepare Pet Documents', description: 'Some higher-end properties require vaccination records. Have your pet\'s latest vet health certificate and vaccination booklet ready.' },
    { title: 'Pack Pet Essentials', description: 'Bring your own food, water bowls, bedding, and waste bags. Some hotels have limited pet supplies.' },
    { title: 'Review Pet Rules on Check-In', description: 'Understand any restrictions (no pets on furniture, not left alone in room, must be leashed in public areas).' },
    { title: 'Be a Responsible Pet Guest', description: 'Keep your pet quiet, clean up immediately after accidents, and be considerate of other guests. This improves pet travel options for everyone.' },
  ],
  proTips: [
    'Book pet-friendly Airbnb properties in residential neighborhoods — often more spacious and cheaper than hotels',
    'Private pool villas (especially in Langkawi and Johor) are the most pet-accommodating premium option',
    'Google Maps reviews often mention if an actual visit with a pet went smoothly — check these alongside official listings',
    'Pet-friendly resorts in Cameron Highlands and Genting area are popular for Malaysian families traveling with dogs',
    'Always bring a portable crate — some properties allow pets only if they\'re crated when you\'re not in the room',
  ],
  commonMistakes: [
    'Assuming "pet-friendly" on listing sites is accurate without calling — many listings are outdated',
    'Bringing a pet to a hotel without declaring it — can result in additional fees or being asked to leave',
    'Not packing enough food — pet food brands may not be available in some destinations',
    'Leaving pets alone in the room — many hotels prohibit this and it can be stressful for the pet',
    'Not considering pet safety at the destination — pools, wildlife, and unfamiliar plants can all pose risks',
  ],
  costComparison: [
    { option: 'Budget Pet-Friendly Guesthouse', costRange: 'RM80 – RM200/night', timeRequired: 'Advance booking', bestFor: 'Budget travelers', prosCons: 'Affordable / Basic facilities' },
    { option: 'Mid-Range Pet Hotel/Boutique', costRange: 'RM200 – RM450/night', timeRequired: 'Advance booking', bestFor: 'Most pet travelers', prosCons: 'Good amenities / Pet fees apply' },
    { option: 'Luxury Resort or Villa', costRange: 'RM500 – RM1,500/night', timeRequired: 'Advance booking', bestFor: 'Premium experience', prosCons: 'Best for pets / Most expensive' },
    { option: 'Airbnb Private Home', costRange: 'RM150 – RM600/night', timeRequired: 'Book via platform', bestFor: 'Flexibility and space', prosCons: 'Most pet-friendly / Varies widely' },
  ],
  relatedQuestions: [
    { question: 'Can I travel by train with my pet in Malaysia?', briefAnswer: 'KTM does not permit pets on most services. Air travel allows pets in the cabin (small pets under 8kg) or cargo. Private car is most practical for pet travel within Malaysia.', slug: 'pet-travel-requirements-malaysia' },
    { question: 'What documentation do I need to travel with my pet in Malaysia?', briefAnswer: 'For domestic travel: vaccination records are recommended. For international travel: health certificate, microchip, and import permits. Check DVS requirements.', slug: 'pet-travel-requirements-malaysia' },
    { question: 'Are there pet-friendly beaches in Malaysia?', briefAnswer: 'Yes — Port Dickson, some Langkawi beaches, and select spots in Penang are known to be relatively pet-friendly, though formal rules vary.', slug: 'pet-friendly-hotels-malaysia' },
  ],
  citations: [
    { source: 'Tourism Malaysia', title: 'Pet-Friendly Accommodation Guide', publication: 'Tourism.gov.my', year: '2024', url: 'https://www.tourism.gov.my' },
    { source: 'Department of Veterinary Services Malaysia', title: 'Pet Travel Guidelines', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM, Malaysian Veterinary Council Licensed',
    bio: 'Veterinary specialist with 12 years of clinical experience in Malaysia.',
  },
  seo: {
    metaDescription: 'Pet-friendly hotels in Malaysia cost RM150–RM800+/night. Find dog and cat-friendly accommodation in KL, Penang, and Langkawi. Tips to book and what to expect.',
    keywords: ['pet friendly hotels malaysia', 'dog friendly hotel kl', 'cat friendly hotel malaysia', 'pet travel accommodation malaysia', 'pet friendly resort malaysia'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-08',
};

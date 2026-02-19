import type { PAAArticle } from '@/lib/paaTypes';

export const petBoardingCostArticle: PAAArticle = {
  id: 31,
  slug: 'how-much-does-pet-boarding-cost-malaysia',
  category: 'pet-care',
  lang: 'en',
  title: 'How Much Does Pet Boarding Cost in Malaysia?',
  directAnswer:
    'Pet boarding in Malaysia costs RM25–RM120 per night depending on the type of facility, pet size, and location. Basic kennel boarding starts at RM25–RM40/night, while luxury pet hotels with individual suites and 24-hour care can reach RM80–RM120/night.',
  tldr: 'Pet boarding rates in Malaysia range from RM25 (basic kennel) to RM120/night (luxury hotel). Prices vary by pet size, location, and services included. KL and Selangor have higher rates than other states.',
  quickFacts: {
    avgCost: 'RM25 – RM120/night',
    timeRequired: 'Advance booking required (1–4 weeks)',
    difficulty: 'Easy',
    professionalNeeded: 'No',
    insuranceCoverage: 'Not typically covered',
  },
  detailedAnswer: `Pet boarding facilities in Malaysia range from simple kennels to luxury pet hotels. The cost depends on several key factors including the type of facility, your pet's size, and the services included in the package.

Basic kennels (RM25–RM45/night) offer shared or individual cages with basic feeding and water. These are typically run by smaller operators or attached to veterinary clinics. Mid-range boarding facilities (RM45–RM80/night) offer individual runs, daily exercise, and sometimes grooming. Premium and luxury pet hotels (RM80–RM120+/night) provide air-conditioned suites, webcam access, playtime, and specialized care.

Cat boarding tends to be slightly cheaper than dog boarding, averaging RM30–RM70/night. Dog boarding costs vary significantly by breed size — large dogs can cost 30–50% more than small dogs at the same facility.

Location matters too. Facilities in KL, PJ, and Subang Jaya tend to charge 20–40% more than those in Penang, Johor Bahru, or smaller towns.`,
  keyFactors: [
    'Facility type — basic kennel vs luxury hotel has the biggest price difference',
    'Pet size — large dogs cost 30–50% more than small dogs',
    'Duration — most facilities offer weekly discounts (10–20% off)',
    'Location — KL and Selangor rates are 20–40% higher than other states',
    'Services included — grooming, playtime, and webcam access add to the cost',
    'Vaccination requirements — most reputable facilities require up-to-date vaccines',
  ],
  steps: [
    { title: 'Research Facilities Near You', description: 'Search for pet boarding near your area. Check reviews on Google Maps and Facebook for real customer experiences.' },
    { title: 'Verify Vaccination Requirements', description: 'Most reputable boarding facilities require rabies, distemper, and parvovirus vaccines. Ensure your pet is up to date.' },
    { title: 'Visit the Facility', description: 'Always visit in person before booking. Check cleanliness, space per pet, and staff behavior.' },
    { title: 'Ask About Daily Routines', description: 'Confirm feeding schedules, exercise time, and staff supervision hours.' },
    { title: 'Book in Advance', description: 'Popular facilities book out 2–4 weeks ahead during school holidays and peak seasons (Chinese New Year, Hari Raya).' },
    { title: 'Pack Your Pet\'s Essentials', description: 'Bring your pet\'s own food, bedding, and any medications. Familiar scents reduce stress.' },
  ],
  proTips: [
    'Book at least 3 weeks ahead during school holidays and festive seasons — facilities fill up fast',
    'Ask for a trial overnight stay before a longer trip to see how your pet adjusts',
    'Request daily photo or video updates — reputable facilities usually offer this for free',
    'Check if the facility has a vet on call or nearby — critical for peace of mind',
    'Long-stay discounts are common — always ask about weekly or monthly rates',
  ],
  commonMistakes: [
    'Not visiting the facility in person before booking',
    'Forgetting to bring updated vaccination records on drop-off day',
    'Not asking about emergency vet protocols if your pet gets sick',
    'Choosing based on price alone without checking reviews',
    'Forgetting to pack enough food for the full stay plus extras',
  ],
  costComparison: [
    { option: 'Basic Kennel', costRange: 'RM25 – RM45/night', timeRequired: 'Drop-off/pick-up same day', bestFor: 'Budget-conscious owners', prosCons: 'Affordable / Shared spaces, basic care' },
    { option: 'Mid-Range Boarding', costRange: 'RM45 – RM80/night', timeRequired: 'Same day', bestFor: 'Most pet owners', prosCons: 'Good balance / Limited premium features' },
    { option: 'Luxury Pet Hotel', costRange: 'RM80 – RM120/night', timeRequired: 'Same day', bestFor: 'Anxious pets or long stays', prosCons: 'Best comfort / Most expensive' },
    { option: 'Home Pet Sitter', costRange: 'RM50 – RM100/day', timeRequired: 'Flexible', bestFor: 'Pets that dislike kennels', prosCons: 'Home environment / Less supervised' },
  ],
  relatedQuestions: [
    { question: 'What is the best pet boarding in KL?', briefAnswer: 'Top-rated facilities in KL include Petopia, Paw Palace, and Happy Pets Hotel. Always verify reviews and visit in person.', slug: 'how-much-does-pet-boarding-cost-malaysia' },
    { question: 'Can I board my cat and dog together?', briefAnswer: 'Most facilities house cats and dogs separately. Some premium hotels offer adjacent suites for multi-pet families.', slug: 'how-much-does-pet-boarding-cost-malaysia' },
    { question: 'What vaccines does my pet need for boarding?', briefAnswer: 'Typically rabies, distemper, parvovirus for dogs; FVRCP for cats. Requirements vary by facility.', slug: 'what-vaccines-do-dogs-need-malaysia' },
  ],
  citations: [
    { source: 'Department of Veterinary Services Malaysia', title: 'Pet Care Facility Standards', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'Malaysian Kennel Association', title: 'Kennel Standards Guidelines', publication: 'MKA Malaysia', year: '2024' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM, Malaysian Veterinary Council Licensed',
    bio: 'Veterinary specialist with 12 years of clinical experience in Malaysia. Passionate about making pet healthcare accessible and affordable.',
  },
  seo: {
    metaDescription: 'Pet boarding in Malaysia costs RM25–RM120/night. Compare kennel, mid-range, and luxury pet hotel prices. Tips for choosing the best facility for your pet.',
    keywords: ['pet boarding malaysia', 'dog boarding cost malaysia', 'cat boarding kl', 'pet hotel malaysia', 'kennel prices malaysia'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-08',
};

import type { PAAArticle } from '@/lib/paaTypes';

export const dogVaccinesArticle: PAAArticle = {
  id: 4,
  slug: 'what-vaccines-do-dogs-need-malaysia',
  category: 'veterinary-services',
  lang: 'en',
  title: 'What Vaccines Do Dogs Need in Malaysia?',
  directAnswer:
    'Dogs in Malaysia need core vaccines including DHPP (Distemper, Hepatitis, Parvovirus, Parainfluenza) starting at 6–8 weeks with boosters at 10–12 and 14–16 weeks, plus mandatory annual rabies vaccination. Non-core vaccines like Leptospirosis and Kennel Cough are also strongly recommended.',
  tldr: 'Puppies need 3 rounds of DHPP vaccines at 6–8, 10–12, and 14–16 weeks, plus rabies at 12–16 weeks. Annual boosters are required. Total puppy vaccination costs RM200–RM500. Rabies is mandatory by law in Malaysia. Leptospirosis is highly recommended due to tropical climate.',
  quickFacts: {
    avgCost: 'RM200 – RM500 (puppy series)',
    timeRequired: '3 vet visits over 8–10 weeks',
    difficulty: 'Easy',
    professionalNeeded: 'Yes',
    insuranceCoverage: 'Usually excluded (routine care)',
  },
  detailedAnswer: `Vaccination is the most important preventive health measure for dogs in Malaysia. The tropical climate and high stray population create a higher risk of infectious diseases, making a complete vaccination schedule essential.

Core Vaccines (Mandatory):
DHPP (5-in-1): This combination vaccine protects against Distemper, Hepatitis (Adenovirus), Parvovirus, and Parainfluenza — all potentially fatal diseases. Puppies receive their first dose at 6–8 weeks, second at 10–12 weeks, and third at 14–16 weeks. Annual boosters maintain protection.

Rabies: Rabies vaccination is legally mandatory in Malaysia under the Animals Act 1953 and enforced by the Department of Veterinary Services (DVS). Dogs receive their first rabies shot at 12–16 weeks, with annual boosters required. A valid rabies vaccination certificate is needed for dog licensing.

Non-Core Vaccines (Strongly Recommended):
Leptospirosis: Highly recommended in Malaysia due to our tropical climate with heavy rainfall. Leptospira bacteria thrive in standing water and flood-prone areas. Dogs that go outdoors, visit parks, or live in areas with rodent activity should be vaccinated annually.

Bordetella (Kennel Cough): Recommended for dogs that visit grooming salons, boarding facilities, dog parks, or interact with many other dogs. It's often required by boarding kennels in Malaysia.

Canine Influenza: Less common in Malaysia but recommended for dogs in high-density areas or that travel internationally.

Vaccination Cost: A complete puppy vaccination series (3 rounds of DHPP + rabies) typically costs RM200–RM500 depending on the clinic. Individual annual boosters cost RM60–RM150 per visit. Government clinics and DVS-organized vaccination drives offer lower costs, sometimes as low as RM20–RM30 for rabies.`,
  keyFactors: [
    'Age – Puppies must start DHPP vaccinations at 6–8 weeks; maternal antibodies wear off by this age',
    'Legal Requirement – Rabies vaccination is mandatory by Malaysian law (Animals Act 1953)',
    'Tropical Risk – Leptospirosis is a significant threat in Malaysia due to heavy rainfall and flooding',
    'Booster Schedule – Annual boosters are required to maintain immunity for most vaccines',
    'Lifestyle – Dogs visiting parks, kennels, or grooming salons need additional non-core vaccines',
    'Vaccine Quality – Choose clinics that use internationally recognized vaccine brands (Nobivac, Vanguard)',
    'Record Keeping – Maintain a vaccination booklet; it\'s required for licensing, boarding, and travel',
  ],
  steps: [
    { title: 'First Vet Visit (6–8 weeks)', description: 'Take your puppy for the first DHPP vaccine and a general health check. The vet will create a vaccination booklet and schedule future appointments.' },
    { title: 'Second DHPP Dose (10–12 weeks)', description: 'Return for the second DHPP booster. The vet may also start Leptospirosis vaccination at this visit.' },
    { title: 'Third DHPP + Rabies (14–16 weeks)', description: 'Complete the puppy series with the third DHPP dose and first rabies vaccination. Your puppy is now protected against core diseases.' },
    { title: 'Leptospirosis Booster (16–18 weeks)', description: 'If started at 10–12 weeks, the Leptospirosis booster is due now. This is critical in Malaysia\'s tropical environment.' },
    { title: 'Kennel Cough (Optional, 16+ weeks)', description: 'If your dog will visit boarding facilities, grooming salons, or dog parks, get the Bordetella vaccine.' },
    { title: 'Annual Boosters (Every Year)', description: 'Schedule annual vet visits for DHPP, rabies, and Leptospirosis boosters. Keep your vaccination booklet updated.' },
  ],
  proTips: [
    'Keep your puppy indoors and away from unvaccinated dogs until 2 weeks after the final DHPP dose (around 18 weeks)',
    'Government DVS vaccination drives offer rabies shots for as low as RM20–RM30 — check DVS.gov.my for schedules',
    'Always ask your vet to update the vaccination booklet and keep digital copies of all records',
    'Leptospirosis vaccination is essential if you live in flood-prone areas like parts of Kelantan, Pahang, or Johor',
    'Set annual reminders for booster shots — lapses in vaccination can leave your dog vulnerable',
  ],
  commonMistakes: [
    'Delaying vaccinations until the puppy is "older" — this leaves them vulnerable during the most critical period',
    'Skipping rabies vaccination — it\'s not optional, it\'s legally required in Malaysia and protects against a fatal disease',
    'Taking puppies to public parks before completing the full vaccination series — they can contract Parvovirus from contaminated ground',
    'Not getting Leptospirosis vaccination — this disease is common in tropical Malaysia and can spread to humans',
    'Buying vaccines online and self-administering — improper storage and injection technique can render vaccines ineffective',
  ],
  costComparison: [
    { option: 'Private Vet Clinic (Full Series)', costRange: 'RM200 – RM500', timeRequired: '3 visits / 10 weeks', bestFor: 'Most pet owners', prosCons: 'Comprehensive care / Higher cost' },
    { option: 'Government Clinic', costRange: 'RM50 – RM150', timeRequired: '3 visits / 10 weeks', bestFor: 'Budget-conscious', prosCons: 'Very affordable / Limited availability' },
    { option: 'DVS Vaccination Drive', costRange: 'RM20 – RM30 (rabies)', timeRequired: '1 visit', bestFor: 'Rabies only', prosCons: 'Cheapest option / Core vaccines only' },
    { option: 'Annual Booster (Private)', costRange: 'RM80 – RM150', timeRequired: '1 visit / year', bestFor: 'Adult dogs', prosCons: 'Quick visit / Annual commitment' },
  ],
  relatedQuestions: [
    { question: 'How much does a vet visit cost in Malaysia?', briefAnswer: 'A standard vet consultation costs RM30–RM80. With vaccinations and medications, expect RM100–RM300 per visit.', slug: 'vet-visit-cost-malaysia' },
    { question: 'What are the best dog breeds for Malaysia climate?', briefAnswer: 'Shih Tzu, Poodle, Beagle, and Malaysian Mixed Breeds tolerate tropical heat best.', slug: 'best-dog-breeds-malaysia-climate' },
    { question: 'Do I need a dog license in Malaysia?', briefAnswer: 'Yes, annual dog licensing is required by local councils, costing RM10–RM50. A valid rabies certificate is mandatory.', slug: 'dog-license-malaysia' },
  ],
  citations: [
    { source: 'Department of Veterinary Services Malaysia', title: 'Rabies Vaccination Requirements', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'Malaysian Veterinary Association', title: 'Vaccination Protocol Guidelines', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: 'World Organisation for Animal Health (WOAH)', title: 'Rabies: Malaysia Status', publication: 'WOAH.org', year: '2024' },
    { source: 'Veterinary Research Institute Malaysia', title: 'Leptospirosis in Domestic Animals', publication: 'VRI Report', year: '2023' },
    { source: 'Animals Act 1953 (Malaysia)', title: 'Regulations on Animal Vaccination', publication: 'Federal Gazette', year: '1953 (Amended 2020)' },
  ],
  author: {
    name: 'Dr. Tan Wei Ming',
    credentials: 'DVM, MRCVS, Small Animal Medicine',
    bio: 'Veterinary surgeon with 18 years of practice in Kuala Lumpur and Selangor. Specializes in preventive medicine and infectious disease management for pets in tropical climates.',
  },
  seo: {
    metaDescription: 'Dog vaccination schedule Malaysia: DHPP at 6-8 weeks, rabies at 12-16 weeks, annual boosters. Costs RM200-RM500 for puppy series. Legal requirements explained.',
    keywords: ['dog vaccines malaysia', 'puppy vaccination schedule', 'rabies vaccine malaysia', 'DHPP vaccine', 'dog vaccination cost RM'],
  },
  datePublished: '2024-12-12',
  dateModified: '2025-02-08',
};

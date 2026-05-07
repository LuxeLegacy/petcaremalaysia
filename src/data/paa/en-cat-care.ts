import type { PAAArticle } from '@/lib/paaTypes';

export const catCareArticle: PAAArticle = {
  id: 7,
  slug: 'how-to-care-for-cats-in-malaysia',
  category: 'cat-care',
  lang: 'en',
  title: 'How to Care for Cats in Malaysia? Complete Guide',
  directAnswer:
    'Caring for a cat in Malaysia costs RM150 to RM400 per month. Essentials include quality food (RM80–RM200), monthly flea/tick prevention (RM30–RM60), annual FVRCP and rabies vaccines (RM80–RM200), and one-time spay or neuter (RM150–RM400). Keep cats indoors to avoid traffic and stray-borne disease.',
  tldr: 'Cat care in Malaysia costs RM150–RM400 per month. Budget for premium food, monthly flea prevention, annual FVRCP plus rabies vaccines, and one-time spay or neuter. Indoor housing prevents traffic injury and stray-borne disease in tropical conditions.',
  quickFacts: {
    avgCost: 'RM150 – RM400/month',
    timeRequired: '30–60 minutes daily',
    difficulty: 'Easy to Moderate',
    professionalNeeded: 'Recommended',
    insuranceCoverage: 'Available from RM95/month',
  },
  detailedAnswer: `Malaysia's tropical climate creates unique challenges and advantages for cat ownership. With temperatures averaging 27–33°C year-round and high humidity, cats need specific care considerations.

Housing and Environment: Indoor cats live significantly longer in Malaysia due to risks from traffic, stray animals, and infectious diseases. If your cat goes outdoors, consider a catio or enclosed balcony. Ensure adequate ventilation — cats can suffer from heat stress in poorly ventilated Malaysian homes. Provide multiple water sources and consider a water fountain (RM40–RM150) to encourage hydration.

Nutrition: Feed age-appropriate commercial cat food from reputable brands. Dry food costs RM40–RM120 per month; wet food adds RM50–RM100. Avoid raw fish (common local practice) as it can cause thiamine deficiency. Kittens need kitten-specific formula until 12 months. Fresh water must be available at all times — dehydration is a common issue in Malaysia's heat.

Vaccinations: Core vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies. Kittens start at 6–8 weeks with boosters every 3–4 weeks until 16 weeks. Annual boosters cost RM80–RM200. Rabies vaccination is legally required in some Malaysian states.

Parasite Prevention: Malaysia's warm climate means year-round flea, tick, and worm risk. Monthly spot-on treatments cost RM30–RM60. Deworming every 3 months costs RM15–RM30 per treatment. Check ears regularly for mites, especially in humid conditions.

Grooming: Short-haired cats need weekly brushing; long-haired breeds (Persian, Ragdoll) need daily grooming. Professional grooming costs RM40–RM120 per session. Regular nail trimming prevents furniture damage and injury.

Litter and Hygiene: Quality cat litter costs RM30–RM80 per month. Scoop daily and change completely every 1–2 weeks. In Malaysia's humidity, odour control is critical — consider clumping or crystal litter for better moisture absorption.

Healthcare: Annual check-ups cost RM30–RM80. Spaying (females RM200–RM400) and neutering (males RM150–RM300) are essential for health and population control. Dental checks should start from age 2.`,
  keyFactors: [
    'Climate – Malaysia\'s heat and humidity require extra hydration, ventilation, and year-round parasite prevention',
    'Diet – Quality commercial food (RM80–RM200/month) is essential; avoid raw fish which causes thiamine deficiency',
    'Vaccinations – FVRCP and rabies are core vaccines; annual boosters cost RM80–RM200',
    'Indoor vs Outdoor – Indoor cats live 3–5 years longer on average due to reduced disease and accident risk',
    'Spay/Neuter – One-time cost of RM150–RM400 prevents health issues and unwanted litters',
    'Parasite Control – Year-round treatment needed due to tropical climate; RM30–RM60/month for prevention',
  ],
  steps: [
    { title: 'Set Up a Safe Indoor Space', description: 'Prepare food/water bowls, litter box, scratching post, and hiding spots before bringing your cat home. Budget RM200–RM500 for initial setup.' },
    { title: 'Schedule a Vet Visit', description: 'Take your new cat to a vet within the first week for a health check, vaccinations, and deworming. First visit costs RM80–RM200.' },
    { title: 'Establish a Feeding Routine', description: 'Feed twice daily with measured portions of quality cat food. Provide fresh water in multiple locations around your home.' },
    { title: 'Start Parasite Prevention', description: 'Begin monthly flea/tick treatment and quarterly deworming immediately. Your vet can recommend suitable products for Malaysia\'s climate.' },
    { title: 'Plan for Spaying/Neutering', description: 'Schedule spay/neuter surgery at 4–6 months of age. Many SPCA branches and NGOs offer subsidised rates.' },
    { title: 'Create an Enrichment Routine', description: 'Dedicate 15–30 minutes daily to interactive play. Rotate toys weekly to maintain interest. Consider a cat tree (RM80–RM300).' },
  ],
  proTips: [
    'Freeze water in Kong toys or ice cube trays with treats for heat relief during hot Malaysian afternoons',
    'Place litter boxes away from food and in well-ventilated areas — humidity makes odour worse in Malaysia',
    'Register your cat with local authorities if required by your state — some Malaysian states mandate pet registration',
    'Join Malaysian cat communities on Facebook (e.g., "Cat Lovers Malaysia") for advice and emergency vet recommendations',
    'Keep an emergency fund of RM500–RM1,000 specifically for unexpected vet bills',
  ],
  commonMistakes: [
    'Feeding raw fish regularly — causes thiamine (vitamin B1) deficiency leading to neurological problems',
    'Skipping parasite prevention in "indoor-only" cats — fleas and ticks still enter Malaysian homes easily',
    'Not providing enough water sources — dehydration is one of the top health issues for cats in tropical climates',
    'Letting cats roam freely outdoors — exposes them to FIV, FeLV, traffic, and poisoning risks',
    'Delaying spay/neuter surgery — cats can reproduce from 4 months old, contributing to Malaysia\'s stray crisis',
  ],
  costComparison: [
    { option: 'Basic Cat Care (Monthly)', costRange: 'RM150 – RM250', timeRequired: '30 min/day', bestFor: 'Budget-conscious owners', prosCons: 'Affordable / Covers essentials only' },
    { option: 'Standard Cat Care (Monthly)', costRange: 'RM250 – RM400', timeRequired: '30–45 min/day', bestFor: 'Most cat owners', prosCons: 'Good balance / Includes prevention' },
    { option: 'Premium Cat Care (Monthly)', costRange: 'RM400 – RM700', timeRequired: '45–60 min/day', bestFor: 'Breed cats / show cats', prosCons: 'Comprehensive / Higher cost' },
    { option: 'Initial Setup (One-Time)', costRange: 'RM300 – RM800', timeRequired: '2–3 hours', bestFor: 'New cat owners', prosCons: 'Complete setup / Upfront investment' },
  ],
  relatedQuestions: [
    { question: 'How much does pet insurance cost in Malaysia?', briefAnswer: 'Pet insurance costs RM95–RM300/month. Cat insurance is generally cheaper than dog insurance.', slug: 'how-much-does-pet-insurance-cost-malaysia' },
    { question: 'What vaccines do cats need in Malaysia?', briefAnswer: 'Core vaccines include FVRCP (3-in-1) and rabies. Kittens need a series starting at 6–8 weeks.', slug: 'what-vaccines-do-cats-need-malaysia' },
    { question: 'How to adopt a pet in Malaysia?', briefAnswer: 'Adopt from SPCA, PAWS, or PetFinder.my. Adoption fees range from RM50–RM300 and usually include initial vaccinations.', slug: 'how-to-adopt-pet-malaysia' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'DVS Emergency Hotline', detail: '1-300-88-7170 (Mon-Fri 8am-5pm)' },
      { name: 'SPCA Selangor', detail: '03-4256 5312' },
    ],
    governmentResources: [
      { name: 'Jabatan Perkhidmatan Veterinar (DVS)', detail: 'Government vet clinics and animal welfare', url: 'https://www.dvs.gov.my' },
    ],
    animalWelfare: [
      { name: 'SPCA Malaysia', detail: 'Subsidised spay/neuter and vet care', url: 'https://www.spca.org.my' },
      { name: 'PAWS Animal Welfare Society', detail: 'Rescue, rehome, and education', url: 'https://www.pfrompaws.org' },
      { name: 'PetFinder.my', detail: 'Cat adoption and vet directory', url: 'https://www.petfinder.my' },
    ],
  },
  insurance: {
    covered: ['Illness treatment', 'Accident coverage', 'Surgery and hospitalisation', 'Diagnostic tests'],
    exclusions: ['Routine vaccinations', 'Grooming', 'Pre-existing conditions', 'Breeding-related costs', 'Dental cleaning'],
    claimSteps: ['Visit any registered vet and pay upfront', 'Collect itemised receipt and medical report', 'Submit claim via insurer app within 30 days', 'Receive reimbursement in 7–14 business days'],
  },
  citations: [
    { source: 'Department of Veterinary Services Malaysia', title: 'Pet Ownership Guidelines', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'Malaysian Small Animal Veterinary Association', title: 'Feline Care Standards', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: 'World Small Animal Veterinary Association', title: 'WSAVA Vaccination Guidelines', publication: 'WSAVA.org', year: '2024', url: 'https://wsava.org' },
  ],
  author: {
    name: 'Dr. Aisha Rahman',
    credentials: 'DVM, Feline Medicine Certificate',
    bio: 'Feline veterinary specialist practising in Kuala Lumpur with 10 years of experience. Advocates for responsible cat ownership and indoor cat welfare in Malaysia\'s tropical climate.',
  },
  seo: {
    metaDescription: 'Complete guide to cat care in Malaysia: costs (RM150-RM400/month), vaccinations, nutrition, parasite prevention, and tropical climate tips for healthy cats.',
    keywords: ['cat care malaysia', 'how to care for cats malaysia', 'cat cost malaysia', 'cat vaccination malaysia', 'kitten care guide', 'indoor cat malaysia'],
  },
  datePublished: '2025-01-20',
  dateModified: '2025-02-08',
};

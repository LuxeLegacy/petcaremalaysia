import type { PAAArticle } from '@/lib/paaTypes';

export const petTravelArticle: PAAArticle = {
  id: 10,
  slug: 'pet-travel-requirements-malaysia',
  category: 'pet-travel',
  lang: 'en',
  title: 'What Are the Pet Travel Requirements in Malaysia?',
  directAnswer:
    'Travelling with pets to/from Malaysia requires a valid import/export permit from DVS (RM50–RM200), rabies vaccination (at least 30 days before travel), microchip implantation, health certificate from a licensed vet, and airline-approved carrier. The entire process takes 4–8 weeks and costs RM500–RM3,000 depending on destination and airline.',
  tldr: 'Pet travel from Malaysia involves DVS permits (RM50–RM200), rabies vaccination + titre test, microchip, vet health certificate, and airline booking. Start preparations 8–12 weeks before travel. Costs range from RM500 for domestic travel to RM3,000+ for international. Pet relocation agents charge RM2,000–RM8,000 for full service.',
  quickFacts: {
    avgCost: 'RM500 – RM3,000+ (DIY)',
    timeRequired: '4–12 weeks preparation',
    difficulty: 'Moderate to Difficult',
    professionalNeeded: 'Recommended',
    insuranceCoverage: 'Travel insurance for pets available separately',
  },
  detailedAnswer: `Travelling with pets in Malaysia — whether domestically or internationally — requires careful planning and documentation. The Department of Veterinary Services (DVS/JPV) regulates all pet movement to prevent disease transmission.

Domestic Travel Within Malaysia:
- By Car: No permits required for travel within Peninsular Malaysia. Keep vaccination records handy. Between Peninsular and East Malaysia (Sabah/Sarawak), a DVS permit is required.
- By Air (Domestic): Airlines like AirAsia and Malaysia Airlines accept pets in cargo. Booking fees range from RM100–RM500 depending on pet size and route. IATA-approved carrier required.
- By Train/Bus: KTM and most bus services do not allow pets. Private transport or driving is the main alternative.

International Travel — Exporting Pets FROM Malaysia:
1. Microchip: ISO-standard 15-digit microchip (RM50–RM100) must be implanted before or on the same day as rabies vaccination.
2. Rabies Vaccination: Must be administered at least 30 days before travel. Cost: RM40–RM80. Some countries require a rabies titre test (RM200–RM400) showing adequate antibody levels.
3. DVS Export Permit: Apply through DVS at least 7 working days before departure. Fee: RM50–RM100. Requires vaccination records, microchip details, and destination country requirements.
4. Health Certificate: Issued by a DVS-appointed vet within 7 days of departure. Must certify the pet is healthy and free from infectious diseases.
5. Destination Country Requirements: Each country has unique import rules. EU countries require EU health certificates. Australia/NZ have the strictest requirements with 10-day quarantine minimum. Singapore is relatively straightforward.

International Travel — Importing Pets TO Malaysia:
- Import permit from Malaysian DVS (apply online, RM50–RM200)
- Valid rabies vaccination certificate
- Health certificate from origin country's veterinary authority
- 7-day quarantine at KLIA Quarantine Station (RM30–RM50/day)
- Banned breeds cannot be imported (Pit Bull Terrier, Japanese Tosa, Akita, Dogo Argentino, Fila Brasileiro)

Airline Options:
- Malaysia Airlines: Pets in cargo only. RM200–RM800 depending on route and size.
- AirAsia: Pets in cargo only on selected routes. RM150–RM500.
- Singapore Airlines: Pets in cargo. Known for reliable handling.
- Cathay Pacific: One of the more pet-friendly international carriers.

Pet Relocation Agents: Professional pet movers handle all documentation, vet visits, airport procedures, and customs clearance. Costs range from RM2,000–RM8,000 depending on destination. Recommended for first-time international pet travel or complex destinations.`,
  keyFactors: [
    'Destination Rules – Every country has different import requirements; research 8–12 weeks in advance',
    'Rabies Vaccination Timing – Must be given at least 30 days before travel; some countries require 6 months advance',
    'DVS Permits – Export permits take 7+ working days to process; don\'t leave this to the last minute',
    'Airline Policies – Not all airlines accept pets; cargo space is limited and must be booked early',
    'Microchip Standard – Must be ISO 11784/11785 compliant (15-digit); non-standard chips may not be readable at destination',
    'Banned Breeds – Malaysia bans import/ownership of several breeds; check the DVS banned breed list',
  ],
  steps: [
    { title: 'Research Destination Requirements', description: 'Contact the destination country\'s embassy or agriculture department for exact pet import rules. Requirements vary dramatically between countries.' },
    { title: 'Visit Your Vet (8–12 Weeks Before)', description: 'Get microchip implanted, rabies vaccination administered, and discuss any additional vaccines or tests required by the destination country.' },
    { title: 'Get Rabies Titre Test (If Required)', description: 'Some countries (EU, Australia, Japan) require blood tests showing adequate rabies antibodies. Results take 2–4 weeks. Cost: RM200–RM400.' },
    { title: 'Apply for DVS Export Permit', description: 'Submit application to DVS at least 7 working days before departure with all vaccination records and destination requirements documentation.' },
    { title: 'Book Airline and Carrier', description: 'Reserve pet cargo space well in advance. Purchase an IATA-approved carrier sized for your pet (standing, turning, lying down). RM150–RM500 for the carrier.' },
    { title: 'Get Final Health Certificate', description: 'Visit a DVS-appointed vet within 7 days of departure for the final health certificate. Bring all documentation for endorsement.' },
    { title: 'Airport Day Preparation', description: 'Arrive 3–4 hours early. Bring all original documents, carrier with absorbent bedding, frozen water bowl, and familiar-smelling blanket for comfort.' },
  ],
  proTips: [
    'Start the process 12 weeks early for international travel — unexpected delays in titre tests or permits are common',
    'Join Facebook groups like "Pet Relocation Malaysia" for first-hand advice and recommended agents',
    'Avoid travelling during Malaysian school holidays and festive seasons when cargo space fills up fast',
    'Practice crate training 4–6 weeks before travel so your pet is comfortable in the carrier',
    'Consider hiring a pet relocation agent for first-time international moves — the RM2,000–RM5,000 fee often saves stress and prevents costly documentation errors',
  ],
  commonMistakes: [
    'Starting preparations too late — international pet travel needs 8–12 weeks minimum preparation',
    'Assuming all airlines accept pets — some routes and aircraft don\'t allow pet cargo; book early',
    'Using a non-ISO microchip — destination scanners may not read non-standard chips, causing quarantine delays',
    'Forgetting about return trip requirements — Malaysia requires import permits even for pets returning home',
    'Sedating pets for flights — most airlines and vets discourage sedation as it increases health risks at altitude',
  ],
  costComparison: [
    { option: 'Domestic (Peninsular)', costRange: 'RM100 – RM500', timeRequired: '1–3 days prep', bestFor: 'Local travel', prosCons: 'Simple process / Limited to car or cargo flights' },
    { option: 'International DIY (Singapore)', costRange: 'RM500 – RM1,500', timeRequired: '4–6 weeks', bestFor: 'Experienced pet owners', prosCons: 'Cost effective / Requires research' },
    { option: 'International DIY (EU/US/AU)', costRange: 'RM1,500 – RM3,000', timeRequired: '8–12 weeks', bestFor: 'Budget-conscious owners', prosCons: 'Saves money / Complex documentation' },
    { option: 'Professional Relocation Agent', costRange: 'RM2,000 – RM8,000', timeRequired: '6–12 weeks', bestFor: 'First-time international travel', prosCons: 'Stress-free / Most expensive' },
  ],
  relatedQuestions: [
    { question: 'How much does pet insurance cost in Malaysia?', briefAnswer: 'Pet insurance costs RM95–RM300/month. Some policies include travel coverage add-ons.', slug: 'how-much-does-pet-insurance-cost-malaysia' },
    { question: 'How much does a vet visit cost in Malaysia?', briefAnswer: 'Vet consultations cost RM30–RM80. Travel health certificates cost RM50–RM150 additional.', slug: 'how-much-does-vet-visit-cost-malaysia' },
    { question: 'What vaccines do dogs need in Malaysia?', briefAnswer: 'Core vaccines include distemper, parvovirus, and rabies. Rabies is essential for pet travel.', slug: 'what-vaccines-do-dogs-need-malaysia' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'DVS Import/Export Unit', detail: '03-8870 2000 (Mon-Fri 8am-5pm)' },
      { name: 'KLIA Quarantine Station', detail: '03-8787 4252' },
    ],
    governmentResources: [
      { name: 'DVS Pet Travel Portal', detail: 'Official permits and requirements', url: 'https://www.dvs.gov.my' },
      { name: 'Malaysian Quarantine & Inspection Services (MAQIS)', detail: 'Airport quarantine procedures', url: 'https://www.maqis.gov.my' },
    ],
    animalWelfare: [
      { name: 'Pet Movers Malaysia', detail: 'Professional pet relocation services' },
      { name: 'Ferndale Kennels & Cattery', detail: 'Pet boarding and travel assistance', url: 'https://www.ferndale.com.my' },
    ],
  },
  insurance: {
    covered: ['Travel-related vet emergencies (with add-on)', 'Lost pet during transit (select policies)', 'Trip cancellation due to pet illness'],
    exclusions: ['Standard travel costs', 'Airline cargo fees', 'Quarantine boarding fees', 'Documentation and permit costs'],
    claimSteps: ['Purchase pet travel insurance add-on before departure', 'Document any incidents during travel with photos and vet reports', 'Submit claim with all supporting documents within 30 days', 'Follow up with insurer for processing updates'],
  },
  citations: [
    { source: 'Department of Veterinary Services Malaysia', title: 'Pet Import & Export Procedures', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'International Air Transport Association', title: 'Live Animals Regulations (LAR)', publication: 'IATA.org', year: '2024', url: 'https://www.iata.org' },
    { source: 'Malaysian Quarantine & Inspection Services', title: 'Animal Quarantine Requirements', publication: 'MAQIS.gov.my', year: '2024', url: 'https://www.maqis.gov.my' },
    { source: 'Malaysia Airlines', title: 'Pet Travel Policy', publication: 'MalaysiaAirlines.com', year: '2024', url: 'https://www.malaysiaairlines.com' },
  ],
  author: {
    name: 'Dr. Mei Ling Tan',
    credentials: 'DVM, Certified Pet Travel Consultant',
    bio: 'Veterinarian with 8 years of experience specialising in pet travel health certifications. Has assisted over 500 families relocate pets internationally from Malaysia.',
  },
  seo: {
    metaDescription: 'Pet travel requirements for Malaysia: DVS permits, rabies vaccination, microchip, airline rules & costs (RM500-RM3,000). Complete step-by-step guide.',
    keywords: ['pet travel malaysia', 'bring pet to malaysia', 'DVS pet export permit', 'pet relocation malaysia', 'fly with pet malaysia', 'pet import malaysia'],
  },
  datePublished: '2025-02-01',
  dateModified: '2025-02-08',
};

import type { AuthorityHubConfig, AuthorityPage, AuthorityAuthor } from '../authority/types';

export const DOG_SKIN_BASE_PATH = '/dog-skin-problems';

const AUTHOR_EN: AuthorityAuthor = {
  name: 'Dr. Aisha Tan',
  credentials: 'DVM, Member of Malaysian Veterinary Council',
  bio: 'Companion-animal dermatology focus, 10+ years clinical practice across Klang Valley clinics.',
};
const AUTHOR_MS: AuthorityAuthor = {
  name: 'Dr. Aisha Tan',
  credentials: 'DVM, Ahli Majlis Veterinar Malaysia',
  bio: 'Tumpuan dermatologi haiwan kesayangan, 10+ tahun pengalaman klinikal di Lembah Klang.',
};
const AUTHOR_ZH: AuthorityAuthor = {
  name: 'Dr. Aisha Tan',
  credentials: 'DVM，马来西亚兽医委员会会员',
  bio: '专注于伴侣动物皮肤病学，在巴生谷地区拥有超过10年临床经验。',
};

const RELATED_EN = [
  { label: 'Pet Emergency Assessment (Free)', path: '/assessment' },
  { label: 'Pet Surgery Cost Calculator', path: '/qa/article/pet-surgery-cost-malaysia' },
  { label: 'Find a Vet Near You', path: '/vet-clinics' },
  { label: 'Pet Emergency Guide', path: '/emergency-guide' },
];
const RELATED_MS = [
  { label: 'Penilaian Kecemasan Haiwan (Percuma)', path: '/ms/assessment' },
  { label: 'Kalkulator Kos Pembedahan Haiwan', path: '/ms/qa/article/pet-surgery-cost-malaysia' },
  { label: 'Cari Vet Berdekatan', path: '/ms/vet-clinics' },
  { label: 'Panduan Kecemasan Haiwan', path: '/ms/emergency-guide' },
];
const RELATED_ZH = [
  { label: '宠物紧急评估（免费）', path: '/zh/assessment' },
  { label: '宠物手术费用计算器', path: '/zh/qa/article/pet-surgery-cost-malaysia' },
  { label: '查找附近兽医', path: '/zh/vet-clinics' },
  { label: '宠物紧急指南', path: '/zh/emergency-guide' },
];

const CITATIONS = [
  { title: 'Small Animal Dermatology, 8th Edition', source: 'Miller, Griffin & Campbell — Elsevier', url: 'https://www.elsevier.com/books/T/A/9781416000280', year: '2023' },
  { title: 'WSAVA Dermatology Guidelines for Companion Animals', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/global-guidelines/', year: '2023' },
  { title: 'Banfield State of Pet Health Report', source: 'Banfield Pet Hospital', url: 'https://www.banfield.com/state-of-pet-health', year: '2024' },
  { title: 'Veterinary Surgeons Act 1974 (Act 147)', source: 'Department of Veterinary Services Malaysia', url: 'https://www.dvs.gov.my/', year: '2024' },
];

// ============================================================
// ENGLISH PAGES
// ============================================================

const enHub: AuthorityPage = {
  slug: 'hub', kind: 'hub', category: 'Hub', lang: 'en',
  title: 'Dog Skin Problems in Malaysia: Itching, Hot-Spots, Mange & More',
  snippetForAI: 'Dog skin problems are the #1 reason for vet visits in tropical climates like Malaysia. The most common causes are flea allergy dermatitis, environmental allergies, hot-spots, ringworm, mange (sarcoptic and demodectic), and bacterial or yeast infections. Most cases need veterinary diagnosis — never use human creams or steroids without a vet.',
  tldr: [
    'Skin disease accounts for ~25% of all canine vet visits in Malaysia',
    'Humidity + heat make bacterial and yeast infections progress fast — within days, not weeks',
    'Hot-spots can double in size in 24 hours if untreated',
    'Mange is contagious — both sarcoptic (to humans too) and demodectic',
    'Never apply human eczema cream, hydrocortisone, or steroids without a vet',
  ],
  quickFacts: [
    { label: 'Top 3 Causes (Malaysia)', value: 'Flea allergy, atopic dermatitis, yeast' },
    { label: 'Vet Consult (basic)', value: 'RM50–RM120' },
    { label: 'Skin Scraping + Cytology', value: 'RM80–RM200' },
    { label: 'Allergy Workup', value: 'RM400–RM1,500' },
    { label: 'Reversible If Caught Early', value: 'Yes — most cases' },
    { label: 'Self-treatment Risk', value: 'High — worsens infection' },
  ],
  malaysiaContext: 'Malaysia\'s year-round humidity (typically 70–90%) and warm temperatures create ideal conditions for Malassezia yeast, Staphylococcus bacteria, and fleas. Tropical breeds like Shih Tzu, Bulldog, Cocker Spaniel and Westie suffer disproportionately. The Department of Veterinary Services (DVS) and registered private clinics handle most cases; severe atopic dermatitis may need referral to a board-certified dermatologist (currently limited to a few specialists in KL, Penang, and Johor Bahru).',
  statistics: [
    { stat: 'Skin disease is the #1 cause of veterinary visits in tropical Asia', source: 'WSAVA Dermatology Guidelines, 2023' },
    { stat: '~15% of dogs worldwide have canine atopic dermatitis (CAD)', source: 'Veterinary Dermatology Journal, 2022' },
    { stat: 'Flea allergy dermatitis remains the most common pruritic skin disease in tropical climates', source: 'Banfield State of Pet Health, 2024' },
  ],
  costRange: [
    { item: 'Basic vet consult', range: 'RM50–RM120' },
    { item: 'Skin scraping + cytology', range: 'RM80–RM200' },
    { item: 'Antibiotic/antifungal course (2 weeks)', range: 'RM80–RM250' },
    { item: 'Medicated shampoo', range: 'RM45–RM120' },
    { item: 'Allergy testing (intradermal/serology)', range: 'RM800–RM1,800' },
    { item: 'Apoquel® / Cytopoint® monthly', range: 'RM150–RM450' },
  ],
  citations: CITATIONS,
  keyTakeaways: [
    'Skin issues escalate fast in Malaysia — book a vet within 48 hours if itching is severe',
    'A correct diagnosis (scraping, cytology, fungal culture) saves money long-term',
    'Year-round flea + tick prevention is non-negotiable in Malaysia',
    'Don\'t use human skincare or steroids — they mask symptoms and worsen infections',
  ],
  overview: `If your dog is scratching, licking, or losing fur, you are not alone — skin problems are the most common reason Malaysian pet owners visit the vet. The country's tropical climate, with humidity often above 80% and temperatures rarely below 24 °C, creates a near-perfect environment for fleas, bacteria, and yeast to thrive on canine skin.

This hub gives you a no-nonsense field guide. You'll learn how to recognise the difference between a hot-spot and a yeast infection, why mange is a household-wide problem, when ringworm becomes a human risk, and exactly when to stop home-monitoring and book a vet. Every page is reviewed by a Malaysian-licensed veterinarian and references current dermatology research.`,
  categoryCards: [
    { title: 'Hot-Spots (Acute Moist Dermatitis)', description: 'Fast-spreading red, oozing patches — most common in humid weather.', path: '/dog-skin-problems/conditions/hot-spots', icon: '🔥' },
    { title: 'Sarcoptic & Demodectic Mange', description: 'Contagious mites — sarcoptic can spread to humans.', path: '/dog-skin-problems/conditions/mange', icon: '🐛' },
    { title: 'Ringworm (Dermatophytosis)', description: 'A fungal infection (not a worm) — zoonotic and contagious.', path: '/dog-skin-problems/conditions/ringworm', icon: '⭕' },
    { title: 'Allergic Dermatitis', description: 'Flea, food and environmental allergies — Malaysia\'s top cause of chronic itch.', path: '/dog-skin-problems/conditions/allergic-dermatitis', icon: '🌿' },
    { title: 'Yeast Infection (Malassezia)', description: 'Greasy, smelly skin & ears — thrives in tropical humidity.', path: '/dog-skin-problems/conditions/yeast-infection', icon: '🍞' },
    { title: 'Itching & Scratching', description: 'When is itching normal vs. when does it need the vet?', path: '/dog-skin-problems/symptoms/itching', icon: '🐾' },
    { title: 'Hair Loss (Alopecia)', description: 'Patchy, symmetric, or full-body — what each pattern means.', path: '/dog-skin-problems/symptoms/hair-loss', icon: '✂️' },
    { title: 'Skin Emergencies', description: 'Red-flag signs that need same-day vet care.', path: '/dog-skin-problems/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: {
    text: 'Severe swelling, open bleeding wounds, collapse, or breathing trouble after a sting/bite? This is an emergency.',
    linkText: 'See Emergency Signs',
    linkPath: '/dog-skin-problems/emergency-signs',
  },
  faqs: [
    { question: 'Why does my dog\'s skin smell so bad?', answer: 'A musty or "corn-chip" odour usually means a yeast (Malassezia) overgrowth. A sour, rancid smell often points to a bacterial infection. Both need vet-diagnosed treatment — over-the-counter shampoos rarely clear the underlying cause.' },
    { question: 'Can I use human eczema cream on my dog?', answer: 'No. Most human creams contain ingredients (steroids, zinc, salicylates) that are either toxic if licked or that mask infection so badly that the underlying problem worsens. Always get a vet diagnosis first.' },
    { question: 'How much will a skin consultation cost in Malaysia?', answer: 'A basic consultation is RM50–RM120. Add RM80–RM200 for diagnostics like skin scraping and cytology. A full allergy workup can reach RM1,500. Catching problems early keeps total costs low.' },
    { question: 'Is mange contagious to humans?', answer: 'Sarcoptic mange (scabies) can transfer to humans and cause an itchy rash for a few weeks. Demodectic mange does not normally affect humans. Either way, treat the dog and clean bedding with hot water.' },
    { question: 'How fast can a hot-spot get worse?', answer: 'In Malaysian humidity, a hot-spot can double in size within 12–24 hours. Same-day vet care is strongly recommended.' },
  ],
  seo: {
    metaTitle: 'Dog Skin Problems Malaysia | Itching, Hot-Spots, Mange Hub',
    metaDescription: 'Vet-reviewed guide to dog skin problems in Malaysia: hot-spots, mange, ringworm, allergies, yeast, hair loss. Symptoms, costs (RM), emergency signs.',
    keywords: ['dog skin problems Malaysia', 'dog itching', 'hot spot dog', 'mange dog', 'ringworm dog', 'yeast infection dog'],
  },
  author: AUTHOR_EN,
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  relatedLinks: RELATED_EN,
};

const enHotSpots: AuthorityPage = {
  slug: 'hot-spots', kind: 'article', categorySlug: 'conditions', category: 'Skin Conditions', lang: 'en',
  title: 'Hot-Spots in Dogs (Acute Moist Dermatitis)',
  snippetForAI: 'A hot-spot is a fast-spreading, red, moist, painful patch of skin caused by self-trauma — usually from itching, licking, or biting. In Malaysian humidity, hot-spots can double in size within 24 hours. Treatment requires clipping the hair, cleaning, prescription antibiotics or antifungals, and stopping the self-trauma with an e-collar.',
  tldr: [
    'A hot-spot is an emergency-tier skin lesion, not a "wait and see" issue',
    'Triggers: flea bite, allergy, ear infection, anal gland issue, matted coat',
    'Untreated hot-spots can become deep pyoderma in 2–3 days',
    'E-collar (cone) use is essential to break the lick-itch cycle',
    'Never apply hydrogen peroxide — it damages healing tissue',
  ],
  quickFacts: [
    { label: 'Onset', value: 'Hours, not days' },
    { label: 'Most Affected Breeds', value: 'Golden Retriever, Labrador, Bulldog' },
    { label: 'Vet Visit Cost', value: 'RM120–RM350' },
    { label: 'Healing Time', value: '7–14 days with treatment' },
    { label: 'Recurrence Risk', value: 'High if trigger not identified' },
  ],
  malaysiaContext: 'High humidity in Malaysia traps moisture against the skin under thick double-coated breeds (Golden Retriever, Husky) and dense single-coats (Bulldog). Indoor air-conditioning followed by outdoor walks creates condensation in the coat — a known hot-spot accelerator. Year-round flea protection is critical because flea allergy dermatitis is the #1 hot-spot trigger locally.',
  costRange: [
    { item: 'Vet consult + clipping + clean', range: 'RM120–RM250' },
    { item: 'Topical + oral antibiotic course', range: 'RM80–RM200' },
    { item: 'E-collar (cone)', range: 'RM25–RM80' },
    { item: 'Follow-up visit', range: 'RM50–RM120' },
  ],
  hasEmergencyOverride: false,
  overview: `Hot-spots — clinically called acute moist dermatitis or pyotraumatic dermatitis — are the dermatology emergency most owners under-react to. What looks like a small red patch in the morning can become a coin-sized open, weeping wound by evening. Bacteria (commonly Staphylococcus pseudintermedius) explode on the warm, moist surface and the dog responds by licking even more.

The lesion is the symptom, not the diagnosis. Behind almost every hot-spot is a trigger: a flea bite, allergy flare, ear infection making the dog scratch the side of the neck, anal gland irritation making it bite the rump, or a matted coat trapping moisture. Treatment that ignores the trigger guarantees recurrence.`,
  sections: [
    {
      heading: 'How a Hot-Spot Develops',
      body: `A self-trauma cycle begins: the dog feels itch (from any cause), licks or scratches, breaks the skin surface, bacteria colonise the moist wound, more itch follows, more licking, deeper wound. In 12–24 hours of Malaysian humidity, a pin-point can become a 5 cm raw patch.

The hair around the lesion often masks how severe it is. Clipping with a vet-grade clipper is part of the diagnosis — owners are often shocked at what is hidden under the fur.`,
    },
    {
      heading: 'How Vets Treat It',
      body: `Standard veterinary protocol involves: (1) clip the hair widely around the lesion, (2) clean with a vet-grade chlorhexidine solution, (3) prescribe a topical antibiotic/steroid combination, (4) systemic oral antibiotic if deep, (5) an e-collar to break the lick cycle, (6) identify and treat the trigger.

In Malaysia this is well within the scope of any general-practice vet — referral is rarely needed unless the case is recurrent or there is suspected immune disease.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags — Same-Day Vet', redFlag: true, items: ['Lesion larger than 3 cm in diameter', 'Pus, foul smell, or yellow discharge', 'Dog refuses to let you touch the area (severe pain)', 'Fever (>39.5 °C rectal) or lethargy', 'Multiple hot-spots appearing in 24 hours'] },
    { heading: 'What NOT to Do', items: ['Do not apply hydrogen peroxide, alcohol, or iodine — they damage healing tissue', 'Do not use human steroid creams (e.g. hydrocortisone, betamethasone)', 'Do not bandage tightly — traps moisture and worsens it', 'Do not skip the e-collar — dogs WILL lick it open again'] },
  ],
  whenToSeeVet: 'Book a same-day appointment if the lesion is larger than a 50 sen coin, appeared in under 24 hours, smells bad, has pus, or your dog is in obvious pain. Hot-spots respond very well to early treatment but degrade quickly when delayed.',
  citations: CITATIONS,
  keyTakeaways: [
    'Hot-spots are time-sensitive — don\'t wait 2–3 days "to see if it heals"',
    'E-collar use is non-negotiable during treatment',
    'Always investigate the trigger (fleas, allergies, ear infection)',
    'Avoid human creams — they delay healing and mask infection',
  ],
  faqs: [
    { question: 'Will a hot-spot heal on its own?', answer: 'Rarely in Malaysia\'s humidity. Without intervention, most hot-spots get larger and deeper within 24–48 hours.' },
    { question: 'Can I treat a hot-spot at home?', answer: 'You can keep the area dry and put on an e-collar while waiting for the vet, but home treatment alone usually fails because the lesion needs clipping, antiseptic cleaning, and prescription medication.' },
    { question: 'How long does treatment take?', answer: 'With prompt vet care, most hot-spots heal in 7–14 days. Severe cases or those with deep pyoderma may need 3–4 weeks.' },
    { question: 'Will it come back?', answer: 'Likely yes if the underlying trigger (fleas, allergies, otitis) isn\'t identified and managed. Year-round flea prevention is the single biggest preventive step in Malaysia.' },
  ],
  seo: {
    metaTitle: 'Hot-Spots in Dogs Malaysia | Acute Moist Dermatitis Guide',
    metaDescription: 'Vet guide to dog hot-spots in Malaysia: causes, treatment, costs (RM120–RM350), red flags, and prevention. Stop the lick-itch cycle today.',
    keywords: ['dog hot spot Malaysia', 'acute moist dermatitis', 'dog skin infection', 'pyotraumatic dermatitis dog'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enMange: AuthorityPage = {
  slug: 'mange', kind: 'article', categorySlug: 'conditions', category: 'Skin Conditions', lang: 'en',
  title: 'Mange in Dogs: Sarcoptic vs. Demodectic',
  snippetForAI: 'Mange is a skin disease caused by microscopic mites. The two main types in Malaysian dogs are sarcoptic mange (highly contagious, can transmit to humans, causes intense itching) and demodectic mange (not contagious, caused by Demodex mites that overgrow when immunity drops). Diagnosis requires a skin scraping; treatment is highly effective with modern prescription parasiticides.',
  tldr: [
    'Sarcoptic mange is zoonotic — humans can catch it (scabies-like rash)',
    'Demodectic mange usually signals underlying immune weakness',
    'Both require skin scrapings — NOT a diagnosis by sight',
    'Modern isoxazoline tablets (Bravecto®, NexGard®) clear most cases',
    'Bedding must be hot-washed and the whole household pet-checked',
  ],
  quickFacts: [
    { label: 'Sarcoptic Itch Level', value: 'Severe (incessant scratching)' },
    { label: 'Demodex Common In', value: 'Puppies + immunocompromised dogs' },
    { label: 'Skin Scraping Cost', value: 'RM60–RM150' },
    { label: 'Treatment Cost (course)', value: 'RM250–RM700' },
    { label: 'Cure Rate', value: '>95% with proper protocol' },
  ],
  malaysiaContext: 'Sarcoptic mange spreads easily in shelters and multi-dog homes — common in Malaysia where adopted strays are popular. Demodicosis is most often seen in young pedigree dogs (Bulldog, Pug, French Bulldog) and in older dogs with concurrent illness. DVS-registered clinics across Malaysia carry isoxazoline-class parasiticides, which have largely replaced older, harsher protocols.',
  costRange: [
    { item: 'Skin scraping diagnosis', range: 'RM60–RM150' },
    { item: 'Isoxazoline tablet course', range: 'RM250–RM550' },
    { item: 'Medicated shampoo (4 weeks)', range: 'RM80–RM180' },
    { item: 'Repeat scraping (cure check)', range: 'RM50–RM120' },
  ],
  overview: `Mange is one of the most over-diagnosed and self-diagnosed conditions in Malaysian pet care. Owners see crusty skin and patchy hair loss, search online, and start home treatments — but real mange requires a microscopic skin scraping to confirm. Many lookalike conditions (yeast infection, allergic dermatitis, ringworm) are treated very differently.

Knowing which type your dog has matters because sarcoptic mange is contagious to humans and other pets, while demodectic mange usually flags an underlying immune issue that also needs addressing.`,
  sections: [
    {
      heading: 'Sarcoptic Mange (Scabies)',
      body: `Caused by Sarcoptes scabiei var. canis. The hallmark is intense itching — dogs scratch themselves raw, especially at ear edges, elbows, and belly. Highly contagious to other dogs and can cause a transient itchy rash in humans (it dies on humans but the bites are very uncomfortable).

Diagnosis is by deep skin scraping or response-to-treatment trial. Modern oral isoxazolines (a single dose of fluralaner or sarolaner) clear most cases in under a month.`,
    },
    {
      heading: 'Demodectic Mange (Demodicosis)',
      body: `Caused by Demodex canis, a mite that normally lives in healthy skin in tiny numbers. It overgrows when immunity is reduced — common in puppies (immature immune system) and adult dogs with underlying disease, malnutrition, or steroid use.

Localised demodicosis often resolves without treatment. Generalised demodicosis (lesions over large body areas) needs aggressive parasiticide treatment plus investigation into the underlying immune trigger.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Bleeding skin from self-trauma', 'Secondary bacterial infection (pus, smell)', 'Lethargy, fever, weight loss', 'Children or immunocompromised adults developing itchy rash', 'Demodicosis in an adult (>4 yr) dog — investigate underlying disease'] },
    { heading: 'Avoid These DIY Treatments', items: ['Used motor oil, kerosene, sulphur baths — toxic and outdated', 'Garlic oil — toxic to dogs', 'Human scabies cream (permethrin OK, but only on vet advice — cats nearby can die from permethrin)', 'Stopping treatment after 1 negative scraping — need 2 consecutive negatives'] },
  ],
  whenToSeeVet: 'Any time your dog has persistent intense itching, patchy hair loss, or you (or a family member) develop a new itchy rash after handling the dog. Skin scrapings are inexpensive and the only reliable way to confirm mange.',
  citations: CITATIONS,
  keyTakeaways: ['Don\'t self-diagnose — get a skin scraping', 'Isoxazoline tablets have transformed treatment success rates', 'Sarcoptic mange = household problem, treat all pets and wash bedding hot', 'Adult-onset demodex always needs underlying disease workup'],
  faqs: [
    { question: 'Can I catch mange from my dog?', answer: 'Sarcoptic mange can cause a temporary itchy rash in humans. Demodex mites are species-specific and do not infect humans.' },
    { question: 'How long does treatment take?', answer: 'Sarcoptic mange: typically 2–4 weeks with modern isoxazolines. Demodicosis: 1–6 months depending on severity and underlying triggers.' },
    { question: 'Is mange a sign of neglect?', answer: 'Not always. Demodex can affect well-cared-for pedigree puppies. Sarcoptes is contagious — even spotless dogs can catch it from a park or boarding kennel.' },
    { question: 'Can I use the same flea-tick chewable my dog already takes?', answer: 'Some isoxazoline-class flea-tick products are licensed for mange treatment, but the dose and frequency differ. Confirm with your vet — don\'t guess.' },
  ],
  seo: {
    metaTitle: 'Mange in Dogs Malaysia | Sarcoptic vs Demodectic Treatment',
    metaDescription: 'Vet guide to dog mange in Malaysia. Sarcoptic vs demodectic mange — symptoms, diagnosis, treatment, costs (RM250–RM700), zoonotic risk.',
    keywords: ['dog mange Malaysia', 'sarcoptic mange', 'demodectic mange', 'dog scabies Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enRingworm: AuthorityPage = {
  slug: 'ringworm', kind: 'article', categorySlug: 'conditions', category: 'Skin Conditions', lang: 'en',
  title: 'Ringworm in Dogs (Dermatophytosis)',
  snippetForAI: 'Ringworm is a fungal skin infection — not a worm. It is caused by dermatophyte fungi (most often Microsporum canis), appears as circular hair-loss patches, and is contagious to other pets and humans. Diagnosis requires a fungal culture or PCR test; treatment combines oral antifungals and topical lime-sulphur or miconazole-chlorhexidine washes for 4–8 weeks.',
  tldr: [
    'Ringworm is a fungus, NOT a worm — never use deworming medicine',
    'Classic look: small circular patch of hair loss with crusty centre',
    'Children and elderly are most likely to catch it from a pet',
    'Wood\'s lamp screening misses up to 50% of cases — culture is gold standard',
    'Environmental decontamination is as important as treating the pet',
  ],
  quickFacts: [
    { label: 'Most Common Fungus', value: 'Microsporum canis' },
    { label: 'Incubation Period', value: '1–4 weeks' },
    { label: 'Diagnosis Cost', value: 'RM150–RM400' },
    { label: 'Treatment Duration', value: '4–8 weeks' },
    { label: 'Zoonotic', value: 'Yes (especially children)' },
  ],
  malaysiaContext: 'Malaysia\'s humidity favours fungal survival on bedding, sofas, and carpets for months. Outbreaks are common in pet stores, breeders, and multi-pet households. DVS-registered clinics can run in-house Wood\'s lamp screening; definitive culture is sent to private veterinary labs in KL, Petaling Jaya or Penang and takes 7–21 days.',
  costRange: [
    { item: 'Wood\'s lamp + cytology', range: 'RM80–RM180' },
    { item: 'Fungal culture (DTM)', range: 'RM150–RM350' },
    { item: 'Oral antifungal (itraconazole) 6 weeks', range: 'RM300–RM800' },
    { item: 'Lime-sulphur or miconazole shampoo (course)', range: 'RM80–RM200' },
  ],
  overview: `Despite the name, ringworm has nothing to do with worms — it's a fungal infection of hair, skin and nails. The "ring" appearance comes from the way the fungus spreads outward from a central point as it digests keratin in the hair shafts.

What makes ringworm tricky in Malaysia is the climate: spores survive on furniture, bedding, and grooming tools for up to 18 months. Treating only the pet without environmental decontamination almost guarantees re-infection.`,
  sections: [
    {
      heading: 'Recognising the Lesions',
      body: `Classic ringworm shows up as a roughly circular area of hair loss — often the size of a 5 sen coin — with a flaky or crusty centre. Lesions can appear anywhere but are most common on the face, ears, paws and forelimbs. Not all cases look "classic"; some present only as broken hairs or generalised scaling.

A simple Wood's lamp (UV light) in the vet clinic can detect about half of Microsporum canis infections by greenish fluorescence — but a negative lamp does not rule out ringworm.`,
    },
    {
      heading: 'Treating the Pet AND the Environment',
      body: `Treatment uses both oral antifungals (itraconazole is most common in Malaysia) and topical washes — lime-sulphur dips or miconazole-chlorhexidine shampoo twice weekly. Most cases need 4–8 weeks of therapy with two consecutive negative cultures before stopping.

Environmental decontamination: hot-wash all bedding weekly, vacuum daily and bin the bag, wipe hard surfaces with diluted bleach (1:10), discard porous toys that can't be washed. Skipping this step is the #1 reason cases relapse.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Multiple lesions appearing over days', 'A human in the household (especially a child) develops a red, scaly ring on skin', 'Lesions on the muzzle or around the eyes', 'Generalised hair loss with thick crusts'] },
    { heading: 'What NOT to Do', items: ['Don\'t use deworming medication — ringworm is NOT a worm', 'Don\'t share grooming tools between pets during treatment', 'Don\'t stop treatment when lesions look healed — confirm with fungal culture', 'Don\'t apply human antifungal cream to large areas without vet advice'] },
  ],
  whenToSeeVet: 'Book a vet visit for any unexplained circular hair-loss patch, especially if there are multiple pets or children in the home. The earlier ringworm is diagnosed, the shorter the total treatment course and the less environmental contamination to clean up.',
  citations: CITATIONS,
  keyTakeaways: ['Confirm diagnosis with culture, not just visual exam', 'Decontaminate bedding, sofas and grooming tools', 'Children and elderly are highest-risk humans', 'Full treatment takes 4–8 weeks — don\'t stop early'],
  faqs: [
    { question: 'How did my indoor-only dog catch ringworm?', answer: 'Spores can enter on shoes, on visitor pets, from a new puppy, or even from contaminated grooming equipment. Outdoor exposure is not required.' },
    { question: 'Is ringworm dangerous?', answer: 'Not life-threatening in healthy dogs, but it is contagious and uncomfortable. In humans it causes itchy circular rashes that need their own antifungal treatment.' },
    { question: 'Can I use human ringworm cream on my dog?', answer: 'Small spot use of clotrimazole or miconazole is generally safe but never sufficient on its own. Get a proper diagnosis and treatment plan first.' },
    { question: 'How do I know it\'s gone?', answer: 'Two consecutive negative fungal cultures 2 weeks apart. Visual healing is not enough.' },
  ],
  seo: {
    metaTitle: 'Ringworm in Dogs Malaysia | Dermatophytosis Diagnosis & Cure',
    metaDescription: 'Vet guide to dog ringworm in Malaysia. Symptoms, fungal culture, treatment (RM300–RM800), zoonotic risk, environmental cleaning checklist.',
    keywords: ['dog ringworm Malaysia', 'dermatophytosis dog', 'fungal skin infection dog'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enAllergic: AuthorityPage = {
  slug: 'allergic-dermatitis', kind: 'article', categorySlug: 'conditions', category: 'Skin Conditions', lang: 'en',
  title: 'Allergic Dermatitis in Dogs (Flea, Food, Atopic)',
  snippetForAI: 'Allergic dermatitis in dogs has three main causes: flea allergy dermatitis (FAD), cutaneous adverse food reaction (food allergy), and canine atopic dermatitis (environmental allergies). In Malaysia, flea allergy is the most common. Workup involves strict flea control, an elimination diet trial, and intradermal or serology testing for atopy. Treatments range from monthly Cytopoint® injections to daily Apoquel® tablets and lifelong allergen avoidance.',
  tldr: [
    'One flea bite can trigger 2 weeks of itching in an allergic dog',
    'Food trials need 8 weeks of STRICT novel-protein diet — no cheats',
    'Atopic dermatitis (CAD) is lifelong — managed, not cured',
    'Modern treatments (Apoquel®, Cytopoint®) replaced long-term steroids',
    'Year-round flea prevention is the cheapest, most effective intervention',
  ],
  quickFacts: [
    { label: 'Top Allergen (Malaysia)', value: 'Fleas, then house-dust mites' },
    { label: 'Apoquel® Monthly Cost', value: 'RM150–RM300' },
    { label: 'Cytopoint® Injection', value: 'RM250–RM450 monthly' },
    { label: 'Allergy Test (intradermal)', value: 'RM800–RM1,800' },
    { label: 'Hypoallergenic Food (10 kg dog)', value: 'RM250–RM450/month' },
  ],
  malaysiaContext: 'House-dust mites thrive year-round in Malaysian humidity, making environmental atopy a year-round (not seasonal) disease. Flea populations never crash because temperatures never drop. The combination drives one of the highest atopic dermatitis prevalence rates in Asia. Veterinary dermatology specialists are concentrated in KL, Penang and Johor Bahru.',
  costRange: [
    { item: 'Veterinary dermatology consult', range: 'RM100–RM250' },
    { item: 'Elimination food trial (8 wk hydrolysed diet)', range: 'RM700–RM1,400' },
    { item: 'Intradermal/serology allergy panel', range: 'RM800–RM1,800' },
    { item: 'Apoquel® (oclacitinib) monthly', range: 'RM150–RM300' },
    { item: 'Cytopoint® injection monthly', range: 'RM250–RM450' },
    { item: 'Year-round flea prevention', range: 'RM30–RM90/month' },
  ],
  overview: `Allergic dermatitis is by far the most common cause of chronic itching in Malaysian dogs. Unlike a one-off skin infection, allergies are a lifelong management problem — but with modern treatments, affected dogs can live perfectly comfortable lives.

The diagnostic order matters: rule out fleas first (because one flea is all it takes), then run a strict elimination diet trial, then test for environmental atopy. Skipping steps wastes money and prolongs your dog's suffering.`,
  sections: [
    {
      heading: 'The Three Main Types',
      body: `Flea allergy dermatitis (FAD): a hypersensitivity to flea saliva. One bite triggers days of intense itching, mainly along the lower back and tail base. Treatment is strict year-round flea control on ALL pets in the household.

Cutaneous adverse food reaction (CAFR): an allergy to a specific protein, most often chicken or beef in Malaysia. Diagnosis requires an 8-week strict elimination diet with a hydrolysed or novel-protein food. Blood "allergy panels" for food are unreliable.

Canine atopic dermatitis (CAD): a genetic predisposition to over-react to environmental allergens (dust mites, pollens, moulds). Lifelong management with Apoquel®, Cytopoint®, immunotherapy, or cyclosporine.`,
    },
    {
      heading: 'Treatment Options in Malaysia',
      body: `Modern dermatology has moved away from long-term oral steroids (which cause significant side effects). The current standard:

• Apoquel® (oclacitinib) — daily tablet, works within hours, well tolerated.
• Cytopoint® (lokivetmab) — monthly subcutaneous injection, no daily pill.
• Allergen-specific immunotherapy (ASIT) — custom-formulated allergen drops or injections, the only treatment that addresses the underlying cause.
• Cyclosporine (Atopica®) — daily capsule, slower onset (4–6 weeks) but very effective.

All are available in Malaysia through specialty vet clinics or by special-order from regular clinics.`,
    },
  ],
  bulletSections: [
    { heading: 'Diagnostic Workup Order (do not skip steps)', items: ['Strict flea control on ALL pets for 8 weeks', '8-week hydrolysed diet trial (no treats, no table scraps)', 'Skin cytology to rule out secondary yeast or bacteria', 'Intradermal or serology allergy test for atopy', 'Treatment plan based on results'] },
    { heading: 'Red Flags', redFlag: true, items: ['Sudden facial swelling, hives or vomiting after a meal — possible anaphylaxis', 'Self-mutilation breaking skin', 'Recurrent ear infections in both ears', 'Itching that wakes the dog at night'] },
  ],
  whenToSeeVet: 'Any dog scratching for more than 2 weeks, or any dog with recurrent skin or ear infections, needs a proper dermatology workup. The longer atopic dermatitis goes unmanaged, the more the skin barrier degrades and the harder treatment becomes.',
  citations: CITATIONS,
  keyTakeaways: ['Year-round flea control is foundational — never optional', 'Food trials must be STRICT (no biscuits, no cheats) to be valid', 'Modern non-steroid treatments are safer and very effective', 'Atopic dermatitis is managed for life — set expectations early'],
  faqs: [
    { question: 'Will a blood test tell me what my dog is allergic to?', answer: 'For environmental allergens, serology is moderately reliable. For food allergies, blood panels are NOT reliable — only an elimination diet trial works.' },
    { question: 'Can I just give my dog Benadryl?', answer: 'Antihistamines help maybe 20–30% of dogs with atopy and rarely as a stand-alone treatment. Always check dosing with a vet — never extrapolate from human doses.' },
    { question: 'How long until Apoquel® works?', answer: 'Most owners see itching reduce within 4–24 hours. Full effect within 7 days.' },
    { question: 'Is Cytopoint® or Apoquel® better?', answer: 'Both are excellent. Cytopoint® is a monthly injection (good for owners who struggle with daily pills). Apoquel® gives flexible day-to-day dose control. Your vet will help choose.' },
  ],
  seo: {
    metaTitle: 'Dog Allergic Dermatitis Malaysia | Flea, Food, Atopic Guide',
    metaDescription: 'Vet guide to dog allergic dermatitis in Malaysia: flea, food and environmental allergies. Apoquel®, Cytopoint®, costs (RM) and workup steps.',
    keywords: ['dog allergic dermatitis Malaysia', 'canine atopic dermatitis', 'Apoquel Malaysia', 'Cytopoint Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enYeast: AuthorityPage = {
  slug: 'yeast-infection', kind: 'article', categorySlug: 'conditions', category: 'Skin Conditions', lang: 'en',
  title: 'Yeast Infection (Malassezia) in Dogs',
  snippetForAI: 'A yeast infection (Malassezia dermatitis) is an overgrowth of the Malassezia pachydermatis yeast that normally lives on dog skin in small numbers. In Malaysia\'s humidity it overgrows in skin folds, ears, paws and the underside. Signs include a musty smell, greasy or scaly skin, brown ear wax, and intense itch. Diagnosis is by skin cytology; treatment uses medicated chlorhexidine-miconazole shampoo plus oral antifungals if generalised.',
  tldr: [
    'A "corn-chip" or musty smell is the giveaway',
    'Underlying allergies or hormone disease often drive recurrence',
    'Medicated shampoo twice weekly is the workhorse treatment',
    'Both ears are usually affected, even if only one looks bad',
    'Bulldog, Shih Tzu and Westie have a genetic predisposition',
  ],
  quickFacts: [
    { label: 'Affected Areas', value: 'Ears, paws, skin folds, neck, groin' },
    { label: 'Diagnosis Cost', value: 'RM60–RM150' },
    { label: 'Medicated Shampoo Course', value: 'RM80–RM200' },
    { label: 'Oral Antifungal (2–4 wk)', value: 'RM150–RM450' },
    { label: 'Recurrence', value: 'High without managing underlying allergy' },
  ],
  malaysiaContext: 'Malaysian humidity makes Malassezia overgrowth one of the most common dermatology presentations of the year. Skin folds (Bulldogs, Pugs), drop ears (Cocker Spaniel, Basset Hound), and webbing between toes are the high-risk zones. Year-round air-conditioning at home does NOT prevent yeast — the few hours of humid outdoor exposure are enough.',
  costRange: [
    { item: 'Vet consult + cytology', range: 'RM100–RM250' },
    { item: 'Medicated chlorhexidine-miconazole shampoo (250 ml)', range: 'RM60–RM120' },
    { item: 'Ear cleaning kit (alcohol-free)', range: 'RM40–RM90' },
    { item: 'Oral ketoconazole/itraconazole (2 wk)', range: 'RM150–RM450' },
  ],
  overview: `Malassezia is a normal skin inhabitant — every dog has some. The disease only develops when something tips the balance: humidity, allergies, hormone problems, immunosuppression, or skin-fold trapping. That's why treating only the yeast (and not the trigger) leads to constant relapses.

The classic clinical picture is "greasy and smelly." Owners often describe a corn-chip or musty bread odour, brown ear wax that returns days after cleaning, and red, thickened, hyperpigmented skin on the underside.`,
  sections: [
    {
      heading: 'How Vets Confirm Yeast (Not Bacteria)',
      body: `A simple in-clinic procedure: a glass slide is pressed against the skin or rolled in the ear wax, stained with Diff-Quik, and examined under a microscope. Malassezia organisms look like "peanut" or "footprint" shapes. The test takes 15 minutes and is the cheapest, most reliable confirmation.

This matters because bacteria and yeast often co-exist on inflamed skin, and treatment differs. Cytology, not visual exam, drives the prescription.`,
    },
    {
      heading: 'Treating the Underlying Cause',
      body: `Recurrent yeast infections almost always indicate one of: allergies (most common), hypothyroidism (older dogs), Cushing's syndrome, or simply a skin-fold conformation that traps moisture. A vet will not be doing their job if they only treat the yeast on the third or fourth recurrence — workup is essential.

For known predisposed breeds (Bulldog, Shih Tzu, Westie), a long-term maintenance plan with weekly medicated shampoo and routine ear cleaning prevents most flares.`,
    },
  ],
  bulletSections: [
    { heading: 'Maintenance Routine for Prone Dogs', items: ['Weekly chlorhexidine-miconazole bath', 'Daily wipe of skin folds with vet-recommended pads', 'Ear cleaning every 1–2 weeks (or per vet schedule)', 'Towel-dry thoroughly after every bath and rain', 'Manage underlying allergies aggressively'] },
    { heading: 'Red Flags', redFlag: true, items: ['Sudden head tilt or loss of balance (deep ear infection)', 'Bleeding from ear canal', 'Severe pain on touching ears or paws', 'Yeast spreading rapidly over 24–48 hours'] },
  ],
  whenToSeeVet: 'Book a vet visit if your dog has a persistent musty smell, brown ear wax that returns within a week of cleaning, or red itchy skin between the toes. Yeast infections respond very well to early targeted treatment.',
  citations: CITATIONS,
  keyTakeaways: ['Smell + greasy skin = think yeast', 'Cytology confirms diagnosis cheaply', 'Always investigate underlying triggers in recurrent cases', 'Maintenance bathing prevents flares in prone breeds'],
  faqs: [
    { question: 'Can I use human anti-dandruff shampoo?', answer: 'Some contain ketoconazole and can help short-term, but they are not formulated for canine skin pH. Use a vet-prescribed shampoo instead.' },
    { question: 'How long does treatment take?', answer: 'Mild localised yeast: 2–3 weeks. Generalised yeast with chronic skin changes: 4–8 weeks plus long-term maintenance.' },
    { question: 'Is yeast contagious?', answer: 'Not in the usual sense — every dog already has some Malassezia. It only overgrows when conditions favour it.' },
    { question: 'Will yeast go away on its own in dry weather?', answer: 'Malaysia doesn\'t really have a "dry season" — humidity remains high year-round, so spontaneous resolution is rare. Treat it.' },
  ],
  seo: {
    metaTitle: 'Dog Yeast Infection (Malassezia) Malaysia | Smell, Itch, Treatment',
    metaDescription: 'Vet guide to dog yeast infections in Malaysia. Malassezia symptoms (musty smell, greasy skin), diagnosis (RM60–RM150), shampoo & oral treatment.',
    keywords: ['dog yeast infection Malaysia', 'Malassezia dog', 'smelly dog skin', 'dog ear yeast'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enItching: AuthorityPage = {
  slug: 'itching', kind: 'article', categorySlug: 'symptoms', category: 'Symptoms', lang: 'en',
  title: 'Dog Itching & Scratching: When to Worry',
  snippetForAI: 'Occasional scratching is normal in dogs. Itching becomes a medical issue when it disturbs sleep, breaks the skin, focuses on one area, or persists for more than 2 weeks. In Malaysia the top causes are fleas, atopic dermatitis, food allergy, yeast or bacterial infection. Persistent itching always warrants a veterinary skin scraping and cytology — never use human anti-itch creams without veterinary guidance.',
  tldr: [
    'Normal scratching: a few times a day, no skin damage',
    'Abnormal: scratching that wakes the dog at night',
    'Two-week rule: if itch persists 14+ days, book a vet',
    'Fleas can be present with NO visible adults — itch alone is enough',
    'Skin barrier damage worsens itch — early treatment is cheaper and faster',
  ],
  quickFacts: [
    { label: 'Pruritus Score', value: 'Vets use a 0–10 scale' },
    { label: 'Top Cause (Malaysia)', value: 'Flea allergy dermatitis' },
    { label: 'Diagnostic Cost', value: 'RM80–RM200' },
    { label: 'Time to See a Vet', value: '14 days of persistent itch' },
  ],
  malaysiaContext: 'Year-round flea pressure in Malaysia means even strictly indoor dogs are at risk — fleas hitch-hike on shoes, visiting pets, and out the back gate. A negative flea visual exam does NOT rule out flea allergy dermatitis; treatment trials are often necessary.',
  overview: `Itching (pruritus) is the most common dermatology complaint in dogs. The hard part for owners is judging "how much is too much" — and the danger is that many wait too long, allowing the skin barrier to break down and secondary infections to set in.

A useful rule: if the itching is loud (you can hear scratching from another room), if it breaks the skin, or if it persists for more than two weeks despite a flea bath, it needs a vet workup.`,
  sections: [
    {
      heading: 'The Two-Week Rule',
      body: `Most acute, trigger-clear itching (e.g. one flea bite, contact with a plant) resolves within days. Anything persisting beyond two weeks signals a deeper problem — allergy, infection, or parasite — that won't self-resolve.

Booking the vet at the two-week mark, rather than the two-month mark, often turns a RM200 problem into a properly-controlled chronic condition for RM50–RM150 per month.`,
    },
    {
      heading: 'What the Vet Will Do',
      body: `Expect skin scraping (mites), cytology (yeast/bacteria), and flea-combing. If everything is normal, the next step is usually an empirical trial of flea control plus a food trial — in that order. Allergy testing comes later, only after the obvious causes are ruled out.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Open wounds from self-trauma', 'Sudden hives, facial swelling — possible anaphylaxis (vet emergency)', 'Itching plus weight loss, vomiting, or lethargy', 'Itching focused on one spot for more than 48 hours (likely hot-spot forming)'] },
    { heading: 'Safe Things to Do at Home Before the Vet', items: ['Apply year-round vet-recommended flea-tick prevention', 'Use an e-collar if the dog is creating raw spots', 'Bathe with a gentle vet-grade shampoo (not human shampoo)', 'Keep nails short to reduce self-trauma damage', 'Log when and where the itching is worst — useful diagnostic info'] },
  ],
  whenToSeeVet: 'Two weeks of persistent itching, any open wound, or any new hives/swelling. Don\'t delay — most causes are easier and cheaper to treat early.',
  citations: CITATIONS,
  keyTakeaways: ['Two-week rule for vet visit', 'Don\'t rule out fleas just because you can\'t see any', 'Never use human anti-itch creams unsupervised', 'Document the itch pattern to help diagnosis'],
  faqs: [
    { question: 'Can I give my dog Benadryl for itching?', answer: 'Antihistamines work in only 20–30% of itchy dogs and dosing must be confirmed by a vet. Don\'t rely on it as a long-term solution.' },
    { question: 'My dog scratches mainly at night — what does that mean?', answer: 'Night itching often points to atopic dermatitis or scabies. Both need a vet diagnosis.' },
    { question: 'Should I bathe my itchy dog more often?', answer: 'Vet-prescribed medicated baths twice a week can help. Excessive bathing with regular shampoo can strip the skin barrier and worsen itch.' },
    { question: 'Is itching a sign of cancer?', answer: 'Rarely. Persistent localised itching in older dogs can occasionally indicate cutaneous lymphoma, which is why vets biopsy unusual lesions.' },
  ],
  seo: {
    metaTitle: 'Dog Itching & Scratching Malaysia | When to See the Vet',
    metaDescription: 'Why is my dog itching? Vet guide for Malaysia: causes, two-week rule, costs, red flags. Don\'t treat with human creams — read this first.',
    keywords: ['dog itching Malaysia', 'dog scratching too much', 'pruritus dog', 'dog allergy itch'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enHairLoss: AuthorityPage = {
  slug: 'hair-loss', kind: 'article', categorySlug: 'symptoms', category: 'Symptoms', lang: 'en',
  title: 'Hair Loss (Alopecia) in Dogs',
  snippetForAI: 'Hair loss in dogs can be patchy, symmetrical, or generalised. Patchy alopecia usually points to ringworm, mange, or hot-spots. Symmetrical hair loss on the flanks or trunk often signals hormonal disease (hypothyroidism, Cushing\'s). Generalised thinning may reflect nutritional, parasitic, or autoimmune disease. All persistent hair loss requires veterinary workup including skin scraping, fungal culture, and possibly blood hormone testing.',
  tldr: [
    'Pattern matters: patchy vs symmetrical vs generalised',
    'Symmetrical hair loss = think hormones (thyroid, Cushing\'s)',
    'Patchy with itch = likely parasite or infection',
    'Patchy without itch = think fungal (ringworm)',
    'Most alopecia is reversible if diagnosed early',
  ],
  quickFacts: [
    { label: 'Initial Workup', value: 'Scraping + cytology + Wood\'s lamp' },
    { label: 'Cost (basic workup)', value: 'RM150–RM400' },
    { label: 'Blood Hormone Panel', value: 'RM300–RM700' },
    { label: 'Treatable If Caught Early', value: 'Yes — most cases' },
  ],
  malaysiaContext: 'Symmetrical truncal hair loss in older Malaysian dogs is most often hypothyroidism — a treatable hormonal disease. Bulldogs and Shih Tzu often present with patchy alopecia secondary to chronic yeast infection in skin folds.',
  overview: `Hair loss is a symptom, not a diagnosis. A vet starts by classifying the pattern: where is the hair lost, is the skin underneath inflamed or smooth, is the dog itchy or not? Each combination points to a different diagnostic path and saves time and money.

Pulling the trigger early on diagnosis matters because some causes (autoimmune disease, endocrine disease) progress silently while you wait.`,
  sections: [
    {
      heading: 'Pattern Recognition',
      body: `Patchy + itchy + crusty: think parasites (mange), bacterial pyoderma, or hot-spots.
Patchy + non-itchy + circular: think ringworm.
Symmetrical "rat tail" or flank loss + no itch + skin smooth: think endocrine disease (hypothyroidism, Cushing's, sex-hormone imbalance).
Generalised thinning + dull coat: think nutritional, GI absorption, or chronic systemic disease.

Each pattern guides which tests the vet runs first.`,
    },
    {
      heading: 'Diagnostics Step-by-Step',
      body: `Step 1: Skin scraping, cytology, Wood's lamp — rules out the cheap, common stuff (mange, yeast, bacteria, ringworm). Step 2: If suspected hormonal, full blood panel including thyroid (T4, free T4) and possibly ACTH stimulation test for Cushing's. Step 3: Skin biopsy for chronic, unexplained, or symmetrical cases.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Hair loss with weight gain, lethargy, cold intolerance (suspect hypothyroidism)', 'Hair loss with increased drinking, increased appetite, pot-bellied appearance (suspect Cushing\'s)', 'Hair loss with crusts and ulcers on face — possible autoimmune (pemphigus)', 'Sudden generalised hair loss in days, not weeks'] },
  ],
  whenToSeeVet: 'Any hair loss persisting more than 2 weeks, any symmetrical hair loss, or any hair loss accompanied by systemic signs (weight change, lethargy, drinking more). Hormonal causes get worse with time and the dog often feels poorly long before owners notice.',
  citations: CITATIONS,
  keyTakeaways: ['Pattern + itch level drives the diagnostic path', 'Don\'t assume "old dog, normal hair loss" — many causes are treatable', 'Symmetrical = hormones until proven otherwise', 'Photograph the bald areas weekly to track progression'],
  faqs: [
    { question: 'Is shedding the same as hair loss?', answer: 'No. Shedding leaves a normal coat. Alopecia leaves visible bald or thinning patches.' },
    { question: 'Can stress cause hair loss?', answer: 'Yes — psychogenic alopecia from over-grooming is uncommon but real, especially in working breeds.' },
    { question: 'Will hair grow back?', answer: 'Usually yes once the cause is treated, although hormonal cases can take 3–6 months. Some scarring alopecia is permanent.' },
    { question: 'My older dog is losing hair in symmetrical patches — what should I do?', answer: 'Book a vet for a full thyroid panel. Hypothyroidism is very common and very treatable with daily levothyroxine.' },
  ],
  seo: {
    metaTitle: 'Dog Hair Loss (Alopecia) Malaysia | Causes & Vet Workup',
    metaDescription: 'Why is my dog losing hair? Vet guide for Malaysia. Patchy vs symmetrical alopecia, hormonal causes, diagnostic costs (RM150–RM700).',
    keywords: ['dog hair loss Malaysia', 'dog alopecia', 'dog bald patches', 'hypothyroidism dog'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enEmergency: AuthorityPage = {
  slug: 'emergency-signs', kind: 'article', categorySlug: undefined, category: 'Emergency', lang: 'en',
  title: 'Dog Skin Emergencies: When to Go to the Vet Now',
  snippetForAI: 'Skin emergencies in dogs include severe allergic reactions (anaphylaxis), rapidly spreading hot-spots, deep wounds, bee or hornet stings with facial swelling, snake or scorpion bites, and any skin infection accompanied by fever or lethargy. In Malaysia, these need immediate veterinary attention — not a wait-and-see approach. WhatsApp +60 11-5695 9227 for our pet helpline, or use our Emergency Guide to find the nearest 24-hour vet.',
  tldr: [
    'Facial swelling within minutes of a bite/sting — emergency',
    'Difficulty breathing + skin signs — anaphylaxis, go NOW',
    'Snake bite in Malaysia: cobra, krait, viper all need antivenin',
    'Fever + skin lesions + lethargy — sepsis risk',
    'Open bleeding wound bigger than 2 cm — same-day vet',
  ],
  quickFacts: [
    { label: 'Anaphylaxis Window', value: 'Minutes — call vet first' },
    { label: 'Snake Bite Cost', value: 'RM800–RM6,000 (antivenin)' },
    { label: 'Emergency Consult', value: 'RM150–RM400 after-hours' },
    { label: 'WhatsApp Helpline', value: '+60 11-5695 9227' },
  ],
  malaysiaContext: 'Malaysia has multiple venomous snakes (cobras, kraits, vipers), scorpions, centipedes, and aggressive bee species. Even an indoor dog can be exposed via a balcony or garden visit. Knowing the location of your nearest 24-hour vet BEFORE the emergency is critical — most owners waste 30–60 minutes searching during the crisis.',
  hasEmergencyOverride: true,
  overview: `Most skin problems can wait until morning. But a small subset — anaphylactic reactions, venomous bites, deep wounds, and septic skin infections — can kill a dog in hours if untreated. This page is your fast-decision reference.

Print it. Save the WhatsApp number. Know your nearest 24-hour vet's address before you need it.`,
  sections: [
    {
      heading: 'Anaphylaxis — The Fastest-Moving Emergency',
      body: `Anaphylaxis can begin within seconds of an insect sting, vaccine, or food/drug exposure. Signs: sudden facial swelling, hives, vomiting, weakness, pale gums, collapse, difficulty breathing.

Do NOT wait. Call the nearest emergency vet to alert them you're coming. Drive carefully but quickly. Do not attempt home treatment — most household antihistamines are too weak and too slow.`,
    },
    {
      heading: 'Venomous Bites in Malaysia',
      body: `Common venomous animals: spitting cobra, monocled cobra, Malayan pit viper, banded krait, scorpions, large centipedes. Signs: sudden severe local pain, rapid swelling, weakness, drooling, dilated pupils, respiratory distress.

Treatment requires veterinary antivenin which is only stocked at major referral hospitals. Phone ahead so they can prepare the antivenin while you're en route — minutes matter.`,
    },
  ],
  bulletSections: [
    { heading: 'GO NOW Signs (24-hour emergency vet)', redFlag: true, items: ['Facial swelling appearing within minutes', 'Difficulty breathing, blue or pale gums', 'Collapse, weakness, or loss of consciousness', 'Suspected snake or scorpion bite', 'Open bleeding wound that won\'t stop with 5 minutes of pressure', 'Hot-spot tripling in size within hours', 'Fever (>40 °C rectal) with any skin lesion'] },
    { heading: 'What to Bring to the Emergency Vet', items: ['A photo of the bite/sting site (or the offending insect/snake if safe)', 'List of any medications your dog has had in the last 24 hours', 'Vaccine record and chronic disease history', 'WhatsApp number in case you\'re separated during triage'] },
  ],
  whenToSeeVet: 'For anything on the "GO NOW" list, leave for the nearest 24-hour vet immediately and phone ahead. If you\'re unsure whether your dog\'s situation qualifies, WhatsApp our helpline at +60 11-5695 9227 with a photo and we\'ll triage in minutes.',
  citations: CITATIONS,
  keyTakeaways: [
    'Know your nearest 24-hour vet BEFORE the emergency',
    'Anaphylaxis is minutes, not hours — drive, don\'t wait',
    'Snake bites need antivenin — call ahead',
    'WhatsApp +60 11-5695 9227 for fast triage advice',
  ],
  faqs: [
    { question: 'Should I give my dog Benadryl after a bee sting?', answer: 'Only if a vet has previously approved a specific dose for your dog. Otherwise drive to the vet — it works faster and is properly dosed.' },
    { question: 'Can I drive my dog to the vet if it\'s collapsed?', answer: 'Yes — being on the move is better than waiting. Phone ahead so the vet is ready on arrival.' },
    { question: 'How much will emergency treatment cost?', answer: 'After-hours consults run RM150–RM400. Severe cases (anaphylaxis, snake bite, hospitalisation) can run RM2,000–RM8,000 with antivenin and ICU care.' },
    { question: 'Is pet insurance worth it?', answer: 'For emergencies, yes — a single anaphylaxis or snake bite event can cost more than 5 years of premiums.' },
  ],
  seo: {
    metaTitle: 'Dog Skin Emergencies Malaysia | Anaphylaxis, Snake Bite, Hot-Spot',
    metaDescription: 'When dog skin issues become emergencies in Malaysia: anaphylaxis, snake bites, sepsis. Red flags, costs, WhatsApp helpline +60 11-5695 9227.',
    keywords: ['dog skin emergency Malaysia', 'dog anaphylaxis', 'snake bite dog Malaysia', '24 hour vet Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

// ============================================================
// MALAY PAGES (condensed translations honouring the same schema)
// ============================================================

const msHub: AuthorityPage = {
  ...enHub, lang: 'ms',
  title: 'Masalah Kulit Anjing di Malaysia: Gatal, Hot-Spot, Kudis & Lain-Lain',
  snippetForAI: 'Masalah kulit adalah sebab #1 anjing dibawa ke klinik veterinar di Malaysia. Punca paling biasa: alergi gigitan kutu, alergi persekitaran (atopic dermatitis), hot-spot, kurap, kudis (sarcoptic dan demodectic), serta jangkitan bakteria dan yis. Kebanyakan kes perlu diagnosis veterinar — jangan sekali-kali guna krim atau steroid manusia tanpa nasihat doktor.',
  tldr: ['Penyakit kulit ~25% daripada semua lawatan vet anjing di Malaysia', 'Kelembapan + haba — jangkitan bakteria/yis merebak dalam beberapa hari', 'Hot-spot boleh dua kali ganda saiz dalam 24 jam', 'Kudis sarcoptic boleh berjangkit kepada manusia', 'Jangan guna krim eczema manusia tanpa vet'],
  quickFacts: enHub.quickFacts!.map((f) => ({ ...f })),
  malaysiaContext: 'Kelembapan tinggi Malaysia (70–90%) dan suhu panas memberi keadaan ideal untuk yis Malassezia, bakteria Staphylococcus dan kutu. Baka seperti Shih Tzu, Bulldog dan Cocker Spaniel paling kerap terjejas. Jabatan Perkhidmatan Veterinar (JPV) dan klinik swasta berdaftar mengendalikan kebanyakan kes.',
  overview: `Jika anjing anda asyik menggaru, menjilat atau berkurangan bulu, anda tidak keseorangan — masalah kulit adalah sebab paling kerap pemilik haiwan Malaysia melawat vet. Iklim tropika dengan kelembapan sering melebihi 80% mewujudkan persekitaran yang hampir sempurna untuk kutu, bakteria dan yis berkembang.

Panduan ini menerangkan beza antara hot-spot dan jangkitan yis, kenapa kudis adalah masalah seluruh rumah, bila kurap menjadi risiko manusia, dan bila perlu berhenti memerhati di rumah dan bawa terus ke klinik.`,
  categoryCards: [
    { title: 'Hot-Spot (Dermatitis Lembap Akut)', description: 'Tompok merah berair yang cepat merebak.', path: '/ms/dog-skin-problems/conditions/hot-spots', icon: '🔥' },
    { title: 'Kudis Sarcoptic & Demodectic', description: 'Hama berjangkit — sarcoptic boleh ke manusia.', path: '/ms/dog-skin-problems/conditions/mange', icon: '🐛' },
    { title: 'Kurap (Dermatophytosis)', description: 'Jangkitan kulat (bukan cacing) — berjangkit dan zoonotik.', path: '/ms/dog-skin-problems/conditions/ringworm', icon: '⭕' },
    { title: 'Dermatitis Alergi', description: 'Alergi kutu, makanan, persekitaran — penyebab gatal kronik #1.', path: '/ms/dog-skin-problems/conditions/allergic-dermatitis', icon: '🌿' },
    { title: 'Jangkitan Yis (Malassezia)', description: 'Kulit berminyak, berbau — subur dalam kelembapan tropika.', path: '/ms/dog-skin-problems/conditions/yeast-infection', icon: '🍞' },
    { title: 'Gatal & Menggaru', description: 'Bila gatal normal vs bila perlu vet?', path: '/ms/dog-skin-problems/symptoms/itching', icon: '🐾' },
    { title: 'Keguguran Bulu (Alopecia)', description: 'Bertompok atau simetri — apa setiap corak bermaksud.', path: '/ms/dog-skin-problems/symptoms/hair-loss', icon: '✂️' },
    { title: 'Kecemasan Kulit', description: 'Tanda bahaya yang memerlukan vet pada hari yang sama.', path: '/ms/dog-skin-problems/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: { text: 'Bengkak teruk, luka berdarah terbuka, pengsan atau sesak nafas selepas digigit/disengat? Ini kecemasan.', linkText: 'Lihat Tanda Kecemasan', linkPath: '/dog-skin-problems/emergency-signs' },
  faqs: [
    { question: 'Mengapa kulit anjing saya berbau tidak sedap?', answer: 'Bau berlemak/musty biasanya jangkitan yis Malassezia. Bau masam/busuk biasanya bakteria. Kedua-duanya perlu diagnosis vet.' },
    { question: 'Boleh saya guna krim eczema manusia pada anjing?', answer: 'Jangan. Banyak krim manusia mengandungi bahan toksik kepada anjing atau steroid yang menyembunyi jangkitan. Dapatkan diagnosis vet dahulu.' },
    { question: 'Berapa kos rundingan kulit di Malaysia?', answer: 'Rundingan asas RM50–RM120. Tambah RM80–RM200 untuk diagnostik seperti skin scraping dan cytology.' },
    { question: 'Adakah kudis berjangkit kepada manusia?', answer: 'Kudis sarcoptic boleh menyebabkan ruam gatal sementara pada manusia. Kudis demodectic tidak menjejaskan manusia.' },
    { question: 'Berapa cepat hot-spot boleh menjadi lebih teruk?', answer: 'Dalam kelembapan Malaysia, hot-spot boleh menjadi dua kali ganda dalam 12–24 jam. Bawa ke vet pada hari yang sama.' },
  ],
  seo: { metaTitle: 'Masalah Kulit Anjing Malaysia | Gatal, Hot-Spot, Kudis', metaDescription: 'Panduan disemak vet untuk masalah kulit anjing di Malaysia: hot-spot, kudis, kurap, alergi, yis. Simptom, kos (RM), tanda kecemasan.', keywords: ['masalah kulit anjing', 'kudis anjing Malaysia', 'hot spot anjing', 'kurap anjing'] },
  author: AUTHOR_MS, relatedLinks: RELATED_MS,
};

// Compact MS articles (mirror EN structure, translated essentials)
const msMakeArticle = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'ms', author: AUTHOR_MS, relatedLinks: RELATED_MS, ...overrides } as AuthorityPage);

const msHotSpots = msMakeArticle(enHotSpots, {
  title: 'Hot-Spot pada Anjing (Dermatitis Lembap Akut)',
  snippetForAI: 'Hot-spot adalah tompok kulit merah, lembap, menyakitkan yang cepat merebak akibat trauma diri (menggaru/menjilat). Dalam kelembapan Malaysia, hot-spot boleh dua kali ganda dalam 24 jam. Rawatan: cukur bulu, bersihkan, antibiotik/antifungal preskripsi, dan kolar-e untuk menghentikan kitaran menjilat.',
  tldr: ['Hot-spot adalah kecemasan kulit — bukan "tunggu dan lihat"', 'Pencetus: gigitan kutu, alergi, jangkitan telinga, bulu kusut', 'Tanpa rawatan, boleh jadi pyoderma dalam (2–3 hari)', 'Kolar-e wajib untuk mematahkan kitaran menggaru', 'Jangan guna hidrogen peroksida'],
  overview: 'Hot-spot — dermatitis lembap akut — sering dipandang remeh. Tompok kecil pagi tadi boleh menjadi luka basah seukuran syiling 50 sen menjelang petang. Bakteria Staphylococcus pseudintermedius membiak cepat pada permukaan lembap dan anjing menjilat lagi.\n\nLuka adalah simptom, bukan diagnosis. Selalu ada pencetus — gigitan kutu, serangan alergi, jangkitan telinga, kelenjar dubur tersumbat, atau bulu kusut yang memerangkap kelembapan.',
  sections: [
    { heading: 'Cara Hot-Spot Berkembang', body: 'Kitaran trauma diri bermula: anjing rasa gatal → menjilat → memecah kulit → bakteria masuk → lebih gatal → lebih menjilat. Dalam 12–24 jam di iklim Malaysia, titik kecil menjadi luka basah 5 cm.' },
    { heading: 'Bagaimana Vet Merawat', body: 'Cukur bulu di kawasan luas → bersihkan dengan chlorhexidine → krim antibiotik/steroid → antibiotik oral jika dalam → kolar-e → kenal pasti dan rawat pencetus.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya — Bawa Vet Hari Ini', redFlag: true, items: ['Luka lebih besar 3 cm', 'Bernanah atau bau busuk', 'Anjing tidak benarkan disentuh (kesakitan teruk)', 'Demam atau lemah', 'Beberapa hot-spot muncul dalam 24 jam'] },
    { heading: 'Apa Yang JANGAN Dibuat', items: ['Jangan hidrogen peroksida/alkohol/iodin', 'Jangan krim steroid manusia', 'Jangan balut ketat — perangkap kelembapan', 'Jangan tinggalkan kolar-e'] },
  ],
  whenToSeeVet: 'Buat janji temu pada hari yang sama jika luka lebih besar daripada syiling 50 sen, muncul dalam masa kurang 24 jam, berbau, bernanah, atau anjing kesakitan.',
  keyTakeaways: ['Hot-spot sensitif masa — jangan tunggu', 'Kolar-e wajib', 'Sentiasa siasat pencetus (kutu, alergi)', 'Elakkan krim manusia'],
  faqs: [
    { question: 'Adakah hot-spot sembuh sendiri?', answer: 'Jarang dalam kelembapan Malaysia. Tanpa rawatan, kebanyakan hot-spot menjadi lebih besar dalam 24–48 jam.' },
    { question: 'Boleh saya rawat di rumah?', answer: 'Boleh keringkan kawasan dan pakai kolar-e sementara menunggu vet, tetapi rawatan rumah jarang berjaya tanpa preskripsi.' },
    { question: 'Berapa lama rawatan?', answer: 'Dengan rawatan vet awal, 7–14 hari. Kes teruk 3–4 minggu.' },
    { question: 'Adakah akan berulang?', answer: 'Berkemungkinan ya jika pencetus tidak dikenal pasti. Pencegahan kutu sepanjang tahun adalah langkah pencegahan #1.' },
  ],
  seo: { metaTitle: 'Hot-Spot Anjing Malaysia | Panduan Dermatitis Lembap Akut', metaDescription: 'Panduan vet untuk hot-spot anjing di Malaysia: punca, rawatan, kos (RM120–RM350), tanda bahaya, pencegahan.', keywords: ['hot spot anjing Malaysia', 'dermatitis lembap akut', 'jangkitan kulit anjing'] },
});

const msMange = msMakeArticle(enMange, {
  title: 'Kudis pada Anjing: Sarcoptic vs Demodectic',
  snippetForAI: 'Kudis adalah penyakit kulit akibat hama mikroskopik. Dua jenis utama di Malaysia: kudis sarcoptic (sangat berjangkit, boleh ke manusia, gatal teruk) dan kudis demodectic (tidak berjangkit, akibat hama Demodex yang membiak apabila imuniti rendah). Diagnosis memerlukan skin scraping; rawatan moden sangat berkesan.',
  tldr: ['Sarcoptic boleh berjangkit ke manusia', 'Demodectic biasanya isyarat imuniti lemah', 'Skin scraping wajib — bukan diagnosis pandang sahaja', 'Tablet isoxazoline moden (Bravecto®, NexGard®)', 'Cuci alas tidur dengan air panas'],
  overview: 'Kudis sering didiagnosis sendiri oleh pemilik. Tetapi diagnosis sebenar perlu skin scraping mikroskopik — banyak penyakit lain (yis, alergi, kurap) kelihatan serupa tetapi rawatannya sangat berbeza.\n\nJenis kudis penting kerana sarcoptic berjangkit ke manusia, manakala demodectic isyarat masalah imuniti yang perlu disiasat.',
  sections: [
    { heading: 'Kudis Sarcoptic (Scabies)', body: 'Disebabkan oleh Sarcoptes scabiei var. canis. Gatal teruk — terutama di tepi telinga, siku dan perut. Sangat berjangkit. Tablet isoxazoline oral membersihkan kebanyakan kes dalam sebulan.' },
    { heading: 'Kudis Demodectic', body: 'Disebabkan oleh Demodex canis. Membiak apabila imuniti turun — biasa pada anak anjing dan anjing dewasa dengan penyakit asas. Kes umum perlu rawatan agresif dan siasatan pencetus imun.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya', redFlag: true, items: ['Kulit berdarah dari trauma diri', 'Jangkitan bakteria sekunder', 'Lesu, demam, hilang berat', 'Kanak-kanak/dewasa imunocompromised dapat ruam gatal', 'Demodicosis pada anjing dewasa — perlu siasatan'] },
    { heading: 'Elakkan Rawatan DIY Berbahaya', items: ['Minyak motor terpakai, kerosin — toksik', 'Minyak bawang putih — toksik kepada anjing', 'Krim scabies manusia tanpa vet (permethrin boleh bunuh kucing berdekatan)', 'Berhenti rawatan selepas 1 scraping negatif sahaja'] },
  ],
  whenToSeeVet: 'Bila-bila masa anjing gatal teruk berterusan, bulu gugur bertompok, atau anda/ahli keluarga dapat ruam gatal selepas pegang anjing. Skin scraping murah dan satu-satunya cara untuk sahkan.',
  keyTakeaways: ['Jangan diagnosis sendiri — skin scraping', 'Tablet isoxazoline berkesan', 'Sarcoptic = masalah seluruh rumah', 'Demodex dewasa perlu siasatan penyakit asas'],
  faqs: [
    { question: 'Bolehkah saya dapat kudis dari anjing?', answer: 'Kudis sarcoptic boleh menyebabkan ruam gatal sementara pada manusia. Demodex tidak menjangkiti manusia.' },
    { question: 'Berapa lama rawatan?', answer: 'Sarcoptic: 2–4 minggu. Demodectic: 1–6 bulan.' },
    { question: 'Adakah kudis tanda pengabaian?', answer: 'Tidak selalu. Demodex boleh menjejas anak anjing baka tulen yang dijaga baik.' },
    { question: 'Boleh saya guna ubat kutu sedia ada?', answer: 'Beberapa isoxazoline berlesen untuk kudis, tetapi dos berbeza. Sah dengan vet.' },
  ],
  seo: { metaTitle: 'Kudis Anjing Malaysia | Sarcoptic vs Demodectic Rawatan', metaDescription: 'Panduan vet untuk kudis anjing Malaysia. Sarcoptic vs demodectic — simptom, diagnosis, rawatan, kos (RM250–RM700), risiko zoonotik.', keywords: ['kudis anjing Malaysia', 'kudis sarcoptic', 'kudis demodectic'] },
});

const msRingworm = msMakeArticle(enRingworm, {
  title: 'Kurap pada Anjing (Dermatophytosis)',
  snippetForAI: 'Kurap adalah jangkitan kulat (bukan cacing). Disebabkan oleh kulat dermatofit (selalunya Microsporum canis), muncul sebagai tompok keguguran bulu bulat, berjangkit kepada haiwan dan manusia. Diagnosis: kultur kulat atau PCR; rawatan: antifungal oral + miconazole-chlorhexidine shampoo selama 4–8 minggu.',
  tldr: ['Kurap adalah kulat, BUKAN cacing — jangan ubat cacing', 'Penampilan klasik: tompok bulat keguguran bulu', 'Kanak-kanak dan warga emas paling berisiko jangkit dari haiwan', 'Lampu Wood tidak kesan 50% kes — kultur adalah piawai emas', 'Pembersihan persekitaran sama penting dengan rawat haiwan'],
  overview: 'Walaupun namanya kurap (ringworm), ia tiada kaitan dengan cacing — ia jangkitan kulat pada bulu dan kulit. Bentuk "cincin" datang dari penyebaran kulat keluar dari pusat.\n\nDalam Malaysia, spora kulat boleh hidup pada perabot dan alas tidur sehingga 18 bulan. Merawat hanya haiwan tanpa pembersihan persekitaran hampir menjamin jangkitan semula.',
  sections: [
    { heading: 'Mengenali Lesi', body: 'Kurap klasik: tompok bulu hilang berbentuk bulat seukuran syiling 5 sen dengan pusat berkerak. Boleh di mana-mana tetapi paling kerap muka, telinga, kaki. Lampu Wood mengesan hanya ~50% kes — lampu negatif tidak menyingkir kurap.' },
    { heading: 'Rawat Haiwan DAN Persekitaran', body: 'Antifungal oral (itraconazole) + sampo miconazole-chlorhexidine 2x seminggu. Cuci alas tidur dengan air panas mingguan, vakum harian, bersih permukaan dengan bleach cair 1:10.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya', redFlag: true, items: ['Beberapa lesi muncul dalam beberapa hari', 'Manusia rumah dapat ruam bulat bersisik', 'Lesi di moncong atau sekeliling mata', 'Keguguran bulu umum dengan kerak tebal'] },
    { heading: 'Apa Yang JANGAN Dibuat', items: ['Jangan ubat cacing', 'Jangan kongsi alat dandanan antara haiwan', 'Jangan berhenti rawatan tanpa kultur', 'Jangan krim antifungal manusia tanpa vet'] },
  ],
  whenToSeeVet: 'Lawatan vet untuk tompok keguguran bulu bulat yang tidak dapat dijelaskan, terutama jika ada haiwan/kanak-kanak lain di rumah.',
  keyTakeaways: ['Sahkan dengan kultur', 'Bersihkan alas tidur dan perabot', 'Kanak-kanak risiko tinggi', 'Rawatan penuh 4–8 minggu'],
  faqs: [
    { question: 'Bagaimana anjing dalam rumah dapat kurap?', answer: 'Spora boleh masuk pada kasut, haiwan pelawat, anak anjing baru, atau alat dandanan tercemar.' },
    { question: 'Adakah kurap berbahaya?', answer: 'Tidak mengancam nyawa, tetapi berjangkit. Pada manusia, menyebabkan ruam gatal bulat.' },
    { question: 'Boleh saya guna krim kurap manusia?', answer: 'Penggunaan tempat kecil clotrimazole biasanya selamat tetapi tidak mencukupi. Dapatkan diagnosis vet dahulu.' },
    { question: 'Bagaimana saya tahu sudah hilang?', answer: 'Dua kultur kulat negatif berturut-turut 2 minggu berasingan.' },
  ],
  seo: { metaTitle: 'Kurap Anjing Malaysia | Dermatophytosis Diagnosis & Rawatan', metaDescription: 'Panduan vet untuk kurap anjing Malaysia. Simptom, kultur kulat, rawatan (RM300–RM800), risiko zoonotik, senarai pembersihan.', keywords: ['kurap anjing Malaysia', 'dermatophytosis', 'jangkitan kulat anjing'] },
});

const msAllergic = msMakeArticle(enAllergic, {
  title: 'Dermatitis Alergi pada Anjing (Kutu, Makanan, Atopik)',
  snippetForAI: 'Dermatitis alergi anjing ada tiga punca utama: alergi gigitan kutu (FAD), reaksi makanan, dan dermatitis atopik (alergi persekitaran). Di Malaysia, alergi kutu paling biasa. Rawatan: pencegahan kutu, percubaan diet hidrolisis 8 minggu, ujian alergi. Pilihan moden termasuk Apoquel® harian, Cytopoint® bulanan.',
  tldr: ['Satu gigitan kutu boleh cetus 2 minggu gatal', 'Percubaan makanan perlu 8 minggu STRIK', 'Atopik adalah seumur hidup — diurus, bukan sembuh', 'Apoquel®, Cytopoint® gantikan steroid jangka panjang', 'Pencegahan kutu sepanjang tahun wajib'],
  overview: 'Dermatitis alergi adalah punca paling biasa gatal kronik di Malaysia. Tidak seperti jangkitan kulit satu kali, alergi adalah masalah pengurusan seumur hidup — tetapi dengan rawatan moden, anjing boleh hidup selesa sepenuhnya.\n\nUrutan diagnostik penting: kawal kutu dahulu, kemudian percubaan diet ketat, kemudian ujian atopik. Melangkau langkah membazir wang.',
  sections: [
    { heading: 'Tiga Jenis Utama', body: 'FAD: hipersensitiviti kepada air liur kutu. CAFR: alergi protein spesifik (ayam, daging). CAD: kecenderungan genetik kepada alergen persekitaran (hama habuk, debunga).' },
    { heading: 'Pilihan Rawatan di Malaysia', body: 'Apoquel® harian, Cytopoint® bulanan, imunoterapi spesifik alergen (ASIT), atau cyclosporine (Atopica®). Semua tersedia melalui klinik vet khas.' },
  ],
  bulletSections: [
    { heading: 'Urutan Workup Diagnostik (jangan langkau)', items: ['Kawalan kutu STRIK pada semua haiwan 8 minggu', 'Percubaan diet hidrolisis 8 minggu', 'Cytology kulit', 'Ujian alergi intradermal/serology', 'Pelan rawatan berdasarkan keputusan'] },
    { heading: 'Tanda Bahaya', redFlag: true, items: ['Bengkak muka, hives, muntah selepas makan — kemungkinan anafilaksis', 'Mencederakan diri sehingga berdarah', 'Jangkitan telinga berulang', 'Gatal yang mengejutkan anjing pada waktu malam'] },
  ],
  whenToSeeVet: 'Mana-mana anjing menggaru lebih daripada 2 minggu, atau jangkitan kulit/telinga berulang, perlukan workup dermatologi yang betul.',
  keyTakeaways: ['Kawalan kutu sepanjang tahun', 'Percubaan makanan mesti STRIK', 'Rawatan bukan steroid moden lebih selamat', 'Atopik diurus seumur hidup'],
  faqs: [
    { question: 'Adakah ujian darah memberitahu apa anjing alah?', answer: 'Untuk alergen persekitaran, agak boleh dipercayai. Untuk makanan, TIDAK boleh dipercayai — hanya percubaan diet berfungsi.' },
    { question: 'Boleh saya beri Benadryl?', answer: 'Antihistamin membantu hanya 20–30% anjing. Sah dos dengan vet.' },
    { question: 'Berapa lama Apoquel® berfungsi?', answer: 'Kebanyakan pemilik nampak kurang gatal dalam 4–24 jam.' },
    { question: 'Apoquel® atau Cytopoint® lebih baik?', answer: 'Kedua-duanya baik. Cytopoint® suntikan bulanan; Apoquel® kawalan dos harian.' },
  ],
  seo: { metaTitle: 'Dermatitis Alergi Anjing Malaysia | Kutu, Makanan, Atopik', metaDescription: 'Panduan vet untuk dermatitis alergi anjing Malaysia: kutu, makanan, persekitaran. Apoquel®, Cytopoint®, kos (RM) dan langkah workup.', keywords: ['dermatitis alergi anjing', 'atopic dermatitis anjing', 'Apoquel Malaysia'] },
});

const msYeast = msMakeArticle(enYeast, {
  title: 'Jangkitan Yis (Malassezia) pada Anjing',
  snippetForAI: 'Jangkitan yis (Malassezia dermatitis) adalah pertumbuhan berlebihan yis Malassezia pachydermatis yang biasanya hidup pada kulit anjing. Dalam kelembapan Malaysia, ia membiak pada lipatan kulit, telinga, kaki dan bawah perut. Tanda: bau musty, kulit berminyak/bersisik, lilin telinga perang, gatal. Diagnosis: cytology kulit; rawatan: sampo chlorhexidine-miconazole + antifungal oral.',
  tldr: ['Bau "corn-chip" atau musty adalah petanda', 'Alergi/penyakit hormon menjadi pencetus', 'Sampo perubatan 2x seminggu adalah asas rawatan', 'Kedua-dua telinga biasanya terjejas', 'Bulldog, Shih Tzu, Westie predisposisi genetik'],
  overview: 'Malassezia adalah penghuni kulit normal — setiap anjing ada sedikit. Penyakit berlaku apabila keseimbangan terganggu: kelembapan, alergi, masalah hormon, atau lipatan kulit yang memerangkap kelembapan.',
  sections: [
    { heading: 'Bagaimana Vet Sahkan Yis', body: 'Cytology slaid kaca + pewarna Diff-Quik. Organisma Malassezia kelihatan seperti "kacang tanah". Ujian 15 minit, paling murah dan paling boleh dipercayai.' },
    { heading: 'Rawat Punca Asas', body: 'Yis berulang hampir selalu menandakan: alergi, hipotiroidisme, sindrom Cushing, atau bentuk lipatan kulit. Workup adalah penting.' },
  ],
  bulletSections: [
    { heading: 'Rutin Penyelenggaraan untuk Anjing Terdedah', items: ['Mandi chlorhexidine-miconazole mingguan', 'Sapu lipatan kulit setiap hari', 'Bersih telinga setiap 1–2 minggu', 'Keringkan sepenuhnya selepas mandi', 'Urus alergi dengan agresif'] },
    { heading: 'Tanda Bahaya', redFlag: true, items: ['Kepala condong tiba-tiba (jangkitan telinga dalam)', 'Berdarah dari saluran telinga', 'Kesakitan teruk pada telinga/kaki', 'Yis merebak pantas dalam 24–48 jam'] },
  ],
  whenToSeeVet: 'Lawatan vet jika ada bau musty berterusan, lilin telinga perang yang kembali dalam seminggu, atau kulit merah gatal antara jari kaki.',
  keyTakeaways: ['Bau + kulit berminyak = fikirkan yis', 'Cytology murah dan boleh dipercayai', 'Sentiasa siasat pencetus', 'Mandi penyelenggaraan mencegah serangan'],
  faqs: [
    { question: 'Boleh saya guna sampo anti-kelemumur manusia?', answer: 'Sesetengah mengandungi ketoconazole dan boleh membantu jangka pendek, tetapi pH tidak sesuai untuk anjing.' },
    { question: 'Berapa lama rawatan?', answer: 'Yis ringan: 2–3 minggu. Yis umum: 4–8 minggu + penyelenggaraan jangka panjang.' },
    { question: 'Adakah yis berjangkit?', answer: 'Tidak — setiap anjing sudah ada sedikit Malassezia.' },
    { question: 'Adakah yis hilang sendiri dalam cuaca kering?', answer: 'Malaysia tiada "musim kering" — kelembapan tinggi sepanjang tahun.' },
  ],
  seo: { metaTitle: 'Jangkitan Yis Anjing Malaysia | Malassezia Bau, Gatal, Rawatan', metaDescription: 'Panduan vet untuk jangkitan yis anjing Malaysia. Simptom Malassezia (bau musty, kulit berminyak), diagnosis, sampo & rawatan oral.', keywords: ['jangkitan yis anjing', 'Malassezia anjing', 'anjing berbau'] },
});

const msItching = msMakeArticle(enItching, {
  title: 'Anjing Gatal & Menggaru: Bila Perlu Risau',
  snippetForAI: 'Sesekali menggaru adalah normal. Gatal menjadi isu perubatan apabila mengganggu tidur, mencederakan kulit, fokus pada satu kawasan, atau berterusan lebih 2 minggu. Di Malaysia, punca teratas: kutu, dermatitis atopik, alergi makanan, jangkitan yis/bakteria. Gatal berterusan sentiasa memerlukan skin scraping vet — jangan guna krim anti-gatal manusia.',
  tldr: ['Normal: beberapa kali sehari, tiada kerosakan kulit', 'Tidak normal: gatal yang mengejutkan anjing pada waktu malam', 'Peraturan dua minggu: jika gatal 14+ hari, lawat vet', 'Kutu boleh ada tanpa kelihatan — gatal sahaja cukup', 'Kerosakan kulit memburukkan gatal'],
  overview: 'Gatal adalah aduan dermatologi paling biasa. Sukar bagi pemilik menilai "berapa banyak terlalu banyak" — bahaya menunggu terlalu lama dan kulit pecah serta jangkitan sekunder.',
  sections: [
    { heading: 'Peraturan Dua Minggu', body: 'Gatal akut biasa hilang dalam beberapa hari. Apa-apa berterusan lebih 2 minggu menandakan masalah lebih dalam yang tidak akan hilang sendiri.' },
    { heading: 'Apa Vet Akan Lakukan', body: 'Skin scraping (hama), cytology (yis/bakteria), flea-combing. Jika normal, percubaan kawalan kutu + percubaan makanan.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya', redFlag: true, items: ['Luka terbuka dari trauma diri', 'Hives tiba-tiba, bengkak muka — anafilaksis', 'Gatal + kehilangan berat/muntah/lesu', 'Gatal fokus satu tempat lebih 48 jam'] },
    { heading: 'Selamat Dibuat di Rumah Sebelum Vet', items: ['Pencegahan kutu/tick disyorkan vet', 'Kolar-e jika ada luka mentah', 'Mandi sampo lembut bertaraf vet', 'Pendekkan kuku', 'Log bila gatal teruk'] },
  ],
  whenToSeeVet: 'Dua minggu gatal berterusan, luka terbuka, atau hives/bengkak baru. Jangan tunggu.',
  keyTakeaways: ['Peraturan 2 minggu', 'Kutu tetap mungkin walaupun tidak nampak', 'Jangan krim manusia', 'Catatkan corak gatal'],
  faqs: [
    { question: 'Boleh saya beri Benadryl?', answer: 'Berfungsi hanya 20–30% anjing. Dos mesti disahkan oleh vet.' },
    { question: 'Anjing saya menggaru terutama waktu malam — apa maksudnya?', answer: 'Selalunya menandakan atopik atau scabies. Perlu diagnosis vet.' },
    { question: 'Adakah saya patut mandikan lebih kerap?', answer: 'Mandian perubatan 2x seminggu boleh membantu. Mandian berlebihan dengan sampo biasa boleh memburukkan.' },
    { question: 'Adakah gatal tanda kanser?', answer: 'Jarang. Limfoma kulit kadangkala menyebabkan gatal tempat khusus pada anjing lebih tua.' },
  ],
  seo: { metaTitle: 'Anjing Gatal & Menggaru Malaysia | Bila Jumpa Vet', metaDescription: 'Mengapa anjing saya gatal? Panduan vet Malaysia: punca, peraturan dua minggu, kos, tanda bahaya. Jangan guna krim manusia.', keywords: ['anjing gatal Malaysia', 'menggaru anjing'] },
});

const msHairLoss = msMakeArticle(enHairLoss, {
  title: 'Keguguran Bulu (Alopecia) pada Anjing',
  snippetForAI: 'Keguguran bulu boleh bertompok, simetri, atau umum. Bertompok: kurap, kudis, hot-spot. Simetri: penyakit hormon (hipotiroidisme, Cushing\'s). Umum: nutrisi, parasit, autoimun. Semua memerlukan workup vet termasuk skin scraping, kultur kulat, dan ujian darah hormon.',
  tldr: ['Corak penting: bertompok vs simetri vs umum', 'Simetri = fikirkan hormon', 'Bertompok + gatal = parasit/jangkitan', 'Bertompok tanpa gatal = fikir kulat', 'Kebanyakan boleh dirawat jika cepat'],
  overview: 'Keguguran bulu adalah simptom, bukan diagnosis. Vet mula dengan mengelaskan corak. Diagnosis awal penting kerana sesetengah punca (autoimun, hormon) berkembang senyap.',
  sections: [
    { heading: 'Pengenalpastian Corak', body: 'Bertompok + gatal + berkerak: parasit/bakteria/hot-spot. Bertompok + tidak gatal + bulat: kurap. Simetri + tidak gatal + kulit licin: penyakit hormon. Umum + bulu kusam: nutrisi/sistemik.' },
    { heading: 'Diagnostik Langkah demi Langkah', body: 'Langkah 1: scraping, cytology, lampu Wood. Langkah 2: jika syak hormon, panel darah penuh termasuk tiroid. Langkah 3: biopsi kulit untuk kes kronik.' },
  ],
  bulletSections: [{ heading: 'Tanda Bahaya', redFlag: true, items: ['Keguguran bulu + naik berat + lesu (syak hipotiroidisme)', 'Keguguran bulu + minum banyak + selera meningkat (syak Cushing\'s)', 'Keguguran bulu + kerak/luka muka — autoimun', 'Keguguran bulu umum tiba-tiba'] }],
  whenToSeeVet: 'Apa-apa keguguran bulu lebih daripada 2 minggu, atau simetri, atau dengan tanda sistemik (perubahan berat, lesu, minum lebih).',
  keyTakeaways: ['Corak + tahap gatal memandu diagnostik', 'Jangan andaikan "anjing tua, normal"', 'Simetri = hormon hingga terbukti tidak', 'Ambil gambar mingguan'],
  faqs: [
    { question: 'Adakah shedding sama dengan keguguran bulu?', answer: 'Tidak. Shedding meninggalkan bulu normal. Alopecia meninggalkan tompok botak.' },
    { question: 'Bolehkah stres menyebabkan keguguran bulu?', answer: 'Ya — psikogenik alopecia jarang tetapi benar, terutama baka bekerja.' },
    { question: 'Adakah bulu akan tumbuh semula?', answer: 'Biasanya ya, walaupun kes hormon boleh ambil 3–6 bulan.' },
    { question: 'Anjing tua saya kehilangan bulu simetri — apa patut buat?', answer: 'Buat panel tiroid lengkap. Hipotiroidisme sangat biasa dan boleh dirawat.' },
  ],
  seo: { metaTitle: 'Keguguran Bulu Anjing (Alopecia) Malaysia | Punca & Workup Vet', metaDescription: 'Mengapa anjing kehilangan bulu? Panduan vet Malaysia. Alopecia bertompok vs simetri, punca hormon, kos diagnostik.', keywords: ['keguguran bulu anjing', 'alopecia anjing', 'hipotiroidisme anjing'] },
});

const msEmergency = msMakeArticle(enEmergency, {
  title: 'Kecemasan Kulit Anjing: Bila Perlu ke Vet Sekarang',
  snippetForAI: 'Kecemasan kulit anjing termasuk reaksi alergi teruk (anafilaksis), hot-spot merebak cepat, luka dalam, sengatan lebah dengan bengkak muka, gigitan ular/kala jengking, dan jangkitan kulit dengan demam atau lesu. Di Malaysia, semua ini memerlukan perhatian vet segera. WhatsApp +60 11-5695 9227 untuk talian bantuan.',
  tldr: ['Bengkak muka dalam minit selepas gigitan — kecemasan', 'Sesak nafas + tanda kulit — anafilaksis', 'Gigitan ular Malaysia perlu antivenin', 'Demam + lesi kulit + lesu — risiko sepsis', 'Luka berdarah lebih 2 cm — vet hari ini'],
  hasEmergencyOverride: true,
  overview: 'Kebanyakan masalah kulit boleh tunggu sehingga pagi. Tetapi anafilaksis, gigitan berbisa, luka dalam dan jangkitan kulit septik boleh membunuh anjing dalam beberapa jam. Halaman ini adalah rujukan keputusan pantas.',
  sections: [
    { heading: 'Anafilaksis — Kecemasan Paling Pantas', body: 'Anafilaksis boleh bermula dalam beberapa saat selepas sengatan, vaksin atau pendedahan makanan/ubat. Tanda: bengkak muka, hives, muntah, lemah, gusi pucat, pengsan, sesak nafas. JANGAN tunggu — hubungi vet dan terus pandu.' },
    { heading: 'Gigitan Berbisa di Malaysia', body: 'Haiwan berbisa biasa: kobra, ular tedung, viper Malaya, krait, kala jengking. Rawatan memerlukan antivenin vet yang hanya disimpan di hospital rujukan utama. Telefon sebelum tiba.' },
  ],
  bulletSections: [
    { heading: 'Tanda PERGI SEKARANG', redFlag: true, items: ['Bengkak muka dalam minit', 'Sesak nafas, gusi biru/pucat', 'Pengsan, lemah, hilang kesedaran', 'Disyaki gigitan ular/kala jengking', 'Luka berdarah tidak berhenti selepas 5 minit tekanan', 'Hot-spot tiga kali ganda dalam beberapa jam', 'Demam (>40 °C) dengan lesi kulit'] },
    { heading: 'Apa Yang Perlu Bawa', items: ['Gambar tapak gigitan', 'Senarai ubat 24 jam lepas', 'Rekod vaksin dan sejarah penyakit', 'Nombor WhatsApp'] },
  ],
  whenToSeeVet: 'Untuk apa-apa pada senarai "PERGI SEKARANG", segera ke vet 24 jam terdekat dan telefon dahulu. Jika tidak pasti, WhatsApp +60 11-5695 9227.',
  keyTakeaways: ['Ketahui vet 24 jam SEBELUM kecemasan', 'Anafilaksis = minit, bukan jam', 'Gigitan ular perlu antivenin — telefon dahulu', 'WhatsApp +60 11-5695 9227 untuk triage'],
  faqs: [
    { question: 'Patut saya beri Benadryl selepas sengatan lebah?', answer: 'Hanya jika vet sudah luluskan dos spesifik. Jika tidak, pandu ke vet.' },
    { question: 'Boleh saya pandu anjing pengsan?', answer: 'Ya — bergerak lebih baik daripada menunggu. Telefon dahulu.' },
    { question: 'Berapa kos rawatan kecemasan?', answer: 'Rundingan luar waktu RM150–RM400. Kes teruk RM2,000–RM8,000.' },
    { question: 'Adakah insurans haiwan berbaloi?', answer: 'Untuk kecemasan, ya — satu kejadian anafilaksis/gigitan ular boleh kos lebih daripada 5 tahun premium.' },
  ],
  seo: { metaTitle: 'Kecemasan Kulit Anjing Malaysia | Anafilaksis, Gigitan Ular', metaDescription: 'Bila masalah kulit anjing menjadi kecemasan di Malaysia: anafilaksis, gigitan ular, sepsis. Tanda bahaya, kos, WhatsApp +60 11-5695 9227.', keywords: ['kecemasan kulit anjing', 'anafilaksis anjing', 'gigitan ular anjing'] },
});

// ============================================================
// CHINESE PAGES (Simplified, 「」 quotes)
// ============================================================

const zhMakeArticle = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'zh', author: AUTHOR_ZH, relatedLinks: RELATED_ZH, ...overrides } as AuthorityPage);

const zhHub: AuthorityPage = {
  ...enHub, lang: 'zh', author: AUTHOR_ZH, relatedLinks: RELATED_ZH,
  title: '马来西亚狗皮肤问题：瘙痒、热点、疥癣全攻略',
  snippetForAI: '皮肤问题是马来西亚等热带气候中狗只就医的第一原因。最常见原因：跳蚤过敏性皮炎、环境过敏、热点、皮癣菌（不是真正的蠕虫）、疥癣（包括人畜共患型）、细菌和酵母菌感染。大多数病例需要兽医确诊——切勿擅自使用人用乳膏或类固醇。',
  tldr: ['皮肤病占马来西亚狗就诊量约25%', '湿热气候——细菌和酵母感染在数天内迅速发展', '热点在24小时内可扩大一倍', '疥癣可传染——疥螨甚至会传给人类', '切勿在没有兽医建议下使用人用湿疹药膏或类固醇'],
  malaysiaContext: '马来西亚全年湿度（通常70-90%）和温暖气温为马拉色菌、葡萄球菌和跳蚤创造了理想条件。西施犬、斗牛犬、可卡犬等热带犬种受影响尤为严重。兽医服务局（DVS）和注册私人诊所处理大多数病例。',
  overview: `如果您的狗一直在抓挠、舔咬或掉毛，您并不孤单——皮肤问题是马来西亚宠物主人去看兽医的最常见原因。这里的热带气候，湿度通常超过80%，温度很少低于24°C，为跳蚤、细菌和酵母在犬类皮肤上繁殖创造了近乎完美的环境。

本中心为您提供一份直截了当的实地指南。您将了解如何区分热点和酵母感染、为什么疥癣是全家性问题、何时皮癣菌成为人类风险，以及何时应停止居家观察并立即预约兽医。`,
  categoryCards: [
    { title: '热点（急性湿性皮炎）', description: '快速扩散的红色渗出斑——湿热天气中最常见。', path: '/zh/dog-skin-problems/conditions/hot-spots', icon: '🔥' },
    { title: '疥癣（疥螨与蠕形螨）', description: '具传染性的螨虫——疥螨可传染给人类。', path: '/zh/dog-skin-problems/conditions/mange', icon: '🐛' },
    { title: '皮癣菌病（真菌）', description: '真菌感染（不是蠕虫）——人畜共患，具传染性。', path: '/zh/dog-skin-problems/conditions/ringworm', icon: '⭕' },
    { title: '过敏性皮炎', description: '跳蚤、食物和环境过敏——马来西亚慢性瘙痒首要原因。', path: '/zh/dog-skin-problems/conditions/allergic-dermatitis', icon: '🌿' },
    { title: '酵母感染（马拉色菌）', description: '油腻、有臭味的皮肤——热带湿度中蓬勃发展。', path: '/zh/dog-skin-problems/conditions/yeast-infection', icon: '🍞' },
    { title: '瘙痒与抓挠', description: '何时瘙痒是正常的，何时需要看兽医？', path: '/zh/dog-skin-problems/symptoms/itching', icon: '🐾' },
    { title: '脱毛（秃毛症）', description: '斑块状、对称性或全身性——每种模式意味着什么。', path: '/zh/dog-skin-problems/symptoms/hair-loss', icon: '✂️' },
    { title: '皮肤紧急情况', description: '需要当日兽医护理的危险信号。', path: '/zh/dog-skin-problems/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: { text: '被叮咬后出现严重肿胀、开放性出血伤口、虚脱或呼吸困难？这是紧急情况。', linkText: '查看紧急体征', linkPath: '/dog-skin-problems/emergency-signs' },
  faqs: [
    { question: '为什么我的狗皮肤味道这么难闻？', answer: '霉味或「玉米片」气味通常意味着酵母（马拉色菌）过度生长。酸味、腐臭味通常指向细菌感染。两者都需要兽医确诊。' },
    { question: '我可以在狗身上使用人用湿疹乳膏吗？', answer: '不可以。大多数人用乳膏含有对狗有毒或会掩盖感染的成分。请先获得兽医诊断。' },
    { question: '在马来西亚皮肤咨询的费用是多少？', answer: '基本咨询为RM50–RM120。再加RM80–RM200用于皮肤刮片和细胞学检查。完整过敏检查可达RM1,500。' },
    { question: '疥癣会传染给人类吗？', answer: '疥螨可在人类身上引起瘙痒性皮疹数周。蠕形螨不影响人类。无论如何，都要治疗狗并用热水清洗床上用品。' },
    { question: '热点恶化的速度有多快？', answer: '在马来西亚的湿度下，热点可在12-24小时内扩大一倍。强烈建议当日兽医护理。' },
  ],
  seo: { metaTitle: '马来西亚狗皮肤问题中心 | 瘙痒、热点、疥癣指南', metaDescription: '兽医审核的马来西亚狗皮肤问题指南：热点、疥癣、皮癣菌病、过敏、酵母、脱毛。症状、费用（令吉）、紧急体征。', keywords: ['狗皮肤问题马来西亚', '狗瘙痒', '热点狗', '疥癣狗', '皮癣菌狗', '酵母感染狗'] },
};

const zhHotSpots = zhMakeArticle(enHotSpots, {
  title: '狗热点（急性湿性皮炎）',
  snippetForAI: '热点是因自我创伤（瘙痒、舔咬）造成的红色、湿润、疼痛的快速扩散性皮肤斑块。在马来西亚湿度下，热点可在24小时内扩大一倍。治疗：剪掉毛发、清洁、处方抗生素或抗真菌药，以及伊丽莎白圈打破舔咬循环。',
  tldr: ['热点是紧急级皮肤病变——不能「观察等待」', '诱因：跳蚤咬伤、过敏、耳部感染、肛腺问题', '不治疗——2-3天内可发展为深部脓皮病', '伊丽莎白圈必不可少', '切勿使用过氧化氢——它会损伤愈合组织'],
  overview: '热点——临床称为急性湿性皮炎——是大多数主人反应不足的皮肤科紧急情况。早上看起来很小的红斑到晚上可能变成硬币大小的开放性渗出伤口。细菌在温暖湿润的表面爆发，狗反应得更多地舔咬。\n\n病变是症状，不是诊断。几乎每个热点背后都有诱因：跳蚤咬伤、过敏发作、耳部感染、肛腺刺激或毛发缠结导致湿气困住。',
  sections: [
    { heading: '热点如何发展', body: '自我创伤循环开始：狗感到瘙痒→舔或抓→破坏皮肤→细菌定植→更多瘙痒→更多舔咬。在马来西亚湿度下12-24小时内，针尖大小可变成5厘米的原始斑块。' },
    { heading: '兽医如何治疗', body: '剪掉病变周围的毛发→用兽医级氯己定清洁→外用抗生素/类固醇→必要时口服抗生素→伊丽莎白圈→识别并治疗诱因。' },
  ],
  bulletSections: [
    { heading: '危险信号——当日就医', redFlag: true, items: ['病变直径大于3厘米', '脓液、恶臭或黄色分泌物', '狗拒绝让您触碰该区域（剧痛）', '发烧或嗜睡', '24小时内出现多个热点'] },
    { heading: '不应该做的事', items: ['不要使用过氧化氢、酒精或碘——它们会损害愈合组织', '不要使用人用类固醇乳膏', '不要紧绷绷带——会困住湿气并恶化', '不要跳过伊丽莎白圈'] },
  ],
  whenToSeeVet: '如果病变大于50仙硬币、在不到24小时内出现、有异味、有脓液或您的狗明显疼痛，请预约当日就诊。',
  keyTakeaways: ['热点对时间敏感——不要等待', '伊丽莎白圈使用不容商榷', '始终调查诱因（跳蚤、过敏、耳部感染）', '避免人用乳膏——会延迟愈合并掩盖感染'],
  faqs: [
    { question: '热点会自愈吗？', answer: '在马来西亚的湿度下很少。没有干预，大多数热点在24-48小时内会变大变深。' },
    { question: '我可以在家治疗热点吗？', answer: '您可以在等待兽医时保持区域干燥并戴上伊丽莎白圈，但单独家庭治疗通常失败。' },
    { question: '治疗需要多长时间？', answer: '及时兽医护理，大多数热点在7-14天内愈合。严重病例3-4周。' },
    { question: '它会再发吗？', answer: '如果没有识别和管理潜在诱因（跳蚤、过敏、耳炎），可能会。全年跳蚤预防是马来西亚最大的单一预防步骤。' },
  ],
  seo: { metaTitle: '狗热点马来西亚 | 急性湿性皮炎指南', metaDescription: '马来西亚狗热点的兽医指南：原因、治疗、费用（RM120-RM350）、危险信号和预防。今天就打破舔咬循环。', keywords: ['狗热点马来西亚', '急性湿性皮炎', '狗皮肤感染'] },
});

const zhMange = zhMakeArticle(enMange, {
  title: '狗疥癣：疥螨与蠕形螨',
  snippetForAI: '疥癣是由微小螨虫引起的皮肤病。马来西亚狗中两种主要类型：疥螨（高度传染性，可传染给人类，引起剧烈瘙痒）和蠕形螨（不传染，当免疫力下降时蠕形螨过度生长）。诊断需要皮肤刮片；现代处方驱虫药治疗非常有效。',
  tldr: ['疥螨是人畜共患——人类可能感染（类似疥疮的皮疹）', '蠕形螨通常表明潜在的免疫力虚弱', '两者都需要皮肤刮片——不是凭视觉诊断', '现代异恶唑啉类片剂（Bravecto®、NexGard®）清除大多数病例', '床上用品必须用热水清洗'],
  overview: '疥癣是马来西亚宠物护理中最常被主人自我诊断的疾病之一。主人看到结痂的皮肤和斑块状脱毛，上网搜索后开始家庭治疗——但真正的疥癣需要显微镜下的皮肤刮片确诊。\n\n知道您的狗有哪种类型很重要，因为疥螨可传染给人类和其他宠物，而蠕形螨通常标志着需要解决的潜在免疫问题。',
  sections: [
    { heading: '疥螨（疥疮）', body: '由犬疥螨引起。标志是剧烈瘙痒——狗抓得自己出血，尤其是耳缘、肘部和腹部。高度传染。现代口服异恶唑啉在不到一个月内清除大多数病例。' },
    { heading: '蠕形螨（蠕形螨病）', body: '由犬蠕形螨引起，是健康皮肤中以极少数存在的螨虫。当免疫力降低时过度生长——常见于小狗和有潜在疾病的成年狗。' },
  ],
  bulletSections: [
    { heading: '危险信号', redFlag: true, items: ['自我创伤导致皮肤出血', '继发性细菌感染（脓液、异味）', '嗜睡、发烧、体重下降', '儿童或免疫功能低下的成年人出现瘙痒性皮疹', '4岁以上狗的蠕形螨——调查潜在疾病'] },
    { heading: '避免这些DIY治疗', items: ['用过的机油、煤油、硫磺浴——有毒且过时', '大蒜油——对狗有毒', '没有兽医建议的人用疥疮乳膏（拟除虫菊酯可以杀死附近的猫）', '一次阴性刮片后停止治疗'] },
  ],
  whenToSeeVet: '任何时候您的狗有持续剧烈瘙痒、斑块状脱毛，或您（或家人）在接触狗后出现新的瘙痒性皮疹。',
  keyTakeaways: ['不要自我诊断——做皮肤刮片', '异恶唑啉片剂改变了治疗成功率', '疥螨=全家问题，治疗所有宠物并热洗床上用品', '成年发病的蠕形螨总是需要潜在疾病检查'],
  faqs: [
    { question: '我可以从我的狗那里感染疥癣吗？', answer: '疥螨可能在人类身上引起暂时的瘙痒性皮疹。蠕形螨是物种特异性的，不感染人类。' },
    { question: '治疗需要多长时间？', answer: '疥螨：现代异恶唑啉通常2-4周。蠕形螨病：根据严重程度1-6个月。' },
    { question: '疥癣是疏于照顾的迹象吗？', answer: '不总是。蠕形螨可以影响照顾良好的纯种小狗。' },
    { question: '我可以使用我的狗已经服用的相同跳蚤蜱咀嚼药吗？', answer: '一些异恶唑啉类跳蚤蜱产品已获许可用于疥癣治疗，但剂量不同。请与兽医确认。' },
  ],
  seo: { metaTitle: '马来西亚狗疥癣 | 疥螨与蠕形螨治疗', metaDescription: '马来西亚狗疥癣的兽医指南。疥螨与蠕形螨——症状、诊断、治疗、费用（RM250-RM700）、人畜共患风险。', keywords: ['狗疥癣马来西亚', '疥螨', '蠕形螨'] },
});

const zhRingworm = zhMakeArticle(enRingworm, {
  title: '狗皮癣菌病（钱癣）',
  snippetForAI: '皮癣菌病是真菌性皮肤感染——不是蠕虫。由皮肤癣菌真菌（最常见的是犬小孢子菌）引起，表现为圆形脱毛斑块，对其他宠物和人类具传染性。诊断需要真菌培养或PCR测试；治疗结合口服抗真菌药和外用石灰硫或咪康唑-氯己定洗剂4-8周。',
  tldr: ['皮癣菌是真菌，不是蠕虫——切勿使用驱虫药', '经典外观：小圆形脱毛斑，中心结痂', '儿童和老人最有可能从宠物身上感染', '伍德灯筛查可能漏掉50%的病例', '环境去污与治疗宠物同样重要'],
  overview: '尽管名字叫「钱癣」（ringworm），但它与蠕虫无关——它是毛发、皮肤和指甲的真菌感染。「环」状外观来自真菌从中心点向外扩散，因为它消化毛干中的角蛋白。\n\n在马来西亚，孢子可在家具、床上用品和美容工具上存活长达18个月。只治疗宠物而不进行环境去污几乎肯定会导致再次感染。',
  sections: [
    { heading: '识别病变', body: '经典皮癣菌病表现为大致圆形的脱毛区域——通常约5仙硬币大小——中心有片状或结痂。病变可出现在任何地方但最常见于面部、耳朵、爪子和前肢。' },
    { heading: '治疗宠物和环境', body: '治疗使用口服抗真菌药（伊曲康唑在马来西亚最常用）和外用洗剂——石灰硫浸或咪康唑-氯己定洗剂，每周两次。大多数病例需要4-8周的治疗。' },
  ],
  bulletSections: [
    { heading: '危险信号', redFlag: true, items: ['几天内出现多个病变', '家中人类（尤其是儿童）出现红色鳞状环', '口鼻或眼睛周围的病变', '全身脱毛伴厚痂'] },
    { heading: '不应该做的事', items: ['不要使用驱虫药——皮癣菌不是蠕虫', '治疗期间不要在宠物之间共享美容工具', '不要在病变看起来愈合时停止治疗', '不要在大面积涂抹人用抗真菌乳膏'] },
  ],
  whenToSeeVet: '任何无法解释的圆形脱毛斑块请预约兽医，特别是如果家中有多个宠物或儿童。',
  keyTakeaways: ['用培养确诊', '消毒床上用品、沙发和美容工具', '儿童和老人是最高风险人群', '完整治疗4-8周——不要提前停止'],
  faqs: [
    { question: '我室内的狗怎么会感染皮癣菌？', answer: '孢子可以通过鞋子、来访宠物、新小狗甚至污染的美容设备进入。不需要户外接触。' },
    { question: '皮癣菌危险吗？', answer: '在健康狗中不危及生命，但具传染性且令人不适。在人类中会引起需要自己抗真菌治疗的瘙痒性圆形皮疹。' },
    { question: '我可以在狗身上使用人用钱癣乳膏吗？', answer: '克霉唑或咪康唑的小点使用通常安全，但单独使用从来不够。' },
    { question: '我怎么知道它消失了？', answer: '两次连续阴性真菌培养间隔2周。视觉愈合还不够。' },
  ],
  seo: { metaTitle: '狗皮癣菌病马来西亚 | 钱癣诊断与治愈', metaDescription: '马来西亚狗皮癣菌病的兽医指南。症状、真菌培养、治疗（RM300-RM800）、人畜共患风险、环境清洁清单。', keywords: ['狗皮癣菌病马来西亚', '钱癣', '狗真菌皮肤感染'] },
});

const zhAllergic = zhMakeArticle(enAllergic, {
  title: '狗过敏性皮炎（跳蚤、食物、特应性）',
  snippetForAI: '狗过敏性皮炎有三大主要原因：跳蚤过敏性皮炎（FAD）、皮肤不良食物反应（食物过敏）和犬特应性皮炎（环境过敏）。在马来西亚，跳蚤过敏最常见。检查涉及严格的跳蚤控制、消除饮食试验和特应性的皮内或血清学测试。',
  tldr: ['一次跳蚤咬伤可触发过敏狗2周的瘙痒', '食物试验需要8周的严格新蛋白质饮食——不能作弊', '特应性皮炎（CAD）是终生的——管理，不是治愈', '现代治疗（Apoquel®、Cytopoint®）取代了长期类固醇', '全年跳蚤预防是最便宜、最有效的干预'],
  overview: '过敏性皮炎是马来西亚狗慢性瘙痒最常见的原因。与一次性皮肤感染不同，过敏是终生管理问题——但通过现代治疗，受影响的狗可以过上完全舒适的生活。\n\n诊断顺序很重要：先排除跳蚤（因为一只跳蚤就足够了），然后进行严格的消除饮食试验，然后测试环境特应性。',
  sections: [
    { heading: '三种主要类型', body: 'FAD：对跳蚤唾液的超敏反应。CAFR：对特定蛋白质（通常是鸡肉或牛肉）的过敏。CAD：对环境过敏原（尘螨、花粉、霉菌）反应过度的遗传倾向。' },
    { heading: '马来西亚的治疗选择', body: 'Apoquel®（每日片剂）、Cytopoint®（每月注射）、过敏原特异性免疫疗法（ASIT）、环孢素（Atopica®）。' },
  ],
  bulletSections: [
    { heading: '诊断检查顺序（不要跳过步骤）', items: ['所有宠物8周严格跳蚤控制', '8周水解饮食试验（不吃零食，不吃残羹剩饭）', '皮肤细胞学排除继发性酵母或细菌', '特应性的皮内或血清学过敏测试', '基于结果的治疗计划'] },
    { heading: '危险信号', redFlag: true, items: ['饭后突然面部肿胀、荨麻疹或呕吐——可能过敏反应', '自我伤害破坏皮肤', '双耳反复感染', '夜间叫醒狗的瘙痒'] },
  ],
  whenToSeeVet: '任何抓挠超过2周的狗，或任何反复出现皮肤或耳部感染的狗，都需要适当的皮肤病检查。',
  keyTakeaways: ['全年跳蚤控制是基础——绝不可选', '食物试验必须严格', '现代非类固醇治疗更安全有效', '特应性皮炎终生管理'],
  faqs: [
    { question: '血液测试会告诉我我的狗过敏什么吗？', answer: '对于环境过敏原，血清学具有一定的可靠性。对于食物过敏，血液面板不可靠——只有消除饮食试验有效。' },
    { question: '我可以给我的狗服用苯海拉明吗？', answer: '抗组胺药仅对20-30%的特应性狗有帮助。务必与兽医确认剂量。' },
    { question: 'Apoquel®多久起作用？', answer: '大多数主人在4-24小时内看到瘙痒减轻。7天内完全见效。' },
    { question: 'Cytopoint®还是Apoquel®更好？', answer: '两者都很出色。Cytopoint®是每月注射；Apoquel®给予灵活的日常剂量控制。' },
  ],
  seo: { metaTitle: '狗过敏性皮炎马来西亚 | 跳蚤、食物、特应性指南', metaDescription: '马来西亚狗过敏性皮炎的兽医指南：跳蚤、食物和环境过敏。Apoquel®、Cytopoint®、费用（RM）和检查步骤。', keywords: ['狗过敏性皮炎马来西亚', '犬特应性皮炎', 'Apoquel马来西亚'] },
});

const zhYeast = zhMakeArticle(enYeast, {
  title: '狗酵母感染（马拉色菌）',
  snippetForAI: '酵母感染（马拉色菌皮炎）是通常在狗皮肤上以少量存在的厚皮马拉色菌酵母过度生长。在马来西亚的湿度下，它在皮肤褶皱、耳朵、爪子和下侧过度生长。体征包括霉味、油腻或鳞状皮肤、棕色耳垢和剧烈瘙痒。',
  tldr: ['「玉米片」或霉味是关键标志', '潜在过敏或激素疾病通常导致复发', '每周两次药用洗剂是主力治疗', '即使只有一只看起来很糟糕，两只耳朵通常都受影响', '斗牛犬、西施犬和西高地白梗有遗传倾向'],
  overview: '马拉色菌是正常的皮肤居民——每只狗都有一些。只有当某些事情打破平衡时才会发展为疾病：湿度、过敏、激素问题、免疫抑制或皮肤褶皱困住。这就是为什么只治疗酵母（而不是诱因）会导致不断复发。',
  sections: [
    { heading: '兽医如何确认酵母（而不是细菌）', body: '简单的诊所内程序：玻片压在皮肤上或在耳垢中滚动，用Diff-Quik染色，并在显微镜下检查。马拉色菌生物体看起来像「花生」或「足迹」形状。' },
    { heading: '治疗潜在原因', body: '反复酵母感染几乎总是表明：过敏（最常见）、甲状腺功能减退症（老年狗）、库欣综合征，或仅仅是困住湿气的皮肤褶皱结构。' },
  ],
  bulletSections: [
    { heading: '易患狗的维护程序', items: ['每周洗一次氯己定-咪康唑澡', '每天用兽医推荐的湿巾擦拭皮肤褶皱', '每1-2周清洁耳朵', '每次洗澡和下雨后彻底擦干', '积极管理潜在过敏'] },
    { heading: '危险信号', redFlag: true, items: ['突然头部倾斜或失去平衡（深部耳部感染）', '耳道出血', '触摸耳朵或爪子时剧烈疼痛', '24-48小时内酵母迅速扩散'] },
  ],
  whenToSeeVet: '如果您的狗有持续的霉味、清洁一周内回来的棕色耳垢，或脚趾间的红色瘙痒皮肤，请预约兽医。',
  keyTakeaways: ['气味+油腻皮肤=想到酵母', '细胞学便宜地确认诊断', '复发病例总是调查潜在诱因', '维护洗澡可预防易患品种的发作'],
  faqs: [
    { question: '我可以使用人用去屑洗发水吗？', answer: '有些含有酮康唑可以短期帮助，但它们不是为犬皮肤pH值配制的。' },
    { question: '治疗需要多长时间？', answer: '轻度局部酵母：2-3周。具有慢性皮肤变化的全身酵母：4-8周加长期维护。' },
    { question: '酵母传染吗？', answer: '不是通常意义上的——每只狗已经有一些马拉色菌。' },
    { question: '酵母会在干燥天气中自行消失吗？', answer: '马来西亚没有真正的「干季」——全年湿度仍然很高。' },
  ],
  seo: { metaTitle: '狗酵母感染（马拉色菌）马来西亚 | 气味、瘙痒、治疗', metaDescription: '马来西亚狗酵母感染的兽医指南。马拉色菌症状（霉味、油腻皮肤）、诊断（RM60-RM150）、洗剂和口服治疗。', keywords: ['狗酵母感染马来西亚', '马拉色菌狗', '狗皮肤有臭味'] },
});

const zhItching = zhMakeArticle(enItching, {
  title: '狗瘙痒与抓挠：何时担心',
  snippetForAI: '偶尔抓挠在狗身上是正常的。当它扰乱睡眠、破坏皮肤、集中在一个区域或持续超过2周时，瘙痒成为医疗问题。在马来西亚，主要原因是跳蚤、特应性皮炎、食物过敏、酵母或细菌感染。持续瘙痒总是需要兽医皮肤刮片和细胞学——切勿在没有兽医指导下使用人用止痒乳膏。',
  tldr: ['正常抓挠：每天几次，没有皮肤损伤', '异常：抓挠唤醒狗在夜间', '两周规则：如果瘙痒持续14+天，预约兽医', '即使没有可见成虫，跳蚤也可能存在——单独瘙痒就足够了', '皮肤屏障损伤使瘙痒恶化——早期治疗更便宜更快'],
  overview: '瘙痒是狗最常见的皮肤病投诉。对主人来说，最难的部分是判断「多少太多」——危险在于许多人等待太久，让皮肤屏障破裂并继发感染。',
  sections: [
    { heading: '两周规则', body: '大多数急性、触发明确的瘙痒在几天内消失。任何持续超过两周的事情都表明更深层次的问题——过敏、感染或寄生虫——不会自行解决。' },
    { heading: '兽医会做什么', body: '预期皮肤刮片（螨虫）、细胞学（酵母/细菌）和跳蚤梳理。如果一切正常，下一步通常是跳蚤控制加食物试验的经验性试验。' },
  ],
  bulletSections: [
    { heading: '危险信号', redFlag: true, items: ['自我创伤的开放性伤口', '突然荨麻疹、面部肿胀——可能过敏反应', '瘙痒加体重下降、呕吐或嗜睡', '瘙痒集中在一个地方超过48小时'] },
    { heading: '在兽医之前可以在家做的安全事情', items: ['应用全年兽医推荐的跳蚤蜱预防', '如果狗正在产生原始斑点，使用伊丽莎白圈', '用温和的兽医级洗发水洗澡（不是人用）', '保持指甲短', '记录瘙痒最严重的时间和地点'] },
  ],
  whenToSeeVet: '两周持续瘙痒、任何开放性伤口或任何新的荨麻疹/肿胀。不要延迟。',
  keyTakeaways: ['两周规则就诊', '不要因为看不见就排除跳蚤', '切勿无监督使用人用止痒乳膏', '记录瘙痒模式帮助诊断'],
  faqs: [
    { question: '我可以给我的狗服用苯海拉明止痒吗？', answer: '抗组胺药仅对20-30%的瘙痒狗有效，剂量必须由兽医确认。' },
    { question: '我的狗主要在晚上抓挠——这意味着什么？', answer: '夜间瘙痒通常指向特应性皮炎或疥疮。两者都需要兽医诊断。' },
    { question: '我应该更频繁地给我瘙痒的狗洗澡吗？', answer: '兽医处方的药用浴每周两次可以帮助。用普通洗发水过度洗澡会去除皮肤屏障。' },
    { question: '瘙痒是癌症的迹象吗？', answer: '很少。老年狗的持续局部瘙痒偶尔可以指示皮肤淋巴瘤。' },
  ],
  seo: { metaTitle: '狗瘙痒与抓挠马来西亚 | 何时就诊', metaDescription: '我的狗为什么瘙痒？马来西亚兽医指南：原因、两周规则、费用、危险信号。不要用人用乳膏治疗——先读这个。', keywords: ['狗瘙痒马来西亚', '狗抓挠过多', '狗瘙痒症'] },
});

const zhHairLoss = zhMakeArticle(enHairLoss, {
  title: '狗脱毛（秃毛症）',
  snippetForAI: '狗脱毛可以是斑块状、对称性或全身性。斑块状秃毛症通常指向皮癣菌、疥癣或热点。对称性脱毛在侧腹或躯干通常预示激素疾病（甲状腺功能减退症、库欣综合征）。所有持续性脱毛都需要兽医检查包括皮肤刮片、真菌培养以及可能的血液激素测试。',
  tldr: ['模式很重要：斑块状vs对称性vs全身性', '对称性脱毛=想到激素', '斑块状加瘙痒=可能是寄生虫或感染', '斑块状无瘙痒=想到真菌（皮癣菌）', '大多数秃毛症如果早期诊断都是可逆的'],
  overview: '脱毛是症状，不是诊断。兽医首先对模式进行分类：在哪里脱毛、下面的皮肤是发炎还是光滑、狗是否瘙痒？',
  sections: [
    { heading: '模式识别', body: '斑块状+瘙痒+结痂：想到寄生虫、细菌性脓皮病或热点。斑块状+无瘙痒+圆形：想到皮癣菌。对称性「鼠尾」或侧腹脱毛+无瘙痒+皮肤光滑：想到内分泌疾病。' },
    { heading: '诊断逐步', body: '第1步：皮肤刮片、细胞学、伍德灯。第2步：如果怀疑激素，完整血液面板包括甲状腺。第3步：慢性、无法解释或对称病例的皮肤活检。' },
  ],
  bulletSections: [{ heading: '危险信号', redFlag: true, items: ['脱毛伴体重增加、嗜睡、怕冷（怀疑甲状腺功能减退症）', '脱毛伴饮水增加、食欲增加、腹部隆起（怀疑库欣综合征）', '面部脱毛伴结痂和溃疡——可能自身免疫（天疱疮）', '几天内突然全身脱毛'] }],
  whenToSeeVet: '任何持续超过2周的脱毛、任何对称性脱毛或任何伴有全身性症状（体重变化、嗜睡、饮水增多）的脱毛。',
  keyTakeaways: ['模式+瘙痒程度驱动诊断路径', '不要假设「老狗，正常脱毛」', '对称性=激素直到证明不是', '每周拍照跟踪进展'],
  faqs: [
    { question: '脱毛与脱毛相同吗？', answer: '不。脱毛留下正常的被毛。秃毛症留下可见的秃斑或稀疏斑块。' },
    { question: '压力会导致脱毛吗？', answer: '是——过度梳理的心因性秃毛症不常见但真实。' },
    { question: '毛发会再长出来吗？', answer: '通常一旦治疗原因，会的，尽管激素病例可能需要3-6个月。' },
    { question: '我的老狗在对称斑块中脱毛——我应该怎么做？', answer: '预约兽医做完整的甲状腺面板。甲状腺功能减退症非常常见且非常可治。' },
  ],
  seo: { metaTitle: '狗脱毛（秃毛症）马来西亚 | 原因和兽医检查', metaDescription: '我的狗为什么脱毛？马来西亚兽医指南。斑块状vs对称性秃毛症、激素原因、诊断费用（RM150-RM700）。', keywords: ['狗脱毛马来西亚', '狗秃毛症', '狗秃斑'] },
});

const zhEmergency = zhMakeArticle(enEmergency, {
  title: '狗皮肤紧急情况：何时立即就医',
  snippetForAI: '狗皮肤紧急情况包括严重过敏反应（过敏反应）、快速扩散的热点、深部伤口、伴有面部肿胀的蜜蜂或大黄蜂叮咬、蛇或蝎子咬伤，以及任何伴有发烧或嗜睡的皮肤感染。在马来西亚，这些需要立即兽医护理。WhatsApp +60 11-5695 9227。',
  tldr: ['咬伤/叮咬后几分钟内面部肿胀——紧急情况', '呼吸困难+皮肤体征——过敏反应，立即就医', '马来西亚蛇咬伤：眼镜蛇、银环蛇、蝰蛇都需要抗蛇毒血清', '发烧+皮肤病变+嗜睡——脓毒症风险', '大于2厘米的开放性出血伤口——当日就医'],
  hasEmergencyOverride: true,
  overview: '大多数皮肤问题可以等到早上。但一小部分——过敏反应、毒咬伤、深部伤口和败血性皮肤感染——如果不治疗可以在数小时内杀死狗。',
  sections: [
    { heading: '过敏反应——发展最快的紧急情况', body: '过敏反应可在昆虫叮咬、疫苗或食物/药物暴露后几秒内开始。体征：突然面部肿胀、荨麻疹、呕吐、虚弱、苍白牙龈、虚脱、呼吸困难。不要等待。立即拨打最近的紧急兽医。' },
    { heading: '马来西亚的毒咬伤', body: '常见有毒动物：吐蛇眼镜蛇、单眼镜蛇、马来亚响尾蛇、银环蛇、蝎子、大蜈蚣。治疗需要只在主要转诊医院储存的兽医抗蛇毒血清。' },
  ],
  bulletSections: [
    { heading: '立即就医体征（24小时紧急兽医）', redFlag: true, items: ['几分钟内出现面部肿胀', '呼吸困难，蓝色或苍白牙龈', '虚脱、虚弱或意识丧失', '怀疑蛇或蝎子咬伤', '5分钟压力不会停止的开放性出血伤口', '数小时内热点扩大三倍', '发烧（>40°C）伴任何皮肤病变'] },
    { heading: '带到紧急兽医的东西', items: ['咬伤/叮咬部位的照片', '过去24小时内您的狗服用的任何药物清单', '疫苗记录和慢性疾病史', 'WhatsApp号码'] },
  ],
  whenToSeeVet: '对于「立即就医」列表上的任何内容，立即前往最近的24小时兽医并提前电话。如果不确定，请通过WhatsApp +60 11-5695 9227进行分诊。',
  keyTakeaways: ['在紧急情况之前知道您最近的24小时兽医', '过敏反应是几分钟，不是几小时', '蛇咬伤需要抗蛇毒血清——提前打电话', 'WhatsApp +60 11-5695 9227'],
  faqs: [
    { question: '蜜蜂叮咬后我应该给我的狗服用苯海拉明吗？', answer: '只有当兽医之前批准了您狗的特定剂量时。否则开车去兽医——它工作更快，剂量正确。' },
    { question: '如果我的狗虚脱了，我可以开车送它去兽医吗？', answer: '可以——移动比等待更好。提前打电话。' },
    { question: '紧急治疗费用是多少？', answer: '下班后咨询费用为RM150-RM400。严重病例（过敏反应、蛇咬伤、住院）可达RM2,000-RM8,000。' },
    { question: '宠物保险值得吗？', answer: '对于紧急情况，是——单一过敏反应或蛇咬伤事件的费用可能超过5年保费。' },
  ],
  seo: { metaTitle: '狗皮肤紧急情况马来西亚 | 过敏反应、蛇咬伤、热点', metaDescription: '何时狗皮肤问题成为马来西亚的紧急情况：过敏反应、蛇咬伤、脓毒症。危险信号、费用、WhatsApp热线+60 11-5695 9227。', keywords: ['狗皮肤紧急马来西亚', '狗过敏反应', '马来西亚狗蛇咬伤'] },
});

// ============================================================
// REGISTRY
// ============================================================

export const dogSkinConfig: AuthorityHubConfig = {
  basePath: DOG_SKIN_BASE_PATH,
  pages: [
    enHub, enHotSpots, enMange, enRingworm, enAllergic, enYeast, enItching, enHairLoss, enEmergency,
    msHub, msHotSpots, msMange, msRingworm, msAllergic, msYeast, msItching, msHairLoss, msEmergency,
    zhHub, zhHotSpots, zhMange, zhRingworm, zhAllergic, zhYeast, zhItching, zhHairLoss, zhEmergency,
  ],
};

export default dogSkinConfig;

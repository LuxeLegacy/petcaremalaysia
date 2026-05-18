import type { AuthorityHubConfig, AuthorityPage, AuthorityAuthor } from '../authority/types';

export const DOG_VOMITING_BASE_PATH = '/dog-vomiting-diarrhea';

const AUTHOR_EN: AuthorityAuthor = {
  name: 'Dr. Mei Ling Wong',
  credentials: 'DVM, MVSc Small Animal Internal Medicine',
  bio: 'Internal medicine and gastroenterology focus, 12+ years across Klang Valley and Penang clinics.',
};
const AUTHOR_MS: AuthorityAuthor = {
  name: 'Dr. Mei Ling Wong',
  credentials: 'DVM, MVSc Perubatan Dalaman Haiwan Kecil',
  bio: 'Pakar perubatan dalaman dan gastroenterologi, 12+ tahun di Lembah Klang dan Pulau Pinang.',
};
const AUTHOR_ZH: AuthorityAuthor = {
  name: 'Dr. Mei Ling Wong',
  credentials: 'DVM，小动物内科硕士',
  bio: '专注于内科和消化系统疾病，在巴生谷和槟城拥有超过12年的临床经验。',
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
  { title: 'BSAVA Manual of Canine and Feline Gastroenterology, 3rd Ed.', source: 'British Small Animal Veterinary Association', url: 'https://www.bsava.com/', year: '2023' },
  { title: 'WSAVA Global Nutrition Guidelines', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/global-guidelines/', year: '2023' },
  { title: 'ACVIM Consensus on Acute Diarrhea in Dogs', source: 'American College of Veterinary Internal Medicine', url: 'https://www.acvim.org/', year: '2022' },
  { title: 'Veterinary Surgeons Act 1974 (Act 147)', source: 'Department of Veterinary Services Malaysia', url: 'https://www.dvs.gov.my/', year: '2024' },
];

// ============================================================
// ENGLISH PAGES
// ============================================================

const enHub: AuthorityPage = {
  slug: 'hub', kind: 'hub', category: 'Hub', lang: 'en',
  title: 'Dog Vomiting & Diarrhea in Malaysia: Causes, Costs & Red Flags',
  snippetForAI: 'Dog vomiting and diarrhea are among the top 3 reasons for vet visits in Malaysia. Common causes include dietary indiscretion (scavenging), parasites (worms, giardia), viral infections (parvovirus, distemper), pancreatitis, foreign body ingestion, and toxin exposure. A single vomit in a bright, alert adult dog can often be monitored for 12 hours, but repeated vomiting, blood, lethargy, or vomiting in puppies needs same-day vet care.',
  tldr: [
    'Acute vomiting + diarrhea together = vet visit within 24 hours',
    'Any vomiting in puppies under 6 months = same-day emergency',
    'Blood in vomit or stool = always a vet visit, do not wait',
    'Parvovirus kills unvaccinated puppies in 48–72 hours',
    'Never give human anti-nausea drugs without a vet (some are toxic)',
  ],
  quickFacts: [
    { label: 'Top 3 Causes (Malaysia)', value: 'Scavenging, parasites, parvovirus' },
    { label: 'Vet Consult (basic)', value: 'RM50–RM150' },
    { label: 'Faecal Test', value: 'RM40–RM100' },
    { label: 'Parvovirus Hospitalisation', value: 'RM1,500–RM5,000' },
    { label: 'IV Fluids (per day)', value: 'RM150–RM350' },
    { label: 'Fasting Rule (Adult)', value: 'Max 12 hours, never for puppies' },
  ],
  malaysiaContext: 'Malaysia\'s tropical climate accelerates bacterial growth in spoiled food, and roaming or kampung-living dogs frequently scavenge — making dietary indiscretion the #1 acute GI trigger. Parvovirus remains common in unvaccinated puppies, especially in shelter-adopted dogs. Tick-borne diseases (Ehrlichia, Anaplasma) can also cause vomiting and should be considered in endemic areas. Department of Veterinary Services (DVS) registered clinics handle most cases; severe pancreatitis or surgical foreign body removal may need referral to multi-vet hospitals in KL, Penang, or JB.',
  statistics: [
    { stat: 'GI disorders rank in the top 3 reasons for canine veterinary visits globally', source: 'Banfield State of Pet Health, 2024' },
    { stat: 'Parvovirus mortality in untreated puppies exceeds 90%', source: 'WSAVA Vaccination Guidelines, 2023' },
    { stat: 'Up to 30% of acute canine diarrhea cases involve a parasitic component', source: 'ACVIM Consensus, 2022' },
  ],
  costRange: [
    { item: 'Basic vet consult', range: 'RM50–RM150' },
    { item: 'Faecal exam', range: 'RM40–RM100' },
    { item: 'Bloodwork (CBC + chem)', range: 'RM180–RM400' },
    { item: 'Parvovirus snap test', range: 'RM80–RM150' },
    { item: 'X-ray (foreign body)', range: 'RM120–RM350' },
    { item: 'Hospitalisation per day', range: 'RM250–RM600' },
    { item: 'Foreign body surgery', range: 'RM2,500–RM8,000' },
  ],
  citations: CITATIONS,
  keyTakeaways: [
    'Vomiting + diarrhea in puppies is an emergency — do not wait overnight',
    'Blood (red or coffee-ground) means see a vet today',
    'Never give Imodium, Pepto-Bismol, or paracetamol — risk of toxicity',
    'Keep your dog vaccinated against parvovirus — it is preventable',
  ],
  overview: `Few things rattle a Malaysian pet owner like waking up to a puddle of vomit or watery stool. Most cases are mild and resolve in 24 hours — but the small percentage that don't can become life-threatening fast, especially for puppies and senior dogs.

This hub helps you triage quickly: when can you safely monitor at home, when do you need a vet today, and when is it a same-night emergency? Every page references current internal-medicine guidelines and is reviewed by a Malaysian-licensed vet.`,
  categoryCards: [
    { title: 'Acute Vomiting', description: 'Sudden onset within 24 hours — causes, triage, and when to worry.', path: '/dog-vomiting-diarrhea/conditions/acute-vomiting', icon: '🤢' },
    { title: 'Acute Diarrhea', description: 'Sudden loose or watery stool — most common causes and home triage.', path: '/dog-vomiting-diarrhea/conditions/acute-diarrhea', icon: '💧' },
    { title: 'Parvovirus', description: 'Deadly puppy virus — symptoms, treatment, vaccine schedule.', path: '/dog-vomiting-diarrhea/conditions/parvovirus', icon: '☣️' },
    { title: 'Foreign Body Ingestion', description: 'Swallowed toys, bones, fabric — when surgery is needed.', path: '/dog-vomiting-diarrhea/conditions/foreign-body', icon: '🧦' },
    { title: 'Pancreatitis', description: 'After fatty meals or Raya/Deepavali leftovers — a true emergency.', path: '/dog-vomiting-diarrhea/conditions/pancreatitis', icon: '🔥' },
    { title: 'Emergency Signs', description: 'Red-flag symptoms requiring same-day vet care.', path: '/dog-vomiting-diarrhea/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: {
    text: 'Repeated vomiting + lethargy, blood in stool, bloated abdomen, or any GI symptoms in a puppy? This is an emergency.',
    linkText: 'See Emergency Signs',
    linkPath: '/dog-vomiting-diarrhea/emergency-signs',
  },
  faqs: [
    { question: 'My dog vomited once — should I rush to the vet?', answer: 'If your adult dog is bright, alert, drinking water, and the vomit was once with no blood, you can safely monitor at home for 12 hours. Withhold food for 6–8 hours, then offer small amounts of bland boiled chicken and rice. Puppies, senior dogs, or any vomiting with lethargy or blood = same-day vet.' },
    { question: 'Can I give my dog Imodium for diarrhea?', answer: 'No. Imodium (loperamide) can be dangerous in certain breeds (Collies, Shelties — MDR1 gene mutation) and can mask serious illness. Always consult a vet first.' },
    { question: 'How much will parvovirus treatment cost in Malaysia?', answer: 'In-hospital parvovirus treatment runs RM1,500 to RM5,000+ depending on duration (typically 4–7 days of IV fluids, anti-nausea, antibiotics, and nursing). Prevention via the puppy vaccine series (RM150–RM300 total) is far cheaper.' },
    { question: 'How do I know if my dog swallowed something?', answer: 'Sudden vomiting that won\'t stop, refusal to eat, painful abdomen, or no stool for >24 hours after eating normally — these can all suggest a foreign body. X-ray or ultrasound is needed for diagnosis.' },
    { question: 'Is bland diet (chicken + rice) always safe?', answer: 'For mild cases in healthy adult dogs, yes. But it shouldn\'t replace vet care if symptoms persist beyond 24 hours, and it isn\'t appropriate for dogs with pancreatitis, kidney disease, or known food allergies.' },
  ],
  seo: {
    metaTitle: 'Dog Vomiting & Diarrhea Malaysia | Causes, Costs, Vet Hub',
    metaDescription: 'Vet-reviewed guide to dog vomiting & diarrhea in Malaysia: parvovirus, pancreatitis, foreign body, costs (RM), red flags, when to see the vet.',
    keywords: ['dog vomiting Malaysia', 'dog diarrhea', 'parvovirus dog', 'dog throwing up', 'pancreatitis dog Malaysia'],
  },
  author: AUTHOR_EN,
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  relatedLinks: RELATED_EN,
};

const enAcuteVomiting: AuthorityPage = {
  slug: 'acute-vomiting', kind: 'article', categorySlug: 'conditions', category: 'GI Conditions', lang: 'en',
  title: 'Acute Vomiting in Dogs: Causes, Triage & When to Worry',
  snippetForAI: 'Acute vomiting in dogs (less than 7 days duration) is most often caused by dietary indiscretion, parasites, viral infection, or toxin ingestion. A single vomit in a bright, alert adult dog can be monitored at home for 12 hours with food withheld. Repeated vomiting (>3 episodes in 12 hours), blood, lethargy, abdominal pain, or any vomiting in a puppy requires same-day veterinary care.',
  tldr: [
    'Single vomit + bright dog = monitor 12 hours, withhold food',
    '>3 vomits in 12 hours = vet today',
    'Vomiting in puppies = emergency, no waiting',
    'Blood (red or coffee-ground) = same-day vet',
    'Never give human anti-nausea drugs without vet approval',
  ],
  quickFacts: [
    { label: 'Definition (Acute)', value: '<7 days duration' },
    { label: 'Top Cause (Malaysia)', value: 'Dietary indiscretion' },
    { label: 'Safe Home Watch', value: '12 hours, adults only' },
    { label: 'Vet Consult', value: 'RM80–RM200' },
    { label: 'Anti-nausea Injection', value: 'RM40–RM120' },
  ],
  malaysiaContext: 'Scavenging is rampant in Malaysian neighbourhoods — discarded curries, fried foods, chicken bones, even spoiled rice can trigger acute vomiting. Tropical heat speeds bacterial growth in left-out food. During festive seasons (CNY, Hari Raya, Deepavali), rich/fatty leftovers cause a spike in vomiting and pancreatitis cases. Stray and rescue-adopted dogs have higher parasite burdens.',
  costRange: [
    { item: 'Basic consult', range: 'RM80–RM200' },
    { item: 'Faecal + parvo snap test', range: 'RM120–RM250' },
    { item: 'Anti-nausea injection', range: 'RM40–RM120' },
    { item: 'IV fluids (one-off)', range: 'RM100–RM250' },
    { item: 'Bloodwork', range: 'RM180–RM400' },
  ],
  hasEmergencyOverride: false,
  overview: `Vomiting is a symptom, not a diagnosis. The job of triage is figuring out whether your dog has a self-limiting tummy upset or the early sign of something serious — pancreatitis, a blocked intestine, parvovirus, or a toxin.

In Malaysia, the most common cause of acute vomiting is dietary indiscretion: scavenged kitchen scraps, table food, or a chicken bone from the bin. But these "easy" causes can quickly become serious if the dog gets dehydrated or if the trigger was actually a bone obstructing the gut.`,
  sections: [
    {
      heading: 'Home Triage in the First 12 Hours',
      body: `For a bright, alert adult dog who vomited once and isn't showing any other symptoms: withhold food for 6–8 hours, allow small frequent sips of water. After the fast, offer a teaspoon of boiled plain chicken with white rice. If kept down, gradually increase portions over 24 hours and reintroduce normal food slowly.

If vomiting recurs, the dog becomes lethargic, or you see blood — stop home monitoring and go to the vet.`,
    },
    {
      heading: 'How Vets Diagnose',
      body: `Standard workup: history (what did the dog eat? any toys missing? vaccination status?), physical exam (hydration, abdominal palpation, temperature), parvo snap test if puppy, faecal exam for parasites, bloodwork if dehydrated or febrile, and X-ray/ultrasound if foreign body suspected.

Most cases are diagnosed within an hour of the visit. Severe cases need overnight hospitalisation.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags — Same-Day Vet', redFlag: true, items: ['More than 3 vomits in 12 hours', 'Blood — fresh red or coffee-ground colour', 'Lethargy, weakness, collapse', 'Distended or painful abdomen', 'Vomiting in a puppy <6 months', 'Vomiting + diarrhea together', 'Suspected toxin or foreign body ingestion'] },
    { heading: 'What NOT to Do', items: ['Do not give Imodium, Pepto-Bismol, paracetamol, or ibuprofen', 'Do not force-feed', 'Do not withhold water — only food', 'Do not wait overnight if your puppy is vomiting', 'Do not assume "ate something bad, will pass" without vet input if symptoms persist'] },
  ],
  whenToSeeVet: 'Go to the vet today if your dog has vomited more than 3 times in 12 hours, has blood in vomit, is lethargic, has a painful belly, is a puppy or senior dog, or you suspect ingestion of a toy, bone, or toxin.',
  citations: CITATIONS,
  keyTakeaways: [
    'One vomit in a bright adult = safe to monitor briefly',
    'Repeated vomiting + lethargy = vet today',
    'Always give water, even when withholding food',
    'Never use human medications without vet guidance',
  ],
  faqs: [
    { question: 'My dog vomits yellow foam in the morning — is this serious?', answer: 'Often this is "bilious vomiting syndrome" from an empty stomach overnight. Try a small late-night snack and see if it resolves. If it persists more than a week, see a vet.' },
    { question: 'How long should I withhold food?', answer: 'Adult dogs: 6–8 hours, max 12. Puppies and senior dogs should NOT be fasted — they can develop hypoglycaemia. See a vet instead.' },
    { question: 'Can stress cause vomiting?', answer: 'Yes — fireworks, boarding, moving house, or thunderstorms can all trigger vomiting. But never assume stress is the cause without ruling out medical issues.' },
    { question: 'Is grass-eating then vomiting normal?', answer: 'Many dogs do this occasionally and it isn\'t harmful. But frequent grass-eating + vomiting may signal nausea, gastritis, or a dietary issue worth investigating.' },
  ],
  seo: {
    metaTitle: 'Acute Vomiting in Dogs Malaysia | Causes, Triage, Vet Costs',
    metaDescription: 'Vet guide to acute dog vomiting in Malaysia: home triage, red flags, costs (RM80–RM400), parvo, foreign body, dietary indiscretion.',
    keywords: ['dog vomiting Malaysia', 'dog throwing up', 'acute vomiting dog', 'dog vomit yellow foam'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enAcuteDiarrhea: AuthorityPage = {
  slug: 'acute-diarrhea', kind: 'article', categorySlug: 'conditions', category: 'GI Conditions', lang: 'en',
  title: 'Acute Diarrhea in Dogs: Causes, Home Care & Red Flags',
  snippetForAI: 'Acute diarrhea (less than 14 days) in dogs is usually caused by dietary indiscretion, parasites, sudden food change, stress, or viral/bacterial infection. Mild cases in adult dogs may respond to 24 hours of bland diet and probiotics. Diarrhea with blood, mucus, lethargy, vomiting, or in puppies requires same-day vet care.',
  tldr: [
    'Diarrhea + vomiting together = vet today',
    'Bloody or jelly-like stool = vet today',
    'Adult dog, soft stool only, bright = bland diet + probiotics + monitor',
    'Puppies dehydrate fast — never "wait it out"',
    'Do not give Imodium without vet approval',
  ],
  quickFacts: [
    { label: 'Definition (Acute)', value: '<14 days duration' },
    { label: 'Top Cause (Malaysia)', value: 'Dietary indiscretion, parasites' },
    { label: 'Safe Home Trial', value: '24 hours bland diet (adults only)' },
    { label: 'Faecal Exam', value: 'RM40–RM100' },
    { label: 'Probiotic Sachets', value: 'RM35–RM80 for 5-day course' },
  ],
  malaysiaContext: 'Worm burden in Malaysian dogs is high — annual or twice-yearly deworming is standard. Giardia is common in dogs with access to puddles or shared water bowls. Sudden switches between kibble brands or feeding leftover curries are top diet-related triggers. Tick-borne disease (Ehrlichia) can cause chronic diarrhea and should be considered in endemic areas like rural Selangor, Pahang, and Sabah.',
  costRange: [
    { item: 'Faecal exam + parasite check', range: 'RM40–RM100' },
    { item: 'Vet consult', range: 'RM50–RM150' },
    { item: 'Probiotic + bland diet pack', range: 'RM50–RM150' },
    { item: 'Deworming dose', range: 'RM25–RM80' },
    { item: 'IV fluids if dehydrated', range: 'RM150–RM400' },
  ],
  overview: `Loose stool is one of the most common reasons dogs see the vet in Malaysia. Most acute cases are mild and resolve with simple supportive care — but a small percentage hide serious causes: parvovirus, hemorrhagic gastroenteritis (HGE), or intestinal parasites.

The key triage question: is this just messy poop, or is your dog actually sick?`,
  sections: [
    {
      heading: 'Home Management for Mild Cases',
      body: `If your adult dog has soft stool, is otherwise bright, eating, and drinking: withhold food for 6 hours then offer small portions of boiled chicken + plain white rice (1:2 ratio) every 4 hours. Add a vet-recommended probiotic. Most cases improve within 48 hours.

Reintroduce normal kibble gradually over 3–4 days. Sudden food change is itself a common diarrhea trigger.`,
    },
    {
      heading: 'When Faecal Testing Matters',
      body: `If diarrhea persists more than 48 hours, recurs frequently, or is in a young dog — get a faecal exam. This cheap test (RM40–RM100) identifies parasites (roundworm, hookworm, whipworm, giardia, coccidia) that need specific medication, not generic deworming.

A "negative" basic faecal test does not rule out giardia — sometimes a faecal antigen test or PCR is needed.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags — Same-Day Vet', redFlag: true, items: ['Blood — fresh red, dark, or jelly-like mucus', 'Vomiting + diarrhea together', 'Lethargy, weakness, or refusing water', 'Puppy <6 months with any diarrhea', 'Distended belly or visible pain', 'Diarrhea >48 hours despite bland diet', 'Suspected parvovirus exposure (unvaccinated)'] },
    { heading: 'Safe Home Steps for Mild Cases (Adults Only)', items: ['Withhold food for 6 hours', 'Offer fresh water at all times', 'Bland diet: boiled chicken + plain rice (1:2)', 'Vet-recommended probiotic sachet', 'Reintroduce normal food over 3–4 days'] },
  ],
  whenToSeeVet: 'Same-day vet for any of: blood in stool, vomiting + diarrhea, lethargy, puppy under 6 months, diarrhea continuing >48 hours, or known parasite/parvo exposure.',
  citations: CITATIONS,
  keyTakeaways: [
    'Mild cases in adult dogs respond to bland diet + probiotics',
    'Faecal exam is cheap and finds parasites generic dewormers miss',
    'Bloody jelly stool = haemorrhagic gastroenteritis, vet today',
    'Never assume diarrhea in a puppy will "pass" on its own',
  ],
  faqs: [
    { question: 'How long should I try bland diet before going to the vet?', answer: 'For mild cases in adult dogs: 24–48 hours. If no improvement, or symptoms worsen, see the vet. Puppies should go to the vet immediately.' },
    { question: 'Is rice or pumpkin better for diarrhea?', answer: 'Both work. White rice is gentler on the gut. Plain canned pumpkin (not pie filling) adds fibre, useful for some cases. Skip both if your dog has diabetes or is overweight without vet input.' },
    { question: 'Can I give yogurt for the probiotic effect?', answer: 'Plain unsweetened yogurt is safe for most adult dogs in small amounts, but vet-formulated probiotics are more targeted and stable for canine GI health.' },
    { question: 'How quickly can puppies become dehydrated?', answer: 'Very fast — within 12 hours of vomiting + diarrhea, a puppy can be in shock. This is why we say "no waiting" for puppies.' },
  ],
  seo: {
    metaTitle: 'Acute Diarrhea in Dogs Malaysia | Bland Diet, Costs, Vet Care',
    metaDescription: 'Vet guide to dog diarrhea in Malaysia: home bland diet, red flags, costs (RM40–RM400), parasites, when to see the vet today.',
    keywords: ['dog diarrhea Malaysia', 'dog soft stool', 'bland diet dog', 'puppy diarrhea Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enParvovirus: AuthorityPage = {
  slug: 'parvovirus', kind: 'article', categorySlug: 'conditions', category: 'GI Conditions', lang: 'en',
  title: 'Canine Parvovirus in Malaysia: Symptoms, Treatment & Survival',
  snippetForAI: 'Canine parvovirus (CPV) is a highly contagious viral disease causing severe vomiting and bloody diarrhea, primarily in unvaccinated puppies. Mortality untreated exceeds 90%; with prompt hospitalised IV fluid treatment, survival exceeds 70%. The complete puppy vaccination series (3 doses, 6–16 weeks of age) is the only reliable prevention. Treatment in Malaysia costs RM1,500–RM5,000.',
  tldr: [
    'Parvovirus is a vaccine-preventable killer of puppies',
    'Symptoms: severe vomiting, bloody diarrhea, lethargy, refusal to eat',
    'Untreated mortality >90%, treated >70% survival',
    'Treatment is hospitalisation + IV fluids + supportive care',
    'Never adopt an unvaccinated puppy without a parvo snap test',
  ],
  quickFacts: [
    { label: 'Most Affected', value: 'Puppies 6 weeks – 6 months' },
    { label: 'Incubation', value: '3–14 days after exposure' },
    { label: 'Snap Test', value: 'RM80–RM150' },
    { label: 'Hospital Treatment', value: 'RM1,500–RM5,000' },
    { label: 'Vaccine Series Cost', value: 'RM150–RM300 total' },
    { label: 'Survival with Treatment', value: '70–85%' },
  ],
  malaysiaContext: 'Parvovirus is endemic in Malaysia. The virus survives months in the environment, even in sun and rain. Shelters and pet shops sometimes house under-vaccinated puppies — always ask for vaccination records and ideally a snap test before adoption. The DVS-recommended schedule begins at 6 weeks with boosters at 9, 12, and 16 weeks. Yearly boosters thereafter. Cost of prevention is far below cost of treatment.',
  statistics: [
    { stat: 'Parvovirus untreated mortality exceeds 90% in puppies', source: 'WSAVA Vaccination Guidelines, 2023' },
    { stat: 'Treated survival reaches 70–85% with aggressive supportive care', source: 'BSAVA Manual of Canine Gastroenterology, 2023' },
    { stat: 'Parvovirus remains the most common infectious cause of acute haemorrhagic diarrhea in puppies in tropical Asia', source: 'ACVIM Consensus, 2022' },
  ],
  costRange: [
    { item: 'Parvo snap test', range: 'RM80–RM150' },
    { item: 'Hospitalisation per day', range: 'RM300–RM700' },
    { item: 'Full 4–7 day treatment course', range: 'RM1,500–RM5,000' },
    { item: 'Puppy vaccine series (prevention)', range: 'RM150–RM300' },
  ],
  hasEmergencyOverride: true,
  overview: `Parvovirus is one of the deadliest infectious diseases of dogs — and one of the most preventable. The virus attacks the lining of the intestines and bone marrow, causing the puppy to vomit and pass bloody, foul-smelling diarrhea until they collapse from dehydration and sepsis.

In Malaysia, despite the availability of safe and cheap vaccines, parvovirus cases remain common because of stray populations, under-vaccinated rescued puppies, and the virus's ability to survive in the environment for months. Treatment is possible — but expensive, intensive, and not always successful.`,
  sections: [
    {
      heading: 'How Parvovirus Spreads',
      body: `Parvovirus is shed in massive numbers in the faeces of infected dogs and can survive in soil, on shoes, carpet, and food bowls for months. Any unvaccinated puppy walking through a park or pet shop is at risk.

The virus is not airborne — it requires oral contact with infected faeces or contaminated surfaces. This is why "no public walks until vaccination series complete" is the universal vet advice.`,
    },
    {
      heading: 'Treatment in Malaysian Clinics',
      body: `Treatment is supportive — there is no antiviral cure. Hospitalised puppies receive IV fluids (to correct severe dehydration), anti-nausea drugs, broad-spectrum antibiotics (to prevent sepsis as bacteria translocate from the damaged gut), pain relief, and intensive nursing. Some clinics offer plasma transfusions for severe cases.

Most puppies who survive turn the corner by day 4–5. Total stay is usually 5–7 days. Owners must understand the financial commitment upfront — partial treatment often fails.`,
    },
    {
      heading: 'Prevention: The Vaccine Series',
      body: `The Malaysian vet-recommended core schedule: first dose at 6–8 weeks, second at 10–12 weeks, third at 14–16 weeks, with a booster at 1 year and then every 1–3 years depending on vaccine type. Until the series is complete (around 16 weeks of age), puppies should not be on public ground, in pet shops, or around unvaccinated dogs.`,
    },
  ],
  bulletSections: [
    { heading: 'Symptoms to Watch in Unvaccinated Puppies', redFlag: true, items: ['Sudden vomiting that won\'t stop', 'Bloody, foul-smelling diarrhea (often described as "rotten" smell)', 'Severe lethargy — sleeping more than usual', 'Refusal to eat or drink', 'Fever or low body temperature', 'Sunken eyes, dry gums (dehydration)'] },
    { heading: 'What to Tell the Vet When Calling', items: ['Puppy\'s age and vaccination status', 'Where the puppy came from (shelter, breeder, pet shop)', 'Recent exposure to other dogs or parks', 'Number of vomit/diarrhea episodes and any blood', 'Whether water has been kept down'] },
  ],
  whenToSeeVet: 'Immediately — any unvaccinated or partially-vaccinated puppy with vomiting, bloody diarrhea, or lethargy is a parvovirus suspect until proven otherwise. Call ahead so the clinic can prepare an isolation room.',
  citations: CITATIONS,
  keyTakeaways: [
    'Vaccination is the only reliable prevention',
    'Never delay treatment — every hour matters',
    'Discuss costs honestly with the vet upfront',
    'Disinfect home with diluted bleach (1:30) — virus survives months',
  ],
  faqs: [
    { question: 'My puppy is vaccinated — can it still get parvo?', answer: 'Rarely, but possible if the vaccine series was incomplete, given too early (passive maternal antibody interference), or if the puppy was already infected at vaccination. Fully completed series gives strong protection.' },
    { question: 'Why is parvo treatment so expensive?', answer: 'Treatment requires 5–7 days of IV fluids, anti-nausea drugs, antibiotics, isolation nursing, and frequent bloodwork. The total cost reflects intensive 24-hour care.' },
    { question: 'Can my other dogs catch parvo from a sick puppy?', answer: 'Yes — unvaccinated or under-vaccinated dogs in the same household are at very high risk. Adult vaccinated dogs are usually protected but should still avoid the sick puppy and its environment.' },
    { question: 'How do I disinfect my house after parvo?', answer: 'Diluted household bleach (1 part bleach : 30 parts water) on hard surfaces. Soft furnishings should be washed hot or discarded. Outdoor soil is essentially impossible to fully disinfect — keep new unvaccinated puppies off it for 6+ months.' },
  ],
  seo: {
    metaTitle: 'Parvovirus in Dogs Malaysia | Symptoms, Treatment, Vaccine Cost',
    metaDescription: 'Vet guide to canine parvovirus in Malaysia: symptoms, treatment cost (RM1,500–RM5,000), survival rates, vaccine schedule. Save your puppy.',
    keywords: ['parvovirus Malaysia', 'parvo puppy', 'dog parvo treatment cost', 'puppy vaccination Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enForeignBody: AuthorityPage = {
  slug: 'foreign-body', kind: 'article', categorySlug: 'conditions', category: 'GI Conditions', lang: 'en',
  title: 'Foreign Body Ingestion in Dogs: When Surgery Is Needed',
  snippetForAI: 'Foreign body ingestion in dogs (swallowing toys, bones, fabric, sticks, or string) is a common surgical emergency. Signs include sudden persistent vomiting, refusal to eat, painful abdomen, and absent stool. Diagnosis is by X-ray or ultrasound. Linear foreign bodies (string, thread) are especially dangerous and can saw through the intestine. Surgery cost in Malaysia: RM2,500–RM8,000.',
  tldr: [
    'Persistent vomiting + refusal to eat = suspect foreign body',
    'String, thread, hair-ties are most dangerous (linear FB)',
    'Never pull a visible string from the mouth or anus — call a vet',
    'X-ray + sometimes ultrasound confirms diagnosis',
    'Delayed surgery → intestinal rupture → sepsis → death',
  ],
  quickFacts: [
    { label: 'Most Swallowed Items', value: 'Socks, toys, chicken bones, corn cobs, fabric' },
    { label: 'Diagnosis', value: 'X-ray ± ultrasound' },
    { label: 'X-ray Cost', value: 'RM120–RM350' },
    { label: 'Surgery Cost', value: 'RM2,500–RM8,000' },
    { label: 'Recovery Time', value: '10–14 days' },
  ],
  malaysiaContext: 'Chicken bones from local food (nasi ayam, fried chicken) are a frequent cause of foreign body emergencies. Corn cobs (from BBQ) are notorious because they don\'t show clearly on X-ray and often cause obstruction. Stray dogs and outdoor-roaming pets ingest more random objects. Most general clinics in major towns can perform foreign body surgery; rural cases may need referral to KL, Penang, or JB referral hospitals.',
  costRange: [
    { item: 'Consult + initial exam', range: 'RM80–RM200' },
    { item: 'X-ray (2 views)', range: 'RM120–RM350' },
    { item: 'Ultrasound', range: 'RM150–RM400' },
    { item: 'Endoscopic removal (if reachable)', range: 'RM800–RM2,500' },
    { item: 'Open surgery (enterotomy)', range: 'RM2,500–RM6,000' },
    { item: 'Resection + anastomosis (if gut rupture)', range: 'RM4,000–RM8,000' },
    { item: 'Hospitalisation post-op', range: 'RM250–RM600/day' },
  ],
  hasEmergencyOverride: true,
  overview: `Dogs are notorious for swallowing things they shouldn't. Most pass through naturally — but a worrying fraction get stuck and require surgery. The hard part for owners is knowing the difference: a swallowed sock can pass uneventfully in two days, or it can wedge in the small intestine and kill the dog in four.

The decision tree is straightforward: if you saw your dog eat something inedible and they're not vomiting yet, call the vet right away — sometimes induced vomiting in the first 2 hours saves a surgery. If vomiting has already started and they can't keep water down, head to the clinic.`,
  sections: [
    {
      heading: 'Linear Foreign Bodies — Always an Emergency',
      body: `String, thread, ribbon, hair-ties, dental floss, and fabric ribbons are uniquely dangerous. One end gets caught (often under the tongue or at the stomach exit), and the other end gets pulled along by intestinal motion. The result is the gut bunching up and the string sawing through the wall — leading to leakage and life-threatening sepsis.

NEVER pull on a string visible at the mouth or anus. Cut what is outside if needed, but the rest must be surgically removed.`,
    },
    {
      heading: 'How Diagnosis Works',
      body: `Most clinics start with two-view X-rays. Metallic objects (coins, batteries, jewellery) show clearly. Bones may be visible. Cloth, plastic, and plant material (corn cobs!) often don't show — the vet looks for indirect signs: gas distension, abnormal bowel pattern.

When X-ray is inconclusive but obstruction is suspected, ultrasound or barium study is the next step. Some cases need exploratory laparotomy (open surgery to look) based on clinical signs alone.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags — Emergency Today', redFlag: true, items: ['Persistent vomiting, especially of water', 'No stool for >24 hours after a normal meal', 'Painful or distended belly', 'Lethargy, hiding, refusing to eat', 'Visible string or thread from mouth or anus (do NOT pull)', 'You saw or suspect your dog ate something inedible'] },
    { heading: 'What NOT to Do at Home', items: ['Do not induce vomiting without vet guidance (sharp objects can cause more damage on the way back up)', 'Do not feed laxatives, oils, or "natural remedies"', 'Do not give human painkillers (paracetamol, ibuprofen — both toxic)', 'Do not pull on visible string or thread', 'Do not wait "just one more day" — obstruction is time-sensitive'] },
  ],
  whenToSeeVet: 'Call a vet immediately if you saw or suspect ingestion of any non-food item. Go in person same-day if vomiting, painful abdomen, or no stool >24 hours.',
  citations: CITATIONS,
  keyTakeaways: [
    'Persistent vomiting after suspected ingestion = surgical until proven otherwise',
    'Linear foreign bodies are deadly — never pull on string',
    'Early action can mean induced vomiting instead of surgery',
    'Pet insurance pays off most for FB surgery in active or chewer dogs',
  ],
  faqs: [
    { question: 'My dog ate a chicken bone — what do I do?', answer: 'Call your vet now. Small soft bones may pass safely; sharp splintered bones may need induced vomiting within 2 hours, monitoring with X-ray, or endoscopic removal.' },
    { question: 'Are corn cobs really that dangerous?', answer: 'Yes — corn cobs are a top cause of small-bowel obstruction in dogs. They\'re fibrous, don\'t digest, and don\'t show clearly on X-ray.' },
    { question: 'How long after eating something would symptoms appear?', answer: 'Anywhere from a few hours (high obstruction) to several days (lower intestine). If your dog seems off within 72 hours of suspected ingestion, see the vet.' },
    { question: 'Will pet insurance cover foreign body surgery?', answer: 'Most pet insurance policies in Malaysia cover surgical foreign body removal as an accident/illness claim — check your specific policy\'s exclusions and waiting period.' },
  ],
  seo: {
    metaTitle: 'Dog Foreign Body Ingestion Malaysia | Surgery, Costs, Red Flags',
    metaDescription: 'Vet guide to dog foreign body ingestion in Malaysia: symptoms, X-ray, surgery cost (RM2,500–RM8,000), linear foreign body warning.',
    keywords: ['dog swallowed something Malaysia', 'dog foreign body surgery', 'dog chicken bone', 'dog intestinal obstruction'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enPancreatitis: AuthorityPage = {
  slug: 'pancreatitis', kind: 'article', categorySlug: 'conditions', category: 'GI Conditions', lang: 'en',
  title: 'Pancreatitis in Dogs: After Fatty Meals & Festive Leftovers',
  snippetForAI: 'Canine pancreatitis is acute inflammation of the pancreas, most often triggered by a fatty meal, table scraps, or chronic obesity. Signs include vomiting, abdominal pain (hunched posture, "prayer position"), refusal to eat, and lethargy. In Malaysia, festive seasons (CNY, Hari Raya, Deepavali) cause spikes in pancreatitis cases. Diagnosis is by SpecPL/cPL blood test and ultrasound. Treatment requires hospitalisation; cost ranges RM1,500–RM4,500.',
  tldr: [
    '"Prayer position" (front low, rear up) = abdominal pain → suspect pancreatitis',
    'Fatty leftovers are the #1 trigger',
    'Schnauzers, Yorkies, overweight dogs at highest risk',
    'SpecPL blood test confirms diagnosis',
    'Untreated pancreatitis can be fatal — needs IV fluids and pain control',
  ],
  quickFacts: [
    { label: 'Top Trigger (Malaysia)', value: 'Fatty festive leftovers' },
    { label: 'Highest-Risk Breeds', value: 'Mini Schnauzer, Yorkie, Toy breeds' },
    { label: 'SpecPL Test', value: 'RM200–RM450' },
    { label: 'Hospitalisation', value: 'RM1,500–RM4,500 (3–5 days)' },
    { label: 'Recovery', value: '5–14 days with low-fat diet long-term' },
  ],
  malaysiaContext: 'Festive seasons (Chinese New Year, Hari Raya, Deepavali, Christmas) cause pancreatitis case spikes in Malaysian clinics. Common triggers: rendang, curry chicken with fat skin, satay, fried foods, BBQ leftovers. Overweight Mini Schnauzers and Yorkies are over-represented. Educate family members to NEVER share festive food with the dog. Most cases recover well with prompt IV fluid treatment.',
  costRange: [
    { item: 'Consult + physical', range: 'RM80–RM200' },
    { item: 'SpecPL blood test', range: 'RM200–RM450' },
    { item: 'Ultrasound', range: 'RM150–RM400' },
    { item: 'IV fluids + pain relief (per day)', range: 'RM300–RM700' },
    { item: 'Full hospitalisation (3–5 days)', range: 'RM1,500–RM4,500' },
    { item: 'Low-fat prescription diet (monthly)', range: 'RM180–RM400' },
  ],
  hasEmergencyOverride: true,
  overview: `Every year, Malaysian vets see a wave of pancreatitis cases right after major festivals. The story is almost always the same: a well-meaning family member slipped the dog a piece of rendang, fried chicken skin, or satay. Twelve hours later, the dog is vomiting, hunched in pain, and refusing food.

Pancreatitis is acute inflammation of the pancreas, the organ that makes digestive enzymes. When triggered, those enzymes start digesting the pancreas itself, causing severe pain and inflammation that can spread to surrounding organs.`,
  sections: [
    {
      heading: 'Recognising the "Prayer Position"',
      body: `Dogs with abdominal pain often adopt a distinctive posture: front legs and chest low on the ground, rear end up. This stretches the abdomen and relieves pressure. Combined with vomiting and refusal to eat, this is a classic pancreatitis presentation — go to the vet immediately.`,
    },
    {
      heading: 'Treatment Protocol',
      body: `Standard treatment: NPO (no food or water by mouth for 12–24 hours), IV fluids to correct dehydration and flush enzymes, strong pain relief (often opioids), anti-nausea drugs, and antibiotics if secondary infection is suspected. Once vomiting stops, slow reintroduction of a low-fat diet over 3–5 days.

Most mild-moderate cases recover in 3–5 days. Severe cases (with systemic inflammatory response) may need 1–2 weeks and have a guarded prognosis.`,
    },
    {
      heading: 'Long-Term Management',
      body: `Once a dog has pancreatitis, they\'re prone to recurrence. Lifelong low-fat diet (commercial prescription or home-cooked under vet supervision), no fatty treats, weight management, and family education are essential. One slip of festive food can trigger a RM3,000+ hospital stay.`,
    },
  ],
  bulletSections: [
    { heading: 'Red Flags — Same-Day Vet', redFlag: true, items: ['"Prayer position" or hunched posture', 'Repeated vomiting (especially after a fatty meal)', 'Refusal to eat, lethargy', 'Bloated or tender abdomen', 'Diarrhea + vomiting + pain together', 'Known fatty food access in past 24–72 hours'] },
    { heading: 'Foods to NEVER Give', items: ['Rendang, curry chicken skin, BBQ fat trim', 'Satay, fried chicken, char siew fat', 'Butter, cream, gravy, lard', 'Sausages, hot dogs, processed meats', 'Cheese in large amounts', 'Any "treat" with visible oil or fat'] },
  ],
  whenToSeeVet: 'Same-day vet if your dog shows abdominal pain (prayer position, hunched), vomiting + refusal to eat, especially if there has been any fatty food access in the past 1–3 days.',
  citations: CITATIONS,
  keyTakeaways: [
    'Festive food = pancreatitis season in Malaysia',
    'Prayer position is a classic pain posture',
    'SpecPL blood test is the diagnostic gold standard',
    'Lifelong low-fat diet prevents recurrence',
  ],
  faqs: [
    { question: 'Can pancreatitis come back?', answer: 'Yes — dogs who\'ve had one episode are prone to recurrence, especially if dietary control isn\'t maintained. Strict low-fat diet is essential.' },
    { question: 'Why are Mini Schnauzers prone to pancreatitis?', answer: 'They have a genetic predisposition to high blood triglycerides, which significantly increases pancreatitis risk. Yearly bloodwork is recommended.' },
    { question: 'Is rice safe for a pancreatitis-prone dog?', answer: 'Plain boiled white rice is low-fat and generally safe in small amounts. But avoid mixing with fatty curries, gravies, or oils.' },
    { question: 'Should I get pet insurance after a pancreatitis episode?', answer: 'Most insurance won\'t cover pre-existing pancreatitis as a claim, but new conditions may still be covered. Read policy fine print carefully.' },
  ],
  seo: {
    metaTitle: 'Dog Pancreatitis Malaysia | Symptoms, Festive Food Warning',
    metaDescription: 'Vet guide to canine pancreatitis in Malaysia: prayer position, festive food triggers, hospitalisation cost (RM1,500–RM4,500), low-fat diet.',
    keywords: ['dog pancreatitis Malaysia', 'dog prayer position', 'dog vomiting after fatty food', 'pancreatitis cost Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const enEmergency: AuthorityPage = {
  slug: 'emergency-signs', kind: 'article', category: 'Emergency', lang: 'en',
  title: 'GI Emergency Signs in Dogs: When to Rush to the Vet',
  snippetForAI: 'Gastrointestinal red flags in dogs requiring immediate vet care include: repeated vomiting that won\'t stop, vomiting in puppies, bloody vomit or diarrhea, distended hard abdomen (possible bloat/GDV), collapse, pale gums, "prayer position" of pain, and suspected toxin or foreign body ingestion. Bloat (GDV) is fatal within hours without surgery. WhatsApp +60 11-5695 9227.',
  tldr: [
    'Distended hard belly + unproductive retching = bloat (GDV), surgical emergency',
    'Any GI symptom in unvaccinated puppies = parvovirus until proven otherwise',
    'Pale gums, collapse, weakness = shock, immediate vet',
    'Blood in vomit/stool = same-day vet, no waiting',
    'WhatsApp +60 11-5695 9227 for emergency triage',
  ],
  quickFacts: [
    { label: 'Most Time-Sensitive', value: 'Bloat/GDV — surgery within 4 hours' },
    { label: 'Puppy GI Symptoms', value: 'Always emergency-tier' },
    { label: 'After-Hours Consult', value: 'RM150–RM400' },
    { label: 'Emergency Hospitalisation', value: 'RM500–RM2,000/day' },
  ],
  malaysiaContext: 'Most major Malaysian cities (KL, Selangor, Penang, JB) have 24-hour emergency veterinary clinics. Rural and East Malaysia options are more limited — know your nearest 24-hour clinic BEFORE an emergency happens. Save the number now. For triage advice when unsure, WhatsApp the Pet Care Malaysia helpline at +60 11-5695 9227 (not a substitute for in-person vet care).',
  hasEmergencyOverride: true,
  overview: `Most vomiting and diarrhea is mild. But a small percentage is not — and those cases need fast action. This page lists the absolute red flags that mean "go to the vet now, don\'t wait until morning."`,
  sections: [
    {
      heading: 'Bloat / GDV — The #1 Killer',
      body: `Gastric Dilatation-Volvulus (GDV, "bloat") is when the stomach fills with gas and twists on itself, cutting off blood supply. Without emergency surgery within hours, it is fatal. Signs: distended, hard, drum-like belly, unproductive retching (looks like trying to vomit but nothing comes out), restlessness, pacing, drooling, collapse. Large deep-chested breeds (Great Dane, German Shepherd, Standard Poodle, Boxer) are highest-risk.`,
    },
    {
      heading: 'Parvovirus in Puppies',
      body: `Any unvaccinated or under-vaccinated puppy showing vomiting, bloody diarrhea, lethargy, or refusal to eat is a parvovirus emergency. Call the vet ahead so they can prepare isolation. Survival depends on speed of treatment.`,
    },
    {
      heading: 'Toxin Ingestion',
      body: `Common Malaysian household toxins: chocolate (especially dark), grapes/raisins, xylitol (sugar-free gum), onions/garlic in curry, paracetamol, ibuprofen, rodenticides (mouse poison), and certain houseplants (lilies are deadly to cats). If you suspect ingestion, save the packaging and call the vet immediately. Some toxins (chocolate, paracetamol) need induced vomiting within the first 1–2 hours.`,
    },
  ],
  bulletSections: [
    { heading: 'Go-To-Vet-Now Signs', redFlag: true, items: ['Distended hard abdomen + retching with nothing coming up', 'Collapse, weakness, pale or blue gums', 'Vomiting more than 4 times in 2 hours', 'Bloody vomit (red or "coffee ground") or bloody/black stool', 'Any GI symptom in a puppy under 6 months', 'Suspected toxin or foreign body ingestion', 'Severe abdominal pain (yelping when touched)'] },
    { heading: 'Bring to the Emergency Vet', items: ['Photo of any vomit, stool, or suspected toxin packaging', 'List of medications your dog takes', 'Vaccination record', 'Approximate body weight (helps dose meds quickly)', 'Phone for follow-up updates'] },
  ],
  whenToSeeVet: 'For ANYTHING on the red-flag list above, go to the nearest 24-hour vet immediately. Call ahead. If you are not sure, WhatsApp +60 11-5695 9227 for triage guidance — but never delay if symptoms are severe.',
  citations: CITATIONS,
  keyTakeaways: [
    'Know your 24-hour emergency vet BEFORE an emergency',
    'Bloat/GDV is surgical and time-critical',
    'Puppies dehydrate fast — never "wait it out"',
    'WhatsApp +60 11-5695 9227 for triage support',
  ],
  faqs: [
    { question: 'What does "unproductive retching" look like?', answer: 'The dog repeatedly heaves or tries to vomit, but nothing or only foam comes up. This is one of the most reliable signs of bloat — go to the vet immediately.' },
    { question: 'My dog ate chocolate — how much is dangerous?', answer: 'Dark chocolate is more toxic than milk. Even small amounts can cause symptoms. Call your vet with: type of chocolate, amount, your dog\'s weight. Many ingestions need induced vomiting within 1–2 hours.' },
    { question: 'How much does after-hours emergency care cost?', answer: 'Consultation alone RM150–RM400. Severe cases (bloat surgery, parvo treatment, toxin) can reach RM3,000–RM10,000+. Pet insurance is worth considering.' },
    { question: 'Can I drive my dog to the vet if they\'re collapsing?', answer: 'Yes — moving is better than waiting. Call ahead. If safe, have someone keep the dog steady on its right side during transport.' },
  ],
  seo: {
    metaTitle: 'Dog GI Emergency Signs Malaysia | Bloat, Parvo, Toxin Hotline',
    metaDescription: 'When dog vomiting/diarrhea is an emergency in Malaysia: bloat/GDV, parvo, toxin ingestion. Red flags, costs, WhatsApp helpline +60 11-5695 9227.',
    keywords: ['dog GI emergency Malaysia', 'dog bloat GDV', 'dog vomiting emergency', 'dog poison Malaysia'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

// ============================================================
// MALAY PAGES (condensed translations honouring the same schema)
// ============================================================

const msHub: AuthorityPage = {
  ...enHub, lang: 'ms',
  title: 'Anjing Muntah & Cirit-Birit di Malaysia: Punca, Kos & Tanda Bahaya',
  snippetForAI: 'Muntah dan cirit-birit anjing adalah antara 3 sebab paling kerap lawatan vet di Malaysia. Punca biasa: makan sembarangan (scavenging), parasit (cacing, giardia), jangkitan virus (parvovirus, distemper), pankreatitis, telan benda asing, dan dedahan racun. Satu kali muntah pada anjing dewasa yang aktif boleh dipantau 12 jam, tetapi muntah berulang, darah, lemah, atau muntah pada anak anjing perlu dibawa ke vet pada hari yang sama.',
  tldr: [
    'Muntah + cirit-birit serentak = bawa vet dalam 24 jam',
    'Sebarang muntah pada anak anjing <6 bulan = kecemasan hari yang sama',
    'Darah dalam muntah/tinja = jangan tunggu, terus ke vet',
    'Parvovirus boleh membunuh anak anjing tanpa vaksin dalam 48–72 jam',
    'Jangan beri ubat anti-muntah manusia tanpa vet',
  ],
  quickFacts: enHub.quickFacts!.map((f) => ({ ...f })),
  malaysiaContext: 'Iklim tropika Malaysia mempercepatkan pertumbuhan bakteria dalam makanan basi. Anjing kampung/jalanan sering scavenge, menjadikan dietary indiscretion punca #1 muntah akut. Parvovirus masih biasa pada anak anjing tanpa vaksin. Penyakit bawaan tick (Ehrlichia) juga boleh menyebabkan muntah.',
  overview: 'Tidak ada yang lebih menakutkan untuk pemilik anjing Malaysia daripada bangun dengan kolam muntah atau tinja cair. Kebanyakan kes ringan dan selesai dalam 24 jam — tetapi sebahagian kecil boleh menjadi mengancam nyawa dengan cepat, terutama untuk anak anjing dan anjing tua.\n\nPanduan ini membantu anda triaj cepat: bila boleh pantau di rumah, bila perlu vet hari ini, dan bila adalah kecemasan malam.',
  categoryCards: [
    { title: 'Muntah Akut', description: 'Bermula tiba-tiba <24 jam — punca, triaj, dan bila perlu risau.', path: '/ms/dog-vomiting-diarrhea/conditions/acute-vomiting', icon: '🤢' },
    { title: 'Cirit-Birit Akut', description: 'Tinja lembek atau cair — punca dan triaj rumah.', path: '/ms/dog-vomiting-diarrhea/conditions/acute-diarrhea', icon: '💧' },
    { title: 'Parvovirus', description: 'Virus mematikan anak anjing — gejala, rawatan, jadual vaksin.', path: '/ms/dog-vomiting-diarrhea/conditions/parvovirus', icon: '☣️' },
    { title: 'Telan Benda Asing', description: 'Mainan, tulang, kain — bila pembedahan diperlukan.', path: '/ms/dog-vomiting-diarrhea/conditions/foreign-body', icon: '🧦' },
    { title: 'Pankreatitis', description: 'Selepas makanan berlemak Raya/Deepavali — kecemasan sebenar.', path: '/ms/dog-vomiting-diarrhea/conditions/pancreatitis', icon: '🔥' },
    { title: 'Tanda Kecemasan', description: 'Tanda bahaya yang perlukan vet hari yang sama.', path: '/ms/dog-vomiting-diarrhea/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: { text: 'Muntah berulang + lemah, darah dalam tinja, perut bengkak, atau sebarang gejala GI pada anak anjing? Ini kecemasan.', linkText: 'Lihat Tanda Kecemasan', linkPath: '/dog-vomiting-diarrhea/emergency-signs' },
  faqs: [
    { question: 'Anjing saya muntah sekali — perlu rush ke vet?', answer: 'Jika anjing dewasa anda aktif, minum air, dan hanya muntah sekali tanpa darah, boleh pantau di rumah 12 jam. Pegun makanan 6–8 jam, kemudian beri sedikit ayam rebus + nasi.' },
    { question: 'Boleh saya beri Imodium untuk cirit-birit?', answer: 'Jangan. Imodium berbahaya pada baka tertentu (Collie, Sheltie) dan boleh menyembunyikan penyakit serius.' },
    { question: 'Berapa kos rawatan parvovirus di Malaysia?', answer: 'Rawatan hospital RM1,500–RM5,000+ untuk 4–7 hari. Pencegahan dengan vaksin (RM150–RM300) jauh lebih murah.' },
    { question: 'Macam mana tahu jika anjing telan sesuatu?', answer: 'Muntah tiba-tiba yang tidak berhenti, tolak makanan, perut sakit, atau tiada tinja >24 jam — semua boleh menunjukkan benda asing.' },
    { question: 'Adakah diet hambar selalu selamat?', answer: 'Untuk kes ringan pada anjing dewasa sihat, ya. Tetapi jangan ganti rawatan vet jika gejala berterusan >24 jam.' },
  ],
  seo: { metaTitle: 'Anjing Muntah & Cirit-Birit Malaysia | Punca, Kos, Hub Vet', metaDescription: 'Panduan disemak vet untuk muntah dan cirit-birit anjing di Malaysia: parvovirus, pankreatitis, benda asing, kos (RM), tanda bahaya.', keywords: ['anjing muntah Malaysia', 'cirit birit anjing', 'parvovirus anjing', 'pankreatitis anjing'] },
  author: AUTHOR_MS, relatedLinks: RELATED_MS,
};

const msMake = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'ms', author: AUTHOR_MS, relatedLinks: RELATED_MS, ...overrides } as AuthorityPage);

const msAcuteVomiting = msMake(enAcuteVomiting, {
  title: 'Muntah Akut pada Anjing: Punca, Triaj & Bila Perlu Risau',
  snippetForAI: 'Muntah akut pada anjing (<7 hari) paling kerap disebabkan oleh makan sembarangan, parasit, jangkitan virus, atau telan racun. Satu kali muntah pada anjing dewasa aktif boleh dipantau 12 jam tanpa makanan. Muntah berulang (>3 kali dalam 12 jam), darah, lemah, sakit perut, atau muntah anak anjing perlu vet hari yang sama.',
  tldr: ['Satu muntah + anjing aktif = pantau 12 jam, pegun makanan', '>3 muntah dalam 12 jam = vet hari ini', 'Muntah pada anak anjing = kecemasan', 'Darah = vet hari yang sama', 'Jangan beri ubat anti-muntah manusia'],
  overview: 'Muntah adalah simptom, bukan diagnosis. Triaj adalah memastikan jika ini gangguan ringan atau tanda awal sesuatu serius — pankreatitis, halangan usus, parvovirus, atau racun.\n\nDi Malaysia, punca paling kerap muntah akut adalah makan sembarangan: sisa dapur, makanan meja, tulang ayam dari tong sampah.',
  sections: [
    { heading: 'Triaj Rumah dalam 12 Jam Pertama', body: 'Untuk anjing dewasa aktif yang muntah sekali tanpa gejala lain: pegun makanan 6–8 jam, biarkan teguk air sedikit kerap. Selepas puasa, beri sesudu ayam rebus + nasi putih. Jika kekal, perlahan-lahan tingkatkan dalam 24 jam.\n\nJika muntah berulang atau muncul darah — berhenti pantau dan ke vet.' },
    { heading: 'Bagaimana Vet Mendiagnosis', body: 'Sejarah (apa anjing makan? vaksinasi?), pemeriksaan fizikal, ujian parvo jika anak anjing, ujian tinja, darah jika dehidrasi, X-ray/ultrasound jika syak benda asing.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya — Vet Hari Yang Sama', redFlag: true, items: ['Lebih 3 muntah dalam 12 jam', 'Darah — merah segar atau warna kopi', 'Lemah, lemas, pengsan', 'Perut membengkak atau sakit', 'Muntah pada anak anjing <6 bulan', 'Muntah + cirit-birit bersama', 'Syak racun atau benda asing'] },
    { heading: 'Apa Yang JANGAN Dibuat', items: ['Jangan Imodium, paracetamol, ibuprofen', 'Jangan paksa makan', 'Jangan pegun air — hanya makanan', 'Jangan tunggu jika anak anjing muntah'] },
  ],
  whenToSeeVet: 'Ke vet hari ini jika anjing muntah >3 kali dalam 12 jam, ada darah, lemah, perut sakit, anak anjing/tua, atau syak telan benda/racun.',
  keyTakeaways: ['Satu muntah pada anjing dewasa aktif = boleh pantau', 'Muntah berulang + lemah = vet hari ini', 'Sentiasa beri air', 'Jangan guna ubat manusia'],
  faqs: [
    { question: 'Anjing saya muntah buih kuning waktu pagi — serius?', answer: 'Selalunya "bilious vomiting syndrome" dari perut kosong. Cuba snek lewat malam. Jika berterusan >seminggu, jumpa vet.' },
    { question: 'Berapa lama pegun makanan?', answer: 'Anjing dewasa: 6–8 jam, maksimum 12. Anak anjing dan anjing tua TIDAK boleh dipuasa.' },
    { question: 'Stress boleh menyebabkan muntah?', answer: 'Ya — bunyi bising, berkelah, pindah rumah. Tetapi jangan andaikan stress tanpa kecualikan masalah perubatan.' },
    { question: 'Makan rumput kemudian muntah normal?', answer: 'Banyak anjing buat ini sekali-sekala dan tidak berbahaya. Tetapi kerap = mungkin loya.' },
  ],
  seo: { metaTitle: 'Muntah Akut Anjing Malaysia | Punca, Triaj, Kos Vet', metaDescription: 'Panduan vet untuk muntah akut anjing di Malaysia: triaj rumah, tanda bahaya, kos (RM80–RM400).', keywords: ['anjing muntah Malaysia', 'muntah akut anjing'] },
});

const msAcuteDiarrhea = msMake(enAcuteDiarrhea, {
  title: 'Cirit-Birit Akut pada Anjing: Punca, Penjagaan Rumah & Tanda Bahaya',
  snippetForAI: 'Cirit-birit akut (<14 hari) pada anjing biasanya disebabkan oleh makan sembarangan, parasit, perubahan makanan tiba-tiba, stress, atau jangkitan. Kes ringan pada anjing dewasa boleh dirawat dengan diet hambar 24 jam + probiotik. Cirit-birit dengan darah, lendir, lemah, muntah, atau pada anak anjing perlu vet hari yang sama.',
  tldr: ['Cirit-birit + muntah bersama = vet hari ini', 'Tinja berdarah/lendir = vet hari ini', 'Anjing dewasa, tinja lembek sahaja = diet hambar + probiotik', 'Anak anjing dehidrasi cepat — jangan "tunggu"', 'Jangan Imodium tanpa vet'],
  overview: 'Tinja lembek adalah antara sebab paling kerap anjing ke vet di Malaysia. Kebanyakan kes akut ringan — tetapi sebahagian kecil menyembunyikan punca serius: parvovirus, gastroenteritis berdarah, atau parasit.',
  sections: [
    { heading: 'Pengurusan Rumah untuk Kes Ringan', body: 'Jika anjing dewasa anda tinja lembek tetapi aktif: pegun makanan 6 jam kemudian beri ayam rebus + nasi putih (1:2) setiap 4 jam. Tambah probiotik. Kebanyakan kes pulih dalam 48 jam.' },
    { heading: 'Bila Ujian Tinja Penting', body: 'Jika cirit-birit berterusan >48 jam, kerap berulang, atau pada anjing muda — buat ujian tinja. Ujian murah ini (RM40–RM100) kenal parasit yang perlu ubat khusus.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya — Vet Hari Yang Sama', redFlag: true, items: ['Darah — merah, gelap, atau lendir jeli', 'Muntah + cirit-birit bersama', 'Lemah atau enggan minum', 'Anak anjing <6 bulan', 'Perut bengkak/sakit', 'Cirit-birit >48 jam walaupun diet hambar'] },
    { heading: 'Langkah Rumah Selamat (Dewasa Sahaja)', items: ['Pegun makanan 6 jam', 'Sentiasa beri air', 'Diet hambar: ayam rebus + nasi (1:2)', 'Probiotik', 'Kembali makan normal dalam 3–4 hari'] },
  ],
  whenToSeeVet: 'Vet hari yang sama untuk: darah dalam tinja, muntah + cirit-birit, lemah, anak anjing <6 bulan, cirit-birit >48 jam.',
  keyTakeaways: ['Kes ringan dewasa: diet hambar + probiotik', 'Ujian tinja murah dan berkesan', 'Tinja lendir berdarah = HGE, vet hari ini', 'Jangan anggap cirit-birit anak anjing akan "lalu"'],
  faqs: [
    { question: 'Berapa lama cuba diet hambar sebelum vet?', answer: 'Kes ringan dewasa: 24–48 jam. Anak anjing terus ke vet.' },
    { question: 'Nasi atau labu lebih baik untuk cirit-birit?', answer: 'Kedua-duanya berfungsi. Nasi putih lebih lembut. Labu menambah serat.' },
    { question: 'Boleh beri yogurt untuk probiotik?', answer: 'Yogurt tawar selamat untuk anjing dewasa dalam kuantiti kecil, tetapi probiotik vet lebih tertumpu.' },
    { question: 'Berapa cepat anak anjing dehidrasi?', answer: 'Sangat cepat — dalam 12 jam muntah + cirit-birit, anak anjing boleh shock.' },
  ],
  seo: { metaTitle: 'Cirit-Birit Akut Anjing Malaysia | Diet Hambar, Kos, Vet', metaDescription: 'Panduan vet untuk cirit-birit anjing di Malaysia: diet hambar, tanda bahaya, kos (RM40–RM400).', keywords: ['cirit birit anjing Malaysia', 'tinja lembek anjing'] },
});

const msParvovirus = msMake(enParvovirus, {
  title: 'Parvovirus Anjing di Malaysia: Gejala, Rawatan & Kelangsungan',
  snippetForAI: 'Parvovirus anjing (CPV) adalah penyakit virus yang sangat berjangkit menyebabkan muntah teruk dan cirit-birit berdarah, terutamanya pada anak anjing tanpa vaksin. Kematian tanpa rawatan >90%; dengan rawatan hospital IV, kelangsungan >70%. Siri vaksin lengkap (3 dos, 6–16 minggu) adalah satu-satunya pencegahan dipercayai. Kos rawatan: RM1,500–RM5,000.',
  tldr: ['Parvovirus pembunuh anak anjing — boleh dicegah dengan vaksin', 'Gejala: muntah teruk, cirit-birit berdarah, lemah', 'Kematian tanpa rawatan >90%, dengan rawatan >70% selamat', 'Rawatan = hospital + IV + sokongan', 'Jangan ambil anak anjing tanpa vaksin tanpa ujian parvo'],
  hasEmergencyOverride: true,
  overview: 'Parvovirus adalah antara penyakit anjing paling mematikan — dan paling mudah dicegah. Virus menyerang lapisan usus dan tulang sumsum, menyebabkan anak anjing muntah dan keluarkan cirit-birit berdarah berbau busuk sehingga pengsan dari dehidrasi.\n\nDi Malaysia, walaupun vaksin selamat dan murah tersedia, kes parvovirus masih biasa kerana populasi anjing jalanan dan anak anjing yang tidak divaksinasi.',
  sections: [
    { heading: 'Cara Parvovirus Merebak', body: 'Parvovirus tersebar dalam tinja anjing dijangkiti dan boleh hidup di tanah, kasut, karpet selama berbulan-bulan. Sebarang anak anjing tanpa vaksin di taman atau kedai haiwan berisiko.' },
    { heading: 'Rawatan di Klinik Malaysia', body: 'Rawatan adalah sokongan — tiada penawar antivirus. Anak anjing di hospital menerima IV, ubat anti-muntah, antibiotik, ubat sakit, dan kejururawatan intensif. Tempoh tinggal 5–7 hari.' },
    { heading: 'Pencegahan: Siri Vaksin', body: 'Jadual disyorkan: dos pertama 6–8 minggu, kedua 10–12 minggu, ketiga 14–16 minggu, booster 1 tahun. Sehingga siri lengkap (sekitar 16 minggu), anak anjing tidak boleh di tempat awam.' },
  ],
  bulletSections: [
    { heading: 'Gejala Pada Anak Anjing Tanpa Vaksin', redFlag: true, items: ['Muntah tiba-tiba tidak berhenti', 'Cirit-birit berdarah berbau busuk', 'Lemah teruk', 'Enggan makan/minum', 'Demam atau suhu rendah', 'Mata cengkung, gusi kering'] },
    { heading: 'Apa Beritahu Vet Bila Telefon', items: ['Umur anak anjing dan status vaksin', 'Dari mana anak anjing datang', 'Pendedahan baru kepada anjing lain', 'Bilangan muntah/cirit', 'Sama ada air kekal'] },
  ],
  whenToSeeVet: 'Segera — sebarang anak anjing tanpa vaksin dengan muntah, cirit berdarah, atau lemah adalah suspek parvovirus. Telefon vet awal supaya bilik isolasi disediakan.',
  keyTakeaways: ['Vaksinasi adalah satu-satunya pencegahan dipercayai', 'Jangan lengahkan rawatan', 'Bincang kos dengan vet awal', 'Disinfek rumah dengan peluntur cair (1:30)'],
  faqs: [
    { question: 'Anak anjing saya divaksin — masih boleh parvo?', answer: 'Jarang, tetapi mungkin jika siri tidak lengkap atau vaksin diberi terlalu awal.' },
    { question: 'Mengapa rawatan parvo mahal?', answer: 'Rawatan perlu 5–7 hari IV, ubat, antibiotik, isolasi, dan kejururawatan 24 jam.' },
    { question: 'Anjing lain boleh dapat parvo daripada anak anjing sakit?', answer: 'Ya — anjing tanpa vaksin dalam rumah sama berisiko tinggi.' },
    { question: 'Macam mana disinfek rumah selepas parvo?', answer: 'Peluntur rumah dicairkan (1:30) pada permukaan keras. Tanah luar mustahil — jauhi anak anjing baru selama 6+ bulan.' },
  ],
  seo: { metaTitle: 'Parvovirus Anjing Malaysia | Gejala, Rawatan, Kos Vaksin', metaDescription: 'Panduan vet untuk parvovirus anjing di Malaysia: gejala, kos rawatan (RM1,500–RM5,000), jadual vaksin.', keywords: ['parvovirus Malaysia', 'parvo anak anjing', 'vaksin anak anjing Malaysia'] },
});

const msForeignBody = msMake(enForeignBody, {
  title: 'Anjing Telan Benda Asing: Bila Pembedahan Diperlukan',
  snippetForAI: 'Telan benda asing (mainan, tulang, kain, tali) pada anjing adalah kecemasan pembedahan biasa. Tanda: muntah berterusan, enggan makan, perut sakit, tiada tinja. Diagnosis: X-ray atau ultrasound. Benda linear (tali, benang) paling bahaya. Kos pembedahan di Malaysia: RM2,500–RM8,000.',
  tldr: ['Muntah berterusan + enggan makan = syak benda asing', 'Tali, benang, ikat rambut paling bahaya', 'JANGAN tarik tali dari mulut/dubur', 'X-ray + kadang ultrasound mengesahkan', 'Tunda pembedahan = pecah usus = sepsis'],
  hasEmergencyOverride: true,
  overview: 'Anjing terkenal menelan benda yang tidak sepatutnya. Kebanyakan lalu secara semula jadi — tetapi sebahagian tersangkut dan memerlukan pembedahan. Bahagian sukar untuk pemilik: stoking tertelan boleh lalu dalam dua hari, atau tersekat dalam usus kecil dan membunuh anjing dalam empat hari.',
  sections: [
    { heading: 'Benda Asing Linear — Sentiasa Kecemasan', body: 'Tali, benang, riben, ikat rambut, floss gigi adalah unik berbahaya. Satu hujung tersekat, hujung lain ditarik usus — usus berlipat dan tali gergaji dinding. Hasilnya kebocoran dan sepsis mengancam nyawa.\n\nJANGAN tarik tali kelihatan di mulut atau dubur. Potong yang di luar jika perlu, tetapi yang dalam mesti dikeluarkan pembedahan.' },
    { heading: 'Bagaimana Diagnosis Berfungsi', body: 'Kebanyakan klinik mulakan dengan X-ray dua pandangan. Objek logam jelas. Tulang mungkin kelihatan. Kain, plastik, dan jagung sering tidak kelihatan — vet cari tanda tidak langsung.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya — Kecemasan Hari Ini', redFlag: true, items: ['Muntah berterusan, terutama air', 'Tiada tinja >24 jam selepas makan normal', 'Perut sakit atau bengkak', 'Lemah, sembunyi, enggan makan', 'Tali kelihatan dari mulut/dubur (JANGAN tarik)', 'Anda nampak/syak anjing makan benda'] },
    { heading: 'JANGAN Buat di Rumah', items: ['Jangan paksa muntah tanpa vet', 'Jangan beri laksatif atau ubat tradisional', 'Jangan paracetamol/ibuprofen', 'Jangan tarik tali', 'Jangan tunggu "satu hari lagi"'] },
  ],
  whenToSeeVet: 'Telefon vet segera jika anda nampak/syak telan benda. Pergi hari yang sama jika muntah, perut sakit, atau tiada tinja >24 jam.',
  keyTakeaways: ['Muntah berterusan selepas telan = pembedahan sehingga dibuktikan tidak', 'Benda linear mematikan', 'Tindakan awal boleh menjimatkan pembedahan', 'Insurans haiwan berbaloi untuk pembedahan ini'],
  faqs: [
    { question: 'Anjing telan tulang ayam — apa nak buat?', answer: 'Telefon vet sekarang. Tulang lembut kecil mungkin lalu; tulang tajam mungkin perlu paksa muntah dalam 2 jam.' },
    { question: 'Tongkol jagung benar-benar berbahaya?', answer: 'Ya — tongkol jagung adalah punca utama halangan usus kecil. Berserat, tidak hadam, dan tidak jelas pada X-ray.' },
    { question: 'Berapa lama selepas telan gejala muncul?', answer: 'Beberapa jam hingga beberapa hari. Jika anjing kelihatan tidak sihat dalam 72 jam, jumpa vet.' },
    { question: 'Insurans haiwan tutup pembedahan ini?', answer: 'Kebanyakan polisi di Malaysia tutup ini sebagai tuntutan kemalangan/penyakit.' },
  ],
  seo: { metaTitle: 'Anjing Telan Benda Asing Malaysia | Pembedahan, Kos', metaDescription: 'Panduan vet untuk telan benda asing anjing di Malaysia: gejala, X-ray, kos pembedahan (RM2,500–RM8,000).', keywords: ['anjing telan benda Malaysia', 'pembedahan anjing'] },
});

const msPancreatitis = msMake(enPancreatitis, {
  title: 'Pankreatitis pada Anjing: Selepas Makanan Berlemak & Sisa Perayaan',
  snippetForAI: 'Pankreatitis anjing adalah keradangan akut pankreas, paling kerap dicetuskan oleh makanan berlemak, sisa meja, atau obesiti kronik. Tanda: muntah, sakit perut (posisi sembahyang), enggan makan, lemah. Di Malaysia, musim perayaan (TKC, Hari Raya, Deepavali) menyebabkan lonjakan kes. Diagnosis: ujian darah SpecPL dan ultrasound. Kos rawatan: RM1,500–RM4,500.',
  tldr: ['"Posisi sembahyang" (depan rendah, belakang tinggi) = sakit perut → syak pankreatitis', 'Sisa berlemak adalah pencetus #1', 'Schnauzer, Yorkie, anjing berlebihan berat berisiko tinggi', 'Ujian darah SpecPL mengesahkan', 'Pankreatitis tanpa rawatan boleh maut'],
  hasEmergencyOverride: true,
  overview: 'Setiap tahun, vet Malaysia melihat gelombang kes pankreatitis selepas perayaan besar. Kisahnya hampir selalu sama: ahli keluarga baik hati memberi anjing sekeping rendang, kulit ayam goreng, atau satay. Dua belas jam kemudian, anjing muntah, melengkung kesakitan, dan enggan makan.\n\nPankreatitis adalah keradangan akut pankreas, organ yang menghasilkan enzim pencernaan. Apabila dicetuskan, enzim mula menghadam pankreas sendiri.',
  sections: [
    { heading: 'Mengenali "Posisi Sembahyang"', body: 'Anjing dengan sakit perut sering mengambil postur: kaki depan dan dada rendah, belakang tinggi. Ini meregangkan perut dan melegakan tekanan. Digabungkan dengan muntah dan enggan makan, ini klasik pankreatitis — terus ke vet.' },
    { heading: 'Protokol Rawatan', body: 'Rawatan standard: NPO (tiada makanan/air 12–24 jam), IV, ubat sakit kuat, anti-muntah, antibiotik jika jangkitan disyaki. Apabila muntah berhenti, perkenalkan diet rendah lemak dalam 3–5 hari.' },
    { heading: 'Pengurusan Jangka Panjang', body: 'Sekali anjing pankreatitis, mudah berulang. Diet rendah lemak seumur hidup, tiada layanan berlemak, pengurusan berat, dan pendidikan keluarga adalah penting.' },
  ],
  bulletSections: [
    { heading: 'Tanda Bahaya — Vet Hari Yang Sama', redFlag: true, items: ['Posisi sembahyang atau postur melengkung', 'Muntah berulang (terutama selepas makanan berlemak)', 'Enggan makan, lemah', 'Perut bengkak atau lembut', 'Cirit + muntah + sakit bersama', 'Akses makanan berlemak diketahui'] },
    { heading: 'Makanan JANGAN Beri', items: ['Rendang, kulit ayam kari, lemak BBQ', 'Satay, ayam goreng, lemak char siew', 'Mentega, krim, kuah, lemak', 'Sosej, hot dog, daging diproses', 'Keju kuantiti besar', 'Sebarang "layanan" dengan minyak/lemak'] },
  ],
  whenToSeeVet: 'Vet hari yang sama jika anjing menunjukkan sakit perut (posisi sembahyang), muntah + enggan makan, terutama jika ada akses makanan berlemak dalam 1–3 hari.',
  keyTakeaways: ['Makanan perayaan = musim pankreatitis di Malaysia', 'Posisi sembahyang adalah postur sakit klasik', 'Ujian darah SpecPL adalah standard emas', 'Diet rendah lemak seumur hidup menghalang ulang'],
  faqs: [
    { question: 'Pankreatitis boleh kembali?', answer: 'Ya — anjing yang pernah satu episod mudah berulang. Diet rendah lemak ketat penting.' },
    { question: 'Mengapa Mini Schnauzer mudah pankreatitis?', answer: 'Mereka ada kecenderungan genetik trigliserid darah tinggi.' },
    { question: 'Nasi selamat untuk anjing terdedah pankreatitis?', answer: 'Nasi putih rebus rendah lemak dan selamat dalam kuantiti kecil. Tetapi elakkan campur kari berlemak.' },
    { question: 'Patut dapatkan insurans selepas pankreatitis?', answer: 'Kebanyakan insurans tidak tutup pankreatitis pra-sedia ada, tetapi keadaan baru mungkin masih ditutup.' },
  ],
  seo: { metaTitle: 'Pankreatitis Anjing Malaysia | Gejala, Amaran Makanan Perayaan', metaDescription: 'Panduan vet untuk pankreatitis anjing di Malaysia: posisi sembahyang, pencetus perayaan, kos (RM1,500–RM4,500).', keywords: ['pankreatitis anjing Malaysia', 'posisi sembahyang anjing'] },
});

const msEmergency = msMake(enEmergency, {
  title: 'Tanda Kecemasan GI Anjing: Bila Bawa Terus ke Vet',
  snippetForAI: 'Tanda bahaya gastrousus pada anjing yang memerlukan vet segera: muntah berulang yang tidak berhenti, muntah pada anak anjing, muntah/tinja berdarah, perut bengkak keras (kemungkinan bloat/GDV), pengsan, gusi pucat, posisi sembahyang, dan syak telan racun/benda asing. Bloat (GDV) maut dalam beberapa jam tanpa pembedahan. WhatsApp +60 11-5695 9227.',
  tldr: ['Perut bengkak keras + retching tidak produktif = bloat (GDV), kecemasan pembedahan', 'Sebarang gejala GI pada anak anjing tidak divaksin = parvovirus', 'Gusi pucat, pengsan, lemah = shock', 'Darah dalam muntah/tinja = vet hari yang sama', 'WhatsApp +60 11-5695 9227'],
  hasEmergencyOverride: true,
  overview: 'Kebanyakan muntah dan cirit-birit adalah ringan. Tetapi sebahagian kecil tidak — dan kes-kes itu memerlukan tindakan pantas. Halaman ini menyenaraikan tanda bahaya mutlak yang bermaksud "ke vet sekarang, jangan tunggu pagi."',
  sections: [
    { heading: 'Bloat / GDV — Pembunuh #1', body: 'Gastric Dilatation-Volvulus (GDV, "bloat") adalah apabila perut terisi gas dan berpusing. Tanpa pembedahan kecemasan dalam beberapa jam, maut. Tanda: perut bengkak, keras, seperti dram, retching tidak produktif, gelisah, melopak, tergeliuh.' },
    { heading: 'Parvovirus pada Anak Anjing', body: 'Sebarang anak anjing tanpa vaksin dengan muntah, cirit berdarah, lemah, atau enggan makan adalah kecemasan parvovirus. Telefon vet awal supaya bilik isolasi disediakan.' },
    { heading: 'Telan Racun', body: 'Racun rumah Malaysia biasa: coklat (terutama gelap), anggur/kismis, xylitol, bawang/bawang putih, paracetamol, ibuprofen, racun tikus. Jika syak telan, simpan pembungkus dan telefon vet segera.' },
  ],
  bulletSections: [
    { heading: 'Tanda Ke-Vet-Sekarang', redFlag: true, items: ['Perut bengkak keras + retching tiada apa-apa', 'Pengsan, lemah, gusi pucat/biru', 'Muntah lebih 4 kali dalam 2 jam', 'Muntah/tinja berdarah', 'Sebarang gejala GI anak anjing <6 bulan', 'Syak telan racun/benda asing', 'Sakit perut teruk'] },
    { heading: 'Bawa ke Vet Kecemasan', items: ['Foto muntah/tinja/pembungkus racun', 'Senarai ubat anjing', 'Rekod vaksin', 'Berat badan anjing', 'Telefon untuk follow-up'] },
  ],
  whenToSeeVet: 'Untuk APA-APA dalam senarai tanda bahaya, terus ke vet 24-jam terdekat. Telefon awal. Jika tidak pasti, WhatsApp +60 11-5695 9227.',
  keyTakeaways: ['Kenal vet kecemasan 24-jam SEBELUM kecemasan', 'Bloat/GDV adalah pembedahan dan kritikal masa', 'Anak anjing dehidrasi cepat', 'WhatsApp +60 11-5695 9227'],
  faqs: [
    { question: 'Apa "retching tidak produktif" rupa?', answer: 'Anjing berulang kali cuba muntah, tetapi tiada atau hanya buih keluar. Salah satu tanda paling pasti bloat — terus ke vet.' },
    { question: 'Anjing telan coklat — berapa bahaya?', answer: 'Coklat gelap lebih toksik daripada susu. Walaupun jumlah kecil boleh menyebabkan gejala. Telefon vet dengan jenis, kuantiti, dan berat anjing.' },
    { question: 'Berapa kos rawatan luar waktu pejabat?', answer: 'Rundingan sahaja RM150–RM400. Kes teruk boleh capai RM3,000–RM10,000+.' },
    { question: 'Boleh saya pandu anjing ke vet jika tergeliuh?', answer: 'Ya — bergerak lebih baik daripada menunggu. Telefon awal.' },
  ],
  seo: { metaTitle: 'Tanda Kecemasan GI Anjing Malaysia | Bloat, Parvo, Racun', metaDescription: 'Bila muntah/cirit anjing kecemasan di Malaysia: bloat/GDV, parvo, racun. Tanda bahaya, kos, WhatsApp +60 11-5695 9227.', keywords: ['kecemasan GI anjing Malaysia', 'bloat GDV anjing', 'racun anjing Malaysia'] },
});

// ============================================================
// CHINESE PAGES
// ============================================================

const zhHub: AuthorityPage = {
  ...enHub, lang: 'zh',
  title: '马来西亚狗呕吐与腹泻：原因、费用与危险信号',
  snippetForAI: '狗呕吐和腹泻是马来西亚兽医就诊的前三大原因。常见原因包括饮食不当（捡食）、寄生虫、病毒感染（细小病毒、犬瘟）、胰腺炎、异物吞咽和毒素暴露。成年狗活泼时单次呕吐通常可在家观察12小时，但反复呕吐、血迹、嗜睡或幼犬呕吐需要当日就医。',
  tldr: ['急性呕吐+腹泻同时=24小时内就医', '6个月以下幼犬任何呕吐=当日紧急', '呕吐物/粪便有血=立即就医，不要等', '细小病毒在48–72小时内杀死未接种幼犬', '未经兽医许可勿给人用止吐药'],
  quickFacts: enHub.quickFacts!.map((f) => ({ ...f })),
  malaysiaContext: '马来西亚热带气候加速变质食物中细菌生长。流浪或乡村狗经常捡食——使饮食不当成为#1急性肠胃触发因素。细小病毒在未接种幼犬中仍然常见，特别是收容所收养的狗。蜱传疾病（埃立克体病、无形体病）也可引起呕吐。',
  overview: '没有什么比醒来发现一滩呕吐物或水样粪便更让马来西亚宠物主人不安。大多数病例轻微，24小时内消退——但少数严重病例可能迅速危及生命，特别是对幼犬和老年犬。\n\n本中心帮助您快速分诊：何时可以在家安全监控，何时需要今天就医，何时是夜间紧急情况？',
  categoryCards: [
    { title: '急性呕吐', description: '24小时内突发——原因、分诊和何时担心。', path: '/zh/dog-vomiting-diarrhea/conditions/acute-vomiting', icon: '🤢' },
    { title: '急性腹泻', description: '突然松软或水样便——最常见原因和家庭分诊。', path: '/zh/dog-vomiting-diarrhea/conditions/acute-diarrhea', icon: '💧' },
    { title: '细小病毒', description: '致命的幼犬病毒——症状、治疗、疫苗时间表。', path: '/zh/dog-vomiting-diarrhea/conditions/parvovirus', icon: '☣️' },
    { title: '异物吞咽', description: '吞下玩具、骨头、织物——何时需要手术。', path: '/zh/dog-vomiting-diarrhea/conditions/foreign-body', icon: '🧦' },
    { title: '胰腺炎', description: '在油腻餐食或开斋节/屠妖节剩饭后——真正的紧急情况。', path: '/zh/dog-vomiting-diarrhea/conditions/pancreatitis', icon: '🔥' },
    { title: '紧急信号', description: '需要当日兽医护理的危险信号症状。', path: '/zh/dog-vomiting-diarrhea/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: { text: '反复呕吐+嗜睡，便血，腹部肿胀，或幼犬的任何肠胃症状？这是紧急情况。', linkText: '查看紧急信号', linkPath: '/dog-vomiting-diarrhea/emergency-signs' },
  faqs: [
    { question: '我的狗呕吐了一次——应该急忙去兽医吗？', answer: '如果您的成年狗活跃、警觉、饮水，呕吐一次无血，您可以安全在家观察12小时。禁食6–8小时，然后提供少量水煮鸡和米饭。' },
    { question: '我可以给狗服用易蒙停止泻吗？', answer: '不。易蒙停在某些品种（柯利犬、喜乐蒂）中可能危险，并可能掩盖严重疾病。' },
    { question: '马来西亚细小病毒治疗费用是多少？', answer: '住院细小病毒治疗费用为RM1,500至RM5,000+。通过幼犬疫苗系列预防（共RM150–RM300）便宜得多。' },
    { question: '我如何知道我的狗是否吞下了什么？', answer: '突然呕吐不停、拒食、腹痛或正常饮食后>24小时无排便——这些都可能提示异物。' },
    { question: '清淡饮食（鸡+米饭）总是安全的吗？', answer: '对于健康成年狗的轻微病例，是的。但如果症状持续超过24小时，不应替代兽医护理。' },
  ],
  seo: { metaTitle: '马来西亚狗呕吐与腹泻 | 原因、费用、兽医中心', metaDescription: '马来西亚狗呕吐和腹泻的兽医审查指南：细小病毒、胰腺炎、异物、费用（RM）、危险信号、何时就医。', keywords: ['狗呕吐马来西亚', '狗腹泻', '细小病毒狗', '狗呕吐'] },
  author: AUTHOR_ZH, relatedLinks: RELATED_ZH,
};

const zhMake = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'zh', author: AUTHOR_ZH, relatedLinks: RELATED_ZH, ...overrides } as AuthorityPage);

const zhAcuteVomiting = zhMake(enAcuteVomiting, {
  title: '狗急性呕吐：原因、分诊与何时担心',
  snippetForAI: '狗急性呕吐（持续不到7天）最常由饮食不当、寄生虫、病毒感染或毒素摄入引起。活跃成年狗单次呕吐可在家观察12小时并禁食。反复呕吐（12小时内>3次）、血迹、嗜睡、腹痛或幼犬任何呕吐需要当日兽医护理。',
  tldr: ['单次呕吐+活跃狗=观察12小时，禁食', '12小时内>3次呕吐=今天就医', '幼犬呕吐=紧急，不能等待', '血液（红色或咖啡渣样）=当日就医', '未经兽医许可勿给人用止吐药'],
  overview: '呕吐是症状，不是诊断。分诊的工作是判断您的狗是自限性肠胃不适还是更严重问题的早期迹象——胰腺炎、肠道阻塞、细小病毒或毒素。\n\n在马来西亚，急性呕吐最常见的原因是饮食不当：捡来的厨余、餐桌食物或垃圾箱中的鸡骨。',
  sections: [
    { heading: '前12小时家庭分诊', body: '对于活跃成年狗单次呕吐无其他症状：禁食6–8小时，允许少量频繁饮水。禁食后，提供一茶匙水煮鸡和白米饭。如果保持，逐渐增加分量。\n\n如果呕吐复发或出现血液——停止家庭监控，去看兽医。' },
    { heading: '兽医如何诊断', body: '病史（狗吃了什么？疫苗状态？）、体检、幼犬细小快速检测、寄生虫粪便检查、脱水时血液检查、怀疑异物时X光/超声波。' },
  ],
  bulletSections: [
    { heading: '危险信号——当日就医', redFlag: true, items: ['12小时内呕吐超过3次', '血液——新鲜红色或咖啡渣色', '嗜睡、虚弱、虚脱', '腹部膨胀或疼痛', '6个月以下幼犬呕吐', '呕吐+腹泻一起', '怀疑毒素或异物摄入'] },
    { heading: '不要做什么', items: ['不要给易蒙停、扑热息痛或布洛芬', '不要强迫喂食', '不要停止饮水——只停食物', '幼犬呕吐不要等过夜'] },
  ],
  whenToSeeVet: '如果您的狗12小时内呕吐超过3次、有血、嗜睡、腹部疼痛、是幼犬或老年犬，或您怀疑摄入玩具、骨头或毒素，今天就去兽医。',
  keyTakeaways: ['活跃成年狗单次呕吐=可短暂监控', '反复呕吐+嗜睡=今天就医', '即使禁食也总是给水', '未经兽医指导勿用人药'],
  faqs: [
    { question: '我的狗早上呕吐黄色泡沫——严重吗？', answer: '这通常是空腹过夜引起的「胆汁性呕吐综合症」。尝试小份深夜零食。如果持续超过一周，看兽医。' },
    { question: '我应该禁食多久？', answer: '成年狗：6–8小时，最多12。幼犬和老年犬不应禁食——可能发生低血糖。' },
    { question: '压力会导致呕吐吗？', answer: '是——烟花、寄宿、搬家、雷暴都可能引发。但永远不要假设压力是原因而不排除医疗问题。' },
    { question: '吃草然后呕吐正常吗？', answer: '许多狗偶尔这样做，无害。但频繁吃草+呕吐可能表示恶心。' },
  ],
  seo: { metaTitle: '马来西亚狗急性呕吐 | 原因、分诊、兽医费用', metaDescription: '马来西亚狗急性呕吐的兽医指南：家庭分诊、危险信号、费用（RM80–RM400）、细小、异物。', keywords: ['狗呕吐马来西亚', '狗急性呕吐'] },
});

const zhAcuteDiarrhea = zhMake(enAcuteDiarrhea, {
  title: '狗急性腹泻：原因、家庭护理与危险信号',
  snippetForAI: '狗急性腹泻（少于14天）通常由饮食不当、寄生虫、突然食物改变、压力或病毒/细菌感染引起。成年狗轻微病例可能对24小时清淡饮食和益生菌有反应。带血、粘液、嗜睡、呕吐或幼犬腹泻需要当日兽医护理。',
  tldr: ['腹泻+呕吐一起=今天就医', '血便或胶状便=今天就医', '成年狗只是软便活跃=清淡饮食+益生菌+监控', '幼犬脱水快——绝不「等待观察」', '未经兽医许可勿给易蒙停'],
  overview: '松软粪便是马来西亚狗就诊的最常见原因之一。大多数急性病例轻微，通过简单支持性护理消退——但少数隐藏严重原因：细小病毒、出血性肠胃炎或肠道寄生虫。',
  sections: [
    { heading: '轻微病例的家庭管理', body: '如果您的成年狗软便，但其他方面活跃，进食和饮水：禁食6小时，然后每4小时提供小份水煮鸡+白米饭（1:2比例）。添加兽医推荐的益生菌。大多数病例在48小时内改善。' },
    { heading: '何时粪便检测重要', body: '如果腹泻持续超过48小时、频繁复发或在幼狗中——做粪便检查。这项便宜测试（RM40–RM100）识别需要特定药物的寄生虫。' },
  ],
  bulletSections: [
    { heading: '危险信号——当日就医', redFlag: true, items: ['血液——新鲜红色、深色或胶状粘液', '呕吐+腹泻一起', '嗜睡、虚弱或拒绝饮水', '6个月以下幼犬有任何腹泻', '腹部膨胀或可见疼痛', '尽管清淡饮食腹泻>48小时'] },
    { heading: '轻微病例安全家庭步骤（仅成年）', items: ['禁食6小时', '随时提供新鲜水', '清淡饮食：水煮鸡+米饭（1:2）', '兽医推荐益生菌', '3–4天内逐渐重新引入正常食物'] },
  ],
  whenToSeeVet: '以下任何情况当日就医：便血、呕吐+腹泻、嗜睡、6个月以下幼犬、腹泻持续>48小时。',
  keyTakeaways: ['成年狗轻微病例：清淡饮食+益生菌', '粪便检查便宜且有效', '胶状血便=HGE，今天就医', '幼犬腹泻绝不自行通过'],
  faqs: [
    { question: '在去兽医之前我应该尝试清淡饮食多久？', answer: '成年狗轻微病例：24–48小时。幼犬应立即去兽医。' },
    { question: '米饭或南瓜更适合腹泻？', answer: '两者都有效。白米饭对肠道更温和。南瓜增加纤维。' },
    { question: '我可以给酸奶用于益生菌效果吗？', answer: '原味无糖酸奶对大多数成年狗少量是安全的，但兽医配方的益生菌更有针对性。' },
    { question: '幼犬脱水多快？', answer: '非常快——呕吐+腹泻12小时内，幼犬可能休克。' },
  ],
  seo: { metaTitle: '马来西亚狗急性腹泻 | 清淡饮食、费用、兽医护理', metaDescription: '马来西亚狗腹泻的兽医指南：家庭清淡饮食、危险信号、费用（RM40–RM400）。', keywords: ['狗腹泻马来西亚', '狗软便'] },
});

const zhParvovirus = zhMake(enParvovirus, {
  title: '马来西亚犬细小病毒：症状、治疗与生存',
  snippetForAI: '犬细小病毒（CPV）是一种高度传染性病毒疾病，引起严重呕吐和血性腹泻，主要发生于未接种幼犬。未治疗死亡率超过90%；及时住院IV液治疗，生存率超过70%。完整的幼犬疫苗系列（3剂，6–16周龄）是唯一可靠预防。马来西亚治疗费用：RM1,500–RM5,000。',
  tldr: ['细小病毒是疫苗可预防的幼犬杀手', '症状：严重呕吐、血性腹泻、嗜睡、拒食', '未治疗死亡率>90%，治疗生存率>70%', '治疗是住院+IV+支持性护理', '未接种幼犬未经细小快速检测不要收养'],
  hasEmergencyOverride: true,
  overview: '细小病毒是狗最致命的传染性疾病之一——也是最可预防的。病毒攻击肠道内壁和骨髓，使幼犬呕吐并排出血性、恶臭粪便，直到因脱水和败血症而虚脱。\n\n在马来西亚，尽管安全便宜的疫苗可用，细小病毒病例仍然常见，因为流浪种群、未充分接种的救助幼犬以及病毒在环境中存活数月的能力。',
  sections: [
    { heading: '细小病毒如何传播', body: '细小病毒在感染狗的粪便中大量脱落，可在土壤、鞋子、地毯和食碗上存活数月。任何未接种幼犬在公园或宠物店行走都有风险。' },
    { heading: '马来西亚诊所的治疗', body: '治疗是支持性的——没有抗病毒治愈。住院幼犬接受IV液（纠正严重脱水）、止吐药、广谱抗生素（防止败血症）、止痛和重症护理。总停留通常5–7天。' },
    { heading: '预防：疫苗系列', body: '马来西亚兽医推荐的核心时间表：第一剂6–8周，第二剂10–12周，第三剂14–16周，1岁加强，然后每1–3年。直到系列完成（约16周龄），幼犬不应在公共地面、宠物店或与未接种狗接触。' },
  ],
  bulletSections: [
    { heading: '未接种幼犬需观察的症状', redFlag: true, items: ['突然呕吐不停', '血性、恶臭粪便（常被描述为「腐烂」气味）', '严重嗜睡——比平常睡得多', '拒绝进食或饮水', '发烧或低体温', '眼睛凹陷，牙龈干燥（脱水）'] },
    { heading: '打电话给兽医时告知什么', items: ['幼犬年龄和疫苗状态', '幼犬来自哪里（收容所、繁殖者、宠物店）', '近期接触其他狗或公园', '呕吐/腹泻发作次数和任何血液', '水是否保持下来'] },
  ],
  whenToSeeVet: '立即——任何未接种或部分接种的幼犬有呕吐、血性腹泻或嗜睡都是细小病毒嫌疑，直到证明不是。提前打电话以便诊所准备隔离室。',
  keyTakeaways: ['疫苗接种是唯一可靠预防', '绝不延迟治疗——每小时都很重要', '与兽医坦诚讨论费用', '用稀释漂白剂（1:30）消毒家——病毒存活数月'],
  faqs: [
    { question: '我的幼犬接种了疫苗——还能得细小吗？', answer: '罕见但可能，如果疫苗系列不完整、给得太早或幼犬在接种时已感染。完整完成系列提供强有力保护。' },
    { question: '为什么细小治疗这么贵？', answer: '治疗需要5–7天IV液、止吐药、抗生素、隔离护理和频繁血液检查。总费用反映重症24小时护理。' },
    { question: '我的其他狗能从生病的幼犬感染细小吗？', answer: '是——同一家中未接种或部分接种的狗风险非常高。' },
    { question: '我如何在细小后消毒我的房子？', answer: '稀释家用漂白剂（1份漂白剂：30份水）用于硬表面。室外土壤几乎不可能完全消毒——让新未接种幼犬远离6+个月。' },
  ],
  seo: { metaTitle: '马来西亚犬细小病毒 | 症状、治疗、疫苗费用', metaDescription: '马来西亚犬细小病毒的兽医指南：症状、治疗费用（RM1,500–RM5,000）、生存率、疫苗时间表。', keywords: ['细小病毒马来西亚', '细小幼犬', '马来西亚幼犬疫苗'] },
});

const zhForeignBody = zhMake(enForeignBody, {
  title: '狗异物吞咽：何时需要手术',
  snippetForAI: '狗吞咽异物（玩具、骨头、织物、绳子）是常见的手术紧急情况。征兆包括突然持续呕吐、拒食、腹痛和无粪便。诊断通过X光或超声波。线性异物（绳、线）特别危险，可锯穿肠道。马来西亚手术费用：RM2,500–RM8,000。',
  tldr: ['持续呕吐+拒食=怀疑异物', '绳、线、发圈最危险（线性FB）', '绝不从口或肛门拉可见绳——叫兽医', 'X光+有时超声波确认诊断', '延迟手术→肠道破裂→败血症→死亡'],
  hasEmergencyOverride: true,
  overview: '狗以吞咽他们不应该的东西而臭名昭著。大多数自然通过——但令人担忧的比例卡住，需要手术。对主人来说困难的部分是知道差异：吞下的袜子可以两天内顺利通过，或卡在小肠中并在四天内杀死狗。',
  sections: [
    { heading: '线性异物——始终是紧急情况', body: '绳、线、丝带、发圈、牙线和织物丝带是独特危险的。一端卡住（通常在舌下或胃出口），另一端被肠道运动拉动。结果是肠道堆积，绳锯穿肠壁——导致泄漏和危及生命的败血症。\n\n绝不要拉口或肛门可见的绳。如有必要剪掉外面的，但其余必须手术取出。' },
    { heading: '诊断如何运作', body: '大多数诊所从双视图X光开始。金属物体清晰显示。骨头可能可见。布料、塑料和植物材料（玉米芯！）通常不显示——兽医寻找间接迹象。' },
  ],
  bulletSections: [
    { heading: '危险信号——今天紧急', redFlag: true, items: ['持续呕吐，特别是呕吐水', '正常进食后>24小时无粪便', '腹部疼痛或膨胀', '嗜睡、躲藏、拒食', '可见绳或线从口或肛门（不要拉）', '您看到或怀疑您的狗吃了非食品'] },
    { heading: '家中不要做什么', items: ['未经兽医指导不要催吐', '不要喂泻药、油或「天然疗法」', '不要给人用止痛药（扑热息痛、布洛芬——两者都有毒）', '不要拉可见的绳或线', '不要等「再一天」'] },
  ],
  whenToSeeVet: '如果您看到或怀疑摄入任何非食品物品，立即打电话给兽医。如有呕吐、腹痛或>24小时无粪便，当日亲自就医。',
  keyTakeaways: ['怀疑摄入后持续呕吐=外科直到证明不是', '线性异物致命——绝不拉绳', '及早行动可能意味着催吐而非手术', '宠物保险对此手术最值得'],
  faqs: [
    { question: '我的狗吃了鸡骨——我该怎么办？', answer: '现在打电话给兽医。小软骨可能安全通过；尖锐分裂的骨头可能需要2小时内催吐、X光监测或内窥镜取出。' },
    { question: '玉米芯真的那么危险吗？', answer: '是的——玉米芯是狗小肠梗阻的主要原因。它们纤维多，不消化，X光上不清楚显示。' },
    { question: '吃后多久症状出现？', answer: '从几小时（高梗阻）到几天（下肠道）不等。如果您的狗在怀疑摄入72小时内似乎不适，请就医。' },
    { question: '宠物保险会涵盖异物手术吗？', answer: '马来西亚大多数宠物保险政策涵盖手术异物取出作为事故/疾病索赔。' },
  ],
  seo: { metaTitle: '狗异物吞咽马来西亚 | 手术、费用、危险信号', metaDescription: '马来西亚狗异物吞咽的兽医指南：症状、X光、手术费用（RM2,500–RM8,000）、线性异物警告。', keywords: ['狗吞东西马来西亚', '狗异物手术'] },
});

const zhPancreatitis = zhMake(enPancreatitis, {
  title: '狗胰腺炎：在油腻餐食和节日剩饭之后',
  snippetForAI: '犬胰腺炎是胰腺急性炎症，最常由油腻餐食、餐桌剩饭或慢性肥胖触发。征兆包括呕吐、腹痛（弯背姿势，「祈祷姿势」）、拒食和嗜睡。在马来西亚，节日季节（春节、开斋节、屠妖节）导致胰腺炎病例激增。诊断通过SpecPL/cPL血液测试和超声波。治疗需要住院；费用范围RM1,500–RM4,500。',
  tldr: ['「祈祷姿势」（前低，后高）=腹痛→怀疑胰腺炎', '油腻剩饭是#1触发因素', '雪纳瑞、约克犬、超重狗风险最高', 'SpecPL血液测试确认诊断', '未治疗胰腺炎可致命——需要IV液和止痛'],
  hasEmergencyOverride: true,
  overview: '每年，马来西亚兽医在大节日后看到一波胰腺炎病例。故事几乎总是相同的：好心的家人偷偷给狗一块仁当、炸鸡皮或沙嗲。十二小时后，狗呕吐，弯腰疼痛，拒食。\n\n胰腺炎是胰腺急性炎症，制造消化酶的器官。',
  sections: [
    { heading: '识别「祈祷姿势」', body: '腹痛狗常采用独特姿势：前腿和胸部低伏，后端抬高。这伸展腹部并缓解压力。结合呕吐和拒食，这是经典胰腺炎表现——立即就医。' },
    { heading: '治疗方案', body: '标准治疗：NPO（经口禁食水12–24小时）、IV液纠正脱水、强力止痛（常为阿片类）、止吐药、怀疑继发感染时使用抗生素。一旦呕吐停止，3–5天慢慢重新引入低脂饮食。' },
    { heading: '长期管理', body: '一旦狗有胰腺炎，容易复发。终生低脂饮食（商业处方或在兽医监督下家庭烹饪）、无油腻零食、体重管理和家庭教育是必不可少的。' },
  ],
  bulletSections: [
    { heading: '危险信号——当日就医', redFlag: true, items: ['「祈祷姿势」或弯背姿势', '反复呕吐（特别是油腻餐后）', '拒食、嗜睡', '腹部膨胀或敏感', '腹泻+呕吐+疼痛一起', '过去24–72小时内已知油腻食物接触'] },
    { heading: '绝不要给的食物', items: ['仁当、咖喱鸡皮、烧烤脂肪修剪', '沙嗲、炸鸡、叉烧脂肪', '黄油、奶油、肉汁、猪油', '香肠、热狗、加工肉类', '大量奶酪', '任何有可见油或脂肪的「零食」'] },
  ],
  whenToSeeVet: '如果您的狗表现出腹痛（祈祷姿势、弯背）、呕吐+拒食，特别是如果过去1–3天有任何油腻食物接触，当日就医。',
  keyTakeaways: ['节日食物=马来西亚胰腺炎季节', '祈祷姿势是经典疼痛姿势', 'SpecPL血液测试是诊断金标准', '终生低脂饮食防止复发'],
  faqs: [
    { question: '胰腺炎会复发吗？', answer: '是的——有过一次发作的狗容易复发，特别是如果不维持饮食控制。' },
    { question: '为什么雪纳瑞容易胰腺炎？', answer: '他们有血液甘油三酯升高的遗传倾向，这显著增加胰腺炎风险。' },
    { question: '米饭对易患胰腺炎的狗安全吗？', answer: '原味煮白米饭低脂，少量通常安全。但避免与油腻咖喱、肉汁或油混合。' },
    { question: '我应该在胰腺炎发作后获得宠物保险吗？', answer: '大多数保险不会涵盖既有胰腺炎作为索赔，但新条件可能仍被涵盖。' },
  ],
  seo: { metaTitle: '马来西亚狗胰腺炎 | 症状、节日食物警告', metaDescription: '马来西亚犬胰腺炎的兽医指南：祈祷姿势、节日食物触发、住院费用（RM1,500–RM4,500）。', keywords: ['狗胰腺炎马来西亚', '狗祈祷姿势'] },
});

const zhEmergency = zhMake(enEmergency, {
  title: '狗肠胃紧急信号：何时立即就医',
  snippetForAI: '狗肠胃道危险信号需要立即兽医护理包括：反复呕吐不停、幼犬呕吐、血性呕吐物或腹泻、腹部膨胀坚硬（可能胃扩张扭转/GDV）、虚脱、苍白牙龈、疼痛「祈祷姿势」以及怀疑毒素或异物摄入。胃扩张扭转（GDV）几小时内致命，无手术。WhatsApp +60 11-5695 9227。',
  tldr: ['腹部膨胀坚硬+无效干呕=胃扩张扭转，外科紧急', '未接种幼犬任何肠胃症状=细小病毒', '苍白牙龈、虚脱、虚弱=休克，立即就医', '呕吐物/粪便有血=当日就医', 'WhatsApp +60 11-5695 9227 紧急分诊'],
  hasEmergencyOverride: true,
  overview: '大多数呕吐和腹泻是轻微的。但少数不是——这些病例需要快速行动。本页列出绝对危险信号，意味着「现在就去兽医，不要等到早上」。',
  sections: [
    { heading: '胃扩张扭转/GDV——#1杀手', body: '胃扩张-扭转（GDV，「胃扩张」）是胃充满气体并自身扭转，切断血液供应。无几小时内紧急手术，致命。征兆：腹部膨胀、坚硬、鼓状、无效干呕（看起来在试图呕吐但什么都没出来）、不安、踱步、流口水、虚脱。' },
    { heading: '幼犬细小病毒', body: '任何未接种或未充分接种幼犬表现出呕吐、血性腹泻、嗜睡或拒食是细小病毒紧急情况。提前打电话给兽医以便他们准备隔离。' },
    { heading: '毒素摄入', body: '常见马来西亚家庭毒素：巧克力（特别是黑色）、葡萄/葡萄干、木糖醇、咖喱中的洋葱/大蒜、扑热息痛、布洛芬、灭鼠剂。如果怀疑摄入，保存包装并立即打电话给兽医。' },
  ],
  bulletSections: [
    { heading: '立即就医征兆', redFlag: true, items: ['腹部膨胀坚硬+干呕什么都没出来', '虚脱、虚弱、苍白或蓝色牙龈', '2小时内呕吐超过4次', '血性呕吐物或粪便', '6个月以下幼犬任何肠胃症状', '怀疑毒素或异物摄入', '严重腹痛（触摸时嚎叫）'] },
    { heading: '带到紧急兽医', items: ['任何呕吐、粪便或可疑毒素包装的照片', '您狗服用的药物清单', '疫苗记录', '大致体重', '电话用于跟进更新'] },
  ],
  whenToSeeVet: '对于上述危险信号列表上的任何内容，立即前往最近的24小时兽医。提前打电话。如果不确定，WhatsApp +60 11-5695 9227获取分诊指导。',
  keyTakeaways: ['在紧急情况之前知道您的24小时紧急兽医', '胃扩张扭转/GDV是手术和时间关键', '幼犬脱水快——绝不「等待观察」', 'WhatsApp +60 11-5695 9227'],
  faqs: [
    { question: '「无效干呕」是什么样子？', answer: '狗反复呕或试图呕吐，但什么都没出来或只有泡沫。这是胃扩张最可靠的征兆之一——立即就医。' },
    { question: '我的狗吃了巧克力——多少是危险的？', answer: '黑巧克力比牛奶更毒。即使少量也可引起症状。打电话给兽医，告知巧克力类型、数量、您狗的体重。' },
    { question: '下班后紧急护理费用是多少？', answer: '咨询费用RM150–RM400。严重病例（胃扩张手术、细小治疗、毒素）可达RM3,000–RM10,000+。' },
    { question: '如果我的狗虚脱，我可以开车送它去兽医吗？', answer: '是的——移动比等待更好。提前打电话。' },
  ],
  seo: { metaTitle: '马来西亚狗肠胃紧急信号 | 胃扩张、细小、毒素热线', metaDescription: '马来西亚狗呕吐/腹泻何时紧急：胃扩张/GDV、细小、毒素摄入。危险信号、费用、WhatsApp +60 11-5695 9227。', keywords: ['狗肠胃紧急马来西亚', '狗胃扩张GDV', '狗中毒马来西亚'] },
});

// ============================================================
// REGISTRY
// ============================================================

export const dogVomitingConfig: AuthorityHubConfig = {
  basePath: DOG_VOMITING_BASE_PATH,
  pages: [
    enHub, enAcuteVomiting, enAcuteDiarrhea, enParvovirus, enForeignBody, enPancreatitis, enEmergency,
    msHub, msAcuteVomiting, msAcuteDiarrhea, msParvovirus, msForeignBody, msPancreatitis, msEmergency,
    zhHub, zhAcuteVomiting, zhAcuteDiarrhea, zhParvovirus, zhForeignBody, zhPancreatitis, zhEmergency,
  ],
};

export default dogVomitingConfig;

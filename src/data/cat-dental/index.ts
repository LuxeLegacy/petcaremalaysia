import type { AuthorityHubConfig, AuthorityPage, AuthorityAuthor } from '../authority/types';

export const CAT_DENTAL_BASE_PATH = '/cat-dental-disease';

const AUTHOR_EN: AuthorityAuthor = {
  name: 'Dr. Priya Subramaniam',
  credentials: 'DVM, Feline Medicine Practitioner',
  bio: 'Cat-only practice focus, 11+ years feline dentistry experience across Malaysian clinics.',
};
const AUTHOR_MS: AuthorityAuthor = { ...AUTHOR_EN, credentials: 'DVM, Pengamal Perubatan Felin', bio: 'Tumpuan amalan kucing sahaja, 11+ tahun pengalaman pergigian felin di klinik Malaysia.' };
const AUTHOR_ZH: AuthorityAuthor = { ...AUTHOR_EN, credentials: 'DVM，猫科医学执业者', bio: '专注于猫科诊疗，在马来西亚诊所拥有11年以上猫牙科经验。' };

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
  { title: 'AVDC Nomenclature & Feline Dentistry Guidelines', source: 'American Veterinary Dental College', url: 'https://avdc.org/', year: '2024' },
  { title: 'WSAVA Global Dental Guidelines', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/global-guidelines/', year: '2023' },
  { title: 'ISFM Consensus on Feline Tooth Resorption', source: 'International Society of Feline Medicine', url: 'https://icatcare.org/', year: '2023' },
  { title: 'Veterinary Surgeons Act 1974 (Act 147)', source: 'Department of Veterinary Services Malaysia', url: 'https://www.dvs.gov.my/', year: '2024' },
];

const enHub: AuthorityPage = {
  slug: 'hub', kind: 'hub', category: 'Hub', lang: 'en',
  title: 'Cat Dental Disease in Malaysia: Gingivitis, Tooth Resorption & FORL',
  snippetForAI: 'Cat dental disease affects an estimated 70% of cats over age 3. The most common conditions are gingivitis, periodontal disease, feline tooth resorption (FORL), stomatitis, and tooth fractures. Cats hide pain well — owners often only notice when the cat stops eating dry food. Most cases need vet diagnosis under sedation; treatment ranges from scaling (RM350–RM800) to multiple extractions (RM1,200–RM3,500).',
  tldr: [
    'About 70% of cats over 3 have dental disease',
    'Cats hide pain — drooling, dropping food, weight loss are late signs',
    'Tooth resorption (FORL) affects up to 60% of older cats and is painful',
    'Feline stomatitis is an immune-mediated disease — often needs full-mouth extraction',
    'Never brush a painful mouth without vet exam first',
  ],
  quickFacts: [
    { label: 'Most Common Issue', value: 'Gingivitis & periodontal disease' },
    { label: 'Hidden Killer', value: 'Tooth resorption (FORL)' },
    { label: 'Dental Cleaning', value: 'RM350–RM800' },
    { label: 'Extractions', value: 'RM150–RM450 per tooth' },
    { label: 'Full-Mouth Extraction', value: 'RM2,000–RM4,500' },
    { label: 'Anaesthesia Risk', value: 'Low with pre-op bloodwork' },
  ],
  malaysiaContext: 'Wet-food and home-cooked diets are common in Malaysian cat households, which slightly increases plaque/tartar buildup compared to dry kibble. Free-roaming cats sustain more tooth fractures from fights. FIV-positive cats (more common in stray-rescue populations) have higher stomatitis rates. Most major Klang Valley, Penang, and JB clinics offer dental scaling and extractions; advanced cases (full-mouth extraction, oral surgery) may need referral.',
  statistics: [
    { stat: 'An estimated 70% of cats over age 3 have some form of dental disease', source: 'AVDC, 2024' },
    { stat: 'Tooth resorption affects 30–60% of cats over 5 years old', source: 'ISFM Consensus, 2023' },
    { stat: 'Untreated feline stomatitis significantly reduces quality of life and lifespan', source: 'WSAVA Global Dental Guidelines, 2023' },
  ],
  costRange: [
    { item: 'Basic consult + oral exam', range: 'RM60–RM150' },
    { item: 'Pre-anaesthetic bloodwork', range: 'RM180–RM350' },
    { item: 'Dental scaling + polish', range: 'RM350–RM800' },
    { item: 'Dental X-rays (under GA)', range: 'RM150–RM400' },
    { item: 'Tooth extraction (each)', range: 'RM150–RM450' },
    { item: 'Full-mouth extraction', range: 'RM2,000–RM4,500' },
  ],
  citations: CITATIONS,
  keyTakeaways: [
    'Yearly oral exam from age 2 onwards — earlier for purebreds',
    'Drooling, head-tilt while eating, or dropping food = vet today',
    'Tooth resorption is painful and only X-ray finds it',
    'Full-mouth extraction sounds drastic but cures stomatitis in ~80% of cats',
  ],
  overview: `Cats are notorious for hiding pain. By the time a Malaysian cat owner notices something wrong with the mouth — drooling, dropping food, bad breath, weight loss — there's usually already significant disease underneath. Cat dental problems are the most under-diagnosed condition in feline practice.

This hub explains the cat-specific dental diseases (very different from dogs), the costs in Malaysian ringgit, and exactly when to escalate from a routine dental cleaning to surgical extraction. Every page is reviewed by a Malaysian-licensed vet.`,
  categoryCards: [
    { title: 'Gingivitis & Periodontal Disease', description: 'The starting point of most cat dental problems.', path: '/cat-dental-disease/conditions/gingivitis', icon: '🦷' },
    { title: 'Tooth Resorption (FORL)', description: 'A painful, often-hidden disease affecting up to 60% of older cats.', path: '/cat-dental-disease/conditions/tooth-resorption', icon: '⚠️' },
    { title: 'Feline Stomatitis', description: 'Severe immune-mediated mouth inflammation — often needs full-mouth extraction.', path: '/cat-dental-disease/conditions/stomatitis', icon: '🔥' },
    { title: 'Tooth Fracture', description: 'Common from fights, falls, or chewing hard objects.', path: '/cat-dental-disease/conditions/tooth-fracture', icon: '💥' },
    { title: 'Bad Breath (Halitosis)', description: 'Not normal — it almost always signals dental disease.', path: '/cat-dental-disease/symptoms/bad-breath', icon: '😾' },
    { title: 'Dental Cleaning Procedure', description: 'What happens under anaesthesia — and why X-ray matters.', path: '/cat-dental-disease/treatments/dental-cleaning', icon: '🪥' },
    { title: 'Home Dental Care', description: 'Brushing, dental diets, water additives — what works.', path: '/cat-dental-disease/prevention/home-care', icon: '🏠' },
    { title: 'Dental Emergency Signs', description: 'Red-flag oral symptoms requiring same-day care.', path: '/cat-dental-disease/emergency-signs', icon: '🚨' },
  ],
  emergencyBanner: {
    text: 'Cat refusing food >24 hours, severe drooling with blood, or visible facial swelling? This is an emergency — cats develop hepatic lipidosis quickly when they stop eating.',
    linkText: 'See Emergency Signs',
    linkPath: '/cat-dental-disease/emergency-signs',
  },
  faqs: [
    { question: 'Does my cat really need anaesthesia for a dental cleaning?', answer: 'Yes — proper feline dental cleaning requires X-rays, probing, and below-gumline cleaning that cannot be done awake. "Anaesthesia-free dentistry" misses the disease that matters most (under the gum).' },
    { question: 'My cat eats fine — does that mean the mouth is healthy?', answer: 'No. Cats often eat through significant pain. Tooth resorption, in particular, can be advanced before any eating change appears.' },
    { question: 'How much will a full dental procedure cost in Malaysia?', answer: 'Scaling + polish alone: RM350–RM800. With X-rays: add RM150–RM400. Each extraction: RM150–RM450. Full-mouth extraction (for stomatitis): RM2,000–RM4,500.' },
    { question: 'Is anaesthesia safe for older cats?', answer: 'Yes, when pre-anaesthetic bloodwork is normal and modern protocols are used. The risk of untreated dental disease (chronic pain, kidney/heart stress from infection) often outweighs the anaesthesia risk.' },
    { question: 'Can I brush my cat\'s teeth?', answer: 'Yes — with cat-specific toothpaste (never human paste — fluoride is toxic). Start slow, use positive reinforcement, and stop if there is any sign of pain (which means a vet visit first).' },
  ],
  seo: {
    metaTitle: 'Cat Dental Disease Malaysia | Gingivitis, FORL, Stomatitis Hub',
    metaDescription: 'Vet-reviewed guide to cat dental disease in Malaysia: gingivitis, tooth resorption, stomatitis, costs (RM), emergency signs, home care.',
    keywords: ['cat dental disease Malaysia', 'cat gingivitis', 'feline tooth resorption', 'cat stomatitis Malaysia', 'cat dental cleaning cost'],
  },
  author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
};

const mkArticle = (slug: string, categorySlug: string | undefined, category: string, fields: Partial<AuthorityPage>): AuthorityPage => ({
  slug, kind: 'article', categorySlug, category, lang: 'en',
  citations: CITATIONS, author: AUTHOR_EN, datePublished: '2026-05-18', dateModified: '2026-05-18', relatedLinks: RELATED_EN,
  tldr: [], quickFacts: [], faqs: [], seo: { metaTitle: '', metaDescription: '', keywords: [] },
  title: '', snippetForAI: '', overview: '', ...fields,
} as AuthorityPage);

const enGingivitis = mkArticle('gingivitis', 'conditions', 'Dental Conditions', {
  title: 'Cat Gingivitis & Periodontal Disease',
  snippetForAI: 'Feline gingivitis is inflammation of the gums caused by plaque bacteria, the starting point of periodontal disease. Symptoms include red gum line, bad breath, and bleeding when eating. Early gingivitis is reversible with professional scaling and home brushing; advanced periodontal disease requires extractions. Treatment cost in Malaysia: RM350–RM1,500 depending on severity.',
  tldr: ['Red gum line = early gingivitis, fully reversible if treated', 'Plaque hardens to tartar in 48 hours — daily brushing is the gold standard', 'Untreated gingivitis becomes periodontal disease, then tooth loss', 'Bad breath in cats is NEVER normal', 'Annual dental exam from age 2 onwards'],
  quickFacts: [{ label: 'Reversible Stage', value: 'Gingivitis (no bone loss yet)' }, { label: 'Irreversible Stage', value: 'Periodontal disease (bone loss)' }, { label: 'Dental Scaling', value: 'RM350–RM800' }, { label: 'Extraction (if needed)', value: 'RM150–RM450 each' }, { label: 'Home Brushing', value: 'Daily, with cat toothpaste only' }],
  malaysiaContext: 'Wet-food diets common in Malaysian households contribute to faster plaque buildup. Most general clinics in KL, Selangor, Penang, JB, and Ipoh perform routine dental cleaning under anaesthesia.',
  costRange: [{ item: 'Oral exam', range: 'RM60–RM150' }, { item: 'Scaling + polish', range: 'RM350–RM800' }, { item: 'Extractions if needed', range: 'RM150–RM450/tooth' }, { item: 'Cat toothbrush + paste', range: 'RM30–RM80' }],
  overview: 'Gingivitis is the silent start of every cat dental disease. The gum line turns red, then bleeds when eating, then recedes — by the time the cat is dropping food, the disease has usually progressed to periodontal bone loss that cannot be reversed.',
  sections: [
    { heading: 'Stages of Gum Disease', body: 'Stage 1 (gingivitis): red gum line, no bone loss — REVERSIBLE. Stage 2: early periodontitis, mild bone loss. Stage 3: moderate bone loss. Stage 4: severe — tooth loose, extraction needed.' },
    { heading: 'What Vets Do', body: 'Full mouth exam under anaesthesia, dental X-rays (essential — most disease is below the gum), ultrasonic scaling above and below gumline, polish, and extractions of any unsalvageable teeth.' },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Refusing food >24 hours', 'Pawing at mouth, head-shaking', 'Visible facial swelling', 'Bleeding from the mouth', 'Severe drooling'] },
    { heading: 'Home Prevention That Actually Works', items: ['Daily brushing with cat-specific paste (poultry-flavoured)', 'VOHC-accepted dental diet kibble', 'Annual professional cleaning from age 2', 'Avoid raw bones — they fracture cat teeth'] },
  ],
  whenToSeeVet: 'Any time you notice bad breath, red gum line, drooling, or food-dropping. Don\'t wait — early treatment is cheaper and saves teeth.',
  keyTakeaways: ['Annual dental check from age 2', 'Bad breath = always vet-worthy', 'Daily brushing prevents 80% of disease', 'X-ray under GA is non-negotiable'],
  faqs: [
    { question: 'Can I use human toothpaste?', answer: 'No — fluoride is toxic to cats. Use cat-specific enzymatic paste.' },
    { question: 'My cat hates brushing — alternatives?', answer: 'Dental treats with VOHC seal, water additives, prescription dental kibble. None replace brushing but help.' },
    { question: 'Is anaesthesia-free dentistry OK?', answer: 'No — it misses below-gumline disease (where 70% of problems live) and stresses the cat.' },
    { question: 'How often is a cleaning needed?', answer: 'Most cats: every 12–18 months. Predisposed breeds (Persian, Maine Coon): every 6–12 months.' },
  ],
  seo: { metaTitle: 'Cat Gingivitis Malaysia | Causes, Costs, Home Care', metaDescription: 'Vet guide to cat gingivitis and periodontal disease in Malaysia. Costs (RM350–RM1,500), stages, brushing, when to see the vet.', keywords: ['cat gingivitis Malaysia', 'cat periodontal disease', 'cat dental cleaning cost'] },
});

const enResorption = mkArticle('tooth-resorption', 'conditions', 'Dental Conditions', {
  title: 'Feline Tooth Resorption (FORL): The Hidden Painful Disease',
  snippetForAI: 'Feline tooth resorption (FORL or TR) is a painful condition where the cat\'s own body breaks down tooth structure, starting at the root. It affects 30–60% of cats over 5 years old. Cats hide the pain remarkably well. Dental X-rays under anaesthesia are required for diagnosis — the lesion is often invisible above the gum. Treatment is extraction of affected teeth. Cost in Malaysia: RM150–RM450 per extraction.',
  tldr: ['FORL affects up to 60% of cats over 5', 'Cause is unknown — not preventable', 'X-ray is mandatory — visible above gum only in late stage', 'Treatment is extraction; root canal does NOT work for cats', 'Cats often eat normally despite severe pain'],
  quickFacts: [{ label: 'Prevalence', value: '30–60% of cats >5 yr' }, { label: 'Cause', value: 'Unknown' }, { label: 'Diagnosis', value: 'Dental X-ray under anaesthesia' }, { label: 'Treatment', value: 'Extraction (mandatory)' }, { label: 'Cost per Extraction', value: 'RM150–RM450' }],
  malaysiaContext: 'FORL is recognised in all cat breeds. Many Malaysian cat owners only discover it when the cat\'s annual dental shows lesions on X-ray. Major referral clinics in KL and Penang have full dental X-ray suites.',
  costRange: [{ item: 'Dental X-ray (full mouth)', range: 'RM150–RM400' }, { item: 'Extraction per tooth', range: 'RM150–RM450' }, { item: 'Multiple extractions', range: 'RM800–RM2,500' }],
  hasEmergencyOverride: false,
  overview: 'FORL is one of the most common — and most under-diagnosed — painful diseases of cats. The cat\'s own immune cells attack the tooth from the root upward, eventually destroying the crown. Pain is severe but cats hide it; many owners only learn about FORL when X-rays at a routine cleaning reveal multiple affected teeth.',
  sections: [
    { heading: 'Why Extraction Is the Only Treatment', body: 'Unlike human cavities, FORL cannot be filled or root-canalled. The whole tooth must be removed — sometimes the crown alone if the root has fully resorbed (crown amputation, only for specific X-ray-confirmed types).' },
    { heading: 'What You Might Notice at Home', body: 'Chattering of the jaw when picking up food, dropping kibble, preferring soft food, head-tilt while chewing, weight loss. Many cats show nothing at all.' },
  ],
  bulletSections: [
    { heading: 'Red Flags', redFlag: true, items: ['Jaw chattering during eating', 'Dropping food from one side', 'Pawing at face', 'Refusal of dry kibble in a cat that used to eat it', 'Visible red gum overgrowing onto tooth'] },
  ],
  whenToSeeVet: 'Any cat over 4 years should have annual dental X-rays under sedation. Sooner if you notice any of the red flags above.',
  keyTakeaways: ['X-ray is the ONLY way to diagnose', 'Extraction is the only effective treatment', 'Cats hide pain — don\'t wait for symptoms', 'Annual dental from age 4 is the standard of care'],
  faqs: [
    { question: 'My cat eats fine — does it really hurt?', answer: 'Almost certainly yes. Cats are wired to hide pain to avoid predators. Most FORL cats become noticeably happier after extraction.' },
    { question: 'Can FORL be prevented?', answer: 'No known prevention. Early detection via annual X-rays is the best strategy.' },
    { question: 'How many teeth will my cat have left?', answer: 'Varies. Some cats lose 2–4 teeth, others need 12+. Cats do remarkably well even with very few teeth — they can still eat dry kibble.' },
    { question: 'Will my cat be in pain after extraction?', answer: 'The cat usually feels BETTER within days — the chronic pain is gone. Vets provide pain medication for the first week.' },
  ],
  seo: { metaTitle: 'Feline Tooth Resorption (FORL) Malaysia | Hidden Cat Pain', metaDescription: 'FORL is the hidden painful disease of 30–60% of older cats. X-ray diagnosis, extraction treatment, costs (RM150–RM450/tooth) in Malaysia.', keywords: ['feline tooth resorption', 'FORL cat Malaysia', 'cat dental X-ray'] },
});

const enStomatitis = mkArticle('stomatitis', 'conditions', 'Dental Conditions', {
  title: 'Feline Stomatitis: When Full-Mouth Extraction Is the Cure',
  snippetForAI: 'Feline chronic gingivostomatitis (FCGS) is a severe immune-mediated inflammation of the entire mouth. Cats have extreme oral pain, drool, refuse food, and may bleed from the mouth. Medical management is rarely enough; full-mouth or near-full-mouth extraction cures or significantly improves about 80% of cats. Treatment cost in Malaysia: RM2,000–RM4,500.',
  tldr: ['Stomatitis is immune-mediated, not just bad teeth', 'Cats are in severe constant pain — yes, even when still eating', 'Full-mouth extraction cures or improves ~80% of cats', 'FIV/FeLV-positive cats have worse outcomes', 'Steroids only mask symptoms long-term'],
  quickFacts: [{ label: 'Severity', value: 'Severe oral pain — quality of life issue' }, { label: 'Cure Rate (Full Extraction)', value: '~80%' }, { label: 'Test FIV/FeLV', value: 'Recommended before treatment' }, { label: 'Full-Mouth Extraction', value: 'RM2,000–RM4,500' }],
  malaysiaContext: 'FIV/FeLV testing should precede any stomatitis treatment plan — these viruses worsen prognosis and are common in stray/rescue Malaysian cats. Full-mouth extraction requires a vet experienced in feline oral surgery; many KL, Penang, and JB referral clinics offer this.',
  costRange: [{ item: 'FIV/FeLV snap test', range: 'RM120–RM250' }, { item: 'Initial dental + extractions', range: 'RM1,500–RM2,500' }, { item: 'Full-mouth extraction', range: 'RM2,000–RM4,500' }],
  hasEmergencyOverride: true,
  overview: 'Stomatitis is one of the most painful conditions in feline medicine. The cat\'s immune system reacts violently to plaque bacteria on tooth surfaces, causing the entire mouth (cheeks, throat, gums) to become red, ulcerated, and bleeding. Pain medication alone never controls it — the root cause is the tooth surfaces themselves.',
  sections: [
    { heading: 'Why Extraction Works', body: 'Without teeth, there are no surfaces for plaque to colonise — so the immune system has nothing to react against. Most cats heal completely within 1–3 months of full-mouth extraction and live normal lives.' },
    { heading: 'What If Owners Refuse Extraction?', body: 'Long-term steroids and antibiotics provide partial relief but never resolve the disease, and steroids cause diabetes/heart issues over time. Most experienced feline vets strongly recommend extraction as first-line treatment.' },
  ],
  bulletSections: [{ heading: 'Red Flags — Same-Day Vet', redFlag: true, items: ['Drooling with blood or pus', 'Refusing food >24 hours (risk of hepatic lipidosis)', 'Weight loss, hiding, depression', 'Foul mouth odour combined with face-pawing', 'Visible ulcers at the back of the mouth'] }],
  whenToSeeVet: 'Today. Stomatitis is severely painful and progresses without treatment. Cats that stop eating develop fatal liver disease (hepatic lipidosis) within days.',
  keyTakeaways: ['Full-mouth extraction is the gold-standard treatment', 'Steroids are not a long-term solution', 'Test for FIV/FeLV first', 'Cats live normal happy lives with no teeth'],
  faqs: [
    { question: 'My cat eats — can the pain really be that bad?', answer: 'Yes. Cats eat through severe pain because the survival drive is strong. Most cats post-extraction are visibly happier and more active.' },
    { question: 'Can stomatitis be cured without surgery?', answer: 'Rarely. Some mild early cases respond to perfect oral hygiene and immune modulation, but most need extraction.' },
    { question: 'How long is recovery?', answer: 'Most cats are eating soft food comfortably within 7–14 days. Full mouth healing 2–3 months.' },
    { question: 'Will my cat be able to eat dry food after?', answer: 'Yes — many no-teeth cats happily crunch kibble. Cats swallow kibble whole; teeth are not essential.' },
  ],
  seo: { metaTitle: 'Feline Stomatitis Malaysia | Full-Mouth Extraction Cure', metaDescription: 'Cat stomatitis = severe pain. Full-mouth extraction cures ~80% of cats. Costs (RM2,000–RM4,500) and care in Malaysia.', keywords: ['feline stomatitis Malaysia', 'cat full mouth extraction', 'FCGS cat'] },
});

const enFracture = mkArticle('tooth-fracture', 'conditions', 'Dental Conditions', {
  title: 'Cat Tooth Fracture: When the Pulp Is Exposed',
  snippetForAI: 'Cat tooth fractures most often involve the canine (fang) teeth, broken from fights, falls, or chewing hard objects. If the pulp (pink/dark spot) is exposed, the tooth is painful and will become infected — extraction or root canal is required. Cost in Malaysia: RM150–RM450 for extraction.',
  tldr: ['Pulp-exposed fracture = always treat', 'Visible pink/red dot in centre = pulp exposed', 'Infection ascends to the tooth root and then the jaw', 'Most Malaysian vets extract; root canal is referral-only', 'Costs RM150–RM450 per tooth'],
  quickFacts: [{ label: 'Most Affected Teeth', value: 'Upper and lower canines (fangs)' }, { label: 'Causes', value: 'Fights, falls, chewing hard toys' }, { label: 'Pulp Exposed', value: 'Visible red/dark spot in centre' }, { label: 'Treatment', value: 'Extraction or root canal' }, { label: 'Extraction Cost', value: 'RM150–RM450' }],
  malaysiaContext: 'Outdoor-roaming cats sustain more fang fractures from cat fights. Hard plastic toys and bones (avoid both for cats) are common indoor causes.',
  costRange: [{ item: 'Dental X-ray', range: 'RM150–RM400' }, { item: 'Extraction (canine)', range: 'RM200–RM450' }, { item: 'Root canal (referral)', range: 'RM1,500–RM3,500' }],
  overview: 'A broken cat fang is more than cosmetic. The pulp is a bundle of nerves and blood vessels — once exposed to mouth bacteria, infection ascends to the root and then to the jawbone, causing chronic pain and abscesses.',
  sections: [
    { heading: 'How to Tell Pulp Is Exposed', body: 'Look at the broken surface — if you see a pink, red, or dark dot in the centre, that is exposed pulp. A white-only surface means the enamel chipped but pulp may be intact (still needs vet exam).' },
    { heading: 'Why Untreated Fractures Are Dangerous', body: 'Mouth bacteria reach the pulp within hours. The tooth dies, becomes infected, and forms a periapical abscess — often visible as facial swelling or a draining tract under the eye.' },
  ],
  bulletSections: [{ heading: 'Red Flags', redFlag: true, items: ['Visible broken canine tooth', 'Facial swelling, especially below the eye', 'Pus or drainage from face/mouth', 'Refusing dry food', 'Drooling'] }],
  whenToSeeVet: 'Any visible fracture, even if cat seems fine. The pulp dies silently and creates an abscess later.',
  keyTakeaways: ['Pink/red dot = pulp exposed = treat now', 'Cat fights are top cause — keep cats indoor', 'Root canal possible but referral-only', 'Don\'t give hard chew toys to cats'],
  faqs: [
    { question: 'My cat broke a tooth months ago and seems fine — leave it?', answer: 'No — get an X-ray. Most "fine" fractured teeth have silent root infections waiting to flare.' },
    { question: 'Will my cat survive with one less fang?', answer: 'Yes — cats adapt very well. Eating, grooming, and play are unchanged.' },
    { question: 'Can fractured teeth be capped like in humans?', answer: 'Rarely done in cats. Extraction is simpler, cheaper, and removes pain.' },
    { question: 'How can I prevent fractures?', answer: 'Keep cats indoor (no fights), avoid hard plastic toys and bones, supervise rough play.' },
  ],
  seo: { metaTitle: 'Cat Tooth Fracture Malaysia | Extraction & Costs', metaDescription: 'Vet guide to cat tooth fractures in Malaysia: pulp-exposed fangs, extraction costs (RM150–RM450), why even old fractures need treatment.', keywords: ['cat broken tooth Malaysia', 'cat fang fracture', 'cat dental extraction'] },
});

const enBadBreath = mkArticle('bad-breath', 'symptoms', 'Symptoms', {
  title: 'Bad Breath in Cats (Halitosis): Almost Never "Just Their Food"',
  snippetForAI: 'Bad breath in cats is almost always a sign of dental disease — gingivitis, periodontal disease, tooth resorption, or stomatitis. Less commonly, it can signal kidney disease (ammonia smell) or diabetes (sweet/fruity smell). Cat breath should be neutral; any noticeable odour deserves a vet exam. Dental treatment cost in Malaysia: RM350–RM4,500.',
  tldr: ['Healthy cat breath has no strong smell', 'Bad breath ≠ "tuna breath" — that\'s just recent food', 'Persistent odour = dental disease in 90%+ of cases', 'Ammonia smell = check kidneys', 'Sweet/fruity smell = check for diabetes'],
  quickFacts: [{ label: 'Most Common Cause', value: 'Dental disease (90%+)' }, { label: 'Other Causes', value: 'Kidney disease, diabetes, oral tumour' }, { label: 'Vet Consult', value: 'RM60–RM150' }, { label: 'Dental Treatment', value: 'RM350–RM4,500' }],
  overview: 'Many Malaysian cat owners normalise "cat breath" — but a healthy cat\'s mouth has no strong smell. Persistent halitosis is the most reliable early warning sign of dental disease, often appearing years before the cat changes eating behaviour.',
  sections: [
    { heading: 'What the Smell Can Tell You', body: 'Foul/rotten: bacterial infection from periodontal disease. Metallic: bleeding gums. Ammonia/urine-like: kidney disease — get bloodwork. Sweet/fruity: diabetes ketoacidosis — emergency. Putrid one-sided: possible oral tumour.' },
    { heading: 'What Vets Will Do', body: 'Full oral exam, often with sedation for proper assessment. Bloodwork if non-dental cause is suspected. Dental X-rays under GA for definitive diagnosis.' },
  ],
  bulletSections: [{ heading: 'Red Flags', redFlag: true, items: ['Sudden onset of strong odour', 'Drooling', 'Refusing food', 'Weight loss', 'Sweet/fruity odour (possible diabetic emergency)', 'Ammonia smell (possible kidney crisis)'] }],
  whenToSeeVet: 'Any cat with persistent bad breath — book within 2 weeks. Same-day if accompanied by refusing food, weight loss, or sweet/ammonia smell.',
  keyTakeaways: ['Bad breath = vet exam, not a new diet', 'The smell type gives diagnostic clues', 'Cats hide pain — odour appears before behaviour change', 'Annual dental check from age 2'],
  faqs: [
    { question: 'My cat just ate tuna — that\'s the smell, right?', answer: 'Tuna smell fades within an hour. Persistent odour = dental disease.' },
    { question: 'Will dental treats fix bad breath?', answer: 'Only mildly. They don\'t replace scaling or address existing disease.' },
    { question: 'Can kidney disease really smell like ammonia?', answer: 'Yes — urea builds up in blood and is excreted into the mouth.' },
    { question: 'Is sweet breath really an emergency?', answer: 'In a cat showing other diabetic signs (drinking, urinating more, weight loss), yes — same-day vet.' },
  ],
  seo: { metaTitle: 'Cat Bad Breath (Halitosis) Malaysia | What It Really Means', metaDescription: 'Bad breath in cats is rarely just food. Causes: dental disease, kidney, diabetes. Costs (RM60–RM4,500) and when to see the vet in Malaysia.', keywords: ['cat bad breath Malaysia', 'cat halitosis', 'cat smell mouth'] },
});

const enCleaning = mkArticle('dental-cleaning', 'treatments', 'Treatments', {
  title: 'Cat Dental Cleaning: What Happens Under Anaesthesia',
  snippetForAI: 'Professional cat dental cleaning requires general anaesthesia and includes pre-anaesthetic bloodwork, full mouth dental X-rays, ultrasonic scaling above and below the gum line, polishing, fluoride application, and extractions of unsalvageable teeth. Total cost in Malaysia: RM350–RM800 for basic cleaning, plus RM150–RM450 per extraction.',
  tldr: ['General anaesthesia is required — "awake cleaning" misses the real disease', 'Pre-anaesthetic bloodwork is standard, not optional', 'X-rays under GA find disease invisible above the gum', 'Cleaning is preventive — extractions add to the cost', 'Annual cleaning from age 2 onwards is recommended'],
  quickFacts: [{ label: 'Anaesthesia Time', value: '45–120 minutes' }, { label: 'Recovery', value: 'Home same day, soft food 24 hours' }, { label: 'Bloodwork', value: 'RM180–RM350 (separate)' }, { label: 'Cleaning Cost', value: 'RM350–RM800' }, { label: 'Frequency', value: 'Annual from age 2' }],
  malaysiaContext: 'Most general clinics in major cities perform feline dental cleaning. Look for clinics with dental X-ray equipment — without it, only half the mouth is being assessed. Major referral hospitals in KL, Penang, and JB have dedicated dental suites.',
  costRange: [{ item: 'Pre-anaesthetic bloodwork', range: 'RM180–RM350' }, { item: 'Anaesthesia + monitoring', range: 'RM200–RM500' }, { item: 'Scaling + polish', range: 'RM350–RM800' }, { item: 'Dental X-rays', range: 'RM150–RM400' }, { item: 'Extractions if needed', range: 'RM150–RM450/tooth' }],
  overview: 'A "dental" in cats is a much bigger procedure than most owners realise. Under anaesthesia, the vet can probe every tooth, X-ray the roots, and clean below the gum line where 70% of disease lives. Awake cleanings miss all of this.',
  sections: [
    { heading: 'What Happens Step by Step', body: '1) Pre-anaesthetic exam and bloodwork. 2) IV catheter and fluids placed. 3) Anaesthesia induction and intubation. 4) Full oral exam and charting. 5) Full-mouth dental X-rays. 6) Ultrasonic scaling above and below gum line. 7) Polishing. 8) Extractions of any unsalvageable teeth. 9) Recovery with monitoring.' },
    { heading: 'Why X-Rays Are Non-Negotiable', body: 'Most cat dental disease — root abscess, FORL, hidden fractures — is invisible without dental X-rays. Cleaning without X-ray misses the painful problems.' },
  ],
  bulletSections: [{ heading: 'Before the Appointment', items: ['Fast cat 6–8 hours (water OK)', 'Bring vaccination record', 'Inform vet of any medications', 'Plan a quiet recovery area at home', 'Have soft food ready for 24–48 hours'] }],
  whenToSeeVet: 'Schedule annual cleaning from age 2. Sooner if bad breath, gum redness, or eating changes appear.',
  keyTakeaways: ['Awake dentistry is inadequate', 'X-rays under GA are essential', 'Bloodwork keeps anaesthesia safe', 'Extractions add cost but prevent chronic pain'],
  faqs: [
    { question: 'Is anaesthesia risky for older cats?', answer: 'Modern protocols with bloodwork screening make it safe for most older cats. The risk of leaving dental disease untreated often exceeds the anaesthesia risk.' },
    { question: 'How long does the cat take to recover?', answer: 'Most cats are home the same evening, fully alert by next day. Soft food for 1–2 days after.' },
    { question: 'Can I just brush instead of professional cleaning?', answer: 'Brushing prevents NEW plaque but cannot remove existing tartar or treat existing disease. Both are needed.' },
    { question: 'Will my cat be in pain after?', answer: 'Minimal pain after scaling alone. Extractions: pain medication for 5–7 days; most cats are comfortable within 48 hours.' },
  ],
  seo: { metaTitle: 'Cat Dental Cleaning Malaysia | What to Expect, Costs', metaDescription: 'What happens during a cat dental cleaning under anaesthesia in Malaysia. Costs (RM350–RM800), X-rays, recovery, and why awake dentistry fails.', keywords: ['cat dental cleaning Malaysia', 'cat scaling cost', 'cat anaesthesia dental'] },
});

const enHomeCare = mkArticle('home-care', 'prevention', 'Prevention', {
  title: 'Home Dental Care for Cats: Brushing, Diet & What Works',
  snippetForAI: 'Effective home dental care for cats includes daily tooth brushing with cat-specific enzymatic toothpaste, VOHC-accepted dental diet kibble, water additives, and dental treats. Brushing is the gold standard. Never use human toothpaste — fluoride is toxic to cats. Start home care gradually from kittenhood for best acceptance.',
  tldr: ['Daily brushing is gold standard — even 3x/week helps', 'Never human toothpaste (fluoride toxic)', 'VOHC seal = scientifically proven dental product', 'Start young — adult cats are harder to train', 'Home care supplements, not replaces, professional cleaning'],
  quickFacts: [{ label: 'Best Frequency', value: 'Daily; minimum 3x/week' }, { label: 'Toothpaste Cost', value: 'RM35–RM80' }, { label: 'Dental Diet (monthly)', value: 'RM80–RM200' }, { label: 'Water Additive', value: 'RM45–RM100/month' }],
  overview: 'Home dental care is the single biggest thing Malaysian cat owners can do between professional cleanings. Daily brushing, even with imperfect technique, dramatically slows plaque buildup. The key is making it positive — never a fight.',
  sections: [
    { heading: 'How to Start Brushing', body: 'Week 1: let cat lick the toothpaste from your finger. Week 2: gently rub gums with finger + paste. Week 3: introduce a finger brush or small cat toothbrush. Week 4+: gentle circular motions on outer tooth surfaces (cats don\'t need inner surfaces brushed — tongue handles those).' },
    { heading: 'What Doesn\'t Work', body: 'Hard treats and bones can fracture teeth. "Anaesthesia-free dentistry" stresses the cat and misses below-gum disease. Generic "dental" treats without VOHC seal have no proven benefit.' },
  ],
  bulletSections: [
    { heading: 'What to Look For in Products', items: ['VOHC (Veterinary Oral Health Council) seal', 'Cat-specific formulation (poultry/seafood flavour)', 'Enzymatic toothpaste (not foaming human-style)', 'Soft-bristled brush sized for cat mouth'] },
    { heading: 'Avoid', items: ['Human toothpaste (fluoride toxic)', 'Hard plastic chew toys (fractures)', 'Real bones (raw or cooked)', '"Anaesthesia-free dentistry" services'] },
  ],
  whenToSeeVet: 'Schedule annual cleaning regardless of home care quality. Sooner if any bad breath, drooling, or gum redness develops.',
  keyTakeaways: ['Brushing daily is best, 3x/week is acceptable', 'Cat-specific toothpaste only', 'Start positive, stop if cat resists', 'Home care never replaces professional cleaning'],
  faqs: [
    { question: 'My cat hates brushing — what now?', answer: 'Try water additives, dental kibble, and VOHC dental treats. Less effective than brushing but better than nothing.' },
    { question: 'Are dental treats enough?', answer: 'No — they reduce plaque slightly but don\'t replace brushing or professional cleaning.' },
    { question: 'How young can I start brushing?', answer: 'From kittenhood (around 12 weeks). The earlier, the better the acceptance.' },
    { question: 'Are water additives safe?', answer: 'Look for VOHC seal — those are tested for safety and efficacy. Skip products that change water taste so much the cat drinks less.' },
  ],
  seo: { metaTitle: 'Cat Home Dental Care Malaysia | Brushing, Diet, Products', metaDescription: 'How to care for your cat\'s teeth at home in Malaysia. Brushing, dental diet, water additives, what works and what doesn\'t. Cat-safe products only.', keywords: ['cat tooth brushing Malaysia', 'cat dental care home', 'cat dental diet'] },
});

const enEmergency = mkArticle('emergency-signs', undefined, 'Emergency', {
  title: 'Cat Dental Emergency Signs: When to See the Vet Today',
  snippetForAI: 'Cat dental emergency signs include: refusal to eat >24 hours (risk of fatal hepatic lipidosis), severe drooling (especially with blood), visible facial swelling, fractured tooth with exposed pulp, bleeding from the mouth, and pawing at the face. Cats hide pain — by the time owners notice, disease is advanced. WhatsApp +60 11-5695 9227 for triage.',
  tldr: ['Cat not eating >24 hours = emergency (hepatic lipidosis risk)', 'Facial swelling = abscess, vet today', 'Bloody drooling = serious oral disease', 'Visible broken tooth = pulp exposure, vet today', 'WhatsApp +60 11-5695 9227 for triage'],
  quickFacts: [{ label: 'Most Time-Sensitive', value: 'Cat refusing food >24 hours' }, { label: 'After-Hours Consult', value: 'RM150–RM400' }, { label: 'Emergency Dental', value: 'RM800–RM3,500' }],
  malaysiaContext: 'Cats develop hepatic lipidosis (fatty liver) within 2–3 days of not eating — a fatal condition without aggressive treatment. KL, Selangor, Penang, and JB have 24-hour vet clinics. WhatsApp Pet Care Malaysia at +60 11-5695 9227 for triage guidance.',
  hasEmergencyOverride: true,
  overview: 'Cats are masters at hiding mouth pain. By the time an owner notices, the problem is usually significant. This page lists the absolute red flags that mean "vet today, not next week."',
  sections: [
    { heading: 'Why Not Eating Is the #1 Emergency', body: 'Cats that stop eating for 2–3 days can develop hepatic lipidosis — fat floods the liver and it stops functioning. Without IV nutritional support and feeding tubes, this is fatal. Any cat not eating for 24 hours = vet TODAY.' },
    { heading: 'Recognising a Dental Abscess', body: 'Visible facial swelling (usually below the eye), warm to touch, sometimes with a draining tract or pus. Caused by infected tooth root. Requires extraction and antibiotics urgently.' },
  ],
  bulletSections: [
    { heading: 'Go-To-Vet-Now Signs', redFlag: true, items: ['Not eating for >24 hours', 'Severe drooling, especially with blood', 'Facial swelling (below eye or jaw)', 'Visible fractured tooth with pulp exposed', 'Pawing at face repeatedly', 'Hiding, withdrawn behaviour combined with mouth signs', 'Bleeding from the mouth'] },
    { heading: 'Bring to the Emergency Vet', items: ['Photo of any visible mouth/face issue', 'List of medications', 'Vaccination record', 'Diet history (especially when cat last ate)', 'Phone for follow-up'] },
  ],
  whenToSeeVet: 'Immediately for any red-flag sign. If unsure, WhatsApp +60 11-5695 9227 for triage — but never delay if the cat is not eating, drooling blood, or has facial swelling.',
  keyTakeaways: ['Know your 24-hour vet BEFORE an emergency', 'Cat not eating 24h = emergency, not "fussy"', 'Facial swelling = abscess until proven otherwise', 'WhatsApp +60 11-5695 9227 for triage'],
  faqs: [
    { question: 'My cat is just being "picky" — really emergency?', answer: 'Cats genuinely fussy still eat treats. Cats that refuse ALL food including favourite treats are sick — vet today.' },
    { question: 'How much does after-hours dental care cost?', answer: 'Consult RM150–RM400. Emergency dental procedures RM800–RM3,500. Hospitalisation for hepatic lipidosis RM2,000–RM6,000+.' },
    { question: 'Can I just give pain medicine and wait?', answer: 'NEVER — most human pain meds (paracetamol especially) are fatally toxic to cats. Even small doses kill.' },
    { question: 'Is facial swelling always dental?', answer: 'Most often yes (tooth root abscess), but could also be bite wound abscess or rarely a tumour. Either way — vet today.' },
  ],
  seo: { metaTitle: 'Cat Dental Emergency Signs Malaysia | When to Rush', metaDescription: 'When cat dental issues become emergencies in Malaysia: not eating, facial swelling, bloody drool. WhatsApp helpline +60 11-5695 9227.', keywords: ['cat dental emergency Malaysia', 'cat not eating', 'cat facial swelling', 'cat tooth abscess'] },
});

// MS + ZH compact translations
const msMake = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'ms', author: AUTHOR_MS, relatedLinks: RELATED_MS, ...overrides } as AuthorityPage);
const zhMake = (en: AuthorityPage, overrides: Partial<AuthorityPage>): AuthorityPage =>
  ({ ...en, lang: 'zh', author: AUTHOR_ZH, relatedLinks: RELATED_ZH, ...overrides } as AuthorityPage);

const msHub: AuthorityPage = {
  ...enHub, lang: 'ms', author: AUTHOR_MS, relatedLinks: RELATED_MS,
  title: 'Penyakit Pergigian Kucing di Malaysia: Gingivitis, Resorpsi Gigi & FORL',
  snippetForAI: 'Penyakit pergigian kucing menjejaskan sekitar 70% kucing berusia 3 tahun ke atas. Keadaan paling biasa: gingivitis, penyakit periodontal, resorpsi gigi felin (FORL), stomatitis, dan patah gigi. Kucing pandai menyembunyi sakit. Kebanyakan kes perlu pemeriksaan vet dengan ubat bius; kos rawatan RM350–RM4,500.',
  tldr: ['~70% kucing >3 tahun ada penyakit pergigian', 'Kucing sembunyi sakit — air liur, jatuh makanan, turun berat = tanda lewat', 'FORL menjejaskan sehingga 60% kucing tua', 'Stomatitis sering perlu cabut semua gigi', 'Jangan berus mulut yang sakit tanpa vet dahulu'],
  malaysiaContext: 'Diet basah biasa di rumah Malaysia, sedikit mempercepatkan plak. Kucing keluar lebih banyak patah gigi dari pergaduhan. Kucing FIV-positif (biasa di populasi pemulihan) lebih tinggi risiko stomatitis. Klinik utama di Lembah Klang, Pulau Pinang dan JB menawarkan pembersihan dan cabut gigi.',
  overview: 'Kucing terkenal menyembunyi sakit. Apabila pemilik perasan sesuatu salah dengan mulut — air liur, jatuh makanan, bau busuk, turun berat — biasanya sudah ada penyakit yang serius. Masalah pergigian kucing adalah keadaan paling kurang didiagnosis dalam amalan felin.',
  categoryCards: enHub.categoryCards!.map(c => ({ ...c, path: c.path.replace('/cat-dental-disease', '/ms/cat-dental-disease') })),
  emergencyBanner: { text: 'Kucing enggan makan >24 jam, air liur teruk dengan darah, atau bengkak muka? Ini kecemasan — kucing cepat terkena hepatic lipidosis.', linkText: 'Lihat Tanda Kecemasan', linkPath: '/cat-dental-disease/emergency-signs' },
  faqs: [
    { question: 'Kucing saya benar-benar perlu bius untuk pembersihan?', answer: 'Ya — pembersihan betul memerlukan X-ray, pemeriksaan, dan pembersihan bawah gusi yang tidak boleh dibuat sedar.' },
    { question: 'Kucing saya makan baik — bermaksud mulut sihat?', answer: 'Tidak. Kucing sering makan melalui sakit yang teruk. FORL khususnya boleh maju sebelum perubahan makan.' },
    { question: 'Berapa kos prosedur pergigian penuh di Malaysia?', answer: 'Pembersihan sahaja RM350–RM800. Dengan X-ray tambah RM150–RM400. Cabut: RM150–RM450 setiap satu. Cabut semua gigi: RM2,000–RM4,500.' },
    { question: 'Adakah bius selamat untuk kucing tua?', answer: 'Ya, dengan ujian darah pra-bius normal. Risiko penyakit pergigian tidak dirawat sering lebih tinggi.' },
    { question: 'Boleh saya berus gigi kucing?', answer: 'Ya — dengan ubat gigi khusus kucing (jangan ubat gigi manusia — fluorida toksik).' },
  ],
  seo: { metaTitle: 'Penyakit Pergigian Kucing Malaysia | Gingivitis, FORL, Hub', metaDescription: 'Panduan disemak vet untuk penyakit pergigian kucing di Malaysia: gingivitis, resorpsi gigi, stomatitis, kos (RM), tanda kecemasan.', keywords: ['pergigian kucing Malaysia', 'gingivitis kucing', 'FORL kucing', 'stomatitis kucing'] },
};

const zhHub: AuthorityPage = {
  ...enHub, lang: 'zh', author: AUTHOR_ZH, relatedLinks: RELATED_ZH,
  title: '马来西亚猫牙科疾病：牙龈炎、牙齿吸收与FORL',
  snippetForAI: '猫牙科疾病影响约70%的3岁以上猫。最常见的疾病是牙龈炎、牙周病、猫牙齿吸收（FORL）、口炎和牙折。猫善于隐藏疼痛——主人通常只在猫停止吃干粮时才注意到。大多数病例需要兽医在镇静下诊断；马来西亚治疗费用RM350–RM4,500。',
  tldr: ['约70%的3岁以上猫有牙科疾病', '猫隐藏疼痛——流口水、掉食物、体重下降是晚期征兆', '牙齿吸收（FORL）影响高达60%老年猫', '猫口炎通常需要全口拔牙', '未经兽医检查不要刷疼痛的嘴'],
  malaysiaContext: '马来西亚家庭常见湿粮饮食，略微增加牙菌斑。自由活动的猫因打斗承受更多牙折。FIV阳性猫（救助群体中更常见）口炎率较高。大多数主要诊所提供洁牙和拔牙。',
  overview: '猫以隐藏疼痛而闻名。当马来西亚猫主人注意到嘴有问题时——流口水、掉食物、口臭、体重下降——通常已经有明显的疾病。猫牙科问题是猫科实践中最未被诊断的疾病。',
  categoryCards: enHub.categoryCards!.map(c => ({ ...c, path: c.path.replace('/cat-dental-disease', '/zh/cat-dental-disease') })),
  emergencyBanner: { text: '猫拒食>24小时、严重流口水带血、或可见面部肿胀？这是紧急情况——猫迅速发展肝脂沉积症。', linkText: '查看紧急信号', linkPath: '/cat-dental-disease/emergency-signs' },
  faqs: [
    { question: '我的猫真的需要麻醉来洁牙吗？', answer: '是——正确的洁牙需要X光、探查和龈下清洁，无法在清醒状态下完成。' },
    { question: '我的猫吃得很好——意味着嘴健康吗？', answer: '不。猫经常忍痛进食。FORL尤其可在任何饮食改变前进展。' },
    { question: '马来西亚完整牙科手术费用是多少？', answer: '仅洁牙RM350–RM800。加X光：再RM150–RM400。每次拔牙：RM150–RM450。全口拔牙：RM2,000–RM4,500。' },
    { question: '麻醉对老猫安全吗？', answer: '是，术前血液检查正常时。未治疗牙科疾病的风险通常超过麻醉风险。' },
    { question: '我可以刷猫的牙吗？', answer: '是——使用猫专用牙膏（绝不用人用——氟化物有毒）。' },
  ],
  seo: { metaTitle: '马来西亚猫牙科疾病 | 牙龈炎、FORL、口炎中心', metaDescription: '马来西亚猫牙科疾病的兽医审查指南：牙龈炎、牙齿吸收、口炎、费用（RM）、紧急信号。', keywords: ['猫牙科疾病马来西亚', '猫牙龈炎', 'FORL猫', '猫口炎'] },
};

const msArticles = [enGingivitis, enResorption, enStomatitis, enFracture, enBadBreath, enCleaning, enHomeCare, enEmergency].map(en =>
  msMake(en, { title: `[MS] ${en.title}`, overview: en.overview, snippetForAI: en.snippetForAI })
);
const zhArticles = [enGingivitis, enResorption, enStomatitis, enFracture, enBadBreath, enCleaning, enHomeCare, enEmergency].map(en =>
  zhMake(en, { title: `[ZH] ${en.title}`, overview: en.overview, snippetForAI: en.snippetForAI })
);

export const catDentalConfig: AuthorityHubConfig = {
  basePath: CAT_DENTAL_BASE_PATH,
  pages: [
    enHub, enGingivitis, enResorption, enStomatitis, enFracture, enBadBreath, enCleaning, enHomeCare, enEmergency,
    msHub, ...msArticles,
    zhHub, ...zhArticles,
  ],
};

export default catDentalConfig;

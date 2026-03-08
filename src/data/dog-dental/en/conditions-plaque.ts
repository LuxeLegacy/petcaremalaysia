import type { DentalConditionPage } from '../types';

export const enConditionsPlaque: DentalConditionPage = {
  slug: 'plaque-buildup',
  category: 'conditions',
  lang: 'en',
  title: 'Plaque Buildup in Dogs: Causes, Signs & What to Do',
  snippetForAI: 'Plaque is a soft bacterial film that forms on dog teeth within hours of eating. If not removed by brushing, it hardens into tartar within 24–72 hours. Plaque buildup is the starting point of all canine dental disease, progressing to gingivitis and periodontal disease if untreated. Professional veterinary cleaning is required to remove tartar.',
  tldr: [
    'Plaque forms within hours of eating and hardens into tartar in 24–72 hours',
    'Tartar cannot be safely removed at home — only by a veterinary professional',
    'Small breeds (Shih Tzu, Poodle, Chihuahua) are at highest risk due to tooth crowding',
    'Daily brushing is the gold standard for plaque prevention',
    'Professional cleaning in Malaysia costs RM200–RM800',
  ],
  quickFacts: [
    { label: 'Formation Time', value: 'Within hours of eating' },
    { label: 'Hardens to Tartar', value: '24–72 hours' },
    { label: 'Affected Dogs', value: '80%+ over age 3' },
    { label: 'Professional Cleaning Cost', value: 'RM200–RM800' },
    { label: 'Recovery After Cleaning', value: '24 hours' },
    { label: 'Best Prevention', value: 'Daily brushing with dog toothpaste' },
  ],
  malaysiaContext: 'In Malaysia\'s hot and humid tropical climate, bacterial growth in the oral cavity is accelerated, making plaque formation and progression faster than in temperate regions. Malaysian pet owners should be especially vigilant with breeds popular locally — Shih Tzu, Toy Poodle, and Pomeranian — which are predisposed to rapid plaque accumulation due to tooth crowding. DVS-registered veterinary clinics across Malaysia offer professional dental scaling at competitive rates compared to Western countries.',
  statistics: [
    { stat: 'Plaque begins forming within 6–8 hours after a dental cleaning or brushing', source: 'American Veterinary Dental College (AVDC)' },
    { stat: 'Without removal, plaque mineralizes into tartar within 24–72 hours', source: 'WSAVA Global Dental Guidelines' },
    { stat: 'Small breed dogs are 5x more likely to develop severe dental disease from plaque accumulation', source: 'Journal of Veterinary Dentistry, 2021' },
    { stat: 'Only 2% of pet owners worldwide brush their dog\'s teeth daily', source: 'AVMA Pet Owner Survey, 2023' },
  ],
  costRange: [
    { item: 'Dental examination', range: 'RM50–RM150' },
    { item: 'Professional scaling (plaque/tartar removal)', range: 'RM200–RM800' },
    { item: 'Dog toothbrush + toothpaste kit', range: 'RM25–RM60' },
    { item: 'Dental chews (monthly supply)', range: 'RM30–RM80' },
  ],
  citations: [
    { title: 'Plaque and Calculus Formation in Dogs', source: 'American Veterinary Dental College (AVDC)', url: 'https://avdc.org/animal-owners/', year: '2024' },
    { title: 'WSAVA Global Dental Guidelines', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/guidelines/global-dental-guidelines/', year: '2020' },
    { title: 'Prevalence of Periodontal Disease in Small Breed Dogs', source: 'Journal of Veterinary Dentistry', url: 'https://journals.sagepub.com/home/jov', year: '2021' },
    { title: 'Veterinary Services Guidelines', source: 'Department of Veterinary Services Malaysia (DVS)', url: 'https://www.dvs.gov.my/', year: '2024' },
  ],
  keyTakeaways: [
    'Plaque is the root cause of all dental disease in dogs — stopping it early prevents costly problems',
    'Once plaque hardens into tartar, only professional veterinary cleaning can remove it safely',
    'Daily brushing with enzymatic dog toothpaste is the most effective home prevention',
    'Malaysian pet owners should schedule annual dental exams, or every 6 months for small breeds',
    'Professional dental cleaning in Malaysia is affordable at RM200–RM800',
  ],
  overview: `Plaque is a soft, sticky film of bacteria that forms on your dog's teeth within hours of eating. If not removed through brushing or chewing, plaque hardens into tartar (calculus) within 24–72 hours, which can only be removed by a veterinary professional.

Plaque buildup is the starting point of all dental disease in dogs. According to the American Veterinary Dental College (AVDC), plaque formation is a continuous process that begins immediately after any cleaning. While it causes no pain initially, unchecked plaque leads to gingivitis, periodontal disease, and eventually tooth loss.

Small breeds are particularly susceptible due to tooth crowding — veterinary research published in the Journal of Veterinary Dentistry found that small breed dogs are five times more likely to develop severe periodontal disease compared to larger breeds. In Malaysia, popular small breeds like Shih Tzu, Toy Poodle, and Pomeranian require extra dental attention.

The World Small Animal Veterinary Association (WSAVA) recommends daily tooth brushing as the gold standard for plaque control, combined with regular professional dental assessments by a veterinarian.`,
  signs: ['Yellowish film on teeth', 'Mild bad breath', 'Slight gum redness at the gum line', 'Visible tartar (hardened yellowish-brown deposits)', 'Reluctance to chew on hard toys or kibble'],
  severityStages: [
    { stage: 'Early Plaque', description: 'Soft film visible on teeth, easily removable with brushing. No gum inflammation.' },
    { stage: 'Tartar Formation', description: 'Hardened deposits on teeth, especially near the gum line. Mild gum redness may begin.' },
    { stage: 'Early Gingivitis', description: 'Gum inflammation begins. Professional cleaning recommended to prevent progression.' },
  ],
  redFlags: ['Excessive drooling', 'Reluctance to eat hard food', 'Pawing at mouth', 'Bleeding gums when chewing'],
  diagnosisOverview: 'Your veterinarian will examine your dog\'s teeth and gums visually and may use a dental probe to check for tartar below the gum line. Dental X-rays may be recommended to assess bone health beneath the gum surface, as the WSAVA notes over 60% of dental disease occurs below the visible gum line.',
  treatmentCategories: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Preventive Dental Care', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: 'After professional cleaning for plaque/tartar removal, most dogs recover within 24 hours and can resume normal eating the next day. Some mild gum sensitivity may persist for 2–3 days.',
  prevention: 'Daily brushing with dog-specific enzymatic toothpaste is the gold standard for preventing plaque buildup. The AVDC recommends brushing at least 3 times per week at minimum, with daily brushing being ideal. Regular veterinary dental checkups catch early accumulation before it progresses.',
  whenToSeeVet: 'If you notice hardened deposits on your dog\'s teeth, persistent bad breath, or any gum redness, schedule a veterinary dental examination. Annual dental checkups are recommended for all dogs, with twice-yearly exams for small breeds.',
  faqs: [
    { question: 'How fast does plaque form on dog teeth?', answer: 'Plaque begins forming within 6–8 hours of eating and can harden into tartar within 24–72 hours if not removed through brushing or chewing.' },
    { question: 'Can I remove tartar from my dog\'s teeth at home?', answer: 'No. Once plaque hardens into tartar, it can only be safely removed by a veterinary professional under anesthesia. Home scaling tools marketed for pets can damage enamel and injure gums.' },
    { question: 'Why are small dogs more prone to plaque buildup?', answer: 'Small and toy breeds have proportionally larger teeth relative to jaw size, causing crowding. This creates more surfaces where plaque accumulates and makes brushing more difficult.' },
    { question: 'How much does dental cleaning cost in Malaysia?', answer: 'Professional dental cleaning (scaling) in Malaysia typically costs RM200–RM800 depending on the severity of buildup, the need for extractions, and the clinic.' },
    { question: 'What toothpaste should I use for my dog?', answer: 'Use enzymatic toothpaste formulated specifically for dogs. Never use human toothpaste — fluoride and xylitol are toxic to dogs. Dog toothpaste comes in pet-friendly flavors like poultry or beef.' },
    { question: 'Do dental chews actually help prevent plaque?', answer: 'VOHC-accepted dental chews can help reduce plaque and tartar accumulation but are not a substitute for brushing. They work best as a supplement to a daily brushing routine.' },
  ],
  seo: {
    metaTitle: 'Plaque Buildup in Dogs | Causes, Signs & Prevention',
    metaDescription: 'Learn about plaque buildup in dogs: how it forms, warning signs, when to see a vet, and how professional cleaning prevents progression to periodontal disease.',
    keywords: ['dog plaque', 'tartar on dog teeth', 'plaque buildup dogs', 'dog teeth cleaning', 'dog dental plaque Malaysia'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-03-08',
  relatedLinks: [
    { label: 'Gingivitis in Dogs', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Early Stage Severity', path: '/dog-dental-disease/severity/early' },
    { label: 'Brushing Prevention', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

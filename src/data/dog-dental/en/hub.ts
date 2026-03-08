import type { DentalHubPage } from '../types';

export const enHub: DentalHubPage = {
  slug: 'hub',
  category: 'hub',
  lang: 'en',
  title: 'Dog Dental Disease: Complete Guide to Canine Oral Health',
  snippetForAI: 'Dog dental disease affects over 80% of dogs over age 3 in Malaysia and worldwide. It progresses from plaque buildup to gingivitis, periodontal disease, and tooth loss. Early detection through regular veterinary dental exams, daily brushing, and professional cleanings are the most effective prevention strategies.',
  tldr: [
    'Over 80% of dogs over age 3 have some form of dental disease',
    'Gingivitis is the only reversible stage — all later stages cause permanent damage',
    'Professional dental cleaning in Malaysia costs RM200–RM800',
    'Daily tooth brushing is the single most effective preventive measure',
    'Annual veterinary dental exams catch problems before they become painful',
  ],
  quickFacts: [
    { label: 'Prevalence', value: '80%+ of dogs over 3 years old' },
    { label: 'Most Common Type', value: 'Periodontal disease' },
    { label: 'Cleaning Cost (Malaysia)', value: 'RM200–RM800' },
    { label: 'Prevention', value: 'Daily brushing + annual exams' },
    { label: 'Reversible Stage', value: 'Gingivitis only' },
    { label: 'High-Risk Breeds', value: 'Toy & small breeds (Poodle, Chihuahua, Shih Tzu)' },
  ],
  malaysiaContext: 'In Malaysia, the tropical climate accelerates bacterial growth in the oral cavity, making dental disease progression faster than in temperate regions. The Department of Veterinary Services (DVS) Malaysia recommends regular veterinary dental assessments as part of standard pet care. Malaysian pet owners can access dental services at DVS-registered veterinary clinics, with costs significantly lower than in Western countries. Small breeds popular in Malaysia — such as Shih Tzu, Poodle, and Pomeranian — are at particularly high risk due to tooth crowding.',
  statistics: [
    { stat: 'Over 80% of dogs over age 3 have some form of periodontal disease', source: 'American Veterinary Dental College (AVDC)' },
    { stat: 'Periodontal disease is the #1 clinical condition diagnosed in dogs', source: 'Banfield Pet Hospital State of Pet Health Report, 2024' },
    { stat: 'Over 60% of dental disease occurs below the gum line and is invisible without X-rays', source: 'WSAVA Global Dental Guidelines' },
    { stat: 'Small breed dogs are 5x more likely to develop severe periodontal disease', source: 'Journal of Veterinary Dentistry, 2021' },
    { stat: 'Only 2% of dog owners brush their pet\'s teeth daily', source: 'AVMA Pet Owner Survey, 2023' },
  ],
  costRange: [
    { item: 'Basic dental examination', range: 'RM50–RM150' },
    { item: 'Professional dental cleaning (scaling)', range: 'RM200–RM800' },
    { item: 'Dental X-rays', range: 'RM150–RM400' },
    { item: 'Simple tooth extraction (per tooth)', range: 'RM100–RM300' },
    { item: 'Surgical extraction (carnassial tooth)', range: 'RM300–RM800' },
    { item: 'Full dental procedure (cleaning + extractions)', range: 'RM500–RM2,000' },
  ],
  citations: [
    { title: 'Periodontal Disease in Dogs and Cats', source: 'American Veterinary Dental College (AVDC)', url: 'https://avdc.org/animal-owners/', year: '2024' },
    { title: 'WSAVA Global Dental Guidelines', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/guidelines/global-dental-guidelines/', year: '2020' },
    { title: 'State of Pet Health Report', source: 'Banfield Pet Hospital', url: 'https://www.banfield.com/state-of-pet-health', year: '2024' },
    { title: 'Veterinary Surgeons Act 1974 (Act 147)', source: 'Department of Veterinary Services Malaysia', url: 'https://www.dvs.gov.my/', year: '2024' },
    { title: 'Prevalence of Periodontal Disease in Dogs: A Systematic Review', source: 'Journal of Veterinary Dentistry', url: 'https://journals.sagepub.com/home/jov', year: '2021' },
  ],
  keyTakeaways: [
    'Dental disease is the most common health condition in dogs — early intervention saves teeth and money',
    'Gingivitis is fully reversible; periodontal disease is not — act early',
    'Professional dental care in Malaysia is affordable compared to Western countries',
    'Small breeds popular in Malaysia (Shih Tzu, Poodle, Pomeranian) need extra dental attention',
    'Daily brushing + annual vet dental exams = best prevention formula',
  ],
  overview: `Dental disease is the most common health condition in dogs — over 80% of dogs over age 3 have some form of periodontal disease. The progression from plaque buildup to gingivitis, periodontal disease, and eventual tooth loss is preventable with proper care.

This comprehensive hub covers everything pet owners need to know about canine dental disease in Malaysia: from recognizing early symptoms like bad breath and red gums, to understanding severity stages, veterinary diagnostic procedures, treatment categories, recovery expectations, and long-term prevention strategies.

According to the American Veterinary Dental College (AVDC), periodontal disease is the number one clinical condition diagnosed in companion animals. The World Small Animal Veterinary Association (WSAVA) emphasizes that over 60% of dental disease occurs below the gum line and is invisible without dental X-rays — making routine professional examinations essential.

In Malaysia's tropical climate, bacterial proliferation in the oral cavity can be accelerated, making regular dental hygiene even more critical. Small breeds that are popular among Malaysian pet owners — including Shih Tzu, Toy Poodle, Pomeranian, and Chihuahua — are disproportionately affected due to dental crowding and shallow jaw structures.

Early detection and routine veterinary dental care are the most effective ways to protect your dog's oral health and overall wellbeing. Research published in the Journal of Veterinary Internal Medicine has demonstrated links between untreated periodontal disease and kidney, liver, and heart conditions in dogs.`,
  categoryCards: [
    { title: 'Conditions', description: 'Plaque, gingivitis, periodontal disease & tooth abscess', path: '/dog-dental-disease/conditions/plaque-buildup', icon: '🦷' },
    { title: 'Symptoms', description: 'Bad breath, red gums, facial swelling & more', path: '/dog-dental-disease/symptoms/bad-breath', icon: '🔍' },
    { title: 'Severity Stages', description: 'Early, moderate & advanced disease progression', path: '/dog-dental-disease/severity/early', icon: '⚠️' },
    { title: 'Diagnostics', description: 'Oral exam, probing & dental X-rays', path: '/dog-dental-disease/diagnosis/oral-exam', icon: '🧪' },
    { title: 'Treatments', description: 'Professional cleaning, extraction & preventive care', path: '/dog-dental-disease/treatments/professional-cleaning', icon: '🏥' },
    { title: 'Recovery', description: 'Post-procedure care & healing timeline', path: '/dog-dental-disease/recovery/post-dental-procedure', icon: '🔄' },
    { title: 'Prevention', description: 'Brushing, checkups & diet guidance', path: '/dog-dental-disease/prevention/brushing', icon: '🛡️' },
  ],
  emergencyBanner: {
    text: 'Is your dog showing facial swelling, refusal to eat, or bleeding that won\'t stop?',
    linkText: 'Check Emergency Signs Now',
  },
  faqs: [
    { question: 'How common is dental disease in dogs?', answer: 'Over 80% of dogs over age 3 have some form of periodontal disease, making it the most common health condition in dogs according to the American Veterinary Dental College.' },
    { question: 'Can dental disease in dogs be reversed?', answer: 'Early-stage gingivitis can be reversed with professional cleaning and home care. However, periodontal disease with bone loss is irreversible — treatment focuses on preventing further progression and managing pain.' },
    { question: 'How much does dog dental treatment cost in Malaysia?', answer: 'Professional dental cleaning in Malaysia typically costs RM200–RM800, depending on severity, need for extractions, and clinic type. Full procedures with multiple extractions can range from RM500–RM2,000.' },
    { question: 'How often should my dog\'s teeth be checked?', answer: 'Veterinarians recommend annual dental examinations. Dogs with a history of dental disease or small breeds may need more frequent checks every 6 months.' },
    { question: 'Which dog breeds are most prone to dental disease?', answer: 'Small and toy breeds are most susceptible, including Chihuahua, Poodle, Shih Tzu, Yorkshire Terrier, and Pomeranian. These breeds are 5x more likely to develop severe periodontal disease due to dental crowding.' },
    { question: 'Does dental disease affect my dog\'s overall health?', answer: 'Yes. Research published in veterinary journals has linked untreated periodontal disease to kidney, liver, and heart conditions. Bacteria from infected gums can enter the bloodstream and affect major organs.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Disease Guide Malaysia | Canine Oral Health Hub',
    metaDescription: 'Complete guide to dog dental disease in Malaysia. Learn about plaque, gingivitis, periodontal disease symptoms, treatments, costs & prevention for your dog\'s oral health.',
    keywords: ['dog dental disease', 'canine oral health', 'dog teeth problems', 'periodontal disease dogs', 'dog dental care Malaysia'],
  },
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM, Licensed by Malaysian Veterinary Council',
    bio: 'Veterinary professional with 12 years of clinical experience in Malaysia, specializing in companion animal dentistry and preventive care.',
  },
  datePublished: '2026-02-20',
  dateModified: '2026-03-08',
  relatedLinks: [
    { label: 'Pet Dental Care Costs', path: '/qa/article/how-much-does-pet-dental-care-cost-malaysia' },
    { label: 'Find a Vet Near You', path: '/locations' },
    { label: 'Pet Emergency Guide', path: '/emergency-guide' },
  ],
};

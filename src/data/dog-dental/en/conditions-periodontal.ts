import type { DentalConditionPage } from '../types';

export const enConditionsPeriodontal: DentalConditionPage = {
  slug: 'periodontal-disease',
  category: 'conditions',
  lang: 'en',
  title: 'Periodontal Disease in Dogs: Stages, Signs & Treatment Options',
  snippetForAI: 'Periodontal disease is the progressive, irreversible destruction of tooth-supporting structures in dogs, affecting over 80% of dogs over age 3. It progresses through 4 stages from gingivitis to advanced bone loss exceeding 50%. Treatment includes professional cleaning, tooth extraction, and pain management. Only Stage 1 (gingivitis) is reversible.',
  tldr: [
    'Most common disease in adult dogs — affects 80%+ over age 3',
    'Four stages: gingivitis → early bone loss → moderate → advanced (50%+ bone loss)',
    'Only Stage 1 (gingivitis) is reversible; Stages 2–4 cause permanent damage',
    'Over 60% of the disease occurs below the gum line — dental X-rays are essential',
    'Linked to systemic health issues: heart, kidney, and liver disease',
  ],
  quickFacts: [
    { label: 'Prevalence', value: '80%+ of dogs over age 3' },
    { label: 'Stages', value: '4 stages (gingivitis → advanced)' },
    { label: 'Reversible Stages', value: 'Stage 1 only' },
    { label: 'Below-Gum Disease', value: '60%+ invisible without X-rays' },
    { label: 'Treatment Cost (Malaysia)', value: 'RM500–RM2,000+ for full procedure' },
    { label: 'Recovery (Extractions)', value: '5–14 days soft food' },
  ],
  malaysiaContext: 'Periodontal disease is the most commonly diagnosed condition in Malaysian veterinary dental practice. The tropical climate accelerates bacterial proliferation, and breeds popular in Malaysia — Shih Tzu, Toy Poodle, Pomeranian, and Chihuahua — are genetically predisposed due to dental crowding. The Department of Veterinary Services (DVS) Malaysia and the Malaysian Veterinary Council regulate veterinary dental procedures, ensuring pet owners have access to professional dental care at registered clinics across all major cities. Treatment costs in Malaysia are substantially lower than in Western countries, making professional dental care accessible to most pet owners.',
  statistics: [
    { stat: 'Periodontal disease is the #1 clinical condition diagnosed in dogs worldwide', source: 'Banfield Pet Hospital State of Pet Health Report, 2024' },
    { stat: 'Over 60% of periodontal disease occurs below the gum line and requires X-rays for detection', source: 'WSAVA Global Dental Guidelines' },
    { stat: 'Dogs with untreated periodontal disease have 6x higher risk of endocarditis (heart valve infection)', source: 'Journal of Veterinary Internal Medicine, 2019' },
    { stat: 'Small breeds develop periodontal disease at 5x the rate of large breeds', source: 'Journal of Veterinary Dentistry, 2021' },
    { stat: 'Stage 3–4 periodontal disease requires tooth extraction in 70%+ of cases', source: 'AVDC Position Statement on Periodontal Disease' },
  ],
  costRange: [
    { item: 'Full dental assessment (exam + X-rays)', range: 'RM200–RM500' },
    { item: 'Professional cleaning (Stage 1–2)', range: 'RM200–RM800' },
    { item: 'Simple extraction (per tooth)', range: 'RM100–RM300' },
    { item: 'Surgical extraction (carnassial tooth)', range: 'RM300–RM800' },
    { item: 'Full dental procedure (cleaning + multiple extractions)', range: 'RM500–RM2,000' },
    { item: 'Antibiotic therapy course', range: 'RM50–RM150' },
  ],
  citations: [
    { title: 'Periodontal Disease in Dogs and Cats', source: 'American Veterinary Dental College (AVDC)', url: 'https://avdc.org/animal-owners/', year: '2024' },
    { title: 'WSAVA Global Dental Guidelines', source: 'World Small Animal Veterinary Association', url: 'https://wsava.org/guidelines/global-dental-guidelines/', year: '2020' },
    { title: 'Association Between Periodontal Disease and Systemic Disease in Dogs', source: 'Journal of Veterinary Internal Medicine', url: 'https://onlinelibrary.wiley.com/journal/19391676', year: '2019' },
    { title: 'State of Pet Health Report', source: 'Banfield Pet Hospital', url: 'https://www.banfield.com/state-of-pet-health', year: '2024' },
    { title: 'Prevalence of Periodontal Disease by Breed Size', source: 'Journal of Veterinary Dentistry', url: 'https://journals.sagepub.com/home/jov', year: '2021' },
  ],
  keyTakeaways: [
    'Periodontal disease is irreversible once bone loss begins — only Stage 1 (gingivitis) can be fully reversed',
    'Dental X-rays under anesthesia are essential because 60%+ of disease is below the gum line',
    'Untreated periodontal disease is linked to heart, kidney, and liver problems',
    'Small breeds popular in Malaysia are 5x more predisposed — schedule more frequent dental exams',
    'Professional treatment in Malaysia (RM500–RM2,000) is affordable compared to Western countries',
  ],
  overview: `Periodontal disease is the progressive destruction of the structures supporting the teeth — including gums, bone, and ligaments. According to the American Veterinary Dental College (AVDC), it is the most common disease in adult dogs, affecting over 80% of dogs over age 3.

The disease progresses through four clinically defined stages: Stage 1 (gingivitis only — fully reversible), Stage 2 (early bone loss up to 25%), Stage 3 (moderate bone loss 25–50%), and Stage 4 (advanced bone loss exceeding 50%). Treatment focuses on slowing progression, managing pain, and extracting severely affected teeth.

The World Small Animal Veterinary Association (WSAVA) emphasizes that over 60% of periodontal disease occurs below the gum line, making it invisible during routine oral examination. This is why dental X-rays under anesthesia are considered essential for accurate staging and treatment planning.

Research published in the Journal of Veterinary Internal Medicine has demonstrated significant associations between untreated periodontal disease and systemic conditions, including endocarditis (heart valve infection), chronic kidney disease, and hepatic changes. Dogs with severe periodontal disease showed a 6x higher risk of developing endocarditis compared to dogs with healthy teeth.

In Malaysia, periodontal disease is particularly prevalent in toy and small breeds that dominate the local pet population. Veterinary dental services are available at DVS-registered clinics across the country, with treatment costs substantially lower than in Western veterinary markets.`,
  signs: ['Persistent bad breath', 'Loose or missing teeth', 'Receding gums', 'Difficulty eating or dropping food', 'Bleeding gums', 'Nasal discharge (advanced cases)', 'Facial swelling (tooth root abscess)', 'Pus at the gum line', 'Weight loss due to reduced eating'],
  severityStages: [
    { stage: 'Stage 1 — Gingivitis', description: 'Gum inflammation only. No bone loss. Fully reversible with professional cleaning and home care.' },
    { stage: 'Stage 2 — Early Periodontitis', description: 'Up to 25% bone loss visible on X-ray. Mild attachment loss. Professional cleaning can halt progression.' },
    { stage: 'Stage 3 — Moderate Periodontitis', description: '25–50% bone loss. Teeth may become mobile. Extraction may be necessary for severely affected teeth.' },
    { stage: 'Stage 4 — Advanced Periodontitis', description: 'Over 50% bone loss. Severe tooth mobility or tooth loss. Extraction typically required. Risk of jaw fracture in small breeds. Potential systemic complications.' },
  ],
  redFlags: ['Facial swelling or swelling under the eye', 'Refusal to eat for more than 24 hours', 'Blood in water bowl or on toys', 'Sudden behavior changes (hiding, aggression when touched near mouth)', 'Fever or lethargy', 'Nasal discharge or sneezing (may indicate oronasal fistula)'],
  diagnosisOverview: 'Full assessment requires dental X-rays under anesthesia, as over 60% of dental disease occurs below the gum line and is invisible on oral examination alone. Your veterinarian will probe each tooth, measure pocket depths, assess mobility, and grade the disease by stage to create a treatment plan.',
  treatmentCategories: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Antibiotic Therapy', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: 'Recovery depends on treatment performed. Simple cleaning: 1–2 days. Multiple extractions: 5–14 days of soft food and activity restriction. Full healing of extraction sites: 2–4 weeks. Your veterinarian will schedule follow-up examinations to monitor healing.',
  prevention: 'Daily brushing with enzymatic dog toothpaste, annual dental examinations with X-rays, and professional cleanings as recommended by your veterinarian are the best defense against periodontal disease. The AVDC recommends starting dental care early in a dog\'s life.',
  whenToSeeVet: 'Any dog with persistent bad breath, visible tartar, loose teeth, difficulty eating, or gum bleeding should be evaluated by a veterinarian promptly. Dogs over age 3 should have annual dental examinations; small breeds may benefit from biannual checks.',
  faqs: [
    { question: 'Can periodontal disease in dogs be cured?', answer: 'Bone loss from periodontal disease cannot be reversed. Treatment focuses on removing diseased tissue, extracting severely affected teeth, controlling infection, and preventing further progression through professional and home care.' },
    { question: 'Is periodontal disease painful for dogs?', answer: 'Yes, but dogs are experts at hiding pain — it\'s an evolutionary survival instinct. Subtle signs include reluctance to eat hard food, dropping food, head shyness, chewing on one side only, and behavioral changes like withdrawal or irritability.' },
    { question: 'Can periodontal disease affect my dog\'s organs?', answer: 'Yes. Research published in the Journal of Veterinary Internal Medicine shows that bacteria from periodontal disease can enter the bloodstream and affect the heart, kidneys, and liver. Dogs with severe periodontal disease have a 6x higher risk of heart valve infection.' },
    { question: 'How much does periodontal treatment cost in Malaysia?', answer: 'A full dental procedure including cleaning and extractions typically costs RM500–RM2,000 in Malaysia, depending on severity and number of teeth requiring treatment. This is significantly lower than comparable treatment in Western countries.' },
    { question: 'Why does my dog need anesthesia for dental work?', answer: 'Anesthesia is essential for thorough dental assessment and treatment. It allows dental X-rays, probing below the gum line, scaling below the gum margin, and safe extraction of diseased teeth. Non-anesthetic dental procedures are considered cosmetic only and do not address disease below the gum line.' },
    { question: 'At what age should I start worrying about periodontal disease?', answer: 'Start dental care and monitoring early. While clinical periodontal disease typically appears after age 3, plaque accumulation begins immediately. Small breeds may show signs of periodontal disease as early as age 1–2.' },
  ],
  seo: {
    metaTitle: 'Periodontal Disease in Dogs | Stages & Treatment Guide',
    metaDescription: 'Complete guide to periodontal disease in dogs: understand the 4 stages from gingivitis to advanced bone loss, recognize signs, and learn about treatment options in Malaysia.',
    keywords: ['periodontal disease dogs', 'dog gum disease stages', 'dog teeth bone loss', 'canine periodontal treatment', 'dog dental disease Malaysia'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-03-08',
  relatedLinks: [
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Advanced Severity', path: '/dog-dental-disease/severity/advanced' },
  ],
};

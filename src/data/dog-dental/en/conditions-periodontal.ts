import type { DentalConditionPage } from '../types';

export const enConditionsPeriodontal: DentalConditionPage = {
  slug: 'periodontal-disease',
  category: 'conditions',
  lang: 'en',
  title: 'Periodontal Disease in Dogs: Stages, Signs & Treatment Options',
  overview: `Periodontal disease is the progressive destruction of the structures supporting the teeth — including gums, bone, and ligaments. It is the most common disease in adult dogs and is irreversible once bone loss occurs.

The disease progresses through four stages: Stage 1 (gingivitis only), Stage 2 (early bone loss up to 25%), Stage 3 (moderate bone loss 25–50%), and Stage 4 (advanced bone loss exceeding 50%). Treatment focuses on slowing progression and managing pain.`,
  signs: ['Persistent bad breath', 'Loose or missing teeth', 'Receding gums', 'Difficulty eating or dropping food', 'Bleeding gums', 'Nasal discharge (advanced cases)', 'Facial swelling (tooth root abscess)'],
  severityStages: [
    { stage: 'Stage 1 — Gingivitis', description: 'Gum inflammation only. No bone loss. Fully reversible.' },
    { stage: 'Stage 2 — Early Periodontitis', description: 'Up to 25% bone loss on X-ray. Mild attachment loss. Professional cleaning can halt progression.' },
    { stage: 'Stage 3 — Moderate Periodontitis', description: '25–50% bone loss. Teeth may become mobile. Extraction may be necessary for affected teeth.' },
    { stage: 'Stage 4 — Advanced Periodontitis', description: 'Over 50% bone loss. Severe tooth mobility. Extraction typically required. Risk of systemic complications.' },
  ],
  redFlags: ['Facial swelling or swelling under the eye', 'Refusal to eat for more than 24 hours', 'Blood in water bowl or on toys', 'Sudden behavior changes (hiding, aggression when touched near mouth)', 'Fever or lethargy'],
  diagnosisOverview: 'Full assessment requires dental X-rays under anesthesia, as over 60% of dental disease occurs below the gum line and is invisible on oral examination alone.',
  treatmentCategories: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Antibiotic Therapy', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: 'Recovery depends on treatment performed. Simple cleaning: 1–2 days. Multiple extractions: 5–14 days of soft food and activity restriction. Full healing: 2–4 weeks.',
  prevention: 'Daily brushing, annual dental examinations, and professional cleanings as recommended by your veterinarian are the best defense against periodontal disease.',
  whenToSeeVet: 'Any dog with persistent bad breath, visible tartar, loose teeth, or difficulty eating should be evaluated by a veterinarian promptly.',
  faqs: [
    { question: 'Can periodontal disease in dogs be cured?', answer: 'Bone loss from periodontal disease cannot be reversed. Treatment focuses on removing diseased tissue, extracting severely affected teeth, and preventing further progression.' },
    { question: 'Is periodontal disease painful for dogs?', answer: 'Yes, but dogs are experts at hiding pain. Signs include reluctance to eat hard food, dropping food, head shyness, and behavioral changes.' },
  ],
  seo: {
    metaTitle: 'Periodontal Disease in Dogs | Stages & Treatment Guide',
    metaDescription: 'Complete guide to periodontal disease in dogs: understand the 4 stages from gingivitis to advanced bone loss, recognize signs, and learn about treatment options in Malaysia.',
    keywords: ['periodontal disease dogs', 'dog gum disease stages', 'dog teeth bone loss', 'canine periodontal treatment'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Advanced Severity', path: '/dog-dental-disease/severity/advanced' },
  ],
};

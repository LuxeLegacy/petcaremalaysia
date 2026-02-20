import type { DentalConditionPage } from '../types';

export const enConditionsAbscess: DentalConditionPage = {
  slug: 'tooth-root-abscess',
  category: 'conditions',
  lang: 'en',
  title: 'Tooth Root Abscess in Dogs: Signs, Urgency & Treatment',
  overview: `A tooth root abscess is a pocket of infection at the tip of a tooth root, usually caused by advanced periodontal disease or a fractured tooth. It is one of the most painful dental conditions in dogs and requires prompt veterinary attention.

The upper fourth premolar (carnassial tooth) is the most commonly affected tooth. Abscesses of this tooth often cause visible swelling below the eye, which may rupture and drain through the skin.`,
  signs: ['Facial swelling, especially below the eye', 'Swelling that may rupture and drain pus', 'Severe pain — reluctance to eat, head shyness', 'One-sided chewing', 'Pawing at the mouth', 'Fever and lethargy in some cases'],
  severityStages: [
    { stage: 'Developing Abscess', description: 'Internal infection at tooth root. Dog may show subtle pain signs — reluctance to chew on one side.' },
    { stage: 'Acute Abscess', description: 'Visible facial swelling, significant pain, possible fever. Requires urgent veterinary care.' },
    { stage: 'Ruptured Abscess', description: 'Swelling has burst through skin or into nasal cavity. Temporary pain relief but infection persists. Still requires treatment.' },
  ],
  redFlags: ['Swelling under or around the eye', 'Fever or lethargy', 'Complete refusal to eat', 'Pus draining from face or nose', 'Eye discharge on the same side as swelling'],
  diagnosisOverview: 'Dental X-rays under anesthesia are essential for confirming a tooth root abscess and determining the extent of bone involvement.',
  treatmentCategories: [
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Antibiotic Therapy', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pain Management', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: 'After extraction of the abscessed tooth, most dogs show dramatic improvement within 24–48 hours. Full healing of the extraction site takes 2–4 weeks.',
  prevention: 'Regular dental examinations, prompt treatment of fractured teeth, and routine professional cleanings reduce the risk of tooth root abscess.',
  whenToSeeVet: 'Any facial swelling in a dog should be evaluated by a veterinarian urgently — within 24 hours if possible. If accompanied by fever or complete refusal to eat, seek same-day veterinary care.',
  faqs: [
    { question: 'Is a tooth root abscess an emergency?', answer: 'While not immediately life-threatening in most cases, a tooth root abscess is urgent and should be seen by a veterinarian within 24 hours. Facial swelling with fever requires same-day care.' },
    { question: 'Do dogs need the tooth removed for an abscess?', answer: 'In most cases, extraction of the affected tooth is the standard treatment. Root canal therapy is an alternative at some veterinary dental specialist practices.' },
  ],
  seo: {
    metaTitle: 'Tooth Root Abscess in Dogs | Signs & Urgent Care',
    metaDescription: 'Recognize tooth root abscess in dogs: facial swelling, severe pain, and when to seek urgent veterinary care. Learn about treatment and recovery expectations.',
    keywords: ['dog tooth abscess', 'facial swelling dog', 'tooth root infection dog', 'dog dental abscess treatment'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Facial Swelling Symptom', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Tooth Extraction', path: '/dog-dental-disease/treatments/tooth-extraction' },
  ],
};

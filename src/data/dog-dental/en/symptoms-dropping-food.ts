import type { DentalSymptomPage } from '../types';

export const enSymptomsDroppingFood: DentalSymptomPage = {
  slug: 'dropping-food',
  category: 'symptoms',
  lang: 'en',
  title: 'Dog Dropping Food While Eating: Dental Pain Signs',
  overview: `When a dog repeatedly drops food from their mouth while eating, it often indicates oral pain. This behavior — also called "quidding" — suggests that chewing is uncomfortable, typically due to dental disease, a fractured tooth, or oral mass.`,
  whatItIndicates: 'Dropping food usually signals pain during chewing, most commonly from periodontal disease with loose teeth, a tooth root abscess, or a fractured tooth. It can also indicate jaw pain or neurological issues.',
  oralVsOtherCauses: 'Dental pain causes dogs to chew gingerly or drop food from the affected side. Non-dental causes include jaw fracture, temporomandibular joint (TMJ) disorder, or neurological conditions affecting mouth coordination.',
  emergencyRedFlags: ['Complete refusal to eat for more than 24 hours', 'Weight loss from reduced eating', 'Dropping food with facial swelling', 'Blood mixed with food'],
  severityRouting: [
    { label: 'Moderate (occasional dropping)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Advanced (consistent difficulty eating)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'A thorough oral exam under sedation or anesthesia with dental X-rays is typically needed to identify the source of pain causing food dropping.',
  carePathways: [
    { label: 'Could it be periodontal disease?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Could it be a tooth abscess?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Why does my dog spit out food?', answer: 'Dogs spit out or drop food when chewing causes pain. This is often due to loose teeth, infected teeth, or fractured teeth. A veterinary dental evaluation is recommended.' },
  ],
  seo: {
    metaTitle: 'Dog Dropping Food | Dental Pain Signs & Causes',
    metaDescription: 'If your dog drops food while eating, it may signal dental pain from periodontal disease or abscess. Learn the causes and when to seek veterinary care.',
    keywords: ['dog dropping food', 'dog quidding', 'dog eating difficulty', 'dog dental pain signs'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Pawing at Mouth', path: '/dog-dental-disease/symptoms/pawing-at-mouth' },
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
};

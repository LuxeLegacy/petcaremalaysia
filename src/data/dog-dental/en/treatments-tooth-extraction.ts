import type { DentalTreatmentPage } from '../types';

export const enTreatmentsToothExtraction: DentalTreatmentPage = {
  slug: 'tooth-extraction',
  category: 'treatments',
  lang: 'en',
  title: 'Tooth Extraction in Dogs: When & Why It\'s Needed',
  overview: `Tooth extraction is the removal of a diseased, damaged, or non-functional tooth. While it may sound concerning, extraction is often the best option for relieving pain and preventing infection spread. Dogs adapt remarkably well and most show improved quality of life after extraction.`,
  whatItInvolves: 'Under general anesthesia, the veterinarian surgically removes the affected tooth, including all roots. Multi-rooted teeth may need to be sectioned. The extraction site may be sutured. The procedure is guided by dental X-rays.',
  whenRecommended: 'When a tooth has severe periodontal disease with over 50% bone loss, tooth root abscess, fractured tooth with pulp exposure, tooth resorption, or when a tooth is causing pain that cannot be managed otherwise.',
  benefits: ['Eliminates source of pain and infection', 'Prevents spread of disease to adjacent teeth', 'Dogs typically show immediate improvement in comfort', 'Removes risk of systemic complications from chronic infection'],
  risksAndConsiderations: 'Risks include general anesthesia complications (low with modern protocols), post-operative bleeding, infection, and jaw fracture in severely diseased bone (rare). Multi-rooted tooth extractions are more complex and may require a specialist.',
  followUpCare: 'Soft food for 5–14 days depending on the extraction. Avoid hard toys and chews during healing. Pain management as prescribed by your veterinarian. Recheck appointment typically at 10–14 days.',
  associatedConditions: [
    { label: 'Periodontal Disease', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: 'Can my dog still eat after tooth extraction?', answer: 'Yes. Dogs adapt very well to missing teeth. After the healing period (5–14 days on soft food), most dogs return to eating normally, even kibble.' },
    { question: 'How much does tooth extraction cost in Malaysia?', answer: 'Simple extractions cost approximately RM50–RM150 per tooth in addition to the cleaning/anesthesia fee. Complex or surgical extractions cost more.' },
  ],
  seo: {
    metaTitle: 'Dog Tooth Extraction | When It\'s Needed & Recovery',
    metaDescription: 'Learn when tooth extraction is necessary for dogs, what the procedure involves, recovery expectations, and costs in Malaysia. Dogs thrive after extraction.',
    keywords: ['dog tooth extraction', 'pulling dog teeth', 'dog dental surgery', 'tooth extraction cost dog Malaysia'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Professional Cleaning', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Post-Procedure Recovery', path: '/dog-dental-disease/recovery/post-dental-procedure' },
  ],
};

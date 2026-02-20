import type { DentalRecoveryPage } from '../types';

export const enRecoveryPostProcedure: DentalRecoveryPage = {
  slug: 'post-dental-procedure',
  category: 'recovery',
  lang: 'en',
  title: 'Post-Dental Procedure Recovery for Dogs: What to Expect',
  overview: `After a dental procedure under anesthesia, your dog will need a recovery period. The length and intensity of recovery depend on the procedures performed — a simple cleaning requires minimal recovery, while multiple extractions require more careful post-operative care.`,
  timeline: [
    { phase: 'Day of Procedure', duration: 'Day 1', description: 'Your dog may be groggy from anesthesia. Offer small amounts of water. Soft food in the evening if interested. Some drooling or slight bleeding is normal.' },
    { phase: 'Days 2–3', duration: '48–72 hours', description: 'Grogginess should resolve. Continue soft food. Monitor for excessive swelling, bleeding, or reluctance to eat.' },
    { phase: 'Days 4–7', duration: '1 week', description: 'For cleanings only: normal activity and diet can usually resume. For extractions: continue soft food and gentle activity.' },
    { phase: 'Days 7–14', duration: '2 weeks', description: 'For extractions: extraction sites should be healing. Recheck appointment typically scheduled. Sutures may dissolve or be removed.' },
  ],
  dietaryModifications: 'Feed soft food (canned food, soaked kibble, or home-prepared soft food) for the duration recommended by your veterinarian — typically 1–3 days for cleanings and 5–14 days for extractions. Always provide fresh water.',
  warningSignsDuringRecovery: ['Excessive bleeding that doesn\'t stop', 'Complete refusal to eat or drink for more than 24 hours post-procedure', 'Swelling that worsens after Day 2', 'Fever or extreme lethargy', 'Discharge or foul smell from extraction sites'],
  followUpSchedule: 'Your veterinarian will provide specific follow-up instructions. Typically a recheck at 10–14 days after extractions. Resume dental brushing 5–7 days after the procedure or as directed.',
  faqs: [
    { question: 'How long will my dog be groggy after dental surgery?', answer: 'Most dogs recover from anesthesia grogginess within 12–24 hours. Full normal behavior typically returns within 24–48 hours.' },
  ],
  seo: {
    metaTitle: 'Dog Dental Procedure Recovery | Post-Op Care Guide',
    metaDescription: 'What to expect after your dog\'s dental procedure: recovery timeline, dietary changes, warning signs, and follow-up care for cleanings and extractions.',
    keywords: ['dog dental recovery', 'after dog dental surgery', 'dog tooth extraction recovery', 'post dental care dog'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Oral Healing Timeline', path: '/dog-dental-disease/recovery/oral-healing-timeline' },
    { label: 'Monitoring for Complications', path: '/dog-dental-disease/recovery/monitoring-for-complications' },
  ],
};

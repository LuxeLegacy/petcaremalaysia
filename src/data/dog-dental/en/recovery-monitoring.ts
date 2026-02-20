import type { DentalRecoveryPage } from '../types';

export const enRecoveryMonitoring: DentalRecoveryPage = {
  slug: 'monitoring-for-complications',
  category: 'recovery',
  lang: 'en',
  title: 'Monitoring for Complications After Dog Dental Surgery',
  overview: `While complications after dental procedures in dogs are uncommon with modern veterinary techniques, monitoring your dog during recovery is important. Knowing what\'s normal versus what requires veterinary attention helps ensure smooth healing.`,
  timeline: [
    { phase: 'First 24 Hours', duration: 'Day 1', description: 'Monitor for excessive bleeding, difficulty breathing, or failure to recover from anesthesia. Some oozing and grogginess is normal.' },
    { phase: 'Days 2–5', duration: '3–4 days', description: 'Watch for worsening swelling, refusal to eat or drink, persistent vomiting, or signs of pain not controlled by prescribed medication.' },
    { phase: 'Days 5–14', duration: '1–2 weeks', description: 'Monitor healing of extraction sites. Watch for discharge, foul odor, or opening of suture lines.' },
  ],
  dietaryModifications: 'Maintain soft food diet as prescribed. Ensure adequate water intake. If your dog refuses all food for more than 24 hours post-procedure, contact your veterinarian.',
  warningSignsDuringRecovery: [
    'Bleeding that soaks through gauze and doesn\'t slow after 20 minutes of gentle pressure',
    'Swelling that increases after Day 2 rather than decreasing',
    'Fever (temperature above 39.5°C / 103°F)',
    'Pus or foul-smelling discharge from the mouth or surgical sites',
    'Inability to close the mouth or jaw misalignment',
    'Complete refusal to eat or drink for more than 24 hours',
    'Excessive pawing at the mouth or extreme distress',
  ],
  followUpSchedule: 'Follow all recheck appointments scheduled by your veterinarian. Do not skip the post-operative recheck even if your dog appears to be healing well — some complications are not visible externally.',
  faqs: [
    { question: 'When should I call the vet after my dog\'s dental surgery?', answer: 'Call if you observe excessive bleeding, worsening swelling, fever, refusal to eat beyond 24 hours, or any sign that concerns you. It\'s always better to check than to wait.' },
  ],
  seo: {
    metaTitle: 'Post-Dental Surgery Monitoring for Dogs | Complication Signs',
    metaDescription: 'Monitor your dog after dental surgery with this guide. Learn normal recovery signs vs. complications requiring veterinary attention after dental procedures.',
    keywords: ['dog dental surgery complications', 'after dog dental surgery', 'dog dental recovery problems', 'monitoring dog after dental'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Post-Procedure Recovery', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: 'Healing Timeline', path: '/dog-dental-disease/recovery/oral-healing-timeline' },
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
  ],
};

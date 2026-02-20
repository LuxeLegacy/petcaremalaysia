import type { DentalRecoveryPage } from '../types';

export const enRecoveryHealingTimeline: DentalRecoveryPage = {
  slug: 'oral-healing-timeline',
  category: 'recovery',
  lang: 'en',
  title: 'Dog Oral Healing Timeline After Dental Procedures',
  overview: `Understanding the normal healing timeline after dental procedures helps pet owners monitor recovery and recognize potential complications early. Healing rates vary based on the procedure, number of teeth involved, and your dog's overall health.`,
  timeline: [
    { phase: 'Immediate (0–24 hours)', duration: '24 hours', description: 'Blood clot formation at extraction sites. Mild swelling and oozing is normal. Anesthesia effects wearing off.' },
    { phase: 'Inflammatory Phase', duration: 'Days 1–5', description: 'Body\'s healing response is active. Gums may appear red around procedure sites. This is normal healing.' },
    { phase: 'Proliferative Phase', duration: 'Days 5–14', description: 'New tissue begins forming. Gums start to close over extraction sites. Sutures dissolving.' },
    { phase: 'Maturation Phase', duration: 'Weeks 2–6', description: 'Tissue strengthening and remodeling. Gums should appear pink and healthy. Bone remodeling continues internally.' },
  ],
  dietaryModifications: 'Soft food during the inflammatory and early proliferative phases (5–14 days depending on procedure). Gradually transition back to regular food as directed by your veterinarian.',
  warningSignsDuringRecovery: ['Persistent bleeding beyond Day 2', 'Increasing swelling after Day 3', 'Foul odor from the mouth that worsens', 'Visible bone exposure at extraction sites', 'Refusal to eat beyond 48 hours post-procedure'],
  followUpSchedule: 'Recheck at 10–14 days for suture assessment. Additional follow-up as recommended. Resume brushing once healing is confirmed.',
  faqs: [
    { question: 'How long does it take for a dog\'s extraction site to fully heal?', answer: 'Soft tissue typically closes over the site within 2 weeks. Complete bone remodeling beneath the surface takes 4–6 weeks.' },
  ],
  seo: {
    metaTitle: 'Dog Oral Healing Timeline | Post-Dental Recovery Phases',
    metaDescription: 'Understand the normal healing timeline after your dog\'s dental procedure. Learn what to expect at each phase and warning signs of complications.',
    keywords: ['dog oral healing', 'dog extraction healing time', 'dog dental recovery timeline', 'how long dog dental healing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Post-Procedure Recovery', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: 'Monitoring Complications', path: '/dog-dental-disease/recovery/monitoring-for-complications' },
  ],
};

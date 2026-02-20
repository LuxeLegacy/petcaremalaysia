import type { DentalSymptomPage } from '../types';

export const enSymptomsFacialSwelling: DentalSymptomPage = {
  slug: 'facial-swelling',
  category: 'symptoms',
  lang: 'en',
  title: 'Facial Swelling in Dogs: Dental Emergency Warning',
  overview: `Facial swelling in dogs — especially below or around the eye — is often caused by a tooth root abscess and constitutes an urgent veterinary concern. The upper carnassial tooth root sits directly below the eye, so infections of this tooth commonly present as facial swelling.`,
  whatItIndicates: 'Facial swelling most commonly indicates a tooth root abscess, but can also signal an allergic reaction (insect sting), salivary gland issue (mucocele), trauma, or tumor. Dental abscesses typically cause one-sided, firm swelling below the eye.',
  oralVsOtherCauses: 'Dental abscess swelling is usually firm, warm, one-sided, and positioned below the eye or along the jaw. Allergic reactions cause diffuse, bilateral swelling. Trauma causes swelling at the injury site.',
  emergencyRedFlags: ['Swelling affecting the eye or eye closure', 'Swelling with fever and lethargy', 'Rapidly expanding swelling', 'Swelling with difficulty breathing', 'Swelling that ruptures and drains pus'],
  severityRouting: [
    { label: 'Advanced (confirmed dental origin)', path: '/dog-dental-disease/severity/advanced' },
    { label: 'Emergency (with systemic signs)', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: 'Urgent veterinary evaluation is needed. Dental X-rays under anesthesia will identify the affected tooth. Blood work may be recommended to assess for systemic infection.',
  carePathways: [
    { label: 'Tooth root abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Emergency signs', path: '/dog-dental-disease/emergency-signs' },
    { label: 'When to see a vet', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Is facial swelling in dogs always dental?', answer: 'No, but dental abscess is the most common cause of one-sided facial swelling below the eye. Other causes include allergic reactions, trauma, and tumors. Veterinary evaluation is essential.' },
  ],
  seo: {
    metaTitle: 'Facial Swelling in Dogs | Dental Emergency Guide',
    metaDescription: 'Facial swelling in dogs often signals a tooth root abscess requiring urgent vet care. Learn the signs, causes, and when immediate veterinary attention is needed.',
    keywords: ['dog facial swelling', 'swelling under dog eye', 'dog tooth abscess swelling', 'dog face swollen'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Licensed by Malaysian Veterinary Council', bio: 'Veterinary professional with 12 years of clinical experience in Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-20',
  relatedLinks: [
    { label: 'Tooth Root Abscess', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Emergency Signs', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Swollen Gums', path: '/dog-dental-disease/symptoms/swollen-gums' },
  ],
};

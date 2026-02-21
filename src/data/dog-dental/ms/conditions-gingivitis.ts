import type { DentalConditionPage } from '../types';

export const msConditionsGingivitis: DentalConditionPage = {
  slug: 'gingivitis',
  category: 'conditions',
  lang: 'ms',
  title: 'Gingivitis pada Anjing: Tanda Penyakit Gusi Awal & Rawatan',
  overview: `Gingivitis ialah keradangan gusi yang disebabkan oleh pengumpulan plak dan karang gigi di sepanjang garisan gusi. Ia adalah peringkat paling awal penyakit periodontal dan satu-satunya peringkat yang boleh dipulihkan sepenuhnya dengan rawatan profesional dan penjagaan rumah yang betul.

Tanpa campur tangan, gingivitis berkembang kepada penyakit periodontal, di mana struktur penyokong gigi — tulang, ligamen, dan tisu — mula rosak secara kekal.`,
  signs: ['Gusi merah dan bengkak', 'Gusi berdarah semasa makan atau memberus gigi', 'Nafas berbau (halitosis)', 'Garisan gusi kelihatan bengkak atau meradang', 'Anjing mungkin menunjukkan ketidakselesaan ringan apabila mulut disentuh'],
  severityStages: [
    { stage: 'Gingivitis Ringan', description: 'Kemerahan sedikit di sepanjang garisan gusi. Gusi mungkin berdarah sedikit apabila diprob.' },
    { stage: 'Gingivitis Sederhana', description: 'Bengkak dan kemerahan yang kelihatan. Gusi mudah berdarah. Nafas berbau ketara.' },
    { stage: 'Gingivitis Teruk', description: 'Bengkak yang ketara, pendarahan spontan, dan ketidakselesaan. Risiko perkembangan kepada penyakit periodontal.' },
  ],
  redFlags: ['Gusi yang berdarah tanpa sentuhan', 'Enggan makan', 'Air liur berlebihan', 'Mengais mulut', 'Bengkak muka'],
  diagnosisOverview: 'Doktor haiwan mendiagnosis gingivitis melalui pemeriksaan mulut visual dan probing gigi. Prob mengukur kedalaman poket gusi — poket yang lebih dalam menunjukkan penyakit yang lebih lanjut.',
  treatmentCategories: [
    { label: 'Pembersihan Profesional', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Penjagaan Gigi Pencegahan', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: 'Dengan pembersihan profesional dan penjagaan rumah yang konsisten, gingivitis boleh pulih dalam 1–2 minggu. Gusi sepatutnya kembali kepada warna merah jambu yang sihat.',
  prevention: 'Memberus gigi setiap hari, pemeriksaan gigi rutin, dan kunyahan gigi yang sesuai membantu mencegah gingivitis. Baka kecil mendapat manfaat daripada pembersihan profesional yang lebih kerap.',
  whenToSeeVet: 'Jika gusi anjing anda kelihatan merah, bengkak, atau mudah berdarah, jadualkan pemeriksaan gigi veterinar dengan segera. Gingivitis awal boleh dipulihkan sepenuhnya.',
  faqs: [
    { question: 'Adakah gingivitis pada anjing boleh dipulihkan?', answer: 'Ya, gingivitis adalah satu-satunya peringkat penyakit periodontal yang boleh dipulihkan sepenuhnya dengan pembersihan profesional dan penjagaan gigi harian yang betul.' },
    { question: 'Berapa lama gingivitis menjadi penyakit periodontal?', answer: 'Tanpa rawatan, gingivitis boleh berkembang kepada penyakit periodontal awal dalam beberapa minggu hingga bulan, bergantung pada baka, umur, dan kebersihan mulut anjing.' },
  ],
  seo: {
    metaTitle: 'Gingivitis pada Anjing | Panduan Penyakit Gusi Awal',
    metaDescription: 'Ketahui tentang gingivitis pada anjing: mengenal pasti gusi merah dan bengkak, mengapa rawatan awal penting, dan bagaimana pembersihan profesional boleh memulihkan keadaan gigi biasa ini.',
    keywords: ['gingivitis anjing', 'penyakit gusi anjing', 'gusi merah anjing', 'penyakit gigi anjing peringkat awal'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Pengumpulan Plak', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Gejala Gusi Merah', path: '/dog-dental-disease/symptoms/red-gums' },
  ],
};

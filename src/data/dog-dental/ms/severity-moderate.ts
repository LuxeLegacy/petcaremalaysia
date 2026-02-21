import type { DentalSeverityPage } from '../types';

export const msSeverityModerate: DentalSeverityPage = {
  slug: 'moderate', category: 'severity', lang: 'ms',
  title: 'Penyakit Gigi Anjing Sederhana: Periodontitis Peringkat 2–3',
  overview: 'Penyakit gigi sederhana merangkumi Peringkat 2 dan 3 periodontitis, dengan kehilangan tulang 25–50%. Gejala menjadi lebih ketara — nafas berbau yang berterusan, gusi berdarah, dan kemungkinan ketidakselesaan semasa makan. Rawatan profesional diperlukan untuk mencegah perkembangan selanjutnya.',
  progression: [
    { stage: 'Peringkat 2 — Periodontitis Awal', description: 'Kehilangan tulang sehingga 25%. Poket gusi semakin dalam tetapi gigi masih stabil.', action: 'Pembersihan profesional menyeluruh. Memberus gigi harian di rumah untuk menghentikan perkembangan.' },
    { stage: 'Peringkat 3 — Periodontitis Sederhana', description: 'Kehilangan tulang 25–50%. Gigi mungkin mula goyang. Kesakitan mungkin menjejaskan tabiat makan.', action: 'Penilaian gigi penuh. Sesetengah gigi mungkin memerlukan pencabutan. Perancangan rawatan berdasarkan X-ray gigi.' },
  ],
  associatedConditions: [
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: 'Pembersihan Profesional', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Pencabutan Gigi', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Pengurusan Kesakitan', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: 'Bolehkah penyakit gigi sederhana disembuhkan?', answer: 'Kehilangan tulang tidak boleh dipulihkan, tetapi rawatan profesional boleh menghentikan perkembangan, menguruskan kesakitan, dan mengekalkan gigi yang tinggal selama mungkin.' },
  ],
  seo: {
    metaTitle: 'Penyakit Gigi Anjing Sederhana | Panduan Peringkat 2–3',
    metaDescription: 'Penyakit periodontal sederhana pada anjing melibatkan kehilangan tulang 25–50%. Ketahui tentang tanda-tanda, pilihan rawatan, dan cara mencegah perkembangan selanjutnya.',
    keywords: ['penyakit gigi sederhana anjing', 'periodontitis peringkat 2 anjing', 'penyakit periodontal sederhana anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Keterukan Awal', path: '/dog-dental-disease/severity/early' },
    { label: 'Keterukan Lanjutan', path: '/dog-dental-disease/severity/advanced' },
  ],
};

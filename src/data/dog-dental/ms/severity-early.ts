import type { DentalSeverityPage } from '../types';

export const msSeverityEarly: DentalSeverityPage = {
  slug: 'early', category: 'severity', lang: 'ms',
  title: 'Penyakit Gigi Anjing Peringkat Awal: Plak & Gingivitis Ringan',
  overview: 'Penyakit gigi peringkat awal merangkumi pengumpulan plak dan permulaan gingivitis. Ini adalah peringkat paling boleh dirawat dan satu-satunya peringkat penyakit gigi yang boleh dipulihkan sepenuhnya pada anjing. Tanda-tanda selalunya halus — nafas berbau ringan dan kemerahan gusi sedikit mungkin satu-satunya petunjuk.',
  progression: [
    { stage: 'Pembentukan Plak', description: 'Lapisan bakteria lembut terbentuk pada gigi dalam beberapa jam selepas makan.', action: 'Memberus gigi setiap hari boleh membuang plak sebelum ia mengeras.' },
    { stage: 'Pembangunan Karang Gigi', description: 'Plak mengeras menjadi karang gigi dalam 24–72 jam. Tidak boleh dibuang dengan memberus gigi.', action: 'Pembersihan veterinar profesional diperlukan untuk membuang karang gigi.' },
    { stage: 'Gingivitis Ringan', description: 'Garisan gusi menjadi sedikit merah dan mungkin berdarah apabila diprob.', action: 'Pembersihan profesional + penjagaan rumah harian boleh memulihkan peringkat ini sepenuhnya.' },
  ],
  associatedConditions: [
    { label: 'Pengumpulan Plak', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: 'Pembersihan Profesional', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Penjagaan Gigi Pencegahan', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  faqs: [
    { question: 'Bagaimana saya tahu jika anjing saya mempunyai penyakit gigi awal?', answer: 'Periksa nafas berbau ringan, lapisan kekuningan pada gigi, dan kemerahan sedikit di sepanjang garisan gusi. Doktor haiwan anda boleh mengesahkan semasa pemeriksaan gigi rutin.' },
  ],
  seo: {
    metaTitle: 'Penyakit Gigi Anjing Peringkat Awal | Tanda & Kebolehpulihan',
    metaDescription: 'Penyakit gigi awal pada anjing boleh dipulihkan sepenuhnya. Ketahui cara mengesan plak, gingivitis ringan, dan bagaimana pembersihan profesional dan penjagaan harian boleh melindungi gigi anjing anda.',
    keywords: ['penyakit gigi awal anjing', 'peringkat plak anjing', 'gingivitis ringan anjing', 'penyakit gigi boleh dipulihkan anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Keterukan Sederhana', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Pencegahan: Memberus Gigi', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

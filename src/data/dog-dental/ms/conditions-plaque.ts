import type { DentalConditionPage } from '../types';

export const msConditionsPlaque: DentalConditionPage = {
  slug: 'plaque-buildup',
  category: 'conditions',
  lang: 'ms',
  title: 'Pengumpulan Plak pada Anjing: Punca, Tanda & Tindakan',
  overview: `Plak ialah lapisan lembut dan melekit bakteria yang terbentuk pada gigi anjing anda dalam beberapa jam selepas makan. Jika tidak dibuang melalui memberus gigi atau mengunyah, plak mengeras menjadi karang gigi (kalkulus) dalam 24–72 jam, yang hanya boleh dibuang oleh profesional veterinar.

Pengumpulan plak adalah titik permulaan semua penyakit gigi pada anjing. Walaupun ia tidak menyebabkan kesakitan pada mulanya, plak yang tidak dirawat membawa kepada gingivitis, penyakit periodontal, dan akhirnya kehilangan gigi. Baka kecil sangat terdedah kerana gigi yang sesak.`,
  signs: ['Lapisan kekuningan pada gigi', 'Nafas berbau ringan', 'Kemerahan sedikit pada garisan gusi', 'Karang gigi yang kelihatan (mendapan kuning-coklat keras)'],
  severityStages: [
    { stage: 'Plak Awal', description: 'Lapisan lembut kelihatan pada gigi, mudah dibuang dengan memberus. Tiada keradangan gusi.' },
    { stage: 'Pembentukan Karang Gigi', description: 'Mendapan keras pada gigi, terutama berhampiran garisan gusi. Kemerahan gusi ringan mungkin bermula.' },
    { stage: 'Gingivitis Awal', description: 'Keradangan gusi bermula. Pembersihan profesional disyorkan.' },
  ],
  redFlags: ['Air liur berlebihan', 'Keengganan makan makanan keras', 'Mengais mulut', 'Gusi berdarah semasa mengunyah'],
  diagnosisOverview: 'Doktor haiwan anda akan memeriksa gigi dan gusi anjing anda secara visual dan mungkin menggunakan prob gigi untuk memeriksa karang gigi di bawah garisan gusi. X-ray gigi mungkin disyorkan untuk menilai kesihatan tulang.',
  treatmentCategories: [
    { label: 'Pembersihan Profesional', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Penjagaan Gigi Pencegahan', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: 'Selepas pembersihan profesional untuk pembuangan plak/karang gigi, kebanyakan anjing pulih dalam masa 24 jam dan boleh makan seperti biasa pada hari berikutnya.',
  prevention: 'Memberus gigi setiap hari dengan ubat gigi khusus anjing adalah standard utama untuk mencegah pengumpulan plak. Pemeriksaan gigi veterinar rutin mengesan pengumpulan awal sebelum ia berkembang.',
  whenToSeeVet: 'Jika anda perasan mendapan keras pada gigi anjing anda, nafas berbau yang berterusan, atau sebarang kemerahan gusi, jadualkan pemeriksaan gigi veterinar.',
  faqs: [
    { question: 'Betapa cepatnya plak terbentuk pada gigi anjing?', answer: 'Plak mula terbentuk dalam beberapa jam selepas makan dan boleh mengeras menjadi karang gigi dalam 24–72 jam jika tidak dibuang.' },
    { question: 'Bolehkah saya membuang karang gigi anjing saya di rumah?', answer: 'Tidak. Setelah plak mengeras menjadi karang gigi, ia hanya boleh dibuang dengan selamat oleh profesional veterinar di bawah bius. Penskalaan di rumah boleh merosakkan enamel dan gusi.' },
  ],
  seo: {
    metaTitle: 'Pengumpulan Plak pada Anjing | Punca, Tanda & Pencegahan',
    metaDescription: 'Ketahui tentang pengumpulan plak pada anjing: bagaimana ia terbentuk, tanda amaran, bila perlu jumpa doktor haiwan, dan bagaimana pembersihan profesional mencegah perkembangan penyakit periodontal.',
    keywords: ['plak anjing', 'karang gigi anjing', 'pengumpulan plak anjing', 'pembersihan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gingivitis pada Anjing', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Keterukan Awal', path: '/dog-dental-disease/severity/early' },
    { label: 'Pencegahan Memberus Gigi', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

import type { DentalConditionPage } from '../types';

export const msConditionsAbscess: DentalConditionPage = {
  slug: 'tooth-root-abscess',
  category: 'conditions',
  lang: 'ms',
  title: 'Abses Akar Gigi pada Anjing: Tanda, Kedaruratan & Rawatan',
  overview: `Abses akar gigi ialah poket jangkitan pada hujung akar gigi, biasanya disebabkan oleh penyakit periodontal lanjutan atau gigi yang patah. Ia adalah salah satu keadaan gigi paling menyakitkan pada anjing dan memerlukan perhatian veterinar segera.

Premolar keempat atas (gigi karnasial) adalah gigi yang paling kerap terjejas. Abses gigi ini sering menyebabkan bengkak yang kelihatan di bawah mata, yang mungkin pecah dan mengalir melalui kulit.`,
  signs: ['Bengkak muka, terutama di bawah mata', 'Bengkak yang mungkin pecah dan mengalirkan nanah', 'Kesakitan teruk — enggan makan, mengelak kepala disentuh', 'Mengunyah sebelah sahaja', 'Mengais mulut', 'Demam dan kelesuan dalam sesetengah kes'],
  severityStages: [
    { stage: 'Abses Sedang Berkembang', description: 'Jangkitan dalaman pada akar gigi. Anjing mungkin menunjukkan tanda kesakitan halus — keengganan mengunyah sebelah.' },
    { stage: 'Abses Akut', description: 'Bengkak muka yang kelihatan, kesakitan ketara, kemungkinan demam. Memerlukan penjagaan veterinar segera.' },
    { stage: 'Abses Pecah', description: 'Bengkak telah pecah melalui kulit atau ke rongga hidung. Kesakitan berkurangan sementara tetapi jangkitan berterusan. Masih memerlukan rawatan.' },
  ],
  redFlags: ['Bengkak di bawah atau di sekitar mata', 'Demam atau kelesuan', 'Enggan makan sepenuhnya', 'Nanah mengalir dari muka atau hidung', 'Lelehan mata pada sebelah yang sama dengan bengkak'],
  diagnosisOverview: 'X-ray gigi di bawah bius adalah penting untuk mengesahkan abses akar gigi dan menentukan tahap penglibatan tulang.',
  treatmentCategories: [
    { label: 'Pencabutan Gigi', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Terapi Antibiotik', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pengurusan Kesakitan', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: 'Selepas pencabutan gigi yang terabses, kebanyakan anjing menunjukkan peningkatan dramatik dalam 24–48 jam. Penyembuhan penuh tapak pencabutan mengambil masa 2–4 minggu.',
  prevention: 'Pemeriksaan gigi berkala, rawatan segera gigi yang patah, dan pembersihan profesional rutin mengurangkan risiko abses akar gigi.',
  whenToSeeVet: 'Sebarang bengkak muka pada anjing perlu dinilai oleh doktor haiwan dengan segera — dalam 24 jam jika boleh. Jika disertai demam atau enggan makan sepenuhnya, dapatkan rawatan veterinar pada hari yang sama.',
  faqs: [
    { question: 'Adakah abses akar gigi kecemasan?', answer: 'Walaupun tidak mengancam nyawa secara serta-merta dalam kebanyakan kes, abses akar gigi adalah kedaruratan dan perlu dilihat oleh doktor haiwan dalam masa 24 jam. Bengkak muka dengan demam memerlukan rawatan pada hari yang sama.' },
    { question: 'Adakah anjing perlu gigi dicabut untuk abses?', answer: 'Dalam kebanyakan kes, pencabutan gigi yang terjejas adalah rawatan standard. Terapi saluran akar adalah alternatif di sesetengah klinik pakar pergigian veterinar.' },
  ],
  seo: {
    metaTitle: 'Abses Akar Gigi pada Anjing | Tanda & Rawatan Segera',
    metaDescription: 'Kenali abses akar gigi pada anjing: bengkak muka, kesakitan teruk, dan bila perlu mendapatkan rawatan veterinar segera. Ketahui tentang rawatan dan jangkaan pemulihan.',
    keywords: ['abses gigi anjing', 'bengkak muka anjing', 'jangkitan akar gigi anjing', 'rawatan abses gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gejala Bengkak Muka', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Tanda Kecemasan', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Pencabutan Gigi', path: '/dog-dental-disease/treatments/tooth-extraction' },
  ],
};

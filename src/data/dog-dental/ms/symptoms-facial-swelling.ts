import type { DentalSymptomPage } from '../types';

export const msSymptomsFacialSwelling: DentalSymptomPage = {
  slug: 'facial-swelling', category: 'symptoms', lang: 'ms',
  title: 'Bengkak Muka pada Anjing: Amaran Kecemasan Gigi',
  overview: 'Bengkak muka pada anjing — terutama di bawah atau sekitar mata — sering disebabkan oleh abses akar gigi dan merupakan kebimbangan veterinar yang mendesak. Akar gigi karnasial atas terletak tepat di bawah mata, jadi jangkitan gigi ini biasanya menampilkan bengkak muka.',
  whatItIndicates: 'Bengkak muka paling kerap menunjukkan abses akar gigi, tetapi juga boleh menandakan reaksi alahan (sengatan serangga), masalah kelenjar air liur (mucocele), trauma, atau tumor. Abses gigi biasanya menyebabkan bengkak sebelah, keras, di bawah mata.',
  oralVsOtherCauses: 'Bengkak abses gigi biasanya keras, panas, sebelah, dan terletak di bawah mata atau sepanjang rahang. Reaksi alahan menyebabkan bengkak meresap, dua hala. Trauma menyebabkan bengkak di tapak kecederaan.',
  emergencyRedFlags: ['Bengkak yang menjejaskan mata atau menutup mata', 'Bengkak dengan demam dan kelesuan', 'Bengkak yang berkembang dengan cepat', 'Bengkak dengan kesukaran bernafas', 'Bengkak yang pecah dan mengalirkan nanah'],
  severityRouting: [
    { label: 'Lanjutan (asal gigi yang disahkan)', path: '/dog-dental-disease/severity/advanced' },
    { label: 'Kecemasan (dengan tanda sistemik)', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: 'Penilaian veterinar segera diperlukan. X-ray gigi di bawah bius akan mengenal pasti gigi yang terjejas. Ujian darah mungkin disyorkan untuk menilai jangkitan sistemik.',
  carePathways: [
    { label: 'Abses akar gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Tanda kecemasan', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Adakah bengkak muka pada anjing sentiasa berkaitan gigi?', answer: 'Tidak, tetapi abses gigi adalah punca paling biasa bengkak muka sebelah di bawah mata. Punca lain termasuk reaksi alahan, trauma, dan tumor. Penilaian veterinar adalah penting.' },
  ],
  seo: {
    metaTitle: 'Bengkak Muka pada Anjing | Panduan Kecemasan Gigi',
    metaDescription: 'Bengkak muka pada anjing sering menandakan abses akar gigi yang memerlukan rawatan veterinar segera. Ketahui tanda-tanda, punca, dan bila perhatian veterinar segera diperlukan.',
    keywords: ['bengkak muka anjing', 'bengkak bawah mata anjing', 'bengkak abses gigi anjing', 'muka anjing bengkak'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Tanda Kecemasan', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Gusi Bengkak', path: '/dog-dental-disease/symptoms/swollen-gums' },
  ],
};

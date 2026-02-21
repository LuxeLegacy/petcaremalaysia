import type { DentalSymptomPage } from '../types';

export const msSymptomsDroppingFood: DentalSymptomPage = {
  slug: 'dropping-food', category: 'symptoms', lang: 'ms',
  title: 'Anjing Menjatuhkan Makanan Semasa Makan: Tanda Kesakitan Gigi',
  overview: 'Apabila anjing berulang kali menjatuhkan makanan dari mulut semasa makan, ia sering menunjukkan kesakitan mulut. Tingkah laku ini — juga dipanggil "quidding" — mencadangkan bahawa mengunyah tidak selesa, biasanya disebabkan penyakit gigi, gigi yang patah, atau jisim mulut.',
  whatItIndicates: 'Menjatuhkan makanan biasanya menandakan kesakitan semasa mengunyah, paling kerap daripada penyakit periodontal dengan gigi longgar, abses akar gigi, atau gigi yang patah. Ia juga boleh menunjukkan kesakitan rahang atau masalah neurologi.',
  oralVsOtherCauses: 'Kesakitan gigi menyebabkan anjing mengunyah dengan berhati-hati atau menjatuhkan makanan dari sebelah yang terjejas. Punca bukan gigi termasuk patah rahang, gangguan sendi temporomandibular (TMJ), atau keadaan neurologi yang menjejaskan koordinasi mulut.',
  emergencyRedFlags: ['Enggan makan sepenuhnya lebih 24 jam', 'Penurunan berat badan akibat kurang makan', 'Menjatuhkan makanan dengan bengkak muka', 'Darah bercampur dengan makanan'],
  severityRouting: [
    { label: 'Sederhana (menjatuhkan sesekali)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Lanjutan (kesukaran makan yang konsisten)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Pemeriksaan mulut menyeluruh di bawah sedasi atau bius dengan X-ray gigi biasanya diperlukan untuk mengenal pasti sumber kesakitan yang menyebabkan menjatuhkan makanan.',
  carePathways: [
    { label: 'Mungkinkah ia penyakit periodontal?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Mungkinkah ia abses gigi?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Mengapa anjing saya meludahkan makanan?', answer: 'Anjing meludahkan atau menjatuhkan makanan apabila mengunyah menyebabkan kesakitan. Ini sering disebabkan gigi longgar, gigi yang dijangkiti, atau gigi yang patah. Penilaian gigi veterinar disyorkan.' },
  ],
  seo: {
    metaTitle: 'Anjing Menjatuhkan Makanan | Tanda & Punca Kesakitan Gigi',
    metaDescription: 'Jika anjing anda menjatuhkan makanan semasa makan, ia mungkin menandakan kesakitan gigi daripada penyakit periodontal atau abses. Ketahui punca dan bila perlu dapatkan rawatan veterinar.',
    keywords: ['anjing menjatuhkan makanan', 'anjing quidding', 'kesukaran makan anjing', 'tanda kesakitan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Mengais Mulut', path: '/dog-dental-disease/symptoms/pawing-at-mouth' },
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
};

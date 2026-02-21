import type { DentalSymptomPage } from '../types';

export const msSymptomsPawingMouth: DentalSymptomPage = {
  slug: 'pawing-at-mouth', category: 'symptoms', lang: 'ms',
  title: 'Anjing Mengais Mulut: Punca & Bila Perlu Bimbang',
  overview: 'Mengais mulut adalah isyarat tekanan pada anjing yang menunjukkan ketidakselesaan mulut. Walaupun ia boleh disebabkan oleh sesuatu yang tersangkut di antara gigi atau dalam gusi, mengais yang berterusan sering menunjuk kepada kesakitan gigi yang ketara daripada abses, gigi yang patah, atau penyakit periodontal lanjutan.',
  whatItIndicates: 'Mengais mulut mungkin menunjukkan objek asing tersangkut di gigi, gigi yang patah, abses akar gigi, penyakit gusi lanjutan, atau jisim mulut. Ia adalah penunjuk kesakitan mulut akut yang boleh dipercayai.',
  oralVsOtherCauses: 'Punca gigi adalah paling biasa. Namun, sengatan lebah, reaksi alahan yang menyebabkan bengkak mulut, atau badan asing tersangkut di tekak juga boleh menyebabkan tingkah laku ini.',
  emergencyRedFlags: ['Mengais digabungkan dengan kesukaran bernafas', 'Mengais dengan bengkak muka atau tekak', 'Mengais berterusan dengan air liur dan tekanan', 'Mengais dengan pendarahan dari mulut'],
  severityRouting: [
    { label: 'Sederhana (mengais sekejap-sekejap)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Lanjutan (tekanan berterusan)', path: '/dog-dental-disease/severity/advanced' },
    { label: 'Kecemasan (dengan kesukaran bernafas)', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: 'Pemeriksaan veterinar akan termasuk memeriksa objek asing, gigi yang patah, bengkak, dan jisim. Sedasi mungkin diperlukan untuk pemeriksaan mulut yang menyeluruh.',
  carePathways: [
    { label: 'Mungkinkah ia abses gigi?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Tanda kecemasan', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Patutkah saya melihat di dalam mulut anjing saya jika ia mengais mulut?', answer: 'Anda boleh melihat dengan lembut jika anjing anda membenarkan, memeriksa objek yang kelihatan atau bengkak. Namun, jika anjing anda kesakitan, ia mungkin menggigit — berhati-hati dan jumpa doktor haiwan jika anda tidak dapat mengenal pasti punca dengan mudah.' },
  ],
  seo: {
    metaTitle: 'Anjing Mengais Mulut | Punca Kesakitan Mulut & Penjagaan',
    metaDescription: 'Anjing yang mengais mulut menandakan kesakitan mulut. Ketahui punca gigi dan bukan gigi, tanda amaran kecemasan, dan bila penjagaan veterinar segera diperlukan.',
    keywords: ['anjing mengais mulut', 'kesakitan mulut anjing', 'anjing gosok muka', 'ketidakselesaan mulut anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Menjatuhkan Makanan', path: '/dog-dental-disease/symptoms/dropping-food' },
    { label: 'Bengkak Muka', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

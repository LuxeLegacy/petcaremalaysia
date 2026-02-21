import type { DentalSymptomPage } from '../types';

export const msSymptomsBadBreath: DentalSymptomPage = {
  slug: 'bad-breath',
  category: 'symptoms',
  lang: 'ms',
  title: 'Nafas Berbau pada Anjing: Apa yang Halitosis Mungkin Petunjukkan',
  overview: `Nafas berbau (halitosis) ialah gejala gigi yang paling kerap dilaporkan pada anjing dan hampir selalu menunjukkan penyakit mulut yang mendasari. Walaupun bau nafas ringan sesekali boleh menjadi normal, nafas berbau yang berterusan atau semakin teruk perlu menggesa penilaian veterinar.

Punca paling biasa ialah pengumpulan bakteria daripada plak dan karang gigi pada gigi. Namun, nafas berbau juga boleh menunjukkan keadaan yang lebih serius termasuk penyakit periodontal lanjutan, abses akar gigi, atau masalah kesihatan sistemik.`,
  whatItIndicates: 'Nafas berbau yang berterusan paling kerap menunjukkan pengumpulan plak/karang gigi, gingivitis, atau penyakit periodontal. Dalam sesetengah kes, ia boleh memberi isyarat abses akar gigi, tumor mulut, atau keadaan bukan gigi seperti penyakit buah pinggang atau diabetes.',
  oralVsOtherCauses: 'Punca gigi menghasilkan bau "busuk" yang khas daripada jangkitan bakteria. Bau manis atau fruiti mungkin mencadangkan diabetes. Bau seperti ammonia boleh menunjukkan penyakit buah pinggang. Doktor haiwan anda boleh membezakan punca-punca ini.',
  emergencyRedFlags: ['Nafas berbau disertai bengkak muka', 'Enggan makan digabungkan dengan bau mulut busuk', 'Pendarahan dari mulut', 'Permulaan mendadak nafas sangat busuk dengan kelesuan'],
  severityRouting: [
    { label: 'Peringkat Awal (bau ringan)', path: '/dog-dental-disease/severity/early' },
    { label: 'Peringkat Sederhana (bau berterusan)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Peringkat Lanjutan (bau teruk dengan tanda lain)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Doktor haiwan akan melakukan pemeriksaan mulut lengkap, memeriksa karang gigi, keradangan gusi, gigi longgar, dan jisim. X-ray gigi mungkin disyorkan untuk menilai penyakit di bawah garisan gusi.',
  carePathways: [
    { label: 'Semak sama ada ia pengumpulan plak', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Mungkinkah ia gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Fahami tahap keterukan', path: '/dog-dental-disease/severity/early' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Adakah nafas berbau normal pada anjing?', answer: 'Bau nafas ringan sesekali boleh menjadi normal, terutama selepas makan. Namun, nafas berbau yang berterusan atau semakin teruk tidak normal dan biasanya menunjukkan penyakit gigi yang memerlukan perhatian veterinar.' },
    { question: 'Bolehkah memberus gigi memperbaiki nafas berbau anjing saya?', answer: 'Jika nafas berbau disebabkan pengumpulan plak awal, memberus gigi secara berkala boleh membantu. Namun, jika karang gigi sudah terbentuk atau gusi meradang, pembersihan veterinar profesional diperlukan terlebih dahulu.' },
  ],
  seo: {
    metaTitle: 'Nafas Berbau pada Anjing | Punca & Bila Perlu Jumpa Doktor Haiwan',
    metaDescription: 'Mengapa anjing anda mempunyai nafas berbau? Ketahui apa yang ditunjukkan oleh halitosis — daripada pengumpulan plak hingga penyakit gigi serius — dan bila perlu mendapatkan rawatan veterinar.',
    keywords: ['nafas berbau anjing', 'halitosis anjing', 'bau mulut anjing', 'mengapa anjing saya nafas berbau'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Pengumpulan Plak', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gusi Merah', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Pemeriksaan Gigi', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

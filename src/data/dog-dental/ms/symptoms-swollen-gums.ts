import type { DentalSymptomPage } from '../types';

export const msSymptomsSwollenGums: DentalSymptomPage = {
  slug: 'swollen-gums', category: 'symptoms', lang: 'ms',
  title: 'Gusi Bengkak pada Anjing: Punca & Bila Perlu Bimbang',
  overview: 'Gusi bengkak pada anjing menunjukkan keradangan yang telah berkembang melepasi kemerahan ringan. Gusi mungkin kelihatan bengkak, membesar, atau mungkin tumbuh menutupi sebahagian gigi. Ini adalah tanda penyakit gusi sederhana hingga lanjutan yang memerlukan penilaian veterinar.',
  whatItIndicates: 'Gusi bengkak biasanya menunjukkan gingivitis sederhana yang berkembang ke arah penyakit periodontal. Bengkak setempat berhampiran gigi tertentu mungkin mencadangkan abses akar gigi atau gigi yang patah.',
  oralVsOtherCauses: 'Bengkak gigi biasanya setempat di sepanjang garisan gusi atau sekitar gigi tertentu. Bengkak mulut menyeluruh mungkin menunjukkan reaksi alahan, epulis (pertumbuhan jinak), atau jisim mulut yang memerlukan penilaian veterinar.',
  emergencyRedFlags: ['Bengkak yang merebak ke muka atau di bawah mata', 'Permulaan bengkak yang cepat', 'Bengkak dengan demam atau kelesuan', 'Kesukaran bernafas disebabkan bengkak mulut'],
  severityRouting: [
    { label: 'Sederhana (bengkak setempat)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Lanjutan (meluas atau teruk)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Penilaian veterinar termasuk pemeriksaan visual, probing untuk mengukur kedalaman poket, dan X-ray gigi untuk menilai tahap tulang dan menolak abses atau jisim.',
  carePathways: [
    { label: 'Mungkinkah ia penyakit periodontal?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Mungkinkah ia abses gigi?', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Tanda kecemasan untuk diperhati', path: '/dog-dental-disease/emergency-signs' },
  ],
  faqs: [
    { question: 'Mengapa gusi anjing saya bengkak di sekitar satu gigi?', answer: 'Bengkak setempat di sekitar satu gigi mungkin menunjukkan abses akar gigi, gigi yang patah, atau pertumbuhan gusi (epulis). Penilaian veterinar dengan X-ray gigi disyorkan.' },
  ],
  seo: {
    metaTitle: 'Gusi Bengkak pada Anjing | Punca & Penjagaan Veterinar',
    metaDescription: 'Gusi bengkak pada anjing mungkin menunjukkan penyakit gigi yang sedang berkembang atau abses. Ketahui punca, tanda kecemasan, dan bila perlu jumpa doktor haiwan.',
    keywords: ['gusi bengkak anjing', 'bengkak gusi anjing', 'gusi puffy anjing', 'bengkak gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gusi Merah', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Bengkak Muka', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

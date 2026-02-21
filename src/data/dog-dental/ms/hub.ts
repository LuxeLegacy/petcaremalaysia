import type { DentalHubPage } from '../types';

export const msHub: DentalHubPage = {
  slug: 'hub',
  category: 'hub',
  lang: 'ms',
  title: 'Penyakit Gigi Anjing: Panduan Lengkap Kesihatan Mulut Anjing',
  overview: `Penyakit gigi adalah masalah kesihatan paling biasa pada anjing — lebih 80% anjing berusia lebih 3 tahun menghidapi sejenis penyakit periodontal. Perkembangan daripada pengumpulan plak kepada gingivitis, penyakit periodontal, dan akhirnya kehilangan gigi boleh dicegah dengan penjagaan yang betul.

Hab komprehensif ini merangkumi semua yang perlu diketahui pemilik haiwan peliharaan tentang penyakit gigi anjing di Malaysia: daripada mengenal pasti gejala awal seperti nafas berbau dan gusi merah, hingga memahami tahap keterukan, prosedur diagnostik veterinar, kategori rawatan, jangkaan pemulihan, dan strategi pencegahan jangka panjang.

Pengesanan awal dan penjagaan gigi veterinar rutin adalah cara paling berkesan untuk melindungi kesihatan mulut dan kesejahteraan keseluruhan anjing anda.`,
  categoryCards: [
    { title: 'Keadaan', description: 'Plak, gingivitis, penyakit periodontal & abses gigi', path: '/dog-dental-disease/conditions/plaque-buildup', icon: '🦷' },
    { title: 'Gejala', description: 'Nafas berbau, gusi merah, bengkak muka & lain-lain', path: '/dog-dental-disease/symptoms/bad-breath', icon: '🔍' },
    { title: 'Tahap Keterukan', description: 'Perkembangan penyakit awal, sederhana & lanjutan', path: '/dog-dental-disease/severity/early', icon: '⚠️' },
    { title: 'Diagnostik', description: 'Pemeriksaan mulut, probing & X-ray gigi', path: '/dog-dental-disease/diagnosis/oral-exam', icon: '🧪' },
    { title: 'Rawatan', description: 'Pembersihan profesional, pencabutan & penjagaan pencegahan', path: '/dog-dental-disease/treatments/professional-cleaning', icon: '🏥' },
    { title: 'Pemulihan', description: 'Penjagaan selepas prosedur & garis masa penyembuhan', path: '/dog-dental-disease/recovery/post-dental-procedure', icon: '🔄' },
    { title: 'Pencegahan', description: 'Memberus gigi, pemeriksaan & panduan diet', path: '/dog-dental-disease/prevention/brushing', icon: '🛡️' },
  ],
  emergencyBanner: {
    text: 'Adakah anjing anda menunjukkan bengkak muka, enggan makan, atau pendarahan yang tidak berhenti?',
    linkText: 'Semak Tanda Kecemasan Sekarang',
  },
  faqs: [
    { question: 'Betapa biasanya penyakit gigi pada anjing?', answer: 'Lebih 80% anjing berusia lebih 3 tahun menghidapi sejenis penyakit periodontal, menjadikannya keadaan kesihatan paling biasa pada anjing.' },
    { question: 'Bolehkah penyakit gigi anjing dipulihkan?', answer: 'Gingivitis peringkat awal boleh dipulihkan dengan pembersihan profesional dan penjagaan di rumah. Namun, penyakit periodontal dengan kehilangan tulang tidak boleh dipulihkan — rawatan berfokus pada mencegah perkembangan selanjutnya.' },
    { question: 'Berapakah kos rawatan gigi anjing di Malaysia?', answer: 'Pembersihan gigi profesional di Malaysia biasanya berharga RM200–RM800, bergantung pada keterukan, keperluan pencabutan, dan jenis klinik.' },
    { question: 'Berapa kerap gigi anjing saya perlu diperiksa?', answer: 'Doktor haiwan mengesyorkan pemeriksaan gigi tahunan. Anjing dengan sejarah penyakit gigi mungkin memerlukan pemeriksaan lebih kerap setiap 6 bulan.' },
  ],
  seo: {
    metaTitle: 'Panduan Penyakit Gigi Anjing Malaysia | Hab Kesihatan Mulut',
    metaDescription: 'Panduan lengkap penyakit gigi anjing di Malaysia. Ketahui tentang plak, gingivitis, gejala penyakit periodontal, rawatan, kos & pencegahan untuk kesihatan mulut anjing anda.',
    keywords: ['penyakit gigi anjing', 'kesihatan mulut anjing', 'masalah gigi anjing', 'penyakit periodontal anjing', 'penjagaan gigi anjing Malaysia'],
  },
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM, Berlesen Majlis Veterinar Malaysia',
    bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia, mengkhusus dalam pergigian haiwan peliharaan dan penjagaan pencegahan.',
  },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Kos Penjagaan Gigi Haiwan', path: '/ms/qa/article/berapakah-kos-penjagaan-gigi-haiwan-malaysia' },
    { label: 'Cari Doktor Haiwan Berdekatan', path: '/ms/locations' },
    { label: 'Panduan Kecemasan Haiwan', path: '/ms/emergency-guide' },
  ],
};

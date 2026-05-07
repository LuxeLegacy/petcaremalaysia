import type { PAAArticle } from '@/lib/paaTypes';

export const msPetDentalCareArticle: PAAArticle = {
  id: 42,
  slug: 'berapakah-kos-penjagaan-gigi-haiwan-malaysia',
  category: 'vet-care',
  lang: 'ms',
  title: 'Kos Penjagaan Gigi Haiwan Peliharaan di Malaysia',
  directAnswer: 'Pembersihan gigi haiwan peliharaan di Malaysia berharga RM200–RM800. Skala rutin di bawah anestesia RM300–RM600, manakala cabutan gigi RM50–RM200 sebatang. Kes periodontal teruk boleh melebihi RM1,000. Berus gigi di rumah setiap hari mengurangkan keperluan pembersihan profesional.',
  tldr: 'Pembersihan gigi haiwan Malaysia: RM200–RM800. Skala dengan anestesia RM300–RM600, cabut gigi RM50–RM200 setiap satu. Kes teruk melebihi RM1,000. Berus gigi setiap hari dan periksa veterinar setahun sekali.',
  quickFacts: { avgCost: 'RM300 – RM600 (penskalaan)', timeRequired: 'Separuh hari (dengan anestesia)', difficulty: 'Perlu profesional', professionalNeeded: 'Yes', insuranceCoverage: 'Biasanya dikecualikan' },
  detailedAnswer: `Kesihatan gigi haiwan sering diabaikan oleh pemilik haiwan Malaysia, namun penyakit pergigian menjejaskan lebih 80% anjing dan 70% kucing yang berumur lebih 3 tahun. Penjagaan pergigian profesional memerlukan anestesia untuk membersihkan dengan selamat di bawah garisan gusi.\n\nPenskalaan dan penggilapan gigi asas di bawah anestesia menelan kos RM300–RM600 di kebanyakan klinik veterinar Malaysia. Ini termasuk ujian darah pra-anestesia (RM80–RM150), prosedur itu sendiri, dan pemantauan pemulihan. Jika pencabutan diperlukan, jangka kos tambahan RM50–RM200 setiap gigi.\n\nPenjagaan pencegahan di rumah (memberus gigi haiwan 3–5 kali seminggu) adalah strategi paling kos efektif dan boleh mengurangkan kekerapan pembersihan profesional daripada tahunan kepada setiap 2–3 tahun.`,
  keyFactors: ['Keterukan penyakit pergigian — karang gigi ringan vs periodontitis lanjutan', 'Bilangan pencabutan — setiap gigi tambahan meningkatkan kos RM50–RM200', 'Ujian darah pra-anestesia — diperlukan untuk keselamatan, menambah RM80–RM150', 'Saiz haiwan — anjing besar mempunyai lebih banyak gigi dan prosedur lebih lama', 'Lokasi klinik — pusat pakar di KL mengenakan 30–50% lebih', 'Ubat selepas prosedur — antibiotik dan pereda sakit menambah RM50–RM100'],
  steps: [
    { title: 'Jadualkan Pemeriksaan Gigi', description: 'Minta doktor haiwan menilai kesihatan gigi haiwan anda semasa pemeriksaan tahunan.' },
    { title: 'Ujian Darah Pra-Anestesia', description: 'Doktor haiwan akan mengesyorkan ujian darah untuk memastikan haiwan anda boleh menjalani anestesia dengan selamat.' },
    { title: 'Penskalaan Profesional', description: 'Di bawah anestesia, doktor haiwan menggunakan pengskala ultrasonik untuk membuang karang gigi di atas dan di bawah garisan gusi.' },
    { title: 'Pencabutan Jika Perlu', description: 'Gigi yang rosak teruk atau longgar mungkin perlu dicabut. Doktor haiwan akan membincangkan ini sebelum prosedur.' },
    { title: 'Pemulihan dan Penjagaan Selepas', description: 'Kebanyakan haiwan pulih dalam beberapa jam. Berikan makanan lembut selama 24–48 jam dan berikan ubat yang ditetapkan.' },
    { title: 'Mulakan Rutin Penjagaan di Rumah', description: 'Mula memberus gigi haiwan anda dengan ubat gigi selamat untuk haiwan. Gunakan gigitan gigi dan bahan tambah air sebagai alat tambahan.' },
  ],
  proTips: ['Mulakan memberus gigi haiwan dari peringkat anak anjing atau anak kucing — lebih mudah membentuk tabiat awal', 'Gunakan ubat gigi khusus haiwan — ubat gigi manusia mengandungi fluorida dan xylitol, kedua-duanya toksik kepada haiwan', 'Gigitan gigi (Dentastix, Greenies) membantu tetapi bukan pengganti memberus gigi', 'Pemeriksaan gigi tahunan mengesan masalah awal dan menjimatkan wang jangka panjang'],
  commonMistakes: ['Mengelak pembersihan gigi kerana kos anestesia — penyakit pergigian yang tidak dirawat menyebabkan kesakitan serius', 'Menggunakan ubat gigi manusia pada haiwan — ia toksik', 'Bergantung sepenuhnya pada gigitan gigi tanpa memberus', 'Melangkau antibiotik selepas prosedur — bakteria pergigian boleh merebak ke jantung dan buah pinggang'],
  costComparison: [
    { option: 'Memberus + Gigitan Gigi Tahunan', costRange: 'RM200–400/tahun', timeRequired: '2 min harian', bestFor: 'Pencegahan', prosCons: 'Paling murah / Perlukan komitmen harian' },
    { option: 'Penskalaan Rutin (tanpa pencabutan)', costRange: 'RM300–600', timeRequired: 'Separuh hari', bestFor: 'Karang gigi ringan', prosCons: 'Berkesan / Perlukan anestesia' },
    { option: 'Penskalaan + Pencabutan', costRange: 'RM500–1,000', timeRequired: 'Separuh-sehari penuh', bestFor: 'Penyakit sederhana', prosCons: 'Menyelesaikan kesakitan / Kos lebih tinggi' },
    { option: 'Pembedahan Pergigian Pakar', costRange: 'RM800–2,000', timeRequired: 'Sehari penuh', bestFor: 'Kes lanjutan', prosCons: 'Hasil terbaik / Paling mahal' },
  ],
  relatedQuestions: [
    { question: 'Berapa kerap saya perlu membersihkan gigi haiwan saya?', briefAnswer: 'Tahunan untuk kebanyakan haiwan. Dengan memberus harian, setiap 2–3 tahun mungkin mencukupi.', slug: 'berapakah-kos-penjagaan-gigi-haiwan-malaysia' },
    { question: 'Apakah penyakit periodontal pada anjing?', briefAnswer: 'Penyakit periodontal adalah jangkitan progresif pada gusi dan struktur sokongan. Lebih 80% anjing berusia lebih 3 tahun terjejas. Ketahui lebih lanjut di Hab Penyakit Gigi Anjing kami.', slug: 'berapakah-kos-penjagaan-gigi-haiwan-malaysia' },
  ],
  citations: [{ source: 'Persatuan Veterinar Malaysia', title: 'Garis Panduan Penjagaan Pergigian Veterinar', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' }],
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  seo: { metaDescription: 'Pembersihan gigi haiwan di Malaysia menelan kos RM300–RM600. Ketahui tentang kos penskalaan, pencabutan, dan cara mengekalkan kesihatan pergigian haiwan anda di rumah.', keywords: ['penjagaan gigi haiwan malaysia', 'kos bersih gigi anjing malaysia', 'penskalaan gigi kucing malaysia'] },
  datePublished: '2026-02-08',
  dateModified: '2026-02-08',
};

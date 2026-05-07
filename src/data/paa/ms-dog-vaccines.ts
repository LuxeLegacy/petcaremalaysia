import type { PAAArticle } from '@/lib/paaTypes';

export const msDogVaccinesArticle: PAAArticle = {
  id: 104,
  slug: 'vaksin-yang-diperlukan-anjing-malaysia',
  category: 'veterinary-services',
  lang: 'ms',
  title: 'Apakah Vaksin yang Diperlukan Anjing di Malaysia?',
  directAnswer:
    'Anjing di Malaysia memerlukan vaksin teras: DHPP pada usia 6–8, 10–12, dan 14–16 minggu, ditambah vaksin rabies pada 12–16 minggu, dan suntikan ulangan tahunan. Vaksin Leptospirosis dan Kennel Cough sangat digalakkan kerana iklim tropika. Kos lengkap vaksin anak anjing ialah RM200–RM500.',
  tldr: 'Anak anjing Malaysia perlu tiga dos DHPP (6–8, 10–12, 14–16 minggu) ditambah rabies pada 12–16 minggu. Suntikan ulangan tahunan diwajibkan undang-undang. Jumlah kos: RM200–RM500. Tambah Leptospirosis dan Kennel Cough untuk perlindungan tropika.',
  quickFacts: {
    avgCost: 'RM200 – RM500 (siri anak anjing)',
    timeRequired: '3 lawatan vet dalam 8–10 minggu',
    difficulty: 'Mudah',
    professionalNeeded: 'Yes',
    insuranceCoverage: 'Biasanya dikecualikan (penjagaan rutin)',
  },
  detailedAnswer: `Vaksinasi adalah langkah kesihatan pencegahan paling penting untuk anjing di Malaysia. Iklim tropika dan populasi haiwan terbiar yang tinggi mewujudkan risiko penyakit berjangkit yang lebih tinggi, menjadikan jadual vaksinasi lengkap amat penting.

Vaksin Teras (Wajib):
DHPP (5-dalam-1): Vaksin gabungan ini melindungi daripada Distemper, Hepatitis (Adenovirus), Parvovirus, dan Parainfluenza — semua penyakit yang berpotensi membawa maut. Anak anjing menerima dos pertama pada 6–8 minggu, kedua pada 10–12 minggu, dan ketiga pada 14–16 minggu. Penggalak tahunan mengekalkan perlindungan.

Rabies: Vaksinasi rabies diwajibkan secara sah di Malaysia di bawah Akta Haiwan 1953 dan dikuatkuasakan oleh Jabatan Perkhidmatan Veterinar (JPV). Anjing menerima suntikan rabies pertama pada 12–16 minggu, dengan penggalak tahunan diperlukan. Sijil vaksinasi rabies yang sah diperlukan untuk pelesenan anjing.

Vaksin Bukan Teras (Amat Disyorkan):
Leptospirosis: Amat disyorkan di Malaysia kerana iklim tropika kita dengan hujan lebat. Bakteria Leptospira berkembang dalam air bertakung dan kawasan yang terdedah banjir. Anjing yang keluar, melawat taman, atau tinggal di kawasan dengan aktiviti tikus perlu divaksin setiap tahun.

Bordetella (Batuk Kennel): Disyorkan untuk anjing yang melawat salon dandanan, kemudahan penginapan, taman anjing, atau berinteraksi dengan banyak anjing lain. Ia sering diperlukan oleh kennel penginapan di Malaysia.

Influenza Anjing: Kurang biasa di Malaysia tetapi disyorkan untuk anjing di kawasan berkepadatan tinggi atau yang melakukan perjalanan antarabangsa.

Kos Vaksinasi: Siri vaksinasi anak anjing yang lengkap (3 pusingan DHPP + rabies) biasanya berharga RM200–RM500 bergantung kepada klinik. Penggalak tahunan individu berharga RM60–RM150 setiap lawatan. Klinik kerajaan dan kempen vaksinasi JPV menawarkan kos lebih rendah, kadangkala serendah RM20–RM30 untuk rabies.`,
  keyFactors: [
    'Umur – Anak anjing mesti memulakan vaksinasi DHPP pada 6–8 minggu; antibodi ibu hilang pada usia ini',
    'Keperluan Undang-undang – Vaksinasi rabies diwajibkan oleh undang-undang Malaysia (Akta Haiwan 1953)',
    'Risiko Tropika – Leptospirosis adalah ancaman ketara di Malaysia kerana hujan lebat dan banjir',
    'Jadual Penggalak – Penggalak tahunan diperlukan untuk mengekalkan imuniti bagi kebanyakan vaksin',
    'Gaya Hidup – Anjing yang melawat taman, kennel, atau salon dandanan memerlukan vaksin bukan teras tambahan',
    'Kualiti Vaksin – Pilih klinik yang menggunakan jenama vaksin yang diiktiraf antarabangsa (Nobivac, Vanguard)',
    'Penyimpanan Rekod – Kekalkan buku vaksinasi; ia diperlukan untuk pelesenan, penginapan, dan perjalanan',
  ],
  steps: [
    { title: 'Lawatan Vet Pertama (6–8 minggu)', description: 'Bawa anak anjing anda untuk vaksin DHPP pertama dan pemeriksaan kesihatan umum. Vet akan membuat buku vaksinasi dan menjadualkan temu janji masa hadapan.' },
    { title: 'Dos DHPP Kedua (10–12 minggu)', description: 'Kembali untuk penggalak DHPP kedua. Vet mungkin juga memulakan vaksinasi Leptospirosis pada lawatan ini.' },
    { title: 'DHPP Ketiga + Rabies (14–16 minggu)', description: 'Lengkapkan siri anak anjing dengan dos DHPP ketiga dan vaksinasi rabies pertama. Anak anjing anda kini dilindungi daripada penyakit teras.' },
    { title: 'Penggalak Leptospirosis (16–18 minggu)', description: 'Jika dimulakan pada 10–12 minggu, penggalak Leptospirosis perlu diberikan sekarang. Ini kritikal dalam persekitaran tropika Malaysia.' },
    { title: 'Batuk Kennel (Pilihan, 16+ minggu)', description: 'Jika anjing anda akan melawat kemudahan penginapan, salon dandanan, atau taman anjing, dapatkan vaksin Bordetella.' },
    { title: 'Penggalak Tahunan (Setiap Tahun)', description: 'Jadualkan lawatan vet tahunan untuk penggalak DHPP, rabies, dan Leptospirosis. Pastikan buku vaksinasi anda dikemas kini.' },
  ],
  proTips: [
    'Simpan anak anjing di dalam rumah dan jauhkan daripada anjing yang tidak divaksin sehingga 2 minggu selepas dos DHPP terakhir (sekitar 18 minggu)',
    'Kempen vaksinasi JPV kerajaan menawarkan suntikan rabies serendah RM20–RM30 — semak DVS.gov.my untuk jadual',
    'Sentiasa minta vet mengemas kini buku vaksinasi dan simpan salinan digital semua rekod',
    'Vaksinasi Leptospirosis adalah penting jika anda tinggal di kawasan yang terdedah banjir seperti bahagian Kelantan, Pahang, atau Johor',
    'Tetapkan peringatan tahunan untuk suntikan penggalak — kelewatan dalam vaksinasi boleh menyebabkan anjing anda terdedah',
  ],
  commonMistakes: [
    'Menangguhkan vaksinasi sehingga anak anjing "lebih besar" — ini membiarkan mereka terdedah semasa tempoh paling kritikal',
    'Melangkau vaksinasi rabies — ia bukan pilihan, ia diwajibkan secara sah di Malaysia dan melindungi daripada penyakit yang membawa maut',
    'Membawa anak anjing ke taman awam sebelum melengkapkan siri vaksinasi penuh — mereka boleh dijangkiti Parvovirus dari tanah yang tercemar',
    'Tidak mendapatkan vaksinasi Leptospirosis — penyakit ini biasa di Malaysia tropika dan boleh merebak kepada manusia',
    'Membeli vaksin dalam talian dan menyuntik sendiri — penyimpanan dan teknik suntikan yang tidak betul boleh menjadikan vaksin tidak berkesan',
  ],
  costComparison: [
    { option: 'Klinik Vet Swasta (Siri Penuh)', costRange: 'RM200 – RM500', timeRequired: '3 lawatan / 10 minggu', bestFor: 'Kebanyakan pemilik', prosCons: 'Penjagaan menyeluruh / Kos lebih tinggi' },
    { option: 'Klinik Kerajaan', costRange: 'RM50 – RM150', timeRequired: '3 lawatan / 10 minggu', bestFor: 'Bajet terhad', prosCons: 'Sangat berpatutan / Ketersediaan terhad' },
    { option: 'Kempen Vaksinasi JPV', costRange: 'RM20 – RM30 (rabies)', timeRequired: '1 lawatan', bestFor: 'Rabies sahaja', prosCons: 'Pilihan termurah / Vaksin teras sahaja' },
    { option: 'Penggalak Tahunan (Swasta)', costRange: 'RM80 – RM150', timeRequired: '1 lawatan / tahun', bestFor: 'Anjing dewasa', prosCons: 'Lawatan pantas / Komitmen tahunan' },
  ],
  relatedQuestions: [
    { question: 'Berapakah kos lawatan vet di Malaysia?', briefAnswer: 'Konsultasi vet standard berharga RM30–RM80. Dengan vaksinasi dan ubat-ubatan, jangkakan RM100–RM300 setiap lawatan.', slug: 'kos-lawatan-vet-malaysia' },
    { question: 'Apakah baka anjing terbaik untuk iklim Malaysia?', briefAnswer: 'Shih Tzu, Pudel, Beagle, dan Baka Campuran Malaysia paling tahan kepanasan tropika.', slug: 'baka-anjing-terbaik-iklim-malaysia' },
    { question: 'Adakah saya perlu lesen anjing di Malaysia?', briefAnswer: 'Ya, pelesenan anjing tahunan diperlukan oleh majlis tempatan, berharga RM10–RM50. Sijil rabies yang sah diwajibkan.', slug: 'lesen-anjing-malaysia' },
  ],
  citations: [
    { source: 'Jabatan Perkhidmatan Veterinar Malaysia', title: 'Keperluan Vaksinasi Rabies', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'Persatuan Veterinar Malaysia', title: 'Garis Panduan Protokol Vaksinasi', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: 'Pertubuhan Kesihatan Haiwan Sedunia (WOAH)', title: 'Rabies: Status Malaysia', publication: 'WOAH.org', year: '2024' },
    { source: 'Institut Penyelidikan Veterinar Malaysia', title: 'Leptospirosis pada Haiwan Domestik', publication: 'Laporan VRI', year: '2023' },
    { source: 'Akta Haiwan 1953 (Malaysia)', title: 'Peraturan mengenai Vaksinasi Haiwan', publication: 'Warta Persekutuan', year: '1953 (Dipinda 2020)' },
  ],
  author: {
    name: 'Dr. Tan Wei Ming',
    credentials: 'DVM, MRCVS, Perubatan Haiwan Kecil',
    bio: 'Pakar bedah veterinar dengan 18 tahun amalan di Kuala Lumpur dan Selangor. Pakar dalam perubatan pencegahan dan pengurusan penyakit berjangkit untuk haiwan peliharaan dalam iklim tropika.',
  },
  seo: {
    metaDescription: 'Jadual vaksinasi anjing Malaysia: DHPP pada 6-8 minggu, rabies pada 12-16 minggu, penggalak tahunan. Kos RM200-RM500 untuk siri anak anjing. Keperluan undang-undang dijelaskan.',
    keywords: ['vaksin anjing malaysia', 'jadual vaksinasi anak anjing', 'vaksin rabies malaysia', 'vaksin DHPP', 'kos vaksinasi anjing RM'],
  },
  datePublished: '2024-12-12',
  dateModified: '2025-02-08',
};

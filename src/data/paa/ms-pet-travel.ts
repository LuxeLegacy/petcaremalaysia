import type { PAAArticle } from '@/lib/paaTypes';

export const msPetTravelArticle: PAAArticle = {
  id: 110,
  slug: 'keperluan-perjalanan-haiwan-malaysia',
  category: 'pet-travel',
  lang: 'ms',
  title: 'Apakah Keperluan Perjalanan Haiwan Peliharaan di Malaysia?',
  directAnswer:
    'Membawa haiwan peliharaan keluar dari Malaysia memerlukan permit DVS (RM50–RM200), vaksin rabies sah sekurang-kurangnya 30 hari sebelum, microchip, sijil kesihatan veterinar, dan kotak pembawa diluluskan syarikat penerbangan. Jumlah kos RM500–RM3,000. Mulakan persiapan 8–12 minggu sebelum berlepas.',
  tldr: 'Perjalanan haiwan dari Malaysia: perlu permit DVS (RM50–RM200), vaksin rabies, microchip, sijil kesihatan veterinar, dan kotak pembawa IATA. Jumlah RM500–RM3,000. Ejen relokasi caj RM2,000–RM8,000. Mula 8–12 minggu lebih awal.',
  quickFacts: {
    avgCost: 'RM500 – RM3,000+ (DIY)',
    timeRequired: '4–12 minggu persediaan',
    difficulty: 'Sederhana hingga Sukar',
    professionalNeeded: 'Recommended',
    insuranceCoverage: 'Insurans perjalanan haiwan tersedia secara berasingan',
  },
  detailedAnswer: `Perjalanan dengan haiwan peliharaan di Malaysia — sama ada domestik atau antarabangsa — memerlukan perancangan teliti dan dokumentasi. Jabatan Perkhidmatan Veterinar (JPV) mengawal selia semua pergerakan haiwan untuk mencegah penularan penyakit.

Perjalanan Domestik Dalam Malaysia:
- Dengan Kereta: Tiada permit diperlukan untuk perjalanan dalam Semenanjung Malaysia. Simpan rekod vaksinasi. Antara Semenanjung dan Malaysia Timur (Sabah/Sarawak), permit JPV diperlukan.
- Dengan Udara (Domestik): Syarikat penerbangan seperti AirAsia dan Malaysia Airlines menerima haiwan dalam kargo. Yuran tempahan antara RM100–RM500 bergantung kepada saiz haiwan dan laluan. Pembawa IATA diperlukan.
- Dengan Keretapi/Bas: KTM dan kebanyakan perkhidmatan bas tidak membenarkan haiwan peliharaan. Pengangkutan persendirian adalah alternatif utama.

Perjalanan Antarabangsa — Mengeksport Haiwan DARI Malaysia:
1. Mikrocip: Mikrocip standard ISO 15 digit (RM50–RM100) mesti dipasang sebelum atau pada hari yang sama dengan vaksinasi rabies.
2. Vaksinasi Rabies: Mesti diberikan sekurang-kurangnya 30 hari sebelum perjalanan. Kos: RM40–RM80. Sesetengah negara memerlukan ujian titer rabies (RM200–RM400).
3. Permit Eksport JPV: Mohon melalui JPV sekurang-kurangnya 7 hari bekerja sebelum berlepas. Yuran: RM50–RM100. Memerlukan rekod vaksinasi, butiran mikrocip, dan keperluan negara destinasi.
4. Sijil Kesihatan: Dikeluarkan oleh doktor haiwan lantikan JPV dalam 7 hari sebelum berlepas.
5. Keperluan Negara Destinasi: Setiap negara mempunyai peraturan import unik. Negara EU memerlukan sijil kesihatan EU. Australia/NZ mempunyai keperluan paling ketat. Singapura agak mudah.

Perjalanan Antarabangsa — Mengimport Haiwan KE Malaysia:
- Permit import daripada JPV Malaysia (mohon dalam talian, RM50–RM200)
- Sijil vaksinasi rabies sah
- Sijil kesihatan daripada pihak berkuasa veterinar negara asal
- Kuarantin 7 hari di Stesen Kuarantin KLIA (RM30–RM50/hari)
- Baka terlarang tidak boleh diimport (Pit Bull Terrier, Japanese Tosa, Akita, Dogo Argentino, Fila Brasileiro)

Pilihan Syarikat Penerbangan:
- Malaysia Airlines: Haiwan dalam kargo sahaja. RM200–RM800 bergantung kepada laluan dan saiz.
- AirAsia: Haiwan dalam kargo pada laluan terpilih. RM150–RM500.
- Singapore Airlines: Haiwan dalam kargo. Terkenal dengan pengendalian yang boleh dipercayai.
- Cathay Pacific: Salah satu pembawa antarabangsa yang lebih mesra haiwan.

Ejen Pemindahan Haiwan: Pemindah haiwan profesional menguruskan semua dokumentasi, lawatan veterinar, prosedur lapangan terbang, dan pelepasan kastam. Kos antara RM2,000–RM8,000 bergantung kepada destinasi.`,
  keyFactors: [
    'Peraturan Destinasi – Setiap negara mempunyai keperluan import berbeza; kaji 8–12 minggu lebih awal',
    'Masa Vaksinasi Rabies – Mesti diberikan sekurang-kurangnya 30 hari sebelum perjalanan; sesetengah negara memerlukan 6 bulan',
    'Permit JPV – Permit eksport mengambil 7+ hari bekerja untuk diproses; jangan tangguhkan',
    'Polisi Syarikat Penerbangan – Bukan semua penerbangan menerima haiwan; ruang kargo terhad dan mesti ditempah awal',
    'Standard Mikrocip – Mesti mematuhi ISO 11784/11785 (15 digit); cip bukan standard mungkin tidak boleh dibaca',
    'Baka Terlarang – Malaysia melarang import/pemilikan beberapa baka; semak senarai baka terlarang JPV',
  ],
  steps: [
    { title: 'Kaji Keperluan Destinasi', description: 'Hubungi kedutaan negara destinasi atau jabatan pertanian untuk peraturan import haiwan yang tepat.' },
    { title: 'Lawati Doktor Haiwan (8–12 Minggu Sebelum)', description: 'Pasang mikrocip, beri vaksinasi rabies, dan bincangkan sebarang vaksin atau ujian tambahan yang diperlukan.' },
    { title: 'Dapatkan Ujian Titer Rabies (Jika Diperlukan)', description: 'Sesetengah negara (EU, Australia, Jepun) memerlukan ujian darah menunjukkan antibodi rabies mencukupi. Keputusan mengambil 2–4 minggu. Kos: RM200–RM400.' },
    { title: 'Mohon Permit Eksport JPV', description: 'Hantar permohonan kepada JPV sekurang-kurangnya 7 hari bekerja sebelum berlepas dengan semua rekod vaksinasi dan dokumentasi.' },
    { title: 'Tempah Penerbangan dan Pembawa', description: 'Tempah ruang kargo haiwan awal. Beli pembawa diluluskan IATA bersaiz sesuai untuk haiwan anda. RM150–RM500.' },
    { title: 'Dapatkan Sijil Kesihatan Akhir', description: 'Lawati doktor haiwan lantikan JPV dalam 7 hari sebelum berlepas untuk sijil kesihatan akhir.' },
    { title: 'Persediaan Hari Lapangan Terbang', description: 'Tiba 3–4 jam awal. Bawa semua dokumen asal, pembawa dengan alas penyerap, mangkuk air beku, dan selimut yang berbau biasa.' },
  ],
  proTips: [
    'Mulakan proses 12 minggu awal untuk perjalanan antarabangsa — kelewatan tidak dijangka dalam ujian titer atau permit adalah biasa',
    'Sertai kumpulan Facebook seperti "Pet Relocation Malaysia" untuk nasihat langsung dan ejen yang disyorkan',
    'Elakkan perjalanan semasa cuti sekolah Malaysia dan musim perayaan apabila ruang kargo cepat penuh',
    'Latih peti pembawa 4–6 minggu sebelum perjalanan supaya haiwan anda selesa',
    'Pertimbangkan mengupah ejen pemindahan haiwan untuk pemindahan antarabangsa pertama — yuran RM2,000–RM5,000 sering menjimatkan tekanan',
  ],
  commonMistakes: [
    'Memulakan persediaan terlalu lewat — perjalanan haiwan antarabangsa memerlukan 8–12 minggu persediaan minimum',
    'Menganggap semua penerbangan menerima haiwan — sesetengah laluan tidak membenarkan kargo haiwan; tempah awal',
    'Menggunakan mikrocip bukan ISO — pengimbas destinasi mungkin tidak membaca cip bukan standard, menyebabkan kelewatan kuarantin',
    'Melupakan keperluan perjalanan pulang — Malaysia memerlukan permit import walaupun untuk haiwan yang pulang',
    'Membius haiwan untuk penerbangan — kebanyakan syarikat penerbangan dan doktor haiwan tidak menggalakkan kerana risiko kesihatan',
  ],
  costComparison: [
    { option: 'Domestik (Semenanjung)', costRange: 'RM100 – RM500', timeRequired: '1–3 hari persediaan', bestFor: 'Perjalanan tempatan', prosCons: 'Proses mudah / Terhad kepada kereta atau kargo udara' },
    { option: 'Antarabangsa DIY (Singapura)', costRange: 'RM500 – RM1,500', timeRequired: '4–6 minggu', bestFor: 'Pemilik berpengalaman', prosCons: 'Kos efektif / Memerlukan kajian' },
    { option: 'Antarabangsa DIY (EU/US/AU)', costRange: 'RM1,500 – RM3,000', timeRequired: '8–12 minggu', bestFor: 'Pemilik berjimat-cermat', prosCons: 'Jimat wang / Dokumentasi kompleks' },
    { option: 'Ejen Pemindahan Profesional', costRange: 'RM2,000 – RM8,000', timeRequired: '6–12 minggu', bestFor: 'Perjalanan antarabangsa pertama', prosCons: 'Tanpa tekanan / Paling mahal' },
  ],
  relatedQuestions: [
    { question: 'Berapakah kos insurans haiwan di Malaysia?', briefAnswer: 'Insurans haiwan RM95–RM300/bulan. Sesetengah polisi termasuk perlindungan perjalanan tambahan.', slug: 'berapakah-kos-insurans-haiwan-malaysia' },
    { question: 'Berapakah kos lawatan veterinar di Malaysia?', briefAnswer: 'Konsultasi RM30–RM80. Sijil kesihatan perjalanan tambahan RM50–RM150.', slug: 'berapakah-kos-lawatan-veterinar-malaysia' },
    { question: 'Vaksin apa yang diperlukan anjing di Malaysia?', briefAnswer: 'Vaksin teras termasuk distemper, parvovirus, dan rabies. Rabies penting untuk perjalanan haiwan.', slug: 'vaksin-yang-diperlukan-anjing-malaysia' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'Unit Import/Eksport JPV', detail: '03-8870 2000 (Isnin-Jumaat 8pg-5ptg)' },
      { name: 'Stesen Kuarantin KLIA', detail: '03-8787 4252' },
    ],
    governmentResources: [
      { name: 'Portal Perjalanan Haiwan JPV', detail: 'Permit dan keperluan rasmi', url: 'https://www.dvs.gov.my' },
      { name: 'Perkhidmatan Kuarantin & Pemeriksaan Malaysia (MAQIS)', detail: 'Prosedur kuarantin lapangan terbang', url: 'https://www.maqis.gov.my' },
    ],
    animalWelfare: [
      { name: 'Pet Movers Malaysia', detail: 'Perkhidmatan pemindahan haiwan profesional' },
      { name: 'Ferndale Kennels & Cattery', detail: 'Penginapan haiwan dan bantuan perjalanan', url: 'https://www.ferndale.com.my' },
    ],
  },
  insurance: {
    covered: ['Kecemasan veterinar berkaitan perjalanan (dengan tambahan)', 'Haiwan hilang semasa transit (polisi terpilih)', 'Pembatalan perjalanan kerana penyakit haiwan'],
    exclusions: ['Kos perjalanan standard', 'Yuran kargo penerbangan', 'Yuran penginapan kuarantin', 'Kos dokumentasi dan permit'],
    claimSteps: ['Beli insurans perjalanan haiwan tambahan sebelum berlepas', 'Dokumentasikan sebarang insiden semasa perjalanan dengan foto dan laporan veterinar', 'Hantar tuntutan dengan semua dokumen sokongan dalam 30 hari', 'Susulan dengan penanggung insurans untuk kemas kini pemprosesan'],
  },
  citations: [
    { source: 'Jabatan Perkhidmatan Veterinar Malaysia', title: 'Prosedur Import & Eksport Haiwan', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: 'Persatuan Pengangkutan Udara Antarabangsa', title: 'Peraturan Haiwan Hidup (LAR)', publication: 'IATA.org', year: '2024', url: 'https://www.iata.org' },
    { source: 'MAQIS', title: 'Keperluan Kuarantin Haiwan', publication: 'MAQIS.gov.my', year: '2024', url: 'https://www.maqis.gov.my' },
    { source: 'Malaysia Airlines', title: 'Polisi Perjalanan Haiwan', publication: 'MalaysiaAirlines.com', year: '2024', url: 'https://www.malaysiaairlines.com' },
  ],
  author: {
    name: 'Dr. Mei Ling Tan',
    credentials: 'DVM, Perunding Perjalanan Haiwan Bertauliah',
    bio: 'Doktor haiwan dengan 8 tahun pengalaman khusus dalam pensijilan kesihatan perjalanan haiwan. Telah membantu lebih 500 keluarga memindahkan haiwan peliharaan dari Malaysia ke luar negara.',
  },
  seo: {
    metaDescription: 'Keperluan perjalanan haiwan Malaysia: permit JPV, vaksinasi rabies, mikrocip, peraturan penerbangan & kos (RM500-RM3,000). Panduan langkah demi langkah lengkap.',
    keywords: ['perjalanan haiwan malaysia', 'bawa haiwan ke malaysia', 'permit eksport JPV', 'pemindahan haiwan malaysia', 'terbang dengan haiwan malaysia'],
  },
  datePublished: '2025-02-01',
  dateModified: '2025-02-08',
};

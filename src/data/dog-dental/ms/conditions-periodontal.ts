import type { DentalConditionPage } from '../types';

export const msConditionsPeriodontal: DentalConditionPage = {
  slug: 'periodontal-disease',
  category: 'conditions',
  lang: 'ms',
  title: 'Penyakit Periodontal pada Anjing: Peringkat, Tanda & Pilihan Rawatan',
  overview: `Penyakit periodontal ialah pemusnahan progresif struktur penyokong gigi — termasuk gusi, tulang, dan ligamen. Ia adalah penyakit paling biasa pada anjing dewasa dan tidak boleh dipulihkan sebaik sahaja kehilangan tulang berlaku.

Penyakit ini berkembang melalui empat peringkat: Peringkat 1 (gingivitis sahaja), Peringkat 2 (kehilangan tulang awal sehingga 25%), Peringkat 3 (kehilangan tulang sederhana 25–50%), dan Peringkat 4 (kehilangan tulang lanjutan melebihi 50%). Rawatan berfokus pada melambatkan perkembangan dan mengurus kesakitan.`,
  signs: ['Nafas berbau yang berterusan', 'Gigi longgar atau hilang', 'Gusi yang surut', 'Kesukaran makan atau menjatuhkan makanan', 'Gusi berdarah', 'Lelehan hidung (kes lanjutan)', 'Bengkak muka (abses akar gigi)'],
  severityStages: [
    { stage: 'Peringkat 1 — Gingivitis', description: 'Keradangan gusi sahaja. Tiada kehilangan tulang. Boleh dipulihkan sepenuhnya.' },
    { stage: 'Peringkat 2 — Periodontitis Awal', description: 'Kehilangan tulang sehingga 25% pada X-ray. Kehilangan perlekatan ringan. Pembersihan profesional boleh menghentikan perkembangan.' },
    { stage: 'Peringkat 3 — Periodontitis Sederhana', description: 'Kehilangan tulang 25–50%. Gigi mungkin menjadi goyang. Pencabutan mungkin diperlukan untuk gigi yang terjejas.' },
    { stage: 'Peringkat 4 — Periodontitis Lanjutan', description: 'Kehilangan tulang lebih 50%. Gigi sangat goyang. Pencabutan biasanya diperlukan. Risiko komplikasi sistemik.' },
  ],
  redFlags: ['Bengkak muka atau bengkak di bawah mata', 'Enggan makan lebih 24 jam', 'Darah dalam mangkuk air atau pada mainan', 'Perubahan tingkah laku mendadak (bersembunyi, agresif bila disentuh berhampiran mulut)', 'Demam atau kelesuan'],
  diagnosisOverview: 'Penilaian penuh memerlukan X-ray gigi di bawah bius, kerana lebih 60% penyakit gigi berlaku di bawah garisan gusi dan tidak kelihatan pada pemeriksaan mulut sahaja.',
  treatmentCategories: [
    { label: 'Pembersihan Profesional', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: 'Pencabutan Gigi', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Terapi Antibiotik', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pengurusan Kesakitan', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: 'Pemulihan bergantung pada rawatan yang dilakukan. Pembersihan mudah: 1–2 hari. Pencabutan berganda: 5–14 hari makanan lembut dan sekatan aktiviti. Penyembuhan penuh: 2–4 minggu.',
  prevention: 'Memberus gigi setiap hari, pemeriksaan gigi tahunan, dan pembersihan profesional seperti yang disyorkan oleh doktor haiwan anda adalah pertahanan terbaik terhadap penyakit periodontal.',
  whenToSeeVet: 'Mana-mana anjing dengan nafas berbau yang berterusan, karang gigi yang kelihatan, gigi longgar, atau kesukaran makan perlu dinilai oleh doktor haiwan dengan segera.',
  faqs: [
    { question: 'Bolehkah penyakit periodontal pada anjing disembuhkan?', answer: 'Kehilangan tulang daripada penyakit periodontal tidak boleh dipulihkan. Rawatan berfokus pada membuang tisu yang berpenyakit, mencabut gigi yang terjejas teruk, dan mencegah perkembangan selanjutnya.' },
    { question: 'Adakah penyakit periodontal menyakitkan untuk anjing?', answer: 'Ya, tetapi anjing mahir menyembunyikan kesakitan. Tanda-tanda termasuk keengganan makan makanan keras, menjatuhkan makanan, mengelak kepala disentuh, dan perubahan tingkah laku.' },
  ],
  seo: {
    metaTitle: 'Penyakit Periodontal pada Anjing | Panduan Peringkat & Rawatan',
    metaDescription: 'Panduan lengkap penyakit periodontal pada anjing: fahami 4 peringkat dari gingivitis hingga kehilangan tulang lanjutan, kenal pasti tanda-tanda, dan ketahui pilihan rawatan di Malaysia.',
    keywords: ['penyakit periodontal anjing', 'peringkat penyakit gusi anjing', 'kehilangan tulang gigi anjing', 'rawatan periodontal anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Keterukan Lanjutan', path: '/dog-dental-disease/severity/advanced' },
  ],
};

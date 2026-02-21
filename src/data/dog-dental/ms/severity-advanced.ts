import type { DentalSeverityPage } from '../types';

export const msSeverityAdvanced: DentalSeverityPage = {
  slug: 'advanced', category: 'severity', lang: 'ms',
  title: 'Penyakit Gigi Anjing Lanjutan: Periodontitis Peringkat 4',
  overview: 'Penyakit gigi lanjutan (Peringkat 4 periodontitis) melibatkan kehilangan tulang lebih 50% di sekitar gigi yang terjejas. Gigi sangat goyang atau sudah hilang. Peringkat ini membawa risiko komplikasi sistemik yang ketara kerana bakteria mulut boleh memasuki aliran darah dan menjejaskan jantung, buah pinggang, dan hati. Rawatan agresif di bawah bius biasanya diperlukan.',
  progression: [
    { stage: 'Peringkat 4 — Periodontitis Lanjutan', description: 'Kehilangan tulang lebih 50%. Gigi sangat goyang. Pelbagai gigi mungkin terjejas.', action: 'Prosedur gigi komprehensif dengan pencabutan berganda kemungkinan besar. Pengurusan kesakitan penting.' },
    { stage: 'Risiko Sistemik', description: 'Jangkitan mulut kronik boleh merebakkan bakteria ke organ utama.', action: 'Rawatan segera mengurangkan risiko kesihatan sistemik. Ujian darah mungkin disyorkan.' },
  ],
  associatedConditions: [
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  associatedTreatments: [
    { label: 'Pencabutan Gigi', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: 'Terapi Antibiotik', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: 'Pengurusan Kesakitan', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: 'Bolehkah anjing hidup dengan baik selepas pencabutan gigi berganda?', answer: 'Ya. Anjing menyesuaikan diri dengan sangat baik selepas pencabutan. Kebanyakan pemilik melaporkan peningkatan selera makan, tenaga, dan tingkah laku sebaik sahaja sumber kesakitan kronik dibuang.' },
  ],
  seo: {
    metaTitle: 'Penyakit Gigi Anjing Lanjutan | Panduan Peringkat 4',
    metaDescription: 'Penyakit periodontal lanjutan pada anjing melibatkan kehilangan tulang teruk dan risiko sistemik. Ketahui tentang jangkaan rawatan, pencabutan, dan pemulihan untuk penyakit gigi Peringkat 4.',
    keywords: ['penyakit gigi lanjutan anjing', 'periodontitis peringkat 4 anjing', 'penyakit gigi anjing teruk', 'kehilangan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Keterukan Sederhana', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Tanda Kecemasan', path: '/dog-dental-disease/emergency-signs' },
  ],
};

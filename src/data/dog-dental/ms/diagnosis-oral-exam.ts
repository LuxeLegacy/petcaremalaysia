import type { DentalDiagnosisPage } from '../types';

export const msDiagnosisOralExam: DentalDiagnosisPage = {
  slug: 'oral-exam', category: 'diagnosis', lang: 'ms',
  title: 'Pemeriksaan Mulut Veterinar untuk Anjing: Apa yang Dijangkakan',
  overview: 'Pemeriksaan mulut veterinar adalah asas diagnosis penyakit gigi. Semasa lawatan rutin, doktor haiwan anda boleh melakukan pemeriksaan mulut semasa anjing terjaga untuk menilai karang gigi yang kelihatan, warna gusi, dan keabnormalan yang jelas. Namun, pemeriksaan mulut komprehensif di bawah bius diperlukan untuk penilaian menyeluruh.',
  whatItInvolves: 'Pemeriksaan semasa terjaga memeriksa permukaan gigi yang kelihatan, warna gusi, dan nafas. Pemeriksaan komprehensif di bawah bius membolehkan doktor haiwan memeriksa setiap gigi, menprob poket gusi, memeriksa kegoyangan, dan menilai lidah, lelangit, dan tisu mulut.',
  whenRecommended: 'Pemeriksaan mulut tahunan disyorkan untuk semua anjing. Pemeriksaan di bawah bius disyorkan apabila penyakit gigi disyaki, sebelum pembersihan profesional, atau jika anjing menunjukkan gejala gigi.',
  whatItReveals: 'Pemeriksaan mulut boleh mendedahkan pengumpulan karang gigi, gingivitis, gigi yang patah, jisim mulut, kegoyangan gigi, dan penyusutan gusi. Namun, lebih 60% penyakit gigi berada di bawah garisan gusi — X-ray gigi diperlukan untuk gambaran lengkap.',
  associatedConditions: [
    { label: 'Pengumpulan Plak', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'Adakah anjing saya memerlukan bius untuk pemeriksaan gigi?', answer: 'Pemeriksaan visual asas boleh dilakukan semasa terjaga. Namun, pemeriksaan menyeluruh dengan probing dan X-ray memerlukan bius untuk keselamatan dan ketepatan.' },
  ],
  seo: {
    metaTitle: 'Pemeriksaan Mulut Veterinar untuk Anjing | Apa yang Dijangkakan',
    metaDescription: 'Ketahui apa yang berlaku semasa pemeriksaan mulut veterinar untuk anjing, bila bius diperlukan, dan apa yang didedahkan oleh pemeriksaan tentang kesihatan gigi anjing anda.',
    keywords: ['pemeriksaan mulut anjing', 'semakan gigi doktor haiwan anjing', 'pemeriksaan gigi anjing', 'semakan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Probing Gigi', path: '/dog-dental-disease/diagnosis/dental-probing' },
    { label: 'X-Ray Gigi', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

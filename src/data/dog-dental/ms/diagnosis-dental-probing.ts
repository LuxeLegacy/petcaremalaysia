import type { DentalDiagnosisPage } from '../types';

export const msDiagnosisDentalProbing: DentalDiagnosisPage = {
  slug: 'dental-probing', category: 'diagnosis', lang: 'ms',
  title: 'Probing Gigi pada Anjing: Mengukur Penyakit Gusi',
  overview: 'Probing gigi ialah teknik diagnostik di mana doktor haiwan menggunakan prob nipis dan berkalibrasi untuk mengukur kedalaman poket gusi di sekitar setiap gigi. Ia dilakukan di bawah bius sebagai sebahagian daripada penilaian gigi komprehensif dan penting untuk menentukan peringkat penyakit periodontal.',
  whatItInvolves: 'Prob periodontal dimasukkan dengan lembut di antara gigi dan gusi pada pelbagai titik di sekitar setiap gigi. Bacaan kedalaman (dalam milimeter) menunjukkan kesihatan gusi: 0–3mm adalah normal, 4–5mm menunjukkan penyakit awal hingga sederhana, dan 6mm+ menunjukkan penyakit periodontal lanjutan.',
  whenRecommended: 'Probing gigi dilakukan semasa setiap pembersihan gigi profesional di bawah bius. Ia penting untuk mencipta pelan rawatan dan mendokumentasikan perkembangan penyakit antara lawatan.',
  whatItReveals: 'Probing mendedahkan tahap kehilangan perlekatan gusi di sekitar setiap gigi, membantu doktor haiwan mengenal pasti gigi mana yang mempunyai penyakit aktif, mana yang boleh diselamatkan, dan mana yang mungkin perlu dicabut.',
  associatedConditions: [
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: 'Adakah probing gigi menyakitkan untuk anjing?', answer: 'Probing gigi dilakukan di bawah bius, jadi anjing anda tidak merasa sakit semasa prosedur.' },
  ],
  seo: {
    metaTitle: 'Probing Gigi pada Anjing | Pengukuran Penyakit Gusi',
    metaDescription: 'Probing gigi mengukur kedalaman poket gusi untuk menentukan peringkat penyakit periodontal pada anjing. Ketahui bagaimana alat diagnostik ini membantu doktor haiwan merancang rawatan gigi.',
    keywords: ['probing gigi anjing', 'kedalaman poket gusi anjing', 'probing periodontal anjing', 'diagnosis gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Pemeriksaan Mulut', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: 'X-Ray Gigi', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

import type { DentalDiagnosisPage } from '../types';

export const msDiagnosisDentalXrays: DentalDiagnosisPage = {
  slug: 'dental-x-rays', category: 'diagnosis', lang: 'ms',
  title: 'X-Ray Gigi untuk Anjing: Melihat Di Bawah Garisan Gusi',
  overview: 'Radiograf gigi (X-ray) adalah alat diagnostik paling penting dalam pergigian veterinar. Lebih 60% penyakit gigi pada anjing berlaku di bawah garisan gusi dan tidak kelihatan semasa pemeriksaan visual. X-ray mulut penuh di bawah bius adalah standard utama untuk penilaian gigi komprehensif.',
  whatItInvolves: 'Sensor X-ray kecil diletakkan di dalam mulut anjing semasa di bawah bius. Pelbagai imej diambil untuk menangkap semua akar gigi dan tulang di sekitarnya. X-ray digital memberikan hasil segera dengan pendedahan radiasi minimum.',
  whenRecommended: 'X-ray gigi mulut penuh disyorkan semasa setiap pembersihan gigi profesional, apabila penyakit gigi disyaki, sebelum pencabutan, dan untuk menilai trauma atau patah.',
  whatItReveals: 'X-ray gigi mendedahkan kesihatan akar gigi, kehilangan tulang di sekitar gigi, abses tersembunyi, gigi yang tidak tumbuh atau terimpak, patah rahang, penyerapan gigi, dan tumor yang tidak kelihatan pada pemeriksaan mulut.',
  associatedConditions: [
    { label: 'Penyakit Periodontal', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: 'Adakah X-ray gigi selamat untuk anjing?', answer: 'Ya. X-ray gigi digital moden menggunakan dos radiasi yang sangat rendah. Manfaat diagnostik jauh melebihi risiko radiasi minimum.' },
    { question: 'Mengapa doktor haiwan saya tidak boleh hanya melihat gigi?', answer: 'Lebih 60% penyakit gigi tersembunyi di bawah garisan gusi. Gigi boleh kelihatan normal pada permukaan sambil mempunyai penyakit akar atau kehilangan tulang yang ketara yang hanya kelihatan pada X-ray.' },
  ],
  seo: {
    metaTitle: 'X-Ray Gigi untuk Anjing | Diagnosis Di Bawah Garisan Gusi',
    metaDescription: 'X-ray gigi mendedahkan penyakit tersembunyi di bawah garisan gusi anjing anda. Ketahui mengapa radiograf penting untuk diagnosis gigi yang tepat dan perancangan rawatan.',
    keywords: ['x-ray gigi anjing', 'radiograf gigi anjing', 'x-ray gigi anjing', 'pengimejan gigi veterinar'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Pemeriksaan Mulut', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: 'Probing Gigi', path: '/dog-dental-disease/diagnosis/dental-probing' },
  ],
};

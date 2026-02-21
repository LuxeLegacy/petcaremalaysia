import type { DentalEmergencyPage } from '../types';

export const msEmergencySigns: DentalEmergencyPage = {
  slug: 'emergency-signs', category: 'emergency', lang: 'ms',
  title: 'Tanda Kecemasan Gigi Anjing: Bila Perlu Dapatkan Rawatan Segera',
  overview: 'Walaupun kebanyakan penyakit gigi pada anjing berkembang secara beransur-ansur, tanda-tanda tertentu menunjukkan kecemasan yang memerlukan perhatian veterinar segera. Mengenal pasti tanda-tanda ini boleh mencegah komplikasi serius termasuk jangkitan sistemik.',
  emergencySigns: [
    { sign: 'Bengkak muka', description: 'Bengkak sebelah di bawah atau sekitar mata, sering daripada abses akar gigi.', urgency: 'Jumpa doktor haiwan dalam 24 jam' },
    { sign: 'Bengkak di bawah mata', description: 'Tanda klasik abses gigi karnasial atas. Mungkin pecah melalui kulit.', urgency: 'Jumpa doktor haiwan dalam 24 jam' },
    { sign: 'Enggan makan sepenuhnya', description: 'Menunjukkan kesakitan mulut yang teruk. Boleh menyebabkan dehidrasi jika berpanjangan.', urgency: 'Jumpa doktor haiwan dalam 24 jam' },
    { sign: 'Pendarahan yang tidak berhenti', description: 'Pendarahan mulut berterusan lebih 10 minit.', urgency: 'Jumpa doktor haiwan hari yang sama' },
    { sign: 'Demam dengan tanda mulut', description: 'Suhu melebihi 39.5°C (103°F) dengan gejala gigi mencadangkan jangkitan sistemik.', urgency: 'Jumpa doktor haiwan hari yang sama' },
    { sign: 'Kelesuan mendadak', description: 'Kekurangan tenaga yang tidak dijangka digabungkan dengan gejala gigi mungkin menunjukkan jangkitan yang merebak.', urgency: 'Jumpa doktor haiwan hari yang sama' },
  ],
  immediateActions: [
    'Pastikan anjing anda tenang dan selesa',
    'Jangan cuba memeriksa mulut jika anjing anda dalam kesakitan teruk — ia mungkin menggigit',
    'Tawarkan makanan lembut atau air jika ia mahu menerima',
    'Catat bila gejala bermula dan sebarang perubahan',
    'Hubungi doktor haiwan anda atau klinik veterinar kecemasan terdekat dengan segera',
  ],
  whenToSeeVet: 'Mana-mana tanda yang disenaraikan di atas memerlukan rawatan veterinar pada hari yang sama atau hari berikutnya. Jika anjing anda menunjukkan pelbagai tanda secara serentak (cth., bengkak muka dengan demam dan enggan makan), dapatkan rawatan kecemasan dengan segera.',
  faqs: [
    { question: 'Adakah masalah gigi pernah menjadi kecemasan sebenar pada anjing?', answer: 'Ya. Abses akar gigi dengan jangkitan sistemik (demam, kelesuan), pendarahan mulut yang tidak terkawal, atau patah rahang daripada kehilangan tulang lanjutan adalah kecemasan sebenar yang memerlukan rawatan veterinar segera.' },
    { question: 'Apa yang patut saya lakukan semasa menunggu untuk jumpa doktor haiwan?', answer: 'Pastikan anjing anda selesa, tawarkan air, elak menyentuh kawasan yang sakit, dan catat semua gejala serta garis masa mereka untuk dikongsi dengan doktor haiwan.' },
  ],
  seo: {
    metaTitle: 'Tanda Kecemasan Gigi Anjing | Bila Perlu Rawatan Segera',
    metaDescription: 'Kenali kecemasan gigi anjing: bengkak muka, enggan makan, pendarahan tidak terkawal, dan demam. Ketahui bila perlu mendapatkan rawatan veterinar segera untuk anjing anda.',
    keywords: ['kecemasan gigi anjing', 'kecemasan gigi anjing', 'bengkak muka kecemasan anjing', 'rawatan gigi segera anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Bengkak Muka', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: 'Abses Akar Gigi', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: 'Cari Doktor Haiwan Kecemasan', path: '/ms/emergency-guide' },
  ],
};

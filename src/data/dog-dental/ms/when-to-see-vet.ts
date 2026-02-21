import type { DentalEmergencyPage } from '../types';

export const msWhenToSeeVet: DentalEmergencyPage = {
  slug: 'when-to-see-a-vet', category: 'emergency', lang: 'ms',
  title: 'Bila Perlu Jumpa Doktor Haiwan untuk Masalah Gigi Anjing',
  overview: 'Mengetahui bila untuk menjadualkan temu janji gigi veterinar berbanding bila perlu mendapatkan rawatan segera adalah penting untuk kesihatan anjing anda dan ketenangan fikiran anda. Panduan ini membantu anda menentukan tahap penjagaan yang sesuai berdasarkan gejala anjing anda.',
  emergencySigns: [
    { sign: 'Nafas berbau', description: 'Halitosis berterusan yang semakin teruk dari semasa ke semasa.', urgency: 'Jadualkan pemeriksaan gigi rutin (dalam 1–2 minggu)' },
    { sign: 'Gusi merah atau bengkak', description: 'Keradangan gusi yang kelihatan di sepanjang garisan gigi.', urgency: 'Jadualkan pemeriksaan gigi (dalam 1 minggu)' },
    { sign: 'Pengumpulan karang gigi', description: 'Mendapan kuning-coklat yang kelihatan pada gigi.', urgency: 'Jadualkan pemeriksaan gigi (dalam 2–4 minggu)' },
    { sign: 'Kesukaran makan atau menjatuhkan makanan', description: 'Perubahan tingkah laku makan yang mencadangkan kesakitan mulut.', urgency: 'Jumpa doktor haiwan dalam beberapa hari' },
    { sign: 'Bengkak muka', description: 'Bengkak pada muka, terutama di bawah mata.', urgency: 'Jumpa doktor haiwan dalam 24 jam' },
    { sign: 'Pendarahan, demam, atau enggan makan', description: 'Pelbagai tanda membimbangkan yang muncul bersama.', urgency: 'Jumpa doktor haiwan hari yang sama / kecemasan' },
  ],
  immediateActions: [
    'Nilai gejala mana yang ditunjukkan oleh anjing anda',
    'Periksa sama ada pelbagai gejala hadir serentak',
    'Untuk tanda-tanda rutin, jadualkan pemeriksaan gigi veterinar',
    'Untuk tanda-tanda mendesak, hubungi doktor haiwan anda untuk ketersediaan hari yang sama atau hari berikutnya',
    'Untuk tanda-tanda kecemasan, pergi ke klinik veterinar kecemasan terdekat',
  ],
  whenToSeeVet: 'Apabila ragu-ragu, sentiasa berhati-hati dan jumpa doktor haiwan anda lebih awal. Penyakit gigi berkembang — masalah yang memerlukan pembersihan mudah hari ini mungkin memerlukan pencabutan jika ditangguhkan.',
  faqs: [
    { question: 'Berapa kerap saya perlu memeriksa gigi anjing saya?', answer: 'Pemeriksaan gigi tahunan disyorkan untuk semua anjing. Anjing dengan sejarah penyakit gigi atau baka kecil mungkin mendapat manfaat daripada pemeriksaan setiap 6 bulan.' },
    { question: 'Bolehkah saya tunggu dan lihat sama ada gejala gigi membaik dengan sendiri?', answer: 'Penyakit gigi pada anjing tidak membaik tanpa rawatan. Menangguhkan penjagaan membenarkan penyakit berkembang, mengakibatkan rawatan yang lebih kompleks dan mahal.' },
  ],
  seo: {
    metaTitle: 'Bila Perlu Jumpa Doktor Haiwan untuk Masalah Gigi Anjing | Panduan Kedaruratan',
    metaDescription: 'Tidak pasti sama ada gejala gigi anjing anda memerlukan rawatan segera? Gunakan panduan ini untuk menentukan bila perlu jadualkan pemeriksaan gigi rutin berbanding mendapatkan rawatan veterinar kecemasan.',
    keywords: ['bila jumpa doktor haiwan gigi anjing', 'lawatan gigi anjing doktor haiwan', 'masalah gigi anjing doktor haiwan', 'kedaruratan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Tanda Kecemasan', path: '/dog-dental-disease/emergency-signs' },
    { label: 'Cari Doktor Haiwan', path: '/ms/locations' },
    { label: 'Pemeriksaan Gigi', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

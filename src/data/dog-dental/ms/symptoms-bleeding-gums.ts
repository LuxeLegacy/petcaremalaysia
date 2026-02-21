import type { DentalSymptomPage } from '../types';

export const msSymptomsBleedingGums: DentalSymptomPage = {
  slug: 'bleeding-gums', category: 'symptoms', lang: 'ms',
  title: 'Gusi Berdarah pada Anjing: Punca & Tindakan',
  overview: 'Gusi berdarah pada anjing adalah tanda jelas penyakit gusi. Walaupun pendarahan ringan semasa percubaan memberus gigi pertama boleh menjadi normal, pendarahan spontan atau pendarahan semasa makan menunjukkan gingivitis atau penyakit periodontal yang lebih lanjutan.',
  whatItIndicates: 'Gusi berdarah menunjukkan keradangan aktif — paling kerap gingivitis atau penyakit periodontal. Darah pada mainan kunyah, dalam mangkuk air, atau kelihatan apabila anjing makan adalah tanda-tanda penting.',
  oralVsOtherCauses: 'Kebanyakan gusi berdarah pada anjing berasal dari gigi. Namun, gangguan pendarahan, ubat tertentu, atau trauma juga boleh menyebabkan pendarahan mulut. Doktor haiwan anda boleh membezakan melalui pemeriksaan dan ujian darah jika perlu.',
  emergencyRedFlags: ['Pendarahan yang tidak berhenti dalam 10 minit', 'Pendarahan berat dari mulut', 'Pendarahan disertai bengkak muka', 'Gusi pucat dengan pendarahan mulut'],
  severityRouting: [
    { label: 'Sederhana (pendarahan sesekali)', path: '/dog-dental-disease/severity/moderate' },
    { label: 'Lanjutan (pendarahan spontan atau berat)', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: 'Doktor haiwan anda akan memeriksa sumber pendarahan, memeriksa gigi longgar, dan menilai kesihatan gusi. X-ray gigi mungkin diperlukan untuk menilai sokongan tulang di sekitar kawasan yang berdarah.',
  carePathways: [
    { label: 'Adakah ini gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Mungkinkah ia penyakit periodontal?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Adakah normal untuk gusi anjing berdarah semasa memberus gigi?', answer: 'Pendarahan ringan semasa beberapa sesi memberus gigi pertama boleh berlaku jika gusi sudah meradang sedikit. Jika pendarahan berterusan melebihi seminggu memberus gigi lembut atau berat, jumpa doktor haiwan anda.' },
  ],
  seo: {
    metaTitle: 'Gusi Berdarah pada Anjing | Punca & Bila Perlu Bimbang',
    metaDescription: 'Gusi berdarah pada anjing memberi isyarat penyakit gusi. Ketahui punca pendarahan mulut, bila ia kecemasan, dan kepentingan penilaian gigi veterinar.',
    keywords: ['gusi berdarah anjing', 'darah gusi anjing', 'darah pada mainan anjing', 'pendarahan gigi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gusi Merah', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Tanda Kecemasan', path: '/dog-dental-disease/emergency-signs' },
  ],
};

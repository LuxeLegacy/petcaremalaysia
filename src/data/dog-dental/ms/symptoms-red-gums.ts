import type { DentalSymptomPage } from '../types';

export const msSymptomsRedGums: DentalSymptomPage = {
  slug: 'red-gums', category: 'symptoms', lang: 'ms',
  title: 'Gusi Merah pada Anjing: Maksud Keradangan Gusi',
  overview: 'Gusi merah (eritema) pada anjing adalah tanda utama gingivitis — keradangan tisu gusi yang disebabkan oleh pengumpulan plak bakteria. Gusi anjing yang sihat sepatutnya berwarna merah jambu yang konsisten. Sebarang kemerahan, terutama di sepanjang garisan gusi di mana gigi bertemu tisu, memerlukan perhatian.',
  whatItIndicates: 'Gusi merah paling kerap menunjukkan gingivitis daripada pengumpulan plak/karang gigi. Ia juga boleh memberi isyarat penyakit periodontal awal, reaksi alahan, atau dalam kes jarang, penyakit sistemik.',
  oralVsOtherCauses: 'Kemerahan berkaitan gigi biasanya tertumpu di sepanjang garisan gusi dan disertai karang gigi. Kemerahan menyeluruh di seluruh mulut mungkin mencadangkan stomatitis, keadaan autoimun, atau pendedahan toksik.',
  emergencyRedFlags: ['Gusi yang berwarna merah gelap, ungu, atau biru', 'Gusi putih atau sangat pucat (anemia)', 'Gusi merah dengan bengkak muka', 'Pendarahan yang tidak berhenti'],
  severityRouting: [
    { label: 'Awal (kemerahan ringan di garisan gusi)', path: '/dog-dental-disease/severity/early' },
    { label: 'Sederhana (bengkak dan kemerahan kelihatan)', path: '/dog-dental-disease/severity/moderate' },
  ],
  vetEvaluation: 'Doktor haiwan anda akan memeriksa warna gusi, bengkak, dan kecenderungan berdarah. Probing gigi mengukur kedalaman poket di sekitar gigi untuk menentukan sama ada keradangan telah berkembang melepasi permukaan gusi.',
  carePathways: [
    { label: 'Adakah ini gingivitis?', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: 'Mungkinkah ia penyakit periodontal?', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: 'Bila perlu jumpa doktor haiwan', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: 'Apakah warna gusi anjing yang sihat?', answer: 'Gusi anjing yang sihat sepatutnya berwarna merah jambu yang konsisten. Sesetengah anjing secara semula jadi mempunyai gusi berpigmen gelap — dalam kes ini, perhatikan perubahan pada kawasan yang tidak berpigmen.' },
    { question: 'Adakah gusi merah menyakitkan untuk anjing?', answer: 'Gusi yang meradang boleh menjadi lembut dan tidak selesa. Anjing anda mungkin menunjukkan ini dengan enggan makan makanan keras atau berpaling apabila anda cuba memeriksa mulut mereka.' },
  ],
  seo: {
    metaTitle: 'Gusi Merah pada Anjing | Punca & Penjagaan Keradangan Gusi',
    metaDescription: 'Gusi merah pada anjing memberi isyarat gingivitis atau penyakit gigi. Ketahui maksud keradangan gusi, cara menilai keterukan, dan bila anjing anda memerlukan perhatian veterinar.',
    keywords: ['gusi merah anjing', 'keradangan gusi anjing', 'tanda gingivitis anjing', 'warna gusi anjing'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM, Berlesen Majlis Veterinar Malaysia', bio: 'Pakar veterinar dengan 12 tahun pengalaman klinikal di Malaysia.' },
  datePublished: '2026-02-20', dateModified: '2026-02-21',
  relatedLinks: [
    { label: 'Gusi Bengkak', path: '/dog-dental-disease/symptoms/swollen-gums' },
    { label: 'Gusi Berdarah', path: '/dog-dental-disease/symptoms/bleeding-gums' },
    { label: 'Gingivitis', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
};

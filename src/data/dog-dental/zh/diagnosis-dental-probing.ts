import type { DentalDiagnosisPage } from '../types';

export const zhDiagnosisDentalProbing: DentalDiagnosisPage = {
  slug: 'dental-probing',
  category: 'diagnosis',
  lang: 'zh',
  title: '犬牙科探针检查：测量牙龈病',
  overview: `牙科探针检查是一种诊断技术，兽医使用细长的校准探针测量每颗牙齿周围牙龈袋的深度。它在麻醉下作为综合牙科评估的一部分进行，对牙周病分期至关重要。`,
  whatItInvolves: '牙周探针轻柔地插入每颗牙齿周围多个点的牙齿和牙龈之间。深度读数（毫米）表示牙龈健康：0-3mm为正常，4-5mm表示早期到中期疾病，6mm以上表示晚期牙周病。',
  whenRecommended: '在每次麻醉下专业清洁期间都会进行牙科探针检查。它对于制定治疗计划和记录两次就诊之间的疾病进展至关重要。',
  whatItReveals: '探针检查揭示每颗牙齿周围牙龈附着丧失的程度，帮助兽医确定哪些牙齿有活跃疾病、哪些可以保留、哪些可能需要拔除。',
  associatedConditions: [
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: '牙科探针检查对狗来说疼痛吗？', answer: '牙科探针检查在麻醉下进行，所以您的狗在过程中不会感到疼痛。' },
  ],
  seo: {
    metaTitle: '犬牙科探针检查 | 牙龈病测量',
    metaDescription: '牙科探针检查测量牙龈袋深度以对犬牙周病进行分期。了解此诊断工具如何帮助兽医规划牙科治疗。',
    keywords: ['犬牙科探针', '牙龈袋深度狗', '牙周探针狗', '犬牙科诊断'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '口腔检查', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: '牙科X光', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

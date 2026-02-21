import type { DentalSeverityPage } from '../types';

export const zhSeverityModerate: DentalSeverityPage = {
  slug: 'moderate',
  category: 'severity',
  lang: 'zh',
  title: '犬中期牙科疾病：牙周病进展',
  overview: `中期牙科疾病代表牙周病第2-3期，炎症已延伸到牙龈线以下，骨质流失已开始（最多50%）。此阶段必须进行专业治疗，以防止牙齿脱落和全身并发症。`,
  progression: [
    { stage: '第2期——早期牙周炎', description: '牙科X光可见最多25%骨质流失。牙龈袋加深。', action: '麻醉下专业清洁和龈下刮治。每天家庭护理至关重要。' },
    { stage: '第3期——中度牙周炎', description: '25-50%骨质流失。部分牙齿可能变得松动。持续口臭。', action: '专业清洁，可能需要拔牙，持续兽医监测。' },
  ],
  associatedConditions: [
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: '疼痛管理', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: '中期牙周病可以逆转吗？', answer: '不可以。一旦发生骨质流失，就不可逆转。治疗旨在阻止进一步恶化、管理疼痛并保护剩余健康牙齿。' },
  ],
  seo: {
    metaTitle: '犬中期牙科疾病 | 牙周病第2-3期',
    metaDescription: '犬中期牙科疾病涉及骨质流失和牙龈袋加深。了解预期情况、治疗选择，以及为什么及时护理可防止牙齿脱落。',
    keywords: ['中期牙科疾病狗', '牙周病第2期', '狗牙齿骨质流失', '狗需要牙科治疗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '早期严重程度', path: '/dog-dental-disease/severity/early' },
    { label: '晚期严重程度', path: '/dog-dental-disease/severity/advanced' },
  ],
};

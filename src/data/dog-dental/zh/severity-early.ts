import type { DentalSeverityPage } from '../types';

export const zhSeverityEarly: DentalSeverityPage = {
  slug: 'early',
  category: 'severity',
  lang: 'zh',
  title: '犬早期牙科疾病：牙菌斑和轻度牙龈炎',
  overview: `早期牙科疾病包括牙菌斑积累和牙龈炎初期。这是犬牙科疾病中最可治疗且唯一可完全逆转的阶段。征兆通常很微妙——轻度口臭和轻微牙龈发红可能是唯一的指标。`,
  progression: [
    { stage: '牙菌斑形成', description: '进食后数小时内，牙齿上形成柔软的细菌膜。', action: '每天刷牙可以在牙菌斑硬化前去除。' },
    { stage: '牙结石形成', description: '牙菌斑在24-72小时内硬化为牙结石。无法通过刷牙去除。', action: '需要专业兽医清洁去除牙结石。' },
    { stage: '轻度牙龈炎', description: '牙龈线变得轻微发红，探针检查时可能出血。', action: '专业清洁加每天家庭护理可以完全逆转此阶段。' },
  ],
  associatedConditions: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  associatedTreatments: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '预防性牙科护理', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  faqs: [
    { question: '如何判断我的狗是否有早期牙科疾病？', answer: '检查轻度口臭、牙齿上的淡黄色薄膜和牙龈线轻微发红。兽医可以在常规牙科检查中确认。' },
  ],
  seo: {
    metaTitle: '犬早期牙科疾病 | 征兆和可逆性',
    metaDescription: '犬早期牙科疾病完全可逆。了解如何识别牙菌斑、轻度牙龈炎，以及专业清洁和日常护理如何保护您的狗牙齿。',
    keywords: ['犬早期牙科疾病', '狗牙菌斑阶段', '轻度牙龈炎狗', '可逆牙科疾病狗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '中期严重程度', path: '/dog-dental-disease/severity/moderate' },
    { label: '预防：刷牙', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

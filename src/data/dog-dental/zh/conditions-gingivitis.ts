import type { DentalConditionPage } from '../types';

export const zhConditionsGingivitis: DentalConditionPage = {
  slug: 'gingivitis',
  category: 'conditions',
  lang: 'zh',
  title: '犬牙龈炎：早期牙龈病征兆和治疗',
  overview: `牙龈炎是由牙菌斑和牙结石沿牙龈线积累引起的牙龈炎症。它是牙周病的最早阶段，也是唯一可以通过专业治疗和适当家庭护理完全逆转的阶段。

如果不加干预，牙龈炎会发展为牙周病，牙齿的支撑结构——骨骼、韧带和组织——开始不可逆地分解。`,
  signs: ['牙龈红肿', '进食或刷牙时牙龈出血', '口臭（口腔恶臭）', '牙龈线看起来浮肿或发炎', '触碰嘴部时狗可能表现出轻度不适'],
  severityStages: [
    { stage: '轻度牙龈炎', description: '牙龈线轻微发红。探针检查时可能轻微出血。' },
    { stage: '中度牙龈炎', description: '明显肿胀和发红。牙龈容易出血。口臭明显。' },
    { stage: '重度牙龈炎', description: '显著肿胀、自发性出血和不适。有发展为牙周病的风险。' },
  ],
  redFlags: ['牙龈无接触出血', '拒绝进食', '过度流涎', '用爪子抓嘴', '面部肿胀'],
  diagnosisOverview: '兽医通过目视口腔检查和牙科探针诊断牙龈炎。探针测量牙龈袋的深度——更深的袋表示更严重的疾病。',
  treatmentCategories: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '预防性牙科护理', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: '通过专业清洁和持续的家庭护理，牙龈炎可在1-2周内消退。牙龈应恢复健康的粉红色。',
  prevention: '每天刷牙、定期牙科检查和适当的洁牙零食有助于预防牙龈炎。小型犬更需要频繁的专业清洁。',
  whenToSeeVet: '如果您的狗牙龈红肿或容易出血，请及时预约兽医牙科检查。早期牙龈炎是完全可逆的。',
  faqs: [
    { question: '犬牙龈炎可以逆转吗？', answer: '是的，牙龈炎是牙周病中唯一可以通过专业清洁和适当日常牙科护理完全逆转的阶段。' },
    { question: '牙龈炎变成牙周病需要多长时间？', answer: '如果不治疗，牙龈炎可能在数周到数月内发展为早期牙周病，具体取决于狗的品种、年龄和口腔卫生状况。' },
  ],
  seo: {
    metaTitle: '犬牙龈炎 | 早期牙龈病指南',
    metaDescription: '了解犬牙龈炎：识别牙龈红肿、为什么早期治疗重要，以及专业清洁如何逆转这种常见牙科疾病。',
    keywords: ['犬牙龈炎', '狗牙龈病', '狗牙龈红', '犬牙科疾病早期'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙龈发红症状', path: '/dog-dental-disease/symptoms/red-gums' },
  ],
};

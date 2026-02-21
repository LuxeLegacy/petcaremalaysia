import type { DentalSeverityPage } from '../types';

export const zhSeverityAdvanced: DentalSeverityPage = {
  slug: 'advanced',
  category: 'severity',
  lang: 'zh',
  title: '犬晚期牙科疾病：第4期牙周病',
  overview: `晚期牙科疾病（第4期牙周炎）涉及受影响牙齿周围超过50%的骨质流失。牙齿严重松动或已脱落。此阶段有显著的全身并发症风险，因为口腔细菌可进入血液影响心脏、肾脏和肝脏。通常需要在麻醉下进行积极治疗。`,
  progression: [
    { stage: '第4期——晚期牙周炎', description: '超过50%骨质流失。严重牙齿松动。可能多颗牙齿受影响。', action: '综合牙科手术，可能需要多颗拔牙。疼痛管理至关重要。' },
    { stage: '全身风险', description: '慢性口腔感染可将细菌传播到主要器官。', action: '及时治疗可降低全身健康风险。可能建议进行血液检查。' },
  ],
  associatedConditions: [
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  associatedTreatments: [
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: '抗生素治疗', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: '疼痛管理', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  faqs: [
    { question: '狗拔了多颗牙后还能活得好吗？', answer: '是的。狗在拔牙后适应得非常好。大多数主人报告说，一旦消除了慢性疼痛的根源，食欲、精力和行为都有所改善。' },
  ],
  seo: {
    metaTitle: '犬晚期牙科疾病 | 第4期指南',
    metaDescription: '犬晚期牙周病涉及严重骨质流失和全身风险。了解治疗预期、拔牙和第4期牙科疾病的恢复。',
    keywords: ['犬晚期牙科疾病', '第4期牙周病狗', '严重犬牙科疾病', '狗牙齿脱落'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '中期严重程度', path: '/dog-dental-disease/severity/moderate' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
  ],
};

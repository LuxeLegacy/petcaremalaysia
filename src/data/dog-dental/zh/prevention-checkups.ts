import type { DentalPreventionPage } from '../types';

export const zhPreventionCheckups: DentalPreventionPage = {
  slug: 'dental-checkups',
  category: 'prevention',
  lang: 'zh',
  title: '犬定期牙科检查：为什么重要',
  overview: `每年兽医牙科检查对于在牙科疾病早期发现至关重要，此时治疗最简单、最经济。许多狗在牙科疾病晚期之前没有明显征兆——常规检查发现您在家看不到的问题。`,
  whyItMatters: '超过60%的牙科疾病在牙龈线以下。狗本能地隐藏疼痛。没有专业检查，严重疾病可能在不被发现的情况下发展，直到变得痛苦、昂贵且更复杂。',
  howTo: '将每年牙科检查作为狗常规健康检查的一部分。兽医将检查牙齿表面、牙龈健康，如果发现问题可能建议在麻醉下进行X光综合检查。',
  frequency: '所有成年犬每年牙科检查。高风险犬（小型犬、老年犬和有牙科疾病史的犬）每6个月一次。',
  commonMistakes: [
    '认为牙科疾病会在家中表现出明显征兆',
    '因为狗仍然正常进食就跳过牙科检查',
    '等到症状出现才安排预防性检查',
    '不遵循兽医关于专业清洁的建议',
  ],
  vetRecommendations: '牙科检查应该是每年健康检查的一部分。兽医将根据狗的个体风险因素建议适当的专业清洁频率。',
  faqs: [
    { question: '马来西亚牙科检查费用是多少？', answer: '作为常规健康检查一部分的牙科检查通常包含在咨询费中（RM30-RM100）。麻醉下含X光的综合检查另收费。' },
  ],
  seo: {
    metaTitle: '犬牙科检查 | 为什么年度检查重要',
    metaDescription: '年度牙科检查及早发现犬隐藏牙科疾病。了解为什么常规兽医牙科检查对您的狗口腔和整体健康至关重要。',
    keywords: ['犬牙科检查', '犬牙科检查', '兽医牙科检查狗', '年度牙科检查狗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '刷牙', path: '/dog-dental-disease/prevention/brushing' },
    { label: '饮食与咀嚼', path: '/dog-dental-disease/prevention/diet-and-chewing-behavior' },
    { label: '口腔检查', path: '/dog-dental-disease/diagnosis/oral-exam' },
  ],
};

import type { DentalPreventionPage } from '../types';

export const zhPreventionBrushing: DentalPreventionPage = {
  slug: 'brushing',
  category: 'prevention',
  lang: 'zh',
  title: '给狗刷牙：第一预防方法',
  overview: `每天刷牙是预防犬牙科疾病最有效的方法。它在牙菌斑硬化为牙结石之前将其去除，减少频繁专业清洁的需要，并防止牙龈炎和牙周病。`,
  whyItMatters: '牙菌斑在进食后数小时内在牙齿上形成，并在24-72小时内硬化为牙结石。一旦牙结石形成，只有专业清洁才能去除。每天刷牙通过在硬化前去除牙菌斑来打破这个循环。',
  howTo: '使用专为狗设计的软毛牙刷（或小型犬用指套刷）和犬专用酶性牙膏。切勿使用人类牙膏——它含有对狗有毒的成分。沿牙龈线以画圈方式轻柔刷牙，重点刷牙齿外表面。',
  frequency: '每天刷牙是理想的。最少每周刷3-4次可提供显著效果。不太频繁的刷牙效果有限，因为牙菌斑可在两次之间硬化。',
  commonMistakes: [
    '使用人类牙膏（因含氟化物和木糖醇对狗有毒）',
    '刷牙太猛力导致牙龈损伤',
    '开始太晚——从幼犬期开始口腔触碰以便成年后更容易接受',
    '初次抵抗后放弃——大多数狗通过渐进引入可以接受刷牙',
    '依赖洁牙零食作为刷牙的替代品',
  ],
  vetRecommendations: '兽医一致推荐每天刷牙作为家庭牙科护理的基石。结合每年牙科检查和根据狗个体风险水平建议的专业清洁。',
  faqs: [
    { question: '如果我的狗不让我刷牙怎么办？', answer: '逐步开始：让它们品尝牙膏，然后用手指触碰牙齿，再用指套刷，最后用牙刷，分几周进行。每次后给予奖励。兽医也可以演示技巧。' },
    { question: '犬牙膏是必需的还是可以只用水？', answer: '建议使用犬专用酶性牙膏，因为它含有刷牙后继续发挥作用的酶。仅用水可提供一些机械清洁效果但效果明显较差。' },
  ],
  seo: {
    metaTitle: '如何给狗刷牙 | 第一牙科预防方法',
    metaDescription: '每天刷牙是预防犬牙科疾病的最佳方法。了解正确技巧、频率、常见错误，以及如何让狗接受刷牙。',
    keywords: ['给狗刷牙', '犬刷牙', '如何给狗刷牙', '犬牙科卫生', '犬牙膏'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙科检查', path: '/dog-dental-disease/prevention/dental-checkups' },
    { label: '饮食与咀嚼', path: '/dog-dental-disease/prevention/diet-and-chewing-behavior' },
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
  ],
};

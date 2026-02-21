import type { DentalTreatmentPage } from '../types';

export const zhTreatmentsPreventiveCare: DentalTreatmentPage = {
  slug: 'preventive-dental-care',
  category: 'treatments',
  lang: 'zh',
  title: '犬预防性牙科护理：专业概述',
  overview: `预防性牙科护理是维护狗口腔健康最具成本效益的方法。专业兽医护理和每天家庭护理的结合可以显著降低牙科疾病的发病率和严重程度。`,
  whatItInvolves: '预防性牙科护理包括定期兽医牙科检查、按建议进行的专业清洁、每天在家刷牙，以及适当的饮食和咀嚼策略。',
  whenRecommended: '预防护理应从幼犬期开始，进行口腔触碰训练和首次牙科检查。所有成年犬每年牙科检查。专业清洁频率基于个体风险因素。',
  benefits: ['预防痛苦的牙科疾病', '降低终生牙科护理费用', '保持清新口气和健康牙龈', '支持整体全身健康', '早期发现新出现的问题'],
  risksAndConsiderations: '预防性牙科护理没有风险。唯一的考虑是一致性——间歇性家庭护理效果有限。洁牙零食和玩具是刷牙和专业护理的补充，不是替代品。',
  followUpCare: '保持每天刷牙习惯。安排每年牙科检查。遵循兽医关于狗个体风险水平的专业清洁间隔建议。',
  associatedConditions: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
  faqs: [
    { question: '我能为狗牙科健康做的最有效的一件事是什么？', answer: '每天用犬专用牙膏刷牙是最有效的家庭护理措施。结合每年兽医牙科检查，可以显著减少牙科疾病。' },
  ],
  seo: {
    metaTitle: '犬预防性牙科护理 | 专业指南',
    metaDescription: '预防性牙科护理是对您的狗口腔健康最好的投资。了解专业清洁和每天刷牙如何预防昂贵的牙科疾病。',
    keywords: ['犬预防性牙科护理', '犬牙科预防', '狗牙齿护理日常', '预防犬牙科疾病'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '刷牙', path: '/dog-dental-disease/prevention/brushing' },
    { label: '牙科检查', path: '/dog-dental-disease/prevention/dental-checkups' },
    { label: '饮食与咀嚼', path: '/dog-dental-disease/prevention/diet-and-chewing-behavior' },
  ],
};

import type { DentalTreatmentPage } from '../types';

export const zhTreatmentsProfessionalCleaning: DentalTreatmentPage = {
  slug: 'professional-cleaning',
  category: 'treatments',
  lang: 'zh',
  title: '犬专业洁牙：涉及内容',
  overview: `专业洁牙（预防性治疗）是兽医牙科护理的基石。它包括使用超声波洁牙器去除牙龈线上方和下方的牙菌斑和牙结石，然后进行抛光。所有犬专业洁牙都需要全身麻醉。`,
  whatItInvolves: '在全身麻醉下，兽医使用超声波洁牙器去除牙结石、手动器械进行龈下清洁，以及抛光膏平滑牙齿表面。通常在同一过程中进行全口X光和探针检查。',
  whenRecommended: '当牙结石可见、存在牙龈炎、作为常规预防护理的一部分（每年或按建议），以及在任何牙科疾病发展到需要拔牙之前。',
  benefits: ['去除刷牙无法清除的牙结石', '逆转牙龈炎', '允许彻底评估所有牙齿', '防止发展为牙周病', '改善口气和舒适度'],
  risksAndConsiderations: '全身麻醉存在固有风险，但现代兽医麻醉非常安全。术前血液检查评估器官功能。老年犬和有健康问题的犬需要仔细的麻醉规划。非麻醉洁牙不能替代专业清洁——它们无法解决牙龈线以下的疾病。',
  followUpCare: '清洁后3-5天恢复温和刷牙。如牙龈敏感，软食1-2天。遵循兽医的具体术后指导。',
  associatedConditions: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: '马来西亚专业洁牙费用是多少？', answer: '马来西亚简单清洁（不含拔牙）通常费用为RM200-RM400。复杂病例费用更高。' },
    { question: '为什么狗需要麻醉进行洁牙？', answer: '麻醉允许彻底清洁牙龈线以下、拍摄牙科X光并进行适当评估。清醒清洁仅是美容性的，无法治疗疾病。' },
  ],
  seo: {
    metaTitle: '犬专业洁牙 | 预期情况',
    metaDescription: '专业洁牙对犬牙科健康至关重要。了解涉及内容、为什么需要麻醉、马来西亚费用和术后护理。',
    keywords: ['犬洁牙', '专业牙齿清洁狗', '狗牙齿洗牙', '兽医洁牙费用'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: '术后恢复', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: '宠物牙科护理费用', path: '/qa/article/ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong' },
  ],
};

import type { DentalTreatmentPage } from '../types';

export const zhTreatmentsToothExtraction: DentalTreatmentPage = {
  slug: 'tooth-extraction',
  category: 'treatments',
  lang: 'zh',
  title: '犬拔牙：何时需要及原因',
  overview: `拔牙是去除患病、损坏或无功能的牙齿。虽然听起来令人担忧，但拔牙通常是缓解疼痛和防止感染扩散的最佳选择。狗适应得非常好，大多数在拔牙后生活质量有所改善。`,
  whatItInvolves: '在全身麻醉下，兽医手术去除受影响的牙齿，包括所有牙根。多根牙齿可能需要分段。拔牙部位可能需要缝合。手术由牙科X光引导。',
  whenRecommended: '当牙齿有严重牙周病（超过50%骨质流失）、牙根脓肿、牙髓暴露的断裂牙齿、牙齿吸收，或当牙齿引起的疼痛无法通过其他方式管理时。',
  benefits: ['消除疼痛和感染来源', '防止疾病扩散到邻近牙齿', '狗通常在舒适度方面立即改善', '消除慢性感染带来的全身并发症风险'],
  risksAndConsiderations: '风险包括全身麻醉并发症（现代方案下风险低）、术后出血、感染，以及严重病变骨骼的下颌骨折（罕见）。多根牙齿拔除更复杂，可能需要专家。',
  followUpCare: '根据拔牙情况，软食5-14天。恢复期间避免硬玩具和咬胶。按兽医处方进行疼痛管理。通常在10-14天安排复查。',
  associatedConditions: [
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: '拔牙后狗还能吃东西吗？', answer: '是的。狗对缺牙适应得很好。愈合期（软食5-14天）后，大多数狗恢复正常进食，甚至可以吃干粮。' },
    { question: '马来西亚拔牙费用是多少？', answer: '简单拔牙每颗约RM50-RM150，另加清洁/麻醉费用。复杂或手术拔牙费用更高。' },
  ],
  seo: {
    metaTitle: '犬拔牙 | 何时需要及恢复',
    metaDescription: '了解犬何时需要拔牙、手术涉及内容、恢复预期和马来西亚费用。狗拔牙后适应得很好。',
    keywords: ['犬拔牙', '狗拔牙', '犬牙科手术', '狗拔牙费用马来西亚'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '术后恢复', path: '/dog-dental-disease/recovery/post-dental-procedure' },
  ],
};

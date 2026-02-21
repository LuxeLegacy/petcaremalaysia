import type { DentalConditionPage } from '../types';

export const zhConditionsPlaque: DentalConditionPage = {
  slug: 'plaque-buildup',
  category: 'conditions',
  lang: 'zh',
  title: '狗牙菌斑积累：原因、征兆及应对方法',
  overview: `牙菌斑是一层在进食后数小时内形成在狗牙齿上的柔软、粘性细菌膜。如果不通过刷牙或咀嚼去除，牙菌斑会在24-72小时内�ite化为牙结石，只能由兽医专业人员清除。

牙菌斑积累是所有犬牙科疾病的起点。虽然最初不会引起疼痛，但不加控制的牙菌斑会导致牙龈炎、牙周病，最终导致牙齿脱落。小型犬由于牙齿拥挤特别容易受影响。`,
  signs: ['牙齿上的淡黄色薄膜', '轻度口臭', '牙龈线轻微发红', '可见牙结石（硬化的黄棕色沉积物）'],
  severityStages: [
    { stage: '早期牙菌斑', description: '牙齿上可见软膜，刷牙即可轻松去除。无牙龈炎症。' },
    { stage: '牙结石形成', description: '牙齿上出现硬化沉积物，尤其是在牙龈线附近。可能开始出现轻度牙龈发红。' },
    { stage: '早期牙龈炎', description: '牙龈开始发炎。建议进行专业清洁。' },
  ],
  redFlags: ['过度流涎', '不愿吃硬食', '用爪子抓嘴', '咀嚼时牙龈出血'],
  diagnosisOverview: '兽医会通过目视检查狗的牙齿和牙龈，可能使用牙科探针检查牙龈线以下的牙结石。可能建议进行牙科X光检查以评估骨骼健康。',
  treatmentCategories: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '预防性牙科护理', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
  recoveryExpectations: '牙菌斑/牙结石专业清洁后，大多数狗在24小时内恢复，第二天即可恢复正常进食。',
  prevention: '每天使用犬专用牙膏刷牙是预防牙菌斑积累的黄金标准。定期兽医牙科检查可以在早期发现积累。',
  whenToSeeVet: '如果您注意到狗牙齿上有硬化沉积物、持续口臭或任何牙龈发红，请预约兽医牙科检查。',
  faqs: [
    { question: '牙菌斑在狗牙齿上形成的速度有多快？', answer: '牙菌斑在进食后数小时内开始形成，如果不清除，可在24-72小时内硬化为牙结石。' },
    { question: '我可以在家清除狗牙齿上的牙结石吗？', answer: '不可以。一旦牙菌斑硬化为牙结石，只能由兽医专业人员在麻醉下安全清除。家庭刮除可能损伤牙釉质和牙龈。' },
  ],
  seo: {
    metaTitle: '狗牙菌斑积累 | 原因、征兆和预防',
    metaDescription: '了解狗牙菌斑积累：形成原因、警告信号、何时看兽医，以及专业清洁如何防止发展为牙周病。',
    keywords: ['狗牙菌斑', '狗牙结石', '牙菌斑积累狗', '狗牙齿清洁'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '犬牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '早期严重程度', path: '/dog-dental-disease/severity/early' },
    { label: '刷牙预防', path: '/dog-dental-disease/prevention/brushing' },
  ],
};

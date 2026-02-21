import type { DentalRecoveryPage } from '../types';

export const zhRecoveryHealingTimeline: DentalRecoveryPage = {
  slug: 'oral-healing-timeline',
  category: 'recovery',
  lang: 'zh',
  title: '犬牙科手术后口腔愈合时间表',
  overview: `了解牙科手术后的正常愈合时间表可帮助宠物主人监测恢复并及早识别潜在并发症。愈合速度因手术类型、涉及的牙齿数量和狗的整体健康状况而异。`,
  timeline: [
    { phase: '即时期（0-24小时）', duration: '24小时', description: '拔牙创面形成血凝块。轻度肿胀和渗出是正常的。麻醉效果逐渐消退。' },
    { phase: '炎症期', duration: '第1-5天', description: '身体的愈合反应活跃。手术部位周围牙龈可能发红。这是正常愈合。' },
    { phase: '增殖期', duration: '第5-14天', description: '新组织开始形成。牙龈开始覆盖拔牙创面。缝线溶解。' },
    { phase: '成熟期', duration: '第2-6周', description: '组织加强和重塑。牙龈应呈粉红色和健康。骨重塑在内部继续。' },
  ],
  dietaryModifications: '炎症期和早期增殖期（根据手术5-14天）软食。按兽医指示逐渐过渡到正常食物。',
  warningSignsDuringRecovery: ['第2天后持续出血', '第3天后肿胀加重', '口腔恶臭加重', '拔牙创面可见骨暴露', '手术后超过48小时拒绝进食'],
  followUpSchedule: '10-14天复查缝线评估。根据建议进行额外随访。确认愈合后恢复刷牙。',
  faqs: [
    { question: '犬拔牙创面完全愈合需要多长时间？', answer: '软组织通常在2周内覆盖创面。下方的完全骨重塑需要4-6周。' },
  ],
  seo: {
    metaTitle: '犬口腔愈合时间表 | 术后恢复阶段',
    metaDescription: '了解犬牙科手术后的正常愈合时间表。了解每个阶段的预期情况和并发症的警告信号。',
    keywords: ['犬口腔愈合', '犬拔牙愈合时间', '犬牙科恢复时间表', '犬牙科愈合多久'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '术后恢复', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: '监测并发症', path: '/dog-dental-disease/recovery/monitoring-for-complications' },
  ],
};

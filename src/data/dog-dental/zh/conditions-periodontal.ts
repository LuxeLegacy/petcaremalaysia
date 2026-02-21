import type { DentalConditionPage } from '../types';

export const zhConditionsPeriodontal: DentalConditionPage = {
  slug: 'periodontal-disease',
  category: 'conditions',
  lang: 'zh',
  title: '犬牙周病：分期、征兆和治疗选择',
  overview: `牙周病是牙齿支撑结构（包括牙龈、骨骼和韧带）的进行性破坏。它是成年犬最常见的疾病，一旦发生骨质流失即不可逆。

疾病经历四个阶段：第1期（仅牙龈炎）、第2期（早期骨质流失达25%）、第3期（中度骨质流失25-50%）和第4期（严重骨质流失超过50%）。治疗重点在于减缓进展和管理疼痛。`,
  signs: ['持续口臭', '牙齿松动或脱落', '牙龈退缩', '进食困难或掉食', '牙龈出血', '鼻腔分泌物（晚期）', '面部肿胀（牙根脓肿）'],
  severityStages: [
    { stage: '第1期——牙龈炎', description: '仅牙龈炎症。无骨质流失。完全可逆。' },
    { stage: '第2期——早期牙周炎', description: 'X光可见最多25%骨质流失。轻度附着丧失。专业清洁可阻止进展。' },
    { stage: '第3期——中度牙周炎', description: '25-50%骨质流失。牙齿可能变得松动。可能需要拔除受影响的牙齿。' },
    { stage: '第4期——晚期牙周炎', description: '超过50%骨质流失。严重牙齿松动。通常需要拔牙。有全身并发症风险。' },
  ],
  redFlags: ['面部或眼下肿胀', '拒绝进食超过24小时', '水碗或玩具上有血', '突然行为改变（躲藏、触碰嘴部时攻击）', '发烧或嗜睡'],
  diagnosisOverview: '全面评估需要在麻醉下进行牙科X光检查，因为超过60%的牙科疾病发生在牙龈线以下，仅通过口腔检查是看不到的。',
  treatmentCategories: [
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: '抗生素治疗', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: '疼痛管理', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: '恢复取决于所进行的治疗。简单清洁：1-2天。多颗拔牙：5-14天软食和活动限制。完全愈合：2-4周。',
  prevention: '每天刷牙、每年牙科检查和兽医建议的专业清洁是防止牙周病的最佳方法。',
  whenToSeeVet: '任何持续口臭、可见牙结石、牙齿松动或进食困难的狗都应及时接受兽医检查。',
  faqs: [
    { question: '犬牙周病可以治愈吗？', answer: '牙周病造成的骨质流失无法逆转。治疗重点在于去除病变组织、拔除严重受影响的牙齿，并防止进一步恶化。' },
    { question: '牙周病对狗来说痛苦吗？', answer: '是的，但狗擅长隐藏疼痛。征兆包括不愿吃硬食、掉食、回避头部触碰和行为改变。' },
  ],
  seo: {
    metaTitle: '犬牙周病 | 分期和治疗指南',
    metaDescription: '犬牙周病完整指南：了解从牙龈炎到严重骨质流失的4个阶段，识别征兆，了解马来西亚的治疗选择。',
    keywords: ['犬牙周病', '狗牙龈病分期', '狗牙齿骨质流失', '犬牙周治疗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '晚期严重程度', path: '/dog-dental-disease/severity/advanced' },
  ],
};

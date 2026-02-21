import type { DentalConditionPage } from '../types';

export const zhConditionsAbscess: DentalConditionPage = {
  slug: 'tooth-root-abscess',
  category: 'conditions',
  lang: 'zh',
  title: '犬牙根脓肿：征兆、紧急程度和治疗',
  overview: `牙根脓肿是牙根尖端的感染性脓袋，通常由晚期牙周病或断裂的牙齿引起。它是狗最痛苦的牙科疾病之一，需要及时兽医关注。

上颌第四前磨牙（裂齿）是最常受影响的牙齿。该牙齿的脓肿通常会导致眼下可见的肿胀，可能破裂并通过皮肤排脓。`,
  signs: ['面部肿胀，尤其是眼下', '肿胀可能破裂排脓', '严重疼痛——不愿进食、回避头部触碰', '单侧咀嚼', '用爪子抓嘴', '某些情况下发烧和嗜睡'],
  severityStages: [
    { stage: '发展中的脓肿', description: '牙根内部感染。狗可能表现出微妙的疼痛迹象——不愿在一侧咀嚼。' },
    { stage: '急性脓肿', description: '可见面部肿胀、严重疼痛、可能发烧。需要紧急兽医护理。' },
    { stage: '破裂脓肿', description: '肿胀已通过皮肤或进入鼻腔破裂。暂时缓解疼痛但感染持续。仍需治疗。' },
  ],
  redFlags: ['眼周或眼下肿胀', '发烧或嗜睡', '完全拒绝进食', '面部或鼻子排脓', '肿胀同侧眼部分泌物'],
  diagnosisOverview: '麻醉下进行牙科X光检查对确认牙根脓肿和确定骨受累程度至关重要。',
  treatmentCategories: [
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
    { label: '抗生素治疗', path: '/dog-dental-disease/treatments/antibiotic-therapy' },
    { label: '疼痛管理', path: '/dog-dental-disease/treatments/pain-management' },
  ],
  recoveryExpectations: '拔除感染牙齿后，大多数狗在24-48小时内显著改善。拔牙创面完全愈合需要2-4周。',
  prevention: '定期牙科检查、及时治疗断裂牙齿和常规专业清洁可降低牙根脓肿风险。',
  whenToSeeVet: '狗出现任何面部肿胀都应尽快由兽医检查——最好在24小时内。如伴有发烧或完全拒绝进食，应寻求当天兽医护理。',
  faqs: [
    { question: '牙根脓肿是紧急情况吗？', answer: '虽然大多数情况不会立即危及生命，但牙根脓肿是紧急的，应在24小时内由兽医检查。面部肿胀伴发烧需要当天护理。' },
    { question: '脓肿需要拔牙吗？', answer: '大多数情况下，拔除受影响牙齿是标准治疗。根管治疗是某些兽医牙科专家诊所的替代方案。' },
  ],
  seo: {
    metaTitle: '犬牙根脓肿 | 征兆和紧急护理',
    metaDescription: '识别犬牙根脓肿：面部肿胀、严重疼痛，以及何时寻求紧急兽医护理。了解治疗和恢复预期。',
    keywords: ['狗牙脓肿', '面部肿胀狗', '牙根感染狗', '狗牙脓肿治疗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '面部肿胀症状', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
  ],
};

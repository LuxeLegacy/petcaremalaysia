import type { DentalTreatmentPage } from '../types';

export const zhTreatmentsPainManagement: DentalTreatmentPage = {
  slug: 'pain-management',
  category: 'treatments',
  lang: 'zh',
  title: '犬牙科疾病疼痛管理：须知事项',
  overview: `疼痛管理是犬牙科护理的重要组成部分。狗擅长隐藏疼痛，因此牙科不适往往在疾病晚期才被发现。兽医使用针对每位患者的多模式疼痛管理策略。`,
  whatItInvolves: '牙科手术的兽医疼痛管理可能包括术前、术中和术后疼痛控制。兽医将根据所进行的手术和狗的健康状况确定适当的方法。',
  whenRecommended: '疼痛管理是所有麻醉下牙科手术的标准配置。牙根脓肿、多颗拔牙或慢性牙科疼痛的狗可能需要额外的疼痛管理。',
  benefits: ['改善牙科手术期间和之后的舒适度', '支持更快恢复', '减少压力和焦虑', '使狗在手术后更快恢复进食'],
  risksAndConsiderations: '切勿给狗使用人类止痛药——许多对狗有毒。所有疼痛管理都应由兽医处方和监督。及时报告任何异常行为或副作用。',
  followUpCare: '按指示准确给予处方疼痛管理。监测狗的舒适度和食欲。如果处方疗程结束后狗似乎仍在疼痛中，请联系兽医。',
  associatedConditions: [
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: '如何判断我的狗是否有牙科疼痛？', answer: '征兆包括不愿吃硬食、掉食、用爪子抓嘴、回避头部触碰、流涎，以及烦躁或退缩等行为变化。' },
  ],
  seo: {
    metaTitle: '犬牙科疼痛管理 | 宠物主人须知',
    metaDescription: '了解犬牙科疾病和手术的疼痛管理。了解兽医如何控制牙科疼痛以及为什么人类药物对狗危险。',
    keywords: ['犬牙科疼痛', '狗牙疼痛管理', '犬牙科手术后疼痛', '管理犬牙科疼痛'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '术后恢复', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: '专业清洁', path: '/dog-dental-disease/treatments/professional-cleaning' },
  ],
};

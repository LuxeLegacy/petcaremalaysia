import type { DentalEmergencyPage } from '../types';

export const zhWhenToSeeVet: DentalEmergencyPage = {
  slug: 'when-to-see-a-vet',
  category: 'emergency',
  lang: 'zh',
  title: '犬牙科问题何时看兽医',
  overview: `了解何时预约兽医牙科检查与何时寻求紧急护理对您的狗的健康和您的安心很重要。本指南帮助您根据狗的症状决定适当的护理级别。`,
  emergencySigns: [
    { sign: '口臭', description: '随时间恶化的持续口腔恶臭。', urgency: '预约常规牙科检查（1-2周内）' },
    { sign: '牙龈红肿', description: '沿牙齿线可见的牙龈炎症。', urgency: '预约牙科检查（1周内）' },
    { sign: '牙结石积累', description: '牙齿上可见的黄棕色沉积物。', urgency: '预约牙科检查（2-4周内）' },
    { sign: '进食困难或掉食', description: '暗示口腔疼痛的进食行为改变。', urgency: '几天内就医' },
    { sign: '面部肿胀', description: '面部肿胀，尤其是眼下。', urgency: '24小时内就医' },
    { sign: '出血、发烧或拒绝进食', description: '同时出现多个令人担忧的征兆。', urgency: '当天就医/急诊' },
  ],
  immediateActions: [
    '评估您的狗正在表现哪些症状',
    '检查是否同时存在多个症状',
    '对于常规征兆，预约兽医牙科检查',
    '对于紧急征兆，联系兽医安排当天或次日就诊',
    '对于急诊征兆，前往最近的紧急兽医诊所',
  ],
  whenToSeeVet: '有疑问时，总是宁可早看兽医而不是晚看。牙科疾病会恶化——今天需要简单清洁的问题如果拖延可能需要拔牙。',
  faqs: [
    { question: '狗的牙齿应该多久检查一次？', answer: '建议所有狗每年进行牙科检查。有牙科疾病史的狗或小型犬可能受益于每6个月检查一次。' },
    { question: '牙科症状会自行改善吗？', answer: '犬牙科疾病不会在没有治疗的情况下改善。延迟护理会使疾病恶化，导致更复杂和更昂贵的治疗。' },
  ],
  seo: {
    metaTitle: '犬牙科问题何时看兽医 | 紧急程度指南',
    metaDescription: '不确定您的狗的牙科症状是否需要紧急护理？使用本指南确定何时预约常规牙科检查与何时寻求紧急兽医护理。',
    keywords: ['狗牙齿何时看兽医', '犬牙科就医', '狗牙齿问题兽医', '犬牙科紧急程度'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
    { label: '寻找兽医', path: '/locations' },
    { label: '牙科检查', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

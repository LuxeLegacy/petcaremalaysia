import type { DentalSymptomPage } from '../types';

export const zhSymptomsPawingMouth: DentalSymptomPage = {
  slug: 'pawing-at-mouth',
  category: 'symptoms',
  lang: 'zh',
  title: '狗用爪子抓嘴：原因及何时担心',
  overview: `用爪子抓嘴是狗的求救信号，表示口腔不适。虽然可能是牙齿间或牙龈中卡住的东西引起的，但持续抓嘴通常指向脓肿、断裂牙齿或晚期牙周病引起的严重牙科疼痛。`,
  whatItIndicates: '用爪子抓嘴可能表示牙齿间卡有异物、断裂牙齿、牙根脓肿、晚期牙龈病或口腔肿块。这是急性口腔疼痛的可靠指标。',
  oralVsOtherCauses: '牙科原因最常见。然而，蜜蜂蜇伤、导致口腔肿胀的过敏反应，或卡在喉咙中的异物也可能导致这种行为。',
  emergencyRedFlags: ['抓嘴伴呼吸困难', '抓嘴伴面部或喉咙肿胀', '持续抓嘴伴流涎和痛苦', '抓嘴伴口腔出血'],
  severityRouting: [
    { label: '中期（间歇性抓嘴）', path: '/dog-dental-disease/severity/moderate' },
    { label: '晚期（持续痛苦）', path: '/dog-dental-disease/severity/advanced' },
    { label: '紧急（伴呼吸困难）', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: '兽医检查将包括检查异物、断裂牙齿、肿胀和肿块。可能需要镇静进行彻底的口腔检查。',
  carePathways: [
    { label: '可能是牙根脓肿吗？', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '如果狗用爪子抓嘴，我应该查看嘴里吗？', answer: '如果您的狗允许，您可以轻柔地查看，检查可见物体或肿胀。但如果您的狗正在疼痛中，它们可能会咬——小心行事，如果无法轻易确定原因，请看兽医。' },
  ],
  seo: {
    metaTitle: '狗用爪子抓嘴 | 口腔疼痛原因和护理',
    metaDescription: '狗用爪子抓嘴表示口腔疼痛。了解牙科和非牙科原因、紧急警告信号，以及何时需要立即兽医护理。',
    keywords: ['狗抓嘴', '狗嘴巴疼', '狗抓脸', '狗口腔不适'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '掉食', path: '/dog-dental-disease/symptoms/dropping-food' },
    { label: '面部肿胀', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

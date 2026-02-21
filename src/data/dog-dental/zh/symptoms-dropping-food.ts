import type { DentalSymptomPage } from '../types';

export const zhSymptomsDroppingFood: DentalSymptomPage = {
  slug: 'dropping-food',
  category: 'symptoms',
  lang: 'zh',
  title: '狗进食时掉食：牙科疼痛征兆',
  overview: `当狗在进食时反复从嘴里掉出食物，通常表示口腔疼痛。这种行为——也称为"反刍"——暗示咀嚼不舒服，通常由牙科疾病、断裂牙齿或口腔肿块引起。`,
  whatItIndicates: '掉食通常表示咀嚼时疼痛，最常见的原因是伴有松动牙齿的牙周病、牙根脓肿或断裂牙齿。也可能表示下颌疼痛或影响嘴部协调的神经系统问题。',
  oralVsOtherCauses: '牙科疼痛导致狗小心翼翼地咀嚼或从受影响一侧掉出食物。非牙科原因包括下颌骨折、颞下颌关节（TMJ）疾病或影响嘴部协调的神经系统疾病。',
  emergencyRedFlags: ['完全拒绝进食超过24小时', '因进食减少而体重下降', '掉食伴面部肿胀', '食物中混有血'],
  severityRouting: [
    { label: '中期（偶尔掉食）', path: '/dog-dental-disease/severity/moderate' },
    { label: '晚期（持续进食困难）', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: '通常需要在镇静或麻醉下进行彻底的口腔检查和牙科X光检查，以确定导致掉食的疼痛来源。',
  carePathways: [
    { label: '可能是牙周病吗？', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '可能是牙根脓肿吗？', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '为什么我的狗吐出食物？', answer: '狗在咀嚼引起疼痛时会吐出或掉出食物。这通常由于松动牙齿、感染牙齿或断裂牙齿。建议进行兽医牙科评估。' },
  ],
  seo: {
    metaTitle: '狗掉食 | 牙科疼痛征兆和原因',
    metaDescription: '如果您的狗进食时掉食，可能表示牙周病或脓肿引起的牙科疼痛。了解原因及何时寻求兽医护理。',
    keywords: ['狗掉食', '狗进食困难', '狗牙科疼痛征兆', '狗吃东西掉出来'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '用爪子抓嘴', path: '/dog-dental-disease/symptoms/pawing-at-mouth' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
};

import type { DentalSymptomPage } from '../types';

export const zhSymptomsSwollenGums: DentalSymptomPage = {
  slug: 'swollen-gums',
  category: 'symptoms',
  lang: 'zh',
  title: '狗牙龈肿胀：原因及何时担心',
  overview: `狗牙龈肿胀表明炎症已超出轻微发红。牙龈可能看起来浮肿、增大，甚至可能生长覆盖部分牙齿。这是中度到晚期牙龈病的征兆，需要兽医评估。`,
  whatItIndicates: '牙龈肿胀通常表示中度牙龈炎正在向牙周病发展。特定牙齿附近的局部肿胀可能暗示牙根脓肿或断裂牙齿。',
  oralVsOtherCauses: '牙科肿胀通常局限在牙龈线或特定牙齿周围。广泛的口腔肿胀可能表示过敏反应、牙龈瘤（良性生长）或需要兽医评估的口腔肿块。',
  emergencyRedFlags: ['肿胀延伸到面部或眼下', '快速发展的肿胀', '肿胀伴发烧或嗜睡', '口腔肿胀导致呼吸困难'],
  severityRouting: [
    { label: '中期（局部肿胀）', path: '/dog-dental-disease/severity/moderate' },
    { label: '晚期（广泛或严重）', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: '兽医评估包括目视检查、探针测量袋深度，以及牙科X光评估骨水平和排除脓肿或肿块。',
  carePathways: [
    { label: '可能是牙周病吗？', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '可能是牙根脓肿吗？', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '需要注意的紧急征兆', path: '/dog-dental-disease/emergency-signs' },
  ],
  faqs: [
    { question: '为什么狗的牙龈在一颗牙齿周围肿胀？', answer: '单颗牙齿周围的局部肿胀可能表示牙根脓肿、断裂牙齿或牙龈生长（牙龈瘤）。建议进行牙科X光兽医评估。' },
  ],
  seo: {
    metaTitle: '狗牙龈肿胀 | 原因和兽医护理',
    metaDescription: '狗牙龈肿胀可能表示进展中的牙科疾病或脓肿。了解原因、需要注意的紧急征兆，以及何时看兽医。',
    keywords: ['狗牙龈肿', '狗牙龈肿胀', '狗牙龈浮肿', '狗牙科肿胀'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙龈发红', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: '面部肿胀', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
};

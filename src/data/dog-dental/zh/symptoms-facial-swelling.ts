import type { DentalSymptomPage } from '../types';

export const zhSymptomsFacialSwelling: DentalSymptomPage = {
  slug: 'facial-swelling',
  category: 'symptoms',
  lang: 'zh',
  title: '狗面部肿胀：牙科紧急警告',
  overview: `狗面部肿胀——尤其是眼下或眼周——通常由牙根脓肿引起，属于紧急兽医关注事项。上颌裂齿的牙根位于眼睛正下方，因此该牙齿的感染通常表现为面部肿胀。`,
  whatItIndicates: '面部肿胀最常见地表示牙根脓肿，但也可能表示过敏反应（昆虫蜇伤）、唾液腺问题（粘液囊肿）、外伤或肿瘤。牙科脓肿通常导致眼下单侧、坚硬的肿胀。',
  oralVsOtherCauses: '牙科脓肿肿胀通常坚硬、温暖、单侧，位于眼下或沿下颌线。过敏反应导致弥漫性、双侧肿胀。外伤在受伤部位引起肿胀。',
  emergencyRedFlags: ['肿胀影响眼睛或导致眼睛关闭', '肿胀伴发烧和嗜睡', '快速扩大的肿胀', '肿胀伴呼吸困难', '肿胀破裂排脓'],
  severityRouting: [
    { label: '晚期（确认牙科来源）', path: '/dog-dental-disease/severity/advanced' },
    { label: '紧急（伴全身征兆）', path: '/dog-dental-disease/emergency-signs' },
  ],
  vetEvaluation: '需要紧急兽医评估。麻醉下进行牙科X光将识别受影响的牙齿。可能建议进行血液检查以评估全身感染。',
  carePathways: [
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '狗面部肿胀总是牙科问题吗？', answer: '不是，但牙科脓肿是眼下单侧面部肿胀最常见的原因。其他原因包括过敏反应、外伤和肿瘤。兽医评估至关重要。' },
  ],
  seo: {
    metaTitle: '狗面部肿胀 | 牙科紧急指南',
    metaDescription: '狗面部肿胀通常表示需要紧急兽医护理的牙根脓肿。了解征兆、原因，以及何时需要立即兽医关注。',
    keywords: ['狗面部肿胀', '狗眼下肿胀', '狗牙脓肿肿胀', '狗脸肿'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
    { label: '牙龈肿胀', path: '/dog-dental-disease/symptoms/swollen-gums' },
  ],
};

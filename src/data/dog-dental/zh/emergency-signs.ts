import type { DentalEmergencyPage } from '../types';

export const zhEmergencySigns: DentalEmergencyPage = {
  slug: 'emergency-signs',
  category: 'emergency',
  lang: 'zh',
  title: '犬牙科紧急征兆：何时寻求立即护理',
  overview: `虽然大多数犬牙科疾病是逐渐发展的，但某些征兆表示需要立即兽医关注的紧急情况。识别这些征兆可以预防包括全身感染在内的严重并发症。`,
  emergencySigns: [
    { sign: '面部肿胀', description: '眼下或眼周单侧肿胀，通常来自牙根脓肿。', urgency: '24小时内就医' },
    { sign: '眼下肿胀', description: '上颌裂齿脓肿的典型征兆。可能通过皮肤破裂。', urgency: '24小时内就医' },
    { sign: '完全拒绝进食', description: '表示严重口腔疼痛。长期可能导致脱水。', urgency: '24小时内就医' },
    { sign: '不停止的出血', description: '持续超过10分钟的口腔出血。', urgency: '当天就医' },
    { sign: '伴口腔症状的发烧', description: '体温超过39.5°C（103°F）伴牙科症状提示全身感染。', urgency: '当天就医' },
    { sign: '突然嗜睡', description: '与牙科症状结合的意外精力不足可能表示感染扩散。', urgency: '当天就医' },
  ],
  immediateActions: [
    '保持您的狗安静和舒适',
    '如果您的狗正在严重疼痛中，不要试图检查嘴巴——它们可能会咬人',
    '如果它们愿意接受，提供软食或水',
    '记录症状开始时间和任何变化',
    '立即联系您的兽医或最近的紧急兽医诊所',
  ],
  whenToSeeVet: '上述任何征兆都需要当天或次日兽医护理。如果您的狗同时出现多个征兆（如面部肿胀伴发烧和拒绝进食），请立即寻求急诊护理。',
  faqs: [
    { question: '牙科问题对狗来说真的是紧急情况吗？', answer: '是的。伴有全身感染（发烧、嗜睡）的牙根脓肿、不受控的口腔出血或晚期骨质流失导致的下颌骨折都是需要立即兽医护理的真正紧急情况。' },
    { question: '等待看兽医期间我应该做什么？', answer: '保持您的狗舒适，提供水，避免触碰疼痛区域，记录所有症状及其时间线以分享给兽医。' },
  ],
  seo: {
    metaTitle: '犬牙科紧急征兆 | 何时寻求紧急护理',
    metaDescription: '识别犬牙科紧急情况：面部肿胀、拒绝进食、不受控出血和发烧。了解何时为您的狗寻求立即兽医护理。',
    keywords: ['犬牙科紧急', '狗牙齿紧急', '狗面部肿胀紧急', '紧急犬牙科护理'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '面部肿胀', path: '/dog-dental-disease/symptoms/facial-swelling' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '寻找紧急兽医', path: '/emergency-guide' },
  ],
};

import type { DentalHubPage } from '../types';

export const zhHub: DentalHubPage = {
  slug: 'hub',
  category: 'hub',
  lang: 'zh',
  title: '犬牙科疾病：犬口腔健康完整指南',
  overview: `牙科疾病是狗最常见的健康问题——超过80%的3岁以上狗患有某种形式的牙周病。从牙菌斑积累到牙龈炎、牙周病，最终导致牙齿脱落的过程是可以通过适当护理预防的。

本综合指南涵盖马来西亚宠物主人需要了解的关于犬牙科疾病的一切：从识别口臭和牙龈发红等早期症状，到了解严重程度分期、兽医诊断程序、治疗类别、恢复预期和长期预防策略。

早期发现和常规兽医牙科护理是保护狗口腔健康和整体健康的最有效方法。`,
  categoryCards: [
    { title: '疾病', description: '牙菌斑、牙龈炎、牙周病和牙根脓肿', path: '/dog-dental-disease/conditions/plaque-buildup', icon: '🦷' },
    { title: '症状', description: '口臭、牙龈发红、面部肿胀等', path: '/dog-dental-disease/symptoms/bad-breath', icon: '🔍' },
    { title: '严重程度', description: '早期、中期和晚期疾病进展', path: '/dog-dental-disease/severity/early', icon: '⚠️' },
    { title: '诊断', description: '口腔检查、探针检查和牙科X光', path: '/dog-dental-disease/diagnosis/oral-exam', icon: '🧪' },
    { title: '治疗', description: '专业清洁、拔牙和预防护理', path: '/dog-dental-disease/treatments/professional-cleaning', icon: '🏥' },
    { title: '恢复', description: '术后护理和愈合时间表', path: '/dog-dental-disease/recovery/post-dental-procedure', icon: '🔄' },
    { title: '预防', description: '刷牙、检查和饮食指导', path: '/dog-dental-disease/prevention/brushing', icon: '🛡️' },
  ],
  emergencyBanner: {
    text: '您的狗是否出现面部肿胀、拒绝进食或持续出血？',
    linkText: '立即查看紧急征兆',
  },
  faqs: [
    { question: '狗牙科疾病有多常见？', answer: '超过80%的3岁以上狗患有某种形式的牙周病，使其成为狗最常见的健康问题。' },
    { question: '狗的牙科疾病可以逆转吗？', answer: '早期牙龈炎可以通过专业清洁和家庭护理完全逆转。但伴有骨质流失的牙周病是不可逆的——治疗重点在于防止进一步恶化。' },
    { question: '马来西亚狗牙科治疗费用是多少？', answer: '马来西亚专业洁牙通常费用为RM200–RM800，具体取决于严重程度、是否需要拔牙和诊所类型。' },
    { question: '狗的牙齿应该多久检查一次？', answer: '兽医建议每年进行一次牙科检查。有牙科疾病史的狗可能需要每6个月检查一次。' },
  ],
  seo: {
    metaTitle: '犬牙科疾病指南马来西亚 | 犬口腔健康中心',
    metaDescription: '马来西亚犬牙科疾病完整指南。了解牙菌斑、牙龈炎、牙周病的症状、治疗、费用和预防方法，保护您的狗口腔健康。',
    keywords: ['犬牙科疾病', '犬口腔健康', '狗牙齿问题', '牙周病狗', '狗牙科护理马来西亚'],
  },
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，专长于伴侣动物牙科和预防护理。',
  },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '宠物牙科护理费用', path: '/qa/article/ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong' },
    { label: '查找附近兽医', path: '/locations' },
    { label: '宠物急救指南', path: '/emergency-guide' },
  ],
};

import type { DentalSymptomPage } from '../types';

export const zhSymptomsBadBreath: DentalSymptomPage = {
  slug: 'bad-breath',
  category: 'symptoms',
  lang: 'zh',
  title: '狗口臭：口腔恶臭可能意味着什么',
  overview: `口臭（口腔恶臭）是狗最常报告的牙科症状，几乎总是潜在口腔疾病的信号。虽然偶尔轻度口气可能是正常的，但持续或恶化的口臭应促使进行兽医检查。

最常见的原因是牙齿上牙菌斑和牙结石的细菌积累。然而，口臭也可能表示更严重的疾病，包括晚期牙周病、牙根脓肿，甚至全身性健康问题。`,
  whatItIndicates: '持续口臭最常见地表示牙菌斑/牙结石积累、牙龈炎或牙周病。在某些情况下，可能表示牙根脓肿、口腔肿瘤或非牙科疾病如肾病或糖尿病。',
  oralVsOtherCauses: '牙科原因会产生特征性的"腐烂"气味，来自细菌感染。甜味或果味可能暗示糖尿病。氨味可能表示肾病。兽医可以帮助区分这些原因。',
  emergencyRedFlags: ['口臭伴面部肿胀', '拒绝进食同时伴有严重口臭', '口腔出血', '突然出现极度恶臭伴嗜睡'],
  severityRouting: [
    { label: '早期（轻度气味）', path: '/dog-dental-disease/severity/early' },
    { label: '中期（持续气味）', path: '/dog-dental-disease/severity/moderate' },
    { label: '晚期（严重气味伴其他征兆）', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: '兽医将进行完整的口腔检查，检查牙结石、牙龈炎症、松动牙齿和肿块。可能建议进行牙科X光检查以评估牙龈线以下的疾病。',
  carePathways: [
    { label: '检查是否为牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '可能是牙龈炎吗？', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '了解严重程度级别', path: '/dog-dental-disease/severity/early' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '狗口臭正常吗？', answer: '偶尔轻度口气可能是正常的，特别是进食后。但持续或恶化的口臭不正常，通常表示需要兽医关注的牙科疾病。' },
    { question: '刷牙可以治好狗的口臭吗？', answer: '如果口臭来自早期牙菌斑积累，定期刷牙可以帮助。但如果牙结石已经形成或牙龈已发炎，需要先进行专业兽医清洁。' },
  ],
  seo: {
    metaTitle: '狗口臭 | 原因及何时看兽医',
    metaDescription: '为什么您的狗有口臭？了解口腔恶臭的含义——从牙菌斑积累到严重牙科疾病——以及何时寻求兽医护理。',
    keywords: ['狗口臭', '犬口腔恶臭', '狗嘴巴臭', '狗口臭原因'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙龈发红', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: '牙科检查', path: '/dog-dental-disease/prevention/dental-checkups' },
  ],
};

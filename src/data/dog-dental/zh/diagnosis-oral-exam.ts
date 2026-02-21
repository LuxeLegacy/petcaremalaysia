import type { DentalDiagnosisPage } from '../types';

export const zhDiagnosisOralExam: DentalDiagnosisPage = {
  slug: 'oral-exam',
  category: 'diagnosis',
  lang: 'zh',
  title: '犬兽医口腔检查：预期情况',
  overview: `兽医口腔检查是牙科疾病诊断的基础。在常规就诊期间，兽医可以在清醒状态下进行口腔检查以评估可见牙结石、牙龈颜色和明显异常。但全面口腔检查需要在麻醉下进行。`,
  whatItInvolves: '清醒检查检查可见牙齿表面、牙龈颜色和口气。麻醉下的全面检查允许兽医检查每颗牙齿、探查牙龈袋、检查松动情况，并评估舌头、腭和口腔组织。',
  whenRecommended: '建议所有狗每年进行口腔检查。当怀疑牙科疾病、在专业清洁前，或如果狗出现牙科症状时，建议进行麻醉下检查。',
  whatItReveals: '口腔检查可以发现牙结石积累、牙龈炎、断裂牙齿、口腔肿块、牙齿松动和牙龈退缩。但超过60%的牙科疾病在牙龈线以下——需要牙科X光才能获得完整图像。',
  associatedConditions: [
    { label: '牙菌斑积累', path: '/dog-dental-disease/conditions/plaque-buildup' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: '狗需要麻醉进行牙科检查吗？', answer: '基本的目视检查可以在清醒状态下进行。但带有探针和X光的彻底检查需要麻醉以确保安全和准确。' },
  ],
  seo: {
    metaTitle: '犬兽医口腔检查 | 预期情况',
    metaDescription: '了解犬兽医口腔检查的过程、何时需要麻醉，以及检查如何揭示您的狗的牙科健康状况。',
    keywords: ['犬口腔检查', '兽医牙科检查狗', '犬牙科检查', '狗牙齿检查'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙科探针', path: '/dog-dental-disease/diagnosis/dental-probing' },
    { label: '牙科X光', path: '/dog-dental-disease/diagnosis/dental-x-rays' },
  ],
};

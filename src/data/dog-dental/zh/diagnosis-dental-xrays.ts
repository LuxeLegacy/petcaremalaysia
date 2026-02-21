import type { DentalDiagnosisPage } from '../types';

export const zhDiagnosisDentalXrays: DentalDiagnosisPage = {
  slug: 'dental-x-rays',
  category: 'diagnosis',
  lang: 'zh',
  title: '犬牙科X光：查看牙龈线以下',
  overview: `牙科X光（放射照片）是兽医牙科学中最重要的诊断工具。超过60%的犬牙科疾病发生在牙龈线以下，在目视检查中是不可见的。麻醉下的全口X光是全面牙科评估的金标准。`,
  whatItInvolves: '在狗麻醉状态下，将小型X光传感器放入口腔内。拍摄多张图像以捕捉所有牙根和周围骨骼。数字X光可提供即时结果，辐射暴露极低。',
  whenRecommended: '在每次专业清洁期间、怀疑牙科疾病时、拔牙前，以及评估外伤或骨折时，建议进行全口牙科X光。',
  whatItReveals: '牙科X光可揭示牙根健康、牙齿周围骨质流失、隐藏脓肿、未萌出或嵌塞牙齿、下颌骨折、牙齿吸收和口腔检查中不可见的肿瘤。',
  associatedConditions: [
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
  ],
  faqs: [
    { question: '牙科X光对狗安全吗？', answer: '是的。现代数字牙科X光使用非常低的辐射剂量。诊断收益远大于微小的辐射风险。' },
    { question: '为什么兽医不能只看牙齿？', answer: '超过60%的牙科疾病隐藏在牙龈线以下。一颗牙齿表面看起来可能正常，但有显著的牙根疾病或骨质流失只能在X光上看到。' },
  ],
  seo: {
    metaTitle: '犬牙科X光 | 牙龈线以下诊断',
    metaDescription: '牙科X光揭示您的狗牙龈线以下隐藏的疾病。了解为什么X光片对准确的牙科诊断和治疗规划至关重要。',
    keywords: ['犬牙科X光', '牙科放射照片狗', '狗牙齿X光', '兽医牙科影像'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '口腔检查', path: '/dog-dental-disease/diagnosis/oral-exam' },
    { label: '牙科探针', path: '/dog-dental-disease/diagnosis/dental-probing' },
  ],
};

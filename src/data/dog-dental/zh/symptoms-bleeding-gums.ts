import type { DentalSymptomPage } from '../types';

export const zhSymptomsBleedingGums: DentalSymptomPage = {
  slug: 'bleeding-gums',
  category: 'symptoms',
  lang: 'zh',
  title: '狗牙龈出血：原因及应对方法',
  overview: `狗牙龈出血是牙龈病的明确征兆。虽然初次尝试刷牙时轻微出血可能是正常的，但进食时自发性出血或出血表示牙龈炎或更晚期的牙周病。`,
  whatItIndicates: '牙龈出血表示活跃炎症——最常见的是牙龈炎或牙周病。咬胶玩具上的血迹、水碗中的血或狗进食时可见的血都是重要征兆。',
  oralVsOtherCauses: '大多数狗的牙龈出血是牙科原因。然而，凝血障碍、某些药物或外伤也可能导致口腔出血。兽医可以通过检查和必要时的血液检查来区分。',
  emergencyRedFlags: ['出血10分钟内不停止', '口腔大量出血', '出血伴面部肿胀', '牙龈苍白同时伴口腔出血'],
  severityRouting: [
    { label: '中期（偶尔出血）', path: '/dog-dental-disease/severity/moderate' },
    { label: '晚期（自发或大量出血）', path: '/dog-dental-disease/severity/advanced' },
  ],
  vetEvaluation: '兽医将检查出血来源、检查松动牙齿并评估牙龈健康。可能需要牙科X光评估出血区域周围的骨支撑。',
  carePathways: [
    { label: '这是牙龈炎吗？', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '可能是牙周病吗？', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '刷牙时狗牙龈出血正常吗？', answer: '如果牙龈已有轻度炎症，最初几次刷牙时轻微出血可能发生。如果温和刷牙一周后出血仍持续或出血量大，请看兽医。' },
  ],
  seo: {
    metaTitle: '狗牙龈出血 | 原因及何时担心',
    metaDescription: '狗牙龈出血表示牙龈病。了解口腔出血的原因、何时是紧急情况，以及兽医牙科评估的重要性。',
    keywords: ['狗牙龈出血', '狗牙龈流血', '狗玩具上有血', '狗牙科出血'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙龈发红', path: '/dog-dental-disease/symptoms/red-gums' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
  ],
};

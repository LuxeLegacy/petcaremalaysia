import type { DentalSymptomPage } from '../types';

export const zhSymptomsRedGums: DentalSymptomPage = {
  slug: 'red-gums',
  category: 'symptoms',
  lang: 'zh',
  title: '狗牙龈发红：牙龈炎症的含义',
  overview: `狗牙龈发红（红斑）是牙龈炎的标志性征兆——由细菌牙菌斑积累引起的牙龈组织炎症。健康的狗牙龈应该是一致的粉红色。任何发红，尤其是牙齿与组织交界的牙龈线处的发红，都值得关注。`,
  whatItIndicates: '牙龈发红最常见地表示由牙菌斑/牙结石积累引起的牙龈炎。也可能表示早期牙周病、过敏反应，或在极少数情况下表示全身性疾病。',
  oralVsOtherCauses: '牙科相关的发红通常集中在牙龈线并伴有牙结石。整个口腔的广泛发红可能暗示口腔炎、自身免疫疾病或毒物接触。',
  emergencyRedFlags: ['牙龈呈深红色、紫色或蓝色', '白色或非常苍白的牙龈（贫血）', '牙龈发红伴面部肿胀', '不会停止的出血'],
  severityRouting: [
    { label: '早期（牙龈线轻微发红）', path: '/dog-dental-disease/severity/early' },
    { label: '中期（可见肿胀和发红）', path: '/dog-dental-disease/severity/moderate' },
  ],
  vetEvaluation: '兽医将检查牙龈颜色、肿胀和出血倾向。牙科探针测量牙齿周围的袋深度，以确定炎症是否已超出牙龈表面。',
  carePathways: [
    { label: '这是牙龈炎吗？', path: '/dog-dental-disease/conditions/gingivitis' },
    { label: '可能是牙周病吗？', path: '/dog-dental-disease/conditions/periodontal-disease' },
    { label: '何时看兽医', path: '/dog-dental-disease/when-to-see-a-vet' },
  ],
  faqs: [
    { question: '健康狗的牙龈应该是什么颜色？', answer: '健康狗的牙龈应该是一致的泡泡糖粉色。有些狗天生有深色素牙龈——这种情况下，注意非色素区域的变化。' },
    { question: '牙龈发红对狗来说疼痛吗？', answer: '发炎的牙龈可能会敏感和不适。您的狗可能通过不愿吃硬食或在您试图检查其嘴巴时转头来表现这一点。' },
  ],
  seo: {
    metaTitle: '狗牙龈发红 | 牙龈炎症原因和护理',
    metaDescription: '狗牙龈发红表示牙龈炎或牙科疾病。了解牙龈炎症的含义、如何评估严重程度，以及何时需要兽医关注。',
    keywords: ['狗牙龈红', '狗牙龈炎症', '牙龈炎征兆狗', '狗牙龈颜色'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '牙龈肿胀', path: '/dog-dental-disease/symptoms/swollen-gums' },
    { label: '牙龈出血', path: '/dog-dental-disease/symptoms/bleeding-gums' },
    { label: '牙龈炎', path: '/dog-dental-disease/conditions/gingivitis' },
  ],
};

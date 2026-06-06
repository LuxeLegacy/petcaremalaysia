import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetDentalCareArticle: PAAArticle = {
  id: 52,
  slug: 'ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong',
  category: 'vet-care',
  lang: 'zh',
  title: '马来西亚宠物牙齿保健费用是多少？',
  directAnswer:
    '马来西亚宠物洗牙费用为RM200–RM800。在全身麻醉下的常规洗牙RM300–RM600，每颗拔牙加RM50–RM200。严重牙周病可超过RM1,000。每天在家刷牙可减少专业清洁需求，并预防昂贵的牙周治疗。',
  tldr: '马来西亚宠物洗牙：RM200–RM800。麻醉洗牙RM300–RM600，每颗拔牙RM50–RM200。严重牙周病超过RM1,000。每日刷牙加每年兽医检查可避免恶化。',
  quickFacts: {
    avgCost: 'RM200 – RM800',
    timeRequired: '2–4小时（含麻醉恢复）',
    difficulty: '需专业处理',
    professionalNeeded: 'Yes',
    insuranceCoverage: '通常不涵盖（视保单而定）',
  },
  detailedAnswer: `宠物牙科护理在马来西亚常被忽视，但牙周病是猫狗最常见的疾病之一。3岁以上的宠物中超过80%患有某种程度的牙周病。

所有宠物洁牙必须在全身麻醉下进行，麻醉费用通常是总费用的最大部分（RM100–RM250）。基础洁牙包括超声波清洁、抛光和检查（RM200–RM400）。如需拔牙，每颗牙齿额外收费RM50–RM150。牙周病治疗和根管治疗可使总费用达到RM600–RM800+。

诊所类型也影响价格：标准兽医诊所通常比专科兽医医院便宜30–50%。大型犬因牙齿更多、麻醉药物用量更大，费用通常高于小型犬。`,
  keyFactors: [
    '麻醉费用——占洁牙总费用的RM100–RM250',
    '牙周病严重程度——轻度与重度病例费用差异3倍',
    '拔牙需求——每颗额外RM50–RM150',
    '宠物体型——大型犬麻醉药物用量更大',
    '诊所类型——专科医院比普通诊所贵30–50%',
    '术前血液检查——RM80–RM150，老年宠物通常需要',
  ],
  steps: [
    { title: '安排牙齿检查', description: '让兽医评估宠物的牙齿健康。许多诊所在常规体检时提供免费牙齿评估。' },
    { title: '进行术前检查', description: '7岁以上的宠物通常需要血液检查以确保麻醉安全（RM80–RM150）。' },
    { title: '安排洁牙预约', description: '确认手术当天早晨禁食要求（通常禁食8–12小时）。' },
    { title: '麻醉与洁牙', description: '兽医会在麻醉状态下进行超声波清洁和抛光，并检查是否需要拔牙。' },
    { title: '恢复与术后护理', description: '大多数宠物在2–4小时后即可回家。可能需要软性食物1–3天。' },
    { title: '建立日常刷牙习惯', description: '从今天开始每天用宠物专用牙刷和牙膏刷牙，以减少未来洁牙频率。' },
  ],
  proTips: [
    '每天刷牙——这是预防牙周病最有效的方法，可将洁牙频率从每年降至每2–3年',
    '提供洁牙零食和玩具作为专业洁牙的补充，但不能替代',
    '从幼年开始适应口腔检查和刷牙——成年后会容易得多',
    '每年进行牙齿检查——早期发现可避免更昂贵的治疗',
    '询问诊所是否提供牙科套餐，包含洁牙和拔牙固定价格',
  ],
  commonMistakes: [
    '忽视口臭——这通常是牙周病的第一个信号',
    '使用人类牙膏（含氟化物，对宠物有毒）',
    '推迟洁牙导致牙周病加重，治疗费用大幅增加',
    '不做术前血液检查就让老年宠物进行麻醉',
    '认为洁牙零食可以替代专业清洁',
  ],
  costComparison: [
    { option: '基础洁牙（无拔牙）', costRange: 'RM200 – RM400', timeRequired: '2–3小时', bestFor: '轻度牙垢', prosCons: '最经济 / 仅适用于轻度病例' },
    { option: '标准洁牙+拔牙', costRange: 'RM400 – RM600', timeRequired: '3–4小时', bestFor: '中度牙周病', prosCons: '处理大多数问题 / 中等费用' },
    { option: '复杂牙科手术', costRange: 'RM600 – RM800+', timeRequired: '4小时+', bestFor: '重度牙周病', prosCons: '全面治疗 / 最贵' },
    { option: '日常刷牙预防', costRange: 'RM20 – RM50/月（牙膏+牙刷）', timeRequired: '每天2分钟', bestFor: '所有宠物', prosCons: '最具性价比 / 需要坚持' },
  ],
  relatedQuestions: [
    { question: '宠物牙科护理多久做一次？', briefAnswer: '每年检查一次，洁牙频率取决于宠物——定期刷牙的宠物可能每2–3年需要一次专业洁牙。', slug: 'ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong' },
    { question: '口臭意味着什么？', briefAnswer: '口臭通常表示牙周病、牙垢积累或更严重的健康问题。应立即咨询兽医。', slug: 'ma-lai-xi-ya-chong-wu-ya-chi-bao-jian-fei-yong' },
    { question: '什么是狗的牙周病？', briefAnswer: '牙周病是牙龈和支撑结构的进行性感染。超过80%的3岁以上狗受到影响。请浏览我们的狗牙科疾病中心了解详情。', slug: 'dog-dental-disease-hub', path: '/dog-dental-disease' },
    { question: '猫最常见的牙科疾病有哪些？', briefAnswer: '牙龈炎、牙齿吸收（FORL）和口炎影响高达70%的成年猫。请浏览我们的猫牙科疾病中心，了解马来西亚的症状、费用与治疗方案。', slug: 'cat-dental-disease-hub', path: '/cat-dental-disease' },
  ],
  citations: [
    { source: '马来西亚兽医协会', title: '宠物牙科护理指南', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: '马来西亚兽医服务局', title: '动物福利标准', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物洁牙费用RM200–RM800。了解洁牙流程、麻醉费用和日常牙齿护理技巧，保持宠物口腔健康。',
    keywords: ['宠物洁牙马来西亚', '宠物牙科费用', '狗洁牙价格', '猫牙科护理', '宠物口腔保健'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

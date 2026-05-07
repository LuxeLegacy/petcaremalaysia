import type { PAAArticle } from '@/lib/paaTypes';

export const zhVetVisitCostArticle: PAAArticle = {
  id: 206,
  slug: 'ma-lai-xi-ya-shou-yi-fei-yong',
  category: 'vet-care',
  lang: 'zh',
  title: '马来西亚兽医诊所费用是多少？',
  directAnswer:
    '马来西亚私人兽医诊所标准咨询费RM30–RM80。紧急或非工作时间就诊RM150–RM500，专科咨询RM200–RM400。血液检查（RM80–RM250）和X光（RM100–RM300）另行收费。政府DVS兽医诊所提供补贴价RM5–RM20。',
  tldr: '马来西亚兽医费用：私人咨询RM30–RM80，紧急RM150–RM500，专科RM200–RM400。血检RM80–RM250，X光RM100–RM300。政府DVS诊所RM5–RM20。治疗前请索取详细报价。',
  quickFacts: {
    avgCost: 'RM30 – RM500 每次就诊',
    timeRequired: '30–90分钟',
    difficulty: '简单',
    professionalNeeded: 'Yes',
    insuranceCoverage: '大多数综合计划涵盖',
  },
  detailedAnswer: `马来西亚的兽医费用因诊所类型、地点和所需服务而有显著差异。了解收费结构有助于宠物主人有效规划预算。

咨询费用：私人诊所的基本咨询费为RM30–RM80，通常包括体检、体重检查和初步评估。政府兽医诊所（兽医服务局/JPV）收取补贴价格RM5–RM20。

紧急和非工作时间就诊：紧急咨询费用RM150–RM500，取决于诊所和时间。非工作时间附加费RM50–RM150很常见。吉隆坡和雪兰莪的24小时紧急诊所收费较高。

诊断检查：血液化验RM80–RM250，X光RM100–RM300每张。超声波RM150–RM400。这些通常是咨询费以外的额外费用。

常见手术：疫苗接种RM40–RM120每针。绝育手术RM150–RM800，取决于动物大小和性别。牙齿清洁在全身麻醉下RM300–RM800。

药物：处方药由兽医直接配发，通常每个疗程RM20–RM100。需要长期用药的慢性病每月可增加RM50–RM200。

位置因素：吉隆坡、八打灵再也和槟城的诊所收费通常比小城镇高20–40%。`,
  keyFactors: [
    '诊所类型 – 私人诊所收费RM30–RM80；政府JPV诊所基本咨询RM5–RM20',
    '就诊时间 – 非工作时间和紧急就诊在常规费用上附加RM50–RM150',
    '所需诊断 – 血液检查（RM80–RM250）、X光（RM100–RM300）和超声波（RM150–RM400）增加费用',
    '宠物体型 – 较大的动物在手术、药物和麻醉方面通常费用更高',
    '地点 – 吉隆坡/雪兰莪的城市诊所比小城镇高20–40%',
    '专科转诊 – 皮肤科、心脏科或骨科专家每次咨询RM200–RM400',
  ],
  steps: [
    { title: '寻找合适的诊所', description: '在Google Maps或PetFinder.my上搜索附近诊所。查看评价并确认已在马来西亚兽医理事会注册。' },
    { title: '提前电话询价', description: '致电诊所询问咨询费用、接受的付款方式以及是否需要预约。' },
    { title: '准备宠物记录', description: '携带疫苗接种卡、既往病历和当前药物或补充剂清单。' },
    { title: '预留额外预算', description: '在咨询费之外准备RM100–RM300用于可能的诊断检查或药物。' },
    { title: '询问分期付款计划', description: '对于昂贵的手术，询问诊所是否提供分期付款或直接接受宠物保险索赔。' },
  ],
  proTips: [
    '政府JPV诊所以私人诊所的一小部分价格提供疫苗接种和基本护理 — 查找最近的JPV办事处',
    '将疫苗接种和健康检查合并在一次就诊中，节省多次咨询费',
    '在同意治疗之前要求详细账单，避免意外费用',
    '一些诊所提供健康套餐（年度检查 + 疫苗 + 驱虫）享受10–20%折扣',
    '保持RM500–RM1,000的宠物紧急基金用于突发兽医费用',
  ],
  commonMistakes: [
    '为省钱跳过年度检查 — 早期发现可防止后续更昂贵的治疗',
    '非紧急情况去急诊诊所 — 普通诊所就诊便宜50–70%',
    '不询问仿制药选项 — 仿制药可节省30–50%的处方费用',
    '忽视牙齿健康 — 未治疗的牙病日后导致RM1,000+的治疗费',
    '假设所有诊所收费相同 — 同一城市的诊所价格可相差100%',
  ],
  costComparison: [
    { option: '政府JPV诊所', costRange: 'RM5 – RM20', timeRequired: '1–2小时（排队）', bestFor: '节俭型宠物主人', prosCons: '非常实惠 / 等待时间长' },
    { option: '私人诊所（基本）', costRange: 'RM30 – RM80', timeRequired: '30–60分钟', bestFor: '常规检查', prosCons: '方便 / 中等费用' },
    { option: '私人诊所（全面）', costRange: 'RM80 – RM200', timeRequired: '45–90分钟', bestFor: '综合护理', prosCons: '全面诊断 / 费用较高' },
    { option: '紧急/24小时诊所', costRange: 'RM150 – RM500', timeRequired: '1–3小时', bestFor: '紧急情况', prosCons: '随时可用 / 最贵' },
  ],
  relatedQuestions: [
    { question: '马来西亚宠物保险费用是多少？', briefAnswer: '宠物保险每月RM95–RM300，取决于保障类型、宠物年龄和品种。', slug: 'ma-lai-xi-ya-chong-wu-bao-xian-fei-yong' },
    { question: '马来西亚狗需要接种什么疫苗？', briefAnswer: '狗需要核心疫苗包括犬瘟热、细小病毒和狂犬病，每针RM40–RM120。', slug: 'ma-lai-xi-ya-gou-xu-yao-jie-zhong-shen-me-yi-miao' },
    { question: '马来西亚狗美容费用是多少？', briefAnswer: '狗美容费用RM30–RM200，取决于品种大小和所需服务。', slug: 'ma-lai-xi-ya-gou-mei-rong-fei-yong' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'DVS紧急热线', detail: '1-300-88-7170（周一至周五 8am-5pm）' },
      { name: 'SPCA雪兰莪紧急电话', detail: '03-4256 5312' },
    ],
    governmentResources: [
      { name: '兽医服务局（DVS/JPV）', detail: '全国政府兽医诊所', url: 'https://www.dvs.gov.my' },
      { name: '马来西亚兽医理事会', detail: '验证注册执业者', url: 'https://www.mvc.gov.my' },
    ],
    animalWelfare: [
      { name: 'SPCA马来西亚', detail: '提供低价兽医服务', url: 'https://www.spca.org.my' },
      { name: 'PetFinder.my', detail: '查找附近诊所和评价', url: 'https://www.petfinder.my' },
    ],
  },
  insurance: {
    covered: ['咨询费用', '诊断检查（血液、X光、超声波）', '紧急就诊', '住院', '手术'],
    exclusions: ['常规疫苗接种', '美容', '既有疾病', '选择性手术', '牙齿清洁（大多数计划）'],
    claimSteps: ['先支付兽医费用并收集详细收据', '在30天内通过保险公司应用程序或门户提交索赔', '包括诊断、治疗详情和支持文件', '报销通常在7–14个工作日内处理'],
  },
  citations: [
    { source: '马来西亚兽医理事会', title: '兽医服务费用指南', publication: 'MVC.gov.my', year: '2024', url: 'https://www.mvc.gov.my' },
    { source: '兽医服务局', title: '公共兽医服务', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚小动物兽医协会', title: '执业标准与收费调查', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家。致力于让所有马来西亚宠物主人能够负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚兽医费用RM30-RM500。比较私人与政府诊所费用、紧急费用，了解如何节省兽医护理开支。',
    keywords: ['兽医费用马来西亚', '宠物诊所价格', '兽医咨询费RM', 'JPV兽医诊所', '紧急兽医马来西亚'],
  },
  datePublished: '2025-01-15',
  dateModified: '2025-02-08',
};

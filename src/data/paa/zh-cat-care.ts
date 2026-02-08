import type { PAAArticle } from '@/lib/paaTypes';

export const zhCatCareArticle: PAAArticle = {
  id: 207,
  slug: 'ma-lai-xi-ya-yang-mao-zhi-nan',
  category: 'cat-care',
  lang: 'zh',
  title: '如何在马来西亚养猫？完整指南',
  directAnswer:
    '在马来西亚养猫需要注意热带气候、适当营养、定期疫苗接种（FVRCP + 狂犬病）、室内安全和寄生虫预防。月均费用RM150–RM400，包括食物、猫砂和基本医疗保健。强烈建议绝育，费用RM150–RM400。',
  tldr: '马来西亚养猫必需品：优质食物（RM80–RM200/月）、年度疫苗（RM80–RM200）、每月跳蚤/蜱虫预防（RM30–RM60）、绝育（RM150–RM400一次性）、以及保持室内饲养以防止交通事故和流浪动物疾病传播。',
  quickFacts: {
    avgCost: 'RM150 – RM400/月',
    timeRequired: '每天30–60分钟',
    difficulty: '简单到中等',
    professionalNeeded: 'Recommended',
    insuranceCoverage: '从RM95/月起可获得',
  },
  detailedAnswer: `马来西亚的热带气候为养猫带来了独特的挑战和优势。全年平均温度27–33°C和高湿度，猫咪需要特别的护理考虑。

住所和环境：在马来西亚，室内猫的寿命明显更长，因为交通事故、流浪动物和传染病的风险较低。如果您的猫外出，考虑建造猫阳台或封闭阳台。确保充足的通风——猫在通风不良的马来西亚住宅中可能会受到热应激。提供多个水源，考虑购买饮水机（RM40–RM150）。

营养：喂食知名品牌的适龄商业猫粮。干粮每月RM40–RM120；湿粮另加RM50–RM100。避免生鱼（常见的本地做法），因为可能导致硫胺素缺乏症。幼猫需要专用配方至12个月大。

疫苗接种：核心疫苗包括FVRCP（猫病毒性鼻气管炎、杯状病毒、泛白细胞减少症）和狂犬病。幼猫从6–8周开始，每3–4周加强直到16周。年度加强针RM80–RM200。在马来西亚某些州，狂犬病疫苗是法律要求。

寄生虫预防：马来西亚温暖的气候意味着全年跳蚤、蜱虫和蠕虫风险。每月滴剂RM30–RM60。每3个月驱虫RM15–RM30每次。

美容：短毛猫每周刷毛一次；长毛品种（波斯猫、布偶猫）需要每天梳理。专业美容每次RM40–RM120。

猫砂和卫生：优质猫砂每月RM30–RM80。每天铲砂，每1–2周完全更换。在马来西亚的高湿度环境中，气味控制至关重要。

医疗保健：年度检查RM30–RM80。母猫绝育RM200–RM400，公猫绝育RM150–RM300。牙齿检查应从2岁开始。`,
  keyFactors: [
    '气候 – 马来西亚的炎热和湿度需要额外补水、通风和全年寄生虫预防',
    '饮食 – 优质商业食品（RM80–RM200/月）必不可少；避免生鱼导致硫胺素缺乏',
    '疫苗接种 – FVRCP和狂犬病是核心疫苗；年度加强针RM80–RM200',
    '室内vs室外 – 室内猫平均寿命长3–5年，因为疾病和事故风险降低',
    '绝育 – 一次性费用RM150–RM400可预防健康问题和意外繁殖',
    '寄生虫控制 – 因热带气候需全年治疗；预防费用RM30–RM60/月',
  ],
  steps: [
    { title: '布置安全的室内空间', description: '准备食水碗、猫砂盆、猫抓柱和藏身处。预算RM200–RM500用于初始设置。' },
    { title: '安排兽医就诊', description: '在第一周内带新猫去兽医做健康检查、疫苗接种和驱虫。首次就诊费用RM80–RM200。' },
    { title: '建立喂食规律', description: '每天定量喂食两次优质猫粮。在家中多处提供新鲜饮水。' },
    { title: '开始寄生虫预防', description: '立即开始每月跳蚤/蜱虫治疗和每季度驱虫。兽医可推荐适合马来西亚气候的产品。' },
    { title: '计划绝育手术', description: '在4–6月龄安排绝育手术。许多SPCA分支和NGO提供补贴价格。' },
    { title: '建立丰富化日常', description: '每天花15–30分钟互动玩耍。每周更换玩具保持兴趣。考虑购买猫树（RM80–RM300）。' },
  ],
  proTips: [
    '在炎热的马来西亚下午，将水冻在冰块模具中加入零食给猫咪消暑',
    '将猫砂盆远离食物放置，并放在通风良好的区域——湿度会加重气味',
    '如果您所在州要求，请向当地政府注册您的猫',
    '加入马来西亚猫咪社区Facebook群组获取建议和紧急兽医推荐',
    '保持RM500–RM1,000的紧急基金专门用于突发兽医费用',
  ],
  commonMistakes: [
    '经常喂生鱼 — 导致硫胺素（维生素B1）缺乏引起神经系统问题',
    '认为"纯室内"猫不需要寄生虫预防 — 跳蚤和蜱虫仍然很容易进入马来西亚住宅',
    '未提供足够的水源 — 脱水是热带气候中猫咪的主要健康问题之一',
    '让猫自由外出 — 暴露于FIV、FeLV、交通事故和中毒风险',
    '推迟绝育手术 — 猫从4个月大就能繁殖，加剧马来西亚流浪猫危机',
  ],
  costComparison: [
    { option: '基本护理（每月）', costRange: 'RM150 – RM250', timeRequired: '30分钟/天', bestFor: '节俭型宠物主人', prosCons: '实惠 / 仅覆盖基本需求' },
    { option: '标准护理（每月）', costRange: 'RM250 – RM400', timeRequired: '30–45分钟/天', bestFor: '大多数猫主人', prosCons: '良好平衡 / 包含预防措施' },
    { option: '高级护理（每月）', costRange: 'RM400 – RM700', timeRequired: '45–60分钟/天', bestFor: '品种猫/展示猫', prosCons: '全面 / 费用较高' },
    { option: '初始设置（一次性）', costRange: 'RM300 – RM800', timeRequired: '2–3小时', bestFor: '新猫主人', prosCons: '完整配置 / 前期投入' },
  ],
  relatedQuestions: [
    { question: '马来西亚宠物保险费用是多少？', briefAnswer: '宠物保险每月RM95–RM300。猫保险通常比狗保险便宜。', slug: 'ma-lai-xi-ya-chong-wu-bao-xian-fei-yong' },
    { question: '如何在马来西亚领养宠物？', briefAnswer: '从SPCA、PAWS或PetFinder.my领养。领养费RM50–RM300，通常包含初次疫苗接种。', slug: 'ru-he-zai-ma-lai-xi-ya-ling-yang-chong-wu' },
    { question: '马来西亚兽医诊所费用是多少？', briefAnswer: '基本咨询RM30–RM80。政府JPV诊所从RM5起。', slug: 'ma-lai-xi-ya-shou-yi-fei-yong' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'DVS紧急热线', detail: '1-300-88-7170（周一至周五 8am-5pm）' },
      { name: 'SPCA雪兰莪', detail: '03-4256 5312' },
    ],
    governmentResources: [
      { name: '兽医服务局（DVS/JPV）', detail: '政府兽医诊所和动物福利', url: 'https://www.dvs.gov.my' },
    ],
    animalWelfare: [
      { name: 'SPCA马来西亚', detail: '补贴绝育和兽医护理', url: 'https://www.spca.org.my' },
      { name: 'PAWS动物福利协会', detail: '救助、安置和教育', url: 'https://www.pfrompaws.org' },
      { name: 'PetFinder.my', detail: '猫咪领养和诊所目录', url: 'https://www.petfinder.my' },
    ],
  },
  insurance: {
    covered: ['疾病治疗', '意外保障', '手术和住院', '诊断检查'],
    exclusions: ['常规疫苗接种', '美容', '既有疾病', '繁殖相关费用', '牙齿清洁'],
    claimSteps: ['前往任何注册兽医并先行付款', '收集详细收据和医疗报告', '在30天内通过保险公司应用程序提交索赔', '在7–14个工作日内收到报销'],
  },
  citations: [
    { source: '马来西亚兽医服务局', title: '宠物饲养指南', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚小动物兽医协会', title: '猫科护理标准', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: '世界小动物兽医协会', title: 'WSAVA疫苗接种指南', publication: 'WSAVA.org', year: '2024', url: 'https://wsava.org' },
  ],
  author: {
    name: 'Dr. Aisha Rahman',
    credentials: 'DVM，猫科医学证书',
    bio: '在吉隆坡执业10年的猫科兽医专家。倡导负责任的猫咪饲养和马来西亚热带气候下的室内猫福利。',
  },
  seo: {
    metaDescription: '马来西亚养猫完整指南：费用（RM150-RM400/月）、疫苗接种、营养、寄生虫预防和热带气候养猫贴士。',
    keywords: ['马来西亚养猫', '猫护理马来西亚', '养猫费用RM', '猫疫苗马来西亚', '幼猫护理指南', '室内猫马来西亚'],
  },
  datePublished: '2025-01-20',
  dateModified: '2025-02-08',
};

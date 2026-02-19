import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetBoardingCostArticle: PAAArticle = {
  id: 51,
  slug: 'ma-lai-xi-ya-chong-wu-ji-yang-fei-yong',
  category: 'pet-care',
  lang: 'zh',
  title: '马来西亚宠物寄养费用是多少？',
  directAnswer:
    '马来西亚宠物寄养费用为每晚RM25至RM120，具体取决于设施类型、宠物大小和地点。基础犬舍寄养起价RM25–RM40/晚，提供独立套房和24小时照护的豪华宠物酒店可达RM80–RM120/晚。',
  tldr: '马来西亚宠物寄养费用从RM25（基础犬舍）到RM120/晚（豪华酒店）不等。价格因宠物大小、地点和服务内容而异。吉隆坡和雪兰莪的收费高于其他州属。',
  quickFacts: {
    avgCost: 'RM25 – RM120/晚',
    timeRequired: '需提前预订（1–4周）',
    difficulty: '简单',
    professionalNeeded: 'No',
    insuranceCoverage: '通常不涵盖',
  },
  detailedAnswer: `马来西亚宠物寄养设施从简单犬舍到豪华宠物酒店一应俱全。费用取决于设施类型、宠物大小以及套餐包含的服务。

基础犬舍（RM25–RM45/晚）提供共用或独立笼位，含基本喂食和饮水。通常由小型经营者或附属于兽医诊所运营。中档寄养设施（RM45–RM80/晚）提供独立活动空间、每日运动，有时含美容服务。豪华宠物酒店（RM80–RM120+/晚）提供空调套间、摄像头查看、玩耍时间和专业照护。

猫咪寄养通常比狗狗便宜，平均RM30–RM70/晚。狗狗寄养费用因品种体型差异显著——大型犬比同一设施的小型犬贵30–50%。

地点也很重要。吉隆坡、白沙罗和梳邦再也的设施收费比槟城、新山或小城市高20–40%。`,
  keyFactors: [
    '设施类型——基础犬舍与豪华酒店价格差距最大',
    '宠物体型——大型犬比小型犬贵30–50%',
    '寄养时长——大多数设施提供周折扣（减10–20%）',
    '地点——吉隆坡和雪兰莪收费比其他州高20–40%',
    '包含服务——美容、玩耍时间和摄像头查看会增加费用',
    '疫苗要求——大多数正规设施要求宠物疫苗齐全',
  ],
  steps: [
    { title: '搜索附近设施', description: '搜索您所在区域的宠物寄养服务。查看谷歌地图和脸书上的真实客户评价。' },
    { title: '确认疫苗要求', description: '大多数正规寄养设施要求狂犬病、犬瘟热和细小病毒疫苗。确保您的宠物疫苗齐全。' },
    { title: '实地参观', description: '预订前务必亲自参观。检查清洁程度、每只宠物的活动空间和员工态度。' },
    { title: '了解日常安排', description: '确认喂食时间、运动时间和员工监护时间。' },
    { title: '提前预订', description: '热门设施在学校假期和旺季（农历新年、开斋节）通常提前2–4周订满。' },
    { title: '准备宠物必需品', description: '带上宠物自己的食物、寝具和任何药物。熟悉的气味可减轻宠物的压力。' },
  ],
  proTips: [
    '学校假期和节庆季节前至少3周预订——设施很快就会满',
    '长时间外出前先安排一次过夜试住，看宠物能否适应',
    '要求每日照片或视频更新——信誉良好的设施通常免费提供此服务',
    '确认设施是否有兽医值班或附近有兽医——这是安心保障的关键',
    '长期住宿折扣很常见——务必询问周费或月费',
  ],
  commonMistakes: [
    '预订前不亲自参观设施',
    '入住当天忘记带最新疫苗记录',
    '未询问宠物生病时的紧急兽医处理方案',
    '仅凭价格选择而不查看评价',
    '没有准备足够全程加余量的食物',
  ],
  costComparison: [
    { option: '基础犬舍', costRange: 'RM25 – RM45/晚', timeRequired: '当天接送', bestFor: '预算有限的主人', prosCons: '实惠 / 共用空间，基础照护' },
    { option: '中档寄养', costRange: 'RM45 – RM80/晚', timeRequired: '当天', bestFor: '大多数宠物主人', prosCons: '性价比高 / 高级功能有限' },
    { option: '豪华宠物酒店', costRange: 'RM80 – RM120/晚', timeRequired: '当天', bestFor: '焦虑宠物或长期寄养', prosCons: '最舒适 / 最贵' },
    { option: '上门宠物照料', costRange: 'RM50 – RM100/天', timeRequired: '灵活', bestFor: '不喜欢犬舍的宠物', prosCons: '家庭环境 / 监管较少' },
  ],
  relatedQuestions: [
    { question: '吉隆坡最好的宠物寄养在哪里？', briefAnswer: '吉隆坡评价最高的设施包括Petopia、Paw Palace和Happy Pets Hotel。务必核查评价并亲自参观。', slug: 'ma-lai-xi-ya-chong-wu-ji-yang-fei-yong' },
    { question: '猫和狗可以一起寄养吗？', briefAnswer: '大多数设施将猫和狗分开安置。部分豪华酒店为多宠物家庭提供相邻套间。', slug: 'ma-lai-xi-ya-chong-wu-ji-yang-fei-yong' },
    { question: '寄养需要哪些疫苗？', briefAnswer: '狗通常需要狂犬病、犬瘟热、细小病毒；猫需要FVRCP。具体要求因设施而异。', slug: 'ma-lai-xi-ya-gou-xu-yao-shen-me-yi-miao' },
  ],
  citations: [
    { source: '马来西亚兽医服务局', title: '宠物护理设施标准', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚犬只协会', title: '犬舍标准指南', publication: 'MKA Malaysia', year: '2024' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物寄养费用RM25–RM120/晚。比较犬舍、中档和豪华宠物酒店价格，为您的宠物选择最佳设施。',
    keywords: ['宠物寄养马来西亚', '宠物寄养费用', '犬舍价格马来西亚', '宠物酒店吉隆坡', '猫寄养价格'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

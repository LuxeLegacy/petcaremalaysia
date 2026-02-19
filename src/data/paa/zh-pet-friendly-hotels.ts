import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetFriendlyHotelsArticle: PAAArticle = {
  id: 60,
  slug: 'ma-lai-xi-ya-ke-dai-chong-wu-jiu-dian',
  category: 'pet-travel',
  lang: 'zh',
  title: '马来西亚有哪些可以带宠物的酒店？',
  directAnswer:
    '马来西亚多家酒店欢迎宠物入住，包括吉隆坡的Ritz-Carlton、槟城的Eastern & Oriental Hotel及全国多家精品酒店。宠物附加费通常为RM50–RM200/晚。AirBnb也提供大量宠物友好选项，通常比酒店更灵活，价格更实惠。',
  tldr: '马来西亚宠物友好酒店：宠物附加费RM50–RM200/晚。主要城市（吉隆坡、槟城、新山）选择最多。AirBnb通常是性价比更高的宠物友好住宿选择。提前联系酒店确认政策。',
  quickFacts: {
    avgCost: 'RM50 – RM200/晚（宠物附加费）',
    timeRequired: '预订时需提前确认',
    difficulty: '简单',
    professionalNeeded: 'No',
    insuranceCoverage: '不涵盖',
  },
  detailedAnswer: `在马来西亚带宠物旅行需要提前规划，因为并非所有酒店都接受宠物，政策也因地点和宠物类型而异。

吉隆坡宠物友好酒店：吉隆坡宠物友好选项最多。部分接受宠物的酒店包括精品酒店和服务式公寓，宠物附加费RM50–RM150/晚。务必提前致电确认，因为政策随时可能变更。

槟城：槟城也有越来越多的宠物友好选项，尤其是精品民宿和海滨度假村。

AirBnb：马来西亚的AirBnb平台提供大量宠物友好房源，尤其在吉隆坡、槟城和新山。筛选"宠物友好"选项，价格通常比酒店低20–40%，且空间更大更适合宠物。

重要提示：许多声称"宠物友好"的酒店只接受小型犬（体重<10kg），部分只接受猫。大型犬选项非常有限。务必在预订前确认具体的宠物政策、体重限制和附加费用。`,
  keyFactors: [
    '宠物体型和类型——大型犬选项非常有限',
    '住宿类型——服务式公寓和AirBnb通常比酒店更灵活',
    '地点——吉隆坡和槟城选项最多',
    '宠物附加费——从RM50到RM200/晚不等',
    '押金要求——部分酒店要求可退还宠物押金（RM200–RM500）',
    '酒店设施——部分提供宠物欢迎礼包、宠物床和喂食碗',
  ],
  steps: [
    { title: '搜索宠物友好住宿', description: '使用Booking.com、Airbnb（筛选宠物友好）或Google搜索"pet friendly hotel KL"。' },
    { title: '直接联系酒店确认', description: '在线信息可能过时。致电或发邮件直接确认当前宠物政策、体重限制和附加费用。' },
    { title: '了解限制条件', description: '询问宠物是否可以留在房间（无人时）、允许的区域（大堂、餐厅）和任何行为要求。' },
    { title: '准备宠物证件', description: '部分酒店要求看到最新疫苗证书。提前准备好所有文件。' },
    { title: '带上宠物必需品', description: '带上宠物的食物、水碗、床、玩具和清洁袋。不要依赖酒店提供这些物品。' },
    { title: '遵守酒店规定', description: '尊重其他客人——保持宠物安静，及时清理粪便，控制好宠物不让其打扰他人。' },
  ],
  proTips: [
    '优先选择服务式公寓而非酒店——通常更宠物友好且有厨房设施',
    'AirBnb是最佳选择——筛选宠物友好房源，私人空间更适合宠物',
    '订房时明确告知宠物品种、体重和数量——避免到达时被拒绝',
    '携带宠物的疫苗证书和芯片信息——某些地方可能要求查看',
    '规划宠物友好的观光路线——吉隆坡等城市有越来越多的宠物友好餐厅和公园',
  ],
  commonMistakes: [
    '不提前确认宠物政策就预订——到达时可能被拒绝',
    '隐瞒携带宠物——可能面临额外罚款或被驱逐',
    '带宠物去非宠物友好餐厅和购物中心',
    '忘记带足够的宠物食物——旅行目的地可能找不到您宠物平时吃的品牌',
    '不带宠物保险就出行——旅行中的医疗急诊费用可能很高',
  ],
  costComparison: [
    { option: 'AirBnb（宠物友好）', costRange: 'RM100 – RM300/晚（含宠物）', timeRequired: '提前预订', bestFor: '大多数宠物旅行者', prosCons: '最灵活 / 政策因房主而异' },
    { option: '精品酒店/民宿', costRange: 'RM200 – RM500/晚（含附加费）', timeRequired: '提前确认', bestFor: '小型宠物', prosCons: '服务较好 / 限制较多' },
    { option: '服务式公寓', costRange: 'RM150 – RM400/晚', timeRequired: '提前联系', bestFor: '长期出行', prosCons: '空间大厨房齐全 / 宠物政策不一' },
    { option: '度假屋/别墅', costRange: 'RM300 – RM800/晚', timeRequired: '提前确认', bestFor: '多宠物或大型犬', prosCons: '最自由 / 最贵' },
  ],
  relatedQuestions: [
    { question: '马来西亚有哪些宠物友好的旅游景点？', briefAnswer: '部分公园（如吉隆坡的大马公园）、部分海滩和宠物友好的露天餐厅欢迎宠物。室内购物中心和大多数景区不允许宠物入内。', slug: 'ma-lai-xi-ya-ke-dai-chong-wu-jiu-dian' },
    { question: '带宠物搭乘马来西亚航空或亚航怎么处理？', briefAnswer: '马来西亚主要航空公司大多不允许宠物在客舱内，需作为货物运输或使用宠物专用航空运输服务。详见旅游要求指南。', slug: 'ma-lai-xi-ya-chong-wu-lv-xing-yao-qiu' },
  ],
  citations: [
    { source: '马来西亚旅游、艺术及文化部', title: '马来西亚旅游指南', publication: 'Tourism.gov.my', year: '2024', url: 'https://www.tourism.gov.my' },
    { source: 'PetFinder.my', title: '马来西亚宠物友好指南', publication: 'PetFinder.my', year: '2024', url: 'https://www.petfinder.my' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物友好酒店和住宿指南。附加费RM50–RM200/晚。了解吉隆坡、槟城宠物友好酒店选项，以及AirBnb宠物住宿技巧。',
    keywords: ['宠物友好酒店马来西亚', '带宠物入住吉隆坡', '宠物友好AirBnb马来西亚', '宠物旅行住宿', '带狗旅行马来西亚'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

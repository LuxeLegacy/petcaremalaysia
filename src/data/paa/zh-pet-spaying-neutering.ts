import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetSpayingNeuteringArticle: PAAArticle = {
  id: 57,
  slug: 'ma-lai-xi-ya-chong-wu-jue-yu-fei-yong',
  category: 'pet-health',
  lang: 'zh',
  title: '马来西亚宠物绝育费用是多少？',
  directAnswer:
    '马来西亚宠物绝育费用：母犬绝育（卵巢子宫切除）RM400–RM900，公犬去势RM200–RM500。猫咪绝育更便宜：母猫RM200–RM500，公猫RM80–RM200。政府兽医诊所和流浪动物组织通常提供补贴价格。',
  tldr: '宠物绝育费用：公猫RM80–RM200，母猫RM200–RM500，公犬RM200–RM500，母犬RM400–RM900。建议在4–6个月进行。绝育可延长寿命、防止繁殖、减少某些癌症风险。',
  quickFacts: {
    avgCost: '母犬RM400–RM900 / 公犬RM200–RM500 / 母猫RM200–RM500 / 公猫RM80–RM200',
    timeRequired: '手术1–3小时，恢复3–14天',
    difficulty: '需专业处理',
    professionalNeeded: 'Yes',
    insuranceCoverage: '通常不涵盖（预防性手术）',
  },
  detailedAnswer: `绝育是马来西亚宠物主人可以为宠物健康和控制流浪动物数量做的最重要决定之一。马来西亚每年约有100,000只流浪动物被安乐死，绝育是解决这一问题的根本途径。

费用差异原因：母犬和母猫的绝育手术（卵巢子宫切除）比公犬猫（去势）更复杂，涉及腹部开刀，因此费用更高。体型大的狗需要更多麻醉药物，手术时间更长，收费更高。

政府补贴项目：马来西亚农业及粮食安全部旗下的兽医服务局（DVS）不定期举办低价绝育活动。SPCA、PAWS和其他动物福利组织也定期提供补贴绝育。关注这些组织的社交媒体获取最新活动信息。

最佳绝育年龄：猫咪4–6个月，狗狗4–6个月（小型犬）或6–12个月（大型犬）。在第一次发情前绝育对母犬猫的健康益处最大。`,
  keyFactors: [
    '性别——母犬猫手术更复杂，费用更高',
    '体型和体重——大型犬需要更多麻醉药物',
    '年龄——成年动物手术风险略高',
    '诊所类型——政府诊所比私立诊所便宜50–70%',
    '术前血液检查——通常另计（RM80–RM150）',
    '术后护理套餐——含伊丽莎白圈、抗生素等',
  ],
  steps: [
    { title: '咨询兽医', description: '在宠物4–6月龄时咨询兽医，讨论最佳绝育时机和手术风险评估。' },
    { title: '进行术前检查', description: '血液检查确保宠物适合接受麻醉（RM80–RM150）。老年动物更为重要。' },
    { title: '手术当天禁食', description: '手术前8–12小时禁食禁水。准时到达诊所并签署手术同意书。' },
    { title: '接受手术', description: '手术在全身麻醉下进行，耗时1–3小时。当天通常可以接回宠物。' },
    { title: '术后护理', description: '保持切口清洁干燥，使用伊丽莎白圈防止舔舐。按时喂食抗生素。' },
    { title: '复诊取线', description: '约10–14天后复诊检查切口愈合情况并取出缝线。' },
  ],
  proTips: [
    '关注SPCA、PAWS和PetFinder.my的低价绝育活动——最低可达RM50',
    '询问多宠物折扣——同时带多只宠物绝育可享优惠',
    '选择合适时机——马来西亚雨季（11月–3月）相对凉快，更适合术后恢复',
    '为伊丽莎白圈准备备用——宠物容易弄坏或弄丢',
    '计划好2–3天陪伴宠物度过术后恢复期',
  ],
  commonMistakes: [
    '等到第一次发情后才绝育——第一次发情前绝育对健康益处最大',
    '手术当天不禁食——这会危及宠物生命安全',
    '术后太早让宠物过度运动——至少休息7–14天',
    '让宠物舔舐切口——会导致感染，可能需要额外费用',
    '绝育后继续喂食与之前相同分量的食物——绝育动物代谢率降低，容易肥胖',
  ],
  costComparison: [
    { option: '公猫去势', costRange: 'RM80 – RM200', timeRequired: '30分钟手术', bestFor: '公猫主人', prosCons: '最便宜 / 简单手术' },
    { option: '母猫绝育', costRange: 'RM200 – RM500', timeRequired: '1–2小时', bestFor: '母猫主人', prosCons: '预防子宫蓄脓 / 中等费用' },
    { option: '公犬去势', costRange: 'RM200 – RM500', timeRequired: '45–60分钟', bestFor: '公犬主人', prosCons: '减少前列腺问题 / 合理价格' },
    { option: '母犬绝育', costRange: 'RM400 – RM900', timeRequired: '1.5–3小时', bestFor: '母犬主人', prosCons: '预防乳腺癌和子宫蓄脓 / 最贵' },
  ],
  relatedQuestions: [
    { question: '绝育会改变宠物的性格吗？', briefAnswer: '绝育通常会减少荷尔蒙驱动的行为（公犬的攻击性、母猫的叫春），但不会改变基本性格。', slug: 'ma-lai-xi-ya-chong-wu-jue-yu-fei-yong' },
    { question: '绝育后宠物会变胖吗？', briefAnswer: '绝育后代谢率降低，如不调整饮食确实容易增重。换成绝育专用食品并适度运动可以预防肥胖。', slug: 'ma-lai-xi-ya-chong-wu-jue-yu-fei-yong' },
  ],
  citations: [
    { source: '马来西亚兽医服务局', title: '负责任宠物主人和动物管理', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚防止虐待动物协会', title: '绝育意识运动', publication: 'SPCA Selangor', year: '2024', url: 'https://spca.org.my' },
    { source: '马来西亚兽医协会', title: '外科手术指南', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物绝育费用：公猫RM80–RM200，母猫RM200–RM500，犬只RM200–RM900。了解最佳时机、低价绝育活动和术后护理。',
    keywords: ['宠物绝育马来西亚', '绝育费用', '猫绝育价格', '狗去势费用', '低价绝育活动马来西亚'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

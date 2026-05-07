import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetLicensingArticle: PAAArticle = {
  id: 59,
  slug: 'ma-lai-xi-ya-chong-wu-zhu-ce-yao-qiu',
  category: 'pet-care',
  lang: 'zh',
  title: '马来西亚宠物注册和执照要求是什么？',
  directAnswer:
    '马来西亚狗只执照费每年RM10–RM50，由当地市政厅（如吉隆坡市政厅DBKL、八打灵市议会MBPJ）发出。养狗后3个月内须办执照，须出示有效狂犬疫苗证明，部分地区还要求植入晶片。猫一般不需要执照。',
  tldr: '马来西亚狗只执照：每年RM10–RM50，由市政厅（DBKL、MBPJ）发出。3个月内须办妥。狂犬疫苗强制，部分地区需植入晶片。无照狗只可能被扣留。猫多数地区无需执照。',
  quickFacts: {
    avgCost: 'RM10 – RM50/年（犬只）',
    timeRequired: '30–60分钟办理',
    difficulty: '简单',
    professionalNeeded: 'No',
    insuranceCoverage: '不涵盖',
  },
  detailedAnswer: `马来西亚的宠物注册和执照要求由地方政府管理，因此不同市政局的规定和收费略有差异。

法律依据：根据1953年《狗狗法令》（Dogs Act 1953）及各市政局附则，犬主有法律义务注册其犬只并每年更新执照。

各市政局收费参考：
• 吉隆坡市政局（DBKL）：未绝育狗RM25/年，已绝育狗RM15/年
• 八打灵再也市政局（MBPJ）：RM25–RM50/年
• 雪兰莪其他市政局（MPSJ、MBSA等）：RM10–RM30/年
• 槟城市政局（MBPP）：RM20–RM40/年

注册要求：
• 最新狂犬病疫苗证书（这是最重要的要求）
• 宠物照片（部分市政局要求）
• 宠物主人身份证明
• 住址证明

在大多数地区，已绝育的犬只可享有执照费用减免（通常减少30–50%）。`,
  keyFactors: [
    '所在市政局——不同地区收费和程序不同',
    '犬只是否绝育——已绝育犬只通常享有费用减免',
    '狂犬病疫苗——注册必须提供最新疫苗证书',
    '犬只数量——多犬家庭每只均需单独注册',
    '芯片状态——部分市政局要求犬只植入芯片',
  ],
  steps: [
    { title: '确认所在市政局', description: '确认管辖您住所的市政局（例如：吉隆坡→DBKL，白沙罗→MBPJ）。访问其官方网站了解当前要求和收费。' },
    { title: '确保疫苗齐全', description: '宠物必须已完成狂犬病疫苗接种（有效期内）。这是注册的硬性要求。' },
    { title: '准备所需文件', description: '收集宠物疫苗证书、您的身份证/护照、住址证明和宠物照片。' },
    { title: '前往市政局办理', description: '亲自前往市政局兽医部门办理注册。部分市政局支持网上注册——查看官网。' },
    { title: '付款并领取执照牌', description: '缴纳年费，领取执照牌（挂在宠物项圈上）和注册证书。' },
    { title: '每年更新', description: '犬只执照需每年更新，通常在1月–3月更新上一年的执照。设置提醒以免逾期。' },
  ],
  proTips: [
    '绝育您的狗——可享执照费用减免，同时有益健康和减少流浪动物',
    '保留执照证书复印件——万一原件丢失',
    '将执照牌固定在项圈上——如果狗狗走失，有执照的狗更容易被归还',
    '部分市政局提供多年注册选项——可节省时间',
    '询问您的兽医——许多诊所可以协助办理注册手续',
  ],
  commonMistakes: [
    '忘记每年更新执照——逾期可能面临罚款',
    '换地址后不更新注册信息——搬迁需重新在新所在地市政局注册',
    '出行时不携带执照证书——检查时需出示',
    '疫苗过期后仍持有旧执照——需先更新疫苗才能续期',
    '在Airbnb或短租公寓养狗时忽视注册要求',
  ],
  costComparison: [
    { option: '已绝育犬只（DBKL）', costRange: 'RM15/年', timeRequired: '30分钟', bestFor: '吉隆坡绝育犬主', prosCons: '最实惠 / 仅适用于已绝育犬只' },
    { option: '未绝育犬只（DBKL）', costRange: 'RM25/年', timeRequired: '30分钟', bestFor: '吉隆坡未绝育犬主', prosCons: '标准收费 / 建议考虑绝育节省费用' },
    { option: '其他市政局', costRange: 'RM10 – RM50/年', timeRequired: '30–60分钟', bestFor: '吉隆坡以外地区', prosCons: '收费因地而异 / 需查询当地规定' },
    { option: '猫咪（大多数地区）', costRange: '无需注册', timeRequired: '无', bestFor: '猫主人', prosCons: '无费用 / 仍建议芯片和疫苗' },
  ],
  relatedQuestions: [
    { question: '不注册犬只会怎样？', briefAnswer: '未注册犬只可能被市政局没收。取回需缴纳罚款（RM200–RM500+）和补缴执照费。', slug: 'ma-lai-xi-ya-chong-wu-zhu-ce-yao-qiu' },
    { question: '马来西亚哪些犬种需要特别许可？', briefAnswer: '比特犬、斗牛犬等部分被列为危险品种的犬只在某些地区需要额外许可或被禁止。联系您的市政局了解当前规定。', slug: 'ma-lai-xi-ya-chong-wu-zhu-ce-yao-qiu' },
  ],
  citations: [
    { source: '吉隆坡市政局', title: '犬只注册和执照', publication: 'DBKL.gov.my', year: '2024', url: 'https://www.dbkl.gov.my' },
    { source: '马来西亚兽医服务局', title: '宠物注册指南', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚法律', title: '1953年狗狗法令（第149章）', publication: 'AGC.gov.my', year: '2023', url: 'https://www.agc.gov.my' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物注册要求和费用指南。犬只执照RM10–RM50/年，需狂犬病疫苗证书。了解DBKL、MBPJ等市政局的具体要求。',
    keywords: ['宠物注册马来西亚', '犬只执照', 'DBKL狗注册', '宠物牌照费用', '马来西亚养狗法律'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

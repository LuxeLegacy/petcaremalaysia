import type { PAAArticle } from '@/lib/paaTypes';

export const zhDogVaccinesArticle: PAAArticle = {
  id: 14,
  slug: 'ma-lai-xi-ya-gou-xu-yao-jie-zhong-shen-me-yi-miao',
  category: 'veterinary-services',
  lang: 'zh',
  title: '马来西亚的狗需要接种什么疫苗？',
  directAnswer:
    '马来西亚的狗只需接种核心疫苗：DHPP在6–8、10–12和14–16周龄分三剂注射，狂犬疫苗在12–16周龄注射，之后每年加强一次。由于热带气候，强烈建议加打钩端螺旋体和犬咳疫苗。幼犬全套疫苗费用为RM200–RM500。',
  tldr: '马来西亚幼犬需打三剂DHPP（6–8、10–12、14–16周）加狂犬疫苗（12–16周）。法律规定每年加强针。幼犬全套：RM200–RM500。建议加打钩端螺旋体与犬咳疫苗。',
  quickFacts: {
    avgCost: 'RM200 – RM500（幼犬全套）',
    timeRequired: '3次兽医就诊，历时8–10周',
    difficulty: '简单',
    professionalNeeded: 'Yes',
    insuranceCoverage: '通常不涵盖（日常护理）',
  },
  detailedAnswer: `疫苗接种是马来西亚狗最重要的预防保健措施。热带气候和大量流浪犬使传染病风险更高，完整的疫苗接种计划至关重要。

核心疫苗（必须接种）：
DHPP（五合一）：此组合疫苗可预防犬瘟热、肝炎（腺病毒）、细小病毒和副流感——均为可致命疾病。幼犬在6–8周龄接种第一剂，10–12周第二剂，14–16周第三剂。年度加强针维持保护力。

狂犬疫苗：根据马来西亚《1953年动物法令》，狂犬疫苗接种是法律强制要求，由兽医服务局（DVS）执行。狗在12–16周龄接种首次狂犬疫苗，每年需加强接种。有效的狂犬疫苗接种证书是办理狗证的必要条件。

非核心疫苗（强烈建议）：
钩端螺旋体病：因马来西亚热带气候多雨，强烈建议接种。钩端螺旋体细菌在积水和易发洪水的地区繁殖。经常外出、去公园或生活在有鼠类活动区域的狗应每年接种。

博德特氏菌（犬窝咳）：建议常去美容院、寄宿设施、狗公园或与许多其他狗互动的犬只接种。马来西亚的寄宿犬舍通常要求此疫苗。

犬流感：在马来西亚不太常见，但建议高密度地区或国际旅行的犬只接种。

疫苗费用：全套幼犬疫苗（3轮DHPP + 狂犬疫苗）通常花费RM200–RM500，取决于诊所。单次年度加强针每次RM60–RM150。政府诊所和DVS组织的疫苗运动费用较低，狂犬疫苗有时低至RM20–RM30。`,
  keyFactors: [
    '年龄 – 幼犬必须在6–8周龄开始DHPP疫苗接种；母源抗体在此时消退',
    '法律要求 – 狂犬疫苗接种是马来西亚法律强制要求（1953年动物法令）',
    '热带风险 – 因大量降雨和洪水，钩端螺旋体病在马来西亚是重大威胁',
    '加强针计划 – 大多数疫苗需要年度加强针以维持免疫力',
    '生活方式 – 常去公园、犬舍或美容院的狗需要额外的非核心疫苗',
    '疫苗质量 – 选择使用国际认可品牌疫苗（Nobivac、Vanguard）的诊所',
    '记录保存 – 保持疫苗接种手册更新；办理狗证、寄宿和出行均需要',
  ],
  steps: [
    { title: '首次兽医就诊（6–8周龄）', description: '带幼犬接种第一剂DHPP疫苗并进行全面健康检查。兽医会创建疫苗接种手册并安排后续预约。' },
    { title: '第二剂DHPP（10–12周龄）', description: '回诊接种第二剂DHPP加强针。兽医也可能在此次就诊开始钩端螺旋体病疫苗接种。' },
    { title: '第三剂DHPP + 狂犬疫苗（14–16周龄）', description: '完成幼犬系列的第三剂DHPP和首次狂犬疫苗接种。您的幼犬现在已受到核心疾病的保护。' },
    { title: '钩端螺旋体病加强针（16–18周龄）', description: '如果在10–12周开始接种，钩端螺旋体病加强针现在到期。这在马来西亚热带环境中至关重要。' },
    { title: '犬窝咳（可选，16周以上）', description: '如果您的狗会去寄宿设施、美容院或狗公园，接种博德特氏菌疫苗。' },
    { title: '年度加强针（每年）', description: '安排年度兽医就诊接种DHPP、狂犬和钩端螺旋体病加强针。保持疫苗接种手册更新。' },
  ],
  proTips: [
    '在最后一剂DHPP后2周内（约18周龄）保持幼犬在室内，远离未接种疫苗的狗',
    '政府DVS疫苗运动提供低至RM20–RM30的狂犬疫苗——查看DVS.gov.my了解时间表',
    '务必请兽医更新疫苗接种手册，并保留所有记录的电子副本',
    '如果您居住在易发洪水的地区如吉兰丹、彭亨或柔佛部分地区，钩端螺旋体病疫苗接种至关重要',
    '设置年度加强针提醒——疫苗接种中断可能使您的狗面临感染风险',
  ],
  commonMistakes: [
    '推迟到幼犬"长大"才接种疫苗——这使它们在最关键时期处于危险中',
    '跳过狂犬疫苗接种——这不是可选的，是马来西亚法律要求，可预防致命疾病',
    '在完成全套疫苗接种前带幼犬去公共公园——它们可能从受污染的地面感染细小病毒',
    '不接种钩端螺旋体病疫苗——这种疾病在热带马来西亚常见，且可传播给人类',
    '网上购买疫苗自行注射——不当的储存和注射技术可能使疫苗失效',
  ],
  costComparison: [
    { option: '私人兽医诊所（全套）', costRange: 'RM200 – RM500', timeRequired: '3次就诊/10周', bestFor: '大多数宠物主人', prosCons: '全面护理 / 费用较高' },
    { option: '政府诊所', costRange: 'RM50 – RM150', timeRequired: '3次就诊/10周', bestFor: '预算有限者', prosCons: '非常实惠 / 名额有限' },
    { option: 'DVS疫苗运动', costRange: 'RM20 – RM30（狂犬疫苗）', timeRequired: '1次就诊', bestFor: '仅狂犬疫苗', prosCons: '最便宜 / 仅核心疫苗' },
    { option: '年度加强针（私人）', costRange: 'RM80 – RM150', timeRequired: '每年1次就诊', bestFor: '成年犬', prosCons: '快速就诊 / 年度固定支出' },
  ],
  relatedQuestions: [
    { question: '马来西亚兽医就诊费用是多少？', briefAnswer: '标准兽医咨询费RM30–RM80。加上疫苗和药物，预计每次就诊RM100–RM300。', slug: 'ma-lai-xi-ya-shou-yi-fei-yong' },
    { question: '马来西亚气候最适合什么犬种？', briefAnswer: '西施犬、贵宾犬、比格犬和混种犬最能耐受热带高温。', slug: 'ma-lai-xi-ya-qi-hou-zui-jia-gou-pin-zhong' },
    { question: '马来西亚需要狗证吗？', briefAnswer: '是的，地方议会要求年度狗证登记，费用RM10–RM50。需要有效的狂犬疫苗证书。', slug: 'ma-lai-xi-ya-xu-yao-gou-zheng-ma' },
  ],
  citations: [
    { source: '马来西亚兽医服务局', title: '狂犬疫苗接种要求', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚兽医协会', title: '疫苗接种协议指南', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: '世界动物卫生组织（WOAH）', title: '狂犬病：马来西亚状况', publication: 'WOAH.org', year: '2024' },
    { source: '马来西亚兽医研究所', title: '家畜钩端螺旋体病', publication: 'VRI报告', year: '2023' },
    { source: '1953年动物法令（马来西亚）', title: '动物疫苗接种条例', publication: '联邦政府公报', year: '1953（2020年修订）' },
  ],
  author: {
    name: 'Dr. Tan Wei Ming',
    credentials: 'DVM, MRCVS，小动物医学专科',
    bio: '在吉隆坡和雪兰莪执业18年的兽医外科医生。专注于热带气候宠物的预防医学和传染病管理。',
  },
  seo: {
    metaDescription: '马来西亚狗疫苗接种计划：6-8周DHPP，12-16周狂犬疫苗，年度加强针。幼犬全套费用RM200-RM500。法律要求详解。',
    keywords: ['马来西亚狗疫苗', '幼犬疫苗接种计划', '狂犬疫苗马来西亚', 'DHPP疫苗', '狗疫苗费用RM'],
  },
  datePublished: '2024-12-12',
  dateModified: '2025-02-08',
};

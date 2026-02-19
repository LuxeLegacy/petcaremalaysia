import type { PAAArticle } from '@/lib/paaTypes';

export const zhSeniorPetCareArticle: PAAArticle = {
  id: 55,
  slug: 'ma-lai-xi-ya-lao-nian-chong-wu-hu-li',
  category: 'pet-health',
  lang: 'zh',
  title: '如何照顾马来西亚的老年宠物？',
  directAnswer:
    '老年宠物（犬7岁+，猫10岁+）需要每6个月一次的兽医体检（而非每年）、针对关节和器官健康调整的饮食、适度运动以及关节炎、肾病等老年疾病的监测。马来西亚老年宠物的兽医费用通常比年轻宠物高50–100%。',
  tldr: '老年宠物护理：每6个月一次体检、高质量老年宠物食品（RM80–RM200/月）、关节健康补充剂和定期血液检查（RM150–RM300）。早期发现是降低长期医疗费用的关键。',
  quickFacts: {
    avgCost: 'RM200 – RM500/月（包含食品和补充剂）',
    timeRequired: '终身承诺',
    difficulty: '中等',
    professionalNeeded: 'Recommended',
    insuranceCoverage: '部分涵盖（视保单而定）',
  },
  detailedAnswer: `在马来西亚，狗狗7岁后、猫咪10岁后即被视为老年宠物。随着宠物年龄增长，它们面临的健康挑战与人类老年人相似：关节炎、认知功能下降、肾病、心脏病和癌症发生率增加。

饮食调整：老年宠物食品（RM80–RM200/月）通常含有较低的磷（有益肾脏）、较高的蛋白质质量、关节支持成分（葡萄糖胺、软骨素）和抗氧化剂。避免高盐饮食，尤其是有心脏问题的宠物。

健康监测：每6个月进行一次血液和尿液检查（RM150–RM300/次）是发现早期肾病、糖尿病和甲状腺问题的最佳方式。早期发现可使治疗费用降低数千令吉。

运动调整：老年宠物仍需运动，但应减少强度。短距离多次散步比长距离一次散步更适合关节炎患犬。猫咪可通过互动玩具保持活跃。

环境调整：提供坡道代替台阶、防滑地板和加热床垫，改善关节炎宠物的生活质量。`,
  keyFactors: [
    '每6个月体检（比年轻宠物更频繁）',
    '老年专用食品——磷含量低、蛋白质质量高',
    '关节健康补充剂——葡萄糖胺和软骨素',
    '牙科护理——老年宠物牙周病风险更高',
    '体重管理——超重会加重关节和器官负担',
    '认知功能评估——犬只认知功能障碍（类似老年痴呆）',
  ],
  steps: [
    { title: '安排老年健康评估', description: '告知兽医您的宠物已进入老年阶段，要求进行全面评估，包括血液检查和尿液分析。' },
    { title: '过渡到老年宠物食品', description: '在2–3周内逐渐将食品换成老年配方，避免消化不适。' },
    { title: '添加关节补充剂', description: '在兽医建议下开始使用葡萄糖胺/软骨素补充剂（RM50–RM120/月）。' },
    { title: '调整运动计划', description: '减少运动强度，增加次数。观察运动后是否有跛行或疼痛迹象。' },
    { title: '改善家居环境', description: '添加坡道、防滑垫和加热床垫，让老年宠物更舒适。' },
    { title: '建立监测习惯', description: '每周记录宠物的饮食量、饮水量、排泄和行为变化，及早发现异常。' },
  ],
  proTips: [
    '购买宠物保险趁宠物年幼时——老年宠物保险要么非常贵要么直接拒保',
    '学会在家测量宠物体重——体重突然减轻往往是疾病的早期信号',
    '为老年宠物拍摄日常视频——方便与兽医分享行为变化',
    '询问安宁疗护选项——这是负责任的宠物主人必须提前了解的话题',
    '考虑宠物针灸和水疗——在马来西亚，这些已被越来越多地用于关节炎管理',
  ],
  commonMistakes: [
    '将老年宠物的行为变化归因于"正常老化"而不寻求兽医建议',
    '继续喂食成年宠物食品而不换老年配方',
    '因关节炎减少运动过度——零运动对关节同样有害',
    '忽视口腔健康——老年宠物更容易出现严重牙周病',
    '等到宠物明显不舒服才就医——老年宠物善于隐藏疼痛',
  ],
  costComparison: [
    { option: '基础老年护理', costRange: 'RM200 – RM350/月', timeRequired: '持续', bestFor: '健康老年宠物', prosCons: '经济实惠 / 基础保障' },
    { option: '全面老年护理', costRange: 'RM350 – RM600/月', timeRequired: '持续', bestFor: '有慢性病的宠物', prosCons: '全面监测 / 费用较高' },
    { option: '疾病管理', costRange: 'RM500 – RM1,500/月', timeRequired: '持续', bestFor: '慢性病（肾病、糖尿病）', prosCons: '维持生活质量 / 最贵' },
    { option: '姑息治疗/安宁疗护', costRange: 'RM200 – RM400/月', timeRequired: '生命末期', bestFor: '终末期宠物', prosCons: '减少痛苦 / 情感上的挑战' },
  ],
  relatedQuestions: [
    { question: '狗和猫各在几岁被视为老年？', briefAnswer: '小型犬和猫10–12岁，中型犬8–10岁，大型犬6–8岁。品种和个体差异显著影响衰老速度。', slug: 'ma-lai-xi-ya-lao-nian-chong-wu-hu-li' },
    { question: '如何知道老年宠物是否在痛苦？', briefAnswer: '常见迹象包括食欲减退、活动减少、躲避、过度舔舐某部位、呼吸变化和性格改变。', slug: 'ma-lai-xi-ya-lao-nian-chong-wu-hu-li' },
  ],
  citations: [
    { source: '马来西亚兽医协会', title: '老年动物护理指南', publication: 'MSAVA.org', year: '2024', url: 'https://msava.org' },
    { source: '马来西亚兽医服务局', title: '动物福利指南', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚老年宠物护理完整指南。了解老年犬猫的饮食、运动、健康监测和费用，让爱宠安享晚年。',
    keywords: ['老年宠物护理马来西亚', '老年犬护理', '老年猫护理', '宠物关节炎', '老年宠物费用'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

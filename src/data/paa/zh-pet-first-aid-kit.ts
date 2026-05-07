import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetFirstAidKitArticle: PAAArticle = {
  id: 58,
  slug: 'ma-lai-xi-ya-chong-wu-ji-jiu-bao',
  category: 'pet-health',
  lang: 'zh',
  title: '马来西亚宠物急救包应该包含什么？',
  directAnswer:
    '在马来西亚组装一套完整的宠物急救包费用为RM80–RM250。必备物品包括无菌纱布、自粘绷带、消毒剂、数字温度计、钝头剪刀、除蜱工具和生理盐水。将兽医电话号码和最近的24小时急诊诊所地址放入急救包内。',
  tldr: '马来西亚宠物急救包：RM80–RM250。准备纱布、绷带、消毒剂、温度计、剪刀、除蜱工具及生理盐水。务必附上兽医电话与24小时诊所地址。每6个月更换过期物品。',
  quickFacts: {
    avgCost: 'RM80 – RM200（完整急救包）',
    timeRequired: '组建：30分钟；使用：视情况而定',
    difficulty: '简单',
    professionalNeeded: 'Recommended',
    insuranceCoverage: '不涵盖急救用品',
  },
  detailedAnswer: `马来西亚热带环境带来特有的宠物急救需求：毒蛇咬伤、中暑、溺水、道路交通事故和毒素摄入。准备好急救包并知道如何使用，可能是救命的关键。

急救包核心物品：
• 伤口护理：无菌纱布垫、弹力绷带（Vetrap）、医用胶带、消毒水（氯己定溶液，避免用乙醇直接接触伤口）
• 工具：数字温度计（正常体温：犬38–39°C，猫38.5–39.5°C）、尖端镊子（取出异物）、圆端剪刀
• 保护用品：一次性手套、口罩（受伤动物可能咬人）、伊丽莎白圈
• 其他：生理盐水（冲洗眼部和伤口）、干净毛巾、手电筒、保暖毯
• 文件：宠物医疗记录和疫苗证书复印件、当地及24小时紧急兽医电话、中毒控制热线

马来西亚特有的急救准备：
• 蛇咬：不要切开伤口或吸毒——立即固定患肢，冷静运送至兽医
• 中暑（极其常见）：用凉水（非冰水）降温，用风扇吹，立即就医
• 毒素摄入：不要自行催吐——先致电兽医或中毒热线`,
  keyFactors: [
    '宠物类型——猫和狗的急救需求不同，大型犬需要更大的绷带',
    '生活环境——农村/森林地区需备蛇咬急救物品',
    '宠物年龄——老年宠物可能需要额外药物',
    '过往病史——有慢性病的宠物需备处方药',
    '出行习惯——经常外出的宠物需要更全面的急救包',
  ],
  steps: [
    { title: '收集基本物品', description: '从药店（Guardian、Watsons、Caring Pharmacy）购买基本急救用品。宠物专用物品（Vetrap）从宠物店或兽医诊所购买。' },
    { title: '添加宠物专用物品', description: '包括宠物专用温度计、伊丽莎白圈和中毒洗眼液。询问兽医是否需要备特定处方药。' },
    { title: '创建紧急联系清单', description: '将以下号码放入急救包：您的常规兽医、最近的24小时急诊兽医、SPCA/PAWS热线，以及马来西亚毒物控制中心（1800-88-8099）。' },
    { title: '学习基本急救技能', description: '参加宠物急救课程或观看可信赖的教学视频。了解心肺复苏术（CPR）、止血和中暑降温方法。' },
    { title: '定期检查急救包', description: '每6个月检查一次。更换过期物品，补充已用完的物资。' },
    { title: '告知家庭成员位置', description: '确保所有家庭成员知道急救包的位置和基本使用方法。' },
  ],
  proTips: [
    '将急救包存放在固定且家人都知道的位置——紧急时刻不要翻找',
    '准备一个迷你版急救包放在车里——许多宠物紧急情况发生在出行途中',
    '保存兽医的WhatsApp或手机号——方便快速咨询',
    '在急救包上贴上您宠物的照片和基本信息——如果他人需要帮忙时很有用',
    '中毒时：先拍照记录宠物吃了什么，再送医——这会大大帮助兽医治疗',
  ],
  commonMistakes: [
    '用人类药物给宠物（对乙酰氨基酚对猫致命，布洛芬对狗有毒）',
    '自行催吐而不先咨询兽医（某些情况下催吐会造成更大伤害）',
    '用乙醇直接接触伤口（会损伤组织，用氯己定稀释液代替）',
    '用冰水降温中暑宠物（会导致休克，用凉水）',
    '忘记在急救后尽快送往兽医（急救是临时措施，不是治疗）',
  ],
  costComparison: [
    { option: '基础急救包', costRange: 'RM80 – RM120', timeRequired: '30分钟组建', bestFor: '一般家庭宠物', prosCons: '经济实惠 / 处理基本伤口' },
    { option: '综合急救包', costRange: 'RM150 – RM200', timeRequired: '45分钟组建', bestFor: '多宠物家庭', prosCons: '全面备用 / 费用稍高' },
    { option: '外出急救包', costRange: 'RM100 – RM150', timeRequired: '20分钟组建', bestFor: '喜欢户外活动的宠物', prosCons: '便携 / 针对户外风险' },
    { option: '预制急救包', costRange: 'RM150 – RM300', timeRequired: '即买即用', bestFor: '不想自己组装的主人', prosCons: '方便 / 可能含不需要的物品' },
  ],
  relatedQuestions: [
    { question: '宠物需要心肺复苏术时怎么做？', briefAnswer: '将宠物平放，做心脏按压（犬猫比率：30:2）。学习宠物CPR需要专业培训——立即联系SPCA或宠物急救课程。', slug: 'ma-lai-xi-ya-chong-wu-ji-jiu-bao' },
    { question: '宠物中毒后怎么办？', briefAnswer: '立即致电兽医或马来西亚毒物控制中心（1800-88-8099）。不要自行催吐。带上毒物样本或照片就医。', slug: 'ma-lai-xi-ya-chong-wu-ji-jiu-bao' },
  ],
  citations: [
    { source: '马来西亚防止虐待动物协会', title: '宠物急救指南', publication: 'SPCA Selangor', year: '2024', url: 'https://spca.org.my' },
    { source: '马来西亚兽医服务局', title: '动物紧急护理指南', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '马来西亚毒物控制中心', title: '动物中毒管理', publication: 'NPIC Malaysia', year: '2024' },
  ],
  author: {
    name: 'Dr. Sarah Lee',
    credentials: 'DVM，马来西亚兽医理事会执照',
    bio: '拥有12年马来西亚临床经验的兽医专家，致力于让所有马来西亚宠物主人都能负担得起宠物医疗保健。',
  },
  seo: {
    metaDescription: '马来西亚宠物急救包完整清单（RM80–RM200）。包含绷带、消毒水、温度计等必备物品，以及中暑、蛇咬、中毒的应急处理方法。',
    keywords: ['宠物急救包马来西亚', '宠物急救用品', '宠物中暑处理', '宠物中毒急救', '紧急兽医联系'],
  },
  datePublished: '2026-02-08',
  dateModified: '2026-02-19',
};

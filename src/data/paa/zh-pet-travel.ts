import type { PAAArticle } from '@/lib/paaTypes';

export const zhPetTravelArticle: PAAArticle = {
  id: 210,
  slug: 'ma-lai-xi-ya-chong-wu-lv-xing-yao-qiu',
  category: 'pet-travel',
  lang: 'zh',
  title: '马来西亚宠物旅行有什么要求？',
  directAnswer:
    '携带宠物往返马来西亚需要DVS/JPV的有效进出口许可证（RM50–RM200）、狂犬病疫苗接种（至少旅行前30天）、微芯片植入、执照兽医的健康证明，以及航空公司批准的运输箱。整个过程需要4–8周，费用RM500–RM3,000。',
  tldr: '从马来西亚出发的宠物旅行需要JPV许可证（RM50–RM200）、狂犬病疫苗+抗体滴度测试、微芯片、兽医健康证明和航班预订。提前8–12周开始准备。费用从国内旅行RM500到国际RM3,000+不等。专业宠物搬迁代理收费RM2,000–RM8,000。',
  quickFacts: {
    avgCost: 'RM500 – RM3,000+（DIY）',
    timeRequired: '4–12周准备',
    difficulty: '中等到困难',
    professionalNeeded: 'Recommended',
    insuranceCoverage: '宠物旅行保险可单独购买',
  },
  detailedAnswer: `在马来西亚携带宠物旅行——无论是国内还是国际——需要仔细规划和文件准备。兽医服务局（DVS/JPV）监管所有宠物流动以防止疾病传播。

马来西亚国内旅行：
- 驾车：在西马半岛内旅行无需许可证。随身携带疫苗接种记录。在西马和东马（沙巴/砂拉越）之间需要DVS许可证。
- 空运（国内）：AirAsia和马航接受宠物货运。预订费用RM100–RM500，取决于宠物大小和路线。需要IATA批准的运输箱。
- 火车/巴士：KTM和大多数巴士服务不允许携带宠物。私人交通或驾车是主要替代方案。

国际旅行——从马来西亚出口宠物：
1. 微芯片：ISO标准15位微芯片（RM50–RM100）必须在狂犬病疫苗接种之前或同日植入。
2. 狂犬病疫苗：必须在旅行前至少30天接种。费用：RM40–RM80。某些国家要求狂犬病抗体滴度测试（RM200–RM400）。
3. DVS出口许可证：至少在出发前7个工作日向DVS申请。费用：RM50–RM100。
4. 健康证明：由DVS指定兽医在出发前7天内签发。
5. 目的地国家要求：每个国家有独特的进口规定。欧盟需要EU健康证明。澳大利亚/新西兰最严格。新加坡相对简单。

国际旅行——进口宠物到马来西亚：
- 马来西亚DVS进口许可（在线申请，RM50–RM200）
- 有效狂犬病疫苗接种证明
- 来源国兽医当局的健康证明
- KLIA检疫站7天检疫（RM30–RM50/天）
- 禁止品种不能进口（比特犬、日本土佐、秋田犬、阿根廷杜高、巴西獒）

航空公司选择：
- 马航：仅限货运宠物。RM200–RM800。
- AirAsia：选定路线货运宠物。RM150–RM500。
- 新加坡航空：货运宠物。以可靠处理著称。
- 国泰航空：较为宠物友好的国际航空公司之一。

专业宠物搬迁代理：处理所有文件、兽医就诊、机场手续和海关清关。费用RM2,000–RM8,000，取决于目的地。`,
  keyFactors: [
    '目的地规定 – 每个国家有不同的进口要求；提前8–12周研究',
    '狂犬病疫苗时间 – 必须在旅行前至少30天接种；某些国家要求提前6个月',
    'DVS许可证 – 出口许可证需要7+个工作日处理；不要拖到最后',
    '航空公司政策 – 并非所有航班接受宠物；货运空间有限需提前预订',
    '微芯片标准 – 必须符合ISO 11784/11785（15位）；非标准芯片在目的地可能无法读取',
    '禁止品种 – 马来西亚禁止进口/饲养数个品种；查看DVS禁止品种清单',
  ],
  steps: [
    { title: '研究目的地要求', description: '联系目的地国家大使馆或农业部门了解确切的宠物进口规定。各国要求差异很大。' },
    { title: '就医（旅行前8–12周）', description: '植入微芯片，接种狂犬病疫苗，并讨论目的地国家要求的任何额外疫苗或检查。' },
    { title: '获取狂犬病抗体滴度测试（如需要）', description: '某些国家（欧盟、澳大利亚、日本）要求血液检查显示充足的狂犬病抗体。结果需2–4周。费用：RM200–RM400。' },
    { title: '申请DVS出口许可证', description: '至少在出发前7个工作日向DVS提交申请，附上所有疫苗记录和目的地要求文件。' },
    { title: '预订航班和运输箱', description: '提前预订宠物货运空间。购买适合宠物大小的IATA批准运输箱（能站立、转身、躺下）。RM150–RM500。' },
    { title: '获取最终健康证明', description: '在出发前7天内前往DVS指定兽医获取最终健康证明。携带所有文件进行背书。' },
    { title: '机场当天准备', description: '提前3–4小时到达。携带所有原件、铺有吸水垫的运输箱、冻水碗和有熟悉气味的毯子。' },
  ],
  proTips: [
    '国际旅行提前12周开始准备——滴度测试或许可证经常出现意外延误',
    '加入Facebook群组如"Pet Relocation Malaysia"获取第一手建议和推荐代理',
    '避免在马来西亚学校假期和节日期间旅行，此时货运空间很快满额',
    '旅行前4–6周开始训练宠物适应运输箱，使其感到舒适',
    '首次国际搬迁考虑聘请宠物搬迁代理——RM2,000–RM5,000的费用通常可节省压力和防止文件错误',
  ],
  commonMistakes: [
    '准备开始太晚——国际宠物旅行至少需要8–12周准备时间',
    '假设所有航班都接受宠物——某些路线和机型不允许宠物货运；提前预订',
    '使用非ISO微芯片——目的地扫描仪可能无法读取非标准芯片，导致检疫延误',
    '忘记回程要求——马来西亚即使是返回的宠物也需要进口许可证',
    '给宠物服用镇静剂坐飞机——大多数航空公司和兽医不鼓励，因为高海拔增加健康风险',
  ],
  costComparison: [
    { option: '国内（西马半岛）', costRange: 'RM100 – RM500', timeRequired: '1–3天准备', bestFor: '本地旅行', prosCons: '流程简单 / 限于驾车或货运航班' },
    { option: '国际DIY（新加坡）', costRange: 'RM500 – RM1,500', timeRequired: '4–6周', bestFor: '有经验的宠物主人', prosCons: '经济实惠 / 需要研究' },
    { option: '国际DIY（欧盟/美国/澳洲）', costRange: 'RM1,500 – RM3,000', timeRequired: '8–12周', bestFor: '预算有限的主人', prosCons: '省钱 / 文件复杂' },
    { option: '专业搬迁代理', costRange: 'RM2,000 – RM8,000', timeRequired: '6–12周', bestFor: '首次国际旅行', prosCons: '无压力 / 最贵' },
  ],
  relatedQuestions: [
    { question: '马来西亚宠物保险费用是多少？', briefAnswer: '宠物保险RM95–RM300/月。某些保单包含旅行保障附加项。', slug: 'ma-lai-xi-ya-chong-wu-bao-xian-fei-yong' },
    { question: '马来西亚兽医诊所费用是多少？', briefAnswer: '咨询RM30–RM80。旅行健康证明额外RM50–RM150。', slug: 'ma-lai-xi-ya-shou-yi-fei-yong' },
    { question: '马来西亚狗需要接种什么疫苗？', briefAnswer: '核心疫苗包括犬瘟热、细小病毒和狂犬病。狂犬病对宠物旅行至关重要。', slug: 'ma-lai-xi-ya-gou-xu-yao-jie-zhong-shen-me-yi-miao' },
  ],
  localResources: {
    emergencyContacts: [
      { name: 'DVS进出口部门', detail: '03-8870 2000（周一至周五 8am-5pm）' },
      { name: 'KLIA检疫站', detail: '03-8787 4252' },
    ],
    governmentResources: [
      { name: 'DVS宠物旅行门户', detail: '官方许可证和要求', url: 'https://www.dvs.gov.my' },
      { name: '马来西亚检疫检验服务（MAQIS）', detail: '机场检疫程序', url: 'https://www.maqis.gov.my' },
    ],
    animalWelfare: [
      { name: 'Pet Movers Malaysia', detail: '专业宠物搬迁服务' },
      { name: 'Ferndale Kennels & Cattery', detail: '宠物寄宿和旅行协助', url: 'https://www.ferndale.com.my' },
    ],
  },
  insurance: {
    covered: ['旅行相关兽医紧急情况（附加项）', '运输途中宠物丢失（特定保单）', '因宠物疾病取消行程'],
    exclusions: ['标准旅行费用', '航空公司货运费', '检疫住宿费', '文件和许可证费用'],
    claimSteps: ['出发前购买宠物旅行保险附加项', '旅行期间用照片和兽医报告记录任何事件', '在30天内提交索赔及所有支持文件', '跟进保险公司了解处理进度'],
  },
  citations: [
    { source: '马来西亚兽医服务局', title: '宠物进出口程序', publication: 'DVS.gov.my', year: '2024', url: 'https://www.dvs.gov.my' },
    { source: '国际航空运输协会', title: '活体动物法规（LAR）', publication: 'IATA.org', year: '2024', url: 'https://www.iata.org' },
    { source: 'MAQIS', title: '动物检疫要求', publication: 'MAQIS.gov.my', year: '2024', url: 'https://www.maqis.gov.my' },
    { source: '马航', title: '宠物旅行政策', publication: 'MalaysiaAirlines.com', year: '2024', url: 'https://www.malaysiaairlines.com' },
  ],
  author: {
    name: 'Dr. Mei Ling Tan',
    credentials: 'DVM，认证宠物旅行顾问',
    bio: '拥有8年宠物旅行健康认证专业经验的兽医。已帮助超过500个家庭从马来西亚国际搬迁宠物。',
  },
  seo: {
    metaDescription: '马来西亚宠物旅行要求：DVS许可证、狂犬病疫苗、微芯片、航空公司规定及费用（RM500-RM3,000）。完整分步指南。',
    keywords: ['宠物旅行马来西亚', '带宠物去马来西亚', 'DVS宠物出口许可', '宠物搬迁马来西亚', '携带宠物飞行马来西亚'],
  },
  datePublished: '2025-02-01',
  dateModified: '2025-02-08',
};

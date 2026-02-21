import type { DentalPreventionPage } from '../types';

export const zhPreventionDiet: DentalPreventionPage = {
  slug: 'diet-and-chewing-behavior',
  category: 'prevention',
  lang: 'zh',
  title: '饮食与咀嚼行为对犬牙科健康的影响',
  overview: `饮食和咀嚼行为在犬牙科健康中起辅助作用。虽然没有食物或咀嚼物可以替代刷牙和专业护理，但适当的饮食选择和安全的咀嚼选项可以帮助减少牙菌斑积累。`,
  whyItMatters: '咀嚼的机械动作可以帮助从牙齿表面刮除牙菌斑。饮食质地和成分可以影响牙菌斑积累的速度。但仅靠饮食不能预防牙科疾病。',
  howTo: '提供适合您的狗生命阶段的均衡、完整饮食。考虑具有较大颗粒设计的牙科专用饮食以提供机械清洁。提供兽医认可的洁牙零食作为刷牙的补充——而非替代。',
  frequency: '洁牙零食可以每天作为刷牙的补充。饮食应该一致且适合您的狗的营养需求。',
  commonMistakes: [
    '仅依靠洁牙零食或磨牙来预防牙科疾病',
    '给予可能导致牙齿断裂的骨头或硬物',
    '假设干粮"清洁牙齿"——证据有限',
    '不检查牙科产品是否有兽医认可或效果证据',
    '过度喂食洁牙零食导致体重增加',
  ],
  vetRecommendations: '与兽医讨论饮食选项。具有兽医口腔健康委员会（VOHC）标志的产品有支持其牙科声明的证据。切勿给予熟骨头、鹿角或可能导致牙齿断裂的极硬咀嚼物。',
  faqs: [
    { question: '洁牙零食真的有效吗？', answer: '洁牙零食可以帮助减少牙菌斑和牙结石积累，作为刷牙的补充。它们不能替代刷牙或专业清洁。寻找有兽医认可的产品。' },
    { question: '骨头可以清洁狗的牙齿吗？', answer: '骨头有导致牙齿断裂、窒息和胃肠梗阻的重大风险。兽医通常建议不要给狗骨头。' },
  ],
  seo: {
    metaTitle: '饮食与咀嚼对犬牙科健康 | 预防指南',
    metaDescription: '了解饮食和咀嚼行为如何支持您的狗牙科健康。了解什么有效、关于洁牙零食的常见误解和安全咀嚼指南。',
    keywords: ['犬牙科饮食', '洁牙零食狗', '犬咀嚼牙齿健康', '犬牙科健康食物'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '刷牙', path: '/dog-dental-disease/prevention/brushing' },
    { label: '牙科检查', path: '/dog-dental-disease/prevention/dental-checkups' },
    { label: '预防性牙科护理', path: '/dog-dental-disease/treatments/preventive-dental-care' },
  ],
};

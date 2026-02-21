import type { DentalTreatmentPage } from '../types';

export const zhTreatmentsAntibioticTherapy: DentalTreatmentPage = {
  slug: 'antibiotic-therapy',
  category: 'treatments',
  lang: 'zh',
  title: '犬牙科感染抗生素治疗：概述',
  overview: `抗生素治疗可能是犬牙科感染综合治疗计划的一部分。重要的是要了解，抗生素单独不能治愈牙科疾病——它们与专业牙科手术配合使用以管理感染。`,
  whatItInvolves: '当存在活跃感染时，兽医可能会在牙科手术前或后开具一疗程抗生素。具体药物、剂量和疗程由兽医根据每个个案确定。',
  whenRecommended: '当有活跃感染的证据时，如牙根脓肿、面部肿胀或全身感染征兆（发烧、嗜睡）。在感染严重的病例中，也可能在术前使用抗生素以减少手术前的细菌负荷。',
  benefits: ['帮助控制活跃感染', '降低全身细菌扩散风险', '与牙科手术结合支持愈合', '等待手术期间可提供临时舒适'],
  risksAndConsiderations: '抗生素应仅在兽医监督下使用。不当使用会导致抗生素耐药性。抗生素单独无法治疗基础牙科疾病——它们在通过牙科手术处理来源（病变牙齿）的同时管理感染。',
  followUpCare: '按处方完成整个抗生素疗程。向兽医报告任何副作用。按指示随访以确保感染已消退。',
  associatedConditions: [
    { label: '牙根脓肿', path: '/dog-dental-disease/conditions/tooth-root-abscess' },
    { label: '牙周病', path: '/dog-dental-disease/conditions/periodontal-disease' },
  ],
  faqs: [
    { question: '抗生素可以治愈我的狗的牙科疾病吗？', answer: '不能。抗生素管理感染但不能治愈牙科疾病。病变牙齿或组织必须通过专业牙科手术治疗才能解决。' },
  ],
  seo: {
    metaTitle: '犬牙科感染抗生素治疗',
    metaDescription: '了解抗生素治疗在犬牙科感染中的作用。了解何时需要、为什么不能替代牙科手术，以及预期情况。',
    keywords: ['犬牙科抗生素', '抗生素治疗犬牙齿', '犬牙齿感染治疗', '牙科感染狗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '疼痛管理', path: '/dog-dental-disease/treatments/pain-management' },
    { label: '拔牙', path: '/dog-dental-disease/treatments/tooth-extraction' },
  ],
};

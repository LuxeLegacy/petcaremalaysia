import type { DentalRecoveryPage } from '../types';

export const zhRecoveryPostProcedure: DentalRecoveryPage = {
  slug: 'post-dental-procedure',
  category: 'recovery',
  lang: 'zh',
  title: '犬牙科手术后恢复：预期情况',
  overview: `麻醉下牙科手术后，您的狗需要一段恢复期。恢复的长度和强度取决于所进行的手术——简单清洁需要最少的恢复，而多颗拔牙需要更仔细的术后护理。`,
  timeline: [
    { phase: '手术当天', duration: '第1天', description: '您的狗可能因麻醉而昏昏欲睡。提供少量水。如果有兴趣，晚上可提供软食。轻微流涎或出血是正常的。' },
    { phase: '第2-3天', duration: '48-72小时', description: '昏昏欲睡应消退。继续软食。监测过度肿胀、出血或不愿进食。' },
    { phase: '第4-7天', duration: '1周', description: '仅清洁：通常可恢复正常活动和饮食。拔牙：继续软食和温和活动。' },
    { phase: '第7-14天', duration: '2周', description: '拔牙：拔牙创面应在愈合中。通常安排复查。缝线可能溶解或被移除。' },
  ],
  dietaryModifications: '按兽医建议的时间喂软食（罐头食品、泡软的干粮或自制软食）——通常清洁后1-3天，拔牙后5-14天。始终提供新鲜水。',
  warningSignsDuringRecovery: ['不停止的过度出血', '手术后超过24小时完全拒绝进食或饮水', '第2天后肿胀加重', '发烧或极度嗜睡', '拔牙创面有分泌物或恶臭'],
  followUpSchedule: '兽医将提供具体的随访指导。通常在拔牙后10-14天复查。手术后5-7天或按指示恢复牙齿刷牙。',
  faqs: [
    { question: '牙科手术后狗会昏昏欲睡多久？', answer: '大多数狗在12-24小时内从麻醉的昏昏欲睡中恢复。完全正常行为通常在24-48小时内恢复。' },
  ],
  seo: {
    metaTitle: '犬牙科手术恢复 | 术后护理指南',
    metaDescription: '犬牙科手术后预期情况：恢复时间表、饮食改变、警告信号，以及清洁和拔牙的随访护理。',
    keywords: ['犬牙科恢复', '犬牙科手术后', '犬拔牙恢复', '术后牙科护理狗'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '口腔愈合时间表', path: '/dog-dental-disease/recovery/oral-healing-timeline' },
    { label: '监测并发症', path: '/dog-dental-disease/recovery/monitoring-for-complications' },
  ],
};

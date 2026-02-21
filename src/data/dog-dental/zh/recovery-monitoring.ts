import type { DentalRecoveryPage } from '../types';

export const zhRecoveryMonitoring: DentalRecoveryPage = {
  slug: 'monitoring-for-complications',
  category: 'recovery',
  lang: 'zh',
  title: '犬牙科手术后并发症监测',
  overview: `虽然现代兽医技术下牙科手术后的并发症不常见，但恢复期间监测您的狗很重要。了解什么是正常的与什么需要兽医关注有助于确保顺利愈合。`,
  timeline: [
    { phase: '前24小时', duration: '第1天', description: '监测过度出血、呼吸困难或麻醉恢复失败。一些渗出和昏昏欲睡是正常的。' },
    { phase: '第2-5天', duration: '3-4天', description: '观察肿胀加重、拒绝进食或饮水、持续呕吐或处方药物无法控制的疼痛迹象。' },
    { phase: '第5-14天', duration: '1-2周', description: '监测拔牙创面愈合。观察分泌物、恶臭或缝线开裂。' },
  ],
  dietaryModifications: '按处方维持软食饮食。确保充足饮水。如果狗在术后超过24小时拒绝所有食物，请联系兽医。',
  warningSignsDuringRecovery: [
    '出血浸透纱布且轻柔压迫20分钟后不减慢',
    '第2天后肿胀不减反增',
    '发烧（体温超过39.5°C / 103°F）',
    '口腔或手术部位有脓或恶臭分泌物',
    '无法闭嘴或下颌错位',
    '超过24小时完全拒绝进食或饮水',
    '过度抓嘴或极度痛苦',
  ],
  followUpSchedule: '遵循兽医安排的所有复查预约。即使您的狗看起来恢复良好也不要跳过术后复查——有些并发症从外部不可见。',
  faqs: [
    { question: '犬牙科手术后何时应该打电话给兽医？', answer: '如果您观察到过度出血、肿胀加重、发烧、超过24小时拒绝进食或任何令您担忧的征兆，请联系兽医。宁可查一查也不要等。' },
  ],
  seo: {
    metaTitle: '犬牙科手术后监测 | 并发症征兆',
    metaDescription: '使用本指南在犬牙科手术后进行监测。了解正常恢复征兆与需要兽医关注的并发症。',
    keywords: ['犬牙科手术并发症', '犬牙科手术后', '犬牙科恢复问题', '监测犬牙科后'],
  },
  author: { name: 'Dr. Sarah Lee', credentials: 'DVM，马来西亚兽医理事会执照', bio: '拥有12年马来西亚临床经验的兽医专家。' },
  datePublished: '2026-02-20',
  dateModified: '2026-02-21',
  relatedLinks: [
    { label: '术后恢复', path: '/dog-dental-disease/recovery/post-dental-procedure' },
    { label: '愈合时间表', path: '/dog-dental-disease/recovery/oral-healing-timeline' },
    { label: '紧急征兆', path: '/dog-dental-disease/emergency-signs' },
  ],
};

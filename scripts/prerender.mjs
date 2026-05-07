#!/usr/bin/env node
/**
 * Postbuild prerender: writes per-route index.html files into dist/ with
 * unique <title>, meta description, canonical, hreflang, OG tags, JSON-LD,
 * and a body snippet (H1 + intro). React's createRoot().render() replaces
 * the snippet on mount, so users still get the SPA — but bots and AI
 * crawlers see real per-page HTML.
 *
 * Run after `vite build`.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const tmplPath = path.join(distDir, 'index.html');

if (!fs.existsSync(tmplPath)) {
  console.error('[prerender] dist/index.html missing — did `vite build` run?');
  process.exit(1);
}

const template = fs.readFileSync(tmplPath, 'utf8');
const SITE = 'https://petcaremalaysia.com';

// ---------- Data extraction (regex-parse TS source; no TS imports needed) ----------

function extractCities() {
  const src = fs.readFileSync(path.join(root, 'src/lib/cityData.ts'), 'utf8');
  const re = /\{\s*name:\s*"([^"]+)"\s*,\s*hub:\s*"[^"]+"\s*,\s*state:\s*"([^"]+)"\s*,[^}]*slug:\s*"([^"]+)"\s*,\s*stateSlug:\s*"([^"]+)"\s*\}/g;
  const cities = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    cities.push({ name: m[1], state: m[2], slug: m[3], stateSlug: m[4] });
  }
  return cities;
}

function listSlugs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.ts') && f !== 'hub.ts')
    .map((f) => f.replace(/\.ts$/, ''));
}

function extractPaaSlugs() {
  const dir = path.join(root, 'src/data/paa');
  const articles = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.startsWith('en-') || !file.endsWith('.ts')) continue;
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const slugMatch = src.match(/slug:\s*['"]([^'"]+)['"]/);
    const titleMatch = src.match(/title:\s*['"]([^'"]+)['"]/);
    const metaTitleMatch = src.match(/metaTitle:\s*['"]([^'"]+)['"]/);
    const metaDescMatch = src.match(/metaDescription:\s*['"]([^'"]+)['"]/);
    if (slugMatch) {
      articles.push({
        slug: slugMatch[1],
        title: metaTitleMatch?.[1] || titleMatch?.[1] || slugMatch[1],
        description: metaDescMatch?.[1] || '',
      });
    }
  }
  return articles;
}

// ---------- Route definitions ----------

const STATES = [
  ['selangor', 'Selangor'], ['kuala-lumpur', 'W.P. Kuala Lumpur'], ['johor', 'Johor'],
  ['penang', 'Penang'], ['perak', 'Perak'], ['sarawak', 'Sarawak'], ['sabah', 'Sabah'],
  ['melaka', 'Melaka'], ['kedah', 'Kedah'], ['pahang', 'Pahang'], ['kelantan', 'Kelantan'],
  ['terengganu', 'Terengganu'], ['negeri-sembilan', 'Negeri Sembilan'], ['perlis', 'Perlis'],
];

const LANGS = ['en', 'ms', 'zh'];

const STATIC_ROUTES = [
  { p: '', t: {
    en: 'PetCare Malaysia — 24/7 Emergency Vets, Clinics & Pet Services',
    ms: 'PetCare Malaysia — Vet Kecemasan 24/7, Klinik & Perkhidmatan Haiwan',
    zh: 'PetCare Malaysia — 24/7紧急兽医、诊所与宠物服务',
  }, d: {
    en: 'Find verified 24/7 emergency vets, clinics, grooming and pet services across Malaysia. Trusted by 23,000+ pet owners. Pet insurance from RM25/month.',
    ms: 'Cari vet kecemasan 24/7, klinik, dandanan dan perkhidmatan haiwan di seluruh Malaysia. Dipercayai oleh 23,000+ pemilik haiwan.',
    zh: '在马来西亚寻找经过验证的24/7紧急兽医、诊所、美容和宠物服务。23,000+宠物主人信赖。',
  }, h1: {
    en: 'Pet emergency? Find a 24/7 vet near you in Malaysia',
    ms: 'Kecemasan haiwan? Cari vet 24/7 berdekatan di Malaysia',
    zh: '宠物急症？在马来西亚附近寻找24/7兽医',
  }},
  { p: '/locations', t: {
    en: 'Pet Care Locations Malaysia — 100+ Cities Covered',
    ms: 'Lokasi Penjagaan Haiwan Malaysia — Lebih 100 Bandar',
    zh: '马来西亚宠物护理地点 — 覆盖100+城市',
  }, d: {
    en: 'Browse pet care services across 100+ Malaysian cities. Find local vets, clinics, and emergency care in your area.',
    ms: 'Layari perkhidmatan penjagaan haiwan di lebih 100 bandar Malaysia. Cari vet, klinik, dan rawatan kecemasan tempatan.',
    zh: '浏览100+马来西亚城市的宠物护理服务。寻找您所在地区的本地兽医和急诊。',
  }, h1: { en: 'Pet care locations across Malaysia', ms: 'Lokasi penjagaan haiwan di Malaysia', zh: '马来西亚各地宠物护理地点' } },
  { p: '/services', t: {
    en: 'Pet Services Malaysia — Vets, Grooming, Boarding, Insurance',
    ms: 'Perkhidmatan Haiwan Malaysia — Vet, Dandanan, Asrama, Insurans',
    zh: '马来西亚宠物服务 — 兽医、美容、寄养、保险',
  }, d: {
    en: 'Complete directory of pet services in Malaysia: emergency vets, grooming, boarding, training, pet food, and insurance providers.',
    ms: 'Direktori lengkap perkhidmatan haiwan di Malaysia: vet kecemasan, dandanan, asrama, latihan, makanan, dan penyedia insurans.',
    zh: '马来西亚宠物服务完整目录：紧急兽医、美容、寄养、训练、宠物食品和保险提供商。',
  }, h1: { en: 'Pet services across Malaysia', ms: 'Perkhidmatan haiwan di Malaysia', zh: '马来西亚宠物服务' } },
  { p: '/blog', t: {
    en: 'Pet Care Blog Malaysia — Emergency Guides, Health Tips, Costs',
    ms: 'Blog Penjagaan Haiwan Malaysia — Panduan Kecemasan, Tip Kesihatan',
    zh: '马来西亚宠物护理博客 — 急救指南、健康贴士、费用',
  }, d: {
    en: 'Expert pet care guides for Malaysian pet owners. Emergency protocols, vet costs (RM), insurance breakdowns, and step-by-step first aid.',
    ms: 'Panduan penjagaan haiwan untuk pemilik di Malaysia. Protokol kecemasan, kos vet (RM), insurans, dan pertolongan cemas.',
    zh: '为马来西亚宠物主人提供的专家护理指南。急救协议、兽医费用（RM）、保险分析和分步急救。',
  }, h1: { en: 'Pet care blog & emergency guides', ms: 'Blog & panduan kecemasan haiwan', zh: '宠物护理博客与急救指南' } },
  { p: '/qa', t: {
    en: 'Pet Care Q&A Malaysia — Ask a Vet, Emergency Answers',
    ms: 'S&J Penjagaan Haiwan Malaysia — Tanya Vet, Jawapan Kecemasan',
    zh: '马来西亚宠物问答 — 询问兽医、急症答案',
  }, d: {
    en: 'Get instant answers to pet emergency and care questions across all 14 Malaysian states. AI-powered Q&A reviewed by qualified vets.',
    ms: 'Dapatkan jawapan segera untuk soalan kecemasan haiwan di 14 negeri Malaysia. S&J berkuasa AI disemak oleh vet berkelayakan.',
    zh: '在马来西亚14个州属获取宠物急症与护理问题的即时答案。由合格兽医审核的AI问答。',
  }, h1: { en: 'Pet care Q&A — All 14 Malaysian states', ms: 'S&J penjagaan haiwan — 14 negeri Malaysia', zh: '宠物护理问答 — 马来西亚14州' } },
  { p: '/assessment', t: {
    en: 'Free Pet Emergency Assessment — Triage in 90 Seconds',
    ms: 'Penilaian Kecemasan Haiwan Percuma — Triage 90 Saat',
    zh: '免费宠物急症评估 — 90秒分诊',
  }, d: {
    en: 'Free 90-second triage tool. Answer 17 questions, get instant urgency score and nearest verified emergency vets in Malaysia.',
    ms: 'Alat triage percuma 90 saat. Jawab 17 soalan, dapatkan skor kecemasan dan vet kecemasan terdekat di Malaysia.',
    zh: '免费90秒分诊工具。回答17个问题，获得即时紧急程度评分和马来西亚最近的验证急诊兽医。',
  }, h1: { en: 'Pet emergency assessment — Free, 90 seconds', ms: 'Penilaian kecemasan haiwan — Percuma, 90 saat', zh: '宠物急症评估 — 免费，90秒' } },
  { p: '/emergency-guide', t: {
    en: 'Pet Emergency Guide Malaysia — 47-Page Free Download',
    ms: 'Panduan Kecemasan Haiwan Malaysia — Muat Turun 47 Halaman',
    zh: '马来西亚宠物急救指南 — 47页免费下载',
  }, d: {
    en: 'Free 47-page pet emergency guide for Malaysian pet owners. Symptoms, first aid, when to rush to the vet, and toxin reference.',
    ms: 'Panduan kecemasan haiwan 47 halaman percuma untuk pemilik di Malaysia. Gejala, pertolongan cemas, dan rujukan toksin.',
    zh: '为马来西亚宠物主人提供的47页免费宠物急救指南。症状、急救、何时送医和毒素参考。',
  }, h1: { en: 'Pet emergency guide — Free 47-page download', ms: 'Panduan kecemasan haiwan — 47 halaman percuma', zh: '宠物急救指南 — 47页免费下载' } },
  { p: '/vet-clinics', t: {
    en: 'Verified Vet Clinics Directory Malaysia — 24/7 Emergency',
    ms: 'Direktori Klinik Vet Disahkan Malaysia — Kecemasan 24/7',
    zh: '马来西亚验证兽医诊所目录 — 24/7急诊',
  }, d: {
    en: 'Directory of verified vet clinics in Malaysia with emergency hours, ratings, contact details, and locations across all states.',
    ms: 'Direktori klinik vet disahkan di Malaysia dengan waktu kecemasan, penilaian, dan lokasi di semua negeri.',
    zh: '马来西亚验证兽医诊所目录，包含急诊时间、评级、联系方式和所有州属的位置。',
  }, h1: { en: 'Verified vet clinics across Malaysia', ms: 'Klinik vet disahkan di Malaysia', zh: '马来西亚验证兽医诊所' } },
  { p: '/dog-dental-disease', t: {
    en: 'Dog Dental Disease Guide Malaysia — Symptoms, Costs, Treatment',
    ms: 'Panduan Penyakit Gigi Anjing Malaysia — Gejala, Kos, Rawatan',
    zh: '马来西亚狗牙科疾病指南 — 症状、费用、治疗',
  }, d: {
    en: 'Complete guide to dog dental disease in Malaysia: symptoms, severity stages, treatment costs (RM), and prevention. Reviewed by vets.',
    ms: 'Panduan lengkap penyakit gigi anjing di Malaysia: gejala, peringkat keparahan, kos rawatan (RM), dan pencegahan.',
    zh: '马来西亚狗牙科疾病完整指南：症状、严重阶段、治疗费用（RM）和预防。',
  }, h1: { en: 'Dog dental disease — Complete Malaysia guide', ms: 'Penyakit gigi anjing — Panduan lengkap Malaysia', zh: '狗牙科疾病 — 马来西亚完整指南' } },
  { p: '/urinary-tract-disease', t: {
    en: 'Pet Urinary Tract Disease Malaysia — Cats & Dogs Guide',
    ms: 'Penyakit Saluran Kencing Haiwan Malaysia — Panduan Kucing & Anjing',
    zh: '马来西亚宠物泌尿道疾病 — 猫狗指南',
  }, d: {
    en: 'Urinary tract disease in cats and dogs: emergency signs (blocked cat), symptoms, conditions, and when to see a vet in Malaysia.',
    ms: 'Penyakit saluran kencing kucing dan anjing: tanda kecemasan, gejala, dan bila perlu jumpa vet di Malaysia.',
    zh: '猫狗泌尿道疾病：紧急迹象（猫尿道堵塞）、症状、病况以及马来西亚何时就医。',
  }, h1: { en: 'Pet urinary tract disease — Cats & dogs', ms: 'Penyakit saluran kencing haiwan — Kucing & anjing', zh: '宠物泌尿道疾病 — 猫与狗' } },
];

// ---------- Helpers ----------

function localizedPath(lang, p) {
  if (lang === 'en') return p === '' ? '/' : p;
  return `/${lang}${p}`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function buildHead({ title, description, canonical, alternates, ogLocale }) {
  const altTags = alternates
    .map(([lang, href]) => `<link rel="alternate" hreflang="${lang}" href="${href}" />`)
    .join('\n    ');
  return `<title>${escapeHtml(title)}</title>
    <meta name="title" content="${escapeHtml(title)}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:locale" content="${ogLocale}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${canonical}" />
    <meta property="twitter:title" content="${escapeHtml(title)}" />
    <meta property="twitter:description" content="${escapeHtml(description)}" />
    ${altTags}
    <link rel="alternate" hreflang="x-default" href="${alternates[0][1]}" />`;
}

function buildBodySnippet({ h1, intro, links }) {
  // Visible to crawlers; replaced by React on mount (createRoot().render()).
  const linkHtml = (links || []).map((l) => `<li><a href="${l.href}">${escapeHtml(l.label)}</a></li>`).join('');
  return `<div data-prerender="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">
      <h1>${escapeHtml(h1)}</h1>
      ${intro ? `<p>${escapeHtml(intro)}</p>` : ''}
      ${linkHtml ? `<nav><ul>${linkHtml}</ul></nav>` : ''}
    </div>`;
}

function ogLocaleFor(lang) {
  return lang === 'zh' ? 'zh_CN' : lang === 'ms' ? 'ms_MY' : 'en_MY';
}

function buildBreadcrumb(pathRel, h1) {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }];
  if (pathRel) {
    const parts = pathRel.split('/').filter(Boolean);
    let acc = '';
    parts.forEach((seg, i) => {
      acc += '/' + seg;
      const name = i === parts.length - 1 ? h1 : seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      items.push({ '@type': 'ListItem', position: i + 2, name, item: SITE + acc });
    });
  }
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
}

function buildFAQPage(qas) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  };
}

function buildVeterinaryCareCity(c, lang, descLang) {
  return {
    '@context': 'https://schema.org', '@type': 'VeterinaryCare',
    '@id': `${SITE}/${c.stateSlug}/${c.slug}#veterinarycare`,
    name: `PetCare Malaysia — ${c.name}`,
    description: descLang,
    url: `${SITE}${localizedPath(lang, `/${c.stateSlug}/${c.slug}`)}`,
    areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'AdministrativeArea', name: c.state } },
    address: { '@type': 'PostalAddress', addressLocality: c.name, addressRegion: c.state, addressCountry: 'MY' },
    priceRange: 'RM',
    medicalSpecialty: 'VeterinaryCare',
  };
}

function buildHowTo({ name, description, url, steps, totalTime }) {
  return {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name,
    description: `${description} Educational only — always consult a licensed Malaysian vet.`,
    url,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  };
}

function cityFAQs(c, lang) {
  if (lang === 'ms') return [
    { q: `Di mana saya boleh cari vet kecemasan 24 jam di ${c.name}?`, a: `Gunakan direktori PetCareMY untuk menyenaraikan klinik vet kecemasan 24/7 yang disahkan di ${c.name}, ${c.state}, dengan nombor telefon dan waktu operasi.` },
    { q: `Berapakah purata kos lawatan vet di ${c.name}?`, a: `Konsultasi vet di ${c.name} biasanya RM30–RM80, manakala lawatan kecemasan boleh mencecah RM150–RM500 bergantung pada rawatan.` },
    { q: `Bila saya perlu bawa haiwan saya ke vet kecemasan di ${c.name}?`, a: `Bawa segera jika haiwan anda muntah berulang, gusi pucat, sukar bernafas, kejang, atau tidak bermaya. Hubungi klinik dahulu jika boleh.` },
    { q: `Adakah PetCareMY mengesahkan klinik vet di ${c.name}?`, a: `Ya. Setiap klinik yang disenaraikan untuk ${c.name} disemak terhadap pendaftaran DVS Malaysia dan ulasan awam.` },
    { q: `Adakah insurans haiwan diperlukan di ${c.name}?`, a: `Insurans tidak wajib tetapi bermula dari RM25/bulan dan boleh menampung kos kecemasan ribuan ringgit di klinik ${c.name}.` },
    { q: `Bagaimana saya menggunakan alat penilaian kecemasan PetCareMY?`, a: `Jawab 17 soalan ringkas (kira-kira 90 saat) untuk skor kecemasan dan vet terdekat yang disyorkan di ${c.name}.` },
  ];
  if (lang === 'zh') return [
    { q: `我在${c.name}哪里可以找到24小时紧急兽医？`, a: `使用PetCareMY目录可查看${c.name}（${c.state}）经过验证的24/7急诊兽医诊所，附电话和营业时间。` },
    { q: `${c.name}看兽医平均费用是多少？`, a: `${c.name}的兽医咨询通常为RM30–RM80，急诊就诊根据治疗可能达RM150–RM500。` },
    { q: `我应该什么时候带宠物去${c.name}的急诊兽医？`, a: `如果出现反复呕吐、牙龈苍白、呼吸困难、抽搐或精神萎靡，请立即就医。如可能请先致电诊所。` },
    { q: `PetCareMY是否核实${c.name}的兽医诊所？`, a: `是。${c.name}列出的每家诊所均依据马来西亚兽医局（DVS）注册和公开评价进行核查。` },
    { q: `在${c.name}需要购买宠物保险吗？`, a: `保险并非强制，但每月仅RM25起，可覆盖${c.name}诊所数千令吉的急诊费用。` },
    { q: `如何使用PetCareMY的急症评估工具？`, a: `回答17个简短问题（约90秒），即可获得紧急程度评分以及${c.name}附近推荐的兽医。` },
  ];
  return [
    { q: `Where can I find a 24-hour emergency vet in ${c.name}?`, a: `Use the PetCareMY directory to view verified 24/7 emergency vet clinics in ${c.name}, ${c.state}, with phone numbers and operating hours.` },
    { q: `How much does a vet visit cost in ${c.name}?`, a: `Vet consultations in ${c.name} typically cost RM30–RM80, while emergency visits can reach RM150–RM500 depending on treatment.` },
    { q: `When should I take my pet to an emergency vet in ${c.name}?`, a: `Go immediately if your pet is vomiting repeatedly, has pale gums, trouble breathing, seizures, or is unresponsive. Phone the clinic first if possible.` },
    { q: `Does PetCareMY verify vet clinics in ${c.name}?`, a: `Yes. Every clinic listed for ${c.name} is checked against Malaysia's DVS registration and public reviews.` },
    { q: `Is pet insurance necessary in ${c.name}?`, a: `Insurance is not mandatory but starts from RM25/month and can cover thousands of ringgit in emergency costs at ${c.name} clinics.` },
    { q: `How do I use the PetCareMY emergency assessment tool?`, a: `Answer 17 short questions (about 90 seconds) to get an urgency score and nearest recommended vets in ${c.name}.` },
  ];
}

function qaHubFAQs(lang) {
  if (lang === 'ms') return [
    { q: 'Bagaimana PetCareMY menjawab soalan haiwan saya?', a: 'Soalan dijawab oleh AI yang dilatih pada panduan vet Malaysia dan disemak oleh vet berkelayakan untuk topik perubatan.' },
    { q: 'Adakah perkhidmatan S&J ini percuma?', a: 'Ya. Soal-jawab kecemasan, kos vet dan panduan penjagaan haiwan adalah percuma di semua 14 negeri Malaysia.' },
    { q: 'Boleh saya tanya tentang dos ubat haiwan?', a: 'Tidak. Atas sebab keselamatan, kami tidak memberi dos ubat — sila rujuk vet berlesen di Malaysia.' },
    { q: 'Bagaimana saya tahu bila ini kecemasan vet sebenar?', a: 'Gunakan alat penilaian kecemasan 90 saat kami atau hubungi vet 24/7 terdekat dengan segera.' },
  ];
  if (lang === 'zh') return [
    { q: 'PetCareMY如何回答我的宠物问题？', a: '问题由经过马来西亚兽医指南训练的AI回答，医疗主题由合格兽医审核。' },
    { q: '问答服务是免费的吗？', a: '是的。马来西亚14个州的急症问答、兽医费用和宠物护理指南均免费提供。' },
    { q: '我可以询问宠物药物剂量吗？', a: '不可以。出于安全考虑，我们不提供药物剂量——请咨询马来西亚持牌兽医。' },
    { q: '如何判断这是真正的兽医急症？', a: '使用我们的90秒急症评估工具或立即联系最近的24/7兽医。' },
  ];
  return [
    { q: 'How does PetCareMY answer my pet questions?', a: 'Questions are answered by AI trained on Malaysian veterinary guidelines and reviewed by qualified vets for medical topics.' },
    { q: 'Is the Q&A service free?', a: 'Yes. Emergency Q&A, vet costs and pet care guides are free across all 14 Malaysian states.' },
    { q: 'Can I ask about pet medication dosages?', a: 'No. For safety reasons we do not provide dosages — please consult a licensed Malaysian vet.' },
    { q: 'How do I know if this is a real vet emergency?', a: 'Use our 90-second emergency assessment tool or contact your nearest 24/7 vet immediately.' },
  ];
}

function assessmentHowToSteps(lang) {
  if (lang === 'ms') return [
    { name: 'Perhatikan gejala', text: 'Senaraikan tanda-tanda yang anda nampak: muntah, lemah, gusi pucat, sukar bernafas atau kejang.' },
    { name: 'Periksa tanda vital', text: 'Semak nafas, denyut nadi dan kesedaran haiwan anda dengan tenang.' },
    { name: 'Jawab 17 soalan triage', text: 'Gunakan alat percuma 90 saat untuk menilai tahap kecemasan haiwan anda.' },
    { name: 'Dapatkan skor & vet terdekat', text: 'Terima skor kecemasan dan senarai vet 24/7 terdekat yang disahkan di kawasan anda.' },
    { name: 'Hubungi klinik vet', text: 'Hubungi klinik dahulu, terangkan gejala, dan ikut arahan pengangkutan selamat.' },
  ];
  if (lang === 'zh') return [
    { name: '观察症状', text: '记录所见症状：呕吐、虚弱、牙龈苍白、呼吸困难或抽搐。' },
    { name: '检查生命体征', text: '冷静地检查宠物的呼吸、脉搏和意识状态。' },
    { name: '回答17个分诊问题', text: '使用免费的90秒工具评估宠物的紧急程度。' },
    { name: '获取评分和最近兽医', text: '获得紧急评分和您所在地区经过验证的24/7兽医名单。' },
    { name: '联系兽医诊所', text: '先致电诊所，说明症状，并按照安全运输指示操作。' },
  ];
  return [
    { name: 'Observe the symptoms', text: 'List the signs you see: vomiting, weakness, pale gums, breathing trouble, or seizures.' },
    { name: 'Check vital signs', text: 'Calmly check your pet\'s breathing, pulse, and level of consciousness.' },
    { name: 'Answer 17 triage questions', text: 'Use the free 90-second tool to assess your pet\'s emergency level.' },
    { name: 'Get an urgency score & nearest vets', text: 'Receive an urgency score and a list of verified 24/7 vets near your location.' },
    { name: 'Contact the vet clinic', text: 'Phone the clinic first, describe the symptoms, and follow safe-transport instructions.' },
  ];
}

function guideHowToSteps(lang) {
  if (lang === 'ms') return [
    { name: 'Tenang & nilai keadaan', text: 'Pastikan tempat selamat. Perhatikan tanda kritikal: pernafasan, kesedaran, pendarahan.' },
    { name: 'Kenal pasti tanda merah', text: 'Gusi pucat/biru, kejang, muntah berulang, atau trauma memerlukan vet segera.' },
    { name: 'Hubungi vet 24/7', text: 'Hubungi klinik kecemasan terdekat dan terangkan gejala dengan jelas.' },
    { name: 'Pengangkutan selamat', text: 'Gunakan pembawa atau tuala. Sokong leher dan elakkan pergerakan tidak perlu.' },
  ];
  if (lang === 'zh') return [
    { name: '保持冷静并评估', text: '确保环境安全。检查关键体征：呼吸、意识、出血。' },
    { name: '识别红色警报症状', text: '牙龈苍白/发紫、抽搐、反复呕吐或外伤需立即就医。' },
    { name: '联系24/7兽医', text: '致电最近的急诊诊所并清楚说明症状。' },
    { name: '安全运输', text: '使用宠物笼或毛巾。支撑颈部，避免不必要的移动。' },
  ];
  return [
    { name: 'Stay calm and assess', text: 'Make the area safe. Check critical signs: breathing, consciousness, bleeding.' },
    { name: 'Identify red-flag symptoms', text: 'Pale or blue gums, seizures, repeated vomiting, or trauma need immediate vet care.' },
    { name: 'Call a 24/7 vet', text: 'Phone the nearest emergency clinic and describe symptoms clearly.' },
    { name: 'Transport safely', text: 'Use a carrier or towel. Support the neck and avoid unnecessary movement.' },
  ];
}

function buildOrganization() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'PetCare Malaysia', url: SITE, logo: SITE + '/logo.png',
    sameAs: ['https://facebook.com/petcaremalaysia', 'https://instagram.com/petcaremalaysia'],
  };
}

function renderPage({ pathRel, lang, title, description, h1, intro, links, jsonLd }) {
  const alternates = LANGS.map((l) => [l, `${SITE}${localizedPath(l, pathRel)}`]);
  const canonical = `${SITE}${localizedPath(lang, pathRel)}`;
  const head = buildHead({ title, description, canonical, alternates, ogLocale: ogLocaleFor(lang) });
  const body = buildBodySnippet({ h1, intro, links });
  const schemas = [buildBreadcrumb(pathRel, h1)];
  if (Array.isArray(jsonLd)) schemas.push(...jsonLd);
  else if (jsonLd) schemas.push(jsonLd);
  const jsonLdHtml = schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n    ');

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, '');
  html = html.replace(/<meta\s+name="(?:title|description|keywords)"[^>]*>/g, '');
  html = html.replace(/<meta\s+property="(?:og:[^"]+|twitter:[^"]+)"[^>]*>/g, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*>/g, '');
  html = html.replace(/<link\s+rel="alternate"[^>]*hreflang="[^"]*"[^>]*>/g, '');
  html = html.replace('</head>', `    ${head}\n    ${jsonLdHtml}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

function writeRoute(pathRel, lang, html) {
  const localized = localizedPath(lang, pathRel);
  // Skip the english root — it already exists as index.html and is overwritten last
  const cleanPath = localized.replace(/^\/+/, '');
  const outDir = cleanPath === '' ? distDir : path.join(distDir, cleanPath);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
}

// ---------- Render ----------

let count = 0;

// Static routes
for (const r of STATIC_ROUTES) {
  for (const lang of LANGS) {
    const extra = r.p === '' ? [buildOrganization()] : [];
    if (r.p === '/qa') {
      extra.push(buildFAQPage(qaHubFAQs(lang)));
    } else if (r.p === '/assessment') {
      extra.push(buildHowTo({
        name: r.h1[lang],
        description: r.d[lang],
        url: `${SITE}${localizedPath(lang, r.p)}`,
        steps: assessmentHowToSteps(lang),
        totalTime: 'PT90S',
      }));
    } else if (r.p === '/emergency-guide') {
      extra.push(buildHowTo({
        name: r.h1[lang],
        description: r.d[lang],
        url: `${SITE}${localizedPath(lang, r.p)}`,
        steps: guideHowToSteps(lang),
      }));
    }
    const html = renderPage({
      pathRel: r.p,
      lang,
      title: r.t[lang],
      description: r.d[lang],
      h1: r.h1[lang],
      intro: r.d[lang],
      jsonLd: extra,
    });
    writeRoute(r.p, lang, html);
    count++;
  }
}

// State Q&A pages
for (const [slug, name] of STATES) {
  for (const lang of LANGS) {
    const titles = {
      en: `Pet Emergency Q&A for ${name} | PetCareMY`,
      ms: `S&J Kecemasan Haiwan untuk ${name} | PetCareMY`,
      zh: `${name}宠物急症问答 | PetCareMY`,
    };
    const descs = {
      en: `Get answers to pet emergency and care questions in ${name}, Malaysia. Local DVS contacts, vet costs, and expert advice.`,
      ms: `Dapatkan jawapan untuk soalan kecemasan haiwan di ${name}, Malaysia. Kenalan DVS tempatan, kos vet, dan nasihat pakar.`,
      zh: `获取${name}（马来西亚）宠物急症与护理问题的答案。本地兽医局联系、兽医费用与专家建议。`,
    };
    const h1s = {
      en: `${name} pet emergency Q&A`,
      ms: `S&J kecemasan haiwan ${name}`,
      zh: `${name}宠物急症问答`,
    };
    const faqSchema = {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [{
        '@type': 'Question',
        name: lang === 'en' ? `What should I do in a pet emergency in ${name}?` : lang === 'ms' ? `Apa perlu saya lakukan dalam kecemasan haiwan di ${name}?` : `${name}发生宠物急症时该怎么办？`,
        acceptedAnswer: { '@type': 'Answer', text: descs[lang] },
      }],
    };
    const html = renderPage({
      pathRel: `/qa/${slug}`,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: h1s[lang],
      intro: descs[lang],
      jsonLd: [faqSchema],
    });
    writeRoute(`/qa/${slug}`, lang, html);
    count++;
  }
}

// City pages
const cities = extractCities();
for (const c of cities) {
  for (const lang of LANGS) {
    const titles = {
      en: `Pet Care ${c.name} — 24/7 Vets, Clinics & Emergency Services`,
      ms: `Penjagaan Haiwan ${c.name} — Vet 24/7, Klinik & Kecemasan`,
      zh: `${c.name}宠物护理 — 24/7兽医、诊所与急诊服务`,
    };
    const descs = {
      en: `Find verified vets, clinics, and 24/7 emergency pet services in ${c.name}, ${c.state}. Local vet costs, contacts, and clinic ratings.`,
      ms: `Cari vet, klinik, dan perkhidmatan haiwan kecemasan 24/7 di ${c.name}, ${c.state}. Kos vet tempatan dan kenalan.`,
      zh: `在${c.name}（${c.state}）寻找验证兽医、诊所和24/7紧急宠物服务。本地兽医费用、联系方式与诊所评级。`,
    };
    const h1s = {
      en: `Pet care services in ${c.name}, ${c.state}`,
      ms: `Perkhidmatan haiwan di ${c.name}, ${c.state}`,
      zh: `${c.name}（${c.state}）宠物护理服务`,
    };
    const localBiz = {
      '@context': 'https://schema.org', '@type': 'LocalBusiness',
      '@id': `${SITE}/${c.stateSlug}/${c.slug}#localbusiness`,
      name: `PetCare Malaysia — ${c.name}`,
      description: descs[lang],
      url: `${SITE}${localizedPath(lang, `/${c.stateSlug}/${c.slug}`)}`,
      areaServed: { '@type': 'City', name: c.name, containedInPlace: { '@type': 'AdministrativeArea', name: c.state } },
      address: { '@type': 'PostalAddress', addressLocality: c.name, addressRegion: c.state, addressCountry: 'MY' },
      priceRange: 'RM',
    };
    const html = renderPage({
      pathRel: `/${c.stateSlug}/${c.slug}`,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: h1s[lang],
      intro: descs[lang],
      jsonLd: [localBiz],
    });
    writeRoute(`/${c.stateSlug}/${c.slug}`, lang, html);
    count++;
  }
}

// Dog dental sub-pages
const dentalSlugs = listSlugs(path.join(root, 'src/data/dog-dental/en'));
for (const slug of dentalSlugs) {
  // category from prefix
  const cat = slug.split('-')[0];
  const isStandalone = slug === 'emergency-signs' || slug === 'when-to-see-vet';
  const pathRel = isStandalone
    ? `/dog-dental-disease/${slug}`
    : `/dog-dental-disease/${cat === 'conditions' ? 'conditions' : cat === 'symptoms' ? 'symptoms' : cat === 'treatments' ? 'treatments' : cat === 'severity' ? 'severity' : cat === 'diagnosis' ? 'diagnosis' : cat === 'recovery' ? 'recovery' : cat === 'prevention' ? 'prevention' : cat}/${slug.replace(/^[^-]+-/, '')}`;

  for (const lang of LANGS) {
    const pretty = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const titles = {
      en: `${pretty} in Dogs — Causes, Signs & Treatment | PetCareMY`,
      ms: `${pretty} pada Anjing — Punca, Tanda & Rawatan | PetCareMY`,
      zh: `狗${pretty} — 原因、症状与治疗 | PetCareMY`,
    };
    const descs = {
      en: `Vet-reviewed guide to ${pretty.toLowerCase()} in dogs: causes, warning signs, treatment options, and prevention in Malaysia.`,
      ms: `Panduan disemak vet untuk ${pretty.toLowerCase()} pada anjing: punca, tanda amaran, pilihan rawatan, dan pencegahan di Malaysia.`,
      zh: `兽医审核的狗${pretty}指南：原因、警示症状、治疗方案以及马来西亚的预防方法。`,
    };
    const medicalSchema = {
      '@context': 'https://schema.org', '@type': 'MedicalWebPage',
      name: titles[lang], description: descs[lang],
      url: `${SITE}${localizedPath(lang, pathRel)}`,
      about: { '@type': 'MedicalCondition', name: pretty },
      audience: { '@type': 'PeopleAudience', name: 'Pet owners in Malaysia' },
    };
    const html = renderPage({
      pathRel,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: titles[lang].split(' | ')[0],
      intro: descs[lang],
      jsonLd: [medicalSchema],
    });
    writeRoute(pathRel, lang, html);
    count++;
  }
}

// Urinary sub-pages
const urinarySlugs = listSlugs(path.join(root, 'src/data/urinary/en'));
for (const slug of urinarySlugs) {
  // urinary slug structure: species-category-slug | species-hub | standalone (e.g. emergency-signs)
  const parts = slug.split('-');
  const species = parts[0]; // cats|dogs|<standalone first word>
  const isSpeciesPrefixed = species === 'cats' || species === 'dogs';
  let pathRel;
  let prettyLabel;
  if (!isSpeciesPrefixed) {
    pathRel = `/urinary-tract-disease/${slug}`;
    prettyLabel = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  } else {
    const sub = parts.slice(1).join('-');
    pathRel = sub === 'hub' ? `/urinary-tract-disease/${species}` : `/urinary-tract-disease/${species}/${sub}`;
    prettyLabel = sub.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }
  for (const lang of LANGS) {
    const speciesLabel = isSpeciesPrefixed
      ? { en: species === 'cats' ? 'Cat' : 'Dog', ms: species === 'cats' ? 'Kucing' : 'Anjing', zh: species === 'cats' ? '猫' : '狗' }
      : { en: 'Pet', ms: 'Haiwan', zh: '宠物' };
    const titles = {
      en: `${speciesLabel.en} ${prettyLabel} — Symptoms & Care | PetCareMY`,
      ms: `${speciesLabel.ms} ${prettyLabel} — Gejala & Penjagaan | PetCareMY`,
      zh: `${speciesLabel.zh}${prettyLabel} — 症状与护理 | PetCareMY`,
    };
    const descs = {
      en: `Guide to ${prettyLabel.toLowerCase()} in ${speciesLabel.en.toLowerCase()}s: warning signs, when to rush to the vet, and treatment in Malaysia.`,
      ms: `Panduan untuk ${prettyLabel.toLowerCase()} pada ${speciesLabel.ms.toLowerCase()}: tanda amaran, bila perlu jumpa vet, dan rawatan di Malaysia.`,
      zh: `${speciesLabel.zh}${prettyLabel}指南：警示信号、何时送医以及马来西亚治疗方法。`,
    };
    const urinaryMedical = {
      '@context': 'https://schema.org', '@type': 'MedicalWebPage',
      name: titles[lang], description: descs[lang],
      url: `${SITE}${localizedPath(lang, pathRel)}`,
      about: { '@type': 'MedicalCondition', name: `${speciesLabel.en} ${prettyLabel}` },
    };
    const html = renderPage({
      pathRel,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: titles[lang].split(' | ')[0],
      intro: descs[lang],
      jsonLd: [urinaryMedical],
    });
    writeRoute(pathRel, lang, html);
    count++;
  }
}

// Blog posts
function extractBlogPosts() {
  const src = fs.readFileSync(path.join(root, 'src/pages/BlogPage.tsx'), 'utf8');
  const re = /\{\s*id:\s*\d+\s*,\s*slug:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'[\s\S]*?titleKey:\s*'([^']+)'[\s\S]*?excerptKey:\s*'([^']+)'/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push({ slug: m[1], category: m[2], titleKey: m[3] });
  }
  return out;
}

const blogPosts = extractBlogPosts();
for (const p of blogPosts) {
  // Generate a readable title from the slug
  const pretty = p.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()).replace(/Malaysia/i, 'Malaysia');
  for (const lang of LANGS) {
    const titles = {
      en: `${pretty} — Pet ${p.category} Guide | PetCareMY`,
      ms: `${pretty} — Panduan ${p.category} Haiwan | PetCareMY`,
      zh: `${pretty} — 马来西亚宠物${p.category}指南 | PetCareMY`,
    };
    const descs = {
      en: `Expert pet ${p.category.toLowerCase()} guide for Malaysian pet owners: ${pretty.toLowerCase()}. Vet-reviewed advice, costs in RM, and step-by-step instructions.`,
      ms: `Panduan ${p.category.toLowerCase()} haiwan untuk pemilik di Malaysia: ${pretty.toLowerCase()}. Nasihat disemak vet, kos dalam RM, dan arahan langkah demi langkah.`,
      zh: `为马来西亚宠物主人提供的${p.category}指南：${pretty}。兽医审核的建议、马币费用与分步说明。`,
    };
    const articleSchema = {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: pretty, description: descs[lang],
      url: `${SITE}${localizedPath(lang, `/blog/${p.slug}`)}`,
      author: { '@type': 'Organization', name: 'PetCare Malaysia' },
      publisher: { '@type': 'Organization', name: 'PetCare Malaysia', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
      mainEntityOfPage: `${SITE}${localizedPath(lang, `/blog/${p.slug}`)}`,
      inLanguage: lang,
      articleSection: p.category,
    };
    const html = renderPage({
      pathRel: `/blog/${p.slug}`,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: pretty,
      intro: descs[lang],
      jsonLd: [articleSchema],
    });
    writeRoute(`/blog/${p.slug}`, lang, html);
    count++;
  }
}

// PAA category pages
const PAA_CATEGORIES = ['cat-care','dog-care','grooming','pet-adoption','pet-care','pet-health','pet-insurance','pet-nutrition','pet-travel','vet-care','veterinary-services'];
for (const slug of PAA_CATEGORIES) {
  const pretty = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  for (const lang of LANGS) {
    const titles = {
      en: `${pretty} — Pet Care Guides Malaysia | PetCareMY`,
      ms: `${pretty} — Panduan Penjagaan Haiwan Malaysia | PetCareMY`,
      zh: `${pretty} — 马来西亚宠物护理指南 | PetCareMY`,
    };
    const descs = {
      en: `Browse expert ${pretty.toLowerCase()} guides for Malaysian pet owners. Vet-reviewed articles on costs, symptoms, treatment, and care.`,
      ms: `Layari panduan ${pretty.toLowerCase()} pakar untuk pemilik haiwan di Malaysia. Artikel disemak vet tentang kos, gejala, rawatan, dan penjagaan.`,
      zh: `浏览为马来西亚宠物主人提供的${pretty}专家指南。兽医审核的费用、症状、治疗与护理文章。`,
    };
    const html = renderPage({
      pathRel: `/category/${slug}`,
      lang,
      title: titles[lang],
      description: descs[lang],
      h1: titles[lang].split(' | ')[0],
      intro: descs[lang],
    });
    writeRoute(`/category/${slug}`, lang, html);
    count++;
  }
}

// Legal + search (English only)
const SINGLE_PAGES = [
  { p: '/terms', t: 'Terms of Service | PetCare Malaysia', d: 'Terms of service for PetCare Malaysia. Read the terms governing use of our pet care directory and emergency assessment tools.', h1: 'Terms of Service' },
  { p: '/privacy', t: 'Privacy Policy | PetCare Malaysia', d: 'How PetCare Malaysia collects, uses, and protects your personal data when you use our pet emergency assessment and directory.', h1: 'Privacy Policy' },
  { p: '/disclaimer', t: 'Medical Disclaimer | PetCare Malaysia', d: 'PetCare Malaysia provides general pet care information, not veterinary advice. Always consult a licensed vet for medical decisions.', h1: 'Medical Disclaimer' },
  { p: '/search', t: 'Search Pet Care Guides — PetCare Malaysia', d: 'Search 60+ pet care guides, emergency protocols, vet directories, and Q&A across all 14 Malaysian states.', h1: 'Search pet care guides' },
];
for (const sp of SINGLE_PAGES) {
  const html = renderPage({ pathRel: sp.p, lang: 'en', title: sp.t, description: sp.d, h1: sp.h1, intro: sp.d });
  writeRoute(sp.p, 'en', html);
  count++;
}


// PAA articles
const paaArticles = extractPaaSlugs();
for (const a of paaArticles) {
  for (const lang of LANGS) {
    const pathRel = `/qa/article/${a.slug}`;
    const paaArticleSchema = {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: a.title, description: a.description || a.title,
      url: `${SITE}${localizedPath(lang, pathRel)}`,
      author: { '@type': 'Organization', name: 'PetCare Malaysia' },
      publisher: { '@type': 'Organization', name: 'PetCare Malaysia', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
      mainEntityOfPage: `${SITE}${localizedPath(lang, pathRel)}`,
      inLanguage: lang,
    };
    const html = renderPage({
      pathRel,
      lang,
      title: a.title,
      description: a.description || a.title,
      h1: a.title,
      intro: a.description,
      jsonLd: [paaArticleSchema],
    });
    writeRoute(pathRel, lang, html);
    count++;
  }
}

// Overwrite root index.html (English homepage) with the prerendered version
{
  const home = STATIC_ROUTES[0];
  const html = renderPage({
    pathRel: '',
    lang: 'en',
    title: home.t.en,
    description: home.d.en,
    h1: home.h1.en,
    intro: home.d.en,
    jsonLd: [buildOrganization()],
  });
  fs.writeFileSync(tmplPath, html, 'utf8');
}

console.log(`[prerender] wrote ${count} per-route HTML files`);

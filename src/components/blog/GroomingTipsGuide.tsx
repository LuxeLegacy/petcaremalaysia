import { useLanguage } from '@/contexts/LanguageContext';
import { Scissors, Droplets, Sparkles, Heart, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import happyPets from '@/assets/happy-pets.jpg';
import { Language } from '@/lib/translations';

const getContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Pet Grooming Tips Malaysia 2025: Complete Guide for Dogs & Cats",
      metaDescription: "Essential grooming tips for Malaysian pet owners. Bathing, brushing, nail care, ear cleaning in hot, humid climate. Professional vs home grooming costs.",
      title: "Essential Pet Grooming Tips for Malaysian Pet Owners (2025)",
      category: "Grooming",
      date: "November 20, 2024",
      readTime: "8 min read",
      reviewedBy: "Tips from Professional Pet Groomers",
      heroAlt: "Happy groomed dog and cat",
      heroCaption: "Regular grooming keeps your pet healthy and happy",
      tldr: [
        "Bathe dogs every 1-2 weeks in Malaysia's humid climate",
        "Brush daily for long-haired breeds, weekly for short-haired",
        "Trim nails every 2-4 weeks to prevent overgrowth",
        "Clean ears weekly to prevent infections",
        "Professional grooming: RM 50-200 per session"
      ],
      tocItems: [
        { id: "why", title: "Why Grooming Matters in Malaysia" },
        { id: "bathing", title: "Bathing Guide" },
        { id: "brushing", title: "Brushing & Coat Care" },
        { id: "nails", title: "Nail Trimming" },
        { id: "ears", title: "Ear Cleaning" },
        { id: "teeth", title: "Dental Care" },
        { id: "professional", title: "Professional vs Home Grooming" },
        { id: "schedule", title: "Grooming Schedule" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      intro: "Malaysia's hot and humid climate means your pet needs extra grooming attention. High humidity increases the risk of skin infections, ear problems, and matted fur. This guide covers everything you need to keep your furry friend clean, comfortable, and healthy.",
      whyTitle: "Why Grooming Matters in Malaysia",
      whyPoints: [
        "Prevents skin infections common in humid climates",
        "Reduces shedding and keeps your home cleaner",
        "Allows early detection of skin problems, lumps, or parasites",
        "Strengthens bond between you and your pet",
        "Keeps your pet comfortable in hot weather"
      ],
      bathingTitle: "Bathing Guide",
      bathingFreq: "Frequency: Every 1-2 weeks for dogs, every 4-6 weeks for cats (or when dirty)",
      bathingSteps: [
        "Brush thoroughly before bathing to remove mats",
        "Use lukewarm water (not cold—even in hot weather)",
        "Use pet-specific shampoo (human shampoo damages pet skin pH)",
        "Massage shampoo into coat, avoiding eyes and ears",
        "Rinse completely—leftover shampoo causes irritation",
        "Dry thoroughly with towel, then air dry or use low-heat dryer"
      ],
      bathingTips: [
        "Anti-fungal shampoo for pets prone to skin infections",
        "Oatmeal shampoo for sensitive or itchy skin",
        "Medicated shampoo as prescribed by vet",
        "NEVER use human shampoo—wrong pH for pets"
      ],
      brushingTitle: "Brushing & Coat Care",
      brushingFreq: {
        long: "Long-haired breeds (Shih Tzu, Persian): Daily brushing required",
        medium: "Medium-haired breeds: 2-3 times per week",
        short: "Short-haired breeds: Weekly brushing sufficient"
      },
      brushingTools: [
        "Slicker brush: Best for removing mats and tangles",
        "Pin brush: Good for long, silky coats",
        "Bristle brush: Ideal for short-haired breeds",
        "Undercoat rake: Essential for double-coated breeds (Huskies, Golden Retrievers)",
        "Dematting comb: For severe tangles (use carefully)"
      ],
      nailsTitle: "Nail Trimming",
      nailsFreq: "Frequency: Every 2-4 weeks (when you hear clicking on floor)",
      nailsSteps: [
        "Use proper pet nail clippers (guillotine or scissor type)",
        "Identify the quick (pink area with blood vessels)",
        "Cut only the tip, staying away from the quick",
        "If bleeding occurs, apply styptic powder",
        "Trim dewclaws if present",
        "Reward with treats to create positive association"
      ],
      nailsWarning: "If you're nervous, ask a vet or groomer to demonstrate first. Cutting the quick is painful and causes bleeding.",
      earsTitle: "Ear Cleaning",
      earsFreq: "Frequency: Weekly for floppy ears, bi-weekly for upright ears",
      earsSteps: [
        "Use vet-approved ear cleaning solution",
        "Squeeze solution into ear canal",
        "Massage base of ear for 20-30 seconds",
        "Let pet shake head",
        "Wipe outer ear with cotton ball",
        "NEVER use cotton swabs deep in ear canal"
      ],
      earsSigns: ["Brown/black discharge", "Redness or swelling", "Bad odor", "Head shaking or scratching"],
      teethTitle: "Dental Care",
      teethFreq: "Frequency: Daily brushing ideal, minimum 3x per week",
      teethSteps: [
        "Use pet-specific toothbrush and toothpaste",
        "Start slowly—let pet taste toothpaste first",
        "Brush in circular motions on outer surfaces",
        "Focus on back teeth where tartar builds up",
        "Session should be short (1-2 minutes)"
      ],
      teethAlternatives: [
        "Dental chews (Greenies, Whimzees)",
        "Dental toys",
        "Water additives for oral health",
        "Annual professional dental cleaning"
      ],
      professionalTitle: "Professional vs Home Grooming",
      professionalPros: [
        "Expert handling of difficult coats",
        "Professional-grade tools and products",
        "Anal gland expression included",
        "Styling and breed-specific cuts"
      ],
      professionalCons: [
        "Cost: RM 50-200 per session",
        "Stress of travel and unfamiliar environment",
        "Scheduling required"
      ],
      homePros: [
        "Convenient and cost-effective long-term",
        "Less stressful for anxious pets",
        "Bonding time with your pet",
        "You control products used"
      ],
      homeCons: [
        "Initial investment in tools (RM 100-300)",
        "Learning curve",
        "Some services difficult (anal glands, difficult matting)"
      ],
      professionalCosts: {
        small: "Small dog/cat: RM 50-80",
        medium: "Medium dog: RM 80-120",
        large: "Large dog: RM 120-180",
        specialty: "Specialty/show cuts: RM 150-300"
      },
      scheduleTitle: "Complete Grooming Schedule",
      scheduleDaily: ["Brush (long-haired breeds)", "Check for ticks/parasites", "Quick eye/ear check"],
      scheduleWeekly: ["Brush (short/medium-haired)", "Clean ears", "Dental care (3x minimum)"],
      scheduleBiweekly: ["Trim nails", "Check paw pads"],
      scheduleMonthly: ["Full bath", "Anal gland check (at groomer)"],
      scheduleQuarterly: ["Professional grooming (if desired)", "Full health check during grooming"],
      faqs: [
        { q: "Can I use human shampoo on my pet?", a: "No. Human shampoo has wrong pH for pet skin (5.5 vs 7.0) and can cause dryness, irritation, and skin problems." },
        { q: "How often should I take my pet to a professional groomer?", a: "Every 4-8 weeks for long-haired breeds needing haircuts. Short-haired breeds can go longer or skip professional grooming entirely." },
        { q: "My cat hates water. How do I bathe them?", a: "Cats usually self-groom effectively. Only bathe when necessary. Use minimal water, work quickly, and consider dry shampoo for spot cleaning." },
        { q: "How do I remove severe matting?", a: "Severe mats should be cut out carefully or removed by a professional. Never try to brush through severe mats—it's painful." },
        { q: "Is it normal for my pet to shed a lot?", a: "Shedding varies by breed and season. Excessive shedding with bald patches, however, could indicate health issues—consult a vet." }
      ],
      ctaTitle: "Keep Your Pet Looking Great",
      ctaText: "Find professional groomers near you or learn more about pet health."
    },
    ms: {
      metaTitle: "Petua Dandanan Haiwan Peliharaan Malaysia 2025: Panduan Lengkap untuk Anjing & Kucing",
      metaDescription: "Petua dandanan penting untuk pemilik haiwan peliharaan Malaysia. Mandi, memberus, penjagaan kuku, pembersihan telinga dalam iklim panas dan lembap.",
      title: "Petua Dandanan Haiwan Peliharaan Penting untuk Pemilik Malaysia (2025)",
      category: "Dandanan",
      date: "20 November 2024",
      readTime: "8 minit bacaan",
      reviewedBy: "Petua daripada Penandan Haiwan Profesional",
      heroAlt: "Anjing dan kucing yang didandan dengan gembira",
      heroCaption: "Dandanan berkala memastikan haiwan anda sihat dan gembira",
      tldr: [
        "Mandikan anjing setiap 1-2 minggu dalam iklim lembap Malaysia",
        "Memberus setiap hari untuk baka berbulu panjang, mingguan untuk berbulu pendek",
        "Potong kuku setiap 2-4 minggu untuk mencegah pertumbuhan berlebihan",
        "Bersihkan telinga setiap minggu untuk mencegah jangkitan",
        "Dandanan profesional: RM 50-200 setiap sesi"
      ],
      tocItems: [
        { id: "why", title: "Mengapa Dandanan Penting di Malaysia" },
        { id: "bathing", title: "Panduan Mandi" },
        { id: "brushing", title: "Memberus & Penjagaan Bulu" },
        { id: "nails", title: "Memotong Kuku" },
        { id: "ears", title: "Pembersihan Telinga" },
        { id: "teeth", title: "Penjagaan Gigi" },
        { id: "professional", title: "Dandanan Profesional vs Di Rumah" },
        { id: "schedule", title: "Jadual Dandanan" },
        { id: "faqs", title: "Soalan Lazim" },
      ],
      intro: "Iklim panas dan lembap Malaysia bermaksud haiwan peliharaan anda memerlukan perhatian dandanan tambahan. Kelembapan tinggi meningkatkan risiko jangkitan kulit, masalah telinga, dan bulu kusut. Panduan ini merangkumi semua yang anda perlukan untuk memastikan teman berbulu anda bersih, selesa, dan sihat.",
      whyTitle: "Mengapa Dandanan Penting di Malaysia",
      whyPoints: [
        "Mencegah jangkitan kulit biasa dalam iklim lembap",
        "Mengurangkan luruh bulu dan memastikan rumah lebih bersih",
        "Membolehkan pengesanan awal masalah kulit, ketulan, atau parasit",
        "Menguatkan ikatan antara anda dan haiwan peliharaan",
        "Memastikan haiwan peliharaan selesa dalam cuaca panas"
      ],
      bathingTitle: "Panduan Mandi",
      bathingFreq: "Kekerapan: Setiap 1-2 minggu untuk anjing, setiap 4-6 minggu untuk kucing (atau bila kotor)",
      bathingSteps: [
        "Memberus dengan teliti sebelum mandi untuk membuang kusut",
        "Gunakan air suam (bukan sejuk—walaupun cuaca panas)",
        "Gunakan syampu khusus haiwan (syampu manusia merosakkan pH kulit haiwan)",
        "Urut syampu ke dalam bulu, elakkan mata dan telinga",
        "Bilas sepenuhnya—baki syampu menyebabkan kerengsaan",
        "Keringkan dengan teliti menggunakan tuala, kemudian kering udara atau pengering haba rendah"
      ],
      bathingTips: [
        "Syampu anti-kulat untuk haiwan yang cenderung jangkitan kulit",
        "Syampu oatmeal untuk kulit sensitif atau gatal",
        "Syampu ubat seperti yang dipreskripsi oleh vet",
        "JANGAN SEKALI-KALI gunakan syampu manusia—pH salah untuk haiwan"
      ],
      brushingTitle: "Memberus & Penjagaan Bulu",
      brushingFreq: {
        long: "Baka berbulu panjang (Shih Tzu, Persian): Memberus harian diperlukan",
        medium: "Baka berbulu sederhana: 2-3 kali seminggu",
        short: "Baka berbulu pendek: Memberus mingguan mencukupi"
      },
      brushingTools: [
        "Berus slicker: Terbaik untuk membuang kusut dan simpulan",
        "Berus pin: Baik untuk bulu panjang dan halus",
        "Berus bristle: Ideal untuk baka berbulu pendek",
        "Rake undercoat: Penting untuk baka berbulu dua lapis (Huskies, Golden Retrievers)",
        "Sikat dematting: Untuk kusut teruk (gunakan dengan berhati-hati)"
      ],
      nailsTitle: "Memotong Kuku",
      nailsFreq: "Kekerapan: Setiap 2-4 minggu (bila anda dengar bunyi klik di lantai)",
      nailsSteps: [
        "Gunakan pemotong kuku haiwan yang betul (jenis guillotine atau gunting)",
        "Kenali quick (kawasan merah jambu dengan saluran darah)",
        "Potong hanya hujung, jauh dari quick",
        "Jika berdarah, sapu serbuk styptik",
        "Potong dewclaws jika ada",
        "Beri ganjaran dengan makanan untuk mencipta persatuan positif"
      ],
      nailsWarning: "Jika anda gementar, minta vet atau penandan untuk tunjuk dahulu. Memotong quick menyakitkan dan menyebabkan pendarahan.",
      earsTitle: "Pembersihan Telinga",
      earsFreq: "Kekerapan: Mingguan untuk telinga jatuh, dua minggu sekali untuk telinga tegak",
      earsSteps: [
        "Gunakan larutan pembersih telinga yang diluluskan vet",
        "Picit larutan ke dalam saluran telinga",
        "Urut pangkal telinga selama 20-30 saat",
        "Biarkan haiwan menggoncang kepala",
        "Lap telinga luar dengan kapas",
        "JANGAN SEKALI-KALI gunakan cotton bud jauh dalam saluran telinga"
      ],
      earsSigns: ["Discaj coklat/hitam", "Kemerahan atau bengkak", "Bau busuk", "Menggoncang kepala atau menggaru"],
      teethTitle: "Penjagaan Gigi",
      teethFreq: "Kekerapan: Memberus harian ideal, minimum 3x seminggu",
      teethSteps: [
        "Gunakan berus gigi dan ubat gigi khusus haiwan",
        "Mulakan perlahan—biarkan haiwan rasa ubat gigi dahulu",
        "Memberus dalam gerakan bulatan pada permukaan luar",
        "Fokus pada gigi belakang di mana tartar terkumpul",
        "Sesi harus pendek (1-2 minit)"
      ],
      teethAlternatives: [
        "Kunyahan gigi (Greenies, Whimzees)",
        "Mainan gigi",
        "Aditif air untuk kesihatan mulut",
        "Pembersihan gigi profesional tahunan"
      ],
      professionalTitle: "Dandanan Profesional vs Di Rumah",
      professionalPros: [
        "Pengendalian pakar untuk bulu sukar",
        "Alat dan produk gred profesional",
        "Ekspresi kelenjar anal termasuk",
        "Gaya dan potongan khusus baka"
      ],
      professionalCons: [
        "Kos: RM 50-200 setiap sesi",
        "Tekanan perjalanan dan persekitaran asing",
        "Memerlukan penjadualan"
      ],
      homePros: [
        "Mudah dan kos efektif jangka panjang",
        "Kurang tekanan untuk haiwan cemas",
        "Masa ikatan dengan haiwan anda",
        "Anda mengawal produk yang digunakan"
      ],
      homeCons: [
        "Pelaburan awal dalam alat (RM 100-300)",
        "Keluk pembelajaran",
        "Sesetengah perkhidmatan sukar (kelenjar anal, kusut sukar)"
      ],
      professionalCosts: {
        small: "Anjing/kucing kecil: RM 50-80",
        medium: "Anjing sederhana: RM 80-120",
        large: "Anjing besar: RM 120-180",
        specialty: "Potongan khusus/pertunjukan: RM 150-300"
      },
      scheduleTitle: "Jadual Dandanan Lengkap",
      scheduleDaily: ["Memberus (baka berbulu panjang)", "Periksa kutu/parasit", "Pemeriksaan mata/telinga pantas"],
      scheduleWeekly: ["Memberus (berbulu pendek/sederhana)", "Bersih telinga", "Penjagaan gigi (3x minimum)"],
      scheduleBiweekly: ["Potong kuku", "Periksa pad kaki"],
      scheduleMonthly: ["Mandi penuh", "Pemeriksaan kelenjar anal (di penandan)"],
      scheduleQuarterly: ["Dandanan profesional (jika dikehendaki)", "Pemeriksaan kesihatan penuh semasa dandanan"],
      faqs: [
        { q: "Bolehkah saya gunakan syampu manusia pada haiwan saya?", a: "Tidak. Syampu manusia mempunyai pH yang salah untuk kulit haiwan (5.5 vs 7.0) dan boleh menyebabkan kekeringan, kerengsaan, dan masalah kulit." },
        { q: "Berapa kerap saya perlu bawa haiwan ke penandan profesional?", a: "Setiap 4-8 minggu untuk baka berbulu panjang yang memerlukan potongan rambut. Baka berbulu pendek boleh pergi lebih lama atau langkau dandanan profesional sepenuhnya." },
        { q: "Kucing saya benci air. Bagaimana saya mandikannya?", a: "Kucing biasanya membersih diri sendiri dengan berkesan. Hanya mandikan bila perlu. Gunakan air minimum, bekerja cepat, dan pertimbangkan syampu kering untuk pembersihan setempat." },
        { q: "Bagaimana saya buang kusut teruk?", a: "Kusut teruk perlu dipotong dengan berhati-hati atau dibuang oleh profesional. Jangan cuba memberus melalui kusut teruk—ia menyakitkan." },
        { q: "Adakah normal untuk haiwan saya luruh bulu banyak?", a: "Luruh bulu berbeza mengikut baka dan musim. Luruh berlebihan dengan tampalan botak, bagaimanapun, boleh menunjukkan masalah kesihatan—rujuk vet." }
      ],
      ctaTitle: "Pastikan Haiwan Anda Sentiasa Kelihatan Hebat",
      ctaText: "Cari penandan profesional berhampiran anda atau ketahui lebih lanjut tentang kesihatan haiwan."
    },
    zh: {
      metaTitle: "马来西亚宠物美容技巧 2025：狗猫完整指南",
      metaDescription: "马来西亚宠物主人必备的美容技巧。在炎热潮湿的气候中洗澡、刷毛、指甲护理、耳朵清洁。专业与家庭美容费用。",
      title: "马来西亚宠物主人必备美容技巧（2025）",
      category: "美容",
      date: "2024年11月20日",
      readTime: "8分钟阅读",
      reviewedBy: "专业宠物美容师提供的技巧",
      heroAlt: "美容后快乐的狗和猫",
      heroCaption: "定期美容让您的宠物健康快乐",
      tldr: [
        "在马来西亚潮湿气候中，每1-2周给狗洗一次澡",
        "长毛品种每天刷毛，短毛品种每周刷毛",
        "每2-4周修剪指甲以防止过度生长",
        "每周清洁耳朵以预防感染",
        "专业美容：每次RM 50-200"
      ],
      tocItems: [
        { id: "why", title: "为什么美容在马来西亚很重要" },
        { id: "bathing", title: "洗澡指南" },
        { id: "brushing", title: "刷毛与毛发护理" },
        { id: "nails", title: "指甲修剪" },
        { id: "ears", title: "耳朵清洁" },
        { id: "teeth", title: "牙齿护理" },
        { id: "professional", title: "专业美容 vs 家庭美容" },
        { id: "schedule", title: "美容时间表" },
        { id: "faqs", title: "常见问题" },
      ],
      intro: "马来西亚炎热潮湿的气候意味着您的宠物需要额外的美容关注。高湿度增加了皮肤感染、耳朵问题和毛发打结的风险。本指南涵盖了保持您的毛茸茸朋友清洁、舒适和健康所需的一切。",
      whyTitle: "为什么美容在马来西亚很重要",
      whyPoints: [
        "预防潮湿气候中常见的皮肤感染",
        "减少脱毛，保持家居更清洁",
        "可以及早发现皮肤问题、肿块或寄生虫",
        "加强您与宠物之间的联系",
        "让您的宠物在炎热天气中保持舒适"
      ],
      bathingTitle: "洗澡指南",
      bathingFreq: "频率：狗每1-2周，猫每4-6周（或脏时）",
      bathingSteps: [
        "洗澡前彻底刷毛以去除打结",
        "使用温水（不要用冷水——即使天气炎热）",
        "使用宠物专用洗发水（人类洗发水会破坏宠物皮肤pH值）",
        "将洗发水按摩入毛发，避开眼睛和耳朵",
        "彻底冲洗——残留的洗发水会引起刺激",
        "用毛巾彻底擦干，然后自然风干或使用低温吹风机"
      ],
      bathingTips: [
        "容易皮肤感染的宠物使用抗真菌洗发水",
        "敏感或发痒皮肤使用燕麦洗发水",
        "按兽医处方使用药用洗发水",
        "绝对不要使用人类洗发水——pH值对宠物不对"
      ],
      brushingTitle: "刷毛与毛发护理",
      brushingFreq: {
        long: "长毛品种（西施犬、波斯猫）：需要每天刷毛",
        medium: "中等毛发品种：每周2-3次",
        short: "短毛品种：每周刷毛即可"
      },
      brushingTools: [
        "针梳：最适合去除打结和缠结",
        "针刷：适合长而丝滑的毛发",
        "鬃毛刷：适合短毛品种",
        "底毛耙：双层毛发品种必备（哈士奇、金毛寻回犬）",
        "解结梳：用于严重打结（小心使用）"
      ],
      nailsTitle: "指甲修剪",
      nailsFreq: "频率：每2-4周（当您听到地板上有咔嗒声时）",
      nailsSteps: [
        "使用适当的宠物指甲剪（断头台式或剪刀式）",
        "识别血线（有血管的粉红色区域）",
        "只剪尖端，远离血线",
        "如果出血，涂抹止血粉",
        "如有狼趾也要修剪",
        "用零食奖励以建立积极联想"
      ],
      nailsWarning: "如果您紧张，请先让兽医或美容师演示。剪到血线会很痛并导致出血。",
      earsTitle: "耳朵清洁",
      earsFreq: "频率：垂耳每周，立耳每两周",
      earsSteps: [
        "使用兽医批准的耳朵清洁液",
        "将清洁液挤入耳道",
        "按摩耳根20-30秒",
        "让宠物甩头",
        "用棉球擦拭外耳",
        "绝对不要将棉签深入耳道"
      ],
      earsSigns: ["棕色/黑色分泌物", "发红或肿胀", "异味", "摇头或抓挠"],
      teethTitle: "牙齿护理",
      teethFreq: "频率：每天刷牙最理想，至少每周3次",
      teethSteps: [
        "使用宠物专用牙刷和牙膏",
        "慢慢开始——先让宠物尝尝牙膏的味道",
        "在外表面以圆周运动刷",
        "重点刷后牙，因为那里容易积累牙垢",
        "每次刷牙时间应该很短（1-2分钟）"
      ],
      teethAlternatives: [
        "洁牙零食（Greenies、Whimzees）",
        "洁牙玩具",
        "口腔健康水添加剂",
        "每年专业洁牙"
      ],
      professionalTitle: "专业美容 vs 家庭美容",
      professionalPros: [
        "专业处理难处理的毛发",
        "专业级工具和产品",
        "包括肛门腺挤压",
        "造型和品种特定修剪"
      ],
      professionalCons: [
        "费用：每次RM 50-200",
        "旅途和陌生环境带来的压力",
        "需要预约"
      ],
      homePros: [
        "方便且长期性价比高",
        "对焦虑宠物压力较小",
        "与宠物的亲密时光",
        "您控制使用的产品"
      ],
      homeCons: [
        "初始工具投资（RM 100-300）",
        "学习曲线",
        "某些服务难以完成（肛门腺、严重打结）"
      ],
      professionalCosts: {
        small: "小型狗/猫：RM 50-80",
        medium: "中型狗：RM 80-120",
        large: "大型狗：RM 120-180",
        specialty: "特殊/展示造型：RM 150-300"
      },
      scheduleTitle: "完整美容时间表",
      scheduleDaily: ["刷毛（长毛品种）", "检查蜱虫/寄生虫", "快速检查眼睛/耳朵"],
      scheduleWeekly: ["刷毛（短/中毛）", "清洁耳朵", "牙齿护理（至少3次）"],
      scheduleBiweekly: ["修剪指甲", "检查脚垫"],
      scheduleMonthly: ["完整洗澡", "肛门腺检查（在美容师处）"],
      scheduleQuarterly: ["专业美容（如需要）", "美容时全面健康检查"],
      faqs: [
        { q: "我可以用人类洗发水给宠物洗澡吗？", a: "不可以。人类洗发水的pH值不适合宠物皮肤（5.5 vs 7.0），会导致干燥、刺激和皮肤问题。" },
        { q: "我应该多久带宠物去专业美容师那里？", a: "需要理发的长毛品种每4-8周。短毛品种可以间隔更长时间或完全跳过专业美容。" },
        { q: "我的猫讨厌水。我怎么给它洗澡？", a: "猫通常能有效地自我清洁。只在必要时洗澡。使用最少的水，快速完成，考虑用干洗发水进行局部清洁。" },
        { q: "我如何去除严重的打结？", a: "严重的打结应该小心剪掉或由专业人士处理。永远不要试图刷开严重的打结——那很痛苦。" },
        { q: "我的宠物掉很多毛正常吗？", a: "脱毛因品种和季节而异。但是，过度脱毛并出现秃斑可能表明健康问题——请咨询兽医。" }
      ],
      ctaTitle: "让您的宠物保持最佳状态",
      ctaText: "在您附近找专业美容师或了解更多宠物健康知识。"
    }
  };
  return content[language] || content.en;
};

export const GroomingTipsGuide = () => {
  const { language } = useLanguage();
  const c = getContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-11-20",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-grooming-tips"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const relatedArticles = [
    { to: "/blog/common-pet-illnesses-malaysia", title: "Common Illnesses", description: "Health issues from poor grooming", icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-emergency-symptoms-malaysia", title: "Emergency Symptoms", description: "Know when to see a vet", icon: Heart, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={c.metaTitle}
      metaDescription={c.metaDescription}
      path="/blog/pet-grooming-tips"
      language={language}
      category={c.category}
      categoryColor="secondary"
      title={c.title}
      date={c.date}
      readTime={c.readTime}
      reviewedBy={c.reviewedBy}
      heroImage={happyPets}
      heroImageAlt={c.heroAlt}
      heroImageCaption={c.heroCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={c.tldr} />
      <TableOfContents items={c.tocItems} />

      <p className="text-muted-foreground mb-8">{c.intro}</p>

      {/* Why Grooming Matters */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          {c.whyTitle}
        </h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <ul className="space-y-2">
            {c.whyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bathing */}
      <section id="bathing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="h-6 w-6 text-primary" />
          {c.bathingTitle}
        </h2>
        <p className="text-primary font-semibold mb-4">{c.bathingFreq}</p>
        <div className="bg-card border border-border p-6 rounded-xl mb-4">
          <h3 className="font-bold mb-3">Steps:</h3>
          <ol className="space-y-2 list-decimal list-inside">
            {c.bathingSteps.map((step, i) => <li key={i} className="text-muted-foreground">{step}</li>)}
          </ol>
        </div>
        <div className="bg-muted p-4 rounded-xl">
          <h3 className="font-bold mb-2">Shampoo Tips:</h3>
          <ul className="space-y-1 text-sm">
            {c.bathingTips.map((tip, i) => <li key={i}>• {tip}</li>)}
          </ul>
        </div>
      </section>

      {/* Brushing */}
      <section id="brushing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Scissors className="h-6 w-6 text-primary" />
          {c.brushingTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary/5 p-4 rounded-xl">
            <p className="text-sm">{c.brushingFreq.long}</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-xl">
            <p className="text-sm">{c.brushingFreq.medium}</p>
          </div>
          <div className="bg-primary/5 p-4 rounded-xl">
            <p className="text-sm">{c.brushingFreq.short}</p>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-3">Recommended Tools:</h3>
          <ul className="space-y-2">
            {c.brushingTools.map((tool, i) => <li key={i} className="text-muted-foreground">• {tool}</li>)}
          </ul>
        </div>
      </section>

      {/* Professional vs Home */}
      <section id="professional" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.professionalTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">🏪 Professional Grooming</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-primary mb-2">Pros:</h4>
              <ul className="space-y-1 text-sm">
                {c.professionalPros.map((p, i) => <li key={i}>✅ {p}</li>)}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-destructive mb-2">Cons:</h4>
              <ul className="space-y-1 text-sm">
                {c.professionalCons.map((p, i) => <li key={i}>❌ {p}</li>)}
              </ul>
            </div>
            <div className="bg-muted p-3 rounded-lg text-sm">
              <strong>Costs:</strong><br/>
              {c.professionalCosts.small}<br/>
              {c.professionalCosts.medium}<br/>
              {c.professionalCosts.large}
            </div>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">🏠 Home Grooming</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-primary mb-2">Pros:</h4>
              <ul className="space-y-1 text-sm">
                {c.homePros.map((p, i) => <li key={i}>✅ {p}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-destructive mb-2">Cons:</h4>
              <ul className="space-y-1 text-sm">
                {c.homeCons.map((p, i) => <li key={i}>❌ {p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.scheduleTitle}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">📅 Daily</h3>
            <ul className="text-sm space-y-1">
              {c.scheduleDaily.map((i, idx) => <li key={idx}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">📅 Weekly</h3>
            <ul className="text-sm space-y-1">
              {c.scheduleWeekly.map((i, idx) => <li key={idx}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">📅 Bi-Weekly</h3>
            <ul className="text-sm space-y-1">
              {c.scheduleBiweekly.map((i, idx) => <li key={idx}>• {i}</li>)}
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">📅 Monthly</h3>
            <ul className="text-sm space-y-1">
              {c.scheduleMonthly.map((i, idx) => <li key={idx}>• {i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {c.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-4">
              <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <div className="bg-primary/10 p-8 rounded-2xl text-center mb-8">
        <h2 className="text-2xl font-bold mb-3">{c.ctaTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.ctaText}</p>
        <Button asChild size="lg">
          <Link to="/locations">Find Services Near You</Link>
        </Button>
      </div>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

import { Language } from '@/lib/translations';

export const getEmergencyPreventionGuideContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Pet Emergency Prevention Malaysia: 15 Tips to Avoid Vet Emergencies",
      metaDescription: "Prevent pet emergencies in Malaysia. 15 proven strategies: pet-proof home, prevent heatstroke, avoid poisons, secure fencing. Save money & protect your pet.",
      category: "Prevention",
      title: "Pet Emergency Prevention: 15 Ways to Avoid Costly Vet Emergencies in Malaysia",
      date: "January 1, 2025",
      readTime: "12 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroImageAlt: "Happy healthy dog and cat in safe pet-proofed Malaysian home",
      heroImageCaption: "60-70% of pet emergencies are preventable with proper precautions",
      
      tldr: [
        "60-70% of emergencies are preventable with proper precautions",
        "Top preventable emergencies: Heatstroke, poisoning, road accidents, foreign object ingestion",
        "One-time investment: Pet-proofing costs RM 200-500 vs. RM 1,000-8,000 per emergency",
        "Simple changes = huge impact: Window screens, secure fencing, removing toxic plants",
        "Prevention ROI: Preventing ONE emergency pays for years of prevention efforts"
      ],
      
      tocItems: [
        { id: "climate", title: "1. Climate Management (Heatstroke)" },
        { id: "poison-proof", title: "2. Poison-Proof Your Home" },
        { id: "secure-property", title: "3. Secure Your Property" },
        { id: "windows", title: "4. Window/Balcony Safety" },
        { id: "toys", title: "5. Toy and Chew Safety" },
        { id: "prevention-roi", title: "Prevention ROI: The Numbers" },
        { id: "faqs", title: "Frequently Asked Questions" }
      ],
      
      climateTitle: "1. Climate Management (Heatstroke Prevention)",
      climateIntro: "Heatstroke is among the <strong>top 3 preventable pet deaths</strong> in Malaysia.",
      preventionMeasures: "✅ Prevention Measures:",
      preventionItems: ["Walk ONLY before 8 AM or after 7 PM", "24/7 AC for high-risk breeds (23-25°C)", "Never leave in car (even with windows cracked)", "Constant access to fresh, cool water", "Limit outdoor time 11 AM-4 PM"],
      costComparison: "💰 Cost Comparison:",
      preventionCost: "Prevention: RM 100-300/month (AC)",
      emergencyCost: "Heatstroke Emergency: RM 800-3,000",
      learnMoreHeatstroke: "Learn more in our",
      heatstrokeGuideLink: "Heatstroke Prevention Guide",
      
      poisonTitle: "2. Poison-Proof Your Home",
      poisonIntro: "Poisoning = 8-12% of emergencies, <strong>80%+ preventable</strong>.",
      poisonCategories: [
        { emoji: "💊", title: "Medications", items: ["Store in locked cabinets", "Never leave on counters", "Dispose properly"] },
        { emoji: "🍫", title: "Foods", items: ["Chocolate out of reach", "Xylitol-free peanut butter", "Secure trash cans"] },
        { emoji: "🌿", title: "Plants", items: ["Remove lilies (deadly to cats)", "Remove sago palm", "Remove oleander"] }
      ],
      poisonCost: "Cost:",
      poisonCostDesc: "RM 50-200 (secure storage) vs. RM 600-3,500 (poisoning emergency)",
      
      secureTitle: "3. Secure Your Property",
      secureIntro: "Road accidents = <strong>40-50% of trauma emergencies</strong> in urban Malaysia.",
      secureCategories: [
        { emoji: "🏠", title: "Fencing/Gates", items: ["Check weekly for holes", "Height: 1.5-2m for dogs", "Auto-closing gates"] },
        { emoji: "🐕", title: "Leash Discipline", items: ["ALWAYS leash near roads", "Well-fitted collar", "Reflective gear for night"] }
      ],
      
      windowsTitle: "4. Window/Balcony Safety (High-Rise Syndrome)",
      windowsIntro: "High-rise falls = <strong>15-20% of cat emergencies</strong> in Malaysian cities.",
      windowsPrevention: "Prevention:",
      windowsItems: ["Install window screens/grilles on ALL windows cats can access", "Cat-proof balcony netting (floor-to-ceiling)", "Never leave windows open unsupervised"],
      windowsCost: "Cost:",
      windowsCostDesc: "RM 300-1,500 (screens) vs. RM 2,000-6,000 (fall injury)",
      
      toysTitle: "5. Toy and Chew Safety",
      toysIntro: "Foreign objects requiring surgery = <strong>5-8% of emergencies</strong>.",
      safeToys: "✅ Safe Toys:",
      safeToysItems: ["Size-appropriate (too big to swallow)", "Durable materials (Kong-brand)", "Inspect regularly, discard damaged"],
      neverGive: "❌ NEVER Give:",
      neverGiveItems: ["Cooked bones (splinter)", "Corn cobs", "Small rawhide pieces", "Sticks"],
      
      roiTitle: "Prevention ROI: The Numbers",
      roiTableHeaders: ["Emergency Type", "Cost (RM)"],
      roiTableRows: [
        { type: "Heatstroke", cost: "800-3,000" },
        { type: "Poisoning", cost: "600-3,500" },
        { type: "Foreign object surgery", cost: "2,500-7,000" },
        { type: "Road accident", cost: "1,500-6,000" }
      ],
      roiInsightTitle: "Key Insight:",
      roiInsightDesc: "Preventing just ONE major emergency = pays for 1-2 years of prevention. Prevention ROI = 200-400% over pet's lifetime.",
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "Isn't prevention expensive? I can't afford all these measures.", a: "Start with high-impact, low-cost prevention: 1) Walk only during cool hours (free), 2) Remove toxic foods/plants (RM 50), 3) Secure gates (RM 200-500), 4) Supervise outdoor time (free). One prevented emergency (RM 2,000-5,000) pays for ALL prevention measures." },
        { q: "My pet has never had an emergency. Do I really need to prevention-proof?", a: "Yes. 'It's never happened' doesn't mean it won't. 70% of emergencies are first-time incidents. Prevention is implemented BEFORE you need it." },
        { q: "Are window screens really necessary for cats? Mine has never fallen.", a: "High-rise syndrome typically happens to cats with NO prior history. Cats miscalculate jumps after birds/insects. Window screens (RM 300-800 one-time) = life-saving prevention." }
      ],
      
      conclusionTitle: "Conclusion: An Ounce of Prevention",
      startTodayTitle: "Start Today - Priority Checklist:",
      startTodayItems: ["Adjust walking schedule (cool hours only)", "Remove/secure toxic substances", "Install window screens (if cats)", "Check fence/gates", "Save emergency vet contact in phone"],
      finalNote: "You can't prevent every emergency, but you can prevent most.",
      
      relatedArticles: [
        { title: "Heatstroke Guide", description: "Prevent & treat heatstroke" },
        { title: "Pet Poisons Guide", description: "Complete poison list" },
        { title: "Pet Insurance Guide", description: "Financial prevention" }
      ]
    },
    ms: {
      metaTitle: "Pencegahan Kecemasan Haiwan Peliharaan Malaysia: 15 Tips Elak Kecemasan Vet",
      metaDescription: "Cegah kecemasan haiwan peliharaan di Malaysia. 15 strategi terbukti: rumah selamat untuk haiwan, cegah haba melampau, elak racun, pagar selamat.",
      category: "Pencegahan",
      title: "Pencegahan Kecemasan Haiwan: 15 Cara Elak Kecemasan Vet Mahal di Malaysia",
      date: "1 Januari 2025",
      readTime: "12 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroImageAlt: "Anjing dan kucing sihat gembira dalam rumah Malaysia yang selamat untuk haiwan",
      heroImageCaption: "60-70% kecemasan haiwan boleh dicegah dengan langkah berjaga-jaga yang betul",
      
      tldr: [
        "60-70% kecemasan boleh dicegah dengan langkah berjaga-jaga yang betul",
        "Kecemasan boleh dicegah teratas: Haba melampau, keracunan, kemalangan jalan raya, penelanan objek asing",
        "Pelaburan sekali: Kos selamat haiwan RM 200-500 vs. RM 1,000-8,000 setiap kecemasan",
        "Perubahan mudah = impak besar: Skrin tingkap, pagar selamat, buang tumbuhan beracun",
        "ROI Pencegahan: Mencegah SATU kecemasan membayar bertahun-tahun usaha pencegahan"
      ],
      
      tocItems: [
        { id: "climate", title: "1. Pengurusan Iklim (Haba Melampau)" },
        { id: "poison-proof", title: "2. Rumah Bebas Racun" },
        { id: "secure-property", title: "3. Kawasan Harta yang Selamat" },
        { id: "windows", title: "4. Keselamatan Tingkap/Balkoni" },
        { id: "toys", title: "5. Keselamatan Mainan dan Kunyah" },
        { id: "prevention-roi", title: "ROI Pencegahan: Angka-angka" },
        { id: "faqs", title: "Soalan Lazim" }
      ],
      
      climateTitle: "1. Pengurusan Iklim (Pencegahan Haba Melampau)",
      climateIntro: "Haba melampau adalah antara <strong>3 kematian haiwan yang boleh dicegah teratas</strong> di Malaysia.",
      preventionMeasures: "✅ Langkah Pencegahan:",
      preventionItems: ["Jalan HANYA sebelum 8 PG atau selepas 7 MLM", "AC 24/7 untuk baka berisiko tinggi (23-25°C)", "Jangan tinggalkan dalam kereta (walaupun tingkap dibuka)", "Akses berterusan kepada air segar, sejuk", "Hadkan masa luar 11 PG-4 PTG"],
      costComparison: "💰 Perbandingan Kos:",
      preventionCost: "Pencegahan: RM 100-300/bulan (AC)",
      emergencyCost: "Kecemasan Haba Melampau: RM 800-3,000",
      learnMoreHeatstroke: "Ketahui lebih lanjut dalam",
      heatstrokeGuideLink: "Panduan Pencegahan Haba Melampau",
      
      poisonTitle: "2. Rumah Bebas Racun",
      poisonIntro: "Keracunan = 8-12% kecemasan, <strong>80%+ boleh dicegah</strong>.",
      poisonCategories: [
        { emoji: "💊", title: "Ubat", items: ["Simpan dalam kabinet berkunci", "Jangan tinggalkan di atas meja", "Buang dengan betul"] },
        { emoji: "🍫", title: "Makanan", items: ["Coklat di luar jangkauan", "Mentega kacang bebas xylitol", "Tong sampah selamat"] },
        { emoji: "🌿", title: "Tumbuhan", items: ["Buang bunga lili (mematikan untuk kucing)", "Buang sago palm", "Buang oleander"] }
      ],
      poisonCost: "Kos:",
      poisonCostDesc: "RM 50-200 (simpanan selamat) vs. RM 600-3,500 (kecemasan keracunan)",
      
      secureTitle: "3. Kawasan Harta yang Selamat",
      secureIntro: "Kemalangan jalan raya = <strong>40-50% kecemasan trauma</strong> di bandar Malaysia.",
      secureCategories: [
        { emoji: "🏠", title: "Pagar/Pintu Pagar", items: ["Semak setiap minggu untuk lubang", "Ketinggian: 1.5-2m untuk anjing", "Pintu pagar auto-tutup"] },
        { emoji: "🐕", title: "Disiplin Tali Leher", items: ["SENTIASA tali leher berhampiran jalan", "Kolar yang sesuai", "Peralatan reflektif untuk malam"] }
      ],
      
      windowsTitle: "4. Keselamatan Tingkap/Balkoni (Sindrom Tingkat Tinggi)",
      windowsIntro: "Jatuh tingkat tinggi = <strong>15-20% kecemasan kucing</strong> di bandar Malaysia.",
      windowsPrevention: "Pencegahan:",
      windowsItems: ["Pasang skrin/gril tingkap pada SEMUA tingkap yang kucing boleh akses", "Jaring balkoni selamat kucing (lantai ke siling)", "Jangan biarkan tingkap terbuka tanpa pengawasan"],
      windowsCost: "Kos:",
      windowsCostDesc: "RM 300-1,500 (skrin) vs. RM 2,000-6,000 (kecederaan jatuh)",
      
      toysTitle: "5. Keselamatan Mainan dan Kunyah",
      toysIntro: "Objek asing yang memerlukan pembedahan = <strong>5-8% kecemasan</strong>.",
      safeToys: "✅ Mainan Selamat:",
      safeToysItems: ["Saiz sesuai (terlalu besar untuk ditelan)", "Bahan tahan lama (jenama Kong)", "Periksa kerap, buang yang rosak"],
      neverGive: "❌ JANGAN Beri:",
      neverGiveItems: ["Tulang masak (pecah)", "Bonggol jagung", "Kulit mentah kecil", "Ranting"],
      
      roiTitle: "ROI Pencegahan: Angka-angka",
      roiTableHeaders: ["Jenis Kecemasan", "Kos (RM)"],
      roiTableRows: [
        { type: "Haba Melampau", cost: "800-3,000" },
        { type: "Keracunan", cost: "600-3,500" },
        { type: "Pembedahan objek asing", cost: "2,500-7,000" },
        { type: "Kemalangan jalan raya", cost: "1,500-6,000" }
      ],
      roiInsightTitle: "Wawasan Utama:",
      roiInsightDesc: "Mencegah hanya SATU kecemasan besar = membayar 1-2 tahun pencegahan. ROI Pencegahan = 200-400% sepanjang hayat haiwan.",
      
      faqTitle: "Soalan Lazim",
      faqs: [
        { q: "Bukankah pencegahan mahal? Saya tidak mampu semua langkah ini.", a: "Mulakan dengan pencegahan impak tinggi, kos rendah: 1) Jalan hanya waktu sejuk (percuma), 2) Buang makanan/tumbuhan beracun (RM 50), 3) Pintu pagar selamat (RM 200-500), 4) Pantau masa luar (percuma). Satu kecemasan yang dicegah (RM 2,000-5,000) membayar SEMUA langkah pencegahan." },
        { q: "Haiwan saya tidak pernah mengalami kecemasan. Adakah saya benar-benar perlu pencegahan?", a: "Ya. 'Tidak pernah berlaku' tidak bermakna tidak akan berlaku. 70% kecemasan adalah insiden kali pertama. Pencegahan dilaksanakan SEBELUM anda memerlukannya." },
        { q: "Adakah skrin tingkap benar-benar diperlukan untuk kucing? Milik saya tidak pernah jatuh.", a: "Sindrom tingkat tinggi biasanya berlaku pada kucing TANPA sejarah sebelumnya. Kucing salah kira lompatan mengejar burung/serangga. Skrin tingkap (RM 300-800 sekali) = pencegahan menyelamatkan nyawa." }
      ],
      
      conclusionTitle: "Kesimpulan: Sedikit Pencegahan",
      startTodayTitle: "Mula Hari Ini - Senarai Semak Keutamaan:",
      startTodayItems: ["Sesuaikan jadual berjalan (waktu sejuk sahaja)", "Buang/selamatkan bahan beracun", "Pasang skrin tingkap (jika ada kucing)", "Semak pagar/pintu pagar", "Simpan kenalan vet kecemasan dalam telefon"],
      finalNote: "Anda tidak boleh mencegah setiap kecemasan, tetapi anda boleh mencegah kebanyakannya.",
      
      relatedArticles: [
        { title: "Panduan Haba Melampau", description: "Cegah & rawat haba melampau" },
        { title: "Panduan Racun Haiwan", description: "Senarai racun lengkap" },
        { title: "Panduan Insurans Haiwan", description: "Pencegahan kewangan" }
      ]
    },
    zh: {
      metaTitle: "马来西亚宠物紧急情况预防：避免紧急兽医的15个技巧",
      metaDescription: "在马来西亚预防宠物紧急情况。15个经过验证的策略：宠物安全家居、预防中暑、避免毒物、安全围栏。省钱并保护您的宠物。",
      category: "预防",
      title: "宠物紧急情况预防：在马来西亚避免昂贵兽医急诊的15种方法",
      date: "2025年1月1日",
      readTime: "12分钟阅读",
      reviewedBy: "由马来西亚执照兽医审核",
      heroImageAlt: "快乐健康的狗和猫在安全的马来西亚宠物安全家中",
      heroImageCaption: "通过适当的预防措施，60-70%的宠物紧急情况是可以预防的",
      
      tldr: [
        "通过适当的预防措施，60-70%的紧急情况是可以预防的",
        "可预防的主要紧急情况：中暑、中毒、交通事故、异物吞入",
        "一次性投资：宠物安全费用RM 200-500 vs. 每次紧急情况RM 1,000-8,000",
        "简单改变 = 巨大影响：窗户纱窗、安全围栏、移除有毒植物",
        "预防投资回报：预防一次紧急情况可以支付多年的预防努力"
      ],
      
      tocItems: [
        { id: "climate", title: "1. 气候管理（中暑）" },
        { id: "poison-proof", title: "2. 无毒家居" },
        { id: "secure-property", title: "3. 安全您的房产" },
        { id: "windows", title: "4. 窗户/阳台安全" },
        { id: "toys", title: "5. 玩具和咀嚼物安全" },
        { id: "prevention-roi", title: "预防投资回报：数字" },
        { id: "faqs", title: "常见问题" }
      ],
      
      climateTitle: "1. 气候管理（中暑预防）",
      climateIntro: "中暑是马来西亚<strong>可预防的三大宠物死亡原因</strong>之一。",
      preventionMeasures: "✅ 预防措施：",
      preventionItems: ["仅在早上8点前或晚上7点后散步", "高风险品种24/7空调（23-25°C）", "永远不要留在车里（即使窗户开着）", "持续获得新鲜、凉爽的水", "限制上午11点-下午4点的户外时间"],
      costComparison: "💰 费用比较：",
      preventionCost: "预防：RM 100-300/月（空调）",
      emergencyCost: "中暑急诊：RM 800-3,000",
      learnMoreHeatstroke: "在我们的",
      heatstrokeGuideLink: "中暑预防指南",
      
      poisonTitle: "2. 无毒家居",
      poisonIntro: "中毒 = 8-12%的紧急情况，<strong>80%以上可预防</strong>。",
      poisonCategories: [
        { emoji: "💊", title: "药物", items: ["存放在上锁的柜子里", "不要放在台面上", "正确处理"] },
        { emoji: "🍫", title: "食物", items: ["巧克力放在够不到的地方", "不含木糖醇的花生酱", "安全的垃圾桶"] },
        { emoji: "🌿", title: "植物", items: ["移除百合花（对猫致命）", "移除苏铁", "移除夹竹桃"] }
      ],
      poisonCost: "费用：",
      poisonCostDesc: "RM 50-200（安全存储）vs. RM 600-3,500（中毒急诊）",
      
      secureTitle: "3. 安全您的房产",
      secureIntro: "交通事故 = 马来西亚城市<strong>40-50%的创伤急诊</strong>。",
      secureCategories: [
        { emoji: "🏠", title: "围栏/门", items: ["每周检查是否有洞", "高度：狗1.5-2米", "自动关闭门"] },
        { emoji: "🐕", title: "牵引带纪律", items: ["靠近道路时始终系牵引带", "合适的项圈", "夜间反光装备"] }
      ],
      
      windowsTitle: "4. 窗户/阳台安全（高层综合症）",
      windowsIntro: "高层跌落 = 马来西亚城市<strong>15-20%的猫紧急情况</strong>。",
      windowsPrevention: "预防：",
      windowsItems: ["在猫可以接触的所有窗户上安装纱窗/护栏", "猫安全阳台网（从地板到天花板）", "不要无人看管时打开窗户"],
      windowsCost: "费用：",
      windowsCostDesc: "RM 300-1,500（纱窗）vs. RM 2,000-6,000（跌落伤害）",
      
      toysTitle: "5. 玩具和咀嚼物安全",
      toysIntro: "需要手术的异物 = <strong>5-8%的紧急情况</strong>。",
      safeToys: "✅ 安全玩具：",
      safeToysItems: ["尺寸合适（太大无法吞咽）", "耐用材料（Kong品牌）", "定期检查，丢弃损坏的"],
      neverGive: "❌ 永远不要给：",
      neverGiveItems: ["熟骨头（会碎裂）", "玉米芯", "小块生皮", "树枝"],
      
      roiTitle: "预防投资回报：数字",
      roiTableHeaders: ["紧急情况类型", "费用（RM）"],
      roiTableRows: [
        { type: "中暑", cost: "800-3,000" },
        { type: "中毒", cost: "600-3,500" },
        { type: "异物手术", cost: "2,500-7,000" },
        { type: "交通事故", cost: "1,500-6,000" }
      ],
      roiInsightTitle: "关键洞察：",
      roiInsightDesc: "只预防一次重大紧急情况 = 支付1-2年的预防费用。预防投资回报 = 宠物一生200-400%。",
      
      faqTitle: "常见问题",
      faqs: [
        { q: "预防不是很贵吗？我负担不起所有这些措施。", a: "从高影响、低成本的预防开始：1）只在凉爽时段散步（免费），2）移除有毒食物/植物（RM 50），3）安全门（RM 200-500），4）监督户外时间（免费）。一次被预防的紧急情况（RM 2,000-5,000）支付所有预防措施。" },
        { q: "我的宠物从未发生过紧急情况。我真的需要预防吗？", a: "是的。"从未发生"并不意味着不会发生。70%的紧急情况是首次事件。预防是在您需要之前实施的。" },
        { q: "窗户纱窗对猫真的有必要吗？我的猫从未掉下去过。", a: "高层综合症通常发生在没有先前历史的猫身上。猫在追逐鸟/昆虫时会错误估计跳跃。窗户纱窗（RM 300-800一次性）= 拯救生命的预防。" }
      ],
      
      conclusionTitle: "结论：一盎司预防",
      startTodayTitle: "今天开始 - 优先清单：",
      startTodayItems: ["调整散步时间（仅凉爽时段）", "移除/固定有毒物质", "安装窗户纱窗（如果有猫）", "检查围栏/门", "在手机中保存紧急兽医联系方式"],
      finalNote: "你不能预防每一个紧急情况，但你可以预防大多数。",
      
      relatedArticles: [
        { title: "中暑指南", description: "预防和治疗中暑" },
        { title: "宠物毒物指南", description: "完整毒物清单" },
        { title: "宠物保险指南", description: "财务预防" }
      ]
    }
  };
  
  return content[language] || content.en;
};

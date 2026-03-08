import { Language } from '@/lib/translations';

export const getPostEmergencyCareGuideContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Post-Emergency Pet Care Malaysia: Recovery, Medications & Follow-Up",
      metaDescription: "Complete post-emergency pet care guide for Malaysia. Medication schedules, wound care, activity restriction, warning signs, follow-up visits. Ensure full recovery.",
      category: "Recovery",
      title: "Post-Emergency Pet Care: Complete Recovery & Follow-Up Guide",
      date: "January 1, 2025",
      readTime: "10 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroImageAlt: "Happy dog recovering at home with cone collar and bandaged paw",
      heroImageCaption: "Proper at-home care is crucial for complete recovery after emergency treatment",
      
      tldr: [
        "Medication compliance is critical: Stopping antibiotics early = infection returns",
        "Activity restriction prevents complications: Too much movement = wounds open",
        "Warning signs require immediate vet return: Fever, vomiting, not eating >24h",
        "Follow-up appointments are NOT optional: Ensure proper healing",
        "Recovery timelines: Minor emergencies 5-7 days, major surgery 2-6 weeks"
      ],
      
      tocItems: [
        { id: "discharge", title: "Understanding Discharge Instructions" },
        { id: "medications", title: "Medication Management" },
        { id: "wound-care", title: "Wound Care & E-Collar" },
        { id: "activity", title: "Activity Restriction" },
        { id: "feeding", title: "Feeding After Treatment" },
        { id: "warning-signs", title: "Warning Signs to Watch" },
        { id: "follow-up", title: "Follow-Up Appointments" },
        { id: "faqs", title: "Frequently Asked Questions" }
      ],
      
      dischargeTitle: "Understanding Discharge Instructions",
      dischargeIntro: "According to veterinary data, <strong>20-30% of pets experience setbacks</strong> due to inadequate post-emergency care—often from medication errors or premature activity.",
      shouldReceiveTitle: "You Should Receive:",
      shouldReceiveItems: ["Written discharge summary (diagnosis, treatment, medications)", "Medications with dosing instructions", "Activity restrictions and feeding instructions", "Warning signs to watch for", "Follow-up appointment date"],
      askBeforeLeaving: "If anything is unclear, ASK before leaving the clinic.",
      
      medicationsTitle: "Medication Management",
      antibiotics: { title: "Antibiotics", desc: "Complete ENTIRE course (7-14 days typically)", warning: "❌ Stopping early = bacteria returns stronger" },
      painMeds: { title: "Pain Medications", desc: "Give as prescribed, even if pet seems better", common: "Common: Meloxicam, tramadol, gabapentin" },
      medicationTip: "<strong>Pro Tip:</strong> Give treats immediately after medication for positive association.",
      
      woundCareTitle: "Wound Care & E-Collar Compliance",
      normalSigns: "Normal Incision Signs:",
      normalSignsItems: ["Slight redness at edges (first 48 hours)", "Mild swelling", "Dry incision, stitches intact"],
      redFlags: "Red Flags (Call Vet):",
      redFlagsItems: ["Excessive redness, swelling", "Discharge (pus, blood)", "Incision opening/gaping", "Bad odor"],
      eCollarDuration: "<strong>E-Collar Duration:</strong> Typically 10-14 days until stitches removed. Necessary evil for healing!",
      
      activityTitle: "Activity Restriction: The Hardest Part",
      activityWarning: "⚠️ Too much activity causes: Surgical incisions to open, internal stitches to tear, fractures to heal poorly, increased pain",
      activityLevels: [
        { level: "Level 1: Strict Rest (Major Surgery)", desc: "Crate rest, bathroom breaks only on leash, no stairs/jumping. Duration: 2-4 weeks" },
        { level: "Level 2: Restricted Activity", desc: "Short leash walks only (5-10 min), no running/playing. Duration: 1-3 weeks" }
      ],
      
      feedingTitle: "Feeding After Treatment",
      feedingTips: ["Start with small, bland meals", "Follow vet's specific dietary instructions", "Ensure fresh water is always available", "Monitor appetite—loss of appetite >24h is concerning"],
      
      warningTitle: "Warning Signs: When to Return to Vet",
      emergencyReturn: "🚨 EMERGENCY - Return Immediately:",
      emergencyItems: ["Difficulty breathing", "Collapse, extreme weakness", "Seizures", "Uncontrolled bleeding", "Surgical wound opens", "Not urinating >12-24 hours"],
      callVetGuidance: "⚠️ Call Vet for Guidance:",
      callVetItems: ["Not eating for 24-48 hours", "Vomiting/diarrhea (1-2 episodes)", "Increased pain", "Incision redness worsening"],
      
      followUpTitle: "Follow-Up Appointments: Don't Skip",
      whyCriticalTitle: "Why They're Critical:",
      whyCriticalItems: ["Ensure proper healing (check incisions, assess pain)", "Remove stitches/staples (10-14 days post-surgery)", "Adjust treatment plan if needed", "Address complications early"],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "My dog seems normal 3 days after surgery. Can I let him play?", a: "NO. 'Seems normal' doesn't mean healed. Internal stitches take 10-14 days. Premature activity causes incisions to open. Follow restrictions for FULL prescribed duration." },
        { q: "Can I give half the pain medication dose if my pet seems sleepy?", a: "No—don't adjust without vet approval. Sleepiness is expected. If excessive, call vet. Under-dosing causes unnecessary suffering." },
        { q: "My cat won't eat after 2 days home. Should I worry?", a: "Yes—call vet immediately. Cats that don't eat for 24-48 hours risk hepatic lipidosis (fatty liver disease). Don't wait." }
      ],
      
      relatedArticles: [
        { title: "Complete Emergency Guide", description: "Full emergency preparedness" },
        { title: "Emergency Transport Guide", description: "Safe transport techniques" },
        { title: "Pet Insurance Guide", description: "Cover treatment costs" },
        { title: "Prevention Guide", description: "Prevent future emergencies" }
      ]
    },
    ms: {
      metaTitle: "Penjagaan Haiwan Selepas Kecemasan Malaysia: Pemulihan, Ubat & Susulan",
      metaDescription: "Panduan lengkap penjagaan haiwan selepas kecemasan untuk Malaysia. Jadual ubat, penjagaan luka, sekatan aktiviti, tanda amaran, lawatan susulan.",
      category: "Pemulihan",
      title: "Penjagaan Haiwan Selepas Kecemasan: Panduan Pemulihan & Susulan Lengkap",
      date: "1 Januari 2025",
      readTime: "10 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroImageAlt: "Anjing gembira pulih di rumah dengan kolar kon dan kaki dibalut",
      heroImageCaption: "Penjagaan di rumah yang betul adalah penting untuk pemulihan sepenuhnya selepas rawatan kecemasan",
      
      tldr: [
        "Pematuhan ubat adalah kritikal: Berhenti antibiotik awal = jangkitan kembali",
        "Sekatan aktiviti mencegah komplikasi: Terlalu banyak pergerakan = luka terbuka",
        "Tanda amaran memerlukan pulang segera ke vet: Demam, muntah, tidak makan >24j",
        "Temu janji susulan BUKAN pilihan: Pastikan penyembuhan yang betul",
        "Tempoh pemulihan: Kecemasan kecil 5-7 hari, pembedahan besar 2-6 minggu"
      ],
      
      tocItems: [
        { id: "discharge", title: "Memahami Arahan Pelepasan" },
        { id: "medications", title: "Pengurusan Ubat" },
        { id: "wound-care", title: "Penjagaan Luka & Kolar-E" },
        { id: "activity", title: "Sekatan Aktiviti" },
        { id: "feeding", title: "Pemakanan Selepas Rawatan" },
        { id: "warning-signs", title: "Tanda Amaran untuk Diperhatikan" },
        { id: "follow-up", title: "Temu Janji Susulan" },
        { id: "faqs", title: "Soalan Lazim" }
      ],
      
      dischargeTitle: "Memahami Arahan Pelepasan",
      dischargeIntro: "Menurut data veterinar, <strong>20-30% haiwan mengalami kemunduran</strong> disebabkan penjagaan selepas kecemasan yang tidak mencukupi—selalunya dari kesilapan ubat atau aktiviti pramatang.",
      shouldReceiveTitle: "Anda Patut Terima:",
      shouldReceiveItems: ["Ringkasan pelepasan bertulis (diagnosis, rawatan, ubat)", "Ubat dengan arahan dos", "Sekatan aktiviti dan arahan pemakanan", "Tanda amaran untuk diperhatikan", "Tarikh temu janji susulan"],
      askBeforeLeaving: "Jika ada yang tidak jelas, TANYA sebelum meninggalkan klinik.",
      
      medicationsTitle: "Pengurusan Ubat",
      antibiotics: { title: "Antibiotik", desc: "Lengkapkan KESELURUHAN kursus (biasanya 7-14 hari)", warning: "❌ Berhenti awal = bakteria kembali lebih kuat" },
      painMeds: { title: "Ubat Sakit", desc: "Beri seperti yang ditetapkan, walaupun haiwan kelihatan lebih baik", common: "Biasa: Meloxicam, tramadol, gabapentin" },
      medicationTip: "<strong>Tip Pro:</strong> Beri snek sejurus selepas ubat untuk persatuan positif.",
      
      woundCareTitle: "Penjagaan Luka & Pematuhan Kolar-E",
      normalSigns: "Tanda Hirisan Normal:",
      normalSignsItems: ["Sedikit kemerahan di tepi (48 jam pertama)", "Bengkak ringan", "Hirisan kering, jahitan utuh"],
      redFlags: "Tanda Bahaya (Hubungi Vet):",
      redFlagsItems: ["Kemerahan, bengkak berlebihan", "Keluar (nanah, darah)", "Hirisan terbuka/menganga", "Bau busuk"],
      eCollarDuration: "<strong>Tempoh Kolar-E:</strong> Biasanya 10-14 hari sehingga jahitan dibuang. Keburukan yang perlu untuk penyembuhan!",
      
      activityTitle: "Sekatan Aktiviti: Bahagian Paling Sukar",
      activityWarning: "⚠️ Terlalu banyak aktiviti menyebabkan: Hirisan pembedahan terbuka, jahitan dalaman koyak, patah sembuh teruk, kesakitan meningkat",
      activityLevels: [
        { level: "Tahap 1: Rehat Ketat (Pembedahan Besar)", desc: "Rehat sangkar, rehat tandas sahaja dengan tali, tiada tangga/lompat. Tempoh: 2-4 minggu" },
        { level: "Tahap 2: Aktiviti Terhad", desc: "Jalan pendek dengan tali sahaja (5-10 min), tiada berlari/bermain. Tempoh: 1-3 minggu" }
      ],
      
      feedingTitle: "Pemakanan Selepas Rawatan",
      feedingTips: ["Mula dengan makanan kecil, hambar", "Ikut arahan diet khusus vet", "Pastikan air segar sentiasa ada", "Pantau selera—hilang selera >24j adalah membimbangkan"],
      
      warningTitle: "Tanda Amaran: Bila Perlu Balik ke Vet",
      emergencyReturn: "🚨 KECEMASAN - Balik Segera:",
      emergencyItems: ["Kesukaran bernafas", "Pengsan, kelemahan melampau", "Sawan", "Pendarahan tidak terkawal", "Luka pembedahan terbuka", "Tidak kencing >12-24 jam"],
      callVetGuidance: "⚠️ Hubungi Vet untuk Panduan:",
      callVetItems: ["Tidak makan selama 24-48 jam", "Muntah/cirit-birit (1-2 episod)", "Kesakitan meningkat", "Kemerahan hirisan bertambah buruk"],
      
      followUpTitle: "Temu Janji Susulan: Jangan Langkau",
      whyCriticalTitle: "Mengapa Ia Kritikal:",
      whyCriticalItems: ["Pastikan penyembuhan yang betul (semak hirisan, nilai kesakitan)", "Buang jahitan/staples (10-14 hari selepas pembedahan)", "Sesuaikan pelan rawatan jika perlu", "Tangani komplikasi awal"],
      
      faqTitle: "Soalan Lazim",
      faqs: [
        { q: "Anjing saya kelihatan normal 3 hari selepas pembedahan. Bolehkah saya biarkan dia bermain?", a: "TIDAK. 'Kelihatan normal' tidak bermakna sembuh. Jahitan dalaman mengambil 10-14 hari. Aktiviti pramatang menyebabkan hirisan terbuka. Ikut sekatan untuk tempoh PENUH yang ditetapkan." },
        { q: "Bolehkah saya beri separuh dos ubat sakit jika haiwan saya kelihatan mengantuk?", a: "Tidak—jangan ubah tanpa kelulusan vet. Mengantuk adalah dijangkakan. Jika berlebihan, hubungi vet. Dos kurang menyebabkan penderitaan yang tidak perlu." },
        { q: "Kucing saya tidak mahu makan selepas 2 hari di rumah. Patutkah saya risau?", a: "Ya—hubungi vet segera. Kucing yang tidak makan selama 24-48 jam berisiko hepatic lipidosis (penyakit hati berlemak). Jangan tunggu." }
      ],
      
      relatedArticles: [
        { title: "Panduan Kecemasan Lengkap", description: "Kesediaan kecemasan penuh" },
        { title: "Panduan Pengangkutan Kecemasan", description: "Teknik pengangkutan selamat" },
        { title: "Panduan Insurans Haiwan", description: "Lindungi kos rawatan" },
        { title: "Panduan Pencegahan", description: "Cegah kecemasan masa depan" }
      ]
    },
    zh: {
      metaTitle: "马来西亚宠物紧急后护理：恢复、药物和随访",
      metaDescription: "马来西亚完整的宠物紧急后护理指南。药物时间表、伤口护理、活动限制、警告信号、随访就诊。确保完全康复。",
      category: "恢复",
      title: "宠物紧急后护理：完整的恢复和随访指南",
      date: "2025年1月1日",
      readTime: "10分钟阅读",
      reviewedBy: "由马来西亚执照兽医审核",
      heroImageAlt: "戴着锥形项圈和包扎爪子在家恢复的快乐狗",
      heroImageCaption: "适当的家庭护理对于紧急治疗后的完全恢复至关重要",
      
      tldr: [
        "药物依从性至关重要：过早停止抗生素 = 感染复发",
        "活动限制防止并发症：过多运动 = 伤口裂开",
        "警告信号需要立即返回兽医：发烧、呕吐、不吃>24小时",
        "随访预约不是可选的：确保正确愈合",
        "恢复时间：轻微急诊5-7天，大手术2-6周"
      ],
      
      tocItems: [
        { id: "discharge", title: "理解出院指示" },
        { id: "medications", title: "药物管理" },
        { id: "wound-care", title: "伤口护理和伊丽莎白圈" },
        { id: "activity", title: "活动限制" },
        { id: "feeding", title: "治疗后喂养" },
        { id: "warning-signs", title: "需要注意的警告信号" },
        { id: "follow-up", title: "随访预约" },
        { id: "faqs", title: "常见问题" }
      ],
      
      dischargeTitle: "理解出院指示",
      dischargeIntro: "根据兽医数据，<strong>20-30%的宠物经历挫折</strong>是由于紧急后护理不足——通常是药物错误或过早活动造成的。",
      shouldReceiveTitle: "您应该收到：",
      shouldReceiveItems: ["书面出院摘要（诊断、治疗、药物）", "带有剂量说明的药物", "活动限制和喂养指示", "需要注意的警告信号", "随访预约日期"],
      askBeforeLeaving: "如有任何不清楚的地方，离开诊所前请询问。",
      
      medicationsTitle: "药物管理",
      antibiotics: { title: "抗生素", desc: "完成整个疗程（通常7-14天）", warning: "❌ 过早停药 = 细菌更强地复发" },
      painMeds: { title: "止痛药", desc: "按处方服用，即使宠物看起来好转", common: "常见：美洛昔康、曲马多、加巴喷丁" },
      medicationTip: "<strong>专业提示：</strong>服药后立即给零食以建立积极联系。",
      
      woundCareTitle: "伤口护理和伊丽莎白圈依从性",
      normalSigns: "正常切口迹象：",
      normalSignsItems: ["边缘轻微发红（前48小时）", "轻度肿胀", "切口干燥，缝线完整"],
      redFlags: "危险信号（联系兽医）：",
      redFlagsItems: ["过度发红、肿胀", "分泌物（脓、血）", "切口裂开/张开", "异味"],
      eCollarDuration: "<strong>伊丽莎白圈使用时间：</strong>通常10-14天直到拆线。愈合的必要之恶！",
      
      activityTitle: "活动限制：最困难的部分",
      activityWarning: "⚠️ 过多活动导致：手术切口裂开、内部缝线撕裂、骨折愈合不良、疼痛加剧",
      activityLevels: [
        { level: "级别1：严格休息（大手术）", desc: "笼中休息，只能用牵引带上厕所，不能爬楼梯/跳跃。持续时间：2-4周" },
        { level: "级别2：限制活动", desc: "仅限短距离牵引带散步（5-10分钟），不能跑/玩。持续时间：1-3周" }
      ],
      
      feedingTitle: "治疗后喂养",
      feedingTips: ["从少量清淡食物开始", "遵循兽医的具体饮食指示", "确保新鲜水随时可用", "监测食欲——食欲不振>24小时令人担忧"],
      
      warningTitle: "警告信号：何时返回兽医",
      emergencyReturn: "🚨 紧急情况 - 立即返回：",
      emergencyItems: ["呼吸困难", "昏厥、极度虚弱", "癫痫", "无法控制的出血", "手术伤口裂开", "不排尿>12-24小时"],
      callVetGuidance: "⚠️ 咨询兽医指导：",
      callVetItems: ["24-48小时不吃东西", "呕吐/腹泻（1-2次）", "疼痛加剧", "切口发红恶化"],
      
      followUpTitle: "随访预约：不要跳过",
      whyCriticalTitle: "为什么很重要：",
      whyCriticalItems: ["确保正确愈合（检查切口、评估疼痛）", "拆除缝线/订书钉（手术后10-14天）", "必要时调整治疗计划", "及早处理并发症"],
      
      faqTitle: "常见问题",
      faqs: [
        { q: "我的狗手术后3天看起来正常。我可以让他玩吗？", a: "不行。"看起来正常"不意味着愈合。内部缝线需要10-14天。过早活动导致切口裂开。遵循完整规定时间的限制。" },
        { q: "如果我的宠物看起来昏昏欲睡，我可以给半剂止痛药吗？", a: "不行——未经兽医批准不要调整。嗜睡是预期的。如果过度，联系兽医。剂量不足会造成不必要的痛苦。" },
        { q: "我的猫回家2天后不吃东西。我应该担心吗？", a: "是的——立即联系兽医。24-48小时不吃东西的猫有肝脂肪变性（脂肪肝病）的风险。不要等待。" }
      ],
      
      relatedArticles: [
        { title: "完整急诊指南", description: "完整的急诊准备" },
        { title: "紧急运输指南", description: "安全运输技术" },
        { title: "宠物保险指南", description: "覆盖治疗费用" },
        { title: "预防指南", description: "预防未来的紧急情况" }
      ]
    }
  };
  
  return content[language] || content.en;
};

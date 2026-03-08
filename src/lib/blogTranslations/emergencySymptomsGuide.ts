import { Language } from '@/lib/translations';

export const getEmergencySymptomsGuideContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Pet Emergency Symptoms Every Malaysian Owner Must Know | 2025 Guide",
      metaDescription: "Learn the 9 critical pet emergency symptoms that require immediate vet attention in Malaysia. Know when to rush to 24-hour emergency care. Expert-verified guide.",
      category: "Emergency",
      title: "Pet Emergency Symptoms Every Malaysian Owner Must Know (2025 Guide)",
      date: "January 1, 2025",
      readTime: "8 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroImageAlt: "Alert dog looking at camera - pet emergency symptoms guide",
      heroImageCaption: "Recognizing emergency symptoms can save your pet's life",
      emergencyTitle: "Is This an Emergency?",
      emergencyText: "If your pet shows any of the 9 critical symptoms below, contact a 24-hour veterinary clinic immediately.",
      emergencyButton: "Find 24/7 Vet Now",
      tldr: [
        "Know the 9 critical emergency symptoms requiring immediate vet attention",
        "Emergency vets cost RM150-300 consultation plus treatment",
        "Keep 24-hour vet contacts saved in your phone",
        "Call ahead before rushing to emergency vet",
        "Time is critical: Some emergencies need treatment within 30-60 minutes"
      ],
      tocItems: [
        { id: "why-matters", title: "Why Recognizing Symptoms Matters" },
        { id: "9-symptoms", title: "9 Critical Emergency Symptoms" },
        { id: "decision-framework", title: "Emergency vs Wait Decision Framework" },
        { id: "preparation", title: "Preparing for Emergency Vet Visit" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      whyTitle: "Why Recognizing Pet Emergency Symptoms Matters in Malaysia",
      whyP1: "It's 2 AM in Petaling Jaya. Your dog suddenly starts vomiting blood. Your cat collapses and won't get up. In these terrifying moments, one question races through your mind: <strong>Is this a real emergency, or can it wait until morning?</strong>",
      whyP2: "Malaysia's tropical climate, urban hazards, and limited after-hours veterinary services create unique challenges. Unlike countries with abundant 24-hour hospitals, <strong>Malaysia has only 15-20 true 24/7 emergency vet facilities nationwide</strong>, mostly in Klang Valley.",
      keyStatLabel: "Key Statistic",
      keyStatValue: "60%+",
      keyStatDesc: "of pet emergencies occur outside regular business hours (9 AM-6 PM)",
      whyP3: "Emergency vet fees range from RM150-300 for consultation (vs RM35-80 regular). But delaying treatment can result in costs of RM5,000-20,000+ for advanced procedures, permanent damage, or losing your beloved pet.",
      symptomsTitle: "9 Critical Pet Emergency Symptoms Requiring Immediate Vet Attention",
      signsLabel: "Signs to Watch For:",
      causesLabel: "Common Causes in Malaysia:",
      timeSensitivityLabel: "Time Sensitivity:",
      symptoms: [
        {
          title: "Difficulty Breathing (Dyspnea)",
          emoji: "🫁",
          signs: ["Gasping for air with mouth open (especially cats)", "Blue or purple tongue/gums (cyanosis)", "Extended neck and elbows spread apart", "Rapid, shallow breathing (over 40 breaths/min)", "Wheezing, choking, or gurgling sounds"],
          causes: "Heatstroke, heart failure, airway obstruction, allergic reactions, respiratory infections",
          timeSensitivity: "CRITICAL—requires care within 15-30 minutes"
        },
        {
          title: "Severe Bleeding or Trauma",
          emoji: "🩸",
          signs: ["Bleeding that soaks through bandages quickly", "Blood spurting from wound (arterial)", "Hit by car/motorcycle", "Fall from height", "Dog/animal attack with puncture wounds"],
          causes: "Road accidents, falls, animal attacks",
          timeSensitivity: "HIGH—seek care within 30-60 minutes"
        },
        {
          title: "Persistent Vomiting or Diarrhea",
          emoji: "🤢",
          signs: ["Vomiting blood (red or coffee grounds)", "Bloody or black tarry diarrhea", "4+ vomiting episodes in 6 hours", "Projectile vomiting", "Distended, painful abdomen"],
          causes: "Food poisoning, parvovirus, GDV/bloat, poisoning",
          timeSensitivity: "VARIES—bloody vomit is critical (1-2 hours). GDV is immediately life-threatening"
        },
        {
          title: "Inability to Urinate or Defecate",
          emoji: "⚠️",
          signs: ["Straining with no/little urine produced", "Crying in pain when urinating", "Blood in urine", "Repeated trips to litter box with no results"],
          causes: "Urinary blockage (especially male cats)",
          timeSensitivity: "CRITICAL—requires care within 6-12 hours"
        },
        {
          title: "Sudden Collapse, Weakness, or Paralysis",
          emoji: "💔",
          signs: ["Collapse or fainting", "Sudden inability to stand/walk", "Dragging rear legs", "Loss of consciousness", "Extreme weakness"],
          causes: "Heart problems, internal bleeding, poisoning, stroke, spinal injuries",
          timeSensitivity: "CRITICAL—seek emergency care immediately"
        },
        {
          title: "Eye Injuries or Sudden Blindness",
          emoji: "👁️",
          signs: ["Eyeball protruding from socket", "Penetrating injury to eye", "Sudden blindness", "Severe squinting with discharge", "Cloudy or red eye"],
          causes: "Cat fights, sharp plants, construction debris, glaucoma",
          timeSensitivity: "HIGH—seek care within 1-2 hours to save vision"
        },
        {
          title: "Bloated or Rock-Hard Abdomen",
          emoji: "🎈",
          signs: ["Abdomen appears swollen, tight, drum-like", "Unproductive vomiting (trying but nothing comes)", "Excessive drooling", "Restlessness, pacing", "Pale gums"],
          causes: "GDV/Bloat—#1 emergency killer of large breed dogs",
          timeSensitivity: "IMMEDIATELY LIFE-THREATENING—surgery within 1-2 hours"
        },
        {
          title: "Suspected Poisoning",
          emoji: "☠️",
          signs: ["Sudden vomiting/diarrhea after eating something", "Drooling, foaming at mouth", "Tremors, seizures, muscle twitching", "Dilated or constricted pupils", "Weakness, collapse"],
          causes: "Rat bait, toad toxins, toxic plants, chocolate, xylitol, medications",
          timeSensitivity: "CRITICAL—antidotes work best within 1-2 hours"
        },
        {
          title: "Extreme Pain or Sudden Behavioral Changes",
          emoji: "😿",
          signs: ["Crying, whimpering continuously", "Aggressive when touched", "Hunched posture, reluctance to move", "Hiding and avoiding interaction", "Self-mutilation"],
          causes: "Internal injuries, organ failure, severe infections, pancreatitis",
          timeSensitivity: "HIGH—seek care within 1-3 hours"
        }
      ],
      decisionTitle: "How to Decide: Emergency Vet or Wait?",
      goEmergencyTitle: "GO TO EMERGENCY VET IMMEDIATELY",
      goEmergencyItems: ["Any difficulty breathing", "Unconsciousness or severe weakness", "Heavy bleeding that won't stop", "Suspected poisoning", "Inability to urinate (especially male cats)", "GDV/bloat symptoms", "Seizures >3 minutes or multiple seizures", "Severe trauma (hit by car, fall)", "Eye injuries"],
      canWaitTitle: "CAN LIKELY WAIT FOR REGULAR HOURS",
      canWaitItems: ["Single episode of vomiting/diarrhea with normal behavior", "Mild limping with normal activity", "Minor scratches or abrasions", "Mild sneezing or coughing", "Ear infections (unless severe head tilt)"],
      whenInDoubt: "<strong>When in doubt, ALWAYS call the emergency vet.</strong> They can help assess urgency over the phone and may provide critical first aid instructions while you're en route.",
      prepTitle: "Preparing for an Emergency Vet Visit",
      saveContactsTitle: "📱 Save These Emergency Contacts NOW",
      contacts: [
        { name: "Animal Medical Center (AMC)", location: "KL", phone: "+603-7982 9199" },
        { name: "Gasing Veterinary Hospital", location: "PJ", phone: "+603-7957 2030" },
        { name: "Starlight Veterinary Hospital", location: "Subang", phone: "+6012-691 4745" },
        { name: "Windsor Animal Hospital", location: "Shah Alam", phone: "+603-5191 1799" },
        { name: "St. Angel Animal Medical Centre", location: "KL", phone: "+603-4023 9299" },
      ],
      seeDirectoryText: "See our complete",
      seeDirectoryLink: "24-Hour Vet Directory Malaysia",
      seeDirectoryAfter: "for facilities in Penang, JB, Melaka, and more.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How do I know if my pet's vomiting is an emergency?", a: "Single episodes are usually not emergencies. Seek immediate care if: vomiting blood, multiple episodes (4+ in 6 hours), vomiting combined with lethargy/collapse, or inability to keep down water." },
        { q: "How much does emergency vet cost in Malaysia?", a: "Emergency consultation: RM150-300. Hospitalization: RM200-500/night. Surgery: RM2,000-10,000+. Most vets require RM500-2,000 deposit upfront." },
        { q: "Can I give my pet human pain medication?", a: "<strong>NO.</strong> Never give human medications (Panadol, aspirin, ibuprofen) to pets. These are highly toxic and can cause kidney failure, liver damage, or death." },
        { q: "Is heatstroke common in Malaysia?", a: "Yes, extremely common due to tropical climate. Signs: excessive panting, drooling, red gums, vomiting, collapse. Heatstroke requires immediate cooling and vet care within 30 minutes." },
      ],
      conclusionTitle: "Conclusion: Be Prepared, Act Quickly, Save Lives",
      conclusionP: "Recognizing pet emergency symptoms is a critical skill for every Malaysian pet owner. Your ability to identify true emergencies and act quickly can mean the difference between life and death for your beloved pet.",
      rememberTitle: "Remember:",
      rememberItems: [
        "Trust your instincts—if something feels wrong, call the emergency vet",
        "Time is critical—don't delay for life-threatening symptoms",
        "Save 24-hour vet contacts BEFORE an emergency happens",
        "Prepare an emergency kit and know the route to the nearest emergency vet"
      ],
      relatedArticles: [
        { title: "Complete Guide to Pet Emergency Treatment in Malaysia", description: "Comprehensive pillar guide covering all aspects of pet emergencies" },
        { title: "Heatstroke Emergency Guide", description: "Critical symptoms & treatment for Malaysia's climate" },
        { title: "Pet Emergency First Aid Guide", description: "Life-saving techniques you can do at home" },
        { title: "Pet Emergency Costs Guide", description: "What to expect for treatment costs" },
      ],
    },
    ms: {
      metaTitle: "Simptom Kecemasan Haiwan Peliharaan yang Setiap Pemilik Malaysia Mesti Tahu | Panduan 2025",
      metaDescription: "Pelajari 9 simptom kecemasan haiwan kritikal yang memerlukan perhatian vet segera di Malaysia. Ketahui bila perlu segera ke rawatan kecemasan 24 jam.",
      category: "Kecemasan",
      title: "Simptom Kecemasan Haiwan Peliharaan yang Setiap Pemilik Malaysia Mesti Tahu (Panduan 2025)",
      date: "1 Januari 2025",
      readTime: "8 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroImageAlt: "Anjing berjaga-jaga melihat kamera - panduan simptom kecemasan haiwan",
      heroImageCaption: "Mengenali simptom kecemasan boleh menyelamatkan nyawa haiwan peliharaan anda",
      emergencyTitle: "Adakah Ini Kecemasan?",
      emergencyText: "Jika haiwan peliharaan anda menunjukkan mana-mana 9 simptom kritikal di bawah, hubungi klinik veterinar 24 jam segera.",
      emergencyButton: "Cari Vet 24/7 Sekarang",
      tldr: [
        "Kenali 9 simptom kecemasan kritikal yang memerlukan perhatian vet segera",
        "Vet kecemasan kos RM150-300 konsultasi ditambah rawatan",
        "Simpan kenalan vet 24 jam dalam telefon anda",
        "Telefon dahulu sebelum bergegas ke vet kecemasan",
        "Masa adalah kritikal: Sesetengah kecemasan memerlukan rawatan dalam 30-60 minit"
      ],
      tocItems: [
        { id: "why-matters", title: "Mengapa Mengenali Simptom Penting" },
        { id: "9-symptoms", title: "9 Simptom Kecemasan Kritikal" },
        { id: "decision-framework", title: "Rangka Kerja Keputusan Kecemasan vs Tunggu" },
        { id: "preparation", title: "Persediaan untuk Lawatan Vet Kecemasan" },
        { id: "faqs", title: "Soalan Lazim" },
      ],
      whyTitle: "Mengapa Mengenali Simptom Kecemasan Haiwan Penting di Malaysia",
      whyP1: "Pukul 2 pagi di Petaling Jaya. Anjing anda tiba-tiba mula muntah darah. Kucing anda pengsan dan tidak mahu bangun. Dalam saat-saat menakutkan ini, satu soalan bergegas dalam fikiran anda: <strong>Adakah ini kecemasan sebenar, atau boleh tunggu sampai pagi?</strong>",
      whyP2: "Iklim tropika Malaysia, bahaya bandar, dan perkhidmatan veterinar luar waktu yang terhad mewujudkan cabaran unik. Tidak seperti negara yang mempunyai banyak hospital 24 jam, <strong>Malaysia hanya mempunyai 15-20 kemudahan vet kecemasan 24/7 sebenar di seluruh negara</strong>, kebanyakan di Lembah Klang.",
      keyStatLabel: "Statistik Utama",
      keyStatValue: "60%+",
      keyStatDesc: "kecemasan haiwan berlaku di luar waktu perniagaan biasa (9 pagi-6 petang)",
      whyP3: "Yuran vet kecemasan antara RM150-300 untuk konsultasi (berbanding RM35-80 biasa). Tetapi menangguhkan rawatan boleh mengakibatkan kos RM5,000-20,000+ untuk prosedur lanjutan, kerosakan kekal, atau kehilangan haiwan kesayangan anda.",
      symptomsTitle: "9 Simptom Kecemasan Haiwan Kritikal yang Memerlukan Perhatian Vet Segera",
      signsLabel: "Tanda-tanda yang Perlu Diperhatikan:",
      causesLabel: "Punca Lazim di Malaysia:",
      timeSensitivityLabel: "Sensitiviti Masa:",
      symptoms: [
        {
          title: "Kesukaran Bernafas (Dyspnea)",
          emoji: "🫁",
          signs: ["Tercungap-cungap dengan mulut terbuka (terutama kucing)", "Lidah/gusi biru atau ungu (sianosis)", "Leher terjulur dan siku terbuka", "Pernafasan cepat dan cetek (lebih 40 nafas/min)", "Bunyi berdengung, tercekik, atau berbuih"],
          causes: "Strok haba, kegagalan jantung, halangan saluran udara, reaksi alergik, jangkitan pernafasan",
          timeSensitivity: "KRITIKAL—memerlukan rawatan dalam 15-30 minit"
        },
        {
          title: "Pendarahan Teruk atau Trauma",
          emoji: "🩸",
          signs: ["Pendarahan yang cepat meresap melalui pembalut", "Darah menyembur dari luka (arteri)", "Dilanggar kereta/motosikal", "Jatuh dari tempat tinggi", "Serangan anjing/haiwan dengan luka tusukan"],
          causes: "Kemalangan jalan raya, jatuh, serangan haiwan",
          timeSensitivity: "TINGGI—dapatkan rawatan dalam 30-60 minit"
        },
        {
          title: "Muntah atau Cirit-birit Berterusan",
          emoji: "🤢",
          signs: ["Muntah darah (merah atau seperti serbuk kopi)", "Cirit-birit berdarah atau hitam", "4+ episod muntah dalam 6 jam", "Muntah projeksi", "Perut tegang dan sakit"],
          causes: "Keracunan makanan, parvovirus, GDV/kembung, keracunan",
          timeSensitivity: "BERBEZA—muntah berdarah kritikal (1-2 jam). GDV mengancam nyawa serta-merta"
        },
        {
          title: "Tidak Boleh Kencing atau Buang Air Besar",
          emoji: "⚠️",
          signs: ["Mengejan tanpa/sedikit air kencing dihasilkan", "Menangis kesakitan semasa kencing", "Darah dalam air kencing", "Berulang kali ke kotak pasir tanpa hasil"],
          causes: "Penyumbatan saluran kencing (terutama kucing jantan)",
          timeSensitivity: "KRITIKAL—memerlukan rawatan dalam 6-12 jam"
        },
        {
          title: "Pengsan, Kelemahan, atau Lumpuh Mendadak",
          emoji: "💔",
          signs: ["Pengsan atau pitam", "Tiba-tiba tidak boleh berdiri/berjalan", "Menyeret kaki belakang", "Hilang kesedaran", "Kelemahan melampau"],
          causes: "Masalah jantung, pendarahan dalaman, keracunan, strok, kecederaan tulang belakang",
          timeSensitivity: "KRITIKAL—dapatkan rawatan kecemasan segera"
        },
        {
          title: "Kecederaan Mata atau Buta Mendadak",
          emoji: "👁️",
          signs: ["Bola mata terkeluar dari soket", "Kecederaan menembusi mata", "Buta mendadak", "Memicingkan mata teruk dengan dischaj", "Mata berkabus atau merah"],
          causes: "Pergaduhan kucing, tumbuhan tajam, serpihan pembinaan, glaukoma",
          timeSensitivity: "TINGGI—dapatkan rawatan dalam 1-2 jam untuk menyelamatkan penglihatan"
        },
        {
          title: "Perut Kembung atau Keras Seperti Batu",
          emoji: "🎈",
          signs: ["Perut kelihatan bengkak, ketat, seperti gendang", "Muntah tanpa hasil (cuba tetapi tiada apa keluar)", "Air liur berlebihan", "Gelisah, mondar-mandir", "Gusi pucat"],
          causes: "GDV/Kembung—pembunuh kecemasan #1 anjing baka besar",
          timeSensitivity: "MENGANCAM NYAWA SERTA-MERTA—pembedahan dalam 1-2 jam"
        },
        {
          title: "Disyaki Keracunan",
          emoji: "☠️",
          signs: ["Muntah/cirit-birit mendadak selepas makan sesuatu", "Air liur meleleh, berbuih di mulut", "Gegaran, sawan, otot berkedut", "Anak mata melebar atau mengecil", "Kelemahan, pengsan"],
          causes: "Umpan tikus, toksin katak, tumbuhan beracun, coklat, xylitol, ubat-ubatan",
          timeSensitivity: "KRITIKAL—penawar paling berkesan dalam 1-2 jam"
        },
        {
          title: "Kesakitan Melampau atau Perubahan Tingkah Laku Mendadak",
          emoji: "😿",
          signs: ["Menangis, merengek berterusan", "Agresif apabila disentuh", "Postur membongkok, enggan bergerak", "Bersembunyi dan mengelak interaksi", "Mencederakan diri sendiri"],
          causes: "Kecederaan dalaman, kegagalan organ, jangkitan teruk, pankreatitis",
          timeSensitivity: "TINGGI—dapatkan rawatan dalam 1-3 jam"
        }
      ],
      decisionTitle: "Cara Membuat Keputusan: Vet Kecemasan atau Tunggu?",
      goEmergencyTitle: "PERGI KE VET KECEMASAN SEGERA",
      goEmergencyItems: ["Sebarang kesukaran bernafas", "Tidak sedar atau kelemahan teruk", "Pendarahan berat yang tidak berhenti", "Disyaki keracunan", "Tidak boleh kencing (terutama kucing jantan)", "Simptom GDV/kembung", "Sawan >3 minit atau sawan berturut-turut", "Trauma teruk (dilanggar kereta, jatuh)", "Kecederaan mata"],
      canWaitTitle: "BOLEH TUNGGU WAKTU BIASA",
      canWaitItems: ["Satu episod muntah/cirit-birit dengan tingkah laku normal", "Tempang ringan dengan aktiviti normal", "Calar atau lecet kecil", "Bersin atau batuk ringan", "Jangkitan telinga (kecuali senget kepala teruk)"],
      whenInDoubt: "<strong>Apabila ragu-ragu, SENTIASA hubungi vet kecemasan.</strong> Mereka boleh membantu menilai keterdesakan melalui telefon dan mungkin memberikan arahan pertolongan cemas kritikal semasa anda dalam perjalanan.",
      prepTitle: "Persediaan untuk Lawatan Vet Kecemasan",
      saveContactsTitle: "📱 Simpan Kenalan Kecemasan Ini SEKARANG",
      contacts: [
        { name: "Animal Medical Center (AMC)", location: "KL", phone: "+603-7982 9199" },
        { name: "Gasing Veterinary Hospital", location: "PJ", phone: "+603-7957 2030" },
        { name: "Starlight Veterinary Hospital", location: "Subang", phone: "+6012-691 4745" },
        { name: "Windsor Animal Hospital", location: "Shah Alam", phone: "+603-5191 1799" },
        { name: "St. Angel Animal Medical Centre", location: "KL", phone: "+603-4023 9299" },
      ],
      seeDirectoryText: "Lihat",
      seeDirectoryLink: "Direktori Vet 24 Jam Malaysia",
      seeDirectoryAfter: "kami yang lengkap untuk kemudahan di Pulau Pinang, JB, Melaka, dan lain-lain.",
      faqTitle: "Soalan Lazim",
      faqs: [
        { q: "Bagaimana saya tahu jika muntah haiwan saya adalah kecemasan?", a: "Episod tunggal biasanya bukan kecemasan. Dapatkan rawatan segera jika: muntah darah, beberapa episod (4+ dalam 6 jam), muntah digabungkan dengan lesu/pengsan, atau tidak boleh minum air." },
        { q: "Berapakah kos vet kecemasan di Malaysia?", a: "Konsultasi kecemasan: RM150-300. Hospitalisasi: RM200-500/malam. Pembedahan: RM2,000-10,000+. Kebanyakan vet memerlukan deposit RM500-2,000 terlebih dahulu." },
        { q: "Bolehkah saya memberi ubat sakit manusia kepada haiwan?", a: "<strong>TIDAK.</strong> Jangan sekali-kali memberi ubat manusia (Panadol, aspirin, ibuprofen) kepada haiwan. Ini sangat toksik dan boleh menyebabkan kegagalan buah pinggang, kerosakan hati, atau kematian." },
        { q: "Adakah strok haba biasa di Malaysia?", a: "Ya, sangat biasa kerana iklim tropika. Tanda-tanda: panting berlebihan, air liur meleleh, gusi merah, muntah, pengsan. Strok haba memerlukan penyejukan segera dan rawatan vet dalam 30 minit." },
      ],
      conclusionTitle: "Kesimpulan: Bersedia, Bertindak Pantas, Selamatkan Nyawa",
      conclusionP: "Mengenali simptom kecemasan haiwan adalah kemahiran kritikal untuk setiap pemilik haiwan Malaysia. Keupayaan anda mengenal pasti kecemasan sebenar dan bertindak pantas boleh bermakna perbezaan antara hidup dan mati untuk haiwan kesayangan anda.",
      rememberTitle: "Ingat:",
      rememberItems: [
        "Percaya naluri anda—jika sesuatu terasa salah, hubungi vet kecemasan",
        "Masa adalah kritikal—jangan tangguh untuk simptom mengancam nyawa",
        "Simpan kenalan vet 24 jam SEBELUM kecemasan berlaku",
        "Sediakan kit kecemasan dan ketahui laluan ke vet kecemasan terdekat"
      ],
      relatedArticles: [
        { title: "Panduan Lengkap Rawatan Kecemasan Haiwan di Malaysia", description: "Panduan tiang komprehensif meliputi semua aspek kecemasan haiwan" },
        { title: "Panduan Kecemasan Strok Haba", description: "Simptom kritikal & rawatan untuk iklim Malaysia" },
        { title: "Panduan Pertolongan Cemas Kecemasan Haiwan", description: "Teknik menyelamatkan nyawa yang boleh anda lakukan di rumah" },
        { title: "Panduan Kos Kecemasan Haiwan", description: "Apa yang dijangkakan untuk kos rawatan" },
      ],
    },
    zh: {
      metaTitle: "每个马来西亚宠物主人必须知道的紧急症状 | 2025指南",
      metaDescription: "了解在马来西亚需要立即兽医关注的9个关键宠物紧急症状。知道何时应紧急前往24小时紧急护理。专家验证指南。",
      category: "紧急",
      title: "每个马来西亚宠物主人必须知道的紧急症状（2025指南）",
      date: "2025年1月1日",
      readTime: "8分钟阅读",
      reviewedBy: "由马来西亚持牌兽医审核",
      heroImageAlt: "警觉的狗看着镜头 - 宠物紧急症状指南",
      heroImageCaption: "识别紧急症状可以挽救您宠物的生命",
      emergencyTitle: "这是紧急情况吗？",
      emergencyText: "如果您的宠物出现以下9个关键症状中的任何一个，请立即联系24小时兽医诊所。",
      emergencyButton: "立即查找24/7兽医",
      tldr: [
        "了解需要立即兽医关注的9个关键紧急症状",
        "紧急兽医咨询费RM150-300加治疗费",
        "将24小时兽医联系方式保存在手机中",
        "赶往紧急兽医之前先打电话",
        "时间至关重要：某些紧急情况需要在30-60分钟内治疗"
      ],
      tocItems: [
        { id: "why-matters", title: "为什么识别症状很重要" },
        { id: "9-symptoms", title: "9个关键紧急症状" },
        { id: "decision-framework", title: "紧急vs等待决策框架" },
        { id: "preparation", title: "准备紧急兽医就诊" },
        { id: "faqs", title: "常见问题" },
      ],
      whyTitle: "为什么在马来西亚识别宠物紧急症状很重要",
      whyP1: "凌晨2点在八打灵再也。您的狗突然开始吐血。您的猫晕倒了不肯起来。在这些令人恐惧的时刻，一个问题在您脑海中飞速闪过：<strong>这是真正的紧急情况，还是可以等到早上？</strong>",
      whyP2: "马来西亚的热带气候、城市危害和有限的下班后兽医服务造成了独特的挑战。与拥有大量24小时医院的国家不同，<strong>马来西亚全国只有15-20个真正的24/7紧急兽医设施</strong>，大部分在巴生谷。",
      keyStatLabel: "关键统计",
      keyStatValue: "60%+",
      keyStatDesc: "的宠物紧急情况发生在常规营业时间（上午9点至下午6点）之外",
      whyP3: "紧急兽医咨询费从RM150-300不等（常规为RM35-80）。但延迟治疗可能导致RM5,000-20,000+的高级手术费用、永久性损伤或失去您心爱的宠物。",
      symptomsTitle: "需要立即兽医关注的9个关键宠物紧急症状",
      signsLabel: "需要注意的迹象：",
      causesLabel: "马来西亚常见原因：",
      timeSensitivityLabel: "时间敏感性：",
      symptoms: [
        {
          title: "呼吸困难（呼吸急促）",
          emoji: "🫁",
          signs: ["张嘴喘气（尤其是猫）", "舌头/牙龈发蓝或发紫（紫绀）", "颈部伸展，肘部分开", "呼吸快速且浅（每分钟超过40次）", "喘鸣、窒息或咕噜声"],
          causes: "中暑、心力衰竭、气道阻塞、过敏反应、呼吸道感染",
          timeSensitivity: "危急——需要在15-30分钟内就医"
        },
        {
          title: "严重出血或创伤",
          emoji: "🩸",
          signs: ["出血快速浸透绷带", "伤口喷射性出血（动脉性）", "被汽车/摩托车撞", "从高处坠落", "被狗/动物攻击造成刺伤"],
          causes: "交通事故、坠落、动物攻击",
          timeSensitivity: "高——在30-60分钟内就医"
        },
        {
          title: "持续呕吐或腹泻",
          emoji: "🤢",
          signs: ["吐血（红色或咖啡渣状）", "血便或黑色柏油便", "6小时内呕吐4次以上", "喷射性呕吐", "腹部膨胀且疼痛"],
          causes: "食物中毒、细小病毒、胃扭转/胀气、中毒",
          timeSensitivity: "不等——吐血属危急（1-2小时）。胃扭转立即危及生命"
        },
        {
          title: "无法排尿或排便",
          emoji: "⚠️",
          signs: ["用力排尿但无/少量尿液", "排尿时疼痛哭叫", "尿中带血", "反复去猫砂盆但无结果"],
          causes: "尿路堵塞（尤其是公猫）",
          timeSensitivity: "危急——需要在6-12小时内就医"
        },
        {
          title: "突然晕倒、虚弱或瘫痪",
          emoji: "💔",
          signs: ["晕倒或昏厥", "突然无法站立/行走", "拖拽后腿", "失去意识", "极度虚弱"],
          causes: "心脏问题、内出血、中毒、中风、脊柱损伤",
          timeSensitivity: "危急——立即寻求紧急护理"
        },
        {
          title: "眼部损伤或突然失明",
          emoji: "👁️",
          signs: ["眼球从眼眶突出", "眼部穿透性损伤", "突然失明", "严重眯眼伴分泌物", "眼睛混浊或发红"],
          causes: "猫打架、尖锐植物、建筑碎片、青光眼",
          timeSensitivity: "高——在1-2小时内就医以保护视力"
        },
        {
          title: "腹部膨胀或硬如石头",
          emoji: "🎈",
          signs: ["腹部看起来肿胀、紧绷、像鼓一样", "无效呕吐（努力但什么都吐不出来）", "过度流口水", "烦躁不安、来回踱步", "牙龈苍白"],
          causes: "胃扭转/胀气——大型犬的头号紧急杀手",
          timeSensitivity: "立即危及生命——需要在1-2小时内手术"
        },
        {
          title: "疑似中毒",
          emoji: "☠️",
          signs: ["吃了东西后突然呕吐/腹泻", "流口水、口中起泡", "震颤、癫痫、肌肉抽搐", "瞳孔放大或缩小", "虚弱、晕倒"],
          causes: "鼠药、蟾蜍毒素、有毒植物、巧克力、木糖醇、药物",
          timeSensitivity: "危急——解毒剂在1-2小时内效果最佳"
        },
        {
          title: "极度疼痛或突然行为变化",
          emoji: "😿",
          signs: ["持续哭叫、呜咽", "被触摸时有攻击性", "弓背姿势、不愿移动", "躲藏和回避互动", "自我伤害"],
          causes: "内伤、器官衰竭、严重感染、胰腺炎",
          timeSensitivity: "高——在1-3小时内就医"
        }
      ],
      decisionTitle: "如何决定：紧急就医还是等待？",
      goEmergencyTitle: "立即去紧急兽医",
      goEmergencyItems: ["任何呼吸困难", "失去意识或严重虚弱", "无法止住的大量出血", "疑似中毒", "无法排尿（尤其是公猫）", "胃扭转/胀气症状", "癫痫>3分钟或多次癫痫", "严重创伤（被车撞、坠落）", "眼部损伤"],
      canWaitTitle: "可能可以等到常规时间",
      canWaitItems: ["单次呕吐/腹泻且行为正常", "轻微跛行但活动正常", "轻微划伤或擦伤", "轻微打喷嚏或咳嗽", "耳部感染（除非严重歪头）"],
      whenInDoubt: "<strong>有疑虑时，务必打电话给紧急兽医。</strong>他们可以通过电话帮助评估紧急程度，并可能在您前往途中提供关键的急救指导。",
      prepTitle: "准备紧急兽医就诊",
      saveContactsTitle: "📱 现在就保存这些紧急联系方式",
      contacts: [
        { name: "Animal Medical Center (AMC)", location: "KL", phone: "+603-7982 9199" },
        { name: "Gasing Veterinary Hospital", location: "PJ", phone: "+603-7957 2030" },
        { name: "Starlight Veterinary Hospital", location: "梳邦", phone: "+6012-691 4745" },
        { name: "Windsor Animal Hospital", location: "莎阿南", phone: "+603-5191 1799" },
        { name: "St. Angel Animal Medical Centre", location: "KL", phone: "+603-4023 9299" },
      ],
      seeDirectoryText: "查看我们完整的",
      seeDirectoryLink: "马来西亚24小时兽医目录",
      seeDirectoryAfter: "了解槟城、JB、马六甲等地的设施。",
      faqTitle: "常见问题",
      faqs: [
        { q: "如何判断宠物呕吐是否属于紧急情况？", a: "单次发作通常不是紧急情况。如出现以下情况请立即就医：吐血、多次发作（6小时内4次以上）、呕吐伴嗜睡/晕倒、或无法喝水。" },
        { q: "马来西亚紧急兽医费用是多少？", a: "紧急咨询：RM150-300。住院：RM200-500/晚。手术：RM2,000-10,000+。大多数兽医需要预付RM500-2,000押金。" },
        { q: "我可以给宠物人用止痛药吗？", a: "<strong>不可以。</strong>永远不要给宠物人用药物（扑热息痛、阿司匹林、布洛芬）。这些药物毒性极强，可能导致肾衰竭、肝损伤或死亡。" },
        { q: "马来西亚中暑常见吗？", a: "是的，由于热带气候，非常常见。迹象：过度喘气、流口水、牙龈发红、呕吐、晕倒。中暑需要立即降温和30分钟内的兽医护理。" },
      ],
      conclusionTitle: "结论：做好准备，快速行动，拯救生命",
      conclusionP: "识别宠物紧急症状是每个马来西亚宠物主人的关键技能。您识别真正紧急情况并快速行动的能力可能意味着您心爱宠物的生死之别。",
      rememberTitle: "请记住：",
      rememberItems: [
        "相信您的直觉——如果感觉不对，打电话给紧急兽医",
        "时间至关重要——不要因危及生命的症状而拖延",
        "在紧急情况发生之前保存24小时兽医联系方式",
        "准备急救包并了解前往最近紧急兽医的路线"
      ],
      relatedArticles: [
        { title: "马来西亚宠物紧急治疗完全指南", description: "涵盖宠物紧急情况所有方面的综合指南" },
        { title: "中暑紧急指南", description: "针对马来西亚气候的关键症状和治疗" },
        { title: "宠物紧急急救指南", description: "您可以在家进行的救生技术" },
        { title: "宠物紧急费用指南", description: "治疗费用的预期" },
      ],
    }
  };

  return content[language] || content.en;
};

import { Language } from '@/lib/translations';

export const getEmergencyTransportGuideContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Emergency Pet Transport Malaysia: Safe Transport to Vet Guide",
      metaDescription: "Learn safe emergency pet transport in Malaysia. Handle injured pets, prevent shock, secure in vehicle, minimize stress. Step-by-step guide for dogs & cats.",
      category: "First Aid",
      title: "Emergency Pet Transport Guide: How to Safely Get Your Pet to the Vet",
      date: "January 1, 2025",
      readTime: "10 min read",
      reviewedBy: "Reviewed by Emergency Veterinary Specialists",
      heroImageAlt: "Pet owner safely transporting dog in carrier to emergency vet",
      heroImageCaption: "Proper transport technique can prevent additional injuries and improve survival rates",
      
      emergencyTitle: "Transporting Injured Pet?",
      emergencyText: "The way you transport can significantly impact survival. Improper handling can worsen spinal injuries, cause additional trauma, or accelerate shock.",
      emergencyButton: "Find 24/7 Vet Now",
      
      tldr: [
        "Improper handling can worsen injuries: Spinal injuries, fractures, internal bleeding",
        "Shock accelerates during transport: Keep pet warm, calm, and still",
        "Cats need carriers always: Even in emergencies (prevents escape, reduces stress)",
        "Call ahead: Alert vet so they can prepare",
        "Drive carefully: Sudden stops/turns worsen injuries"
      ],
      
      tocItems: [
        { id: "assessment", title: "Pre-Transport Assessment" },
        { id: "handling", title: "Handling Injured Pets by Size" },
        { id: "spinal", title: "Spinal Injury Precautions" },
        { id: "vehicle", title: "Vehicle Safety" },
        { id: "warmth", title: "Keeping Pet Warm (Shock Prevention)" },
        { id: "what-to-bring", title: "What to Bring" },
        { id: "minimizing-stress", title: "Minimizing Stress" },
        { id: "calling-ahead", title: "Calling Ahead" },
        { id: "driving", title: "Driving Tips" },
        { id: "faqs", title: "Frequently Asked Questions" }
      ],
      
      assessmentTitle: "Pre-Transport Assessment: Is Pet Stable Enough?",
      transportIf: "Transport Immediately IF:",
      transportIfItems: ["Pet is conscious and breathing", "Bleeding is controlled (or controllable)", "No severe respiratory distress", "You can move pet safely"],
      callVetIf: "Call Vet for Advice BEFORE Transport IF:",
      callVetIfItems: ["Unconscious or barely responsive", "Severe difficulty breathing (blue gums)", "Uncontrolled bleeding", "Suspected spinal injury and you're alone"],
      performCPR: "🚨 <strong>Perform CPR On-Site IF:</strong> Not breathing, no heartbeat. Then transport WHILE continuing CPR if possible (have helper drive).",
      
      handlingTitle: "Handling Injured Pets: Techniques by Size",
      safetyFirst: "⚠️ Safety First: Protect Yourself",
      safetyDesc: "Even gentle pets may bite when in severe pain, frightened, or disoriented.",
      safetyTips: ["Speak softly, calmly", "Approach slowly from side (not head-on)", "Use thick towels/blankets as barriers", "Muzzle if needed (but NOT if vomiting or difficulty breathing)"],
      sizeCategories: [
        { title: "Small Pets (<10 kg)", method: "Towel Wrap Method:", steps: ["Lay thick towel flat", "Gently place pet in center", "Wrap securely (burrito-style)", "Place in secure carrier"] },
        { title: "Medium/Large Dogs (10-30 kg)", method: "Blanket Stretcher (2 People):", steps: ["Lay blanket next to dog", "Gently roll dog onto blanket", "Two people grasp edges", "Lift together, keep level"] },
        { title: "Giant Breeds (>30 kg)", method: "Multi-Person Carry (2-3 People):", steps: ["Person 1: Support head/front", "Person 2: Support rear", "Person 3: Support middle", "Lift simultaneously on count"] }
      ],
      
      spinalTitle: "Spinal Injury Precautions",
      assumeSpinal: "Assume Spinal Injury IF:",
      spinalSigns: ["Hit by vehicle", "Fall from height", "Unable to move back legs", "Crying when back/neck touched", "Arched back posture"],
      criticalRulesTitle: "Critical Handling Rules:",
      criticalRules: ["Keep spine straight at ALL times", "Do NOT bend or twist spine", "Support entire body evenly", "Use rigid board if possible", "Minimize movement"],
      spinalWarning: "⚠️ Improper handling can cause permanent paralysis or death",
      
      vehicleTitle: "Vehicle Safety: Securing Your Pet",
      forCatsTitle: "For Cats",
      forCatsDesc: "<strong>ALWAYS use carrier</strong>—even in emergencies. Prevents escape, reduces stress.",
      forCatsItems: ["Place on floor behind front seat (most stable)", "Or secure with seatbelt through handle", "Never place in front seat with airbag"],
      forDogsTitle: "For Dogs",
      forDogsItems: ["<strong>Small dogs:</strong> Use carrier or have passenger hold", "<strong>Medium/large:</strong> Lay in cargo area or back seat floor", "<strong>Support with towels</strong> to prevent rolling"],
      forDogsWarning: "❌ Never let dog roam freely or sit upright if severely injured",
      
      warmthTitle: "Keeping Pet Warm: Shock Prevention",
      warmthWhy: "Why Warmth Matters",
      warmthDesc: "Shock causes body temperature to drop. Hypothermia worsens shock = reduced survival rate.",
      warmthDo: "✅ DO:",
      warmthDoItems: ["Wrap in blankets or towels", "Use car heater (not too hot)", "Place warm (not hot) water bottles wrapped in towels near body", "Cover pet but leave face exposed"],
      warmthDont: "❌ DON'T:",
      warmthDontItems: ["Use heating pads (can cause burns)", "Make pet too hot", "Cover face (restrict breathing)"],
      
      whatToBringTitle: "What to Bring to Emergency Vet",
      essentialInfo: "📋 Essential Information",
      essentialItems: ["<strong>Medical Records:</strong> Vaccination history, current medications, known allergies", "<strong>Incident Info:</strong> What happened, when, witnessed symptoms, first aid provided", "<strong>If Poisoning:</strong> Packaging/container, estimated amount, time of ingestion"],
      paymentTitle: "💳 Payment Preparation",
      paymentItems: ["Credit card (most emergency vets accept)", "Cash (RM 1,000-3,000 for deposit)", "Pet insurance policy info (if applicable)"],
      paymentNote: "Note: Most emergency vets require 50-100% deposit before treatment",
      
      stressTitle: "Minimizing Stress During Transport",
      forDogsStress: "🐕 For Dogs",
      forDogsStressItems: ["Speak softly, reassuringly", "Maintain calm demeanor (dogs sense stress)", "Minimize loud noises", "Allow familiar person to comfort"],
      forCatsStress: "🐱 For Cats",
      forCatsStressItems: ["Cover carrier with light blanket", "Speak softly", "Avoid jostling carrier", "Classical music or white noise (calming)"],
      stressAvoid: "❌ <strong>AVOID:</strong> Loud talking, crying, panicking • Rough handling • Multiple people crowding pet • Taking photos/videos",
      
      callingTitle: "Calling Ahead: Why It Matters",
      whatToTell: "What to Tell Emergency Vet",
      callScript: [
        { label: "1. Pet info:", example: "\"Golden Retriever, 5 years old, approximately 30 kg\"" },
        { label: "2. Nature of emergency:", example: "\"Hit by motorcycle 20 minutes ago\"" },
        { label: "3. Current condition:", example: "\"Conscious but weak, pale gums, bleeding from leg\"" },
        { label: "4. ETA:", example: "\"15 minutes away\"" }
      ],
      whyHelpsTitle: "Why This Helps:",
      whyHelpsItems: ["Vet prepares treatment area and equipment", "Identifies if specialist needed", "May provide pre-arrival instructions", "Expedites treatment upon arrival (no waiting)"],
      
      drivingTitle: "Driving Tips: Get There Safely",
      driverTitle: "✅ Driver Responsibilities",
      driverItems: ["<strong>Drive Carefully:</strong> Smooth acceleration/braking, slow turns", "<strong>Stay Focused:</strong> Don't constantly look back at pet", "<strong>Know the Route:</strong> Use GPS, avoid peak traffic if possible"],
      driverDont: "❌ DON'T:",
      driverDontItems: ["Speed excessively (accident helps no one)", "Text/call while driving", "Panic drive"],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "My cat is too aggressive to get in a carrier. How do I transport her in an emergency?", a: "Use a thick blanket/towel to wrap her completely (including head initially to prevent biting), creating a 'burrito.' Once wrapped, you can expose her face. Place the entire wrapped bundle in a carrier or large box, or hold securely if no carrier available. For future: Acclimate cat to carrier when not in emergency." },
        { q: "Can I transport my large dog in the front seat?", a: "No—front seat has airbag risk and is less stable during braking. Best location: Cargo area (SUVs/hatchbacks) or back seat floor. Back seat floor is most stable location. If dog must be on back seat, have passenger hold/support to prevent falling during braking." },
        { q: "My emergency vet is 45 minutes away. Is that too long for a critical injury?", a: "For truly critical emergencies (difficulty breathing, uncontrolled bleeding, unconscious), 45 minutes may be too long. Call vet immediately—they can advise if you should transport immediately, stabilize first, or if there's a closer option. For some emergencies, providing first aid during transport is acceptable." },
        { q: "Should I give food or water during transport?", a: "NO. Never give food or water when transporting to emergency vet. Reasons: 1) If surgery needed, requires empty stomach, 2) If vomiting, can aspirate into lungs, 3) Unconscious pets can choke. Pet can have water once vet examines and approves." }
      ],
      
      conclusionTitle: "Conclusion: Preparation Equals Success",
      conclusionDesc: "Knowing how to safely transport your pet BEFORE an emergency occurs can save precious minutes and prevent additional injuries.",
      actionChecklist: "Action Checklist",
      actionItems: ["Save emergency vet address in GPS NOW", "Keep cat carrier easily accessible", "Have blankets/towels in car", "Know route to 24-hour vet", "Program vet number in phone", "Identify who will help transport (family/neighbor)"],
      
      relatedArticles: [
        { title: "Pet Accident Protocol", description: "First aid before transport" },
        { title: "Pet First Aid Guide", description: "Life-saving techniques" },
        { title: "24-Hour Vet Directory", description: "Find emergency vets" },
        { title: "Post-Emergency Care", description: "Recovery after treatment" }
      ]
    },
    ms: {
      metaTitle: "Pengangkutan Kecemasan Haiwan Malaysia: Panduan Pengangkutan Selamat ke Vet",
      metaDescription: "Pelajari pengangkutan kecemasan haiwan yang selamat di Malaysia. Kendalikan haiwan cedera, cegah kejutan, selamat dalam kenderaan, kurangkan tekanan.",
      category: "Pertolongan Cemas",
      title: "Panduan Pengangkutan Kecemasan Haiwan: Cara Membawa Haiwan Anda ke Vet dengan Selamat",
      date: "1 Januari 2025",
      readTime: "10 minit bacaan",
      reviewedBy: "Disemak oleh Pakar Veterinar Kecemasan",
      heroImageAlt: "Pemilik haiwan mengangkut anjing dengan selamat dalam pembawa ke vet kecemasan",
      heroImageCaption: "Teknik pengangkutan yang betul boleh mencegah kecederaan tambahan dan meningkatkan kadar kelangsungan hidup",
      
      emergencyTitle: "Mengangkut Haiwan Cedera?",
      emergencyText: "Cara anda mengangkut boleh memberi kesan besar kepada kelangsungan hidup. Pengendalian yang tidak betul boleh memburukkan kecederaan tulang belakang, menyebabkan trauma tambahan, atau mempercepatkan kejutan.",
      emergencyButton: "Cari Vet 24/7 Sekarang",
      
      tldr: [
        "Pengendalian tidak betul boleh memburukkan kecederaan: Kecederaan tulang belakang, patah, pendarahan dalaman",
        "Kejutan bertambah buruk semasa pengangkutan: Pastikan haiwan hangat, tenang, dan tidak bergerak",
        "Kucing memerlukan pembawa sentiasa: Walaupun dalam kecemasan (cegah melarikan diri, kurangkan tekanan)",
        "Hubungi dahulu: Maklumkan vet supaya mereka boleh bersedia",
        "Pandu dengan berhati-hati: Berhenti/pusing secara tiba-tiba memburukkan kecederaan"
      ],
      
      tocItems: [
        { id: "assessment", title: "Penilaian Sebelum Pengangkutan" },
        { id: "handling", title: "Pengendalian Haiwan Cedera Mengikut Saiz" },
        { id: "spinal", title: "Langkah Berjaga-jaga Kecederaan Tulang Belakang" },
        { id: "vehicle", title: "Keselamatan Kenderaan" },
        { id: "warmth", title: "Menjaga Haiwan Hangat (Pencegahan Kejutan)" },
        { id: "what-to-bring", title: "Apa Yang Perlu Dibawa" },
        { id: "minimizing-stress", title: "Mengurangkan Tekanan" },
        { id: "calling-ahead", title: "Menghubungi Lebih Awal" },
        { id: "driving", title: "Tips Pemanduan" },
        { id: "faqs", title: "Soalan Lazim" }
      ],
      
      assessmentTitle: "Penilaian Sebelum Pengangkutan: Adakah Haiwan Cukup Stabil?",
      transportIf: "Angkut Segera JIKA:",
      transportIfItems: ["Haiwan sedar dan bernafas", "Pendarahan terkawal (atau boleh dikawal)", "Tiada kesukaran pernafasan teruk", "Anda boleh gerakkan haiwan dengan selamat"],
      callVetIf: "Hubungi Vet untuk Nasihat SEBELUM Pengangkutan JIKA:",
      callVetIfItems: ["Tidak sedarkan diri atau hampir tidak responsif", "Kesukaran bernafas teruk (gusi biru)", "Pendarahan tidak terkawal", "Disyaki kecederaan tulang belakang dan anda seorang"],
      performCPR: "🚨 <strong>Lakukan CPR Di Tempat JIKA:</strong> Tidak bernafas, tiada degupan jantung. Kemudian angkut SAMBIL meneruskan CPR jika boleh (minta pembantu memandu).",
      
      handlingTitle: "Mengendalikan Haiwan Cedera: Teknik Mengikut Saiz",
      safetyFirst: "⚠️ Keselamatan Dahulu: Lindungi Diri Anda",
      safetyDesc: "Walaupun haiwan yang lembut mungkin menggigit apabila sakit teruk, ketakutan, atau keliru.",
      safetyTips: ["Bercakap dengan lembut, tenang", "Dekati perlahan dari sisi (bukan depan)", "Gunakan tuala/selimut tebal sebagai penghalang", "Muncung jika perlu (tetapi TIDAK jika muntah atau kesukaran bernafas)"],
      sizeCategories: [
        { title: "Haiwan Kecil (<10 kg)", method: "Kaedah Balutan Tuala:", steps: ["Bentangkan tuala tebal", "Letakkan haiwan di tengah dengan lembut", "Balut dengan selamat (gaya burrito)", "Letakkan dalam pembawa selamat"] },
        { title: "Anjing Sederhana/Besar (10-30 kg)", method: "Pengusung Selimut (2 Orang):", steps: ["Bentangkan selimut di sebelah anjing", "Gulingkan anjing ke atas selimut dengan lembut", "Dua orang pegang tepi", "Angkat bersama, kekalkan rata"] },
        { title: "Baka Gergasi (>30 kg)", method: "Angkat Berbilang Orang (2-3 Orang):", steps: ["Orang 1: Sokong kepala/depan", "Orang 2: Sokong belakang", "Orang 3: Sokong tengah", "Angkat serentak atas kiraan"] }
      ],
      
      spinalTitle: "Langkah Berjaga-jaga Kecederaan Tulang Belakang",
      assumeSpinal: "Andaikan Kecederaan Tulang Belakang JIKA:",
      spinalSigns: ["Dilanggar kenderaan", "Jatuh dari ketinggian", "Tidak dapat gerakkan kaki belakang", "Menjerit apabila belakang/leher disentuh", "Postur belakang melengkung"],
      criticalRulesTitle: "Peraturan Pengendalian Kritikal:",
      criticalRules: ["Pastikan tulang belakang lurus SEPANJANG masa", "JANGAN bengkok atau putar tulang belakang", "Sokong seluruh badan secara rata", "Gunakan papan keras jika boleh", "Minimumkan pergerakan"],
      spinalWarning: "⚠️ Pengendalian tidak betul boleh menyebabkan lumpuh kekal atau kematian",
      
      vehicleTitle: "Keselamatan Kenderaan: Mengikat Haiwan Anda",
      forCatsTitle: "Untuk Kucing",
      forCatsDesc: "<strong>SENTIASA gunakan pembawa</strong>—walaupun dalam kecemasan. Mencegah melarikan diri, mengurangkan tekanan.",
      forCatsItems: ["Letakkan di lantai belakang tempat duduk hadapan (paling stabil)", "Atau ikat dengan tali pinggang keledar melalui pemegang", "Jangan letakkan di tempat duduk hadapan dengan beg udara"],
      forDogsTitle: "Untuk Anjing",
      forDogsItems: ["<strong>Anjing kecil:</strong> Gunakan pembawa atau penumpang pegang", "<strong>Sederhana/besar:</strong> Baringkan di ruang kargo atau lantai tempat duduk belakang", "<strong>Sokong dengan tuala</strong> untuk cegah bergolek"],
      forDogsWarning: "❌ Jangan biarkan anjing berkeliaran bebas atau duduk tegak jika cedera teruk",
      
      warmthTitle: "Menjaga Haiwan Hangat: Pencegahan Kejutan",
      warmthWhy: "Mengapa Kehangatan Penting",
      warmthDesc: "Kejutan menyebabkan suhu badan jatuh. Hipotermia memburukkan kejutan = kadar kelangsungan hidup berkurang.",
      warmthDo: "✅ LAKUKAN:",
      warmthDoItems: ["Balut dalam selimut atau tuala", "Gunakan pemanas kereta (tidak terlalu panas)", "Letakkan botol air suam (bukan panas) dibalut tuala berhampiran badan", "Tutup haiwan tetapi biarkan muka terdedah"],
      warmthDont: "❌ JANGAN:",
      warmthDontItems: ["Gunakan pad pemanas (boleh menyebabkan melecur)", "Buat haiwan terlalu panas", "Tutup muka (menyekat pernafasan)"],
      
      whatToBringTitle: "Apa Yang Perlu Dibawa ke Vet Kecemasan",
      essentialInfo: "📋 Maklumat Penting",
      essentialItems: ["<strong>Rekod Perubatan:</strong> Sejarah vaksinasi, ubat semasa, alahan yang diketahui", "<strong>Info Insiden:</strong> Apa yang berlaku, bila, gejala yang disaksikan, pertolongan cemas yang diberikan", "<strong>Jika Keracunan:</strong> Pembungkusan/bekas, anggaran jumlah, masa pengambilan"],
      paymentTitle: "💳 Persediaan Pembayaran",
      paymentItems: ["Kad kredit (kebanyakan vet kecemasan terima)", "Tunai (RM 1,000-3,000 untuk deposit)", "Info polisi insurans haiwan (jika ada)"],
      paymentNote: "Nota: Kebanyakan vet kecemasan memerlukan deposit 50-100% sebelum rawatan",
      
      stressTitle: "Mengurangkan Tekanan Semasa Pengangkutan",
      forDogsStress: "🐕 Untuk Anjing",
      forDogsStressItems: ["Bercakap dengan lembut, meyakinkan", "Kekalkan sikap tenang (anjing merasakan tekanan)", "Minimumkan bunyi kuat", "Benarkan orang yang biasa untuk menghiburkan"],
      forCatsStress: "🐱 Untuk Kucing",
      forCatsStressItems: ["Tutup pembawa dengan selimut ringan", "Bercakap dengan lembut", "Elak menggoncang pembawa", "Muzik klasik atau bunyi putih (menenangkan)"],
      stressAvoid: "❌ <strong>ELAKKAN:</strong> Bercakap kuat, menangis, panik • Pengendalian kasar • Ramai orang mengelilingi haiwan • Mengambil foto/video",
      
      callingTitle: "Menghubungi Lebih Awal: Mengapa Ia Penting",
      whatToTell: "Apa Yang Perlu Diberitahu Vet Kecemasan",
      callScript: [
        { label: "1. Info haiwan:", example: "\"Golden Retriever, 5 tahun, lebih kurang 30 kg\"" },
        { label: "2. Jenis kecemasan:", example: "\"Dilanggar motosikal 20 minit lalu\"" },
        { label: "3. Keadaan semasa:", example: "\"Sedar tetapi lemah, gusi pucat, berdarah dari kaki\"" },
        { label: "4. ETA:", example: "\"15 minit lagi\"" }
      ],
      whyHelpsTitle: "Mengapa Ini Membantu:",
      whyHelpsItems: ["Vet menyediakan kawasan rawatan dan peralatan", "Mengenal pasti jika pakar diperlukan", "Mungkin berikan arahan sebelum tiba", "Mempercepatkan rawatan semasa tiba (tiada menunggu)"],
      
      drivingTitle: "Tips Pemanduan: Sampai dengan Selamat",
      driverTitle: "✅ Tanggungjawab Pemandu",
      driverItems: ["<strong>Pandu dengan Berhati-hati:</strong> Pecutan/brek halus, pusing perlahan", "<strong>Kekal Fokus:</strong> Jangan sentiasa melihat ke belakang pada haiwan", "<strong>Tahu Laluan:</strong> Gunakan GPS, elak trafik puncak jika boleh"],
      driverDont: "❌ JANGAN:",
      driverDontItems: ["Laju berlebihan (kemalangan tidak membantu sesiapa)", "Mesej/panggil semasa memandu", "Memandu panik"],
      
      faqTitle: "Soalan Lazim",
      faqs: [
        { q: "Kucing saya terlalu agresif untuk masuk pembawa. Bagaimana saya mengangkutnya dalam kecemasan?", a: "Gunakan selimut/tuala tebal untuk membalutnya sepenuhnya (termasuk kepala pada mulanya untuk cegah gigitan), mencipta 'burrito'. Setelah dibalut, anda boleh dedahkan mukanya. Letakkan keseluruhan bungkusan dalam pembawa atau kotak besar, atau pegang dengan selamat jika tiada pembawa. Untuk masa depan: Biasakan kucing dengan pembawa semasa bukan kecemasan." },
        { q: "Bolehkah saya mengangkut anjing besar saya di tempat duduk hadapan?", a: "Tidak—tempat duduk hadapan mempunyai risiko beg udara dan kurang stabil semasa brek. Lokasi terbaik: Ruang kargo (SUV/hatchback) atau lantai tempat duduk belakang. Lantai tempat duduk belakang adalah lokasi paling stabil. Jika anjing perlu di tempat duduk belakang, minta penumpang pegang/sokong untuk cegah jatuh semasa brek." },
        { q: "Vet kecemasan saya 45 minit jauhnya. Adakah itu terlalu lama untuk kecederaan kritikal?", a: "Untuk kecemasan benar-benar kritikal (kesukaran bernafas, pendarahan tidak terkawal, tidak sedarkan diri), 45 minit mungkin terlalu lama. Hubungi vet segera—mereka boleh nasihatkan sama ada anda perlu angkut segera, stabilkan dahulu, atau jika ada pilihan lebih dekat. Untuk sesetengah kecemasan, memberikan pertolongan cemas semasa pengangkutan boleh diterima." },
        { q: "Patutkah saya beri makanan atau air semasa pengangkutan?", a: "TIDAK. Jangan beri makanan atau air semasa mengangkut ke vet kecemasan. Sebab: 1) Jika pembedahan diperlukan, memerlukan perut kosong, 2) Jika muntah, boleh masuk ke paru-paru, 3) Haiwan tidak sedarkan diri boleh tercekik. Haiwan boleh minum air setelah vet memeriksa dan meluluskan." }
      ],
      
      conclusionTitle: "Kesimpulan: Persediaan Sama Dengan Kejayaan",
      conclusionDesc: "Mengetahui cara mengangkut haiwan anda dengan selamat SEBELUM kecemasan berlaku boleh menjimatkan minit berharga dan mencegah kecederaan tambahan.",
      actionChecklist: "Senarai Semak Tindakan",
      actionItems: ["Simpan alamat vet kecemasan dalam GPS SEKARANG", "Pastikan pembawa kucing mudah diakses", "Ada selimut/tuala dalam kereta", "Tahu laluan ke vet 24 jam", "Program nombor vet dalam telefon", "Kenal pasti siapa akan membantu mengangkut (keluarga/jiran)"],
      
      relatedArticles: [
        { title: "Protokol Kemalangan Haiwan", description: "Pertolongan cemas sebelum pengangkutan" },
        { title: "Panduan Pertolongan Cemas Haiwan", description: "Teknik menyelamatkan nyawa" },
        { title: "Direktori Vet 24 Jam", description: "Cari vet kecemasan" },
        { title: "Penjagaan Selepas Kecemasan", description: "Pemulihan selepas rawatan" }
      ]
    },
    zh: {
      metaTitle: "马来西亚宠物紧急运输：安全送往兽医指南",
      metaDescription: "学习马来西亚安全的宠物紧急运输。处理受伤宠物，预防休克，车内固定，减少压力。狗和猫的分步指南。",
      category: "急救",
      title: "宠物紧急运输指南：如何安全地将宠物送往兽医",
      date: "2025年1月1日",
      readTime: "10分钟阅读",
      reviewedBy: "由紧急兽医专家审核",
      heroImageAlt: "宠物主人安全地用宠物笼将狗运送到急诊兽医",
      heroImageCaption: "正确的运输技术可以防止额外伤害并提高生存率",
      
      emergencyTitle: "运输受伤的宠物？",
      emergencyText: "您的运输方式可以显著影响生存率。不当处理可能加重脊柱损伤，造成额外创伤，或加速休克。",
      emergencyButton: "立即找24/7兽医",
      
      tldr: [
        "不当处理会加重伤害：脊柱损伤、骨折、内出血",
        "运输期间休克加速：保持宠物温暖、平静、静止",
        "猫始终需要宠物笼：即使在紧急情况下（防止逃跑，减少压力）",
        "提前打电话：通知兽医让他们准备",
        "小心驾驶：突然停车/转弯会加重伤害"
      ],
      
      tocItems: [
        { id: "assessment", title: "运输前评估" },
        { id: "handling", title: "按尺寸处理受伤宠物" },
        { id: "spinal", title: "脊柱损伤注意事项" },
        { id: "vehicle", title: "车辆安全" },
        { id: "warmth", title: "保持宠物温暖（预防休克）" },
        { id: "what-to-bring", title: "需要带什么" },
        { id: "minimizing-stress", title: "减少压力" },
        { id: "calling-ahead", title: "提前打电话" },
        { id: "driving", title: "驾驶技巧" },
        { id: "faqs", title: "常见问题" }
      ],
      
      assessmentTitle: "运输前评估：宠物足够稳定吗？",
      transportIf: "以下情况立即运输：",
      transportIfItems: ["宠物清醒且在呼吸", "出血已控制（或可控）", "没有严重呼吸困难", "您可以安全移动宠物"],
      callVetIf: "以下情况运输前先咨询兽医：",
      callVetIfItems: ["失去意识或几乎没有反应", "严重呼吸困难（牙龈发蓝）", "无法控制的出血", "怀疑脊柱损伤且您独自一人"],
      performCPR: "🚨 <strong>如果出现以下情况在现场进行心肺复苏：</strong>没有呼吸，没有心跳。然后边运输边继续心肺复苏（让帮手开车）。",
      
      handlingTitle: "处理受伤宠物：按尺寸分类的技术",
      safetyFirst: "⚠️ 安全第一：保护自己",
      safetyDesc: "即使温顺的宠物在剧烈疼痛、受惊或迷失方向时也可能咬人。",
      safetyTips: ["轻声细语，保持冷静", "从侧面缓慢接近（不要正面）", "用厚毛巾/毯子作为屏障", "必要时使用口套（但如果呕吐或呼吸困难则不要）"],
      sizeCategories: [
        { title: "小型宠物（<10公斤）", method: "毛巾包裹法：", steps: ["平铺厚毛巾", "轻轻将宠物放在中间", "安全包裹（墨西哥卷饼式）", "放入安全的宠物笼"] },
        { title: "中/大型狗（10-30公斤）", method: "毯子担架（2人）：", steps: ["在狗旁边铺毯子", "轻轻将狗滚到毯子上", "两人抓住边缘", "一起抬起，保持水平"] },
        { title: "巨型品种（>30公斤）", method: "多人搬运（2-3人）：", steps: ["第1人：支撑头部/前部", "第2人：支撑后部", "第3人：支撑中部", "数数时同时抬起"] }
      ],
      
      spinalTitle: "脊柱损伤注意事项",
      assumeSpinal: "以下情况假设脊柱损伤：",
      spinalSigns: ["被车辆撞击", "从高处跌落", "无法移动后腿", "触摸背部/颈部时哭叫", "弓背姿势"],
      criticalRulesTitle: "关键处理规则：",
      criticalRules: ["始终保持脊柱笔直", "不要弯曲或扭转脊柱", "均匀支撑整个身体", "如果可能使用硬板", "尽量减少移动"],
      spinalWarning: "⚠️ 不当处理可能导致永久瘫痪或死亡",
      
      vehicleTitle: "车辆安全：固定您的宠物",
      forCatsTitle: "对于猫",
      forCatsDesc: "<strong>始终使用宠物笼</strong>——即使在紧急情况下。防止逃跑，减少压力。",
      forCatsItems: ["放在前座后面的地板上（最稳定）", "或用安全带穿过把手固定", "不要放在有安全气囊的前座"],
      forDogsTitle: "对于狗",
      forDogsItems: ["<strong>小狗：</strong>使用宠物笼或让乘客抱着", "<strong>中/大型：</strong>躺在货物区或后座地板", "<strong>用毛巾支撑</strong>防止翻滚"],
      forDogsWarning: "❌ 如果严重受伤，不要让狗自由活动或直立坐着",
      
      warmthTitle: "保持宠物温暖：预防休克",
      warmthWhy: "为什么温暖很重要",
      warmthDesc: "休克导致体温下降。体温过低会加重休克 = 降低生存率。",
      warmthDo: "✅ 要做：",
      warmthDoItems: ["用毯子或毛巾包裹", "使用车载暖气（不要太热）", "将用毛巾包裹的温水（不是热水）瓶放在身体附近", "盖住宠物但露出脸部"],
      warmthDont: "❌ 不要：",
      warmthDontItems: ["使用加热垫（可能造成烧伤）", "让宠物太热", "盖住脸（限制呼吸）"],
      
      whatToBringTitle: "带什么去急诊兽医",
      essentialInfo: "📋 必要信息",
      essentialItems: ["<strong>医疗记录：</strong>疫苗接种史、当前用药、已知过敏", "<strong>事件信息：</strong>发生了什么、什么时候、目睹的症状、提供的急救", "<strong>如果中毒：</strong>包装/容器、估计量、摄入时间"],
      paymentTitle: "💳 付款准备",
      paymentItems: ["信用卡（大多数急诊兽医接受）", "现金（RM 1,000-3,000作为押金）", "宠物保险信息（如适用）"],
      paymentNote: "注意：大多数急诊兽医需要在治疗前支付50-100%押金",
      
      stressTitle: "运输期间减少压力",
      forDogsStress: "🐕 对于狗",
      forDogsStressItems: ["轻声细语，令人安心", "保持冷静（狗能感知压力）", "减少大声噪音", "允许熟悉的人安慰"],
      forCatsStress: "🐱 对于猫",
      forCatsStressItems: ["用轻便毯子盖住宠物笼", "轻声说话", "避免晃动宠物笼", "古典音乐或白噪音（镇静）"],
      stressAvoid: "❌ <strong>避免：</strong>大声说话、哭泣、恐慌 • 粗暴处理 • 多人围着宠物 • 拍照/录像",
      
      callingTitle: "提前打电话：为什么重要",
      whatToTell: "告诉急诊兽医什么",
      callScript: [
        { label: "1. 宠物信息：", example: "「金毛猎犬，5岁，大约30公斤」" },
        { label: "2. 紧急情况性质：", example: "「20分钟前被摩托车撞了」" },
        { label: "3. 当前状况：", example: "「清醒但虚弱，牙龈苍白，腿部出血」" },
        { label: "4. 预计到达时间：", example: "「15分钟后到」" }
      ],
      whyHelpsTitle: "为什么这有帮助：",
      whyHelpsItems: ["兽医准备治疗区域和设备", "确定是否需要专家", "可能提供到达前的指示", "到达后加快治疗（无需等待）"],
      
      drivingTitle: "驾驶技巧：安全到达",
      driverTitle: "✅ 驾驶员职责",
      driverItems: ["<strong>小心驾驶：</strong>平稳加速/刹车，缓慢转弯", "<strong>保持专注：</strong>不要一直回头看宠物", "<strong>知道路线：</strong>使用GPS，如果可能避免高峰交通"],
      driverDont: "❌ 不要：",
      driverDontItems: ["过度超速（事故对谁都没帮助）", "开车时发短信/打电话", "恐慌驾驶"],
      
      faqTitle: "常见问题",
      faqs: [
        { q: "我的猫太凶不愿进宠物笼。紧急情况下我怎么运输她？", a: "用厚毯子/毛巾完全包裹她（一开始包括头部以防咬人），做成"墨西哥卷饼"。包好后，可以露出她的脸。将整个包裹放入宠物笼或大盒子，或如果没有宠物笼就安全地抱着。未来：在非紧急情况时让猫适应宠物笼。" },
        { q: "我可以把大狗放在前座运输吗？", a: "不行——前座有安全气囊风险，刹车时不太稳定。最佳位置：货物区（SUV/掀背车）或后座地板。后座地板是最稳定的位置。如果狗必须在后座，让乘客抱着/支撑以防刹车时摔倒。" },
        { q: "我的急诊兽医在45分钟外。对于严重伤害来说太长了吗？", a: "对于真正危急的紧急情况（呼吸困难、无法控制的出血、失去意识），45分钟可能太长。立即打电话给兽医——他们可以建议您是否应该立即运输、先稳定，或者是否有更近的选择。对于某些紧急情况，运输期间提供急救是可以接受的。" },
        { q: "运输期间应该给食物或水吗？", a: "不要。运送到急诊兽医时永远不要给食物或水。原因：1）如果需要手术，需要空腹，2）如果呕吐，可能吸入肺部，3）失去意识的宠物可能窒息。宠物可以在兽医检查并批准后喝水。" }
      ],
      
      conclusionTitle: "结论：准备等于成功",
      conclusionDesc: "在紧急情况发生之前知道如何安全运输您的宠物可以节省宝贵的时间并防止额外的伤害。",
      actionChecklist: "行动清单",
      actionItems: ["现在就在GPS中保存急诊兽医地址", "保持猫笼容易取用", "车里放毯子/毛巾", "知道去24小时兽医的路线", "在手机中保存兽医号码", "确定谁会帮忙运输（家人/邻居）"],
      
      relatedArticles: [
        { title: "宠物事故协议", description: "运输前的急救" },
        { title: "宠物急救指南", description: "救命技术" },
        { title: "24小时兽医目录", description: "查找急诊兽医" },
        { title: "紧急后护理", description: "治疗后的恢复" }
      ]
    }
  };
  
  return content[language] || content.en;
};

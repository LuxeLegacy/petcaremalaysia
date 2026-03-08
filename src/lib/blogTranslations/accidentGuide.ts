import { Language } from '@/lib/translations';

export const getAccidentGuideContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Pet Accident Protocol Malaysia: First Aid, Vet Care & Transport",
      metaDescription: "Complete guide for pet accidents in Malaysia: road traffic, falls, dog fights, trauma. Learn emergency first aid, safe transport, when to rush to vet. Step-by-step protocol.",
      category: "Emergency",
      title: "What to Do When Your Pet Has an Accident: Complete Emergency Protocol for Malaysia",
      date: "January 1, 2025",
      readTime: "14 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroImageAlt: "Injured pet dog receiving emergency first aid after accident on street",
      heroImageCaption: "Know what to do when your pet has an accident - it could save their life",
      
      emergencyTitle: "Pet Had an Accident? Act Now!",
      emergencyText: "Many severe injuries are NOT visible. Internal bleeding and organ damage require immediate vet care. Transport carefully.",
      emergencyButton: "Find 24/7 Vet Near You",
      
      tldr: [
        "Hidden injuries are the rule, not exception: Always see vet after accidents, even if pet seems fine",
        "Golden hour: First 60 minutes critical for survival in severe trauma",
        "Move carefully: Improper handling can worsen spinal injuries",
        "Shock kills: Rapid deterioration can occur 15-30 minutes post-accident",
        "Emergency cost: RM 1,000-6,000+ (trauma workup, surgery, hospitalization)"
      ],
      
      tocItems: [
        { id: "types", title: "Types of Pet Accidents in Malaysia" },
        { id: "hidden-injuries", title: "Why Hidden Injuries Are the Rule" },
        { id: "abc-assessment", title: "The ABC Assessment" },
        { id: "shock", title: "Recognizing Shock: The Silent Killer" },
        { id: "first-aid", title: "Emergency First Aid Protocol" },
        { id: "what-not-to-do", title: "What NOT to Do After Accidents" },
        { id: "when-to-go", title: "When to Go to Emergency Vet" },
        { id: "vet-treatment", title: "Emergency Vet Trauma Treatment" },
        { id: "prevention", title: "Prevention: Reduce Accident Risk" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      
      typesTitle: "Types of Pet Accidents in Malaysia",
      accidentTypes: [
        {
          emoji: "🚗",
          title: "Road Traffic Accidents (Most Common)",
          context: "Malaysian Context:",
          contextDesc: "High stray population, free-roaming pets, dense traffic = 40-50% of emergency trauma cases.",
          items: ["Hit by car, motorcycle, bicycle", "Dragged/run over", "Multiple injuries common (fractures, internal bleeding, head trauma)"]
        },
        {
          icon: "Building",
          title: "High-Rise Falls",
          context: "High-Rise Syndrome:",
          contextDesc: "Common in KL, Penang condos. Cats falling from balconies 2+ stories.",
          items: ["Lung contusions (bruising from impact)", "Fractured legs/pelvis", "Broken jaw (common in cats)", "Internal injuries may not show immediately"]
        },
        {
          emoji: "🐕",
          title: "Dog Fights",
          items: ["Puncture wounds (may look small but extensive underneath)", "Crush injuries to small dogs from larger dogs", "Bite wounds become infected rapidly (24-48 hours)", "Thorax/neck bites can be immediately life-threatening"]
        },
        {
          emoji: "⚡",
          title: "Other Trauma",
          items: ["Caught in gates, doors, car windows", "Construction site injuries", "Animal attacks (snakes, monitor lizards)", "Burns (fireworks, boiling water)"]
        }
      ],
      
      hiddenTitle: "Why \"Looking Fine\" Means Nothing After Trauma",
      hiddenChallenge: "The Critical Challenge",
      hiddenDesc: "Many severe injuries are NOT immediately visible. Internal bleeding, organ damage, and spinal injuries can be present even when your pet appears \"okay\" on the outside.",
      stats: [
        { value: "70%", desc: "of road accident pets have internal injuries not visible externally" },
        { value: "6-12 hrs", desc: "internal bleeding symptoms may take this long to appear" },
        { value: "60 min", desc: "\"Golden Hour\" - critical window for trauma survival" }
      ],
      
      abcTitle: "The ABC Assessment",
      abcSteps: [
        {
          letter: "A",
          title: "AIRWAY",
          desc: "Is the airway clear? Is pet breathing?",
          checkFor: ["Breathing movements", "Chest rise and fall", "Air movement from nose"],
          emergency: "If NOT breathing:",
          emergencyActions: ["Clear mouth of blood/debris", "Begin rescue breathing (2 breaths)", "Call for help, transport immediately"]
        },
        {
          letter: "B",
          title: "BREATHING",
          desc: "How is pet breathing?",
          checkFor: ["Dogs: 10-30 breaths/minute at rest", "Cats: 20-30 breaths/minute"],
          emergency: "Emergency Signs:",
          emergencyActions: ["Rapid, shallow breathing", "Gasping, open-mouth breathing", "Blue/purple gums (lack of oxygen)", "Labored breathing (visible effort)"]
        },
        {
          letter: "C",
          title: "CIRCULATION",
          desc: "Is heart beating? Are gums pink?",
          checkFor: ["Gum color (should be pink)", "Capillary refill time (press gum, color returns <2 sec)", "Pulse (inside thigh, femoral artery)"],
          emergency: "SHOCK Signs:",
          emergencyActions: ["Pale, white, or gray gums", "Capillary refill >3 seconds", "Weak or absent pulse", "Cold extremities (paws, ears)"]
        }
      ],
      checkLabel: "Check for:",
      normalLabel: "Normal rates:",
      
      shockTitle: "Recognizing Shock: The Silent Killer",
      shockWhat: "What Is Shock?",
      shockDesc: "Inadequate blood flow to organs, causing organ failure and death if untreated. Can develop within <strong>15-30 minutes</strong> post-accident.",
      shockSymptomsLabel: "Shock Symptoms:",
      shockSymptoms: ["Pale or white gums", "Rapid, weak pulse", "Rapid breathing", "Cold paws/ears", "Weakness, collapse", "Glazed, unfocused eyes"],
      shockActionLabel: "Action:",
      shockActions: ["Keep pet warm (wrap in blanket)", "Lay on side, head slightly lower", "Transport to emergency vet IMMEDIATELY", "Handle gently (shock worsens with stress)"],
      
      firstAidTitle: "Emergency First Aid: Step-by-Step Protocol",
      firstAidSteps: [
        { step: 1, title: "Ensure Your Safety First", content: "Check for traffic (road accidents), move away from danger. Approach calmly. Even gentle pets may bite when injured." },
        { step: 2, title: "Assess Consciousness & Breathing", content: "If unconscious: Check breathing and pulse. If not breathing, begin CPR (30 compressions : 2 breaths). If conscious: Speak softly, do NOT force movement." },
        { step: 3, title: "Control Bleeding", content: "Apply direct pressure with clean cloth for 3-5 minutes. Do NOT lift to check. Add more layers if blood soaks through. For limb bleeding, elevate if possible." },
        { step: 4, title: "Immobilize for Transport", content: "Assume spinal injury if: hit by vehicle, fall from height, unable to move back legs. Use rigid board for small pets, blanket as stretcher for large dogs. Keep spine straight." },
        { step: 5, title: "Keep Warm (Prevent Shock)", content: "Wrap in blanket or towels. Do NOT use heating pads. Handle gently." },
        { step: 6, title: "Muzzle (If Necessary)", content: "Only if conscious and showing aggression. Do NOT muzzle if: vomiting, difficulty breathing, unconscious, or facial injuries." },
        { step: 7, title: "Transport to Emergency Vet", content: "Call ahead. Describe injuries. Drive carefully. Have helper monitor pet if possible." }
      ],
      
      whatNotTitle: "What NOT to Do After Accidents",
      whatNotItems: [
        { title: "Don't give food or water", reason: "Surgery may be needed, choking risk" },
        { title: "Don't give human medications", reason: "Paracetamol/ibuprofen are TOXIC to pets" },
        { title: "Don't move pet unnecessarily", reason: "Can worsen spinal injuries, internal bleeding" },
        { title: "Don't apply ointments to wounds", reason: "Interferes with veterinary treatment" },
        { title: "Don't 'wait and see'", reason: "Hidden injuries progress over hours" },
        { title: "Don't panic", reason: "Pets sense stress, worsens shock" }
      ],
      
      whenToGoTitle: "When to Go to Emergency Vet",
      goImmediatelyTitle: "🚨 ALWAYS GO IMMEDIATELY for:",
      goImmediatelyItems: ["Hit by vehicle (even if seems fine)", "Fall from height >1 meter", "Dog fight with visible wounds", "Any loss of consciousness", "Difficulty breathing", "Bleeding that won't stop", "Unable to stand or walk", "Crying out in pain", "Pale gums", "Visible fractures"],
      urgentTitle: "⚠️ Urgent Visit (Within 24 hours):",
      urgentItems: ["Minor limping (able to bear weight)", "Small cuts or abrasions", "Mild swelling", "Behavioral changes after incident"],
      whenInDoubt: "When in Doubt: GO TO VET. Internal injuries worsen over hours. Early detection saves lives.",
      
      vetTreatmentTitle: "Emergency Vet Trauma Treatment",
      expectTitle: "What to Expect:",
      stabilizationTitle: "Initial Stabilization (First 30-60 min)",
      stabilizationItems: ["Oxygen therapy", "IV fluids (treat shock)", "Pain management", "Temperature regulation"],
      diagnosticTitle: "Diagnostic Workup",
      diagnosticItems: ["Physical examination (head-to-tail)", "Bloodwork (organ function, blood loss)", "X-rays (fractures, lung contusions)", "Ultrasound (internal bleeding)"],
      costEstimatesTitle: "💰 Cost Estimates",
      costTableHeaders: ["Trauma Type", "Cost Range (RM)"],
      costTableRows: [
        { type: "Minor (abrasions, small wounds)", cost: "300-800" },
        { type: "Moderate (fractures, no surgery)", cost: "1,000-3,000" },
        { type: "Severe (internal injuries, surgery)", cost: "3,000-10,000+" },
        { type: "Road accident (average)", cost: "1,500-5,000" },
        { type: "High-rise fall (average)", cost: "2,000-6,000" }
      ],
      depositNote: "Most emergency vets require 50-100% deposit upfront.",
      
      preventionTitle: "Prevention: Reduce Accident Risk",
      preventionCategories: [
        { emoji: "🚗", title: "Road Safety", items: ["Secure fencing/gates", "Leash always near roads", "Supervise outdoor time", "Keep cats indoors/catios"] },
        { emoji: "🏠", title: "Home Safety", items: ["Secure windows/balconies", "Block high balcony access", "Gate off staircases", "Supervise dog interactions"] },
        { emoji: "📱", title: "Preparedness", items: ["Save emergency vet contact", "Know 24-hour clinic location", "Keep first aid kit in car", "Have blanket for stretcher"] }
      ],
      criticalTakeawaysTitle: "Critical Takeaways",
      criticalTakeaways: [
        "Assume internal injuries in all accidents",
        "Watch for shock (pale gums, weakness)",
        "Immobilize spine during transport",
        "Go to vet even if pet 'seems okay'",
        "Golden hour: First 60 minutes are critical"
      ],
      
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "My dog was hit by a motorcycle but seems fine, just limping. Do I really need to go to the vet?", a: "YES—go to emergency vet immediately. Internal injuries (bleeding, organ damage, lung bruising) are common in vehicle accidents and may NOT show symptoms for hours. By the time symptoms appear, internal bleeding may be severe and life-threatening. X-rays and examination are essential for ALL traffic accidents." },
        { q: "My cat fell from the 3rd floor but landed on her feet and walked away. Is she okay?", a: "Not necessarily. High-rise syndrome commonly causes lung bruising, broken jaw, fractured limbs, and internal injuries that aren't immediately obvious. Cats are experts at hiding pain. Even if walking, she needs emergency vet examination within 1-2 hours. Lung bruising symptoms can develop 6-12 hours after the fall." },
        { q: "There's a small bite wound from a dog fight. Can I clean it at home?", a: "No—dog bite wounds require veterinary attention even if small. Bite wounds create puncture injuries with hidden damage under the skin. What looks like a small puncture can have extensive trauma underneath. Infection develops rapidly (within 24-48 hours). See vet within 4-6 hours." },
        { q: "How do I transport an injured large dog alone?", a: "Use a blanket as stretcher—slide blanket under dog, grasp corners firmly, lift as one unit while keeping dog level. If spinal injury suspected, slide rigid board under dog first. For car: Slide dog in on blanket, support with towels to prevent rolling. Call emergency vet—they may have staff come out to assist." },
        { q: "Should I remove the object if something is impaling my pet?", a: "NO—never remove impaling objects. The object may be sealing a blood vessel; removing it can cause massive bleeding. Secure the object to prevent movement (tape, cloth around it—not tight), and transport immediately to emergency vet." }
      ],
      
      relatedArticles: [
        { title: "Emergency Transport Guide", description: "Safely transport injured pets to the vet" },
        { title: "Post-Emergency Care", description: "Recovery after accidents and trauma" },
        { title: "Pet Insurance Guide", description: "Cover accident treatment costs" },
        { title: "Prevention Guide", description: "Reduce accident risk for your pet" }
      ]
    },
    ms: {
      metaTitle: "Protokol Kemalangan Haiwan Peliharaan Malaysia: Pertolongan Cemas, Rawatan & Pengangkutan",
      metaDescription: "Panduan lengkap kemalangan haiwan peliharaan di Malaysia: kemalangan jalan raya, jatuh, pergaduhan anjing, trauma. Pelajari pertolongan cemas kecemasan, pengangkutan selamat.",
      category: "Kecemasan",
      title: "Apa Yang Perlu Dilakukan Apabila Haiwan Peliharaan Anda Mengalami Kemalangan: Protokol Kecemasan Lengkap Malaysia",
      date: "1 Januari 2025",
      readTime: "14 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroImageAlt: "Anjing yang cedera menerima pertolongan cemas kecemasan selepas kemalangan",
      heroImageCaption: "Ketahui apa yang perlu dilakukan apabila haiwan peliharaan anda mengalami kemalangan - ia boleh menyelamatkan nyawa mereka",
      
      emergencyTitle: "Haiwan Peliharaan Mengalami Kemalangan? Bertindak Sekarang!",
      emergencyText: "Banyak kecederaan teruk TIDAK kelihatan. Pendarahan dalaman dan kerosakan organ memerlukan rawatan vet segera. Angkut dengan berhati-hati.",
      emergencyButton: "Cari Vet 24/7 Berdekatan",
      
      tldr: [
        "Kecederaan tersembunyi adalah kebiasaan, bukan pengecualian: Sentiasa jumpa vet selepas kemalangan, walaupun haiwan kelihatan sihat",
        "Jam keemasan: 60 minit pertama kritikal untuk kelangsungan hidup dalam trauma teruk",
        "Gerakkan dengan berhati-hati: Pengendalian yang tidak betul boleh memburukkan kecederaan tulang belakang",
        "Kejutan membunuh: Kemerosotan cepat boleh berlaku 15-30 minit selepas kemalangan",
        "Kos kecemasan: RM 1,000-6,000+ (pemeriksaan trauma, pembedahan, kemasukan hospital)"
      ],
      
      tocItems: [
        { id: "types", title: "Jenis Kemalangan Haiwan Peliharaan di Malaysia" },
        { id: "hidden-injuries", title: "Mengapa Kecederaan Tersembunyi Adalah Kebiasaan" },
        { id: "abc-assessment", title: "Penilaian ABC" },
        { id: "shock", title: "Mengenali Kejutan: Pembunuh Senyap" },
        { id: "first-aid", title: "Protokol Pertolongan Cemas Kecemasan" },
        { id: "what-not-to-do", title: "Apa Yang TIDAK Boleh Dilakukan Selepas Kemalangan" },
        { id: "when-to-go", title: "Bila Perlu Pergi ke Vet Kecemasan" },
        { id: "vet-treatment", title: "Rawatan Trauma Vet Kecemasan" },
        { id: "prevention", title: "Pencegahan: Kurangkan Risiko Kemalangan" },
        { id: "faqs", title: "Soalan Lazim" }
      ],
      
      typesTitle: "Jenis Kemalangan Haiwan Peliharaan di Malaysia",
      accidentTypes: [
        {
          emoji: "🚗",
          title: "Kemalangan Jalan Raya (Paling Biasa)",
          context: "Konteks Malaysia:",
          contextDesc: "Populasi haiwan terbiar tinggi, haiwan bebas berkeliaran, trafik padat = 40-50% kes trauma kecemasan.",
          items: ["Dilanggar kereta, motosikal, basikal", "Diseret/dilanggar", "Kecederaan berganda biasa (patah, pendarahan dalaman, trauma kepala)"]
        },
        {
          icon: "Building",
          title: "Jatuh dari Tingkat Tinggi",
          context: "Sindrom Tingkat Tinggi:",
          contextDesc: "Biasa di kondo KL, Penang. Kucing jatuh dari balkoni 2+ tingkat.",
          items: ["Lebam paru-paru (lebam akibat hentaman)", "Patah kaki/pelvis", "Patah rahang (biasa pada kucing)", "Kecederaan dalaman mungkin tidak kelihatan serta-merta"]
        },
        {
          emoji: "🐕",
          title: "Pergaduhan Anjing",
          items: ["Luka tusukan (mungkin kelihatan kecil tetapi meluas di bawah)", "Kecederaan himpitan pada anjing kecil dari anjing besar", "Luka gigitan menjadi jangkitan dengan cepat (24-48 jam)", "Gigitan toraks/leher boleh mengancam nyawa serta-merta"]
        },
        {
          emoji: "⚡",
          title: "Trauma Lain",
          items: ["Tersepit di pintu pagar, pintu, tingkap kereta", "Kecederaan tapak pembinaan", "Serangan haiwan (ular, biawak)", "Melecur (bunga api, air panas)"]
        }
      ],
      
      hiddenTitle: "Mengapa \"Kelihatan Baik\" Tidak Bermakna Apa-apa Selepas Trauma",
      hiddenChallenge: "Cabaran Kritikal",
      hiddenDesc: "Banyak kecederaan teruk TIDAK kelihatan serta-merta. Pendarahan dalaman, kerosakan organ, dan kecederaan tulang belakang boleh wujud walaupun haiwan anda kelihatan \"okay\" dari luar.",
      stats: [
        { value: "70%", desc: "haiwan kemalangan jalan raya mempunyai kecederaan dalaman yang tidak kelihatan dari luar" },
        { value: "6-12 jam", desc: "gejala pendarahan dalaman mungkin mengambil masa ini untuk muncul" },
        { value: "60 min", desc: "\"Jam Keemasan\" - tempoh kritikal untuk kelangsungan hidup trauma" }
      ],
      
      abcTitle: "Penilaian ABC",
      abcSteps: [
        {
          letter: "A",
          title: "SALURAN UDARA",
          desc: "Adakah saluran udara jelas? Adakah haiwan bernafas?",
          checkFor: ["Pergerakan pernafasan", "Dada naik turun", "Pergerakan udara dari hidung"],
          emergency: "Jika TIDAK bernafas:",
          emergencyActions: ["Bersihkan mulut dari darah/serpihan", "Mulakan pernafasan bantuan (2 hembusan)", "Panggil bantuan, angkut segera"]
        },
        {
          letter: "B",
          title: "PERNAFASAN",
          desc: "Bagaimana haiwan bernafas?",
          checkFor: ["Anjing: 10-30 nafas/minit semasa berehat", "Kucing: 20-30 nafas/minit"],
          emergency: "Tanda Kecemasan:",
          emergencyActions: ["Pernafasan cepat, cetek", "Tercungap, pernafasan mulut terbuka", "Gusi biru/ungu (kekurangan oksigen)", "Pernafasan susah (usaha yang jelas)"]
        },
        {
          letter: "C",
          title: "PEREDARAN",
          desc: "Adakah jantung berdegup? Adakah gusi merah jambu?",
          checkFor: ["Warna gusi (sepatutnya merah jambu)", "Masa pengisian kapilari (tekan gusi, warna kembali <2 saat)", "Denyut nadi (bahagian dalam paha, arteri femoral)"],
          emergency: "Tanda KEJUTAN:",
          emergencyActions: ["Gusi pucat, putih, atau kelabu", "Pengisian kapilari >3 saat", "Denyut lemah atau tiada", "Bahagian hujung sejuk (kaki, telinga)"]
        }
      ],
      checkLabel: "Semak untuk:",
      normalLabel: "Kadar normal:",
      
      shockTitle: "Mengenali Kejutan: Pembunuh Senyap",
      shockWhat: "Apakah Kejutan?",
      shockDesc: "Aliran darah yang tidak mencukupi ke organ, menyebabkan kegagalan organ dan kematian jika tidak dirawat. Boleh berkembang dalam <strong>15-30 minit</strong> selepas kemalangan.",
      shockSymptomsLabel: "Gejala Kejutan:",
      shockSymptoms: ["Gusi pucat atau putih", "Denyut nadi cepat, lemah", "Pernafasan cepat", "Kaki/telinga sejuk", "Kelemahan, pengsan", "Mata tidak fokus"],
      shockActionLabel: "Tindakan:",
      shockActions: ["Pastikan haiwan hangat (balut dalam selimut)", "Baringkan di sisi, kepala sedikit rendah", "Angkut ke vet kecemasan SEGERA", "Kendalikan dengan lembut (kejutan bertambah buruk dengan tekanan)"],
      
      firstAidTitle: "Pertolongan Cemas Kecemasan: Protokol Langkah Demi Langkah",
      firstAidSteps: [
        { step: 1, title: "Pastikan Keselamatan Anda Dahulu", content: "Semak trafik (kemalangan jalan raya), bergerak dari bahaya. Dekati dengan tenang. Walaupun haiwan yang lembut mungkin menggigit apabila cedera." },
        { step: 2, title: "Menilai Kesedaran & Pernafasan", content: "Jika tidak sedarkan diri: Semak pernafasan dan denyut. Jika tidak bernafas, mulakan CPR (30 tekanan : 2 hembusan). Jika sedar: Bercakap dengan lembut, JANGAN paksa pergerakan." },
        { step: 3, title: "Kawal Pendarahan", content: "Tekan terus dengan kain bersih selama 3-5 minit. JANGAN angkat untuk semak. Tambah lapisan jika darah meresap. Untuk pendarahan anggota, tinggikan jika boleh." },
        { step: 4, title: "Tidak Boleh Gerak untuk Pengangkutan", content: "Andaikan kecederaan tulang belakang jika: dilanggar kenderaan, jatuh dari ketinggian, tidak dapat gerakkan kaki belakang. Gunakan papan keras untuk haiwan kecil, selimut sebagai pengusung untuk anjing besar. Pastikan tulang belakang lurus." },
        { step: 5, title: "Pastikan Hangat (Cegah Kejutan)", content: "Balut dalam selimut atau tuala. JANGAN gunakan pad pemanas. Kendalikan dengan lembut." },
        { step: 6, title: "Muncung (Jika Perlu)", content: "Hanya jika sedar dan menunjukkan agresif. JANGAN muncung jika: muntah, kesukaran bernafas, tidak sedarkan diri, atau kecederaan muka." },
        { step: 7, title: "Angkut ke Vet Kecemasan", content: "Hubungi dahulu. Terangkan kecederaan. Pandu dengan berhati-hati. Minta pembantu memantau haiwan jika boleh." }
      ],
      
      whatNotTitle: "Apa Yang TIDAK Boleh Dilakukan Selepas Kemalangan",
      whatNotItems: [
        { title: "Jangan beri makanan atau air", reason: "Pembedahan mungkin diperlukan, risiko tercekik" },
        { title: "Jangan beri ubat manusia", reason: "Paracetamol/ibuprofen BERACUN untuk haiwan peliharaan" },
        { title: "Jangan gerakkan haiwan tanpa perlu", reason: "Boleh memburukkan kecederaan tulang belakang, pendarahan dalaman" },
        { title: "Jangan sapukan salap pada luka", reason: "Mengganggu rawatan veterinar" },
        { title: "Jangan 'tunggu dan lihat'", reason: "Kecederaan tersembunyi berkembang selama berjam-jam" },
        { title: "Jangan panik", reason: "Haiwan merasakan tekanan, memburukkan kejutan" }
      ],
      
      whenToGoTitle: "Bila Perlu Pergi ke Vet Kecemasan",
      goImmediatelyTitle: "🚨 SENTIASA PERGI SEGERA untuk:",
      goImmediatelyItems: ["Dilanggar kenderaan (walaupun kelihatan sihat)", "Jatuh dari ketinggian >1 meter", "Pergaduhan anjing dengan luka kelihatan", "Sebarang kehilangan kesedaran", "Kesukaran bernafas", "Pendarahan yang tidak berhenti", "Tidak dapat berdiri atau berjalan", "Menjerit kesakitan", "Gusi pucat", "Patah yang kelihatan"],
      urgentTitle: "⚠️ Lawatan Segera (Dalam 24 jam):",
      urgentItems: ["Tempang kecil (boleh menanggung berat)", "Luka atau melecet kecil", "Bengkak ringan", "Perubahan tingkah laku selepas insiden"],
      whenInDoubt: "Jika Ragu: PERGI KE VET. Kecederaan dalaman bertambah buruk selama berjam-jam. Pengesanan awal menyelamatkan nyawa.",
      
      vetTreatmentTitle: "Rawatan Trauma Vet Kecemasan",
      expectTitle: "Apa Yang Dijangkakan:",
      stabilizationTitle: "Penstabilan Awal (30-60 minit pertama)",
      stabilizationItems: ["Terapi oksigen", "Cecair IV (rawat kejutan)", "Pengurusan kesakitan", "Pengawalan suhu"],
      diagnosticTitle: "Pemeriksaan Diagnostik",
      diagnosticItems: ["Pemeriksaan fizikal (kepala ke ekor)", "Ujian darah (fungsi organ, kehilangan darah)", "X-ray (patah, lebam paru-paru)", "Ultrasound (pendarahan dalaman)"],
      costEstimatesTitle: "💰 Anggaran Kos",
      costTableHeaders: ["Jenis Trauma", "Julat Kos (RM)"],
      costTableRows: [
        { type: "Ringan (melecet, luka kecil)", cost: "300-800" },
        { type: "Sederhana (patah, tiada pembedahan)", cost: "1,000-3,000" },
        { type: "Teruk (kecederaan dalaman, pembedahan)", cost: "3,000-10,000+" },
        { type: "Kemalangan jalan raya (purata)", cost: "1,500-5,000" },
        { type: "Jatuh tingkat tinggi (purata)", cost: "2,000-6,000" }
      ],
      depositNote: "Kebanyakan vet kecemasan memerlukan deposit 50-100% terlebih dahulu.",
      
      preventionTitle: "Pencegahan: Kurangkan Risiko Kemalangan",
      preventionCategories: [
        { emoji: "🚗", title: "Keselamatan Jalan Raya", items: ["Pagar/pintu pagar yang selamat", "Sentiasa tali leher berhampiran jalan", "Pantau masa di luar", "Simpan kucing di dalam/catios"] },
        { emoji: "🏠", title: "Keselamatan Rumah", items: ["Tingkap/balkoni selamat", "Halang akses balkoni tinggi", "Pintu pagar di tangga", "Pantau interaksi anjing"] },
        { emoji: "📱", title: "Kesediaan", items: ["Simpan kenalan vet kecemasan", "Tahu lokasi klinik 24 jam", "Simpan kit pertolongan cemas dalam kereta", "Ada selimut untuk pengusung"] }
      ],
      criticalTakeawaysTitle: "Perkara Penting",
      criticalTakeaways: [
        "Andaikan kecederaan dalaman dalam semua kemalangan",
        "Perhatikan kejutan (gusi pucat, kelemahan)",
        "Tidak boleh gerak tulang belakang semasa pengangkutan",
        "Pergi ke vet walaupun haiwan 'kelihatan okay'",
        "Jam keemasan: 60 minit pertama adalah kritikal"
      ],
      
      faqTitle: "Soalan Lazim",
      faqs: [
        { q: "Anjing saya dilanggar motosikal tetapi kelihatan sihat, hanya tempang. Adakah saya benar-benar perlu pergi ke vet?", a: "YA—pergi ke vet kecemasan segera. Kecederaan dalaman (pendarahan, kerosakan organ, lebam paru-paru) adalah biasa dalam kemalangan kenderaan dan mungkin TIDAK menunjukkan gejala selama berjam-jam. Apabila gejala muncul, pendarahan dalaman mungkin sudah teruk dan mengancam nyawa. X-ray dan pemeriksaan adalah penting untuk SEMUA kemalangan trafik." },
        { q: "Kucing saya jatuh dari tingkat 3 tetapi mendarat di kaki dan berjalan pergi. Adakah dia okay?", a: "Tidak semestinya. Sindrom tingkat tinggi biasanya menyebabkan lebam paru-paru, patah rahang, patah anggota, dan kecederaan dalaman yang tidak jelas serta-merta. Kucing adalah pakar menyembunyikan kesakitan. Walaupun berjalan, dia memerlukan pemeriksaan vet kecemasan dalam 1-2 jam. Gejala lebam paru-paru boleh berkembang 6-12 jam selepas jatuh." },
        { q: "Ada luka gigitan kecil dari pergaduhan anjing. Bolehkah saya bersihkan di rumah?", a: "Tidak—luka gigitan anjing memerlukan perhatian veterinar walaupun kecil. Luka gigitan mencipta kecederaan tusukan dengan kerosakan tersembunyi di bawah kulit. Apa yang kelihatan seperti tusukan kecil boleh mempunyai trauma meluas di bawahnya. Jangkitan berkembang dengan cepat (dalam 24-48 jam). Jumpa vet dalam 4-6 jam." },
        { q: "Bagaimana saya mengangkut anjing besar yang cedera seorang diri?", a: "Gunakan selimut sebagai pengusung—gelongsorkan selimut di bawah anjing, pegang sudut dengan kuat, angkat sebagai satu unit sambil menjaga anjing rata. Jika kecederaan tulang belakang disyaki, gelongsorkan papan keras di bawah anjing dahulu. Untuk kereta: Gelongsorkan anjing masuk atas selimut, sokong dengan tuala untuk cegah bergolek. Hubungi vet kecemasan—mereka mungkin ada kakitangan keluar untuk membantu." },
        { q: "Patutkah saya keluarkan objek jika sesuatu menusuk haiwan peliharaan saya?", a: "TIDAK—jangan sekali-kali keluarkan objek yang menusuk. Objek itu mungkin menutup saluran darah; mengeluarkannya boleh menyebabkan pendarahan besar. Selamatkan objek untuk cegah pergerakan (pita, kain di sekelilingnya—tidak ketat), dan angkut segera ke vet kecemasan." }
      ],
      
      relatedArticles: [
        { title: "Panduan Pengangkutan Kecemasan", description: "Angkut haiwan cedera ke vet dengan selamat" },
        { title: "Penjagaan Selepas Kecemasan", description: "Pemulihan selepas kemalangan dan trauma" },
        { title: "Panduan Insurans Haiwan Peliharaan", description: "Lindungi kos rawatan kemalangan" },
        { title: "Panduan Pencegahan", description: "Kurangkan risiko kemalangan untuk haiwan anda" }
      ]
    },
    zh: {
      metaTitle: "马来西亚宠物事故急救：急救、兽医护理和运输",
      metaDescription: "马来西亚宠物事故完整指南：交通事故、跌落、狗打架、创伤。学习紧急急救、安全运输、何时送医。分步协议。",
      category: "紧急情况",
      title: "宠物发生事故时该怎么办：马来西亚完整急救协议",
      date: "2025年1月1日",
      readTime: "14分钟阅读",
      reviewedBy: "由马来西亚执照兽医审核",
      heroImageAlt: "受伤的宠物狗在街上接受紧急急救",
      heroImageCaption: "知道宠物发生事故时该怎么做——这可能挽救它们的生命",
      
      emergencyTitle: "宠物发生事故？立即行动！",
      emergencyText: "许多严重的伤害是不可见的。内出血和器官损伤需要立即兽医护理。小心运输。",
      emergencyButton: "查找附近24/7兽医",
      
      tldr: [
        "隐藏伤害是常态，而非例外：事故后务必看兽医，即使宠物看起来没事",
        "黄金时间：严重创伤中，前60分钟对生存至关重要",
        "小心移动：不当处理会加重脊柱损伤",
        "休克致命：事故后15-30分钟内可能发生快速恶化",
        "急救费用：RM 1,000-6,000+（创伤检查、手术、住院）"
      ],
      
      tocItems: [
        { id: "types", title: "马来西亚宠物事故类型" },
        { id: "hidden-injuries", title: "为什么隐藏伤害是常态" },
        { id: "abc-assessment", title: "ABC评估" },
        { id: "shock", title: "识别休克：无声杀手" },
        { id: "first-aid", title: "紧急急救协议" },
        { id: "what-not-to-do", title: "事故后不该做什么" },
        { id: "when-to-go", title: "何时去急诊兽医" },
        { id: "vet-treatment", title: "急诊兽医创伤治疗" },
        { id: "prevention", title: "预防：减少事故风险" },
        { id: "faqs", title: "常见问题" }
      ],
      
      typesTitle: "马来西亚宠物事故类型",
      accidentTypes: [
        {
          emoji: "🚗",
          title: "交通事故（最常见）",
          context: "马来西亚背景：",
          contextDesc: "流浪动物多、宠物自由活动、交通密集 = 40-50%的急诊创伤病例。",
          items: ["被汽车、摩托车、自行车撞击", "被拖拽/碾压", "多处伤害常见（骨折、内出血、头部创伤）"]
        },
        {
          icon: "Building",
          title: "高层跌落",
          context: "高层综合症：",
          contextDesc: "在吉隆坡、槟城公寓中常见。猫从2层以上阳台跌落。",
          items: ["肺挫伤（撞击造成的淤伤）", "腿/骨盆骨折", "下颌骨折（猫常见）", "内伤可能不会立即显现"]
        },
        {
          emoji: "🐕",
          title: "狗打架",
          items: ["穿刺伤（可能看起来小但下面很广泛）", "大狗对小狗的挤压伤", "咬伤迅速感染（24-48小时）", "胸部/颈部咬伤可能立即危及生命"]
        },
        {
          emoji: "⚡",
          title: "其他创伤",
          items: ["被门闸、门、车窗夹住", "建筑工地伤害", "动物袭击（蛇、巨蜥）", "烧伤（烟花、开水）"]
        }
      ],
      
      hiddenTitle: "为什么「看起来没事」在创伤后毫无意义",
      hiddenChallenge: "关键挑战",
      hiddenDesc: "许多严重的伤害不会立即可见。即使您的宠物外表看起来「正常」，内出血、器官损伤和脊柱损伤也可能存在。",
      stats: [
        { value: "70%", desc: "交通事故宠物有外表不可见的内伤" },
        { value: "6-12小时", desc: "内出血症状可能需要这么长时间才会出现" },
        { value: "60分钟", desc: "「黄金时间」 - 创伤生存的关键窗口" }
      ],
      
      abcTitle: "ABC评估",
      abcSteps: [
        {
          letter: "A",
          title: "气道",
          desc: "气道通畅吗？宠物在呼吸吗？",
          checkFor: ["呼吸运动", "胸部起伏", "鼻子气流"],
          emergency: "如果没有呼吸：",
          emergencyActions: ["清除口中的血液/碎屑", "开始人工呼吸（2次吹气）", "呼叫帮助，立即运输"]
        },
        {
          letter: "B",
          title: "呼吸",
          desc: "宠物呼吸如何？",
          checkFor: ["狗：休息时10-30次呼吸/分钟", "猫：20-30次呼吸/分钟"],
          emergency: "紧急信号：",
          emergencyActions: ["快速、浅呼吸", "喘气、张嘴呼吸", "蓝/紫色牙龈（缺氧）", "费力呼吸（明显用力）"]
        },
        {
          letter: "C",
          title: "循环",
          desc: "心脏在跳动吗？牙龈是粉红色的吗？",
          checkFor: ["牙龈颜色（应该是粉红色）", "毛细血管充盈时间（按压牙龈，颜色在<2秒内恢复）", "脉搏（大腿内侧，股动脉）"],
          emergency: "休克信号：",
          emergencyActions: ["苍白、白色或灰色牙龈", "毛细血管充盈>3秒", "脉搏弱或无", "末梢冰冷（爪子、耳朵）"]
        }
      ],
      checkLabel: "检查：",
      normalLabel: "正常速率：",
      
      shockTitle: "识别休克：无声杀手",
      shockWhat: "什么是休克？",
      shockDesc: "流向器官的血液不足，如不治疗会导致器官衰竭和死亡。可能在事故后<strong>15-30分钟</strong>内发展。",
      shockSymptomsLabel: "休克症状：",
      shockSymptoms: ["苍白或白色牙龈", "快速、微弱的脉搏", "快速呼吸", "爪子/耳朵冰冷", "虚弱、昏厥", "目光呆滞、不集中"],
      shockActionLabel: "行动：",
      shockActions: ["保持宠物温暖（用毯子包裹）", "侧躺，头部略低", "立即运送到急诊兽医", "轻柔处理（压力会加重休克）"],
      
      firstAidTitle: "紧急急救：分步协议",
      firstAidSteps: [
        { step: 1, title: "首先确保您的安全", content: "检查交通（交通事故），远离危险。平静地靠近。即使温和的宠物受伤时也可能咬人。" },
        { step: 2, title: "评估意识和呼吸", content: "如果失去意识：检查呼吸和脉搏。如果没有呼吸，开始心肺复苏（30次按压：2次吹气）。如果清醒：轻声说话，不要强迫移动。" },
        { step: 3, title: "控制出血", content: "用干净的布直接按压3-5分钟。不要抬起检查。如果血液浸透，添加更多层。对于肢体出血，如果可能的话抬高。" },
        { step: 4, title: "固定以便运输", content: "如果有以下情况，假设脊柱损伤：被车辆撞击、从高处跌落、无法移动后腿。小宠物使用硬板，大狗使用毯子作为担架。保持脊柱笔直。" },
        { step: 5, title: "保持温暖（防止休克）", content: "用毯子或毛巾包裹。不要使用加热垫。轻柔处理。" },
        { step: 6, title: "口套（如有必要）", content: "仅在清醒并表现出攻击性时使用。如果有以下情况，不要使用口套：呕吐、呼吸困难、失去意识或面部受伤。" },
        { step: 7, title: "运送到急诊兽医", content: "提前打电话。描述伤情。小心驾驶。如果可能，让帮手监测宠物。" }
      ],
      
      whatNotTitle: "事故后不该做什么",
      whatNotItems: [
        { title: "不要给食物或水", reason: "可能需要手术，有窒息风险" },
        { title: "不要给人用药物", reason: "扑热息痛/布洛芬对宠物有毒" },
        { title: "不要不必要地移动宠物", reason: "会加重脊柱损伤、内出血" },
        { title: "不要在伤口上涂药膏", reason: "干扰兽医治疗" },
        { title: "不要'等等看'", reason: "隐藏的伤害会在数小时内发展" },
        { title: "不要恐慌", reason: "宠物感知压力，会加重休克" }
      ],
      
      whenToGoTitle: "何时去急诊兽医",
      goImmediatelyTitle: "🚨 以下情况务必立即就医：",
      goImmediatelyItems: ["被车辆撞击（即使看起来没事）", "从>1米高度跌落", "有可见伤口的狗打架", "任何意识丧失", "呼吸困难", "无法止住的出血", "无法站立或行走", "疼痛哭叫", "牙龈苍白", "可见骨折"],
      urgentTitle: "⚠️ 紧急就诊（24小时内）：",
      urgentItems: ["轻微跛行（能承重）", "小伤口或擦伤", "轻度肿胀", "事件后行为变化"],
      whenInDoubt: "如有疑问：去看兽医。内伤会在数小时内恶化。早期发现挽救生命。",
      
      vetTreatmentTitle: "急诊兽医创伤治疗",
      expectTitle: "期望什么：",
      stabilizationTitle: "初步稳定（前30-60分钟）",
      stabilizationItems: ["氧气治疗", "静脉输液（治疗休克）", "疼痛管理", "温度调节"],
      diagnosticTitle: "诊断检查",
      diagnosticItems: ["全身体检（从头到尾）", "血液检查（器官功能、失血）", "X光（骨折、肺挫伤）", "超声波（内出血）"],
      costEstimatesTitle: "💰 费用估算",
      costTableHeaders: ["创伤类型", "费用范围（RM）"],
      costTableRows: [
        { type: "轻微（擦伤、小伤口）", cost: "300-800" },
        { type: "中度（骨折、无手术）", cost: "1,000-3,000" },
        { type: "严重（内伤、手术）", cost: "3,000-10,000+" },
        { type: "交通事故（平均）", cost: "1,500-5,000" },
        { type: "高层跌落（平均）", cost: "2,000-6,000" }
      ],
      depositNote: "大多数急诊兽医需要预付50-100%押金。",
      
      preventionTitle: "预防：减少事故风险",
      preventionCategories: [
        { emoji: "🚗", title: "道路安全", items: ["牢固的围栏/门", "靠近道路时始终系牵引绑", "监督户外时间", "让猫留在室内/猫阳台"] },
        { emoji: "🏠", title: "家庭安全", items: ["固定窗户/阳台", "阻止进入高阳台", "楼梯安装门", "监督狗的互动"] },
        { emoji: "📱", title: "准备工作", items: ["保存急诊兽医联系方式", "知道24小时诊所位置", "车里放急救包", "准备毯子做担架"] }
      ],
      criticalTakeawaysTitle: "关键要点",
      criticalTakeaways: [
        "所有事故都假设有内伤",
        "注意休克（牙龈苍白、虚弱）",
        "运输时固定脊柱",
        "即使宠物'看起来没事'也要去看兽医",
        "黄金时间：前60分钟至关重要"
      ],
      
      faqTitle: "常见问题",
      faqs: [
        { q: "我的狗被摩托车撞了，但看起来没事，只是有点跛。我真的需要去看兽医吗？", a: "是的——立即去急诊兽医。内伤（出血、器官损伤、肺挫伤）在车辆事故中很常见，可能数小时内不会显示症状。等症状出现时，内出血可能已经严重并危及生命。X光和检查对所有交通事故都是必需的。" },
        { q: "我的猫从3楼跌落，但用脚着地并走开了。她没事吧？", a: "不一定。高层综合症通常导致肺挫伤、下颌骨折、肢体骨折和不会立即显现的内伤。猫是隐藏疼痛的专家。即使在走路，她也需要在1-2小时内接受急诊兽医检查。肺挫伤症状可能在跌落后6-12小时内出现。" },
        { q: "狗打架后有一个小咬伤。我可以在家清洗吗？", a: "不行——即使很小，狗咬伤也需要兽医关注。咬伤造成皮下隐藏损伤的穿刺伤。看起来像小穿刺的伤口下面可能有广泛的创伤。感染迅速发展（24-48小时内）。在4-6小时内看兽医。" },
        { q: "我如何独自运送受伤的大狗？", a: "用毯子作为担架——把毯子滑到狗下面，紧紧抓住角落，保持狗水平地作为一个整体抬起。如果怀疑脊柱损伤，先把硬板滑到狗下面。对于汽车：在毯子上把狗滑入，用毛巾支撑防止翻滚。打电话给急诊兽医——他们可能有工作人员出来协助。" },
        { q: "如果有东西刺入我的宠物，我应该把它拔出来吗？", a: "不要——永远不要移除刺入的物体。该物体可能正在封住血管；移除它可能导致大量出血。固定物体防止移动（用胶带、布包围——不要太紧），立即运送到急诊兽医。" }
      ],
      
      relatedArticles: [
        { title: "紧急运输指南", description: "安全地将受伤宠物运送到兽医" },
        { title: "紧急后护理", description: "事故和创伤后的恢复" },
        { title: "宠物保险指南", description: "覆盖事故治疗费用" },
        { title: "预防指南", description: "减少宠物的事故风险" }
      ]
    }
  };
  
  return content[language] || content.en;
};

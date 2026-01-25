import { useLanguage } from '@/contexts/LanguageContext';
import { Thermometer, AlertTriangle, Shield, Bug, Heart, Droplets, Eye, Bone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import vetCare from '@/assets/vet-care.jpg';
import { Language } from '@/lib/translations';

const getContent = (language: Language) => {
  const content = {
    en: {
      metaTitle: "Common Pet Illnesses in Malaysia 2025: Symptoms, Treatment & Prevention",
      metaDescription: "Learn about tick fever, parvovirus, skin infections, and other common pet diseases in Malaysia's tropical climate. Symptoms, treatment costs, and prevention tips.",
      title: "Common Pet Illnesses in Malaysia and How to Prevent Them (2025)",
      category: "Health",
      date: "November 28, 2024",
      readTime: "10 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroAlt: "Veterinarian examining a pet for common illnesses",
      heroCaption: "Regular checkups help catch illnesses early",
      tldr: [
        "Tick fever (Ehrlichiosis): Most common in Malaysia, deadly if untreated",
        "Parvovirus: Highly contagious, 90% fatal in puppies without treatment",
        "Skin infections: Caused by hot, humid climate—look for scratching, hair loss",
        "Prevention: Regular tick prevention, vaccinations, and annual checkups",
        "Early detection saves lives and reduces treatment costs significantly"
      ],
      tocItems: [
        { id: "tick-fever", title: "Tick Fever (Ehrlichiosis)" },
        { id: "parvovirus", title: "Parvovirus (Parvo)" },
        { id: "skin-infections", title: "Skin Infections & Allergies" },
        { id: "ear-infections", title: "Ear Infections" },
        { id: "respiratory", title: "Respiratory Infections" },
        { id: "kidney", title: "Kidney Disease" },
        { id: "dental", title: "Dental Disease" },
        { id: "prevention", title: "Prevention Guide" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      intro: "Malaysia's tropical climate creates unique health challenges for pets. Hot, humid weather year-round means higher risk of parasites, infections, and heat-related conditions. Understanding these common illnesses helps you protect your furry family members.",
      tickFeverTitle: "Tick Fever (Ehrlichiosis)",
      tickFeverDesc: "Tick fever is the most common serious illness affecting dogs in Malaysia. It's transmitted by brown dog ticks and can be fatal if not treated promptly.",
      tickFeverSymptoms: ["High fever (40°C+)", "Loss of appetite", "Lethargy and weakness", "Bleeding gums or nose", "Pale gums (anemia)", "Swollen lymph nodes", "Weight loss"],
      tickFeverTreatment: "Treatment: Antibiotics (Doxycycline) for 4-6 weeks. Cost: RM 200-800 depending on severity. Blood transfusion may be needed in severe cases (RM 500-1,500).",
      tickFeverPrevention: ["Monthly tick prevention (Nexgard, Bravecto, Frontline)", "Regular tick checks after outdoor activities", "Keep grass short in your yard", "Avoid bushy, wooded areas"],
      parvoTitle: "Parvovirus (Parvo)",
      parvoDesc: "Parvovirus is highly contagious and affects unvaccinated puppies. Without treatment, survival rate is only 10%. With aggressive treatment, survival improves to 70-90%.",
      parvoSymptoms: ["Severe bloody diarrhea", "Persistent vomiting", "Extreme lethargy", "Loss of appetite", "Rapid dehydration", "High fever followed by low temperature"],
      parvoTreatment: "Treatment: Hospitalization, IV fluids, anti-nausea medication, antibiotics. Cost: RM 1,500-5,000 for 3-7 day hospitalization.",
      parvoPrevention: ["Complete vaccination series (6, 9, 12, 16 weeks)", "Avoid public areas until fully vaccinated", "Disinfect with bleach (1:30 dilution)"],
      skinTitle: "Skin Infections & Allergies",
      skinDesc: "Malaysia's humidity makes skin problems extremely common. Dogs and cats often develop bacterial, fungal, or allergic skin conditions.",
      skinSymptoms: ["Excessive scratching", "Hair loss (patches or general)", "Red, inflamed skin", "Hot spots", "Scabs or crusty patches", "Foul odor from skin"],
      skinTreatment: "Treatment: Medicated shampoos, oral antibiotics/antifungals, allergy medications. Cost: RM 100-500 for mild cases, RM 500-2,000 for chronic conditions.",
      skinPrevention: ["Regular bathing (every 1-2 weeks)", "Keep pet dry after rain/swimming", "Air-conditioned rest areas", "Quality diet with omega fatty acids"],
      earTitle: "Ear Infections",
      earDesc: "Floppy-eared dogs and cats are prone to ear infections in humid conditions. Yeast and bacteria thrive in warm, moist ear canals.",
      earSymptoms: ["Head shaking", "Scratching at ears", "Brown/black discharge", "Foul smell from ears", "Redness inside ear", "Pain when touching ears"],
      earTreatment: "Treatment: Ear cleaning, medicated drops, oral medication for severe cases. Cost: RM 80-300.",
      earPrevention: ["Weekly ear cleaning with vet-approved solution", "Dry ears after bathing/swimming", "Regular grooming for hairy ears"],
      respiratoryTitle: "Respiratory Infections",
      respiratoryDesc: "Kennel cough and cat flu are common, especially in multi-pet households or pets from shelters/pet shops.",
      respiratorySymptoms: ["Persistent coughing", "Sneezing", "Runny nose/eyes", "Loss of appetite", "Lethargy", "Fever"],
      respiratoryTreatment: "Treatment: Rest, antibiotics if bacterial, supportive care. Cost: RM 150-600.",
      respiratoryPrevention: ["Bordetella vaccine for dogs", "FVRCP vaccine for cats", "Good ventilation in living areas", "Quarantine new pets for 2 weeks"],
      kidneyTitle: "Kidney Disease",
      kidneyDesc: "Chronic kidney disease is common in older cats (15% of cats over 10 years) and some dog breeds. Early detection is crucial.",
      kidneySymptoms: ["Increased thirst", "Increased urination", "Weight loss", "Decreased appetite", "Vomiting", "Bad breath (uremic odor)"],
      kidneyTreatment: "Treatment: Prescription kidney diet, subcutaneous fluids, medications. Cost: RM 200-800/month for management.",
      kidneyPrevention: ["Annual blood tests for pets over 7 years", "Quality diet with appropriate protein", "Always provide fresh water", "Regular checkups"],
      dentalTitle: "Dental Disease",
      dentalDesc: "By age 3, 80% of dogs and 70% of cats have some form of dental disease. This can lead to pain, infection, and organ damage.",
      dentalSymptoms: ["Bad breath", "Yellow/brown tartar buildup", "Red, swollen gums", "Difficulty eating", "Drooling", "Loose or missing teeth"],
      dentalTreatment: "Treatment: Professional dental cleaning under anesthesia. Cost: RM 400-1,500 depending on extractions needed.",
      dentalPrevention: ["Daily tooth brushing (pet-safe toothpaste)", "Dental chews and toys", "Annual dental checkups", "Dental diet if recommended"],
      preventionTitle: "Complete Prevention Guide",
      preventionIntro: "Preventing illness is always cheaper and easier than treating it. Here's your complete prevention checklist:",
      preventionChecklist: [
        "Monthly tick/flea prevention (RM 50-100/month)",
        "Core vaccinations up to date",
        "Annual health checkups (RM 50-150)",
        "Annual blood tests for seniors (RM 150-300)",
        "Regular grooming and ear cleaning",
        "Quality diet appropriate for age/size",
        "Daily exercise and mental stimulation",
        "Keep environment clean and dry"
      ],
      faqs: [
        { q: "How often should I take my pet for checkups?", a: "Young, healthy pets: annually. Pets over 7 years: every 6 months. Pets with chronic conditions: as recommended by vet." },
        { q: "Are tick fever and heartworm the same?", a: "No. Tick fever is caused by bacteria from tick bites. Heartworm is caused by parasitic worms from mosquito bites. Both require prevention." },
        { q: "Can I give human medicine to my pet?", a: "NEVER give human medication without vet approval. Many human drugs (paracetamol, ibuprofen) are toxic to pets." },
        { q: "Why is my pet sick even though they're vaccinated?", a: "Vaccines protect against specific diseases. Pets can still get illnesses not covered by their vaccines, or immunity may have waned." },
        { q: "What's the most important vaccination?", a: "For dogs: Parvovirus, Distemper, Rabies. For cats: FVRCP (panleukopenia, calicivirus, herpesvirus), Rabies." }
      ],
      ctaTitle: "Worried About Your Pet's Health?",
      ctaText: "Find a trusted vet near you for checkups and preventive care."
    },
    ms: {
      metaTitle: "Penyakit Haiwan Peliharaan Biasa di Malaysia 2025: Simptom, Rawatan & Pencegahan",
      metaDescription: "Ketahui tentang demam kutu, parvovirus, jangkitan kulit, dan penyakit haiwan biasa lain dalam iklim tropika Malaysia. Simptom, kos rawatan, dan petua pencegahan.",
      title: "Penyakit Haiwan Peliharaan Biasa di Malaysia dan Cara Mencegahnya (2025)",
      category: "Kesihatan",
      date: "28 November 2024",
      readTime: "10 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroAlt: "Doktor veterinar memeriksa haiwan peliharaan untuk penyakit biasa",
      heroCaption: "Pemeriksaan berkala membantu mengesan penyakit awal",
      tldr: [
        "Demam kutu (Ehrlichiosis): Paling biasa di Malaysia, boleh maut jika tidak dirawat",
        "Parvovirus: Sangat berjangkit, 90% maut pada anak anjing tanpa rawatan",
        "Jangkitan kulit: Disebabkan iklim panas dan lembap—perhatikan garu, gugur bulu",
        "Pencegahan: Pencegahan kutu berkala, vaksinasi, dan pemeriksaan tahunan",
        "Pengesanan awal menyelamatkan nyawa dan mengurangkan kos rawatan dengan ketara"
      ],
      tocItems: [
        { id: "tick-fever", title: "Demam Kutu (Ehrlichiosis)" },
        { id: "parvovirus", title: "Parvovirus (Parvo)" },
        { id: "skin-infections", title: "Jangkitan Kulit & Alahan" },
        { id: "ear-infections", title: "Jangkitan Telinga" },
        { id: "respiratory", title: "Jangkitan Pernafasan" },
        { id: "kidney", title: "Penyakit Buah Pinggang" },
        { id: "dental", title: "Penyakit Gigi" },
        { id: "prevention", title: "Panduan Pencegahan" },
        { id: "faqs", title: "Soalan Lazim" },
      ],
      intro: "Iklim tropika Malaysia mencipta cabaran kesihatan unik untuk haiwan peliharaan. Cuaca panas dan lembap sepanjang tahun bermaksud risiko parasit, jangkitan, dan keadaan berkaitan haba lebih tinggi. Memahami penyakit biasa ini membantu anda melindungi ahli keluarga berbulu anda.",
      tickFeverTitle: "Demam Kutu (Ehrlichiosis)",
      tickFeverDesc: "Demam kutu adalah penyakit serius paling biasa yang menjejaskan anjing di Malaysia. Ia dihantar oleh kutu anjing coklat dan boleh membawa maut jika tidak dirawat segera.",
      tickFeverSymptoms: ["Demam tinggi (40°C+)", "Hilang selera makan", "Lesu dan lemah", "Gusi atau hidung berdarah", "Gusi pucat (anemia)", "Kelenjar limfa bengkak", "Penurunan berat badan"],
      tickFeverTreatment: "Rawatan: Antibiotik (Doxycycline) selama 4-6 minggu. Kos: RM 200-800 bergantung kepada keterukan. Pemindahan darah mungkin diperlukan dalam kes teruk (RM 500-1,500).",
      tickFeverPrevention: ["Pencegahan kutu bulanan (Nexgard, Bravecto, Frontline)", "Pemeriksaan kutu berkala selepas aktiviti luar", "Pastikan rumput pendek di halaman", "Elakkan kawasan belukar"],
      parvoTitle: "Parvovirus (Parvo)",
      parvoDesc: "Parvovirus sangat berjangkit dan menjejaskan anak anjing yang tidak divaksin. Tanpa rawatan, kadar kelangsungan hidup hanya 10%. Dengan rawatan agresif, kelangsungan hidup meningkat kepada 70-90%.",
      parvoSymptoms: ["Cirit-birit berdarah teruk", "Muntah berterusan", "Lesu melampau", "Hilang selera makan", "Dehidrasi cepat", "Demam tinggi diikuti suhu rendah"],
      parvoTreatment: "Rawatan: Hospitalisasi, cecair IV, ubat anti-loya, antibiotik. Kos: RM 1,500-5,000 untuk hospitalisasi 3-7 hari.",
      parvoPrevention: ["Siri vaksinasi lengkap (6, 9, 12, 16 minggu)", "Elakkan kawasan awam sehingga divaksin sepenuhnya", "Disinfeksi dengan peluntur (pencairan 1:30)"],
      skinTitle: "Jangkitan Kulit & Alahan",
      skinDesc: "Kelembapan Malaysia menjadikan masalah kulit sangat biasa. Anjing dan kucing sering mengalami keadaan kulit bakteria, kulat, atau alahan.",
      skinSymptoms: ["Garu berlebihan", "Gugur bulu (tampalan atau umum)", "Kulit merah dan meradang", "Hot spot", "Kudis atau tampalan berkerak", "Bau busuk dari kulit"],
      skinTreatment: "Rawatan: Syampu ubat, antibiotik/antikulat oral, ubat alahan. Kos: RM 100-500 untuk kes ringan, RM 500-2,000 untuk keadaan kronik.",
      skinPrevention: ["Mandi berkala (setiap 1-2 minggu)", "Pastikan haiwan kering selepas hujan/berenang", "Kawasan rehat berhawa dingin", "Diet berkualiti dengan asid lemak omega"],
      earTitle: "Jangkitan Telinga",
      earDesc: "Anjing dan kucing bertelinga jatuh terdedah kepada jangkitan telinga dalam keadaan lembap. Yis dan bakteria berkembang dalam saluran telinga yang hangat dan lembap.",
      earSymptoms: ["Menggoncang kepala", "Menggaru telinga", "Discaj coklat/hitam", "Bau busuk dari telinga", "Kemerahan dalam telinga", "Sakit bila menyentuh telinga"],
      earTreatment: "Rawatan: Pembersihan telinga, titisan ubat, ubat oral untuk kes teruk. Kos: RM 80-300.",
      earPrevention: ["Pembersihan telinga mingguan dengan larutan diluluskan vet", "Keringkan telinga selepas mandi/berenang", "Dandanan berkala untuk telinga berbulu"],
      respiratoryTitle: "Jangkitan Pernafasan",
      respiratoryDesc: "Batuk kandang dan selesema kucing adalah biasa, terutamanya dalam isi rumah berbilang haiwan atau haiwan dari pusat perlindungan/kedai haiwan.",
      respiratorySymptoms: ["Batuk berterusan", "Bersin", "Hidung/mata berair", "Hilang selera makan", "Lesu", "Demam"],
      respiratoryTreatment: "Rawatan: Rehat, antibiotik jika bakteria, penjagaan sokongan. Kos: RM 150-600.",
      respiratoryPrevention: ["Vaksin Bordetella untuk anjing", "Vaksin FVRCP untuk kucing", "Pengudaraan baik di kawasan kediaman", "Kuarantin haiwan baru selama 2 minggu"],
      kidneyTitle: "Penyakit Buah Pinggang",
      kidneyDesc: "Penyakit buah pinggang kronik adalah biasa pada kucing tua (15% kucing lebih 10 tahun) dan beberapa baka anjing. Pengesanan awal adalah kritikal.",
      kidneySymptoms: ["Dahaga meningkat", "Kencing meningkat", "Penurunan berat badan", "Selera makan menurun", "Muntah", "Nafas berbau (bau uremik)"],
      kidneyTreatment: "Rawatan: Diet buah pinggang preskripsi, cecair subkutan, ubat-ubatan. Kos: RM 200-800/bulan untuk pengurusan.",
      kidneyPrevention: ["Ujian darah tahunan untuk haiwan lebih 7 tahun", "Diet berkualiti dengan protein sesuai", "Sentiasa sediakan air bersih", "Pemeriksaan berkala"],
      dentalTitle: "Penyakit Gigi",
      dentalDesc: "Pada umur 3 tahun, 80% anjing dan 70% kucing mempunyai sejenis penyakit gigi. Ini boleh menyebabkan kesakitan, jangkitan, dan kerosakan organ.",
      dentalSymptoms: ["Nafas berbau", "Pembentukan tartar kuning/coklat", "Gusi merah dan bengkak", "Kesukaran makan", "Air liur meleleh", "Gigi longgar atau tercabut"],
      dentalTreatment: "Rawatan: Pembersihan gigi profesional di bawah bius. Kos: RM 400-1,500 bergantung kepada cabutan diperlukan.",
      dentalPrevention: ["Memberus gigi harian (ubat gigi selamat haiwan)", "Kunyahan dan mainan gigi", "Pemeriksaan gigi tahunan", "Diet gigi jika disyorkan"],
      preventionTitle: "Panduan Pencegahan Lengkap",
      preventionIntro: "Mencegah penyakit sentiasa lebih murah dan mudah daripada merawatnya. Berikut senarai semak pencegahan lengkap anda:",
      preventionChecklist: [
        "Pencegahan kutu/pinjal bulanan (RM 50-100/bulan)",
        "Vaksinasi teras terkini",
        "Pemeriksaan kesihatan tahunan (RM 50-150)",
        "Ujian darah tahunan untuk senior (RM 150-300)",
        "Dandanan dan pembersihan telinga berkala",
        "Diet berkualiti sesuai untuk umur/saiz",
        "Senaman harian dan rangsangan mental",
        "Pastikan persekitaran bersih dan kering"
      ],
      faqs: [
        { q: "Berapa kerap saya perlu membawa haiwan untuk pemeriksaan?", a: "Haiwan muda dan sihat: tahunan. Haiwan lebih 7 tahun: setiap 6 bulan. Haiwan dengan keadaan kronik: seperti disyorkan vet." },
        { q: "Adakah demam kutu dan cacing jantung sama?", a: "Tidak. Demam kutu disebabkan bakteria daripada gigitan kutu. Cacing jantung disebabkan cacing parasit daripada gigitan nyamuk. Kedua-duanya memerlukan pencegahan." },
        { q: "Bolehkah saya beri ubat manusia kepada haiwan saya?", a: "JANGAN SEKALI-KALI beri ubat manusia tanpa kelulusan vet. Banyak ubat manusia (paracetamol, ibuprofen) adalah toksik kepada haiwan." },
        { q: "Mengapa haiwan saya sakit walaupun sudah divaksin?", a: "Vaksin melindungi daripada penyakit tertentu. Haiwan masih boleh mendapat penyakit yang tidak dilindungi vaksin mereka, atau imuniti mungkin telah menurun." },
        { q: "Apakah vaksinasi paling penting?", a: "Untuk anjing: Parvovirus, Distemper, Rabies. Untuk kucing: FVRCP (panleukopenia, calicivirus, herpesvirus), Rabies." }
      ],
      ctaTitle: "Bimbang Tentang Kesihatan Haiwan Anda?",
      ctaText: "Cari vet dipercayai berhampiran anda untuk pemeriksaan dan penjagaan pencegahan."
    },
    zh: {
      metaTitle: "马来西亚常见宠物疾病 2025：症状、治疗与预防",
      metaDescription: "了解蜱热、犬细小病毒、皮肤感染以及马来西亚热带气候中其他常见宠物疾病。症状、治疗费用和预防提示。",
      title: "马来西亚常见宠物疾病及预防方法（2025）",
      category: "健康",
      date: "2024年11月28日",
      readTime: "10分钟阅读",
      reviewedBy: "由马来西亚持牌兽医审核",
      heroAlt: "兽医检查宠物常见疾病",
      heroCaption: "定期检查有助于早期发现疾病",
      tldr: [
        "蜱热（埃立克体病）：马来西亚最常见，不治疗会致命",
        "犬细小病毒：高度传染，未治疗的幼犬死亡率90%",
        "皮肤感染：由炎热潮湿气候引起——注意抓挠、脱毛",
        "预防：定期驱蜱、疫苗接种和年度检查",
        "早期发现可挽救生命并显著降低治疗费用"
      ],
      tocItems: [
        { id: "tick-fever", title: "蜱热（埃立克体病）" },
        { id: "parvovirus", title: "犬细小病毒" },
        { id: "skin-infections", title: "皮肤感染与过敏" },
        { id: "ear-infections", title: "耳部感染" },
        { id: "respiratory", title: "呼吸道感染" },
        { id: "kidney", title: "肾脏疾病" },
        { id: "dental", title: "牙科疾病" },
        { id: "prevention", title: "预防指南" },
        { id: "faqs", title: "常见问题" },
      ],
      intro: "马来西亚的热带气候给宠物带来了独特的健康挑战。全年炎热潮湿的天气意味着寄生虫、感染和热相关疾病的风险更高。了解这些常见疾病有助于您保护您的毛茸茸家庭成员。",
      tickFeverTitle: "蜱热（埃立克体病）",
      tickFeverDesc: "蜱热是马来西亚影响狗最常见的严重疾病。它通过棕色犬蜱传播，如果不及时治疗可能致命。",
      tickFeverSymptoms: ["高烧（40°C以上）", "食欲不振", "嗜睡和虚弱", "牙龈或鼻子出血", "牙龈苍白（贫血）", "淋巴结肿大", "体重下降"],
      tickFeverTreatment: "治疗：抗生素（强力霉素）4-6周。费用：RM 200-800，取决于严重程度。严重病例可能需要输血（RM 500-1,500）。",
      tickFeverPrevention: ["每月驱蜱（Nexgard、Bravecto、Frontline）", "户外活动后定期检查蜱虫", "保持院子里的草坪短", "避免灌木丛生的地方"],
      parvoTitle: "犬细小病毒",
      parvoDesc: "犬细小病毒具有高度传染性，影响未接种疫苗的幼犬。没有治疗，存活率只有10%。经过积极治疗，存活率提高到70-90%。",
      parvoSymptoms: ["严重的血性腹泻", "持续呕吐", "极度嗜睡", "食欲不振", "快速脱水", "高烧后低温"],
      parvoTreatment: "治疗：住院、静脉输液、止吐药、抗生素。费用：RM 1,500-5,000用于3-7天住院。",
      parvoPrevention: ["完成疫苗系列（6、9、12、16周）", "在完全接种疫苗前避免公共场所", "用漂白剂消毒（1:30稀释）"],
      skinTitle: "皮肤感染与过敏",
      skinDesc: "马来西亚的湿度使皮肤问题极为常见。狗和猫经常出现细菌、真菌或过敏性皮肤问题。",
      skinSymptoms: ["过度抓挠", "脱毛（斑块或全身）", "皮肤红肿发炎", "热斑", "结痂或硬皮斑块", "皮肤发出恶臭"],
      skinTreatment: "治疗：药用洗发水、口服抗生素/抗真菌药、抗过敏药。费用：轻度病例RM 100-500，慢性病症RM 500-2,000。",
      skinPrevention: ["定期洗澡（每1-2周）", "雨后/游泳后保持宠物干燥", "有空调的休息区", "含欧米茄脂肪酸的优质饮食"],
      earTitle: "耳部感染",
      earDesc: "垂耳狗和猫在潮湿条件下容易发生耳部感染。酵母菌和细菌在温暖潮湿的耳道中繁殖。",
      earSymptoms: ["摇头", "抓挠耳朵", "棕色/黑色分泌物", "耳朵发出恶臭", "耳内发红", "触摸耳朵时疼痛"],
      earTreatment: "治疗：耳朵清洁、药用滴剂、严重病例口服药物。费用：RM 80-300。",
      earPrevention: ["每周用兽医批准的溶液清洁耳朵", "洗澡/游泳后擦干耳朵", "定期为多毛耳朵美容"],
      respiratoryTitle: "呼吸道感染",
      respiratoryDesc: "犬窝咳和猫流感很常见，尤其是在多宠物家庭或来自收容所/宠物店的宠物。",
      respiratorySymptoms: ["持续咳嗽", "打喷嚏", "流鼻涕/眼泪", "食欲不振", "嗜睡", "发烧"],
      respiratoryTreatment: "治疗：休息、细菌性感染用抗生素、支持性护理。费用：RM 150-600。",
      respiratoryPrevention: ["狗的博德特氏菌疫苗", "猫的FVRCP疫苗", "居住区良好通风", "新宠物隔离2周"],
      kidneyTitle: "肾脏疾病",
      kidneyDesc: "慢性肾脏病在老年猫（10岁以上猫的15%）和某些狗品种中很常见。早期发现至关重要。",
      kidneySymptoms: ["口渴增加", "排尿增加", "体重下降", "食欲下降", "呕吐", "口臭（尿毒症气味）"],
      kidneyTreatment: "治疗：处方肾脏饮食、皮下输液、药物。费用：RM 200-800/月用于管理。",
      kidneyPrevention: ["7岁以上宠物每年验血", "适当蛋白质的优质饮食", "始终提供新鲜水", "定期检查"],
      dentalTitle: "牙科疾病",
      dentalDesc: "到3岁时，80%的狗和70%的猫有某种形式的牙科疾病。这可能导致疼痛、感染和器官损害。",
      dentalSymptoms: ["口臭", "黄色/棕色牙垢积聚", "牙龈红肿", "进食困难", "流口水", "牙齿松动或缺失"],
      dentalTreatment: "治疗：麻醉下专业洁牙。费用：RM 400-1,500，取决于需要拔牙的数量。",
      dentalPrevention: ["每日刷牙（宠物安全牙膏）", "洁牙零食和玩具", "每年牙科检查", "如有建议使用牙科饮食"],
      preventionTitle: "完整预防指南",
      preventionIntro: "预防疾病总是比治疗更便宜、更容易。以下是您的完整预防清单：",
      preventionChecklist: [
        "每月驱蜱/跳蚤（RM 50-100/月）",
        "核心疫苗保持最新",
        "每年健康检查（RM 50-150）",
        "老年宠物每年验血（RM 150-300）",
        "定期美容和耳朵清洁",
        "适合年龄/体型的优质饮食",
        "每日锻炼和精神刺激",
        "保持环境清洁干燥"
      ],
      faqs: [
        { q: "我应该多久带宠物检查一次？", a: "年轻健康的宠物：每年。7岁以上的宠物：每6个月。有慢性病的宠物：按兽医建议。" },
        { q: "蜱热和心丝虫是一样的吗？", a: "不是。蜱热是由蜱虫叮咬传播的细菌引起的。心丝虫是由蚊子叮咬传播的寄生虫引起的。两者都需要预防。" },
        { q: "我可以给宠物吃人类药物吗？", a: "绝对不要在没有兽医批准的情况下给人类药物。许多人类药物（扑热息痛、布洛芬）对宠物有毒。" },
        { q: "为什么我的宠物已经接种疫苗了还会生病？", a: "疫苗可以预防特定疾病。宠物仍然可能感染其疫苗未涵盖的疾病，或者免疫力可能已经减弱。" },
        { q: "最重要的疫苗是什么？", a: "对于狗：犬细小病毒、犬瘟热、狂犬病。对于猫：FVRCP（猫瘟、杯状病毒、疱疹病毒）、狂犬病。" }
      ],
      ctaTitle: "担心您的宠物健康？",
      ctaText: "在您附近找一位值得信赖的兽医进行检查和预防护理。"
    }
  };
  return content[language] || content.en;
};

export const CommonIllnessesGuide = () => {
  const { language } = useLanguage();
  const c = getContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-11-28",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/common-pet-illnesses-malaysia"
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
    { to: "/blog/pet-emergency-symptoms-malaysia", title: "Emergency Symptoms", description: "When to rush to the vet", icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/vaccinations-schedule-pets", title: "Vaccination Guide", description: "Complete vaccination schedule", icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={c.metaTitle}
      metaDescription={c.metaDescription}
      path="/blog/common-pet-illnesses-malaysia"
      language={language}
      category={c.category}
      categoryColor="secondary"
      title={c.title}
      date={c.date}
      readTime={c.readTime}
      reviewedBy={c.reviewedBy}
      heroImage={vetCare}
      heroImageAlt={c.heroAlt}
      heroImageCaption={c.heroCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={c.tldr} />
      <CostCTA variant={5} />
      <TableOfContents items={c.tocItems} />

      <p className="text-muted-foreground mb-8">{c.intro}</p>

      {/* Tick Fever */}
      <section id="tick-fever" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Bug className="h-6 w-6 text-destructive" />
          {c.tickFeverTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{c.tickFeverDesc}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">⚠️ Symptoms</h3>
            <ul className="space-y-1 text-sm">
              {c.tickFeverSymptoms.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ Prevention</h3>
            <ul className="space-y-1 text-sm">
              {c.tickFeverPrevention.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-sm"><strong>💉 {c.tickFeverTreatment}</strong></p>
        </div>
      </section>

      {/* Parvovirus */}
      <section id="parvovirus" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {c.parvoTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{c.parvoDesc}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">⚠️ Symptoms</h3>
            <ul className="space-y-1 text-sm">
              {c.parvoSymptoms.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ Prevention</h3>
            <ul className="space-y-1 text-sm">
              {c.parvoPrevention.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-sm"><strong>💉 {c.parvoTreatment}</strong></p>
        </div>
      </section>

      {/* Skin Infections */}
      <section id="skin-infections" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="h-6 w-6 text-primary" />
          {c.skinTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{c.skinDesc}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">⚠️ Symptoms</h3>
            <ul className="space-y-1 text-sm">
              {c.skinSymptoms.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ Prevention</h3>
            <ul className="space-y-1 text-sm">
              {c.skinPrevention.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-sm"><strong>💉 {c.skinTreatment}</strong></p>
        </div>
      </section>

      {/* Ear Infections */}
      <section id="ear-infections" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          {c.earTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{c.earDesc}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-destructive/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">⚠️ Symptoms</h3>
            <ul className="space-y-1 text-sm">
              {c.earSymptoms.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ Prevention</h3>
            <ul className="space-y-1 text-sm">
              {c.earPrevention.map((p, i) => <li key={i}>• {p}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-xl">
          <p className="text-sm"><strong>💉 {c.earTreatment}</strong></p>
        </div>
      </section>

      {/* Prevention Checklist */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {c.preventionTitle}
        </h2>
        <p className="text-muted-foreground mb-6">{c.preventionIntro}</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <ul className="grid md:grid-cols-2 gap-3">
            {c.preventionChecklist.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
          <Link to="/locations">Find a Vet Near You</Link>
        </Button>
      </div>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

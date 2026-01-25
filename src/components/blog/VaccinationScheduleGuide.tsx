import { useLanguage } from '@/contexts/LanguageContext';
import { Syringe, Calendar, Shield, AlertTriangle, CheckCircle2, Dog, Cat } from 'lucide-react';
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
      metaTitle: "Pet Vaccination Schedule Malaysia 2025: Complete Guide for Dogs & Cats",
      metaDescription: "Complete vaccination schedule for dogs and cats in Malaysia. Core vaccines, boosters, costs RM 50-200, and when to vaccinate. Protect your pet from deadly diseases.",
      title: "Complete Vaccination Schedule for Dogs and Cats in Malaysia (2025)",
      category: "Health",
      date: "November 15, 2024",
      readTime: "10 min read",
      reviewedBy: "Reviewed by Licensed Malaysian Veterinarians",
      heroAlt: "Veterinarian vaccinating a pet",
      heroCaption: "Vaccines protect your pet from deadly diseases",
      tldr: [
        "Puppies/kittens: Start vaccinations at 6-8 weeks old",
        "Core vaccines: Every 3-4 weeks until 16 weeks, then annual boosters",
        "Rabies: Required by Malaysian law, given at 3 months",
        "Cost: RM 50-200 per vaccination visit",
        "Skipping vaccines puts your pet at serious risk of fatal diseases"
      ],
      tocItems: [
        { id: "why", title: "Why Vaccination is Critical" },
        { id: "puppy", title: "Puppy Vaccination Schedule" },
        { id: "kitten", title: "Kitten Vaccination Schedule" },
        { id: "adult-dog", title: "Adult Dog Boosters" },
        { id: "adult-cat", title: "Adult Cat Boosters" },
        { id: "core-vs-noncore", title: "Core vs Non-Core Vaccines" },
        { id: "costs", title: "Vaccination Costs in Malaysia" },
        { id: "side-effects", title: "Side Effects & What to Watch" },
        { id: "faqs", title: "Frequently Asked Questions" },
      ],
      intro: "Vaccination is the most effective way to protect your pet from deadly infectious diseases. In Malaysia, diseases like parvovirus, distemper, and rabies remain threats. This guide covers everything you need to know about keeping your pet protected.",
      whyTitle: "Why Vaccination is Critical",
      whyDesc: "Vaccines train your pet's immune system to fight dangerous diseases before they cause harm. Without vaccination, your pet is vulnerable to:",
      whyDiseases: [
        "Parvovirus: 90% fatal in unvaccinated puppies",
        "Distemper: Often fatal, survivors have lifelong neurological damage",
        "Rabies: 100% fatal once symptoms appear, transmissible to humans",
        "Feline Panleukopenia: 90% fatal in kittens",
        "Leptospirosis: Can spread to humans, causes organ failure"
      ],
      puppyTitle: "Puppy Vaccination Schedule",
      puppySchedule: [
        { age: "6-8 weeks", vaccines: "DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus) - First dose", notes: "Can start as early as 6 weeks for high-risk environments" },
        { age: "10-12 weeks", vaccines: "DHPP - Second dose, Leptospirosis (optional)", notes: "Continue avoiding public places" },
        { age: "14-16 weeks", vaccines: "DHPP - Third dose, Rabies", notes: "Rabies required by Malaysian law at 3 months" },
        { age: "12-16 months", vaccines: "DHPP booster, Rabies booster", notes: "First adult booster, very important" },
        { age: "Every 1-3 years", vaccines: "DHPP, Rabies, Leptospirosis boosters", notes: "Frequency depends on vaccine type and vet recommendation" }
      ],
      kittenTitle: "Kitten Vaccination Schedule",
      kittenSchedule: [
        { age: "6-8 weeks", vaccines: "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia) - First dose", notes: "Start when maternal antibodies wane" },
        { age: "10-12 weeks", vaccines: "FVRCP - Second dose, FeLV (Feline Leukemia) if outdoor", notes: "FeLV recommended for cats with outdoor access" },
        { age: "14-16 weeks", vaccines: "FVRCP - Third dose, Rabies", notes: "Rabies required by Malaysian law" },
        { age: "12-16 months", vaccines: "FVRCP booster, Rabies booster, FeLV booster", notes: "Critical first adult booster" },
        { age: "Every 1-3 years", vaccines: "FVRCP, Rabies boosters", notes: "Indoor-only cats may need less frequent boosters" }
      ],
      adultDogTitle: "Adult Dog Booster Schedule",
      adultDogDesc: "Adult dogs need regular boosters to maintain immunity. If you adopted an adult dog with unknown vaccine history, your vet will recommend a catch-up schedule.",
      adultDogVaccines: [
        { vaccine: "DHPP", frequency: "Every 1-3 years", notes: "Core vaccine, protects against 4 deadly diseases" },
        { vaccine: "Rabies", frequency: "Every 1-3 years", notes: "Required by law in Malaysia" },
        { vaccine: "Leptospirosis", frequency: "Annually", notes: "Recommended, especially in rainy areas" },
        { vaccine: "Bordetella (Kennel Cough)", frequency: "Annually", notes: "Required for boarding, grooming, daycare" },
        { vaccine: "Canine Influenza", frequency: "Annually", notes: "Optional, recommended for social dogs" }
      ],
      adultCatTitle: "Adult Cat Booster Schedule",
      adultCatDesc: "Indoor-only cats still need core vaccines. Outdoor cats need additional protection.",
      adultCatVaccines: [
        { vaccine: "FVRCP", frequency: "Every 1-3 years", notes: "Core vaccine for all cats" },
        { vaccine: "Rabies", frequency: "Every 1-3 years", notes: "Required by Malaysian law" },
        { vaccine: "FeLV", frequency: "Annually", notes: "Recommended for outdoor cats or multi-cat homes" },
        { vaccine: "FIV", frequency: "As recommended", notes: "For cats at high risk (outdoor, fighters)" }
      ],
      coreTitle: "Core vs Non-Core Vaccines",
      coreDesc: "Core vaccines are essential for all pets. Non-core vaccines depend on lifestyle and risk factors.",
      coreDog: ["DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus)", "Rabies"],
      noncoreDog: ["Leptospirosis (highly recommended)", "Bordetella (kennel cough)", "Canine Influenza", "Lyme Disease (not common in Malaysia)"],
      coreCat: ["FVRCP (Panleukopenia, Calicivirus, Rhinotracheitis)", "Rabies"],
      noncoreCat: ["FeLV (outdoor cats)", "FIV (high-risk cats)", "Chlamydia"],
      costsTitle: "Vaccination Costs in Malaysia",
      costsDesc: "Vaccination costs vary by clinic, location, and vaccine brand. Here are typical ranges:",
      costsList: [
        { item: "Consultation + single vaccine", cost: "RM 50-100" },
        { item: "Puppy/kitten package (3 visits)", cost: "RM 200-400" },
        { item: "DHPP/FVRCP", cost: "RM 60-120" },
        { item: "Rabies", cost: "RM 50-80" },
        { item: "Leptospirosis", cost: "RM 50-80" },
        { item: "Full annual booster package", cost: "RM 150-250" }
      ],
      costsNote: "Government clinics (DBKL, state vet departments) often offer cheaper rabies vaccination during campaigns.",
      sideEffectsTitle: "Side Effects & What to Watch",
      sideEffectsNormal: ["Mild lethargy for 24-48 hours", "Slight fever", "Reduced appetite", "Small swelling at injection site"],
      sideEffectsSerious: ["Facial swelling", "Difficulty breathing", "Severe vomiting", "Collapse", "Swelling that grows larger after 48 hours"],
      sideEffectsAdvice: "Most side effects are mild and resolve within 48 hours. Serious reactions are rare but require immediate vet attention.",
      faqs: [
        { q: "Can I vaccinate my pet myself?", a: "Rabies vaccination MUST be done by a licensed vet in Malaysia. Other vaccines can technically be self-administered but are not recommended without proper training and equipment." },
        { q: "Is it safe to vaccinate a pregnant pet?", a: "Generally not recommended. Most vaccines should be given before breeding. Consult your vet for specific situations." },
        { q: "What if I missed a booster?", a: "Contact your vet. Depending on how long ago, you may need to restart the series or just continue from where you left off." },
        { q: "Are there risks to over-vaccination?", a: "There's ongoing research, but most vets now recommend 3-year intervals for adult core vaccines instead of annual. Discuss with your vet." },
        { q: "Can my pet go outside after vaccination?", a: "Puppies/kittens should wait 1-2 weeks after their final vaccination before going to public places. Adult pets can resume normal activity immediately." }
      ],
      ctaTitle: "Keep Your Pet Protected",
      ctaText: "Find a vet near you to start or continue your pet's vaccination schedule."
    },
    ms: {
      metaTitle: "Jadual Vaksinasi Haiwan Peliharaan Malaysia 2025: Panduan Lengkap untuk Anjing & Kucing",
      metaDescription: "Jadual vaksinasi lengkap untuk anjing dan kucing di Malaysia. Vaksin teras, penggalak, kos RM 50-200, dan bila perlu vaksinasi. Lindungi haiwan anda daripada penyakit maut.",
      title: "Jadual Vaksinasi Lengkap untuk Anjing dan Kucing di Malaysia (2025)",
      category: "Kesihatan",
      date: "15 November 2024",
      readTime: "10 minit bacaan",
      reviewedBy: "Disemak oleh Doktor Veterinar Berlesen Malaysia",
      heroAlt: "Doktor veterinar memberi vaksin kepada haiwan peliharaan",
      heroCaption: "Vaksin melindungi haiwan peliharaan anda daripada penyakit maut",
      tldr: [
        "Anak anjing/anak kucing: Mulakan vaksinasi pada umur 6-8 minggu",
        "Vaksin teras: Setiap 3-4 minggu sehingga 16 minggu, kemudian penggalak tahunan",
        "Rabies: Dikehendaki oleh undang-undang Malaysia, diberi pada 3 bulan",
        "Kos: RM 50-200 setiap lawatan vaksinasi",
        "Melangkau vaksin meletakkan haiwan anda pada risiko serius penyakit maut"
      ],
      tocItems: [
        { id: "why", title: "Mengapa Vaksinasi Kritikal" },
        { id: "puppy", title: "Jadual Vaksinasi Anak Anjing" },
        { id: "kitten", title: "Jadual Vaksinasi Anak Kucing" },
        { id: "adult-dog", title: "Penggalak Anjing Dewasa" },
        { id: "adult-cat", title: "Penggalak Kucing Dewasa" },
        { id: "core-vs-noncore", title: "Vaksin Teras vs Bukan Teras" },
        { id: "costs", title: "Kos Vaksinasi di Malaysia" },
        { id: "side-effects", title: "Kesan Sampingan & Apa Perlu Diperhatikan" },
        { id: "faqs", title: "Soalan Lazim" },
      ],
      intro: "Vaksinasi adalah cara paling berkesan untuk melindungi haiwan peliharaan anda daripada penyakit berjangkit maut. Di Malaysia, penyakit seperti parvovirus, distemper, dan rabies masih menjadi ancaman. Panduan ini merangkumi semua yang anda perlu tahu untuk memastikan haiwan peliharaan anda dilindungi.",
      whyTitle: "Mengapa Vaksinasi Kritikal",
      whyDesc: "Vaksin melatih sistem imun haiwan peliharaan anda untuk melawan penyakit berbahaya sebelum ia menyebabkan kemudaratan. Tanpa vaksinasi, haiwan peliharaan anda terdedah kepada:",
      whyDiseases: [
        "Parvovirus: 90% maut pada anak anjing tidak divaksin",
        "Distemper: Sering maut, yang terselamat mengalami kerosakan neurologi seumur hidup",
        "Rabies: 100% maut sebaik sahaja simptom muncul, boleh berjangkit kepada manusia",
        "Panleukopenia Kucing: 90% maut pada anak kucing",
        "Leptospirosis: Boleh merebak kepada manusia, menyebabkan kegagalan organ"
      ],
      puppyTitle: "Jadual Vaksinasi Anak Anjing",
      puppySchedule: [
        { age: "6-8 minggu", vaccines: "DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus) - Dos pertama", notes: "Boleh mulakan seawal 6 minggu untuk persekitaran berisiko tinggi" },
        { age: "10-12 minggu", vaccines: "DHPP - Dos kedua, Leptospirosis (pilihan)", notes: "Teruskan elakkan tempat awam" },
        { age: "14-16 minggu", vaccines: "DHPP - Dos ketiga, Rabies", notes: "Rabies dikehendaki oleh undang-undang Malaysia pada 3 bulan" },
        { age: "12-16 bulan", vaccines: "Penggalak DHPP, Penggalak Rabies", notes: "Penggalak dewasa pertama, sangat penting" },
        { age: "Setiap 1-3 tahun", vaccines: "Penggalak DHPP, Rabies, Leptospirosis", notes: "Kekerapan bergantung kepada jenis vaksin dan cadangan vet" }
      ],
      kittenTitle: "Jadual Vaksinasi Anak Kucing",
      kittenSchedule: [
        { age: "6-8 minggu", vaccines: "FVRCP (Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia) - Dos pertama", notes: "Mulakan bila antibodi ibu merosot" },
        { age: "10-12 minggu", vaccines: "FVRCP - Dos kedua, FeLV (Feline Leukemia) jika luar rumah", notes: "FeLV disyorkan untuk kucing dengan akses luar" },
        { age: "14-16 minggu", vaccines: "FVRCP - Dos ketiga, Rabies", notes: "Rabies dikehendaki oleh undang-undang Malaysia" },
        { age: "12-16 bulan", vaccines: "Penggalak FVRCP, Penggalak Rabies, Penggalak FeLV", notes: "Penggalak dewasa pertama kritikal" },
        { age: "Setiap 1-3 tahun", vaccines: "Penggalak FVRCP, Rabies", notes: "Kucing dalam rumah sahaja mungkin perlukan penggalak kurang kerap" }
      ],
      adultDogTitle: "Jadual Penggalak Anjing Dewasa",
      adultDogDesc: "Anjing dewasa memerlukan penggalak berkala untuk mengekalkan imuniti. Jika anda mengadopsi anjing dewasa dengan sejarah vaksin tidak diketahui, vet anda akan mencadangkan jadual mengejar.",
      adultDogVaccines: [
        { vaccine: "DHPP", frequency: "Setiap 1-3 tahun", notes: "Vaksin teras, melindungi daripada 4 penyakit maut" },
        { vaccine: "Rabies", frequency: "Setiap 1-3 tahun", notes: "Dikehendaki oleh undang-undang di Malaysia" },
        { vaccine: "Leptospirosis", frequency: "Tahunan", notes: "Disyorkan, terutamanya di kawasan hujan" },
        { vaccine: "Bordetella (Batuk Kandang)", frequency: "Tahunan", notes: "Diperlukan untuk penginapan, dandanan, jagaan harian" },
        { vaccine: "Influenza Anjing", frequency: "Tahunan", notes: "Pilihan, disyorkan untuk anjing sosial" }
      ],
      adultCatTitle: "Jadual Penggalak Kucing Dewasa",
      adultCatDesc: "Kucing dalam rumah sahaja masih memerlukan vaksin teras. Kucing luar memerlukan perlindungan tambahan.",
      adultCatVaccines: [
        { vaccine: "FVRCP", frequency: "Setiap 1-3 tahun", notes: "Vaksin teras untuk semua kucing" },
        { vaccine: "Rabies", frequency: "Setiap 1-3 tahun", notes: "Dikehendaki oleh undang-undang Malaysia" },
        { vaccine: "FeLV", frequency: "Tahunan", notes: "Disyorkan untuk kucing luar atau rumah berbilang kucing" },
        { vaccine: "FIV", frequency: "Seperti disyorkan", notes: "Untuk kucing berisiko tinggi (luar, bergaduh)" }
      ],
      coreTitle: "Vaksin Teras vs Bukan Teras",
      coreDesc: "Vaksin teras adalah penting untuk semua haiwan peliharaan. Vaksin bukan teras bergantung kepada gaya hidup dan faktor risiko.",
      coreDog: ["DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus)", "Rabies"],
      noncoreDog: ["Leptospirosis (sangat disyorkan)", "Bordetella (batuk kandang)", "Influenza Anjing", "Penyakit Lyme (tidak biasa di Malaysia)"],
      coreCat: ["FVRCP (Panleukopenia, Calicivirus, Rhinotracheitis)", "Rabies"],
      noncoreCat: ["FeLV (kucing luar)", "FIV (kucing berisiko tinggi)", "Chlamydia"],
      costsTitle: "Kos Vaksinasi di Malaysia",
      costsDesc: "Kos vaksinasi berbeza mengikut klinik, lokasi, dan jenama vaksin. Berikut adalah julat biasa:",
      costsList: [
        { item: "Konsultasi + vaksin tunggal", cost: "RM 50-100" },
        { item: "Pakej anak anjing/kucing (3 lawatan)", cost: "RM 200-400" },
        { item: "DHPP/FVRCP", cost: "RM 60-120" },
        { item: "Rabies", cost: "RM 50-80" },
        { item: "Leptospirosis", cost: "RM 50-80" },
        { item: "Pakej penggalak tahunan penuh", cost: "RM 150-250" }
      ],
      costsNote: "Klinik kerajaan (DBKL, jabatan veterinar negeri) sering menawarkan vaksinasi rabies lebih murah semasa kempen.",
      sideEffectsTitle: "Kesan Sampingan & Apa Perlu Diperhatikan",
      sideEffectsNormal: ["Lesu ringan selama 24-48 jam", "Demam sedikit", "Selera makan berkurangan", "Bengkak kecil di tempat suntikan"],
      sideEffectsSerious: ["Muka bengkak", "Kesukaran bernafas", "Muntah teruk", "Pengsan", "Bengkak yang membesar selepas 48 jam"],
      sideEffectsAdvice: "Kebanyakan kesan sampingan adalah ringan dan hilang dalam 48 jam. Reaksi serius jarang berlaku tetapi memerlukan perhatian vet segera.",
      faqs: [
        { q: "Bolehkah saya vaksin haiwan peliharaan sendiri?", a: "Vaksinasi rabies WAJIB dilakukan oleh vet berlesen di Malaysia. Vaksin lain secara teknikal boleh diberikan sendiri tetapi tidak disyorkan tanpa latihan dan peralatan yang betul." },
        { q: "Adakah selamat vaksin haiwan mengandung?", a: "Secara umumnya tidak disyorkan. Kebanyakan vaksin harus diberikan sebelum pembiakan. Rujuk vet anda untuk situasi khusus." },
        { q: "Bagaimana jika saya terlepas penggalak?", a: "Hubungi vet anda. Bergantung kepada berapa lama dahulu, anda mungkin perlu mulakan semula siri atau teruskan dari mana anda berhenti." },
        { q: "Adakah risiko vaksinasi berlebihan?", a: "Terdapat penyelidikan berterusan, tetapi kebanyakan vet kini mencadangkan selang 3 tahun untuk vaksin teras dewasa berbanding tahunan. Bincang dengan vet anda." },
        { q: "Bolehkah haiwan saya keluar selepas vaksinasi?", a: "Anak anjing/kucing harus tunggu 1-2 minggu selepas vaksinasi akhir sebelum pergi ke tempat awam. Haiwan dewasa boleh teruskan aktiviti biasa serta-merta." }
      ],
      ctaTitle: "Pastikan Haiwan Anda Dilindungi",
      ctaText: "Cari vet berhampiran anda untuk memulakan atau meneruskan jadual vaksinasi haiwan anda."
    },
    zh: {
      metaTitle: "马来西亚宠物疫苗接种时间表 2025：狗猫完整指南",
      metaDescription: "马来西亚狗猫完整疫苗接种时间表。核心疫苗、加强针、费用RM 50-200以及何时接种。保护您的宠物免受致命疾病。",
      title: "马来西亚狗猫完整疫苗接种时间表（2025）",
      category: "健康",
      date: "2024年11月15日",
      readTime: "10分钟阅读",
      reviewedBy: "由马来西亚持牌兽医审核",
      heroAlt: "兽医为宠物接种疫苗",
      heroCaption: "疫苗保护您的宠物免受致命疾病",
      tldr: [
        "幼犬/幼猫：6-8周龄开始接种疫苗",
        "核心疫苗：每3-4周接种直到16周，然后每年加强",
        "狂犬病：马来西亚法律要求，3个月时接种",
        "费用：每次疫苗接种RM 50-200",
        "跳过疫苗会使您的宠物面临致命疾病的严重风险"
      ],
      tocItems: [
        { id: "why", title: "为什么疫苗接种至关重要" },
        { id: "puppy", title: "幼犬疫苗接种时间表" },
        { id: "kitten", title: "幼猫疫苗接种时间表" },
        { id: "adult-dog", title: "成年犬加强针" },
        { id: "adult-cat", title: "成年猫加强针" },
        { id: "core-vs-noncore", title: "核心疫苗 vs 非核心疫苗" },
        { id: "costs", title: "马来西亚疫苗接种费用" },
        { id: "side-effects", title: "副作用及注意事项" },
        { id: "faqs", title: "常见问题" },
      ],
      intro: "疫苗接种是保护您的宠物免受致命传染病的最有效方法。在马来西亚，犬细小病毒、犬瘟热和狂犬病等疾病仍然是威胁。本指南涵盖了您需要了解的一切，以确保您的宠物得到保护。",
      whyTitle: "为什么疫苗接种至关重要",
      whyDesc: "疫苗训练您宠物的免疫系统在危险疾病造成伤害之前进行抵抗。没有疫苗接种，您的宠物容易受到以下威胁：",
      whyDiseases: [
        "犬细小病毒：未接种疫苗的幼犬90%死亡率",
        "犬瘟热：经常致命，幸存者有终身神经损伤",
        "狂犬病：一旦出现症状100%致命，可传染给人类",
        "猫瘟：幼猫90%死亡率",
        "钩端螺旋体病：可传染给人类，导致器官衰竭"
      ],
      puppyTitle: "幼犬疫苗接种时间表",
      puppySchedule: [
        { age: "6-8周", vaccines: "DHPP（犬瘟热、肝炎、副流感、细小病毒）- 第一针", notes: "高风险环境可早至6周开始" },
        { age: "10-12周", vaccines: "DHPP - 第二针，钩端螺旋体病（可选）", notes: "继续避免公共场所" },
        { age: "14-16周", vaccines: "DHPP - 第三针，狂犬病", notes: "马来西亚法律要求3个月时接种狂犬病疫苗" },
        { age: "12-16个月", vaccines: "DHPP加强针，狂犬病加强针", notes: "第一次成年加强针，非常重要" },
        { age: "每1-3年", vaccines: "DHPP、狂犬病、钩端螺旋体病加强针", notes: "频率取决于疫苗类型和兽医建议" }
      ],
      kittenTitle: "幼猫疫苗接种时间表",
      kittenSchedule: [
        { age: "6-8周", vaccines: "FVRCP（猫病毒性鼻气管炎、杯状病毒、猫瘟）- 第一针", notes: "母体抗体减弱时开始" },
        { age: "10-12周", vaccines: "FVRCP - 第二针，FeLV（猫白血病）如果在户外", notes: "建议有户外活动的猫接种FeLV" },
        { age: "14-16周", vaccines: "FVRCP - 第三针，狂犬病", notes: "马来西亚法律要求接种狂犬病疫苗" },
        { age: "12-16个月", vaccines: "FVRCP加强针，狂犬病加强针，FeLV加强针", notes: "关键的第一次成年加强针" },
        { age: "每1-3年", vaccines: "FVRCP、狂犬病加强针", notes: "纯室内猫可能需要较少频繁的加强针" }
      ],
      adultDogTitle: "成年犬加强针时间表",
      adultDogDesc: "成年犬需要定期加强针以维持免疫力。如果您收养了疫苗史不明的成年犬，您的兽医会建议一个补打计划。",
      adultDogVaccines: [
        { vaccine: "DHPP", frequency: "每1-3年", notes: "核心疫苗，预防4种致命疾病" },
        { vaccine: "狂犬病", frequency: "每1-3年", notes: "马来西亚法律要求" },
        { vaccine: "钩端螺旋体病", frequency: "每年", notes: "建议接种，尤其是在多雨地区" },
        { vaccine: "博德特氏菌（犬窝咳）", frequency: "每年", notes: "寄宿、美容、日托需要" },
        { vaccine: "犬流感", frequency: "每年", notes: "可选，建议社交活跃的狗接种" }
      ],
      adultCatTitle: "成年猫加强针时间表",
      adultCatDesc: "纯室内猫仍需要核心疫苗。户外猫需要额外保护。",
      adultCatVaccines: [
        { vaccine: "FVRCP", frequency: "每1-3年", notes: "所有猫的核心疫苗" },
        { vaccine: "狂犬病", frequency: "每1-3年", notes: "马来西亚法律要求" },
        { vaccine: "FeLV", frequency: "每年", notes: "建议户外猫或多猫家庭接种" },
        { vaccine: "FIV", frequency: "按建议", notes: "适用于高风险猫（户外、打架）" }
      ],
      coreTitle: "核心疫苗 vs 非核心疫苗",
      coreDesc: "核心疫苗对所有宠物都是必需的。非核心疫苗取决于生活方式和风险因素。",
      coreDog: ["DHPP（犬瘟热、肝炎、副流感、细小病毒）", "狂犬病"],
      noncoreDog: ["钩端螺旋体病（强烈建议）", "博德特氏菌（犬窝咳）", "犬流感", "莱姆病（马来西亚不常见）"],
      coreCat: ["FVRCP（猫瘟、杯状病毒、鼻气管炎）", "狂犬病"],
      noncoreCat: ["FeLV（户外猫）", "FIV（高风险猫）", "衣原体"],
      costsTitle: "马来西亚疫苗接种费用",
      costsDesc: "疫苗接种费用因诊所、地点和疫苗品牌而异。以下是典型范围：",
      costsList: [
        { item: "咨询 + 单次疫苗", cost: "RM 50-100" },
        { item: "幼犬/幼猫套餐（3次访问）", cost: "RM 200-400" },
        { item: "DHPP/FVRCP", cost: "RM 60-120" },
        { item: "狂犬病", cost: "RM 50-80" },
        { item: "钩端螺旋体病", cost: "RM 50-80" },
        { item: "完整年度加强针套餐", cost: "RM 150-250" }
      ],
      costsNote: "政府诊所（DBKL、州兽医部门）在活动期间通常提供更便宜的狂犬病疫苗接种。",
      sideEffectsTitle: "副作用及注意事项",
      sideEffectsNormal: ["24-48小时轻度嗜睡", "轻微发烧", "食欲下降", "注射部位轻微肿胀"],
      sideEffectsSerious: ["面部肿胀", "呼吸困难", "严重呕吐", "虚脱", "48小时后肿胀加大"],
      sideEffectsAdvice: "大多数副作用是轻微的，在48小时内消失。严重反应很少见，但需要立即就医。",
      faqs: [
        { q: "我可以自己给宠物接种疫苗吗？", a: "狂犬病疫苗必须由马来西亚持牌兽医接种。其他疫苗技术上可以自行接种，但不建议没有适当培训和设备的人这样做。" },
        { q: "给怀孕的宠物接种疫苗安全吗？", a: "通常不建议。大多数疫苗应在配种前接种。具体情况请咨询您的兽医。" },
        { q: "如果我错过了加强针怎么办？", a: "联系您的兽医。根据时间长短，您可能需要重新开始系列或从停下的地方继续。" },
        { q: "过度接种有风险吗？", a: "研究正在进行中，但大多数兽医现在建议成年核心疫苗间隔3年而不是每年。与您的兽医讨论。" },
        { q: "接种疫苗后我的宠物可以外出吗？", a: "幼犬/幼猫应在最后一次疫苗接种后等待1-2周再去公共场所。成年宠物可以立即恢复正常活动。" }
      ],
      ctaTitle: "确保您的宠物得到保护",
      ctaText: "在您附近找一位兽医开始或继续您宠物的疫苗接种计划。"
    }
  };
  return content[language] || content.en;
};

export const VaccinationScheduleGuide = () => {
  const { language } = useLanguage();
  const c = getContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.title,
    "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-11-15",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/vaccinations-schedule-pets"
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
    { to: "/blog/common-pet-illnesses-malaysia", title: "Common Illnesses", description: "Diseases vaccines prevent", icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-emergency-symptoms-malaysia", title: "Emergency Symptoms", description: "When to rush to the vet", icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={c.metaTitle}
      metaDescription={c.metaDescription}
      path="/blog/vaccinations-schedule-pets"
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
      <CostCTA variant={3} />
      <TableOfContents items={c.tocItems} />

      <p className="text-muted-foreground mb-8">{c.intro}</p>

      {/* Why Vaccination */}
      <section id="why" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Syringe className="h-6 w-6 text-primary" />
          {c.whyTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{c.whyDesc}</p>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <ul className="space-y-2">
            {c.whyDiseases.map((disease, i) => (
              <li key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                <span>{disease}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Puppy Schedule */}
      <section id="puppy" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Dog className="h-6 w-6 text-primary" />
          {c.puppyTitle}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left font-semibold">Age</th>
                <th className="p-4 text-left font-semibold">Vaccines</th>
                <th className="p-4 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.puppySchedule.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-semibold whitespace-nowrap">{row.age}</td>
                  <td className="p-4">{row.vaccines}</td>
                  <td className="p-4 text-muted-foreground text-sm">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Kitten Schedule */}
      <section id="kitten" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cat className="h-6 w-6 text-primary" />
          {c.kittenTitle}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left font-semibold">Age</th>
                <th className="p-4 text-left font-semibold">Vaccines</th>
                <th className="p-4 text-left font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.kittenSchedule.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-semibold whitespace-nowrap">{row.age}</td>
                  <td className="p-4">{row.vaccines}</td>
                  <td className="p-4 text-muted-foreground text-sm">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Core vs Non-Core */}
      <section id="core-vs-noncore" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.coreTitle}</h2>
        <p className="text-muted-foreground mb-6">{c.coreDesc}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">🐕 Dogs</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-primary mb-2">Core (Required):</h4>
              <ul className="space-y-1 text-sm">
                {c.coreDog.map((v, i) => <li key={i}>✅ {v}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Non-Core (Lifestyle):</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {c.noncoreDog.map((v, i) => <li key={i}>• {v}</li>)}
              </ul>
            </div>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4">🐈 Cats</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-primary mb-2">Core (Required):</h4>
              <ul className="space-y-1 text-sm">
                {c.coreCat.map((v, i) => <li key={i}>✅ {v}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Non-Core (Lifestyle):</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {c.noncoreCat.map((v, i) => <li key={i}>• {v}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.costsTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.costsDesc}</p>
        <div className="bg-card border border-border rounded-xl overflow-hidden mb-4">
          <table className="w-full">
            <tbody>
              {c.costsList.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-muted/30' : ''}>
                  <td className="p-4">{row.item}</td>
                  <td className="p-4 text-right font-semibold text-primary">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted-foreground">{c.costsNote}</p>
      </section>

      {/* Side Effects */}
      <section id="side-effects" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.sideEffectsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div className="bg-muted p-6 rounded-xl">
            <h3 className="font-bold mb-3">😌 Normal (Mild):</h3>
            <ul className="space-y-1 text-sm">
              {c.sideEffectsNormal.map((e, i) => <li key={i}>• {e}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-destructive">🚨 Serious (Seek Vet):</h3>
            <ul className="space-y-1 text-sm">
              {c.sideEffectsSerious.map((e, i) => <li key={i}>• {e}</li>)}
            </ul>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{c.sideEffectsAdvice}</p>
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

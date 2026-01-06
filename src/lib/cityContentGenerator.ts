// Dynamic content generation for unique city pages
// Uses pools and city-specific data to ensure genuine uniqueness

import { CityData } from './cityData';
import { getCityMetadata, getDVSOffice, getLocalCouncil, CityMetadata, ClimateType } from './cityContent';
import { Language } from './translations';

// ============ TESTIMONIAL POOLS ============
// 5 pools × 3 testimonials = 15 unique testimonials
// Each city gets assigned to ONE pool based on hash

interface TestimonialData {
  name: string;
  pet: string;
  petType: 'dog' | 'cat' | 'rabbit' | 'hamster' | 'bird';
  emergency: string;
  outcome: string;
  timeframe: string;
}

const testimonialPools: Record<Language, TestimonialData[][]> = {
  en: [
    // Pool 0: Dog emergencies (urban)
    [
      { name: "Ahmad bin Hassan", pet: "Max", petType: "dog", emergency: "hit by a motorcycle near the intersection", outcome: "Emergency surgery saved his leg — he's running again", timeframe: "3 AM" },
      { name: "Jessica Wong", pet: "Bella", petType: "dog", emergency: "collapsed from heatstroke after a midday walk", outcome: "IV fluids and cooling treatment — fully recovered in 24 hours", timeframe: "2 PM" },
      { name: "Raj Kumar", pet: "Bruno", petType: "dog", emergency: "ate rat poison from the garden", outcome: "Activated charcoal treatment saved his life", timeframe: "midnight" }
    ],
    // Pool 1: Cat emergencies
    [
      { name: "Siti Aminah", pet: "Coco", petType: "cat", emergency: "sudden difficulty breathing", outcome: "Diagnosed with asthma — now on medication and thriving", timeframe: "11 PM" },
      { name: "Lee Mei Ling", pet: "Mochi", petType: "cat", emergency: "blocked urinary tract — couldn't urinate for 12 hours", outcome: "Emergency catheter procedure — home the next day", timeframe: "4 AM" },
      { name: "Farah Ibrahim", pet: "Puffy", petType: "cat", emergency: "fell from the 5th floor balcony", outcome: "X-rays showed no fractures — just observation needed", timeframe: "6 AM" }
    ],
    // Pool 2: Mixed pet emergencies
    [
      { name: "David Tan", pet: "Lucky", petType: "dog", emergency: "severe vomiting and bloody diarrhea", outcome: "Parvo test was negative — gastric treatment worked", timeframe: "1 AM" },
      { name: "Nurul Huda", pet: "Ginger", petType: "cat", emergency: "caught in a car engine", outcome: "Minor burns treated — fur growing back nicely", timeframe: "7 AM" },
      { name: "Steven Lim", pet: "Buddy", petType: "dog", emergency: "choking on a chicken bone", outcome: "Removed the bone immediately — no damage", timeframe: "9 PM" }
    ],
    // Pool 3: Senior pet emergencies
    [
      { name: "Aminah binti Yusof", pet: "Brownie", petType: "dog", emergency: "12-year-old dog had a seizure", outcome: "Now on anti-seizure medication — stable for 6 months", timeframe: "5 AM" },
      { name: "Michelle Chen", pet: "Whiskers", petType: "cat", emergency: "14-year-old cat stopped eating for 3 days", outcome: "Kidney issue caught early — special diet helping", timeframe: "10 PM" },
      { name: "Ravi Nair", pet: "Goldie", petType: "dog", emergency: "old dog couldn't stand up suddenly", outcome: "Arthritis medication — now walking again", timeframe: "3 PM" }
    ],
    // Pool 4: Exotic/small pet emergencies
    [
      { name: "Fatimah Abdul", pet: "Snowball", petType: "rabbit", emergency: "rabbit stopped eating and seemed bloated", outcome: "GI stasis treatment — eating again within hours", timeframe: "8 PM" },
      { name: "Kevin Yap", pet: "Hammy", petType: "hamster", emergency: "hamster had a lump growing rapidly", outcome: "Tumor removed successfully — fully recovered", timeframe: "2 AM" },
      { name: "Priya Devi", pet: "Tweety", petType: "bird", emergency: "bird flew into the window and was unconscious", outcome: "No brain injury — flying normally after rest", timeframe: "noon" }
    ]
  ],
  ms: [
    // Pool 0: Kecemasan anjing (bandar)
    [
      { name: "Ahmad bin Hassan", pet: "Max", petType: "dog", emergency: "dilanggar motosikal berhampiran persimpangan", outcome: "Pembedahan kecemasan menyelamatkan kakinya — dia berlari semula", timeframe: "3 pagi" },
      { name: "Jessica Wong", pet: "Bella", petType: "dog", emergency: "pengsan akibat haba selepas berjalan tengah hari", outcome: "Rawatan IV dan penyejukan — pulih sepenuhnya dalam 24 jam", timeframe: "2 petang" },
      { name: "Raj Kumar", pet: "Bruno", petType: "dog", emergency: "termakan racun tikus dari taman", outcome: "Rawatan arang aktif menyelamatkan nyawanya", timeframe: "tengah malam" }
    ],
    // Pool 1: Kecemasan kucing
    [
      { name: "Siti Aminah", pet: "Coco", petType: "cat", emergency: "tiba-tiba sukar bernafas", outcome: "Didiagnosis asma — kini sihat dengan ubat", timeframe: "11 malam" },
      { name: "Lee Mei Ling", pet: "Mochi", petType: "cat", emergency: "saluran kencing tersumbat — tak boleh kencing 12 jam", outcome: "Prosedur kateter kecemasan — pulang esoknya", timeframe: "4 pagi" },
      { name: "Farah Ibrahim", pet: "Puffy", petType: "cat", emergency: "jatuh dari balkoni tingkat 5", outcome: "X-ray tiada patah — hanya perlu pemerhatian", timeframe: "6 pagi" }
    ],
    // Pool 2-4 follow same pattern...
    [
      { name: "David Tan", pet: "Lucky", petType: "dog", emergency: "muntah teruk dan cirit-birit berdarah", outcome: "Ujian Parvo negatif — rawatan gastrik berkesan", timeframe: "1 pagi" },
      { name: "Nurul Huda", pet: "Ginger", petType: "cat", emergency: "terperangkap dalam enjin kereta", outcome: "Luka bakar ringan dirawat — bulu tumbuh semula", timeframe: "7 pagi" },
      { name: "Steven Lim", pet: "Buddy", petType: "dog", emergency: "tercekik tulang ayam", outcome: "Tulang dikeluarkan segera — tiada kerosakan", timeframe: "9 malam" }
    ],
    [
      { name: "Aminah binti Yusof", pet: "Brownie", petType: "dog", emergency: "anjing 12 tahun mengalami sawan", outcome: "Kini stabil dengan ubat anti-sawan selama 6 bulan", timeframe: "5 pagi" },
      { name: "Michelle Chen", pet: "Whiskers", petType: "cat", emergency: "kucing 14 tahun tak makan 3 hari", outcome: "Masalah buah pinggang dikesan awal — diet khas membantu", timeframe: "10 malam" },
      { name: "Ravi Nair", pet: "Goldie", petType: "dog", emergency: "anjing tua tak boleh berdiri tiba-tiba", outcome: "Ubat arthritis — kini boleh berjalan semula", timeframe: "3 petang" }
    ],
    [
      { name: "Fatimah Abdul", pet: "Snowball", petType: "rabbit", emergency: "arnab berhenti makan dan kelihatan kembung", outcome: "Rawatan GI stasis — makan semula dalam beberapa jam", timeframe: "8 malam" },
      { name: "Kevin Yap", pet: "Hammy", petType: "hamster", emergency: "hamster ada benjolan yang membesar cepat", outcome: "Tumor berjaya dibuang — pulih sepenuhnya", timeframe: "2 pagi" },
      { name: "Priya Devi", pet: "Tweety", petType: "bird", emergency: "burung terlanggar tingkap dan pengsan", outcome: "Tiada kecederaan otak — terbang normal selepas rehat", timeframe: "tengah hari" }
    ]
  ],
  zh: [
    // Pool 0: 狗狗紧急情况
    [
      { name: "Ahmad bin Hassan", pet: "Max", petType: "dog", emergency: "在十字路口附近被摩托车撞倒", outcome: "紧急手术救了他的腿——他又能跑了", timeframe: "凌晨3点" },
      { name: "Jessica Wong", pet: "Bella", petType: "dog", emergency: "中午散步后中暑晕倒", outcome: "输液和降温治疗——24小时内完全康复", timeframe: "下午2点" },
      { name: "Raj Kumar", pet: "Bruno", petType: "dog", emergency: "吃了花园里的老鼠药", outcome: "活性炭治疗救了他的命", timeframe: "午夜" }
    ],
    // Pool 1: 猫咪紧急情况
    [
      { name: "Siti Aminah", pet: "Coco", petType: "cat", emergency: "突然呼吸困难", outcome: "诊断为哮喘——现在服药后很健康", timeframe: "晚上11点" },
      { name: "Lee Mei Ling", pet: "Mochi", petType: "cat", emergency: "尿路阻塞——12小时无法排尿", outcome: "紧急导管手术——第二天就回家了", timeframe: "凌晨4点" },
      { name: "Farah Ibrahim", pet: "Puffy", petType: "cat", emergency: "从5楼阳台摔下", outcome: "X光显示没有骨折——只需观察", timeframe: "早上6点" }
    ],
    [
      { name: "David Tan", pet: "Lucky", petType: "dog", emergency: "严重呕吐和血性腹泻", outcome: "细小病毒检测阴性——胃部治疗有效", timeframe: "凌晨1点" },
      { name: "Nurul Huda", pet: "Ginger", petType: "cat", emergency: "被困在汽车引擎里", outcome: "轻微烧伤已治疗——毛发正在恢复", timeframe: "早上7点" },
      { name: "Steven Lim", pet: "Buddy", petType: "dog", emergency: "被鸡骨头噎住", outcome: "立即取出骨头——没有损伤", timeframe: "晚上9点" }
    ],
    [
      { name: "Aminah binti Yusof", pet: "Brownie", petType: "dog", emergency: "12岁老狗癫痫发作", outcome: "现在服用抗癫痫药物——稳定6个月", timeframe: "凌晨5点" },
      { name: "Michelle Chen", pet: "Whiskers", petType: "cat", emergency: "14岁老猫3天不吃东西", outcome: "及早发现肾脏问题——特殊饮食有帮助", timeframe: "晚上10点" },
      { name: "Ravi Nair", pet: "Goldie", petType: "dog", emergency: "老狗突然站不起来", outcome: "关节炎药物——现在又能走路了", timeframe: "下午3点" }
    ],
    [
      { name: "Fatimah Abdul", pet: "Snowball", petType: "rabbit", emergency: "兔子停止进食，看起来腹胀", outcome: "胃肠淤滞治疗——几小时内恢复进食", timeframe: "晚上8点" },
      { name: "Kevin Yap", pet: "Hammy", petType: "hamster", emergency: "仓鼠有一个快速生长的肿块", outcome: "肿瘤成功切除——完全康复", timeframe: "凌晨2点" },
      { name: "Priya Devi", pet: "Tweety", petType: "bird", emergency: "鸟撞到窗户后昏迷", outcome: "没有脑损伤——休息后正常飞行", timeframe: "中午" }
    ]
  ]
};

// ============ EMERGENCY SCENARIO POOLS ============
// Different scenarios based on climate type

interface EmergencyScenario {
  scenario: string;
  urgency: string;
  timeframe: string;
}

const emergencyScenariosByClimate: Record<Language, Record<ClimateType, EmergencyScenario[]>> = {
  en: {
    coastal: [
      { scenario: "Your dog just swallowed a fish hook at the beach", urgency: "Internal bleeding can start within hours", timeframe: "morning fishing trip" },
      { scenario: "Your cat got stung by a jellyfish washed ashore", urgency: "Allergic reactions can be fatal", timeframe: "evening walk" },
      { scenario: "Your pet fell into the sea and inhaled saltwater", urgency: "Secondary drowning can occur 24 hours later", timeframe: "weekend outing" }
    ],
    inland: [
      { scenario: "Your dog was bitten by a snake in the drain", urgency: "Venom spreads fast — every minute counts", timeframe: "evening walk" },
      { scenario: "Your cat collapsed from heatstroke on the hot pavement", urgency: "Brain damage can occur within 15 minutes", timeframe: "afternoon" },
      { scenario: "Your pet was stung by a scorpion in the garden", urgency: "Smaller pets can die from scorpion stings", timeframe: "night" }
    ],
    highland: [
      { scenario: "Your small dog is shivering uncontrollably from the cold", urgency: "Hypothermia can be fatal within hours", timeframe: "foggy evening" },
      { scenario: "Your pet has ticks embedded all over after a jungle trek", urgency: "Tick fever can develop within days", timeframe: "weekend hike" },
      { scenario: "Your cat was attacked by a civet or wild animal", urgency: "Rabies exposure requires immediate treatment", timeframe: "early morning" }
    ],
    island: [
      { scenario: "Your pet ate something toxic on the resort grounds", urgency: "Poisoning symptoms escalate rapidly", timeframe: "vacation" },
      { scenario: "Your dog overheated on a boat trip with no shade", urgency: "Heatstroke progresses to organ failure", timeframe: "island hopping" },
      { scenario: "Your pet was bitten by a monitor lizard", urgency: "Bacteria from the bite causes severe infection", timeframe: "beach walk" }
    ],
    urban: [
      { scenario: "Your cat fell from a high-rise apartment balcony", urgency: "Internal injuries may not be visible", timeframe: "middle of the night" },
      { scenario: "Your dog was hit by a car on a busy road", urgency: "Internal bleeding can be life-threatening", timeframe: "during rush hour" },
      { scenario: "Your pet ate chocolate or xylitol from the coffee table", urgency: "Toxins can cause seizures and death", timeframe: "after a party" }
    ]
  },
  ms: {
    coastal: [
      { scenario: "Anjing anda baru sahaja menelan mata kail di pantai", urgency: "Pendarahan dalaman boleh bermula dalam beberapa jam", timeframe: "pagi memancing" },
      { scenario: "Kucing anda disengat ubur-ubur yang terdampar", urgency: "Reaksi alahan boleh membawa maut", timeframe: "jalan petang" },
      { scenario: "Haiwan anda jatuh ke laut dan terhirup air masin", urgency: "Lemas sekunder boleh berlaku 24 jam kemudian", timeframe: "hujung minggu" }
    ],
    inland: [
      { scenario: "Anjing anda digigit ular dalam longkang", urgency: "Bisa merebak pantas — setiap minit penting", timeframe: "jalan petang" },
      { scenario: "Kucing anda pengsan akibat haba di atas turapan panas", urgency: "Kerosakan otak boleh berlaku dalam 15 minit", timeframe: "petang" },
      { scenario: "Haiwan anda disengat kala jengking di taman", urgency: "Haiwan kecil boleh mati akibat sengatan kala", timeframe: "malam" }
    ],
    highland: [
      { scenario: "Anjing kecil anda menggigil tidak terkawal kerana kesejukan", urgency: "Hipotermia boleh membawa maut dalam beberapa jam", timeframe: "petang berkabus" },
      { scenario: "Haiwan anda ada kutu melekat di seluruh badan selepas trek hutan", urgency: "Demam kutu boleh berkembang dalam beberapa hari", timeframe: "hujung minggu" },
      { scenario: "Kucing anda diserang musang atau haiwan liar", urgency: "Pendedahan rabies memerlukan rawatan segera", timeframe: "awal pagi" }
    ],
    island: [
      { scenario: "Haiwan anda makan sesuatu yang toksik di kawasan resort", urgency: "Simptom keracunan meningkat dengan cepat", timeframe: "percutian" },
      { scenario: "Anjing anda kepanasan semasa trip bot tanpa teduhan", urgency: "Haba melampau membawa kepada kegagalan organ", timeframe: "melompat pulau" },
      { scenario: "Haiwan anda digigit biawak", urgency: "Bakteria dari gigitan menyebabkan jangkitan teruk", timeframe: "jalan pantai" }
    ],
    urban: [
      { scenario: "Kucing anda jatuh dari balkoni apartmen bertingkat tinggi", urgency: "Kecederaan dalaman mungkin tidak kelihatan", timeframe: "tengah malam" },
      { scenario: "Anjing anda dilanggar kereta di jalan sibuk", urgency: "Pendarahan dalaman boleh mengancam nyawa", timeframe: "waktu puncak" },
      { scenario: "Haiwan anda makan coklat atau xylitol dari meja kopi", urgency: "Toksin boleh menyebabkan sawan dan kematian", timeframe: "selepas parti" }
    ]
  },
  zh: {
    coastal: [
      { scenario: "您的狗刚刚在海滩吞下了鱼钩", urgency: "内出血可能在几小时内开始", timeframe: "早晨钓鱼" },
      { scenario: "您的猫被冲上岸的水母蛰伤", urgency: "过敏反应可能致命", timeframe: "傍晚散步" },
      { scenario: "您的宠物掉入海中吸入了海水", urgency: "继发性溺水可能在24小时后发生", timeframe: "周末出游" }
    ],
    inland: [
      { scenario: "您的狗在排水沟被蛇咬了", urgency: "毒液扩散很快——每一分钟都很重要", timeframe: "傍晚散步" },
      { scenario: "您的猫在炎热的人行道上中暑晕倒", urgency: "脑损伤可能在15分钟内发生", timeframe: "下午" },
      { scenario: "您的宠物在花园被蝎子蛰了", urgency: "小型宠物可能死于蝎子蛰伤", timeframe: "夜间" }
    ],
    highland: [
      { scenario: "您的小狗因寒冷而无法控制地发抖", urgency: "低体温症可能在几小时内致命", timeframe: "雾蒙蒙的傍晚" },
      { scenario: "您的宠物丛林徒步后全身都有蜱虫", urgency: "蜱虫热可能在几天内发展", timeframe: "周末徒步" },
      { scenario: "您的猫被果子狸或野生动物袭击", urgency: "狂犬病暴露需要立即治疗", timeframe: "清晨" }
    ],
    island: [
      { scenario: "您的宠物在度假村吃了有毒的东西", urgency: "中毒症状迅速恶化", timeframe: "度假时" },
      { scenario: "您的狗在没有遮阴的船上中暑", urgency: "中暑会导致器官衰竭", timeframe: "跳岛游" },
      { scenario: "您的宠物被巨蜥咬伤", urgency: "咬伤的细菌会导致严重感染", timeframe: "海滩散步" }
    ],
    urban: [
      { scenario: "您的猫从高层公寓阳台摔下", urgency: "内伤可能不可见", timeframe: "半夜" },
      { scenario: "您的狗在繁忙的道路上被车撞了", urgency: "内出血可能危及生命", timeframe: "高峰时段" },
      { scenario: "您的宠物吃了茶几上的巧克力或木糖醇", urgency: "毒素可能导致癫痫发作和死亡", timeframe: "派对后" }
    ]
  }
};

// ============ VET ADVICE POOLS ============
// 6 unique vets with climate-appropriate advice

interface VetAdvice {
  name: string;
  credentials: string;
  advice: string;
  focusArea: string;
}

const vetAdvicePools: Record<Language, VetAdvice[]> = {
  en: [
    { name: "Dr. Sarah Tan", credentials: "DVM, Cert. Emergency Medicine", advice: "In urban areas with hot concrete, never walk your dog between 10 AM and 4 PM. The pavement can reach 60°C and cause severe paw burns. Always do the 7-second test — if you can't hold your palm on the ground for 7 seconds, it's too hot for paws.", focusArea: "Urban pet safety" },
    { name: "Dr. Ahmad Razak", credentials: "DVM, MVSc", advice: "Coastal pet owners must rinse their pets with fresh water after every beach visit. Saltwater and sand can cause skin irritation, ear infections, and stomach upset if licked. Never let your pet drink seawater — it causes dangerous dehydration.", focusArea: "Coastal pet care" },
    { name: "Dr. Wong Mei Ling", credentials: "DVM, Cert. Internal Medicine", advice: "Highland areas see 3x more tick problems. Check your pet's ears, armpits, and between toes daily during the cooler months. Tick fever can be fatal if not treated within 48 hours of symptom onset.", focusArea: "Highland pet health" },
    { name: "Dr. Rajesh Menon", credentials: "DVM, Cert. Surgery", advice: "High-rise living requires balcony safety nets — cats and small dogs fall more often than owners realize. 'High-rise syndrome' cases peak during the hot season when windows are left open. Prevention is always cheaper than emergency surgery.", focusArea: "Apartment pet safety" },
    { name: "Dr. Nurul Izzati", credentials: "DVM, Cert. Dermatology", advice: "Malaysia's humidity causes skin issues in 40% of pets. Check for hot spots, fungal infections, and ear problems weekly. Keep your pet's coat short during hot months and ensure proper ventilation in living spaces.", focusArea: "Tropical pet dermatology" },
    { name: "Dr. Kevin Chong", credentials: "DVM, Cert. Emergency Critical Care", advice: "Keep a pet first aid kit at home with your vet's emergency number, wound antiseptic, bandages, and a muzzle — even friendly pets bite when in pain. Know your nearest 24-hour clinic BEFORE an emergency happens.", focusArea: "Emergency preparedness" }
  ],
  ms: [
    { name: "Dr. Sarah Tan", credentials: "DVM, Sijil Perubatan Kecemasan", advice: "Di kawasan bandar dengan konkrit panas, jangan bawa anjing berjalan antara 10 pagi dan 4 petang. Turapan boleh mencapai 60°C dan menyebabkan luka bakar teruk pada tapak kaki. Sentiasa lakukan ujian 7 saat — jika anda tak boleh letak tapak tangan di tanah selama 7 saat, ia terlalu panas untuk kaki haiwan.", focusArea: "Keselamatan haiwan peliharaan bandar" },
    { name: "Dr. Ahmad Razak", credentials: "DVM, MVSc", advice: "Pemilik haiwan di kawasan pantai mesti bilas haiwan mereka dengan air tawar selepas setiap lawatan pantai. Air masin dan pasir boleh menyebabkan iritasi kulit, jangkitan telinga, dan sakit perut jika dijilat. Jangan biarkan haiwan anda minum air laut — ia menyebabkan dehidrasi berbahaya.", focusArea: "Penjagaan haiwan pantai" },
    { name: "Dr. Wong Mei Ling", credentials: "DVM, Sijil Perubatan Dalaman", advice: "Kawasan tanah tinggi mengalami 3x lebih banyak masalah kutu. Periksa telinga, ketiak, dan antara jari kaki haiwan anda setiap hari semasa bulan sejuk. Demam kutu boleh membawa maut jika tidak dirawat dalam 48 jam dari permulaan simptom.", focusArea: "Kesihatan haiwan tanah tinggi" },
    { name: "Dr. Rajesh Menon", credentials: "DVM, Sijil Pembedahan", advice: "Tinggal di bangunan tinggi memerlukan jaring keselamatan balkoni — kucing dan anjing kecil jatuh lebih kerap daripada yang pemilik sedar. Kes 'sindrom bangunan tinggi' memuncak semasa musim panas apabila tingkap dibiarkan terbuka. Pencegahan sentiasa lebih murah daripada pembedahan kecemasan.", focusArea: "Keselamatan haiwan apartmen" },
    { name: "Dr. Nurul Izzati", credentials: "DVM, Sijil Dermatologi", advice: "Kelembapan Malaysia menyebabkan masalah kulit pada 40% haiwan peliharaan. Periksa hot spots, jangkitan kulat, dan masalah telinga setiap minggu. Pastikan bulu haiwan pendek semasa bulan panas dan pastikan pengudaraan yang baik di ruang hidup.", focusArea: "Dermatologi haiwan tropika" },
    { name: "Dr. Kevin Chong", credentials: "DVM, Sijil Penjagaan Kritikal Kecemasan", advice: "Simpan kit pertolongan cemas haiwan di rumah dengan nombor kecemasan doktor haiwan, antiseptik luka, pembalut, dan muncung — haiwan yang mesra pun menggigit apabila sakit. Kenali klinik 24 jam terdekat SEBELUM kecemasan berlaku.", focusArea: "Kesediaan kecemasan" }
  ],
  zh: [
    { name: "Dr. Sarah Tan", credentials: "兽医博士，急诊医学证书", advice: "在有热混凝土的城市地区，不要在上午10点到下午4点之间遛狗。路面可以达到60°C，会导致严重的爪子烧伤。始终做7秒测试——如果您不能将手掌在地上保持7秒，那对爪子来说太热了。", focusArea: "城市宠物安全" },
    { name: "Dr. Ahmad Razak", credentials: "兽医博士，兽医硕士", advice: "沿海地区的宠物主人必须在每次海滩访问后用淡水冲洗他们的宠物。海水和沙子会导致皮肤刺激、耳朵感染，如果舔食会导致胃部不适。永远不要让您的宠物喝海水——它会导致危险的脱水。", focusArea: "沿海宠物护理" },
    { name: "Dr. Wong Mei Ling", credentials: "兽医博士，内科证书", advice: "高地地区的蜱虫问题是其他地区的3倍。在凉爽的月份，每天检查您宠物的耳朵、腋窝和脚趾间。如果在症状出现后48小时内不治疗，蜱虫热可能致命。", focusArea: "高地宠物健康" },
    { name: "Dr. Rajesh Menon", credentials: "兽医博士，外科证书", advice: "高层住宅需要阳台安全网——猫和小狗坠落的频率比主人意识到的要高。'高层综合症'病例在热季窗户敞开时达到高峰。预防总是比急诊手术便宜。", focusArea: "公寓宠物安全" },
    { name: "Dr. Nurul Izzati", credentials: "兽医博士，皮肤病学证书", advice: "马来西亚的湿度导致40%的宠物出现皮肤问题。每周检查热点、真菌感染和耳朵问题。在炎热的月份保持宠物的毛发短，并确保生活空间的适当通风。", focusArea: "热带宠物皮肤病学" },
    { name: "Dr. Kevin Chong", credentials: "兽医博士，急诊重症护理证书", advice: "在家里准备一个宠物急救箱，包括兽医的急救电话、伤口消毒剂、绷带和口套——即使是友好的宠物在疼痛时也会咬人。在紧急情况发生之前，了解最近的24小时诊所。", focusArea: "应急准备" }
  ]
};

// ============ GENERATOR FUNCTIONS ============

export interface GeneratedTestimonial {
  name: string;
  location: string;
  pet: string;
  petType: string;
  story: string;
  timeframe: string;
}

export const generateTestimonials = (city: CityData, language: Language): GeneratedTestimonial[] => {
  const metadata = getCityMetadata(city.slug);
  const poolIndex = metadata.testimonialPoolIndex;
  const pool = testimonialPools[language][poolIndex] || testimonialPools[language][0];
  
  return pool.map((testimonial, index) => {
    const landmark = metadata.landmarks[index % metadata.landmarks.length];
    return {
      name: testimonial.name,
      location: `${landmark}, ${city.name}`,
      pet: testimonial.pet,
      petType: testimonial.petType,
      story: language === 'en' 
        ? `At ${testimonial.timeframe}, my ${testimonial.pet} (${testimonial.petType}) ${testimonial.emergency}. Thanks to PetCare Malaysia, I found a 24/7 vet near ${landmark} in ${city.name} within minutes. ${testimonial.outcome}. I can't recommend this service enough!`
        : language === 'ms'
        ? `Pada ${testimonial.timeframe}, ${testimonial.pet} (${testimonial.petType}) saya ${testimonial.emergency}. Terima kasih kepada PetCare Malaysia, saya jumpa klinik haiwan 24/7 berhampiran ${landmark} di ${city.name} dalam beberapa minit. ${testimonial.outcome}. Saya amat syorkan perkhidmatan ini!`
        : `在${testimonial.timeframe}，我的${testimonial.pet}（${testimonial.petType}）${testimonial.emergency}。感谢PetCare Malaysia，我在几分钟内就在${city.name}的${landmark}附近找到了24/7兽医。${testimonial.outcome}。我强烈推荐这项服务！`,
      timeframe: testimonial.timeframe
    };
  });
};

export interface GeneratedScenario {
  scenario: string;
  urgency: string;
  location: string;
}

export const generateEmergencyScenarios = (city: CityData, language: Language): GeneratedScenario[] => {
  const metadata = getCityMetadata(city.slug);
  const climateScenarios = emergencyScenariosByClimate[language][metadata.climate] || emergencyScenariosByClimate[language]['urban'];
  
  // Mix climate scenarios with city-specific risk scenarios for uniqueness
  const citySpecificScenarios: GeneratedScenario[] = metadata.petRisks.slice(0, 2).map((risk, index) => {
    const landmark = metadata.landmarks[index % metadata.landmarks.length];
    const templates: Record<Language, GeneratedScenario> = {
      en: {
        scenario: `Your pet encountered ${risk} near ${landmark}`,
        urgency: `This is common in ${city.name}'s ${metadata.areaType} environment — act quickly`,
        location: landmark
      },
      ms: {
        scenario: `Haiwan anda menghadapi ${risk} berhampiran ${landmark}`,
        urgency: `Ini biasa di persekitaran ${metadata.areaType} ${city.name} — bertindak cepat`,
        location: landmark
      },
      zh: {
        scenario: `您的宠物在${landmark}附近遇到${risk}`,
        urgency: `这在${city.name}的${metadata.areaType}环境中很常见 — 迅速行动`,
        location: landmark
      }
    };
    return templates[language] || templates['en'];
  });
  
  // Return city-specific scenarios first, then 1 climate scenario
  return [
    ...citySpecificScenarios,
    {
      scenario: climateScenarios[0].scenario,
      urgency: climateScenarios[0].urgency,
      location: metadata.landmarks[2 % metadata.landmarks.length]
    }
  ];
};

export const generateVetAdvice = (city: CityData, language: Language): VetAdvice => {
  const metadata = getCityMetadata(city.slug);
  const advicePool = vetAdvicePools[language];
  return advicePool[metadata.vetAdviceIndex % advicePool.length];
};

// ============ CITY-SPECIFIC FAQ GENERATOR ============

export interface GeneratedFAQ {
  question: string;
  answer: string;
  category: 'emergency' | 'cost' | 'service' | 'government' | 'general';
}

export const generateCityFAQs = (city: CityData, language: Language): GeneratedFAQ[] => {
  const metadata = getCityMetadata(city.slug);
  const dvsOffice = getDVSOffice(city.state);
  const council = getLocalCouncil(city.slug, city.state);
  
  const faqTemplates: Record<Language, GeneratedFAQ[]> = {
    en: [
      // Emergency FAQs
      { question: `What is the best 24-hour vet in ${city.name}?`, answer: `${city.name} has several 24/7 emergency veterinary clinics. We recommend calling ahead during late hours. Emergency consultations typically cost RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. Our directory shows real-time availability of emergency vets near you.`, category: 'emergency' },
      { question: `What should I do if my pet has an emergency in ${city.name} at night?`, answer: `Stay calm and call the nearest 24-hour vet immediately. In ${city.name}, you can find emergency vets near ${metadata.landmarks[0]} and ${metadata.landmarks[1]}. Keep your pet still and warm during transport. Never give human medication without vet advice.`, category: 'emergency' },
      { question: `Is there an emergency vet hotline for ${city.name}?`, answer: `While there's no centralized hotline, PetCare Malaysia lists verified 24/7 clinics in ${city.name}. Save multiple vet contacts in your phone now — before an emergency happens. Most ${city.name} clinics respond within 5 minutes after hours.`, category: 'emergency' },
      
      // Cost FAQs
      { question: `How much does a vet visit cost in ${city.name}?`, answer: `Standard vet consultations in ${city.name} range from RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}. Emergency visits cost more (RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}). ${metadata.vetPriceTier === 'premium' ? 'As a premium area, prices are higher than average.' : metadata.vetPriceTier === 'budget' ? 'Prices here are generally more affordable than major city centers.' : 'Prices are comparable to other similar areas.'}`, category: 'cost' },
      { question: `What is the average pet grooming price in ${city.name}?`, answer: `Pet grooming in ${city.name} costs RM${metadata.avgGroomingCost.min}-RM${metadata.avgGroomingCost.max} depending on pet size and services. Basic bath starts lower, while full grooming with nail trim, ear cleaning, and styling costs more. Premium groomers near ${metadata.landmarks[0]} may charge higher.`, category: 'cost' },
      { question: `How much does pet surgery cost in ${city.name}?`, answer: `Pet surgery costs in ${city.name} vary widely: sterilization RM200-RM600, dental cleaning RM300-RM800, tumor removal RM500-RM3,000, emergency surgery RM1,000-RM8,000+. Pet insurance can cover 50-80% of these costs.`, category: 'cost' },
      
      // Service FAQs
      { question: `Where can I find pet grooming near ${city.name}?`, answer: `${city.name} has several grooming options near ${metadata.landmarks[0]} and ${metadata.landmarks[1]}. Services include basic wash (RM${metadata.avgGroomingCost.min}+), full grooming (RM${metadata.avgGroomingCost.max}), and spa treatments. Many offer pickup/delivery for busy pet parents.`, category: 'service' },
      { question: `Where can I adopt a pet in ${city.name}?`, answer: `Pet adoption in ${city.name} is available through local shelters, rescue organizations, and SPCA ${city.state}. Adoption fees (RM50-RM300) typically include vaccination, microchipping, and sterilization. Visit our adoption section for available pets near ${metadata.landmarks[0]}.`, category: 'service' },
      { question: `Is there pet boarding in ${city.name}?`, answer: `Yes, ${city.name} has pet boarding facilities ranging from budget kennels (RM30-50/night) to premium pet hotels (RM100-200/night). Most are located near ${metadata.landmarks[0]}. Book early during holiday seasons as spaces fill quickly.`, category: 'service' },
      { question: `Where can I buy pet food in ${city.name}?`, answer: `Pet food is available at Pet Lovers Centre, Pet Safari, and local pet shops near ${metadata.landmarks[0]}. Online delivery from Shopee and Lazada reaches ${city.name} within 1-3 days. Premium brands like Royal Canin and Hill's are widely available.`, category: 'service' },
      
      // Government FAQs
      { question: `How do I register my dog in ${city.name}?`, answer: `Dog registration in ${city.name} is handled by ${council.name} (${council.shortName}). License fee: ${council.dogLicenseFee} (or ${council.spayedFee} if spayed/neutered). Visit ${council.website} or their office with your dog's vaccination records and microchip number.`, category: 'government' },
      { question: `Where is the DVS office near ${city.name}?`, answer: `The nearest Department of Veterinary Services office for ${city.name} is the ${dvsOffice.name} at ${dvsOffice.address}. Contact: ${dvsOffice.phone} or ${dvsOffice.email}. They handle pet microchipping, health certificates, and import/export permits.`, category: 'government' },
      { question: `Is pet microchipping mandatory in ${city.name}?`, answer: `Yes, under the Animal Welfare Act 2015, all dogs in ${city.name} (and Malaysia) must be microchipped and registered with DVS. Microchipping costs RM50-RM100 at local vets. This helps reunite lost pets with owners — over 70% of microchipped pets are recovered.`, category: 'government' },
      
      // General FAQs
      { question: `What are common pet health risks in ${city.name}?`, answer: `Pet owners in ${city.name} should watch for: ${metadata.petRisks.slice(0, 3).join(', ')}. The ${metadata.climate} climate also contributes to skin issues and heatstroke. Regular vet check-ups (every 6 months) help catch problems early.`, category: 'general' },
      { question: `What vaccinations does my pet need in ${city.name}?`, answer: `Pets in ${city.name} need: Dogs — DHPP (distemper, hepatitis, parvovirus, parainfluenza) and rabies. Cats — FVRCP and rabies. Puppies/kittens need 3 rounds starting at 6-8 weeks. Annual boosters cost RM60-RM150 at local vets.`, category: 'general' }
    ],
    ms: [
      // Emergency FAQs
      { question: `Apakah klinik haiwan 24 jam terbaik di ${city.name}?`, answer: `${city.name} mempunyai beberapa klinik veterinar kecemasan 24/7. Kami syorkan hubungi dahulu pada waktu lewat malam. Konsultasi kecemasan biasanya RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. Direktori kami menunjukkan ketersediaan doktor haiwan kecemasan berdekatan.`, category: 'emergency' },
      { question: `Apa yang perlu saya lakukan jika haiwan saya kecemasan di ${city.name} pada waktu malam?`, answer: `Bertenang dan hubungi doktor haiwan 24 jam segera. Di ${city.name}, anda boleh jumpa doktor haiwan kecemasan berhampiran ${metadata.landmarks[0]} dan ${metadata.landmarks[1]}. Pastikan haiwan anda diam dan hangat semasa pengangkutan. Jangan beri ubat manusia tanpa nasihat doktor haiwan.`, category: 'emergency' },
      
      // Cost FAQs
      { question: `Berapakah kos lawatan doktor haiwan di ${city.name}?`, answer: `Konsultasi doktor haiwan standard di ${city.name} adalah RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}. Lawatan kecemasan lebih mahal (RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}). ${metadata.vetPriceTier === 'premium' ? 'Sebagai kawasan premium, harga lebih tinggi daripada purata.' : metadata.vetPriceTier === 'budget' ? 'Harga di sini umumnya lebih berpatutan.' : 'Harga setanding dengan kawasan serupa.'}`, category: 'cost' },
      { question: `Berapakah harga dandanan haiwan di ${city.name}?`, answer: `Dandanan haiwan di ${city.name} berharga RM${metadata.avgGroomingCost.min}-RM${metadata.avgGroomingCost.max} bergantung pada saiz haiwan dan perkhidmatan. Mandian asas bermula lebih rendah, manakala dandanan penuh dengan potong kuku, pembersihan telinga, dan penggayaan lebih mahal.`, category: 'cost' },
      
      // Service FAQs
      { question: `Di mana saya boleh cari dandanan haiwan berhampiran ${city.name}?`, answer: `${city.name} mempunyai beberapa pilihan dandanan berhampiran ${metadata.landmarks[0]} dan ${metadata.landmarks[1]}. Perkhidmatan termasuk mandian asas (RM${metadata.avgGroomingCost.min}+), dandanan penuh (RM${metadata.avgGroomingCost.max}), dan rawatan spa.`, category: 'service' },
      { question: `Di mana saya boleh mengadopsi haiwan di ${city.name}?`, answer: `Adopsi haiwan di ${city.name} tersedia melalui pusat perlindungan tempatan, organisasi penyelamatan, dan SPCA ${city.state}. Yuran adopsi (RM50-RM300) biasanya termasuk vaksinasi, mikrochip, dan pensterilan.`, category: 'service' },
      
      // Government FAQs  
      { question: `Bagaimana saya mendaftar anjing di ${city.name}?`, answer: `Pendaftaran anjing di ${city.name} dikendalikan oleh ${council.name} (${council.shortName}). Yuran lesen: ${council.dogLicenseFee} (atau ${council.spayedFee} jika dimandulkan). Lawati ${council.website} atau pejabat mereka dengan rekod vaksinasi dan nombor mikrochip anjing anda.`, category: 'government' },
      { question: `Di mana pejabat DVS berhampiran ${city.name}?`, answer: `Pejabat Jabatan Perkhidmatan Veterinar terdekat untuk ${city.name} ialah ${dvsOffice.name} di ${dvsOffice.address}. Hubungi: ${dvsOffice.phone}. Mereka mengendalikan mikrochip haiwan, sijil kesihatan, dan permit import/eksport.`, category: 'government' },
      
      // General FAQs
      { question: `Apakah risiko kesihatan haiwan yang biasa di ${city.name}?`, answer: `Pemilik haiwan di ${city.name} perlu berhati-hati dengan: ${metadata.petRisks.slice(0, 3).join(', ')}. Iklim ${metadata.climate} juga menyumbang kepada masalah kulit dan haba melampau.`, category: 'general' },
      { question: `Apakah vaksinasi yang diperlukan untuk haiwan saya di ${city.name}?`, answer: `Haiwan di ${city.name} memerlukan: Anjing — DHPP dan rabies. Kucing — FVRCP dan rabies. Anak anjing/kucing memerlukan 3 suntikan bermula pada 6-8 minggu. Suntikan tahunan berharga RM60-RM150.`, category: 'general' }
    ],
    zh: [
      // Emergency FAQs
      { question: `${city.name}最好的24小时兽医在哪里？`, answer: `${city.name}有几家24/7紧急兽医诊所。我们建议在深夜时提前打电话。紧急咨询通常费用为RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}。我们的目录显示附近紧急兽医的实时可用性。`, category: 'emergency' },
      { question: `如果我的宠物在${city.name}晚上发生紧急情况怎么办？`, answer: `保持冷静，立即拨打最近的24小时兽医。在${city.name}，您可以在${metadata.landmarks[0]}和${metadata.landmarks[1]}附近找到紧急兽医。运输途中保持宠物安静和温暖。未经兽医建议不要给人用药物。`, category: 'emergency' },
      
      // Cost FAQs
      { question: `${city.name}的兽医诊费是多少？`, answer: `${city.name}的标准兽医咨询费用为RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}。紧急就诊费用更高（RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}）。${metadata.vetPriceTier === 'premium' ? '作为高端地区，价格高于平均水平。' : metadata.vetPriceTier === 'budget' ? '这里的价格通常比主要城市中心更实惠。' : '价格与其他类似地区相当。'}`, category: 'cost' },
      { question: `${city.name}的宠物美容价格是多少？`, answer: `${city.name}的宠物美容费用为RM${metadata.avgGroomingCost.min}-RM${metadata.avgGroomingCost.max}，取决于宠物大小和服务。基本洗澡起价较低，而全套美容包括剪指甲、清洁耳朵和造型则费用更高。`, category: 'cost' },
      
      // Service FAQs
      { question: `${city.name}附近哪里可以找到宠物美容？`, answer: `${city.name}在${metadata.landmarks[0]}和${metadata.landmarks[1]}附近有几个美容选择。服务包括基本洗澡（RM${metadata.avgGroomingCost.min}+）、全套美容（RM${metadata.avgGroomingCost.max}）和水疗护理。`, category: 'service' },
      { question: `在${city.name}哪里可以领养宠物？`, answer: `${city.name}的宠物领养可通过当地收容所、救援组织和${city.state} SPCA进行。领养费用（RM50-RM300）通常包括疫苗接种、微芯片植入和绝育。`, category: 'service' },
      
      // Government FAQs
      { question: `如何在${city.name}注册我的狗？`, answer: `${city.name}的狗只注册由${council.name}（${council.shortName}）处理。许可证费用：${council.dogLicenseFee}（如果已绝育则为${council.spayedFee}）。请携带狗的疫苗接种记录和微芯片号码访问${council.website}或其办公室。`, category: 'government' },
      { question: `${city.name}附近的DVS办公室在哪里？`, answer: `${city.name}最近的兽医服务部办公室是${dvsOffice.name}，地址：${dvsOffice.address}。联系方式：${dvsOffice.phone}。他们处理宠物微芯片、健康证书和进出口许可证。`, category: 'government' },
      
      // General FAQs
      { question: `${city.name}常见的宠物健康风险有哪些？`, answer: `${city.name}的宠物主人应注意：${metadata.petRisks.slice(0, 3).join('、')}。${metadata.climate}气候也会导致皮肤问题和中暑。`, category: 'general' },
      { question: `我的宠物在${city.name}需要什么疫苗？`, answer: `${city.name}的宠物需要：狗 — DHPP和狂犬病。猫 — FVRCP和狂犬病。幼犬/幼猫从6-8周开始需要3轮接种。年度加强针费用为RM60-RM150。`, category: 'general' }
    ]
  };
  
  return faqTemplates[language] || faqTemplates['en'];
};

// ============ STATISTICS GENERATOR ============

export interface CityStatistics {
  estimatedPetOwnership: string;
  estimatedPetHouseholds: number;
  estimatedDogs: number;
  estimatedCats: number;
  avgEmergencyWaitTime: string;
  nearestEmergencyVet: string;
}

export const generateCityStatistics = (city: CityData): CityStatistics => {
  const metadata = getCityMetadata(city.slug);
  
  // Calculate estimates based on national averages and population
  const petOwnershipRate = 0.511; // 51.1% national average
  const estimatedHouseholds = Math.round(metadata.population / 3.5); // avg household size
  const petHouseholds = Math.round(estimatedHouseholds * petOwnershipRate);
  const dogRatio = 0.55; // Dogs are 55% of pets
  const catRatio = 0.45; // Cats are 45% of pets
  
  return {
    estimatedPetOwnership: `${Math.round(petOwnershipRate * 100)}%`,
    estimatedPetHouseholds: petHouseholds,
    estimatedDogs: Math.round(petHouseholds * dogRatio * 1.2), // 1.2 dogs per dog-owning household
    estimatedCats: Math.round(petHouseholds * catRatio * 1.5), // 1.5 cats per cat-owning household
    avgEmergencyWaitTime: metadata.populationTier === 'major' ? '5-10 minutes' : metadata.populationTier === 'medium' ? '10-20 minutes' : '15-30 minutes',
    nearestEmergencyVet: metadata.nearestMajorCity 
      ? `${metadata.distanceToHub} to nearest 24/7 vet in ${metadata.nearestMajorCity}`
      : `Multiple 24/7 clinics available`
  };
};

// ============ HEADLINE GENERATOR ============

interface HeadlineContent {
  headline: string;
  subheadline: string;
}

// Generate a hash-based index from city slug for consistent variation
const getCityHashIndex = (slug: string, modulo: number): number => {
  const hash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash % modulo;
};

export const generateCityHeadlines = (city: CityData, language: Language): HeadlineContent => {
  const metadata = getCityMetadata(city.slug);
  const topRisks = metadata.petRisks.slice(0, 3);
  const primaryRisk = metadata.petRisks[0];
  const landmark = metadata.landmarks[0];
  const population = (metadata.population / 1000).toFixed(0);
  
  // 8 headline variations for hub cities or cities without nearestMajorCity
  const headlineVariant = getCityHashIndex(city.slug, 8);
  
  const hubHeadlinePatterns: Record<Language, string[]> = {
    en: [
      `Emergency Vet Care in ${city.name}: 24/7 When Your Pet Needs Help`,
      `${city.name} Pet Owners: Find Trusted Veterinary Care Near You`,
      `Quick Vet Access for ${city.name} Pets — Day or Night`,
      `${city.name} Pet Emergency? Help Is Closer Than You Think`,
      `Protect Your Pet in ${city.name}: Expert Vet Care Available Now`,
      `${city.name}'s Complete Guide to Pet Emergency Care`,
      `When Seconds Count: ${city.name} Pet Emergency Resources`,
      `${city.name} Pet Care Hub: Vets, Costs & Emergency Services`
    ],
    ms: [
      `Penjagaan Kecemasan Veterinar di ${city.name}: 24/7`,
      `Pemilik Haiwan ${city.name}: Cari Penjagaan Veterinar Dipercayai`,
      `Akses Pantas ke Veterinar untuk Haiwan ${city.name}`,
      `Kecemasan Haiwan ${city.name}? Bantuan Lebih Dekat`,
      `Lindungi Haiwan Anda di ${city.name}: Penjagaan Pakar`,
      `Panduan Lengkap Kecemasan Haiwan ${city.name}`,
      `Bila Saat Mendesak: Sumber Kecemasan Haiwan ${city.name}`,
      `Pusat Penjagaan Haiwan ${city.name}: Veterinar & Perkhidmatan`
    ],
    zh: [
      `${city.name}紧急兽医护理：全天候服务`,
      `${city.name}宠物主人：寻找可信赖的兽医护理`,
      `${city.name}宠物快速兽医服务`,
      `${city.name}宠物紧急情况？帮助就在附近`,
      `保护您在${city.name}的宠物：专业护理`,
      `${city.name}宠物紧急护理完整指南`,
      `争分夺秒：${city.name}宠物紧急资源`,
      `${city.name}宠物护理中心：兽医与服务`
    ]
  };
  
  // Satellite city headlines emphasize proximity to hub
  const satelliteHeadlinePatterns: Record<Language, string[]> = {
    en: [
      `${city.name} Pet Emergencies: Help Is Just ${metadata.distanceToHub} Away`,
      `${city.name} Pet Care: ${metadata.distanceToHub} to Emergency Vet in ${metadata.nearestMajorCity}`,
      `Pet Emergency in ${city.name}? ${metadata.nearestMajorCity} Vets Are ${metadata.distanceToHub} Away`,
      `${city.name} Pet Owners: 24/7 Care Just ${metadata.distanceToHub} to ${metadata.nearestMajorCity}`
    ],
    ms: [
      `Kecemasan Haiwan ${city.name}: Bantuan Hanya ${metadata.distanceToHub} Sahaja`,
      `Penjagaan Haiwan ${city.name}: ${metadata.distanceToHub} ke Veterinar Kecemasan`,
      `Kecemasan Haiwan di ${city.name}? Veterinar ${metadata.nearestMajorCity} ${metadata.distanceToHub} Sahaja`,
      `Pemilik Haiwan ${city.name}: Penjagaan 24/7 Hanya ${metadata.distanceToHub}`
    ],
    zh: [
      `${city.name}宠物紧急情况：帮助仅需${metadata.distanceToHub}`,
      `${city.name}宠物护理：${metadata.distanceToHub}到${metadata.nearestMajorCity}急诊`,
      `${city.name}宠物紧急情况？${metadata.nearestMajorCity}兽医仅需${metadata.distanceToHub}`,
      `${city.name}宠物主人：24/7护理仅需${metadata.distanceToHub}`
    ]
  };
  
  // Choose headline based on whether city is satellite or hub
  let headline: string;
  if (metadata.nearestMajorCity && metadata.distanceToHub) {
    const satelliteVariant = getCityHashIndex(city.slug, 4);
    headline = satelliteHeadlinePatterns[language]?.[satelliteVariant] || satelliteHeadlinePatterns['en'][satelliteVariant];
  } else {
    headline = hubHeadlinePatterns[language]?.[headlineVariant] || hubHeadlinePatterns['en'][headlineVariant];
  }
  
  // Create unique subheadlines using city-specific data
  const subheadlines: Record<Language, string> = {
    en: `${topRisks.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')} — with ${population}k residents near ${landmark}, ${primaryRisk} is a daily reality. Be ready.`,
    ms: `${topRisks.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(', ')} — dengan ${population}k penduduk berhampiran ${landmark}, ${primaryRisk} adalah realiti harian. Bersedia.`,
    zh: `${topRisks.join('、')} — ${population}k居民在${landmark}附近，${primaryRisk}是日常现实。做好准备。`
  };
  
  return {
    headline,
    subheadline: subheadlines[language] || subheadlines['en']
  };
};

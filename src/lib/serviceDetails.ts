import { Language } from './translations';

export type ServiceSlug =
  | 'emergency'
  | 'vet'
  | 'grooming'
  | 'boarding'
  | 'adoption'
  | 'insurance'
  | 'nutrition';

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetailContent {
  metaTitle: string;
  metaDescription: string;
  hero: string;
  subhero: string;
  problem: string[];
  solution: string[];
  costSnippet: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  bullets: string[];
  faq: ServiceFAQ[];
}

export interface ServiceDetail {
  slug: ServiceSlug;
  iconKey: 'phone' | 'heart' | 'scissors' | 'clock' | 'shield' | 'shopping' | 'paw';
  accent: string; // tailwind classes for icon tile
  en: ServiceDetailContent;
  ms: ServiceDetailContent;
  zh: ServiceDetailContent;
}

export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
  emergency: {
    slug: 'emergency',
    iconKey: 'phone',
    accent: 'text-destructive bg-destructive/10',
    en: {
      metaTitle: '24/7 Pet Emergency Vets in Malaysia — Find Help Fast | PetCare Malaysia',
      metaDescription: 'Pet emergency in Malaysia? Find 24-hour vets, triage your pet in 60 seconds, and learn what to do before you reach the clinic. Free tool, RM-priced clinics.',
      hero: 'Pet Emergency? Every Minute Counts.',
      subhero: 'When your dog collapses or your cat stops breathing, Googling "vet near me" wastes minutes you do not have. Use our free 60-second triage tool — then call the nearest 24-hour vet from our verified Malaysian directory.',
      problem: [
        'Most pet owners in Malaysia do not know which vets are open after midnight — by the time they find one, their pet is in shock.',
        'Wrong "home remedies" from WhatsApp groups (milk for poisoning, oil for burns, raw egg for choking) kill more pets in Malaysia than the original emergency.',
        'A delayed bloat, blocked bladder, or heatstroke case can become a RM 5,000 surgery instead of a RM 400 stabilisation.',
      ],
      solution: [
        'Free emergency assessment tool — answer 17 yes/no questions and get an urgency score in under a minute.',
        'Verified directory of 24-hour and after-hours emergency clinics in KL, Selangor, Penang, Johor and beyond.',
        'Step-by-step "what to do RIGHT NOW" guidance while you transport your pet — no DIY treatment, just safe stabilisation.',
      ],
      costSnippet: 'After-hours emergency consults in Malaysia typically run RM 200–500 in KL/PJ, RM 150–350 in suburban areas, and RM 80–200 at DVS-subsidised clinics. Surgery and hospitalisation are extra.',
      ctaPrimaryLabel: 'Pet Emergency? Check Now — Free',
      ctaPrimaryHref: '/assessment',
      ctaSecondaryLabel: 'Open 47-Page Emergency Guide',
      ctaSecondaryHref: '/emergency-guide',
      bullets: [
        'Works for dogs, cats, rabbits, hamsters, birds.',
        'No login. No credit card. Built by Malaysian pet owners.',
        'Mobile-first — designed to use one-handed in a panic.',
      ],
      faq: [
        { q: 'What counts as a real pet emergency in Malaysia?', a: 'Difficulty breathing, collapse, suspected poisoning, bloated abdomen, a male cat that cannot urinate, seizure lasting more than 2 minutes, heatstroke, hit by vehicle, or uncontrolled bleeding all need a vet within 30–60 minutes.' },
        { q: 'How much does a 24-hour vet visit cost in Malaysia?', a: 'After-hours consultation alone is usually RM 200–500 in KL/PJ. Add IV fluids, X-rays, blood work, oxygen, or surgery and a single emergency visit can hit RM 1,500–8,000.' },
        { q: 'Can I treat my pet at home first?', a: 'No. Do not give human painkillers, milk, salt water, oil, raw egg, or any "home remedy". Stabilise (keep warm, keep still, keep airway clear) and drive to a vet. Wrong first aid is a leading cause of pet death in Malaysia.' },
        { q: 'Which 24-hour vets are open in KL right now?', a: 'Use our verified vet directory — it filters by 24-hour and emergency status across all 14 Malaysian states and shows phone numbers and Waze links.' },
        { q: 'Will pet insurance cover an emergency in Malaysia?', a: 'Most Malaysian pet insurance plans (PolicyStreet, MSIG, Allianz partners) cover accident and emergency from day 1, but illness has a 14–30 day waiting period. Check our insurance section before you buy.' },
        { q: 'What should I bring to the emergency vet?', a: 'Your IC, the pet (in a carrier or on a towel), any vomit/poison container in a sealed bag, vaccination card if you have it, and a credit card or e-wallet — emergency clinics often need RM 500–2,000 deposit.' },
      ],
    },
    ms: {
      metaTitle: 'Vet Kecemasan 24 Jam Malaysia — Cari Bantuan Pantas | PetCare Malaysia',
      metaDescription: 'Haiwan peliharaan kecemasan? Cari klinik vet 24 jam, triase dalam 60 saat dan tahu apa yang perlu dibuat sebelum sampai ke klinik. Percuma, harga RM Malaysia.',
      hero: 'Haiwan Kecemasan? Setiap Saat Penting.',
      subhero: 'Bila anjing rebah atau kucing berhenti bernafas, Google "vet berhampiran" buang masa yang anda tiada. Guna alat triase 60 saat percuma kami — kemudian hubungi vet 24 jam terdekat dari direktori sah Malaysia.',
      problem: [
        'Kebanyakan pemilik haiwan di Malaysia tak tahu vet mana buka selepas tengah malam — bila jumpa, haiwan dah dalam keadaan shock.',
        '"Ubat rumah" dari group WhatsApp (susu untuk racun, minyak untuk bakar, telur mentah untuk tercekik) bunuh lebih banyak haiwan daripada kecemasan asal.',
        'Kes bloat, pundi kencing tersumbat, atau heatstroke yang lewat jadi pembedahan RM 5,000 — bukan stabilisasi RM 400.',
      ],
      solution: [
        'Alat penilaian kecemasan percuma — jawab 17 soalan ya/tidak dan dapat skor segera dalam 1 minit.',
        'Direktori sah klinik vet 24 jam di KL, Selangor, Pulau Pinang, Johor dan seluruh Malaysia.',
        'Panduan "apa nak buat SEKARANG" sambil bawa haiwan ke vet — bukan rawatan sendiri, hanya stabilisasi selamat.',
      ],
      costSnippet: 'Konsultasi kecemasan selepas waktu pejabat di Malaysia biasanya RM 200–500 di KL/PJ, RM 150–350 di pinggir bandar, dan RM 80–200 di klinik DVS bersubsidi. Pembedahan dan hospital tambahan.',
      ctaPrimaryLabel: 'Haiwan Kecemasan? Semak — Percuma',
      ctaPrimaryHref: '/ms/assessment',
      ctaSecondaryLabel: 'Buka Panduan Kecemasan 47 Muka Surat',
      ctaSecondaryHref: '/ms/emergency-guide',
      bullets: [
        'Untuk anjing, kucing, arnab, hamster, burung.',
        'Tiada login. Tiada kad kredit. Dibina oleh pemilik haiwan Malaysia.',
        'Mobile-first — direka untuk guna satu tangan masa panik.',
      ],
      faq: [
        { q: 'Apa yang dikira kecemasan haiwan sebenar di Malaysia?', a: 'Sukar bernafas, rebah, syak diracun, perut kembung, kucing jantan tak boleh kencing, sawan lebih 2 minit, heatstroke, dilanggar kenderaan, atau pendarahan tak terkawal — perlu vet dalam 30–60 minit.' },
        { q: 'Berapa kos vet 24 jam di Malaysia?', a: 'Konsultasi selepas waktu sahaja biasanya RM 200–500 di KL/PJ. Tambah IV, X-ray, ujian darah, oksigen atau pembedahan, satu lawatan boleh capai RM 1,500–8,000.' },
        { q: 'Boleh saya rawat haiwan di rumah dulu?', a: 'Tidak. Jangan beri ubat tahan sakit manusia, susu, air garam, minyak, telur mentah, atau "ubat rumah". Stabilkan (panas, diam, saluran nafas terbuka) dan terus ke vet.' },
        { q: 'Vet 24 jam mana buka di KL sekarang?', a: 'Guna direktori vet sah kami — tapis ikut status 24 jam dan kecemasan untuk semua 14 negeri Malaysia dengan nombor telefon dan link Waze.' },
        { q: 'Insurans haiwan tanggung kecemasan di Malaysia?', a: 'Kebanyakan pelan Malaysia (PolicyStreet, MSIG, Allianz) tanggung kemalangan dari hari 1, tetapi penyakit ada tempoh menunggu 14–30 hari. Semak bahagian insurans dulu.' },
        { q: 'Apa nak bawa ke vet kecemasan?', a: 'IC anda, haiwan dalam carrier atau atas tuala, sebarang muntah/racun dalam bekas tertutup, kad vaksin jika ada, dan kad kredit/e-wallet — klinik kecemasan selalu minta deposit RM 500–2,000.' },
      ],
    },
    zh: {
      metaTitle: '马来西亚24小时宠物急诊 — 立即获取帮助 | PetCare Malaysia',
      metaDescription: '宠物急诊？查找24小时兽医、60秒分诊、了解到达诊所前该做什么。免费工具，马币定价。',
      hero: '宠物急诊？分秒必争。',
      subhero: '当狗倒下或猫停止呼吸时，谷歌搜索「附近兽医」会浪费您没有的时间。使用我们的免费60秒分诊工具 — 然后从经过验证的马来西亚目录中拨打最近的24小时兽医电话。',
      problem: [
        '马来西亚大多数宠物主人不知道哪家兽医午夜后开门 — 等找到时，宠物已经休克。',
        'WhatsApp群组的「家庭疗法」（中毒喂牛奶、烧伤抹油、噎住喂生鸡蛋）在马来西亚导致的宠物死亡比原本急诊还多。',
        '延误的胃扩张、膀胱阻塞或中暑可能从RM 400稳定治疗变成RM 5,000的手术。',
      ],
      solution: [
        '免费急诊评估工具 — 回答17个是/否问题，1分钟内获得紧急评分。',
        '吉隆坡、雪兰莪、槟城、柔佛及全国24小时急诊诊所经验证目录。',
        '运送宠物时「现在该做什么」的逐步指引 — 不DIY治疗，只做安全稳定。',
      ],
      costSnippet: '马来西亚非营业时间急诊咨询通常为吉隆坡/八打灵RM 200–500、郊区RM 150–350、DVS补贴诊所RM 80–200。手术和住院另计。',
      ctaPrimaryLabel: '宠物急诊？立即检查 — 免费',
      ctaPrimaryHref: '/zh/assessment',
      ctaSecondaryLabel: '打开47页急诊指南',
      ctaSecondaryHref: '/zh/emergency-guide',
      bullets: [
        '适用于狗、猫、兔、仓鼠、鸟类。',
        '无需登录。无需信用卡。由马来西亚宠物主人构建。',
        '移动优先 — 专为恐慌时单手使用而设计。',
      ],
      faq: [
        { q: '马来西亚什么算真正的宠物急诊？', a: '呼吸困难、倒下、疑似中毒、腹部胀气、公猫无法排尿、抽搐超过2分钟、中暑、被车撞、无法控制的出血 — 都需要在30–60分钟内见兽医。' },
        { q: '马来西亚24小时兽医费用多少？', a: '仅非营业时间咨询通常为吉隆坡/八打灵RM 200–500。加上输液、X光、血检、氧气或手术，单次急诊可达RM 1,500–8,000。' },
        { q: '我可以先在家治疗吗？', a: '不可以。不要给人用止痛药、牛奶、盐水、油、生鸡蛋或任何「家庭疗法」。稳定（保暖、不动、保持气道通畅）并立即送医。' },
        { q: '吉隆坡现在哪家24小时兽医开门？', a: '使用我们经验证的兽医目录 — 按14州的24小时和急诊状态筛选，显示电话和Waze链接。' },
        { q: '马来西亚宠物保险涵盖急诊吗？', a: '大多数马来西亚计划（PolicyStreet、MSIG、Allianz）从第1天起承保意外，但疾病有14–30天等待期。购买前请查看保险部分。' },
        { q: '应该带什么去急诊？', a: '您的身份证、宠物（在笼子或毛巾上）、密封容器中的呕吐物/毒物、疫苗卡（如有）、信用卡/电子钱包 — 急诊诊所通常需要RM 500–2,000押金。' },
      ],
    },
  },

  vet: {
    slug: 'vet',
    iconKey: 'heart',
    accent: 'text-primary bg-primary/10',
    en: {
      metaTitle: 'Find a Trusted Vet in Malaysia — Vaccinations, Check-ups, Specialists',
      metaDescription: 'Browse verified vet clinics across Malaysia by city and rating. Compare prices for consults, vaccines, dental and surgery before you book.',
      hero: 'Pick the Right Vet — Before You Need One.',
      subhero: 'Choosing a vet at 2 AM during a crisis is the worst time to choose one. Browse Malaysia\'s verified vet directory now — by city, rating, services, and 24-hour status — and save the number before you ever need it.',
      problem: [
        'Most pet owners only Google "vet near me" once — when something is already wrong.',
        'Prices vary 5x between clinics for the same vaccine. Without comparison, you overpay every visit for the next 12 years.',
        'Not every clinic does dental, ultrasound, orthopaedic surgery, or exotic animals. Showing up to the wrong one wastes a day.',
      ],
      solution: [
        'Browse 500+ verified Malaysian vet clinics filtered by city, services and rating.',
        'See typical price ranges in RM for consultation, vaccines, spay/neuter, dental, and surgery before booking.',
        'Bookmark a primary vet for routine care AND a backup 24-hour clinic — the two-vet rule that saves Malaysian pets every week.',
      ],
      costSnippet: 'Standard consultations in Malaysia run RM 60–120 in KL/PJ, RM 40–80 in suburban areas, and RM 5–30 at DVS clinics. Vaccinations RM 60–150 per shot. Spay/neuter RM 250–1,000.',
      ctaPrimaryLabel: 'Browse Verified Vet Clinics',
      ctaPrimaryHref: '/vet-clinics',
      ctaSecondaryLabel: 'Read Vet Visit Cost Guide',
      ctaSecondaryHref: '/qa/article/vet-visit-cost-malaysia',
      bullets: [
        'Independent — clinics cannot pay to be "top rated".',
        'Filters for 24-hour, emergency, exotic, dental, surgery.',
        'Updated with real Malaysian RM pricing every quarter.',
      ],
      faq: [
        { q: 'How much does a vet visit cost in Malaysia?', a: 'A standard consultation is RM 60–120 in KL/PJ premium clinics, RM 40–80 in suburban clinics, and as low as RM 5–30 at government DVS clinics. Vaccinations and tests are extra.' },
        { q: 'How often should my pet see a vet?', a: 'Healthy adult dogs and cats need an annual check-up plus core vaccines. Puppies and kittens need 3–4 visits in the first 4 months. Senior pets (7+) should go every 6 months.' },
        { q: 'Are DVS (government) vet clinics any good?', a: 'Yes — DVS clinics offer subsidised vaccines, spay/neuter and basic care, but waiting times are long and they do not handle complex surgery or 24-hour emergencies.' },
        { q: 'How do I find a vet that handles exotic pets?', a: 'Use our directory and filter by services. Rabbit, hamster, bird, and reptile vets are concentrated in KL, PJ, Penang and Johor Bahru.' },
        { q: 'Should I tip my vet in Malaysia?', a: 'Tipping is not expected in Malaysian vet clinics. The best "thank you" is a Google review and a referral.' },
        { q: 'Can I switch vets if I am unhappy?', a: 'Absolutely. Request your pet\'s records (vaccines, lab results, X-rays) and bring them to the new clinic. Malaysian vets are required to release records on request.' },
      ],
    },
    ms: {
      metaTitle: 'Cari Vet Dipercayai di Malaysia — Vaksinasi, Pemeriksaan, Pakar',
      metaDescription: 'Layari klinik vet sah di seluruh Malaysia ikut bandar dan rating. Bandingkan harga untuk konsultasi, vaksin, pergigian dan pembedahan sebelum tempah.',
      hero: 'Pilih Vet Yang Betul — Sebelum Perlu.',
      subhero: 'Memilih vet pukul 2 pagi semasa krisis adalah waktu paling teruk. Layari direktori vet Malaysia kami yang sah sekarang — ikut bandar, rating, perkhidmatan, dan status 24 jam.',
      problem: [
        'Kebanyakan pemilik haiwan hanya Google "vet berhampiran" sekali — bila sudah ada masalah.',
        'Harga berbeza 5x antara klinik untuk vaksin yang sama. Tanpa perbandingan, anda bayar lebih untuk 12 tahun akan datang.',
        'Bukan semua klinik buat pergigian, ultrasound, ortopedik, atau haiwan eksotik. Pergi salah klinik membazir sehari.',
      ],
      solution: [
        'Layari 500+ klinik vet Malaysia sah ditapis ikut bandar, perkhidmatan dan rating.',
        'Lihat julat harga RM untuk konsultasi, vaksin, pensterilan, pergigian, dan pembedahan sebelum tempah.',
        'Simpan vet utama untuk rawatan rutin DAN klinik 24 jam sandaran — peraturan dua vet yang selamatkan haiwan Malaysia setiap minggu.',
      ],
      costSnippet: 'Konsultasi standard di Malaysia: RM 60–120 di KL/PJ, RM 40–80 di pinggir bandar, dan RM 5–30 di klinik DVS. Vaksin RM 60–150 setiap suntikan. Pensterilan RM 250–1,000.',
      ctaPrimaryLabel: 'Layari Klinik Vet Sah',
      ctaPrimaryHref: '/ms/vet-clinics',
      ctaSecondaryLabel: 'Baca Panduan Kos Lawatan Vet',
      ctaSecondaryHref: '/ms/qa/article/vet-visit-cost-malaysia',
      bullets: [
        'Bebas — klinik tak boleh bayar untuk jadi "top rated".',
        'Tapis untuk 24 jam, kecemasan, eksotik, pergigian, pembedahan.',
        'Dikemas kini dengan harga RM Malaysia sebenar setiap suku tahun.',
      ],
      faq: [
        { q: 'Berapa kos lawatan vet di Malaysia?', a: 'Konsultasi standard RM 60–120 di KL/PJ, RM 40–80 di pinggir bandar, dan RM 5–30 di klinik DVS kerajaan. Vaksin dan ujian tambahan.' },
        { q: 'Berapa kerap haiwan perlu jumpa vet?', a: 'Anjing dan kucing dewasa sihat perlu pemeriksaan tahunan plus vaksin utama. Anak anjing/kucing perlu 3–4 lawatan dalam 4 bulan pertama. Haiwan tua (7+) setiap 6 bulan.' },
        { q: 'Klinik DVS (kerajaan) bagus?', a: 'Ya — klinik DVS tawarkan vaksin bersubsidi, pensterilan dan rawatan asas, tapi masa menunggu lama dan tak buat pembedahan kompleks atau kecemasan 24 jam.' },
        { q: 'Macam mana cari vet untuk haiwan eksotik?', a: 'Guna direktori kami dan tapis ikut perkhidmatan. Vet arnab, hamster, burung, dan reptilia tertumpu di KL, PJ, Pulau Pinang dan Johor Bahru.' },
        { q: 'Perlu beri tip kepada vet di Malaysia?', a: 'Tip tidak dijangka di klinik vet Malaysia. "Terima kasih" terbaik adalah review Google dan rujukan.' },
        { q: 'Boleh tukar vet jika tak puas hati?', a: 'Boleh. Minta rekod haiwan anda (vaksin, ujian, X-ray) dan bawa ke klinik baru. Vet Malaysia wajib lepaskan rekod atas permintaan.' },
      ],
    },
    zh: {
      metaTitle: '在马来西亚找到值得信赖的兽医 — 疫苗、体检、专科',
      metaDescription: '按城市和评分浏览马来西亚经验证的兽医诊所。预约前比较咨询、疫苗、牙科和手术的价格。',
      hero: '在需要之前 — 选对兽医。',
      subhero: '凌晨2点危机时选兽医是最糟糕的时机。立即浏览马来西亚经验证的兽医目录 — 按城市、评分、服务和24小时状态筛选。',
      problem: [
        '大多数宠物主人只在出问题时谷歌一次「附近兽医」。',
        '同一种疫苗在不同诊所价格相差5倍。不比较，未来12年每次都多付。',
        '不是每家诊所都做牙科、超声、骨科手术或异国宠物。去错诊所浪费一天。',
      ],
      solution: [
        '浏览500+经验证的马来西亚兽医诊所，按城市、服务和评分筛选。',
        '预约前查看咨询、疫苗、绝育、牙科和手术的马币价格范围。',
        '收藏一家常规护理的主要兽医加一家24小时备用诊所 — 每周拯救马来西亚宠物的「双兽医」规则。',
      ],
      costSnippet: '马来西亚标准咨询：吉隆坡/八打灵RM 60–120、郊区RM 40–80、DVS诊所RM 5–30。疫苗每针RM 60–150。绝育RM 250–1,000。',
      ctaPrimaryLabel: '浏览经验证的兽医诊所',
      ctaPrimaryHref: '/zh/vet-clinics',
      ctaSecondaryLabel: '阅读兽医费用指南',
      ctaSecondaryHref: '/zh/qa/article/vet-visit-cost-malaysia',
      bullets: [
        '独立 — 诊所不能付费成为「最高评分」。',
        '可筛选24小时、急诊、异国、牙科、手术。',
        '每季度更新真实马币价格。',
      ],
      faq: [
        { q: '马来西亚兽医费用多少？', a: '标准咨询吉隆坡/八打灵RM 60–120、郊区RM 40–80、政府DVS诊所RM 5–30。疫苗和检查另计。' },
        { q: '宠物多久看一次兽医？', a: '健康的成年狗猫需要每年体检加核心疫苗。幼犬幼猫前4个月需3–4次。高龄宠物（7岁以上）每6个月一次。' },
        { q: 'DVS（政府）兽医诊所好吗？', a: '好 — DVS诊所提供补贴疫苗、绝育和基础护理，但等待时间长，不处理复杂手术或24小时急诊。' },
        { q: '如何找处理异国宠物的兽医？', a: '使用我们的目录按服务筛选。兔、仓鼠、鸟、爬虫兽医集中在吉隆坡、八打灵、槟城和新山。' },
        { q: '在马来西亚要给兽医小费吗？', a: '马来西亚兽医诊所不期待小费。最好的「谢谢」是谷歌评价和推荐。' },
        { q: '不满意可以换兽医吗？', a: '当然可以。索取宠物记录（疫苗、化验、X光）带到新诊所。马来西亚兽医必须按要求放行记录。' },
      ],
    },
  },

  grooming: {
    slug: 'grooming',
    iconKey: 'scissors',
    accent: 'text-accent bg-accent/10',
    en: {
      metaTitle: 'Pet Grooming in Malaysia — Prices, Trusted Groomers, Mobile Service',
      metaDescription: 'Find pet groomers across Malaysia. Compare prices for baths, full grooms, de-matting and mobile service. Tropical-climate grooming tips included.',
      hero: 'Stop Letting Bad Grooming Hurt Your Pet.',
      subhero: 'Malaysia\'s tropical heat plus matted fur equals hot spots, fungal infections, and miserable pets. Find vetted groomers who actually understand humid-climate coats — not just "shave everything in summer".',
      problem: [
        'Cheap RM 30 grooms often mean dirty clippers, untrained staff, and razor burns that take weeks to heal.',
        '"Lion cuts" on double-coated breeds (Husky, Golden, Pomeranian) destroy the coat and can cause permanent skin damage in Malaysian humidity.',
        'Mobile groomers vary wildly — some are excellent, some traumatise pets in tiny vans without ventilation.',
      ],
      solution: [
        'Verified grooming partners across KL, PJ, Penang, JB, Ipoh, Kuching and more — with real customer reviews.',
        'Mobile, in-store and home-visit options with transparent RM pricing.',
        'Breed-specific grooming guides for Malaysia\'s heat: how often, what cut, what shampoo.',
      ],
      costSnippet: 'Basic bath: RM 40–120. Full groom (small dog): RM 80–200. Full groom (large/double coat): RM 150–400. Mobile service: add RM 30–80. De-matting (heavy): RM 50–150 extra.',
      ctaPrimaryLabel: 'Find Groomers Near Me',
      ctaPrimaryHref: '/locations',
      ctaSecondaryLabel: 'Read Grooming Cost Guide',
      ctaSecondaryHref: '/qa/article/grooming-cost-malaysia',
      bullets: [
        'No "shave everything" myths — climate-correct advice.',
        'Reviews from real Malaysian pet owners.',
        'Mobile and home-visit groomer options listed.',
      ],
      faq: [
        { q: 'How much does pet grooming cost in Malaysia?', a: 'Basic bath RM 40–120. Full groom for small dogs RM 80–200, large/double coats RM 150–400. Mobile service adds RM 30–80. Cats RM 80–250.' },
        { q: 'How often should I groom my dog in Malaysia?', a: 'Short coats: bath every 4–6 weeks. Long/double coats: full groom every 6–8 weeks plus brushing 2–3 times a week. Humidity makes mats form fast.' },
        { q: 'Is shaving my Husky/Golden in Malaysia OK?', a: 'No. Double coats insulate against heat as well as cold. Shaving exposes skin to sun and damages regrowth. De-shed and brush — do not shave.' },
        { q: 'Are mobile groomers safe?', a: 'Good ones are excellent for anxious pets. Check ventilation, see the van inside, ask about staff training, and read reviews before booking.' },
        { q: 'Can the vet groom my pet too?', a: 'Some vets offer grooming, especially under sedation for aggressive or matted cases. This costs RM 200–800 because anaesthesia is involved.' },
        { q: 'What grooming should I do at home?', a: 'Brush 2–3 times a week, check ears for moisture (Malaysian humidity = ear infections), trim nails monthly, and bathe with pH-balanced pet shampoo only — never human shampoo.' },
      ],
    },
    ms: {
      metaTitle: 'Grooming Haiwan Malaysia — Harga, Groomer Dipercayai, Mobile',
      metaDescription: 'Cari groomer haiwan di Malaysia. Bandingkan harga mandi, grooming penuh, de-matting dan servis mobile. Termasuk tip grooming iklim tropika.',
      hero: 'Henti Biar Grooming Buruk Cederakan Haiwan Anda.',
      subhero: 'Haba tropika Malaysia plus bulu kusut = hot spot, jangkitan kulat, dan haiwan menderita. Cari groomer yang faham bulu iklim lembap — bukan "cukur semua musim panas".',
      problem: [
        'Grooming murah RM 30 selalu bermaksud clipper kotor, staf tak terlatih, dan luka pisau cukur yang sembuh berminggu.',
        '"Lion cut" pada baka double-coat (Husky, Golden, Pomeranian) merosakkan bulu dan boleh sebabkan kerosakan kulit kekal dalam kelembapan Malaysia.',
        'Groomer mobile berbeza-beza — ada yang cemerlang, ada yang trauma haiwan dalam van kecil tanpa pengudaraan.',
      ],
      solution: [
        'Rakan grooming sah di KL, PJ, Pulau Pinang, JB, Ipoh, Kuching dan lebih lagi — dengan review pelanggan sebenar.',
        'Pilihan mobile, dalam kedai dan lawatan rumah dengan harga RM telus.',
        'Panduan grooming ikut baka untuk haba Malaysia: berapa kerap, potongan apa, syampu apa.',
      ],
      costSnippet: 'Mandi asas: RM 40–120. Grooming penuh (anjing kecil): RM 80–200. Grooming penuh (besar/double coat): RM 150–400. Servis mobile: tambah RM 30–80. De-matting: RM 50–150 tambahan.',
      ctaPrimaryLabel: 'Cari Groomer Berhampiran',
      ctaPrimaryHref: '/ms/locations',
      ctaSecondaryLabel: 'Baca Panduan Kos Grooming',
      ctaSecondaryHref: '/ms/qa/article/grooming-cost-malaysia',
      bullets: [
        'Tiada mitos "cukur semua" — nasihat ikut iklim.',
        'Review dari pemilik haiwan Malaysia sebenar.',
        'Pilihan groomer mobile dan lawatan rumah.',
      ],
      faq: [
        { q: 'Berapa kos grooming haiwan di Malaysia?', a: 'Mandi asas RM 40–120. Grooming penuh anjing kecil RM 80–200, besar/double coat RM 150–400. Servis mobile tambah RM 30–80. Kucing RM 80–250.' },
        { q: 'Berapa kerap perlu grooming anjing di Malaysia?', a: 'Bulu pendek: mandi 4–6 minggu sekali. Bulu panjang/double: grooming penuh 6–8 minggu plus berus 2–3 kali seminggu. Kelembapan buat bulu cepat kusut.' },
        { q: 'OK ke cukur Husky/Golden di Malaysia?', a: 'Tidak. Double coat melindungi dari haba juga sejuk. Cukur dedahkan kulit dan rosakkan pertumbuhan semula. De-shed dan berus — jangan cukur.' },
        { q: 'Groomer mobile selamat?', a: 'Yang baik cemerlang untuk haiwan cemas. Semak pengudaraan, lihat dalam van, tanya latihan staf, baca review sebelum tempah.' },
        { q: 'Vet boleh grooming juga?', a: 'Sesetengah vet tawarkan grooming, terutama bawah bius untuk kes agresif atau kusut teruk. Kos RM 200–800 sebab ada bius.' },
        { q: 'Apa grooming patut buat di rumah?', a: 'Berus 2–3 kali seminggu, periksa telinga (kelembapan Malaysia = jangkitan telinga), potong kuku setiap bulan, mandi guna syampu pH seimbang sahaja — jangan syampu manusia.' },
      ],
    },
    zh: {
      metaTitle: '马来西亚宠物美容 — 价格、可靠美容师、上门服务',
      metaDescription: '寻找马来西亚宠物美容师。比较洗澡、全套美容、解结和上门服务的价格。包括热带气候美容贴士。',
      hero: '别再让糟糕的美容伤害您的宠物。',
      subhero: '马来西亚热带高温加上打结的毛=热点、真菌感染和痛苦的宠物。找真正懂湿润气候毛发的美容师 — 不是「夏天剃光」。',
      problem: [
        'RM 30的便宜美容通常意味着脏剪刀、未受训员工和需要数周才能愈合的剃刀烫伤。',
        '在双层毛品种（哈士奇、金毛、博美）上做「狮子剪」会破坏毛发，在马来西亚湿度下可能造成永久性皮肤损伤。',
        '上门美容师参差不齐 — 有的优秀，有的在没有通风的小货车里让宠物受创。',
      ],
      solution: [
        '吉隆坡、八打灵、槟城、新山、怡保、古晋等经验证的美容合作伙伴 — 带真实客户评价。',
        '上门、店内和家访选项，马币价格透明。',
        '针对马来西亚高温的品种特定美容指南：多久一次、什么剪法、什么洗发水。',
      ],
      costSnippet: '基础洗澡：RM 40–120。全套美容（小型犬）：RM 80–200。全套美容（大型/双层毛）：RM 150–400。上门服务：加RM 30–80。解结（严重）：另加RM 50–150。',
      ctaPrimaryLabel: '查找附近美容师',
      ctaPrimaryHref: '/zh/locations',
      ctaSecondaryLabel: '阅读美容费用指南',
      ctaSecondaryHref: '/zh/qa/article/grooming-cost-malaysia',
      bullets: [
        '没有「剃光」迷思 — 符合气候的建议。',
        '来自真实马来西亚宠物主人的评价。',
        '列出上门和家访美容师选项。',
      ],
      faq: [
        { q: '马来西亚宠物美容费用多少？', a: '基础洗澡RM 40–120。小型犬全套美容RM 80–200，大型/双层毛RM 150–400。上门加RM 30–80。猫RM 80–250。' },
        { q: '在马来西亚多久给狗美容一次？', a: '短毛：每4–6周洗澡一次。长毛/双层毛：每6–8周全套美容加每周2–3次刷毛。湿度让毛发快速打结。' },
        { q: '在马来西亚剃哈士奇/金毛可以吗？', a: '不可以。双层毛既隔热也隔冷。剃光让皮肤暴露在阳光下并损伤再生。脱毛和刷毛 — 不要剃。' },
        { q: '上门美容师安全吗？', a: '好的对焦虑宠物很棒。检查通风、查看车内、询问员工培训、预约前阅读评价。' },
        { q: '兽医也能美容吗？', a: '一些兽医提供美容，尤其是对攻击性或严重打结案例的麻醉美容。因涉及麻醉，费用RM 200–800。' },
        { q: '我应该在家做什么美容？', a: '每周刷2–3次、检查耳朵（马来西亚湿度=耳部感染）、每月修剪指甲、只用pH平衡的宠物洗发水 — 绝不用人类洗发水。' },
      ],
    },
  },

  boarding: {
    slug: 'boarding',
    iconKey: 'clock',
    accent: 'text-sage bg-sage/10',
    en: {
      metaTitle: 'Pet Boarding in Malaysia — Hotels, Home-stay, Vacation Care',
      metaDescription: 'Find safe pet boarding across Malaysia for your dog, cat, rabbit or exotic pet. Compare pet hotels, home boarding and overnight rates in RM.',
      hero: 'Travelling? Don\'t Gamble With Your Pet\'s Life.',
      subhero: 'Every Hari Raya and Chinese New Year, Malaysian newspapers report pets dying at unregulated boarders — heatstroke, fights, escapes, untreated infections. Use only verified boarding partners.',
      problem: [
        'Anyone with a spare room can call themselves a "pet hotel" — there is no Malaysian licensing for pet boarding.',
        'Cheap RM 25/night cages often mean overcrowding, no air-con, no separation between aggressive and timid pets.',
        'Holidays book out 3–6 weeks ahead. Last-minute searches force you into the worst options.',
      ],
      solution: [
        'Verified pet hotels, home boarding and luxury kennels across Malaysia with photos and rates.',
        'Filters for air-conditioned rooms, individual suites, daily walks, webcam access, and exotic-pet boarding.',
        'Booking checklist: vaccination requirements, deposit, pickup/drop-off windows, emergency vet on call.',
      ],
      costSnippet: 'Standard cage boarding: RM 25–60/night. Suite/room boarding: RM 60–180/night. Luxury pet hotel: RM 150–400/night. Home boarding (sitter\'s house): RM 50–150/night. Cat boarding: RM 30–120/night.',
      ctaPrimaryLabel: 'Find Boarding Near Me',
      ctaPrimaryHref: '/locations',
      ctaSecondaryLabel: 'Read Boarding Cost Guide',
      ctaSecondaryHref: '/qa/article/pet-boarding-cost-malaysia',
      bullets: [
        'Verified hosts only — no Facebook randoms.',
        'Air-con, suite, and home-stay options listed.',
        'Pre-booking checklist included.',
      ],
      faq: [
        { q: 'How much does pet boarding cost in Malaysia?', a: 'Cage RM 25–60/night, suite RM 60–180/night, luxury hotel RM 150–400/night, home boarding RM 50–150/night. Cats are usually 30–50% cheaper than dogs.' },
        { q: 'What vaccines does my pet need to board?', a: 'Most Malaysian boarders require DHPPL + rabies for dogs, FVRCP + rabies for cats, and a clean fecal test. Some also require kennel cough (Bordetella) within the last 6 months.' },
        { q: 'Can I board my rabbit or hamster?', a: 'Yes — but only with exotic-experienced boarders. Pet hotels that handle rabbits, guinea pigs, hamsters, birds and reptiles are concentrated in KL, PJ and Penang.' },
        { q: 'How far in advance should I book?', a: 'For Hari Raya, CNY, school holidays and Deepavali, book 4–8 weeks ahead. Last-minute boarding during peak season often means cage-only or pets being turned away.' },
        { q: 'Is home boarding (a sitter\'s house) safer than a kennel?', a: 'Often yes for shy or single pets, no for those that need supervision around other animals. Verify the sitter has a separate area for unfamiliar pets and an emergency vet contact.' },
        { q: 'Can boarders give my pet medication?', a: 'Most can give oral pills and topical meds for free or RM 5–15/day extra. Insulin injections and IV fluids usually require a veterinary boarder (RM 50–150/day extra).' },
      ],
    },
    ms: {
      metaTitle: 'Boarding Haiwan Malaysia — Hotel, Home-stay, Penjagaan Cuti',
      metaDescription: 'Cari boarding haiwan selamat di Malaysia untuk anjing, kucing, arnab atau eksotik. Bandingkan hotel haiwan, boarding rumah dan kadar semalaman.',
      hero: 'Pergi Bercuti? Jangan Risikokan Nyawa Haiwan.',
      subhero: 'Setiap Hari Raya dan Tahun Baru Cina, akhbar Malaysia laporkan haiwan mati di boarding tak berlesen — heatstroke, bergaduh, terlepas. Guna hanya rakan boarding sah.',
      problem: [
        'Sesiapa dengan bilik kosong boleh panggil "pet hotel" — tiada lesen boarding di Malaysia.',
        'Sangkar murah RM 25/malam selalu bermaksud terlalu sesak, tiada penghawa dingin, tiada pemisahan antara haiwan agresif dan pemalu.',
        'Cuti penuh 3–6 minggu awal. Cari saat akhir paksa anda pilih yang paling teruk.',
      ],
      solution: [
        'Hotel haiwan, home boarding dan kandang mewah sah di seluruh Malaysia dengan gambar dan kadar.',
        'Tapis untuk bilik berhawa dingin, suite individu, jalan harian, akses webcam, dan boarding eksotik.',
        'Senarai semak tempahan: keperluan vaksin, deposit, waktu pickup/drop-off, vet kecemasan.',
      ],
      costSnippet: 'Sangkar standard: RM 25–60/malam. Bilik/suite: RM 60–180/malam. Hotel haiwan mewah: RM 150–400/malam. Home boarding: RM 50–150/malam. Kucing: RM 30–120/malam.',
      ctaPrimaryLabel: 'Cari Boarding Berhampiran',
      ctaPrimaryHref: '/ms/locations',
      ctaSecondaryLabel: 'Baca Panduan Kos Boarding',
      ctaSecondaryHref: '/ms/qa/article/pet-boarding-cost-malaysia',
      bullets: [
        'Hos sah sahaja — bukan rawak Facebook.',
        'Pilihan berhawa dingin, suite, dan home-stay.',
        'Senarai semak pra-tempahan disertakan.',
      ],
      faq: [
        { q: 'Berapa kos boarding haiwan di Malaysia?', a: 'Sangkar RM 25–60/malam, suite RM 60–180/malam, hotel mewah RM 150–400/malam, home boarding RM 50–150/malam. Kucing biasanya 30–50% lebih murah dari anjing.' },
        { q: 'Vaksin apa diperlukan untuk boarding?', a: 'Kebanyakan boarder Malaysia perlukan DHPPL + rabies untuk anjing, FVRCP + rabies untuk kucing, dan ujian najis bersih. Sesetengah perlukan kennel cough dalam 6 bulan.' },
        { q: 'Boleh boarding arnab atau hamster?', a: 'Boleh — tapi hanya dengan boarder berpengalaman eksotik. Hotel yang terima arnab, hamster, burung, reptilia tertumpu di KL, PJ dan Pulau Pinang.' },
        { q: 'Berapa awal patut tempah?', a: 'Untuk Hari Raya, CNY, cuti sekolah dan Deepavali, tempah 4–8 minggu awal. Tempahan saat akhir musim puncak selalu bermaksud sangkar sahaja atau ditolak.' },
        { q: 'Home boarding lebih selamat dari kandang?', a: 'Selalunya ya untuk haiwan pemalu atau tunggal, tidak untuk yang perlu pengawasan dengan haiwan lain. Pastikan sitter ada kawasan asing terpisah dan kontak vet kecemasan.' },
        { q: 'Boarder boleh beri ubat?', a: 'Kebanyakan boleh beri pil oral dan ubat topikal percuma atau RM 5–15/hari tambahan. Suntikan insulin dan IV biasanya perlu boarder veterinar (RM 50–150/hari tambahan).' },
      ],
    },
    zh: {
      metaTitle: '马来西亚宠物寄宿 — 酒店、家庭寄养、假期照顾',
      metaDescription: '为您的狗、猫、兔或异国宠物寻找马来西亚安全宠物寄宿。比较宠物酒店、家庭寄养和马币过夜价格。',
      hero: '出门旅行？别拿宠物的命冒险。',
      subhero: '每逢开斋节和农历新年，马来西亚报纸都报道宠物死于无监管寄宿处 — 中暑、打架、逃跑、未治疗的感染。只使用经验证的寄宿合作伙伴。',
      problem: [
        '任何有空房的人都可以自称「宠物酒店」 — 马来西亚没有宠物寄宿牌照。',
        '便宜的RM 25/晚笼子通常意味着过度拥挤、无空调、攻击性和胆小宠物没有分隔。',
        '假期提前3–6周订满。临时搜索逼您选择最差的。',
      ],
      solution: [
        '马来西亚各地经验证的宠物酒店、家庭寄养和豪华犬舍，附照片和价格。',
        '可筛选空调房间、独立套房、每日散步、网络摄像头、异国宠物寄宿。',
        '预订清单：疫苗要求、押金、接送时间、急诊兽医待命。',
      ],
      costSnippet: '标准笼舍：RM 25–60/晚。套房：RM 60–180/晚。豪华宠物酒店：RM 150–400/晚。家庭寄养：RM 50–150/晚。猫寄养：RM 30–120/晚。',
      ctaPrimaryLabel: '查找附近寄宿',
      ctaPrimaryHref: '/zh/locations',
      ctaSecondaryLabel: '阅读寄宿费用指南',
      ctaSecondaryHref: '/zh/qa/article/pet-boarding-cost-malaysia',
      bullets: [
        '只有经验证的主人 — 不是Facebook随机。',
        '列出空调、套房和家庭寄养选项。',
        '附预订前清单。',
      ],
      faq: [
        { q: '马来西亚宠物寄宿费用多少？', a: '笼舍RM 25–60/晚，套房RM 60–180/晚，豪华酒店RM 150–400/晚，家庭寄养RM 50–150/晚。猫通常比狗便宜30–50%。' },
        { q: '宠物寄宿需要什么疫苗？', a: '大多数马来西亚寄宿处要求狗DHPPL+狂犬，猫FVRCP+狂犬，以及粪便检测。一些还要求6个月内的犬窝咳。' },
        { q: '可以寄养兔子或仓鼠吗？', a: '可以 — 但只能找有异国经验的寄宿处。处理兔、豚鼠、仓鼠、鸟、爬虫的酒店集中在吉隆坡、八打灵和槟城。' },
        { q: '应该提前多久预订？', a: '开斋节、农历新年、学校假期和屠妖节提前4–8周预订。旺季临时寄宿通常意味着只能笼舍或被拒。' },
        { q: '家庭寄养比犬舍安全吗？', a: '对害羞或单独宠物通常是的，对需要在其他动物周围监督的不是。确认主人有独立区域和急诊兽医联系方式。' },
        { q: '寄宿处可以给宠物喂药吗？', a: '大多数可以免费或RM 5–15/天额外喂口服药和外用药。胰岛素和输液通常需要兽医寄宿（RM 50–150/天额外）。' },
      ],
    },
  },

  adoption: {
    slug: 'adoption',
    iconKey: 'paw',
    accent: 'text-terracotta bg-terracotta/10',
    en: {
      metaTitle: 'Pet Adoption in Malaysia — Adopt Don\'t Shop, Verified Shelters',
      metaDescription: 'Adopt a dog, cat, rabbit or other pet from verified Malaysian shelters. Adoption fees, process, and what to expect — explained.',
      hero: 'Adopt a Pet — Save Two Lives.',
      subhero: 'Every adopted pet saves the one you take home AND opens a kennel for the next abandoned one. Malaysia has over 150,000 stray dogs and cats — your next family member is already waiting.',
      problem: [
        'Pet shops often source from puppy mills with sick parents, parvovirus, and hidden genetic disease — RM 5,000 puppies that die in 2 weeks.',
        'Backyard breeders sell on Facebook and Carousell with no health screening, no parent records, and no after-sales support.',
        'Meanwhile, healthy vaccinated pets in shelters are euthanised every week because no one adopts.',
      ],
      solution: [
        'Verified Malaysian shelter and rescue partners (PAWS, SPCA, Independent Pet Rescuers, MDDB and more).',
        'Adoption fees in RM, vaccination/spay status disclosed, home-visit policies explained.',
        'What to expect: application form, home check, trial period, lifelong return policy if it does not work out.',
      ],
      costSnippet: 'Adoption fees in Malaysia: RM 0–300 for adult dogs and cats (covers vaccines and spay/neuter). RM 200–500 for puppies/kittens. Pedigree rescues RM 500–1,500. Compare to RM 2,000–8,000 for pet shop pets.',
      ctaPrimaryLabel: 'Browse Pets Near Me',
      ctaPrimaryHref: '/locations',
      ctaSecondaryLabel: 'Read Adoption Guide',
      ctaSecondaryHref: '/qa/article/pet-adoption-malaysia',
      bullets: [
        'Verified shelters only — no backyard breeders.',
        'Most pets come vaccinated, dewormed and spayed.',
        'Lifetime return policy at most rescues.',
      ],
      faq: [
        { q: 'How much does pet adoption cost in Malaysia?', a: 'RM 0–300 for adult dogs and cats (covers vaccines and spay/neuter). RM 200–500 for puppies/kittens. Pedigree rescues RM 500–1,500. Far cheaper and healthier than pet shops.' },
        { q: 'What is the adoption process?', a: 'Application form, phone or video interview, home visit (most rescues), 1–4 week trial period, formal adoption agreement. The whole process usually takes 1–3 weeks.' },
        { q: 'Can I adopt if I rent my home?', a: 'Yes, but you need written landlord permission. Many condos have pet bans — check your tenancy and bylaws first to avoid being forced to surrender later.' },
        { q: 'Are shelter pets healthy?', a: 'Reputable Malaysian shelters vaccinate, deworm, spay/neuter and screen for major diseases before adoption. You are far more likely to get a healthy pet from a shelter than a pet shop.' },
        { q: 'Can I adopt specific breeds?', a: 'Yes — Malaysian rescues regularly have pedigree dogs and cats (Persians, Shih Tzus, Golden Retrievers, etc.) surrendered by owners. Wait lists exist for popular breeds.' },
        { q: 'What if the adoption does not work out?', a: 'Reputable rescues require you to return the pet to them — never rehome on Facebook or abandon. Most have a lifetime return policy with no judgement.' },
      ],
    },
    ms: {
      metaTitle: 'Pengangkatan Haiwan Malaysia — Adopt Don\'t Shop, Shelter Sah',
      metaDescription: 'Ambil anjing, kucing, arnab atau haiwan lain dari shelter Malaysia sah. Yuran adoption, proses, dan apa dijangka — dijelaskan.',
      hero: 'Ambil Haiwan — Selamatkan Dua Nyawa.',
      subhero: 'Setiap haiwan diambil selamatkan yang anda bawa pulang DAN buka kandang untuk yang ditinggalkan seterusnya. Malaysia ada lebih 150,000 anjing dan kucing terbiar — ahli keluarga anda menunggu.',
      problem: [
        'Kedai haiwan selalu dapat dari puppy mill dengan ibu bapa sakit, parvovirus, dan penyakit genetik tersembunyi — anak anjing RM 5,000 yang mati dalam 2 minggu.',
        'Penternak halaman belakang jual di Facebook dan Carousell tanpa saringan kesihatan, tanpa rekod ibu bapa, tanpa sokongan selepas jualan.',
        'Sementara itu, haiwan sihat divaksin di shelter dilenyapkan setiap minggu kerana tiada yang adopt.',
      ],
      solution: [
        'Rakan shelter dan rescue Malaysia sah (PAWS, SPCA, Independent Pet Rescuers, MDDB dll).',
        'Yuran adoption dalam RM, status vaksin/pensterilan didedah, polisi lawatan rumah dijelaskan.',
        'Apa dijangka: borang permohonan, semakan rumah, tempoh percubaan, polisi pulangan seumur hidup.',
      ],
      costSnippet: 'Yuran adoption Malaysia: RM 0–300 untuk anjing dan kucing dewasa (termasuk vaksin dan pensterilan). RM 200–500 untuk anak anjing/kucing. Pedigree rescue RM 500–1,500.',
      ctaPrimaryLabel: 'Layari Haiwan Berhampiran',
      ctaPrimaryHref: '/ms/locations',
      ctaSecondaryLabel: 'Baca Panduan Adoption',
      ctaSecondaryHref: '/ms/qa/article/pet-adoption-malaysia',
      bullets: [
        'Shelter sah sahaja — bukan penternak halaman belakang.',
        'Kebanyakan haiwan divaksin, dinyahcacing dan disteril.',
        'Polisi pulangan seumur hidup di kebanyakan rescue.',
      ],
      faq: [
        { q: 'Berapa yuran adoption haiwan Malaysia?', a: 'RM 0–300 untuk anjing dan kucing dewasa (termasuk vaksin dan pensterilan). RM 200–500 untuk anak. Pedigree rescue RM 500–1,500. Lebih murah dan sihat dari kedai haiwan.' },
        { q: 'Apa proses adoption?', a: 'Borang permohonan, temubual telefon/video, lawatan rumah, tempoh percubaan 1–4 minggu, perjanjian adoption rasmi. Proses biasanya 1–3 minggu.' },
        { q: 'Boleh adopt jika sewa rumah?', a: 'Boleh, tapi perlu kebenaran bertulis tuan rumah. Banyak kondo larang haiwan — semak penyewaan dulu untuk elak terpaksa serah kemudian.' },
        { q: 'Haiwan shelter sihat?', a: 'Shelter Malaysia bereputasi vaksin, nyahcacing, steril dan saring penyakit utama sebelum adoption. Lebih besar peluang dapat haiwan sihat dari shelter berbanding kedai.' },
        { q: 'Boleh adopt baka khusus?', a: 'Ya — rescue Malaysia kerap ada anjing dan kucing pedigree (Persian, Shih Tzu, Golden Retriever, dll) yang diserahkan pemilik. Senarai menunggu untuk baka popular.' },
        { q: 'Macam mana jika adoption tak berjaya?', a: 'Rescue bereputasi minta anda pulangkan kepada mereka — jangan rehome di Facebook atau tinggalkan. Kebanyakan ada polisi pulangan seumur hidup tanpa penilaian.' },
      ],
    },
    zh: {
      metaTitle: '马来西亚宠物领养 — 领养代替购买，经验证收容所',
      metaDescription: '从经验证的马来西亚收容所领养狗、猫、兔或其他宠物。领养费、流程和注意事项 — 详细说明。',
      hero: '领养宠物 — 拯救两条生命。',
      subhero: '每只被领养的宠物都拯救了您带回家的那只，也为下一只被遗弃的腾出空间。马来西亚有超过15万只流浪狗和猫 — 您的下一个家庭成员正在等待。',
      problem: [
        '宠物店通常来自父母生病、感染细小病毒和隐藏遗传疾病的繁殖场 — RM 5,000的小狗2周内死亡。',
        '后院繁殖者在Facebook和Carousell出售，无健康筛查、无父母记录、无售后支持。',
        '与此同时，收容所中健康已接种的宠物每周被安乐死，因为没人领养。',
      ],
      solution: [
        '经验证的马来西亚收容所和救援合作伙伴（PAWS、SPCA、Independent Pet Rescuers、MDDB等）。',
        '马币领养费、披露疫苗/绝育状态、说明家访政策。',
        '注意事项：申请表、家访、试养期、终身退回政策。',
      ],
      costSnippet: '马来西亚领养费：成年狗猫RM 0–300（含疫苗和绝育）。幼犬幼猫RM 200–500。纯种救援RM 500–1,500。比宠物店RM 2,000–8,000便宜得多。',
      ctaPrimaryLabel: '浏览附近宠物',
      ctaPrimaryHref: '/zh/locations',
      ctaSecondaryLabel: '阅读领养指南',
      ctaSecondaryHref: '/zh/qa/article/pet-adoption-malaysia',
      bullets: [
        '只有经验证的收容所 — 没有后院繁殖者。',
        '大多数宠物已接种疫苗、驱虫和绝育。',
        '大多数救援机构有终身退回政策。',
      ],
      faq: [
        { q: '马来西亚宠物领养费用多少？', a: '成年狗猫RM 0–300（含疫苗和绝育）。幼犬幼猫RM 200–500。纯种救援RM 500–1,500。比宠物店便宜健康。' },
        { q: '领养流程是什么？', a: '申请表、电话/视频面试、家访、1–4周试养期、正式领养协议。整个过程通常1–3周。' },
        { q: '租房可以领养吗？', a: '可以，但需要房东书面许可。许多公寓禁止宠物 — 先检查租约和章程，避免后被迫送出。' },
        { q: '收容所宠物健康吗？', a: '有信誉的马来西亚收容所在领养前接种、驱虫、绝育和筛查主要疾病。从收容所获得健康宠物的几率远大于宠物店。' },
        { q: '可以领养特定品种吗？', a: '可以 — 马来西亚救援机构经常有主人放弃的纯种狗猫（波斯、西施、金毛等）。热门品种有等待名单。' },
        { q: '如果领养不成功怎么办？', a: '有信誉的救援机构要求您将宠物退还给他们 — 切勿在Facebook转让或遗弃。大多数有无评判的终身退回政策。' },
      ],
    },
  },

  insurance: {
    slug: 'insurance',
    iconKey: 'shield',
    accent: 'text-primary bg-primary/10',
    en: {
      metaTitle: 'Pet Insurance Malaysia — Compare Plans, Costs & Coverage 2026',
      metaDescription: 'Compare Malaysian pet insurance plans from PolicyStreet, MSIG, Allianz partners and more. Coverage, exclusions, and real RM premiums explained.',
      hero: 'One Vet Bill Away From Bankruptcy?',
      subhero: 'A blocked-bladder cat costs RM 3,000–8,000 to save. A hit-by-car dog can hit RM 15,000. Most Malaysian pet owners cannot pay that in cash. Pet insurance from RM 25/month means you say "yes" to treatment instead of "how much?"',
      problem: [
        'Most pet owners only learn about insurance AFTER the first big bill — and by then, that condition is excluded forever as "pre-existing".',
        'Vets in Malaysia increasingly require deposits of RM 1,000–5,000 before starting emergency treatment.',
        'GoFundMe and Facebook fundraisers rarely raise the full amount in time. Insurance pays the vet directly within days.',
      ],
      solution: [
        'Compare Malaysian pet insurance plans side by side: monthly premium, deductible, claim limit, exclusions.',
        'Understand the 14–30 day waiting period for illness and how to lock in coverage BEFORE you need it.',
        'See which insurers cover dental, hereditary conditions, alternative therapy, and overseas treatment.',
      ],
      costSnippet: 'Pet insurance in Malaysia starts around RM 25–80/month for cats and RM 35–150/month for dogs, depending on age, breed and coverage tier. Annual claim limits typically RM 5,000–30,000.',
      ctaPrimaryLabel: 'Compare Insurance Plans',
      ctaPrimaryHref: '/qa/article/pet-insurance-cost-malaysia',
      ctaSecondaryLabel: 'Use Free Pet Cost Estimator',
      ctaSecondaryHref: '/assessment',
      bullets: [
        'Independent comparison — we do not sell policies.',
        'Real RM premiums for major Malaysian breeds.',
        'Pre-existing condition rules explained clearly.',
      ],
      faq: [
        { q: 'How much is pet insurance in Malaysia?', a: 'Cats RM 25–80/month, dogs RM 35–150/month, depending on age, breed, and coverage. Annual limits typically RM 5,000–30,000.' },
        { q: 'When should I buy pet insurance?', a: 'As young and healthy as possible. Most plans have a 14–30 day waiting period for illness and exclude any condition diagnosed before policy start. Senior pets (8+) often cannot enrol.' },
        { q: 'Does Malaysian pet insurance cover vaccines?', a: 'Most accident & illness plans do NOT cover routine vaccines, grooming, or boarding. Some "wellness" add-ons cover annual vaccines and dental cleaning for an extra RM 10–30/month.' },
        { q: 'What is a "pre-existing condition"?', a: 'Any illness or injury your pet had before the policy started, OR during the waiting period. Once excluded, it stays excluded for life — even at renewal.' },
        { q: 'Can I claim with any vet?', a: 'Most Malaysian pet insurance lets you visit any registered vet. You pay the vet, then submit the bill, diagnosis and receipts to the insurer for reimbursement (usually 5–14 days).' },
        { q: 'Is pet insurance worth it in Malaysia?', a: 'For most owners, yes — a single emergency surgery (RM 5,000–15,000) can cost more than 10 years of premiums. The biggest losers are owners who wait until their pet is sick to enrol.' },
      ],
    },
    ms: {
      metaTitle: 'Insurans Haiwan Malaysia — Banding Pelan, Kos & Liputan 2026',
      metaDescription: 'Banding pelan insurans haiwan Malaysia dari PolicyStreet, MSIG, rakan Allianz dan lain. Liputan, pengecualian, dan premium RM sebenar dijelaskan.',
      hero: 'Satu Bil Vet Boleh Bankrap Anda?',
      subhero: 'Kucing pundi tersumbat kos RM 3,000–8,000 selamatkan. Anjing dilanggar boleh capai RM 15,000. Kebanyakan pemilik tak boleh bayar tunai. Insurans dari RM 25/bulan = anda kata "ya" pada rawatan, bukan "berapa?"',
      problem: [
        'Kebanyakan pemilik baru tahu tentang insurans SELEPAS bil besar pertama — dan masa itu, kondisi itu dikecualikan selamanya sebagai "pre-existing".',
        'Vet Malaysia makin minta deposit RM 1,000–5,000 sebelum mulakan rawatan kecemasan.',
        'GoFundMe dan derma Facebook jarang kumpul jumlah penuh tepat masa. Insurans bayar vet terus dalam hari.',
      ],
      solution: [
        'Banding pelan insurans haiwan Malaysia: premium bulanan, deductible, had tuntutan, pengecualian.',
        'Faham tempoh menunggu 14–30 hari untuk penyakit dan cara dapat liputan SEBELUM perlu.',
        'Lihat penanggung mana liputi pergigian, kondisi keturunan, terapi alternatif, dan rawatan luar negara.',
      ],
      costSnippet: 'Insurans haiwan Malaysia bermula RM 25–80/bulan untuk kucing dan RM 35–150/bulan untuk anjing, ikut umur, baka dan tahap liputan. Had tahunan biasanya RM 5,000–30,000.',
      ctaPrimaryLabel: 'Banding Pelan Insurans',
      ctaPrimaryHref: '/ms/qa/article/pet-insurance-cost-malaysia',
      ctaSecondaryLabel: 'Guna Penganggar Kos Percuma',
      ctaSecondaryHref: '/ms/assessment',
      bullets: [
        'Perbandingan bebas — kami tak jual polisi.',
        'Premium RM sebenar untuk baka utama Malaysia.',
        'Peraturan pre-existing dijelaskan terang.',
      ],
      faq: [
        { q: 'Berapa kos insurans haiwan Malaysia?', a: 'Kucing RM 25–80/bulan, anjing RM 35–150/bulan, ikut umur, baka, liputan. Had tahunan biasanya RM 5,000–30,000.' },
        { q: 'Bila patut beli insurans?', a: 'Semuda dan sesihat mungkin. Kebanyakan ada tempoh menunggu 14–30 hari untuk penyakit dan kecualikan kondisi yang didiagnosis sebelum mula. Haiwan tua (8+) selalu tak boleh daftar.' },
        { q: 'Insurans Malaysia liputi vaksin?', a: 'Kebanyakan pelan kemalangan & penyakit TIDAK liputi vaksin rutin, grooming, atau boarding. Sesetengah "wellness" liputi vaksin tahunan dan pembersihan gigi tambahan RM 10–30/bulan.' },
        { q: 'Apa "pre-existing condition"?', a: 'Sebarang penyakit atau kecederaan yang haiwan ada sebelum polisi mula, ATAU semasa tempoh menunggu. Sekali dikecualikan, kekal dikecualikan seumur hidup — walaupun pembaharuan.' },
        { q: 'Boleh tuntut dengan mana-mana vet?', a: 'Kebanyakan insurans Malaysia benarkan lawatan ke mana-mana vet berdaftar. Anda bayar vet, kemudian hantar bil, diagnosis dan resit untuk bayaran balik (5–14 hari).' },
        { q: 'Insurans haiwan berbaloi di Malaysia?', a: 'Untuk kebanyakan pemilik, ya — satu pembedahan kecemasan (RM 5,000–15,000) boleh kos lebih dari 10 tahun premium. Yang paling rugi pemilik yang tunggu sampai sakit baru daftar.' },
      ],
    },
    zh: {
      metaTitle: '马来西亚宠物保险 — 比较计划、费用与保障 2026',
      metaDescription: '比较马来西亚PolicyStreet、MSIG、Allianz合作伙伴等的宠物保险计划。保障、除外条款和真实马币保费详解。',
      hero: '一张兽医账单 — 让您破产？',
      subhero: '膀胱阻塞的猫救治需RM 3,000–8,000。被车撞的狗可达RM 15,000。大多数马来西亚宠物主人无法现金支付。从RM 25/月起的宠物保险=您对治疗说「好」，而不是「多少钱？」',
      problem: [
        '大多数主人在第一笔大账单之后才了解保险 — 此时该病症永远被排除为「既往病症」。',
        '马来西亚兽医越来越多在开始急诊治疗前要求RM 1,000–5,000押金。',
        'GoFundMe和Facebook筹款很少及时筹齐全额。保险几天内直接付给兽医。',
      ],
      solution: [
        '并排比较马来西亚宠物保险计划：月保费、自付额、理赔上限、除外条款。',
        '了解14–30天疾病等待期以及如何在需要前锁定保障。',
        '查看哪些保险涵盖牙科、遗传病、替代疗法和海外治疗。',
      ],
      costSnippet: '马来西亚宠物保险猫起RM 25–80/月、狗起RM 35–150/月，视年龄、品种和保障级别。年度理赔上限通常RM 5,000–30,000。',
      ctaPrimaryLabel: '比较保险计划',
      ctaPrimaryHref: '/zh/qa/article/pet-insurance-cost-malaysia',
      ctaSecondaryLabel: '使用免费宠物费用估算器',
      ctaSecondaryHref: '/zh/assessment',
      bullets: [
        '独立比较 — 我们不销售保单。',
        '马来西亚主要品种的真实马币保费。',
        '清晰解释既往病症规则。',
      ],
      faq: [
        { q: '马来西亚宠物保险多少钱？', a: '猫RM 25–80/月，狗RM 35–150/月，视年龄、品种和保障。年度上限通常RM 5,000–30,000。' },
        { q: '什么时候应该购买宠物保险？', a: '尽量年轻健康时。大多数计划有14–30天疾病等待期，并排除保单开始前诊断的任何病症。高龄宠物（8岁以上）通常无法投保。' },
        { q: '马来西亚宠物保险涵盖疫苗吗？', a: '大多数意外与疾病计划不涵盖常规疫苗、美容或寄宿。一些「健康」附加险涵盖年度疫苗和洁牙，每月加RM 10–30。' },
        { q: '什么是「既往病症」？', a: '保单开始前或等待期内宠物有的任何疾病或伤害。一旦排除，终身排除 — 即使续保。' },
        { q: '可以在任何兽医处理赔吗？', a: '大多数马来西亚宠物保险允许您去任何注册兽医。您付兽医费，然后提交账单、诊断和收据给保险公司报销（通常5–14天）。' },
        { q: '马来西亚宠物保险值得吗？', a: '对大多数主人来说，是的 — 单次急诊手术（RM 5,000–15,000）可能比10年保费还多。最大输家是等到宠物生病才投保的主人。' },
      ],
    },
  },

  nutrition: {
    slug: 'nutrition',
    iconKey: 'shopping',
    accent: 'text-gold bg-gold/10',
    en: {
      metaTitle: 'Pet Food & Nutrition Malaysia — Best Brands, Special Diets, RM Prices',
      metaDescription: 'Find the right pet food in Malaysia. Compare brands, prescription diets, raw and home-cooked options. RM prices and where to buy.',
      hero: 'Cheap Pet Food = Expensive Vet Bills.',
      subhero: 'The cheapest kibbles in Malaysian pasar mini are loaded with corn, fillers and dyes that cause itchy skin, ear infections, and IBD. Switching food saves hundreds in vet visits — here is what to buy and what to avoid.',
      problem: [
        '"Premium" Malaysian shelf brands are often mid-tier overseas — marketing trickery preys on caring owners.',
        'Wrong life-stage food (puppy food for adults, kitten food for seniors) causes obesity, diabetes and joint problems.',
        'Sudden food changes cause diarrhea — most Malaysian owners switch wrong and blame the new food.',
      ],
      solution: [
        'Brand comparison: Royal Canin, Hill\'s, Orijen, Acana, Taste of the Wild, Nature\'s Gift, local brands.',
        'Prescription and special diets for kidney, urinary, allergy, weight loss, and senior pets.',
        '7-day transition guide so your pet does not get diarrhea when you switch.',
      ],
      costSnippet: 'Premium dry food in Malaysia: RM 18–35/kg. Mid-tier: RM 8–18/kg. Prescription diet: RM 25–60/kg. Wet food: RM 4–15/can. Raw food (commercial): RM 12–30/kg.',
      ctaPrimaryLabel: 'Read Food Brand Guide',
      ctaPrimaryHref: '/qa/article/pet-food-brands-malaysia',
      ctaSecondaryLabel: 'Find a Vet Nutritionist',
      ctaSecondaryHref: '/vet-clinics',
      bullets: [
        'Independent — we do not sell food brands.',
        'Real RM prices from Malaysian retailers.',
        'Allergy, kidney, urinary diet guides included.',
      ],
      faq: [
        { q: 'How much should pet food cost in Malaysia?', a: 'Premium dry RM 18–35/kg, mid-tier RM 8–18/kg, prescription diet RM 25–60/kg, wet food RM 4–15/can. A 10kg dog typically eats RM 150–400/month.' },
        { q: 'Is grain-free food better?', a: 'Not necessarily. Grain-free diets have been linked to dilated cardiomyopathy in dogs (FDA investigation 2018–2024). Most pets do fine with grain unless diagnosed allergic.' },
        { q: 'Can I feed raw or home-cooked food?', a: 'Yes, but only with veterinary nutritionist guidance. DIY raw diets in Malaysia commonly cause calcium/phosphorus imbalance, salmonella in kids, and protein excess in senior pets.' },
        { q: 'How do I switch pet food without diarrhea?', a: '7-day transition: Days 1–2 = 25% new + 75% old. Days 3–4 = 50/50. Days 5–6 = 75% new + 25% old. Day 7 = 100% new. Skip this and your pet will have loose stools for a week.' },
        { q: 'My pet keeps scratching — is it the food?', a: 'Possibly. Common Malaysian food allergens: chicken, beef, dairy, wheat. Try a single-protein limited-ingredient diet (duck, fish, or kangaroo) for 8–12 weeks to test. Always involve a vet for proper elimination diets.' },
        { q: 'Where can I buy pet food in Malaysia?', a: 'Pet Lovers Centre, Pet World, Whiskers & Paws, Lazada/Shopee for delivery, and most vet clinics for prescription diets. Buy from authorised retailers to avoid expired or counterfeit stock.' },
      ],
    },
    ms: {
      metaTitle: 'Makanan & Nutrisi Haiwan Malaysia — Jenama Terbaik, Diet Khas',
      metaDescription: 'Cari makanan haiwan yang betul di Malaysia. Banding jenama, diet preskripsi, raw dan masak sendiri. Harga RM dan tempat beli.',
      hero: 'Makanan Murah = Bil Vet Mahal.',
      subhero: 'Kibble paling murah di pasar mini Malaysia penuh jagung, pengisi dan pewarna yang menyebabkan kulit gatal, jangkitan telinga, dan IBD. Tukar makanan jimat ratusan ringgit lawatan vet.',
      problem: [
        'Jenama "premium" di rak Malaysia selalu mid-tier di luar negara — tipu pemasaran kepada pemilik yang ambil berat.',
        'Makanan salah peringkat hidup (puppy untuk dewasa, kitten untuk tua) sebabkan obesiti, diabetes dan masalah sendi.',
        'Tukar makanan tiba-tiba sebabkan cirit-birit — kebanyakan pemilik tukar salah dan salahkan makanan baru.',
      ],
      solution: [
        'Banding jenama: Royal Canin, Hill\'s, Orijen, Acana, Taste of the Wild, Nature\'s Gift, jenama tempatan.',
        'Diet preskripsi dan khas untuk buah pinggang, urin, alahan, penurunan berat, dan haiwan tua.',
        'Panduan peralihan 7 hari supaya haiwan anda tidak cirit-birit bila tukar.',
      ],
      costSnippet: 'Makanan kering premium Malaysia: RM 18–35/kg. Mid-tier: RM 8–18/kg. Diet preskripsi: RM 25–60/kg. Makanan basah: RM 4–15/tin. Raw komersial: RM 12–30/kg.',
      ctaPrimaryLabel: 'Baca Panduan Jenama',
      ctaPrimaryHref: '/ms/qa/article/pet-food-brands-malaysia',
      ctaSecondaryLabel: 'Cari Pakar Nutrisi Vet',
      ctaSecondaryHref: '/ms/vet-clinics',
      bullets: [
        'Bebas — kami tak jual jenama makanan.',
        'Harga RM sebenar dari peruncit Malaysia.',
        'Panduan diet alahan, buah pinggang, urin disertakan.',
      ],
      faq: [
        { q: 'Berapa kos makanan haiwan Malaysia?', a: 'Kering premium RM 18–35/kg, mid-tier RM 8–18/kg, preskripsi RM 25–60/kg, basah RM 4–15/tin. Anjing 10kg biasanya makan RM 150–400/bulan.' },
        { q: 'Makanan tanpa bijirin lebih baik?', a: 'Tidak semestinya. Diet tanpa bijirin dikaitkan dengan kardiomiopati pada anjing (siasatan FDA 2018–2024). Kebanyakan haiwan OK dengan bijirin kecuali didiagnosis alahan.' },
        { q: 'Boleh beri makanan raw atau masak sendiri?', a: 'Boleh, tapi hanya dengan panduan pakar nutrisi vet. Diet raw DIY di Malaysia biasanya sebabkan ketidakseimbangan kalsium/fosforus, salmonella pada kanak-kanak, dan lebihan protein pada haiwan tua.' },
        { q: 'Macam mana tukar makanan tanpa cirit-birit?', a: 'Peralihan 7 hari: Hari 1–2 = 25% baru + 75% lama. Hari 3–4 = 50/50. Hari 5–6 = 75% baru + 25% lama. Hari 7 = 100% baru.' },
        { q: 'Haiwan saya garu — sebab makanan?', a: 'Mungkin. Alahan biasa Malaysia: ayam, daging lembu, tenusu, gandum. Cuba diet protein tunggal terhad (itik, ikan, atau kanggaru) 8–12 minggu untuk uji. Sentiasa libatkan vet.' },
        { q: 'Di mana boleh beli makanan haiwan Malaysia?', a: 'Pet Lovers Centre, Pet World, Whiskers & Paws, Lazada/Shopee untuk penghantaran, dan kebanyakan klinik vet untuk diet preskripsi. Beli dari peruncit sah untuk elak stok tamat tempoh atau tiruan.' },
      ],
    },
    zh: {
      metaTitle: '马来西亚宠物食品与营养 — 最佳品牌、特殊饮食、马币价格',
      metaDescription: '在马来西亚找到合适的宠物食品。比较品牌、处方饮食、生食和自制选项。马币价格和购买地点。',
      hero: '便宜宠物食品=昂贵兽医账单。',
      subhero: '马来西亚迷你市场最便宜的干粮充满玉米、填充物和染料，导致皮肤瘙痒、耳部感染和IBD。换食品可省下数百令吉的兽医费 — 这里告诉您买什么、避开什么。',
      problem: [
        '马来西亚货架上的「优质」品牌在海外通常是中档 — 营销欺骗利用关心的主人。',
        '错误的生命阶段食品（成犬吃幼犬粮、老猫吃幼猫粮）导致肥胖、糖尿病和关节问题。',
        '突然换食品导致腹泻 — 大多数马来西亚主人换错并怪罪新食品。',
      ],
      solution: [
        '品牌比较：皇家、希尔思、Orijen、Acana、Taste of the Wild、Nature\'s Gift、本地品牌。',
        '肾脏、泌尿、过敏、减重和老年宠物的处方和特殊饮食。',
        '7天过渡指南，让宠物换食品时不会腹泻。',
      ],
      costSnippet: '马来西亚优质干粮：RM 18–35/公斤。中档：RM 8–18/公斤。处方饮食：RM 25–60/公斤。湿粮：RM 4–15/罐。商业生食：RM 12–30/公斤。',
      ctaPrimaryLabel: '阅读品牌指南',
      ctaPrimaryHref: '/zh/qa/article/pet-food-brands-malaysia',
      ctaSecondaryLabel: '查找兽医营养师',
      ctaSecondaryHref: '/zh/vet-clinics',
      bullets: [
        '独立 — 我们不销售食品品牌。',
        '马来西亚零售商的真实马币价格。',
        '附过敏、肾脏、泌尿饮食指南。',
      ],
      faq: [
        { q: '马来西亚宠物食品费用多少？', a: '优质干粮RM 18–35/公斤，中档RM 8–18/公斤，处方RM 25–60/公斤，湿粮RM 4–15/罐。10公斤狗每月通常吃RM 150–400。' },
        { q: '无谷物食品更好吗？', a: '不一定。无谷物饮食与狗扩张性心肌病有关（FDA 2018–2024调查）。大多数宠物没问题，除非诊断过敏。' },
        { q: '可以喂生食或自制食品吗？', a: '可以，但只能在兽医营养师指导下。马来西亚DIY生食通常导致钙/磷失衡、儿童感染沙门氏菌、老年宠物蛋白质过量。' },
        { q: '如何换宠物食品不腹泻？', a: '7天过渡：第1–2天=25%新+75%旧。第3–4天=50/50。第5–6天=75%新+25%旧。第7天=100%新。' },
        { q: '我的宠物一直抓痒 — 是食品吗？', a: '可能。马来西亚常见食物过敏原：鸡肉、牛肉、奶制品、小麦。尝试单一蛋白质有限成分饮食（鸭、鱼或袋鼠）8–12周测试。始终让兽医参与。' },
        { q: '在马来西亚哪里买宠物食品？', a: 'Pet Lovers Centre、Pet World、Whiskers & Paws、Lazada/Shopee送货，大多数兽医诊所提供处方饮食。从授权零售商购买，避免过期或假货。' },
      ],
    },
  },
};

export const SERVICE_SLUGS = Object.keys(SERVICE_DETAILS) as ServiceSlug[];

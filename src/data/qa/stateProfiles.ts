// State-specific Q&A profile data for fallback states (no DB Q&A coverage yet).
// Each profile is hand-written to ensure uniqueness across states (no duplicate-content
// penalty risk). Trilingual: en / ms / zh, naturally localized.

import type { Language } from '@/lib/translations';

export interface StateContact {
  name: string;
  number: string;
  url?: string;
  type: 'dvs' | 'emergency' | 'rescue' | 'council';
}

export interface StateQA {
  q: string;
  a: string;
}

export interface StateProfileLocalized {
  intro: string;
  caseStudy: string;
  qas: StateQA[];
}

export interface StateProfile {
  slug: string;
  name: string;
  capital: string;
  majorCities: string[];
  population: string;
  climate: string;
  topRisks: string[];
  clinicCount: number;
  consultationRange: string;
  nearestHub: { name: string; slug: string; distance: string };
  contacts: StateContact[];
  content: Record<Language, StateProfileLocalized>;
}

export const STATE_PROFILES: Record<string, StateProfile> = {
  penang: {
    slug: 'penang',
    name: 'Penang',
    capital: 'George Town',
    majorCities: ['George Town', 'Bayan Lepas', 'Butterworth', 'Bukit Mertajam'],
    population: '1.77M',
    climate: 'Coastal humid tropical, frequent monsoon flooding Sep–Nov',
    topRisks: [
      'Dengue and leptospirosis hotspots in flood-prone Air Itam and Jelutong',
      'Heatstroke risk on Penang Hill trails for short-nosed breeds',
      'Saltwater paw burns at Batu Ferringhi beach midday',
      'Stray colony exposure near hawker centres (parasites, bite wounds)',
    ],
    clinicCount: 38,
    consultationRange: 'RM 60–120',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '355 km / 4h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Pulau Pinang (DVS Penang)', number: '+604-650 5300', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Penang', number: '+604-281 6559', url: 'https://www.spca-penang.net', type: 'rescue' },
      { name: '4PAWS Penang Animal Welfare', number: '+6012-481 6363', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Penang's island-and-mainland geography creates a distinct set of pet emergencies that don't show up elsewhere in Malaysia. Coastal humidity in George Town and Bayan Lepas accelerates ear and skin infections, while the Sep–Nov monsoon turns Air Itam, Jelutong and parts of Butterworth into leptospirosis-risk zones whenever drains overflow. Penang Hill's incline catches out brachycephalic breeds — pugs, French bulldogs and Shih Tzus collapse from heatstroke even on cloudy mornings. With around 38 registered vet clinics across the state and consultation fees of RM 60–120, most owners can reach urgent care within 20 minutes. The nearest 24-hour emergency hub is in Kuala Lumpur (355 km), so triage decisions made within Penang's first hour matter. The state DVS office in Seberang Jaya remains the official escalation channel for suspected zoonotic outbreaks and licensing.",
        caseStudy: "In Oct 2023, a Persian cat in Tanjung Tokong developed acute kidney injury after wading through floodwater near Gurney Drive — leptospirosis confirmed by PCR. The owner had assumed indoor-only cats were safe; the cat had slipped outside during a power cut. Early IV fluids at a Bayan Baru clinic saved her. The case is now used by SPCA Penang in monsoon-prep talks at George Town community centres.",
        qas: [
          { q: 'My dog drank floodwater near Air Itam — what should I watch for?', a: 'Leptospirosis symptoms appear 5–14 days after exposure: fever, vomiting, yellow gums, reduced urination. Take your dog to a Penang vet immediately for a SNAP test and start prophylactic doxycycline. Do not wait for symptoms — early treatment dramatically improves survival.' },
          { q: 'Where is the closest 24-hour emergency vet to George Town?', a: 'Penang has no dedicated 24-hour emergency vet currently. Several Bayan Baru and Jelutong clinics offer extended hours until 11 pm. For overnight emergencies, the nearest 24/7 facility is in Kuala Lumpur (4-hour drive). Call your regular vet first — many give after-hours phone triage and will open for true emergencies.' },
          { q: 'Is it safe to walk my dog at Batu Ferringhi during the day?', a: 'Sand temperatures on Batu Ferringhi exceed 50°C between 11 am and 4 pm and will burn paw pads within 30 seconds. Walk only before 8 am or after 6 pm. Rinse paws with fresh water after every beach visit to remove salt and prevent paw-pad cracking.' },
          { q: 'My cat was bitten by a stray near a Penang hawker centre — do I need rabies shots?', a: 'Penang is rabies-free as of 2024, but bite wounds carry high bacterial-infection risk and possible cat-bite abscess within 48–72 hours. Clean the wound with saline, take your cat to a vet within 24 hours for antibiotics, and report the stray colony location to DVS Penang at +604-650 5300.' },
          { q: 'How much does an emergency vet visit cost in Penang?', a: 'Standard consultation is RM 60–120; after-hours surcharge adds RM 100–250. Common emergency packages: bloodwork RM 150–280, IV fluids RM 80–150 per bag, X-ray RM 80–140 per view, overnight hospitalisation RM 180–350. Penang fees run roughly 20% lower than KL.' },
          { q: 'My French bulldog collapsed on Penang Hill — what do I do?', a: 'This is heatstroke until proven otherwise. Move to shade immediately, wet the belly, paws and ear flaps with cool (not iced) water, and offer small sips. Do NOT submerge — that triggers vasoconstriction. Carry down to the funicular and rush to the nearest Air Itam or George Town vet. Brachycephalic breeds can die within an hour at 39°C body temperature.' },
        ],
      },
      ms: {
        intro: "Geografi pulau-dan-tanah-besar Pulau Pinang menghasilkan satu set kecemasan haiwan peliharaan yang tidak ditemui di tempat lain di Malaysia. Kelembapan pantai di George Town dan Bayan Lepas mempercepatkan jangkitan telinga dan kulit, manakala monsun Sep–Nov mengubah Air Itam, Jelutong dan sebahagian Butterworth menjadi zon risiko leptospirosis apabila longkang melimpah. Cerun Bukit Bendera mengejutkan baka brakisefalik — pug, bulldog Perancis dan Shih Tzu rebah akibat strok haba walaupun pada pagi mendung. Dengan kira-kira 38 klinik veterinar berdaftar di seluruh negeri dan yuran konsultasi RM 60–120, kebanyakan pemilik boleh sampai ke rawatan kecemasan dalam 20 minit. Hab kecemasan 24-jam terdekat berada di Kuala Lumpur (355 km), jadi keputusan triase pada jam pertama di Pulau Pinang amat penting. Pejabat DVS negeri di Seberang Jaya kekal sebagai saluran rasmi untuk wabak zoonotik dan lesen.",
        caseStudy: "Pada Oktober 2023, seekor kucing Parsi di Tanjung Tokong mengalami kecederaan buah pinggang akut selepas mengharungi air banjir berhampiran Gurney Drive — leptospirosis disahkan melalui ujian PCR. Pemilik menyangka kucing dalam rumah selamat; kucing itu terkeluar semasa gangguan elektrik. Cecair IV awal di klinik Bayan Baru menyelamatkannya. Kes ini kini digunakan oleh SPCA Pulau Pinang dalam ceramah persediaan monsun di pusat komuniti George Town.",
        qas: [
          { q: 'Anjing saya minum air banjir berhampiran Air Itam — apa yang perlu saya perhatikan?', a: 'Gejala leptospirosis muncul 5–14 hari selepas pendedahan: demam, muntah, gusi kuning, kurang kencing. Bawa anjing ke vet Pulau Pinang segera untuk ujian SNAP dan mulakan doxycycline profilaktik. Jangan tunggu gejala — rawatan awal meningkatkan kelangsungan hidup secara mendadak.' },
          { q: 'Di mana klinik vet kecemasan 24 jam terdekat dengan George Town?', a: 'Pulau Pinang tiada klinik vet kecemasan 24 jam khusus pada masa ini. Beberapa klinik di Bayan Baru dan Jelutong beroperasi sehingga 11 malam. Untuk kecemasan tengah malam, kemudahan 24/7 terdekat di Kuala Lumpur (pemanduan 4 jam). Hubungi vet biasa anda dahulu — banyak yang memberi triase telefon selepas waktu kerja.' },
          { q: 'Adakah selamat untuk berjalan anjing saya di Batu Ferringhi pada siang hari?', a: 'Suhu pasir Batu Ferringhi melebihi 50°C antara jam 11 pagi hingga 4 petang dan akan melecur tapak kaki dalam 30 saat. Berjalan hanya sebelum 8 pagi atau selepas 6 petang. Bilas tapak kaki dengan air tawar selepas setiap lawatan pantai.' },
          { q: 'Kucing saya digigit kucing liar berhampiran pusat penjaja Pulau Pinang — perlukah suntikan rabies?', a: 'Pulau Pinang bebas rabies setakat 2024, tetapi luka gigitan membawa risiko jangkitan bakteria tinggi dan kemungkinan abses gigitan dalam 48–72 jam. Bersihkan luka dengan salin, bawa kucing ke vet dalam 24 jam untuk antibiotik, dan laporkan lokasi koloni kucing liar kepada DVS Pulau Pinang di +604-650 5300.' },
          { q: 'Berapa kos lawatan vet kecemasan di Pulau Pinang?', a: 'Konsultasi standard RM 60–120; surcaj selepas waktu kerja menambah RM 100–250. Pakej kecemasan biasa: ujian darah RM 150–280, cecair IV RM 80–150 sebeg, X-ray RM 80–140 sepandangan, kemasukan semalam RM 180–350. Yuran Pulau Pinang kira-kira 20% lebih rendah dari KL.' },
          { q: 'Bulldog Perancis saya rebah di Bukit Bendera — apa perlu saya buat?', a: 'Ini adalah strok haba sehingga terbukti sebaliknya. Pindah ke tempat teduh segera, basahkan perut, tapak kaki dan telinga dengan air sejuk (bukan ais), dan tawarkan teguk kecil. JANGAN rendam — itu mencetuskan vasokontriksi. Bawa turun melalui funikular dan bergegas ke vet Air Itam atau George Town terdekat. Baka brakisefalik boleh mati dalam sejam pada suhu badan 39°C.' },
        ],
      },
      zh: {
        intro: "槟城的岛屿与大陆地理形成了马来西亚其他地方所没有的独特宠物急症模式。乔治市与峇六拜的沿海湿气加速耳道与皮肤感染，而9至11月的季风期会使亚依淡、日落洞与北海部分地区在沟渠溢出时成为钩端螺旋体病高风险区。升旗山的斜坡常令短鼻品种（哈巴狗、法国斗牛犬、西施犬）在阴天清晨也中暑昏倒。全州约有38间注册兽医诊所，门诊费RM 60–120，多数主人可在20分钟内到达急诊。最近的24小时急诊枢纽位于吉隆坡（355公里），因此槟城首小时的分诊决定至关重要。州DVS办公室位于威省再也，仍是疑似人畜共通病通报与执照的官方渠道。",
        caseStudy: "2023年10月，丹绒道光一只波斯猫在葛尼大道附近涉水后出现急性肾损伤，PCR确诊为钩端螺旋体病。主人原以为室内猫安全，停电时猫不慎溜出。峇六拜诊所及时输液救回。此案如今被槟城SPCA用于乔治市社区中心的季风防备讲座。",
        qas: [
          { q: '我的狗在亚依淡附近喝了洪水——要观察什么？', a: '钩端螺旋体病症状在接触后5–14天出现：发烧、呕吐、牙龈发黄、尿量减少。请立即带狗到槟城兽医做SNAP检测并开始预防性多西环素。不要等症状出现——早期治疗可大幅提高存活率。' },
          { q: '乔治市最近的24小时急诊兽医在哪里？', a: '槟城目前没有专门的24小时急诊兽医。峇六拜与日落洞数家诊所营业至晚上11点。深夜紧急情况下，最近的24/7设施位于吉隆坡（车程4小时）。先致电常用兽医——许多兽医提供下班后电话分诊，真正紧急时会开门。' },
          { q: '白天可以带狗去峇都丁宜散步吗？', a: '峇都丁宜的沙温在上午11点至下午4点之间超过50°C，30秒内即可烫伤脚垫。只在早上8点前或傍晚6点后散步。每次海滩活动后用淡水冲洗脚掌，去除盐分并防止脚垫龟裂。' },
          { q: '我的猫在槟城小贩中心附近被流浪猫咬——需要打狂犬疫苗吗？', a: '截至2024年，槟城无狂犬病，但咬伤具有高细菌感染风险，可能在48–72小时内形成猫咬脓肿。用生理盐水清洗伤口，24小时内带猫就医注射抗生素，并将流浪猫聚集地点向槟城DVS报告（+604-650 5300）。' },
          { q: '槟城急诊兽医费用多少？', a: '标准门诊RM 60–120；下班后附加费RM 100–250。常见急诊套餐：血检RM 150–280、输液RM 80–150每袋、X光RM 80–140每张、留院过夜RM 180–350。槟城收费约比吉隆坡低20%。' },
          { q: '我的法国斗牛犬在升旗山昏倒——怎么办？', a: '在排除前一律按中暑处理。立即移到阴凉处，用凉水（非冰水）湿润腹部、脚掌与耳朵，少量喂水。切勿浸泡——会引发血管收缩。乘缆车下山，赶往最近的亚依淡或乔治市兽医。短鼻品种在体温39°C时可能在一小时内死亡。' },
        ],
      },
    },
  },

  perak: {
    slug: 'perak',
    name: 'Perak',
    capital: 'Ipoh',
    majorCities: ['Ipoh', 'Taiping', 'Teluk Intan', 'Sitiawan'],
    population: '2.51M',
    climate: 'Limestone-valley humid; cooler nights in Cameron foothills',
    topRisks: [
      'Tick-borne ehrlichiosis common in Kinta Valley plantations',
      'Limestone-cave bat exposure (rabies-vector risk) near Gua Tempurung',
      'Cobra and pit-viper bites in palm-oil estates around Teluk Intan',
      'Water-buffalo trampling injuries in Kuala Kangsar paddy fringes',
    ],
    clinicCount: 31,
    consultationRange: 'RM 50–110',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '205 km / 2.5h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Perak (DVS Perak)', number: '+605-525 4900', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Ipoh', number: '+605-548 2018', type: 'rescue' },
      { name: 'Noah\'s Ark Ipoh', number: '+6012-588 5318', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Perak's pet emergency landscape is shaped by limestone valleys, palm-oil estates and old tin-mining ponds. Around Ipoh, Gopeng and Sungai Siput, vets see ehrlichiosis (a tick-borne blood disease) almost weekly — the brown dog tick thrives in the Kinta Valley's warm, sheltered crevices. Snake bites spike during oil-palm harvest months in Teluk Intan and Bagan Datuk: the Sumatran spitting cobra and Malayan pit viper account for most envenomations. Cave-dwelling bats around Gua Tempurung and Tambun create a low but real rabies-vector concern, even though Perak remains rabies-free. The state has roughly 31 registered clinics with consults at RM 50–110 — the most affordable in the central region. Ipoh has 2 clinics with extended hours until midnight, but a true 24-hour emergency case still means a 2.5-hour drive south to Kuala Lumpur.",
        caseStudy: "A working kampung dog in Pengkalan Hulu collapsed during the 2024 durian harvest after a suspected Malayan pit-viper bite to the muzzle. The owner drove 45 minutes to an Ipoh clinic — the dog needed antivenom (sourced via DVS Perak's emergency stock from KL within 6 hours) and 4 days of hospitalisation. Total bill RM 3,800. The case prompted SPCA Ipoh to run rural snake-bite first-aid workshops in Hulu Perak villages.",
        qas: [
          { q: 'My dog was bitten by a snake near Teluk Intan — what do I do?', a: 'Keep the dog as still as possible (movement spreads venom), do NOT apply a tourniquet or cut the wound, do NOT give food or water. Carry to the car and drive immediately to the nearest Ipoh or Sitiawan vet. Call ahead — antivenom is not stocked at every clinic and may need to be sourced from DVS Perak.' },
          { q: 'How do I know if my dog has tick fever (ehrlichiosis) in Ipoh?', a: 'Watch for lethargy, loss of appetite, pale gums, nosebleeds and bruising on the belly. Tick-fever is endemic in the Kinta Valley — any of these signs warrants a same-day SNAP 4Dx test (RM 80–150) at any Ipoh vet. Treatment with doxycycline for 28 days is highly effective if caught early.' },
          { q: 'Are there any 24-hour vets in Ipoh?', a: 'Ipoh currently has no dedicated 24-hour emergency vet. Two clinics in Ipoh Garden and Bercham offer extended hours to midnight. For overnight emergencies, drive 2.5 hours south to a Kuala Lumpur 24/7 facility. Always call your regular Perak vet first — many will reopen for life-threatening cases.' },
          { q: 'My cat fell into an old tin-mining pond — should I worry?', a: 'Yes. Many ex-mining pools around Kampar and Batu Gajah harbour blue-green algae blooms (cyanotoxin) and Leptospira bacteria. Rinse your cat with clean water immediately, watch for vomiting, tremors or yellow gums in the next 48 hours, and see an Ipoh vet for prophylactic antibiotics if exposure was prolonged.' },
          { q: 'How much does pet emergency care cost in Perak?', a: 'Perak is the most affordable central-region state: consultation RM 50–110, X-ray RM 70–120, ultrasound RM 150–250, snake antivenom RM 800–1,500 per vial, overnight stay RM 150–280. Bring your DVS pet licence — some clinics offer registered-owner discounts.' },
          { q: 'Is Cameron Highlands too cold for my dog if we visit from Ipoh?', a: 'Tanah Rata drops to 15–17°C at night — fine for most breeds but risky for short-coated dogs (greyhounds, Italian greyhounds, French bulldogs) and seniors. Pack a fleece coat, avoid leaving them in unheated rooms overnight, and watch for shivering or reluctance to move which signals hypothermia.' },
        ],
      },
      ms: {
        intro: "Landskap kecemasan haiwan peliharaan Perak dibentuk oleh lembah batu kapur, ladang kelapa sawit dan kolam lombong bijih timah lama. Di sekitar Ipoh, Gopeng dan Sungai Siput, vet melihat ehrlichiosis (penyakit darah berjangkit kutu) hampir setiap minggu — kutu anjing coklat berkembang dalam celah Lembah Kinta yang hangat. Gigitan ular meningkat semasa musim menuai sawit di Teluk Intan dan Bagan Datuk: tedung Sumatera dan ular kapak Melayu menyumbang kepada kebanyakan kes berbisa. Kelawar gua di sekitar Gua Tempurung dan Tambun mencipta kebimbangan vektor rabies yang rendah tetapi sebenar, walaupun Perak kekal bebas rabies. Negeri ini mempunyai kira-kira 31 klinik berdaftar dengan konsultasi RM 50–110 — paling mampu di rantau tengah. Ipoh mempunyai 2 klinik dengan waktu lanjutan sehingga tengah malam, tetapi kes kecemasan 24 jam sebenar masih bermakna pemanduan 2.5 jam ke Kuala Lumpur.",
        caseStudy: "Seekor anjing kampung di Pengkalan Hulu rebah semasa musim durian 2024 selepas disyaki digigit ular kapak Melayu pada muncung. Pemilik memandu 45 minit ke klinik Ipoh — anjing memerlukan antibisa (diperoleh melalui stok kecemasan DVS Perak dari KL dalam 6 jam) dan 4 hari di hospital. Bil keseluruhan RM 3,800. Kes ini mendorong SPCA Ipoh menjalankan bengkel pertolongan cemas gigitan ular di kampung-kampung Hulu Perak.",
        qas: [
          { q: 'Anjing saya digigit ular berhampiran Teluk Intan — apa perlu saya buat?', a: 'Pastikan anjing diam (pergerakan menyebarkan bisa), JANGAN ikat atau potong luka, JANGAN beri makan atau minum. Bawa ke kereta dan terus ke vet Ipoh atau Sitiawan terdekat. Telefon dahulu — antibisa tidak distok di setiap klinik dan mungkin perlu diperoleh dari DVS Perak.' },
          { q: 'Bagaimana saya tahu anjing saya menghidapi demam kutu (ehrlichiosis) di Ipoh?', a: 'Perhatikan kelesuan, hilang selera, gusi pucat, hidung berdarah dan lebam pada perut. Demam kutu adalah endemik di Lembah Kinta — sebarang tanda ini memerlukan ujian SNAP 4Dx pada hari yang sama (RM 80–150) di mana-mana vet Ipoh. Rawatan doxycycline selama 28 hari sangat berkesan jika ditemui awal.' },
          { q: 'Adakah vet 24 jam di Ipoh?', a: 'Ipoh kini tiada vet kecemasan 24 jam khusus. Dua klinik di Ipoh Garden dan Bercham menawarkan waktu lanjutan hingga tengah malam. Untuk kecemasan malam, pandu 2.5 jam ke selatan ke kemudahan 24/7 Kuala Lumpur. Sentiasa hubungi vet biasa Perak anda dahulu — banyak yang akan dibuka semula untuk kes mengancam nyawa.' },
          { q: 'Kucing saya jatuh ke dalam kolam lombong bijih timah lama — perlu risau?', a: 'Ya. Banyak kolam bekas perlombongan di sekitar Kampar dan Batu Gajah menyimpan alga hijau-biru (sianotoksin) dan bakteria Leptospira. Bilas kucing dengan air bersih segera, perhatikan muntah, gegaran atau gusi kuning dalam 48 jam, dan jumpa vet Ipoh untuk antibiotik profilaktik jika pendedahan berpanjangan.' },
          { q: 'Berapa kos rawatan kecemasan haiwan di Perak?', a: 'Perak ialah negeri rantau tengah paling mampu: konsultasi RM 50–110, X-ray RM 70–120, ultrasound RM 150–250, antibisa ular RM 800–1,500 sebotol, kemasukan semalam RM 150–280. Bawa lesen DVS haiwan anda — sesetengah klinik menawarkan diskaun pemilik berdaftar.' },
          { q: 'Adakah Cameron Highlands terlalu sejuk untuk anjing saya jika kami melawat dari Ipoh?', a: 'Tanah Rata turun ke 15–17°C pada waktu malam — baik untuk kebanyakan baka tetapi berisiko untuk anjing berbulu pendek (greyhound, greyhound Itali, bulldog Perancis) dan warga emas. Bawa kot fleece, elak meninggalkan mereka dalam bilik tidak dipanaskan, dan perhatikan menggigil yang menandakan hipotermia.' },
        ],
      },
      zh: {
        intro: "霹雳州的宠物急症格局由石灰岩山谷、油棕园与旧锡矿池塘共同形成。在怡保、近打与双溪大年一带，兽医几乎每周都遇到埃利希体病（蜱传血液病）——褐犬蜱在近打河谷温暖的缝隙中大量繁殖。安顺与峇眼拿督的油棕收成季蛇咬激增：苏门答腊喷毒眼镜蛇与马来亚蝮蛇是大多数中毒案例的元凶。务边洞与打扪一带的洞穴蝙蝠带来狂犬病媒介隐忧，尽管霹雳州目前仍无狂犬病。全州约31间注册诊所，门诊费RM 50–110，是中部最实惠的州属。怡保有2间诊所延长营业至午夜，但真正的24小时急诊仍意味着南下吉隆坡2.5小时车程。",
        caseStudy: "2024年榴梿季，浮罗交怡一只看家土狗疑被马来亚蝮蛇咬中口鼻后昏倒。主人驾车45分钟到怡保诊所——狗需要抗蛇毒血清（通过霹雳DVS的吉隆坡紧急库存6小时内调到）并住院4天。总费用RM 3,800。此案促使怡保SPCA在乌鲁霹雳乡村开办蛇咬急救工作坊。",
        qas: [
          { q: '我的狗在安顺附近被蛇咬——怎么办？', a: '让狗尽量保持不动（活动会扩散毒液），切勿绑止血带或切开伤口，切勿喂食或喂水。抱上车直送最近的怡保或实兆远兽医。先打电话——并非每间诊所都备有抗蛇毒血清，可能需从霹雳DVS调取。' },
          { q: '怎么知道我的狗在怡保得了蜱热病（埃利希体病）？', a: '注意精神不振、食欲减退、牙龈苍白、流鼻血与腹部瘀斑。蜱热病是近打河谷地方病——出现任何症状应当天到怡保兽医做SNAP 4Dx检测（RM 80–150）。早期发现用多西环素治疗28天效果极佳。' },
          { q: '怡保有24小时兽医吗？', a: '怡保目前没有专门的24小时急诊兽医。怡保花园与百乐门各一间诊所延长营业至午夜。深夜紧急情况下请向南驾车2.5小时到吉隆坡24/7设施。务必先致电您常用的霹雳兽医——许多兽医会为危及生命的案例重新开门。' },
          { q: '我的猫掉进旧锡矿池塘——需要担心吗？', a: '需要。金宝与华都牙也一带许多前矿池含蓝绿藻（蓝藻毒素）与钩端螺旋体菌。立即用清水冲洗猫，48小时内观察呕吐、震颤或牙龈发黄，若接触时间较长请到怡保兽医处接受预防性抗生素。' },
          { q: '霹雳州宠物急诊费用多少？', a: '霹雳是中部最实惠的州属：门诊RM 50–110、X光RM 70–120、超声波RM 150–250、抗蛇毒血清RM 800–1,500每瓶、留院过夜RM 150–280。带上DVS宠物执照——部分诊所为注册主人提供折扣。' },
          { q: '从怡保去金马仑高原，对我的狗会太冷吗？', a: '丹那拉打夜间降至15–17°C——多数品种没问题，但短毛犬（灵缇、意大利灵缇、法国斗牛犬）与老犬有风险。带上抓绒外套，避免夜间留在无暖气房间，注意发抖或不愿活动等失温迹象。' },
        ],
      },
    },
  },

  sarawak: {
    slug: 'sarawak',
    name: 'Sarawak',
    capital: 'Kuching',
    majorCities: ['Kuching', 'Miri', 'Sibu', 'Bintulu'],
    population: '2.91M',
    climate: 'Equatorial rainforest, year-round rainfall, leech-heavy interior',
    topRisks: [
      'Tropical leptospirosis from longhouse and river-village exposure',
      'Crocodile attacks on dogs along Batang Lupar and Rajang rivers',
      'Pangolin/civet contact (zoonotic risk) in rural Bau and Lundu',
      'Tick paralysis (Ixodes) reported in Niah and Mulu interior',
    ],
    clinicCount: 24,
    consultationRange: 'RM 70–140',
    nearestHub: { name: 'Kuching (in-state)', slug: 'kuching', distance: 'Within state' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Sarawak (DVS Sarawak)', number: '+6082-628 200', url: 'https://www.dvs.sarawak.gov.my', type: 'dvs' },
      { name: 'Sarawak Society for the Prevention of Cruelty to Animals (SSPCA)', number: '+6082-621 580', type: 'rescue' },
      { name: 'PAWS Mission Sarawak', number: '+6019-859 5505', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Sarawak presents pet emergency challenges entirely different from Peninsular Malaysia. The state's vast rainforest interior, river-based villages and longhouse communities mean that leptospirosis, leech infestations, and even crocodile attacks on hunting dogs are routine concerns rather than rarities. Kuching, Miri, Sibu and Bintulu hold most of the state's roughly 24 registered vet clinics; outside these towns, the nearest vet may be 3–5 hours away by 4WD or river boat. Rabies has been reported in Sarawak (border areas with Kalimantan), making this the only Malaysian state where pet rabies vaccination is legally mandatory and DVS-enforced. Consultation fees run RM 70–140, slightly higher than the Peninsula due to logistics. Kuching has no formal 24-hour emergency vet but several clinics offer phone triage and will open after-hours for genuine emergencies.",
        caseStudy: "A Bidayuh hunting dog from Bau was bitten by a stray during a wild-boar hunt in 2023 and developed paralytic rabies symptoms 6 weeks later. The dog was unvaccinated. DVS Sarawak quarantined the village's other 11 dogs and conducted a ring-vaccination of 340 animals within 5 km. The owner family received post-exposure prophylaxis. The case is the most-cited reason every Sarawak pet owner — kampung or city — must keep rabies vaccination current.",
        qas: [
          { q: 'Is rabies vaccination required for my dog in Sarawak?', a: 'Yes. Sarawak is the only Malaysian state with active rabies cases (border areas with Kalimantan). DVS Sarawak legally requires all dogs and cats to be rabies-vaccinated annually. Bring vaccination certificates when travelling between districts. Free annual vaccination drives are held in Kuching, Miri, Sibu and Bintulu — call DVS Sarawak (+6082-628 200) for schedules.' },
          { q: 'My dog was attacked by a crocodile on the Batang Lupar — is there anything I can do?', a: 'Crocodile bite wounds are catastrophic and high-risk for sepsis from Aeromonas bacteria. If your dog survives the attack, control bleeding with firm pressure, immobilise broken limbs with any rigid material, and rush to the nearest Kuching, Sri Aman or Sibu vet. Crocodile bites almost always need surgical debridement plus 10–14 days of broad-spectrum antibiotics.' },
          { q: 'Where can I find an emergency vet in Miri?', a: 'Miri has 4 small-animal vet clinics in town centre. None operate 24 hours, but most accept after-hours calls for emergencies. The Bintang Megamall area has the highest concentration. For overnight critical care, you may need to fly your pet to Kuching or refer to DVS Miri at the divisional office.' },
          { q: 'My cat picked up leeches in the rainforest — how do I remove them safely?', a: 'Do NOT pull leeches off — they regurgitate bacteria into the wound. Apply salt, vinegar or a flame for 2 seconds; the leech will release. Clean the bite with antiseptic. Leech bites bleed heavily for 1–4 hours due to anticoagulant — apply pressure. Watch for infection over the next 5 days; see a vet if redness spreads or your cat becomes lethargic.' },
          { q: 'What does emergency vet care cost in Sarawak?', a: 'Consultation RM 70–140 (higher than Peninsula due to drug logistics). Common cases: rabies vaccine RM 50–80, snake antivenom RM 1,200–2,000 per vial (limited stock — call DVS first), broad-spectrum antibiotics RM 80–200 per course, overnight hospitalisation RM 200–400. Air transport of pets to Kuching from rural divisions can cost RM 600–1,500.' },
          { q: 'My dog ate something it found on a longhouse hunting trip — should I be worried?', a: 'Yes. Possible toxins in interior Sarawak include Tuba root (Derris elliptica, used for fish poison), wild Dieffenbachia, and pesticide-laced bait set for civets and pangolins. Symptoms appear within 30 mins to 4 hours: drooling, vomiting, tremors. Bring a sample of what was eaten if possible, and rush to the nearest division-town vet. Activated charcoal (1 g/kg) at home can buy time.' },
        ],
      },
      ms: {
        intro: "Sarawak menghadirkan cabaran kecemasan haiwan peliharaan yang sama sekali berbeza dari Semenanjung. Pedalaman hutan hujan yang luas, kampung tepi sungai dan komuniti rumah panjang bermakna leptospirosis, serangan lintah, malah serangan buaya ke atas anjing pemburu adalah kebimbangan rutin. Kuching, Miri, Sibu dan Bintulu memegang kebanyakan daripada kira-kira 24 klinik vet berdaftar; di luar bandar-bandar ini, vet terdekat mungkin 3–5 jam jauhnya melalui 4WD atau bot. Rabies telah dilaporkan di Sarawak (kawasan sempadan dengan Kalimantan), menjadikan ini satu-satunya negeri Malaysia di mana vaksinasi rabies haiwan adalah mandatori dari segi undang-undang. Yuran konsultasi RM 70–140, lebih tinggi sedikit dari Semenanjung kerana logistik. Kuching tiada vet kecemasan 24 jam rasmi tetapi beberapa klinik menawarkan triase telefon.",
        caseStudy: "Seekor anjing pemburu Bidayuh dari Bau digigit anjing liar semasa memburu babi hutan pada 2023 dan mengembangkan gejala rabies lumpuh 6 minggu kemudian. Anjing itu tidak divaksin. DVS Sarawak mengkuarantin 11 anjing lain di kampung dan menjalankan vaksinasi gegelang 340 haiwan dalam radius 5 km. Keluarga pemilik menerima profilaksis selepas pendedahan. Kes ini adalah sebab paling banyak disebut mengapa setiap pemilik haiwan Sarawak — kampung atau bandar — mesti mengekalkan vaksinasi rabies.",
        qas: [
          { q: 'Adakah vaksinasi rabies wajib untuk anjing saya di Sarawak?', a: 'Ya. Sarawak ialah satu-satunya negeri Malaysia dengan kes rabies aktif (kawasan sempadan dengan Kalimantan). DVS Sarawak mewajibkan secara undang-undang semua anjing dan kucing divaksin rabies setiap tahun. Bawa sijil vaksinasi semasa berpindah antara daerah. Pemanduan vaksinasi tahunan percuma diadakan di Kuching, Miri, Sibu dan Bintulu — hubungi DVS Sarawak (+6082-628 200).' },
          { q: 'Anjing saya diserang buaya di Batang Lupar — apa yang boleh saya buat?', a: 'Luka gigitan buaya adalah malapetaka dan berisiko tinggi sepsis dari bakteria Aeromonas. Jika anjing terselamat, kawal pendarahan dengan tekanan kuat, imobilkan kaki patah dengan bahan keras, dan bergegas ke vet Kuching, Sri Aman atau Sibu. Gigitan buaya hampir selalu memerlukan debridement pembedahan ditambah 10–14 hari antibiotik spektrum luas.' },
          { q: 'Di mana saya boleh cari vet kecemasan di Miri?', a: 'Miri mempunyai 4 klinik vet haiwan kecil di pusat bandar. Tiada yang beroperasi 24 jam, tetapi kebanyakan menerima panggilan selepas waktu kerja untuk kecemasan. Kawasan Bintang Megamall mempunyai kepadatan tertinggi. Untuk penjagaan kritikal semalam, anda mungkin perlu menerbangkan haiwan ke Kuching.' },
          { q: 'Kucing saya kena lintah di hutan hujan — bagaimana saya buang dengan selamat?', a: 'JANGAN tarik lintah — ia memuntahkan bakteria ke dalam luka. Sapukan garam, cuka atau api selama 2 saat; lintah akan terlepas. Bersihkan gigitan dengan antiseptik. Gigitan lintah berdarah banyak selama 1–4 jam kerana antikoagulan — kenakan tekanan. Perhatikan jangkitan dalam 5 hari berikut.' },
          { q: 'Berapa kos penjagaan vet kecemasan di Sarawak?', a: 'Konsultasi RM 70–140 (lebih tinggi dari Semenanjung kerana logistik ubat). Kes biasa: vaksin rabies RM 50–80, antibisa ular RM 1,200–2,000 sebotol (stok terhad — telefon DVS dahulu), antibiotik spektrum luas RM 80–200, kemasukan semalam RM 200–400. Pengangkutan udara haiwan ke Kuching dari bahagian luar bandar boleh berharga RM 600–1,500.' },
          { q: 'Anjing saya makan sesuatu di perjalanan memburu rumah panjang — perlu risau?', a: 'Ya. Toksin yang mungkin di pedalaman Sarawak termasuk akar tuba (Derris elliptica, digunakan untuk racun ikan), Dieffenbachia liar, dan umpan bercampur racun perosak untuk musang dan tenggiling. Gejala muncul dalam 30 minit hingga 4 jam: berliur, muntah, gegaran. Bawa sampel apa yang dimakan jika boleh, dan bergegas ke vet bandar bahagian terdekat.' },
        ],
      },
      zh: {
        intro: "砂拉越的宠物急症挑战与西马完全不同。广阔的雨林内陆、河边村落与长屋社区使得钩端螺旋体病、水蛭叮咬，甚至猎犬被鳄鱼袭击都是日常关切。古晋、美里、诗巫与民都鲁拥有州内约24间注册兽医诊所的大部分；这些城镇之外，最近的兽医可能要4WD或船程3–5小时。砂拉越曾报告狂犬病（与加里曼丹边境地区），这使其成为马来西亚唯一法律强制宠物接种狂犬疫苗的州属。门诊费RM 70–140，因物流原因略高于西马。古晋无正式24小时急诊兽医，但部分诊所提供电话分诊。",
        caseStudy: "2023年，石隆门一只比达友族猎犬在猎野猪时被流浪犬咬伤，6周后出现麻痹型狂犬病症状。该犬未接种疫苗。砂拉越DVS隔离了村中其他11只犬，并对5公里范围内340只动物进行环形疫苗接种。主人家庭接受暴露后预防。此案是每位砂拉越宠物主人——无论乡村或城市——都必须保持狂犬疫苗有效的最常被引用理由。",
        qas: [
          { q: '砂拉越的狗必须接种狂犬疫苗吗？', a: '必须。砂拉越是马来西亚唯一有活跃狂犬病例的州属（与加里曼丹边境地区）。砂拉越DVS依法要求所有猫狗每年接种狂犬疫苗。跨区移动时携带疫苗证书。古晋、美里、诗巫与民都鲁每年举办免费疫苗活动——联络砂拉越DVS（+6082-628 200）。' },
          { q: '我的狗在巴当鲁巴河被鳄鱼袭击——能做什么？', a: '鳄鱼咬伤极其严重，气单胞菌败血症风险高。若狗存活，用力按压止血，用任何硬物固定骨折肢体，速送古晋、斯里阿曼或诗巫兽医。鳄鱼咬伤几乎都需要手术清创加10–14天广谱抗生素。' },
          { q: '美里哪里有急诊兽医？', a: '美里市中心有4间小动物兽医诊所。无24小时营业，但多数接受急诊下班后电话。明星广场一带集中度最高。深夜重症护理可能需将宠物空运至古晋。' },
          { q: '我的猫在雨林被水蛭咬——怎么安全去除？', a: '切勿硬拉水蛭——它会把细菌反吐进伤口。用盐、醋或火烤2秒；水蛭会自行脱落。用消毒液清洁咬口。水蛭咬伤因抗凝物会出血1–4小时——按压止血。未来5天观察感染迹象。' },
          { q: '砂拉越急诊兽医费用多少？', a: '门诊RM 70–140（因药品物流高于西马）。常见费用：狂犬疫苗RM 50–80、抗蛇毒血清RM 1,200–2,000每瓶（库存有限——先联络DVS）、广谱抗生素RM 80–200、留院过夜RM 200–400。从乡村省份空运宠物到古晋约RM 600–1,500。' },
          { q: '我的狗在长屋打猎途中吃了不明物——要担心吗？', a: '要。砂拉越内陆可能的毒物包括土巴根（毒鱼用Derris elliptica）、野生黛粉叶，以及为麝香猫与穿山甲投放的农药毒饵。症状在30分钟至4小时内出现：流口水、呕吐、震颤。可能的话带上所食样本，速送最近省份镇兽医。' },
        ],
      },
    },
  },

  sabah: {
    slug: 'sabah',
    name: 'Sabah',
    capital: 'Kota Kinabalu',
    majorCities: ['Kota Kinabalu', 'Sandakan', 'Tawau', 'Lahad Datu'],
    population: '3.42M',
    climate: 'Coastal tropical with cool Crocker Range highlands',
    topRisks: [
      'Macaque attacks on small dogs around Mount Kinabalu and Poring',
      'Marine envenomation (stonefish, jellyfish) along Semporna coast',
      'Heartworm disease endemic across east coast (Sandakan, Tawau)',
      'Saltwater crocodile encounters in Kinabatangan river villages',
    ],
    clinicCount: 22,
    consultationRange: 'RM 70–150',
    nearestHub: { name: 'Kota Kinabalu (in-state)', slug: 'kota-kinabalu', distance: 'Within state' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Haiwan & Perusahaan Ternak Sabah', number: '+6088-220 211', url: 'https://www.sabah.gov.my/jhpt', type: 'dvs' },
      { name: 'Sabah Society for the Prevention of Cruelty to Animals (SSPCA Sabah)', number: '+6088-274 023', type: 'rescue' },
      { name: 'Pet Positive Sabah', number: '+6088-728 980', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Sabah's pet emergency profile mixes wildlife encounters, marine hazards and an east-coast heartworm belt that catches many newcomer pet owners off guard. The state has roughly 22 registered small-animal vet clinics — heavily concentrated in Kota Kinabalu, with 3 each in Sandakan and Tawau and almost none in the interior. Long-tailed macaques near Poring Hot Springs and Kinabalu Park are responsible for most small-dog injury cases the KK clinics see. Along the Semporna and Sipadan coasts, owners report stonefish stings and jellyfish burns on dogs walked at low tide. Heartworm (Dirofilaria immitis) is endemic across Sabah's east coast — annual prevention is non-negotiable. Consultation fees run RM 70–150. Kota Kinabalu has 1 clinic with 24-hour on-call service; elsewhere, expect a 1–4 hour drive to the nearest emergency vet.",
        caseStudy: "A retiree in Kundasang lost her 6 kg Maltese to a long-tailed macaque attack near a Kinabalu Park lookout in 2023. The macaque snatched the dog while she opened her car door; the dog was killed within seconds. SSPCA Sabah now distributes 'small-dog leash short' guidance to all Crocker Range homestays — and Sabah Parks added macaque warnings at Mount Kinabalu trailheads. The lesson: in Sabah's wildlife corridors, a 1.2-metre leash is the boundary between safety and tragedy.",
        qas: [
          { q: 'Do I really need to give my dog heartworm prevention in Sabah?', a: 'Absolutely yes. Sabah\'s east coast (Sandakan, Tawau, Lahad Datu) has one of the highest heartworm infection rates in Malaysia. Mosquitoes carry larvae year-round. Monthly prevention (Heartgard, NexGard Spectra, Revolution) costs RM 30–80 per dose. Treating an established heartworm infection costs RM 3,000–6,000 and can be fatal. Get an annual antigen test at any Kota Kinabalu, Sandakan or Tawau vet.' },
          { q: 'A monkey attacked my dog at Poring — what now?', a: 'Macaque bites and scratches carry herpes B virus risk to humans and bacterial infection risk to dogs. Wash all wounds for 15 minutes with soap and water, take your dog to the nearest KK or Ranau vet within 24 hours for antibiotics, and rinse any human wounds the same way. Sabah Wildlife Department (+6088-215 353) should be notified for repeat-offender troops.' },
          { q: 'Is there a 24-hour emergency vet in Kota Kinabalu?', a: 'One clinic in KK city offers 24-hour on-call service for registered clients (after-hours fee RM 250–400). Other clinics in Likas, Penampang and Inanam open until 9–10 pm. Outside KK, your nearest after-hours vet is in Sandakan (5 hours by road) or Tawau (7 hours). For trips to Sipadan or interior Sabah, identify your nearest vet before you go.' },
          { q: 'My dog stepped on something at Pantai Tanjung Aru and his paw is swelling fast — what is it?', a: 'Likely a stonefish (Synanceia) sting — endemic to Sabah\'s shallow rocky shores. Pain is severe and swelling is dramatic. Immerse the paw in HOT water (45°C, hot but not scalding) for 30–90 minutes — heat denatures the venom protein. Then rush to a KK vet for tetanus cover and pain control. Stonefish stings can cause cardiac issues in small dogs.' },
          { q: 'How much is emergency vet care in Sabah?', a: 'Higher than Peninsula due to logistics: consultation RM 70–150, X-ray RM 100–180, ultrasound RM 200–350, blood panel RM 200–350, heartworm test RM 100–180, overnight stay RM 250–500. Always confirm prices upfront — there is significant variation between Kota Kinabalu and rural divisions.' },
          { q: 'Can I take my dog up Mount Kinabalu?', a: 'Sabah Parks does not allow pets in the climber zone above Timpohon Gate. Dogs are welcome at lower-altitude lodgings in Kundasang and Mesilau. Watch for cooler nights (10–14°C) — pack a coat for short-haired breeds. Keep dogs on a short leash at all times — macaques and even wild civet cats can attack small breeds.' },
        ],
      },
      ms: {
        intro: "Profil kecemasan haiwan peliharaan Sabah mencampurkan pertemuan hidupan liar, bahaya marin dan jalur cacing jantung pantai timur yang mengejutkan ramai pemilik baru. Negeri ini mempunyai kira-kira 22 klinik vet haiwan kecil berdaftar — banyak di Kota Kinabalu, dengan 3 di Sandakan dan Tawau dan hampir tiada di pedalaman. Kera ekor panjang berhampiran Poring dan Taman Kinabalu bertanggungjawab untuk kebanyakan kes kecederaan anjing kecil yang dilihat klinik KK. Di sepanjang pantai Semporna dan Sipadan, pemilik melaporkan sengatan ikan batu pada anjing. Cacing jantung (Dirofilaria immitis) adalah endemik di pantai timur Sabah — pencegahan tahunan tidak boleh dirunding. Yuran konsultasi RM 70–150.",
        caseStudy: "Seorang pesara di Kundasang kehilangan Maltese 6 kg akibat serangan kera ekor panjang berhampiran tempat tinjauan Taman Kinabalu pada 2023. Kera itu menyambar anjing semasa dia membuka pintu kereta; anjing mati dalam beberapa saat. SSPCA Sabah kini mengedarkan panduan 'tali leher anjing kecil pendek' kepada semua homestay Banjaran Crocker. Pengajaran: di koridor hidupan liar Sabah, tali 1.2-meter adalah sempadan antara keselamatan dan tragedi.",
        qas: [
          { q: 'Adakah saya benar-benar perlu memberi anjing pencegahan cacing jantung di Sabah?', a: 'Mutlak ya. Pantai timur Sabah (Sandakan, Tawau, Lahad Datu) mempunyai salah satu kadar jangkitan cacing jantung tertinggi di Malaysia. Nyamuk membawa larva sepanjang tahun. Pencegahan bulanan kos RM 30–80 sedos. Merawat jangkitan kos RM 3,000–6,000 dan boleh membawa maut.' },
          { q: 'Monyet menyerang anjing saya di Poring — apa sekarang?', a: 'Gigitan kera membawa risiko virus herpes B kepada manusia dan jangkitan bakteria kepada anjing. Cuci semua luka selama 15 minit dengan sabun dan air, bawa anjing ke vet KK atau Ranau dalam 24 jam untuk antibiotik. Jabatan Hidupan Liar Sabah (+6088-215 353) harus dimaklumkan.' },
          { q: 'Adakah vet kecemasan 24 jam di Kota Kinabalu?', a: 'Satu klinik di bandar KK menawarkan perkhidmatan 24-jam on-call untuk pelanggan berdaftar (yuran selepas waktu kerja RM 250–400). Klinik lain di Likas, Penampang dan Inanam dibuka hingga 9–10 malam. Di luar KK, vet selepas waktu kerja terdekat di Sandakan (5 jam) atau Tawau (7 jam).' },
          { q: 'Anjing saya memijak sesuatu di Pantai Tanjung Aru dan kaki bengkak cepat — apa itu?', a: 'Mungkin sengatan ikan batu (Synanceia) — endemik di pantai berbatu cetek Sabah. Rendam kaki dalam air PANAS (45°C) selama 30–90 minit — haba menyahasli protein bisa. Kemudian bergegas ke vet KK untuk perlindungan tetanus dan kawalan kesakitan.' },
          { q: 'Berapa kos rawatan vet kecemasan di Sabah?', a: 'Lebih tinggi dari Semenanjung kerana logistik: konsultasi RM 70–150, X-ray RM 100–180, ultrasound RM 200–350, panel darah RM 200–350, ujian cacing jantung RM 100–180, kemasukan semalam RM 250–500.' },
          { q: 'Bolehkah saya bawa anjing naik Gunung Kinabalu?', a: 'Taman Sabah tidak membenarkan haiwan peliharaan di zon pendaki di atas Timpohon Gate. Anjing dialu-alukan di penginapan altitud rendah di Kundasang dan Mesilau. Perhatikan malam lebih sejuk (10–14°C). Pastikan anjing pada tali pendek pada setiap masa.' },
        ],
      },
      zh: {
        intro: "沙巴的宠物急症格局融合野生动物遭遇、海洋危害与令许多新手主人措手不及的东海岸心丝虫地带。全州约22间注册小动物兽医诊所——主要集中在亚庇，山打根与斗湖各3间，内陆几乎没有。波令温泉与京那巴鲁公园附近的长尾猕猴是亚庇诊所小型犬伤害案例的主因。仙本那与诗巴丹海岸沿线，主人报告石头鱼蜇伤狗只。心丝虫（Dirofilaria immitis）在沙巴东海岸为地方病——每年预防不容妥协。门诊费RM 70–150。",
        caseStudy: "2023年昆达山一位退休人士的6公斤马尔济斯犬在京那巴鲁公园瞭望点附近被长尾猕猴袭击致死。她开车门时猕猴扑向小狗，秒杀。沙巴SSPCA现在向克罗克山脉所有民宿派发『小型犬牵绳要短』指南。教训：在沙巴野生动物走廊，1.2米牵绳就是安全与悲剧的分界。",
        qas: [
          { q: '在沙巴真的需要给狗做心丝虫预防吗？', a: '绝对需要。沙巴东海岸（山打根、斗湖、拿笃）是马来西亚心丝虫感染率最高的地区之一。蚊子全年携带幼虫。月度预防每剂RM 30–80。治疗已感染需RM 3,000–6,000且可能致命。' },
          { q: '波令的猴子袭击了我的狗——现在怎么办？', a: '猕猴咬伤携带B型疱疹病毒（对人类）与细菌感染风险（对狗）。用肥皂水冲洗所有伤口15分钟，24小时内带狗到亚庇或兰瑙兽医注射抗生素。应通知沙巴野生动物局（+6088-215 353）。' },
          { q: '亚庇有24小时急诊兽医吗？', a: '亚庇市内一间诊所为注册客户提供24小时随叫服务（下班后费用RM 250–400）。利卡士、彭年榜与依拿南其他诊所营业至晚上9–10点。亚庇外最近的下班后兽医在山打根（5小时）或斗湖（7小时）。' },
          { q: '我的狗在丹绒亚路海滩踩到东西，脚迅速肿胀——是什么？', a: '可能是石头鱼（Synanceia）蜇伤——沙巴浅水岩岸地方病。将脚浸入热水（45°C）30–90分钟——热可使毒蛋白变性。然后速送亚庇兽医注射破伤风与镇痛。' },
          { q: '沙巴急诊兽医费用多少？', a: '因物流高于西马：门诊RM 70–150、X光RM 100–180、超声波RM 200–350、血液检查RM 200–350、心丝虫检测RM 100–180、留院过夜RM 250–500。' },
          { q: '可以带狗上京那巴鲁山吗？', a: '沙巴公园不允许宠物进入Timpohon闸口以上的攀登区。昆达山与梅西劳的低海拔住宿欢迎狗。注意夜间较冷（10–14°C）。任何时候保持短牵绳——猕猴甚至野生麝香猫都可能袭击小型品种。' },
        ],
      },
    },
  },

  melaka: {
    slug: 'melaka',
    name: 'Melaka',
    capital: 'Bandaraya Melaka',
    majorCities: ['Bandaraya Melaka', 'Alor Gajah', 'Jasin', 'Ayer Keroh'],
    population: '0.93M',
    climate: 'Coastal humid, heavy haze episodes Jun–Sep',
    topRisks: [
      'Tourist-area run-in injuries (Jonker Walk, A Famosa traffic)',
      'Haze-induced respiratory crises in brachycephalic breeds',
      'Heartworm via mosquitoes from Sungai Melaka backwaters',
      'Stray-dog conflict in old-town heritage zones',
    ],
    clinicCount: 18,
    consultationRange: 'RM 50–110',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '145 km / 1.75h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Melaka (DVS Melaka)', number: '+606-232 7000', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Melaka', number: '+606-336 2080', type: 'rescue' },
      { name: 'Animal Aid Melaka', number: '+6012-307 9923', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Melaka is small but its pet emergency mix is unique — heritage tourism creates traffic-injury hotspots around Jonker Walk and A Famosa, while seasonal Sumatran haze (Jun–Sep) regularly triggers respiratory crises in flat-faced breeds across Bandaraya Melaka and Ayer Keroh. The state has 18 registered vet clinics, mostly in the central city and Ayer Keroh corridor, with consultation fees among Malaysia's lowest at RM 50–110. There is no 24-hour emergency vet in Melaka — the nearest is in Kuala Lumpur (1.75 hours via the Lebuhraya Pantai Timur 2). Sungai Melaka backwaters and the swampy outskirts of Alor Gajah and Jasin are mosquito-breeding zones, making heartworm prevention essential. Stray-dog colonies near heritage zones occasionally clash with tourist-owned small breeds, particularly in evening hours.",
        caseStudy: "A French bulldog brought from KL for a Jonker Walk weekend in Sep 2023 collapsed from acute respiratory failure during a moderate haze (API 165). The owners drove to a Bukit Beruang vet who stabilised the dog with oxygen and dexamethasone, then transferred to KL for overnight care. Total cost RM 2,400. Melaka SPCA now publishes haze-day pet advisories on its Facebook page during every Sumatran burning season — flat-faced dogs should stay indoors when API exceeds 100.",
        qas: [
          { q: 'My pug is wheezing during Melaka haze — what do I do?', a: 'Move indoors with air-conditioning or HEPA filtration immediately. Do NOT exercise the dog. If breathing rate exceeds 40/min at rest, gums are blue, or the dog refuses to lie down, this is a respiratory emergency — drive to the nearest Bandaraya Melaka or Ayer Keroh vet for oxygen therapy. Brachycephalic breeds can deteriorate rapidly when API exceeds 150.' },
          { q: 'Where is the nearest 24-hour vet to Melaka?', a: 'Melaka has no 24-hour emergency vet. The closest 24/7 facility is in Kuala Lumpur (Cheras or Petaling Jaya area), about 1.75 hours via the AKLEH/Lebuhraya. For overnight emergencies, call your regular Melaka vet first — many will reopen for true emergencies. The Ayer Keroh and Klebang clinics generally have the latest closing times (around 10 pm).' },
          { q: 'My dog was hit by a motorcycle near Jonker Walk — what should I do first?', a: 'Slide the dog onto a flat board (a folded jacket works) without bending the spine. Apply firm pressure to any bleeding wounds. Do NOT give water or food. Drive immediately to a Bandaraya Melaka vet — call ahead so they can prepare oxygen and IV access. Most vehicle-strike injuries need X-rays for fractures and ultrasound to check for internal bleeding.' },
          { q: 'How much does emergency care cost in Melaka?', a: 'Among the most affordable in Peninsular Malaysia: consultation RM 50–110, X-ray RM 70–130, ultrasound RM 150–250, blood panel RM 150–280, IV fluids RM 70–140 per bag, overnight stay RM 150–280. Total emergency presentation typically RM 350–900 before any surgery.' },
          { q: 'Are stray dogs in Melaka old town a danger to my pet?', a: 'Most are habituated to humans but can react aggressively to small dogs. Walk small breeds on a short leash, avoid the alleyways behind Jonker Walk after dark, and carry a citronella spray. If your pet is bitten, clean the wound immediately and visit a Melaka vet within 24 hours for antibiotic cover. Report aggressive packs to MBMB at +606-282 8888.' },
          { q: 'Should I put heartworm prevention on my Melaka dog?', a: 'Yes. The Sungai Melaka backwaters and rice fields around Alor Gajah and Jasin are mosquito hotspots year-round. Monthly heartworm prevention (Heartgard, NexGard Spectra, Bravecto Plus) costs RM 30–80 per dose at any Melaka vet. Annual antigen testing is recommended even on prevention.' },
        ],
      },
      ms: {
        intro: "Melaka kecil tetapi campuran kecemasan haiwan peliharaannya unik — pelancongan warisan mencipta hotspot kemalangan trafik di sekitar Jonker Walk dan A Famosa, manakala jerebu Sumatera bermusim (Jun–Sep) kerap mencetuskan krisis pernafasan pada baka berwajah leper. Negeri ini mempunyai 18 klinik vet berdaftar, kebanyakannya di pusat bandar dan koridor Ayer Keroh, dengan yuran konsultasi antara terendah di Malaysia pada RM 50–110. Tiada vet kecemasan 24 jam di Melaka — terdekat di Kuala Lumpur. Air belakang Sungai Melaka dan pinggir Alor Gajah serta Jasin adalah zon pembiakan nyamuk, menjadikan pencegahan cacing jantung penting.",
        caseStudy: "Seekor bulldog Perancis dibawa dari KL untuk hujung minggu Jonker Walk pada Sep 2023 rebah akibat kegagalan pernafasan akut semasa jerebu sederhana (API 165). Pemilik memandu ke vet Bukit Beruang yang menstabilkan anjing dengan oksigen dan dexamethasone. Kos keseluruhan RM 2,400. SPCA Melaka kini menerbitkan nasihat haiwan hari jerebu di halaman Facebook mereka.",
        qas: [
          { q: 'Pug saya mencungap semasa jerebu Melaka — apa perlu saya buat?', a: 'Pindah ke dalam dengan penghawa dingin atau penapisan HEPA segera. JANGAN bersenam anjing. Jika kadar pernafasan melebihi 40/min semasa rehat, gusi biru, atau anjing enggan baring, ini adalah kecemasan pernafasan — pandu ke vet Bandaraya Melaka atau Ayer Keroh.' },
          { q: 'Di mana vet 24 jam terdekat dengan Melaka?', a: 'Melaka tiada vet kecemasan 24 jam. Kemudahan 24/7 terdekat di Kuala Lumpur (kawasan Cheras atau Petaling Jaya), kira-kira 1.75 jam. Untuk kecemasan malam, hubungi vet biasa Melaka anda dahulu.' },
          { q: 'Anjing saya dilanggar motosikal berhampiran Jonker Walk — apa perlu saya buat dahulu?', a: 'Geser anjing ke papan rata (jaket terlipat boleh) tanpa membengkokkan tulang belakang. Kenakan tekanan kuat pada luka berdarah. JANGAN beri air atau makanan. Pandu segera ke vet Bandaraya Melaka — telefon dahulu.' },
          { q: 'Berapa kos penjagaan kecemasan di Melaka?', a: 'Antara paling mampu di Semenanjung: konsultasi RM 50–110, X-ray RM 70–130, ultrasound RM 150–250, panel darah RM 150–280, cecair IV RM 70–140 sebeg, kemasukan semalam RM 150–280.' },
          { q: 'Adakah anjing liar di bandar lama Melaka berbahaya kepada haiwan saya?', a: 'Kebanyakan biasa dengan manusia tetapi boleh bertindak agresif terhadap anjing kecil. Berjalan baka kecil pada tali pendek, elakkan lorong belakang Jonker Walk selepas gelap. Laporkan kawanan agresif kepada MBMB di +606-282 8888.' },
          { q: 'Patutkah saya beri pencegahan cacing jantung pada anjing Melaka saya?', a: 'Ya. Air belakang Sungai Melaka dan sawah di sekitar Alor Gajah dan Jasin adalah hotspot nyamuk sepanjang tahun. Pencegahan bulanan kos RM 30–80 sedos di mana-mana vet Melaka.' },
        ],
      },
      zh: {
        intro: "马六甲虽小，宠物急症却独特——遗产旅游在鸡场街与红屋一带制造交通伤害热点；而6至9月的苏门答腊烟霾季常引发扁脸品种呼吸危机。全州18间注册兽医诊所，多集中在市中心与爱极乐走廊，门诊费RM 50–110为马来西亚最低之一。马六甲无24小时急诊兽医——最近在吉隆坡（1.75小时车程）。马六甲河支流与亚罗牙也、野新沼泽边缘是蚊虫繁殖区，心丝虫预防必不可少。",
        caseStudy: "2023年9月，从吉隆坡带去鸡场街周末的一只法国斗牛犬在中度烟霾（API 165）下急性呼吸衰竭昏倒。主人驾车到武吉柏冷兽医，以氧气与地塞米松稳定后转送吉隆坡过夜。总费用RM 2,400。马六甲SPCA现每逢苏门答腊烧芭季在脸书发布烟霾日宠物建议。",
        qas: [
          { q: '马六甲烟霾时我的哈巴狗喘鸣——怎么办？', a: '立即移到有冷气或HEPA过滤的室内。切勿运动。若静息呼吸超过40次/分、牙龈发紫或不愿趴下，这是呼吸急症——速送马六甲市或爱极乐兽医吸氧。' },
          { q: '马六甲最近的24小时兽医在哪里？', a: '马六甲无24小时急诊兽医。最近的24/7设施在吉隆坡（蕉赖或八打灵再也），约1.75小时车程。深夜紧急情况请先联络您常用的马六甲兽医。' },
          { q: '我的狗在鸡场街附近被摩托车撞——首先做什么？', a: '将狗滑到平板上（折叠夹克可），不要弯曲脊柱。用力按压出血伤口。切勿喂水或食物。立即驾车到马六甲市兽医——先打电话准备氧气与静脉通道。' },
          { q: '马六甲急诊费用多少？', a: '西马最实惠之一：门诊RM 50–110、X光RM 70–130、超声波RM 150–250、血液检查RM 150–280、输液RM 70–140每袋、留院过夜RM 150–280。' },
          { q: '马六甲老城的流浪狗会威胁我的宠物吗？', a: '多数已习惯人类但可能对小型犬具攻击性。短绳遛小型犬，天黑后避开鸡场街后巷。向MBMB（+606-282 8888）报告攻击性犬群。' },
          { q: '我的马六甲狗需要心丝虫预防吗？', a: '需要。马六甲河支流与亚罗牙也、野新一带稻田全年都是蚊虫热点。月度预防每剂RM 30–80。' },
        ],
      },
    },
  },

  kedah: {
    slug: 'kedah',
    name: 'Kedah',
    capital: 'Alor Setar',
    majorCities: ['Alor Setar', 'Sungai Petani', 'Kulim', 'Langkawi'],
    population: '2.18M',
    climate: 'Northern dry-wet, heavy paddy-field exposure across plains',
    topRisks: [
      'Pesticide poisoning from rice-paddy runoff in Yan and Pendang',
      'Saltwater jellyfish stings and beach hazards on Langkawi',
      'Snake bites (Russell\'s viper) in northern paddy belt',
      'Tick-borne babesiosis common in Kulim industrial fringe',
    ],
    clinicCount: 21,
    consultationRange: 'RM 55–115',
    nearestHub: { name: 'Penang / Kuala Lumpur', slug: 'kuala-lumpur', distance: '110 km / 1.5h to Penang' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Kedah (DVS Kedah)', number: '+604-733 1700', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Kedah', number: '+604-731 6233', type: 'rescue' },
      { name: 'Langkawi Animal Shelter', number: '+6019-444 2032', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Kedah's rice-bowl geography defines its pet emergency profile. The vast paddy plains of Yan, Pendang and Kuala Muda mean farm-runoff pesticide poisoning and Russell's viper bites are frequent presentations at Alor Setar and Sungai Petani vets. Langkawi adds a separate set of marine-related cases — jellyfish stings, fish-hook injuries and heat collapse on resort beaches. The state has 21 registered vet clinics with consultation fees of RM 55–115 — Langkawi clinics charge slightly higher due to ferry-imported supplies. There is no 24-hour vet in Kedah; the nearest after-hours options are in Penang (1.5 hours from Alor Setar) or further south to KL. Tick-borne babesiosis is a growing concern in Kulim's industrial-residential fringe, where bush-clearing has displaced ticks into family gardens.",
        caseStudy: "A working farm dog in Kuala Nerang was admitted to an Alor Setar vet in March 2024 with severe organophosphate poisoning after drinking from a paddy-field drain post-spraying. The dog presented with constricted pupils, drooling and seizures within 90 minutes. Atropine plus pralidoxime over 36 hours saved her, but the case prompted DVS Kedah to issue a paddy-season advisory: keep dogs indoors for 48 hours after any visible aerial spraying, and never let them drink from rice-field channels.",
        qas: [
          { q: 'My dog drank from a paddy-field drain in Yan — what should I do?', a: 'Watch for pesticide symptoms within 30–90 minutes: drooling, constricted pupils, vomiting, muscle twitching, seizures. If any appear, this is a life-threatening organophosphate emergency — rush to an Alor Setar or Sungai Petani vet immediately. Bring a sample of water if possible. Atropine is the antidote; treatment must start within 4 hours for best outcome.' },
          { q: 'My dog was bitten by a snake in a Kedah paddy field — what kind?', a: 'Most likely Russell\'s viper or Malayan krait — both common in northern paddy belts. Symptoms include bleeding from the bite site, swelling, weakness and dark urine within hours. Do NOT cut, suck or apply tourniquet. Carry the dog (do not let it walk) to the nearest vet. Antivenom is held at major Alor Setar vets but call ahead — supply varies.' },
          { q: 'Are there any vets on Langkawi?', a: 'Langkawi has 4 small-animal vet clinics, mostly around Kuah and Pantai Cenang. None operate 24 hours. For overnight emergencies, you may need to take the ferry to Kuala Kedah and drive to Alor Setar (3+ hours total) or to Penang (5+ hours). Identify your nearest Langkawi vet on arrival, especially with elderly or chronically ill pets.' },
          { q: 'My cat was stung by a jellyfish at Pantai Cenang — what now?', a: 'Rinse the affected area with seawater (NOT freshwater — freshwater triggers more sting cells). Carefully remove any visible tentacles with tweezers. Soak in vinegar for 30 minutes. Watch for facial swelling, breathing difficulty or collapse — these signal severe reaction and need immediate vet care. Most jellyfish stings on cats settle with symptomatic care.' },
          { q: 'How much does emergency care cost in Kedah?', a: 'Mainland Kedah is affordable: consultation RM 55–115, X-ray RM 70–130, snake antivenom RM 800–1,500 per vial, organophosphate treatment RM 800–2,500 (multiple atropine doses + hospitalisation). Langkawi clinics charge 15–25% more due to ferry-imported drugs.' },
          { q: 'Should I worry about ticks in Kulim?', a: 'Yes — recent residential development has pushed brown dog ticks and the babesia parasite into Kulim and Bandar Baharu suburbs. Use tick prevention year-round (NexGard, Bravecto, Simparica — RM 70–140 per dose). Watch for pale gums, lethargy and dark urine which signal babesiosis. Annual SNAP 4Dx testing is recommended.' },
        ],
      },
      ms: {
        intro: "Geografi mangkuk beras Kedah mentakrifkan profil kecemasan haiwan peliharaannya. Dataran padi luas di Yan, Pendang dan Kuala Muda bermakna keracunan racun perosak limpahan ladang dan gigitan ular tedung Russell adalah pembentangan kerap di vet Alor Setar dan Sungai Petani. Langkawi menambah set kes berkaitan marin yang berasingan. Negeri ini mempunyai 21 klinik vet berdaftar dengan yuran konsultasi RM 55–115. Tiada vet 24 jam di Kedah; pilihan selepas waktu kerja terdekat di Pulau Pinang.",
        caseStudy: "Seekor anjing ladang di Kuala Nerang dimasukkan ke vet Alor Setar pada Mac 2024 dengan keracunan organofosfat teruk selepas minum dari longkang sawah selepas penyemburan. Anjing menunjukkan anak mata mengecut, berliur dan sawan dalam 90 minit. Atropine dan pralidoxime selama 36 jam menyelamatkannya. Kes ini mendorong DVS Kedah mengeluarkan nasihat musim padi.",
        qas: [
          { q: 'Anjing saya minum dari longkang sawah di Yan — apa perlu saya buat?', a: 'Perhatikan gejala racun perosak dalam 30–90 minit: berliur, anak mata mengecut, muntah, sentakan otot, sawan. Jika ada, ini adalah kecemasan organofosfat mengancam nyawa — bergegas ke vet Alor Setar atau Sungai Petani segera. Atropine adalah penawar.' },
          { q: 'Anjing saya digigit ular di sawah Kedah — jenis apa?', a: 'Kemungkinan besar tedung Russell atau bungarus Melayu — kedua-dua biasa di tali pinggang padi utara. Gejala termasuk pendarahan dari tapak gigitan, bengkak, lemah dan kencing gelap. JANGAN potong, hisap atau ikat. Bawa anjing (jangan biarkan ia berjalan) ke vet terdekat.' },
          { q: 'Adakah vet di Langkawi?', a: 'Langkawi mempunyai 4 klinik vet haiwan kecil, kebanyakannya di sekitar Kuah dan Pantai Cenang. Tiada yang beroperasi 24 jam. Untuk kecemasan malam, anda mungkin perlu naik feri ke Kuala Kedah dan pandu ke Alor Setar (3+ jam keseluruhan).' },
          { q: 'Kucing saya disengat obor-obor di Pantai Cenang — sekarang apa?', a: 'Bilas kawasan terjejas dengan air laut (BUKAN air tawar — air tawar mencetuskan lebih banyak sel sengatan). Buang sesungut yang kelihatan dengan forsep. Rendam dalam cuka selama 30 minit. Perhatikan bengkak muka, kesukaran bernafas atau rebah.' },
          { q: 'Berapa kos rawatan kecemasan di Kedah?', a: 'Kedah daratan mampu: konsultasi RM 55–115, X-ray RM 70–130, antibisa ular RM 800–1,500 sebotol, rawatan organofosfat RM 800–2,500. Klinik Langkawi mengenakan 15–25% lebih.' },
          { q: 'Patutkah saya risau tentang kutu di Kulim?', a: 'Ya — pembangunan kediaman baru-baru ini telah mendorong kutu anjing coklat dan parasit babesia ke pinggir bandar Kulim. Gunakan pencegahan kutu sepanjang tahun (RM 70–140 sedos). Perhatikan gusi pucat, kelesuan dan kencing gelap.' },
        ],
      },
      zh: {
        intro: "吉打的米仓地理塑造了其宠物急症格局。延、本同与瓜拉姆达广阔稻田意味着农药径流中毒与罗素蝰蛇咬伤是亚罗士打与双溪大年兽医的常见病例。浮罗交怡另增一组海洋相关案例。全州21间注册兽医诊所，门诊费RM 55–115。吉打无24小时兽医；最近的下班后选项在槟城。",
        caseStudy: "2024年3月，瓜拉吉底一只农场犬在喷药后饮用稻田沟渠水，严重有机磷中毒入住亚罗士打兽医。狗在90分钟内出现瞳孔缩小、流口水与抽搐。阿托品加解磷定36小时治疗救回。此案促使吉打DVS发布稻季宠物建议。",
        qas: [
          { q: '我的狗在延地稻田沟渠喝水——怎么办？', a: '在30–90分钟内观察农药症状：流口水、瞳孔缩小、呕吐、肌肉抽动、抽搐。出现任何症状即为危及生命的有机磷急症——速送亚罗士打或双溪大年兽医。阿托品是解药。' },
          { q: '我的狗在吉打稻田被蛇咬——什么蛇？', a: '很可能是罗素蝰蛇或马来环蛇——北部稻田带常见。症状包括咬口出血、肿胀、虚弱与深色尿。切勿切开、吸吮或绑扎。抱狗（不要让它走）到最近兽医。' },
          { q: '浮罗交怡有兽医吗？', a: '浮罗交怡在瓜镇与珍南海滩一带有4间小动物兽医诊所。无24小时营业。深夜紧急情况下可能需乘船到瓜拉吉打，再驾车到亚罗士打（共3+小时）。' },
          { q: '我的猫在珍南海滩被水母蜇——现在怎么办？', a: '用海水（非淡水——淡水触发更多刺细胞）冲洗患处。用镊子小心移除可见触手。醋浸泡30分钟。观察面部肿胀、呼吸困难或昏倒。' },
          { q: '吉打急诊费用多少？', a: '本土吉打实惠：门诊RM 55–115、X光RM 70–130、抗蛇毒血清RM 800–1,500每瓶、有机磷治疗RM 800–2,500。浮罗交怡诊所多收15–25%。' },
          { q: '需要担心居林的蜱虫吗？', a: '需要——近期住宅开发将褐犬蜱与巴贝斯虫推入居林郊区。全年使用防蜱（每剂RM 70–140）。注意牙龈苍白、嗜睡与深色尿。' },
        ],
      },
    },
  },

  pahang: {
    slug: 'pahang',
    name: 'Pahang',
    capital: 'Kuantan',
    majorCities: ['Kuantan', 'Temerloh', 'Bentong', 'Cameron Highlands'],
    population: '1.69M',
    climate: 'East-coast monsoon Nov–Feb, highland cool zones, dense forest interior',
    topRisks: [
      'Snake bites (king cobra, reticulated python) in forest fringes',
      'East-coast monsoon flooding strands pets in Pekan and Maran',
      'Hypothermia in highland breeds visiting Cameron / Genting',
      'Wild boar gore injuries to hunting dogs in Jerantut and Lipis',
    ],
    clinicCount: 19,
    consultationRange: 'RM 60–125',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '230 km / 3h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Pahang (DVS Pahang)', number: '+609-573 1411', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Kuantan', number: '+609-538 7770', type: 'rescue' },
      { name: 'Pahang Animal Welfare Society', number: '+6019-919 1190', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Pahang is Peninsular Malaysia's largest state and its pet emergency picture varies enormously between coastal Kuantan, the lowland forests of Jerantut and Lipis, and the cool highlands of Cameron and Genting. King cobra and reticulated python encounters are real risks for forest-fringe homes; wild-boar gore injuries to hunting dogs spike during durian and rambutan seasons. The Nov–Feb monsoon regularly floods Pekan, Maran and lower Temerloh, stranding pets and contaminating drinking water with leptospira. The state has 19 registered vet clinics — Kuantan holds 8, Temerloh 4, the rest scattered. Consultation fees RM 60–125. There is no 24-hour vet; the nearest is in KL (3 hours via Karak/LPT). Highland visitors must prepare for 12–17°C nights — short-haired breeds and seniors regularly present with hypothermia at Tanah Rata vets.",
        caseStudy: "In December 2023, an East Coast Expressway flood left over 200 pets stranded in Pekan when owners evacuated without them. SPCA Kuantan and Pahang Animal Welfare Society ran a 5-day boat-rescue operation, recovering 187 dogs and cats — most then needed leptospirosis prophylaxis and skin-infection treatment. Total veterinary cost across the operation exceeded RM 80,000. The case is now the basis for SPCA Kuantan's 'monsoon kit' campaign: every Pahang owner is urged to keep a labelled carrier, 3 days of food and a vaccination card ready by November.",
        qas: [
          { q: 'My dog was bitten by what looked like a king cobra in Lipis — what now?', a: 'King cobra venom is highly neurotoxic — symptoms (drooping eyelids, weak limbs, breathing difficulty) appear within 30 minutes. Do NOT delay: rush to Kuantan or KL. Tourniquets are NOT recommended; instead immobilise the limb and keep the dog still. Call ahead — king cobra antivenom is rare and may need to be sourced from KL hospitals. Survival depends on speed.' },
          { q: 'How do I prepare my pet for monsoon flooding in Pekan?', a: 'Pack a labelled carrier with food, water, vaccination certs, leash and a recent photo. Identify two evacuation destinations on higher ground (a friend\'s house, a vet boarding facility). Microchip your pet now if not already done — DVS Pahang charges RM 30–60. Never leave pets behind in flood zones; SPCA Kuantan rescues hundreds every monsoon.' },
          { q: 'Is there a 24-hour vet near Kuantan?', a: 'No. Kuantan vets close by 9–10 pm. For genuine overnight emergencies, drive 3 hours to KL via the Karak Highway. Several Kuantan clinics provide after-hours phone triage and may reopen for life-threatening cases — store their numbers in advance. The Indera Mahkota and Tanah Putih clinics tend to have the longest hours.' },
          { q: 'My short-coated dog is shivering in Tanah Rata — is it dangerous?', a: 'Yes — hypothermia is real for greyhounds, French bulldogs, chihuahuas and other thin-coated breeds in the highlands. Wrap in a fleece, towel-dry if wet, and place in a heated room. If shivering does not stop within 20 minutes, gums turn pale, or your dog becomes listless, see the Tanah Rata or Brinchang vet immediately — body temperature below 37°C is critical.' },
          { q: 'How much does emergency care cost in Pahang?', a: 'Consultation RM 60–125, X-ray RM 80–140, blood panel RM 180–320, snake antivenom RM 800–2,000 per vial (limited stock — call ahead), overnight stay RM 200–350. Highland clinics in Cameron charge 10–15% more due to delivery costs.' },
          { q: 'My hunting dog was gored by a wild boar near Jerantut — what should I do?', a: 'Wild boar tusks cause deep penetrating wounds with high contamination risk. Apply firm pressure with a clean cloth, do NOT remove anything embedded, and rush to a Jerantut, Temerloh or Kuantan vet. These wounds usually need surgical exploration, drains and 14 days of broad-spectrum antibiotics. Total cost typically RM 1,500–4,500.' },
        ],
      },
      ms: {
        intro: "Pahang adalah negeri terbesar Semenanjung dan gambaran kecemasan haiwan peliharaannya berbeza-beza antara Kuantan pantai, hutan tanah rendah Jerantut dan Lipis, dan tanah tinggi sejuk Cameron dan Genting. Pertemuan tedung selar dan ular sawa retikulata adalah risiko sebenar untuk rumah pinggir hutan; kecederaan luka babi hutan kepada anjing pemburu meningkat semasa musim durian. Monsun Nov–Feb kerap membanjirkan Pekan, Maran dan Temerloh bawah. Negeri ini mempunyai 19 klinik vet berdaftar. Tiada vet 24 jam; terdekat di KL (3 jam).",
        caseStudy: "Pada Disember 2023, banjir Lebuhraya Pantai Timur meninggalkan lebih 200 haiwan peliharaan terkandas di Pekan apabila pemilik berpindah tanpa mereka. SPCA Kuantan menjalankan operasi penyelamatan bot 5 hari, memulihkan 187 anjing dan kucing. Kos veterinar keseluruhan melebihi RM 80,000. Kes ini kini menjadi asas kempen 'kit monsun' SPCA Kuantan.",
        qas: [
          { q: 'Anjing saya digigit oleh apa yang kelihatan seperti tedung selar di Lipis — sekarang apa?', a: 'Bisa tedung selar adalah neurotoksik tinggi — gejala (kelopak mata jatuh, anggota lemah, sukar bernafas) muncul dalam 30 minit. JANGAN lengah: bergegas ke Kuantan atau KL. Tourniquet TIDAK disyorkan; sebaliknya imobilkan anggota dan kekalkan anjing diam.' },
          { q: 'Bagaimana saya menyediakan haiwan saya untuk banjir monsun di Pekan?', a: 'Pek pembawa berlabel dengan makanan, air, sijil vaksinasi, tali dan foto terkini. Kenal pasti dua destinasi evakuasi di tanah tinggi. Microchip haiwan anda sekarang — DVS Pahang mengenakan RM 30–60.' },
          { q: 'Adakah vet 24 jam berhampiran Kuantan?', a: 'Tidak. Vet Kuantan tutup pada 9–10 malam. Untuk kecemasan malam sebenar, pandu 3 jam ke KL melalui Lebuhraya Karak. Beberapa klinik Kuantan menyediakan triase telefon selepas waktu kerja.' },
          { q: 'Anjing berbulu pendek saya menggigil di Tanah Rata — adakah berbahaya?', a: 'Ya — hipotermia adalah nyata untuk greyhound, bulldog Perancis, chihuahua dan baka berbulu nipis lain di tanah tinggi. Balut dalam fleece, lap kering jika basah, dan letak di bilik dipanaskan. Jika menggigil tidak berhenti dalam 20 minit, jumpa vet Tanah Rata segera.' },
          { q: 'Berapa kos rawatan kecemasan di Pahang?', a: 'Konsultasi RM 60–125, X-ray RM 80–140, panel darah RM 180–320, antibisa ular RM 800–2,000 sebotol, kemasukan semalam RM 200–350. Klinik tanah tinggi Cameron mengenakan 10–15% lebih.' },
          { q: 'Anjing pemburu saya cedera akibat babi hutan berhampiran Jerantut — apa perlu saya buat?', a: 'Gading babi hutan menyebabkan luka penembusan dalam dengan risiko pencemaran tinggi. Kenakan tekanan kuat, JANGAN buang apa-apa yang tertanam, dan bergegas ke vet Jerantut, Temerloh atau Kuantan. Kos biasanya RM 1,500–4,500.' },
        ],
      },
      zh: {
        intro: "彭亨是西马最大州属，宠物急症情况在沿海关丹、而连突与立卑的低地森林、以及金马仑与云顶的凉爽高地之间差异巨大。眼镜王蛇与网纹蟒遭遇是林缘住宅的真实风险；榴梿与红毛丹季猎犬被野猪獠牙伤激增。11月至次年2月的季风常淹没北根、马兰与下淡马鲁。全州19间注册兽医诊所。无24小时兽医；最近在吉隆坡（3小时车程）。",
        caseStudy: "2023年12月，东海岸大道洪水使200多只宠物因主人撤离而被困北根。关丹SPCA展开5天船只救援，救回187只猫狗。整体兽医费用逾RM 80,000。此案如今是关丹SPCA『季风套装』运动的基础。",
        qas: [
          { q: '我的狗在立卑被疑似眼镜王蛇咬——现在怎么办？', a: '眼镜王蛇毒为强神经毒——症状（眼睑下垂、肢体无力、呼吸困难）30分钟内出现。切勿耽搁：速送关丹或吉隆坡。不建议绑止血带；应固定肢体让狗保持不动。' },
          { q: '如何为北根季风洪水准备宠物？', a: '准备贴标提箱，备食物、水、疫苗证书、牵绳与近照。确定两个高地撤离地点。立即为宠物植入芯片——彭亨DVS收费RM 30–60。' },
          { q: '关丹附近有24小时兽医吗？', a: '没有。关丹兽医晚上9–10点关门。真正的深夜紧急情况下，请经加叻大道驾车3小时到吉隆坡。多间关丹诊所提供下班后电话分诊。' },
          { q: '我的短毛狗在丹那拉打发抖——危险吗？', a: '是的——灵缇、法国斗牛犬、吉娃娃等薄毛品种在高地有真实失温风险。包裹抓绒，湿了擦干，置于温暖房间。若20分钟内仍发抖，立即就医。' },
          { q: '彭亨急诊费用多少？', a: '门诊RM 60–125、X光RM 80–140、血液检查RM 180–320、抗蛇毒血清RM 800–2,000每瓶、留院过夜RM 200–350。金马仑高地诊所多收10–15%。' },
          { q: '我的猎犬在而连突被野猪伤——怎么办？', a: '野猪獠牙造成深部穿透伤，污染风险极高。用力按压，切勿移除任何嵌入物，速送而连突、淡马鲁或关丹兽医。费用通常RM 1,500–4,500。' },
        ],
      },
    },
  },

  kelantan: {
    slug: 'kelantan',
    name: 'Kelantan',
    capital: 'Kota Bharu',
    majorCities: ['Kota Bharu', 'Pasir Mas', 'Tanah Merah', 'Gua Musang'],
    population: '1.92M',
    climate: 'East-coast monsoon Nov–Mar, severe annual flooding',
    topRisks: [
      'Severe annual monsoon flooding strands pets in Pasir Mas and Tumpat',
      'Flood-water leptospirosis and skin parasites post-monsoon',
      'Snake bites in Gua Musang forest-fringe communities',
      'Heatstroke during the dry season (Apr–Sep) inland',
    ],
    clinicCount: 14,
    consultationRange: 'RM 50–110',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '465 km / 6.5h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Kelantan (DVS Kelantan)', number: '+609-748 5500', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'Kelantan Animal Welfare Society (KAWAN)', number: '+6019-959 6960', type: 'rescue' },
      { name: 'Persatuan Haiwan Kota Bharu', number: '+6013-980 4488', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Kelantan's pet emergency calendar is dictated by the Nov–Mar northeast monsoon. Severe flooding in Pasir Mas, Tumpat and Tanah Merah strands hundreds of pets every year, and post-flood weeks bring waves of leptospirosis, mange and skin infections to Kota Bharu vets. Outside the monsoon, the dry season Apr–Sep brings heatstroke risk, particularly in the interior toward Gua Musang where temperatures regularly hit 35–37°C. The state has only 14 registered vet clinics — most concentrated in Kota Bharu — making rural access genuinely difficult. There is no 24-hour vet in Kelantan; the nearest is in Kuala Lumpur (6.5 hours via Gua Musang–Karak). Consultation fees RM 50–110 (among the lowest nationally). DVS Kelantan and KAWAN both run flood-rescue programmes that are well worth registering with before monsoon.",
        caseStudy: "The 2014 mega-flood killed an estimated 1,200 pets in Kelantan; the 2022 floods stranded over 600 in Pasir Mas alone. KAWAN volunteers used long-tail boats to rescue dogs from rooftops over a 9-day operation. Most survivors developed leptospirosis or mange within 2 weeks — DVS Kelantan ran free post-flood vaccination camps in 14 locations. The lesson Kelantan owners learned the hard way: register your pet on DVS Kelantan's flood database BEFORE the monsoon, and never assume the water will stop rising.",
        qas: [
          { q: 'How do I register my pet on DVS Kelantan\'s flood database?', a: 'Call DVS Kelantan at +609-748 5500 or visit the Kota Bharu office before October each year. Provide your pet\'s photo, microchip number, vaccination card and your home address. During floods, registered pets are prioritised in rescue operations and post-flood vaccination camps. Microchipping costs RM 30–60 — a small investment that has reunited many flood-displaced pets with owners.' },
          { q: 'My dog walked through Pasir Mas floodwater — should I worry about leptospirosis?', a: 'Yes, very much. Floodwater in Kelantan carries high leptospira loads from rat urine. Symptoms (fever, vomiting, yellow gums, reduced urination) appear 5–14 days after exposure and can be fatal. Take your dog to a Kota Bharu vet within 48 hours for prophylactic doxycycline (RM 80–180 for 14 days) — do not wait for symptoms.' },
          { q: 'Where is the nearest emergency vet to Kota Bharu after hours?', a: 'Kelantan has no 24-hour vet. Kota Bharu clinics close by 9 pm. For genuine emergencies overnight, the closest options are 6.5 hours away in Kuala Lumpur. Some Kota Bharu vets offer phone triage — store their numbers. The Wakaf Che Yeh and Pengkalan Chepa clinics tend to keep the longest hours.' },
          { q: 'My dog is panting heavily in Gua Musang at 36°C — what do I do?', a: 'Move to shade or air-conditioning immediately. Wet the belly, paws and ear flaps with cool (not iced) water. Offer small sips. If panting does not slow within 15 minutes, gums turn brick-red or blue, or your dog collapses, this is heatstroke — rush to the Gua Musang or nearest Kota Bharu vet. Inland Kelantan dry-season heat is consistently underestimated.' },
          { q: 'How much does emergency vet care cost in Kelantan?', a: 'Consultation RM 50–110, X-ray RM 70–130, leptospirosis prophylaxis RM 80–180, snake antivenom RM 800–1,500 per vial (very limited stock — call DVS first), overnight stay RM 150–280. Kelantan is among the most affordable states for routine and emergency vet care.' },
          { q: 'I cannot evacuate my dog before the flood — what should I do?', a: 'Move your dog to the highest level of your home with 5+ days of dry food and clean water in sealed containers. Tie a labelled collar with your phone number. Call KAWAN (+6019-959 6960) and DVS Kelantan immediately to register the address for rescue. Leave a leash visible. Do NOT chain or cage — this causes drowning if water reaches.' },
        ],
      },
      ms: {
        intro: "Kalendar kecemasan haiwan peliharaan Kelantan ditentukan oleh monsun timur laut Nov–Mac. Banjir teruk di Pasir Mas, Tumpat dan Tanah Merah mengandaskan ratusan haiwan peliharaan setiap tahun, dan minggu selepas banjir membawa gelombang leptospirosis, kudis dan jangkitan kulit ke vet Kota Bharu. Di luar monsun, musim kering Apr–Sep membawa risiko strok haba. Negeri ini hanya mempunyai 14 klinik vet berdaftar. Tiada vet 24 jam di Kelantan; terdekat di KL (6.5 jam).",
        caseStudy: "Banjir besar 2014 membunuh anggaran 1,200 haiwan peliharaan di Kelantan; banjir 2022 mengandaskan lebih 600 di Pasir Mas sahaja. Sukarelawan KAWAN menggunakan bot ekor panjang untuk menyelamatkan anjing dari bumbung selama operasi 9 hari. Pengajaran: daftar haiwan anda di pangkalan data banjir DVS Kelantan SEBELUM monsun.",
        qas: [
          { q: 'Bagaimana saya mendaftar haiwan saya di pangkalan data banjir DVS Kelantan?', a: 'Hubungi DVS Kelantan di +609-748 5500 atau lawati pejabat Kota Bharu sebelum Oktober setiap tahun. Sediakan foto haiwan, nombor microchip, kad vaksinasi dan alamat rumah. Semasa banjir, haiwan berdaftar diutamakan dalam operasi penyelamatan.' },
          { q: 'Anjing saya berjalan melalui air banjir Pasir Mas — perlu risau leptospirosis?', a: 'Ya, sangat. Air banjir di Kelantan membawa beban leptospira tinggi dari air kencing tikus. Gejala muncul 5–14 hari selepas pendedahan dan boleh membawa maut. Bawa anjing ke vet Kota Bharu dalam 48 jam untuk doxycycline profilaktik.' },
          { q: 'Di mana vet kecemasan terdekat dengan Kota Bharu selepas waktu kerja?', a: 'Kelantan tiada vet 24 jam. Klinik Kota Bharu tutup pada 9 malam. Untuk kecemasan malam sebenar, pilihan terdekat 6.5 jam di Kuala Lumpur.' },
          { q: 'Anjing saya termengah-mengah di Gua Musang pada 36°C — apa perlu saya buat?', a: 'Pindah ke teduh atau penghawa dingin segera. Basahkan perut, tapak kaki dan telinga dengan air sejuk. Tawarkan teguk kecil. Jika tidak perlahan dalam 15 minit, ini adalah strok haba — bergegas ke vet Gua Musang.' },
          { q: 'Berapa kos rawatan vet kecemasan di Kelantan?', a: 'Konsultasi RM 50–110, X-ray RM 70–130, profilaksis leptospirosis RM 80–180, antibisa ular RM 800–1,500, kemasukan semalam RM 150–280.' },
          { q: 'Saya tidak boleh evakuasi anjing sebelum banjir — apa perlu saya buat?', a: 'Pindah anjing ke tahap tertinggi rumah dengan 5+ hari makanan kering dan air bersih dalam bekas tertutup. Ikat kolar berlabel dengan nombor telefon. Hubungi KAWAN (+6019-959 6960) dan DVS Kelantan segera untuk mendaftar alamat untuk penyelamatan.' },
        ],
      },
      zh: {
        intro: "吉兰丹的宠物急症日历由11月至次年3月的东北季风决定。巴西马、道北与丹那美拉的严重洪灾每年使数百宠物被困，洪后数周钩端螺旋体病、疥癣与皮肤感染涌入哥打巴鲁兽医。季风之外，4–9月旱季带来中暑风险。全州仅14间注册兽医诊所。吉兰丹无24小时兽医；最近在吉隆坡（6.5小时）。",
        caseStudy: "2014年特大洪水估计致死吉兰丹1,200只宠物；2022年洪水仅巴西马就被困逾600只。KAWAN志愿者用长尾船从屋顶救援，历时9天。教训：在季风前到吉兰丹DVS洪水数据库登记。",
        qas: [
          { q: '如何在吉兰丹DVS洪水数据库登记宠物？', a: '每年10月前致电吉兰丹DVS（+609-748 5500）或前往哥打巴鲁办公室。提供宠物照片、芯片号、疫苗卡与住址。洪灾期间，登记宠物在救援行动中优先。' },
          { q: '我的狗走过巴西马洪水——要担心钩端螺旋体病吗？', a: '非常需要。吉兰丹洪水含高浓度鼠尿钩端螺旋体。症状在5–14天后出现，可能致命。48小时内带狗到哥打巴鲁兽医接受预防性多西环素。' },
          { q: '哥打巴鲁下班后最近的急诊兽医在哪里？', a: '吉兰丹无24小时兽医。哥打巴鲁诊所晚上9点关门。真正的深夜紧急情况下，最近的选项在吉隆坡（6.5小时车程）。' },
          { q: '我的狗在话望生36°C下大喘气——怎么办？', a: '立即移到阴凉处或冷气房。用凉水（非冰水）湿润腹部、脚掌与耳朵。少量喂水。15分钟内不缓解即为中暑——速送话望生兽医。' },
          { q: '吉兰丹急诊兽医费用多少？', a: '门诊RM 50–110、X光RM 70–130、钩端螺旋体预防RM 80–180、抗蛇毒血清RM 800–1,500每瓶、留院过夜RM 150–280。' },
          { q: '我无法在洪水前撤离我的狗——怎么办？', a: '将狗移到家中最高楼层，备5+天干粮与密封容器装的清水。系上写有电话号码的项圈。立即致电KAWAN（+6019-959 6960）与吉兰丹DVS登记地址供救援。切勿拴或笼养。' },
        ],
      },
    },
  },

  terengganu: {
    slug: 'terengganu',
    name: 'Terengganu',
    capital: 'Kuala Terengganu',
    majorCities: ['Kuala Terengganu', 'Kemaman', 'Dungun', 'Marang'],
    population: '1.27M',
    climate: 'East-coast monsoon Nov–Feb, oil-and-gas industrial coastline',
    topRisks: [
      'Sea-turtle nesting beach hazards (fishing line, plastic ingestion)',
      'Industrial-zone hydrocarbon poisoning around Kerteh and Paka',
      'Monsoon flooding in Setiu and Besut river basins',
      'Coastal saltwater otitis externa in Labrador-type breeds',
    ],
    clinicCount: 12,
    consultationRange: 'RM 60–120',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '450 km / 6h drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Terengganu (DVS Terengganu)', number: '+609-622 1700', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'Terengganu Animal Welfare Society', number: '+6019-983 6378', type: 'rescue' },
      { name: 'Pet Lovers Terengganu (PLT)', number: '+6011-2638 4577', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Terengganu's coastline shapes its pet emergency profile in unusual ways. Sea-turtle nesting beaches in Rantau Abang and Penarik bring fishing-line entanglement and plastic-ingestion cases to Kuala Terengganu vets. The Kerteh–Paka oil-and-gas corridor occasionally produces hydrocarbon-poisoning cases when dogs enter spill zones. The Nov–Feb monsoon floods Setiu and Besut river basins. With only 12 registered vet clinics — most clustered in Kuala Terengganu and Kemaman — rural access requires 1–2 hour drives. There is no 24-hour vet; the nearest is in Kuala Lumpur (6 hours via the LPT2). Coastal salt and humidity drive a constant baseline of ear infections (otitis externa), particularly in Labradors and golden retrievers favoured by oil-industry expat families. Consultation fees RM 60–120.",
        caseStudy: "A young Labrador in Kemaman swallowed a discarded turtle-nest fishing line during a beach walk in Penarik in 2023. The line passed into the small intestine and caused a 'string foreign body' obstruction — surgical removal at a Kuala Terengganu vet found 2.4 metres of nylon line. Total cost RM 4,800. Pet Lovers Terengganu now runs quarterly beach clean-ups of nesting areas with WWF Malaysia, partly to reduce these risks to dogs as well as turtles.",
        qas: [
          { q: 'My dog ate fishing line on Penarik beach — is this dangerous?', a: 'Yes, extremely. Linear foreign bodies (string, fishing line) cause intestinal pleating and perforation within 24–72 hours and are a true surgical emergency. Do NOT pull on any line visible from the mouth or anus — this can lacerate the intestine. Rush to a Kuala Terengganu vet immediately for X-ray and likely surgery. Survival depends on speed.' },
          { q: 'My dog walked through an oil spill near Kerteh — what should I do?', a: 'Do NOT let your dog lick the fur — hydrocarbons are highly toxic if ingested or aspirated. Wash thoroughly with mild dish soap (Sunlight, Fairy) repeatedly until water runs clear, rinse with fresh water, and dry. Watch for vomiting, drooling or breathing difficulty for 24 hours. If any appear, see a Kemaman or Kuala Terengganu vet immediately.' },
          { q: 'Where is the nearest 24-hour vet to Terengganu?', a: 'Terengganu has no 24-hour vet. Kuala Terengganu clinics close by 9–10 pm. The closest 24/7 facility is in KL (6 hours via LPT2). For overnight emergencies, call your regular vet first — many give phone triage and may reopen for life-threatening cases. The Chendering and Kemaman clinics tend to keep the longest hours.' },
          { q: 'My golden retriever has constant ear infections — why?', a: 'Terengganu\'s coastal humidity and frequent saltwater swimming create the perfect environment for yeast and bacterial otitis. Drop-eared breeds (Labradors, goldens, cocker spaniels) are at highest risk. Dry the ears after every swim, use a vet-prescribed ear cleanser weekly (RM 40–80 a bottle), and see a Kuala Terengganu vet at the first head-shake or smell.' },
          { q: 'How much does emergency vet care cost in Terengganu?', a: 'Consultation RM 60–120, X-ray RM 80–140, ultrasound RM 180–300, intestinal foreign-body surgery RM 2,500–6,000, blood panel RM 180–320, overnight stay RM 200–350. Bring your DVS pet licence — some clinics offer registered-owner discounts.' },
          { q: 'How do I prepare for monsoon flooding in Setiu?', a: 'Pack a labelled carrier with food, water, vaccination certs and a recent photo. Identify two evacuation destinations on higher ground. Microchip your pet (DVS Terengganu charges RM 30–60). Register with Pet Lovers Terengganu before October — they coordinate flood-rescue priority lists each year. Never leave pets behind in flood zones.' },
        ],
      },
      ms: {
        intro: "Garis pantai Terengganu membentuk profil kecemasan haiwan peliharaannya dengan cara yang tidak biasa. Pantai bersarang penyu di Rantau Abang dan Penarik membawa kes ikatan tali pancing dan pengambilan plastik ke vet Kuala Terengganu. Koridor minyak-dan-gas Kerteh–Paka kadang-kadang menghasilkan kes keracunan hidrokarbon. Negeri ini hanya mempunyai 12 klinik vet berdaftar. Tiada vet 24 jam; terdekat di Kuala Lumpur (6 jam).",
        caseStudy: "Seekor Labrador muda di Kemaman menelan tali pancing sarang penyu yang dibuang semasa berjalan di pantai Penarik pada 2023. Tali masuk ke usus kecil dan menyebabkan halangan 'jasad asing tali' — pembedahan menemui 2.4 meter tali nilon. Kos keseluruhan RM 4,800. Pet Lovers Terengganu kini menjalankan pembersihan pantai suku tahunan.",
        qas: [
          { q: 'Anjing saya makan tali pancing di pantai Penarik — adakah berbahaya?', a: 'Ya, sangat. Jasad asing linear menyebabkan lipatan usus dan perforasi dalam 24–72 jam dan merupakan kecemasan pembedahan sebenar. JANGAN tarik mana-mana tali yang kelihatan dari mulut atau dubur. Bergegas ke vet Kuala Terengganu segera.' },
          { q: 'Anjing saya berjalan melalui tumpahan minyak berhampiran Kerteh — apa perlu saya buat?', a: 'JANGAN biarkan anjing menjilat bulu — hidrokarbon adalah toksik tinggi jika ditelan. Cuci dengan sabun pinggan ringan (Sunlight) berulang kali, bilas dengan air bersih, dan keringkan. Perhatikan muntah, berliur atau sukar bernafas selama 24 jam.' },
          { q: 'Di mana vet 24 jam terdekat dengan Terengganu?', a: 'Terengganu tiada vet 24 jam. Klinik Kuala Terengganu tutup pada 9–10 malam. Kemudahan 24/7 terdekat di KL (6 jam).' },
          { q: 'Golden retriever saya mempunyai jangkitan telinga berterusan — kenapa?', a: 'Kelembapan pantai Terengganu dan berenang air laut kerap mencipta persekitaran sempurna untuk otitis yis dan bakteria. Baka bertelinga jatuh berisiko paling tinggi. Keringkan telinga selepas setiap renang, gunakan pembersih telinga preskripsi vet mingguan.' },
          { q: 'Berapa kos rawatan vet kecemasan di Terengganu?', a: 'Konsultasi RM 60–120, X-ray RM 80–140, ultrasound RM 180–300, pembedahan jasad asing usus RM 2,500–6,000, kemasukan semalam RM 200–350.' },
          { q: 'Bagaimana saya bersedia untuk banjir monsun di Setiu?', a: 'Pek pembawa berlabel dengan makanan, air, sijil vaksinasi dan foto terkini. Kenal pasti dua destinasi evakuasi tanah tinggi. Microchip haiwan anda. Daftar dengan Pet Lovers Terengganu sebelum Oktober.' },
        ],
      },
      zh: {
        intro: "登嘉楼海岸线以独特方式塑造其宠物急症格局。冷洞与百乃的海龟筑巢沙滩为瓜拉登嘉楼兽医带来钓鱼线缠绕与塑料误食案例。吉底—巴卡石油天然气走廊偶尔产生碳氢化合物中毒案例。全州仅12间注册兽医诊所。无24小时兽医；最近在吉隆坡（6小时车程）。",
        caseStudy: "2023年甘马挽一只年轻拉布拉多在百乃海滩散步时吞下海龟巢遗弃钓鱼线。鱼线进入小肠造成『线状异物』梗阻——瓜拉登嘉楼兽医手术取出2.4米尼龙线。总费用RM 4,800。Pet Lovers Terengganu现与马来西亚WWF合办季度筑巢沙滩清洁。",
        qas: [
          { q: '我的狗在百乃海滩吃了钓鱼线——危险吗？', a: '极其危险。线状异物在24–72小时内造成肠道褶皱与穿孔，是真正的手术急症。切勿拉扯口中或肛门可见的任何线——会撕裂肠道。立即送瓜拉登嘉楼兽医。' },
          { q: '我的狗走过吉底附近的油污——怎么办？', a: '切勿让狗舔毛——碳氢化合物吞食或吸入剧毒。用温和洗洁精（Sunlight）反复清洗至水清，清水冲净并擦干。24小时内观察呕吐、流口水或呼吸困难。' },
          { q: '登嘉楼最近的24小时兽医在哪里？', a: '登嘉楼无24小时兽医。瓜拉登嘉楼诊所晚上9–10点关门。最近的24/7设施在吉隆坡（6小时车程）。' },
          { q: '我的金毛持续耳道感染——为什么？', a: '登嘉楼沿海湿气与频繁海水游泳为酵母与细菌外耳炎创造完美环境。垂耳品种风险最高。每次游泳后擦干耳朵，每周使用兽医处方耳清洁剂。' },
          { q: '登嘉楼急诊兽医费用多少？', a: '门诊RM 60–120、X光RM 80–140、超声波RM 180–300、肠道异物手术RM 2,500–6,000、留院过夜RM 200–350。' },
          { q: '如何为实兆季风洪水做准备？', a: '准备贴标提箱，备食物、水、疫苗证书与近照。确定两个高地撤离地点。为宠物植入芯片。10月前向Pet Lovers Terengganu登记。' },
        ],
      },
    },
  },

  'negeri-sembilan': {
    slug: 'negeri-sembilan',
    name: 'Negeri Sembilan',
    capital: 'Seremban',
    majorCities: ['Seremban', 'Port Dickson', 'Nilai', 'Bahau'],
    population: '1.20M',
    climate: 'Inland humid with coastal Port Dickson belt',
    topRisks: [
      'Beach paw burns and saltwater eye irritation in Port Dickson',
      'Tick-borne ehrlichiosis in oil-palm fringes around Bahau and Kuala Pilah',
      'Highway-trauma cases on PLUS Seremban–KL stretch',
      'Snake bites in rural Jelebu rubber-estate communities',
    ],
    clinicCount: 17,
    consultationRange: 'RM 55–115',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '65 km / 50 min drive' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Negeri Sembilan (DVS NS)', number: '+606-762 7300', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Seremban', number: '+606-679 1290', type: 'rescue' },
      { name: 'Friends of the Strays NS', number: '+6012-294 0086', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Negeri Sembilan benefits from its proximity to Kuala Lumpur — Seremban pet owners can reach KL's 24-hour emergency vets in under an hour, which dramatically improves overnight outcomes compared to east-coast or Borneo states. Locally, the state has 17 registered vet clinics across Seremban, Nilai, Port Dickson and Bahau, with consultation fees of RM 55–115. Port Dickson coastal life brings paw burns from hot beach sand at midday and saltwater eye irritation. The PLUS Seremban–KL stretch produces a steady flow of vehicle-strike cases. Tick-borne ehrlichiosis is increasing in Bahau and Kuala Pilah's oil-palm fringe. There is no 24-hour vet within Negeri Sembilan itself, but the KL Cheras and Petaling Jaya emergency hospitals are the natural overnight referral destinations.",
        caseStudy: "A Beagle on a Port Dickson family holiday in May 2024 suffered second-degree paw burns after a midday walk on Teluk Kemang sand at 52°C surface temperature. The owner only noticed when the dog refused to walk that evening — by then blistering had begun. A Seremban vet treated the burns with hydrogel dressings and 10 days of antibiotics. Cost RM 1,200. The case is widely shared by SPCA Seremban every school-holiday season: the back-of-hand test (5 seconds barefoot) is mandatory before any beach or pavement walk between 11 am and 4 pm.",
        qas: [
          { q: 'My dog\'s paws are blistered after Port Dickson sand — what now?', a: 'Cool the paws with cold (not iced) water for 10 minutes. Do NOT pop blisters. Wrap loosely in a clean cloth and drive to a Seremban or Port Dickson vet. Beach paw burns at midday in Negeri Sembilan often need hydrogel dressings and antibiotics for 7–10 days. Always test sand or pavement with the back of your hand for 5 seconds before walking.' },
          { q: 'Where is the nearest 24-hour emergency vet to Seremban?', a: 'Negeri Sembilan has no 24-hour vet, but the KL Cheras and Petaling Jaya emergency hospitals are 50–80 minutes away via the PLUS or LEKAS highway. Several Seremban vets give after-hours phone triage and may reopen for true emergencies. Identify your preferred KL referral hospital before you need it — bookings are often required for major surgery.' },
          { q: 'My dog was hit on the PLUS near the Seremban exit — what do I do?', a: 'Move off the road safely first. Slide the dog onto a flat board (a folded jacket works) without bending the spine. Apply firm pressure to bleeding wounds. Do NOT give water. Drive to the nearest Seremban vet or — if condition is critical — straight to a KL 24-hour facility. Call ahead. Most vehicle-strike cases need X-rays and ultrasound for internal bleeding.' },
          { q: 'How do I know if my dog has tick fever in Bahau?', a: 'Tick-borne ehrlichiosis is increasing in Bahau and Kuala Pilah due to oil-palm fringes meeting residential expansion. Watch for lethargy, loss of appetite, pale gums, nosebleeds, bruising. A SNAP 4Dx test (RM 80–150) at any Bahau or Seremban vet confirms diagnosis. Doxycycline for 28 days is highly effective if caught early.' },
          { q: 'How much does emergency care cost in Negeri Sembilan?', a: 'Consultation RM 55–115, X-ray RM 70–130, ultrasound RM 150–250, blood panel RM 180–300, overnight stay RM 180–320. KL referral hospitals charge 30–50% more for the same services. Many Seremban owners do daytime workup locally and refer overnight cases only when truly needed.' },
          { q: 'My dog was bitten by a snake on a Jelebu rubber estate — what do I do?', a: 'Likely Malayan pit viper. Keep dog still (movement spreads venom), do NOT cut, suck or apply tourniquet. Carry to the car and drive immediately to a Seremban vet — call ahead, antivenom supply varies. Symptoms (swelling, bleeding, weakness) appear within 1–4 hours. Survival rate is high if antivenom reaches within 4 hours.' },
        ],
      },
      ms: {
        intro: "Negeri Sembilan mendapat manfaat daripada kedekatannya dengan Kuala Lumpur — pemilik haiwan peliharaan Seremban boleh sampai ke vet kecemasan 24 jam KL dalam masa kurang sejam. Secara tempatan, negeri ini mempunyai 17 klinik vet berdaftar dengan yuran konsultasi RM 55–115. Kehidupan pantai Port Dickson membawa luka tapak kaki akibat pasir pantai panas. Tiada vet 24 jam dalam Negeri Sembilan sendiri.",
        caseStudy: "Seekor Beagle dalam percutian keluarga di Port Dickson pada Mei 2024 mengalami luka tapak kaki darjah kedua selepas berjalan tengah hari di pasir Teluk Kemang pada suhu permukaan 52°C. Vet Seremban merawat dengan pembalut hidrogel dan antibiotik 10 hari. Kos RM 1,200.",
        qas: [
          { q: 'Tapak kaki anjing saya melepuh selepas pasir Port Dickson — sekarang apa?', a: 'Sejukkan tapak kaki dengan air sejuk selama 10 minit. JANGAN pecahkan lepuh. Balut longgar dengan kain bersih dan pandu ke vet Seremban atau Port Dickson. Luka tapak kaki pantai pada tengah hari sering memerlukan pembalut hidrogel dan antibiotik 7–10 hari.' },
          { q: 'Di mana vet kecemasan 24 jam terdekat dengan Seremban?', a: 'Negeri Sembilan tiada vet 24 jam, tetapi hospital kecemasan KL Cheras dan Petaling Jaya adalah 50–80 minit melalui PLUS atau LEKAS. Beberapa vet Seremban memberi triase telefon selepas waktu kerja.' },
          { q: 'Anjing saya dilanggar di PLUS berhampiran exit Seremban — apa perlu saya buat?', a: 'Pindah dari jalan dengan selamat dahulu. Geser anjing ke papan rata tanpa membengkokkan tulang belakang. Kenakan tekanan kuat pada luka berdarah. JANGAN beri air. Pandu ke vet Seremban terdekat atau terus ke kemudahan KL 24 jam.' },
          { q: 'Bagaimana saya tahu anjing saya menghidapi demam kutu di Bahau?', a: 'Ehrlichiosis berjangkit kutu meningkat di Bahau dan Kuala Pilah. Perhatikan kelesuan, hilang selera, gusi pucat, hidung berdarah. Ujian SNAP 4Dx (RM 80–150) di mana-mana vet Bahau atau Seremban mengesahkan diagnosis.' },
          { q: 'Berapa kos rawatan kecemasan di Negeri Sembilan?', a: 'Konsultasi RM 55–115, X-ray RM 70–130, ultrasound RM 150–250, panel darah RM 180–300, kemasukan semalam RM 180–320. Hospital rujukan KL mengenakan 30–50% lebih.' },
          { q: 'Anjing saya digigit ular di estet getah Jelebu — apa perlu saya buat?', a: 'Kemungkinan ular kapak Melayu. Pastikan anjing diam, JANGAN potong, hisap atau ikat. Bawa ke kereta dan terus ke vet Seremban — telefon dahulu, bekalan antibisa berbeza-beza.' },
        ],
      },
      zh: {
        intro: "森美兰受益于邻近吉隆坡——芙蓉宠物主人可在不到一小时内到达吉隆坡24小时急诊兽医。本地有17间注册兽医诊所，门诊费RM 55–115。波德申沿海生活带来热沙脚垫烫伤问题。森美兰州内无24小时兽医。",
        caseStudy: "2024年5月，一只比格犬在波德申家庭度假时，正午在丁加湾沙滩（表面温度52°C）行走后出现二度脚垫烫伤。芙蓉兽医以水凝胶敷料与10天抗生素治疗。费用RM 1,200。",
        qas: [
          { q: '我的狗在波德申沙滩后脚垫起水泡——现在怎么办？', a: '用冷水（非冰水）冷却脚掌10分钟。切勿戳破水泡。用干净布松松包裹并驾车到芙蓉或波德申兽医。正午海滩脚垫烫伤通常需水凝胶敷料与7–10天抗生素。' },
          { q: '芙蓉最近的24小时急诊兽医在哪里？', a: '森美兰无24小时兽医，但吉隆坡蕉赖与八打灵再也急诊医院经PLUS或LEKAS高速50–80分钟可达。' },
          { q: '我的狗在芙蓉出口附近被PLUS高速车撞——怎么办？', a: '先安全离开车道。将狗滑到平板上不要弯曲脊柱。用力按压出血伤口。切勿喂水。驾车到最近芙蓉兽医或直接去吉隆坡24小时设施。' },
          { q: '怎么知道我的狗在马口得了蜱热病？', a: '蜱传埃利希体病在马口与瓜拉庇朥呈上升趋势。注意精神不振、食欲减退、牙龈苍白、流鼻血。SNAP 4Dx检测（RM 80–150）可确诊。' },
          { q: '森美兰急诊费用多少？', a: '门诊RM 55–115、X光RM 70–130、超声波RM 150–250、血液检查RM 180–300、留院过夜RM 180–320。吉隆坡转诊医院费用高30–50%。' },
          { q: '我的狗在日叻务橡胶园被蛇咬——怎么办？', a: '可能是马来亚蝮蛇。让狗保持不动，切勿切开、吸吮或绑扎。抱上车直送芙蓉兽医——先打电话，抗蛇毒血清供应不一。' },
        ],
      },
    },
  },

  perlis: {
    slug: 'perlis',
    name: 'Perlis',
    capital: 'Kangar',
    majorCities: ['Kangar', 'Arau', 'Padang Besar', 'Kuala Perlis'],
    population: '0.29M',
    climate: 'Northern dry-wet, paddy plains, Thai-border interaction',
    topRisks: [
      'Cross-border rabies-vector concern from Thailand',
      'Heavy paddy-field pesticide exposure in Chuping and Arau',
      'Russell\'s viper bites in northern paddy belts',
      'Thermal stress in dry-season April–June (highest in Malaysia)',
    ],
    clinicCount: 5,
    consultationRange: 'RM 55–110',
    nearestHub: { name: 'Penang / Alor Setar', slug: 'penang', distance: '85 km / 1.25h to Alor Setar' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Perlis (DVS Perlis)', number: '+604-976 7777', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Perlis (Kangar)', number: '+6019-557 8932', type: 'rescue' },
      { name: 'Padang Besar Animal Welfare', number: '+6011-2030 5566', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Perlis is Malaysia's smallest and most northern state, and its pet emergency picture is shaped by paddy plains, Thai-border interaction and brutal April–June dry-season heat. With only about 5 small-animal vet clinics across Kangar, Arau and Kuala Perlis, choices are limited and consultation fees run RM 55–110. The Thai border at Padang Besar and Bukit Kayu Hitam makes rabies-vector concerns real — DVS Perlis runs free annual rabies vaccination drives and the boundary buffer zone is monitored. Paddy-field pesticide cases (especially in Chuping and Arau) and Russell's viper bites are routine spring-and-summer presentations. Dry-season temperatures regularly hit 36–38°C — the hottest in the country — making heatstroke the single biggest seasonal pet emergency. There is no 24-hour vet; nearest after-hours options are in Alor Setar (1.25 hours) or Penang (1.75 hours).",
        caseStudy: "A village dog in Padang Besar tested positive for rabies exposure in 2018 after contact with a stray that had crossed from Thailand — DVS Perlis ring-vaccinated 480 dogs and cats within a 5 km radius and conducted active surveillance for 6 months. No further cases occurred. The incident reinforced why Perlis pet owners — even those with strictly indoor cats — must keep rabies vaccination current. Annual vaccination is free at DVS Perlis camps held in Kangar, Arau and the border districts every March.",
        qas: [
          { q: 'Is rabies vaccination mandatory in Perlis?', a: 'Strongly recommended and effectively required given the Thai border. DVS Perlis runs free annual vaccination drives every March in Kangar, Arau, Padang Besar and Bukit Keteri. Bring your pet\'s ID. The vaccine is also stocked at all 5 Perlis vet clinics (RM 50–80 if obtained privately). Even strictly indoor cats should be vaccinated due to occasional bat exposure.' },
          { q: 'My dog went limp after walking through a Chuping paddy field — what do I do?', a: 'Watch for organophosphate poisoning symptoms within 30–90 minutes: drooling, constricted pupils, vomiting, muscle twitching, weakness. If any appear, this is a life-threatening emergency — rush to a Kangar vet immediately. Atropine is the antidote. Bring a sample of any visible spray residue. DVS Perlis tracks paddy-spray schedules — call ahead in spraying season.' },
          { q: 'Where is the nearest 24-hour vet to Perlis?', a: 'Perlis has no 24-hour vet, and only 5 clinics in total. After-hours options: Alor Setar (1.25 hours away) or Penang (1.75 hours). Most Kangar vets close by 9 pm. Identify your preferred backup before you need it — store the numbers and consider a relationship with at least one Alor Setar vet who already has your pet\'s records.' },
          { q: 'How hot is too hot for my dog to walk in Perlis dry season?', a: 'Perlis April–June surface temperatures regularly exceed 50°C between 11 am and 4 pm — the hottest in Malaysia. Walk only before 7:30 am or after 6:30 pm. The back-of-hand test (5 seconds bare hand on the road or sand) is non-negotiable. Brachycephalic breeds (pugs, French bulldogs) should not be walked outdoors at all between 10 am and 5 pm in dry season.' },
          { q: 'My dog was bitten by a snake in Arau paddy field — likely what?', a: 'Most likely Russell\'s viper or Malayan pit viper. Symptoms include swelling, bleeding from the bite site, weakness and dark urine within hours. Do NOT cut, suck or apply tourniquet. Carry the dog (do not let it walk) to the nearest Kangar vet. Antivenom availability varies — call DVS Perlis (+604-976 7777) if no clinic has stock; they can sometimes source from Alor Setar within 2 hours.' },
          { q: 'How much does emergency vet care cost in Perlis?', a: 'Consultation RM 55–110, X-ray RM 70–130, snake antivenom RM 800–1,500 per vial (call ahead), organophosphate treatment RM 800–2,500, overnight stay RM 150–280. Perlis fees are among the most affordable in Malaysia. Total emergency presentation typically RM 350–900 before any major treatment.' },
        ],
      },
      ms: {
        intro: "Perlis adalah negeri terkecil dan paling utara Malaysia, dan gambaran kecemasan haiwan peliharaannya dibentuk oleh dataran padi, interaksi sempadan Thai dan haba musim kering April–Jun yang teruk. Dengan hanya kira-kira 5 klinik vet haiwan kecil di seluruh Kangar, Arau dan Kuala Perlis, pilihan terhad dan yuran konsultasi RM 55–110. Sempadan Thai di Padang Besar membuat kebimbangan vektor rabies adalah nyata. Tiada vet 24 jam; pilihan terdekat di Alor Setar atau Pulau Pinang.",
        caseStudy: "Seekor anjing kampung di Padang Besar diuji positif untuk pendedahan rabies pada 2018 selepas hubungan dengan anjing liar yang menyeberang dari Thailand — DVS Perlis memvaksin 480 anjing dan kucing dalam radius 5 km dan menjalankan pengawasan aktif selama 6 bulan. Insiden ini mengukuhkan mengapa pemilik haiwan peliharaan Perlis mesti mengekalkan vaksinasi rabies.",
        qas: [
          { q: 'Adakah vaksinasi rabies wajib di Perlis?', a: 'Sangat disyorkan dan secara efektif diperlukan kerana sempadan Thai. DVS Perlis menjalankan pemanduan vaksinasi tahunan percuma setiap Mac di Kangar, Arau, Padang Besar dan Bukit Keteri. Bawa ID haiwan anda.' },
          { q: 'Anjing saya menjadi lemah selepas berjalan melalui sawah Chuping — apa perlu saya buat?', a: 'Perhatikan gejala keracunan organofosfat dalam 30–90 minit: berliur, anak mata mengecut, muntah, sentakan otot, lemah. Jika ada, ini kecemasan mengancam nyawa — bergegas ke vet Kangar segera. Atropine adalah penawar.' },
          { q: 'Di mana vet 24 jam terdekat dengan Perlis?', a: 'Perlis tiada vet 24 jam, dan hanya 5 klinik secara keseluruhan. Pilihan selepas waktu kerja: Alor Setar (1.25 jam) atau Pulau Pinang (1.75 jam). Kebanyakan vet Kangar tutup pada 9 malam.' },
          { q: 'Berapa panas terlalu panas untuk anjing saya berjalan di musim kering Perlis?', a: 'Suhu permukaan Perlis April–Jun kerap melebihi 50°C antara 11 pagi hingga 4 petang — paling panas di Malaysia. Berjalan hanya sebelum 7:30 pagi atau selepas 6:30 petang.' },
          { q: 'Anjing saya digigit ular di sawah Arau — kemungkinan apa?', a: 'Kemungkinan besar tedung Russell atau ular kapak Melayu. Gejala termasuk bengkak, pendarahan dari tapak gigitan, lemah dan kencing gelap. JANGAN potong, hisap atau ikat. Bawa anjing ke vet Kangar terdekat.' },
          { q: 'Berapa kos rawatan vet kecemasan di Perlis?', a: 'Konsultasi RM 55–110, X-ray RM 70–130, antibisa ular RM 800–1,500 sebotol, rawatan organofosfat RM 800–2,500, kemasukan semalam RM 150–280. Yuran Perlis antara paling mampu di Malaysia.' },
        ],
      },
      zh: {
        intro: "玻璃市是马来西亚最小最北的州属，宠物急症格局由稻田、泰国边境互动以及4–6月酷热旱季塑造。加央、亚娄与瓜拉玻璃市约5间小动物兽医诊所，选择有限，门诊费RM 55–110。巴东勿刹的泰国边境使狂犬病媒介隐忧真实存在。无24小时兽医；最近的选项在亚罗士打或槟城。",
        caseStudy: "2018年巴东勿刹一只乡村犬在与泰国越境流浪犬接触后被检出狂犬病暴露阳性——玻璃市DVS对5公里范围内480只猫狗实施环形疫苗接种并主动监测6个月。此事强化了玻璃市宠物主人必须保持狂犬疫苗有效的认知。",
        qas: [
          { q: '玻璃市强制接种狂犬疫苗吗？', a: '强烈建议，鉴于泰国边境实际上必须。玻璃市DVS每年3月在加央、亚娄、巴东勿刹与武吉吉地里举办免费疫苗活动。' },
          { q: '我的狗走过朱平稻田后无力——怎么办？', a: '在30–90分钟内观察有机磷中毒症状：流口水、瞳孔缩小、呕吐、肌肉抽动、虚弱。出现任何症状即为危及生命的急症——速送加央兽医。阿托品是解药。' },
          { q: '玻璃市最近的24小时兽医在哪里？', a: '玻璃市无24小时兽医，全州仅5间诊所。下班后选项：亚罗士打（1.25小时）或槟城（1.75小时）。多数加央兽医晚上9点关门。' },
          { q: '玻璃市旱季多热不能遛狗？', a: '玻璃市4–6月地面温度在上午11点至下午4点之间常超50°C——马来西亚最热。仅在早上7:30前或傍晚6:30后散步。' },
          { q: '我的狗在亚娄稻田被蛇咬——可能是什么？', a: '很可能是罗素蝰蛇或马来亚蝮蛇。症状包括肿胀、咬口出血、虚弱与深色尿。切勿切开、吸吮或绑扎。抱狗送最近的加央兽医。' },
          { q: '玻璃市急诊兽医费用多少？', a: '门诊RM 55–110、X光RM 70–130、抗蛇毒血清RM 800–1,500每瓶、有机磷治疗RM 800–2,500、留院过夜RM 150–280。玻璃市收费是马来西亚最实惠之一。' },
        ],
      },
    },
  },
  selangor: {
    slug: 'selangor',
    name: 'Selangor',
    capital: 'Shah Alam',
    majorCities: ['Shah Alam', 'Petaling Jaya', 'Subang Jaya', 'Klang', 'Kajang', 'Ampang'],
    population: '6.99M',
    climate: 'Lowland tropical, frequent flash floods in Klang Valley Nov–Mar',
    topRisks: [
      'Highway trauma — Federal Highway, NKVE and LDP account for most ER visits',
      'Heatstroke in condo dogs left in cars at PJ and Subang malls',
      'Leptospirosis after Klang Valley flash floods (Shah Alam, Klang, Ampang)',
      'Chocolate and grape poisoning during festive seasons in middle-class suburbs',
    ],
    clinicCount: 142,
    consultationRange: 'RM 70–180',
    nearestHub: { name: 'Petaling Jaya', slug: 'selangor', distance: '24/7 in PJ & Subang' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Selangor (DVS Selangor)', number: '+603-5519 1006', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Selangor (Ampang)', number: '+603-4256 5312', url: 'https://www.spca.org.my', type: 'rescue' },
      { name: 'Malaysian Animal Welfare Society (Subang)', number: '+6012-396 3133', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Selangor is Malaysia's most pet-dense state and the country's pet-emergency capital. With around 142 registered clinics across the Klang Valley — and at least 6 24-hour facilities clustered in Petaling Jaya, Subang Jaya, Shah Alam and Kajang — owners here have faster access to critical care than anywhere else in Malaysia. That density also reflects the volume of cases: highway trauma from the Federal Highway, NKVE, ELITE and LDP fills emergency rooms nightly, and the Klang Valley's Nov–Mar monsoon turns flash-flood-prone zones in Shah Alam Section 7, Taman Sri Muda and Ampang Jaya into leptospirosis hot spots within 24 hours of any major rain event. Consultation fees run RM 70–180 — the highest band in Malaysia after KL — but the trade-off is genuine 24/7 capacity, on-site CT in two PJ hospitals, and same-day antivenom availability through DVS Selangor's Shah Alam HQ.",
        caseStudy: "In Dec 2021, a Golden Retriever in Taman Sri Muda was rescued from chest-deep floodwater during the worst Klang Valley floods on record. Three days later he developed acute leptospirosis with kidney and liver involvement. A 24-hour PJ hospital ran 5 days of IV fluids, dialysis-equivalent therapy and doxycycline — total bill RM 8,400. He survived. Selangor SPCA later distributed 1,200 free doxycycline starter packs in Sri Muda and Shah Alam Section 7 within the next monsoon window.",
        qas: [
          { q: 'My dog was hit by a car on the Federal Highway — where do I go?', a: 'Drive to the nearest 24-hour vet — Petaling Jaya, Damansara, Subang Jaya, Bandar Sunway and Kajang all have one within 15–20 minutes from any Federal Highway exit. Call ahead. Do NOT lift a suspected spinal injury without supporting head-to-tail; slide a stiff board (cardboard, baking tray) under the dog and keep him flat in the car footwell.' },
          { q: 'Are there 24-hour vets in Selangor?', a: 'Yes — Selangor has at least 6 confirmed 24/7 emergency hospitals, mostly in Petaling Jaya (Damansara Jaya, Section 17, Kelana Jaya), Subang Jaya, Shah Alam Setia Alam and Kajang. Save 2 numbers in your phone now: one near home, one near work. Most accept walk-ins but call en route so they can prep IV fluids.' },
          { q: 'My cat walked through Klang Valley floodwater — what should I do?', a: 'Rinse the cat thoroughly with clean water and shampoo within an hour, paying attention to paws and belly. Watch for fever, vomiting, yellow gums or reduced urination over the next 5–14 days — those are leptospirosis warning signs. Selangor vets can run a SNAP Lepto test (RM 120–180) and start prophylactic doxycycline if exposure was significant.' },
          { q: 'How much does a Selangor emergency vet visit cost?', a: 'Consultation RM 70–180; after-hours surcharge RM 100–300. Common workups: bloodwork RM 180–350, X-ray RM 100–180 per view, ultrasound RM 200–400, IV fluids RM 100–180 per bag, overnight stay RM 250–500. CT scan available at 2 PJ hospitals RM 1,200–2,000. PJ and Subang are the most expensive cluster; Klang and Kajang typically run 15–20% lower.' },
          { q: 'My dog ate chocolate at our Hari Raya open house in Shah Alam — emergency?', a: 'Yes. Toxic dose is roughly 20mg theobromine per kg body weight — a 10kg dog hitting 200mg (around 30g of dark chocolate or 100g of milk chocolate) needs vet care within 2 hours. Drive to the nearest PJ, Shah Alam or Kajang vet for induced vomiting and activated charcoal. Bring the wrapper so the vet can calculate exact theobromine intake.' },
          { q: 'Where can I find affordable vet care in Selangor?', a: 'SPCA Selangor in Ampang runs subsidised consultations from RM 30 for verified low-income owners (B40). DVS Selangor mobile clinics also visit Sungai Buloh, Kuala Selangor and Sabak Bernam quarterly with free vaccinations and basic check-ups. For non-emergencies, vets in Klang, Kajang and Banting are typically 20–30% cheaper than PJ/Subang.' },
        ],
      },
      ms: {
        intro: "Selangor adalah negeri paling padat haiwan peliharaan di Malaysia dan ibu kota kecemasan haiwan negara. Dengan kira-kira 142 klinik berdaftar di seluruh Lembah Klang — dan sekurang-kurangnya 6 kemudahan 24 jam berkelompok di Petaling Jaya, Subang Jaya, Shah Alam dan Kajang — pemilik di sini mendapat akses kepada rawatan kritikal lebih cepat daripada mana-mana tempat lain di Malaysia. Kepadatan itu juga mencerminkan jumlah kes: trauma lebuhraya dari Lebuhraya Persekutuan, NKVE, ELITE dan LDP memenuhi bilik kecemasan setiap malam, dan musim tengkujuh Nov–Mac mengubah zon mudah banjir di Shah Alam Seksyen 7, Taman Sri Muda dan Ampang Jaya menjadi titik panas leptospirosis dalam masa 24 jam selepas hujan lebat. Yuran konsultasi RM 70–180 — band tertinggi di Malaysia selepas KL — tetapi imbangannya ialah kapasiti 24/7 sebenar, CT di dua hospital PJ, dan ketersediaan antibisa pada hari yang sama melalui ibu pejabat DVS Selangor di Shah Alam.",
        caseStudy: "Pada Disember 2021, seekor Golden Retriever di Taman Sri Muda diselamatkan dari air banjir paras dada semasa banjir Lembah Klang terburuk dalam rekod. Tiga hari kemudian dia mengalami leptospirosis akut dengan kerosakan buah pinggang dan hati. Hospital 24 jam di PJ menjalankan 5 hari cecair IV, terapi setara dialisis dan doxycycline — bil keseluruhan RM 8,400. Dia hidup. SPCA Selangor kemudian mengedarkan 1,200 pek permulaan doxycycline percuma di Sri Muda dan Shah Alam Seksyen 7 dalam tempoh tengkujuh berikutnya.",
        qas: [
          { q: 'Anjing saya dilanggar kereta di Lebuhraya Persekutuan — ke mana saya pergi?', a: 'Pandu ke vet 24 jam terdekat — Petaling Jaya, Damansara, Subang Jaya, Bandar Sunway dan Kajang semuanya mempunyai satu dalam 15–20 minit dari mana-mana keluar Lebuhraya Persekutuan. Telefon dahulu. JANGAN angkat kecederaan tulang belakang tanpa menyokong kepala-ke-ekor; selitkan papan keras (kadbod, dulang) di bawah anjing dan biarkan dia rata di ruang kaki kereta.' },
          { q: 'Adakah terdapat vet 24 jam di Selangor?', a: 'Ya — Selangor mempunyai sekurang-kurangnya 6 hospital kecemasan 24/7 yang disahkan, kebanyakannya di Petaling Jaya (Damansara Jaya, Seksyen 17, Kelana Jaya), Subang Jaya, Shah Alam Setia Alam dan Kajang. Simpan 2 nombor dalam telefon anda sekarang: satu dekat rumah, satu dekat kerja. Kebanyakan menerima masuk-tanpa-temujanji tetapi telefon semasa dalam perjalanan supaya mereka boleh sediakan cecair IV.' },
          { q: 'Kucing saya berjalan melalui air banjir Lembah Klang — apa perlu saya buat?', a: 'Bilas kucing dengan air bersih dan syampu dalam masa sejam, beri perhatian kepada tapak kaki dan perut. Perhatikan demam, muntah, gusi kuning atau kurang kencing dalam 5–14 hari berikutnya — itu tanda amaran leptospirosis. Vet Selangor boleh menjalankan ujian SNAP Lepto (RM 120–180) dan memulakan doxycycline profilaktik jika pendedahan ketara.' },
          { q: 'Berapa kos lawatan vet kecemasan Selangor?', a: 'Konsultasi RM 70–180; surcaj selepas waktu kerja RM 100–300. Pemeriksaan biasa: ujian darah RM 180–350, X-ray RM 100–180 sepandangan, ultrabunyi RM 200–400, cecair IV RM 100–180 sebeg, kemasukan semalam RM 250–500. Imbasan CT di 2 hospital PJ RM 1,200–2,000. PJ dan Subang kelompok paling mahal; Klang dan Kajang biasanya 15–20% lebih rendah.' },
          { q: 'Anjing saya makan coklat di rumah terbuka Hari Raya di Shah Alam — kecemasan?', a: 'Ya. Dos toksik kira-kira 20mg theobromine setiap kg berat badan — anjing 10kg yang mencapai 200mg (kira-kira 30g coklat gelap atau 100g coklat susu) memerlukan rawatan vet dalam 2 jam. Pandu ke vet PJ, Shah Alam atau Kajang terdekat untuk muntah teraruh dan karbon teraktif. Bawa pembalut supaya vet boleh mengira pengambilan theobromine tepat.' },
          { q: 'Di mana saya boleh dapatkan rawatan vet mampu milik di Selangor?', a: 'SPCA Selangor di Ampang menjalankan konsultasi bersubsidi dari RM 30 untuk pemilik berpendapatan rendah yang disahkan (B40). Klinik mudah alih DVS Selangor juga melawat Sungai Buloh, Kuala Selangor dan Sabak Bernam setiap suku tahun dengan vaksinasi percuma. Untuk bukan kecemasan, vet di Klang, Kajang dan Banting biasanya 20–30% lebih murah daripada PJ/Subang.' },
        ],
      },
      zh: {
        intro: "雪兰莪是马来西亚宠物密度最高的州属，也是全国宠物急症之都。巴生谷有约142间注册诊所——至少6间24小时设施集中在八打灵再也、梳邦再也、莎阿南与加影——这里的主人比马来西亚任何地方都能更快获得急救。这种密度也反映出案例数量：联邦大道、NKVE、ELITE与LDP的高速公路创伤每晚都填满急诊室，11月至3月的季风期使莎阿南第7区、斯里慕达花园与安邦再也等易涝区在大雨后24小时内成为钩端螺旋体病热点。门诊费RM 70–180——仅次于吉隆坡的全马最高一档——但回报是真正的24/7能力、两间PJ医院的CT扫描，以及通过DVS雪兰莪莎阿南总部当日可得的抗蛇毒血清。",
        caseStudy: "2021年12月，斯里慕达花园一只黄金猎犬在巴生谷史上最严重的水灾中从齐胸洪水中获救。三天后出现急性钩端螺旋体病并伴肾肝损伤。八打灵再也一间24小时医院进行5天输液、相当于透析的疗法与多西环素治疗——总账单RM 8,400。它活了下来。雪兰莪SPCA随后在下一个季风窗口前向斯里慕达与莎阿南第7区分发了1,200份免费多西环素入门包。",
        qas: [
          { q: '我的狗在联邦大道被车撞——去哪里？', a: '驾车前往最近的24小时兽医——八打灵再也、白沙罗、梳邦再也、Sunway与加影都在联邦大道任何出口的15–20分钟范围内。先致电。怀疑脊柱伤时切勿在无头尾支撑下抱起；将硬板（纸板、烤盘）滑入狗下方，让它平躺在车前脚位。' },
          { q: '雪兰莪有24小时兽医吗？', a: '有——雪兰莪至少有6家确认的24/7急诊医院，大多位于八打灵再也（白沙罗再也、第17区、格拉那再也）、梳邦再也、莎阿南实达阿南与加影。现在就将2个号码存入手机：一个靠家、一个靠公司。多数接受免预约就诊，但请在路上致电以便他们准备输液。' },
          { q: '我的猫走过巴生谷洪水——怎么办？', a: '一小时内用清水与洗发剂彻底冲洗猫，特别注意脚掌与腹部。在接下来的5–14天内观察发烧、呕吐、牙龈发黄或尿量减少——这些是钩端螺旋体病的警讯。雪兰莪兽医可做SNAP Lepto检测（RM 120–180），如暴露显著则开始预防性多西环素。' },
          { q: '雪兰莪急诊兽医费用多少？', a: '门诊RM 70–180；下班后附加费RM 100–300。常见检查：血检RM 180–350、X光RM 100–180每张、超声波RM 200–400、输液RM 100–180每袋、留院过夜RM 250–500。两间PJ医院提供CT扫描RM 1,200–2,000。PJ与梳邦是最贵的集群；巴生与加影通常便宜15–20%。' },
          { q: '我的狗在莎阿南开斋节开放门户上吃了巧克力——紧急吗？', a: '是的。中毒剂量约为每公斤体重20毫克可可碱——10公斤狗摄入200毫克（约30克黑巧克力或100克牛奶巧克力）需在2小时内就医。驾车前往最近的PJ、莎阿南或加影兽医进行催吐与活性炭治疗。带上包装纸以便兽医准确计算可可碱摄入量。' },
          { q: '雪兰莪哪里可以找到实惠的兽医服务？', a: '安邦的SPCA雪兰莪为经核实的低收入主人（B40）提供从RM 30起的补贴门诊。DVS雪兰莪流动诊所每季度也访问双溪毛糯、瓜拉雪兰莪与沙白安南，提供免费疫苗与基本检查。非紧急情况下，巴生、加影与万津的兽医通常比PJ/梳邦便宜20–30%。' },
        ],
      },
    },
  },

  'kuala-lumpur': {
    slug: 'kuala-lumpur',
    name: 'W.P. Kuala Lumpur',
    capital: 'Kuala Lumpur',
    majorCities: ['KLCC', 'Bangsar', 'Mont Kiara', 'Cheras', 'Setapak', 'Sentul'],
    population: '1.98M',
    climate: 'Urban heat island; haze episodes Aug–Oct; convective storms year-round',
    topRisks: [
      'Heatstroke in apartment dogs walked midday around KLCC and Bukit Bintang',
      'High-rise syndrome — falls from condo balconies in Mont Kiara, Bangsar South',
      'Air-pollution-triggered respiratory crises during Aug–Oct haze',
      'Foreign-object ingestion (skewers, satay sticks) from street-food districts',
    ],
    clinicCount: 67,
    consultationRange: 'RM 90–220',
    nearestHub: { name: 'Kuala Lumpur', slug: 'kuala-lumpur', distance: '24/7 within 10 km of city centre' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar W.P. Kuala Lumpur', number: '+603-2691 1622', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Selangor (serves KL)', number: '+603-4256 5312', url: 'https://www.spca.org.my', type: 'rescue' },
      { name: 'PAWS Animal Welfare Society', number: '+603-7846 1087', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Kuala Lumpur is the most expensive but best-equipped pet emergency market in Malaysia. Around 67 registered clinics serve the federal territory's 1.98 million residents, with at least 4 dedicated 24-hour hospitals in Bangsar, Mont Kiara, Sri Hartamas and Cheras offering full critical care including ICU, ventilator support and orthopaedic surgery. The downsides: KL's urban heat island routinely pushes street temperatures to 38°C+, brachycephalic breeds collapse from heatstroke even on short midday walks around KLCC, and balcony falls from high-rise condos in Mont Kiara, Bangsar South and KL Eco City are a weekly emergency. Aug–Oct haze episodes from regional fires send asthmatic and senior pets into respiratory crises. Consultation fees run RM 90–220, with after-hours surcharges of RM 150–400 — the highest in Malaysia, but you are also paying for staffed overnight ICU and on-site advanced imaging.",
        caseStudy: "In Sep 2023, a 4-year-old Persian cat in a Mont Kiara high-rise fell from a 12th-floor balcony chasing a moth. He survived — broken jaw, fractured pelvis, pneumothorax — after 14 hours of surgery and 8 days in a Bangsar 24-hour ICU. Bill: RM 22,400. The owner installed cat-proof balcony netting the same week, and the case was reposted by SPCA Selangor as part of their high-rise syndrome awareness campaign across KL condos.",
        qas: [
          { q: 'My dog collapsed during a midday walk near KLCC — is it heatstroke?', a: 'Almost certainly. KL pavement at noon hits 50–60°C and air temperature 35–38°C. Move to AC or shade immediately, wet the belly, paws and ear flaps with cool (NOT iced) water, and rush to the nearest Bukit Bintang, Bangsar or Sentul vet. Brachycephalic breeds (pugs, bulldogs, Shih Tzus) can die within 60 minutes once body temperature passes 41°C.' },
          { q: 'My cat fell from my Mont Kiara condo balcony — what now?', a: 'High-rise syndrome is a daily KL emergency. Even falls from the 5th floor and above can cause pneumothorax, fractured jaw and shattered limbs. Place the cat on a stiff surface (cutting board, baking tray), cover with a towel, and drive immediately to a Bangsar, Sri Hartamas or Mont Kiara 24-hour vet. Do NOT assume "cats always land on their feet" — that myth kills KL cats every week.' },
          { q: 'How much does a 24-hour vet visit cost in KL?', a: 'Consultation RM 90–220; after-hours surcharge RM 150–400. Bloodwork RM 200–380, X-ray RM 120–200 per view, ultrasound RM 250–450, CT scan RM 1,500–2,500, ICU stay RM 400–800 per night, full orthopaedic surgery RM 4,000–15,000. KL is the most expensive market in Malaysia — pet insurance pays for itself within one ER visit.' },
          { q: 'My dog ate a satay stick at Jalan Alor — emergency?', a: 'Yes — gastrointestinal obstruction or perforation is a true surgical emergency. Do NOT induce vomiting (a sharp stick coming back up causes more damage than going down). Drive to a Bukit Bintang, Bangsar or Cheras 24-hour vet immediately. The vet will X-ray and likely operate within hours. Outcome is excellent if treated within 12 hours, fatal if ignored beyond 24.' },
          { q: 'Is KL haze dangerous for my pet?', a: 'Yes. When API exceeds 100, walk pets only at dawn or after dark, keep windows shut, and run an air purifier in the room they sleep in. Senior dogs, cats with asthma, and brachycephalic breeds are at highest risk — watch for open-mouth breathing, blue-tinged gums, or collapse. Any of those needs an immediate KL vet visit.' },
          { q: 'Where can I find affordable vet care in KL?', a: 'PAWS in Subang and SPCA Selangor in Ampang both serve KL residents and offer subsidised spay-neuter and consultations from RM 30 for B40 households. DVS WPKL also runs free vaccination drives in Sentul, Cheras and Setapak twice a year. For routine care, vets in Cheras and Setapak typically charge 20–30% less than Bangsar or Mont Kiara.' },
        ],
      },
      ms: {
        intro: "Kuala Lumpur adalah pasaran kecemasan haiwan paling mahal tetapi paling lengkap di Malaysia. Kira-kira 67 klinik berdaftar berkhidmat untuk 1.98 juta penduduk wilayah persekutuan, dengan sekurang-kurangnya 4 hospital 24 jam khusus di Bangsar, Mont Kiara, Sri Hartamas dan Cheras menawarkan rawatan kritikal lengkap termasuk ICU, sokongan ventilator dan pembedahan ortopedik. Kelemahannya: pulau haba bandar KL menolak suhu jalan ke 38°C+, baka brakisefalik rebah akibat strok haba walaupun berjalan singkat tengah hari di sekitar KLCC, dan jatuh balkoni dari kondo tinggi di Mont Kiara, Bangsar South dan KL Eco City adalah kecemasan mingguan. Episod jerebu Ogos–Oktober menghantar haiwan asma dan tua ke krisis pernafasan. Yuran konsultasi RM 90–220, dengan surcaj selepas waktu kerja RM 150–400 — paling tinggi di Malaysia, tetapi anda juga membayar untuk ICU semalaman bersaiz penuh dan pengimejan lanjutan di tapak.",
        caseStudy: "Pada September 2023, seekor kucing Parsi berusia 4 tahun di sebuah kondo tinggi Mont Kiara jatuh dari balkoni tingkat 12 mengejar rama-rama. Dia hidup — rahang patah, pelvis retak, pneumotoraks — selepas 14 jam pembedahan dan 8 hari di ICU 24 jam Bangsar. Bil: RM 22,400. Pemilik memasang jaring balkoni kalis kucing pada minggu yang sama, dan kes itu disiarkan semula oleh SPCA Selangor sebagai sebahagian daripada kempen kesedaran sindrom bangunan tinggi mereka di kondo KL.",
        qas: [
          { q: 'Anjing saya rebah semasa berjalan tengah hari berhampiran KLCC — strok haba?', a: 'Hampir pasti. Turapan KL pada tengah hari mencecah 50–60°C dan suhu udara 35–38°C. Pindah ke AC atau teduh segera, basahkan perut, tapak kaki dan telinga dengan air sejuk (BUKAN ais), dan bergegas ke vet Bukit Bintang, Bangsar atau Sentul terdekat. Baka brakisefalik (pug, bulldog, Shih Tzu) boleh mati dalam 60 minit setelah suhu badan melepasi 41°C.' },
          { q: 'Kucing saya jatuh dari balkoni kondo Mont Kiara — apa sekarang?', a: 'Sindrom bangunan tinggi adalah kecemasan harian KL. Jatuh dari tingkat 5 ke atas pun boleh menyebabkan pneumotoraks, rahang patah dan anggota hancur. Letakkan kucing pada permukaan keras (papan pemotong, dulang), tutup dengan tuala, dan pandu segera ke vet 24 jam Bangsar, Sri Hartamas atau Mont Kiara. JANGAN andaikan "kucing sentiasa mendarat atas kaki" — mitos itu membunuh kucing KL setiap minggu.' },
          { q: 'Berapa kos lawatan vet 24 jam di KL?', a: 'Konsultasi RM 90–220; surcaj selepas waktu kerja RM 150–400. Ujian darah RM 200–380, X-ray RM 120–200 sepandangan, ultrabunyi RM 250–450, imbasan CT RM 1,500–2,500, kemasukan ICU RM 400–800 semalam, pembedahan ortopedik penuh RM 4,000–15,000. KL pasaran paling mahal di Malaysia — insurans haiwan peliharaan membayar diri sendiri dalam satu lawatan ER.' },
          { q: 'Anjing saya makan lidi satay di Jalan Alor — kecemasan?', a: 'Ya — halangan gastrointestinal atau perforasi adalah kecemasan pembedahan sebenar. JANGAN cetuskan muntah (lidi tajam yang naik kembali menyebabkan lebih banyak kerosakan daripada turun). Pandu ke vet 24 jam Bukit Bintang, Bangsar atau Cheras segera. Vet akan X-ray dan kemungkinan beroperasi dalam beberapa jam. Hasil sangat baik jika dirawat dalam 12 jam, mati jika diabaikan melebihi 24.' },
          { q: 'Adakah jerebu KL berbahaya untuk haiwan peliharaan saya?', a: 'Ya. Apabila API melebihi 100, jalan haiwan hanya pada subuh atau selepas gelap, tutup tingkap, dan jalankan penapis udara di bilik mereka tidur. Anjing tua, kucing asma, dan baka brakisefalik berisiko paling tinggi — perhatikan pernafasan mulut terbuka, gusi kebiruan, atau rebah. Mana-mana itu memerlukan lawatan vet KL segera.' },
          { q: 'Di mana saya boleh dapatkan rawatan vet mampu milik di KL?', a: 'PAWS di Subang dan SPCA Selangor di Ampang berkhidmat untuk penduduk KL dan menawarkan kasi-mandul bersubsidi serta konsultasi dari RM 30 untuk isi rumah B40. DVS WPKL juga menjalankan pemanduan vaksinasi percuma di Sentul, Cheras dan Setapak dua kali setahun. Untuk rawatan rutin, vet di Cheras dan Setapak biasanya mengenakan 20–30% kurang daripada Bangsar atau Mont Kiara.' },
        ],
      },
      zh: {
        intro: "吉隆坡是马来西亚最贵但设备最齐全的宠物急症市场。约67间注册诊所服务联邦直辖区198万居民，至少4间专门24小时医院位于孟沙、白沙罗岭、哈达玛斯与蕉赖，提供包括ICU、呼吸机支持与骨科手术在内的完整重症护理。缺点是：吉隆坡的城市热岛效应常使街道温度升至38°C以上，短鼻品种即使在KLCC一带短时间中午散步也会中暑昏倒，而白沙罗岭、孟沙南与吉隆坡生态城高层公寓的阳台坠落是每周都会发生的急症。8月至10月的烟霾期使哮喘与年长宠物陷入呼吸危机。门诊费RM 90–220，下班后附加费RM 150–400——马来西亚最高，但代价之中也包含全员配备的过夜ICU与现场高级影像。",
        caseStudy: "2023年9月，白沙罗岭一栋高层公寓里的一只4岁波斯猫在追蛾时从12楼阳台坠落。它活了下来——下颌骨折、骨盆骨折、气胸——在孟沙24小时ICU经历14小时手术与8天住院。账单：RM 22,400。主人当周即装上防猫阳台网，此案被雪兰莪SPCA转发为其针对吉隆坡公寓高层综合征宣传活动的一部分。",
        qas: [
          { q: '我的狗在KLCC附近中午散步时倒下——是中暑吗？', a: '几乎可以肯定。吉隆坡正午人行道温度达50–60°C，气温35–38°C。立即移到空调或阴凉处，用凉水（非冰水）湿润腹部、脚掌与耳朵，赶往最近的武吉免登、孟沙或Sentul兽医。短鼻品种（哈巴狗、斗牛犬、西施犬）一旦体温超过41°C，可能在60分钟内死亡。' },
          { q: '我的猫从孟沙公寓阳台坠落——现在怎么办？', a: '高层综合征是吉隆坡每天发生的急症。即使从5楼以上坠落也可能导致气胸、下颌骨折与四肢粉碎。将猫放在硬质表面（砧板、烤盘）上，盖上毛巾，立即驾车前往孟沙、哈达玛斯或白沙罗岭的24小时兽医。切勿假设「猫总是脚先着地」——这个神话每周都在杀死吉隆坡的猫。' },
          { q: '吉隆坡24小时兽医费用多少？', a: '门诊RM 90–220；下班后附加费RM 150–400。血检RM 200–380、X光RM 120–200每张、超声波RM 250–450、CT扫描RM 1,500–2,500、ICU过夜RM 400–800、完整骨科手术RM 4,000–15,000。吉隆坡是马来西亚最贵的市场——一次急诊就让宠物保险物有所值。' },
          { q: '我的狗在阿罗街吃了沙爹串——紧急吗？', a: '是的——肠胃阻塞或穿孔是真正的外科急症。切勿催吐（尖锐的木串向上时造成的伤害比向下时更大）。立即驾车前往武吉免登、孟沙或蕉赖的24小时兽医。兽医将X光检查并可能在数小时内手术。12小时内治疗效果极佳，超过24小时不予理会则致命。' },
          { q: '吉隆坡烟霾对我的宠物有危险吗？', a: '是的。当API超过100时，仅在黎明或天黑后遛宠物，关闭窗户，并在它们睡觉的房间运行空气净化器。年长狗、哮喘猫与短鼻品种风险最高——注意张嘴呼吸、牙龈发青或昏倒。任何一项都需立即就医。' },
          { q: '吉隆坡哪里可以找到实惠的兽医服务？', a: '梳邦的PAWS与安邦的雪兰莪SPCA都为吉隆坡居民服务，为B40家庭提供补贴绝育与从RM 30起的门诊。DVS WPKL每年两次在Sentul、蕉赖与Setapak举办免费疫苗活动。常规护理方面，蕉赖与Setapak的兽医通常比孟沙或白沙罗岭便宜20–30%。' },
        ],
      },
    },
  },

  johor: {
    slug: 'johor',
    name: 'Johor',
    capital: 'Johor Bahru',
    majorCities: ['Johor Bahru', 'Iskandar Puteri', 'Skudai', 'Batu Pahat', 'Kluang', 'Muar'],
    population: '4.01M',
    climate: 'Equatorial humid; double monsoon (Apr–May, Oct–Dec); cross-border haze',
    topRisks: [
      'Tick fever (ehrlichiosis) endemic across JB and Iskandar Puteri',
      'Singapore-border travel exposure (parvovirus, distemper from imported strays)',
      'Highway trauma on North-South Expressway around Senai and Yong Peng',
      'Mangrove crocodile and stingray injuries along Pontian and Kota Tinggi coast',
    ],
    clinicCount: 54,
    consultationRange: 'RM 60–150',
    nearestHub: { name: 'Johor Bahru', slug: 'johor', distance: '2 24-hour vets in JB' },
    contacts: [
      { name: 'Jabatan Perkhidmatan Veterinar Johor (DVS Johor)', number: '+607-224 2351', url: 'https://www.dvs.gov.my', type: 'dvs' },
      { name: 'SPCA Johor Bahru', number: '+607-355 5096', type: 'rescue' },
      { name: 'Independent Pet Rescuers Johor', number: '+6012-771 8810', type: 'rescue' },
      { name: 'Emergency Services', number: '999', type: 'emergency' },
    ],
    content: {
      en: {
        intro: "Johor's pet emergency profile is shaped by the Singapore border, the North-South Expressway and a long mangrove coast. Around 54 registered clinics serve the state's 4 million residents, with 2 confirmed 24-hour facilities in Johor Bahru and Iskandar Puteri — making JB the only southern emergency hub before Kuala Lumpur 4 hours north. Tick fever (ehrlichiosis and anaplasmosis) is genuinely endemic here: the brown dog tick thrives in JB's year-round humidity and most clinics see new cases weekly. Cross-border travel to Singapore brings its own risks — owners returning through CIQ are routinely warned about parvovirus and distemper from imported strays, particularly affecting unvaccinated puppies. Highway trauma on the NSE around Senai exit, Yong Peng and Air Hitam fills the JB ER late at night, and weekend visitors to Pontian and Kota Tinggi mangroves occasionally encounter saltwater crocodile and stingray injuries. Consultation fees RM 60–150 — significantly cheaper than KL but with similar 24/7 access in JB itself.",
        caseStudy: "In Mar 2024, a Maltipoo crossing into Singapore via Woodlands developed sudden vomiting and bloody diarrhoea on the return trip — parvovirus, almost certainly contracted in transit. The owner reached an Iskandar Puteri 24-hour vet within 90 minutes; the puppy spent 6 days in isolation ICU on IV fluids, antibiotics and antiemetics. Bill: RM 6,200. He survived. DVS Johor has since increased random vaccination spot-checks at the BSI checkpoint to reduce parvo introduction from across the border.",
        qas: [
          { q: 'My dog has tick fever symptoms in Johor Bahru — what should I do?', a: 'Lethargy, pale gums, nosebleeds, bruising on the belly and reduced appetite are classic ehrlichiosis signs in Johor. Take your dog to any JB or Iskandar Puteri vet today for a SNAP 4Dx test (RM 100–180). If positive, doxycycline for 28 days clears it — the earlier you treat, the better. Tick fever is endemic in Johor; monthly tick prevention is non-negotiable.' },
          { q: 'Are there 24-hour vets in Johor?', a: 'Yes — Johor Bahru has 2 confirmed 24/7 vet hospitals (one in JB city, one in Iskandar Puteri/Nusajaya). Together they cover most of southern and central Johor within a 1-hour drive. For Batu Pahat, Kluang and Muar residents, after-hours options thin out — call ahead and most vets in those towns will reopen for genuine emergencies.' },
          { q: 'My dog ate something during a trip to Singapore — emergency vet on return?', a: 'Yes if vomiting, bloody stool or extreme lethargy. Several Iskandar Puteri vets are within 15 minutes of the BSI checkpoint and the Tuas Second Link. For unvaccinated puppies returning from Singapore, watch carefully for parvo signs over the next 7 days — JB ER vets see imported parvo cases monthly.' },
          { q: 'How much does an emergency vet visit cost in Johor?', a: 'Consultation RM 60–150; after-hours surcharge RM 100–280. Bloodwork RM 150–300, X-ray RM 90–160 per view, ultrasound RM 180–350, IV fluids RM 80–150 per bag, overnight stay RM 200–400, ICU RM 350–650 per night. Johor runs roughly 25–35% cheaper than KL with comparable 24-hour capability in JB itself.' },
          { q: 'My dog was bitten by a snake in Kota Tinggi — what now?', a: 'Most likely a Sumatran spitting cobra or Malayan pit viper in Johor mangrove and rural areas. Keep the dog still, do NOT cut, suck or tourniquet. Drive to a JB or Kluang vet immediately and call ahead — antivenom is not stocked at every clinic and DVS Johor in JB can dispatch supply if needed. Time is muscle and kidney here; aim to be on antivenom within 2 hours.' },
          { q: 'Is the JB pet boarding licence still required?', a: 'Yes — DVS Johor requires registered boarders for any commercial pet boarding facility, including AirBnB-style pet hosts. Always ask to see the licence before leaving your pet. Unlicensed boarders are linked to most outbreaks of kennel cough, parvo and tick fever in JB; the saving is never worth the risk.' },
        ],
      },
      ms: {
        intro: "Profil kecemasan haiwan peliharaan Johor dibentuk oleh sempadan Singapura, Lebuhraya Utara-Selatan dan pantai bakau yang panjang. Kira-kira 54 klinik berdaftar berkhidmat untuk 4 juta penduduk negeri, dengan 2 kemudahan 24 jam yang disahkan di Johor Bahru dan Iskandar Puteri — menjadikan JB satu-satunya hab kecemasan selatan sebelum Kuala Lumpur 4 jam ke utara. Demam kutu (ehrlichiosis dan anaplasmosis) adalah endemik di sini: kutu anjing coklat berkembang dalam kelembapan JB sepanjang tahun dan kebanyakan klinik melihat kes baru setiap minggu. Perjalanan rentas sempadan ke Singapura membawa risikonya sendiri — pemilik yang pulang melalui CIQ secara rutin diberi amaran tentang parvovirus dan distemper daripada haiwan terbiar yang dibawa masuk. Trauma lebuhraya di NSE sekitar keluar Senai, Yong Peng dan Air Hitam mengisi ER JB pada larut malam. Yuran konsultasi RM 60–150 — jauh lebih murah daripada KL tetapi dengan akses 24/7 yang sama di JB sendiri.",
        caseStudy: "Pada Mac 2024, seekor Maltipoo yang menyeberang ke Singapura melalui Woodlands mengalami muntah mengejut dan cirit-birit berdarah dalam perjalanan pulang — parvovirus, hampir pasti dijangkiti dalam transit. Pemilik mencapai vet 24 jam Iskandar Puteri dalam 90 minit; anak anjing menghabiskan 6 hari di ICU pengasingan dengan cecair IV, antibiotik dan antiemetik. Bil: RM 6,200. Dia hidup. DVS Johor sejak itu meningkatkan pemeriksaan vaksinasi rawak di pos BSI untuk mengurangkan kemasukan parvo dari sempadan.",
        qas: [
          { q: 'Anjing saya mempunyai gejala demam kutu di Johor Bahru — apa perlu saya buat?', a: 'Lesu, gusi pucat, hidung berdarah, lebam pada perut dan kurang selera adalah tanda klasik ehrlichiosis di Johor. Bawa anjing ke mana-mana vet JB atau Iskandar Puteri hari ini untuk ujian SNAP 4Dx (RM 100–180). Jika positif, doxycycline selama 28 hari akan hilangkannya. Demam kutu endemik di Johor; pencegahan kutu bulanan tidak boleh dirunding.' },
          { q: 'Adakah terdapat vet 24 jam di Johor?', a: 'Ya — Johor Bahru mempunyai 2 hospital vet 24/7 yang disahkan (satu di bandar JB, satu di Iskandar Puteri/Nusajaya). Bersama-sama mereka meliputi kebanyakan Johor selatan dan tengah dalam pemanduan 1 jam. Untuk penduduk Batu Pahat, Kluang dan Muar, pilihan selepas waktu kerja menipis — telefon dahulu dan kebanyakan vet akan dibuka semula untuk kecemasan sebenar.' },
          { q: 'Anjing saya makan sesuatu semasa perjalanan ke Singapura — vet kecemasan semasa pulang?', a: 'Ya jika muntah, najis berdarah atau sangat lesu. Beberapa vet Iskandar Puteri berada dalam 15 minit dari pos BSI dan Tuas Second Link. Untuk anak anjing yang belum divaksin yang pulang dari Singapura, perhatikan dengan teliti tanda parvo dalam 7 hari berikutnya — vet ER JB melihat kes parvo import setiap bulan.' },
          { q: 'Berapa kos lawatan vet kecemasan di Johor?', a: 'Konsultasi RM 60–150; surcaj selepas waktu kerja RM 100–280. Ujian darah RM 150–300, X-ray RM 90–160 sepandangan, ultrabunyi RM 180–350, cecair IV RM 80–150 sebeg, kemasukan semalam RM 200–400, ICU RM 350–650 semalam. Johor kira-kira 25–35% lebih murah daripada KL dengan kemampuan 24 jam yang setanding di JB sendiri.' },
          { q: 'Anjing saya digigit ular di Kota Tinggi — apa sekarang?', a: 'Kemungkinan besar tedung Sumatera atau ular kapak Melayu di kawasan bakau dan luar bandar Johor. Pastikan anjing diam, JANGAN potong, hisap atau ikat. Pandu ke vet JB atau Kluang segera dan telefon dahulu — antibisa tidak distok di setiap klinik dan DVS Johor di JB boleh menghantar bekalan jika perlu. Sasarkan untuk berada dalam antibisa dalam 2 jam.' },
          { q: 'Adakah lesen penginapan haiwan JB masih diperlukan?', a: 'Ya — DVS Johor memerlukan penginap berdaftar untuk mana-mana kemudahan penginapan haiwan komersial, termasuk hos haiwan gaya AirBnB. Sentiasa minta untuk melihat lesen sebelum meninggalkan haiwan anda. Penginap tanpa lesen dikaitkan dengan kebanyakan wabak batuk kennel, parvo dan demam kutu di JB.' },
        ],
      },
      zh: {
        intro: "柔佛的宠物急症格局由新加坡边境、南北大道与漫长的红树林海岸塑造。约54间注册诊所服务全州400万居民，其中柔佛巴鲁与依斯干达公主城各有1间确认的24小时设施——使新山成为吉隆坡以南4小时车程内唯一的南部急症枢纽。蜱热（埃利希体病与无形体病）在此真正常态化：褐犬蜱在新山全年湿气中繁衍，多数诊所每周都见新病例。跨境前往新加坡带来其特有风险——从CIQ返程的主人常被提醒小心从外来流浪动物传入的细小病毒与犬瘟，未接种疫苗的幼犬尤其危险。深夜的南北大道在士乃出口、永平与亚音附近的车祸创伤填满新山急诊。门诊费RM 60–150——远比吉隆坡便宜，新山本身的24/7能力相当。",
        caseStudy: "2024年3月，一只马尔济斯×贵宾犬经兀兰前往新加坡，回程时突发呕吐与血便——细小病毒，几乎可以肯定在过境时感染。主人在90分钟内抵达依斯干达公主城的24小时兽医；幼犬在隔离ICU接受输液、抗生素与止吐治疗6天。账单：RM 6,200。它活了下来。柔佛DVS随后加强了BSI关卡的随机疫苗抽查，以减少跨境带入细小。",
        qas: [
          { q: '我的狗在柔佛巴鲁出现蜱热症状——怎么办？', a: '柔佛的埃利希体病典型症状包括嗜睡、牙龈苍白、鼻血、腹部瘀伤与食欲下降。今天就带狗去新山或依斯干达公主城任何兽医做SNAP 4Dx检测（RM 100–180）。若呈阳性，多西环素治疗28天可清除——越早治疗越好。蜱热在柔佛是常态化的；每月除蜱不能妥协。' },
          { q: '柔佛有24小时兽医吗？', a: '有——柔佛巴鲁有2间确认的24/7兽医院（一间在新山市区，一间在依斯干达公主城/努沙再也）。两者覆盖南柔佛与中柔佛大部分区域，1小时车程内可达。对于峇株巴辖、居銮与麻坡居民，下班后选择有限——请先致电，多数兽医会为真正紧急情况重新开门。' },
          { q: '我的狗在新加坡之旅中吃了东西——回程时需急诊吗？', a: '如果呕吐、血便或极度嗜睡，请立即就医。多间依斯干达公主城兽医距BSI关卡与第二通道（大士关卡）15分钟车程内。从新加坡返回的未接种疫苗幼犬，请在接下来7天密切观察细小病毒症状——新山急诊兽医每月都见进口细小病例。' },
          { q: '柔佛急诊兽医费用多少？', a: '门诊RM 60–150；下班后附加费RM 100–280。血检RM 150–300、X光RM 90–160每张、超声波RM 180–350、输液RM 80–150每袋、留院过夜RM 200–400、ICU RM 350–650每晚。柔佛收费约比吉隆坡便宜25–35%，新山本身具备相当的24小时能力。' },
          { q: '我的狗在哥打丁宜被蛇咬——现在怎么办？', a: '在柔佛红树林与乡村地区，最有可能是苏门答腊眼镜蛇或马来亚蝮蛇。让狗保持不动，切勿切开、吸吮或绑扎。立即驾车前往新山或居銮兽医并先致电——并非每家诊所都备有抗蛇毒血清，新山的柔佛DVS可在需要时调拨。目标是在2小时内开始抗蛇毒治疗。' },
          { q: '新山宠物寄宿牌照还是强制的吗？', a: '是的——柔佛DVS要求所有商业宠物寄宿设施（包括AirBnB式宠物寄养）须为注册寄养者。在留下宠物前务必要求查看牌照。无牌寄养与新山多数犬舍咳、细小与蜱热爆发相关；省下的费用永远不值这个风险。' },
        ],
      },
    },
  },
};

export const getStateProfile = (slug: string): StateProfile | null => {
  return STATE_PROFILES[slug] || null;
};

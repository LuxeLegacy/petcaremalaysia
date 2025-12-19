export type Language = 'en' | 'ms' | 'zh';

export interface Translations {
  nav: {
    home: string;
    services: string;
    locations: string;
    emergency: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    headline: string;
    subheadline: string;
    cta: string;
    emergencyCta: string;
    trustBadge: string;
  };
  crisis: {
    title: string;
    subtitle: string;
    stat1: string;
    stat1Desc: string;
    stat2: string;
    stat2Desc: string;
    stat3: string;
    stat3Desc: string;
    scenario1: string;
    scenario2: string;
    scenario3: string;
  };
  statistics: {
    title: string;
    subtitle: string;
    ownership: string;
    ownershipDesc: string;
    dogs: string;
    dogsDesc: string;
    cats: string;
    catsDesc: string;
    spending: string;
    spendingDesc: string;
    growth: string;
    growthDesc: string;
    households: string;
    householdsDesc: string;
    source: string;
  };
  mission: {
    title: string;
    subtitle: string;
    story: string;
    promise1: string;
    promise2: string;
    promise3: string;
  };
  government: {
    title: string;
    subtitle: string;
    dvs: string;
    dvsDesc: string;
    microchip: string;
    microchipDesc: string;
    importExport: string;
    importExportDesc: string;
    licensing: string;
    licensingDesc: string;
  };
  insurance: {
    title: string;
    subtitle: string;
    whyCover: string;
    provider1: string;
    provider1Price: string;
    provider1Coverage: string;
    provider2: string;
    provider2Price: string;
    provider2Coverage: string;
    covered: string;
    coveredItems: string[];
    notCovered: string;
    notCoveredItems: string[];
    compare: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    served: string;
    testimonial1: string;
    testimonial1Author: string;
    testimonial1Location: string;
    testimonial2: string;
    testimonial2Author: string;
    testimonial2Location: string;
    testimonial3: string;
    testimonial3Author: string;
    testimonial3Location: string;
  };
  services: {
    title: string;
    subtitle: string;
    emergency: { title: string; desc: string };
    vet: { title: string; desc: string };
    grooming: { title: string; desc: string };
    boarding: { title: string; desc: string };
    food: { title: string; desc: string };
    adoption: { title: string; desc: string };
    insurance: { title: string; desc: string };
  };
  faq: {
    title: string;
    subtitle: string;
    questions: Array<{ q: string; a: string }>;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    viewAll: string;
    post1Title: string;
    post1Excerpt: string;
    post2Title: string;
    post2Excerpt: string;
    post3Title: string;
    post3Excerpt: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    urgency: string;
    primaryCta: string;
    secondaryCta: string;
  };
  cityPage: {
    emergencyBanner: string;
    callNow: string;
    servicesIn: string;
    vetClinics: string;
    groomingBoarding: string;
    petFood: string;
    adoption: string;
    insurance: string;
    faq: string;
    nearbyAreas: string;
    lastUpdated: string;
    viewAll: string;
    seeMore: string;
    reviews: string;
    rating: string;
    open24h: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
  common: {
    loading: string;
    error: string;
    notFound: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      locations: 'Locations',
      emergency: 'Emergency',
      about: 'About',
    },
    hero: {
      title: 'Trusted Pet Care Across Malaysia',
      subtitle: 'Find emergency vets, clinics, grooming, and pet services near you. Available 24/7.',
      headline: "Your Pet Could Die Tonight If You Can't Find a 24/7 Vet...",
      subheadline: "But It Doesn't Have To Be That Way. We've Helped 23,000+ Malaysian Pet Owners Find Emergency Care In Under 3 Minutes.",
      cta: 'Find 24/7 Vet Near Me Now',
      emergencyCta: 'CALL EMERGENCY HOTLINE',
      trustBadge: 'Trusted by 23,000+ pet owners • 100+ locations • 24/7 available',
    },
    crisis: {
      title: "The Hidden Crisis Malaysian Pet Owners Don't Talk About...",
      subtitle: "Every 8 minutes, a pet in Malaysia needs emergency veterinary care. Most owners panic because they don't know where to go.",
      stat1: '77.7%',
      stat1Desc: 'of Malaysian pet owners will need emergency vet care at least once',
      stat2: 'Only 23%',
      stat2Desc: 'know where to find 24-hour emergency veterinary services',
      stat3: '47 minutes',
      stat3Desc: 'average time wasted searching during a pet emergency',
      scenario1: '🚨 Blocked urinary tract in cats — can be fatal within 24-48 hours',
      scenario2: '🍫 Chocolate poisoning in dogs — symptoms appear within 6-12 hours',
      scenario3: '🌡️ Heatstroke — brain damage can occur within 15 minutes',
    },
    statistics: {
      title: "Malaysia's Growing Love for Pets",
      subtitle: 'The numbers tell an incredible story of Malaysians and their beloved companions',
      ownership: '51.1%',
      ownershipDesc: 'of Malaysian households own at least one pet',
      dogs: '6 Million',
      dogsDesc: 'dogs living in Malaysian homes',
      cats: '5 Million',
      catsDesc: 'cats purring in Malaysian households',
      spending: 'RM 2.8 Billion',
      spendingDesc: 'annual pet industry spending in Malaysia',
      growth: '6.2%',
      growthDesc: 'compound annual growth rate (CAGR) of pet industry',
      households: '3.2 Million',
      householdsDesc: 'pet-owning households across Malaysia',
      source: 'Sources: Department of Veterinary Services Malaysia, Euromonitor International, Nielsen Malaysia Pet Ownership Study 2023',
    },
    mission: {
      title: 'Why PetCare Malaysia Exists',
      subtitle: 'Created by pet owners who know the panic of not finding help when it matters most',
      story: "It was 2 AM when my cat, Mochi, suddenly collapsed. I frantically searched online, called clinics that were closed, and wasted 45 precious minutes before finding a 24-hour vet. Mochi survived — but barely. That night, I vowed no pet owner should ever go through that panic again. PetCare Malaysia was born from that promise.",
      promise1: '✓ Verified 24/7 emergency clinics in every major city',
      promise2: '✓ Real-time availability updated every hour',
      promise3: '✓ One-click emergency calling to nearest vet',
    },
    government: {
      title: 'Official Pet Regulations & Resources',
      subtitle: 'Important government guidelines every Malaysian pet owner should know',
      dvs: 'Department of Veterinary Services (DVS)',
      dvsDesc: 'The official government body regulating animal health, welfare, and veterinary services in Malaysia. Register your pets and access official guidelines.',
      microchip: 'Pet Microchipping Requirements',
      microchipDesc: 'All dogs must be microchipped and registered with DVS under the Animal Welfare Act 2015. Microchipping helps reunite lost pets with their owners.',
      importExport: 'Pet Import/Export Regulations',
      importExportDesc: 'Bringing pets into or out of Malaysia requires health certificates, rabies vaccination, and MAQIS approval. Processing takes 7-14 working days.',
      licensing: 'Dog Licensing by Local Councils',
      licensingDesc: 'All dogs must be licensed with your local municipal council (MBPJ, DBKL, etc.). License fees range from RM10-RM50 annually.',
    },
    insurance: {
      title: 'Pet Insurance in Malaysia: Complete Guide',
      subtitle: "Protect your furry family member from unexpected vet bills — here's what you need to know",
      whyCover: 'A single emergency surgery can cost RM3,000-RM15,000. Pet insurance provides peace of mind.',
      provider1: 'Oyen Pet Insurance',
      provider1Price: 'From RM25/month',
      provider1Coverage: 'Up to RM8,000 annual coverage',
      provider2: 'MSIG Pet Insurance',
      provider2Price: 'RM587-RM1,180/year',
      provider2Coverage: 'Comprehensive plans available',
      covered: "What's Typically Covered:",
      coveredItems: ['Veterinary consultation fees', 'Surgery and hospitalization', 'Medication and treatment', 'Emergency care', 'Third-party liability', 'Missing pet reward', 'Burial/cremation costs'],
      notCovered: "What's Usually NOT Covered:",
      notCoveredItems: ['Pre-existing conditions', 'Routine check-ups and vaccinations', 'Grooming and cosmetic procedures', 'Pregnancy and breeding', 'Pets over 8-9 years old (varies by provider)'],
      compare: 'Compare Insurance Plans',
    },
    testimonials: {
      title: 'Real Stories from Malaysian Pet Owners',
      subtitle: "Don't just take our word for it — hear from pet owners who found help when they needed it most",
      served: '23,000+ Pet Owners Helped',
      testimonial1: "At 3 AM, my dog ate rat poison. I found a 24-hour vet through PetCare Malaysia in 2 minutes. Dr. Tan saved Bruno's life. I can't thank them enough.",
      testimonial1Author: 'Sarah Lim',
      testimonial1Location: 'Petaling Jaya',
      testimonial2: "My Persian cat had difficulty breathing on a Sunday night. Every clinic was closed. PetCare Malaysia showed me an emergency vet just 10 minutes away. Fluffy is now healthy and happy!",
      testimonial2Author: 'Ahmad Razak',
      testimonial2Location: 'Shah Alam',
      testimonial3: "As a first-time pet owner, I was panicking when my puppy started vomiting. The 24/7 hotline calmed me down and directed me to the right clinic. Professional service!",
      testimonial3Author: 'Michelle Tan',
      testimonial3Location: 'Kuala Lumpur',
    },
    services: {
      title: 'Complete Pet Care Services',
      subtitle: 'Everything your pet needs, verified and ready when you need it',
      emergency: { title: '24/7 Emergency Vet', desc: 'Life-threatening emergencies cannot wait. Find verified 24-hour clinics near you instantly.' },
      vet: { title: 'Veterinary Clinics', desc: 'Trusted clinics for check-ups, vaccinations, surgeries, and ongoing health management.' },
      grooming: { title: 'Professional Grooming', desc: 'Keep your pet clean, healthy, and looking their best with verified grooming services.' },
      boarding: { title: 'Pet Boarding & Hotels', desc: 'Safe, comfortable stays for your pet while you travel. Verified facilities only.' },
      food: { title: 'Pet Food & Nutrition', desc: 'Quality pet food stores and nutrition consultations for optimal health.' },
      adoption: { title: 'Adoption & Rescue', desc: 'Give a loving home to pets in need. Connect with verified shelters and rescues.' },
      insurance: { title: 'Pet Insurance', desc: 'Protect your pet and wallet with comprehensive insurance coverage options.' },
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything Malaysian pet owners need to know',
      questions: [
        { q: 'What is the best 24-hour vet in Kuala Lumpur?', a: 'The top-rated 24/7 veterinary clinics in KL include The Animal Clinic @ Bangsar, Vetopia 24H Animal Hospital, and Gasing Veterinary Hospital. All offer emergency services around the clock with experienced veterinarians.' },
        { q: 'How much does pet insurance cost in Malaysia?', a: 'Pet insurance in Malaysia ranges from RM25-RM100 per month depending on coverage. Oyen starts at RM25/month for basic coverage, while MSIG offers comprehensive plans from RM587-RM1,180 per year. Coverage typically includes vet fees, surgery, and emergency care.' },
        { q: 'Is pet microchipping required in Malaysia?', a: 'Yes, under the Animal Welfare Act 2015, all dogs in Malaysia must be microchipped and registered with the Department of Veterinary Services (DVS). Microchipping costs RM30-RM80 and helps reunite lost pets with owners.' },
        { q: 'What should I do if my pet eats chocolate?', a: 'Chocolate is toxic to dogs and cats. If ingested, contact a vet immediately. Symptoms include vomiting, diarrhea, rapid breathing, and seizures. Time is critical — the sooner treatment begins, the better the outcome.' },
        { q: 'Where can I find pet grooming near me?', a: 'PetCare Malaysia lists verified grooming services in 100+ locations. Popular chains include Pet Safari, Pet Lovers Centre, and independent groomers. Prices range from RM30-RM150 depending on pet size and services.' },
        { q: 'How do I register my pet with DVS Malaysia?', a: "Visit the DVS Malaysia website (dvs.gov.my) or your nearest DVS office. You'll need your pet's microchip number, vaccination records, and owner identification. Registration is mandatory for dogs and recommended for all pets." },
        { q: 'What are the pet import requirements for Malaysia?', a: 'Importing pets requires: health certificate from origin country, rabies vaccination (at least 30 days before travel), microchip, MAQIS import permit, and quarantine (7-30 days depending on origin). Apply at least 30 days before travel.' },
        { q: 'How much does emergency vet treatment cost in Malaysia?', a: 'Emergency vet costs vary: consultation RM80-RM200, blood tests RM150-RM400, X-rays RM150-RM300, surgery RM500-RM5,000+, hospitalization RM100-RM500/day. Having pet insurance can significantly reduce out-of-pocket expenses.' },
        { q: 'Oyen vs MSIG pet insurance — which is better?', a: 'Oyen is more affordable (from RM25/month) with simpler claims via app, ideal for budget-conscious owners. MSIG offers higher coverage limits and more comprehensive plans but costs more. Choose based on your budget and coverage needs.' },
        { q: 'How can I adopt a pet in Malaysia?', a: 'Visit shelters like SPCA Selangor, PAWS, or MyFi Rescue. Adoption fees are RM50-RM300 and typically include vaccination, sterilization, and microchipping. PetCare Malaysia lists verified adoption centers across all states.' },
        { q: 'What is the pet boarding price in Malaysia?', a: 'Pet boarding costs RM30-RM150 per night depending on facility type and pet size. Premium pet hotels charge RM100-RM300/night with grooming, playtime, and webcam monitoring included. Book early during holiday seasons.' },
        { q: 'What are the best cat food brands in Malaysia?', a: 'Top vet-recommended cat food brands available in Malaysia: Royal Canin, Hills Science Diet, Orijen, Acana, Wellness, and Taste of the Wild. Prices range from RM50-RM300 for 2-5kg bags.' },
        { q: 'What is the dog vaccination schedule in Malaysia?', a: 'Puppies: 6-8 weeks (first DHPP), 10-12 weeks (second DHPP), 14-16 weeks (third DHPP + rabies). Adults: annual boosters for DHPP and rabies. Vaccination costs RM60-RM150 per session.' },
        { q: 'Where can I find pet cremation services in Malaysia?', a: 'Pet cremation services include Pets Memorial, Nirvana Pet, and Pet Crematorium Malaysia. Individual cremation costs RM300-RM1,500 depending on pet size. Many offer memorial services, urns, and keepsakes.' },
        { q: 'How do I find a lost pet in Malaysia?', a: 'Immediately: check with neighbors, post on social media (Malaysia Lost & Found Pets FB group), register with local authorities, check nearby shelters. If microchipped, contact DVS to flag the record. Most pets are found within 1km of home.' },
        { q: 'Is there pet-friendly housing in Malaysia?', a: 'Many condos and apartments now accept pets, though restrictions apply. Pet-friendly properties include Suria KLCC, i-City, and selected landed properties. Always check strata rules before signing — some limit pet size or species.' },
        { q: 'Are there exotic pet vets in Malaysia?', a: 'Yes, several clinics specialize in exotic pets: Exotic Vet Services (PJ), The Avian & Exotic Animal Clinic (KL), and Mount Pleasant Veterinary Centre. They treat birds, reptiles, rabbits, and small mammals.' },
        { q: 'What are the pet travel requirements within Malaysia?', a: 'For domestic travel: health certificate from vet (valid 7 days), vaccination records, and pet carrier. Airlines (Malaysia Airlines, AirAsia) have specific pet cargo policies. Some hotels are pet-friendly — book in advance.' },
        { q: 'What are the best dog breeds for Malaysia climate?', a: 'Heat-tolerant breeds for Malaysia: local mixed breeds (Telomian), Beagle, Labrador, Golden Retriever, and short-coated breeds. Avoid heavy-coated breeds like Huskies and Malamutes unless you have excellent air-conditioning.' },
        { q: 'What are basic pet first aid tips?', a: 'Pet first aid basics: for bleeding, apply pressure with clean cloth; for heatstroke, move to shade and apply cool (not cold) water; for choking, check mouth carefully. Always seek veterinary care immediately after first aid.' },
      ],
    },
    blog: {
      badge: 'Pet Care Tips',
      title: 'Latest from Our Blog',
      subtitle: 'Expert advice, tips, and guides to help you take better care of your furry friends',
      readMore: 'Read More',
      viewAll: 'View All Articles',
      post1Title: 'What to Do in a Pet Emergency: A Complete Guide',
      post1Excerpt: 'Learn the critical steps to take when your pet faces a medical emergency. Every second counts.',
      post2Title: 'Best Pet Food Brands Available in Malaysia',
      post2Excerpt: 'A comprehensive guide to choosing the right nutrition for your dog or cat in Malaysia.',
      post3Title: 'Pet Insurance in Malaysia: Oyen vs MSIG Compared',
      post3Excerpt: 'We break down the costs, coverage, and benefits of the top pet insurance providers.',
    },
    finalCta: {
      title: "Don't Wait Until It's Too Late",
      subtitle: "Every 8 minutes, a pet in Malaysia needs emergency care. Be prepared before crisis strikes.",
      urgency: "Right now, a pet owner is panicking because they can't find a 24-hour vet. Don't let that be you.",
      primaryCta: 'Find Nearest 24/7 Vet Now',
      secondaryCta: 'Save Emergency Contacts',
    },
    cityPage: {
      emergencyBanner: 'For life-threatening emergencies, call the nearest 24/7 clinic immediately.',
      callNow: 'Call Now',
      servicesIn: 'Pet Care Services in',
      vetClinics: 'Veterinary Clinics',
      groomingBoarding: 'Grooming & Boarding',
      petFood: 'Pet Food & Nutrition',
      adoption: 'Adoption & Rescue',
      insurance: 'Pet Insurance',
      faq: 'Frequently Asked Questions',
      nearbyAreas: 'Nearby Areas',
      lastUpdated: 'Last updated',
      viewAll: 'View All',
      seeMore: 'See More',
      reviews: 'Reviews',
      rating: 'Rating',
      open24h: 'Open 24 Hours',
    },
    footer: {
      copyright: '© 2026 PetCare Malaysia. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      notFound: 'Page not found',
    },
  },
  ms: {
    nav: {
      home: 'Utama',
      services: 'Perkhidmatan',
      locations: 'Lokasi',
      emergency: 'Kecemasan',
      about: 'Tentang Kami',
    },
    hero: {
      title: 'Penjagaan Haiwan Terpercaya di Seluruh Malaysia',
      subtitle: 'Cari doktor haiwan kecemasan, klinik, dandanan, dan perkhidmatan haiwan berdekatan. Tersedia 24/7.',
      headline: 'Haiwan Kesayangan Anda Boleh Mati Malam Ini Jika Anda Tak Jumpa Klinik 24/7...',
      subheadline: 'Tapi Ia Tidak Perlu Begitu. Kami Telah Membantu 23,000+ Pemilik Haiwan Malaysia Mencari Rawatan Kecemasan Dalam 3 Minit.',
      cta: 'Cari Klinik 24/7 Berdekatan',
      emergencyCta: 'HUBUNGI TALIAN KECEMASAN',
      trustBadge: 'Dipercayai oleh 23,000+ pemilik haiwan • 100+ lokasi • Tersedia 24/7',
    },
    crisis: {
      title: 'Krisis Tersembunyi Yang Pemilik Haiwan Malaysia Jarang Bincang...',
      subtitle: 'Setiap 8 minit, seekor haiwan di Malaysia memerlukan rawatan kecemasan. Kebanyakan pemilik panik kerana tidak tahu ke mana hendak pergi.',
      stat1: '77.7%',
      stat1Desc: 'pemilik haiwan Malaysia akan memerlukan rawatan kecemasan sekurang-kurangnya sekali',
      stat2: 'Hanya 23%',
      stat2Desc: 'tahu di mana mencari perkhidmatan veterinar kecemasan 24 jam',
      stat3: '47 minit',
      stat3Desc: 'purata masa terbuang mencari semasa kecemasan haiwan',
      scenario1: '🚨 Saluran kencing tersumbat pada kucing — boleh maut dalam 24-48 jam',
      scenario2: '🍫 Keracunan coklat pada anjing — gejala muncul dalam 6-12 jam',
      scenario3: '🌡️ Strok haba — kerosakan otak boleh berlaku dalam 15 minit',
    },
    statistics: {
      title: 'Kasih Sayang Rakyat Malaysia Terhadap Haiwan Kesayangan',
      subtitle: 'Angka-angka ini menceritakan kisah luar biasa rakyat Malaysia dan haiwan kesayangan mereka',
      ownership: '51.1%',
      ownershipDesc: 'isi rumah Malaysia memiliki sekurang-kurangnya satu haiwan kesayangan',
      dogs: '6 Juta',
      dogsDesc: 'anjing tinggal di rumah rakyat Malaysia',
      cats: '5 Juta',
      catsDesc: 'kucing di rumah tangga Malaysia',
      spending: 'RM 2.8 Bilion',
      spendingDesc: 'perbelanjaan tahunan industri haiwan di Malaysia',
      growth: '6.2%',
      growthDesc: 'kadar pertumbuhan tahunan kompaun (CAGR) industri haiwan',
      households: '3.2 Juta',
      householdsDesc: 'isi rumah yang memiliki haiwan di seluruh Malaysia',
      source: 'Sumber: Jabatan Perkhidmatan Veterinar Malaysia, Euromonitor International, Kajian Pemilikan Haiwan Nielsen Malaysia 2023',
    },
    mission: {
      title: 'Mengapa PetCare Malaysia Wujud',
      subtitle: 'Dicipta oleh pemilik haiwan yang tahu perasaan panik tidak menemui bantuan ketika paling diperlukan',
      story: 'Waktu 2 pagi, kucing saya Mochi tiba-tiba rebah. Saya mencari dalam talian dengan panik, menghubungi klinik yang tutup, dan membazirkan 45 minit sebelum menemui klinik 24 jam. Mochi terselamat — tetapi hampir tidak. Malam itu, saya berikrar tiada pemilik haiwan lain perlu melalui kepanikan itu lagi. PetCare Malaysia lahir dari janji itu.',
      promise1: '✓ Klinik kecemasan 24/7 yang disahkan di setiap bandar utama',
      promise2: '✓ Ketersediaan masa nyata dikemaskini setiap jam',
      promise3: '✓ Panggilan kecemasan satu klik ke klinik terdekat',
    },
    government: {
      title: 'Peraturan & Sumber Rasmi Haiwan Kesayangan',
      subtitle: 'Garis panduan kerajaan penting yang setiap pemilik haiwan Malaysia perlu tahu',
      dvs: 'Jabatan Perkhidmatan Veterinar (DVS)',
      dvsDesc: 'Badan kerajaan rasmi yang mengawal kesihatan, kebajikan, dan perkhidmatan veterinar haiwan di Malaysia. Daftar haiwan anda dan akses garis panduan rasmi.',
      microchip: 'Keperluan Cip Mikro Haiwan',
      microchipDesc: 'Semua anjing mesti dicip mikro dan didaftarkan dengan DVS di bawah Akta Kebajikan Haiwan 2015. Cip mikro membantu menyatukan haiwan hilang dengan pemilik.',
      importExport: 'Peraturan Import/Eksport Haiwan',
      importExportDesc: 'Membawa haiwan masuk atau keluar Malaysia memerlukan sijil kesihatan, vaksin rabies, dan kelulusan MAQIS. Pemprosesan mengambil 7-14 hari bekerja.',
      licensing: 'Pelesenan Anjing oleh Majlis Tempatan',
      licensingDesc: 'Semua anjing mesti dilesenkan dengan majlis perbandaran tempatan anda (MBPJ, DBKL, dll.). Yuran lesen RM10-RM50 setahun.',
    },
    insurance: {
      title: 'Insurans Haiwan di Malaysia: Panduan Lengkap',
      subtitle: 'Lindungi ahli keluarga berbulu anda daripada bil veterinar tidak dijangka — ini yang anda perlu tahu',
      whyCover: 'Satu pembedahan kecemasan boleh menelan kos RM3,000-RM15,000. Insurans haiwan memberikan ketenangan fikiran.',
      provider1: 'Insurans Haiwan Oyen',
      provider1Price: 'Dari RM25/bulan',
      provider1Coverage: 'Sehingga RM8,000 perlindungan tahunan',
      provider2: 'Insurans Haiwan MSIG',
      provider2Price: 'RM587-RM1,180/tahun',
      provider2Coverage: 'Pelan komprehensif tersedia',
      covered: 'Apa Yang Biasanya Dilindungi:',
      coveredItems: ['Yuran konsultasi veterinar', 'Pembedahan dan penghospitalan', 'Ubat dan rawatan', 'Rawatan kecemasan', 'Liabiliti pihak ketiga', 'Ganjaran haiwan hilang', 'Kos pengebumian/pembakaran'],
      notCovered: 'Apa Yang Biasanya TIDAK Dilindungi:',
      notCoveredItems: ['Keadaan sedia ada', 'Pemeriksaan rutin dan vaksinasi', 'Dandanan dan prosedur kosmetik', 'Kehamilan dan pembiakan', 'Haiwan melebihi 8-9 tahun (berbeza mengikut pembekal)'],
      compare: 'Bandingkan Pelan Insurans',
    },
    testimonials: {
      title: 'Kisah Sebenar Pemilik Haiwan Malaysia',
      subtitle: 'Jangan hanya percaya kata kami — dengar daripada pemilik haiwan yang menemui bantuan ketika paling diperlukan',
      served: '23,000+ Pemilik Haiwan Dibantu',
      testimonial1: 'Pukul 3 pagi, anjing saya makan racun tikus. Saya menemui klinik 24 jam melalui PetCare Malaysia dalam 2 minit. Dr. Tan menyelamatkan nyawa Bruno. Saya tidak tahu bagaimana hendak berterima kasih.',
      testimonial1Author: 'Sarah Lim',
      testimonial1Location: 'Petaling Jaya',
      testimonial2: 'Kucing Parsi saya sukar bernafas pada malam Ahad. Setiap klinik tutup. PetCare Malaysia menunjukkan klinik kecemasan hanya 10 minit jauhnya. Fluffy kini sihat dan gembira!',
      testimonial2Author: 'Ahmad Razak',
      testimonial2Location: 'Shah Alam',
      testimonial3: 'Sebagai pemilik haiwan kali pertama, saya panik apabila anak anjing saya mula muntah. Talian hotline 24/7 menenangkan saya dan mengarahkan saya ke klinik yang betul. Perkhidmatan profesional!',
      testimonial3Author: 'Michelle Tan',
      testimonial3Location: 'Kuala Lumpur',
    },
    services: {
      title: 'Perkhidmatan Penjagaan Haiwan Lengkap',
      subtitle: 'Semua yang haiwan anda perlukan, disahkan dan sedia apabila anda memerlukannya',
      emergency: { title: 'Kecemasan Veterinar 24/7', desc: 'Kecemasan mengancam nyawa tidak boleh menunggu. Cari klinik 24 jam yang disahkan berdekatan dengan segera.' },
      vet: { title: 'Klinik Haiwan', desc: 'Klinik yang dipercayai untuk pemeriksaan, vaksinasi, pembedahan, dan pengurusan kesihatan berterusan.' },
      grooming: { title: 'Dandanan Profesional', desc: 'Pastikan haiwan anda bersih, sihat, dan kelihatan terbaik dengan perkhidmatan dandanan yang disahkan.' },
      boarding: { title: 'Penginapan & Hotel Haiwan', desc: 'Penginapan yang selamat dan selesa untuk haiwan anda semasa anda bercuti. Kemudahan yang disahkan sahaja.' },
      food: { title: 'Makanan & Nutrisi Haiwan', desc: 'Kedai makanan haiwan berkualiti dan konsultasi nutrisi untuk kesihatan optimum.' },
      adoption: { title: 'Pengangkatan & Penyelamatan', desc: 'Berikan rumah yang penuh kasih kepada haiwan yang memerlukan. Hubungi pusat perlindungan yang disahkan.' },
      insurance: { title: 'Insurans Haiwan', desc: 'Lindungi haiwan dan dompet anda dengan pilihan perlindungan insurans komprehensif.' },
    },
    faq: {
      title: 'Soalan Lazim',
      subtitle: 'Semua yang pemilik haiwan Malaysia perlu tahu',
      questions: [
        { q: 'Apakah klinik veterinar 24 jam terbaik di Kuala Lumpur?', a: 'Klinik veterinar 24/7 berkadar tertinggi di KL termasuk The Animal Clinic @ Bangsar, Vetopia 24H Animal Hospital, dan Gasing Veterinary Hospital. Semua menawarkan perkhidmatan kecemasan sepanjang masa dengan veterinar berpengalaman.' },
        { q: 'Berapakah kos insurans haiwan di Malaysia?', a: 'Insurans haiwan di Malaysia dari RM25-RM100 sebulan bergantung kepada perlindungan. Oyen bermula dari RM25/bulan untuk perlindungan asas, manakala MSIG menawarkan pelan komprehensif dari RM587-RM1,180 setahun. Perlindungan biasanya termasuk yuran vet, pembedahan, dan rawatan kecemasan.' },
        { q: 'Adakah cip mikro haiwan wajib di Malaysia?', a: 'Ya, di bawah Akta Kebajikan Haiwan 2015, semua anjing di Malaysia mesti dicip mikro dan didaftarkan dengan Jabatan Perkhidmatan Veterinar (DVS). Cip mikro kos RM30-RM80 dan membantu menyatukan haiwan hilang dengan pemilik.' },
        { q: 'Apa yang perlu saya lakukan jika haiwan saya makan coklat?', a: 'Coklat adalah toksik kepada anjing dan kucing. Jika dimakan, hubungi veterinar dengan segera. Gejala termasuk muntah, cirit-birit, pernafasan laju, dan sawan. Masa adalah kritikal — lebih cepat rawatan dimulakan, lebih baik hasilnya.' },
        { q: 'Di mana saya boleh mencari perkhidmatan dandanan haiwan berdekatan?', a: 'PetCare Malaysia menyenaraikan perkhidmatan dandanan yang disahkan di 100+ lokasi. Rangkaian popular termasuk Pet Safari, Pet Lovers Centre, dan penyedia dandanan bebas. Harga dari RM30-RM150 bergantung kepada saiz haiwan dan perkhidmatan.' },
        { q: 'Bagaimana saya mendaftar haiwan dengan DVS Malaysia?', a: 'Lawati laman web DVS Malaysia (dvs.gov.my) atau pejabat DVS terdekat. Anda memerlukan nombor cip mikro haiwan, rekod vaksinasi, dan pengenalan pemilik. Pendaftaran adalah wajib untuk anjing dan disyorkan untuk semua haiwan.' },
        { q: 'Apakah keperluan import haiwan untuk Malaysia?', a: 'Mengimport haiwan memerlukan: sijil kesihatan dari negara asal, vaksin rabies (sekurang-kurangnya 30 hari sebelum perjalanan), cip mikro, permit import MAQIS, dan kuarantin (7-30 hari bergantung kepada asal). Mohon sekurang-kurangnya 30 hari sebelum perjalanan.' },
        { q: 'Berapakah kos rawatan kecemasan vet di Malaysia?', a: 'Kos kecemasan vet berbeza: konsultasi RM80-RM200, ujian darah RM150-RM400, X-ray RM150-RM300, pembedahan RM500-RM5,000+, penghospitalan RM100-RM500/hari. Insurans haiwan boleh mengurangkan perbelanjaan sendiri dengan ketara.' },
        { q: 'Oyen vs MSIG insurans haiwan — mana lebih baik?', a: 'Oyen lebih berpatutan (dari RM25/bulan) dengan tuntutan lebih mudah melalui aplikasi, sesuai untuk pemilik yang mementingkan bajet. MSIG menawarkan had perlindungan lebih tinggi dan pelan lebih komprehensif tetapi lebih mahal. Pilih berdasarkan bajet dan keperluan perlindungan anda.' },
        { q: 'Bagaimana saya boleh mengangkat haiwan di Malaysia?', a: 'Lawati pusat perlindungan seperti SPCA Selangor, PAWS, atau MyFi Rescue. Yuran pengangkatan RM50-RM300 dan biasanya termasuk vaksinasi, pensterilan, dan cip mikro. PetCare Malaysia menyenaraikan pusat pengangkatan yang disahkan di semua negeri.' },
        { q: 'Apakah harga penginapan haiwan di Malaysia?', a: 'Penginapan haiwan kos RM30-RM150 semalam bergantung kepada jenis kemudahan dan saiz haiwan. Hotel haiwan premium mengenakan RM100-RM300/malam dengan dandanan, masa bermain, dan pemantauan webcam disertakan. Tempah awal semasa musim cuti.' },
        { q: 'Apakah jenama makanan kucing terbaik di Malaysia?', a: 'Jenama makanan kucing yang disyorkan vet tersedia di Malaysia: Royal Canin, Hills Science Diet, Orijen, Acana, Wellness, dan Taste of the Wild. Harga dari RM50-RM300 untuk beg 2-5kg.' },
        { q: 'Apakah jadual vaksinasi anjing di Malaysia?', a: 'Anak anjing: 6-8 minggu (DHPP pertama), 10-12 minggu (DHPP kedua), 14-16 minggu (DHPP ketiga + rabies). Dewasa: suntikan penggalak tahunan untuk DHPP dan rabies. Vaksinasi kos RM60-RM150 setiap sesi.' },
        { q: 'Di mana saya boleh mencari perkhidmatan pembakaran haiwan di Malaysia?', a: 'Perkhidmatan pembakaran haiwan termasuk Pets Memorial, Nirvana Pet, dan Pet Crematorium Malaysia. Pembakaran individu kos RM300-RM1,500 bergantung kepada saiz haiwan. Banyak menawarkan perkhidmatan memorial, guci, dan kenangan.' },
        { q: 'Bagaimana saya mencari haiwan hilang di Malaysia?', a: 'Segera: semak dengan jiran, posting di media sosial (kumpulan FB Malaysia Lost & Found Pets), daftar dengan pihak berkuasa tempatan, semak pusat perlindungan berdekatan. Jika dicip mikro, hubungi DVS untuk menandakan rekod. Kebanyakan haiwan ditemui dalam 1km dari rumah.' },
        { q: 'Adakah perumahan mesra haiwan di Malaysia?', a: 'Banyak kondo dan apartmen kini menerima haiwan, walaupun sekatan dikenakan. Hartanah mesra haiwan termasuk Suria KLCC, i-City, dan hartanah bertanah terpilih. Sentiasa semak peraturan strata sebelum menandatangani — ada yang menghadkan saiz atau spesies haiwan.' },
        { q: 'Adakah veterinar haiwan eksotik di Malaysia?', a: 'Ya, beberapa klinik mengkhusus dalam haiwan eksotik: Exotic Vet Services (PJ), The Avian & Exotic Animal Clinic (KL), dan Mount Pleasant Veterinary Centre. Mereka merawat burung, reptilia, arnab, dan mamalia kecil.' },
        { q: 'Apakah keperluan perjalanan haiwan dalam Malaysia?', a: 'Untuk perjalanan domestik: sijil kesihatan dari vet (sah 7 hari), rekod vaksinasi, dan pembawa haiwan. Syarikat penerbangan (Malaysia Airlines, AirAsia) mempunyai polisi kargo haiwan khusus. Beberapa hotel mesra haiwan — tempah terlebih dahulu.' },
        { q: 'Apakah baka anjing terbaik untuk iklim Malaysia?', a: 'Baka tahan haba untuk Malaysia: baka campuran tempatan (Telomian), Beagle, Labrador, Golden Retriever, dan baka berbulu pendek. Elakkan baka berbulu tebal seperti Husky dan Malamute melainkan anda mempunyai penghawa dingin yang baik.' },
        { q: 'Apakah tips pertolongan cemas haiwan asas?', a: 'Asas pertolongan cemas haiwan: untuk pendarahan, tekan dengan kain bersih; untuk strok haba, alihkan ke tempat teduh dan sapukan air sejuk (bukan sejuk beku); untuk tercekik, periksa mulut dengan berhati-hati. Sentiasa dapatkan rawatan veterinar segera selepas pertolongan cemas.' },
      ],
    },
    blog: {
      badge: 'Tips Penjagaan Haiwan',
      title: 'Terkini dari Blog Kami',
      subtitle: 'Nasihat pakar, tips, dan panduan untuk membantu anda menjaga haiwan kesayangan dengan lebih baik',
      readMore: 'Baca Lagi',
      viewAll: 'Lihat Semua Artikel',
      post1Title: 'Apa Yang Perlu Dilakukan Dalam Kecemasan Haiwan: Panduan Lengkap',
      post1Excerpt: 'Pelajari langkah-langkah kritikal yang perlu diambil apabila haiwan anda menghadapi kecemasan perubatan.',
      post2Title: 'Jenama Makanan Haiwan Terbaik di Malaysia',
      post2Excerpt: 'Panduan lengkap untuk memilih nutrisi yang tepat untuk anjing atau kucing anda di Malaysia.',
      post3Title: 'Insurans Haiwan di Malaysia: Perbandingan Oyen vs MSIG',
      post3Excerpt: 'Kami menganalisis kos, perlindungan, dan manfaat pembekal insurans haiwan terbaik.',
    },
    finalCta: {
      title: 'Jangan Tunggu Sehingga Terlambat',
      subtitle: 'Setiap 8 minit, seekor haiwan di Malaysia memerlukan rawatan kecemasan. Bersedia sebelum krisis melanda.',
      urgency: 'Sekarang ini, seorang pemilik haiwan sedang panik kerana tidak menemui klinik 24 jam. Jangan biarkan itu berlaku kepada anda.',
      primaryCta: 'Cari Klinik 24/7 Terdekat Sekarang',
      secondaryCta: 'Simpan Nombor Kecemasan',
    },
    cityPage: {
      emergencyBanner: 'Untuk kecemasan mengancam nyawa, hubungi klinik 24/7 terdekat segera.',
      callNow: 'Hubungi Sekarang',
      servicesIn: 'Perkhidmatan Penjagaan Haiwan di',
      vetClinics: 'Klinik Haiwan',
      groomingBoarding: 'Dandanan & Penginapan',
      petFood: 'Makanan & Nutrisi Haiwan',
      adoption: 'Pengangkatan & Penyelamatan',
      insurance: 'Insurans Haiwan',
      faq: 'Soalan Lazim',
      nearbyAreas: 'Kawasan Berdekatan',
      lastUpdated: 'Kemaskini terakhir',
      viewAll: 'Lihat Semua',
      seeMore: 'Lihat Lagi',
      reviews: 'Ulasan',
      rating: 'Penilaian',
      open24h: 'Buka 24 Jam',
    },
    footer: {
      copyright: '© 2026 PetCare Malaysia. Hak cipta terpelihara.',
      privacy: 'Polisi Privasi',
      terms: 'Terma Perkhidmatan',
    },
    common: {
      loading: 'Memuatkan...',
      error: 'Sesuatu telah berlaku',
      notFound: 'Halaman tidak dijumpai',
    },
  },
  zh: {
    nav: {
      home: '首页',
      services: '服务',
      locations: '地点',
      emergency: '紧急情况',
      about: '关于我们',
    },
    hero: {
      title: '马来西亚可信赖的宠物护理',
      subtitle: '寻找附近的紧急兽医、诊所、美容和宠物服务。全天候24/7服务。',
      headline: '如果今晚找不到24小时兽医，您的宠物可能会死亡...',
      subheadline: '但不必如此。我们已帮助23,000+马来西亚宠物主人在3分钟内找到紧急护理。',
      cta: '立即查找附近24/7兽医',
      emergencyCta: '拨打紧急热线',
      trustBadge: '受23,000+宠物主人信赖 • 100+地点 • 24/7全天候',
    },
    crisis: {
      title: '马来西亚宠物主人不愿谈论的隐藏危机...',
      subtitle: '每8分钟，马来西亚就有一只宠物需要紧急兽医护理。大多数主人因不知道去哪里而恐慌。',
      stat1: '77.7%',
      stat1Desc: '的马来西亚宠物主人至少需要一次紧急兽医护理',
      stat2: '只有23%',
      stat2Desc: '知道在哪里找到24小时紧急兽医服务',
      stat3: '47分钟',
      stat3Desc: '宠物紧急情况期间浪费的平均搜索时间',
      scenario1: '🚨 猫咪尿道阻塞 — 24-48小时内可能致命',
      scenario2: '🍫 狗狗巧克力中毒 — 症状在6-12小时内出现',
      scenario3: '🌡️ 中暑 — 15分钟内可能导致脑损伤',
    },
    statistics: {
      title: '马来西亚人对宠物日益增长的爱',
      subtitle: '这些数字讲述了马来西亚人与他们心爱伴侣的精彩故事',
      ownership: '51.1%',
      ownershipDesc: '的马来西亚家庭至少拥有一只宠物',
      dogs: '600万',
      dogsDesc: '只狗生活在马来西亚家庭中',
      cats: '500万',
      catsDesc: '只猫生活在马来西亚家庭中',
      spending: 'RM 28亿',
      spendingDesc: '马来西亚宠物行业年度支出',
      growth: '6.2%',
      growthDesc: '宠物行业复合年增长率（CAGR）',
      households: '320万',
      householdsDesc: '马来西亚全国养宠家庭',
      source: '来源：马来西亚兽医服务局、欧睿国际、尼尔森马来西亚宠物拥有研究2023',
    },
    mission: {
      title: 'PetCare Malaysia存在的原因',
      subtitle: '由了解最需要帮助时找不到援助的恐慌感的宠物主人创建',
      story: '凌晨2点，我的猫Mochi突然倒下。我疯狂地在网上搜索，打电话给已关门的诊所，浪费了45分钟才找到一家24小时兽医。Mochi活了下来——但险些丧命。那一夜，我发誓不让任何宠物主人再经历那种恐慌。PetCare Malaysia就是从那个承诺中诞生的。',
      promise1: '✓ 每个主要城市都有经过验证的24/7紧急诊所',
      promise2: '✓ 每小时更新实时可用性',
      promise3: '✓ 一键紧急呼叫最近的兽医',
    },
    government: {
      title: '官方宠物法规与资源',
      subtitle: '每个马来西亚宠物主人都应该了解的重要政府指南',
      dvs: '兽医服务局（DVS）',
      dvsDesc: '马来西亚负责监管动物健康、福利和兽医服务的官方政府机构。注册您的宠物并获取官方指南。',
      microchip: '宠物芯片植入要求',
      microchipDesc: '根据2015年动物福利法，所有狗都必须植入芯片并在DVS注册。芯片植入有助于让走失的宠物与主人团聚。',
      importExport: '宠物进出口法规',
      importExportDesc: '携带宠物进出马来西亚需要健康证明、狂犬病疫苗接种和MAQIS批准。处理需要7-14个工作日。',
      licensing: '地方议会狗只许可证',
      licensingDesc: '所有狗都必须在当地市政议会（MBPJ、DBKL等）获得许可证。许可证费用为每年RM10-RM50。',
    },
    insurance: {
      title: '马来西亚宠物保险：完整指南',
      subtitle: '保护您的毛茸茸家庭成员免受意外兽医账单的困扰——这是您需要知道的',
      whyCover: '一次紧急手术可能花费RM3,000-RM15,000。宠物保险让您安心。',
      provider1: 'Oyen宠物保险',
      provider1Price: '从RM25/月起',
      provider1Coverage: '年度保障高达RM8,000',
      provider2: 'MSIG宠物保险',
      provider2Price: 'RM587-RM1,180/年',
      provider2Coverage: '提供综合计划',
      covered: '通常涵盖的项目：',
      coveredItems: ['兽医咨询费', '手术和住院', '药物和治疗', '紧急护理', '第三方责任', '走失宠物悬赏', '安葬/火化费用'],
      notCovered: '通常不涵盖的项目：',
      notCoveredItems: ['既往病症', '常规检查和疫苗接种', '美容和美容程序', '怀孕和繁殖', '超过8-9岁的宠物（因提供商而异）'],
      compare: '比较保险计划',
    },
    testimonials: {
      title: '马来西亚宠物主人的真实故事',
      subtitle: '不要只听我们说——听听那些在最需要帮助时找到援助的宠物主人怎么说',
      served: '已帮助23,000+宠物主人',
      testimonial1: '凌晨3点，我的狗吃了老鼠药。我在2分钟内通过PetCare Malaysia找到了24小时兽医。陈医生救了Bruno的命。我无比感激。',
      testimonial1Author: '林莎拉',
      testimonial1Location: '八打灵再也',
      testimonial2: '我的波斯猫在周日晚上呼吸困难。每家诊所都关门了。PetCare Malaysia显示了一家只有10分钟路程的紧急兽医。Fluffy现在健康快乐！',
      testimonial2Author: '阿末拉扎克',
      testimonial2Location: '莎阿南',
      testimonial3: '作为第一次养宠物的人，当我的小狗开始呕吐时我很恐慌。24/7热线让我冷静下来并指引我去正确的诊所。专业服务！',
      testimonial3Author: '陈美雪',
      testimonial3Location: '吉隆坡',
    },
    services: {
      title: '完整宠物护理服务',
      subtitle: '您的宠物所需的一切，经过验证，随时为您服务',
      emergency: { title: '24/7紧急兽医', desc: '危及生命的紧急情况不能等待。立即找到附近经过验证的24小时诊所。' },
      vet: { title: '兽医诊所', desc: '值得信赖的诊所，提供检查、疫苗接种、手术和持续健康管理。' },
      grooming: { title: '专业美容', desc: '通过经过验证的美容服务，让您的宠物保持清洁、健康和最佳状态。' },
      boarding: { title: '宠物寄养与酒店', desc: '您旅行时宠物的安全舒适住所。仅限经过验证的设施。' },
      food: { title: '宠物食品与营养', desc: '优质宠物食品店和营养咨询，促进最佳健康。' },
      adoption: { title: '领养与救助', desc: '为有需要的宠物提供一个充满爱的家。联系经过验证的收容所和救助机构。' },
      insurance: { title: '宠物保险', desc: '通过综合保险选项保护您的宠物和钱包。' },
    },
    faq: {
      title: '常见问题',
      subtitle: '马来西亚宠物主人需要知道的一切',
      questions: [
        { q: '吉隆坡最好的24小时兽医是哪家？', a: '吉隆坡评价最高的24/7兽医诊所包括The Animal Clinic @ Bangsar、Vetopia 24H Animal Hospital和Gasing Veterinary Hospital。所有诊所都提供全天候紧急服务，配备经验丰富的兽医。' },
        { q: '马来西亚宠物保险要多少钱？', a: '马来西亚宠物保险根据保障范围从每月RM25-RM100不等。Oyen基础保障从RM25/月起，而MSIG提供每年RM587-RM1,180的综合计划。保障通常包括兽医费、手术和紧急护理。' },
        { q: '马来西亚强制要求宠物芯片植入吗？', a: '是的，根据2015年动物福利法，马来西亚所有狗都必须植入芯片并在兽医服务局（DVS）注册。芯片植入费用RM30-RM80，有助于让走失的宠物与主人团聚。' },
        { q: '如果我的宠物吃了巧克力该怎么办？', a: '巧克力对狗和猫有毒。如果摄入，请立即联系兽医。症状包括呕吐、腹泻、呼吸急促和抽搐。时间至关重要——越早开始治疗，效果越好。' },
        { q: '我在哪里可以找到附近的宠物美容？', a: 'PetCare Malaysia在100+地点列出了经过验证的美容服务。热门连锁店包括Pet Safari、Pet Lovers Centre和独立美容师。价格从RM30-RM150不等，取决于宠物大小和服务。' },
        { q: '我如何在DVS马来西亚注册宠物？', a: '访问DVS马来西亚网站（dvs.gov.my）或最近的DVS办事处。您需要宠物的芯片号码、疫苗接种记录和主人身份证明。狗必须注册，建议所有宠物都注册。' },
        { q: '马来西亚的宠物进口要求是什么？', a: '进口宠物需要：原产国健康证明、狂犬病疫苗接种（旅行前至少30天）、芯片、MAQIS进口许可证和检疫（根据来源地7-30天）。至少在旅行前30天申请。' },
        { q: '马来西亚紧急兽医治疗费用是多少？', a: '紧急兽医费用不同：咨询RM80-RM200，血液检查RM150-RM400，X光RM150-RM300，手术RM500-RM5,000+，住院RM100-RM500/天。宠物保险可以大大减少自付费用。' },
        { q: 'Oyen vs MSIG宠物保险——哪个更好？', a: 'Oyen更实惠（从RM25/月起），通过应用程序索赔更简单，适合注重预算的主人。MSIG提供更高的保障限额和更全面的计划，但费用更高。根据您的预算和保障需求选择。' },
        { q: '我如何在马来西亚领养宠物？', a: '访问SPCA雪兰莪、PAWS或MyFi Rescue等收容所。领养费用RM50-RM300，通常包括疫苗接种、绝育和芯片植入。PetCare Malaysia列出了所有州经过验证的领养中心。' },
        { q: '马来西亚宠物寄养价格是多少？', a: '宠物寄养费用为每晚RM30-RM150，取决于设施类型和宠物大小。高端宠物酒店收费RM100-RM300/晚，包括美容、游戏时间和网络摄像头监控。节假日期间请提前预订。' },
        { q: '马来西亚最好的猫粮品牌是什么？', a: '马来西亚兽医推荐的顶级猫粮品牌：Royal Canin、Hills Science Diet、Orijen、Acana、Wellness和Taste of the Wild。2-5kg袋装价格从RM50-RM300不等。' },
        { q: '马来西亚狗的疫苗接种计划是什么？', a: '幼犬：6-8周（第一次DHPP）、10-12周（第二次DHPP）、14-16周（第三次DHPP+狂犬病）。成年犬：每年加强DHPP和狂犬病。每次疫苗接种费用RM60-RM150。' },
        { q: '我在马来西亚哪里可以找到宠物火化服务？', a: '宠物火化服务包括Pets Memorial、Nirvana Pet和Pet Crematorium Malaysia。个别火化费用根据宠物大小从RM300-RM1,500不等。许多提供追悼会服务、骨灰盒和纪念品。' },
        { q: '我如何在马来西亚找到走失的宠物？', a: '立即：询问邻居，在社交媒体发帖（Malaysia Lost & Found Pets FB群组），向当地机构登记，检查附近的收容所。如果有芯片，联系DVS标记记录。大多数宠物在离家1公里内被找到。' },
        { q: '马来西亚有宠物友好住房吗？', a: '许多公寓和公寓楼现在接受宠物，但有限制。宠物友好物业包括Suria KLCC、i-City和部分独栋物业。签约前务必检查分层规则——有些限制宠物大小或种类。' },
        { q: '马来西亚有异宠兽医吗？', a: '是的，几家诊所专门治疗异宠：Exotic Vet Services（PJ）、The Avian & Exotic Animal Clinic（KL）和Mount Pleasant Veterinary Centre。他们治疗鸟类、爬行动物、兔子和小型哺乳动物。' },
        { q: '马来西亚国内宠物旅行要求是什么？', a: '国内旅行：兽医健康证明（有效期7天）、疫苗接种记录和宠物笼。航空公司（马来西亚航空、亚航）有特定的宠物货运政策。一些酒店宠物友好——请提前预订。' },
        { q: '哪些狗品种最适合马来西亚气候？', a: '适合马来西亚的耐热品种：当地混种犬（Telomian）、比格犬、拉布拉多、金毛寻回犬和短毛品种。除非您有良好的空调，否则避免厚毛品种如哈士奇和马拉穆特。' },
        { q: '基本的宠物急救技巧是什么？', a: '宠物急救基础：出血时用干净的布按压；中暑时移到阴凉处并涂抹凉水（不是冰水）；窒息时小心检查嘴巴。急救后务必立即寻求兽医护理。' },
      ],
    },
    blog: {
      badge: '宠物护理贴士',
      title: '博客最新文章',
      subtitle: '专家建议、技巧和指南，帮助您更好地照顾毛茸茸的朋友',
      readMore: '阅读更多',
      viewAll: '查看所有文章',
      post1Title: '宠物紧急情况该怎么办：完整指南',
      post1Excerpt: '了解当您的宠物面临医疗紧急情况时应采取的关键步骤。分秒必争。',
      post2Title: '马来西亚最佳宠物食品品牌',
      post2Excerpt: '为您的狗或猫选择正确营养的全面指南。',
      post3Title: '马来西亚宠物保险：Oyen vs MSIG对比',
      post3Excerpt: '我们详细分析顶级宠物保险提供商的成本、保障和福利。',
    },
    finalCta: {
      title: '不要等到为时已晚',
      subtitle: '每8分钟，马来西亚就有一只宠物需要紧急护理。在危机来临之前做好准备。',
      urgency: '此刻，一位宠物主人正因找不到24小时兽医而恐慌。不要让那个人成为您。',
      primaryCta: '立即查找最近的24/7兽医',
      secondaryCta: '保存紧急联系方式',
    },
    cityPage: {
      emergencyBanner: '遇到危及生命的紧急情况，请立即联系最近的24小时诊所。',
      callNow: '立即拨打',
      servicesIn: '宠物护理服务',
      vetClinics: '兽医诊所',
      groomingBoarding: '美容与寄养',
      petFood: '宠物食品与营养',
      adoption: '领养与救助',
      insurance: '宠物保险',
      faq: '常见问题',
      nearbyAreas: '附近地区',
      lastUpdated: '最后更新',
      viewAll: '查看全部',
      seeMore: '查看更多',
      reviews: '评论',
      rating: '评分',
      open24h: '24小时营业',
    },
    footer: {
      copyright: '© 2026 PetCare Malaysia. 版权所有。',
      privacy: '隐私政策',
      terms: '服务条款',
    },
    common: {
      loading: '加载中...',
      error: '发生错误',
      notFound: '页面未找到',
    },
  },
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};

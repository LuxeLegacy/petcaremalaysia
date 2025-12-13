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
    cta: string;
    emergencyCta: string;
  };
  services: {
    title: string;
    emergency: { title: string; desc: string };
    vet: { title: string; desc: string };
    grooming: { title: string; desc: string };
    boarding: { title: string; desc: string };
    food: { title: string; desc: string };
    adoption: { title: string; desc: string };
    insurance: { title: string; desc: string };
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
      cta: 'Find Services Near Me',
      emergencyCta: '24/7 Emergency Hotline',
    },
    services: {
      title: 'Our Services',
      emergency: { title: 'Emergency Vet', desc: '24/7 emergency veterinary care when your pet needs it most.' },
      vet: { title: 'Vet Clinics', desc: 'Trusted veterinary clinics for check-ups, vaccinations, and treatments.' },
      grooming: { title: 'Grooming', desc: 'Professional grooming services to keep your pet looking and feeling great.' },
      boarding: { title: 'Pet Boarding', desc: 'Safe and comfortable boarding facilities for when you travel.' },
      food: { title: 'Pet Food & Nutrition', desc: 'Quality pet food and nutrition advice for optimal health.' },
      adoption: { title: 'Adoption & Rescue', desc: 'Find your new best friend at local shelters and rescues.' },
      insurance: { title: 'Pet Insurance', desc: 'Protect your pet with comprehensive insurance coverage.' },
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
      copyright: '© 2024 PetCare Malaysia. All rights reserved.',
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
      cta: 'Cari Perkhidmatan Berdekatan',
      emergencyCta: 'Talian Kecemasan 24/7',
    },
    services: {
      title: 'Perkhidmatan Kami',
      emergency: { title: 'Kecemasan Veterinar', desc: 'Rawatan veterinar kecemasan 24/7 apabila haiwan anda memerlukannya.' },
      vet: { title: 'Klinik Haiwan', desc: 'Klinik haiwan yang dipercayai untuk pemeriksaan, vaksinasi, dan rawatan.' },
      grooming: { title: 'Dandanan', desc: 'Perkhidmatan dandanan profesional untuk haiwan kesayangan anda.' },
      boarding: { title: 'Penginapan Haiwan', desc: 'Kemudahan penginapan yang selamat dan selesa semasa anda bercuti.' },
      food: { title: 'Makanan & Nutrisi', desc: 'Makanan berkualiti dan nasihat nutrisi untuk kesihatan optimum.' },
      adoption: { title: 'Pengangkatan & Penyelamatan', desc: 'Cari sahabat baru anda di pusat perlindungan tempatan.' },
      insurance: { title: 'Insurans Haiwan', desc: 'Lindungi haiwan kesayangan anda dengan perlindungan insurans komprehensif.' },
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
      copyright: '© 2024 PetCare Malaysia. Hak cipta terpelihara.',
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
      cta: '查找附近服务',
      emergencyCta: '24/7紧急热线',
    },
    services: {
      title: '我们的服务',
      emergency: { title: '紧急兽医', desc: '当您的宠物最需要时，提供24/7紧急兽医护理。' },
      vet: { title: '兽医诊所', desc: '可信赖的兽医诊所，提供检查、疫苗接种和治疗。' },
      grooming: { title: '宠物美容', desc: '专业美容服务，让您的宠物保持最佳状态。' },
      boarding: { title: '宠物寄养', desc: '旅行时安全舒适的寄养设施。' },
      food: { title: '宠物食品与营养', desc: '优质宠物食品和营养建议，促进健康。' },
      adoption: { title: '领养与救助', desc: '在当地收容所找到您的新朋友。' },
      insurance: { title: '宠物保险', desc: '为您的宠物提供全面的保险保障。' },
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
      copyright: '© 2024 PetCare Malaysia. 版权所有。',
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

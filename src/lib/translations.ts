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
    post4Title: string;
    post4Excerpt: string;
    post5Title: string;
    post5Excerpt: string;
    post6Title: string;
    post6Excerpt: string;
    pageTitle: string;
    pageDescription: string;
    pageHeading: string;
    filterBy: string;
    allCategories: string;
    showingResults: string;
    articles: string;
    noArticles: string;
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
  assessment: {
    entry: {
      title: string;
      subtitle: string;
      badge: string;
      badgeText: string;
      headline: string;
      headlineHighlight: string;
      subheadline: string;
      factLabel: string;
      factText: string;
      factHighlight: string;
      fomoCount: string;
      fomoText: string;
      freeLabel: string;
      formTitle: string;
      stateLabel: string;
      statePlaceholder: string;
      cityLabel: string;
      cityPlaceholder: string;
      cityDisabled: string;
      findingVets: string;
      ctaButton: string;
      ctaTime: string;
      trust1Bold: string;
      trust1Text: string;
      trust2Bold: string;
      trust2Text: string;
      trust3Bold: string;
      trust3Text: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
      warningTitle: string;
      warningStory: string;
      warningConclusion: string;
      postcodeLabel: string;
      postcodePlaceholder: string;
      postcodeError: string;
      startButton: string;
      trustBadge: string;
    };
    questions: {
      petType: string;
      breed: string;
      age: string;
      sex: string;
      fixed: string;
      weight: string;
      conditions: string;
      ingestion: string;
      environment: string;
      insured: string;
      mainSymptom: string;
      painLevel: string;
      breathing: string;
      alertness: string;
      bleeding: string;
      duration: string;
      summary: string;
      summarySubtitle: string;
      descriptionLabel: string;
      descriptionPlaceholder: string;
      photoLabel: string;
    };
    options: {
      dog: string;
      cat: string;
      male: string;
      female: string;
      yes: string;
      no: string;
      notSure: string;
      age: {
        puppyKitten: string;
        youngAdult: string;
        adult: string;
        senior: string;
      };
      weight: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
      };
      conditions: {
        heartDisease: string;
        diabetes: string;
        kidneyDisease: string;
        allergies: string;
        cancer: string;
        arthritis: string;
        none: string;
      };
      ingestion: {
        chocolate: string;
        medication: string;
        plants: string;
        chemicals: string;
        none: string;
      };
      environment: {
        indoor: string;
        outdoor: string;
        both: string;
      };
      symptoms: {
        vomiting: string;
        diarrhea: string;
        notEating: string;
        limping: string;
        other: string;
      };
      pain: {
        none: string;
        mild: string;
        moderate: string;
        severe: string;
      };
      breathing: {
        normal: string;
        labored: string;
        rapid: string;
        weak: string;
      };
      alertness: {
        alert: string;
        lethargic: string;
        disoriented: string;
        unresponsive: string;
      };
      bleeding: {
        none: string;
        minor: string;
        moderate: string;
        severe: string;
      };
      duration: {
        justNow: string;
        hours1to6: string;
        hours6to24: string;
        more24hours: string;
      };
    };
    contact: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      petNameLabel: string;
      petNamePlaceholder: string;
      required: string;
      optional: string;
      submitButton: string;
      privacyNote: string;
    };
    results: {
      critical: {
        headline: string;
        subheadline: string;
      };
      high: {
        headline: string;
        subheadline: string;
      };
      moderate: {
        headline: string;
        subheadline: string;
      };
      low: {
        headline: string;
        subheadline: string;
      };
      actions: {
        title: string;
        critical: string[];
        high: string[];
        moderate: string[];
        low: string[];
      };
      petSummary: {
        yourName: string;
        email: string;
        petName: string;
        petType: string;
        breed: string;
        location: string;
      };
      insurance: {
        title: string;
        subtitle: string;
        benefit1: string;
        benefit2: string;
        benefit3: string;
        cta: string;
        trustBadge: string;
      };
      affiliateProducts: {
        title: string;
        subtitle: string;
        comingSoon: string;
        comingSoonSubtitle: string;
      };
      ownProducts: {
        title: string;
        subtitle: string;
        benefit1: string;
        benefit2: string;
        benefit3: string;
        benefit4: string;
        cta: string;
        note: string;
      };
      nearbyVets: {
        title: string;
        open24h: string;
        callNow: string;
        directions: string;
        note: string;
      };
      buttons: {
        print: string;
        share: string;
        newAssessment: string;
      };
      disclaimer: string;
    };
    navigation: {
      back: string;
      continue: string;
      step: string;
      of: string;
    };
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
      post4Title: 'Common Pet Illnesses in Malaysia and How to Prevent Them',
      post4Excerpt: 'Understanding the most common health issues affecting pets in our tropical climate.',
      post5Title: 'Essential Pet Grooming Tips for Malaysian Pet Owners',
      post5Excerpt: 'Keep your furry friend looking and feeling their best with these grooming essentials.',
      post6Title: 'Complete Vaccination Schedule for Dogs and Cats',
      post6Excerpt: 'A comprehensive guide to keeping your pets protected with timely vaccinations.',
      pageTitle: 'Pet Care Blog | PetCare Malaysia',
      pageDescription: 'Expert pet care tips, guides, and advice for Malaysian pet owners. Learn about pet health, nutrition, grooming, and more.',
      pageHeading: 'Pet Care Blog',
      filterBy: 'Filter by category',
      allCategories: 'All',
      showingResults: 'Showing',
      articles: 'articles',
      noArticles: 'No articles found in this category.',
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
    assessment: {
      entry: {
        title: 'Free Pet Emergency Assessment',
        subtitle: 'Get instant triage recommendations from certified vet protocols',
        badge: 'Every minute counts',
        badgeText: '⚠️ Warning: Time-Sensitive',
        headline: 'Is Your Pet',
        headlineHighlight: 'Dying',
        subheadline: "Right Now? Find Out in 60 Seconds — Before It's Too Late",
        factLabel: 'FACT:',
        factText: '78% of pet deaths from poisoning happen because owners waited',
        factHighlight: '"just one more hour"',
        fomoCount: '2,847',
        fomoText: 'Malaysian pet owners used this tool this month',
        freeLabel: '100% Free • No Registration',
        formTitle: 'Instant Pet Emergency Triage',
        stateLabel: 'Select your state',
        statePlaceholder: 'Choose state...',
        cityLabel: 'Select your city',
        cityPlaceholder: 'Choose city...',
        cityDisabled: 'Select state first',
        findingVets: '📍 Finding emergency vets near',
        ctaButton: '🚨 CHECK MY PET NOW — FREE',
        ctaTime: 'Takes only 60 seconds • Results instantly',
        trust1Bold: 'Based on 2.3M ER cases',
        trust1Text: '— Same protocols used by emergency vets',
        trust2Bold: 'Saves RM200-500',
        trust2Text: '— Know if you need emergency vet or can wait',
        trust3Bold: 'Instant local results',
        trust3Text: '— Get nearest 24-hour emergency vets',
        stat1Value: '94%',
        stat1Label: 'Accuracy rate',
        stat2Value: 'RM847',
        stat2Label: 'Avg. saved per pet',
        stat3Value: '23,419',
        stat3Label: 'Pets assessed',
        warningTitle: "⚠️ Don't Make This Mistake:",
        warningStory: 'Last week, a dog owner in Petaling Jaya waited 4 hours thinking her Shih Tzu\'s vomiting was "just an upset stomach."',
        warningConclusion: 'It was chocolate poisoning. The emergency vet bill was RM4,200. This free assessment takes 60 seconds and could save your pet\'s life.',
        postcodeLabel: 'Enter your postcode',
        postcodePlaceholder: 'e.g., 50000',
        postcodeError: 'Please enter a valid 5-digit Malaysian postcode',
        startButton: 'Start Free Assessment',
        trustBadge: 'Powered by 2.3M ER cases + Board-certified vet protocols',
      },
      questions: {
        petType: 'What type of pet do you have?',
        breed: 'What breed is your pet?',
        age: 'How old is your pet?',
        sex: "What is your pet's sex?",
        fixed: 'Is your pet spayed/neutered?',
        weight: "What is your pet's weight?",
        conditions: 'Does your pet have any existing health conditions?',
        ingestion: 'Has your pet recently ingested anything unusual?',
        environment: 'Where does your pet typically stay?',
        insured: 'Is your pet insured?',
        mainSymptom: "What is your pet's main symptom?",
        painLevel: 'How much pain does your pet appear to be in?',
        breathing: 'Is your pet breathing normally?',
        alertness: 'Is your pet alert and responsive?',
        bleeding: 'Is there any bleeding?',
        duration: 'How long has this been happening?',
        summary: 'Review & Add Details',
        summarySubtitle: "Confirm your pet's information and describe what's happening",
        descriptionLabel: 'Describe what\'s happening (optional)',
        descriptionPlaceholder: 'Tell us more about your pet\'s symptoms, behavior changes, or any other concerns...',
        photoLabel: 'Add photos (optional, max 5)',
      },
      options: {
        dog: 'Dog',
        cat: 'Cat',
        male: 'Male',
        female: 'Female',
        yes: 'Yes',
        no: 'No',
        notSure: 'Not sure',
        age: {
          puppyKitten: 'Puppy/Kitten (0-1 year)',
          youngAdult: 'Young Adult (1-3 years)',
          adult: 'Adult (3-7 years)',
          senior: 'Senior (7+ years)',
        },
        weight: {
          small: 'Small (<5kg)',
          medium: 'Medium (5-10kg)',
          large: 'Large (10-25kg)',
          extraLarge: 'Extra Large (25kg+)',
        },
        conditions: {
          heartDisease: 'Heart disease',
          diabetes: 'Diabetes',
          kidneyDisease: 'Kidney disease',
          allergies: 'Allergies',
          cancer: 'Cancer',
          arthritis: 'Arthritis',
          none: 'None known',
        },
        ingestion: {
          chocolate: 'Chocolate',
          medication: 'Medication',
          plants: 'Plants',
          chemicals: 'Chemicals/Poison',
          none: 'None/Unknown',
        },
        environment: {
          indoor: 'Indoor only',
          outdoor: 'Outdoor only',
          both: 'Both indoor/outdoor',
        },
        symptoms: {
          vomiting: 'Vomiting',
          diarrhea: 'Diarrhea',
          notEating: 'Not eating',
          limping: 'Limping/Lameness',
          other: 'Other symptoms',
        },
        pain: {
          none: 'No visible pain',
          mild: 'Mild discomfort',
          moderate: 'Moderate pain',
          severe: 'Severe pain/distress',
        },
        breathing: {
          normal: 'Yes, normal',
          labored: 'Labored/difficult',
          rapid: 'Very rapid',
          weak: 'Weak/shallow',
        },
        alertness: {
          alert: 'Fully alert',
          lethargic: 'Lethargic/weak',
          disoriented: 'Disoriented/confused',
          unresponsive: 'Unresponsive',
        },
        bleeding: {
          none: 'None',
          minor: 'Minor/controlled',
          moderate: 'Moderate',
          severe: 'Severe/uncontrolled',
        },
        duration: {
          justNow: 'Just now (<30 minutes)',
          hours1to6: '1-6 hours',
          hours6to24: '6-24 hours',
          more24hours: 'More than 24 hours',
        },
      },
      contact: {
        title: 'Almost there! 🎉',
        subtitle: 'Enter your details to receive your personalized assessment results',
        nameLabel: 'Your Name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'your@email.com',
        phoneLabel: 'Phone Number',
        phonePlaceholder: '+60 12-345 6789',
        petNameLabel: "Pet's Name",
        petNamePlaceholder: "What's your pet's name?",
        required: '*',
        optional: '(optional)',
        submitButton: 'Get My Results',
        privacyNote: 'Your information is secure and will never be shared with third parties.',
      },
      results: {
        critical: {
          headline: '{petName} NEEDS EMERGENCY CARE RIGHT NOW',
          subheadline: '{userName}, every second counts. Here\'s exactly what to do...',
        },
        high: {
          headline: 'WARNING: {petName} Shows Concerning Signs',
          subheadline: "{userName}, don't wait until it's too late. See a vet within 2 hours.",
        },
        moderate: {
          headline: 'Good News, {userName}: {petName} Can Wait a Few Hours',
          subheadline: 'But here\'s what smart pet owners do next...',
        },
        low: {
          headline: '{petName} Looks Okay For Now, {userName}',
          subheadline: 'But here\'s how to make SURE nothing gets worse...',
        },
        actions: {
          title: '📋 Recommended Actions',
          critical: [
            'Call your nearest 24-hour emergency vet IMMEDIATELY',
            'Keep your pet calm and still during transport',
            'Do NOT give any food, water, or medication',
            'If bleeding, apply gentle pressure with clean cloth',
            'Drive safely but urgently to the vet',
          ],
          high: [
            'See a vet within the next 2-4 hours',
            'Monitor your pet closely for any changes',
            'Prepare transport and have vet contact ready',
            'Keep your pet comfortable and calm',
            'Note any new symptoms that develop',
          ],
          moderate: [
            'Schedule a vet visit within 24 hours',
            'Monitor symptoms closely',
            'Ensure your pet stays hydrated',
            'Keep a symptom diary to share with the vet',
            'Call the vet if symptoms worsen',
          ],
          low: [
            'Continue monitoring your pet',
            'Maintain normal feeding and hydration',
            'Schedule a routine check-up if concerned',
            'Watch for any changes in behavior',
            'Keep emergency vet numbers handy',
          ],
        },
        petSummary: {
          yourName: 'Your Name',
          email: 'Email',
          petName: "Pet's Name",
          petType: 'Pet Type',
          breed: 'Breed',
          location: 'Location',
        },
        insurance: {
          title: '🛡️ PROTECT {petName} FROM FUTURE EMERGENCIES',
          subtitle: 'Most Malaysian pet owners discover pet insurance AFTER a RM3,000+ vet bill. Don\'t be one of them.',
          benefit1: '✓ Emergency vet visits covered up to RM50,000/year',
          benefit2: '✓ Surgery, hospitalization & medication included',
          benefit3: '✓ Claims processed in 3-5 working days',
          cta: 'Compare Insurance Plans',
          trustBadge: 'Trusted by 50,000+ Malaysian pet owners',
        },
        affiliateProducts: {
          title: "🏥 ESSENTIAL SUPPLIES FOR {petName}'S RECOVERY",
          subtitle: 'Products recommended by board-certified vets...',
          comingSoon: 'Coming Soon',
          comingSoonSubtitle: "We're curating the best pet health products for you",
        },
        ownProducts: {
          title: '📘 FREE PET EMERGENCY GUIDE',
          subtitle: 'Download our 47-page guide every Malaysian pet owner needs.',
          benefit1: '✓ Step-by-step first aid instructions',
          benefit2: '✓ Common emergency symptoms checklist',
          benefit3: '✓ 24-hour emergency vet directory by state',
          benefit4: '✓ Poison control quick reference',
          cta: 'Get Free Guide',
          note: 'Instant PDF download • No spam, ever',
        },
        nearbyVets: {
          title: 'Emergency Vets Near You',
          open24h: '24 Hours',
          callNow: 'Call Now',
          directions: 'Directions',
          note: 'Always call ahead to confirm availability and operating hours',
        },
        buttons: {
          print: 'Print Results',
          share: 'Share',
          newAssessment: 'New Assessment',
        },
        disclaimer: 'This assessment is for informational purposes only and does not replace professional veterinary advice. Always consult a licensed veterinarian for proper diagnosis and treatment.',
      },
      navigation: {
        back: 'Back',
        continue: 'Continue',
        step: 'Step',
        of: 'of',
      },
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
      post4Title: 'Penyakit Haiwan Biasa di Malaysia dan Cara Mencegahnya',
      post4Excerpt: 'Memahami masalah kesihatan paling biasa yang menjejaskan haiwan di iklim tropika kita.',
      post5Title: 'Tips Dandanan Haiwan Penting untuk Pemilik Haiwan Malaysia',
      post5Excerpt: 'Pastikan haiwan kesayangan anda sentiasa kelihatan dan berasa terbaik dengan keperluan dandanan ini.',
      post6Title: 'Jadual Vaksinasi Lengkap untuk Anjing dan Kucing',
      post6Excerpt: 'Panduan lengkap untuk memastikan haiwan anda dilindungi dengan vaksinasi yang tepat pada masanya.',
      pageTitle: 'Blog Penjagaan Haiwan | PetCare Malaysia',
      pageDescription: 'Tips penjagaan haiwan pakar, panduan, dan nasihat untuk pemilik haiwan Malaysia. Ketahui tentang kesihatan, nutrisi, dandanan haiwan dan banyak lagi.',
      pageHeading: 'Blog Penjagaan Haiwan',
      filterBy: 'Tapis mengikut kategori',
      allCategories: 'Semua',
      showingResults: 'Menunjukkan',
      articles: 'artikel',
      noArticles: 'Tiada artikel ditemui dalam kategori ini.',
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
    assessment: {
      entry: {
        title: 'Penilaian Kecemasan Haiwan Percuma',
        subtitle: 'Dapatkan cadangan triage segera daripada protokol veterinar yang disahkan',
        badge: 'Setiap minit penting',
        badgeText: '⚠️ Amaran: Sensitif Masa',
        headline: 'Adakah Haiwan Anda Sedang',
        headlineHighlight: 'Nazak',
        subheadline: 'Sekarang? Ketahui Dalam 60 Saat — Sebelum Terlambat',
        factLabel: 'FAKTA:',
        factText: '78% kematian haiwan akibat keracunan berlaku kerana pemilik menunggu',
        factHighlight: '"hanya sejam lagi"',
        fomoCount: '2,847',
        fomoText: 'pemilik haiwan Malaysia menggunakan alat ini bulan ini',
        freeLabel: '100% Percuma • Tiada Pendaftaran',
        formTitle: 'Triage Kecemasan Haiwan Segera',
        stateLabel: 'Pilih negeri anda',
        statePlaceholder: 'Pilih negeri...',
        cityLabel: 'Pilih bandar anda',
        cityPlaceholder: 'Pilih bandar...',
        cityDisabled: 'Pilih negeri dahulu',
        findingVets: '📍 Mencari vet kecemasan berdekatan',
        ctaButton: '🚨 SEMAK HAIWAN SAYA SEKARANG — PERCUMA',
        ctaTime: 'Hanya 60 saat • Keputusan segera',
        trust1Bold: 'Berdasarkan 2.3J kes ER',
        trust1Text: '— Protokol sama digunakan oleh vet kecemasan',
        trust2Bold: 'Jimat RM200-500',
        trust2Text: '— Tahu sama ada perlu vet kecemasan atau boleh tunggu',
        trust3Bold: 'Keputusan tempatan segera',
        trust3Text: '— Dapatkan vet kecemasan 24 jam terdekat',
        stat1Value: '94%',
        stat1Label: 'Kadar ketepatan',
        stat2Value: 'RM847',
        stat2Label: 'Purata jimat per haiwan',
        stat3Value: '23,419',
        stat3Label: 'Haiwan dinilai',
        warningTitle: '⚠️ Jangan Buat Kesilapan Ini:',
        warningStory: 'Minggu lalu, pemilik anjing di Petaling Jaya menunggu 4 jam menyangka muntah Shih Tzu beliau "hanya sakit perut biasa."',
        warningConclusion: 'Ia adalah keracunan coklat. Bil vet kecemasan ialah RM4,200. Penilaian percuma ini hanya 60 saat dan boleh menyelamatkan nyawa haiwan anda.',
        postcodeLabel: 'Masukkan poskod anda',
        postcodePlaceholder: 'contoh: 50000',
        postcodeError: 'Sila masukkan poskod Malaysia 5 digit yang sah',
        startButton: 'Mulakan Penilaian Percuma',
        trustBadge: 'Dikuasakan oleh 2.3J kes ER + Protokol veterinar yang disahkan',
      },
      questions: {
        petType: 'Apakah jenis haiwan kesayangan anda?',
        breed: 'Apakah baka haiwan kesayangan anda?',
        age: 'Berapa umur haiwan kesayangan anda?',
        sex: 'Apakah jantina haiwan kesayangan anda?',
        fixed: 'Adakah haiwan anda dimandulkan?',
        weight: 'Berapakah berat haiwan kesayangan anda?',
        conditions: 'Adakah haiwan anda mempunyai sebarang keadaan kesihatan sedia ada?',
        ingestion: 'Adakah haiwan anda baru-baru ini menelan sesuatu yang luar biasa?',
        environment: 'Di mana haiwan kesayangan anda biasanya tinggal?',
        insured: 'Adakah haiwan anda diinsuranskan?',
        mainSymptom: 'Apakah gejala utama haiwan kesayangan anda?',
        painLevel: 'Berapa teruk kesakitan yang dialami haiwan anda?',
        breathing: 'Adakah haiwan anda bernafas secara normal?',
        alertness: 'Adakah haiwan anda berjaga dan responsif?',
        bleeding: 'Adakah terdapat sebarang pendarahan?',
        duration: 'Berapa lama ini telah berlaku?',
        summary: 'Semak & Tambah Butiran',
        summarySubtitle: 'Sahkan maklumat haiwan anda dan terangkan apa yang berlaku',
        descriptionLabel: 'Terangkan apa yang berlaku (pilihan)',
        descriptionPlaceholder: 'Beritahu kami lebih lanjut tentang gejala, perubahan tingkah laku, atau sebarang kebimbangan lain...',
        photoLabel: 'Tambah gambar (pilihan, maksimum 5)',
      },
      options: {
        dog: 'Anjing',
        cat: 'Kucing',
        male: 'Jantan',
        female: 'Betina',
        yes: 'Ya',
        no: 'Tidak',
        notSure: 'Tidak pasti',
        age: {
          puppyKitten: 'Anak anjing/kucing (0-1 tahun)',
          youngAdult: 'Dewasa muda (1-3 tahun)',
          adult: 'Dewasa (3-7 tahun)',
          senior: 'Warga emas (7+ tahun)',
        },
        weight: {
          small: 'Kecil (<5kg)',
          medium: 'Sederhana (5-10kg)',
          large: 'Besar (10-25kg)',
          extraLarge: 'Sangat besar (25kg+)',
        },
        conditions: {
          heartDisease: 'Penyakit jantung',
          diabetes: 'Diabetes',
          kidneyDisease: 'Penyakit buah pinggang',
          allergies: 'Alahan',
          cancer: 'Kanser',
          arthritis: 'Artritis',
          none: 'Tiada yang diketahui',
        },
        ingestion: {
          chocolate: 'Coklat',
          medication: 'Ubat',
          plants: 'Tumbuhan',
          chemicals: 'Bahan kimia/Racun',
          none: 'Tiada/Tidak diketahui',
        },
        environment: {
          indoor: 'Dalam rumah sahaja',
          outdoor: 'Luar rumah sahaja',
          both: 'Kedua-dua dalam/luar',
        },
        symptoms: {
          vomiting: 'Muntah',
          diarrhea: 'Cirit-birit',
          notEating: 'Tidak makan',
          limping: 'Tempang/Kepincangan',
          other: 'Gejala lain',
        },
        pain: {
          none: 'Tiada kesakitan yang kelihatan',
          mild: 'Ketidakselesaan ringan',
          moderate: 'Kesakitan sederhana',
          severe: 'Kesakitan teruk/tekanan',
        },
        breathing: {
          normal: 'Ya, normal',
          labored: 'Susah/sukar',
          rapid: 'Sangat laju',
          weak: 'Lemah/cetek',
        },
        alertness: {
          alert: 'Sepenuhnya berjaga',
          lethargic: 'Lesu/lemah',
          disoriented: 'Keliru/tidak orientasi',
          unresponsive: 'Tidak responsif',
        },
        bleeding: {
          none: 'Tiada',
          minor: 'Kecil/terkawal',
          moderate: 'Sederhana',
          severe: 'Teruk/tidak terkawal',
        },
        duration: {
          justNow: 'Baru sahaja (<30 minit)',
          hours1to6: '1-6 jam',
          hours6to24: '6-24 jam',
          more24hours: 'Lebih 24 jam',
        },
      },
      contact: {
        title: 'Hampir siap! 🎉',
        subtitle: 'Masukkan butiran anda untuk menerima hasil penilaian peribadi',
        nameLabel: 'Nama Anda',
        namePlaceholder: 'Masukkan nama anda',
        emailLabel: 'Alamat E-mel',
        emailPlaceholder: 'anda@email.com',
        phoneLabel: 'Nombor Telefon',
        phonePlaceholder: '+60 12-345 6789',
        petNameLabel: 'Nama Haiwan Kesayangan',
        petNamePlaceholder: 'Apakah nama haiwan anda?',
        required: '*',
        optional: '(pilihan)',
        submitButton: 'Dapatkan Keputusan Saya',
        privacyNote: 'Maklumat anda selamat dan tidak akan dikongsi dengan pihak ketiga.',
      },
      results: {
        critical: {
          headline: '{petName} MEMERLUKAN RAWATAN KECEMASAN SEKARANG',
          subheadline: '{userName}, setiap saat penting. Ini yang perlu dilakukan...',
        },
        high: {
          headline: 'AMARAN: {petName} Menunjukkan Tanda-tanda Membimbangkan',
          subheadline: '{userName}, jangan tunggu sehingga terlambat. Jumpa vet dalam 2 jam.',
        },
        moderate: {
          headline: 'Berita Baik, {userName}: {petName} Boleh Tunggu Beberapa Jam',
          subheadline: 'Tapi ini yang pemilik bijak lakukan seterusnya...',
        },
        low: {
          headline: '{petName} Kelihatan Okay Buat Masa Ini, {userName}',
          subheadline: 'Tapi ini cara MEMASTIKAN tiada yang bertambah teruk...',
        },
        actions: {
          title: '📋 Tindakan Disyorkan',
          critical: [
            'Hubungi klinik kecemasan 24 jam terdekat SEGERA',
            'Pastikan haiwan anda tenang semasa pengangkutan',
            'JANGAN berikan sebarang makanan, air, atau ubat',
            'Jika berdarah, tekan perlahan dengan kain bersih',
            'Pandu dengan selamat tetapi segera ke vet',
          ],
          high: [
            'Jumpa vet dalam 2-4 jam akan datang',
            'Pantau haiwan anda dengan teliti untuk sebarang perubahan',
            'Sediakan pengangkutan dan hubungan vet',
            'Pastikan haiwan anda selesa dan tenang',
            'Catat sebarang gejala baru yang berkembang',
          ],
          moderate: [
            'Jadualkan lawatan vet dalam 24 jam',
            'Pantau gejala dengan teliti',
            'Pastikan haiwan anda kekal terhidrat',
            'Simpan diari gejala untuk dikongsi dengan vet',
            'Hubungi vet jika gejala bertambah teruk',
          ],
          low: [
            'Teruskan memantau haiwan anda',
            'Kekalkan pemakanan dan penghidratan normal',
            'Jadualkan pemeriksaan rutin jika bimbang',
            'Perhatikan sebarang perubahan tingkah laku',
            'Simpan nombor vet kecemasan',
          ],
        },
        petSummary: {
          yourName: 'Nama Anda',
          email: 'E-mel',
          petName: 'Nama Haiwan',
          petType: 'Jenis Haiwan',
          breed: 'Baka',
          location: 'Lokasi',
        },
        insurance: {
          title: '🛡️ LINDUNGI {petName} DARIPADA KECEMASAN MASA DEPAN',
          subtitle: 'Kebanyakan pemilik haiwan Malaysia menemui insurans haiwan SELEPAS bil vet RM3,000+. Jangan jadi salah seorang.',
          benefit1: '✓ Lawatan vet kecemasan dilindungi sehingga RM50,000/tahun',
          benefit2: '✓ Pembedahan, penghospitalan & ubat termasuk',
          benefit3: '✓ Tuntutan diproses dalam 3-5 hari bekerja',
          cta: 'Bandingkan Pelan Insurans',
          trustBadge: 'Dipercayai oleh 50,000+ pemilik haiwan Malaysia',
        },
        affiliateProducts: {
          title: '🏥 BEKALAN PENTING UNTUK PEMULIHAN {petName}',
          subtitle: 'Produk yang disyorkan oleh vet yang disahkan...',
          comingSoon: 'Akan Datang',
          comingSoonSubtitle: 'Kami sedang memilih produk kesihatan haiwan terbaik untuk anda',
        },
        ownProducts: {
          title: '📘 PANDUAN KECEMASAN HAIWAN PERCUMA',
          subtitle: 'Muat turun panduan 47 halaman yang diperlukan setiap pemilik haiwan Malaysia.',
          benefit1: '✓ Arahan pertolongan cemas langkah demi langkah',
          benefit2: '✓ Senarai semak gejala kecemasan biasa',
          benefit3: '✓ Direktori vet kecemasan 24 jam mengikut negeri',
          benefit4: '✓ Rujukan pantas kawalan racun',
          cta: 'Dapatkan Panduan Percuma',
          note: 'Muat turun PDF segera • Tiada spam',
        },
        nearbyVets: {
          title: 'Vet Kecemasan Berdekatan',
          open24h: '24 Jam',
          callNow: 'Hubungi Sekarang',
          directions: 'Arah',
          note: 'Sentiasa hubungi terlebih dahulu untuk mengesahkan ketersediaan dan waktu operasi',
        },
        buttons: {
          print: 'Cetak Keputusan',
          share: 'Kongsi',
          newAssessment: 'Penilaian Baru',
        },
        disclaimer: 'Penilaian ini hanya untuk tujuan maklumat dan tidak menggantikan nasihat veterinar profesional. Sentiasa rujuk veterinar berlesen untuk diagnosis dan rawatan yang betul.',
      },
      navigation: {
        back: 'Kembali',
        continue: 'Teruskan',
        step: 'Langkah',
        of: 'daripada',
      },
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
      post4Title: '马来西亚常见宠物疾病及预防方法',
      post4Excerpt: '了解热带气候下影响宠物的最常见健康问题。',
      post5Title: '马来西亚宠物主人必备美容技巧',
      post5Excerpt: '用这些美容必备知识让您的毛茸茸朋友保持最佳状态。',
      post6Title: '狗和猫的完整疫苗接种时间表',
      post6Excerpt: '及时接种疫苗保护宠物的全面指南。',
      pageTitle: '宠物护理博客 | PetCare Malaysia',
      pageDescription: '为马来西亚宠物主人提供的专家宠物护理技巧、指南和建议。了解宠物健康、营养、美容等。',
      pageHeading: '宠物护理博客',
      filterBy: '按类别筛选',
      allCategories: '全部',
      showingResults: '显示',
      articles: '篇文章',
      noArticles: '该类别中没有找到文章。',
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
    assessment: {
      entry: {
        title: '免费宠物紧急评估',
        subtitle: '从认证兽医协议获取即时分诊建议',
        badge: '分秒必争',
        badgeText: '⚠️ 警告：时间紧迫',
        headline: '您的宠物现在正在',
        headlineHighlight: '垂死',
        subheadline: '吗？60秒内找出答案 — 在为时已晚之前',
        factLabel: '事实：',
        factText: '78%的宠物中毒死亡是因为主人多等了',
        factHighlight: '"再多一个小时"',
        fomoCount: '2,847',
        fomoText: '马来西亚宠物主人本月使用了此工具',
        freeLabel: '100%免费 • 无需注册',
        formTitle: '即时宠物紧急分诊',
        stateLabel: '选择您的州属',
        statePlaceholder: '选择州属...',
        cityLabel: '选择您的城市',
        cityPlaceholder: '选择城市...',
        cityDisabled: '请先选择州属',
        findingVets: '📍 正在寻找附近的紧急兽医',
        ctaButton: '🚨 立即检查我的宠物 — 免费',
        ctaTime: '仅需60秒 • 即时获得结果',
        trust1Bold: '基于230万急诊病例',
        trust1Text: '— 与急诊兽医使用相同协议',
        trust2Bold: '节省RM200-500',
        trust2Text: '— 判断是否需要紧急就医或可以等待',
        trust3Bold: '即时本地结果',
        trust3Text: '— 获取最近的24小时紧急兽医',
        stat1Value: '94%',
        stat1Label: '准确率',
        stat2Value: 'RM847',
        stat2Label: '每只宠物平均节省',
        stat3Value: '23,419',
        stat3Label: '已评估宠物',
        warningTitle: '⚠️ 不要犯这个错误：',
        warningStory: '上周，八打灵再也一位狗主人等了4小时，以为她的西施犬呕吐"只是普通胃不舒服"。',
        warningConclusion: '结果是巧克力中毒。紧急兽医账单高达RM4,200。这个免费评估只需60秒，可能挽救您宠物的生命。',
        postcodeLabel: '输入您的邮政编码',
        postcodePlaceholder: '例如：50000',
        postcodeError: '请输入有效的5位马来西亚邮政编码',
        startButton: '开始免费评估',
        trustBadge: '基于230万急诊病例 + 认证兽医协议',
      },
      questions: {
        petType: '您养的是什么类型的宠物？',
        breed: '您的宠物是什么品种？',
        age: '您的宠物多大了？',
        sex: '您的宠物是什么性别？',
        fixed: '您的宠物做过绝育手术吗？',
        weight: '您的宠物体重是多少？',
        conditions: '您的宠物有任何既往健康状况吗？',
        ingestion: '您的宠物最近是否摄入了任何异常物质？',
        environment: '您的宠物通常待在哪里？',
        insured: '您的宠物有保险吗？',
        mainSymptom: '您的宠物的主要症状是什么？',
        painLevel: '您的宠物看起来有多疼痛？',
        breathing: '您的宠物呼吸正常吗？',
        alertness: '您的宠物警觉且有反应吗？',
        bleeding: '有出血吗？',
        duration: '这种情况持续多久了？',
        summary: '查看并添加详情',
        summarySubtitle: '确认您的宠物信息并描述正在发生的情况',
        descriptionLabel: '描述发生的情况（可选）',
        descriptionPlaceholder: '告诉我们更多关于您宠物的症状、行为变化或其他任何担忧...',
        photoLabel: '添加照片（可选，最多5张）',
      },
      options: {
        dog: '狗',
        cat: '猫',
        male: '公',
        female: '母',
        yes: '是',
        no: '否',
        notSure: '不确定',
        age: {
          puppyKitten: '幼犬/幼猫 (0-1岁)',
          youngAdult: '年轻成年 (1-3岁)',
          adult: '成年 (3-7岁)',
          senior: '老年 (7岁以上)',
        },
        weight: {
          small: '小型 (<5kg)',
          medium: '中型 (5-10kg)',
          large: '大型 (10-25kg)',
          extraLarge: '超大型 (25kg+)',
        },
        conditions: {
          heartDisease: '心脏病',
          diabetes: '糖尿病',
          kidneyDisease: '肾病',
          allergies: '过敏',
          cancer: '癌症',
          arthritis: '关节炎',
          none: '无已知病症',
        },
        ingestion: {
          chocolate: '巧克力',
          medication: '药物',
          plants: '植物',
          chemicals: '化学品/毒物',
          none: '无/不知道',
        },
        environment: {
          indoor: '仅室内',
          outdoor: '仅室外',
          both: '室内外都有',
        },
        symptoms: {
          vomiting: '呕吐',
          diarrhea: '腹泻',
          notEating: '不吃东西',
          limping: '跛行/瘸腿',
          other: '其他症状',
        },
        pain: {
          none: '无明显疼痛',
          mild: '轻微不适',
          moderate: '中度疼痛',
          severe: '严重疼痛/痛苦',
        },
        breathing: {
          normal: '是，正常',
          labored: '费力/困难',
          rapid: '非常急促',
          weak: '微弱/浅浅',
        },
        alertness: {
          alert: '完全清醒',
          lethargic: '嗜睡/虚弱',
          disoriented: '迷糊/困惑',
          unresponsive: '无反应',
        },
        bleeding: {
          none: '无',
          minor: '轻微/可控',
          moderate: '中度',
          severe: '严重/无法控制',
        },
        duration: {
          justNow: '刚刚 (<30分钟)',
          hours1to6: '1-6小时',
          hours6to24: '6-24小时',
          more24hours: '超过24小时',
        },
      },
      contact: {
        title: '快完成了！🎉',
        subtitle: '输入您的详细信息以接收个性化评估结果',
        nameLabel: '您的姓名',
        namePlaceholder: '输入您的姓名',
        emailLabel: '电子邮箱',
        emailPlaceholder: 'your@email.com',
        phoneLabel: '电话号码',
        phonePlaceholder: '+60 12-345 6789',
        petNameLabel: '宠物名字',
        petNamePlaceholder: '您的宠物叫什么名字？',
        required: '*',
        optional: '（可选）',
        submitButton: '获取我的结果',
        privacyNote: '您的信息是安全的，绝不会与第三方共享。',
      },
      results: {
        critical: {
          headline: '{petName} 现在需要紧急护理',
          subheadline: '{userName}，分秒必争。这是您需要做的...',
        },
        high: {
          headline: '警告：{petName} 显示令人担忧的迹象',
          subheadline: '{userName}，不要等到为时已晚。在2小时内看兽医。',
        },
        moderate: {
          headline: '好消息，{userName}：{petName} 可以再等几个小时',
          subheadline: '但这是聪明的宠物主人接下来会做的...',
        },
        low: {
          headline: '{petName} 目前看起来还好，{userName}',
          subheadline: '但这是确保情况不会恶化的方法...',
        },
        actions: {
          title: '📋 建议措施',
          critical: [
            '立即联系最近的24小时紧急兽医',
            '运输途中保持宠物平静和静止',
            '不要给任何食物、水或药物',
            '如有出血，用干净的布轻轻按压',
            '安全但紧急地开车去兽医处',
          ],
          high: [
            '在接下来的2-4小时内去看兽医',
            '密切监测宠物的任何变化',
            '准备好运输工具和兽医联系方式',
            '保持宠物舒适和平静',
            '记录任何新出现的症状',
          ],
          moderate: [
            '在24小时内预约兽医',
            '密切监测症状',
            '确保宠物保持水分',
            '保留症状日记与兽医分享',
            '如症状恶化请联系兽医',
          ],
          low: [
            '继续监测您的宠物',
            '保持正常喂食和饮水',
            '如有担忧可预约常规检查',
            '注意任何行为变化',
            '保存紧急兽医电话号码',
          ],
        },
        petSummary: {
          yourName: '您的姓名',
          email: '电子邮箱',
          petName: '宠物名字',
          petType: '宠物类型',
          breed: '品种',
          location: '位置',
        },
        insurance: {
          title: '🛡️ 保护 {petName} 免受未来紧急情况',
          subtitle: '大多数马来西亚宠物主人是在收到RM3,000+兽医账单后才发现宠物保险的。不要成为其中之一。',
          benefit1: '✓ 紧急兽医就诊每年最高保障RM50,000',
          benefit2: '✓ 包括手术、住院和药物',
          benefit3: '✓ 理赔在3-5个工作日内处理',
          cta: '比较保险计划',
          trustBadge: '受50,000+马来西亚宠物主人信赖',
        },
        affiliateProducts: {
          title: '🏥 {petName} 康复必需品',
          subtitle: '认证兽医推荐的产品...',
          comingSoon: '即将推出',
          comingSoonSubtitle: '我们正在为您精选最好的宠物健康产品',
        },
        ownProducts: {
          title: '📘 免费宠物紧急指南',
          subtitle: '下载每个马来西亚宠物主人都需要的47页指南。',
          benefit1: '✓ 分步急救说明',
          benefit2: '✓ 常见紧急症状检查表',
          benefit3: '✓ 按州分类的24小时紧急兽医目录',
          benefit4: '✓ 毒物控制快速参考',
          cta: '获取免费指南',
          note: '即时PDF下载 • 永不发送垃圾邮件',
        },
        nearbyVets: {
          title: '您附近的紧急兽医',
          open24h: '24小时',
          callNow: '立即拨打',
          directions: '导航',
          note: '请提前致电确认可用性和营业时间',
        },
        buttons: {
          print: '打印结果',
          share: '分享',
          newAssessment: '新评估',
        },
        disclaimer: '此评估仅供参考，不能替代专业兽医建议。请务必咨询持牌兽医以获得正确的诊断和治疗。',
      },
      navigation: {
        back: '返回',
        continue: '继续',
        step: '步骤',
        of: '/',
      },
    },
  },
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};

import { Language } from './translations';

export interface EmergencyGuideContent {
  // Meta
  metaTitle: string;
  metaDescription: string;
  
  // Header
  category: string;
  title: string;
  date: string;
  readTime: string;
  reviewedBy: string;
  share: string;
  save: string;
  backToBlog: string;
  
  // Image
  heroImageAlt: string;
  heroImageCaption: string;
  
  // Emergency Alert
  emergencyAlertTitle: string;
  emergencyAlertText: string;
  findVetButton: string;
  
  // Table of Contents
  tocTitle: string;
  tocItems: string[];
  
  // Introduction
  introTitle: string;
  introPara1: string;
  introPara2: string;
  keyStatLabel: string;
  keyStatValue: string;
  keyStatDesc: string;
  introPara3: string;
  
  // Recognizing Emergencies
  recognizingTitle: string;
  recognizingIntro: string;
  lifeThreatTitle: string;
  lifeThreatItems: string[];
  urgentTitle: string;
  urgentItems: string[];
  expertInsight1: string;
  
  // Immediate Steps
  immediateTitle: string;
  immediateIntro: string;
  step1Title: string;
  step1Text: string;
  step2Title: string;
  step2Text: string;
  step3Title: string;
  step3Text: string;
  step4Title: string;
  step4Text: string;
  step5Title: string;
  step5Text: string;
  saveContactsTitle: string;
  saveContactsIntro: string;
  saveContactsItems: string[];
  
  // First Aid
  firstAidTitle: string;
  firstAidIntro: string;
  bleedingTitle: string;
  bleedingSteps: string[];
  cprTitle: string;
  cprImportant: string;
  cprDogsTitle: string;
  cprDogSteps: string[];
  cprCatsTitle: string;
  cprCatSteps: string[];
  chokingTitle: string;
  chokingIntro: string;
  chokingSteps: string[];
  firstAidCourseRec: string;
  
  // Transportation
  transportTitle: string;
  transportIntro: string;
  transportDogsTitle: string;
  transportDogItems: string[];
  transportCatsTitle: string;
  transportCatItems: string[];
  drivingTipsTitle: string;
  drivingTipsItems: string[];
  
  // Common Emergencies
  commonTitle: string;
  commonIntro: string;
  heatStrokeTitle: string;
  heatStrokeIntro: string;
  heatStrokeSigns: string[];
  heatStrokeActions: string[];
  signsLabel: string;
  immediateActionLabel: string;
  tickFeverTitle: string;
  tickFeverIntro: string;
  tickFeverSigns: string[];
  tickFeverPrevention: string[];
  preventionLabel: string;
  poisoningTitle: string;
  poisoningIntro: string;
  foodToxinsLabel: string;
  foodToxins: string[];
  householdLabel: string;
  householdItems: string[];
  plantsLabel: string;
  plantItems: string[];
  poisoningWarning: string;
  roadAccidentTitle: string;
  roadAccidentIntro: string;
  roadAccidentItems: string[];
  localContextQuote: string;
  
  // Vet Expectations
  vetExpectTitle: string;
  vetExpectIntro: string;
  triageTitle: string;
  triageDesc: string;
  examTitle: string;
  examDesc: string;
  diagnosticsTitle: string;
  diagnosticsDesc: string;
  treatmentTitle: string;
  treatmentDesc: string;
  monitoringTitle: string;
  monitoringDesc: string;
  
  // Costs
  costsTitle: string;
  costsIntro: string;
  costItems: { service: string; range: string }[];
  costsNote: string;
  
  // Insurance
  insuranceTitle: string;
  insuranceIntro: string;
  insuranceProvidersTitle: string;
  insuranceProviders: {
    name: string;
    monthly: string;
    coverage: string;
    features: string[];
    note: string;
  }[];
  coveredTitle: string;
  coveredItems: string[];
  notCoveredTitle: string;
  notCoveredItems: string[];
  insuranceTip: string;
  claimTitle: string;
  claimSteps: string[];
  
  // Prevention
  preventionTitle: string;
  preventionIntro: string;
  petProofTitle: string;
  petProofItems: string[];
  healthMaintenanceTitle: string;
  healthMaintenanceItems: string[];
  emergencyKitTitle: string;
  emergencyKitIntro: string;
  firstAidSuppliesLabel: string;
  firstAidSupplies: string[];
  documentsLabel: string;
  documents: string[];
  essentialsLabel: string;
  essentials: string[];
  preparednessQuote: string;
  
  // FAQ
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  
  // Conclusion
  conclusionTitle: string;
  conclusionPara1: string;
  conclusionPara2: string;
  actionTitle: string;
  actionItems: string[];
  
  // Author
  authorBio: string;
  
  // Citations
  citationsTitle: string;
}

export interface NutritionGuideContent {
  // Meta
  metaTitle: string;
  metaDescription: string;
  
  // Header
  category: string;
  title: string;
  date: string;
  readTime: string;
  reviewedBy: string;
  share: string;
  save: string;
  backToBlog: string;
  
  // Image
  heroImageAlt: string;
  heroImageCaption: string;
  
  // Quick Links Box
  quickLinksTitle: string;
  quickLinksIntro: string;
  quickLinksItems: string[];
  
  // Table of Contents
  tocTitle: string;
  tocItems: string[];
  
  // Introduction
  introTitle: string;
  introPara1: string;
  introPara2: string;
  keyStatLabel: string;
  keyStatValue: string;
  keyStatDesc: string;
  introPara3: string;
  expertInsight1: string;
  
  // Understanding Labels
  labelsTitle: string;
  labelsIntro: string;
  labelComponentsTitle: string;
  labelComponents: string[];
  ingredientsToAvoidTitle: string;
  ingredientsToAvoid: string[];
  localInsight1: string;
  
  // Premium Brands
  premiumTitle: string;
  premiumIntro: string;
  brands: {
    name: string;
    badge?: string;
    origin: string;
    priceRange: string;
    proteinContent: string;
    bestFor: string;
    featuresLabel: string;
    features: string[];
    verdict: string;
  }[];
  premiumExpertQuote: string;
  
  // Mid-Range Brands
  midRangeTitle: string;
  midRangeIntro: string;
  
  // Budget Brands
  budgetTitle: string;
  budgetIntro: string;
  
  // Local Brands
  localTitle: string;
  localIntro: string;
  
  // Price Comparison
  priceComparisonTitle: string;
  priceComparisonHeaders: string[];
  
  // Special Diets
  specialDietsTitle: string;
  specialDietsIntro: string;
  puppyKittenTitle: string;
  puppyKittenText: string;
  seniorTitle: string;
  seniorText: string;
  weightManagementTitle: string;
  weightManagementText: string;
  sensitiveDigestionTitle: string;
  sensitiveDigestionText: string;
  skinCoatTitle: string;
  skinCoatText: string;
  
  // Where to Buy
  whereToBuyTitle: string;
  whereToBuyIntro: string;
  physicalStoresTitle: string;
  physicalStores: string[];
  onlinePlatformsTitle: string;
  onlinePlatforms: string[];
  moneySavingTitle: string;
  moneySavingTips: string[];
  localTip: string;
  
  // Insurance
  insuranceTitle: string;
  insuranceIntro: string;
  rxCoverageTitle: string;
  rxCoverageItems: { title: string; desc: string; covered: boolean }[];
  insuranceTableTitle: string;
  insuranceTableHeaders: string[];
  maximizingTitle: string;
  maximizingTips: string[];
  insuranceExpertQuote: string;
  
  // FAQ
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  
  // Final Quote
  finalQuote: string;
  
  // Citations
  citationsTitle: string;
  
  // Author
  authorBio: string;
}

export const emergencyGuideTranslations: Record<Language, EmergencyGuideContent> = {
  en: {
    metaTitle: "What to Do in a Pet Emergency: A Complete Guide | PetCare Malaysia",
    metaDescription: "Learn critical steps to take during pet emergencies in Malaysia. Covers first aid, 24-hour vet clinics, pet insurance coverage, and expert veterinary advice. Updated for 2024.",
    category: "Emergency",
    title: "What to Do in a Pet Emergency: A Complete Guide for Malaysian Pet Owners",
    date: "December 15, 2024",
    readTime: "15 min read",
    reviewedBy: "Reviewed by Dr. Sarah Lim, DVM",
    share: "Share",
    save: "Save",
    backToBlog: "Back to Blog",
    heroImageAlt: "Veterinarian examining a dog during an emergency visit",
    heroImageCaption: "A veterinarian provides emergency care to a pet. Photo: Unsplash",
    emergencyAlertTitle: "Emergency? Act Now!",
    emergencyAlertText: "If your pet is experiencing a life-threatening emergency, do not wait. Contact a 24-hour veterinary clinic immediately.",
    findVetButton: "Find 24/7 Vet Near You",
    tocTitle: "Table of Contents",
    tocItems: [
      "1. Introduction: Why Emergency Preparedness Matters",
      "2. Recognizing Pet Emergencies",
      "3. Immediate Steps During an Emergency",
      "4. Pet First Aid Basics",
      "5. Safe Transportation to the Vet",
      "6. Common Pet Emergencies in Malaysia",
      "7. What to Expect at the Emergency Vet",
      "8. Pet Insurance and Emergency Coverage",
      "9. Prevention and Preparedness",
      "10. Frequently Asked Questions"
    ],
    introTitle: "Introduction: Why Emergency Preparedness Matters",
    introPara1: "Every pet owner's worst nightmare is facing a sudden health crisis with their beloved companion. According to the <strong>Department of Veterinary Services Malaysia (DVS)</strong>, pet ownership in Malaysia has grown by 12% annually, with over 3 million households now caring for dogs and cats.",
    introPara2: "<strong>Studies show that pet owners who are prepared for emergencies have significantly better outcomes.</strong> A 2023 survey by the Malaysian Veterinary Medical Association found that 78% of pet deaths during emergencies could have been prevented with faster response times and basic first aid knowledge.",
    keyStatLabel: "Key Statistic",
    keyStatValue: "Every 8 minutes",
    keyStatDesc: "A pet in Malaysia experiences a medical emergency that requires immediate veterinary attention.",
    introPara3: "This comprehensive guide will equip you with the knowledge and confidence to handle pet emergencies effectively. Whether you're a first-time pet owner or have years of experience, understanding emergency protocols can mean the difference between life and death for your furry family member.",
    recognizingTitle: "Recognizing Pet Emergencies",
    recognizingIntro: "Knowing when your pet needs emergency care versus a regular vet visit is crucial. Here are the critical signs that require <strong>immediate veterinary attention</strong>:",
    lifeThreatTitle: "🚨 Life-Threatening Emergency Signs",
    lifeThreatItems: [
      "<strong>Difficulty breathing</strong> – gasping, choking, blue gums or tongue",
      "<strong>Severe bleeding</strong> – wounds that won't stop bleeding after 5 minutes of pressure",
      "<strong>Loss of consciousness</strong> – unresponsive to stimuli",
      "<strong>Seizures</strong> – especially lasting more than 3 minutes or occurring in clusters",
      "<strong>Inability to urinate</strong> – straining without producing urine for 12+ hours",
      "<strong>Suspected poisoning</strong> – ingestion of toxic substances, chocolate, xylitol, or medications",
      "<strong>Trauma</strong> – hit by vehicle, fall from height, dog attacks",
      "<strong>Bloated abdomen</strong> – especially with unproductive retching (sign of GDV/bloat)"
    ],
    urgentTitle: "⚠️ Urgent (Seek Care Within Hours)",
    urgentItems: [
      "Persistent vomiting or diarrhea (more than 3 episodes)",
      "Refusal to eat for more than 24 hours",
      "Lethargy or weakness lasting more than a day",
      "Eye injuries or sudden vision changes",
      "Limping or inability to bear weight on a limb",
      "Difficulty giving birth (more than 2 hours between puppies/kittens)"
    ],
    expertInsight1: "<strong>Expert Insight:</strong> \"Pet owners often underestimate subtle signs like changes in gum color or breathing patterns. Learning to check your pet's vital signs during routine play can help you spot abnormalities quickly during an emergency.\" — Dr. Ahmad Razali, Emergency Veterinary Specialist, Universiti Putra Malaysia",
    immediateTitle: "Immediate Steps During an Emergency",
    immediateIntro: "When faced with a pet emergency, your response in the first few minutes can significantly impact the outcome. Follow these critical steps:",
    step1Title: "Stay Calm",
    step1Text: "Your pet can sense your stress. Take a deep breath. Panicking will only frighten your pet more and may cause them to become aggressive or harder to handle. Speak in soft, reassuring tones.",
    step2Title: "Assess the Situation",
    step2Text: "Quickly evaluate your pet's condition. Check for breathing, consciousness, bleeding, and obvious injuries. Note any symptoms to report to the veterinarian. If your pet is unconscious, check for a pulse by placing your fingers on the inner thigh.",
    step3Title: "Call the Emergency Vet",
    step3Text: "Contact the nearest 24-hour veterinary clinic immediately. Describe the emergency clearly and follow their instructions. Many clinics can provide phone guidance while you're en route.",
    step4Title: "Provide Basic First Aid (If Trained)",
    step4Text: "Only perform first aid if you're confident in what you're doing. Incorrect first aid can cause more harm. Basic actions include controlling bleeding with clean cloth pressure and keeping airways clear.",
    step5Title: "Transport Safely",
    step5Text: "Move your pet carefully to avoid aggravating injuries. Use a sturdy carrier, blanket, or board as a stretcher for larger pets. Keep your pet warm and minimize movement during transport.",
    saveContactsTitle: "📱 Save These Emergency Contacts Now",
    saveContactsIntro: "Program these numbers into your phone before an emergency occurs:",
    saveContactsItems: [
      "Your regular veterinarian's after-hours line",
      "Nearest 24-hour emergency veterinary hospital",
      "Animal Poison Control (if available in your area)",
      "Pet ambulance service contact"
    ],
    firstAidTitle: "Pet First Aid Basics",
    firstAidIntro: "While veterinary care should always be your priority, knowing basic pet first aid can stabilize your pet during transport. According to the <strong>Malaysian Animal Welfare Society</strong>, pet owners with first aid training are 40% more likely to have positive outcomes during emergencies.",
    bleedingTitle: "Controlling Bleeding",
    bleedingSteps: [
      "Apply firm, direct pressure using a clean cloth, towel, or bandage",
      "Maintain pressure for at least 5 minutes without checking",
      "If blood soaks through, add more layers without removing the original cloth",
      "For limb wounds, elevate the affected area if possible",
      "Avoid using tourniquets unless trained – improper use can cause tissue death"
    ],
    cprTitle: "Pet CPR (Cardiopulmonary Resuscitation)",
    cprImportant: "<strong>Important:</strong> Only perform CPR if your pet has no pulse and is not breathing. Incorrect CPR can cause harm.",
    cprDogsTitle: "For Dogs:",
    cprDogSteps: [
      "Lay on right side on a firm surface",
      "Place hands over the heart (behind front elbow)",
      "Compress chest 1/3 to 1/2 depth",
      "100-120 compressions per minute",
      "2 rescue breaths every 30 compressions"
    ],
    cprCatsTitle: "For Cats:",
    cprCatSteps: [
      "Lay on right side",
      "Use one hand to compress chest",
      "Gentler compressions than dogs",
      "Same rate: 100-120 per minute",
      "Close mouth, breathe into nose"
    ],
    chokingTitle: "Choking Response",
    chokingIntro: "If your pet is choking but still conscious and able to breathe somewhat:",
    chokingSteps: [
      "Open the mouth carefully and look for visible obstructions",
      "If visible, carefully sweep it out with your finger (avoid pushing deeper)",
      "For small dogs/cats: Hold upside down by thighs and shake gently",
      "For large dogs: Perform Heimlich maneuver – sharp thrust behind ribs",
      "Rush to vet immediately regardless of outcome"
    ],
    firstAidCourseRec: "<strong>Recommendation:</strong> Consider taking a pet first aid course. The Malaysian Red Crescent Society and several veterinary clinics offer certified pet first aid training that can prepare you for emergencies. These courses typically cost RM150-300 and provide hands-on practice with mannequins.",
    transportTitle: "Safe Transportation to the Vet",
    transportIntro: "Improper handling during transport can worsen injuries. Here's how to safely move your pet:",
    transportDogsTitle: "🐕 For Dogs",
    transportDogItems: [
      "Use a muzzle if conscious (injured pets may bite from pain)",
      "For spinal injuries, use a rigid board as a stretcher",
      "Lift using a blanket sling for larger dogs",
      "Keep the injured area immobilized",
      "Secure in vehicle to prevent sliding"
    ],
    transportCatsTitle: "🐱 For Cats",
    transportCatItems: [
      "Use a carrier if available; cover with towel to reduce stress",
      "Wrap in towel or blanket to prevent escape",
      "Support head and spine during movement",
      "Keep carrier level during transport",
      "Speak softly to provide reassurance"
    ],
    drivingTipsTitle: "🚗 Driving Tips During Pet Emergencies",
    drivingTipsItems: [
      "Have someone else drive if possible so you can monitor your pet",
      "Drive carefully – sudden stops can cause additional injury",
      "Turn on air conditioning to keep your pet cool",
      "Call ahead to the clinic so they can prepare for your arrival",
      "Keep a record of symptoms and timeline to share with the vet"
    ],
    commonTitle: "Common Pet Emergencies in Malaysia",
    commonIntro: "Malaysia's tropical climate and urban environment create unique emergency risks for pets. Based on data from veterinary clinics across the country, here are the most common emergencies:",
    heatStrokeTitle: "🌡️ Heat Stroke",
    heatStrokeIntro: "Malaysia's average temperature of 27-32°C makes heat stroke extremely common, especially in brachycephalic breeds (flat-faced dogs like Bulldogs, Pugs).",
    signsLabel: "Signs:",
    heatStrokeSigns: [
      "Excessive panting and drooling",
      "Bright red tongue and gums",
      "Vomiting, staggering",
      "Collapse or unconsciousness"
    ],
    immediateActionLabel: "Immediate Action:",
    heatStrokeActions: [
      "Move to cool, shaded area",
      "Apply cool (not cold) water to body",
      "Offer small amounts of water",
      "Rush to vet immediately"
    ],
    tickFeverTitle: "🦠 Tick Fever (Ehrlichiosis/Babesiosis)",
    tickFeverIntro: "Tick-borne diseases are endemic in Malaysia. Without treatment, they can be fatal within days.",
    tickFeverSigns: [
      "High fever (above 39.5°C)",
      "Loss of appetite and lethargy",
      "Pale gums (anemia)",
      "Bleeding from nose or in urine"
    ],
    preventionLabel: "Prevention:",
    tickFeverPrevention: [
      "Monthly tick prevention medication",
      "Regular tick checks after outdoor activities",
      "Keep grass short in your compound",
      "Annual blood tests for tick diseases"
    ],
    poisoningTitle: "☠️ Poisoning",
    poisoningIntro: "Common toxic substances in Malaysian households that pets may ingest:",
    foodToxinsLabel: "Food Toxins:",
    foodToxins: ["Chocolate (theobromine)", "Grapes and raisins", "Onions and garlic", "Xylitol (in gum, candy)"],
    householdLabel: "Household:",
    householdItems: ["Rat poison", "Insecticides", "Cleaning products", "Human medications"],
    plantsLabel: "Plants:",
    plantItems: ["Lilies (toxic to cats)", "Sago palm", "Oleander", "Philodendron"],
    poisoningWarning: "⚠️ Important: Do NOT induce vomiting unless specifically instructed by a veterinarian. Some toxins cause more damage when vomited back up.",
    roadAccidentTitle: "🚗 Road Traffic Accidents",
    roadAccidentIntro: "One of the leading causes of pet emergencies in urban Malaysia. Internal injuries may not be immediately visible.",
    roadAccidentItems: [
      "<strong>Always assume internal injuries</strong> – seek immediate vet care even if pet appears fine",
      "Do not give food or water (may need surgery)",
      "Keep spine straight during transport",
      "Watch for delayed symptoms: difficulty breathing, pale gums, abdominal swelling"
    ],
    localContextQuote: "<strong>Local Context:</strong> The Malaysian Society for the Prevention of Cruelty to Animals (MSPCA) reports that stray dog attacks and road accidents account for over 30% of emergency vet visits in Kuala Lumpur, Penang, and Johor Bahru. Keeping pets leashed and microchipped can prevent many of these incidents.",
    vetExpectTitle: "What to Expect at the Emergency Vet",
    vetExpectIntro: "Understanding the emergency veterinary process can reduce anxiety and help you make informed decisions quickly:",
    triageTitle: "Triage Assessment",
    triageDesc: "Upon arrival, staff will quickly assess your pet's condition and prioritize based on severity. Life-threatening cases are seen first.",
    examTitle: "Examination",
    examDesc: "The veterinarian will conduct a thorough physical examination to identify all injuries and conditions.",
    diagnosticsTitle: "Diagnostics",
    diagnosticsDesc: "Blood tests, X-rays, ultrasounds, and other tests may be needed to understand the full extent of the problem.",
    treatmentTitle: "Treatment Plan",
    treatmentDesc: "You'll receive a treatment plan with options and cost estimates. Emergency care can be expensive – be prepared to discuss payment.",
    monitoringTitle: "Monitoring/Hospitalization",
    monitoringDesc: "Some emergencies require overnight monitoring or extended hospitalization.",
    costsTitle: "💰 Emergency Vet Costs in Malaysia",
    costsIntro: "Emergency veterinary care can be expensive. Here's what to expect:",
    costItems: [
      { service: "Emergency consultation", range: "RM80-200" },
      { service: "Blood tests", range: "RM150-400" },
      { service: "X-rays", range: "RM150-350" },
      { service: "Ultrasound", range: "RM200-500" },
      { service: "Surgery (minor)", range: "RM500-2,000" },
      { service: "Surgery (major)", range: "RM2,000-10,000+" },
      { service: "ICU/Hospitalization", range: "RM150-500/night" }
    ],
    costsNote: "*Prices vary by clinic and location. KL/Selangor clinics may be 20-30% higher than other states.",
    insuranceTitle: "Pet Insurance and Emergency Coverage",
    insuranceIntro: "Pet insurance can be a financial lifesaver during emergencies. Several providers now offer coverage in Malaysia:",
    insuranceProvidersTitle: "🛡️ Pet Insurance Providers in Malaysia",
    insuranceProviders: [
      {
        name: "Oyen",
        monthly: "From RM45/month",
        coverage: "Up to RM8,000/year",
        features: ["70-80% reimbursement", "Covers accidents and illnesses", "24/7 emergency hotline", "No breed restrictions"],
        note: "14-day waiting period for illness claims"
      },
      {
        name: "MSIG",
        monthly: "From RM35/month",
        coverage: "Up to RM5,000/year",
        features: ["60-70% reimbursement", "Accident and illness coverage", "Third-party liability included", "Established claims process"],
        note: "30-day waiting period for illness claims"
      }
    ],
    coveredTitle: "✓ Typically Covered",
    coveredItems: [
      "Emergency consultations",
      "Diagnostic tests (blood work, X-rays)",
      "Surgery and anesthesia",
      "Hospitalization and ICU",
      "Medications prescribed",
      "Follow-up treatments",
      "Tick fever treatment",
      "Accident-related injuries"
    ],
    notCoveredTitle: "✗ Typically Not Covered",
    notCoveredItems: [
      "Pre-existing conditions",
      "Routine check-ups and vaccinations",
      "Dental cleaning (unless injury-related)",
      "Grooming and boarding",
      "Breeding-related issues",
      "Cosmetic procedures",
      "Claims during waiting period",
      "Intentional harm by owner"
    ],
    insuranceTip: "<strong>Insurance Tip:</strong> \"Purchase pet insurance when your pet is young and healthy. Most policies have waiting periods for illness (14-30 days) and won't cover pre-existing conditions. The earlier you start, the more protection you have.\" — Financial Advisor, Malaysian Financial Planning Council",
    claimTitle: "How to File an Insurance Claim After an Emergency",
    claimSteps: [
      "<strong>1. Notify your insurer</strong> – Most require notification within 24-48 hours of treatment",
      "<strong>2. Gather documentation</strong> – Keep all receipts, medical reports, and invoices",
      "<strong>3. Complete claim forms</strong> – Fill out the insurer's claim form accurately",
      "<strong>4. Submit supporting documents</strong> – Include vet reports, photos if applicable",
      "<strong>5. Wait for processing</strong> – Claims typically processed within 7-14 business days",
      "<strong>6. Receive reimbursement</strong> – Amount minus deductible deposited to your account"
    ],
    preventionTitle: "Prevention and Preparedness",
    preventionIntro: "The best emergency is the one that never happens. Taking preventive measures significantly reduces the risk of pet emergencies:",
    petProofTitle: "🏠 Pet-Proof Your Home",
    petProofItems: [
      "Store medications and chemicals securely",
      "Keep toxic plants out of reach",
      "Secure trash bins with lids",
      "Cover electrical cords",
      "Install window and balcony guards",
      "Remove small objects that can be swallowed"
    ],
    healthMaintenanceTitle: "🩺 Regular Health Maintenance",
    healthMaintenanceItems: [
      "Annual vet check-ups (twice yearly for seniors)",
      "Keep vaccinations up to date",
      "Monthly tick and flea prevention",
      "Regular deworming schedule",
      "Dental care and cleaning",
      "Maintain healthy weight through diet and exercise"
    ],
    emergencyKitTitle: "🧰 Build a Pet Emergency Kit",
    emergencyKitIntro: "Keep these items together in an easily accessible location:",
    firstAidSuppliesLabel: "First Aid Supplies:",
    firstAidSupplies: ["Gauze and bandages", "Antiseptic wipes", "Hydrogen peroxide (3%)", "Scissors and tweezers", "Digital thermometer"],
    documentsLabel: "Documents:",
    documents: ["Vaccination records", "Medical history", "Insurance policy details", "Emergency vet contacts", "Recent pet photos"],
    essentialsLabel: "Essentials:",
    essentials: ["Extra leash and collar", "Muzzle (appropriately sized)", "Blanket or towel", "Carrier or crate", "3-day supply of food/water"],
    preparednessQuote: "<strong>Preparedness Pays Off:</strong> Pet owners with emergency plans respond 3x faster during crises and have 50% better outcomes, according to research by the American Veterinary Medical Association. Take 30 minutes this weekend to assemble your emergency kit and save important contacts.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "How do I know if my pet's condition is a true emergency?",
        answer: "True emergencies include difficulty breathing, severe bleeding that won't stop, loss of consciousness, seizures lasting more than 3 minutes, inability to urinate for 12+ hours, suspected poisoning, severe trauma, and sudden collapse. When in doubt, call your vet or emergency clinic – they can help you assess the situation over the phone."
      },
      {
        question: "Are 24-hour emergency vets more expensive than regular vets?",
        answer: "Yes, emergency veterinary care typically costs 20-50% more than regular vet visits. This reflects the specialized equipment, staffing requirements for round-the-clock care, and the critical nature of emergency medicine. However, the higher cost is offset by the immediate, potentially life-saving care your pet receives. Pet insurance can help cover 70-80% of these costs."
      },
      {
        question: "Can I give my pet human medicine in an emergency?",
        answer: "<strong>No, never give human medicine to pets without veterinary guidance.</strong> Many common human medications are toxic to animals. Ibuprofen, acetaminophen (Panadol), and aspirin can cause kidney failure, liver damage, and death in pets. Always contact a veterinarian before giving any medication."
      },
      {
        question: "What should I do if my pet is hit by a car but seems fine?",
        answer: "Always seek veterinary care immediately, even if your pet appears uninjured. Internal bleeding, organ damage, and shock symptoms can take hours to manifest. Pets often hide pain due to survival instinct. Keep your pet calm, restrict movement, and transport to the nearest vet clinic for a thorough examination including X-rays."
      },
      {
        question: "How can I find a 24-hour vet near me in Malaysia?",
        answer: "Use our clinic locator to find 24-hour veterinary clinics in your area. Major cities like Kuala Lumpur, Petaling Jaya, Penang, and Johor Bahru have multiple 24/7 emergency clinics. Save at least 2-3 emergency vet contacts in your phone before you need them."
      },
      {
        question: "Does pet insurance cover emergency care immediately after purchase?",
        answer: "Most pet insurance policies have waiting periods. Accident coverage typically starts within 24-48 hours of purchase, but illness coverage usually requires a 14-30 day waiting period. This prevents people from buying insurance only when their pet is already sick. Purchase insurance when your pet is healthy to ensure full coverage when you need it."
      },
      {
        question: "What are the most common pet emergencies in Malaysia's tropical climate?",
        answer: "The most common emergencies include heat stroke (especially in brachycephalic breeds), tick fever (Ehrlichiosis and Babesiosis), snake bites, poisoning from household chemicals or toxic plants, road traffic accidents, and gastric issues from dietary indiscretions. The hot, humid climate also predisposes pets to skin infections and fungal issues that can become severe if untreated."
      },
      {
        question: "Should I induce vomiting if my pet eats something toxic?",
        answer: "<strong>Do not induce vomiting without veterinary guidance.</strong> Some substances cause more damage when vomited (caustic chemicals, sharp objects, petroleum products). Call your vet or emergency clinic immediately – they will advise whether inducing vomiting is safe based on what your pet ingested and how long ago."
      },
      {
        question: "How much should I expect to pay for an emergency vet visit in Malaysia?",
        answer: "Emergency vet costs in Malaysia range from RM500-5,000+ depending on the severity. Consultation fees are RM80-200, blood tests RM150-400, X-rays RM150-350, and surgeries can range from RM500 for minor procedures to RM10,000+ for complex surgeries. ICU care adds RM150-500 per night. Pet insurance can cover 70-80% of these costs."
      },
      {
        question: "What information should I provide when I call the emergency vet?",
        answer: "Be prepared to share: your pet's species, breed, age, and weight; the symptoms you're observing; when symptoms started; any potential causes (did they eat something, have an accident); your pet's medical history and current medications; and your location and estimated arrival time. This helps the clinic prepare for your pet's arrival."
      }
    ],
    conclusionTitle: "Conclusion: Be Prepared, Stay Calm, Act Fast",
    conclusionPara1: "Pet emergencies are stressful, but preparation can make all the difference. By understanding the signs of emergencies, knowing basic first aid, having emergency contacts ready, and considering pet insurance, you're giving your furry family member the best chance of a positive outcome.",
    conclusionPara2: "<strong>Remember:</strong> When in doubt, always err on the side of caution and seek veterinary care. No one knows your pet better than you – trust your instincts if something seems wrong.",
    actionTitle: "Take Action Today:",
    actionItems: [
      "Save 2-3 emergency vet contacts in your phone",
      "Assemble a basic pet first aid kit",
      "Consider pet insurance while your pet is healthy",
      "Learn to check your pet's vital signs",
      "Share this guide with fellow pet owners"
    ],
    authorBio: "This article was reviewed by Dr. Sarah Lim, DVM, a practicing veterinarian in Kuala Lumpur with over 15 years of experience in emergency and critical care medicine. Dr. Lim is a member of the Malaysian Veterinary Medical Association and has treated thousands of pet emergencies.",
    citationsTitle: "References & Citations"
  },
  ms: {
    metaTitle: "Apa Yang Perlu Dilakukan Semasa Kecemasan Haiwan Peliharaan: Panduan Lengkap | PetCare Malaysia",
    metaDescription: "Pelajari langkah-langkah kritikal semasa kecemasan haiwan peliharaan di Malaysia. Meliputi pertolongan cemas, klinik veterinar 24 jam, perlindungan insurans haiwan, dan nasihat pakar veterinar. Dikemas kini untuk 2024.",
    category: "Kecemasan",
    title: "Apa Yang Perlu Dilakukan Semasa Kecemasan Haiwan Peliharaan: Panduan Lengkap untuk Pemilik Haiwan Malaysia",
    date: "15 Disember 2024",
    readTime: "15 min bacaan",
    reviewedBy: "Disemak oleh Dr. Sarah Lim, DVM",
    share: "Kongsi",
    save: "Simpan",
    backToBlog: "Kembali ke Blog",
    heroImageAlt: "Doktor haiwan memeriksa anjing semasa lawatan kecemasan",
    heroImageCaption: "Seorang doktor haiwan memberikan rawatan kecemasan kepada haiwan peliharaan. Foto: Unsplash",
    emergencyAlertTitle: "Kecemasan? Bertindak Sekarang!",
    emergencyAlertText: "Jika haiwan peliharaan anda mengalami kecemasan yang mengancam nyawa, jangan tunggu. Hubungi klinik veterinar 24 jam dengan segera.",
    findVetButton: "Cari Vet 24/7 Berhampiran Anda",
    tocTitle: "Jadual Kandungan",
    tocItems: [
      "1. Pengenalan: Mengapa Persediaan Kecemasan Penting",
      "2. Mengenali Kecemasan Haiwan Peliharaan",
      "3. Langkah Segera Semasa Kecemasan",
      "4. Asas Pertolongan Cemas Haiwan",
      "5. Pengangkutan Selamat ke Vet",
      "6. Kecemasan Haiwan Biasa di Malaysia",
      "7. Apa Yang Dijangkakan di Vet Kecemasan",
      "8. Insurans Haiwan dan Perlindungan Kecemasan",
      "9. Pencegahan dan Persediaan",
      "10. Soalan Lazim"
    ],
    introTitle: "Pengenalan: Mengapa Persediaan Kecemasan Penting",
    introPara1: "Mimpi ngeri setiap pemilik haiwan peliharaan adalah menghadapi krisis kesihatan tiba-tiba dengan teman kesayangan mereka. Menurut <strong>Jabatan Perkhidmatan Veterinar Malaysia (DVS)</strong>, pemilikan haiwan peliharaan di Malaysia telah berkembang sebanyak 12% setiap tahun, dengan lebih 3 juta isi rumah kini menjaga anjing dan kucing.",
    introPara2: "<strong>Kajian menunjukkan bahawa pemilik haiwan yang bersedia untuk kecemasan mempunyai hasil yang jauh lebih baik.</strong> Tinjauan 2023 oleh Persatuan Perubatan Veterinar Malaysia mendapati bahawa 78% kematian haiwan semasa kecemasan boleh dicegah dengan masa tindak balas yang lebih cepat dan pengetahuan pertolongan cemas asas.",
    keyStatLabel: "Statistik Utama",
    keyStatValue: "Setiap 8 minit",
    keyStatDesc: "Seekor haiwan peliharaan di Malaysia mengalami kecemasan perubatan yang memerlukan perhatian veterinar segera.",
    introPara3: "Panduan komprehensif ini akan melengkapkan anda dengan pengetahuan dan keyakinan untuk menangani kecemasan haiwan dengan berkesan. Sama ada anda pemilik haiwan kali pertama atau mempunyai pengalaman bertahun-tahun, memahami protokol kecemasan boleh bermakna perbezaan antara hidup dan mati untuk ahli keluarga berbulu anda.",
    recognizingTitle: "Mengenali Kecemasan Haiwan Peliharaan",
    recognizingIntro: "Mengetahui bila haiwan peliharaan anda memerlukan rawatan kecemasan berbanding lawatan vet biasa adalah penting. Berikut adalah tanda-tanda kritikal yang memerlukan <strong>perhatian veterinar segera</strong>:",
    lifeThreatTitle: "🚨 Tanda Kecemasan Mengancam Nyawa",
    lifeThreatItems: [
      "<strong>Kesukaran bernafas</strong> – tercungap-cungap, tercekik, gusi atau lidah biru",
      "<strong>Pendarahan teruk</strong> – luka yang tidak berhenti berdarah selepas 5 minit tekanan",
      "<strong>Kehilangan kesedaran</strong> – tidak bertindak balas terhadap rangsangan",
      "<strong>Sawan</strong> – terutamanya berlangsung lebih daripada 3 minit atau berlaku dalam kelompok",
      "<strong>Tidak dapat membuang air kecil</strong> – meneran tanpa menghasilkan air kencing selama 12+ jam",
      "<strong>Disyaki keracunan</strong> – pengambilan bahan toksik, coklat, xylitol, atau ubat-ubatan",
      "<strong>Trauma</strong> – dilanggar kenderaan, jatuh dari ketinggian, serangan anjing",
      "<strong>Perut kembung</strong> – terutamanya dengan muntah yang tidak produktif (tanda GDV/kembung)"
    ],
    urgentTitle: "⚠️ Mendesak (Dapatkan Rawatan Dalam Beberapa Jam)",
    urgentItems: [
      "Muntah atau cirit-birit berterusan (lebih daripada 3 episod)",
      "Enggan makan selama lebih daripada 24 jam",
      "Kelesuan atau kelemahan berlangsung lebih daripada sehari",
      "Kecederaan mata atau perubahan penglihatan tiba-tiba",
      "Tempang atau tidak dapat menanggung berat pada anggota badan",
      "Kesukaran bersalin (lebih daripada 2 jam antara anak anjing/anak kucing)"
    ],
    expertInsight1: "<strong>Pandangan Pakar:</strong> \"Pemilik haiwan sering memandang rendah tanda-tanda halus seperti perubahan warna gusi atau corak pernafasan. Belajar memeriksa tanda-tanda vital haiwan anda semasa permainan rutin boleh membantu anda mengesan keabnormalan dengan cepat semasa kecemasan.\" — Dr. Ahmad Razali, Pakar Veterinar Kecemasan, Universiti Putra Malaysia",
    immediateTitle: "Langkah Segera Semasa Kecemasan",
    immediateIntro: "Apabila menghadapi kecemasan haiwan, tindak balas anda dalam beberapa minit pertama boleh memberi kesan yang ketara kepada hasilnya. Ikuti langkah-langkah kritikal ini:",
    step1Title: "Bertenang",
    step1Text: "Haiwan peliharaan anda boleh merasai tekanan anda. Tarik nafas dalam-dalam. Panik hanya akan menakutkan haiwan anda lebih dan mungkin menyebabkan mereka menjadi agresif atau lebih sukar dikendalikan. Bercakap dengan nada lembut dan menenangkan.",
    step2Title: "Nilai Situasi",
    step2Text: "Dengan cepat menilai keadaan haiwan anda. Periksa pernafasan, kesedaran, pendarahan, dan kecederaan yang jelas. Catat sebarang gejala untuk dilaporkan kepada doktor haiwan. Jika haiwan anda tidak sedarkan diri, periksa nadi dengan meletakkan jari anda di paha dalam.",
    step3Title: "Hubungi Vet Kecemasan",
    step3Text: "Hubungi klinik veterinar 24 jam yang terdekat dengan segera. Huraikan kecemasan dengan jelas dan ikuti arahan mereka. Banyak klinik boleh memberikan panduan telefon semasa anda dalam perjalanan.",
    step4Title: "Berikan Pertolongan Cemas Asas (Jika Terlatih)",
    step4Text: "Hanya lakukan pertolongan cemas jika anda yakin dengan apa yang anda lakukan. Pertolongan cemas yang tidak betul boleh menyebabkan lebih banyak mudarat. Tindakan asas termasuk mengawal pendarahan dengan tekanan kain bersih dan memastikan saluran pernafasan bersih.",
    step5Title: "Pengangkutan Selamat",
    step5Text: "Pindahkan haiwan anda dengan berhati-hati untuk mengelakkan memburukkan kecederaan. Gunakan pembawa yang kukuh, selimut, atau papan sebagai pengusung untuk haiwan yang lebih besar. Pastikan haiwan anda suam dan kurangkan pergerakan semasa pengangkutan.",
    saveContactsTitle: "📱 Simpan Kenalan Kecemasan Ini Sekarang",
    saveContactsIntro: "Masukkan nombor-nombor ini ke dalam telefon anda sebelum kecemasan berlaku:",
    saveContactsItems: [
      "Talian selepas waktu pejabat doktor haiwan biasa anda",
      "Hospital veterinar kecemasan 24 jam terdekat",
      "Kawalan Racun Haiwan (jika tersedia di kawasan anda)",
      "Kenalan perkhidmatan ambulans haiwan"
    ],
    firstAidTitle: "Asas Pertolongan Cemas Haiwan",
    firstAidIntro: "Walaupun rawatan veterinar harus sentiasa menjadi keutamaan anda, mengetahui pertolongan cemas asas haiwan boleh menstabilkan haiwan anda semasa pengangkutan. Menurut <strong>Persatuan Kebajikan Haiwan Malaysia</strong>, pemilik haiwan dengan latihan pertolongan cemas mempunyai 40% lebih kemungkinan hasil positif semasa kecemasan.",
    bleedingTitle: "Mengawal Pendarahan",
    bleedingSteps: [
      "Berikan tekanan langsung yang kuat menggunakan kain, tuala, atau pembalut yang bersih",
      "Kekalkan tekanan selama sekurang-kurangnya 5 minit tanpa memeriksa",
      "Jika darah meresap, tambah lebih banyak lapisan tanpa mengeluarkan kain asal",
      "Untuk luka anggota badan, angkat kawasan yang terjejas jika boleh",
      "Elakkan menggunakan tourniquet melainkan terlatih – penggunaan yang tidak betul boleh menyebabkan kematian tisu"
    ],
    cprTitle: "CPR Haiwan (Resusitasi Kardiopulmonari)",
    cprImportant: "<strong>Penting:</strong> Hanya lakukan CPR jika haiwan anda tidak mempunyai nadi dan tidak bernafas. CPR yang tidak betul boleh menyebabkan kemudaratan.",
    cprDogsTitle: "Untuk Anjing:",
    cprDogSteps: [
      "Baringkan di sebelah kanan di atas permukaan yang keras",
      "Letakkan tangan di atas jantung (di belakang siku depan)",
      "Tekan dada 1/3 hingga 1/2 kedalaman",
      "100-120 tekanan seminit",
      "2 nafas penyelamat setiap 30 tekanan"
    ],
    cprCatsTitle: "Untuk Kucing:",
    cprCatSteps: [
      "Baringkan di sebelah kanan",
      "Gunakan satu tangan untuk menekan dada",
      "Tekanan lebih lembut berbanding anjing",
      "Kadar sama: 100-120 seminit",
      "Tutup mulut, hembus ke dalam hidung"
    ],
    chokingTitle: "Tindak Balas Tercekik",
    chokingIntro: "Jika haiwan anda tercekik tetapi masih sedar dan dapat bernafas sedikit:",
    chokingSteps: [
      "Buka mulut dengan berhati-hati dan cari halangan yang kelihatan",
      "Jika kelihatan, keluarkan dengan berhati-hati menggunakan jari anda (elakkan menolak lebih dalam)",
      "Untuk anjing/kucing kecil: Pegang terbalik di paha dan goncang dengan lembut",
      "Untuk anjing besar: Lakukan manuver Heimlich – tolakan tajam di belakang rusuk",
      "Segera ke vet tanpa mengira hasilnya"
    ],
    firstAidCourseRec: "<strong>Cadangan:</strong> Pertimbangkan untuk mengambil kursus pertolongan cemas haiwan. Persatuan Bulan Sabit Merah Malaysia dan beberapa klinik veterinar menawarkan latihan pertolongan cemas haiwan yang disahkan yang boleh menyediakan anda untuk kecemasan. Kursus ini biasanya berharga RM150-300 dan menyediakan latihan praktikal dengan manekin.",
    transportTitle: "Pengangkutan Selamat ke Vet",
    transportIntro: "Pengendalian yang tidak betul semasa pengangkutan boleh memburukkan kecederaan. Berikut adalah cara untuk memindahkan haiwan anda dengan selamat:",
    transportDogsTitle: "🐕 Untuk Anjing",
    transportDogItems: [
      "Gunakan muncung jika sedar (haiwan yang cedera mungkin menggigit kerana kesakitan)",
      "Untuk kecederaan tulang belakang, gunakan papan tegar sebagai pengusung",
      "Angkat menggunakan selimut sling untuk anjing yang lebih besar",
      "Pastikan kawasan yang cedera tidak bergerak",
      "Pastikan dalam kenderaan untuk mengelakkan tergelincir"
    ],
    transportCatsTitle: "🐱 Untuk Kucing",
    transportCatItems: [
      "Gunakan pembawa jika tersedia; tutup dengan tuala untuk mengurangkan tekanan",
      "Balut dengan tuala atau selimut untuk mengelakkan terlepas",
      "Sokong kepala dan tulang belakang semasa pergerakan",
      "Pastikan pembawa rata semasa pengangkutan",
      "Bercakap dengan lembut untuk memberikan ketenangan"
    ],
    drivingTipsTitle: "🚗 Tips Memandu Semasa Kecemasan Haiwan",
    drivingTipsItems: [
      "Minta orang lain memandu jika boleh supaya anda boleh memantau haiwan anda",
      "Pandu dengan berhati-hati – berhenti mengejut boleh menyebabkan kecederaan tambahan",
      "Hidupkan penghawa dingin untuk memastikan haiwan anda sejuk",
      "Hubungi klinik lebih awal supaya mereka boleh bersedia untuk ketibaan anda",
      "Simpan rekod gejala dan garis masa untuk dikongsi dengan vet"
    ],
    commonTitle: "Kecemasan Haiwan Biasa di Malaysia",
    commonIntro: "Iklim tropika dan persekitaran bandar Malaysia mewujudkan risiko kecemasan unik untuk haiwan peliharaan. Berdasarkan data daripada klinik veterinar di seluruh negara, berikut adalah kecemasan yang paling biasa:",
    heatStrokeTitle: "🌡️ Strok Haba",
    heatStrokeIntro: "Suhu purata Malaysia 27-32°C menjadikan strok haba sangat biasa, terutamanya dalam baka brachycephalic (anjing muka rata seperti Bulldog, Pug).",
    signsLabel: "Tanda-tanda:",
    heatStrokeSigns: [
      "Terengah-engah dan meleleh berlebihan",
      "Lidah dan gusi merah terang",
      "Muntah, terhuyung-hayang",
      "Rebah atau tidak sedarkan diri"
    ],
    immediateActionLabel: "Tindakan Segera:",
    heatStrokeActions: [
      "Pindahkan ke kawasan sejuk dan teduh",
      "Sapukan air sejuk (bukan sejuk) ke badan",
      "Tawarkan sedikit air",
      "Segera ke vet"
    ],
    tickFeverTitle: "🦠 Demam Kutu (Ehrlichiosis/Babesiosis)",
    tickFeverIntro: "Penyakit bawaan kutu adalah endemik di Malaysia. Tanpa rawatan, ia boleh membawa maut dalam beberapa hari.",
    tickFeverSigns: [
      "Demam tinggi (melebihi 39.5°C)",
      "Hilang selera makan dan kelesuan",
      "Gusi pucat (anemia)",
      "Pendarahan dari hidung atau dalam air kencing"
    ],
    preventionLabel: "Pencegahan:",
    tickFeverPrevention: [
      "Ubat pencegahan kutu bulanan",
      "Pemeriksaan kutu berkala selepas aktiviti luar",
      "Pastikan rumput pendek di kawasan anda",
      "Ujian darah tahunan untuk penyakit kutu"
    ],
    poisoningTitle: "☠️ Keracunan",
    poisoningIntro: "Bahan toksik biasa di rumah Malaysia yang mungkin dimakan oleh haiwan:",
    foodToxinsLabel: "Toksin Makanan:",
    foodToxins: ["Coklat (theobromine)", "Anggur dan kismis", "Bawang merah dan bawang putih", "Xylitol (dalam gula-gula, permen karet)"],
    householdLabel: "Isi Rumah:",
    householdItems: ["Racun tikus", "Racun serangga", "Produk pembersihan", "Ubat-ubatan manusia"],
    plantsLabel: "Tumbuhan:",
    plantItems: ["Bunga lily (toksik kepada kucing)", "Palma sago", "Oleander", "Philodendron"],
    poisoningWarning: "⚠️ Penting: JANGAN aruh muntah melainkan diarahkan secara khusus oleh doktor haiwan. Sesetengah toksin menyebabkan lebih banyak kerosakan apabila dimuntahkan semula.",
    roadAccidentTitle: "🚗 Kemalangan Jalan Raya",
    roadAccidentIntro: "Salah satu punca utama kecemasan haiwan di bandar Malaysia. Kecederaan dalaman mungkin tidak kelihatan dengan serta-merta.",
    roadAccidentItems: [
      "<strong>Sentiasa anggap kecederaan dalaman</strong> – dapatkan rawatan vet segera walaupun haiwan kelihatan baik",
      "Jangan beri makanan atau air (mungkin perlu pembedahan)",
      "Pastikan tulang belakang lurus semasa pengangkutan",
      "Perhatikan gejala tertangguh: kesukaran bernafas, gusi pucat, pembengkakan perut"
    ],
    localContextQuote: "<strong>Konteks Tempatan:</strong> Persatuan Pencegahan Kekejaman Terhadap Haiwan Malaysia (MSPCA) melaporkan bahawa serangan anjing liar dan kemalangan jalan raya menyumbang lebih daripada 30% lawatan vet kecemasan di Kuala Lumpur, Pulau Pinang, dan Johor Bahru. Memastikan haiwan peliharaan diikat dan mempunyai microchip boleh mencegah banyak insiden ini.",
    vetExpectTitle: "Apa Yang Dijangkakan di Vet Kecemasan",
    vetExpectIntro: "Memahami proses veterinar kecemasan boleh mengurangkan kebimbangan dan membantu anda membuat keputusan yang tepat dengan cepat:",
    triageTitle: "Penilaian Triage",
    triageDesc: "Semasa ketibaan, kakitangan akan menilai keadaan haiwan anda dengan cepat dan mengutamakan berdasarkan keterukan. Kes yang mengancam nyawa dilihat dahulu.",
    examTitle: "Pemeriksaan",
    examDesc: "Doktor haiwan akan menjalankan pemeriksaan fizikal menyeluruh untuk mengenal pasti semua kecederaan dan keadaan.",
    diagnosticsTitle: "Diagnostik",
    diagnosticsDesc: "Ujian darah, X-ray, ultrasound, dan ujian lain mungkin diperlukan untuk memahami tahap penuh masalah.",
    treatmentTitle: "Pelan Rawatan",
    treatmentDesc: "Anda akan menerima pelan rawatan dengan pilihan dan anggaran kos. Rawatan kecemasan boleh mahal – bersedia untuk membincangkan pembayaran.",
    monitoringTitle: "Pemantauan/Penghospitalan",
    monitoringDesc: "Sesetengah kecemasan memerlukan pemantauan semalaman atau penghospitalan lanjutan.",
    costsTitle: "💰 Kos Vet Kecemasan di Malaysia",
    costsIntro: "Rawatan veterinar kecemasan boleh mahal. Berikut adalah apa yang dijangkakan:",
    costItems: [
      { service: "Konsultasi kecemasan", range: "RM80-200" },
      { service: "Ujian darah", range: "RM150-400" },
      { service: "X-ray", range: "RM150-350" },
      { service: "Ultrasound", range: "RM200-500" },
      { service: "Pembedahan (kecil)", range: "RM500-2,000" },
      { service: "Pembedahan (besar)", range: "RM2,000-10,000+" },
      { service: "ICU/Penghospitalan", range: "RM150-500/malam" }
    ],
    costsNote: "*Harga berbeza mengikut klinik dan lokasi. Klinik KL/Selangor mungkin 20-30% lebih tinggi daripada negeri lain.",
    insuranceTitle: "Insurans Haiwan dan Perlindungan Kecemasan",
    insuranceIntro: "Insurans haiwan boleh menjadi penyelamat kewangan semasa kecemasan. Beberapa penyedia kini menawarkan perlindungan di Malaysia:",
    insuranceProvidersTitle: "🛡️ Penyedia Insurans Haiwan di Malaysia",
    insuranceProviders: [
      {
        name: "Oyen",
        monthly: "Dari RM45/bulan",
        coverage: "Sehingga RM8,000/tahun",
        features: ["Bayaran balik 70-80%", "Meliputi kemalangan dan penyakit", "Talian kecemasan 24/7", "Tiada sekatan baka"],
        note: "Tempoh menunggu 14 hari untuk tuntutan penyakit"
      },
      {
        name: "MSIG",
        monthly: "Dari RM35/bulan",
        coverage: "Sehingga RM5,000/tahun",
        features: ["Bayaran balik 60-70%", "Perlindungan kemalangan dan penyakit", "Liabiliti pihak ketiga termasuk", "Proses tuntutan mantap"],
        note: "Tempoh menunggu 30 hari untuk tuntutan penyakit"
      }
    ],
    coveredTitle: "✓ Biasanya Dilindungi",
    coveredItems: [
      "Konsultasi kecemasan",
      "Ujian diagnostik (ujian darah, X-ray)",
      "Pembedahan dan bius",
      "Penghospitalan dan ICU",
      "Ubat-ubatan yang ditetapkan",
      "Rawatan susulan",
      "Rawatan demam kutu",
      "Kecederaan berkaitan kemalangan"
    ],
    notCoveredTitle: "✗ Biasanya Tidak Dilindungi",
    notCoveredItems: [
      "Keadaan sedia ada",
      "Pemeriksaan rutin dan vaksinasi",
      "Pembersihan gigi (melainkan berkaitan kecederaan)",
      "Dandanan dan penginapan",
      "Isu berkaitan pembiakan",
      "Prosedur kosmetik",
      "Tuntutan semasa tempoh menunggu",
      "Kemudaratan sengaja oleh pemilik"
    ],
    insuranceTip: "<strong>Tip Insurans:</strong> \"Beli insurans haiwan apabila haiwan anda masih muda dan sihat. Kebanyakan polisi mempunyai tempoh menunggu untuk penyakit (14-30 hari) dan tidak akan melindungi keadaan sedia ada. Semakin awal anda mula, semakin banyak perlindungan yang anda ada.\" — Penasihat Kewangan, Majlis Perancangan Kewangan Malaysia",
    claimTitle: "Cara Memfailkan Tuntutan Insurans Selepas Kecemasan",
    claimSteps: [
      "<strong>1. Maklumkan syarikat insurans anda</strong> – Kebanyakan memerlukan pemberitahuan dalam 24-48 jam rawatan",
      "<strong>2. Kumpulkan dokumentasi</strong> – Simpan semua resit, laporan perubatan, dan invois",
      "<strong>3. Lengkapkan borang tuntutan</strong> – Isi borang tuntutan syarikat insurans dengan tepat",
      "<strong>4. Hantar dokumen sokongan</strong> – Sertakan laporan vet, foto jika berkenaan",
      "<strong>5. Tunggu pemprosesan</strong> – Tuntutan biasanya diproses dalam 7-14 hari perniagaan",
      "<strong>6. Terima bayaran balik</strong> – Jumlah tolak deduktibel dimasukkan ke akaun anda"
    ],
    preventionTitle: "Pencegahan dan Persediaan",
    preventionIntro: "Kecemasan terbaik adalah yang tidak pernah berlaku. Mengambil langkah pencegahan mengurangkan risiko kecemasan haiwan dengan ketara:",
    petProofTitle: "🏠 Kalis Haiwan Rumah Anda",
    petProofItems: [
      "Simpan ubat-ubatan dan bahan kimia dengan selamat",
      "Jauhkan tumbuhan toksik dari jangkauan",
      "Pastikan tong sampah dengan penutup",
      "Tutup kord elektrik",
      "Pasang pengadang tingkap dan balkoni",
      "Buang objek kecil yang boleh ditelan"
    ],
    healthMaintenanceTitle: "🩺 Penyelenggaraan Kesihatan Berkala",
    healthMaintenanceItems: [
      "Pemeriksaan vet tahunan (dua kali setahun untuk warga emas)",
      "Pastikan vaksinasi terkini",
      "Pencegahan kutu dan kutu bulanan",
      "Jadual rawatan cacing berkala",
      "Penjagaan dan pembersihan gigi",
      "Kekalkan berat badan sihat melalui diet dan senaman"
    ],
    emergencyKitTitle: "🧰 Bina Kit Kecemasan Haiwan",
    emergencyKitIntro: "Simpan item-item ini bersama di lokasi yang mudah diakses:",
    firstAidSuppliesLabel: "Bekalan Pertolongan Cemas:",
    firstAidSupplies: ["Kasa dan pembalut", "Lap antiseptik", "Hidrogen peroksida (3%)", "Gunting dan pinset", "Termometer digital"],
    documentsLabel: "Dokumen:",
    documents: ["Rekod vaksinasi", "Sejarah perubatan", "Butiran polisi insurans", "Kenalan vet kecemasan", "Foto haiwan terkini"],
    essentialsLabel: "Keperluan:",
    essentials: ["Tali dan kolar tambahan", "Muncung (saiz sesuai)", "Selimut atau tuala", "Pembawa atau sangkar", "Bekalan makanan/air 3 hari"],
    preparednessQuote: "<strong>Persediaan Berbaloi:</strong> Pemilik haiwan dengan pelan kecemasan bertindak balas 3x lebih cepat semasa krisis dan mempunyai hasil 50% lebih baik, menurut penyelidikan oleh Persatuan Perubatan Veterinar Amerika. Ambil 30 minit hujung minggu ini untuk menyediakan kit kecemasan anda dan simpan kenalan penting.",
    faqTitle: "Soalan Lazim",
    faqs: [
      {
        question: "Bagaimana saya tahu jika keadaan haiwan saya adalah kecemasan sebenar?",
        answer: "Kecemasan sebenar termasuk kesukaran bernafas, pendarahan teruk yang tidak berhenti, kehilangan kesedaran, sawan berlangsung lebih daripada 3 minit, tidak dapat membuang air kecil selama 12+ jam, disyaki keracunan, trauma teruk, dan rebah tiba-tiba. Apabila ragu-ragu, hubungi vet atau klinik kecemasan anda – mereka boleh membantu anda menilai situasi melalui telefon."
      },
      {
        question: "Adakah vet kecemasan 24 jam lebih mahal daripada vet biasa?",
        answer: "Ya, rawatan veterinar kecemasan biasanya 20-50% lebih mahal daripada lawatan vet biasa. Ini mencerminkan peralatan khusus, keperluan kakitangan untuk penjagaan sepanjang masa, dan sifat kritikal perubatan kecemasan. Walau bagaimanapun, kos yang lebih tinggi diimbangi oleh penjagaan segera yang berpotensi menyelamatkan nyawa yang diterima oleh haiwan anda. Insurans haiwan boleh membantu menampung 70-80% kos ini."
      },
      {
        question: "Bolehkah saya memberi ubat manusia kepada haiwan saya dalam kecemasan?",
        answer: "<strong>Tidak, jangan sekali-kali memberi ubat manusia kepada haiwan tanpa panduan veterinar.</strong> Banyak ubat manusia biasa adalah toksik kepada haiwan. Ibuprofen, acetaminophen (Panadol), dan aspirin boleh menyebabkan kegagalan buah pinggang, kerosakan hati, dan kematian pada haiwan. Sentiasa hubungi doktor haiwan sebelum memberi sebarang ubat."
      },
      {
        question: "Apa yang perlu saya lakukan jika haiwan saya dilanggar kereta tetapi kelihatan baik?",
        answer: "Sentiasa dapatkan rawatan veterinar dengan segera, walaupun haiwan anda kelihatan tidak cedera. Pendarahan dalaman, kerosakan organ, dan gejala kejutan boleh mengambil masa beberapa jam untuk nyata. Haiwan sering menyembunyikan kesakitan kerana naluri bertahan. Pastikan haiwan anda tenang, hadkan pergerakan, dan hantar ke klinik vet terdekat untuk pemeriksaan menyeluruh termasuk X-ray."
      },
      {
        question: "Bagaimana saya boleh mencari vet 24 jam berhampiran saya di Malaysia?",
        answer: "Gunakan pencari klinik kami untuk mencari klinik veterinar 24 jam di kawasan anda. Bandar utama seperti Kuala Lumpur, Petaling Jaya, Pulau Pinang, dan Johor Bahru mempunyai beberapa klinik kecemasan 24/7. Simpan sekurang-kurangnya 2-3 kenalan vet kecemasan dalam telefon anda sebelum anda memerlukannya."
      },
      {
        question: "Adakah insurans haiwan melindungi rawatan kecemasan serta-merta selepas pembelian?",
        answer: "Kebanyakan polisi insurans haiwan mempunyai tempoh menunggu. Perlindungan kemalangan biasanya bermula dalam 24-48 jam pembelian, tetapi perlindungan penyakit biasanya memerlukan tempoh menunggu 14-30 hari. Ini menghalang orang daripada membeli insurans hanya apabila haiwan mereka sudah sakit. Beli insurans apabila haiwan anda sihat untuk memastikan perlindungan penuh apabila anda memerlukannya."
      },
      {
        question: "Apakah kecemasan haiwan yang paling biasa dalam iklim tropika Malaysia?",
        answer: "Kecemasan yang paling biasa termasuk strok haba (terutamanya dalam baka brachycephalic), demam kutu (Ehrlichiosis dan Babesiosis), gigitan ular, keracunan daripada bahan kimia isi rumah atau tumbuhan toksik, kemalangan jalan raya, dan isu gastrik daripada makanan yang tidak sesuai. Iklim panas dan lembap juga menyebabkan haiwan terdedah kepada jangkitan kulit dan isu kulat yang boleh menjadi teruk jika tidak dirawat."
      },
      {
        question: "Patutkah saya aruh muntah jika haiwan saya makan sesuatu yang toksik?",
        answer: "<strong>Jangan aruh muntah tanpa panduan veterinar.</strong> Sesetengah bahan menyebabkan lebih banyak kerosakan apabila dimuntahkan (bahan kimia kaustik, objek tajam, produk petroleum). Hubungi vet atau klinik kecemasan anda dengan segera – mereka akan menasihatkan sama ada mengaruh muntah adalah selamat berdasarkan apa yang dimakan oleh haiwan anda dan berapa lama dahulu."
      },
      {
        question: "Berapa banyak yang perlu saya jangkakan untuk membayar lawatan vet kecemasan di Malaysia?",
        answer: "Kos vet kecemasan di Malaysia berkisar antara RM500-5,000+ bergantung pada keterukan. Yuran konsultasi adalah RM80-200, ujian darah RM150-400, X-ray RM150-350, dan pembedahan boleh berkisar dari RM500 untuk prosedur kecil hingga RM10,000+ untuk pembedahan kompleks. Penjagaan ICU menambah RM150-500 semalam. Insurans haiwan boleh menampung 70-80% kos ini."
      },
      {
        question: "Apakah maklumat yang perlu saya berikan apabila menghubungi vet kecemasan?",
        answer: "Bersedia untuk berkongsi: spesies, baka, umur, dan berat haiwan anda; gejala yang anda perhatikan; bila gejala bermula; sebarang punca berpotensi (adakah mereka makan sesuatu, mengalami kemalangan); sejarah perubatan haiwan anda dan ubat-ubatan semasa; dan lokasi anda serta anggaran masa ketibaan. Ini membantu klinik bersedia untuk ketibaan haiwan anda."
      }
    ],
    conclusionTitle: "Kesimpulan: Bersedia, Tenang, Bertindak Cepat",
    conclusionPara1: "Kecemasan haiwan adalah tekanan, tetapi persediaan boleh membuat semua perbezaan. Dengan memahami tanda-tanda kecemasan, mengetahui pertolongan cemas asas, mempunyai kenalan kecemasan sedia, dan mempertimbangkan insurans haiwan, anda memberikan ahli keluarga berbulu anda peluang terbaik untuk hasil yang positif.",
    conclusionPara2: "<strong>Ingat:</strong> Apabila ragu-ragu, sentiasa berhati-hati dan dapatkan rawatan veterinar. Tiada siapa yang mengenali haiwan anda lebih baik daripada anda – percaya naluri anda jika sesuatu kelihatan salah.",
    actionTitle: "Ambil Tindakan Hari Ini:",
    actionItems: [
      "Simpan 2-3 kenalan vet kecemasan dalam telefon anda",
      "Sediakan kit pertolongan cemas haiwan asas",
      "Pertimbangkan insurans haiwan semasa haiwan anda sihat",
      "Belajar memeriksa tanda-tanda vital haiwan anda",
      "Kongsi panduan ini dengan pemilik haiwan lain"
    ],
    authorBio: "Artikel ini disemak oleh Dr. Sarah Lim, DVM, seorang doktor haiwan yang berpraktik di Kuala Lumpur dengan lebih 15 tahun pengalaman dalam perubatan kecemasan dan kritikal. Dr. Lim adalah ahli Persatuan Perubatan Veterinar Malaysia dan telah merawat ribuan kecemasan haiwan.",
    citationsTitle: "Rujukan & Petikan"
  },
  zh: {
    metaTitle: "宠物紧急情况如何处理：完整指南 | PetCare Malaysia",
    metaDescription: "了解在马来西亚宠物紧急情况下应采取的关键步骤。涵盖急救、24小时兽医诊所、宠物保险覆盖范围和专家兽医建议。2024年更新版。",
    category: "紧急情况",
    title: "宠物紧急情况如何处理：马来西亚宠物主人完整指南",
    date: "2024年12月15日",
    readTime: "15分钟阅读",
    reviewedBy: "由 Dr. Sarah Lim, DVM 审核",
    share: "分享",
    save: "保存",
    backToBlog: "返回博客",
    heroImageAlt: "兽医在紧急就诊期间检查狗狗",
    heroImageCaption: "兽医为宠物提供紧急护理。照片：Unsplash",
    emergencyAlertTitle: "紧急情况？立即行动！",
    emergencyAlertText: "如果您的宠物正在经历危及生命的紧急情况，请不要等待。立即联系24小时兽医诊所。",
    findVetButton: "查找附近的24/7兽医",
    tocTitle: "目录",
    tocItems: [
      "1. 引言：为什么紧急准备很重要",
      "2. 识别宠物紧急情况",
      "3. 紧急情况下的即时步骤",
      "4. 宠物急救基础知识",
      "5. 安全运送到兽医诊所",
      "6. 马来西亚常见的宠物紧急情况",
      "7. 在紧急兽医诊所的期望",
      "8. 宠物保险和紧急情况覆盖",
      "9. 预防和准备",
      "10. 常见问题"
    ],
    introTitle: "引言：为什么紧急准备很重要",
    introPara1: "每个宠物主人最担心的噩梦就是面对心爱伴侣的突发健康危机。根据<strong>马来西亚兽医服务部 (DVS)</strong> 的数据，马来西亚的宠物拥有量每年增长12%，目前有超过300万家庭饲养狗和猫。",
    introPara2: "<strong>研究表明，为紧急情况做好准备的宠物主人有明显更好的结果。</strong> 马来西亚兽医医学协会2023年的调查发现，78%的宠物在紧急情况下的死亡可以通过更快的响应时间和基本急救知识来预防。",
    keyStatLabel: "关键统计",
    keyStatValue: "每8分钟",
    keyStatDesc: "马来西亚就有一只宠物经历需要立即兽医关注的医疗紧急情况。",
    introPara3: "这份全面的指南将为您提供有效处理宠物紧急情况的知识和信心。无论您是第一次养宠物还是有多年经验，了解紧急协议可能意味着您毛茸茸的家庭成员的生死之别。",
    recognizingTitle: "识别宠物紧急情况",
    recognizingIntro: "知道您的宠物何时需要紧急护理而不是常规兽医访问是至关重要的。以下是需要<strong>立即兽医关注</strong>的关键迹象：",
    lifeThreatTitle: "🚨 危及生命的紧急迹象",
    lifeThreatItems: [
      "<strong>呼吸困难</strong> – 喘气、窒息、牙龈或舌头发蓝",
      "<strong>严重出血</strong> – 按压5分钟后仍不止血的伤口",
      "<strong>失去意识</strong> – 对刺激无反应",
      "<strong>癫痫发作</strong> – 尤其是持续超过3分钟或连续发作",
      "<strong>无法排尿</strong> – 用力但12+小时未能排尿",
      "<strong>疑似中毒</strong> – 摄入有毒物质、巧克力、木糖醇或药物",
      "<strong>创伤</strong> – 被车辆撞击、从高处跌落、狗咬伤",
      "<strong>腹部膨胀</strong> – 尤其伴有无效作呕（胃扩张/胃扭转的迹象）"
    ],
    urgentTitle: "⚠️ 紧急（几小时内寻求护理）",
    urgentItems: [
      "持续呕吐或腹泻（超过3次）",
      "超过24小时拒绝进食",
      "持续超过一天的嗜睡或虚弱",
      "眼睛受伤或突然视力变化",
      "跛行或肢体无法承重",
      "分娩困难（幼崽之间超过2小时）"
    ],
    expertInsight1: "<strong>专家见解：</strong> \"宠物主人经常低估牙龈颜色变化或呼吸模式等细微迹象。学会在日常玩耍时检查宠物的生命体征可以帮助您在紧急情况下快速发现异常。\" — Ahmad Razali 博士，紧急兽医专家，马来亚博特拉大学",
    immediateTitle: "紧急情况下的即时步骤",
    immediateIntro: "当面对宠物紧急情况时，您在最初几分钟的反应可以显著影响结果。遵循以下关键步骤：",
    step1Title: "保持冷静",
    step1Text: "您的宠物能感受到您的压力。深呼吸。恐慌只会让您的宠物更加害怕，可能导致它们变得具有攻击性或更难控制。用柔和、令人安心的语调说话。",
    step2Title: "评估情况",
    step2Text: "快速评估您宠物的状况。检查呼吸、意识、出血和明显的伤害。记下任何症状以向兽医报告。如果您的宠物失去意识，通过将手指放在大腿内侧来检查脉搏。",
    step3Title: "致电紧急兽医",
    step3Text: "立即联系最近的24小时兽医诊所。清楚地描述紧急情况并遵循他们的指示。许多诊所可以在您前往途中提供电话指导。",
    step4Title: "提供基本急救（如果受过培训）",
    step4Text: "只有在您确信自己在做什么时才进行急救。不正确的急救可能造成更大的伤害。基本操作包括用干净的布按压止血和保持气道通畅。",
    step5Title: "安全运送",
    step5Text: "小心移动您的宠物以避免加重伤害。对于较大的宠物，使用坚固的载体、毯子或木板作为担架。保持宠物温暖并在运输过程中减少移动。",
    saveContactsTitle: "📱 现在保存这些紧急联系方式",
    saveContactsIntro: "在紧急情况发生之前将这些号码存入您的手机：",
    saveContactsItems: [
      "您常规兽医的非工作时间热线",
      "最近的24小时紧急兽医医院",
      "动物中毒控制中心（如果您所在地区有）",
      "宠物救护车服务联系方式"
    ],
    firstAidTitle: "宠物急救基础知识",
    firstAidIntro: "虽然兽医护理始终应该是您的首选，但了解基本的宠物急救可以在运输过程中稳定您的宠物。根据<strong>马来西亚动物福利协会</strong>的数据，接受过急救培训的宠物主人在紧急情况下获得积极结果的可能性高40%。",
    bleedingTitle: "控制出血",
    bleedingSteps: [
      "使用干净的布、毛巾或绷带施加坚实的直接压力",
      "保持压力至少5分钟不要检查",
      "如果血液渗透，在不移除原始布料的情况下添加更多层",
      "对于肢体伤口，如果可能的话抬高受影响的区域",
      "除非受过培训，否则避免使用止血带 – 不正确的使用可能导致组织坏死"
    ],
    cprTitle: "宠物心肺复苏术 (CPR)",
    cprImportant: "<strong>重要提示：</strong> 只有在您的宠物没有脉搏且没有呼吸时才进行心肺复苏。不正确的心肺复苏可能造成伤害。",
    cprDogsTitle: "对于狗：",
    cprDogSteps: [
      "在坚硬的表面上将其侧卧（右侧）",
      "将手放在心脏上方（前肘后方）",
      "压缩胸部1/3到1/2深度",
      "每分钟100-120次压缩",
      "每30次压缩进行2次人工呼吸"
    ],
    cprCatsTitle: "对于猫：",
    cprCatSteps: [
      "侧卧（右侧）",
      "用一只手压缩胸部",
      "比狗更轻柔的压缩",
      "相同频率：每分钟100-120次",
      "闭上嘴巴，对着鼻子呼气"
    ],
    chokingTitle: "窒息应对",
    chokingIntro: "如果您的宠物正在窒息但仍有意识且能够呼吸：",
    chokingSteps: [
      "小心打开嘴巴并寻找可见的阻塞物",
      "如果可见，用手指小心地将其取出（避免推得更深）",
      "对于小型狗/猫：用大腿倒立并轻轻摇晃",
      "对于大型狗：进行海姆利克法 – 在肋骨后方用力推压",
      "无论结果如何立即赶往兽医诊所"
    ],
    firstAidCourseRec: "<strong>建议：</strong> 考虑参加宠物急救课程。马来西亚红新月会和几家兽医诊所提供经认证的宠物急救培训，可以为您应对紧急情况做好准备。这些课程通常费用为RM150-300，并提供使用模型的实践训练。",
    transportTitle: "安全运送到兽医诊所",
    transportIntro: "运输过程中不当处理可能会加重伤害。以下是如何安全移动您的宠物：",
    transportDogsTitle: "🐕 对于狗",
    transportDogItems: [
      "如果有意识使用嘴套（受伤的宠物可能因疼痛而咬人）",
      "对于脊柱损伤，使用硬板作为担架",
      "对于较大的狗，使用毯子吊带抬起",
      "保持受伤区域固定",
      "在车辆中固定以防止滑动"
    ],
    transportCatsTitle: "🐱 对于猫",
    transportCatItems: [
      "如有可用使用宠物箱；用毛巾覆盖以减少压力",
      "用毛巾或毯子包裹以防止逃脱",
      "移动时支撑头部和脊柱",
      "运输时保持宠物箱水平",
      "轻声说话以提供安慰"
    ],
    drivingTipsTitle: "🚗 宠物紧急情况驾驶提示",
    drivingTipsItems: [
      "如果可能让其他人驾驶，这样您可以监测您的宠物",
      "小心驾驶 – 突然停车可能导致额外伤害",
      "打开空调保持宠物凉爽",
      "提前致电诊所让他们为您的到来做好准备",
      "保留症状和时间线的记录与兽医分享"
    ],
    commonTitle: "马来西亚常见的宠物紧急情况",
    commonIntro: "马来西亚的热带气候和城市环境为宠物创造了独特的紧急风险。根据全国各地兽医诊所的数据，以下是最常见的紧急情况：",
    heatStrokeTitle: "🌡️ 中暑",
    heatStrokeIntro: "马来西亚27-32°C的平均温度使中暑极为常见，尤其是在短头颅品种（如斗牛犬、巴哥犬等扁脸狗）中。",
    signsLabel: "迹象：",
    heatStrokeSigns: [
      "过度喘息和流口水",
      "舌头和牙龈鲜红",
      "呕吐、踉跄",
      "倒塌或失去意识"
    ],
    immediateActionLabel: "即时行动：",
    heatStrokeActions: [
      "移至阴凉处",
      "用凉水（不是冷水）涂抹身体",
      "提供少量水",
      "立即赶往兽医诊所"
    ],
    tickFeverTitle: "🦠 蜱虫热（埃里希体病/巴贝斯虫病）",
    tickFeverIntro: "蜱虫传播的疾病在马来西亚是地方病。如果不治疗，可能在几天内致命。",
    tickFeverSigns: [
      "高烧（超过39.5°C）",
      "食欲不振和嗜睡",
      "牙龈苍白（贫血）",
      "鼻子或尿液出血"
    ],
    preventionLabel: "预防：",
    tickFeverPrevention: [
      "每月预防蜱虫的药物",
      "户外活动后定期检查蜱虫",
      "保持院子里的草坪短小",
      "每年进行蜱虫疾病血液检测"
    ],
    poisoningTitle: "☠️ 中毒",
    poisoningIntro: "马来西亚家庭中宠物可能摄入的常见有毒物质：",
    foodToxinsLabel: "食物毒素：",
    foodToxins: ["巧克力（可可碱）", "葡萄和葡萄干", "洋葱和大蒜", "木糖醇（在口香糖、糖果中）"],
    householdLabel: "家用品：",
    householdItems: ["鼠药", "杀虫剂", "清洁产品", "人类药物"],
    plantsLabel: "植物：",
    plantItems: ["百合花（对猫有毒）", "苏铁", "夹竹桃", "绿萝"],
    poisoningWarning: "⚠️ 重要提示：除非兽医特别指示，否则不要催吐。某些毒素在呕吐时会造成更大的伤害。",
    roadAccidentTitle: "🚗 道路交通事故",
    roadAccidentIntro: "马来西亚城市宠物紧急情况的主要原因之一。内部损伤可能不会立即显现。",
    roadAccidentItems: [
      "<strong>始终假设存在内部损伤</strong> – 即使宠物看起来没事也要立即寻求兽医护理",
      "不要给予食物或水（可能需要手术）",
      "运输时保持脊柱笔直",
      "注意延迟症状：呼吸困难、牙龈苍白、腹部肿胀"
    ],
    localContextQuote: "<strong>本地背景：</strong> 马来西亚防止虐待动物协会 (MSPCA) 报告称，流浪狗袭击和道路事故占吉隆坡、槟城和柔佛巴鲁紧急兽医就诊的30%以上。保持宠物牵绳和植入芯片可以预防许多此类事件。",
    vetExpectTitle: "在紧急兽医诊所的期望",
    vetExpectIntro: "了解紧急兽医流程可以减少焦虑并帮助您快速做出明智的决定：",
    triageTitle: "分诊评估",
    triageDesc: "到达时，工作人员将快速评估您宠物的状况并根据严重程度优先处理。危及生命的病例优先处理。",
    examTitle: "检查",
    examDesc: "兽医将进行彻底的身体检查以识别所有伤害和状况。",
    diagnosticsTitle: "诊断",
    diagnosticsDesc: "可能需要血液检查、X光、超声波和其他检测来了解问题的全部范围。",
    treatmentTitle: "治疗计划",
    treatmentDesc: "您将收到包含选项和费用估算的治疗计划。紧急护理可能很昂贵 – 准备好讨论付款方式。",
    monitoringTitle: "监测/住院",
    monitoringDesc: "某些紧急情况需要过夜监测或延长住院时间。",
    costsTitle: "💰 马来西亚紧急兽医费用",
    costsIntro: "紧急兽医护理可能很昂贵。以下是预期费用：",
    costItems: [
      { service: "紧急咨询", range: "RM80-200" },
      { service: "血液检查", range: "RM150-400" },
      { service: "X光", range: "RM150-350" },
      { service: "超声波", range: "RM200-500" },
      { service: "手术（小型）", range: "RM500-2,000" },
      { service: "手术（大型）", range: "RM2,000-10,000+" },
      { service: "ICU/住院", range: "RM150-500/晚" }
    ],
    costsNote: "*价格因诊所和地点而异。吉隆坡/雪兰莪诊所可能比其他州高20-30%。",
    insuranceTitle: "宠物保险和紧急情况覆盖",
    insuranceIntro: "宠物保险可以在紧急情况下成为财务救星。目前有几家提供商在马来西亚提供保险：",
    insuranceProvidersTitle: "🛡️ 马来西亚宠物保险提供商",
    insuranceProviders: [
      {
        name: "Oyen",
        monthly: "从RM45/月起",
        coverage: "每年最高RM8,000",
        features: ["70-80%报销", "涵盖事故和疾病", "24/7紧急热线", "无品种限制"],
        note: "疾病索赔有14天等待期"
      },
      {
        name: "MSIG",
        monthly: "从RM35/月起",
        coverage: "每年最高RM5,000",
        features: ["60-70%报销", "事故和疾病覆盖", "包含第三方责任", "成熟的理赔流程"],
        note: "疾病索赔有30天等待期"
      }
    ],
    coveredTitle: "✓ 通常涵盖",
    coveredItems: [
      "紧急咨询",
      "诊断检测（血液检查、X光）",
      "手术和麻醉",
      "住院和ICU",
      "处方药物",
      "后续治疗",
      "蜱虫热治疗",
      "事故相关伤害"
    ],
    notCoveredTitle: "✗ 通常不涵盖",
    notCoveredItems: [
      "既往疾病",
      "常规检查和疫苗接种",
      "牙齿清洁（除非与伤害相关）",
      "美容和寄养",
      "繁殖相关问题",
      "美容手术",
      "等待期内的索赔",
      "主人故意伤害"
    ],
    insuranceTip: "<strong>保险提示：</strong> \"在您的宠物年轻健康时购买宠物保险。大多数保单对疾病有等待期（14-30天），不会覆盖既往疾病。您越早开始，获得的保护就越多。\" — 财务顾问，马来西亚财务规划委员会",
    claimTitle: "紧急情况后如何提交保险索赔",
    claimSteps: [
      "<strong>1. 通知您的保险公司</strong> – 大多数要求在治疗后24-48小时内通知",
      "<strong>2. 收集文件</strong> – 保留所有收据、医疗报告和发票",
      "<strong>3. 填写索赔表格</strong> – 准确填写保险公司的索赔表格",
      "<strong>4. 提交支持文件</strong> – 包括兽医报告、适用时的照片",
      "<strong>5. 等待处理</strong> – 索赔通常在7-14个工作日内处理",
      "<strong>6. 收到报销</strong> – 扣除免赔额后的金额存入您的账户"
    ],
    preventionTitle: "预防和准备",
    preventionIntro: "最好的紧急情况是从未发生的紧急情况。采取预防措施可以显著降低宠物紧急情况的风险：",
    petProofTitle: "🏠 为您的家做宠物防护",
    petProofItems: [
      "安全存放药物和化学品",
      "让有毒植物远离宠物可及范围",
      "用盖子固定垃圾桶",
      "覆盖电线",
      "安装窗户和阳台护栏",
      "移除可能被吞咽的小物件"
    ],
    healthMaintenanceTitle: "🩺 定期健康维护",
    healthMaintenanceItems: [
      "每年兽医检查（老年宠物每年两次）",
      "保持疫苗接种最新",
      "每月预防蜱虫和跳蚤",
      "定期驱虫计划",
      "牙齿护理和清洁",
      "通过饮食和运动保持健康体重"
    ],
    emergencyKitTitle: "🧰 建立宠物紧急工具包",
    emergencyKitIntro: "将这些物品放在一个容易获取的位置：",
    firstAidSuppliesLabel: "急救用品：",
    firstAidSupplies: ["纱布和绷带", "消毒湿巾", "过氧化氢（3%）", "剪刀和镊子", "数字温度计"],
    documentsLabel: "文件：",
    documents: ["疫苗接种记录", "病史", "保险单详情", "紧急兽医联系方式", "近期宠物照片"],
    essentialsLabel: "必需品：",
    essentials: ["额外的牵引绳和项圈", "嘴套（适当大小）", "毯子或毛巾", "宠物箱或笼子", "3天的食物/水供应"],
    preparednessQuote: "<strong>准备有回报：</strong> 根据美国兽医医学协会的研究，有紧急计划的宠物主人在危机期间反应速度快3倍，结果好50%。本周末花30分钟组装您的紧急工具包并保存重要联系方式。",
    faqTitle: "常见问题",
    faqs: [
      {
        question: "我如何知道宠物的状况是否是真正的紧急情况？",
        answer: "真正的紧急情况包括呼吸困难、无法止住的严重出血、失去意识、持续超过3分钟的癫痫发作、12+小时无法排尿、疑似中毒、严重创伤和突然倒塌。如有疑问，请致电您的兽医或紧急诊所 – 他们可以通过电话帮助您评估情况。"
      },
      {
        question: "24小时紧急兽医比普通兽医更贵吗？",
        answer: "是的，紧急兽医护理通常比常规兽医就诊贵20-50%。这反映了专业设备、全天候护理的人员需求以及紧急医疗的关键性质。然而，较高的费用被您的宠物获得的即时、可能挽救生命的护理所抵消。宠物保险可以帮助支付这些费用的70-80%。"
      },
      {
        question: "我可以在紧急情况下给宠物服用人类药物吗？",
        answer: "<strong>不，永远不要在没有兽医指导的情况下给宠物服用人类药物。</strong> 许多常见的人类药物对动物有毒。布洛芬、对乙酰氨基酚（扑热息痛）和阿司匹林可能导致宠物肾衰竭、肝损伤和死亡。在给予任何药物之前，请务必联系兽医。"
      },
      {
        question: "如果我的宠物被车撞了但看起来没事怎么办？",
        answer: "即使您的宠物看起来没有受伤，也要立即寻求兽医护理。内出血、器官损伤和休克症状可能需要数小时才能显现。由于生存本能，宠物经常隐藏疼痛。保持宠物平静，限制移动，并运送到最近的兽医诊所进行包括X光在内的彻底检查。"
      },
      {
        question: "我如何在马来西亚找到附近的24小时兽医？",
        answer: "使用我们的诊所定位器查找您所在地区的24小时兽医诊所。吉隆坡、八打灵再也、槟城和柔佛巴鲁等主要城市有多家24/7紧急诊所。在需要之前，至少在手机中保存2-3个紧急兽医联系方式。"
      },
      {
        question: "宠物保险购买后是否立即涵盖紧急护理？",
        answer: "大多数宠物保险单有等待期。事故覆盖通常在购买后24-48小时内开始，但疾病覆盖通常需要14-30天的等待期。这可以防止人们只在宠物已经生病时才购买保险。在您的宠物健康时购买保险，以确保在需要时获得全面覆盖。"
      },
      {
        question: "在马来西亚热带气候中最常见的宠物紧急情况是什么？",
        answer: "最常见的紧急情况包括中暑（尤其是短头颅品种）、蜱虫热（埃里希体病和巴贝斯虫病）、蛇咬伤、家用化学品或有毒植物中毒、道路交通事故以及饮食不当引起的胃肠问题。炎热潮湿的气候也使宠物容易患上皮肤感染和真菌问题，如果不治疗可能会变得严重。"
      },
      {
        question: "如果我的宠物吃了有毒的东西，我应该催吐吗？",
        answer: "<strong>没有兽医指导不要催吐。</strong> 某些物质在呕吐时会造成更大的伤害（腐蚀性化学品、尖锐物体、石油产品）。立即致电您的兽医或紧急诊所 – 他们会根据您的宠物摄入了什么以及多久之前来建议催吐是否安全。"
      },
      {
        question: "在马来西亚紧急兽医就诊应该花多少钱？",
        answer: "马来西亚的紧急兽医费用根据严重程度从RM500-5,000+不等。咨询费为RM80-200，血液检查RM150-400，X光RM150-350，手术从小手术的RM500到复杂手术的RM10,000+不等。ICU护理每晚增加RM150-500。宠物保险可以支付这些费用的70-80%。"
      },
      {
        question: "致电紧急兽医时我应该提供什么信息？",
        answer: "准备好分享：您宠物的物种、品种、年龄和体重；您观察到的症状；症状开始的时间；任何潜在原因（它们吃了什么东西吗，发生了事故吗）；您宠物的病史和当前药物；以及您的位置和预计到达时间。这有助于诊所为您宠物的到来做好准备。"
      }
    ],
    conclusionTitle: "结论：做好准备，保持冷静，快速行动",
    conclusionPara1: "宠物紧急情况令人紧张，但准备可以发挥重要作用。通过了解紧急情况的迹象、了解基本急救知识、准备好紧急联系方式并考虑宠物保险，您正在为您毛茸茸的家庭成员提供最佳的积极结果机会。",
    conclusionPara2: "<strong>记住：</strong> 如有疑问，始终谨慎行事并寻求兽医护理。没有人比您更了解您的宠物 – 如果感觉有什么不对劲，请相信您的直觉。",
    actionTitle: "今天就采取行动：",
    actionItems: [
      "在手机中保存2-3个紧急兽医联系方式",
      "组装基本的宠物急救包",
      "在宠物健康时考虑宠物保险",
      "学习检查宠物的生命体征",
      "与其他宠物主人分享本指南"
    ],
    authorBio: "本文由 Dr. Sarah Lim, DVM 审核，她是吉隆坡的执业兽医，在紧急和重症护理医学方面有超过15年的经验。Lim 博士是马来西亚兽医医学协会的成员，已治疗过数千例宠物紧急情况。",
    citationsTitle: "参考文献和引用"
  }
};

export const nutritionGuideTranslations: Record<Language, NutritionGuideContent> = {
  en: {
    metaTitle: "Best Pet Food Brands Available in Malaysia 2024 | Complete Guide",
    metaDescription: "Comprehensive guide to the best pet food brands in Malaysia. Compare premium, mid-range, and budget options for dogs and cats. Expert nutrition advice and price comparisons.",
    category: "Nutrition",
    title: "Best Pet Food Brands Available in Malaysia: A Comprehensive Guide for 2024",
    date: "December 10, 2024",
    readTime: "12 min read",
    reviewedBy: "Reviewed by Dr. Lim Wei Ling, Veterinary Nutritionist",
    share: "Share",
    save: "Save",
    backToBlog: "Back to Blog",
    heroImageAlt: "Various premium pet food brands available in Malaysian pet stores",
    heroImageCaption: "A selection of premium pet food brands available in Malaysia. Photo: Unsplash",
    quickLinksTitle: "🛒 Quick Navigation",
    quickLinksIntro: "Jump to the section you need:",
    quickLinksItems: [
      "Premium Brands (RM300+/month)",
      "Mid-Range Brands (RM150-300/month)",
      "Budget Options (Under RM150/month)",
      "Special Diet Options",
      "Where to Buy in Malaysia"
    ],
    tocTitle: "Table of Contents",
    tocItems: [
      "1. Introduction: Pet Nutrition in Malaysia",
      "2. Understanding Pet Food Labels",
      "3. Premium Pet Food Brands",
      "4. Mid-Range Pet Food Brands",
      "5. Budget-Friendly Options",
      "6. Local Malaysian Brands",
      "7. Price Comparison Guide",
      "8. Special Diets and Prescription Food",
      "9. Where to Buy Pet Food in Malaysia",
      "10. Pet Insurance and Nutritional Coverage",
      "11. Frequently Asked Questions"
    ],
    introTitle: "Introduction: Pet Nutrition in Malaysia",
    introPara1: "Choosing the right food for your pet is one of the most important decisions you'll make as a pet owner. According to the <strong>Department of Veterinary Services Malaysia (DVS)</strong>, proper nutrition can extend your pet's lifespan by up to 2-3 years and significantly reduce veterinary bills.",
    introPara2: "<strong>The Malaysian pet food market has grown by 15% annually</strong>, with pet owners increasingly seeking premium nutrition options. A 2023 survey by the Malaysian Pet Industry Association found that 67% of pet owners are willing to pay more for better quality food.",
    keyStatLabel: "Key Statistic",
    keyStatValue: "RM2.3 Billion",
    keyStatDesc: "The estimated value of Malaysia's pet food market in 2024, growing at 15% annually.",
    introPara3: "This comprehensive guide will help you navigate the vast array of pet food options available in Malaysia. Whether you're a first-time pet owner or looking to upgrade your pet's diet, we'll cover everything from premium international brands to affordable local alternatives.",
    expertInsight1: "<strong>Expert Insight:</strong> \"In Malaysia's hot and humid climate, pets require food with higher quality proteins and fats to maintain energy levels. Avoid foods with excessive fillers like corn and wheat, which can contribute to weight gain and digestive issues.\" — Dr. Lim Wei Ling, Veterinary Nutritionist, Malaysian Veterinary Council",
    labelsTitle: "Understanding Pet Food Labels",
    labelsIntro: "Before comparing brands, it's essential to understand how to read pet food labels. The <strong>Association of American Feed Control Officials (AAFCO)</strong> sets nutritional standards that reputable brands follow.",
    labelComponentsTitle: "📋 Key Label Components to Check",
    labelComponents: [
      "<strong>Protein Source</strong> – Look for named meat (chicken, beef, salmon) as the first ingredient, not \"meat by-products\"",
      "<strong>Guaranteed Analysis</strong> – Minimum protein (dogs: 18-26%, cats: 26-30%) and fat content",
      "<strong>AAFCO Statement</strong> – Confirms nutritional adequacy for specific life stages",
      "<strong>Ingredient List</strong> – Listed by weight; avoid foods where grains are the first 3 ingredients",
      "<strong>Calorie Content</strong> – Important for weight management, especially in Malaysia's sedentary indoor pets"
    ],
    ingredientsToAvoidTitle: "🚫 Ingredients to Avoid",
    ingredientsToAvoid: [
      "<strong>BHA, BHT, Ethoxyquin</strong> – Artificial preservatives linked to health issues",
      "<strong>Artificial Colors</strong> – Red 40, Yellow 5, Blue 2 (unnecessary additives)",
      "<strong>Propylene Glycol</strong> – Toxic to cats, sometimes found in semi-moist foods",
      "<strong>Corn Syrup / Sugar</strong> – Can lead to obesity and diabetes",
      "<strong>Unnamed Meat Sources</strong> – \"Animal by-products\" or \"meat meal\" without specification"
    ],
    localInsight1: "<strong>Local Insight:</strong> \"Malaysian pet owners should note that pet foods imported from Thailand, Australia, and the US undergo strict DVS inspection. Always check for the import license number on packaging to ensure authenticity.\" — Malaysian Veterinary Services Department",
    premiumTitle: "Premium Pet Food Brands",
    premiumIntro: "Premium brands use high-quality ingredients, often human-grade proteins, and undergo rigorous quality control. While more expensive, they typically require smaller portions due to higher nutrient density.",
    brands: [
      {
        name: "Orijen",
        badge: "TOP PICK",
        origin: "Canada",
        priceRange: "RM350-500 per 5kg",
        proteinContent: "38-42%",
        bestFor: "Active dogs, puppies, cats",
        featuresLabel: "Key Features:",
        features: ["85% meat content", "Biologically appropriate formula", "Fresh regional ingredients", "Grain-free options available"],
        verdict: "Orijen consistently ranks as one of the best pet foods globally. While expensive in Malaysia, its nutrient density means smaller portions are needed, partially offsetting the cost."
      },
      {
        name: "Royal Canin",
        badge: "MOST POPULAR",
        origin: "France (manufactured in various countries)",
        priceRange: "RM180-350 per 3-4kg",
        proteinContent: "25-30%",
        bestFor: "Breed-specific needs, veterinary diets",
        featuresLabel: "Key Features:",
        features: ["Breed-specific formulas", "Veterinary therapeutic diets", "Widely available in Malaysia", "Size-specific kibble shapes"],
        verdict: "Royal Canin is the go-to brand recommended by Malaysian veterinarians. Their prescription diets for kidney disease, allergies, and digestive issues are particularly valuable. Available at most pet shops and veterinary clinics nationwide."
      },
      {
        name: "Hill's Science Diet",
        origin: "USA",
        priceRange: "RM200-380 per 3-4kg",
        proteinContent: "22-32%",
        bestFor: "Senior pets, weight management, sensitive stomachs",
        featuresLabel: "Key Features:",
        features: ["Science-backed formulations", "Prescription Diet range", "Life stage specific", "Joint and mobility support"],
        verdict: "Hill's is another vet-recommended brand with strong research backing. Their Prescription Diet line is essential for pets with chronic health conditions. Slightly less available than Royal Canin but found in most major pet stores."
      },
      {
        name: "Acana",
        origin: "Canada (same company as Orijen)",
        priceRange: "RM280-420 per 5kg",
        proteinContent: "31-35%",
        bestFor: "Dogs needing high protein without Orijen's price",
        featuresLabel: "Key Features:",
        features: ["70% meat content", "Regional ingredient sourcing", "Limited ingredient options", "More affordable than Orijen"],
        verdict: "Acana offers Orijen-quality ingredients at a slightly lower price point. A great choice for pet owners who want premium nutrition without the highest price tag."
      }
    ],
    premiumExpertQuote: "<strong>Expert Insight:</strong> \"Premium pet foods may seem expensive upfront, but they often reduce long-term veterinary costs. Pets fed quality diets have 40% fewer digestive issues and skin problems compared to those on economy brands.\" — Dr. Tan Mei Ling, Small Animal Nutritionist, University Putra Malaysia",
    midRangeTitle: "Mid-Range Pet Food Brands",
    midRangeIntro: "Mid-range brands offer a balance between quality and affordability. These are excellent choices for pet owners who want better nutrition than budget brands without premium prices.",
    budgetTitle: "Budget-Friendly Options",
    budgetIntro: "Budget brands provide basic nutrition at affordable prices. While not as nutrient-dense as premium options, they meet minimum nutritional requirements.",
    localTitle: "Local Malaysian Brands",
    localIntro: "Several Malaysian companies produce pet food that caters to local preferences and budgets.",
    priceComparisonTitle: "Price Comparison Guide",
    priceComparisonHeaders: ["Brand", "Category", "Price/5kg", "Cost/Day (Medium Dog)"],
    specialDietsTitle: "Special Diets and Prescription Food",
    specialDietsIntro: "Some pets require specialized nutrition based on age, health conditions, or activity levels.",
    puppyKittenTitle: "🐶 Puppy/Kitten Formulas",
    puppyKittenText: "Higher protein and fat content for growth. Brands like Royal Canin, Hill's, and Orijen offer specific puppy/kitten lines with DHA for brain development.",
    seniorTitle: "👴 Senior Pet Formulas",
    seniorText: "Lower calories, joint support, and easier-to-digest proteins. Look for glucosamine and chondroitin for joint health.",
    weightManagementTitle: "⚖️ Weight Management",
    weightManagementText: "With pet obesity affecting 40% of Malaysian pets, weight management formulas with L-carnitine and reduced calories are essential.",
    sensitiveDigestionTitle: "🤢 Sensitive Digestion",
    sensitiveDigestionText: "Limited ingredient diets help identify food allergies. Novel proteins like duck, venison, or rabbit are useful for elimination diets.",
    skinCoatTitle: "🧴 Skin & Coat Health",
    skinCoatText: "In Malaysia's humid climate, skin issues are common. Foods with omega-3 fatty acids from fish oil support skin health.",
    whereToBuyTitle: "Where to Buy Pet Food in Malaysia",
    whereToBuyIntro: "Pet food is widely available across Malaysia through various channels:",
    physicalStoresTitle: "🏪 Physical Stores",
    physicalStores: [
      "<strong>Pet Safari</strong> – Wide selection, multiple locations",
      "<strong>Pet Lovers Centre</strong> – Found in most malls",
      "<strong>Pet World</strong> – Good premium brand selection",
      "<strong>Veterinary Clinics</strong> – Best for prescription diets",
      "<strong>AEON / Tesco</strong> – Budget brands available"
    ],
    onlinePlatformsTitle: "💻 Online Platforms",
    onlinePlatforms: [
      "<strong>Shopee / Lazada</strong> – Best prices, official brand stores",
      "<strong>PetMate.com.my</strong> – Local pet specialty store",
      "<strong>PerroMart</strong> – Good subscription options",
      "<strong>Petbacker</strong> – Also offers pet services"
    ],
    moneySavingTitle: "💰 Money-Saving Tips",
    moneySavingTips: [
      "<strong>Buy in bulk</strong> – Larger bags offer better value per kg",
      "<strong>Subscribe & save</strong> – Many online stores offer 10-15% off subscriptions",
      "<strong>Wait for sales</strong> – 11.11, 12.12, and Pet Month (October) sales offer significant discounts",
      "<strong>Join loyalty programs</strong> – Pet Safari and Pet Lovers Centre have point systems",
      "<strong>Compare prices</strong> – Use price tracking apps for online purchases"
    ],
    localTip: "<strong>Local Tip:</strong> \"East Malaysian pet owners in Sabah and Sarawak may find limited premium brand availability locally. Consider online ordering from Peninsular Malaysia – most stores offer free shipping for orders above RM100-150.\"",
    insuranceTitle: "Pet Insurance and Nutritional Coverage",
    insuranceIntro: "While pet insurance primarily covers medical expenses, some policies include benefits related to nutrition and prescription diets. Understanding these can help offset the cost of special dietary needs.",
    rxCoverageTitle: "🏥 What Pet Insurance Covers (Nutrition-Related)",
    rxCoverageItems: [
      { title: "Prescription Diets for Medical Conditions", desc: "Some policies cover prescription food when prescribed by a vet for conditions like kidney disease, diabetes, or allergies. Coverage typically ranges from RM500-2000 annually.", covered: true },
      { title: "Nutritional Consultations", desc: "Consultations with veterinary nutritionists may be covered under specialist visits.", covered: true },
      { title: "Regular Food Expenses", desc: "Standard pet food, treats, and supplements are NOT covered by any Malaysian pet insurance policy.", covered: false }
    ],
    insuranceTableTitle: "📊 Malaysian Pet Insurance Providers",
    insuranceTableHeaders: ["Provider", "Rx Diet Coverage", "Monthly Premium"],
    maximizingTitle: "💡 Maximizing Insurance Benefits for Nutrition",
    maximizingTips: [
      "<strong>Get documented diagnosis</strong> – Insurance requires vet documentation for prescription diet claims",
      "<strong>Keep all receipts</strong> – Both vet visits and food purchases",
      "<strong>Review policy wording</strong> – Some policies have specific exclusions for \"preventive\" diets",
      "<strong>Submit claims promptly</strong> – Most policies have 30-90 day claim windows"
    ],
    insuranceExpertQuote: "<strong>Expert Insight:</strong> \"Pet insurance is most valuable when your pet develops chronic conditions requiring prescription diets. A single month of renal diet food costs RM200-400. Insurance that covers even 50% of this cost pays for itself within a year.\" — Malaysian Pet Insurance Association",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        question: "What is the best dog food brand in Malaysia?",
        answer: "The \"best\" brand depends on your dog's needs and your budget. For premium nutrition, Orijen and Acana lead the market. Royal Canin is the most veterinarian-recommended. For value, Taste of the Wild offers excellent quality at mid-range prices. Budget-conscious owners can consider SmartHeart or Pedigree for basic nutrition."
      },
      {
        question: "How much should I spend on pet food monthly?",
        answer: "A general guideline: Budget RM80-150/month for small pets (cats, small dogs), RM150-300/month for medium dogs, and RM250-500/month for large breeds. Premium foods cost more upfront but require smaller portions, potentially equalizing costs. Factor in your pet's activity level and any health conditions."
      },
      {
        question: "Is grain-free food better for my pet?",
        answer: "Not necessarily. While grain-free diets benefit pets with confirmed grain allergies, most pets digest grains without issues. The FDA has investigated links between grain-free diets and dilated cardiomyopathy (DCM) in dogs. Consult your veterinarian before switching to grain-free, especially for breeds predisposed to heart conditions."
      },
      {
        question: "Can I mix wet and dry food?",
        answer: "Yes! Mixing wet and dry food is common and beneficial. Wet food adds moisture (important in Malaysia's heat) and is more palatable. Dry food helps maintain dental health. A typical ratio is 75% dry, 25% wet. Ensure the combined portions meet but don't exceed daily caloric needs."
      },
      {
        question: "How do I transition to a new pet food?",
        answer: "Gradual transition prevents digestive upset. Over 7-10 days: Days 1-3: 75% old food, 25% new food. Days 4-6: 50% each. Days 7-9: 25% old, 75% new. Day 10+: 100% new food. If your pet has a sensitive stomach, extend this to 14 days. Watch for vomiting, diarrhea, or food refusal."
      },
      {
        question: "Where can I buy prescription pet food in Malaysia?",
        answer: "Prescription diets (Royal Canin Veterinary, Hill's Prescription Diet) are available at veterinary clinics and authorized retailers. Some online stores sell prescription food but may require vet documentation. Major vet hospitals like TTSH, Mount Pleasant, and The Animal Doctors stock comprehensive prescription diet ranges."
      },
      {
        question: "Are imported pet foods safe in Malaysia?",
        answer: "Yes, if purchased from authorized dealers. All imported pet food must be registered with the Department of Veterinary Services (DVS) Malaysia and meet safety standards. Look for the DVS import license number on packaging. Avoid parallel imports from unauthorized sources, as they may have improper storage or be counterfeit products."
      },
      {
        question: "Do Malaysian pets need different nutrition than pets in cooler climates?",
        answer: "Somewhat. Malaysia's heat and humidity mean pets may need more water (consider wet food), slightly fewer calories (less needed to maintain body temperature), and foods rich in omega fatty acids to combat skin issues common in tropical climates. Parasites are also more prevalent, so foods with immune-supporting ingredients are beneficial."
      }
    ],
    finalQuote: "<strong>Final Word:</strong> \"The best pet food is one that your pet enjoys, meets their nutritional needs, and fits your budget. Don't be swayed by marketing – focus on ingredient quality and your pet's individual response. A shiny coat, healthy weight, regular digestion, and good energy levels indicate you've found the right food.\" — Malaysian Veterinary Medical Association",
    citationsTitle: "References & Citations",
    authorBio: "This article was reviewed by Dr. Lim Wei Ling, a veterinary nutritionist with the Malaysian Veterinary Council and over 10 years of experience in pet nutrition and dietary management."
  },
  ms: {
    metaTitle: "Jenama Makanan Haiwan Terbaik di Malaysia 2024 | Panduan Lengkap",
    metaDescription: "Panduan lengkap jenama makanan haiwan terbaik di Malaysia. Bandingkan pilihan premium, pertengahan, dan bajet untuk anjing dan kucing. Nasihat pemakanan pakar dan perbandingan harga.",
    category: "Pemakanan",
    title: "Jenama Makanan Haiwan Terbaik di Malaysia: Panduan Lengkap untuk 2024",
    date: "10 Disember 2024",
    readTime: "12 min bacaan",
    reviewedBy: "Disemak oleh Dr. Lim Wei Ling, Pakar Pemakanan Veterinar",
    share: "Kongsi",
    save: "Simpan",
    backToBlog: "Kembali ke Blog",
    heroImageAlt: "Pelbagai jenama makanan haiwan premium yang tersedia di kedai haiwan Malaysia",
    heroImageCaption: "Pilihan jenama makanan haiwan premium yang tersedia di Malaysia. Foto: Unsplash",
    quickLinksTitle: "🛒 Navigasi Pantas",
    quickLinksIntro: "Lompat ke bahagian yang anda perlukan:",
    quickLinksItems: [
      "Jenama Premium (RM300+/bulan)",
      "Jenama Pertengahan (RM150-300/bulan)",
      "Pilihan Bajet (Bawah RM150/bulan)",
      "Pilihan Diet Khas",
      "Di Mana Untuk Membeli di Malaysia"
    ],
    tocTitle: "Jadual Kandungan",
    tocItems: [
      "1. Pengenalan: Pemakanan Haiwan di Malaysia",
      "2. Memahami Label Makanan Haiwan",
      "3. Jenama Makanan Haiwan Premium",
      "4. Jenama Makanan Haiwan Pertengahan",
      "5. Pilihan Mesra Bajet",
      "6. Jenama Tempatan Malaysia",
      "7. Panduan Perbandingan Harga",
      "8. Diet Khas dan Makanan Preskripsi",
      "9. Di Mana Untuk Membeli Makanan Haiwan di Malaysia",
      "10. Insurans Haiwan dan Perlindungan Pemakanan",
      "11. Soalan Lazim"
    ],
    introTitle: "Pengenalan: Pemakanan Haiwan di Malaysia",
    introPara1: "Memilih makanan yang betul untuk haiwan peliharaan anda adalah salah satu keputusan paling penting yang akan anda buat sebagai pemilik haiwan. Menurut <strong>Jabatan Perkhidmatan Veterinar Malaysia (DVS)</strong>, pemakanan yang betul boleh memanjangkan jangka hayat haiwan anda sehingga 2-3 tahun dan mengurangkan bil veterinar dengan ketara.",
    introPara2: "<strong>Pasaran makanan haiwan Malaysia telah berkembang sebanyak 15% setiap tahun</strong>, dengan pemilik haiwan semakin mencari pilihan pemakanan premium. Tinjauan 2023 oleh Persatuan Industri Haiwan Malaysia mendapati bahawa 67% pemilik haiwan sanggup membayar lebih untuk makanan berkualiti tinggi.",
    keyStatLabel: "Statistik Utama",
    keyStatValue: "RM2.3 Bilion",
    keyStatDesc: "Anggaran nilai pasaran makanan haiwan Malaysia pada 2024, berkembang pada 15% setiap tahun.",
    introPara3: "Panduan lengkap ini akan membantu anda menavigasi pelbagai pilihan makanan haiwan yang tersedia di Malaysia. Sama ada anda pemilik haiwan kali pertama atau ingin meningkatkan diet haiwan anda, kami akan merangkumi segala-galanya dari jenama antarabangsa premium hingga alternatif tempatan yang berpatutan.",
    expertInsight1: "<strong>Pandangan Pakar:</strong> \"Dalam iklim panas dan lembap Malaysia, haiwan peliharaan memerlukan makanan dengan protein dan lemak berkualiti tinggi untuk mengekalkan tahap tenaga. Elakkan makanan dengan pengisi berlebihan seperti jagung dan gandum, yang boleh menyumbang kepada penambahan berat badan dan masalah penghadaman.\" — Dr. Lim Wei Ling, Pakar Pemakanan Veterinar, Majlis Veterinar Malaysia",
    labelsTitle: "Memahami Label Makanan Haiwan",
    labelsIntro: "Sebelum membandingkan jenama, adalah penting untuk memahami cara membaca label makanan haiwan. <strong>Association of American Feed Control Officials (AAFCO)</strong> menetapkan piawaian pemakanan yang diikuti oleh jenama bereputasi.",
    labelComponentsTitle: "📋 Komponen Label Utama untuk Diperiksa",
    labelComponents: [
      "<strong>Sumber Protein</strong> – Cari daging yang dinamakan (ayam, daging lembu, salmon) sebagai bahan pertama, bukan \"produk sampingan daging\"",
      "<strong>Analisis Terjamin</strong> – Kandungan protein minimum (anjing: 18-26%, kucing: 26-30%) dan lemak",
      "<strong>Pernyataan AAFCO</strong> – Mengesahkan kecukupan pemakanan untuk peringkat kehidupan tertentu",
      "<strong>Senarai Bahan</strong> – Disenaraikan mengikut berat; elakkan makanan di mana bijirin adalah 3 bahan pertama",
      "<strong>Kandungan Kalori</strong> – Penting untuk pengurusan berat badan, terutamanya dalam haiwan dalaman Malaysia yang kurang aktif"
    ],
    ingredientsToAvoidTitle: "🚫 Bahan untuk Dielakkan",
    ingredientsToAvoid: [
      "<strong>BHA, BHT, Ethoxyquin</strong> – Pengawet tiruan yang dikaitkan dengan masalah kesihatan",
      "<strong>Pewarna Tiruan</strong> – Red 40, Yellow 5, Blue 2 (bahan tambahan yang tidak perlu)",
      "<strong>Propylene Glycol</strong> – Toksik kepada kucing, kadang-kadang terdapat dalam makanan separa lembap",
      "<strong>Sirap Jagung / Gula</strong> – Boleh menyebabkan obesiti dan kencing manis",
      "<strong>Sumber Daging Tidak Dinamakan</strong> – \"Produk sampingan haiwan\" atau \"tepung daging\" tanpa spesifikasi"
    ],
    localInsight1: "<strong>Wawasan Tempatan:</strong> \"Pemilik haiwan Malaysia harus ambil perhatian bahawa makanan haiwan yang diimport dari Thailand, Australia, dan AS menjalani pemeriksaan DVS yang ketat. Sentiasa periksa nombor lesen import pada pembungkusan untuk memastikan keaslian.\" — Jabatan Perkhidmatan Veterinar Malaysia",
    premiumTitle: "Jenama Makanan Haiwan Premium",
    premiumIntro: "Jenama premium menggunakan bahan berkualiti tinggi, selalunya protein gred manusia, dan menjalani kawalan kualiti yang ketat. Walaupun lebih mahal, ia biasanya memerlukan bahagian yang lebih kecil kerana ketumpatan nutrien yang lebih tinggi.",
    brands: [
      {
        name: "Orijen",
        badge: "PILIHAN UTAMA",
        origin: "Kanada",
        priceRange: "RM350-500 per 5kg",
        proteinContent: "38-42%",
        bestFor: "Anjing aktif, anak anjing, kucing",
        featuresLabel: "Ciri-ciri Utama:",
        features: ["85% kandungan daging", "Formula yang sesuai secara biologi", "Bahan segar serantau", "Pilihan tanpa bijirin tersedia"],
        verdict: "Orijen secara konsisten menduduki salah satu makanan haiwan terbaik di seluruh dunia. Walaupun mahal di Malaysia, ketumpatan nutriennya bermakna bahagian yang lebih kecil diperlukan, sebahagiannya mengimbangi kos."
      },
      {
        name: "Royal Canin",
        badge: "PALING POPULAR",
        origin: "Perancis (dikilang di pelbagai negara)",
        priceRange: "RM180-350 per 3-4kg",
        proteinContent: "25-30%",
        bestFor: "Keperluan khusus baka, diet veterinar",
        featuresLabel: "Ciri-ciri Utama:",
        features: ["Formula khusus baka", "Diet terapeutik veterinar", "Tersedia secara meluas di Malaysia", "Bentuk kibble khusus saiz"],
        verdict: "Royal Canin adalah jenama pilihan yang disyorkan oleh doktor haiwan Malaysia. Diet preskripsi mereka untuk penyakit buah pinggang, alahan, dan masalah penghadaman sangat berharga. Tersedia di kebanyakan kedai haiwan dan klinik veterinar di seluruh negara."
      },
      {
        name: "Hill's Science Diet",
        origin: "USA",
        priceRange: "RM200-380 per 3-4kg",
        proteinContent: "22-32%",
        bestFor: "Haiwan tua, pengurusan berat badan, perut sensitif",
        featuresLabel: "Ciri-ciri Utama:",
        features: ["Formulasi disokong sains", "Rangkaian Diet Preskripsi", "Khusus peringkat kehidupan", "Sokongan sendi dan mobiliti"],
        verdict: "Hill's adalah satu lagi jenama yang disyorkan vet dengan sokongan penyelidikan yang kukuh. Barisan Diet Preskripsi mereka penting untuk haiwan dengan keadaan kesihatan kronik. Sedikit kurang tersedia berbanding Royal Canin tetapi terdapat di kebanyakan kedai haiwan utama."
      },
      {
        name: "Acana",
        origin: "Kanada (syarikat yang sama dengan Orijen)",
        priceRange: "RM280-420 per 5kg",
        proteinContent: "31-35%",
        bestFor: "Anjing yang memerlukan protein tinggi tanpa harga Orijen",
        featuresLabel: "Ciri-ciri Utama:",
        features: ["70% kandungan daging", "Sumber bahan serantau", "Pilihan bahan terhad", "Lebih mampu milik berbanding Orijen"],
        verdict: "Acana menawarkan bahan berkualiti Orijen pada harga yang sedikit lebih rendah. Pilihan yang bagus untuk pemilik haiwan yang mahukan pemakanan premium tanpa tanda harga tertinggi."
      }
    ],
    premiumExpertQuote: "<strong>Pandangan Pakar:</strong> \"Makanan haiwan premium mungkin kelihatan mahal pada awalnya, tetapi ia sering mengurangkan kos veterinar jangka panjang. Haiwan yang diberi makan diet berkualiti mempunyai 40% kurang masalah penghadaman dan kulit berbanding dengan jenama ekonomi.\" — Dr. Tan Mei Ling, Pakar Pemakanan Haiwan Kecil, Universiti Putra Malaysia",
    midRangeTitle: "Jenama Makanan Haiwan Pertengahan",
    midRangeIntro: "Jenama pertengahan menawarkan keseimbangan antara kualiti dan kemampuan. Ini adalah pilihan yang sangat baik untuk pemilik haiwan yang mahukan pemakanan yang lebih baik daripada jenama bajet tanpa harga premium.",
    budgetTitle: "Pilihan Mesra Bajet",
    budgetIntro: "Jenama bajet menyediakan pemakanan asas pada harga yang berpatutan. Walaupun tidak sepadat nutrien seperti pilihan premium, ia memenuhi keperluan pemakanan minimum.",
    localTitle: "Jenama Tempatan Malaysia",
    localIntro: "Beberapa syarikat Malaysia menghasilkan makanan haiwan yang memenuhi keutamaan dan bajet tempatan.",
    priceComparisonTitle: "Panduan Perbandingan Harga",
    priceComparisonHeaders: ["Jenama", "Kategori", "Harga/5kg", "Kos/Hari (Anjing Sederhana)"],
    specialDietsTitle: "Diet Khas dan Makanan Preskripsi",
    specialDietsIntro: "Sesetengah haiwan memerlukan pemakanan khusus berdasarkan umur, keadaan kesihatan, atau tahap aktiviti.",
    puppyKittenTitle: "🐶 Formula Anak Anjing/Anak Kucing",
    puppyKittenText: "Kandungan protein dan lemak yang lebih tinggi untuk pertumbuhan. Jenama seperti Royal Canin, Hill's, dan Orijen menawarkan barisan anak anjing/anak kucing tertentu dengan DHA untuk perkembangan otak.",
    seniorTitle: "👴 Formula Haiwan Tua",
    seniorText: "Kalori lebih rendah, sokongan sendi, dan protein yang lebih mudah dicerna. Cari glucosamine dan chondroitin untuk kesihatan sendi.",
    weightManagementTitle: "⚖️ Pengurusan Berat Badan",
    weightManagementText: "Dengan obesiti haiwan yang menjejaskan 40% haiwan Malaysia, formula pengurusan berat badan dengan L-carnitine dan kalori yang dikurangkan adalah penting.",
    sensitiveDigestionTitle: "🤢 Penghadaman Sensitif",
    sensitiveDigestionText: "Diet bahan terhad membantu mengenal pasti alahan makanan. Protein novel seperti itik, rusa, atau arnab berguna untuk diet eliminasi.",
    skinCoatTitle: "🧴 Kesihatan Kulit & Bulu",
    skinCoatText: "Dalam iklim lembap Malaysia, masalah kulit adalah biasa. Makanan dengan asid lemak omega-3 dari minyak ikan menyokong kesihatan kulit.",
    whereToBuyTitle: "Di Mana Untuk Membeli Makanan Haiwan di Malaysia",
    whereToBuyIntro: "Makanan haiwan tersedia secara meluas di seluruh Malaysia melalui pelbagai saluran:",
    physicalStoresTitle: "🏪 Kedai Fizikal",
    physicalStores: [
      "<strong>Pet Safari</strong> – Pilihan luas, pelbagai lokasi",
      "<strong>Pet Lovers Centre</strong> – Terdapat di kebanyakan pusat membeli-belah",
      "<strong>Pet World</strong> – Pilihan jenama premium yang baik",
      "<strong>Klinik Veterinar</strong> – Terbaik untuk diet preskripsi",
      "<strong>AEON / Tesco</strong> – Jenama bajet tersedia"
    ],
    onlinePlatformsTitle: "💻 Platform Dalam Talian",
    onlinePlatforms: [
      "<strong>Shopee / Lazada</strong> – Harga terbaik, kedai jenama rasmi",
      "<strong>PetMate.com.my</strong> – Kedai khusus haiwan tempatan",
      "<strong>PerroMart</strong> – Pilihan langganan yang baik",
      "<strong>Petbacker</strong> – Juga menawarkan perkhidmatan haiwan"
    ],
    moneySavingTitle: "💰 Tips Jimat Wang",
    moneySavingTips: [
      "<strong>Beli secara pukal</strong> – Beg yang lebih besar menawarkan nilai yang lebih baik per kg",
      "<strong>Langgan & jimat</strong> – Banyak kedai dalam talian menawarkan diskaun 10-15% untuk langganan",
      "<strong>Tunggu jualan</strong> – Jualan 11.11, 12.12, dan Bulan Haiwan (Oktober) menawarkan diskaun yang ketara",
      "<strong>Sertai program kesetiaan</strong> – Pet Safari dan Pet Lovers Centre mempunyai sistem mata",
      "<strong>Bandingkan harga</strong> – Gunakan aplikasi penjejakan harga untuk pembelian dalam talian"
    ],
    localTip: "<strong>Tip Tempatan:</strong> \"Pemilik haiwan Malaysia Timur di Sabah dan Sarawak mungkin mendapati ketersediaan jenama premium yang terhad secara tempatan. Pertimbangkan pesanan dalam talian dari Semenanjung Malaysia – kebanyakan kedai menawarkan penghantaran percuma untuk pesanan melebihi RM100-150.\"",
    insuranceTitle: "Insurans Haiwan dan Perlindungan Pemakanan",
    insuranceIntro: "Walaupun insurans haiwan terutamanya melindungi perbelanjaan perubatan, sesetengah polisi termasuk faedah berkaitan dengan pemakanan dan diet preskripsi. Memahami ini boleh membantu mengimbangi kos keperluan diet khas.",
    rxCoverageTitle: "🏥 Apa yang Dilindungi Insurans Haiwan (Berkaitan Pemakanan)",
    rxCoverageItems: [
      { title: "Diet Preskripsi untuk Keadaan Perubatan", desc: "Sesetengah polisi melindungi makanan preskripsi apabila ditetapkan oleh vet untuk keadaan seperti penyakit buah pinggang, kencing manis, atau alahan. Perlindungan biasanya berkisar antara RM500-2000 setiap tahun.", covered: true },
      { title: "Konsultasi Pemakanan", desc: "Konsultasi dengan pakar pemakanan veterinar mungkin dilindungi di bawah lawatan pakar.", covered: true },
      { title: "Perbelanjaan Makanan Biasa", desc: "Makanan haiwan standard, snek, dan suplemen TIDAK dilindungi oleh mana-mana polisi insurans haiwan Malaysia.", covered: false }
    ],
    insuranceTableTitle: "📊 Penyedia Insurans Haiwan Malaysia",
    insuranceTableHeaders: ["Penyedia", "Perlindungan Diet Rx", "Premium Bulanan"],
    maximizingTitle: "💡 Memaksimumkan Faedah Insurans untuk Pemakanan",
    maximizingTips: [
      "<strong>Dapatkan diagnosis yang didokumenkan</strong> – Insurans memerlukan dokumentasi vet untuk tuntutan diet preskripsi",
      "<strong>Simpan semua resit</strong> – Kedua-dua lawatan vet dan pembelian makanan",
      "<strong>Semak perkataan polisi</strong> – Sesetengah polisi mempunyai pengecualian khusus untuk diet \"pencegahan\"",
      "<strong>Hantar tuntutan dengan segera</strong> – Kebanyakan polisi mempunyai tempoh tuntutan 30-90 hari"
    ],
    insuranceExpertQuote: "<strong>Pandangan Pakar:</strong> \"Insurans haiwan paling berharga apabila haiwan anda mengalami keadaan kronik yang memerlukan diet preskripsi. Satu bulan makanan diet renal berharga RM200-400. Insurans yang melindungi walaupun 50% daripada kos ini membayar dirinya dalam setahun.\" — Persatuan Insurans Haiwan Malaysia",
    faqTitle: "Soalan Lazim",
    faqs: [
      {
        question: "Apakah jenama makanan anjing terbaik di Malaysia?",
        answer: "Jenama \"terbaik\" bergantung pada keperluan anjing anda dan bajet anda. Untuk pemakanan premium, Orijen dan Acana memimpin pasaran. Royal Canin adalah yang paling disyorkan oleh doktor haiwan. Untuk nilai, Taste of the Wild menawarkan kualiti yang cemerlang pada harga pertengahan. Pemilik yang mementingkan bajet boleh mempertimbangkan SmartHeart atau Pedigree untuk pemakanan asas."
      },
      {
        question: "Berapa banyak yang perlu saya belanjakan untuk makanan haiwan setiap bulan?",
        answer: "Panduan umum: Bajet RM80-150/bulan untuk haiwan kecil (kucing, anjing kecil), RM150-300/bulan untuk anjing sederhana, dan RM250-500/bulan untuk baka besar. Makanan premium lebih mahal pada awalnya tetapi memerlukan bahagian yang lebih kecil, berpotensi menyamakan kos. Faktorkan tahap aktiviti haiwan anda dan sebarang keadaan kesihatan."
      },
      {
        question: "Adakah makanan tanpa bijirin lebih baik untuk haiwan saya?",
        answer: "Tidak semestinya. Walaupun diet tanpa bijirin memberi manfaat kepada haiwan dengan alahan bijirin yang disahkan, kebanyakan haiwan mencerna bijirin tanpa masalah. FDA telah menyiasat pautan antara diet tanpa bijirin dan cardiomyopathy dilatasi (DCM) pada anjing. Rujuk doktor haiwan anda sebelum beralih kepada tanpa bijirin, terutamanya untuk baka yang terdedah kepada keadaan jantung."
      },
      {
        question: "Bolehkah saya mencampurkan makanan basah dan kering?",
        answer: "Ya! Mencampurkan makanan basah dan kering adalah biasa dan bermanfaat. Makanan basah menambah kelembapan (penting dalam cuaca panas Malaysia) dan lebih enak. Makanan kering membantu mengekalkan kesihatan gigi. Nisbah biasa adalah 75% kering, 25% basah. Pastikan bahagian gabungan memenuhi tetapi tidak melebihi keperluan kalori harian."
      },
      {
        question: "Bagaimana saya beralih kepada makanan haiwan baru?",
        answer: "Peralihan beransur-ansur menghalang gangguan penghadaman. Selama 7-10 hari: Hari 1-3: 75% makanan lama, 25% makanan baru. Hari 4-6: 50% setiap satu. Hari 7-9: 25% lama, 75% baru. Hari 10+: 100% makanan baru. Jika haiwan anda mempunyai perut sensitif, lanjutkan ini kepada 14 hari. Perhatikan muntah, cirit-birit, atau penolakan makanan."
      },
      {
        question: "Di mana saya boleh membeli makanan haiwan preskripsi di Malaysia?",
        answer: "Diet preskripsi (Royal Canin Veterinary, Hill's Prescription Diet) tersedia di klinik veterinar dan peruncit yang dibenarkan. Sesetengah kedai dalam talian menjual makanan preskripsi tetapi mungkin memerlukan dokumentasi vet. Hospital vet utama seperti TTSH, Mount Pleasant, dan The Animal Doctors menyimpan rangkaian diet preskripsi yang komprehensif."
      },
      {
        question: "Adakah makanan haiwan yang diimport selamat di Malaysia?",
        answer: "Ya, jika dibeli dari peniaga yang dibenarkan. Semua makanan haiwan yang diimport mesti berdaftar dengan Jabatan Perkhidmatan Veterinar (DVS) Malaysia dan memenuhi piawaian keselamatan. Cari nombor lesen import DVS pada pembungkusan. Elakkan import selari dari sumber yang tidak dibenarkan, kerana ia mungkin mempunyai penyimpanan yang tidak betul atau produk palsu."
      },
      {
        question: "Adakah haiwan Malaysia memerlukan pemakanan yang berbeza daripada haiwan di iklim yang lebih sejuk?",
        answer: "Sedikit. Cuaca panas dan lembap Malaysia bermakna haiwan mungkin memerlukan lebih banyak air (pertimbangkan makanan basah), kalori yang sedikit kurang (kurang diperlukan untuk mengekalkan suhu badan), dan makanan yang kaya dengan asid lemak omega untuk memerangi masalah kulit yang biasa dalam iklim tropika. Parasit juga lebih lazim, jadi makanan dengan bahan yang menyokong imun adalah bermanfaat."
      }
    ],
    finalQuote: "<strong>Kata Akhir:</strong> \"Makanan haiwan terbaik adalah yang dinikmati haiwan anda, memenuhi keperluan pemakanan mereka, dan sesuai dengan bajet anda. Jangan terpengaruh dengan pemasaran – fokus pada kualiti bahan dan tindak balas individu haiwan anda. Bulu berkilat, berat badan sihat, penghadaman yang teratur, dan tahap tenaga yang baik menunjukkan anda telah menemui makanan yang betul.\" — Persatuan Perubatan Veterinar Malaysia",
    citationsTitle: "Rujukan & Petikan",
    authorBio: "Artikel ini disemak oleh Dr. Lim Wei Ling, pakar pemakanan veterinar dengan Majlis Veterinar Malaysia dan lebih 10 tahun pengalaman dalam pemakanan haiwan dan pengurusan diet."
  },
  zh: {
    metaTitle: "2024年马来西亚最佳宠物食品品牌 | 完整指南",
    metaDescription: "马来西亚最佳宠物食品品牌完整指南。比较狗狗和猫咪的高端、中端和经济型选择。专家营养建议和价格比较。",
    category: "营养",
    title: "马来西亚最佳宠物食品品牌：2024年完整指南",
    date: "2024年12月10日",
    readTime: "12分钟阅读",
    reviewedBy: "由 Dr. Lim Wei Ling 审核，兽医营养专家",
    share: "分享",
    save: "保存",
    backToBlog: "返回博客",
    heroImageAlt: "马来西亚宠物店提供的各种高端宠物食品品牌",
    heroImageCaption: "马来西亚提供的精选高端宠物食品品牌。照片：Unsplash",
    quickLinksTitle: "🛒 快速导航",
    quickLinksIntro: "跳转到您需要的部分：",
    quickLinksItems: [
      "高端品牌（RM300+/月）",
      "中端品牌（RM150-300/月）",
      "经济型选择（RM150以下/月）",
      "特殊饮食选择",
      "在马来西亚哪里购买"
    ],
    tocTitle: "目录",
    tocItems: [
      "1. 引言：马来西亚的宠物营养",
      "2. 了解宠物食品标签",
      "3. 高端宠物食品品牌",
      "4. 中端宠物食品品牌",
      "5. 经济实惠的选择",
      "6. 马来西亚本地品牌",
      "7. 价格比较指南",
      "8. 特殊饮食和处方食品",
      "9. 在马来西亚哪里购买宠物食品",
      "10. 宠物保险和营养覆盖",
      "11. 常见问题"
    ],
    introTitle: "引言：马来西亚的宠物营养",
    introPara1: "为您的宠物选择正确的食物是作为宠物主人最重要的决定之一。根据<strong>马来西亚兽医服务部 (DVS)</strong> 的数据，适当的营养可以延长宠物寿命2-3年，并显著降低兽医费用。",
    introPara2: "<strong>马来西亚宠物食品市场每年增长15%</strong>，宠物主人越来越多地寻求高端营养选择。马来西亚宠物行业协会2023年的调查发现，67%的宠物主人愿意为更高质量的食品支付更多费用。",
    keyStatLabel: "关键统计",
    keyStatValue: "23亿令吉",
    keyStatDesc: "2024年马来西亚宠物食品市场的估计价值，每年增长15%。",
    introPara3: "这份全面的指南将帮助您了解马来西亚各种宠物食品选择。无论您是第一次养宠物还是想要升级宠物的饮食，我们将涵盖从高端国际品牌到经济实惠的本地替代品的一切。",
    expertInsight1: "<strong>专家见解：</strong> \"在马来西亚炎热潮湿的气候中，宠物需要更高质量的蛋白质和脂肪来维持能量水平。避免含有过多填充物如玉米和小麦的食品，这可能导致体重增加和消化问题。\" — Dr. Lim Wei Ling，兽医营养专家，马来西亚兽医委员会",
    labelsTitle: "了解宠物食品标签",
    labelsIntro: "在比较品牌之前，了解如何阅读宠物食品标签至关重要。<strong>美国饲料控制官员协会 (AAFCO)</strong> 制定了信誉良好品牌遵循的营养标准。",
    labelComponentsTitle: "📋 需要检查的关键标签组成部分",
    labelComponents: [
      "<strong>蛋白质来源</strong> – 寻找作为第一成分的具名肉类（鸡肉、牛肉、三文鱼），而不是\"肉类副产品\"",
      "<strong>保证分析</strong> – 最低蛋白质（狗：18-26%，猫：26-30%）和脂肪含量",
      "<strong>AAFCO声明</strong> – 确认特定生命阶段的营养充足性",
      "<strong>成分列表</strong> – 按重量列出；避免谷物是前3种成分的食品",
      "<strong>热量含量</strong> – 对于体重管理很重要，尤其是马来西亚久坐的室内宠物"
    ],
    ingredientsToAvoidTitle: "🚫 应避免的成分",
    ingredientsToAvoid: [
      "<strong>BHA、BHT、乙氧基喹</strong> – 与健康问题相关的人工防腐剂",
      "<strong>人工色素</strong> – 红色40、黄色5、蓝色2（不必要的添加剂）",
      "<strong>丙二醇</strong> – 对猫有毒，有时在半湿润食品中发现",
      "<strong>玉米糖浆/糖</strong> – 可能导致肥胖和糖尿病",
      "<strong>未命名的肉类来源</strong> – 未指明的\"动物副产品\"或\"肉粉\""
    ],
    localInsight1: "<strong>本地见解：</strong> \"马来西亚宠物主人应注意，从泰国、澳大利亚和美国进口的宠物食品须经严格的DVS检查。始终检查包装上的进口许可证号以确保真实性。\" — 马来西亚兽医服务部",
    premiumTitle: "高端宠物食品品牌",
    premiumIntro: "高端品牌使用高质量成分，通常是人类级蛋白质，并经过严格的质量控制。虽然更昂贵，但由于营养密度更高，通常需要更少的份量。",
    brands: [
      {
        name: "Orijen（渴望）",
        badge: "首选",
        origin: "加拿大",
        priceRange: "RM350-500 每5kg",
        proteinContent: "38-42%",
        bestFor: "活跃的狗、幼犬、猫",
        featuresLabel: "主要特点：",
        features: ["85%肉类含量", "生物适宜配方", "新鲜区域食材", "提供无谷物选择"],
        verdict: "Orijen 一直被评为全球最佳宠物食品之一。虽然在马来西亚价格昂贵，但其营养密度意味着需要更少的份量，部分抵消了成本。"
      },
      {
        name: "Royal Canin（皇家）",
        badge: "最受欢迎",
        origin: "法国（在多个国家生产）",
        priceRange: "RM180-350 每3-4kg",
        proteinContent: "25-30%",
        bestFor: "特定品种需求、兽医处方饮食",
        featuresLabel: "主要特点：",
        features: ["特定品种配方", "兽医治疗性饮食", "在马来西亚广泛可用", "特定尺寸的颗粒形状"],
        verdict: "Royal Canin 是马来西亚兽医推荐的首选品牌。他们针对肾病、过敏和消化问题的处方饮食特别有价值。在全国大多数宠物店和兽医诊所都有售。"
      },
      {
        name: "Hill's Science Diet（希尔斯）",
        origin: "美国",
        priceRange: "RM200-380 每3-4kg",
        proteinContent: "22-32%",
        bestFor: "老年宠物、体重管理、敏感肠胃",
        featuresLabel: "主要特点：",
        features: ["科学支持的配方", "处方饮食系列", "特定生命阶段", "关节和活动性支持"],
        verdict: "Hill's 是另一个有强大研究支持的兽医推荐品牌。他们的处方饮食系列对患有慢性健康问题的宠物至关重要。比 Royal Canin 略难获得，但在大多数主要宠物店都有售。"
      },
      {
        name: "Acana（爱肯拿）",
        origin: "加拿大（与Orijen同一公司）",
        priceRange: "RM280-420 每5kg",
        proteinContent: "31-35%",
        bestFor: "需要高蛋白但不想要Orijen价格的狗",
        featuresLabel: "主要特点：",
        features: ["70%肉类含量", "区域食材采购", "限制成分选择", "比Orijen更实惠"],
        verdict: "Acana 以略低的价格提供 Orijen 品质的成分。对于想要高端营养但不想支付最高价格的宠物主人来说是一个很好的选择。"
      }
    ],
    premiumExpertQuote: "<strong>专家见解：</strong> \"高端宠物食品前期可能看起来很贵，但它们通常会降低长期兽医成本。喂食优质饮食的宠物比喂食经济品牌的宠物消化问题和皮肤问题减少40%。\" — Dr. Tan Mei Ling，小动物营养专家，马来亚博特拉大学",
    midRangeTitle: "中端宠物食品品牌",
    midRangeIntro: "中端品牌在质量和价格之间提供平衡。对于想要比经济品牌更好的营养但不想支付高端价格的宠物主人来说，这些是绝佳的选择。",
    budgetTitle: "经济实惠的选择",
    budgetIntro: "经济品牌以实惠的价格提供基本营养。虽然营养密度不如高端选择，但它们满足最低营养要求。",
    localTitle: "马来西亚本地品牌",
    localIntro: "几家马来西亚公司生产迎合本地偏好和预算的宠物食品。",
    priceComparisonTitle: "价格比较指南",
    priceComparisonHeaders: ["品牌", "类别", "价格/5kg", "每日成本（中型犬）"],
    specialDietsTitle: "特殊饮食和处方食品",
    specialDietsIntro: "一些宠物根据年龄、健康状况或活动水平需要特殊营养。",
    puppyKittenTitle: "🐶 幼犬/幼猫配方",
    puppyKittenText: "更高的蛋白质和脂肪含量以促进生长。Royal Canin、Hill's 和 Orijen 等品牌提供含有DHA的特定幼犬/幼猫系列，用于大脑发育。",
    seniorTitle: "👴 老年宠物配方",
    seniorText: "较低的卡路里、关节支持和更易消化的蛋白质。寻找含有葡萄糖胺和软骨素的产品以支持关节健康。",
    weightManagementTitle: "⚖️ 体重管理",
    weightManagementText: "宠物肥胖影响40%的马来西亚宠物，含有左旋肉碱和低卡路里的体重管理配方是必不可少的。",
    sensitiveDigestionTitle: "🤢 敏感消化",
    sensitiveDigestionText: "限制成分饮食有助于识别食物过敏。鸭肉、鹿肉或兔肉等新型蛋白质对排除饮食很有用。",
    skinCoatTitle: "🧴 皮肤和毛发健康",
    skinCoatText: "在马来西亚潮湿的气候中，皮肤问题很常见。含有来自鱼油的omega-3脂肪酸的食品支持皮肤健康。",
    whereToBuyTitle: "在马来西亚哪里购买宠物食品",
    whereToBuyIntro: "宠物食品在马来西亚通过各种渠道广泛可用：",
    physicalStoresTitle: "🏪 实体店",
    physicalStores: [
      "<strong>Pet Safari</strong> – 选择广泛，多个地点",
      "<strong>Pet Lovers Centre</strong> – 在大多数购物中心都有",
      "<strong>Pet World</strong> – 高端品牌选择丰富",
      "<strong>兽医诊所</strong> – 处方饮食的最佳选择",
      "<strong>AEON / Tesco</strong> – 有经济品牌"
    ],
    onlinePlatformsTitle: "💻 在线平台",
    onlinePlatforms: [
      "<strong>Shopee / Lazada</strong> – 最佳价格，官方品牌店",
      "<strong>PetMate.com.my</strong> – 本地宠物专卖店",
      "<strong>PerroMart</strong> – 良好的订阅选择",
      "<strong>Petbacker</strong> – 也提供宠物服务"
    ],
    moneySavingTitle: "💰 省钱技巧",
    moneySavingTips: [
      "<strong>批量购买</strong> – 大袋装每公斤价值更高",
      "<strong>订阅省钱</strong> – 许多在线商店为订阅提供10-15%的折扣",
      "<strong>等待促销</strong> – 11.11、12.12和宠物月（10月）促销提供显著折扣",
      "<strong>加入会员计划</strong> – Pet Safari 和 Pet Lovers Centre 有积分系统",
      "<strong>比较价格</strong> – 使用价格跟踪应用程序进行在线购买"
    ],
    localTip: "<strong>本地提示：</strong> \"沙巴和砂拉越的东马来西亚宠物主人可能会发现当地高端品牌可用性有限。考虑从西马来西亚在线订购 – 大多数商店对RM100-150以上的订单提供免费送货。\"",
    insuranceTitle: "宠物保险和营养覆盖",
    insuranceIntro: "虽然宠物保险主要覆盖医疗费用，但一些保单包括与营养和处方饮食相关的福利。了解这些可以帮助抵消特殊饮食需求的成本。",
    rxCoverageTitle: "🏥 宠物保险覆盖（与营养相关）",
    rxCoverageItems: [
      { title: "医疗条件的处方饮食", desc: "一些保单在兽医为肾病、糖尿病或过敏等疾病开具处方时覆盖处方食品。覆盖范围通常为每年RM500-2000。", covered: true },
      { title: "营养咨询", desc: "与兽医营养师的咨询可能包含在专科就诊中。", covered: true },
      { title: "常规食品费用", desc: "标准宠物食品、零食和补充剂不在任何马来西亚宠物保险单的覆盖范围内。", covered: false }
    ],
    insuranceTableTitle: "📊 马来西亚宠物保险提供商",
    insuranceTableHeaders: ["提供商", "处方饮食覆盖", "月保费"],
    maximizingTitle: "💡 最大化营养保险福利",
    maximizingTips: [
      "<strong>获取书面诊断</strong> – 保险需要兽医文件来处理处方饮食索赔",
      "<strong>保留所有收据</strong> – 兽医就诊和食品购买",
      "<strong>查看保单措辞</strong> – 一些保单对\"预防性\"饮食有特定排除",
      "<strong>及时提交索赔</strong> – 大多数保单有30-90天的索赔窗口"
    ],
    insuranceExpertQuote: "<strong>专家见解：</strong> \"当您的宠物患上需要处方饮食的慢性疾病时，宠物保险最有价值。一个月的肾脏饮食食品费用为RM200-400。即使覆盖50%成本的保险也能在一年内收回成本。\" — 马来西亚宠物保险协会",
    faqTitle: "常见问题",
    faqs: [
      {
        question: "马来西亚最好的狗粮品牌是什么？",
        answer: "\"最好\"的品牌取决于您狗的需求和您的预算。对于高端营养，Orijen 和 Acana 领先市场。Royal Canin 是兽医最推荐的。就性价比而言，Taste of the Wild 以中等价格提供卓越品质。注重预算的主人可以考虑 SmartHeart 或 Pedigree 的基本营养。"
      },
      {
        question: "我每月应该在宠物食品上花多少钱？",
        answer: "一般准则：小型宠物（猫、小型犬）预算RM80-150/月，中型犬RM150-300/月，大型犬RM250-500/月。高端食品前期成本更高，但需要更少的份量，可能使成本持平。考虑您宠物的活动水平和任何健康状况。"
      },
      {
        question: "无谷物食品对我的宠物更好吗？",
        answer: "不一定。虽然无谷物饮食对确诊谷物过敏的宠物有益，但大多数宠物可以消化谷物而没有问题。FDA已调查了无谷物饮食与犬扩张型心肌病（DCM）之间的联系。在转换为无谷物饮食之前咨询您的兽医，特别是对于易患心脏病的品种。"
      },
      {
        question: "我可以混合湿粮和干粮吗？",
        answer: "可以！混合湿粮和干粮很常见且有益。湿粮增加水分（在马来西亚的炎热中很重要）且更可口。干粮有助于保持牙齿健康。典型比例是75%干粮，25%湿粮。确保组合份量满足但不超过每日卡路里需求。"
      },
      {
        question: "如何过渡到新的宠物食品？",
        answer: "逐渐过渡可防止消化不适。7-10天内：第1-3天：75%旧食品，25%新食品。第4-6天：各50%。第7-9天：25%旧，75%新。第10天以后：100%新食品。如果您的宠物肠胃敏感，延长到14天。注意呕吐、腹泻或拒食。"
      },
      {
        question: "在马来西亚哪里可以买到处方宠物食品？",
        answer: "处方饮食（Royal Canin Veterinary、Hill's Prescription Diet）可在兽医诊所和授权零售商处购买。一些在线商店出售处方食品，但可能需要兽医文件。TTSH、Mount Pleasant 和 The Animal Doctors 等主要兽医医院有全面的处方饮食系列。"
      },
      {
        question: "进口宠物食品在马来西亚安全吗？",
        answer: "是的，如果从授权经销商处购买。所有进口宠物食品必须在马来西亚兽医服务部（DVS）注册并符合安全标准。查看包装上的DVS进口许可证号。避免从未授权来源的平行进口，因为它们可能存储不当或是假冒产品。"
      },
      {
        question: "马来西亚的宠物需要与较冷气候的宠物不同的营养吗？",
        answer: "在某种程度上是的。马来西亚的炎热和潮湿意味着宠物可能需要更多的水（考虑湿粮）、略少的卡路里（维持体温所需更少）以及富含omega脂肪酸的食物以对抗热带气候中常见的皮肤问题。寄生虫也更普遍，因此含有支持免疫成分的食物是有益的。"
      }
    ],
    finalQuote: "<strong>最后一句话：</strong> \"最好的宠物食品是您的宠物喜欢的、满足其营养需求的、并且适合您预算的。不要被营销所左右 – 关注成分质量和您宠物的个体反应。有光泽的皮毛、健康的体重、规律的消化和良好的能量水平表明您找到了正确的食物。\" — 马来西亚兽医医学协会",
    citationsTitle: "参考文献和引用",
    authorBio: "本文由 Dr. Lim Wei Ling 审核，她是马来西亚兽医委员会的兽医营养专家，在宠物营养和饮食管理方面有超过10年的经验。"
  }
};

export const getEmergencyGuideContent = (language: Language): EmergencyGuideContent => {
  return emergencyGuideTranslations[language] || emergencyGuideTranslations.en;
};

export const getNutritionGuideContent = (language: Language): NutritionGuideContent => {
  return nutritionGuideTranslations[language] || nutritionGuideTranslations.en;
};

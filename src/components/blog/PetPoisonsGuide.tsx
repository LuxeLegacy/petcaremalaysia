import { useLanguage } from '@/contexts/LanguageContext';
import { Skull, AlertTriangle, CheckCircle2, XCircle, Leaf, Pill, Cookie, Home, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

interface PoisonInfo {
  name: string;
  icon: React.ElementType;
  whyToxic: string;
  toxicDose?: string;
  foundIn?: string[];
  symptoms: string[];
  emergencyAction: string[];
  prevention: string[];
  timeSensitivity?: string;
}

const PoisonCard = ({ poison }: { poison: PoisonInfo }) => (
  <div className="bg-card border border-border p-6 rounded-xl mb-6">
    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
      <poison.icon className="h-5 w-5 text-destructive" />
      {poison.name}
    </h3>
    
    <div className="bg-destructive/10 p-3 rounded-lg mb-4">
      <p className="text-sm"><strong>Why Toxic:</strong> {poison.whyToxic}</p>
    </div>

    {poison.toxicDose && (
      <p className="text-sm text-muted-foreground mb-3">
        <strong>Toxic Dose:</strong> {poison.toxicDose}
      </p>
    )}

    {poison.foundIn && (
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2">Found In:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {poison.foundIn.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    )}

    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div>
        <h4 className="font-semibold text-sm mb-2 text-destructive">Signs of Poisoning:</h4>
        <ul className="text-sm space-y-1">
          {poison.symptoms.map((symptom, i) => (
            <li key={i} className="flex items-start gap-2">
              <XCircle className="h-3 w-3 text-destructive flex-shrink-0 mt-1" />
              <span>{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2 text-primary">Emergency Action:</h4>
        <ol className="text-sm space-y-1">
          {poison.emergencyAction.map((action, i) => (
            <li key={i}>{i + 1}. {action}</li>
          ))}
        </ol>
      </div>
    </div>

    <div className="bg-primary/10 p-3 rounded-lg">
      <h4 className="font-semibold text-sm mb-2">Prevention:</h4>
      <ul className="text-sm space-y-1">
        {poison.prevention.map((tip, i) => (
          <li key={i}>✓ {tip}</li>
        ))}
      </ul>
    </div>

    {poison.timeSensitivity && (
      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-destructive">
        <Clock className="h-4 w-4" />
        {poison.timeSensitivity}
      </div>
    )}
  </div>
);

export const PetPoisonsGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Common Pet Poisons in Malaysia: Prevention and Emergency Response",
    "description": "Learn about the top 10 pet poisons in Malaysia including rat bait, toxic plants, and common household items. Prevention tips and emergency response guide.",
    "image": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-20",
    "dateModified": "2024-12-20"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My dog ate rat poison 3 days ago but seems fine. Is he okay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO—rat poison symptoms appear 2-7 days after eating. By then, internal bleeding is advanced. See vet IMMEDIATELY even if he seems normal. Early Vitamin K treatment prevents fatal bleeding."
        }
      },
      {
        "@type": "Question",
        "name": "Can I give my pet milk after poisoning to dilute it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Milk doesn't effectively dilute or neutralize poisons and can cause vomiting, making things worse. Call vet instead."
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to induce vomiting with salt water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO. Salt is toxic to pets and can cause additional life-threatening problems. Only use 3% hydrogen peroxide and only if vet instructs."
        }
      }
    ]
  };

  const tocItems = [
    { id: "why-dangerous", title: "Why Malaysia Has Unique Poison Risks" },
    { id: "top-10-poisons", title: "Top 10 Pet Poisons in Malaysia" },
    { id: "general-signs", title: "General Signs of Poisoning" },
    { id: "when-to-induce-vomiting", title: "When to Induce Vomiting" },
    { id: "poison-proofing", title: "Poison-Proofing Your Home" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const poisons: PoisonInfo[] = [
    {
      name: "1. Rat Poison (Rodenticides)",
      icon: Skull,
      whyToxic: "Anticoagulant rat poisons prevent blood clotting, causing fatal internal bleeding. Effects delayed 2-7 days.",
      toxicDose: "Even small amounts can be fatal. Symptoms often appear 2-7 days AFTER ingestion.",
      symptoms: [
        "Weakness, lethargy (first signs)",
        "Pale gums (from internal bleeding)",
        "Coughing blood, bloody vomit/stool",
        "Difficulty breathing",
        "Bruising on skin/gums",
        "Collapse"
      ],
      emergencyAction: [
        "Don't wait for symptoms—see vet IMMEDIATELY",
        "Bring the bait packaging (identifies antidote)",
        "Blood clotting tests within 48-72 hours",
        "Vitamin K treatment for 4-6 weeks"
      ],
      prevention: [
        "NEVER use rat poison in homes with pets",
        "Check for rat bait in condo common areas",
        "Use snap traps instead (keep in pet-proof locations)",
        "Ask neighbors to use pet-safe rodent control"
      ],
      timeSensitivity: "CRITICAL: Treatment needed BEFORE symptoms appear"
    },
    {
      name: "2. Toad Toxins (Bufo Toads)",
      icon: AlertTriangle,
      whyToxic: "Cane toads (common in Malaysian gardens) secrete potent toxin from glands behind eyes. Pets are poisoned when they mouth or bite toads.",
      symptoms: [
        "Immediate drooling, frothing at mouth",
        "Head shaking, pawing at face",
        "Bright red gums",
        "Vomiting",
        "Difficulty walking, collapse",
        "Seizures",
        "Heart arrhythmias"
      ],
      emergencyAction: [
        "Immediately flush mouth with water (hose, tap)",
        "Wipe gums and tongue with wet cloth",
        "DO NOT let pet swallow water",
        "Rush to emergency vet—cardiac monitoring needed"
      ],
      prevention: [
        "Supervise pets outdoors at dawn/dusk (toad active times)",
        "Remove water sources that attract toads",
        "Keep pet food indoors",
        "Install barriers around garden ponds"
      ],
      timeSensitivity: "IMMEDIATELY LIFE-THREATENING—minutes matter"
    },
    {
      name: "3. Chocolate (Theobromine)",
      icon: Cookie,
      whyToxic: "Chocolate contains theobromine—harmless to humans, deadly to pets. Dark and baking chocolate are MOST toxic.",
      toxicDose: "Small dog (5kg): 1-2 ounces dark chocolate = potentially fatal",
      foundIn: ["Dark chocolate", "Baking chocolate (EXTREMELY toxic)", "Milk chocolate", "Cocoa powder"],
      symptoms: [
        "Vomiting, diarrhea (2-4 hours after eating)",
        "Restlessness, hyperactivity",
        "Rapid breathing, panting",
        "Increased heart rate",
        "Tremors, seizures"
      ],
      emergencyAction: [
        "Call vet immediately",
        "Calculate amount and type eaten",
        "Induce vomiting (only if vet instructs and within 2 hours)",
        "Activated charcoal at vet prevents absorption"
      ],
      prevention: [
        "Store ALL chocolate in pet-proof containers",
        "Warn children not to share chocolate with pets",
        "Be extra vigilant during Chinese New Year, Christmas, Valentine's Day"
      ]
    },
    {
      name: "4. Xylitol (Sugar-Free Gum & Foods)",
      icon: Pill,
      whyToxic: "Xylitol causes rapid, life-threatening drops in blood sugar and liver failure. 1 piece of gum can kill a small dog.",
      toxicDose: "1 piece of gum can kill a small dog. Symptoms within 15-30 minutes.",
      foundIn: ["Sugar-free gum (most common)", "Sugar-free candy", "Some peanut butters", "Sugar-free baked goods", "Some toothpaste"],
      symptoms: [
        "Sudden weakness, collapse (within minutes)",
        "Vomiting",
        "Seizures",
        "Tremors",
        "Coma"
      ],
      emergencyAction: [
        "IMMEDIATE emergency vet visit—RAPIDLY fatal",
        "Call while en route",
        "Treatment: IV dextrose, liver protectants"
      ],
      prevention: [
        "Check ALL peanut butter labels before giving to pets",
        "Never share sugar-free anything with pets",
        "Keep purses/bags (with gum) out of pet reach",
        "Warn visitors about xylitol danger"
      ],
      timeSensitivity: "IMMEDIATELY LIFE-THREATENING—minutes matter"
    },
    {
      name: "5. Human Medications",
      icon: Pill,
      whyToxic: "Paracetamol (Panadol) is EXTREMELY toxic to cats—one tablet can be fatal. Ibuprofen causes stomach ulcers and kidney failure.",
      foundIn: ["Paracetamol/Panadol (fatal to cats)", "Ibuprofen/Nurofen", "Aspirin", "Antidepressants", "ADHD medications"],
      symptoms: [
        "Vomiting (often with blood)",
        "Weakness, collapse",
        "Pale gums",
        "Difficulty breathing",
        "Seizures"
      ],
      emergencyAction: [
        "Identify exact medication and amount",
        "Call vet immediately with medication name",
        "Bring pill bottle to emergency vet",
        "Never induce vomiting for pills (can cause damage)"
      ],
      prevention: [
        "NEVER give human medication to pets",
        "Store medications in locked cabinets",
        "Don't leave pills on counters/nightstands",
        "Safely dispose of dropped pills immediately"
      ]
    },
    {
      name: "6. Sago Palm (Cycas Revoluta)",
      icon: Leaf,
      whyToxic: "ALL parts of sago palm are highly toxic—especially seeds. Common ornamental plant in Malaysian gardens. 50-75% fatality rate even with treatment.",
      toxicDose: "1-2 seeds can kill a dog. Causes liver failure.",
      symptoms: [
        "Vomiting, diarrhea (within hours)",
        "Black, tarry stool",
        "Increased thirst/urination",
        "Bruising, bleeding",
        "Jaundice (yellow gums)",
        "Liver failure (2-3 days)",
        "Seizures, coma, death"
      ],
      emergencyAction: [
        "IMMEDIATE emergency vet",
        "Aggressive decontamination (induce vomiting, activated charcoal)",
        "Intensive hospitalization required",
        "Prognosis poor if liver failure develops"
      ],
      prevention: [
        "REMOVE sago palms from properties with pets",
        "If neighbors have them, keep pets away",
        "Fence off if removal impossible"
      ],
      timeSensitivity: "CRITICAL—high fatality rate"
    },
    {
      name: "7. Dumb Cane (Dieffenbachia)",
      icon: Leaf,
      whyToxic: "Calcium oxalate crystals cause immediate oral pain and swelling. Common Malaysian houseplant.",
      symptoms: [
        "Immediate drooling, pawing at mouth",
        "Oral swelling, pain",
        "Difficulty swallowing",
        "Vomiting",
        "Difficulty breathing (if severe swelling)"
      ],
      emergencyAction: [
        "Flush mouth with water",
        "Remove plant material from mouth",
        "Call vet—may need anti-inflammatory medication",
        "Monitor breathing—swelling can block airway"
      ],
      prevention: [
        "Keep dumb cane plants out of pet reach (high shelves)",
        "Or remove entirely if you have curious pets"
      ]
    },
    {
      name: "8. Oleander (Nerium Oleander)",
      icon: Leaf,
      whyToxic: "Contains cardiac glycosides—affects heart function. ALL parts toxic including nectar and water in vase.",
      symptoms: [
        "Vomiting, diarrhea",
        "Drooling",
        "Irregular heartbeat",
        "Weakness",
        "Collapse"
      ],
      emergencyAction: [
        "IMMEDIATE vet care",
        "Heart monitoring essential",
        "Activated charcoal",
        "IV fluids"
      ],
      prevention: [
        "Remove oleander plants from garden",
        "Keep pets away from oleander hedges",
        "Don't use oleander sticks for roasting food"
      ]
    },
    {
      name: "9. Onions, Garlic, Chives (Allium Family)",
      icon: Cookie,
      whyToxic: "Damages red blood cells, causes anemia. Surprisingly dangerous—even cooked forms are toxic. Cumulative toxicity builds up.",
      toxicDose: "0.5% of body weight can be toxic. Effects are cumulative.",
      foundIn: ["Table scraps with onion/garlic", "Gravies, sauces", "Pizza, Chinese food", "Baby food (often contains onion powder)"],
      symptoms: [
        "Symptoms appear 1-3 days after eating",
        "Weakness, lethargy",
        "Pale or yellow gums",
        "Dark red or brown urine",
        "Rapid breathing",
        "Collapse"
      ],
      emergencyAction: [
        "Call vet if significant amount eaten",
        "Blood transfusion may be needed for severe anemia",
        "Hospitalization for monitoring"
      ],
      prevention: [
        "Never feed table scraps containing onion/garlic",
        "Check ingredient labels",
        "Warn visitors not to feed pets"
      ]
    },
    {
      name: "10. Antifreeze (Ethylene Glycol)",
      icon: Skull,
      whyToxic: "Sweet taste attracts pets. RAPIDLY fatal—causes kidney failure. Teaspoon can kill cat, few tablespoons can kill dog.",
      toxicDose: "Teaspoon can kill cat. Few tablespoons can kill dog.",
      symptoms: [
        "Stage 1 (30 min-12 hrs): 'Drunk' appearance, vomiting, weakness",
        "Stage 2 (12-24 hrs): Seems better (false recovery)",
        "Stage 3 (24-72 hrs): Kidney failure, not urinating, seizures, coma"
      ],
      emergencyAction: [
        "IMMEDIATE vet care—antidote must be given within 8 hours",
        "Antidote: Ethanol or fomepizole",
        "After 24 hours, kidney damage irreversible"
      ],
      prevention: [
        "Clean antifreeze spills immediately and thoroughly",
        "Use pet-safe antifreeze (propylene glycol)",
        "Store antifreeze in sealed, pet-proof containers",
        "Check garage floors for leaks"
      ],
      timeSensitivity: "CRITICAL—antidote must be given within 8 hours"
    }
  ];

  return (
    <ArticleLayout
      metaTitle="Common Pet Poisons in Malaysia: Prevention and Emergency Response Guide"
      metaDescription="Learn about the top 10 pet poisons in Malaysia including rat bait, toxic plants, and common household items. Prevention tips and emergency response guide."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/common-pet-poisons-malaysia`}
      language={language}
      category="Safety"
      categoryColor="destructive"
      title="Common Pet Poisons in Malaysia: Prevention and Emergency Response"
      date="December 20, 2024"
      readTime="12 min read"
      reviewedBy="Reviewed by Veterinary Toxicology Specialist"
      heroImage="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=600&fit=crop"
      heroImageAlt="Warning sign representing pet poison hazards"
      heroImageCaption="Know the common pet poisons in Malaysia and how to prevent exposure"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Suspect Poisoning?"
        text="Call your emergency vet IMMEDIATELY. Don't wait for symptoms—many poisons act fast. Bring the poison container if possible."
        buttonText="Find 24/7 Vet Now"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Rat poison is #1 killer—symptoms appear 2-7 days AFTER eating",
        "Many Malaysian plants are toxic (sago palm, oleander, dumb cane)",
        "Human medications, chocolate, xylitol are DEADLY to pets",
        "If poisoning suspected: Call vet immediately, bring poison container",
        "Prevention is 100% effective—pet-proof your environment"
      ]} />

      <TableOfContents items={tocItems} />

      {/* Why Dangerous Section */}
      <section id="why-dangerous" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Malaysia Has Unique Poison Risks</h2>
        
        <p className="text-muted-foreground mb-4">
          Malaysia's tropical climate and diverse flora create unique poisoning risks for pets. From common household items to garden plants, many everyday substances can be deadly to your beloved companions.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Common Sources in Malaysia:</h3>
            <ul className="text-sm space-y-1">
              <li>• Rat bait in condo common areas</li>
              <li>• Cane toads in gardens</li>
              <li>• Tropical ornamental plants (sago palm)</li>
              <li>• Food sharing culture (onions, chocolate)</li>
              <li>• Sugar-free products with xylitol</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Why Early Action Matters:</h3>
            <ul className="text-sm space-y-1">
              <li>• Some poisons have delayed symptoms (2-7 days)</li>
              <li>• Antidotes work best within hours</li>
              <li>• Internal damage may be irreversible</li>
              <li>• Don't wait—call vet even if pet seems fine</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top 10 Poisons */}
      <section id="top-10-poisons" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Top 10 Pet Poisons in Malaysia</h2>

        {poisons.map((poison, index) => (
          <PoisonCard key={index} poison={poison} />
        ))}
      </section>

      {/* General Signs */}
      <section id="general-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">General Signs Your Pet Has Been Poisoned</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Immediate Symptoms (Minutes to Hours):
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Vomiting, diarrhea</li>
              <li>• Drooling, foaming at mouth</li>
              <li>• Difficulty breathing</li>
              <li>• Weakness, collapse</li>
              <li>• Seizures, tremors</li>
              <li>• Disorientation</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Delayed Symptoms (Hours to Days):
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Lethargy, weakness</li>
              <li>• Loss of appetite</li>
              <li>• Bleeding (gums, nose, urine, stool)</li>
              <li>• Pale or yellow gums</li>
              <li>• Increased thirst/urination</li>
              <li>• Behavior changes</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl mt-6">
          <h3 className="font-semibold mb-2">IF YOU SUSPECT POISONING:</h3>
          <ol className="text-sm space-y-1">
            <li>1. Call emergency vet IMMEDIATELY—don't wait for symptoms</li>
            <li>2. Identify poison if possible</li>
            <li>3. Bring container/plant/packaging to vet</li>
            <li>4. Note time of exposure</li>
            <li>5. Don't induce vomiting unless vet instructs</li>
          </ol>
        </div>
      </section>

      {/* When to Induce Vomiting */}
      <section id="when-to-induce-vomiting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When to Induce Vomiting (And When NOT To)</h2>

        <div className="bg-destructive/10 p-4 rounded-xl mb-4">
          <p className="font-semibold mb-2">⚠️ CALL VET FIRST—they'll advise if safe.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Induce Vomiting If:
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Poison ingested within last 2 hours</li>
              <li>• Pet conscious and can swallow</li>
              <li>• Vet instructs you to do so</li>
              <li>• Poison is food, chocolate, pills (non-caustic)</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              NEVER Induce Vomiting If:
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Caustic substance (cleaners, acids, alkalis)</li>
              <li>• Petroleum products (gasoline, kerosene)</li>
              <li>• Sharp objects</li>
              <li>• Pet unconscious or having seizures</li>
              <li>• More than 2 hours since ingestion</li>
              <li>• Vet says NO</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">How to Induce Vomiting (If Vet Instructs):</h3>
          <ul className="text-sm space-y-1">
            <li>• 3% hydrogen peroxide: 1 teaspoon per 5kg body weight</li>
            <li>• Max dose: 3 tablespoons</li>
            <li>• Give orally</li>
            <li>• Vomiting occurs within 10-15 minutes</li>
            <li>• If no vomiting, can repeat ONCE</li>
          </ul>
        </div>
      </section>

      {/* Poison-Proofing */}
      <section id="poison-proofing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          Poison-Proofing Your Malaysian Home
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-3">In the House:</h3>
            <ul className="text-sm space-y-1">
              <li>• Lock cabinets with cleaners, medications</li>
              <li>• Store chemicals in original containers</li>
              <li>• Keep trash cans pet-proof</li>
              <li>• No accessible rodent baits/traps</li>
              <li>• Remove toxic houseplants</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-3">In the Garden:</h3>
            <ul className="text-sm space-y-1">
              <li>• Identify and remove toxic plants</li>
              <li>• Fence off dangerous plant areas</li>
              <li>• No snail bait, pesticides accessible</li>
              <li>• Check for rat bait in common areas</li>
              <li>• Supervise pets at dawn/dusk (toad time)</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-3">General Safety:</h3>
            <ul className="text-sm space-y-1">
              <li>• Educate family about pet poison risks</li>
              <li>• Don't share food with onions/garlic/chocolate</li>
              <li>• Check "pet-safe" product labels</li>
              <li>• Have emergency vet number accessible</li>
              <li>• Store antifreeze securely in garage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>My dog ate rat poison 3 days ago but seems fine. Is he okay?</AccordionTrigger>
            <AccordionContent>
              <strong>NO</strong>—rat poison symptoms appear 2-7 days after eating. By then, internal bleeding is advanced. See vet IMMEDIATELY even if he seems normal. Early Vitamin K treatment prevents fatal bleeding.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Are all sago palms toxic or just certain varieties?</AccordionTrigger>
            <AccordionContent>
              ALL sago palm varieties are highly toxic. Remove them entirely if you have pets. No safe variety exists.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Can I give my pet milk after poisoning to dilute it?</AccordionTrigger>
            <AccordionContent>
              No. Milk doesn't effectively dilute or neutralize poisons and can cause vomiting, making things worse. Call vet instead.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Is it safe to induce vomiting with salt water?</AccordionTrigger>
            <AccordionContent>
              <strong>NO.</strong> Salt is toxic to pets and can cause additional life-threatening problems. Only use 3% hydrogen peroxide and only if vet instructs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>How long after eating poison should I worry?</AccordionTrigger>
            <AccordionContent>
              Some poisons act within minutes (xylitol, toad toxin), others take days (rat poison). ALWAYS call vet immediately when poisoning is suspected, even if pet seems fine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>Are human vitamin supplements safe for pets?</AccordionTrigger>
            <AccordionContent>
              No. Many human vitamins contain levels toxic to pets. Vitamin D, iron, and xylitol in vitamins can be deadly. Only give pet-specific supplements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Prevention Saves Lives</h2>
        
        <p className="text-muted-foreground mb-4">
          Pet poisoning is terrifying but largely preventable. By understanding the common poisons in Malaysia's environment, poison-proofing your home, and knowing emergency response steps, you can protect your pet from these hidden dangers.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Key Takeaways:</h3>
          <ul className="space-y-2">
            <li>✓ Rat poison is #1 killer—avoid using, check for bait stations</li>
            <li>✓ Many Malaysian plants are toxic—identify and remove</li>
            <li>✓ Human medications, chocolate, xylitol are DEADLY</li>
            <li>✓ If poisoning suspected: Call vet immediately, bring poison container</li>
            <li>✓ Prevention is 100% effective—pet-proof your environment</li>
          </ul>
        </div>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={5} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Guide to Pet Emergency Treatment in Malaysia", description: "Comprehensive pillar guide covering all aspects of pet emergencies" },
        { to: "/blog/pet-emergency-first-aid-guide-malaysia", title: "Pet Emergency First Aid Guide", description: "Life-saving techniques including poisoning first aid" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Another common emergency in Malaysia" },
        { to: "/blog/pet-insurance-malaysia", title: "Pet Insurance Guide", description: "Cover poisoning treatment costs" },
      ]} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Skull, Pill, Clock, Heart, Shield, DollarSign, Phone, CheckCircle2, XCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import poisoningTreatmentHero from '@/assets/poisoning-treatment-hero.jpg';

export const PoisoningTreatmentGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pet Poisoning Treatment Malaysia: Antidotes, First Aid & Vet Care",
    "description": "Complete pet poisoning treatment guide for Malaysia. Learn antidotes for rat poison, chocolate, human meds. Emergency decontamination, activated charcoal, vet protocols.",
    "image": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-poisoning-treatment-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My dog ate chocolate 4 hours ago and seems fine. Is he okay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Chocolate toxicity symptoms can take 6-12 hours to appear. Go to emergency vet NOW for decontamination and monitoring. Don't wait for symptoms to develop."
        }
      },
      {
        "@type": "Question",
        "name": "Can I give activated charcoal tablets from the pharmacy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Human activated charcoal tablets are NOT the same as veterinary formulations. Go to emergency vet for proper decontamination."
        }
      },
      {
        "@type": "Question",
        "name": "Will hydrogen peroxide make my dog vomit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hydrogen peroxide 3% can induce vomiting in dogs (NOT cats). However, ONLY use if instructed by veterinarian. Veterinary-administered apomorphine is safer."
        }
      }
    ]
  };

  const tocItems = [
    { id: "understanding", title: "Understanding Pet Poisoning" },
    { id: "rat-poison", title: "Rat Poison Treatment" },
    { id: "paracetamol", title: "Paracetamol (Panadol) Treatment" },
    { id: "chocolate", title: "Chocolate Toxicity Treatment" },
    { id: "antifreeze", title: "Antifreeze Treatment" },
    { id: "xylitol", title: "Xylitol Treatment" },
    { id: "decontamination", title: "Emergency Decontamination" },
    { id: "home-first-aid", title: "At-Home First Aid" },
    { id: "prevention", title: "Prevention" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    {
      to: "/blog/common-pet-poisons-malaysia",
      title: "Common Pet Poisons Guide",
      description: "Complete list of toxic substances in Malaysia",
      icon: Skull,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-emergency-first-aid-guide-malaysia",
      title: "Pet First Aid Guide",
      description: "Life-saving techniques for emergencies",
      icon: Heart,
      color: "text-destructive"
    },
    {
      to: "/blog/24-hour-vet-directory-malaysia",
      title: "24-Hour Vet Directory",
      description: "Find emergency vets open now",
      icon: Phone,
      color: "text-primary"
    },
    {
      to: "/blog/pet-insurance-malaysia",
      title: "Pet Insurance Guide",
      description: "Cover poisoning treatment costs",
      icon: Shield,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Poisoning Treatment Malaysia: Antidotes, First Aid & Vet Care"
      metaDescription="Complete pet poisoning treatment guide for Malaysia. Learn antidotes for rat poison, chocolate, human meds. Emergency decontamination, activated charcoal, vet protocols."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-poisoning-treatment-malaysia`}
      language={language}
      category="Treatment"
      categoryColor="destructive"
      title="Pet Poisoning Treatment: Complete Antidote & Emergency Care Guide for Malaysia"
      date="December 24, 2024"
      readTime="12 min read"
      reviewedBy="Reviewed by Veterinary Toxicology Specialists"
      heroImage={poisoningTreatmentHero}
      heroImageAlt="Veterinarian treating a poisoned pet with IV drip in emergency clinic"
      heroImageCaption="Time is critical - know the antidotes and treatment protocols for common pet poisons"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Poisoning Emergency?"
        text="Call your emergency vet IMMEDIATELY. Many poisons cause irreversible damage within 1-2 hours. Time is critical."
        buttonText="Find 24/7 Vet Now"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Time is critical: Many poisons cause irreversible damage within 1-2 hours",
        "Never induce vomiting without vet guidance: Some toxins cause more damage coming back up",
        "Antidotes exist: Rat poison (Vitamin K1), paracetamol (NAC), antifreeze (ethanol/fomepizole)",
        "Activated charcoal: Most effective within 2 hours of ingestion",
        "Cost: RM 600-3,500 (decontamination, antidotes, hospitalization)"
      ]} />

      <CostCTA variant={15} />

      <TableOfContents items={tocItems} />

      {/* Understanding Section */}
      <section id="understanding" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Skull className="h-6 w-6 text-destructive" />
          Understanding Pet Poisoning: How Toxins Work
        </h2>
        
        <p className="text-muted-foreground mb-6">
          According to Malaysian veterinary toxicology data, poisoning accounts for <strong>8-12% of pet emergency visits</strong>, with rat poison, human medications, and toxic foods being the top three culprits.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Direct Organ Toxins</h3>
            <p className="text-sm text-muted-foreground mb-2">Target: Liver, kidneys, heart</p>
            <p className="text-sm text-muted-foreground">Examples: Paracetamol, ibuprofen, grapes, lilies (cats)</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Anticoagulants (Bleeding)</h3>
            <p className="text-sm text-muted-foreground mb-2">Mechanism: Prevent blood clotting</p>
            <p className="text-sm text-muted-foreground">Examples: Rat poison (brodifacoum, warfarin)</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Neurological Toxins</h3>
            <p className="text-sm text-muted-foreground mb-2">Target: Brain, nervous system</p>
            <p className="text-sm text-muted-foreground">Examples: Permethrin (flea products), organophosphates</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Metabolic Disruptors</h3>
            <p className="text-sm text-muted-foreground mb-2">Timeline: Rapid onset (15 min-2 hours)</p>
            <p className="text-sm text-muted-foreground">Examples: Xylitol, ethylene glycol (antifreeze)</p>
          </div>
        </div>
      </section>

      {/* Rat Poison Section */}
      <section id="rat-poison" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">1. Rat Poison (Anticoagulant Rodenticides)</h2>
        
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Antidote: VITAMIN K1 (Phytonadione)
          </h3>
          <p className="text-muted-foreground mb-3">
            Common brands in Malaysia: Ratsak, Racumin, Klerat
          </p>
          <p className="text-muted-foreground">
            <strong>How it works:</strong> Prevents blood clotting → internal bleeding 2-5 days after ingestion
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Treatment Protocol</h3>
          <ol className="space-y-3 text-muted-foreground">
            <li><strong>1. Emergency decontamination</strong> (if within 2 hours): Induce vomiting + activated charcoal</li>
            <li><strong>2. Vitamin K1 injections:</strong> Initial injectable dose, then oral tablets for 14-30 days</li>
            <li><strong>3. Monitoring:</strong> Blood clotting tests (PT/PTT) 48-72 hours after finishing treatment</li>
          </ol>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 600-1,500</p>
          <p className="text-sm"><strong>Prognosis:</strong> Excellent if caught early (before bleeding starts)</p>
        </div>
      </section>

      {/* Paracetamol Section */}
      <section id="paracetamol" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Pill className="h-6 w-6 text-destructive" />
          2. Paracetamol (Panadol) - DEADLY to Cats and Dogs
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Antidote: N-Acetylcysteine (NAC)
          </h3>
          <p className="text-muted-foreground mb-3">
            <strong>Cats:</strong> ONE regular tablet (500mg) can be fatal
          </p>
          <p className="text-muted-foreground">
            Cats CANNOT metabolize paracetamol at all. Causes liver failure and red blood cell destruction.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptoms</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {["Brown/muddy gums", "Difficulty breathing", "Facial/paw swelling", "Vomiting", "Yellowing of gums/eyes", "Lethargy, collapse"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 1,200-3,500</p>
          <p className="text-sm"><strong>Prognosis:</strong> Good if treated within 4-8 hours</p>
        </div>
      </section>

      {/* Chocolate Section */}
      <section id="chocolate" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. Chocolate (Theobromine Toxicity)</h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            Antidote: NONE Available
          </h3>
          <p className="text-muted-foreground">
            Treatment is supportive care: decontamination, activated charcoal, IV fluids, seizure control if needed.
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-semibold">Chocolate Type</th>
                <th className="text-left p-3 font-semibold">Toxicity Level</th>
                <th className="text-left p-3 font-semibold">Dangerous Amount (10kg dog)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border"><td className="p-3">White chocolate</td><td className="p-3">Negligible</td><td className="p-3">Not toxic</td></tr>
              <tr className="border-t border-border bg-muted/20"><td className="p-3">Milk chocolate</td><td className="p-3">Low-Medium</td><td className="p-3">250g+</td></tr>
              <tr className="border-t border-border"><td className="p-3">Dark chocolate</td><td className="p-3">High</td><td className="p-3">85g+</td></tr>
              <tr className="border-t border-border bg-muted/20"><td className="p-3">Baking chocolate</td><td className="p-3">EXTREME</td><td className="p-3">40g+</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 600-2,000</p>
          <p className="text-sm"><strong>Prognosis:</strong> Good if treated early; seizures indicate serious toxicity</p>
        </div>
      </section>

      {/* Antifreeze Section */}
      <section id="antifreeze" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. Ethylene Glycol (Antifreeze)</h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Antidotes: Ethanol or Fomepizole
          </h3>
          <p className="text-muted-foreground mb-3">
            <strong>CRITICAL:</strong> Must start antidote within 8-12 hours
          </p>
          <p className="text-muted-foreground">
            Sweet taste attracts pets. Causes acute kidney failure within 24-72 hours.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptom Stages</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Stage 1 (30 min-12 hours):</strong> Appears "drunk," wobbly, vomiting</p>
            <p><strong>Stage 2 (12-24 hours):</strong> Seems to improve (dangerous false recovery)</p>
            <p><strong>Stage 3 (24-72 hours):</strong> Kidney failure, death</p>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 1,500-5,000+ (dialysis if needed: RM 3,000-8,000)</p>
          <p className="text-sm"><strong>Prognosis:</strong> Excellent if treated within 4-8 hours; very poor if kidney failure present</p>
        </div>
      </section>

      {/* Xylitol Section */}
      <section id="xylitol" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. Xylitol (Sugar-Free Products)</h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            Antidote: NONE
          </h3>
          <p className="text-muted-foreground mb-3">
            Found in: Sugar-free gum, candy, some peanut butters, baked goods
          </p>
          <p className="text-muted-foreground">
            <strong>2-3 pieces of gum can kill a small dog.</strong> Causes massive insulin release → life-threatening low blood sugar.
          </p>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 800-2,500</p>
          <p className="text-sm"><strong>Treatment:</strong> IV dextrose, liver protectants, intensive monitoring</p>
        </div>
      </section>

      {/* Decontamination Section */}
      <section id="decontamination" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Emergency Decontamination
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Safe to Induce Vomiting IF:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ingestion within 1-2 hours</li>
              <li>• Pet is conscious and alert</li>
              <li>• Non-corrosive substance</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              NEVER Induce Vomiting IF:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Corrosive substances (bleach, drain cleaner)</li>
              <li>• Petroleum products (gasoline)</li>
              <li>• Pet unconscious or having seizures</li>
              <li>• Ingestion &gt;2-4 hours ago</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Activated Charcoal</h3>
          <p className="text-muted-foreground mb-3">
            Binds toxins in stomach/intestines, preventing absorption. Most effective within 1-2 hours.
          </p>
          <p className="text-muted-foreground">
            <strong>NOT effective for:</strong> Heavy metals, ethylene glycol, xylitol, alcohol
          </p>
        </div>
      </section>

      {/* Home First Aid */}
      <section id="home-first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">At-Home First Aid (While Transporting to Vet)</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ DO:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Bring packaging/container of toxin</li>
              <li>• Note time of ingestion</li>
              <li>• Estimate amount consumed</li>
              <li>• Keep pet calm and warm</li>
              <li>• Call vet while en route</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">❌ DON'T:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Give food or water (unless vet instructs)</li>
              <li>• Induce vomiting without vet guidance</li>
              <li>• Give human medications</li>
              <li>• Wait to "see if symptoms develop"</li>
              <li>• Give milk (does NOT neutralize poisons)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prevention: Pet-Proof Your Home</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🏠 Kitchen/Pantry</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Lock medications in cabinets</li>
              <li>✅ Keep chocolate out of reach</li>
              <li>✅ Check peanut butter (xylitol-free)</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🚗 Garage/Outdoor</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Store antifreeze securely</li>
              <li>✅ Clean spills immediately</li>
              <li>✅ Use pet-safe rodent control</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🐕 General</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Use pet-specific flea products</li>
              <li>✅ Never give human medications</li>
              <li>✅ Secure trash cans</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mt-4">
          For the complete list of toxic substances, see our <InternalLink to="/blog/common-pet-poisons-malaysia">Common Pet Poisons Guide</InternalLink>.
        </p>
      </section>

      {/* Cost CTA */}
      <CostCTA variant={16} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "My dog ate chocolate 4 hours ago and seems fine. Is he okay?",
              answer: "Not necessarily. Chocolate toxicity symptoms can take 6-12 hours to appear, and by then the theobromine is already absorbed. Go to emergency vet NOW for decontamination (activated charcoal can still help) and monitoring. The amount and type of chocolate matter—dark and baking chocolate are most dangerous."
            },
            {
              question: "Can I give activated charcoal tablets from the pharmacy?",
              answer: "Human activated charcoal tablets are NOT the same as veterinary formulations and may not be effective or safe for pets. Veterinary activated charcoal is in liquid suspension, dosed specifically for pets. Go to emergency vet for proper decontamination."
            },
            {
              question: "How do I know if my pet needs emergency vet or can wait until morning?",
              answer: "For poisoning: NEVER wait. Even if symptoms seem mild or absent, internal damage may be progressing. The window for effective decontamination is 1-2 hours. Many poisons (rat poison, antifreeze) show no symptoms initially but cause fatal organ damage within 24-72 hours."
            },
            {
              question: "Will hydrogen peroxide make my dog vomit?",
              answer: "Hydrogen peroxide 3% can induce vomiting in dogs (NOT cats). Dose: 1 teaspoon per 5 kg body weight. However, ONLY use if instructed by veterinarian AND emergency vet visit is impossible. Risks include aspiration pneumonia and stomach irritation. Always call vet first."
            },
            {
              question: "My cat licked rat poison off her paw. Is this dangerous?",
              answer: "Yes—go to emergency vet immediately. Even small amounts of rat poison can be toxic. Modern rat poisons (brodifacoum) are extremely potent—ingesting a few grains can cause fatal bleeding. Vitamin K1 antidote treatment will be needed for 3-4 weeks."
            }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Time Saves Lives</h2>
        <p className="text-muted-foreground mb-6">
          In poisoning emergencies, every minute counts. The faster you act, the better your pet's chances of full recovery.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Save emergency vet number in phone NOW</li>
            <li>✅ Know what toxins are in your home</li>
            <li>✅ Pet-proof your environment</li>
            <li>✅ Never wait to "see what happens"—go to vet immediately</li>
          </ul>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

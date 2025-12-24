import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, DollarSign, Clock, CheckCircle2, Phone, Cat, Eye } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const CatEmergencyGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Cat Emergency Guide Malaysia: Critical Care for Cat Owners",
    "description": "Essential cat emergency guide for Malaysian owners. Recognize urinary blockage, poisoning, breathing issues, trauma. Find 24/7 vets, learn first aid, save your cat's life.",
    "image": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/cat-emergency-guide-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My male cat is going to the litter box frequently but only small amounts of urine. Is this an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES—this is a urinary blockage emergency. Go to emergency vet within 2-4 hours. Don't wait until morning. Complete blockage causes kidney failure within 24-48 hours and is fatal without treatment. This is the #1 emergency in male cats."
        }
      },
      {
        "@type": "Question",
        "name": "Can I give my cat Panadol if they seem in pain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ABSOLUTELY NOT. Even one Panadol tablet can KILL a cat. Cats cannot metabolize paracetamol and it causes fatal liver and red blood cell damage. Never give human medications to cats without veterinary guidance. Contact vet for cat-safe pain medication."
        }
      },
      {
        "@type": "Question",
        "name": "My cat is breathing with its mouth open. Should I worry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES—go to emergency vet IMMEDIATELY. Open-mouth breathing is NEVER normal in cats (unlike dogs). This indicates severe respiratory distress or heart failure. Keep cat calm and transport to emergency vet right away. This is life-threatening."
        }
      },
      {
        "@type": "Question",
        "name": "My cat fell from my 5th-floor balcony but seems fine. Do I still need to go to the vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES—go to emergency vet immediately. High-rise syndrome often causes internal injuries (lung bruising, internal bleeding, broken bones) that aren't immediately visible. Cats hide pain extremely well. By the time symptoms show, internal bleeding may be severe. All cats that fall from height need X-rays and examination."
        }
      },
      {
        "@type": "Question",
        "name": "How can I tell if my cat is in pain? They're acting normal.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cats HIDE pain. Subtle signs include: hiding more than usual, decreased grooming, not jumping to favorite spots, change in litter box usage, hunched posture, squinting eyes, decreased appetite, unusual vocalization, or avoiding interaction. If behavior changes AT ALL, contact your vet."
        }
      },
      {
        "@type": "Question",
        "name": "Is it true cats are sensitive to essential oils?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES—cats cannot metabolize essential oils. Tea tree oil, eucalyptus, citrus oils, peppermint, and others are toxic to cats. Even diffusers can cause problems (respiratory irritation, neurological symptoms). Never apply essential oils to cats or use heavily around them."
        }
      }
    ]
  };

  const tocItems = [
    { id: "hidden-illness", title: "Why Cat Emergencies Are Different" },
    { id: "urinary-blockage", title: "1. Urinary Blockage (Male Cats) - #1 Killer" },
    { id: "breathing", title: "2. Difficulty Breathing - ALWAYS Emergency" },
    { id: "poisoning", title: "3. Poisoning - Cats Are Extremely Sensitive" },
    { id: "high-rise", title: "4. High-Rise Syndrome - Falls" },
    { id: "not-eating", title: "5. Not Eating >24 Hours" },
    { id: "trauma", title: "6. Trauma (Traffic, Dog Attacks, Falls)" },
    { id: "seizures", title: "7. Seizures" },
    { id: "eye-injuries", title: "8. Eye Injuries" },
    { id: "heatstroke", title: "9. Heatstroke" },
    { id: "vomiting", title: "10. Severe Vomiting or Diarrhea" },
    { id: "warning-signs", title: "Subtle Cat Warning Signs" },
    { id: "first-aid-kit", title: "Cat First Aid Kit" },
    { id: "breed-risks", title: "Malaysian Cat Breeds & Risks" },
    { id: "costs", title: "Emergency Vet Costs" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  return (
    <ArticleLayout
      metaTitle="Complete Cat Emergency Guide Malaysia 2025 | PetCare Malaysia"
      metaDescription="Essential cat emergency guide for Malaysian owners. Recognize urinary blockage, poisoning, breathing issues, trauma. Find 24/7 vets, learn first aid, save your cat's life."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/cat-emergency-guide-malaysia`}
      language={language}
      category="Emergency Guide"
      categoryColor="destructive"
      title="Complete Cat Emergency Guide Malaysia: Critical Care for Cat Owners"
      date="December 24, 2024"
      readTime="12 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=600&fit=crop"
      heroImageAlt="Cat receiving emergency veterinary care in Malaysia"
      heroImageCaption="Cats are masters at hiding illness - learn to recognize subtle emergency signs"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Cat Emergency? Act Now!"
        text="If your cat is experiencing a life-threatening emergency, do not wait. Cats hide illness until it's critical. Contact a 24-hour veterinary clinic immediately."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "#1 cat emergency: Male cat urinary blockage (fatal within 24-48 hours)",
        "Cats HIDE illness: By the time symptoms show, condition is often advanced",
        "Open-mouth breathing in cats = ALWAYS emergency (normal in dogs, never normal in cats)",
        "High-rise syndrome: Cats falling from apartments—common in Malaysian cities",
        "Emergency costs: RM 400-5,000 (urinary blockage RM 800-3,500)"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={9} />

      <TableOfContents items={tocItems} />

      {/* Hidden Illness Section */}
      <section id="hidden-illness" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Cat className="h-6 w-6 text-primary" />
          Why Cat Emergencies Are Different: The "Hidden Illness" Challenge
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Cats make up nearly <strong>30% of Malaysia's pet population</strong>, with an estimated 300,000+ owned cats nationwide (Malaysian Veterinary Services, 2023). Despite their reputation for independence, cats are masters at hiding illness—often until it's a true emergency.
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">⚠️ Cats Are Masters of Disguise</h3>
          <p className="text-muted-foreground mb-3">
            <strong>Evolutionary Biology:</strong> As both predators and prey animals, cats instinctively hide weakness to avoid appearing vulnerable. This means:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Symptoms appear LATE in disease progression</li>
            <li>• Subtle behavior changes are the ONLY early warning signs</li>
            <li>• By the time symptoms are obvious, condition is often critical</li>
          </ul>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Key Differences from Dogs</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Dogs seek attention when sick; <strong>cats withdraw and hide</strong></li>
            <li>• Dogs show obvious pain; <strong>cats mask pain extremely well</strong></li>
            <li>• Dogs pant normally; <strong>open-mouth breathing in cats = EMERGENCY</strong></li>
          </ul>
        </div>

        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-semibold mb-3">Know Your Cat's Normal Behavior</h3>
          <p className="text-muted-foreground mb-3">Because cats hide illness, knowing what's "normal" for YOUR cat is crucial:</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Normal hiding spots and duration</li>
            <li>• Typical eating/drinking patterns</li>
            <li>• Usual activity levels and sleep locations</li>
            <li>• Litter box habits (frequency, amount)</li>
            <li>• Normal grooming behavior</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            <strong>Warning Sign:</strong> ANY deviation from normal behavior lasting &gt;24 hours warrants vet evaluation.
          </p>
        </div>
      </section>

      {/* Urinary Blockage Section */}
      <section id="urinary-blockage" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          1. Urinary Blockage (Male Cats) - #1 KILLER
        </h2>

        <p className="text-muted-foreground mb-4">
          Urinary blockage is THE most common life-threatening emergency in male cats. <strong>Complete blockage causes kidney failure and bladder rupture within 24-48 hours.</strong> Death occurs within 72 hours without treatment.
        </p>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Why Male Cats?</h3>
          <p className="text-muted-foreground mb-3">Male cats have a longer, narrower urethra that easily becomes blocked by:</p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Urinary crystals/stones</li>
            <li>• Inflammatory debris</li>
            <li>• Mucus plugs</li>
          </ul>
        </div>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">🚨 Critical Warning Signs</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Straining in litter box with little to no urine (most important sign)",
              "Crying or vocalizing when trying to urinate",
              "Frequent trips to litter box with no results",
              "Licking genital area excessively",
              "Urinating outside litter box (often in unusual places)",
              "Bloated, painful abdomen (late sign)",
              "Vomiting (late sign)",
              "Lethargy, hiding (late signs)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">🚨 GO TO EMERGENCY VET WITHIN 2-4 HOURS</h3>
          <p className="text-muted-foreground">
            Even nighttime—do NOT wait until morning. This is a true emergency. The bladder can rupture, and toxins build up causing kidney failure.
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Prevention</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Feed wet food (increases water intake)</li>
            <li>✅ Multiple water sources around house</li>
            <li>✅ Consider water fountains (cats prefer running water)</li>
            <li>✅ Maintain stress-free environment</li>
            <li>✅ Keep litter boxes clean (1 per cat + 1 extra)</li>
            <li>✅ Encourage play for weight management</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Cost:</strong> RM 800-3,500 (catheterization, hospitalization, fluids, medications)<br/>
            <strong>Recovery:</strong> 2-5 days hospitalization typically required. Recurrence risk: 30-50% within 1 year.
          </p>
        </div>
      </section>

      {/* Breathing Section */}
      <section id="breathing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          2. Difficulty Breathing - ALWAYS an Emergency
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">⚠️ Critical Rule for Cats</h3>
          <p className="text-muted-foreground font-bold">
            Open-mouth breathing is NEVER normal in cats (unlike dogs). If you see your cat breathing with mouth open, it's a life-threatening emergency.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Warning Signs</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Open-mouth breathing or gasping",
              "Rapid breathing (>40 breaths/minute at rest)",
              "Labored breathing (visible chest/abdominal effort)",
              "Blue or pale gums",
              "Coughing (rare in cats, usually serious)",
              "Stretching neck out to breathe",
              "Refusing to lie down (sitting in 'breathing position')"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Immediate Action</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Keep cat CALM (stress worsens breathing)</li>
            <li>Move to cool, quiet area</li>
            <li>Do NOT stress cat (no forced handling)</li>
            <li>Transport to emergency vet IMMEDIATELY</li>
            <li>Call ahead so they can prepare oxygen</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 500-3,000 (oxygen therapy, X-rays, medications)</p>
        </div>
      </section>

      {/* Poisoning Section */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-destructive" />
          3. Poisoning - Cats Are Extremely Sensitive
        </h2>

        <p className="text-muted-foreground mb-4">
          <strong>Important:</strong> Cats metabolize toxins differently than dogs—substances safe for dogs can be DEADLY to cats.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">💊 Human Medications (MOST DANGEROUS)</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• <strong>Paracetamol (Panadol):</strong> ONE tablet can kill a cat</li>
              <li>• Ibuprofen (Nurofen)</li>
              <li>• Aspirin</li>
              <li>• Even tiny amounts are potentially fatal</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🐕 Flea/Tick Products</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Dog flea treatments containing permethrin are DEADLY to cats</li>
              <li>• Always use cat-specific products only</li>
              <li>• Symptoms: Twitching, tremors, seizures, drooling</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🌸 Lilies (Extremely Toxic)</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• ALL parts of lily plants (flowers, leaves, pollen, water in vase)</li>
              <li>• Causes acute kidney failure</li>
              <li>• Even licking pollen off fur = potentially fatal</li>
              <li>• Common in Malaysian flower arrangements</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🧴 Essential Oils</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Cats cannot metabolize essential oils</li>
              <li>• Tea tree oil, eucalyptus, citrus oils, peppermint</li>
              <li>• Symptoms: Drooling, vomiting, tremors, difficulty breathing</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Immediate Action for Poisoning</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Note WHAT toxin, HOW MUCH, and WHEN</li>
            <li>Bring packaging if possible</li>
            <li>Call emergency vet immediately</li>
            <li>Do NOT induce vomiting (unless vet specifically instructs)</li>
            <li>Go to emergency vet immediately</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 600-3,500 (decontamination, antidotes, supportive care)</p>
        </div>

        <p className="text-muted-foreground mt-4">
          For a complete guide to toxic substances, see our <InternalLink to="/blog/common-pet-poisons-malaysia">Common Pet Poisons Guide</InternalLink>.
        </p>
      </section>

      {/* High-Rise Section */}
      <section id="high-rise" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. High-Rise Syndrome - Urban Malaysian Cat Emergency</h2>

        <p className="text-muted-foreground mb-4">
          Cats falling from apartment windows/balconies—common in Malaysian cities (KL, Penang, JB). Surprisingly, cats falling from 2-7 floors often have MORE severe injuries than higher floors (physics of "non-fatal falls").
        </p>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Common Injuries</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Broken jaw (from landing chin-first)</li>
            <li>• Lung bruising (pulmonary contusions)</li>
            <li>• Broken legs</li>
            <li>• Internal bleeding</li>
            <li>• Spinal injuries</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">
            <strong>CRITICAL:</strong> Even if cat seems "fine" after fall, internal injuries may not show immediately.
          </p>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Prevention</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Secure all windows with screens/grilles</li>
            <li>✅ Never leave windows open unsupervised</li>
            <li>✅ Install cat-proof balcony netting</li>
            <li>✅ Supervise outdoor access always</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 1,000-5,000+ (X-rays, surgery, hospitalization)</p>
        </div>
      </section>

      {/* Not Eating Section */}
      <section id="not-eating" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. Not Eating &gt;24 Hours (Hepatic Lipidosis Risk)</h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">⚠️ Unique Cat Emergency</h3>
          <p className="text-muted-foreground">
            Unlike dogs, cats that stop eating for &gt;2-3 days can develop <strong>hepatic lipidosis (fatty liver disease)</strong>—a life-threatening condition where fat infiltrates the liver. Overweight cats at highest risk.
          </p>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Warning Signs</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• No food intake for 24-48 hours</li>
            <li>• Weight loss</li>
            <li>• Yellowing of eyes/gums (jaundice)</li>
            <li>• Lethargy</li>
            <li>• Vomiting</li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-2">
          <strong>Immediate Action:</strong> If your cat hasn't eaten in 24-48 hours, contact vet urgently. This is NOT "wait and see" situation—especially for overweight cats.
        </p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 600-2,500 (appetite stimulants, possible feeding tube, hospitalization)</p>
      </section>

      {/* Trauma Section */}
      <section id="trauma" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">6. Trauma (Road Traffic, Dog Attacks, Falls)</h2>

        <p className="text-muted-foreground mb-4">
          Cats hide pain extraordinarily well. What looks like "just limping" may be fracture, internal bleeding, or spinal injury.
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">ALWAYS see emergency vet if:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Hit by vehicle</li>
            <li>• Attacked by dog</li>
            <li>• Fall from height</li>
            <li>• Any visible wounds</li>
            <li>• Limping or not using limb</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 800-4,000+ (depending on injuries)</p>
        </div>
      </section>

      {/* Seizures Section */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">7. Seizures</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Causes in Cats</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Poisoning (especially permethrin from dog flea products)</li>
            <li>• Kidney/liver disease</li>
            <li>• Brain tumors</li>
            <li>• Epilepsy (less common in cats than dogs)</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">What to Do</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Do NOT restrain cat</li>
            <li>Move objects away</li>
            <li>Keep room dark/quiet</li>
            <li>Time the seizure</li>
            <li>Go to emergency vet after seizure stops</li>
          </ol>
        </div>
      </section>

      {/* Eye Injuries Section */}
      <section id="eye-injuries" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          8. Eye Injuries or Sudden Blindness
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Common in Cats</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Fight wounds (cat scratches to eye)</li>
            <li>• Corneal ulcers</li>
            <li>• Sudden blindness (from high blood pressure/retinal detachment)</li>
            <li>• Eye proptosis (eye pops out—rare but emergency)</li>
          </ul>
        </div>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Warning Signs</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Squinting, pawing at eye</li>
            <li>• Swollen, red, or cloudy eye</li>
            <li>• Discharge from eye</li>
            <li>• Pupil doesn't respond to light</li>
            <li>• Sudden bumping into objects (blindness)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Action:</strong> Emergency vet within hours. Eye injuries progress rapidly.<br/>
            <strong>Cost:</strong> RM 500-3,000
          </p>
        </div>
      </section>

      {/* Heatstroke Section */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">9. Heatstroke (Less Common Than Dogs, But Still Risk)</h2>

        <p className="text-muted-foreground mb-4">
          While cats tolerate heat better than dogs, they're still at risk in Malaysia's climate if:
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li>• Left in car</li>
          <li>• No access to shade/water</li>
          <li>• Transported in hot vehicle</li>
          <li>• Brachycephalic breeds (Persians, Himalayans, Exotics)</li>
        </ul>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptoms</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Panting (abnormal for cats)</li>
            <li>• Drooling</li>
            <li>• Red gums</li>
            <li>• Vomiting</li>
            <li>• Weakness</li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-2">
          <strong>Action:</strong> Cool with room-temperature water, transport to vet immediately.
        </p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 800-2,500</p>
      </section>

      {/* Vomiting Section */}
      <section id="vomiting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">10. Severe Vomiting or Diarrhea</h2>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Emergency if:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Blood in vomit or diarrhea</li>
            <li>• Vomiting &gt;3-4 times in 24 hours</li>
            <li>• Not eating/drinking</li>
            <li>• Lethargy</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 400-1,800</p>
        </div>
      </section>

      {/* Subtle Warning Signs Section */}
      <section id="warning-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Subtle Cat Emergency Warning Signs</h2>

        <div className="bg-primary/5 p-6 rounded-xl">
          <p className="text-muted-foreground mb-3">Cats are subtle. Watch for these behavior changes:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Hiding more than usual (especially in unusual spots)</li>
            <li>• Decreased grooming (unkempt coat)</li>
            <li>• Changes in litter box habits (frequency, location, straining)</li>
            <li>• Vocalization changes (more or less vocal)</li>
            <li>• Not greeting you (when normally does)</li>
            <li>• Third eyelid showing (white/pink membrane visible in corner of eye)</li>
            <li>• Change in sleeping location (seeking warmth or cool areas)</li>
          </ul>
        </div>
      </section>

      {/* First Aid Kit Section */}
      <section id="first-aid-kit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          Cat First Aid Kit
        </h2>

        <div className="bg-primary/10 p-6 rounded-xl">
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cat carrier (secure, well-ventilated)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Thick towel (for wrapping if needed)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Digital thermometer</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Gauze pads</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Emergency vet contact list</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Cat's medical records</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Recent photo of cat</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Emergency cash (RM 1,000-2,000)</li>
          </ul>
        </div>

        <p className="text-muted-foreground mt-4">
          For complete first aid techniques, see our <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">Pet Emergency First Aid Guide</InternalLink>.
        </p>
      </section>

      {/* Breed Risks Section */}
      <section id="breed-risks" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Malaysian Cat Breeds & Emergency Risks</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Persians/Himalayans/Exotics</h3>
            <p className="text-sm text-muted-foreground mb-2">(Brachycephalic)</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Breathing difficulties</li>
              <li>• Heatstroke (Malaysia's climate)</li>
              <li>• Eye injuries (protruding eyes)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Domestic Shorthair/Local</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Generally hardy</li>
              <li>• Urinary blockage (males)</li>
              <li>• Trauma (if outdoor access)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Bengals/Active Breeds</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Trauma from jumping/climbing</li>
              <li>• Ingesting foreign objects</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Vet Costs for Cats in Malaysia
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Service</th>
                <th className="text-right py-3 px-4 font-semibold">Cost (RM)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-3 px-4">Emergency consultation</td><td className="text-right py-3 px-4">150-400</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Urinary catheterization + hospitalization</td><td className="text-right py-3 px-4">800-3,500</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Trauma workup (X-rays, treatment)</td><td className="text-right py-3 px-4">800-4,000</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Poisoning treatment</td><td className="text-right py-3 px-4">600-3,500</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Breathing emergency (oxygen, X-rays)</td><td className="text-right py-3 px-4">500-3,000</td></tr>
              <tr><td className="py-3 px-4">IV fluids + hospitalization</td><td className="text-right py-3 px-4">400-1,200</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          For complete cost breakdown, see our <InternalLink to="/blog/pet-emergency-costs-malaysia">Emergency Treatment Costs Guide</InternalLink>.
        </p>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-left">My male cat is going to the litter box frequently but only small amounts of urine. Is this an emergency?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                YES—this is a urinary blockage emergency. Go to emergency vet within 2-4 hours. Don't wait until morning. Complete blockage causes kidney failure within 24-48 hours and is fatal without treatment. This is the #1 emergency in male cats.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-left">Can I give my cat Panadol if they seem in pain?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                ABSOLUTELY NOT. Even one Panadol tablet can KILL a cat. Cats cannot metabolize paracetamol and it causes fatal liver and red blood cell damage. Never give human medications to cats without veterinary guidance. Contact vet for cat-safe pain medication.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-left">My cat is breathing with its mouth open. Should I worry?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                YES—go to emergency vet IMMEDIATELY. Open-mouth breathing is NEVER normal in cats (unlike dogs). This indicates severe respiratory distress or heart failure. Keep cat calm and transport to emergency vet right away. This is life-threatening.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4">
            <AccordionTrigger className="text-left">My cat fell from my 5th-floor balcony but seems fine. Do I still need to go to the vet?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                YES—go to emergency vet immediately. High-rise syndrome often causes internal injuries (lung bruising, internal bleeding, broken bones) that aren't immediately visible. Cats hide pain extremely well. By the time symptoms show, internal bleeding may be severe. All cats that fall from height need X-rays and examination.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5">
            <AccordionTrigger className="text-left">How can I tell if my cat is in pain? They're acting normal.</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Cats HIDE pain. Subtle signs include: hiding more than usual, decreased grooming, not jumping to favorite spots, change in litter box usage, hunched posture, squinting eyes, decreased appetite, unusual vocalization, or avoiding interaction. If behavior changes AT ALL, contact your vet.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-6">
            <AccordionTrigger className="text-left">Is it true cats are sensitive to essential oils?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                YES—cats cannot metabolize essential oils. Tea tree oil, eucalyptus, citrus oils, peppermint, and others are toxic to cats. Even diffusers can cause problems (respiratory irritation, neurological symptoms). Never apply essential oils to cats or use heavily around them. Symptoms include drooling, vomiting, tremors, and difficulty breathing.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Know Your Cat, Know the Signs</h2>
        <p className="text-muted-foreground mb-6">
          Cat emergencies require vigilance because cats are masters at hiding illness. Trust your instincts—if your cat's behavior changes, something is wrong.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Save 2-3 emergency vet numbers (24-hour) in phone</li>
            <li>✅ Learn YOUR cat's normal behavior patterns</li>
            <li>✅ Secure windows/balconies (prevent falls)</li>
            <li>✅ Use ONLY cat-safe products (medications, flea treatments)</li>
            <li>✅ Monitor litter box daily (males especially)</li>
            <li>✅ Keep cat carrier accessible</li>
          </ul>
        </div>

        <p className="text-muted-foreground mt-6 italic">
          Remember: By the time cats show obvious symptoms, the condition is often advanced. Early recognition and immediate action save lives.
        </p>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={10} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Pet Emergency Guide Malaysia", description: "Comprehensive guide covering all pet emergencies" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Critical cooling techniques for cats" },
        { to: "/blog/pet-choking-emergency-malaysia", title: "Pet Choking First Aid", description: "Heimlich maneuver for cats - step by step" },
        { to: "/blog/pet-accident-emergency-malaysia", title: "Pet Accident Emergency Protocol", description: "High-rise falls, trauma first aid" },
      ]} />
    </ArticleLayout>
  );
};

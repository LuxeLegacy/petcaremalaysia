import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Thermometer, Clock, Heart, Shield, DollarSign, Dog, Cat, Sun, Droplets, Wind, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const HeatstrokeGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Heatstroke in Pets: Complete Guide for Malaysia's Tropical Climate",
    "description": "Protect your pet from Malaysia's deadly heat. Recognize heatstroke symptoms in dogs & cats, perform emergency cooling, find 24/7 vets. Complete tropical climate guide.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-heatstroke-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My Husky lives in Malaysia. Is he always at risk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Huskies and other northern breeds are at CONSTANT heatstroke risk in Malaysia's climate. They should have 24/7 air conditioning, minimal outdoor exposure, and only very short walks during coolest hours. Many vets advise against owning these breeds in tropical climates."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can heatstroke happen in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Malaysia's climate: 15-20 minutes for heatstroke to develop in vulnerable pets. High-risk breeds (Bulldogs, Pugs) can develop heatstroke in as little as 10 minutes of exertion or sun exposure."
        }
      },
      {
        "@type": "Question",
        "name": "Should I shave my Golden Retriever to keep him cool?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Double-coated breeds should not be shaved. Their coat insulates against both heat and cold, protects from sunburn, and regulates temperature. Instead: regular brushing to remove undercoat, keep coat clean, provide AC."
        }
      },
      {
        "@type": "Question",
        "name": "My dog seems fine after being in the heat. Do I still need a vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if your dog showed ANY heatstroke symptoms. Internal organ damage may not show immediately but can become life-threatening within 24-72 hours. Bloodwork is essential to check organ function."
        }
      }
    ]
  };

  const tocItems = [
    { id: "why-deadly", title: "Why Malaysia's Climate Is Deadly for Pets" },
    { id: "what-is-heatstroke", title: "What Is Heatstroke?" },
    { id: "high-risk", title: "High-Risk Pets in Malaysia" },
    { id: "symptoms", title: "Critical Symptoms of Heatstroke" },
    { id: "emergency-treatment", title: "Emergency Treatment: What to Do RIGHT NOW" },
    { id: "vet-treatment", title: "Emergency Vet Treatment" },
    { id: "prognosis", title: "Prognosis: Survival Rates" },
    { id: "prevention", title: "Prevention Tips" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    {
      to: "/blog/dog-emergency-guide-malaysia",
      title: "Dog Emergency Guide",
      description: "Heatstroke, bloat, poisoning - dog-specific emergencies",
      icon: Dog,
      color: "text-primary"
    },
    {
      to: "/blog/cat-emergency-guide-malaysia",
      title: "Cat Emergency Guide",
      description: "Cat-specific emergencies including overheating",
      icon: Cat,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-first-aid-guide-malaysia",
      title: "Pet First Aid Guide",
      description: "Life-saving techniques for pet emergencies",
      icon: Heart,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-insurance-malaysia",
      title: "Pet Insurance Guide",
      description: "Cover emergency treatment costs",
      icon: Shield,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Heatstroke in Pets Malaysia: Symptoms, Treatment & Prevention"
      metaDescription="Protect your pet from Malaysia's deadly heat. Recognize heatstroke symptoms in dogs & cats, perform emergency cooling, find 24/7 vets. Complete tropical climate guide."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-heatstroke-malaysia`}
      language={language}
      category="Emergency"
      categoryColor="destructive"
      title="Heatstroke in Pets: Complete Guide for Malaysia's Tropical Climate"
      date="December 24, 2024"
      readTime="12 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Dog panting in hot weather - heatstroke risk in Malaysia"
      heroImageCaption="Malaysia's tropical climate poses serious heatstroke risks for pets"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Showing Heatstroke Signs? Act NOW!"
        text="Heatstroke can kill within 30-60 minutes. Start cooling immediately and transport to emergency vet."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Critical window: Brain damage occurs within 15-30 minutes of heatstroke onset",
        "High-risk breeds: Bulldogs, Pugs, Huskies, Persians cannot regulate heat in Malaysian climate",
        "Never leave in car: Car interior reaches 50-60°C within 10 minutes",
        "Peak danger hours: 11 AM - 4 PM daily in Malaysia",
        "Emergency cost: RM 800-3,000 (intensive cooling, IV fluids, organ monitoring)"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={8} />

      <TableOfContents items={tocItems} />

      {/* Why Malaysia's Climate Is Deadly */}
      <section id="why-deadly" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sun className="h-6 w-6 text-orange-500" />
          Why Malaysia's Climate Is Deadly for Pets
        </h2>
        
        <div className="bg-orange-500/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">The Heat + Humidity Combination</h3>
          <p className="text-muted-foreground mb-4">
            Pets cool themselves primarily through panting (dogs) or limited sweating through paw pads. This evaporative cooling becomes <strong>INEFFECTIVE</strong> when high humidity prevents evaporation and ambient temperature exceeds body temperature.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🌡️ Malaysian Climate Statistics</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Average Temperature:</strong> 28-35°C (82-95°F)</li>
              <li>• <strong>Humidity:</strong> 70-90% year-round</li>
              <li>• <strong>Heat Index:</strong> Often feels like 38-45°C</li>
              <li>• <strong>Urban Heat Islands:</strong> KL, Penang, JB +5-8°C above rural</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">⚠️ The Result</h3>
            <p className="text-muted-foreground">
              Pets <strong>cannot cool themselves effectively</strong> in Malaysian conditions, especially during peak heat hours (11 AM - 4 PM). Heatstroke can develop in as little as <strong>15-20 minutes</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Heatstroke */}
      <section id="what-is-heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Thermometer className="h-6 w-6 text-destructive" />
          What Is Heatstroke?
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">Medical Definition</h3>
          <p className="text-muted-foreground mb-4">
            Heatstroke (hyperthermia) occurs when body temperature rises above <strong>40.5°C (105°F)</strong>, causing cell death (especially brain, kidneys, liver), blood clotting disorders, multi-organ failure, and death within 30-60 minutes if untreated.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Normal Body Temperature</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Dogs: 38-39.2°C (100.5-102.5°F)</li>
                <li>• Cats: 38-39.2°C (100.5-102.5°F)</li>
              </ul>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-destructive">Danger Thresholds</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Heatstroke:</strong> &gt;40.5°C (105°F)</li>
                <li>• <strong>Severe:</strong> &gt;41.5°C (107°F) - organ damage</li>
                <li>• <strong>Critical:</strong> &gt;43°C (109°F) - often fatal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk Pets */}
      <section id="high-risk" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          High-Risk Pets in Malaysia
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Dog className="h-5 w-5" /> Dogs at Extreme Risk
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-destructive mb-1">🚨 Brachycephalic (Flat-Faced) - HIGHEST RISK</h4>
                <p className="text-sm text-muted-foreground">English Bulldogs, French Bulldogs, Pugs, Boston Terriers, Boxers, Shih Tzus. Should NOT live in Malaysia without constant AC.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-500 mb-1">⚠️ Heavy-Coated Northern Breeds</h4>
                <p className="text-sm text-muted-foreground">Siberian Huskies, Alaskan Malamutes, Chow Chows, Samoyeds. Double coats trap heat.</p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-600 mb-1">⚡ Large/Giant Breeds</h4>
                <p className="text-sm text-muted-foreground">German Shepherds, Golden Retrievers, Rottweilers. Large body mass generates more heat.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Cat className="h-5 w-5" /> Cats at Risk
            </h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-destructive mb-1">🚨 Brachycephalic Breeds</h4>
                <p className="text-sm text-muted-foreground">Persians, Himalayans, Exotic Shorthairs. Same airway limitations as flat-faced dogs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-500 mb-1">⚠️ Overweight/Obese Cats</h4>
                <p className="text-sm text-muted-foreground">Excess fat insulates body, prevents cooling.</p>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-3">Other Risk Factors</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Age: Puppies/kittens (&lt;6 months) and seniors (&gt;8 years)</li>
              <li>• Heart disease or respiratory disease</li>
              <li>• Obesity</li>
              <li>• Recent exercise or dehydration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Critical Symptoms of Heatstroke
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-orange-600">🚨 Early Warning Signs (ACT NOW)</h3>
            <ul className="space-y-3">
              {[
                "Excessive Panting: Heavy, rapid, continuous panting that doesn't stop",
                "Bright Red Tongue and Gums: Brick red or dark pink color",
                "Thick, Ropy Saliva: Drool becomes thick, sticky, rope-like",
                "Rapid Heart Rate: Heart racing, visible in chest"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-destructive">🚨 Advanced Symptoms (EMERGENCY)</h3>
            <ul className="space-y-3">
              {[
                "Vomiting or Diarrhea: Often bloody",
                "Weakness or Staggering: Wobbly walk, collapse",
                "Pale or Blue Gums: Indicates shock",
                "Seizures: Uncontrolled shaking, convulsions",
                "Unconsciousness: Not responding to voice/touch"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">🐱 Cats-Specific Signs</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            <li>• Open-mouth breathing (NEVER normal in cats)</li>
            <li>• Excessive grooming (attempting to cool with saliva)</li>
            <li>• Hiding or seeking cool surfaces</li>
            <li>• Panting (abnormal in cats unless just exercised)</li>
          </ul>
        </div>
      </section>

      {/* Emergency Treatment */}
      <section id="emergency-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          Emergency Treatment: What to Do RIGHT NOW
        </h2>

        <div className="space-y-4 mb-8">
          {[
            { 
              title: "Remove from Heat IMMEDIATELY", 
              text: "Move pet to shaded or air-conditioned area. Stop any exercise immediately. Get indoors if possible.",
              icon: Shield
            },
            { 
              title: "Call Emergency Vet While You Cool", 
              text: "Call ahead so they can prepare ice packs, IV fluids, and oxygen. They can advise you during transport.",
              icon: Phone
            },
            { 
              title: "Start Cooling (CRITICAL - Do This RIGHT)", 
              text: "Use room-temperature or cool water (NOT ice water). Pour over body, focus on groin, armpits, neck, paw pads. Place near fan or in air-conditioned car.",
              icon: Droplets
            },
            { 
              title: "Monitor Temperature", 
              text: "Take rectal temperature every 5 minutes if possible. STOP active cooling when temperature reaches 39.5°C (103°F).",
              icon: Thermometer
            },
            { 
              title: "Transport to Emergency Vet Immediately", 
              text: "GO TO VET EVEN IF PET SEEMS TO RECOVER. Internal organ damage may not be immediately apparent. Complications can develop 24-72 hours later.",
              icon: Clock
            },
          ].map((step, index) => (
            <div key={index} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">✅ CORRECT Cooling Method</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Room-temperature or cool water</li>
              <li>✅ Focus on groin, armpits, neck, paw pads</li>
              <li>✅ Place near fan for evaporative cooling</li>
              <li>✅ Offer small amounts of cool water to drink</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">❌ WRONG Methods (NEVER Do This)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Ice water or ice packs directly on body</li>
              <li>❌ Submerging in cold water</li>
              <li>❌ Forcing large amounts of water</li>
              <li>❌ Covering with wet towels (traps heat)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vet Treatment */}
      <section id="vet-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Vet Treatment for Heatstroke
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">What Vets Will Do:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Aggressive Cooling:</strong> Cool IV fluids, cool water enemas</li>
              <li>• <strong>IV Fluid Therapy:</strong> Rehydration, support blood pressure</li>
              <li>• <strong>Oxygen Therapy:</strong> If breathing difficulty</li>
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Monitoring:</strong> Temperature, bloodwork, organ function</li>
              <li>• <strong>Medications:</strong> Anti-nausea, gastroprotectants, antibiotics</li>
              <li>• <strong>Hospitalization:</strong> 24-72 hours typical</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">💰 Cost Estimate: RM 800-3,000</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1 text-muted-foreground">
              <li>• Emergency consultation: RM 150-400</li>
              <li>• IV fluids + hospitalization: RM 400-1,200</li>
            </ul>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Bloodwork: RM 300-600</li>
              <li>• Medications + oxygen: RM 200-600</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prognosis */}
      <section id="prognosis" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prognosis: Survival Rates</h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">80-90%</div>
            <div className="text-sm font-semibold mb-1">Early Treatment</div>
            <p className="text-xs text-muted-foreground">Within 30-60 mins, temp &lt;41°C</p>
          </div>
          <div className="bg-orange-500/10 p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">50-60%</div>
            <div className="text-sm font-semibold mb-1">Delayed Treatment</div>
            <p className="text-xs text-muted-foreground">&gt;90 mins, mild organ dysfunction</p>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-destructive mb-2">&lt;30%</div>
            <div className="text-sm font-semibold mb-1">Severe Complications</div>
            <p className="text-xs text-muted-foreground">Temp &gt;43°C, multi-organ failure</p>
          </div>
        </div>

        <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Long-Term Effects:</strong> Even survivors may have permanent damage including kidney disease, brain damage, and chronic GI issues.
          </p>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Prevention: Keep Your Pet Safe in Malaysia's Heat
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🕐 Avoid Peak Heat Hours (11 AM - 4 PM)</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>✅ Walk dogs ONLY before 8 AM or after 7 PM</li>
              <li>✅ 5-Second Pavement Test: If too hot for your hand = too hot for paws</li>
              <li>✅ Asphalt can reach 60°C (140°F) in Malaysian sun</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🚫 NEVER Leave Pet in Car</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• 10 minutes: +7-10°C increase</li>
              <li>• 20 minutes: Interior reaches 50-60°C</li>
              <li>• 30 minutes: LETHAL temperatures</li>
              <li>• Malaysian Law: This can be considered animal cruelty</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">💧 Fresh Water</h4>
            <p className="text-sm text-muted-foreground">Multiple water bowls, water fountains, refresh every few hours</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">🌳 Shade</h4>
            <p className="text-sm text-muted-foreground">Never leave in sun-exposed area, multiple shaded spots</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">❄️ Air Conditioning</h4>
            <p className="text-sm text-muted-foreground">Essential for high-risk breeds, ideal temp 23-25°C</p>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Identify if your pet is high-risk breed",
              "Establish walking schedule (before 8 AM, after 7 PM only)",
              "Ensure 24/7 AC for high-risk breeds",
              "Save emergency vet contact in phone",
              "Never leave pet in car",
              "Learn early heatstroke signs",
              "Know emergency cooling protocol"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost CTA before FAQ */}
      <CostCTA variant={9} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "My Husky lives in Malaysia. Is he always at risk?",
              answer: "Yes. Huskies and other northern breeds are at CONSTANT heatstroke risk in Malaysia's climate. They should have 24/7 air conditioning, minimal outdoor exposure, and only very short walks during coolest hours. Many vets advise against owning these breeds in tropical climates due to chronic heat stress and significantly reduced quality of life."
            },
            {
              question: "Can I walk my dog in the evening after sunset?",
              answer: "Yes, evening walks (after 7 PM) are safest. However, check pavement temperature first (5-second test with your hand). Humidity remains high in evenings, so watch for excessive panting. Short walks are still recommended for high-risk breeds."
            },
            {
              question: "Is it safe to take my dog to the beach in Malaysia?",
              answer: "Beach outings carry high heatstroke risk due to: sun reflection off sand/water, limited shade, salt water (worsens dehydration), hot sand. If you go: early morning only (before 8 AM), bring portable shade, constant fresh water, limit to 20-30 minutes."
            },
            {
              question: "Should I shave my Golden Retriever to keep him cool?",
              answer: "No. Double-coated breeds should not be shaved. Their coat insulates against both heat and cold, protects from sunburn, and regulates temperature. Shaving can cause permanent coat damage and increases heatstroke risk. Instead: regular brushing, keep coat clean, provide AC."
            },
            {
              question: "My dog seems fine after being in the heat. Do I still need a vet?",
              answer: "Yes, if your dog showed ANY heatstroke symptoms (excessive panting, weakness, vomiting). Internal organ damage may not show immediately but can become life-threatening within 24-72 hours. Bloodwork is essential to check organ function."
            },
            {
              question: "How quickly can heatstroke happen?",
              answer: "In Malaysia's climate: 15-20 minutes for heatstroke in vulnerable pets. High-risk breeds (Bulldogs, Pugs) can develop heatstroke in as little as 10 minutes of exertion or sun exposure. Seniors and obese pets are also rapid-onset."
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

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

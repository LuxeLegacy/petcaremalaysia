import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Heart, Shield, DollarSign, Car, Phone, CheckCircle2, Activity, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const AccidentGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What to Do When Your Pet Has an Accident: Complete Emergency Protocol for Malaysia",
    "description": "Complete guide for pet accidents in Malaysia: road traffic, falls, dog fights, trauma. Learn emergency first aid, safe transport, when to rush to vet.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-accident-emergency-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My dog was hit by a motorcycle but seems fine, just limping. Do I really need to go to the vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES—go to emergency vet immediately. Internal injuries (bleeding, organ damage, lung bruising) are common in vehicle accidents and may NOT show symptoms for hours."
        }
      },
      {
        "@type": "Question",
        "name": "My cat fell from the 3rd floor but landed on her feet and walked away. Is she okay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. High-rise syndrome commonly causes lung bruising, broken jaw, fractured limbs, and internal injuries that aren't immediately obvious. Cats are experts at hiding pain."
        }
      },
      {
        "@type": "Question",
        "name": "Should I remove the object if something is impaling my pet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO—never remove impaling objects. The object may be sealing a blood vessel; removing it can cause massive bleeding. Secure the object to prevent movement and transport immediately."
        }
      }
    ]
  };

  const tocItems = [
    { id: "types", title: "Types of Pet Accidents in Malaysia" },
    { id: "hidden-injuries", title: "Why Hidden Injuries Are the Rule" },
    { id: "abc-assessment", title: "The ABC Assessment" },
    { id: "shock", title: "Recognizing Shock: The Silent Killer" },
    { id: "first-aid", title: "Emergency First Aid Protocol" },
    { id: "what-not-to-do", title: "What NOT to Do After Accidents" },
    { id: "when-to-go", title: "When to Go to Emergency Vet" },
    { id: "vet-treatment", title: "Emergency Vet Trauma Treatment" },
    { id: "prevention", title: "Prevention: Reduce Accident Risk" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    {
      to: "/blog/pet-emergency-first-aid-guide-malaysia",
      title: "Pet First Aid Complete Guide",
      description: "All emergency first aid techniques for pets",
      icon: Heart,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-heatstroke-malaysia",
      title: "Heatstroke Emergency Guide",
      description: "Another common emergency in Malaysia",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-insurance-malaysia",
      title: "Pet Insurance Guide",
      description: "Cover accident treatment costs",
      icon: Shield,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-costs-malaysia",
      title: "Emergency Vet Costs Guide",
      description: "Detailed breakdown of trauma treatment costs",
      icon: DollarSign,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Accident Protocol Malaysia: First Aid, Vet Care & Transport"
      metaDescription="Complete guide for pet accidents in Malaysia: road traffic, falls, dog fights, trauma. Learn emergency first aid, safe transport, when to rush to vet. Step-by-step protocol."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-accident-emergency-malaysia`}
      language={language}
      category="Emergency"
      categoryColor="destructive"
      title="What to Do When Your Pet Has an Accident: Complete Emergency Protocol for Malaysia"
      date="December 24, 2024"
      readTime="14 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Pet emergency care after accident"
      heroImageCaption="Know what to do when your pet has an accident - it could save their life"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Had an Accident? Act Now!"
        text="Many severe injuries are NOT visible. Internal bleeding and organ damage require immediate vet care. Transport carefully."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Hidden injuries are the rule, not exception: Always see vet after accidents, even if pet seems fine",
        "Golden hour: First 60 minutes critical for survival in severe trauma",
        "Move carefully: Improper handling can worsen spinal injuries",
        "Shock kills: Rapid deterioration can occur 15-30 minutes post-accident",
        "Emergency cost: RM 1,000-6,000+ (trauma workup, surgery, hospitalization)"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={12} />

      <TableOfContents items={tocItems} />

      {/* Types of Accidents */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Car className="h-6 w-6 text-destructive" />
          Types of Pet Accidents in Malaysia
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🚗 Road Traffic Accidents (Most Common)</h3>
            <p className="text-muted-foreground text-sm mb-3">
              <strong>Malaysian Context:</strong> High stray population, free-roaming pets, dense traffic = 40-50% of emergency trauma cases.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Hit by car, motorcycle, bicycle</li>
              <li>• Dragged/run over</li>
              <li>• Multiple injuries common (fractures, internal bleeding, head trauma)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Building className="h-5 w-5" /> High-Rise Falls
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              <strong>High-Rise Syndrome:</strong> Common in KL, Penang condos. Cats falling from balconies 2+ stories.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Lung contusions (bruising from impact)</li>
              <li>• Fractured legs/pelvis</li>
              <li>• Broken jaw (common in cats)</li>
              <li>• Internal injuries may not show immediately</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🐕 Dog Fights</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Puncture wounds (may look small but extensive underneath)</li>
              <li>• Crush injuries to small dogs from larger dogs</li>
              <li>• Bite wounds become infected rapidly (24-48 hours)</li>
              <li>• Thorax/neck bites can be immediately life-threatening</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">⚡ Other Trauma</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Caught in gates, doors, car windows</li>
              <li>• Construction site injuries</li>
              <li>• Animal attacks (snakes, monitor lizards)</li>
              <li>• Burns (fireworks, boiling water)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hidden Injuries */}
      <section id="hidden-injuries" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          Why "Looking Fine" Means Nothing After Trauma
        </h2>

        <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl mb-6">
          <h3 className="font-bold text-lg mb-3">The Critical Challenge</h3>
          <p className="text-muted-foreground">
            Many severe injuries are NOT immediately visible. Internal bleeding, organ damage, and spinal injuries can be present even when your pet appears "okay" on the outside.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-destructive mb-2">70%</div>
            <p className="text-sm text-muted-foreground">of road accident pets have internal injuries not visible externally</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">6-12 hrs</div>
            <p className="text-sm text-muted-foreground">internal bleeding symptoms may take this long to appear</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">60 min</div>
            <p className="text-sm text-muted-foreground">"Golden Hour" - critical window for trauma survival</p>
          </div>
        </div>
      </section>

      {/* ABC Assessment */}
      <section id="abc-assessment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          The ABC Assessment
        </h2>

        <div className="space-y-4">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3 text-primary">A - AIRWAY</h3>
            <p className="text-muted-foreground mb-3">Is the airway clear? Is pet breathing?</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Check for:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Breathing movements</li>
                  <li>• Chest rise and fall</li>
                  <li>• Air movement from nose</li>
                </ul>
              </div>
              <div className="bg-destructive/10 p-3 rounded-lg">
                <h4 className="font-semibold mb-2 text-destructive">If NOT breathing:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Clear mouth of blood/debris</li>
                  <li>• Begin rescue breathing (2 breaths)</li>
                  <li>• Call for help, transport immediately</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3 text-primary">B - BREATHING</h3>
            <p className="text-muted-foreground mb-3">How is pet breathing?</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Normal rates:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Dogs: 10-30 breaths/minute at rest</li>
                  <li>• Cats: 20-30 breaths/minute</li>
                </ul>
              </div>
              <div className="bg-destructive/10 p-3 rounded-lg">
                <h4 className="font-semibold mb-2 text-destructive">Emergency Signs:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rapid, shallow breathing</li>
                  <li>• Gasping, open-mouth breathing</li>
                  <li>• Blue/purple gums (lack of oxygen)</li>
                  <li>• Labored breathing (visible effort)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-3 text-primary">C - CIRCULATION</h3>
            <p className="text-muted-foreground mb-3">Is heart beating? Are gums pink?</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Check:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Gum color (should be pink)</li>
                  <li>• Capillary refill time (press gum, color returns &lt;2 sec)</li>
                  <li>• Pulse (inside thigh, femoral artery)</li>
                </ul>
              </div>
              <div className="bg-destructive/10 p-3 rounded-lg">
                <h4 className="font-semibold mb-2 text-destructive">SHOCK Signs:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pale, white, or gray gums</li>
                  <li>• Capillary refill &gt;3 seconds</li>
                  <li>• Weak or absent pulse</li>
                  <li>• Cold extremities (paws, ears)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shock */}
      <section id="shock" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Recognizing Shock: The Silent Killer
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">What Is Shock?</h3>
          <p className="text-muted-foreground mb-4">
            Inadequate blood flow to organs, causing organ failure and death if untreated. Can develop within <strong>15-30 minutes</strong> post-accident.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Shock Symptoms:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Pale or white gums</li>
                <li>• Rapid, weak pulse</li>
                <li>• Rapid breathing</li>
                <li>• Cold paws/ears</li>
                <li>• Weakness, collapse</li>
                <li>• Glazed, unfocused eyes</li>
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Action:</h4>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Keep pet warm (wrap in blanket)</li>
                <li>Lay on side, head slightly lower</li>
                <li>Transport to emergency vet IMMEDIATELY</li>
                <li>Handle gently (shock worsens with stress)</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* First Aid Protocol */}
      <section id="first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          Emergency First Aid: Step-by-Step Protocol
        </h2>

        <div className="space-y-4">
          {[
            { 
              step: 1, 
              title: "Ensure Your Safety First", 
              content: "Check for traffic (road accidents), move away from danger. Approach calmly. Even gentle pets may bite when injured."
            },
            { 
              step: 2, 
              title: "Assess Consciousness & Breathing", 
              content: "If unconscious: Check breathing and pulse. If not breathing, begin CPR (30 compressions : 2 breaths). If conscious: Speak softly, do NOT force movement."
            },
            { 
              step: 3, 
              title: "Control Bleeding", 
              content: "Apply direct pressure with clean cloth for 3-5 minutes. Do NOT lift to check. Add more layers if blood soaks through. For limb bleeding, elevate if possible."
            },
            { 
              step: 4, 
              title: "Immobilize for Transport", 
              content: "Assume spinal injury if: hit by vehicle, fall from height, unable to move back legs. Use rigid board for small pets, blanket as stretcher for large dogs. Keep spine straight."
            },
            { 
              step: 5, 
              title: "Keep Warm (Prevent Shock)", 
              content: "Wrap in blanket or towels. Do NOT use heating pads. Handle gently."
            },
            { 
              step: 6, 
              title: "Muzzle (If Necessary)", 
              content: "Only if conscious and showing aggression. Do NOT muzzle if: vomiting, difficulty breathing, unconscious, or facial injuries."
            },
            { 
              step: 7, 
              title: "Transport to Emergency Vet", 
              content: "Call ahead. Describe injuries. Drive carefully. Have helper monitor pet if possible."
            },
          ].map((item) => (
            <div key={item.step} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{item.step}</span>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What NOT to Do */}
      <section id="what-not-to-do" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What NOT to Do After Accidents</h2>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Don't give food or water", reason: "Surgery may be needed, choking risk" },
              { title: "Don't give human medications", reason: "Paracetamol/ibuprofen are TOXIC to pets" },
              { title: "Don't move pet unnecessarily", reason: "Can worsen spinal injuries, internal bleeding" },
              { title: "Don't apply ointments to wounds", reason: "Interferes with veterinary treatment" },
              { title: "Don't 'wait and see'", reason: "Hidden injuries progress over hours" },
              { title: "Don't panic", reason: "Pets sense stress, worsens shock" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-destructive font-bold">❌</span>
                <div>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Go */}
      <section id="when-to-go" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When to Go to Emergency Vet</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🚨 ALWAYS GO IMMEDIATELY for:</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Hit by vehicle (even if seems fine)</li>
              <li>• Fall from height &gt;1 meter</li>
              <li>• Dog fight with visible wounds</li>
              <li>• Any loss of consciousness</li>
              <li>• Difficulty breathing</li>
              <li>• Bleeding that won't stop</li>
              <li>• Unable to stand or walk</li>
              <li>• Crying out in pain</li>
              <li>• Pale gums</li>
              <li>• Visible fractures</li>
            </ul>
          </div>

          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">⚠️ Urgent Visit (Within 24 hours):</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Minor limping (able to bear weight)</li>
              <li>• Small cuts or abrasions</li>
              <li>• Mild swelling</li>
              <li>• Behavioral changes after incident</li>
            </ul>
            <p className="mt-4 text-sm font-semibold">
              When in Doubt: GO TO VET. Internal injuries worsen over hours. Early detection saves lives.
            </p>
          </div>
        </div>
      </section>

      {/* Vet Treatment */}
      <section id="vet-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Vet Trauma Treatment
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">What to Expect:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Initial Stabilization (First 30-60 min)</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Oxygen therapy</li>
                <li>• IV fluids (treat shock)</li>
                <li>• Pain management</li>
                <li>• Temperature regulation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Diagnostic Workup</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Physical examination (head-to-tail)</li>
                <li>• Bloodwork (organ function, blood loss)</li>
                <li>• X-rays (fractures, lung contusions)</li>
                <li>• Ultrasound (internal bleeding)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">💰 Cost Estimates</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Trauma Type</th>
                  <th className="text-right py-2">Cost Range (RM)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b"><td className="py-2">Minor (abrasions, small wounds)</td><td className="text-right">300-800</td></tr>
                <tr className="border-b"><td className="py-2">Moderate (fractures, no surgery)</td><td className="text-right">1,000-3,000</td></tr>
                <tr className="border-b"><td className="py-2">Severe (internal injuries, surgery)</td><td className="text-right">3,000-10,000+</td></tr>
                <tr className="border-b"><td className="py-2">Road accident (average)</td><td className="text-right">1,500-5,000</td></tr>
                <tr><td className="py-2">High-rise fall (average)</td><td className="text-right">2,000-6,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Most emergency vets require 50-100% deposit upfront.</p>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Prevention: Reduce Accident Risk
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🚗 Road Safety</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Secure fencing/gates</li>
              <li>✅ Leash always near roads</li>
              <li>✅ Supervise outdoor time</li>
              <li>✅ Keep cats indoors/catios</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🏠 Home Safety</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Secure windows/balconies</li>
              <li>✅ Block high balcony access</li>
              <li>✅ Gate off staircases</li>
              <li>✅ Supervise dog interactions</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">📱 Preparedness</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Save emergency vet contact</li>
              <li>✅ Know 24-hour clinic location</li>
              <li>✅ Keep first aid kit in car</li>
              <li>✅ Have blanket for stretcher</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Critical Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Assume internal injuries in all accidents",
              "Watch for shock (pale gums, weakness)",
              "Immobilize spine during transport",
              "Go to vet even if pet 'seems okay'",
              "Golden hour: First 60 minutes are critical"
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
      <CostCTA variant={13} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "My dog was hit by a motorcycle but seems fine, just limping. Do I really need to go to the vet?",
              answer: "YES—go to emergency vet immediately. Internal injuries (bleeding, organ damage, lung bruising) are common in vehicle accidents and may NOT show symptoms for hours. By the time symptoms appear, internal bleeding may be severe and life-threatening. X-rays and examination are essential for ALL traffic accidents."
            },
            {
              question: "My cat fell from the 3rd floor but landed on her feet and walked away. Is she okay?",
              answer: "Not necessarily. High-rise syndrome commonly causes lung bruising, broken jaw, fractured limbs, and internal injuries that aren't immediately obvious. Cats are experts at hiding pain. Even if walking, she needs emergency vet examination within 1-2 hours. Lung bruising symptoms can develop 6-12 hours after the fall."
            },
            {
              question: "There's a small bite wound from a dog fight. Can I clean it at home?",
              answer: "No—dog bite wounds require veterinary attention even if small. Bite wounds create puncture injuries with hidden damage under the skin. What looks like a small puncture can have extensive trauma underneath. Infection develops rapidly (within 24-48 hours). See vet within 4-6 hours."
            },
            {
              question: "How do I transport an injured large dog alone?",
              answer: "Use a blanket as stretcher—slide blanket under dog, grasp corners firmly, lift as one unit while keeping dog level. If spinal injury suspected, slide rigid board under dog first. For car: Slide dog in on blanket, support with towels to prevent rolling. Call emergency vet—they may have staff come out to assist."
            },
            {
              question: "Should I remove the object if something is impaling my pet?",
              answer: "NO—never remove impaling objects. The object may be sealing a blood vessel; removing it can cause massive bleeding. Secure the object to prevent movement (tape, cloth around it—not tight), and transport immediately to emergency vet."
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

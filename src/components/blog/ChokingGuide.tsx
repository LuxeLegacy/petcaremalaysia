import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Heart, Shield, DollarSign, Dog, Cat, Phone, CheckCircle2, Wind, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import chokingHero from '@/assets/choking-hero.jpg';

export const ChokingGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Pet Choking First Aid: Heimlich Maneuver for Dogs and Cats",
    "description": "Complete pet choking emergency guide for Malaysia. Learn Heimlich maneuver for dogs & cats, recognize choking signs, prevent common hazards.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "step": [
      { "@type": "HowToStep", "text": "Assess: Complete or partial obstruction? If partial (still coughing), transport to vet." },
      { "@type": "HowToStep", "text": "Restrain safely to prevent bite injuries." },
      { "@type": "HowToStep", "text": "Check mouth for visible object if safe." },
      { "@type": "HowToStep", "text": "Perform Heimlich maneuver if complete obstruction." },
      { "@type": "HowToStep", "text": "Check for breathing after object dislodged, begin CPR if needed." },
      { "@type": "HowToStep", "text": "Transport to emergency vet immediately." }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can pets choke on kibble or dry food?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rarely, but possible for fast 'vacuum' eaters. Prevention: Use slow-feeder bowls, smaller kibble size, or add water to soften."
        }
      },
      {
        "@type": "Question",
        "name": "Should I give the Heimlich even if my pet is still coughing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO. If pet is coughing, air is still moving (partial obstruction). Performing Heimlich can convert partial to complete obstruction. Keep pet calm and transport to emergency vet immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Are rawhide chews safe for dogs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rawhide poses choking risk when softened pieces break off. If you give rawhide: supervise always, take away when small enough to swallow whole. Many vets recommend avoiding rawhide altogether."
        }
      }
    ]
  };

  const tocItems = [
    { id: "understanding", title: "Understanding Choking: Complete vs. Partial" },
    { id: "recognizing", title: "Recognizing Choking: Critical Signs" },
    { id: "hazards", title: "Common Choking Hazards in Malaysia" },
    { id: "heimlich", title: "Emergency First Aid: Heimlich Maneuver" },
    { id: "cpr", title: "CPR for Pets: If Not Breathing" },
    { id: "when-to-go", title: "When to Go to Emergency Vet" },
    { id: "vet-treatment", title: "Emergency Vet Treatment" },
    { id: "prevention", title: "Prevention: Eliminate Choking Hazards" },
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
      to: "/blog/pet-emergency-transport-malaysia",
      title: "Emergency Transport Guide",
      description: "Safely transport choking pets to the vet",
      icon: AlertTriangle,
      color: "text-primary"
    },
    {
      to: "/blog/post-emergency-pet-care-malaysia",
      title: "Post-Emergency Care",
      description: "Recovery after choking incidents",
      icon: Shield,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-prevention-malaysia",
      title: "Prevention Guide",
      description: "Eliminate choking hazards from your home",
      icon: Dog,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Choking First Aid Malaysia: Save Your Dog or Cat's Life"
      metaDescription="Complete pet choking emergency guide for Malaysia. Learn Heimlich maneuver for dogs & cats, recognize choking signs, prevent common hazards. Step-by-step first aid."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-choking-emergency-malaysia`}
      language={language}
      category="Emergency"
      categoryColor="destructive"
      title="Pet Choking Emergency: Complete First Aid Guide for Malaysian Pet Owners"
      date="December 24, 2024"
      readTime="10 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage={chokingHero}
      heroImageAlt="Pet owner performing first aid on choking dog at home"
      heroImageCaption="Know how to save your pet's life if they choke"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Choking? Every Second Counts!"
        text="Complete airway blockage can cause death within 3-5 minutes. Act immediately and transport to emergency vet."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Complete airway blockage = death within 3-5 minutes without intervention",
        "Heimlich maneuver for pets = different technique than humans",
        "Common choking hazards in Malaysia: Bones, balls, corn cobs, toys, fruit pits",
        "Never panic: Calm approach prevents bite injuries and helps pet",
        "Emergency vet cost: RM 500-2,500 (sedation, object removal, possible surgery)"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={10} />

      <TableOfContents items={tocItems} />

      {/* Understanding Choking */}
      <section id="understanding" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wind className="h-6 w-6 text-destructive" />
          Understanding Choking: Complete vs. Partial Obstruction
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🚨 Complete Airway Obstruction (CRITICAL)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Timeline:</strong> 0-1 min: Panic • 1-2 min: Loss of consciousness • 3-5 min: Death
            </p>
            <h4 className="font-semibold mb-2">Signs:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• NO air movement (no breathing sounds)</li>
              <li>• Cannot cough or make sounds</li>
              <li>• Panic, extreme distress</li>
              <li>• Pawing frantically at mouth</li>
              <li>• Blue or purple gums/tongue</li>
              <li>• Rapid progression to collapse</li>
            </ul>
            <p className="mt-3 text-sm font-semibold text-destructive">
              Action: Perform Heimlich IMMEDIATELY
            </p>
          </div>

          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">⚠️ Partial Airway Obstruction (URGENT)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Can progress to complete!</strong> Monitor closely.
            </p>
            <h4 className="font-semibold mb-2">Signs:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Some air movement (wheezing, gagging)</li>
              <li>• Repeated coughing or retching</li>
              <li>• Difficulty breathing but still getting air</li>
              <li>• Excessive drooling</li>
              <li>• Distress but still conscious</li>
            </ul>
            <p className="mt-3 text-sm font-semibold text-orange-600">
              Action: Do NOT perform Heimlich. Transport to vet IMMEDIATELY.
            </p>
          </div>
        </div>
      </section>

      {/* Recognizing Choking */}
      <section id="recognizing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Recognizing Choking: Critical Signs
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Dog className="h-5 w-5" /> Dogs - Choking Symptoms
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Violent pawing at mouth/face</li>
              <li>• Gagging, retching (nothing comes out)</li>
              <li>• Excessive drooling or foaming</li>
              <li>• Making choking/gagging sounds</li>
              <li>• Inability to swallow</li>
              <li>• Panic, running around frantically</li>
              <li>• Blue/purple gums or tongue</li>
              <li>• Bulging, panicked eyes</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Cat className="h-5 w-5" /> Cats - Choking Symptoms
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Pawing at mouth</li>
              <li>• Gagging or retching</li>
              <li>• Open-mouth breathing (abnormal for cats)</li>
              <li>• Extreme distress</li>
              <li>• Hiding or running (fear response)</li>
              <li>• Drooling excessively</li>
              <li>• Coughing fits</li>
            </ul>
            <p className="mt-4 text-sm text-destructive font-semibold">
              Note: Cats are less likely to choke but more likely to have string/thread causing obstruction.
            </p>
          </div>
        </div>
      </section>

      {/* Choking Hazards */}
      <section id="hazards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Choking Hazards in Malaysia</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "🦴 Bones (MOST COMMON)", items: ["Cooked chicken bones (splinter)", "Rib bones, T-bones", "Bones from local cuisine (chicken rice, bak kut teh)"] },
            { title: "🎾 Balls and Toys", items: ["Small balls for large dogs", "Squeakers from toys", "Rope toy pieces", "Degraded rubber toys"] },
            { title: "🍖 Food Items", items: ["Corn cobs", "Large meat chunks", "Rawhide chews", "Rambutan seeds, mangosteen"] },
            { title: "🏠 Household Items", items: ["Socks, underwear", "Hair ties, rubber bands", "Lego pieces", "Bottle caps, wrappers"] },
            { title: "🌳 Outdoor Hazards", items: ["Sticks (splinter, lodge)", "Rocks", "Malaysian tree seed pods"] },
            { title: "🧵 String/Thread (CATS)", items: ["Sewing thread", "Yarn, ribbon", "Tinsel (Christmas)", "Dental floss"] },
          ].map((category, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{category.title}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {category.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Heimlich Maneuver */}
      <section id="heimlich" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Hand className="h-6 w-6 text-primary" />
          Emergency First Aid: Heimlich Maneuver for Pets
        </h2>

        <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-xl mb-6">
          <p className="font-semibold">
            ⚠️ IMPORTANT: Only perform Heimlich if complete obstruction (no air movement). If partial (still coughing), skip to transport.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
              <h3 className="font-bold text-lg">Assess and Stay Calm</h3>
            </div>
            <ul className="text-muted-foreground ml-11 space-y-1">
              <li>• Complete obstruction (no air, blue gums, collapse): Perform Heimlich NOW</li>
              <li>• Partial obstruction (still coughing/some air): Skip Heimlich, go to vet</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
              <h3 className="font-bold text-lg">Restrain Safely (Prevent Bite)</h3>
            </div>
            <p className="text-muted-foreground ml-11 mb-2">
              <strong>Warning:</strong> Even gentle pets may bite when panicking.
            </p>
            <ul className="text-muted-foreground ml-11 space-y-1">
              <li>• <strong>Dogs:</strong> Have helper hold, approach from behind, position between your legs if alone</li>
              <li>• <strong>Cats:</strong> Wrap in thick towel if possible</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</span>
              <h3 className="font-bold text-lg">Check Mouth (ONLY if Safe)</h3>
            </div>
            <ul className="text-muted-foreground ml-11 space-y-1">
              <li>• Open mouth and look inside (use flashlight)</li>
              <li>• If you can SEE and SAFELY grasp object: Remove carefully with fingers</li>
              <li>• Use fingers, NOT tools (avoid more trauma)</li>
              <li>• If aggressive or object not visible: Proceed to Heimlich</li>
            </ul>
          </div>

          {/* Step 4 - Dogs */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
              <h3 className="font-bold text-lg">Heimlich Maneuver for DOGS</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 ml-11">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Small Dogs (&lt;15 kg)</h4>
                <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Hold dog with back against your chest</li>
                  <li>Locate soft spot just below ribcage</li>
                  <li>Make fist, place just below ribcage</li>
                  <li>Thrust FIRMLY upward and inward</li>
                  <li>Give 5 quick thrusts</li>
                  <li>Check mouth for dislodged object</li>
                </ol>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Large Dogs (&gt;15 kg)</h4>
                <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Stand behind dog (normal standing position)</li>
                  <li>Reach around dog's abdomen</li>
                  <li>Make fist behind last rib</li>
                  <li>Thrust FIRMLY upward and inward</li>
                  <li>Give 5 forceful thrusts</li>
                  <li>Check mouth for object</li>
                </ol>
              </div>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg mt-4 ml-11">
              <h4 className="font-semibold mb-2">If Dog is Unconscious:</h4>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                <li>Lay dog on side</li>
                <li>Place hands just below ribcage</li>
                <li>Push firmly downward and forward toward head</li>
                <li>Give 5 compressions, check mouth</li>
              </ol>
            </div>
          </div>

          {/* Step 5 - Cats */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</span>
              <h3 className="font-bold text-lg">Heimlich Maneuver for CATS</h3>
            </div>
            
            <div className="ml-11">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                <li>Hold cat against your chest (facing away)</li>
                <li>Locate soft spot below ribcage</li>
                <li>Make fist, place below ribcage</li>
                <li>Thrust firmly upward (gentler than for dogs)</li>
                <li>Give 3-5 thrusts</li>
                <li>Check mouth for object</li>
              </ol>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-primary/10 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">6</span>
              <h3 className="font-bold text-lg">After Object Dislodged</h3>
            </div>
            <ul className="ml-11 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Remove object from mouth</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Check for breathing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> If not breathing: Begin CPR</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> <strong>Transport to emergency vet immediately even if breathing resumes</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CPR */}
      <section id="cpr" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          CPR for Pets: If Not Breathing After Object Removed
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">🐕 For Dogs</h3>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                <li>Place on right side</li>
                <li>Hand position: Over heart (behind elbow)</li>
                <li>Compress 1/3 to 1/2 depth of chest</li>
                <li>Rate: 100-120 compressions per minute</li>
                <li>Ratio: 30 compressions : 2 breaths</li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-3">🐱 For Cats</h3>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                <li>Same position (right side)</li>
                <li>Use one hand (or thumb and fingers)</li>
                <li>Compress 1/3 depth</li>
                <li>Rate: 100-120 per minute</li>
                <li>Ratio: 30 compressions : 2 breaths</li>
              </ol>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-center">
            Continue CPR while transporting to emergency vet
          </p>
        </div>
      </section>

      {/* When to Go */}
      <section id="when-to-go" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When to Go to Emergency Vet</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">🚨 GO IMMEDIATELY if:</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Complete airway obstruction (even if you dislodge object)</li>
              <li>• Partial obstruction (still coughing/gagging)</li>
              <li>• Coughing up blood</li>
              <li>• Collapse or unconsciousness</li>
              <li>• Blue gums</li>
              <li>• Heimlich was performed (throat trauma risk)</li>
              <li>• Cannot remove object yourself</li>
            </ul>
          </div>

          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">⚠️ CALL VET FOR GUIDANCE if:</h3>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Pet coughed and seems fine now</li>
              <li>• Brief gagging episode, resolved quickly</li>
              <li>• Unclear if choking or coughing</li>
            </ul>
            <p className="mt-3 text-sm font-semibold">
              Even if pet seems recovered, vet exam recommended to rule out throat damage.
            </p>
          </div>
        </div>
      </section>

      {/* Vet Treatment */}
      <section id="vet-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Vet Treatment for Choking
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">What Vets Will Do:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Immediate Assessment:</strong> Oxygen if needed, evaluate airway</li>
            <li>• <strong>Object Removal:</strong> Sedation, laryngoscope, forceps, endoscopy if deep</li>
            <li>• <strong>Surgery:</strong> If object in stomach/intestines</li>
            <li>• <strong>Post-Removal Care:</strong> Throat examination, X-rays, anti-inflammatory, antibiotics</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">💰 Cost Estimate</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-right py-2">Cost (RM)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b"><td className="py-2">Emergency consultation</td><td className="text-right">150-400</td></tr>
                <tr className="border-b"><td className="py-2">Sedation + object removal (mouth/throat)</td><td className="text-right">500-1,200</td></tr>
                <tr className="border-b"><td className="py-2">Endoscopy (if esophagus)</td><td className="text-right">1,000-2,500</td></tr>
                <tr className="border-b"><td className="py-2">Surgery (if stomach/intestines)</td><td className="text-right">2,000-5,000</td></tr>
                <tr><td className="py-2">Hospitalization (if needed)</td><td className="text-right">400-1,200/day</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Prevention: Eliminate Choking Hazards
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🎾 Safe Toy Selection</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Toys LARGER than pet's throat</li>
              <li>✅ Supervised play always</li>
              <li>✅ Inspect toys regularly</li>
              <li>❌ No small balls for large dogs</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🍖 Safe Feeding</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Cut food into appropriate sizes</li>
              <li>✅ Use slow-feeder bowls</li>
              <li>✅ Supervise chews</li>
              <li>❌ NEVER give cooked bones</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🏠 Household Safety</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Keep socks in closed drawers</li>
              <li>✅ Store small items out of reach</li>
              <li>✅ Secure trash cans</li>
              <li>✅ Supervise outdoor play</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Learn Heimlich maneuver for your pet's size",
              "Practice hand positioning (on stuffed animal)",
              "Eliminate choking hazards from home",
              "Supervise chew toys and bones",
              "Save emergency vet contact in phone",
              "Share this guide with family members"
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
      <CostCTA variant={11} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Can pets choke on kibble or dry food?",
              answer: "Rarely, but possible for fast 'vacuum' eaters or small pets with large kibble. Signs: gagging, regurgitation, distress after eating. Prevention: Use slow-feeder bowls, smaller kibble size, or add water to soften."
            },
            {
              question: "My dog coughs after drinking water. Is this choking?",
              answer: "Probably not. Coughing after drinking is usually water 'going down wrong pipe.' True choking involves persistent gagging, inability to cough properly, and severe distress. Brief coughing that resolves is typically not an emergency, but frequent episodes warrant vet evaluation."
            },
            {
              question: "Are rawhide chews safe?",
              answer: "Rawhide poses choking risk when softened pieces break off. If you give rawhide: supervise always, take away when small enough to swallow whole, choose appropriate size. Many vets recommend avoiding rawhide altogether due to choking and intestinal blockage risks."
            },
            {
              question: "My cat is gagging and coughing. Is it choking or hairball?",
              answer: "Hairball: Rhythmic gagging, usually produces hair/vomit, cat remains calm. Choking: Severe distress, pawing at mouth, panic, no hairball produced, possible blue gums. If unsure or distress seems severe, treat as choking emergency."
            },
            {
              question: "Should I give the Heimlich even if my pet is still coughing?",
              answer: "NO. If pet is coughing, air is still moving (partial obstruction). Coughing may dislodge the object naturally. Performing Heimlich can convert partial to complete obstruction. Keep pet calm, do NOT perform Heimlich, transport to emergency vet immediately."
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

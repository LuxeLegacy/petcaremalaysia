import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, DollarSign, Clock, CheckCircle2, Phone, Thermometer, Dog } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const DogEmergencyGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Dog Emergency Guide Malaysia: What Every Owner Must Know",
    "description": "Essential dog emergency guide for Malaysian owners. Recognize heatstroke, bloat, poisoning, and trauma. Find 24/7 vets, learn first aid, save your dog's life.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/dog-emergency-guide-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if my dog's panting is normal or heatstroke?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Normal panting stops within 5-10 minutes after exercise or moving to cool area. Heatstroke panting is EXCESSIVE, doesn't stop, and is accompanied by bright red tongue, thick drool, weakness, or vomiting. In Malaysia's climate, assume heatstroke if panting is severe and doesn't resolve quickly - cool dog immediately and head to vet."
        }
      },
      {
        "@type": "Question",
        "name": "Can I give my dog Panadol for pain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO! Never give human pain medications (paracetamol/Panadol, ibuprofen) to dogs. These are TOXIC and can cause liver failure, kidney failure, and death. Only give medications specifically prescribed by your vet."
        }
      },
      {
        "@type": "Question",
        "name": "My large breed dog ate a big meal and is pacing - should I worry about bloat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pacing after meals + restlessness + unproductive retching (trying to vomit with nothing coming out) are early bloat signs. If the abdomen is also swelling/tight, GO TO EMERGENCY VET IMMEDIATELY - bloat is deadly within 1-3 hours. Don't wait to 'see if it gets better.'"
        }
      },
      {
        "@type": "Question",
        "name": "My dog was hit by a motorcycle but seems fine. Do I still need a vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES - go to emergency vet immediately even if dog seems okay. Internal injuries (bleeding, organ damage, lung bruising) may not show symptoms for hours. By then, internal bleeding can be life-threatening. All trauma cases need X-rays and examination."
        }
      },
      {
        "@type": "Question",
        "name": "How can I prevent my dog from eating toxic things?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prevention strategies: keep trash bins secured with lids, don't leave food on counters, remove toxic plants from yard, store medications/chemicals out of reach, supervise outdoor time, use muzzle if dog has history of eating everything, and train 'leave it' command."
        }
      }
    ]
  };

  const tocItems = [
    { id: "introduction", title: "Why Dogs Face Unique Emergencies" },
    { id: "heatstroke", title: "1. Heatstroke - #1 Killer in Malaysian Climate" },
    { id: "bloat", title: "2. Bloat (GDV) - Life or Death Within 2 Hours" },
    { id: "poisoning", title: "3. Poisoning - Fast Action Saves Lives" },
    { id: "seizures", title: "4. Seizures - Always an Emergency" },
    { id: "traffic", title: "5. Road Traffic Accidents" },
    { id: "breathing", title: "6. Difficulty Breathing" },
    { id: "choking", title: "7. Choking or Foreign Object" },
    { id: "urinary", title: "8. Urinary Blockage (Male Dogs)" },
    { id: "fights", title: "9. Dog Fight Injuries" },
    { id: "collapse", title: "10. Sudden Collapse" },
    { id: "first-aid-kit", title: "Dog First Aid Kit Essentials" },
    { id: "breed-risks", title: "Breed-Specific Emergency Risks" },
    { id: "costs", title: "Emergency Vet Costs" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  return (
    <ArticleLayout
      metaTitle="Complete Dog Emergency Guide Malaysia 2025 | PetCare Malaysia"
      metaDescription="Essential dog emergency guide for Malaysian owners. Recognize heatstroke, bloat, poisoning, and trauma. Find 24/7 vets, learn first aid, save your dog's life."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/dog-emergency-guide-malaysia`}
      language={language}
      category="Emergency Guide"
      categoryColor="destructive"
      title="Complete Dog Emergency Guide Malaysia: What Every Owner Must Know"
      date="December 24, 2024"
      readTime="12 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Dog receiving emergency veterinary care in Malaysia"
      heroImageCaption="Knowing how to respond to dog emergencies can save your pet's life"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Dog Emergency? Act Now!"
        text="If your dog is experiencing a life-threatening emergency, do not wait. Contact a 24-hour veterinary clinic immediately."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Top 5 dog emergencies in Malaysia: Heatstroke, bloat (large breeds), poisoning, road accidents, snake bites",
        "Breed-specific risks: German Shepherds/Golden Retrievers = bloat; Bulldogs/Pugs = breathing issues",
        "Climate factor: Malaysia's heat puts ALL dogs at heatstroke risk 11 AM-4 PM",
        "Emergency costs: RM 500-8,000 depending on treatment (bloat surgery most expensive)",
        "Action plan: Save 3+ 24-hour vet contacts NOW, know symptoms, act within 1-2 hours"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={7} />

      <TableOfContents items={tocItems} />

      {/* Introduction Section */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Dog className="h-6 w-6 text-primary" />
          Why Dogs Face Unique Emergencies
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Dogs are Malaysia's most popular pets, with over <strong>500,000 registered dogs</strong> nationwide (Department of Veterinary Services, 2023). Yet according to Malaysian Veterinary Medical Association data, <strong>1 in 4 dog owners</strong> will face a life-threatening emergency with their pet at some point.
        </p>

        <p className="text-muted-foreground mb-4">
          Understanding canine physiology helps explain why certain emergencies are more common in dogs than cats:
        </p>

        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-3">Key Canine Vulnerabilities</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• <strong>Limited Cooling System:</strong> Dogs can't sweat (except through paw pads) - they rely on panting, making heatstroke more common</li>
            <li>• <strong>Indiscriminate Eating:</strong> Dogs will eat almost anything (garbage, toxins, foreign objects)</li>
            <li>• <strong>Deep-Chested Breeds:</strong> Predisposed to life-threatening bloat (GDV)</li>
            <li>• <strong>Exploratory Nature:</strong> Higher injury risk from cars, fights, and outdoor hazards</li>
          </ul>
        </div>
      </section>

      {/* Heatstroke Section */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Thermometer className="h-6 w-6 text-destructive" />
          1. Heatstroke - #1 Killer in Malaysian Climate
        </h2>

        <p className="text-muted-foreground mb-4">
          Malaysia's tropical climate (average 28-35°C) combined with high humidity creates <strong>EXTREME heatstroke risk</strong>. Dogs can develop heatstroke in just 15-20 minutes.
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">🚨 Critical Symptoms</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Excessive panting that doesn't stop",
              "Bright red or purple tongue/gums",
              "Thick, ropy drool",
              "Vomiting or diarrhea",
              "Weakness, staggering, collapse",
              "Temperature >40.5°C (105°F)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">High-Risk Breeds</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• <strong>Brachycephalic (flat-faced):</strong> Bulldogs, Pugs, Boxers, Shih Tzus, Boston Terriers</li>
            <li>• <strong>Heavy-coated:</strong> Siberian Huskies, Alaskan Malamutes, Chow Chows</li>
            <li>• <strong>Large/giant breeds:</strong> Great Danes, Mastiffs, Saint Bernards</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Immediate Action</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Move dog to cool/air-conditioned area IMMEDIATELY</li>
            <li>Pour room-temperature water over body (NOT ice water - causes blood vessel constriction)</li>
            <li>Place wet towels on groin, armpits, neck</li>
            <li>Offer small amounts of cool water to drink (don't force)</li>
            <li>Transport to emergency vet while cooling (call ahead)</li>
          </ol>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Prevention Tips for Malaysia</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Walk ONLY before 8 AM or after 7 PM</li>
            <li>✅ Never leave dog in car (even with windows cracked)</li>
            <li>✅ Provide shaded areas and constant water access</li>
            <li>✅ Consider cooling mats/vests for high-risk breeds</li>
            <li>✅ Limit outdoor play during peak heat (11 AM-4 PM)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 800-3,000 (IV fluids, cooling, organ monitoring)</p>
        </div>
      </section>

      {/* Bloat Section */}
      <section id="bloat" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          2. Bloat (GDV) - Life or Death Within 2 Hours
        </h2>

        <p className="text-muted-foreground mb-4">
          Gastric Dilatation-Volvulus (GDV/"bloat") occurs when a dog's stomach fills with gas and twists on itself, cutting off blood supply. This is a <strong>TRUE surgical emergency - death occurs within 1-3 hours</strong> without intervention.
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">🚨 Critical Warning Signs</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Rapidly swelling/hard abdomen (looks pregnant)",
              "Unproductive retching (trying to vomit but nothing comes out)",
              "Excessive drooling",
              "Restlessness, pacing, can't get comfortable",
              "Pale gums",
              "Rapid breathing",
              "Signs of shock (weakness, collapse)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">High-Risk Breeds (Common in Malaysia)</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• <strong>Highest Risk:</strong> German Shepherds, Golden Retrievers, Rottweilers, Dobermans, Great Danes</li>
            <li>• <strong>Moderate Risk:</strong> Labrador Retrievers, Boxers, Standard Poodles</li>
          </ul>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Prevention</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Feed 2-3 smaller meals instead of one large meal</li>
            <li>✅ Use slow-feeder bowls for fast eaters</li>
            <li>✅ Wait 1 hour after meals before exercise</li>
            <li>✅ Avoid raised food bowls (contrary to old advice)</li>
            <li>✅ Consider preventive gastropexy surgery for high-risk breeds</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 3,000-8,000 (emergency surgery required)</p>
        </div>
      </section>

      {/* Poisoning Section */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-destructive" />
          3. Poisoning - Fast Action Saves Lives
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🐀 Rat Poison</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Found in Malaysian homes, shops, restaurants</li>
              <li>• Causes internal bleeding 2-5 days after ingestion</li>
              <li>• Symptoms: Lethargy, pale gums, bleeding from nose/gums</li>
              <li>• Antidote available: Vitamin K1 injections</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🍫 Toxic Foods</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Chocolate (especially dark/baking chocolate)</li>
              <li>• Grapes/raisins (cause kidney failure)</li>
              <li>• Onions and garlic (Malaysian cooking common)</li>
              <li>• Xylitol (sugar-free gum/candy)</li>
              <li>• Macadamia nuts</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🌿 Toxic Plants</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Sago palm (extremely toxic, often fatal)</li>
              <li>• Oleander</li>
              <li>• Peacock flower (Poinciana)</li>
              <li>• Dieffenbachia (dumb cane)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">💊 Human Medications</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Paracetamol (Panadol) - DEADLY to dogs</li>
              <li>• Ibuprofen (Nurofen)</li>
              <li>• Aspirin</li>
              <li>• Antidepressants</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Immediate Action for Poisoning</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Note WHAT was eaten, HOW MUCH, and WHEN</li>
            <li>Bring packaging/plant sample if possible</li>
            <li>Call emergency vet immediately</li>
            <li>Do NOT induce vomiting without vet guidance (some toxins worse coming back up)</li>
            <li>Go to emergency vet immediately</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 600-3,500 (decontamination, antidotes, supportive care)</p>
        </div>

        <p className="text-muted-foreground mt-4">
          For a complete guide to toxic substances, see our <InternalLink to="/blog/common-pet-poisons-malaysia">Common Pet Poisons Guide</InternalLink>.
        </p>
      </section>

      {/* Seizures Section */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. Seizures - Always an Emergency</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">What Seizures Look Like</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Loss of consciousness</li>
            <li>• Falling to side</li>
            <li>• Paddling/jerking legs</li>
            <li>• Chomping jaws, foaming at mouth</li>
            <li>• Loss of bowel/bladder control</li>
            <li>• Lasts 30 seconds to 2-3 minutes typically</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">During Seizure</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>DO NOT put hands near mouth (dog won't swallow tongue)</li>
            <li>Move furniture away so dog doesn't injure self</li>
            <li>TIME the seizure (use phone timer)</li>
            <li>Keep room dark and quiet</li>
            <li>Do NOT restrain dog</li>
          </ol>
        </div>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">🚨 GO TO EMERGENCY VET IMMEDIATELY IF:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• First-time seizure</li>
            <li>• Seizure lasts &gt;5 minutes</li>
            <li>• Multiple seizures within 24 hours (cluster seizures)</li>
            <li>• Dog doesn't regain consciousness between seizures</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 800-2,500 (bloodwork, possible overnight monitoring)</p>
        </div>
      </section>

      {/* Road Traffic Section */}
      <section id="traffic" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. Road Traffic Accidents - Hidden Internal Injuries</h2>

        <p className="text-muted-foreground mb-4">
          Malaysia's traffic poses significant risk to dogs, especially in urban areas. <strong>Even if your dog seems "fine" after being hit</strong>, internal injuries (bleeding, organ damage, broken bones) may not be immediately visible.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Immediate Action</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Approach carefully (injured dogs may bite from pain/fear)</li>
            <li>Muzzle if possible (or tie scarf gently around muzzle)</li>
            <li>Keep dog still and calm</li>
            <li>Slide board/blanket under dog to transport (minimize movement)</li>
            <li>Go to emergency vet IMMEDIATELY - even if dog seems okay</li>
          </ol>
        </div>

        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 1,000-6,000+ (X-rays, surgery if needed, hospitalization)</p>
      </section>

      {/* Breathing Section */}
      <section id="breathing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">6. Difficulty Breathing - Minutes Matter</h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Critical Signs</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Open-mouth breathing (especially abnormal for resting dog)",
              "Blue or purple gums/tongue",
              "Gasping for air",
              "Can't lie down comfortably",
              "Excessive panting with anxiety",
              "Flared nostrils, extended neck"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-2">
          <strong>Immediate Action:</strong> Keep dog calm, cool, and transport to emergency vet immediately. Avoid stress or excitement.
        </p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 500-3,000 (oxygen therapy, diagnostics)</p>
      </section>

      {/* Choking Section */}
      <section id="choking" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">7. Choking or Foreign Object Obstruction</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Common Culprits</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li>• Balls (especially small balls for large dogs)</li>
            <li>• Bones (cooked chicken bones splinter)</li>
            <li>• Toys, sticks</li>
            <li>• Corn cobs</li>
            <li>• Fabric items</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Heimlich Maneuver for Dogs</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• <strong>Small dogs:</strong> Hold dog with back against your chest, make fist below ribcage, thrust upward</li>
            <li>• <strong>Large dogs:</strong> Stand behind dog, fist below ribcage, thrust upward</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 500-2,500 (sedation, removal)</p>
        </div>
      </section>

      {/* Urinary Blockage Section */}
      <section id="urinary" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">8. Urinary Blockage (Male Dogs)</h2>

        <p className="text-muted-foreground mb-4">
          While less common than in male cats, urinary blockage in male dogs is still an emergency.
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptoms</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Straining to urinate with little/no urine</li>
            <li>• Frequent attempts to urinate</li>
            <li>• Crying when trying to urinate</li>
            <li>• Licking genital area excessively</li>
            <li>• Bloated, painful abdomen</li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-2">
          <strong>Immediate Action:</strong> Emergency vet within 2-4 hours. Blockage causes kidney failure and bladder rupture.
        </p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 800-3,000 (catheterization, hospitalization)</p>
      </section>

      {/* Dog Fight Section */}
      <section id="fights" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">9. Dog Fight Injuries</h2>

        <p className="text-muted-foreground mb-4">
          Bite wounds often have hidden damage under skin (crushing, infection risk). What looks like "just a puncture" can have extensive underlying trauma.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Immediate Action</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
            <li>Separate dogs safely</li>
            <li>Check for bleeding (apply pressure with clean cloth)</li>
            <li>Take to vet even for "minor" bites - infection risk is high</li>
            <li>Emergency vet if: heavy bleeding, wounds near neck/chest/abdomen, dog in shock</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> RM 400-3,000 (cleaning, antibiotics, surgery if needed)</p>
        </div>
      </section>

      {/* Collapse Section */}
      <section id="collapse" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">10. Sudden Collapse or Weakness</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Possible Causes</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Heart failure</li>
            <li>• Internal bleeding (spleen tumor rupture common in older large breeds)</li>
            <li>• Severe anemia</li>
            <li>• Poisoning</li>
            <li>• Heatstroke</li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-2">
          <strong>Immediate Action:</strong> Keep dog still, calm, and warm. Transport to emergency vet immediately.
        </p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> RM 1,000-5,000 (extensive diagnostics needed)</p>
      </section>

      {/* First Aid Kit Section */}
      <section id="first-aid-kit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          Dog First Aid Kit Essentials
        </h2>

        <div className="bg-primary/10 p-6 rounded-xl">
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Muzzle (even gentle dogs bite when in pain)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Thick towels/blankets</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Slip lead</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Digital thermometer</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Gauze pads and bandages</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Antiseptic (chlorhexidine)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Hydrogen peroxide 3% (ONLY if vet instructs)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Eyewash solution</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Emergency vet contact list</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Pet's medical records</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Emergency cash/credit card (RM 1,000-3,000)</li>
          </ul>
        </div>

        <p className="text-muted-foreground mt-4">
          For complete first aid techniques, see our <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">Pet Emergency First Aid Guide</InternalLink>.
        </p>
      </section>

      {/* Breed Risks Section */}
      <section id="breed-risks" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Breed-Specific Emergency Risks</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Large/Giant Breeds</h3>
            <p className="text-sm text-muted-foreground mb-2">(German Shepherd, Golden Retriever, Rottweiler)</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Bloat (GDV) - highest risk</li>
              <li>• Bone/joint injuries</li>
              <li>• Spleen tumors (older dogs)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Brachycephalic Breeds</h3>
            <p className="text-sm text-muted-foreground mb-2">(Bulldogs, Pugs, Shih Tzus)</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Heatstroke - extreme risk in Malaysia</li>
              <li>• Breathing emergencies</li>
              <li>• Eye injuries (protruding eyes)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Small Breeds</h3>
            <p className="text-sm text-muted-foreground mb-2">(Chihuahua, Toy Poodle, Maltese)</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Hypoglycemia (low blood sugar) - puppies especially</li>
              <li>• Tracheal collapse</li>
              <li>• Dental emergencies</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">Working/Sporting Breeds</h3>
            <p className="text-sm text-muted-foreground mb-2">(Retrievers, Huskies, Border Collies)</p>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>• Heatstroke from overexertion</li>
              <li>• Foreign object ingestion</li>
              <li>• Injuries from high activity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Vet Costs for Dogs in Malaysia
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Service</th>
                <th className="text-right py-3 px-4 font-semibold">Cost Range (RM)</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50"><td className="py-3 px-4">After-hours consultation</td><td className="text-right py-3 px-4">150-400</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Bloodwork (full panel)</td><td className="text-right py-3 px-4">300-600</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">X-rays (2-3 views)</td><td className="text-right py-3 px-4">200-500</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">IV fluids + hospitalization (24h)</td><td className="text-right py-3 px-4">400-1,200</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Emergency surgery (bloat, foreign object)</td><td className="text-right py-3 px-4">2,500-8,000</td></tr>
              <tr className="border-b border-border/50"><td className="py-3 px-4">Heatstroke treatment</td><td className="text-right py-3 px-4">800-3,000</td></tr>
              <tr><td className="py-3 px-4">Poisoning treatment</td><td className="text-right py-3 px-4">600-3,500</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          <strong>Payment:</strong> Most require 50-100% deposit upfront. Credit cards accepted.
        </p>
        <p className="text-muted-foreground mt-2">
          For complete cost breakdown, see our <InternalLink to="/blog/pet-emergency-costs-malaysia">Emergency Treatment Costs Guide</InternalLink>.
        </p>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-left">How do I know if my dog's panting is normal or heatstroke?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Normal panting stops within 5-10 minutes after exercise or moving to cool area. Heatstroke panting is EXCESSIVE, doesn't stop, and is accompanied by bright red tongue, thick drool, weakness, or vomiting. In Malaysia's climate, assume heatstroke if panting is severe and doesn't resolve quickly - cool dog immediately and head to vet.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-left">Can I give my dog Panadol for pain?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                NO! Never give human pain medications (paracetamol/Panadol, ibuprofen) to dogs. These are TOXIC and can cause liver failure, kidney failure, and death. Only give medications specifically prescribed by your vet.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-left">My large breed dog ate a big meal and is pacing - should I worry about bloat?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Pacing after meals + restlessness + unproductive retching (trying to vomit with nothing coming out) are early bloat signs. If the abdomen is also swelling/tight, GO TO EMERGENCY VET IMMEDIATELY - bloat is deadly within 1-3 hours. Don't wait to "see if it gets better."
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4">
            <AccordionTrigger className="text-left">My dog was hit by a motorcycle but seems fine. Do I still need a vet?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                YES - go to emergency vet immediately even if dog seems okay. Internal injuries (bleeding, organ damage, lung bruising) may not show symptoms for hours. By then, internal bleeding can be life-threatening. All trauma cases need X-rays and examination.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5">
            <AccordionTrigger className="text-left">How can I prevent my dog from eating toxic things?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Dogs are indiscriminate eaters. Prevention strategies: keep trash bins secured with lids, don't leave food on counters, remove toxic plants from yard, store medications/chemicals out of reach, supervise outdoor time, use muzzle if dog has history of eating everything, and train "leave it" command. Consider puzzle feeders to satisfy foraging instinct safely.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Be Prepared, Act Fast</h2>
        <p className="text-muted-foreground mb-6">
          Dog emergencies are stressful, but preparation and quick action save lives. Know the warning signs, keep emergency contacts ready, and never hesitate to seek help when something feels wrong.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Save 3+ emergency vet numbers in phone TODAY</li>
            <li>✅ Assemble dog first aid kit</li>
            <li>✅ Learn your dog's breed-specific risks</li>
            <li>✅ Know normal vs. emergency symptoms</li>
            <li>✅ Bookmark this guide</li>
          </ul>
        </div>

        <p className="text-muted-foreground mt-6 italic">
          Remember: Emergency vets would rather see your dog and find nothing serious than have you wait and miss a critical window for treatment.
        </p>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={8} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Pet Emergency Guide Malaysia", description: "Comprehensive guide covering all pet emergencies" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "#1 killer in Malaysia's tropical climate" },
        { to: "/blog/pet-choking-emergency-malaysia", title: "Pet Choking First Aid", description: "Heimlich maneuver for dogs - step by step" },
        { to: "/blog/pet-accident-emergency-malaysia", title: "Pet Accident Emergency Protocol", description: "Road accidents, dog fights, trauma first aid" },
      ]} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Wind, Droplets, Flame, AlertTriangle, CheckCircle2, XCircle, ThermometerSun, Pill, Bone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

interface FirstAidStep {
  step: number;
  title: string;
  instructions: string[];
}

const StepByStepGuide = ({ title, icon: Icon, steps, notes }: { title: string; icon: React.ElementType; steps: FirstAidStep[]; notes?: string[] }) => (
  <div className="bg-card border border-border p-6 rounded-xl mb-6">
    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      {title}
    </h3>
    
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.step} className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            {step.step}
          </div>
          <div>
            <h4 className="font-semibold mb-1">{step.title}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {step.instructions.map((instruction, i) => (
                <li key={i}>• {instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {notes && (
      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="font-semibold text-sm mb-2 text-destructive">Important Notes:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {notes.map((note, i) => (
            <li key={i}>⚠️ {note}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const FirstAidGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Pet Emergency First Aid Guide for Malaysian Pet Owners",
    "description": "Learn essential pet emergency first aid for Malaysian owners. CPR, bleeding control, poisoning, heatstroke treatment. Step-by-step guide.",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=630&fit=crop",
    "step": [
      { "@type": "HowToStep", "name": "Check for consciousness", "text": "Call pet's name loudly, tap paws firmly" },
      { "@type": "HowToStep", "name": "Open airway", "text": "Extend head and neck straight, open mouth and check for obstructions" },
      { "@type": "HowToStep", "name": "Check for breathing", "text": "Look for chest rise and fall, feel for breath near nose" },
      { "@type": "HowToStep", "name": "Begin rescue breaths if needed", "text": "Close mouth, seal your mouth over nose, blow until chest rises" },
      { "@type": "HowToStep", "name": "Begin chest compressions if no heartbeat", "text": "30 compressions, then 2 rescue breaths" }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I give my pet human pain medication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO. Never give human medications (Panadol, aspirin, ibuprofen) to pets. These are highly toxic and can cause kidney failure, liver damage, or death."
        }
      },
      {
        "@type": "Question",
        "name": "Should I induce vomiting if my pet ate something poisonous?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NEVER induce vomiting unless a vet instructs. Many poisons cause more damage coming back up. Caustic substances and petroleum products should NOT be vomited."
        }
      }
    ]
  };

  const tocItems = [
    { id: "first-aid-principle", title: "Critical First Aid Principle" },
    { id: "pet-cpr", title: "Pet CPR: Cardiopulmonary Resuscitation" },
    { id: "bleeding-control", title: "Bleeding Control" },
    { id: "choking", title: "Choking: Heimlich Maneuver" },
    { id: "heatstroke", title: "Heatstroke Treatment" },
    { id: "poisoning", title: "Poisoning Response" },
    { id: "seizures", title: "Seizure Management" },
    { id: "fractures", title: "Fracture Care" },
    { id: "first-aid-kit", title: "Pet First Aid Kit" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const cprSteps: FirstAidStep[] = [
    { step: 1, title: "Check for Consciousness", instructions: ["Call pet's name loudly", "Tap paws firmly", "If no response, begin CPR immediately"] },
    { step: 2, title: "Open Airway", instructions: ["Extend head and neck straight", "Open mouth and check for obstructions", "Pull tongue forward to open airway"] },
    { step: 3, title: "Check for Breathing", instructions: ["Look for chest rise and fall", "Feel for breath near nose", "If not breathing, begin rescue breaths"] },
    { step: 4, title: "Rescue Breaths", instructions: ["For dogs: Close mouth, seal your mouth over nose, blow until chest rises", "For cats/small dogs: Seal mouth over nose AND mouth, gentle breaths", "Give 2 breaths, watch for chest to rise"] },
    { step: 5, title: "Check for Heartbeat", instructions: ["Feel left side of chest behind front leg", "If no heartbeat, begin chest compressions"] },
    { step: 6, title: "Chest Compressions", instructions: ["Large dogs: Place hands on widest part of chest", "Small dogs/cats: Use one hand or two fingers", "Compress 1/3 to 1/2 chest depth", "Rate: 100-120 compressions per minute"] },
    { step: 7, title: "Continue CPR Cycles", instructions: ["30 compressions : 2 breaths ratio", "Check for heartbeat/breathing every 2 minutes", "Continue until pet breathes on own OR reach emergency vet"] },
    { step: 8, title: "Transport Immediately", instructions: ["Even if CPR works, rush to emergency vet", "Have someone else drive while you continue CPR", "Call vet en route"] }
  ];

  const bleedingSteps: FirstAidStep[] = [
    { step: 1, title: "Apply Direct Pressure", instructions: ["Use clean towel, gauze, or cloth", "Press FIRMLY directly on wound", "Maintain pressure for 5-10 minutes minimum", "Don't peek—peeking restarts bleeding"] },
    { step: 2, title: "Apply Pressure Bandage", instructions: ["If blood soaks through, add MORE layers (don't remove)", "Wrap firmly with bandage or torn fabric", "Not so tight it cuts off circulation"] },
    { step: 3, title: "Elevate if Possible", instructions: ["Elevate wounded area above heart level", "Only if no suspected fracture", "Reduces blood flow to area"] },
    { step: 4, title: "Pressure Points (if direct pressure fails)", instructions: ["For leg wounds: Apply pressure to femoral artery (inside thigh)", "For front leg: Brachial artery (inside upper front leg)", "Press firmly between wound and heart"] },
    { step: 5, title: "Transport to Emergency Vet", instructions: ["Maintain pressure during transport", "Have someone else drive", "Call ahead to alert emergency vet"] }
  ];

  const chokeSteps: FirstAidStep[] = [
    { step: 1, title: "Check Mouth", instructions: ["Open mouth wide", "Look for visible object", "If visible and reachable, carefully remove with fingers", "DON'T push object deeper"] },
    { step: 2, title: "Back Blows (for small dogs)", instructions: ["Hold dog with head down", "Strike firmly between shoulder blades 5 times", "Check mouth for dislodged object"] },
    { step: 3, title: "Heimlich (for medium/large dogs)", instructions: ["Stand behind dog", "Place fist below ribcage (soft part of belly)", "Thrust inward and upward firmly 5 times", "Check mouth"] },
    { step: 4, title: "Repeat", instructions: ["Alternate back blows and Heimlich", "Continue until object dislodges OR you reach vet"] }
  ];

  const heatstrokeSteps: FirstAidStep[] = [
    { step: 1, title: "Move to Cool Area Immediately", instructions: ["Get out of sun/hot environment", "Move to air-conditioned space if possible"] },
    { step: 2, title: "Begin Cooling IMMEDIATELY", instructions: ["Wet pet with cool (NOT cold) water", "Use hose, wet towels, spray bottle", "Focus on belly, groin, armpits, paws", "DON'T use ice or ice-cold water—causes blood vessels to constrict"] },
    { step: 3, title: "Increase Airflow", instructions: ["Use fan directly on wet pet", "Air conditioning if available", "Open windows for airflow"] },
    { step: 4, title: "Offer Small Amounts of Cool Water", instructions: ["If conscious and able to drink", "Don't force water if unconscious (can cause choking)"] },
    { step: 5, title: "Check Temperature Every 5 Minutes", instructions: ["Stop cooling when temperature reaches 39.5°C (103°F)", "Over-cooling is dangerous too"] },
    { step: 6, title: "Rush to Emergency Vet", instructions: ["Even if pet seems better", "Heatstroke causes organ damage that develops hours later", "Call ahead so they can prepare IV fluids"] }
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Emergency First Aid Guide Malaysia | Life-Saving Techniques 2025"
      metaDescription="Learn essential pet emergency first aid for Malaysian owners. CPR, bleeding control, poisoning, heatstroke treatment. Step-by-step guide with photos. Save your pet's life."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-emergency-first-aid-guide-malaysia`}
      language={language}
      category="First Aid"
      categoryColor="primary"
      title="Pet Emergency First Aid Guide for Malaysian Pet Owners"
      date="January 1, 2025"
      readTime="12 min read"
      reviewedBy="Reviewed by Licensed Emergency Veterinarians"
      heroImage="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=600&fit=crop"
      heroImageAlt="Pet first aid kit with bandages and medical supplies"
      heroImageCaption="Learn life-saving first aid techniques every pet owner should know"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="First Aid Is Not Veterinary Care"
        text="First aid STABILIZES pets before vet care—it doesn't replace professional treatment. Always rush to emergency vet even if first aid seems to work."
        buttonText="Find 24/7 Vet Now"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "First aid STABILIZES pets before vet care—it doesn't replace professional treatment",
        "Learn pet CPR, bleeding control, and heatstroke response",
        "NEVER give human medications to pets—most are toxic",
        "Have a pet first aid kit ready BEFORE emergencies",
        "First aid buys time to reach emergency vet—use it to get there faster"
      ]} />

      <TableOfContents items={tocItems} />

      {/* Critical Principle */}
      <section id="first-aid-principle" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Critical First Aid Principle: First Aid ≠ Veterinary Care
        </h2>
        
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <p className="text-muted-foreground mb-4">
            <strong>IMPORTANT:</strong> First aid is emergency stabilization to keep your pet alive until you reach a veterinarian. It is NOT a substitute for professional veterinary care.
          </p>
          <p className="text-muted-foreground">
            Even if first aid appears to "cure" your pet (e.g., they start breathing again), you MUST still rush to emergency vet. Internal injuries, toxins, and other life-threatening conditions require professional diagnosis and treatment.
          </p>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="font-semibold text-center">
            Golden Rule: Administer first aid WHILE TRAVELING to emergency vet, not instead of going.
          </p>
        </div>
      </section>

      {/* Pet CPR Section */}
      <section id="pet-cpr" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          Pet CPR: Cardiopulmonary Resuscitation
        </h2>

        <p className="text-muted-foreground mb-4">
          CPR can restart a stopped heart and restore breathing. Learn this technique before you need it.
        </p>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">WHEN TO PERFORM PET CPR:</h3>
          <ul className="text-sm space-y-1">
            <li>• No heartbeat (check by feeling left side of chest behind elbow)</li>
            <li>• Not breathing (no chest movement, no air from nose)</li>
            <li>• Unconscious and unresponsive</li>
          </ul>
        </div>

        <StepByStepGuide 
          title="Step-by-Step Pet CPR" 
          icon={Heart} 
          steps={cprSteps}
          notes={[
            "CPR success rates: If started within 3 minutes: 10-15% survival. After 10 minutes: <5%",
            "DON'T GIVE UP—continue CPR even if pet seems unresponsive"
          ]}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">For Large Dogs (over 15 kg):</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Lay dog on right side on flat surface</li>
              <li>• Place hands on widest part of chest</li>
              <li>• Compress chest 1/3 to 1/2 depth</li>
              <li>• 30 compressions, then 2 rescue breaths</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">For Small Dogs & Cats (under 15 kg):</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Can use one-handed compression</li>
              <li>• For very small pets, use two fingers</li>
              <li>• Compress 1/3 to 1/2 chest depth</li>
              <li>• Same ratio: 30 compressions, 2 breaths</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bleeding Control */}
      <section id="bleeding-control" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="h-6 w-6 text-destructive" />
          Bleeding Control: Stopping Severe Bleeding
        </h2>

        <p className="text-muted-foreground mb-4">
          Uncontrolled bleeding can be fatal within minutes. Here's how to stop it:
        </p>

        <StepByStepGuide 
          title="Severe Bleeding Control" 
          icon={Droplets} 
          steps={bleedingSteps}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              NEVER:
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Apply tourniquets (unless actively bleeding to death)</li>
              <li>• Remove bandages to "check" wound</li>
              <li>• Give pain medication</li>
              <li>• Clean wound if bleeding heavily—just apply pressure</li>
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">For Minor Bleeding:</h4>
            <ul className="text-sm space-y-1">
              <li>• Clean with saline or clean water</li>
              <li>• Apply antibiotic ointment</li>
              <li>• Cover with clean bandage</li>
              <li>• Still see vet within 24 hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Choking */}
      <section id="choking" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wind className="h-6 w-6 text-primary" />
          Choking: Heimlich Maneuver for Pets
        </h2>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">SIGNS OF CHOKING:</h3>
          <ul className="text-sm space-y-1">
            <li>• Difficulty breathing, gasping</li>
            <li>• Pawing at mouth</li>
            <li>• Panicked behavior</li>
            <li>• Blue tongue/gums</li>
            <li>• Unconsciousness</li>
          </ul>
        </div>

        <StepByStepGuide 
          title="Heimlich Maneuver for Dogs" 
          icon={Wind} 
          steps={chokeSteps}
          notes={[
            "For cats: Hold with back against your chest, thrust inward and upward gently",
            "Even if successful, SEE VET IMMEDIATELY—choking can cause throat damage"
          ]}
        />
      </section>

      {/* Heatstroke */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ThermometerSun className="h-6 w-6 text-orange-500" />
          Heatstroke: Critical Emergency in Malaysia
        </h2>

        <p className="text-muted-foreground mb-4">
          Malaysia's tropical climate makes heatstroke one of the most common pet emergencies. Immediate cooling can save your pet's life.
        </p>

        <div className="bg-orange-500/10 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">SIGNS OF HEATSTROKE:</h3>
          <ul className="text-sm space-y-1">
            <li>• Heavy panting, drooling</li>
            <li>• Red or purple gums</li>
            <li>• Vomiting</li>
            <li>• Weakness, collapse</li>
            <li>• Seizures</li>
            <li>• Body temperature over 40°C (104°F)</li>
          </ul>
        </div>

        <StepByStepGuide 
          title="Heatstroke First Aid" 
          icon={ThermometerSun} 
          steps={heatstrokeSteps}
        />

        <div className="bg-muted/50 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">PREVENTION:</h4>
          <ul className="text-sm space-y-1">
            <li>• Never leave pets in cars (even with windows cracked)</li>
            <li>• Avoid midday walks in hot weather</li>
            <li>• Provide shade and water always</li>
            <li>• Flat-faced breeds (Bulldogs, Pugs, Persian cats) are extra sensitive</li>
          </ul>
        </div>
      </section>

      {/* Poisoning */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Pill className="h-6 w-6 text-destructive" />
          Poisoning: Immediate Response
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-semibold mb-4">IF YOU WITNESS PET INGESTING POISON:</h3>
          <ol className="space-y-3">
            <li><strong>1. Identify Poison</strong> - Save packaging/container, note time and amount consumed</li>
            <li><strong>2. Call Emergency Vet IMMEDIATELY</strong> - Describe exactly what was ingested, follow their instructions</li>
            <li><strong>3. DO NOT Induce Vomiting Unless Instructed</strong> - Many poisons cause more damage coming back up</li>
            <li><strong>4. Bring Poison Container to Vet</strong> - Helps identify antidote</li>
          </ol>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h4 className="font-semibold mb-2">COMMON POISONS IN MALAYSIA:</h4>
          <ul className="text-sm grid grid-cols-2 gap-2">
            <li>• Rat poison (anticoagulant)</li>
            <li>• Toad toxins (cane toads)</li>
            <li>• Chocolate (theobromine)</li>
            <li>• Xylitol (sugar-free gum)</li>
            <li>• Human medications</li>
            <li>• Sago palm, oleander</li>
          </ul>
        </div>

        <p className="text-muted-foreground">
          For a complete list of toxic substances, see our <InternalLink to="/blog/common-pet-poisons-malaysia">Common Pet Poisons in Malaysia</InternalLink> guide.
        </p>
      </section>

      {/* Seizures */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Seizures: Keeping Pet Safe</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              DURING SEIZURE:
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Keep calm—seizures look terrifying but pet is unconscious</li>
              <li>• Clear area of furniture, sharp objects</li>
              <li>• Gently cushion head if thrashing</li>
              <li>• Time the seizure exactly</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              DON'T:
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Put fingers in mouth (you'll be bitten)</li>
              <li>• Try to restrain pet</li>
              <li>• Move pet unless in danger</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">EMERGENCY: Seek immediate vet care if:</h4>
          <ul className="text-sm space-y-1">
            <li>• Seizure lasts over 3 minutes (can cause brain damage)</li>
            <li>• Multiple seizures in a row</li>
            <li>• First-time seizure ever</li>
          </ul>
        </div>
      </section>

      {/* Fractures */}
      <section id="fractures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Bone className="h-6 w-6 text-muted-foreground" />
          Fractures: Immobilizing Broken Bones
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">SIGNS OF FRACTURE:</h4>
            <ul className="text-sm space-y-1">
              <li>• Limping, won't use leg</li>
              <li>• Swelling</li>
              <li>• Obvious deformity</li>
              <li>• Pain when touched</li>
              <li>• Bone protruding (open fracture)</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">FIRST AID:</h4>
            <ul className="text-sm space-y-1">
              <li>• Keep pet still—movement worsens fractures</li>
              <li>• DON'T try to set bone</li>
              <li>• Support limb in current position</li>
              <li>• Cover open fractures with clean moist cloth</li>
              <li>• Transport carefully on flat surface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* First Aid Kit */}
      <section id="first-aid-kit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Pet First Aid Kit Essentials</h2>

        <p className="text-muted-foreground mb-4">
          Having a pet first aid kit ready BEFORE emergencies happen can save your pet's life.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-semibold mb-4">RECOMMENDED KIT CONTENTS:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Bandaging Supplies:</h4>
              <ul className="space-y-1">
                <li>• Sterile gauze pads (various sizes)</li>
                <li>• Self-adhesive bandage tape</li>
                <li>• Elastic bandages</li>
                <li>• Medical tape</li>
                <li>• Cotton balls</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cleaning Supplies:</h4>
              <ul className="space-y-1">
                <li>• Saline solution (for wounds and eyes)</li>
                <li>• Antiseptic wipes</li>
                <li>• Hydrogen peroxide 3% (for inducing vomiting ONLY if vet instructs)</li>
                <li>• Antibiotic ointment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Tools:</h4>
              <ul className="space-y-1">
                <li>• Digital thermometer (rectal)</li>
                <li>• Blunt-end scissors</li>
                <li>• Tweezers</li>
                <li>• Muzzle (or strips of fabric)</li>
                <li>• Flashlight</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Emergency Items:</h4>
              <ul className="space-y-1">
                <li>• Emergency vet contact numbers</li>
                <li>• Pet's medical records copy</li>
                <li>• Blanket/towel</li>
                <li>• Plastic syringe (for giving fluids)</li>
                <li>• Carrier or transport board</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>Can I give my pet human pain medication?</AccordionTrigger>
            <AccordionContent>
              <strong>NO.</strong> Never give human medications (Panadol, aspirin, ibuprofen) to pets. These are highly toxic and can cause kidney failure, liver damage, or death.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Should I induce vomiting if my pet ate something poisonous?</AccordionTrigger>
            <AccordionContent>
              NEVER induce vomiting unless a vet instructs. Many poisons cause more damage coming back up. Caustic substances (cleaners, acids) and petroleum products should NOT be vomited.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>How long should I continue CPR?</AccordionTrigger>
            <AccordionContent>
              Continue CPR until your pet starts breathing on their own OR you reach the emergency vet. Don't give up—continue even if your pet seems unresponsive. Have someone else drive while you continue CPR.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Can I use ice water to cool a pet with heatstroke?</AccordionTrigger>
            <AccordionContent>
              NO. Ice or ice-cold water causes blood vessels to constrict, trapping heat inside the body. Use cool (not cold) water and focus on belly, groin, armpits, and paws.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>What if I'm alone during an emergency?</AccordionTrigger>
            <AccordionContent>
              Focus on stabilizing your pet, then transport immediately. If possible, call the emergency vet on speakerphone while driving. Many emergencies can wait the 10-15 minutes to reach the vet—the key is getting there quickly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: First Aid Buys Time</h2>
        
        <p className="text-muted-foreground mb-4">
          In the critical minutes before reaching an emergency veterinary hospital, proper first aid can mean the difference between life and death for your pet. With Malaysia's limited 24-hour emergency vets and often lengthy travel times, knowing basic pet first aid is not just helpful—it's essential.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Remember:</h3>
          <ul className="space-y-2">
            <li>✓ First aid stabilizes—it doesn't cure. ALWAYS get to emergency vet</li>
            <li>✓ Practice techniques BEFORE emergencies happen</li>
            <li>✓ Keep first aid kit ready and accessible</li>
            <li>✓ Save emergency vet contacts in your phone NOW</li>
          </ul>
        </div>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={3} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Guide to Pet Emergency Treatment in Malaysia", description: "Comprehensive pillar guide covering all aspects of pet emergencies" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Critical cooling techniques for Malaysia's climate" },
        { to: "/blog/pet-choking-emergency-malaysia", title: "Pet Choking First Aid", description: "Step-by-step Heimlich maneuver for pets" },
        { to: "/blog/pet-poisoning-treatment-malaysia", title: "Poisoning Treatment Guide", description: "What vets do for poisoned pets - vet protocols" },
        { to: "/blog/pet-emergency-transport-malaysia", title: "Emergency Transport Guide", description: "Safely move injured pets to the vet" },
      ]} />
    </ArticleLayout>
  );
};

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import { GuideSection, Subsection } from '@/components/guide/GuideSection';
import { WarningBox } from '@/components/guide/WarningBox';
import { SymptomTable, ToxinTable, VetDirectoryTable, Checklist } from '@/components/guide/SymptomTable';
import { GuideEmailCapture } from '@/components/guide/GuideEmailCapture';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Printer, BookOpen, ChevronRight } from 'lucide-react';

export default function EmergencyGuidePage() {
  const { language } = useLanguage();
  const [hasAccess, setHasAccess] = useState(false);

  // Check if user already has access (from localStorage)
  useEffect(() => {
    const accessGranted = localStorage.getItem('guide_access_granted');
    if (accessGranted === 'true') {
      setHasAccess(true);
    }
  }, []);

  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  const tableOfContents = [
    { id: 'first-aid', label: 'Section 1: Emergency First Aid' },
    { id: 'symptoms', label: 'Section 2: Emergency Symptoms Checklist' },
    { id: 'poison', label: 'Section 3: Poison Control Reference' },
    { id: 'vet-directory', label: 'Section 4: 24-Hour Vet Directory' },
    { id: 'preparedness', label: 'Section 5: Emergency Preparedness' },
  ];

  const handlePrint = () => {
    window.print();
  };

  // Show email capture gate if user doesn't have access
  if (!hasAccess) {
    return (
      <>
        <SEOHead
          title="Free Pet Emergency Guide | 47-Page Resource | Pet Care Malaysia"
          description="Download our comprehensive 47-page pet emergency guide. Includes step-by-step first aid, poison control reference, and 24-hour vet directory for all Malaysian states."
          path="/emergency-guide"
          language={language}
        />
        
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <GuideEmailCapture onSuccess={handleAccessGranted} />
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Free Pet Emergency Guide | 47-Page Resource | Pet Care Malaysia"
        description="Download our comprehensive 47-page pet emergency guide. Includes step-by-step first aid, poison control reference, and 24-hour vet directory for all Malaysian states."
        path="/emergency-guide"
        language={language}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12 md:py-16">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  FREE RESOURCE
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Pet Emergency Guide
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  The Complete 47-Page Resource for Malaysian Pet Owners
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={handlePrint} size="lg" className="gap-2">
                    <Printer className="w-5 h-5" />
                    Print This Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-8 border-b border-border bg-card print:hidden">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-xl font-bold text-foreground mb-4">Quick Navigation</h2>
                <div className="grid gap-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section className="py-8 bg-muted/50">
            <div className="container">
              <div className="max-w-3xl mx-auto">
                <WarningBox type="critical" title="MEDICAL DISCLAIMER & IMPORTANT NOTICE">
                  <p className="mb-2">
                    This guide is intended for informational and educational purposes only. It is designed to assist pet owners in recognizing potential emergencies and providing temporary first aid until professional veterinary care can be obtained.
                  </p>
                  <p className="font-bold">
                    THIS GUIDE IS NOT A SUBSTITUTE FOR PROFESSIONAL VETERINARY CARE. If your pet is injured, sick, or you suspect they have ingested a toxin, contact a veterinarian immediately.
                  </p>
                </WarningBox>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="container py-8">
            <div className="max-w-3xl mx-auto">
              
              {/* SECTION 1: EMERGENCY FIRST AID */}
              <GuideSection id="first-aid" title="SECTION 1: EMERGENCY FIRST AID">
                <p className="text-muted-foreground mb-6">
                  The following procedures are designed to stabilize your pet until you can reach a veterinarian. They do not replace professional treatment.
                </p>

                <WarningBox type="danger" title="CRITICAL">
                  IF YOUR PET IS NOT BREATHING OR HAS NO PULSE, START CPR IMMEDIATELY WHILE SOMEONE CALLS THE VET.
                </WarningBox>

                <Subsection title="CPR FOR DOGS">
                  <p className="text-muted-foreground mb-4">
                    <strong>WHEN TO USE:</strong> Only when the dog is unconscious, unresponsive, not breathing, and has no pulse.
                  </p>
                  
                  <WarningBox type="warning" title="WARNING">
                    DO NOT perform CPR on a conscious dog. You could cause serious internal injury or be bitten.
                  </WarningBox>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 1: Check Responsiveness</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Call the dog's name.</li>
                        <li>Touch or gently shake the dog.</li>
                        <li>Check for breathing (watch chest for movement).</li>
                        <li>Check for a pulse (femoral artery on the inner thigh).</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 2: Clear Airway</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Open mouth and pull tongue forward.</li>
                        <li>Look for obstructions. If visible, remove it. Do not dig blindly.</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 3: Compressions</h5>
                      <ul className="text-muted-foreground space-y-2">
                        <li><strong>Small Dogs (&lt;10kg):</strong> Lay on right side. Place hands around the chest behind the elbows. Squeeze chest.</li>
                        <li><strong>Medium/Large Dogs:</strong> Lay on right side. Place hands on the widest part of the chest wall.</li>
                        <li><strong>Barrel-chested Dogs (Bulldogs):</strong> Place dog on back, compress sternum (breastbone).</li>
                      </ul>
                      <p className="mt-3 text-sm text-foreground">
                        <strong>Rate:</strong> 100-120 compressions per minute (Tempo of "Stayin' Alive")
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 4: Rescue Breaths</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Close the dog's mouth tightly.</li>
                        <li>Place your mouth over the dog's nose.</li>
                        <li>Give 2 breaths after every 30 compressions.</li>
                        <li>Watch for chest rise.</li>
                      </ol>
                      <p className="mt-3 font-medium text-foreground">
                        Cycle: 30 Compressions : 2 Breaths. Check pulse every 2 minutes.
                      </p>
                    </div>
                  </div>
                </Subsection>

                <Subsection title="CPR FOR CATS">
                  <p className="text-muted-foreground mb-4">
                    <strong>WHEN TO USE:</strong> Only when the cat is unconscious, unresponsive, not breathing, and has no pulse.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 1: Check Vitals</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Check for breathing (place hand in front of nose/mouth).</li>
                        <li>Check for pulse (femoral artery inside rear leg).</li>
                        <li>Check gum color (blue or grey indicates lack of oxygen).</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 2: Compressions (The "Handshake" Technique)</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Lay cat on its right side on a flat surface.</li>
                        <li>Cup the chest with one hand: Thumb on one side of the chest, fingers on the other side, just behind the elbows (over the heart).</li>
                        <li>Squeeze the chest firmly but not violently. Compress 1/3 to 1/2 depth of the chest.</li>
                      </ol>
                      <p className="mt-3 text-sm text-foreground">
                        <strong>Rate:</strong> 100-120 compressions per minute.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Step 3: Rescue Breaths</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Extend the neck gently to align airway.</li>
                        <li>Close the mouth.</li>
                        <li>Cover both the nose and mouth with your mouth (cat faces are small enough).</li>
                        <li>Blow gently until you see the chest rise. (Do not blow too hard; cat lungs are small).</li>
                      </ol>
                      <p className="mt-3 font-medium text-foreground">
                        Cycle: 30 Compressions : 2 Breaths. Continue until you reach the vet or pulse returns.
                      </p>
                    </div>
                  </div>
                </Subsection>

                <Subsection title="CHOKING MANAGEMENT">
                  <p className="text-muted-foreground mb-4">
                    <strong>SIGNS:</strong> Pawing at mouth, blue tongue, panic, unconsciousness, loud gasping.
                  </p>

                  <WarningBox type="caution" title="CAUTION">
                    Be careful! Choking animals will bite in panic.
                  </WarningBox>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">1. The Sweep (Only if visible)</h5>
                      <p className="text-muted-foreground">
                        Open mouth. If object is clearly visible and loose, use pliers or fingers to remove it. DO NOT push it further down.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">2. The Wheelbarrow (Large Dogs)</h5>
                      <p className="text-muted-foreground">
                        Lift the dog's hind legs so the head is down. Gravity may help dislodge the object.
                      </p>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">3. Heimlich Maneuver</h5>
                      <div className="text-muted-foreground space-y-3">
                        <div>
                          <p className="font-medium text-foreground">For Small Dogs & Cats:</p>
                          <ol className="list-decimal list-inside">
                            <li>Hold the animal against your stomach.</li>
                            <li>Place fist just below the rib cage in the soft part of the belly.</li>
                            <li>Thrust inward and upward 3-5 times.</li>
                          </ol>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">For Large Dogs:</p>
                          <ol className="list-decimal list-inside">
                            <li>Stand behind the dog. Wrap arms around the waist.</li>
                            <li>Make a fist with one hand, cover with the other.</li>
                            <li>Place hands in the soft spot just below the rib cage.</li>
                            <li>Thrust firmly up and forward (towards the head) 3-5 times.</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </Subsection>

                <Subsection title="SEVERE BLEEDING">
                  <p className="text-muted-foreground mb-4">
                    <strong>Goal:</strong> Stop blood loss immediately and prevent shock.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Direct Pressure</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li>Use a clean cloth, towel, or gauze.</li>
                        <li>Press firmly directly on the wound.</li>
                        <li>DO NOT LIFT the cloth to check if bleeding stopped. This breaks clots.</li>
                        <li>If blood soaks through, add more layers on top.</li>
                        <li>Maintain pressure for at least 5-10 minutes continuously.</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Elevation</h5>
                      <p className="text-muted-foreground">
                        If the injury is on a paw or leg, elevate the limb above the level of the heart while applying pressure.
                      </p>
                    </div>

                    <WarningBox type="critical" title="Tourniquet (LAST RESORT)">
                      <p className="mb-2">
                        Use a tourniquet ONLY for life-threatening bleeding on a limb or tail that cannot be stopped by pressure. Improper use leads to amputation.
                      </p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Tie a strip of cloth 2 inches above the wound (between wound and heart).</li>
                        <li>Tighten until bleeding slows significantly.</li>
                        <li>Record the time applied.</li>
                        <li>Loosen slightly every 15-20 minutes for a few seconds to allow blood flow.</li>
                      </ol>
                    </WarningBox>
                  </div>
                </Subsection>

                <Subsection title="SNAKE / COBRA BITES">
                  <p className="text-muted-foreground mb-4">
                    Common in Malaysia (Cobras, Vipers, Pythons). Time is critical.
                  </p>

                  <WarningBox type="danger" title="DO NOT WAIT FOR SYMPTOMS">
                    GO TO VET IMMEDIATELY.
                  </WarningBox>

                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/30 border-l-4 border-green-500 rounded-r-lg">
                      <h5 className="font-bold text-green-700 dark:text-green-400 mb-2">What TO Do:</h5>
                      <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                        <li><strong>Stay Calm:</strong> Keep the pet quiet. Movement spreads venom faster.</li>
                        <li><strong>Carry the Pet:</strong> Do not let them walk.</li>
                        <li><strong>Identify the Snake:</strong> Take a photo from a safe distance if possible. Do not try to catch it.</li>
                        <li><strong>Call Ahead:</strong> Tell the vet "Snake Bite" so they prepare antivenom.</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-lg">
                      <h5 className="font-bold text-red-700 dark:text-red-400 mb-2">What NOT To Do:</h5>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>NO tourniquets (concentrates venom causing necrosis).</li>
                        <li>NO cutting the wound or sucking out venom.</li>
                        <li>NO ice on the wound.</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-bold text-foreground mb-2">Symptoms of Cobra Bite:</h5>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Immediate pain and swelling.</li>
                        <li>Salivation/Drooling.</li>
                        <li>Dilated pupils.</li>
                        <li>Paralysis / Collapse / Respiratory failure.</li>
                      </ul>
                    </div>
                  </div>
                </Subsection>

                <Subsection title="HEATSTROKE">
                  <p className="text-muted-foreground mb-4">
                    Common in Malaysia's tropical climate. Occurs when body temp exceeds 40°C.
                  </p>

                  <SymptomTable
                    title="Symptoms:"
                    items={[
                      { symptom: 'Heavy panting', description: 'Excessive and rapid breathing' },
                      { symptom: 'Drooling', description: 'Excessive salivation' },
                      { symptom: 'Bright red or purple gums', description: 'Sign of overheating' },
                      { symptom: 'Vomiting', description: 'May contain blood' },
                      { symptom: 'Collapse', description: 'Sudden weakness or falling' },
                      { symptom: 'Seizures', description: 'Uncontrolled shaking' },
                    ]}
                  />

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-bold text-foreground mb-2">Treatment:</h5>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                      <li><strong>Move Immediately:</strong> Get out of sun/heat into air-conditioning or shade.</li>
                      <li><strong>Cool Water:</strong> Pour cool (NOT COLD/ICE) water over the body.</li>
                      <li><strong>Wet Towels:</strong> Place wet towels on the head, neck, armpits, and groin.</li>
                      <li><strong>Airflow:</strong> Use a fan or car AC.</li>
                      <li><strong>Hydration:</strong> Offer small amounts of water if conscious. Do not force.</li>
                      <li><strong>Stop Cooling:</strong> Stop when temperature reaches 39.5°C to prevent hypothermia.</li>
                    </ol>
                  </div>

                  <WarningBox type="warning" title="WARNING">
                    Do not use ICE WATER. It constricts blood vessels and traps heat inside the body.
                  </WarningBox>
                </Subsection>

                <Subsection title="POISONING RESPONSE">
                  <div className="p-4 bg-muted/50 rounded-lg mb-4">
                    <h5 className="font-bold text-foreground mb-2">Steps:</h5>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-1">
                      <li><strong>Identify the Toxin:</strong> Check packaging, plant remains, or food wrappers.</li>
                      <li><strong>Remove Source:</strong> Get pet away from the toxin.</li>
                      <li><strong>Do NOT Induce Vomiting</strong> unless instructed by a professional. Some poisons (acids/alkalis) burn coming up.</li>
                      <li><strong>Collect Sample:</strong> Bring the vomit or stool sample if applicable.</li>
                      <li><strong>Call Vet:</strong> Have the product label ready.</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-bold text-foreground mb-2">Skin Contamination (Paint/Chemicals):</h5>
                    <p className="text-muted-foreground">
                      Wash with mild dish soap (degreaser) and copious water. Do not use turpentine or solvents.
                    </p>
                  </div>
                </Subsection>

                <Subsection title="BLOAT (GDV - Gastric Dilatation-Volvulus)">
                  <p className="text-muted-foreground mb-4">
                    A life-threatening condition where the stomach twists. Common in large, deep-chested dogs.
                  </p>

                  <WarningBox type="critical" title="THIS IS A FATAL EMERGENCY">
                    SURGERY IS REQUIRED IMMEDIATELY.
                  </WarningBox>

                  <SymptomTable
                    title="Signs:"
                    items={[
                      { symptom: 'Distended, hard, swollen belly', description: 'Stomach is visibly bloated and firm' },
                      { symptom: 'Non-productive retching', description: 'Trying to vomit but nothing comes out' },
                      { symptom: 'Restlessness, pacing, panting', description: 'Pet cannot get comfortable' },
                      { symptom: 'Pale gums', description: 'Sign of shock' },
                    ]}
                  />

                  <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
                    <p className="font-bold text-destructive">
                      Action: Transport immediately. Decompressing the stomach requires veterinary equipment.
                    </p>
                  </div>
                </Subsection>
              </GuideSection>

              {/* SECTION 2: EMERGENCY SYMPTOMS CHECKLIST */}
              <GuideSection id="symptoms" title="SECTION 2: EMERGENCY SYMPTOMS CHECKLIST">
                <p className="text-muted-foreground mb-6">
                  Use these checklists to communicate efficiently with your vet.
                </p>

                <SymptomTable
                  title="RESPIRATORY EMERGENCIES"
                  items={[
                    { symptom: 'Blue/Grey Gums', description: 'Lack of oxygen. Critical emergency.' },
                    { symptom: 'Choking Sounds', description: 'Airway obstruction.' },
                    { symptom: 'Extended Neck', description: 'Posture used to try and get more air.' },
                    { symptom: 'Abdominal Heaving', description: 'Using stomach muscles to breathe.' },
                    { symptom: 'Foaming at Mouth', description: 'Could be respiratory distress or heatstroke.' },
                  ]}
                />

                <SymptomTable
                  title="NEUROLOGICAL SYMPTOMS"
                  items={[
                    { symptom: 'Seizures', description: 'Shaking, paddling, loss of bladder control.' },
                    { symptom: 'Head Tilt', description: 'Sudden loss of balance, circling.' },
                    { symptom: 'Paralysis', description: 'Inability to move one or more limbs (Tick paralysis/Snake bite).' },
                    { symptom: 'Unconsciousness', description: 'Non-responsive to voice or touch.' },
                    { symptom: 'Dilated Pupils', description: 'Head trauma or toxicity.' },
                  ]}
                />

                <SymptomTable
                  title="GASTROINTESTINAL SYMPTOMS"
                  items={[
                    { symptom: 'Non-productive Vomiting', description: 'Retching without bringing anything up (Bloat warning).' },
                    { symptom: 'Bloody Diarrhea', description: 'Parvovirus, Hemorrhagic Gastroenteritis (HGE).' },
                    { symptom: 'Black/Tarry Stool', description: 'Internal bleeding in upper GI tract.' },
                    { symptom: 'Projectile Vomiting', description: 'Blockage or severe toxin.' },
                    { symptom: 'Swollen Abdomen', description: 'Internal bleeding or Bloat.' },
                  ]}
                />

                <SymptomTable
                  title="PAIN INDICATORS"
                  items={[
                    { symptom: 'Whining/Whimpering', description: 'Vocalization of distress' },
                    { symptom: 'Hiding (especially cats)', description: 'Seeking isolation when in pain' },
                    { symptom: 'Panting while resting', description: 'Sign of discomfort' },
                    { symptom: 'Aggression when touched', description: 'Defensive reaction to pain' },
                    { symptom: 'Arching back', description: 'Abdominal pain indicator' },
                    { symptom: 'Licking one spot excessively', description: 'Localized pain or injury' },
                    { symptom: 'Trembling/Shivering', description: 'Pain or shock response' },
                    { symptom: 'Limping', description: 'Leg or paw injury' },
                  ]}
                />
              </GuideSection>

              {/* SECTION 3: POISON CONTROL */}
              <GuideSection id="poison" title="SECTION 3: POISON CONTROL QUICK REFERENCE">
                <Card className="bg-destructive/10 border-destructive mb-6">
                  <CardContent className="p-4">
                    <p className="font-bold text-destructive text-center">
                      ASPCA POISON CONTROL (USA): +1 (888) 426-4435
                    </p>
                    <p className="text-sm text-center text-muted-foreground mt-1">
                      (International calling rates apply)
                    </p>
                  </CardContent>
                </Card>

                <Subsection title="TOXIC FOODS">
                  <ToxinTable
                    items={[
                      { name: 'Chocolate', component: 'Theobromine', symptoms: 'Vomiting, rapid heart rate, seizures. (Darker chocolate = more toxic)', urgency: 'HIGH' },
                      { name: 'Grapes / Raisins', component: 'Unknown', symptoms: 'Kidney failure (can occur with very small amounts)', urgency: 'CRITICAL' },
                      { name: 'Xylitol (Gum, Candy)', component: 'Sugar substitute', symptoms: 'Hypoglycemia (sugar crash), liver failure, collapse', urgency: 'CRITICAL' },
                      { name: 'Onions / Garlic', component: 'N-propyl disulfide', symptoms: 'Anemia, pale gums, weakness, red urine', urgency: 'MODERATE' },
                      { name: 'Macadamia Nuts', component: 'Unknown', symptoms: 'Weakness, tremors, hyperthermia', urgency: 'MODERATE' },
                      { name: 'Alcohol', component: 'Ethanol', symptoms: 'Coma, respiratory failure, death', urgency: 'HIGH' },
                      { name: 'Avocado', component: 'Persin', symptoms: 'Vomiting, diarrhea (Deadly to birds/rabbits)', urgency: 'LOW (Dogs/Cats)' },
                    ]}
                  />
                </Subsection>

                <Subsection title="COMMON MALAYSIAN PLANTS TO AVOID">
                  <ToxinTable
                    items={[
                      { name: 'Lilies (All True Lilies)', component: 'Common in bouquets', symptoms: 'FATAL TO CATS. Causes kidney failure from pollen, water, or leaves', urgency: 'CRITICAL' },
                      { name: 'Sago Palm', component: 'Ornamental palm', symptoms: 'Liver failure. All parts toxic, especially seeds', urgency: 'CRITICAL' },
                      { name: 'Oleander', component: 'Flowering shrub', symptoms: 'Heart failure. Very toxic', urgency: 'CRITICAL' },
                      { name: 'Dumb Cane (Dieffenbachia)', component: 'Houseplant', symptoms: 'Oral irritation, swelling of airway', urgency: 'HIGH' },
                      { name: 'Aloe Vera', component: 'Succulent', symptoms: 'Vomiting, diarrhea, tremors', urgency: 'MODERATE' },
                    ]}
                  />
                </Subsection>

                <Subsection title="HOUSEHOLD TOXINS">
                  <ToxinTable
                    items={[
                      { name: 'Antifreeze', symptoms: 'Sweet taste attracts dogs. Causes kidney failure', urgency: 'CRITICAL' },
                      { name: 'Rat Poison', symptoms: 'Causes internal bleeding. Symptoms may delay 2-3 days', urgency: 'CRITICAL' },
                      { name: 'Paracetamol (Panadol)', symptoms: 'FATAL TO CATS. Causes liver damage/blood issues in dogs', urgency: 'CRITICAL' },
                      { name: 'Ibuprofen/NSAIDs', symptoms: 'Stomach ulcers, kidney failure', urgency: 'HIGH' },
                    ]}
                  />
                </Subsection>
              </GuideSection>

              {/* SECTION 4: VET DIRECTORY */}
              <GuideSection id="vet-directory" title="SECTION 4: 24-HOUR EMERGENCY VET DIRECTORY">
                <WarningBox type="info" title="Note">
                  Operating hours subject to change. Always call before driving.
                </WarningBox>

                <VetDirectoryTable
                  state="JOHOR"
                  clinics={[
                    { name: 'Southern Veterinary Medical Centre', address: '57, Jln Geroda 2/1, Larkin Jaya, 80350 Johor Bahru', phone: '', notes: '24-Hour Emergency Hospital (New facility, confirm locally)' },
                    { name: 'Klinik Haiwan Vetmedic Petlover', address: 'Taman Impian Emas, Skudai, Johor Bahru', phone: '+60 18-224 9106', notes: 'Open till late (Check hours)' },
                    { name: 'Paws Animal Enterprise (Emergency & Critical Care)', address: 'Johor Bahru', phone: '+60 18-288 2690', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="KEDAH"
                  clinics={[
                    { name: "Klinik Haiwan & Surgeri R'Singam", address: '36, Jalan Teratai Satu, Bandar Aman Jaya, 08000 Sungai Petani', phone: '+60 4-441 8642', notes: '' },
                    { name: 'Animal Centre & Surgery', address: '2504-A Pekan Pumpong, 05250 Alor Setar', phone: '+60 4-733 4394', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="KELANTAN"
                  clinics={[
                    { name: 'Klinik Haiwan Wakaf Bharu', address: 'Lot 1956 B, Jalan Puteri Saadong, Wakaf Bharu, 16250 Tumpat', phone: '+60 11-1148 8051', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="KUALA LUMPUR & SELANGOR (KLANG VALLEY)"
                  clinics={[
                    { name: 'Animal Medical Center (AMC) - Wisma Medivet', address: '8, Jalan Tun Razak, 50400 Kuala Lumpur', phone: '+60 3-4042 6742', notes: '24 HOURS - Call before arrival recommended' },
                    { name: 'St. Angel Animal Medical Centre', address: 'Puchong, Selangor', phone: '+60 16-337 1884', notes: '24 HOURS (Emergency)' },
                    { name: 'Gasing Veterinary Hospital', address: '53 & 55, Jalan 5/58, Gasing Indah, 46000 Petaling Jaya', phone: '+60 3-7782 3553', notes: '24 HOURS (Confirm current policy)' },
                    { name: 'VPAC - Veterinary Putra Animal Centre', address: 'Bandar Baru Bangi / Kajang area', phone: '+60 3-8922 1358', notes: '24 HOURS' },
                    { name: 'J Avenue Veterinary Clinic', address: 'Jalan 1/62D, Bandar Menjalara, 52200 Kuala Lumpur', phone: '+60 3-6257 5727', notes: 'Extended/emergency services (Check hours)' },
                  ]}
                />

                <VetDirectoryTable
                  state="MELAKA"
                  clinics={[
                    { name: 'Malacca Animal Clinic', address: '5076, Jalan Penghulu Abbas, Bukit Baru, 75150 Melaka', phone: '+60 6-282 8682', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="NEGERI SEMBILAN"
                  clinics={[
                    { name: 'Klinik Veterinar Seremban', address: '1800A, Jalan Tok Ungku, 70100 Seremban', phone: '+60 6-631 5457', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="PAHANG"
                  clinics={[
                    { name: 'East Coast Animal Medical Centre', address: 'A615, Ground Floor, Jalan Beserah, 25300 Kuantan', phone: '+60 9-568 7168', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="PENANG"
                  clinics={[
                    { name: 'Windsor Animal Hospital', address: 'C-G-7 Vantage Desiran, Jalan Desiran Tanjung, Tanjung Tokong, 10470 Penang', phone: '+60 4-890 1234', notes: '24 HOURS - Emergency & Critical Care' },
                    { name: "Gill's Veterinary Clinic", address: '10-A Jalan Bagan Jermal, 10250 Penang', phone: '+60 4-226 2517', notes: 'After-Hours Emergency Service (Call first)' },
                  ]}
                />

                <VetDirectoryTable
                  state="PERAK"
                  clinics={[
                    { name: 'Ipoh Garden Animal Clinic', address: 'Ipoh Garden, Ipoh', phone: '', notes: 'Check local listing for emergency' },
                    { name: 'Animal Republic Veterinary Clinic', address: '14, Bercham Bistari 1, Ipoh', phone: '+60 13-528 0028', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="SABAH"
                  clinics={[
                    { name: 'Kinabalu Animal Clinic', address: 'Lot 6, Lorong Durian 3, Kian Yap Industrial Estate, 88450 Kota Kinabalu', phone: '+60 88-385 804', notes: '' },
                    { name: 'Department of Veterinary Services Sabah', address: 'Kota Kinabalu', phone: '+60 88-253 481', notes: '' },
                  ]}
                />

                <VetDirectoryTable
                  state="SARAWAK"
                  clinics={[
                    { name: 'Animal Central Veterinary Clinic', address: '70, Jalan Tabuan, 93100, Kuching', phone: '+60 16-937 7234', notes: 'Veterinarian on-call 10pm-1am (Charges apply)' },
                    { name: 'PM Veterinary Clinic', address: 'MJC, Batu Kawa, Kuching', phone: '+60 11-5641 2988', notes: '' },
                  ]}
                />
              </GuideSection>

              {/* SECTION 5: EMERGENCY PREPAREDNESS */}
              <GuideSection id="preparedness" title="SECTION 5: EMERGENCY PREPAREDNESS">
                <Subsection title="PET FIRST AID KIT CHECKLIST">
                  <Checklist
                    items={[
                      { item: 'Emergency Phone Numbers', description: 'Vet, Poison Control' },
                      { item: 'Medical Records Copy', description: 'Vaccinations' },
                      { item: 'Muzzle', description: 'Injured pets may bite' },
                      { item: 'Gauze Rolls & Pads', description: 'For bandaging/cleaning' },
                      { item: 'Non-stick Tape', description: '' },
                      { item: 'Scissors', description: 'Blunt-nosed' },
                      { item: 'Tweezers', description: 'Tick/stinger removal' },
                      { item: 'Digital Thermometer & Lubricant', description: '' },
                      { item: '3% Hydrogen Peroxide', description: 'To induce vomiting - ONLY if vet directs' },
                      { item: 'Saline Solution', description: 'Eye/Wound wash' },
                      { item: 'Syringe', description: 'Needle-less, for flushing wounds' },
                      { item: 'Flashlight', description: '' },
                      { item: 'Towels/Blanket', description: '' },
                    ]}
                  />
                </Subsection>

                <Subsection title="EMERGENCY CONTACT FORM">
                  <p className="text-muted-foreground mb-4">
                    Fill this out and keep it visible in your home.
                  </p>
                  <Card className="border-2 border-dashed border-primary/30">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h5 className="font-bold text-foreground">My Vet:</h5>
                          <div className="border-b border-muted pb-2">Name: _________________</div>
                          <div className="border-b border-muted pb-2">Phone: _________________</div>
                          <div className="border-b border-muted pb-2">Address: _______________</div>
                        </div>
                        <div className="space-y-4">
                          <h5 className="font-bold text-foreground">Emergency Vet:</h5>
                          <div className="border-b border-muted pb-2">Name: _________________</div>
                          <div className="border-b border-muted pb-2">Phone: _________________</div>
                          <div className="border-b border-muted pb-2">Address: _______________</div>
                        </div>
                      </div>
                      <div className="mt-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border-b border-muted pb-2">Pet Name: ______________</div>
                          <div className="border-b border-muted pb-2">Weight: ________________</div>
                        </div>
                        <div className="border-b border-muted pb-2">Medications: _______________________________</div>
                        <div className="border-b border-muted pb-2">Allergies: _________________________________</div>
                        <div className="border-b border-muted pb-2">Microchip #: ______________________________</div>
                      </div>
                    </CardContent>
                  </Card>
                </Subsection>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
                  <p className="text-lg font-bold text-foreground mb-2">
                    Keep this guide accessible at all times.
                  </p>
                  <p className="text-muted-foreground">
                    © 2026 PetCareMalaysia.com
                  </p>
                </div>
              </GuideSection>

            </div>
          </div>
        </main>
        
        <Footer />
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          body {
            font-size: 12pt;
          }
          h1 {
            font-size: 24pt;
          }
          h2 {
            font-size: 18pt;
            page-break-after: avoid;
          }
          h3 {
            font-size: 14pt;
            page-break-after: avoid;
          }
          section {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}

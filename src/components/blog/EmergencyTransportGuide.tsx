import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Car, Heart, Shield, Phone, CheckCircle2, XCircle, Dog, Cat, Activity } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import emergencyTransportHero from '@/assets/emergency-transport-hero.jpg';

export const EmergencyTransportGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Emergency Pet Transport Malaysia: Safe Transport to Vet Guide",
    "description": "Learn safe emergency pet transport in Malaysia. Handle injured pets, prevent shock, secure in vehicle, minimize stress. Step-by-step guide for dogs & cats.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "step": [
      { "@type": "HowToStep", "text": "Assess if pet is stable enough for transport" },
      { "@type": "HowToStep", "text": "Protect yourself from bites - even gentle pets may bite when in pain" },
      { "@type": "HowToStep", "text": "Handle injured pet carefully using appropriate technique for size" },
      { "@type": "HowToStep", "text": "Secure pet in vehicle safely" },
      { "@type": "HowToStep", "text": "Keep pet warm to prevent shock" },
      { "@type": "HowToStep", "text": "Call ahead to alert emergency vet" }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "My cat is too aggressive to get in a carrier. How do I transport her?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use a thick blanket/towel to wrap her completely (burrito method), including head initially to prevent biting. Once wrapped, expose face and place in carrier or hold securely."
        }
      },
      {
        "@type": "Question",
        "name": "Can I transport my large dog in the front seat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No—front seat has airbag risk and is less stable during braking. Best location: cargo area (SUVs) or back seat floor."
        }
      },
      {
        "@type": "Question",
        "name": "Should I give food or water during transport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NO. Never give food or water when transporting to emergency vet. If surgery needed, requires empty stomach. Unconscious pets can choke."
        }
      }
    ]
  };

  const tocItems = [
    { id: "assessment", title: "Pre-Transport Assessment" },
    { id: "handling", title: "Handling Injured Pets by Size" },
    { id: "spinal", title: "Spinal Injury Precautions" },
    { id: "vehicle", title: "Vehicle Safety" },
    { id: "warmth", title: "Keeping Pet Warm (Shock Prevention)" },
    { id: "what-to-bring", title: "What to Bring" },
    { id: "minimizing-stress", title: "Minimizing Stress" },
    { id: "calling-ahead", title: "Calling Ahead" },
    { id: "driving", title: "Driving Tips" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    {
      to: "/blog/pet-accident-emergency-malaysia",
      title: "Pet Accident Protocol",
      description: "First aid before transport",
      icon: Activity,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-emergency-first-aid-guide-malaysia",
      title: "Pet First Aid Guide",
      description: "Life-saving techniques",
      icon: Heart,
      color: "text-destructive"
    },
    {
      to: "/blog/24-hour-vet-directory-malaysia",
      title: "24-Hour Vet Directory",
      description: "Find emergency vets",
      icon: Phone,
      color: "text-primary"
    },
    {
      to: "/blog/post-emergency-pet-care-malaysia",
      title: "Post-Emergency Care",
      description: "Recovery after treatment",
      icon: Shield,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Emergency Pet Transport Malaysia: Safe Transport to Vet Guide"
      metaDescription="Learn safe emergency pet transport in Malaysia. Handle injured pets, prevent shock, secure in vehicle, minimize stress. Step-by-step guide for dogs & cats."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/emergency-pet-transport-malaysia`}
      language={language}
      category="First Aid"
      categoryColor="primary"
      title="Emergency Pet Transport Guide: How to Safely Get Your Pet to the Vet"
      date="January 1, 2025"
      readTime="10 min read"
      reviewedBy="Reviewed by Emergency Veterinary Specialists"
      heroImage={emergencyTransportHero}
      heroImageAlt="Pet owner safely transporting dog in carrier to emergency vet"
      heroImageCaption="Proper transport technique can prevent additional injuries and improve survival rates"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Transporting Injured Pet?"
        text="The way you transport can significantly impact survival. Improper handling can worsen spinal injuries, cause additional trauma, or accelerate shock."
        buttonText="Find 24/7 Vet Now"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Improper handling can worsen injuries: Spinal injuries, fractures, internal bleeding",
        "Shock accelerates during transport: Keep pet warm, calm, and still",
        "Cats need carriers always: Even in emergencies (prevents escape, reduces stress)",
        "Call ahead: Alert vet so they can prepare",
        "Drive carefully: Sudden stops/turns worsen injuries"
      ]} />

      <CostCTA variant={17} />

      <TableOfContents items={tocItems} />

      {/* Assessment Section */}
      <section id="assessment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          Pre-Transport Assessment: Is Pet Stable Enough?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Transport Immediately IF:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pet is conscious and breathing</li>
              <li>• Bleeding is controlled (or controllable)</li>
              <li>• No severe respiratory distress</li>
              <li>• You can move pet safely</li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Call Vet for Advice BEFORE Transport IF:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Unconscious or barely responsive</li>
              <li>• Severe difficulty breathing (blue gums)</li>
              <li>• Uncontrolled bleeding</li>
              <li>• Suspected spinal injury and you're alone</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl">
          <p className="text-sm font-medium">
            🚨 <strong>Perform CPR On-Site IF:</strong> Not breathing, no heartbeat. Then transport WHILE continuing CPR if possible (have helper drive).
          </p>
        </div>
      </section>

      {/* Handling Section */}
      <section id="handling" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Handling Injured Pets: Techniques by Size</h2>

        <div className="bg-destructive/10 p-4 rounded-xl mb-6">
          <h3 className="font-bold mb-2">⚠️ Safety First: Protect Yourself</h3>
          <p className="text-sm text-muted-foreground mb-2">Even gentle pets may bite when in severe pain, frightened, or disoriented.</p>
          <ul className="text-sm text-muted-foreground">
            <li>• Speak softly, calmly</li>
            <li>• Approach slowly from side (not head-on)</li>
            <li>• Use thick towels/blankets as barriers</li>
            <li>• Muzzle if needed (but NOT if vomiting or difficulty breathing)</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Cat className="h-5 w-5 text-primary" />
              Small Pets (&lt;10 kg)
            </h3>
            <p className="text-sm text-muted-foreground mb-2"><strong>Towel Wrap Method:</strong></p>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Lay thick towel flat</li>
              <li>Gently place pet in center</li>
              <li>Wrap securely (burrito-style)</li>
              <li>Place in secure carrier</li>
            </ol>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Dog className="h-5 w-5 text-primary" />
              Medium/Large Dogs (10-30 kg)
            </h3>
            <p className="text-sm text-muted-foreground mb-2"><strong>Blanket Stretcher (2 People):</strong></p>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Lay blanket next to dog</li>
              <li>Gently roll dog onto blanket</li>
              <li>Two people grasp edges</li>
              <li>Lift together, keep level</li>
            </ol>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2 flex items-center gap-2">
              <Dog className="h-5 w-5 text-primary" />
              Giant Breeds (&gt;30 kg)
            </h3>
            <p className="text-sm text-muted-foreground mb-2"><strong>Multi-Person Carry (2-3 People):</strong></p>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Person 1: Support head/front</li>
              <li>Person 2: Support rear</li>
              <li>Person 3: Support middle</li>
              <li>Lift simultaneously on count</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Spinal Injury Section */}
      <section id="spinal" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Spinal Injury Precautions
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">Assume Spinal Injury IF:</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {["Hit by vehicle", "Fall from height", "Unable to move back legs", "Crying when back/neck touched", "Arched back posture"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Critical Handling Rules:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Keep spine straight at ALL times</li>
            <li>✅ Do NOT bend or twist spine</li>
            <li>✅ Support entire body evenly</li>
            <li>✅ Use rigid board if possible</li>
            <li>✅ Minimize movement</li>
          </ul>
          <p className="text-sm text-destructive mt-4 font-medium">
            ⚠️ Improper handling can cause permanent paralysis or death
          </p>
        </div>
      </section>

      {/* Vehicle Safety */}
      <section id="vehicle" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          Vehicle Safety: Securing Your Pet
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Cat className="h-5 w-5 text-primary" />
              For Cats
            </h3>
            <p className="text-muted-foreground mb-3">
              <strong>ALWAYS use carrier</strong>—even in emergencies. Prevents escape, reduces stress.
            </p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Place on floor behind front seat (most stable)</li>
              <li>• Or secure with seatbelt through handle</li>
              <li>• Never place in front seat with airbag</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Dog className="h-5 w-5 text-primary" />
              For Dogs
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><strong>Small dogs:</strong> Use carrier or have passenger hold</li>
              <li><strong>Medium/large:</strong> Lay in cargo area or back seat floor</li>
              <li><strong>Support with towels</strong> to prevent rolling</li>
            </ul>
            <div className="mt-3 p-2 bg-destructive/10 rounded">
              <p className="text-xs text-destructive">❌ Never let dog roam freely or sit upright if severely injured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warmth Section */}
      <section id="warmth" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Keeping Pet Warm: Shock Prevention</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">Why Warmth Matters</h3>
          <p className="text-muted-foreground mb-3">
            Shock causes body temperature to drop. Hypothermia worsens shock = reduced survival rate.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-primary">✅ DO:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Wrap in blankets or towels</li>
                <li>• Use car heater (not too hot)</li>
                <li>• Place warm (not hot) water bottles wrapped in towels near body</li>
                <li>• Cover pet but leave face exposed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-destructive">❌ DON'T:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Use heating pads (can cause burns)</li>
                <li>• Make pet too hot</li>
                <li>• Cover face (restrict breathing)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section id="what-to-bring" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What to Bring to Emergency Vet</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3">📋 Essential Information</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><strong>Medical Records:</strong> Vaccination history, current medications, known allergies</li>
              <li><strong>Incident Info:</strong> What happened, when, witnessed symptoms, first aid provided</li>
              <li><strong>If Poisoning:</strong> Packaging/container, estimated amount, time of ingestion</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3">💳 Payment Preparation</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Credit card (most emergency vets accept)</li>
              <li>• Cash (RM 1,000-3,000 for deposit)</li>
              <li>• Pet insurance policy info (if applicable)</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">
              Note: Most emergency vets require 50-100% deposit before treatment
            </p>
          </div>
        </div>
      </section>

      {/* Minimizing Stress */}
      <section id="minimizing-stress" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Minimizing Stress During Transport</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🐕 For Dogs</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Speak softly, reassuringly</li>
              <li>✅ Maintain calm demeanor (dogs sense stress)</li>
              <li>✅ Minimize loud noises</li>
              <li>✅ Allow familiar person to comfort</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🐱 For Cats</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Cover carrier with light blanket</li>
              <li>✅ Speak softly</li>
              <li>✅ Avoid jostling carrier</li>
              <li>✅ Classical music or white noise (calming)</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl mt-4">
          <p className="text-sm font-medium">
            ❌ <strong>AVOID:</strong> Loud talking, crying, panicking • Rough handling • Multiple people crowding pet • Taking photos/videos
          </p>
        </div>
      </section>

      {/* Calling Ahead */}
      <section id="calling-ahead" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          Calling Ahead: Why It Matters
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">What to Tell Emergency Vet</h3>
          <ol className="space-y-2 text-muted-foreground">
            <li><strong>1. Pet info:</strong> "Golden Retriever, 5 years old, approximately 30 kg"</li>
            <li><strong>2. Nature of emergency:</strong> "Hit by motorcycle 20 minutes ago"</li>
            <li><strong>3. Current condition:</strong> "Conscious but weak, pale gums, bleeding from leg"</li>
            <li><strong>4. ETA:</strong> "15 minutes away"</li>
          </ol>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">Why This Helps:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Vet prepares treatment area and equipment</li>
            <li>• Identifies if specialist needed</li>
            <li>• May provide pre-arrival instructions</li>
            <li>• Expedites treatment upon arrival (no waiting)</li>
          </ul>
        </div>
      </section>

      {/* Driving Tips */}
      <section id="driving" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Driving Tips: Get There Safely</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">✅ Driver Responsibilities</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Drive Carefully:</strong> Smooth acceleration/braking, slow turns</li>
              <li>• <strong>Stay Focused:</strong> Don't constantly look back at pet</li>
              <li>• <strong>Know the Route:</strong> Use GPS, avoid peak traffic if possible</li>
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">❌ DON'T:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Speed excessively (accident helps no one)</li>
              <li>• Text/call while driving</li>
              <li>• Panic drive</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost CTA */}
      <CostCTA variant={18} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "My cat is too aggressive to get in a carrier. How do I transport her in an emergency?",
              answer: "Use a thick blanket/towel to wrap her completely (including head initially to prevent biting), creating a 'burrito.' Once wrapped, you can expose her face. Place the entire wrapped bundle in a carrier or large box, or hold securely if no carrier available. For future: Acclimate cat to carrier when not in emergency."
            },
            {
              question: "Can I transport my large dog in the front seat?",
              answer: "No—front seat has airbag risk and is less stable during braking. Best location: Cargo area (SUVs/hatchbacks) or back seat floor. Back seat floor is most stable location. If dog must be on back seat, have passenger hold/support to prevent falling during braking."
            },
            {
              question: "My emergency vet is 45 minutes away. Is that too long for a critical injury?",
              answer: "For truly critical emergencies (difficulty breathing, uncontrolled bleeding, unconscious), 45 minutes may be too long. Call vet immediately—they can advise if you should transport immediately, stabilize first, or if there's a closer option. For some emergencies, providing first aid during transport is acceptable."
            },
            {
              question: "Should I give food or water during transport?",
              answer: "NO. Never give food or water when transporting to emergency vet. Reasons: 1) If surgery needed, requires empty stomach, 2) If vomiting, can aspirate into lungs, 3) Unconscious pets can choke. Pet can have water once vet examines and approves."
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
        <h2 className="text-2xl font-bold mb-4">Conclusion: Preparation Equals Success</h2>
        <p className="text-muted-foreground mb-6">
          Knowing how to safely transport your pet BEFORE an emergency occurs can save precious minutes and prevent additional injuries.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Action Checklist</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Save emergency vet address in GPS NOW</li>
            <li>✅ Keep cat carrier easily accessible</li>
            <li>✅ Have blankets/towels in car</li>
            <li>✅ Know route to 24-hour vet</li>
            <li>✅ Program vet number in phone</li>
            <li>✅ Identify who will help transport (family/neighbor)</li>
          </ul>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Phone, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const EmergencySymptomsGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pet Emergency Symptoms Every Malaysian Owner Must Know | 2025 Guide",
    "description": "Learn the 9 critical pet emergency symptoms that require immediate vet attention in Malaysia. Know when to rush to 24-hour emergency care.",
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if my pet's vomiting is an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single episodes are usually not emergencies. Seek immediate care if: vomiting blood, multiple episodes (4+ in 6 hours), vomiting combined with lethargy/collapse, or inability to keep down water."
        }
      },
      {
        "@type": "Question",
        "name": "How much does emergency vet cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emergency consultation: RM150-300. Hospitalization: RM200-500/night. Surgery: RM2,000-10,000+. Most vets require RM500-2,000 deposit upfront."
        }
      }
    ]
  };

  const tocItems = [
    { id: "why-matters", title: "Why Recognizing Symptoms Matters" },
    { id: "9-symptoms", title: "9 Critical Emergency Symptoms" },
    { id: "decision-framework", title: "Emergency vs Wait Decision Framework" },
    { id: "preparation", title: "Preparing for Emergency Vet Visit" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const symptoms = [
    { 
      title: "Difficulty Breathing (Dyspnea)", 
      emoji: "🫁",
      signs: ["Gasping for air with mouth open (especially cats)", "Blue or purple tongue/gums (cyanosis)", "Extended neck and elbows spread apart", "Rapid, shallow breathing (over 40 breaths/min)", "Wheezing, choking, or gurgling sounds"],
      causes: "Heatstroke, heart failure, airway obstruction, allergic reactions, respiratory infections",
      timeSensitivity: "CRITICAL—requires care within 15-30 minutes"
    },
    {
      title: "Severe Bleeding or Trauma",
      emoji: "🩸",
      signs: ["Bleeding that soaks through bandages quickly", "Blood spurting from wound (arterial)", "Hit by car/motorcycle", "Fall from height", "Dog/animal attack with puncture wounds"],
      causes: "Road accidents, falls, animal attacks",
      timeSensitivity: "HIGH—seek care within 30-60 minutes"
    },
    {
      title: "Persistent Vomiting or Diarrhea",
      emoji: "🤢",
      signs: ["Vomiting blood (red or coffee grounds)", "Bloody or black tarry diarrhea", "4+ vomiting episodes in 6 hours", "Projectile vomiting", "Distended, painful abdomen"],
      causes: "Food poisoning, parvovirus, GDV/bloat, poisoning",
      timeSensitivity: "VARIES—bloody vomit is critical (1-2 hours). GDV is immediately life-threatening"
    },
    {
      title: "Inability to Urinate or Defecate",
      emoji: "⚠️",
      signs: ["Straining with no/little urine produced", "Crying in pain when urinating", "Blood in urine", "Repeated trips to litter box with no results"],
      causes: "Urinary blockage (especially male cats)",
      timeSensitivity: "CRITICAL—requires care within 6-12 hours"
    },
    {
      title: "Sudden Collapse, Weakness, or Paralysis",
      emoji: "💔",
      signs: ["Collapse or fainting", "Sudden inability to stand/walk", "Dragging rear legs", "Loss of consciousness", "Extreme weakness"],
      causes: "Heart problems, internal bleeding, poisoning, stroke, spinal injuries",
      timeSensitivity: "CRITICAL—seek emergency care immediately"
    },
    {
      title: "Eye Injuries or Sudden Blindness",
      emoji: "👁️",
      signs: ["Eyeball protruding from socket", "Penetrating injury to eye", "Sudden blindness", "Severe squinting with discharge", "Cloudy or red eye"],
      causes: "Cat fights, sharp plants, construction debris, glaucoma",
      timeSensitivity: "HIGH—seek care within 1-2 hours to save vision"
    },
    {
      title: "Bloated or Rock-Hard Abdomen",
      emoji: "🎈",
      signs: ["Abdomen appears swollen, tight, drum-like", "Unproductive vomiting (trying but nothing comes)", "Excessive drooling", "Restlessness, pacing", "Pale gums"],
      causes: "GDV/Bloat—#1 emergency killer of large breed dogs",
      timeSensitivity: "IMMEDIATELY LIFE-THREATENING—surgery within 1-2 hours"
    },
    {
      title: "Suspected Poisoning",
      emoji: "☠️",
      signs: ["Sudden vomiting/diarrhea after eating something", "Drooling, foaming at mouth", "Tremors, seizures, muscle twitching", "Dilated or constricted pupils", "Weakness, collapse"],
      causes: "Rat bait, toad toxins, toxic plants, chocolate, xylitol, medications",
      timeSensitivity: "CRITICAL—antidotes work best within 1-2 hours"
    },
    {
      title: "Extreme Pain or Sudden Behavioral Changes",
      emoji: "😿",
      signs: ["Crying, whimpering continuously", "Aggressive when touched", "Hunched posture, reluctance to move", "Hiding and avoiding interaction", "Self-mutilation"],
      causes: "Internal injuries, organ failure, severe infections, pancreatitis",
      timeSensitivity: "HIGH—seek care within 1-3 hours"
    }
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Emergency Symptoms Every Malaysian Owner Must Know | 2025 Guide"
      metaDescription="Learn the 9 critical pet emergency symptoms that require immediate vet attention in Malaysia. Know when to rush to 24-hour emergency care. Expert-verified guide."
      path="/blog/pet-emergency-symptoms-malaysia"
      language={language}
      category="Emergency"
      categoryColor="destructive"
      title="Pet Emergency Symptoms Every Malaysian Owner Must Know (2025 Guide)"
      date="January 1, 2025"
      readTime="8 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop"
      heroImageAlt="Alert dog looking at camera - pet emergency symptoms guide"
      heroImageCaption="Recognizing emergency symptoms can save your pet's life"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Is This an Emergency?"
        text="If your pet shows any of the 9 critical symptoms below, contact a 24-hour veterinary clinic immediately."
        buttonText="Find 24/7 Vet Now"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Know the 9 critical emergency symptoms requiring immediate vet attention",
        "Emergency vets cost RM150-300 consultation plus treatment",
        "Keep 24-hour vet contacts saved in your phone",
        "Call ahead before rushing to emergency vet",
        "Time is critical: Some emergencies need treatment within 30-60 minutes"
      ]} />

      <TableOfContents items={tocItems} />

      {/* Why Matters Section */}
      <section id="why-matters" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Why Recognizing Pet Emergency Symptoms Matters in Malaysia
        </h2>
        
        <p className="text-muted-foreground mb-4">
          It's 2 AM in Petaling Jaya. Your dog suddenly starts vomiting blood. Your cat collapses and won't get up. In these terrifying moments, one question races through your mind: <strong>Is this a real emergency, or can it wait until morning?</strong>
        </p>

        <p className="text-muted-foreground mb-4">
          Malaysia's tropical climate, urban hazards, and limited after-hours veterinary services create unique challenges. Unlike countries with abundant 24-hour hospitals, <strong>Malaysia has only 15-20 true 24/7 emergency vet facilities nationwide</strong>, mostly in Klang Valley.
        </p>

        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-2">Key Statistic</h3>
          <p className="text-2xl font-bold text-primary mb-2">60%+</p>
          <p className="text-sm text-muted-foreground">of pet emergencies occur outside regular business hours (9 AM-6 PM)</p>
        </div>

        <p className="text-muted-foreground mb-4">
          Emergency vet fees range from RM150-300 for consultation (vs RM35-80 regular). But delaying treatment can result in costs of RM5,000-20,000+ for advanced procedures, permanent damage, or losing your beloved pet.
        </p>
      </section>

      {/* 9 Symptoms Section */}
      <section id="9-symptoms" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          9 Critical Pet Emergency Symptoms Requiring Immediate Vet Attention
        </h2>

        <div className="space-y-6">
          {symptoms.map((symptom, index) => (
            <div key={index} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">{symptom.emoji}</span>
                {index + 1}. {symptom.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Signs to Watch For:</h4>
                  <ul className="space-y-1 text-sm">
                    {symptom.signs.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Common Causes in Malaysia:</h4>
                  <p className="text-sm text-muted-foreground">{symptom.causes}</p>
                </div>
              </div>

              <div className="bg-destructive/10 p-3 rounded-lg flex items-center gap-2">
                <Clock className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium">Time Sensitivity: {symptom.timeSensitivity}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Framework */}
      <section id="decision-framework" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Decide: Emergency Vet or Wait?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              GO TO EMERGENCY VET IMMEDIATELY
            </h3>
            <ul className="space-y-2 text-sm">
              {["Any difficulty breathing", "Unconsciousness or severe weakness", "Heavy bleeding that won't stop", "Suspected poisoning", "Inability to urinate (especially male cats)", "GDV/bloat symptoms", "Seizures >3 minutes or multiple seizures", "Severe trauma (hit by car, fall)", "Eye injuries"].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              CAN LIKELY WAIT FOR REGULAR HOURS
            </h3>
            <ul className="space-y-2 text-sm">
              {["Single episode of vomiting/diarrhea with normal behavior", "Mild limping with normal activity", "Minor scratches or abrasions", "Mild sneezing or coughing", "Ear infections (unless severe head tilt)"].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-4 my-6">
          <p className="italic text-muted-foreground">
            <strong>When in doubt, ALWAYS call the emergency vet.</strong> They can help assess urgency over the phone and may provide critical first aid instructions while you're en route.
          </p>
        </div>
      </section>

      {/* Preparation Section */}
      <section id="preparation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Preparing for an Emergency Vet Visit</h2>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            📱 Save These Emergency Contacts NOW
          </h3>
          <ul className="space-y-2">
            <li>• <strong>Animal Medical Center (AMC)</strong> - KL: +603-7982 9199</li>
            <li>• <strong>Gasing Veterinary Hospital</strong> - PJ: +603-7957 2030</li>
            <li>• <strong>Starlight Veterinary Hospital</strong> - Subang: +6012-691 4745</li>
            <li>• <strong>Windsor Animal Hospital</strong> - Shah Alam: +603-5191 1799</li>
            <li>• <strong>St. Angel Animal Medical Centre</strong> - KL: +603-4023 9299</li>
          </ul>
        </div>

        <p className="text-muted-foreground mb-4">
          See our complete <InternalLink to="/blog/24-hour-vet-directory-malaysia">24-Hour Vet Directory Malaysia</InternalLink> for facilities in Penang, JB, Melaka, and more.
        </p>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How do I know if my pet's vomiting is an emergency?</AccordionTrigger>
            <AccordionContent>
              Single episodes are usually not emergencies. Seek immediate care if: vomiting blood, multiple episodes (4+ in 6 hours), vomiting combined with lethargy/collapse, or inability to keep down water.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How much does emergency vet cost in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Emergency consultation: RM150-300. Hospitalization: RM200-500/night. Surgery: RM2,000-10,000+. Most vets require RM500-2,000 deposit upfront. See our <InternalLink to="/blog/pet-emergency-costs-malaysia">complete cost guide</InternalLink>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Can I give my pet human pain medication?</AccordionTrigger>
            <AccordionContent>
              <strong>NO.</strong> Never give human medications (Panadol, aspirin, ibuprofen) to pets. These are highly toxic and can cause kidney failure, liver damage, or death.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Is heatstroke common in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Yes, extremely common due to tropical climate. Signs: excessive panting, drooling, red gums, vomiting, collapse. Heatstroke requires immediate cooling and vet care within 30 minutes. Learn <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">first aid for heatstroke</InternalLink>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Be Prepared, Act Quickly, Save Lives</h2>
        
        <p className="text-muted-foreground mb-4">
          Recognizing pet emergency symptoms is a critical skill for every Malaysian pet owner. Your ability to identify true emergencies and act quickly can mean the difference between life and death for your beloved pet.
        </p>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Remember:</h3>
          <ul className="space-y-2">
            <li>✓ Trust your instincts—if something feels wrong, call the emergency vet</li>
            <li>✓ Time is critical—don't delay for life-threatening symptoms</li>
            <li>✓ Save 24-hour vet contacts BEFORE an emergency happens</li>
            <li>✓ Prepare an emergency kit and know the route to the nearest emergency vet</li>
          </ul>
        </div>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={6} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Guide to Pet Emergency Treatment in Malaysia", description: "Comprehensive pillar guide covering all aspects of pet emergencies" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Critical symptoms & treatment for Malaysia's climate" },
        { to: "/blog/pet-poisoning-treatment-malaysia", title: "Poisoning Treatment Guide", description: "Recognize poisoning symptoms & vet treatments" },
        { to: "/blog/pet-emergency-transport-malaysia", title: "Emergency Transport Guide", description: "How to safely transport an injured pet" },
        { to: "/blog/pet-emergency-first-aid-guide-malaysia", title: "Pet Emergency First Aid Guide", description: "Life-saving techniques every owner should know" },
      ]} />
    </ArticleLayout>
  );
};

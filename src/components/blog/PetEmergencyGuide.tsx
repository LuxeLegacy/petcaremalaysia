import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Phone, Heart, Shield, DollarSign, Skull, Clock, CheckCircle2, MapPin, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const PetEmergencyGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Pet Emergency Treatment in Malaysia 2025",
    "description": "Comprehensive guide to pet emergency care in Malaysia. 24-hour vets, emergency symptoms, first aid, treatment costs, and insurance coverage.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-20",
    "dateModified": "2024-12-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-emergency-guide-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the signs of a pet emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Critical signs include difficulty breathing, severe bleeding, loss of consciousness, seizures, inability to urinate, suspected poisoning, trauma, and bloated abdomen. These require immediate 24-hour vet care."
        }
      },
      {
        "@type": "Question",
        "name": "How much does emergency vet care cost in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Emergency consultation costs RM150-350. Total emergency visits typically range RM1,000-5,000. Major emergencies with surgery can cost RM5,000-20,000+. Most vets require RM500-3,000 deposit upfront."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find 24-hour vets in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malaysia has 15-20 true 24/7 emergency vet facilities, mostly in Klang Valley. Key facilities include Animal Medical Center (TTDI), Gasing Vet (PJ), Starlight Vet (Subang), Windsor (Shah Alam), and Gill's (Penang)."
        }
      },
      {
        "@type": "Question",
        "name": "Does pet insurance cover emergencies in Malaysia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, pet insurance typically covers 70-90% of emergency costs. Providers include Oyen, MSIG, and Etiqa. Coverage includes emergency surgery, hospitalization, and medications. Pre-existing conditions are not covered."
        }
      }
    ]
  };

  const tocItems = [
    { id: "introduction", title: "Introduction: Why Emergency Preparedness Matters" },
    { id: "recognizing-emergencies", title: "Recognizing Pet Emergencies" },
    { id: "immediate-steps", title: "Immediate Steps During an Emergency" },
    { id: "first-aid", title: "Pet First Aid Basics" },
    { id: "24-hour-vets", title: "24-Hour Emergency Vets in Malaysia" },
    { id: "common-emergencies", title: "Common Pet Emergencies in Malaysia" },
    { id: "costs", title: "Emergency Treatment Costs" },
    { id: "insurance", title: "Pet Insurance and Emergency Coverage" },
    { id: "prevention", title: "Prevention and Preparedness" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const clusterArticles = [
    {
      to: "/blog/pet-emergency-symptoms-malaysia",
      title: "Pet Emergency Symptoms Guide",
      description: "Learn the 9 critical symptoms that require immediate vet attention",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      to: "/blog/24-hour-vet-directory-malaysia",
      title: "24-Hour Vet Directory Malaysia",
      description: "Complete verified directory of emergency vet hospitals by region",
      icon: MapPin,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-first-aid-guide-malaysia",
      title: "Pet Emergency First Aid Guide",
      description: "Life-saving techniques: CPR, bleeding control, heatstroke response",
      icon: Heart,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-emergency-costs-malaysia",
      title: "Emergency Treatment Costs Guide",
      description: "Detailed price breakdown and payment options",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      to: "/blog/common-pet-poisons-malaysia",
      title: "Common Pet Poisons in Malaysia",
      description: "Prevention and emergency response for toxic substances",
      icon: Skull,
      color: "text-destructive"
    },
    {
      to: "/blog/dog-emergency-guide-malaysia",
      title: "Dog Emergency Guide",
      description: "Heatstroke, bloat, poisoning - dog-specific emergencies",
      icon: Heart,
      color: "text-primary"
    },
    {
      to: "/blog/cat-emergency-guide-malaysia",
      title: "Cat Emergency Guide",
      description: "Urinary blockage, poisoning, breathing - cat-specific emergencies",
      icon: Heart,
      color: "text-primary"
    },
    {
      to: "/blog/pet-heatstroke-malaysia",
      title: "Heatstroke Emergency Guide",
      description: "Critical for Malaysia's tropical climate - prevent and treat heatstroke",
      icon: Clock,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-choking-emergency-malaysia",
      title: "Choking & Heimlich Guide",
      description: "Step-by-step Heimlich maneuver for dogs and cats",
      icon: Heart,
      color: "text-primary"
    },
    {
      to: "/blog/pet-insurance-malaysia",
      title: "Pet Insurance Guide",
      description: "Cover 70-90% of emergency costs with the right policy",
      icon: Shield,
      color: "text-primary"
    },
    {
      to: "/blog/pet-poisoning-treatment-malaysia",
      title: "Poisoning Treatment Guide",
      description: "What vets do for poisoned pets - decontamination & antidotes",
      icon: Skull,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-emergency-transport-malaysia",
      title: "Emergency Transport Guide",
      description: "Safely move injured pets without worsening injuries",
      icon: Heart,
      color: "text-primary"
    },
    {
      to: "/blog/post-emergency-pet-care-malaysia",
      title: "Post-Emergency Care Guide",
      description: "Recovery, medications, and follow-up after emergencies",
      icon: Heart,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-prevention-malaysia",
      title: "Emergency Prevention Guide",
      description: "Pet-proof your home and prevent common emergencies",
      icon: Shield,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Complete Guide to Pet Emergency Treatment in Malaysia 2025 | PetCare Malaysia"
      metaDescription="Comprehensive guide to pet emergency care in Malaysia. Find 24-hour vets, recognize emergency symptoms, learn first aid, understand costs, and get insurance coverage."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-emergency-guide-malaysia`}
      language={language}
      category="Emergency Guide"
      categoryColor="destructive"
      title="The Complete Guide to Pet Emergency Treatment in Malaysia (2025)"
      date="December 20, 2024"
      readTime="20 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Veterinarian providing emergency care to a dog in Malaysia"
      heroImageCaption="Emergency veterinary care can save your pet's life when every second counts"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Emergency? Act Now!"
        text="If your pet is experiencing a life-threatening emergency, do not wait. Contact a 24-hour veterinary clinic immediately."
        buttonText="Find 24/7 Vet Near You"
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={[
        "Know the 9 critical emergency symptoms requiring immediate vet attention",
        "Malaysia has only 15-20 true 24/7 emergency vet facilities (mostly in Klang Valley)",
        "Emergency vet costs: RM150-350 consultation, RM1,000-20,000+ total depending on severity",
        "Learn basic pet first aid: CPR, bleeding control, heatstroke response",
        "Pet insurance (Oyen, MSIG) covers 70-90% of emergency costs when purchased before emergency",
        "Time is critical: Some emergencies need treatment within 30-60 minutes"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={0} />

      {/* Quick Navigation to Cluster Articles */}
      <div className="bg-gradient-to-r from-primary/10 to-destructive/10 p-6 rounded-xl mb-10">
        <h2 className="font-bold text-xl mb-4">📚 Jump to Detailed Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clusterArticles.map((article, index) => (
            <Link 
              key={index}
              to={article.to}
              className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <article.icon className={`h-6 w-6 ${article.color} flex-shrink-0 mt-0.5`} />
              <div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TableOfContents items={tocItems} />

      {/* Introduction Section */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          Introduction: Why Emergency Preparedness Matters
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Every pet owner's worst nightmare is facing a sudden health crisis with their beloved companion. According to the <strong>Department of Veterinary Services Malaysia (DVS)</strong>, pet ownership in Malaysia has grown by 12% annually, with over 3 million households now caring for dogs and cats.
        </p>

        <p className="text-muted-foreground mb-4">
          <strong>Studies show that pet owners who are prepared for emergencies have significantly better outcomes.</strong> A 2023 survey by the Malaysian Veterinary Medical Association found that 78% of pet deaths during emergencies could have been prevented with faster response times and basic first aid knowledge.
        </p>

        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-2">Key Statistic</h3>
          <p className="text-3xl font-bold text-primary mb-2">Every 8 Minutes</p>
          <p className="text-sm text-muted-foreground">A pet in Malaysia experiences a medical emergency that requires immediate veterinary attention.</p>
        </div>

        <p className="text-muted-foreground mb-4">
          This comprehensive guide will equip you with the knowledge and confidence to handle pet emergencies effectively. Whether you're a first-time pet owner or have years of experience, understanding emergency protocols can mean the difference between life and death for your furry family member.
        </p>

        <div className="border-l-4 border-primary pl-4 my-6">
          <p className="italic text-muted-foreground">
            <strong>Expert Insight:</strong> "Pet owners often underestimate subtle signs like changes in gum color or breathing patterns. Learning to check your pet's vital signs during routine play can help you spot abnormalities quickly during an emergency." — Dr. Ahmad Razali, Emergency Veterinary Specialist, Universiti Putra Malaysia
          </p>
        </div>
      </section>

      {/* Recognizing Emergencies Section */}
      <section id="recognizing-emergencies" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          Recognizing Pet Emergencies
        </h2>

        <p className="text-muted-foreground mb-6">
          Knowing when your pet needs emergency care versus a regular vet visit is crucial. Here are the critical signs that require <strong>immediate veterinary attention</strong>:
        </p>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">🚨 Life-Threatening Emergency Signs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Difficulty breathing – gasping, choking, blue gums",
              "Severe bleeding – won't stop after 5 minutes of pressure",
              "Loss of consciousness – unresponsive to stimuli",
              "Seizures – lasting more than 3 minutes or in clusters",
              "Inability to urinate – straining for 12+ hours",
              "Suspected poisoning – toxic substances ingested",
              "Trauma – hit by vehicle, fall from height",
              "Bloated abdomen – with unproductive retching"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          For a complete breakdown of all 9 critical symptoms with time sensitivity guidelines, see our detailed <InternalLink to="/blog/pet-emergency-symptoms-malaysia">Pet Emergency Symptoms Guide</InternalLink>.
        </p>
      </section>

      {/* Immediate Steps Section */}
      <section id="immediate-steps" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          Immediate Steps During an Emergency
        </h2>

        <p className="text-muted-foreground mb-6">
          When faced with a pet emergency, your response in the first few minutes can significantly impact the outcome:
        </p>

        <div className="space-y-4 mb-8">
          {[
            { title: "Stay Calm", text: "Your pet can sense your stress. Take a deep breath. Panicking will only frighten your pet more." },
            { title: "Assess the Situation", text: "Quickly check breathing, consciousness, bleeding, and obvious injuries. Note symptoms to report to the vet." },
            { title: "Call the Emergency Vet", text: "Contact the nearest 24-hour clinic immediately. Describe the emergency clearly and follow their instructions." },
            { title: "Provide Basic First Aid", text: "Only if trained. Incorrect first aid can cause more harm. Basic actions include controlling bleeding and keeping airways clear." },
            { title: "Transport Safely", text: "Move your pet carefully to avoid aggravating injuries. Use a carrier, blanket, or board as a stretcher." },
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
      </section>

      {/* First Aid Section */}
      <section id="first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Pet First Aid Basics
        </h2>

        <p className="text-muted-foreground mb-4">
          While veterinary care should always be your priority, knowing basic pet first aid can stabilize your pet during transport. According to the <strong>Malaysian Animal Welfare Society</strong>, pet owners with first aid training are 40% more likely to have positive outcomes during emergencies.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🩸 Controlling Bleeding</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Apply firm, direct pressure with clean cloth</li>
              <li>Maintain pressure for 5+ minutes without checking</li>
              <li>Add more layers if blood soaks through</li>
              <li>Elevate affected area if possible</li>
            </ol>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">💓 Pet CPR Basics</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>Only if no pulse and not breathing</li>
              <li>Lay pet on right side on firm surface</li>
              <li>Compress chest 1/3 to 1/2 depth</li>
              <li>100-120 compressions per minute</li>
              <li>2 rescue breaths every 30 compressions</li>
            </ol>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          For complete step-by-step instructions on CPR, choking, heatstroke, and poisoning response, see our comprehensive <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">Pet Emergency First Aid Guide</InternalLink>.
        </p>
      </section>

      {/* 24-Hour Vets Section */}
      <section id="24-hour-vets" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          24-Hour Emergency Vets in Malaysia
        </h2>

        <p className="text-muted-foreground mb-4">
          Malaysia has only <strong>15-20 true 24/7 emergency veterinary facilities</strong>, with most concentrated in Klang Valley. Here are the key emergency hospitals:
        </p>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            📱 Save These Emergency Contacts NOW
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Animal Medical Center (AMC)", location: "TTDI, KL", phone: "+603-7982 9199", fee: "RM250-350" },
              { name: "Gasing Veterinary Hospital", location: "Petaling Jaya", phone: "+603-7957 2030", fee: "RM180-280" },
              { name: "Starlight Veterinary Hospital", location: "Subang Jaya", phone: "+6012-691 4745", fee: "RM200-300" },
              { name: "Windsor Animal Hospital", location: "Shah Alam", phone: "+603-5191 1799", fee: "RM220-320" },
              { name: "Gill's Veterinary Clinic", location: "Penang", phone: "+604-228 8735", fee: "RM180-280" },
            ].map((vet, i) => (
              <div key={i} className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold">{vet.name}</h4>
                <p className="text-sm text-muted-foreground">{vet.location}</p>
                <p className="text-sm font-medium text-primary">{vet.phone}</p>
                <p className="text-xs text-muted-foreground">Consultation: {vet.fee}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          For the complete verified directory including JB, Melaka, and other regions, see our <InternalLink to="/blog/24-hour-vet-directory-malaysia">24-Hour Vet Directory Malaysia 2025</InternalLink>.
        </p>
      </section>

      {/* Common Emergencies Section */}
      <section id="common-emergencies" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Pet Emergencies in Malaysia</h2>

        <p className="text-muted-foreground mb-6">
          Malaysia's tropical climate and urban environment create unique emergency risks:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🌡️ Heatstroke</h3>
            <p className="text-sm text-muted-foreground mb-2">Extremely common due to tropical climate.</p>
            <p className="text-sm"><strong>Signs:</strong> Heavy panting, red gums, vomiting, collapse</p>
            <p className="text-sm"><strong>Action:</strong> Cool with water (not ice), rush to vet within 30 mins</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🐜 Tick Fever</h3>
            <p className="text-sm text-muted-foreground mb-2">Endemic in Malaysia, transmitted by ticks.</p>
            <p className="text-sm"><strong>Signs:</strong> Fever, lethargy, loss of appetite, pale gums</p>
            <p className="text-sm"><strong>Prevention:</strong> Monthly tick preventatives essential</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">☠️ Poisoning</h3>
            <p className="text-sm text-muted-foreground mb-2">Rat bait is #1 killer of pets in Malaysia.</p>
            <p className="text-sm"><strong>Common:</strong> Rat poison, toad toxins, chocolate, xylitol</p>
            <p className="text-sm"><strong>Action:</strong> Call vet immediately, bring poison container</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-2">🚗 Road Accidents</h3>
            <p className="text-sm text-muted-foreground mb-2">Common in urban areas like KL, Penang, JB.</p>
            <p className="text-sm"><strong>Warning:</strong> Internal bleeding can be fatal hours later</p>
            <p className="text-sm"><strong>Action:</strong> Always see vet even if pet seems fine</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          For detailed prevention and response for toxic substances, see our <InternalLink to="/blog/common-pet-poisons-malaysia">Common Pet Poisons in Malaysia Guide</InternalLink>.
        </p>
      </section>

      {/* Costs Section */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          Emergency Treatment Costs
        </h2>

        <p className="text-muted-foreground mb-6">
          Emergency veterinary care costs 2-4x more than regular visits. Here's what to expect:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4 font-semibold">Service</th>
                <th className="text-left p-4 font-semibold">Cost Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Emergency Consultation", "RM150-350"],
                ["Blood Work", "RM150-600"],
                ["X-rays", "RM100-600"],
                ["Ultrasound", "RM300-800"],
                ["IV Fluids (per day)", "RM150-400"],
                ["Hospitalization (per day)", "RM200-500"],
                ["ICU Care (per day)", "RM500-1,500"],
                ["Emergency Surgery", "RM2,000-10,000+"],
              ].map(([service, cost], i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4">{service}</td>
                  <td className="p-4 font-medium">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">Typical Emergency Scenarios</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div><strong>Cat urinary blockage:</strong> RM2,500-3,500</div>
            <div><strong>Dog hit by car (moderate):</strong> RM2,000-3,000</div>
            <div><strong>GDV/Bloat surgery:</strong> RM7,000-12,000</div>
            <div><strong>Poisoning treatment:</strong> RM1,500-3,000</div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          For complete cost breakdown with payment options and insurance, see our <InternalLink to="/blog/pet-emergency-costs-malaysia">Pet Emergency Costs Malaysia Guide</InternalLink>.
        </p>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Pet Insurance and Emergency Coverage
        </h2>

        <p className="text-muted-foreground mb-4">
          Pet insurance purchased <strong>before</strong> emergencies occur can cover 70-90% of costs. Available providers in Malaysia:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { name: "Oyen", monthly: "RM49-149", coverage: "Up to RM8,000/year", highlight: "Most Popular" },
            { name: "MSIG", monthly: "RM55-180", coverage: "Up to RM10,000/year", highlight: "Comprehensive" },
            { name: "Etiqa", monthly: "RM50-150", coverage: "Up to RM8,000/year", highlight: "Takaful Option" },
          ].map((provider, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl text-center">
              {provider.highlight && (
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">{provider.highlight}</span>
              )}
              <h3 className="font-bold text-lg">{provider.name}</h3>
              <p className="text-primary font-medium">{provider.monthly}/month</p>
              <p className="text-sm text-muted-foreground">{provider.coverage}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">What's Typically Covered:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-primary">✓ Covered</h4>
              <ul className="text-sm space-y-1">
                <li>• Emergency surgery</li>
                <li>• Hospitalization</li>
                <li>• Medications</li>
                <li>• Diagnostic tests</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-destructive">✗ Not Covered</h4>
              <ul className="text-sm space-y-1">
                <li>• Pre-existing conditions</li>
                <li>• Waiting period (14-30 days)</li>
                <li>• Cosmetic procedures</li>
                <li>• Routine wellness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Prevention and Preparedness</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🏠 Pet-Proof Your Home</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Secure toxic chemicals and medications</li>
              <li>• Remove toxic plants (sago palm, oleander)</li>
              <li>• No rat poison accessible to pets</li>
              <li>• Keep chocolate and xylitol products away</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">🎒 Emergency Kit</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Clean towels for bleeding control</li>
              <li>• Pet carrier or sturdy box</li>
              <li>• Muzzle (injured pets may bite)</li>
              <li>• Emergency vet contacts</li>
              <li>• RM500-1,000 cash for deposit</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Financial Preparation</h3>
          <ul className="space-y-2">
            <li>✓ Build emergency pet fund: RM5,000-10,000 goal</li>
            <li>✓ Get pet insurance while pet is young and healthy</li>
            <li>✓ Know payment options at local emergency vets</li>
            <li>✓ Keep RM1,000-2,000 accessible for emergencies</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>What are the signs of a pet emergency?</AccordionTrigger>
            <AccordionContent>
              Critical signs include difficulty breathing, severe bleeding, loss of consciousness, seizures, inability to urinate (especially male cats), suspected poisoning, trauma (hit by car), and bloated abdomen. See our complete <InternalLink to="/blog/pet-emergency-symptoms-malaysia">symptoms guide</InternalLink>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How much does emergency vet care cost in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Emergency consultation: RM150-350. Total emergency visits: RM1,000-5,000. Major emergencies with surgery: RM5,000-20,000+. Most vets require RM500-3,000 deposit upfront. See our <InternalLink to="/blog/pet-emergency-costs-malaysia">complete cost guide</InternalLink>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Where can I find 24-hour vets in Malaysia?</AccordionTrigger>
            <AccordionContent>
              Malaysia has 15-20 true 24/7 facilities, mostly in Klang Valley. Key hospitals: Animal Medical Center (TTDI), Gasing Vet (PJ), Starlight (Subang), Windsor (Shah Alam), Gill's (Penang). See our <InternalLink to="/blog/24-hour-vet-directory-malaysia">complete directory</InternalLink>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Does pet insurance cover emergencies?</AccordionTrigger>
            <AccordionContent>
              Yes, pet insurance typically covers 70-90% of emergency costs when purchased before the emergency occurs. Providers include Oyen, MSIG, and Etiqa. Pre-existing conditions are not covered.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Can I give my pet human pain medication?</AccordionTrigger>
            <AccordionContent>
              <strong>NO.</strong> Never give human medications (Panadol, aspirin, ibuprofen) to pets. These are highly toxic and can cause kidney failure, liver damage, or death. Only use medications prescribed by a veterinarian.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>Should I call before going to emergency vet?</AccordionTrigger>
            <AccordionContent>
              Yes, if possible. Calling ahead (even 30 seconds) allows the emergency vet to prepare, provide first aid instructions, and confirm they can handle your emergency. However, don't delay departure for life-threatening emergencies—call en route.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: Be Prepared, Save Lives</h2>
        
        <p className="text-muted-foreground mb-4">
          Pet emergencies are stressful, but preparation can save your pet's life. In a country with limited 24-hour veterinary services, your ability to recognize emergencies, provide basic first aid, and act quickly makes all the difference.
        </p>

        <div className="bg-gradient-to-r from-primary/10 to-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">Action Steps for Today:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                <li>✓ Save 24-hour vet contacts in your phone</li>
                <li>✓ Know the route to nearest emergency vet</li>
                <li>✓ Prepare an emergency pet kit</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>✓ Start emergency pet fund (RM200/month)</li>
                <li>✓ Consider pet insurance while pet is healthy</li>
                <li>✓ Bookmark this guide for quick reference</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-4">
          <p className="italic text-muted-foreground">
            Your preparedness today could save your pet's life tomorrow. When every second counts, you'll be ready.
          </p>
        </div>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={1} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-symptoms-malaysia", title: "Pet Emergency Symptoms Every Owner Must Know", description: "9 critical symptoms requiring immediate vet attention" },
        { to: "/blog/24-hour-vet-directory-malaysia", title: "24-Hour Vet Directory Malaysia 2025", description: "Complete verified directory by region" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Critical for Malaysia's tropical climate" },
        { to: "/blog/pet-choking-emergency-malaysia", title: "Pet Choking First Aid", description: "Heimlich maneuver for dogs and cats" },
        { to: "/blog/pet-accident-emergency-malaysia", title: "Pet Accident Emergency Protocol", description: "Road accidents, falls, trauma response" },
        { to: "/blog/pet-insurance-malaysia", title: "Pet Insurance Guide", description: "Cover 70-90% of emergency costs" },
      ]} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, Pill, Clock, CheckCircle2, XCircle, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const PostEmergencyCareGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Post-Emergency Pet Care Malaysia: Recovery, Medications & Follow-Up",
    "description": "Complete post-emergency pet care guide for Malaysia. Medication schedules, wound care, activity restriction, warning signs, follow-up visits.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24"
  };

  const tocItems = [
    { id: "discharge", title: "Understanding Discharge Instructions" },
    { id: "medications", title: "Medication Management" },
    { id: "wound-care", title: "Wound Care & E-Collar" },
    { id: "activity", title: "Activity Restriction" },
    { id: "feeding", title: "Feeding After Treatment" },
    { id: "warning-signs", title: "Warning Signs to Watch" },
    { id: "follow-up", title: "Follow-Up Appointments" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Emergency Guide", description: "Full emergency preparedness", icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-emergency-transport-malaysia", title: "Emergency Transport Guide", description: "Safe transport techniques", icon: Heart, color: "text-primary" },
    { to: "/blog/pet-insurance-malaysia", title: "Pet Insurance Guide", description: "Cover treatment costs", icon: Shield, color: "text-primary" },
    { to: "/blog/pet-emergency-prevention-malaysia", title: "Prevention Guide", description: "Prevent future emergencies", icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle="Post-Emergency Pet Care Malaysia: Recovery, Medications & Follow-Up"
      metaDescription="Complete post-emergency pet care guide for Malaysia. Medication schedules, wound care, activity restriction, warning signs, follow-up visits. Ensure full recovery."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/post-emergency-pet-care-malaysia`}
      language={language}
      category="Recovery"
      categoryColor="primary"
      title="Post-Emergency Pet Care: Complete Recovery & Follow-Up Guide"
      date="December 24, 2024"
      readTime="10 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Pet recovering after emergency veterinary treatment"
      heroImageCaption="Proper at-home care is crucial for complete recovery after emergency treatment"
      structuredData={structuredData}
    >
      <TLDRBox items={[
        "Medication compliance is critical: Stopping antibiotics early = infection returns",
        "Activity restriction prevents complications: Too much movement = wounds open",
        "Warning signs require immediate vet return: Fever, vomiting, not eating >24h",
        "Follow-up appointments are NOT optional: Ensure proper healing",
        "Recovery timelines: Minor emergencies 5-7 days, major surgery 2-6 weeks"
      ]} />

      <CostCTA variant={19} />
      <TableOfContents items={tocItems} />

      <section id="discharge" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Understanding Discharge Instructions</h2>
        <p className="text-muted-foreground mb-4">
          According to veterinary data, <strong>20-30% of pets experience setbacks</strong> due to inadequate post-emergency care—often from medication errors or premature activity.
        </p>
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-3">You Should Receive:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>📋 Written discharge summary (diagnosis, treatment, medications)</li>
            <li>📋 Medications with dosing instructions</li>
            <li>📋 Activity restrictions and feeding instructions</li>
            <li>📋 Warning signs to watch for</li>
            <li>📋 Follow-up appointment date</li>
          </ul>
          <p className="text-sm text-primary mt-4 font-medium">If anything is unclear, ASK before leaving the clinic.</p>
        </div>
      </section>

      <section id="medications" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Pill className="h-6 w-6 text-primary" />Medication Management</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Antibiotics</h3>
            <p className="text-sm text-muted-foreground mb-2">Complete ENTIRE course (7-14 days typically)</p>
            <p className="text-sm text-destructive">❌ Stopping early = bacteria returns stronger</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">Pain Medications</h3>
            <p className="text-sm text-muted-foreground mb-2">Give as prescribed, even if pet seems better</p>
            <p className="text-sm text-muted-foreground">Common: Meloxicam, tramadol, gabapentin</p>
          </div>
        </div>
        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="text-sm"><strong>Pro Tip:</strong> Give treats immediately after medication for positive association.</p>
        </div>
      </section>

      <section id="wound-care" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Wound Care & E-Collar Compliance</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">Normal Incision Signs:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Slight redness at edges (first 48 hours)</li>
              <li>✅ Mild swelling</li>
              <li>✅ Dry incision, stitches intact</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">Red Flags (Call Vet):</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>❌ Excessive redness, swelling</li>
              <li>❌ Discharge (pus, blood)</li>
              <li>❌ Incision opening/gaping</li>
              <li>❌ Bad odor</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4"><strong>E-Collar Duration:</strong> Typically 10-14 days until stitches removed. Necessary evil for healing!</p>
      </section>

      <section id="activity" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Activity Restriction: The Hardest Part</h2>
        <div className="bg-destructive/10 p-4 rounded-xl mb-4">
          <p className="font-medium">⚠️ Too much activity causes: Surgical incisions to open, internal stitches to tear, fractures to heal poorly, increased pain</p>
        </div>
        <div className="space-y-3">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-bold">Level 1: Strict Rest (Major Surgery)</h4>
            <p className="text-sm text-muted-foreground">Crate rest, bathroom breaks only on leash, no stairs/jumping. Duration: 2-4 weeks</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-bold">Level 2: Restricted Activity</h4>
            <p className="text-sm text-muted-foreground">Short leash walks only (5-10 min), no running/playing. Duration: 1-3 weeks</p>
          </div>
        </div>
      </section>

      <section id="warning-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" />Warning Signs: When to Return to Vet</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">🚨 EMERGENCY - Return Immediately:</h3>
            <ul className="text-sm space-y-1">{["Difficulty breathing", "Collapse, extreme weakness", "Seizures", "Uncontrolled bleeding", "Surgical wound opens", "Not urinating >12-24 hours"].map((s, i) => <li key={i}>• {s}</li>)}</ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-bold mb-2">⚠️ Call Vet for Guidance:</h3>
            <ul className="text-sm space-y-1">{["Not eating for 24-48 hours", "Vomiting/diarrhea (1-2 episodes)", "Increased pain", "Incision redness worsening"].map((s, i) => <li key={i}>• {s}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="follow-up" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Follow-Up Appointments: Don't Skip</h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Why They're Critical:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Ensure proper healing (check incisions, assess pain)</li>
            <li>✅ Remove stitches/staples (10-14 days post-surgery)</li>
            <li>✅ Adjust treatment plan if needed</li>
            <li>✅ Address complications early</li>
          </ul>
        </div>
      </section>

      <CostCTA variant={0} />

      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { question: "My dog seems normal 3 days after surgery. Can I let him play?", answer: "NO. 'Seems normal' doesn't mean healed. Internal stitches take 10-14 days. Premature activity causes incisions to open. Follow restrictions for FULL prescribed duration." },
            { question: "Can I give half the pain medication dose if my pet seems sleepy?", answer: "No—don't adjust without vet approval. Sleepiness is expected. If excessive, call vet. Under-dosing causes unnecessary suffering." },
            { question: "My cat won't eat after 2 days home. Should I worry?", answer: "Yes—call vet immediately. Cats that don't eat for 24-48 hours risk hepatic lipidosis (fatty liver disease). Don't wait." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent><p className="text-muted-foreground">{faq.answer}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Car, Heart, Shield, Phone, CheckCircle2, Dog, Cat, Activity } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import emergencyTransportHero from '@/assets/emergency-transport-hero.jpg';
import { getEmergencyTransportGuideContent } from '@/lib/blogTranslations/emergencyTransportGuide';

export const EmergencyTransportGuide = () => {
  const { language } = useLanguage();
  const content = getEmergencyTransportGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": content.title,
    "description": content.metaDescription,
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
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const relatedArticles = [
    { to: "/blog/pet-accident-emergency-malaysia", title: content.relatedArticles[0].title, description: content.relatedArticles[0].description, icon: Activity, color: "text-destructive" },
    { to: "/blog/pet-emergency-first-aid-guide-malaysia", title: content.relatedArticles[1].title, description: content.relatedArticles[1].description, icon: Heart, color: "text-destructive" },
    { to: "/blog/24-hour-vet-directory-malaysia", title: content.relatedArticles[2].title, description: content.relatedArticles[2].description, icon: Phone, color: "text-primary" },
    { to: "/blog/post-emergency-pet-care-malaysia", title: content.relatedArticles[3].title, description: content.relatedArticles[3].description, icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/emergency-pet-transport-malaysia"
      language={language}
      category={content.category}
      categoryColor="primary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage={emergencyTransportHero}
      heroImageAlt={content.heroImageAlt}
      heroImageCaption={content.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title={content.emergencyTitle}
        text={content.emergencyText}
        buttonText={content.emergencyButton}
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={content.tldr} />
      <CostCTA variant={17} />
      <TableOfContents items={content.tocItems} />

      {/* Assessment Section */}
      <section id="assessment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          {content.assessmentTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {content.transportIf}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {content.transportIfItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              {content.callVetIf}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {content.callVetIfItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl">
          <p className="text-sm font-medium" dangerouslySetInnerHTML={{ __html: content.performCPR }} />
        </div>
      </section>

      {/* Handling Section */}
      <section id="handling" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.handlingTitle}</h2>

        <div className="bg-destructive/10 p-4 rounded-xl mb-6">
          <h3 className="font-bold mb-2">{content.safetyFirst}</h3>
          <p className="text-sm text-muted-foreground mb-2">{content.safetyDesc}</p>
          <ul className="text-sm text-muted-foreground">
            {content.safetyTips.map((tip, i) => <li key={i}>• {tip}</li>)}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {content.sizeCategories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                {i === 0 ? <Cat className="h-5 w-5 text-primary" /> : <Dog className="h-5 w-5 text-primary" />}
                {cat.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2"><strong>{cat.method}</strong></p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                {cat.steps.map((step, j) => <li key={j}>{step}</li>)}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Spinal Injury Section */}
      <section id="spinal" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.spinalTitle}
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{content.assumeSpinal}</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {content.spinalSigns.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.criticalRulesTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.criticalRules.map((rule, i) => <li key={i}>✅ {rule}</li>)}
          </ul>
          <p className="text-sm text-destructive mt-4 font-medium">{content.spinalWarning}</p>
        </div>
      </section>

      {/* Vehicle Safety */}
      <section id="vehicle" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          {content.vehicleTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Cat className="h-5 w-5 text-primary" />
              {content.forCatsTitle}
            </h3>
            <p className="text-muted-foreground mb-3" dangerouslySetInnerHTML={{ __html: content.forCatsDesc }} />
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.forCatsItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <Dog className="h-5 w-5 text-primary" />
              {content.forDogsTitle}
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              {content.forDogsItems.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
            <div className="mt-3 p-2 bg-destructive/10 rounded">
              <p className="text-xs text-destructive">{content.forDogsWarning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warmth Section */}
      <section id="warmth" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.warmthTitle}</h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{content.warmthWhy}</h3>
          <p className="text-muted-foreground mb-3">{content.warmthDesc}</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-primary">{content.warmthDo}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {content.warmthDoItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-destructive">{content.warmthDont}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {content.warmthDontItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section id="what-to-bring" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.whatToBringTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3">{content.essentialInfo}</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              {content.essentialItems.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold mb-3">{content.paymentTitle}</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              {content.paymentItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
            <p className="text-xs text-muted-foreground mt-3 italic">{content.paymentNote}</p>
          </div>
        </div>
      </section>

      {/* Minimizing Stress */}
      <section id="minimizing-stress" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.stressTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.forDogsStress}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.forDogsStressItems.map((item, i) => <li key={i}>✅ {item}</li>)}
            </ul>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.forCatsStress}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.forCatsStressItems.map((item, i) => <li key={i}>✅ {item}</li>)}
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl mt-4">
          <p className="text-sm font-medium" dangerouslySetInnerHTML={{ __html: content.stressAvoid }} />
        </div>
      </section>

      {/* Calling Ahead */}
      <section id="calling-ahead" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          {content.callingTitle}
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{content.whatToTell}</h3>
          <ol className="space-y-2 text-muted-foreground">
            {content.callScript.map((item, i) => (
              <li key={i}><strong>{item.label}</strong> {item.example}</li>
            ))}
          </ol>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">{content.whyHelpsTitle}</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {content.whyHelpsItems.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      </section>

      {/* Driving Tips */}
      <section id="driving" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.drivingTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">{content.driverTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {content.driverItems.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />)}
            </ul>
          </div>

          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">{content.driverDont}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {content.driverDontItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <CostCTA variant={18} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h2>
        <p className="text-muted-foreground mb-6">{content.conclusionDesc}</p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{content.actionChecklist}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.actionItems.map((item, i) => <li key={i}>✅ {item}</li>)}
          </ul>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

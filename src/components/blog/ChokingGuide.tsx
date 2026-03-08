import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Heart, Shield, DollarSign, Dog, Cat, Phone, CheckCircle2, Wind, Hand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getChokingGuideContent } from '@/lib/blogTranslations/chokingGuide';
import chokingHero from '@/assets/choking-hero.jpg';

export const ChokingGuide = () => {
  const { language } = useLanguage();
  const c = getChokingGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": c.meta.articleTitle,
    "description": c.meta.description,
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "step": [
      { "@type": "HowToStep", "text": "Assess: Complete or partial obstruction?" },
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
    "mainEntity": c.faqs.slice(0, 3).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const relatedArticles = c.relatedArticles.map((a, i) => ({
    ...a,
    icon: [Heart, AlertTriangle, Shield, Dog][i],
    color: i === 0 ? "text-destructive" : "text-primary"
  }));

  return (
    <ArticleLayout
      metaTitle={c.meta.title}
      metaDescription={c.meta.description}
      path={c.meta.path}
      language={language}
      category={c.meta.category}
      categoryColor="destructive"
      title={c.meta.articleTitle}
      date={c.meta.date}
      readTime={c.meta.readTime}
      reviewedBy={c.meta.reviewedBy}
      heroImage={chokingHero}
      heroImageAlt={c.meta.heroImageAlt}
      heroImageCaption={c.meta.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title={c.emergencyAlert.title}
        text={c.emergencyAlert.text}
        buttonText={c.emergencyAlert.buttonText}
        buttonLink="/blog/24-hour-vet-directory-malaysia"
      />

      <TLDRBox items={c.tldr} />
      <CostCTA variant={10} />
      <TableOfContents items={c.tocItems} />

      {/* Understanding Choking */}
      <section id="understanding" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wind className="h-6 w-6 text-destructive" />
          {c.understanding.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{c.understanding.complete.title}</h3>
            <p className="text-sm text-muted-foreground mb-3"><strong>{c.understanding.complete.timeline}</strong></p>
            <h4 className="font-semibold mb-2">{c.understanding.complete.signsTitle}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {c.understanding.complete.signs.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
            <p className="mt-3 text-sm font-semibold text-destructive">{c.understanding.complete.action}</p>
          </div>
          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">{c.understanding.partial.title}</h3>
            <p className="text-sm text-muted-foreground mb-3"><strong>{c.understanding.partial.warning}</strong></p>
            <h4 className="font-semibold mb-2">{c.understanding.partial.signsTitle}</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {c.understanding.partial.signs.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
            <p className="mt-3 text-sm font-semibold text-orange-600">{c.understanding.partial.action}</p>
          </div>
        </div>
      </section>

      {/* Recognizing Choking */}
      <section id="recognizing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {c.recognizing.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Dog className="h-5 w-5" /> {c.recognizing.dogTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {c.recognizing.dogSigns.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Cat className="h-5 w-5" /> {c.recognizing.catTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {c.recognizing.catSigns.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
            <p className="mt-4 text-sm text-destructive font-semibold">{c.recognizing.catNote}</p>
          </div>
        </div>
      </section>

      {/* Choking Hazards */}
      <section id="hazards" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.hazards.heading}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {c.hazards.categories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{cat.title}</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {cat.items.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Heimlich Maneuver */}
      <section id="heimlich" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Hand className="h-6 w-6 text-primary" />
          {c.heimlich.heading}
        </h2>
        <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-xl mb-6">
          <p className="font-semibold">{c.heimlich.importantNote}</p>
        </div>

        <div className="space-y-6">
          {c.heimlich.steps.map((step, index) => (
            <div key={index} className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
              {step.warning && <p className="text-muted-foreground ml-11 mb-2"><strong>{step.warning}</strong></p>}
              <ul className="text-muted-foreground ml-11 space-y-1">
                {step.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          ))}

          {/* Dog Heimlich */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</span>
              <h3 className="font-bold text-lg">{c.heimlich.dogHeimlich.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 ml-11">
              {[c.heimlich.dogHeimlich.small, c.heimlich.dogHeimlich.large].map((size, i) => (
                <div key={i} className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{size.title}</h4>
                  <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    {size.steps.map((s, j) => <li key={j}>{s}</li>)}
                  </ol>
                </div>
              ))}
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg mt-4 ml-11">
              <h4 className="font-semibold mb-2">{c.heimlich.dogHeimlich.unconscious.title}</h4>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                {c.heimlich.dogHeimlich.unconscious.steps.map((s, j) => <li key={j}>{s}</li>)}
              </ol>
            </div>
          </div>

          {/* Cat Heimlich */}
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">5</span>
              <h3 className="font-bold text-lg">{c.heimlich.catHeimlich.title}</h3>
            </div>
            <div className="ml-11">
              <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                {c.heimlich.catHeimlich.steps.map((s, j) => <li key={j}>{s}</li>)}
              </ol>
            </div>
          </div>

          {/* After Object Dislodged */}
          <div className="bg-primary/10 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">6</span>
              <h3 className="font-bold text-lg">{c.heimlich.afterDislodged.title}</h3>
            </div>
            <ul className="ml-11 space-y-1">
              {c.heimlich.afterDislodged.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CPR */}
      <section id="cpr" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          {c.cpr.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">{c.cpr.dogTitle}</h3>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                {c.cpr.dogSteps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-3">{c.cpr.catTitle}</h3>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                {c.cpr.catSteps.map((s, i) => <li key={i}>{s}</li>)}
              </ol>
            </div>
          </div>
          <p className="mt-4 text-sm font-semibold text-center">{c.cpr.continueNote}</p>
        </div>
      </section>

      {/* When to Go */}
      <section id="when-to-go" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.whenToGo.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{c.whenToGo.immediateTitle}</h3>
            <ul className="space-y-1 text-muted-foreground">
              {c.whenToGo.immediateItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">{c.whenToGo.callTitle}</h3>
            <ul className="space-y-1 text-muted-foreground">
              {c.whenToGo.callItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
            <p className="mt-3 text-sm font-semibold">{c.whenToGo.callNote}</p>
          </div>
        </div>
      </section>

      {/* Vet Treatment */}
      <section id="vet-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          {c.vetTreatment.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">{c.vetTreatment.proceduresTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {c.vetTreatment.procedures.map((p, i) => <li key={i}>• <strong>{p.split(':')[0]}:</strong>{p.split(':').slice(1).join(':')}</li>)}
          </ul>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">{c.vetTreatment.costTitle}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-2">{language === 'zh' ? '手术' : language === 'ms' ? 'Prosedur' : 'Procedure'}</th><th className="text-right py-2">{language === 'zh' ? '费用 (RM)' : language === 'ms' ? 'Kos (RM)' : 'Cost (RM)'}</th></tr></thead>
              <tbody className="text-muted-foreground">
                {c.vetTreatment.costItems.map((item, i) => (
                  <tr key={i} className="border-b"><td className="py-2">{item.procedure}</td><td className="text-right">{item.cost}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {c.prevention.heading}
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {c.prevention.categories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{cat.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {cat.items.map((item, j) => <li key={j}>{item.startsWith('✅') || item.startsWith('❌') ? item : `✅ ${item}`}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.prevention.checklistTitle}</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {c.prevention.checklistItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostCTA variant={11} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.faqsHeading}</h2>
        <Accordion type="single" collapsible className="w-full">
          {c.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
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

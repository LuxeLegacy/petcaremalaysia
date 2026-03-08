import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Thermometer, Clock, Heart, Shield, DollarSign, Dog, Cat, Sun, Droplets, Wind, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getHeatstrokeGuideContent } from '@/lib/blogTranslations/heatstrokeGuide';
import heatstrokeHero from '@/assets/heatstroke-hero.jpg';

export const HeatstrokeGuide = () => {
  const { language } = useLanguage();
  const c = getHeatstrokeGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.structuredData.headline,
    "description": c.structuredData.description,
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://petcaremalaysia.com${c.meta.path}` }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": c.faqs.slice(0, 4).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const relatedArticles = c.relatedArticles.map((a, i) => ({
    ...a,
    icon: [Dog, Cat, Heart, Shield][i],
    color: "text-primary"
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
      heroImage={heatstrokeHero}
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
      <CostCTA variant={8} />
      <TableOfContents items={c.tocItems} />

      {/* Why Malaysia's Climate Is Deadly */}
      <section id="why-deadly" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sun className="h-6 w-6 text-orange-500" />
          {c.whyDeadly.heading}
        </h2>
        <div className="bg-orange-500/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.whyDeadly.heatHumidityTitle}</h3>
          <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.whyDeadly.heatHumidityText.replace('INEFFECTIVE', '<strong>INEFFECTIVE</strong>') }} />
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{c.whyDeadly.climateTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {c.whyDeadly.climateStats.map((s, i) => (
                <li key={i}>• <strong>{s.label}</strong> {s.value}</li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{c.whyDeadly.resultTitle}</h3>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: c.whyDeadly.resultText.replace(/cannot cool themselves effectively/i, '<strong>cannot cool themselves effectively</strong>').replace(/15-20 minutes/g, '<strong>15-20 minutes</strong>') }} />
          </div>
        </div>
      </section>

      {/* What Is Heatstroke */}
      <section id="what-is-heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Thermometer className="h-6 w-6 text-destructive" />
          {c.whatIsHeatstroke.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{c.whatIsHeatstroke.definitionTitle}</h3>
          <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.whatIsHeatstroke.definitionText.replace('40.5°C (105°F)', '<strong>40.5°C (105°F)</strong>') }} />
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{c.whatIsHeatstroke.normalTitle}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {c.whatIsHeatstroke.normalItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-destructive">{c.whatIsHeatstroke.dangerTitle}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {c.whatIsHeatstroke.dangerItems.map((item, i) => <li key={i}>• <strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk Pets */}
      <section id="high-risk" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          {c.highRisk.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Dog className="h-5 w-5" /> {c.highRisk.dogsTitle}
            </h3>
            <div className="space-y-4">
              {c.highRisk.dogCategories.map((cat, i) => (
                <div key={i}>
                  <h4 className={`font-semibold mb-1 ${cat.color === 'destructive' ? 'text-destructive' : cat.color === 'orange' ? 'text-orange-500' : 'text-yellow-600'}`}>{cat.level}</h4>
                  <p className="text-sm text-muted-foreground">{cat.breeds}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Cat className="h-5 w-5" /> {c.highRisk.catsTitle}
            </h3>
            <div className="space-y-4 mb-6">
              {c.highRisk.catCategories.map((cat, i) => (
                <div key={i}>
                  <h4 className={`font-semibold mb-1 ${cat.color === 'destructive' ? 'text-destructive' : 'text-orange-500'}`}>{cat.level}</h4>
                  <p className="text-sm text-muted-foreground">{cat.breeds}</p>
                </div>
              ))}
            </div>
            <h3 className="font-bold text-lg mb-3">{c.highRisk.otherTitle}</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {c.highRisk.otherItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section id="symptoms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {c.symptoms.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-orange-600">{c.symptoms.earlyTitle}</h3>
            <ul className="space-y-3">
              {c.symptoms.earlyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 text-destructive">{c.symptoms.advancedTitle}</h3>
            <ul className="space-y-3">
              {c.symptoms.advancedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.symptoms.catTitle}</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
            {c.symptoms.catItems.map((item, i) => <li key={i}>• {item}</li>)}
          </ul>
        </div>
      </section>

      {/* Emergency Treatment */}
      <section id="emergency-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          {c.emergencyTreatment.heading}
        </h2>
        <div className="space-y-4 mb-8">
          {c.emergencyTreatment.steps.map((step, index) => (
            <div key={index} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">{c.emergencyTreatment.correctTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.emergencyTreatment.correctItems.map((item, i) => <li key={i}>✅ {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{c.emergencyTreatment.wrongTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.emergencyTreatment.wrongItems.map((item, i) => <li key={i}>❌ {item}</li>)}
            </ul>
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
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-muted-foreground">
              {c.vetTreatment.proceduresLeft.map((p, i) => <li key={i}>• <strong>{p.label}</strong> {p.value}</li>)}
            </ul>
            <ul className="space-y-2 text-muted-foreground">
              {c.vetTreatment.proceduresRight.map((p, i) => <li key={i}>• <strong>{p.label}</strong> {p.value}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">{c.vetTreatment.costTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-1 text-muted-foreground">
              {c.vetTreatment.costItems.slice(0, 2).map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
            <ul className="space-y-1 text-muted-foreground">
              {c.vetTreatment.costItems.slice(2).map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Prognosis */}
      <section id="prognosis" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.prognosis.heading}</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {c.prognosis.rates.map((r, i) => (
            <div key={i} className={`${i === 0 ? 'bg-primary/10' : i === 1 ? 'bg-orange-500/10' : 'bg-destructive/10'} p-4 rounded-xl text-center`}>
              <div className={`text-3xl font-bold mb-2 ${i === 0 ? 'text-primary' : i === 1 ? 'text-orange-500' : 'text-destructive'}`}>{r.rate}</div>
              <div className="text-sm font-semibold mb-1">{r.label}</div>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-xl">
          <p className="text-sm text-muted-foreground"><strong>{c.prognosis.longTermText}</strong></p>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {c.prevention.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{c.prevention.avoidHeatTitle}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {c.prevention.avoidHeatItems.map((item, i) => <li key={i}>✅ {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{c.prevention.neverCarTitle}</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {c.prevention.neverCarItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {c.prevention.essentials.map((e, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h4 className="font-semibold mb-2">{e.icon} {e.title}</h4>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
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

      <CostCTA variant={9} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.faqsHeading}</h2>
        <Accordion type="single" collapsible className="w-full">
          {c.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

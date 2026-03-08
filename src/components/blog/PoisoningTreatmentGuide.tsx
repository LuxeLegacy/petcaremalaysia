import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Skull, Pill, Clock, Heart, Shield, DollarSign, Phone, CheckCircle2, XCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getPoisoningTreatmentGuideContent } from '@/lib/blogTranslations/poisoningTreatmentGuide';
import poisoningTreatmentHero from '@/assets/poisoning-treatment-hero.jpg';

export const PoisoningTreatmentGuide = () => {
  const { language } = useLanguage();
  const c = getPoisoningTreatmentGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.meta.articleTitle,
    "description": c.meta.description,
    "image": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://petcaremalaysia.com${c.meta.path}` }
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
    icon: [Skull, Heart, Phone, Shield][i],
    color: i === 0 ? "text-destructive" : i === 1 ? "text-destructive" : "text-primary"
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
      heroImage={poisoningTreatmentHero}
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
      <CostCTA variant={15} />
      <TableOfContents items={c.tocItems} />

      {/* Understanding */}
      <section id="understanding" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Skull className="h-6 w-6 text-destructive" />
          {c.understanding.heading}
        </h2>
        <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: c.understanding.intro.replace(/8-12%/g, '<strong>8-12%</strong>') }} />
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {c.understanding.types.map((type, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{type.target}</p>
              <p className="text-sm text-muted-foreground">{type.examples}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rat Poison */}
      <section id="rat-poison" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.ratPoison.heading}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            {c.ratPoison.antidoteTitle}
          </h3>
          <p className="text-muted-foreground mb-3">{c.ratPoison.brandsNote}</p>
          <p className="text-muted-foreground"><strong>{c.ratPoison.mechanism}</strong></p>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.ratPoison.protocolTitle}</h3>
          <ol className="space-y-3 text-muted-foreground">
            {c.ratPoison.protocolSteps.map((step, i) => <li key={i}><strong>{step}</strong></li>)}
          </ol>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</strong> {c.ratPoison.cost}</p>
          <p className="text-sm"><strong>{language === 'zh' ? '预后' : language === 'ms' ? 'Prognosis' : 'Prognosis'}:</strong> {c.ratPoison.prognosis}</p>
        </div>
      </section>

      {/* Paracetamol */}
      <section id="paracetamol" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Pill className="h-6 w-6 text-destructive" />
          {c.paracetamol.heading}
        </h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            {c.paracetamol.antidoteTitle}
          </h3>
          <p className="text-muted-foreground mb-3"><strong>{c.paracetamol.catWarning}</strong></p>
          <p className="text-muted-foreground">{c.paracetamol.catDetail}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.paracetamol.symptomsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {c.paracetamol.symptoms.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</strong> {c.paracetamol.cost}</p>
          <p className="text-sm"><strong>{language === 'zh' ? '预后' : language === 'ms' ? 'Prognosis' : 'Prognosis'}:</strong> {c.paracetamol.prognosis}</p>
        </div>
      </section>

      {/* Chocolate */}
      <section id="chocolate" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.chocolate.heading}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            {c.chocolate.antidoteTitle}
          </h3>
          <p className="text-muted-foreground">{c.chocolate.treatmentNote}</p>
        </div>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>{c.chocolate.tableHeaders.map((h, i) => <th key={i} className="text-left p-3 font-semibold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {c.chocolate.tableRows.map((row, i) => (
                <tr key={i} className={`border-t border-border ${i % 2 ? 'bg-muted/20' : ''}`}>
                  {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</strong> {c.chocolate.cost}</p>
          <p className="text-sm"><strong>{language === 'zh' ? '预后' : language === 'ms' ? 'Prognosis' : 'Prognosis'}:</strong> {c.chocolate.prognosis}</p>
        </div>
      </section>

      {/* Antifreeze */}
      <section id="antifreeze" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.antifreeze.heading}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            {c.antifreeze.antidoteTitle}
          </h3>
          <p className="text-muted-foreground mb-3"><strong>{c.antifreeze.critical}</strong></p>
          <p className="text-muted-foreground">{c.antifreeze.attraction}</p>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.antifreeze.stagesTitle}</h3>
          <div className="space-y-2 text-muted-foreground">
            {c.antifreeze.stages.map((stage, i) => <p key={i}><strong>{stage}</strong></p>)}
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</strong> {c.antifreeze.cost}</p>
          <p className="text-sm"><strong>{language === 'zh' ? '预后' : language === 'ms' ? 'Prognosis' : 'Prognosis'}:</strong> {c.antifreeze.prognosis}</p>
        </div>
      </section>

      {/* Xylitol */}
      <section id="xylitol" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.xylitol.heading}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            {c.xylitol.antidoteTitle}
          </h3>
          <p className="text-muted-foreground mb-3">{c.xylitol.foundIn}</p>
          <p className="text-muted-foreground"><strong>{c.xylitol.danger}</strong></p>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</strong> {c.xylitol.cost}</p>
          <p className="text-sm"><strong>{language === 'zh' ? '治疗' : language === 'ms' ? 'Rawatan' : 'Treatment'}:</strong> {c.xylitol.treatment}</p>
        </div>
      </section>

      {/* Decontamination */}
      <section id="decontamination" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {c.decontamination.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {c.decontamination.safeTitle}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.decontamination.safeItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              {c.decontamination.neverTitle}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.decontamination.neverItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.decontamination.charcoalTitle}</h3>
          <p className="text-muted-foreground mb-3">{c.decontamination.charcoalText}</p>
          <p className="text-muted-foreground"><strong>{c.decontamination.charcoalNotEffective}</strong></p>
        </div>
      </section>

      {/* Home First Aid */}
      <section id="home-first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.homeFirstAid.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">{c.homeFirstAid.doTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.homeFirstAid.doItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold mb-3">{c.homeFirstAid.dontTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.homeFirstAid.dontItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.prevention.heading}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {c.prevention.areas.map((area, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{area.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {area.items.map((item, j) => <li key={j}>✅ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          {c.prevention.seeMore} <InternalLink to="/blog/common-pet-poisons-malaysia">{c.prevention.seeMoreLink}</InternalLink>.
        </p>
      </section>

      <CostCTA variant={16} />

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

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.conclusion.heading}</h2>
        <p className="text-muted-foreground mb-6">{c.conclusion.text}</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.conclusion.checklistTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {c.conclusion.checklistItems.map((item, i) => <li key={i}>✅ {item}</li>)}
          </ul>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

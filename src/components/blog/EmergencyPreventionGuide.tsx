import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Shield, Sun, Home, DollarSign } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import emergencyPreventionHero from '@/assets/emergency-prevention-hero.jpg';
import { getEmergencyPreventionGuideContent } from '@/lib/blogTranslations/emergencyPreventionGuide';

export const EmergencyPreventionGuide = () => {
  const { language } = useLanguage();
  const content = getEmergencyPreventionGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.metaDescription,
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
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
    { to: "/blog/pet-heatstroke-malaysia", title: content.relatedArticles[0].title, description: content.relatedArticles[0].description, icon: Sun, color: "text-destructive" },
    { to: "/blog/common-pet-poisons-malaysia", title: content.relatedArticles[1].title, description: content.relatedArticles[1].description, icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-insurance-malaysia", title: content.relatedArticles[2].title, description: content.relatedArticles[2].description, icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-emergency-prevention-malaysia"
      language={language}
      category={content.category}
      categoryColor="primary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage={emergencyPreventionHero}
      heroImageAlt={content.heroImageAlt}
      heroImageCaption={content.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={content.tldr} />

      <CostCTA variant={1} />
      <TableOfContents items={content.tocItems} />

      <section id="climate" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Sun className="h-6 w-6 text-orange-500" />
          {content.climateTitle}
        </h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.climateIntro }} />
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.preventionMeasures}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.preventionItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.costComparison}</h3>
            <p className="text-sm text-muted-foreground">{content.preventionCost}</p>
            <p className="text-sm text-muted-foreground">{content.emergencyCost}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          {content.learnMoreHeatstroke} <InternalLink to="/blog/pet-heatstroke-malaysia">{content.heatstrokeGuideLink}</InternalLink>.
        </p>
      </section>

      <section id="poison-proof" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.poisonTitle}
        </h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.poisonIntro }} />
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {content.poisonCategories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{cat.emoji} {cat.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {cat.items.map((item, j) => <li key={j}>✅ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>{content.poisonCost}</strong> {content.poisonCostDesc}</p>
        </div>
      </section>

      <section id="secure-property" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          {content.secureTitle}
        </h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.secureIntro }} />
        <div className="grid md:grid-cols-2 gap-4">
          {content.secureCategories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{cat.emoji} {cat.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {cat.items.map((item, j) => <li key={j}>✅ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="windows" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.windowsTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.windowsIntro }} />
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.windowsPrevention}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.windowsItems.map((item, i) => <li key={i}>✅ {item}</li>)}
          </ul>
          <p className="text-sm mt-4"><strong>{content.windowsCost}</strong> {content.windowsCostDesc}</p>
        </div>
      </section>

      <section id="toys" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.toysTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.toysIntro }} />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.safeToys}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.safeToysItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.neverGive}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.neverGiveItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="prevention-roi" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          {content.roiTitle}
        </h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3">{content.roiTableHeaders[0]}</th>
                <th className="text-right p-3">{content.roiTableHeaders[1]}</th>
              </tr>
            </thead>
            <tbody>
              {content.roiTableRows.map((row, i) => (
                <tr key={i} className={`border-t ${i % 2 === 1 ? 'bg-muted/20' : ''}`}>
                  <td className="p-3">{row.type}</td>
                  <td className="text-right p-3">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <p className="font-bold text-lg mb-2">{content.roiInsightTitle}</p>
          <p className="text-muted-foreground">{content.roiInsightDesc}</p>
        </div>
      </section>

      <CostCTA variant={2} />

      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent><p className="text-muted-foreground">{faq.a}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.startTodayTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.startTodayItems.map((item, i) => <li key={i}>✅ {item}</li>)}
          </ul>
          <p className="text-sm mt-4 italic">{content.finalNote}</p>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

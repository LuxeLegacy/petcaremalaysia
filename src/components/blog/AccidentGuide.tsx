import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Heart, Shield, DollarSign, Car, Phone, CheckCircle2, Activity, Building } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import accidentHero from '@/assets/accident-hero.jpg';
import { getAccidentGuideContent } from '@/lib/blogTranslations/accidentGuide';

export const AccidentGuide = () => {
  const { language } = useLanguage();
  const content = getAccidentGuideContent(language);

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
    "mainEntity": content.faqs.slice(0, 3).map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const relatedArticles = [
    { to: "/blog/pet-emergency-transport-malaysia", title: content.relatedArticles[0].title, description: content.relatedArticles[0].description, icon: Heart, color: "text-primary" },
    { to: "/blog/post-emergency-pet-care-malaysia", title: content.relatedArticles[1].title, description: content.relatedArticles[1].description, icon: AlertTriangle, color: "text-primary" },
    { to: "/blog/pet-insurance-malaysia", title: content.relatedArticles[2].title, description: content.relatedArticles[2].description, icon: Shield, color: "text-primary" },
    { to: "/blog/pet-emergency-prevention-malaysia", title: content.relatedArticles[3].title, description: content.relatedArticles[3].description, icon: DollarSign, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-accident-emergency-malaysia"
      language={language}
      category={content.category}
      categoryColor="destructive"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage={accidentHero}
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
      <CostCTA variant={12} />
      <TableOfContents items={content.tocItems} />

      {/* Types of Accidents */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Car className="h-6 w-6 text-destructive" />
          {content.typesTitle}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {content.accidentTypes.map((type, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                {type.icon === "Building" ? <Building className="h-5 w-5" /> : <span>{type.emoji}</span>}
                {type.title}
              </h3>
              {type.context && (
                <p className="text-muted-foreground text-sm mb-3">
                  <strong>{type.context}</strong> {type.contextDesc}
                </p>
              )}
              <ul className="text-sm text-muted-foreground space-y-1">
                {type.items.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Hidden Injuries */}
      <section id="hidden-injuries" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-orange-500" />
          {content.hiddenTitle}
        </h2>

        <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{content.hiddenChallenge}</h3>
          <p className="text-muted-foreground">{content.hiddenDesc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {content.stats.map((stat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl text-center">
              <div className={`text-3xl font-bold mb-2 ${i === 0 ? 'text-destructive' : i === 1 ? 'text-orange-500' : 'text-primary'}`}>{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABC Assessment */}
      <section id="abc-assessment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" />
          {content.abcTitle}
        </h2>

        <div className="space-y-4">
          {content.abcSteps.map((step, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3 text-primary">{step.letter} - {step.title}</h3>
              <p className="text-muted-foreground mb-3">{step.desc}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">{i === 1 ? content.normalLabel : content.checkLabel}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {step.checkFor.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
                <div className="bg-destructive/10 p-3 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">{step.emergency}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {step.emergencyActions.map((item, j) => <li key={j}>• {item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shock */}
      <section id="shock" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.shockTitle}
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{content.shockWhat}</h3>
          <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.shockDesc }} />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{content.shockSymptomsLabel}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {content.shockSymptoms.map((s, i) => <li key={i}>• {s}</li>)}
              </ul>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{content.shockActionLabel}</h4>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                {content.shockActions.map((a, i) => <li key={i}>{a}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* First Aid Protocol */}
      <section id="first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          {content.firstAidTitle}
        </h2>

        <div className="space-y-4">
          {content.firstAidSteps.map((item) => (
            <div key={item.step} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{item.step}</span>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What NOT to Do */}
      <section id="what-not-to-do" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.whatNotTitle}</h2>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-4">
            {content.whatNotItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-destructive font-bold">❌</span>
                <div>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Go */}
      <section id="when-to-go" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.whenToGoTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-destructive">{content.goImmediatelyTitle}</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              {content.goImmediatelyItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div className="bg-orange-500/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-orange-600">{content.urgentTitle}</h3>
            <ul className="space-y-1 text-muted-foreground text-sm">
              {content.urgentItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
            <p className="mt-4 text-sm font-semibold">{content.whenInDoubt}</p>
          </div>
        </div>
      </section>

      {/* Vet Treatment */}
      <section id="vet-treatment" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          {content.vetTreatmentTitle}
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">{content.expectTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">{content.stabilizationTitle}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {content.stabilizationItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{content.diagnosticTitle}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {content.diagnosticItems.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4">{content.costEstimatesTitle}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">{content.costTableHeaders[0]}</th>
                  <th className="text-right py-2">{content.costTableHeaders[1]}</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {content.costTableRows.map((row, i) => (
                  <tr key={i} className={i < content.costTableRows.length - 1 ? "border-b" : ""}>
                    <td className="py-2">{row.type}</td>
                    <td className="text-right">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">{content.depositNote}</p>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {content.preventionTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {content.preventionCategories.map((cat, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-2">{cat.emoji} {cat.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {cat.items.map((item, j) => <li key={j}>✅ {item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{content.criticalTakeawaysTitle}</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {content.criticalTakeaways.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CostCTA variant={13} />

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

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

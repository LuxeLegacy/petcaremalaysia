import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Shield, DollarSign, Phone, CheckCircle2, CreditCard, Calculator, FileText, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getInsuranceGuideContent } from '@/lib/blogTranslations/insuranceGuide';
import insuranceHero from '@/assets/insurance-hero.jpg';

export const InsuranceGuide = () => {
  const { language } = useLanguage();
  const c = getInsuranceGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": c.meta.articleTitle,
    "description": c.meta.description,
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
    "mainEntity": c.faqs.slice(0, 3).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const relatedArticles = c.relatedArticles.map((a, i) => ({
    ...a,
    icon: [DollarSign, AlertTriangle, Shield, Phone][i],
    color: "text-primary"
  }));

  return (
    <ArticleLayout
      metaTitle={c.meta.title}
      metaDescription={c.meta.description}
      path={c.meta.path}
      language={language}
      category={c.meta.category}
      categoryColor="primary"
      title={c.meta.articleTitle}
      date={c.meta.date}
      readTime={c.meta.readTime}
      reviewedBy={c.meta.reviewedBy}
      heroImage={insuranceHero}
      heroImageAlt={c.meta.heroImageAlt}
      heroImageCaption={c.meta.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
        <div className="flex items-start gap-3">
          <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-bold text-lg mb-2">{c.financialProtection.title}</h2>
            <p className="text-muted-foreground">{c.financialProtection.text}</p>
          </div>
        </div>
      </div>

      <TLDRBox items={c.tldr} />
      <CostCTA variant={14} />
      <TableOfContents items={c.tocItems} />

      {/* What Is Pet Insurance */}
      <section id="what-is" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {c.whatIs.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.whatIs.definitionTitle}</h3>
          <p className="text-muted-foreground mb-4">{c.whatIs.definitionText}</p>
          <h3 className="font-bold text-lg mb-3">{c.whatIs.howItWorksTitle}</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {c.whatIs.steps.map((item) => (
              <div key={item.step} className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">{item.step}</div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-500/10 p-4 rounded-xl">
          <p className="text-sm text-muted-foreground"><strong>{c.whatIs.note}</strong></p>
        </div>
      </section>

      {/* Types */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.types.heading}</h2>
        <div className="space-y-6">
          {c.types.plans.map((plan, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {plan.title}
                  {plan.recommended && <Star className="h-5 w-5 text-yellow-500" />}
                </h3>
                <span className={`px-3 py-1 ${plan.recommended ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'} text-sm rounded-full`}>{plan.price}</span>
              </div>
              {plan.covered && plan.notCovered && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">✅ {language === 'zh' ? '覆盖' : language === 'ms' ? 'Dilindungi' : 'Covered'}:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {plan.covered.map((item, j) => <li key={j}>• {item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">❌ {language === 'zh' ? '不覆盖' : language === 'ms' ? 'Tidak Dilindungi' : 'NOT Covered'}:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {plan.notCovered.map((item, j) => <li key={j}>• {item}</li>)}
                    </ul>
                  </div>
                </div>
              )}
              {plan.items && (
                <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-2">
                  {plan.items.map((item, j) => <li key={j}>• {item}</li>)}
                </ul>
              )}
              <p className="text-sm mt-4"><strong>{language === 'zh' ? '最适合' : language === 'ms' ? 'Terbaik Untuk' : 'Best For'}:</strong> {plan.bestFor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.providers.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {c.providers.list.map((provider, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl relative">
              {provider.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">{provider.badge}</span>
              )}
              <h3 className="font-bold text-lg mb-3">{provider.name}</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between"><span className="text-muted-foreground">{language === 'zh' ? '保障' : language === 'ms' ? 'Perlindungan' : 'Coverage'}:</span><span>{provider.coverage}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">{language === 'zh' ? '年度限额' : language === 'ms' ? 'Had Tahunan' : 'Annual Limit'}:</span><span>{provider.limit}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">{language === 'zh' ? '报销' : language === 'ms' ? 'Bayaran Balik' : 'Reimbursement'}:</span><span>{provider.rate}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">{language === 'zh' ? '费用' : language === 'ms' ? 'Kos' : 'Cost'}:</span><span className="font-semibold text-primary">{provider.cost}</span></div>
              </div>
              <ul className="space-y-1">
                {provider.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">{c.providers.disclaimer}</p>
      </section>

      {/* Key Terms */}
      <section id="terms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          {c.terms.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {c.terms.items.map((item, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-1">{item.term}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
              <p className="text-xs text-primary">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Covered */}
      <section id="covered" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.covered.heading}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">{c.covered.accidents.title}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {c.covered.accidents.items.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">{c.covered.illnesses.title}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {c.covered.illnesses.items.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl mt-6">
          <h3 className="font-bold text-lg mb-3">{c.covered.diagnosticTitle}</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            {c.covered.diagnosticItems.map((col, i) => (
              <ul key={i} className="space-y-1">
                {col.map((item, j) => <li key={j}>• {item}</li>)}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* What's NOT Covered */}
      <section id="not-covered" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.notCovered.heading}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-destructive">{c.notCovered.common.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {c.notCovered.common.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-destructive">{c.notCovered.also.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {c.notCovered.also.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section id="cost-analysis" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          {c.costAnalysis.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">{c.costAnalysis.exampleTitle}</h3>
          <p className="text-muted-foreground mb-4">{c.costAnalysis.exampleDesc}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h4 className="font-semibold text-destructive mb-2">{c.costAnalysis.without.title}</h4>
              <p className="text-2xl font-bold">{c.costAnalysis.without.amount}</p>
              <p className="text-sm text-muted-foreground">{c.costAnalysis.without.desc}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{c.costAnalysis.with.title}</h4>
              <p className="text-2xl font-bold">{c.costAnalysis.with.amount}</p>
              <p className="text-sm text-muted-foreground">{c.costAnalysis.with.desc}</p>
              <p className="text-xs text-primary mt-1">{c.costAnalysis.with.insurance}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">{c.costAnalysis.worthIt.title}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {c.costAnalysis.worthIt.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{c.costAnalysis.notWorthIt.title}</h3>
            <ul className="space-y-2 text-muted-foreground">
              {c.costAnalysis.notWorthIt.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mt-6">
          <p className="font-semibold"><TrendingUp className="h-4 w-4 inline mr-2" />{c.costAnalysis.roi}</p>
        </div>
      </section>

      {/* How to Choose */}
      <section id="how-to-choose" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.howToChoose.heading}</h2>
        <div className="space-y-4">
          {c.howToChoose.steps.map((item) => (
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

      {/* Claims */}
      <section id="claims" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          {c.claims.heading}
        </h2>
        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="grid md:grid-cols-5 gap-4">
            {c.claims.steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">{item.step}</div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center"><strong>{c.claims.tip}</strong></p>
        </div>
      </section>

      <CostCTA variant={15} />

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

      {/* Final CTA */}
      <div className="bg-primary/10 p-8 rounded-xl text-center mb-12">
        <h3 className="text-xl font-bold mb-2">{c.finalCta.title}</h3>
        <p className="text-muted-foreground mb-4">{c.finalCta.text}</p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          {c.finalCta.providers.map((p, i) => (
            <span key={i} className="px-3 py-1 bg-background rounded-full">{p}</span>
          ))}
        </div>
      </div>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

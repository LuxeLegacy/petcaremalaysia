import { useLanguage } from '@/contexts/LanguageContext';
import { DollarSign, CreditCard, Shield, Building2, PiggyBank, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getTreatmentCostsGuideContent } from '@/lib/blogTranslations/treatmentCostsGuide';

const PriceTable = ({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3">{title}</h3>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
        <thead className="bg-muted/50">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="text-left p-3 font-semibold">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-t border-border ${i % 2 === 1 ? 'bg-muted/20' : ''}`}>
              {row.map((cell, j) => (
                <td key={j} className="p-3">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ScenarioCard = ({ title, items, total }: { title: string; items: { name: string; cost: string }[]; total: string }) => (
  <div className="bg-card border border-border p-4 rounded-xl">
    <h4 className="font-semibold mb-3 text-primary">{title}</h4>
    <ul className="text-sm space-y-1 mb-3">
      {items.map((item, i) => (
        <li key={i} className="flex justify-between">
          <span className="text-muted-foreground">{item.name}</span>
          <span>{item.cost}</span>
        </li>
      ))}
    </ul>
    <div className="pt-2 border-t border-border flex justify-between font-bold">
      <span>TOTAL:</span>
      <span className="text-primary">{total}</span>
    </div>
  </div>
);

export const TreatmentCostsGuide = () => {
  const { language } = useLanguage();
  const content = getTreatmentCostsGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.metaTitle,
    "description": content.metaDescription,
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.slice(0, 3).map((f: any) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-emergency-costs-malaysia"
      language={language}
      category={content.category}
      categoryColor="secondary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
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
      <CostCTA variant={13} />
      <TableOfContents items={content.tocItems} />

      {/* Why Costs More */}
      <section id="why-costs-more" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          {content.whyCostsMoreTitle}
        </h2>
        <p className="text-muted-foreground mb-4">{content.whyCostsMoreIntro}</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {content.whyCostsMoreReasons.map((r: any, i: number) => (
            <div key={i} className="bg-muted/50 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Fees */}
      <section id="consultation-fees" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.consultationTitle}</h2>
        <PriceTable title={content.consultationTableTitle} headers={content.consultationHeaders} rows={content.consultationRows} />
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.includedTitle}</h4>
            <ul className="text-sm space-y-1">{content.includedItems.map((item: string, i: number) => <li key={i}>• {item}</li>)}</ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.notIncludedTitle}</h4>
            <ul className="text-sm space-y-1">{content.notIncludedItems.map((item: string, i: number) => <li key={i}>• {item}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Procedures & Costs */}
      <section id="procedures-costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.proceduresTitle}</h2>
        <PriceTable title={content.diagnosticTableTitle} headers={content.diagnosticHeaders} rows={content.diagnosticRows} />
        <PriceTable title={content.treatmentTableTitle} headers={content.treatmentHeaders} rows={content.treatmentRows} />
        <PriceTable title={content.surgeryTableTitle} headers={content.surgeryHeaders} rows={content.surgeryRows} />
        <PriceTable title={content.hospitalizationTableTitle} headers={content.hospitalizationHeaders} rows={content.hospitalizationRows} />
      </section>

      {/* Real Scenarios */}
      <section id="real-scenarios" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.scenariosTitle}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {content.scenarios.map((s: any, i: number) => (
            <ScenarioCard key={i} title={s.title} items={s.items} total={s.total} />
          ))}
        </div>
      </section>

      {/* Hidden Costs */}
      <section id="hidden-costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          {content.hiddenCostsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">{content.additionalFeesTitle}</h3>
            <ul className="text-sm space-y-2">
              {content.additionalFees.map((f: any, i: number) => (
                <li key={i} className="flex justify-between"><span>{f.name}</span><span>{f.value}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <PriceTable title={content.depositTableTitle} headers={content.depositHeaders} rows={content.depositRows} />
          </div>
        </div>
        <div className="bg-primary/10 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">{content.depositPoliciesTitle}</h4>
          <ul className="text-sm space-y-1">{content.depositPolicies.map((p: string, i: number) => <li key={i}>• {p}</li>)}</ul>
        </div>
      </section>

      {/* Payment Options */}
      <section id="payment-options" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          {content.paymentTitle}
        </h2>
        <div className="space-y-4">
          {content.paymentOptions.map((opt: any, i: number) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-semibold mb-2">{opt.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {opt.items.map((item: string, j: number) => <li key={j}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pet Insurance */}
      <section id="pet-insurance" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {content.insuranceTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">{content.insuranceProvidersTitle}</h3>
            <ul className="text-sm space-y-1">{content.insuranceProviders.map((p: string, i: number) => <li key={i}>• {p}</li>)}</ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">{content.insuranceCoverageTitle}</h3>
            <ul className="text-sm space-y-1">{content.insuranceCoverage.map((c: string, i: number) => <li key={i}>• {c}</li>)}</ul>
          </div>
        </div>
        <PriceTable title={content.premiumsTitle} headers={content.premiumHeaders} rows={content.premiumRows} />
        <div className="bg-destructive/10 p-4 rounded-xl mb-4">
          <h4 className="font-semibold mb-2">{content.limitationsTitle}</h4>
          <ul className="text-sm space-y-1">{content.limitations.map((l: string, i: number) => <li key={i}>• {l}</li>)}</ul>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl">
          <p className="text-sm"><strong>Worth It?</strong> {content.insuranceWorthIt}</p>
        </div>
      </section>

      {/* Government Vets */}
      <section id="government-vets" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Building2 className="h-6 w-6 text-muted-foreground" />
          {content.govVetTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">{content.govVetCostsTitle}</h3>
            <ul className="text-sm space-y-1">{content.govVetCosts.map((c: string, i: number) => <li key={i}>• {c}</li>)}</ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-3">{content.govVetLimitationsTitle}</h3>
            <ul className="text-sm space-y-1">{content.govVetLimitations.map((l: string, i: number) => <li key={i}>• {l}</li>)}</ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4"><strong>{content.govVetWhenToUse}</strong></p>
      </section>

      {/* Financial Preparation */}
      <section id="financial-prep" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <PiggyBank className="h-6 w-6 text-primary" />
          {content.financialPrepTitle}
        </h2>
        <div className="space-y-4">
          {content.financialStrategies.map((s: any, i: number) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {s.items.map((item: string, j: number) => <li key={j}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.faqsTitle}</h2>
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq: any, i: number) => (
            <AccordionItem key={i} value={`faq-${i + 1}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h2>
        <p className="text-muted-foreground mb-4">{content.conclusionText}</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.conclusionTakeawaysTitle}</h3>
          <ul className="space-y-2">
            {content.conclusionTakeaways.map((t: string, i: number) => <li key={i}>✓ {t}</li>)}
          </ul>
        </div>
      </section>

      <CostCTA variant={14} />
      <RelatedArticles articles={content.relatedArticles} />
    </ArticleLayout>
  );
};

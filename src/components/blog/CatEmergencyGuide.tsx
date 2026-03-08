import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, DollarSign, Clock, CheckCircle2, Phone, Cat, Eye } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getCatEmergencyGuideContent } from '@/lib/blogTranslations/catEmergencyGuide';

const SymptomGrid = ({ items }: { items: string[] }) => (
  <div className="grid md:grid-cols-2 gap-3">
    {items.map((item, i) => (
      <div key={i} className="flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
        <span className="text-sm">{item}</span>
      </div>
    ))}
  </div>
);

export const CatEmergencyGuide = () => {
  const { language } = useLanguage();
  const c = getCatEmergencyGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": c.metaTitle, "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01", "dateModified": "2025-01-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://petcaremalaysia.com/blog/cat-emergency-guide-malaysia" }
  };

  const faqStructuredData = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": c.faqs.slice(0, 6).map((f: any) => ({
      "@type": "Question", "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <ArticleLayout
      metaTitle={c.metaTitle} metaDescription={c.metaDescription}
      path="/blog/cat-emergency-guide-malaysia" language={language}
      category={c.category} categoryColor="destructive"
      title={c.title} date={c.date} readTime={c.readTime} reviewedBy={c.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=600&fit=crop"
      heroImageAlt={c.heroImageAlt} heroImageCaption={c.heroImageCaption}
      structuredData={structuredData} faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox title={c.emergencyTitle} text={c.emergencyText} buttonText={c.emergencyButton} buttonLink="/blog/24-hour-vet-directory-malaysia" />
      <TLDRBox items={c.tldr} />
      <CostCTA variant={9} />
      <TableOfContents items={c.tocItems} />

      {/* Hidden Illness */}
      <section id="hidden-illness" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Cat className="h-6 w-6 text-primary" />{c.hiddenIllnessTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.hiddenIllnessP1 }} />
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.disguiseTitle}</h3>
          <p className="text-muted-foreground mb-3"><strong>Evolutionary Biology:</strong> {c.disguiseIntro}</p>
          <ul className="space-y-2 text-muted-foreground">{c.disguisePoints.map((p: string, i: number) => <li key={i}>• {p}</li>)}</ul>
        </div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.differencesTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.differences.map((d: string, i: number) => <li key={i} dangerouslySetInnerHTML={{ __html: `• ${d}` }} />)}</ul>
        </div>
        <div className="bg-primary/5 p-6 rounded-xl">
          <h3 className="font-semibold mb-3">{c.knowNormalTitle}</h3>
          <p className="text-muted-foreground mb-3">{c.knowNormalIntro}</p>
          <ul className="space-y-1 text-muted-foreground text-sm">{c.knowNormalItems.map((item: string, i: number) => <li key={i}>• {item}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-3 italic"><strong>Warning Sign:</strong> {c.knowNormalWarning}</p>
        </div>
      </section>

      {/* Urinary Blockage */}
      <section id="urinary-blockage" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" />{c.urinaryTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.urinaryIntro }} />
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.urinaryWhyTitle}</h3>
          <p className="text-muted-foreground mb-3">{c.urinaryWhyIntro}</p>
          <ul className="space-y-1 text-muted-foreground text-sm">{c.urinaryWhyItems.map((item: string, i: number) => <li key={i}>• {item}</li>)}</ul>
        </div>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">🚨 Critical Warning Signs</h3><SymptomGrid items={c.urinarySymptoms} /></div>
        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.urinaryActionTitle}</h3>
          <p className="text-muted-foreground">{c.urinaryActionText}</p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.urinaryPreventionTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.urinaryPrevention.map((p: string, i: number) => <li key={i}>✅ {p}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.urinaryCost}<br/><strong>Recovery:</strong> {c.urinaryRecovery}</p>
        </div>
      </section>

      {/* Breathing */}
      <section id="breathing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" />{c.breathingTitle}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">⚠️ Critical Rule for Cats</h3><p className="text-muted-foreground font-bold">{c.breathingRule}</p></div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">Warning Signs</h3><SymptomGrid items={c.breathingSigns} /></div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.breathingActionTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.breathingActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.breathingCost}</p>
        </div>
      </section>

      {/* Poisoning */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Shield className="h-6 w-6 text-destructive" />{c.poisoningTitle}</h2>
        <p className="text-muted-foreground mb-4"><strong>Important:</strong> {c.poisoningIntro}</p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {c.poisonCategories.map((cat: any, i: number) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 text-destructive">{cat.title}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">{cat.items.map((item: string, j: number) => <li key={j}>• {item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.poisoningActionTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.poisoningActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.poisoningCost}</p>
        </div>
        <p className="text-muted-foreground mt-4">{c.poisoningLinkText} <InternalLink to="/blog/common-pet-poisons-malaysia">{c.poisoningLinkLabel}</InternalLink>.</p>
      </section>

      {/* High-Rise */}
      <section id="high-rise" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.highRiseTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.highRiseIntro}</p>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.highRiseInjuriesTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.highRiseInjuries.map((inj: string, i: number) => <li key={i}>• {inj}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-3 italic"><strong>CRITICAL:</strong> {c.highRiseCritical}</p>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.highRisePreventionTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.highRisePrevention.map((p: string, i: number) => <li key={i}>✅ {p}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.highRiseCost}</p>
        </div>
      </section>

      {/* Not Eating */}
      <section id="not-eating" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.notEatingTitle}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">⚠️ Unique Cat Emergency</h3><p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: c.notEatingWarning }} /></div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Warning Signs</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.notEatingSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <p className="text-muted-foreground mb-2"><strong>Immediate Action:</strong> {c.notEatingAction}</p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.notEatingCost}</p>
      </section>

      {/* Trauma */}
      <section id="trauma" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.traumaTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.traumaIntro}</p>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">ALWAYS see emergency vet if:</h3>
          <ul className="space-y-2 text-muted-foreground">{c.traumaSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.traumaCost}</p>
        </div>
      </section>

      {/* Seizures */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.seizuresTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.seizureCausesTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.seizureCauses.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.seizureActionsTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.seizureActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
        </div>
      </section>

      {/* Eye Injuries */}
      <section id="eye-injuries" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Eye className="h-6 w-6 text-primary" />{c.eyeTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.eyeCommonTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.eyeCommon.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Warning Signs</h3>
          <ul className="space-y-2 text-muted-foreground">{c.eyeSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Action:</strong> {c.eyeAction}<br/><strong>Cost:</strong> {c.eyeCost}</p>
        </div>
      </section>

      {/* Heatstroke */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.heatstrokeTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.heatstrokeIntro}</p>
        <ul className="space-y-2 text-muted-foreground mb-6">{c.heatstrokeRisks.map((r: string, i: number) => <li key={i}>• {r}</li>)}</ul>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptoms</h3>
          <ul className="space-y-2 text-muted-foreground">{c.heatstrokeSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <p className="text-muted-foreground mb-2"><strong>Action:</strong> {c.heatstrokeAction}</p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.heatstrokeCost}</p>
      </section>

      {/* Vomiting */}
      <section id="vomiting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.vomitingTitle}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Emergency if:</h3>
          <ul className="space-y-2 text-muted-foreground">{c.vomitingSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.vomitingCost}</p>
        </div>
      </section>

      {/* Warning Signs */}
      <section id="warning-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.warningSignsTitle}</h2>
        <div className="bg-primary/5 p-6 rounded-xl">
          <p className="text-muted-foreground mb-3">{c.warningSignsIntro}</p>
          <ul className="space-y-2 text-muted-foreground">{c.warningSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
      </section>

      {/* First Aid Kit */}
      <section id="first-aid-kit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Heart className="h-6 w-6 text-primary" />{c.firstAidTitle}</h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
            {c.firstAidItems.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {item}</li>
            ))}
          </ul>
        </div>
        <p className="text-muted-foreground mt-4">{c.firstAidLinkText} <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">{c.firstAidLinkLabel}</InternalLink>.</p>
      </section>

      {/* Breed Risks */}
      <section id="breed-risks" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.breedRisksTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {c.breedRisks.map((breed: any, i: number) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">{breed.title}</h3>
              {breed.subtitle && <p className="text-sm text-muted-foreground mb-2">{breed.subtitle}</p>}
              <ul className="space-y-1 text-muted-foreground text-sm">{breed.risks.map((r: string, j: number) => <li key={j}>• {r}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      {/* Costs */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><DollarSign className="h-6 w-6 text-primary" />{c.costsTitle}</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-border">{c.costHeaders.map((h: string, i: number) => <th key={i} className={`${i === 0 ? 'text-left' : 'text-right'} py-3 px-4 font-semibold`}>{h}</th>)}</tr></thead>
            <tbody className="text-muted-foreground">
              {c.costRows.map((row: string[], i: number) => (
                <tr key={i} className="border-b border-border/50"><td className="py-3 px-4">{row[0]}</td><td className="text-right py-3 px-4">{row[1]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">{c.costLinkText} <InternalLink to="/blog/pet-emergency-costs-malaysia">{c.costLinkLabel}</InternalLink>.</p>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{c.faqsTitle}</h2>
        <Accordion type="single" collapsible className="w-full">
          {c.faqs.map((faq: any, i: number) => (
            <AccordionItem key={i} value={`faq-${i + 1}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent><p className="text-muted-foreground">{faq.a}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.conclusionTitle}</h2>
        <p className="text-muted-foreground mb-6">{c.conclusionText}</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.actionChecklistTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.actionChecklist.map((item: string, i: number) => <li key={i}>✅ {item}</li>)}</ul>
        </div>
        <p className="text-muted-foreground mt-6 italic">{c.finalQuote}</p>
      </section>

      <CostCTA variant={10} />
      <RelatedArticles articles={c.relatedArticles} />
    </ArticleLayout>
  );
};

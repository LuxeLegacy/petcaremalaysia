import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, DollarSign, Clock, CheckCircle2, Phone, Thermometer, Dog } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getDogEmergencyGuideContent } from '@/lib/blogTranslations/dogEmergencyGuide';

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

export const DogEmergencyGuide = () => {
  const { language } = useLanguage();
  const c = getDogEmergencyGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": c.metaTitle, "description": c.metaDescription,
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01", "dateModified": "2025-01-01",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://petcaremalaysia.com/blog/dog-emergency-guide-malaysia" }
  };

  const faqStructuredData = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": c.faqs.slice(0, 5).map((f: any) => ({
      "@type": "Question", "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <ArticleLayout
      metaTitle={c.metaTitle} metaDescription={c.metaDescription}
      path="/blog/dog-emergency-guide-malaysia" language={language}
      category={c.category} categoryColor="destructive"
      title={c.title} date={c.date} readTime={c.readTime} reviewedBy={c.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt={c.heroImageAlt} heroImageCaption={c.heroImageCaption}
      structuredData={structuredData} faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox title={c.emergencyTitle} text={c.emergencyText} buttonText={c.emergencyButton} buttonLink="/blog/24-hour-vet-directory-malaysia" />
      <TLDRBox items={c.tldr} />
      <CostCTA variant={7} />
      <TableOfContents items={c.tocItems} />

      {/* Introduction */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Dog className="h-6 w-6 text-primary" />{c.introTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.introP1 }} />
        <p className="text-muted-foreground mb-4">{c.introP2}</p>
        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-3">Key Canine Vulnerabilities</h3>
          <ul className="space-y-2 text-muted-foreground">
            {c.vulnerabilities.map((v: any, i: number) => <li key={i}>• <strong>{v.title}:</strong> {v.desc}</li>)}
          </ul>
        </div>
      </section>

      {/* Heatstroke */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Thermometer className="h-6 w-6 text-destructive" />{c.heatstrokeTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.heatstrokeIntro }} />
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">🚨 Critical Symptoms</h3><SymptomGrid items={c.heatstrokeSymptoms} /></div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.heatstrokeBreedsTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.heatstrokeBreeds.map((b: string, i: number) => <li key={i}>• {b}</li>)}</ul>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.heatstrokeActionTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.heatstrokeActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.heatstrokePreventionTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.heatstrokePrevention.map((p: string, i: number) => <li key={i}>✅ {p}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.heatstrokeCost}</p>
        </div>
      </section>

      {/* Bloat */}
      <section id="bloat" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" />{c.bloatTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.bloatIntro }} />
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">🚨 Critical Warning Signs</h3><SymptomGrid items={c.bloatSymptoms} /></div>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.bloatBreedsTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.bloatBreeds.map((b: string, i: number) => <li key={i}>• {b}</li>)}</ul>
        </div>
        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.bloatPreventionTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.bloatPrevention.map((p: string, i: number) => <li key={i}>✅ {p}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.bloatCost}</p>
        </div>
      </section>

      {/* Poisoning */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Shield className="h-6 w-6 text-destructive" />{c.poisoningTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {c.poisonCategories.map((cat: any, i: number) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">{cat.title}</h3>
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

      {/* Seizures */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.seizuresTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">What Seizures Look Like</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.seizureSigns.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.seizureDuringTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.seizureDuring.map((s: string, i: number) => <li key={i}>{s}</li>)}</ol>
        </div>
        <div className="bg-destructive/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.seizureEmergencyTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">{c.seizureEmergency.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.seizureCost}</p>
        </div>
      </section>

      {/* Traffic */}
      <section id="traffic" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.trafficTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: c.trafficIntro }} />
        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.trafficActionTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.trafficActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
        </div>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.trafficCost}</p>
      </section>

      {/* Breathing */}
      <section id="breathing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.breathingTitle}</h2>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6"><h3 className="font-bold text-lg mb-3">Critical Signs</h3><SymptomGrid items={c.breathingSigns} /></div>
        <p className="text-muted-foreground mb-2"><strong>Immediate Action:</strong> {c.breathingAction}</p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.breathingCost}</p>
      </section>

      {/* Choking */}
      <section id="choking" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.chokingTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.chokingCulpritsTitle}</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">{c.chokingCulprits.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.heimlichTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.heimlichSteps.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.chokingCost}</p>
        </div>
      </section>

      {/* Urinary */}
      <section id="urinary" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.urinaryTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.urinaryIntro}</p>
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Symptoms</h3>
          <ul className="space-y-2 text-muted-foreground">{c.urinarySymptoms.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <p className="text-muted-foreground mb-2"><strong>Immediate Action:</strong> {c.urinaryAction}</p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.urinaryCost}</p>
      </section>

      {/* Fights */}
      <section id="fights" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.fightsTitle}</h2>
        <p className="text-muted-foreground mb-4">{c.fightsIntro}</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-3">{c.fightsActionTitle}</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside">{c.fightsActions.map((a: string, i: number) => <li key={i}>{a}</li>)}</ol>
          <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> {c.fightsCost}</p>
        </div>
      </section>

      {/* Collapse */}
      <section id="collapse" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{c.collapseTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">{c.collapseCausesTitle}</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">{c.collapseCauses.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
        <p className="text-muted-foreground mb-2"><strong>Immediate Action:</strong> {c.collapseAction}</p>
        <p className="text-sm text-muted-foreground"><strong>Cost:</strong> {c.collapseCost}</p>
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
        <div className="grid md:grid-cols-2 gap-6">
          {c.breedRisks.map((breed: any, i: number) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3">{breed.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{breed.subtitle}</p>
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
        <p className="text-muted-foreground"><strong>Payment:</strong> {c.costPayment}</p>
        <p className="text-muted-foreground mt-2">{c.costLinkText} <InternalLink to="/blog/pet-emergency-costs-malaysia">{c.costLinkLabel}</InternalLink>.</p>
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

      <CostCTA variant={8} />
      <RelatedArticles articles={c.relatedArticles} />
    </ArticleLayout>
  );
};

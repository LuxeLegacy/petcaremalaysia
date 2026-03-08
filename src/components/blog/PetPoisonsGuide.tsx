import { useLanguage } from '@/contexts/LanguageContext';
import { Skull, AlertTriangle, CheckCircle2, XCircle, Leaf, Pill, Cookie, Home, Clock } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getPetPoisonsGuideContent } from '@/lib/blogTranslations/petPoisonsGuide';

const iconMap: Record<string, React.ElementType> = { Skull, AlertTriangle, Pill, Cookie, Leaf };

const PoisonCard = ({ poison }: { poison: any }) => (
  <div className="bg-card border border-border p-6 rounded-xl mb-6">
    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
      <Skull className="h-5 w-5 text-destructive" />
      {poison.name}
    </h3>
    <div className="bg-destructive/10 p-3 rounded-lg mb-4">
      <p className="text-sm"><strong>Why Toxic:</strong> {poison.whyToxic}</p>
    </div>
    {poison.toxicDose && (
      <p className="text-sm text-muted-foreground mb-3"><strong>Toxic Dose:</strong> {poison.toxicDose}</p>
    )}
    {poison.foundIn && (
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2">Found In:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">{poison.foundIn.map((item: string, i: number) => <li key={i}>• {item}</li>)}</ul>
      </div>
    )}
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div>
        <h4 className="font-semibold text-sm mb-2 text-destructive">Signs of Poisoning:</h4>
        <ul className="text-sm space-y-1">
          {poison.symptoms.map((s: string, i: number) => (
            <li key={i} className="flex items-start gap-2"><XCircle className="h-3 w-3 text-destructive flex-shrink-0 mt-1" /><span>{s}</span></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-sm mb-2 text-primary">Emergency Action:</h4>
        <ol className="text-sm space-y-1">{poison.emergencyAction.map((a: string, i: number) => <li key={i}>{i + 1}. {a}</li>)}</ol>
      </div>
    </div>
    <div className="bg-primary/10 p-3 rounded-lg">
      <h4 className="font-semibold text-sm mb-2">Prevention:</h4>
      <ul className="text-sm space-y-1">{poison.prevention.map((p: string, i: number) => <li key={i}>✓ {p}</li>)}</ul>
    </div>
    {poison.timeSensitivity && (
      <div className="mt-3 flex items-center gap-2 text-sm font-medium text-destructive">
        <Clock className="h-4 w-4" />{poison.timeSensitivity}
      </div>
    )}
  </div>
);

export const PetPoisonsGuide = () => {
  const { language } = useLanguage();
  const content = getPetPoisonsGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.metaTitle,
    "description": content.metaDescription,
    "image": "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=630&fit=crop",
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
      "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]*>/g, '') }
    }))
  };

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/common-pet-poisons-malaysia"
      language={language}
      category={content.category}
      categoryColor="destructive"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=600&fit=crop"
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
      <TableOfContents items={content.tocItems} />

      {/* Why Dangerous */}
      <section id="why-dangerous" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.whyDangerousTitle}</h2>
        <p className="text-muted-foreground mb-4">{content.whyDangerousIntro}</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">{content.commonSourcesTitle}</h3>
            <ul className="text-sm space-y-1">{content.commonSources.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">{content.earlyActionTitle}</h3>
            <ul className="text-sm space-y-1">{content.earlyActionItems.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Top 10 Poisons */}
      <section id="top-10-poisons" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.top10Title}</h2>
        {content.poisons.map((poison: any, i: number) => <PoisonCard key={i} poison={poison} />)}
      </section>

      {/* General Signs */}
      <section id="general-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.generalSignsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Clock className="h-4 w-4" />{content.immediateTitle}</h3>
            <ul className="text-sm space-y-1">{content.immediateSymptoms.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Clock className="h-4 w-4" />{content.delayedTitle}</h3>
            <ul className="text-sm space-y-1">{content.delayedSymptoms.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
        </div>
        <div className="bg-primary/10 p-4 rounded-xl mt-6">
          <h3 className="font-semibold mb-2">{content.suspectTitle}</h3>
          <ol className="text-sm space-y-1">{content.suspectSteps.map((s: string, i: number) => <li key={i}>{i + 1}. {s}</li>)}</ol>
        </div>
      </section>

      {/* When to Induce Vomiting */}
      <section id="when-to-induce-vomiting" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.induceTitle}</h2>
        <div className="bg-destructive/10 p-4 rounded-xl mb-4">
          <p className="font-semibold mb-2">{content.induceWarning}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{content.induceYesTitle}</h3>
            <ul className="text-sm space-y-1">{content.induceYes.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" />{content.induceNoTitle}</h3>
            <ul className="text-sm space-y-1">{content.induceNo.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <h3 className="font-semibold mb-2">{content.howToInduceTitle}</h3>
          <ul className="text-sm space-y-1">{content.howToInduce.map((s: string, i: number) => <li key={i}>• {s}</li>)}</ul>
        </div>
      </section>

      {/* Poison-Proofing */}
      <section id="poison-proofing" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Home className="h-6 w-6 text-primary" />{content.poisonProofTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[content.poisonProofHouse, content.poisonProofGarden, content.poisonProofGeneral].map((section: any, i: number) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="text-sm space-y-1">{section.items.map((item: string, j: number) => <li key={j}>• {item}</li>)}</ul>
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
              <AccordionContent><span dangerouslySetInnerHTML={{ __html: faq.a }} /></AccordionContent>
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
          <ul className="space-y-2">{content.conclusionTakeaways.map((t: string, i: number) => <li key={i}>✓ {t}</li>)}</ul>
        </div>
      </section>

      <CostCTA variant={5} />
      <RelatedArticles articles={content.relatedArticles} />
    </ArticleLayout>
  );
};

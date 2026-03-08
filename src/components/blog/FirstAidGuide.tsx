import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Wind, Droplets, Flame, AlertTriangle, CheckCircle2, XCircle, ThermometerSun, Pill, Bone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getFirstAidGuideContent } from '@/lib/blogTranslations';

interface FirstAidStep {
  step: number;
  title: string;
  instructions: string[];
}

const StepByStepGuide = ({ title, icon: Icon, steps, notes, notesLabel }: { title: string; icon: React.ElementType; steps: FirstAidStep[]; notes?: string[]; notesLabel?: string }) => (
  <div className="bg-card border border-border p-6 rounded-xl mb-6">
    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      {title}
    </h3>
    
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.step} className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
            {step.step}
          </div>
          <div>
            <h4 className="font-semibold mb-1">{step.title}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {step.instructions.map((instruction, i) => (
                <li key={i}>• {instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {notes && (
      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="font-semibold text-sm mb-2 text-destructive">{notesLabel || "Important Notes:"}</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          {notes.map((note, i) => (
            <li key={i}>⚠️ {note}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export const FirstAidGuide = () => {
  const { language } = useLanguage();
  const content = getFirstAidGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Pet Emergency First Aid Guide for Malaysian Pet Owners",
    "description": "Learn essential pet emergency first aid for Malaysian owners.",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=630&fit=crop",
    "step": content.cprSteps.slice(0, 5).map((s: any) => ({
      "@type": "HowToStep", "name": s.title, "text": s.instructions[0]
    }))
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.slice(0, 2).map((f: any) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]*>/g, '') }
    }))
  };

  const relatedArticleLinks = [
    "/blog/pet-emergency-guide-malaysia",
    "/blog/pet-heatstroke-malaysia",
    "/blog/pet-choking-emergency-malaysia",
    "/blog/pet-poisoning-treatment-malaysia",
    "/blog/pet-emergency-transport-malaysia",
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-emergency-first-aid-guide-malaysia"
      language={language}
      category={content.category}
      categoryColor="primary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200&h=600&fit=crop"
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

      {/* Critical Principle */}
      <section id="first-aid-principle" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.principleTitle}
        </h2>
        
        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.principleP1 }} />
          <p className="text-muted-foreground">{content.principleP2}</p>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="font-semibold text-center">{content.goldenRule}</p>
        </div>
      </section>

      {/* Pet CPR Section */}
      <section id="pet-cpr" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-destructive" />
          {content.cprTitle}
        </h2>

        <p className="text-muted-foreground mb-4">{content.cprIntro}</p>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">{content.cprWhen}</h3>
          <ul className="text-sm space-y-1">
            {content.cprWhenItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <StepByStepGuide 
          title={content.stepByStepCpr} 
          icon={Heart} 
          steps={content.cprSteps}
          notes={content.cprNotes}
          notesLabel={content.importantNotesLabel}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.largeDogTitle}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.largeDogSteps.map((s: string, i: number) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.smallDogTitle}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.smallDogSteps.map((s: string, i: number) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bleeding Control */}
      <section id="bleeding-control" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Droplets className="h-6 w-6 text-destructive" />
          {content.bleedingTitle}
        </h2>

        <p className="text-muted-foreground mb-4">{content.bleedingIntro}</p>

        <StepByStepGuide 
          title={content.stepByStepBleeding} 
          icon={Droplets} 
          steps={content.bleedingSteps}
          notesLabel={content.importantNotesLabel}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              {content.neverLabel}
            </h4>
            <ul className="text-sm space-y-1">
              {content.neverItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.minorBleedingTitle}</h4>
            <ul className="text-sm space-y-1">
              {content.minorBleedingItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Choking */}
      <section id="choking" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Wind className="h-6 w-6 text-primary" />
          {content.chokingTitle}
        </h2>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">{content.chokingSigns}</h3>
          <ul className="text-sm space-y-1">
            {content.chokingSignItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <StepByStepGuide 
          title={content.stepByStepChoking} 
          icon={Wind} 
          steps={content.chokingSteps}
          notes={content.chokingNotes}
          notesLabel={content.importantNotesLabel}
        />
      </section>

      {/* Heatstroke */}
      <section id="heatstroke" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ThermometerSun className="h-6 w-6 text-orange-500" />
          {content.heatstrokeTitle}
        </h2>

        <p className="text-muted-foreground mb-4">{content.heatstrokeIntro}</p>

        <div className="bg-orange-500/10 p-4 rounded-xl mb-6">
          <h3 className="font-semibold mb-2">{content.heatstrokeSigns}</h3>
          <ul className="text-sm space-y-1">
            {content.heatstrokeSignItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <StepByStepGuide 
          title={content.stepByStepHeatstroke} 
          icon={ThermometerSun} 
          steps={content.heatstrokeSteps}
          notesLabel={content.importantNotesLabel}
        />

        <div className="bg-muted/50 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">{content.preventionTitle}</h4>
          <ul className="text-sm space-y-1">
            {content.preventionItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Poisoning */}
      <section id="poisoning" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Pill className="h-6 w-6 text-destructive" />
          {content.poisoningTitle}
        </h2>

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-semibold mb-4">{content.poisoningStepsTitle}</h3>
          <ol className="space-y-3">
            {content.poisoningSteps.map((step: string, i: number) => (
              <li key={i}><strong>{step.split(' — ')[0]}</strong>{step.includes(' — ') ? ` — ${step.split(' — ')[1]}` : ''}</li>
            ))}
          </ol>
        </div>

        <div className="bg-muted/50 p-4 rounded-xl mb-6">
          <h4 className="font-semibold mb-2">{content.commonPoisons}</h4>
          <ul className="text-sm grid grid-cols-2 gap-2">
            {content.commonPoisonItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground">
          {content.poisonLinkText} <InternalLink to="/blog/common-pet-poisons-malaysia">{content.poisonLink}</InternalLink>.
        </p>
      </section>

      {/* Seizures */}
      <section id="seizures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.seizuresTitle}</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {content.duringSeizure}
            </h4>
            <ul className="text-sm space-y-1">
              {content.duringSeizureItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              {content.seizureDont}
            </h4>
            <ul className="text-sm space-y-1">
              {content.seizureDontItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 p-4 rounded-xl">
          <h4 className="font-semibold mb-2">{content.seizureEmergency}</h4>
          <ul className="text-sm space-y-1">
            {content.seizureEmergencyItems.map((item: string, i: number) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fractures */}
      <section id="fractures" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Bone className="h-6 w-6 text-muted-foreground" />
          {content.fracturesTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.fractureSigns}</h4>
            <ul className="text-sm space-y-1">
              {content.fractureSignItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h4 className="font-semibold mb-2">{content.fractureFirstAid}</h4>
            <ul className="text-sm space-y-1">
              {content.fractureFirstAidItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* First Aid Kit */}
      <section id="first-aid-kit" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.kitTitle}</h2>

        <p className="text-muted-foreground mb-4">{content.kitIntro}</p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-semibold mb-4">{content.kitRecommended}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">{content.bandagingTitle}</h4>
              <ul className="space-y-1">
                {content.bandagingItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{content.cleaningTitle}</h4>
              <ul className="space-y-1">
                {content.cleaningItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{content.toolsTitle}</h4>
              <ul className="space-y-1">
                {content.toolsItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{content.emergencyItemsTitle}</h4>
              <ul className="space-y-1">
                {content.emergencyItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq: any, i: number) => (
            <AccordionItem key={i} value={`faq-${i + 1}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>
                <span dangerouslySetInnerHTML={{ __html: faq.a }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h2>
        
        <p className="text-muted-foreground mb-4">{content.conclusionP}</p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.rememberTitle}</h3>
          <ul className="space-y-2">
            {content.rememberItems.map((item: string, i: number) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CostCTA variant={3} />

      <RelatedArticles articles={content.relatedArticles.map((a: any, i: number) => ({
        to: relatedArticleLinks[i],
        title: a.title,
        description: a.description,
      }))} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Clock, Phone, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getEmergencySymptomsGuideContent } from '@/lib/blogTranslations';

export const EmergencySymptomsGuide = () => {
  const { language } = useLanguage();
  const content = getEmergencySymptomsGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pet Emergency Symptoms Every Malaysian Owner Must Know | 2025 Guide",
    "description": "Learn the 9 critical pet emergency symptoms that require immediate vet attention in Malaysia.",
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map((f: any) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]*>/g, '') }
    }))
  };

  const relatedArticleLinks = [
    "/blog/pet-emergency-guide-malaysia",
    "/blog/pet-heatstroke-malaysia",
    "/blog/pet-emergency-first-aid-guide-malaysia",
    "/blog/pet-emergency-costs-malaysia",
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-emergency-symptoms-malaysia"
      language={language}
      category={content.category}
      categoryColor="destructive"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop"
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

      {/* Why Matters Section */}
      <section id="why-matters" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.whyTitle}
        </h2>
        
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.whyP1 }} />
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.whyP2 }} />

        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-2">{content.keyStatLabel}</h3>
          <p className="text-2xl font-bold text-primary mb-2">{content.keyStatValue}</p>
          <p className="text-sm text-muted-foreground">{content.keyStatDesc}</p>
        </div>

        <p className="text-muted-foreground mb-4">{content.whyP3}</p>
      </section>

      {/* 9 Symptoms Section */}
      <section id="9-symptoms" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.symptomsTitle}</h2>

        <div className="space-y-6">
          {content.symptoms.map((symptom: any, index: number) => (
            <div key={index} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">{symptom.emoji}</span>
                {index + 1}. {symptom.title}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">{content.signsLabel}</h4>
                  <ul className="space-y-1 text-sm">
                    {symptom.signs.map((sign: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">{content.causesLabel}</h4>
                  <p className="text-sm text-muted-foreground">{symptom.causes}</p>
                </div>
              </div>

              <div className="bg-destructive/10 p-3 rounded-lg flex items-center gap-2">
                <Clock className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium">{content.timeSensitivityLabel} {symptom.timeSensitivity}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Framework */}
      <section id="decision-framework" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.decisionTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/10 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              {content.goEmergencyTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {content.goEmergencyItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {content.canWaitTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              {content.canWaitItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-4 my-6">
          <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.whenInDoubt }} />
        </div>
      </section>

      {/* Preparation Section */}
      <section id="preparation" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.prepTitle}</h2>

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            {content.saveContactsTitle}
          </h3>
          <ul className="space-y-2">
            {content.contacts.map((c: any, i: number) => (
              <li key={i}>• <strong>{c.name}</strong> - {c.location}: {c.phone}</li>
            ))}
          </ul>
        </div>

        <p className="text-muted-foreground mb-4">
          {content.seeDirectoryText} <InternalLink to="/blog/24-hour-vet-directory-malaysia">{content.seeDirectoryLink}</InternalLink> {content.seeDirectoryAfter}
        </p>
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

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.rememberTitle}</h3>
          <ul className="space-y-2">
            {content.rememberItems.map((item: string, i: number) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CostCTA variant={6} />

      <RelatedArticles articles={content.relatedArticles.map((a: any, i: number) => ({
        to: relatedArticleLinks[i],
        title: a.title,
        description: a.description,
      }))} />
    </ArticleLayout>
  );
};

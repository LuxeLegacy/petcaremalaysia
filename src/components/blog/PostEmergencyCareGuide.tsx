import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Heart, Shield, Pill } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox } from './ArticleLayout';
import { RelatedArticles } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import postEmergencyCareHero from '@/assets/post-emergency-care-hero.jpg';
import { getPostEmergencyCareGuideContent } from '@/lib/blogTranslations/postEmergencyCareGuide';

export const PostEmergencyCareGuide = () => {
  const { language } = useLanguage();
  const content = getPostEmergencyCareGuideContent(language);

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
    { to: "/blog/pet-emergency-guide-malaysia", title: content.relatedArticles[0].title, description: content.relatedArticles[0].description, icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-emergency-transport-malaysia", title: content.relatedArticles[1].title, description: content.relatedArticles[1].description, icon: Heart, color: "text-primary" },
    { to: "/blog/pet-insurance-malaysia", title: content.relatedArticles[2].title, description: content.relatedArticles[2].description, icon: Shield, color: "text-primary" },
    { to: "/blog/pet-emergency-prevention-malaysia", title: content.relatedArticles[3].title, description: content.relatedArticles[3].description, icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/post-emergency-pet-care-malaysia"
      language={language}
      category={content.category}
      categoryColor="primary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage={postEmergencyCareHero}
      heroImageAlt={content.heroImageAlt}
      heroImageCaption={content.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={content.tldr} />

      <CostCTA variant={19} />
      <TableOfContents items={content.tocItems} />

      <section id="discharge" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.dischargeTitle}</h2>
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.dischargeIntro }} />
        <div className="bg-card border border-border p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.shouldReceiveTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.shouldReceiveItems.map((item, i) => <li key={i}>📋 {item}</li>)}
          </ul>
          <p className="text-sm text-primary mt-4 font-medium">{content.askBeforeLeaving}</p>
        </div>
      </section>

      <section id="medications" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Pill className="h-6 w-6 text-primary" />
          {content.medicationsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.antibiotics.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{content.antibiotics.desc}</p>
            <p className="text-sm text-destructive">{content.antibiotics.warning}</p>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.painMeds.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{content.painMeds.desc}</p>
            <p className="text-sm text-muted-foreground">{content.painMeds.common}</p>
          </div>
        </div>
        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: content.medicationTip }} />
        </div>
      </section>

      <section id="wound-care" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.woundCareTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.normalSigns}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.normalSignsItems.map((item, i) => <li key={i}>✅ {item}</li>)}
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.redFlags}</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {content.redFlagsItems.map((item, i) => <li key={i}>❌ {item}</li>)}
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: content.eCollarDuration }} />
      </section>

      <section id="activity" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.activityTitle}</h2>
        <div className="bg-destructive/10 p-4 rounded-xl mb-4">
          <p className="font-medium">{content.activityWarning}</p>
        </div>
        <div className="space-y-3">
          {content.activityLevels.map((level, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h4 className="font-bold">{level.level}</h4>
              <p className="text-sm text-muted-foreground">{level.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="feeding" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.feedingTitle}</h2>
        <div className="bg-card border border-border p-6 rounded-xl">
          <ul className="space-y-2 text-muted-foreground">
            {content.feedingTips.map((tip, i) => <li key={i}>• {tip}</li>)}
          </ul>
        </div>
      </section>

      <section id="warning-signs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.warningTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.emergencyReturn}</h3>
            <ul className="text-sm space-y-1">
              {content.emergencyItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-bold mb-2">{content.callVetGuidance}</h3>
            <ul className="text-sm space-y-1">
              {content.callVetItems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="follow-up" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.followUpTitle}</h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.whyCriticalTitle}</h3>
          <ul className="space-y-2 text-muted-foreground">
            {content.whyCriticalItems.map((item, i) => <li key={i}>✅ {item}</li>)}
          </ul>
        </div>
      </section>

      <CostCTA variant={0} />

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

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

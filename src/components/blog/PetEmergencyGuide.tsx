import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Phone, Heart, Shield, DollarSign, Skull, Clock, CheckCircle2, MapPin, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getPetEmergencyGuideContent } from '@/lib/blogTranslations/petEmergencyGuide';

export const PetEmergencyGuide = () => {
  const { language } = useLanguage();
  const content = getPetEmergencyGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Pet Emergency Treatment in Malaysia 2025",
    "description": "Comprehensive guide to pet emergency care in Malaysia. 24-hour vets, emergency symptoms, first aid, treatment costs, and insurance coverage.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-emergency-guide-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (content.faqs || []).slice(0, 4).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]*>/g, '') }
    }))
  };

  const clusterArticleLinks = [
    "/blog/pet-emergency-symptoms-malaysia",
    "/blog/24-hour-vet-directory-malaysia",
    "/blog/pet-emergency-first-aid-guide-malaysia",
    "/blog/pet-emergency-costs-malaysia",
    "/blog/common-pet-poisons-malaysia",
    "/blog/dog-emergency-guide-malaysia",
    "/blog/cat-emergency-guide-malaysia",
    "/blog/pet-heatstroke-malaysia",
    "/blog/pet-choking-emergency-malaysia",
    "/blog/pet-insurance-malaysia",
    "/blog/pet-poisoning-treatment-malaysia",
    "/blog/pet-emergency-transport-malaysia",
    "/blog/post-emergency-pet-care-malaysia",
    "/blog/pet-emergency-prevention-malaysia",
  ];

  const clusterIcons = [AlertTriangle, MapPin, Heart, DollarSign, Skull, Heart, Heart, Clock, Heart, Shield, Skull, Heart, Heart, Shield];
  const clusterColors = ["text-destructive", "text-primary", "text-destructive", "text-primary", "text-destructive", "text-primary", "text-primary", "text-destructive", "text-primary", "text-primary", "text-destructive", "text-primary", "text-primary", "text-primary"];

  const relatedArticleLinks = [
    "/blog/pet-emergency-symptoms-malaysia",
    "/blog/24-hour-vet-directory-malaysia",
    "/blog/pet-heatstroke-malaysia",
    "/blog/pet-choking-emergency-malaysia",
    "/blog/pet-accident-emergency-malaysia",
    "/blog/pet-insurance-malaysia",
  ];

  const vetContacts = [
    { name: "Animal Medical Center (AMC)", location: "TTDI, KL", phone: "+603-7982 9199", fee: "RM250-350" },
    { name: "Gasing Veterinary Hospital", location: "Petaling Jaya", phone: "+603-7957 2030", fee: "RM180-280" },
    { name: "Starlight Veterinary Hospital", location: "Subang Jaya", phone: "+6012-691 4745", fee: "RM200-300" },
    { name: "Windsor Animal Hospital", location: "Shah Alam", phone: "+603-5191 1799", fee: "RM220-320" },
    { name: "Gill's Veterinary Clinic", location: "Penang", phone: "+604-228 8735", fee: "RM180-280" },
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/pet-emergency-guide-malaysia"
      language={language}
      category={content.category}
      categoryColor="destructive"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
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

      <CostCTA variant={0} />

      {/* Quick Navigation to Cluster Articles */}
      <div className="bg-gradient-to-r from-primary/10 to-destructive/10 p-6 rounded-xl mb-10">
        <h2 className="font-bold text-xl mb-4">{content.jumpToGuides}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.clusterArticles.map((article: any, index: number) => {
            const IconComp = clusterIcons[index] || Heart;
            return (
              <Link 
                key={index}
                to={clusterArticleLinks[index]}
                className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary hover:shadow-md transition-all group"
              >
                <IconComp className={`h-6 w-6 ${clusterColors[index] || "text-primary"} flex-shrink-0 mt-0.5`} />
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{article.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <TableOfContents items={content.tocItems} />

      {/* Introduction Section */}
      <section id="introduction" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          {content.introTitle}
        </h2>
        
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introP1 }} />
        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introP2 }} />

        <div className="bg-primary/5 p-6 rounded-xl my-6">
          <h3 className="font-semibold mb-2">{content.keyStatLabel}</h3>
          <p className="text-3xl font-bold text-primary mb-2">{content.keyStatValue}</p>
          <p className="text-sm text-muted-foreground">{content.keyStatDesc}</p>
        </div>

        <p className="text-muted-foreground mb-4">{content.introP3}</p>

        <div className="border-l-4 border-primary pl-4 my-6">
          <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.expertInsight }} />
        </div>
      </section>

      {/* Recognizing Emergencies Section */}
      <section id="recognizing-emergencies" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          {content.recognizingTitle}
        </h2>

        <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: content.recognizingIntro }} />

        <div className="bg-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">{content.emergencySignsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {content.emergencySigns.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          {content.recognizingLink} <InternalLink to="/blog/pet-emergency-symptoms-malaysia">{content.recognizingLinkText}</InternalLink>.
        </p>
      </section>

      {/* Immediate Steps Section */}
      <section id="immediate-steps" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-6 w-6 text-primary" />
          {content.immediateStepsTitle}
        </h2>

        <p className="text-muted-foreground mb-6">{content.immediateStepsIntro}</p>

        <div className="space-y-4 mb-8">
          {content.steps.map((step: any, index: number) => (
            <div key={index} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                <h3 className="font-bold text-lg">{step.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First Aid Section */}
      <section id="first-aid" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {content.firstAidTitle}
        </h2>

        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.firstAidIntro }} />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{content.bleedingTitle}</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              {content.bleedingSteps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{content.cprTitle}</h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              {content.cprSteps.map((step: string, i: number) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          {content.firstAidLink} <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">{content.firstAidLinkText}</InternalLink>.
        </p>
      </section>

      {/* 24-Hour Vets Section */}
      <section id="24-hour-vets" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          {content.vetsTitle}
        </h2>

        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.vetsIntro }} />

        <div className="bg-primary/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            {content.saveContactsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {vetContacts.map((vet, i) => (
              <div key={i} className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold">{vet.name}</h4>
                <p className="text-sm text-muted-foreground">{vet.location}</p>
                <p className="text-sm font-medium text-primary">{vet.phone}</p>
                <p className="text-xs text-muted-foreground">{content.consultation}: {vet.fee}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          {content.vetsLink} <InternalLink to="/blog/24-hour-vet-directory-malaysia">{content.vetsLinkText}</InternalLink>.
        </p>
      </section>

      {/* Common Emergencies Section */}
      <section id="common-emergencies" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.commonTitle}</h2>

        <p className="text-muted-foreground mb-6">{content.commonIntro}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {content.commonEmergencies.map((emergency: any, i: number) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">{emergency.emoji} {emergency.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{emergency.desc}</p>
              <p className="text-sm"><strong>Signs:</strong> {emergency.signs}</p>
              <p className="text-sm"><strong>Action:</strong> {emergency.action}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mb-4">
          {content.commonLink} <InternalLink to="/blog/common-pet-poisons-malaysia">{content.commonLinkText}</InternalLink>.
        </p>
      </section>

      {/* Costs Section */}
      <section id="costs" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-primary" />
          {content.costsTitle}
        </h2>

        <p className="text-muted-foreground mb-6">{content.costsIntro}</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-4 font-semibold">{content.serviceLabel}</th>
                <th className="text-left p-4 font-semibold">{content.costLabel}</th>
              </tr>
            </thead>
            <tbody>
              {content.costItems.map(([service, cost]: [string, string], i: number) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4">{service}</td>
                  <td className="p-4 font-medium">{cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{content.scenariosTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {content.scenarios.map((s: any, i: number) => (
              <div key={i}><strong>{s.label}</strong> {s.cost}</div>
            ))}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          {content.costsLink} <InternalLink to="/blog/pet-emergency-costs-malaysia">{content.costsLinkText}</InternalLink>.
        </p>
      </section>

      {/* Insurance Section */}
      <section id="insurance" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          {content.insuranceTitle}
        </h2>

        <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.insuranceIntro }} />

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {content.providers.map((provider: any, i: number) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl text-center">
              {provider.highlight && (
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">{provider.highlight}</span>
              )}
              <h3 className="font-bold text-lg">{provider.name}</h3>
              <p className="text-primary font-medium">{provider.monthly}/month</p>
              <p className="text-sm text-muted-foreground">{provider.coverage}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.coveredTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-primary">{content.coveredLabel}</h4>
              <ul className="text-sm space-y-1">
                {content.coveredItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-2 text-destructive">{content.notCoveredLabel}</h4>
              <ul className="text-sm space-y-1">
                {content.notCoveredItems.map((item: string, i: number) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevention" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.preventionTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{content.petProofTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {content.petProofItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">{content.kitTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {content.kitItems.map((item: string, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.financialTitle}</h3>
          <ul className="space-y-2">
            {content.financialItems.map((item: string, i: number) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
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

        <div className="bg-gradient-to-r from-primary/10 to-destructive/10 p-6 rounded-xl mb-6">
          <h3 className="font-bold mb-3">{content.actionStepsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2">
                {content.actionSteps1.map((item: string, i: number) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {content.actionSteps2.map((item: string, i: number) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-primary pl-4">
          <p className="italic text-muted-foreground">{content.finalQuote}</p>
        </div>
      </section>

      <CostCTA variant={1} />

      <RelatedArticles articles={content.relatedArticles.map((a: any, i: number) => ({
        to: relatedArticleLinks[i],
        title: a.title,
        description: a.description,
      }))} />
    </ArticleLayout>
  );
};

import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Redirect map for old/shortened slugs to correct full slugs
const slugRedirects: Record<string, string> = {
  'poisoning-treatment-guide': 'pet-poisoning-treatment-malaysia',
  'post-emergency-care-guide': 'post-emergency-pet-care-malaysia',
  'emergency-transport-guide': 'pet-emergency-transport-malaysia',
  'heatstroke-guide': 'pet-heatstroke-malaysia',
  'choking-guide': 'pet-choking-emergency-malaysia',
  'accident-guide': 'pet-accident-emergency-malaysia',
  'insurance-guide': 'pet-insurance-malaysia',
  'prevention-guide': 'pet-emergency-prevention-malaysia',
  'emergency-symptoms-guide': 'pet-emergency-symptoms-malaysia',
  'vet-directory': '24-hour-vet-directory-malaysia',
  'first-aid-guide': 'pet-emergency-first-aid-guide-malaysia',
  'treatment-costs': 'pet-emergency-costs-malaysia',
  'pet-emergency-guide': 'pet-emergency-guide-malaysia',
  'pet-poisons-guide': 'common-pet-poisons-malaysia',
  'dog-emergency-guide': 'dog-emergency-guide-malaysia',
  'cat-emergency-guide': 'cat-emergency-guide-malaysia',
  'nutrition-guide': 'pet-nutrition-guide-malaysia',
  'emergency-care-guide': 'emergency-pet-care-guide',
};
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, AlertTriangle, Phone, Heart, Shield, CheckCircle2, XCircle, Info, Stethoscope, Star, TrendingUp, DollarSign, ShoppingCart, Utensils, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getEmergencyGuideContent, getNutritionGuideContent } from '@/lib/blogTranslations';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const EmergencyPetCareGuide = () => {
  const { language } = useLanguage();
  const content = getEmergencyGuideContent(language);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.metaDescription,
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "PetCare Malaysia"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PetCare Malaysia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://petcaremalaysia.com/logo.png"
      }
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title={content.metaTitle}
        description={content.metaDescription}
        path="/blog/emergency-pet-care-guide"
        language={language}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              {content.backToBlog}
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <span className="px-3 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded-full">
              {content.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              {content.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {content.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {content.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Stethoscope className="h-4 w-4" />
                {content.reviewedBy}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" /> {content.share}
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" /> {content.save}
                </Button>
              </div>
              <LanguageSwitcher />
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-10">
            <img loading="lazy" decoding="async" 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop" 
              alt={content.heroImageAlt}
              className="w-full h-auto rounded-2xl shadow-lg" 
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              {content.heroImageCaption}
            </figcaption>
          </figure>

          {/* Emergency Alert Box */}
          <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-10">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg mb-2">{content.emergencyAlertTitle}</h2>
                <p className="mb-3">{content.emergencyAlertText}</p>
                <Button variant="destructive" asChild>
                  <Link to="/locations">
                    <Phone className="h-4 w-4 mr-2" /> {content.findVetButton}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/50 p-6 rounded-xl mb-10">
            <h2 className="font-bold text-lg mb-4">{content.tocTitle}</h2>
            <ol className="space-y-2 text-sm">
              {content.tocItems.map((item, index) => (
                <li key={index}>
                  <a href={`#section-${index + 1}`} className="text-primary hover:underline">{item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="section-1" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                {content.introTitle}
              </h2>
              
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introPara1 }} />
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introPara2 }} />

              <div className="bg-primary/5 p-6 rounded-xl my-6">
                <h3 className="font-semibold mb-2">{content.keyStatLabel}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{content.keyStatValue}</p>
                <p className="text-sm text-muted-foreground">{content.keyStatDesc}</p>
              </div>

              <p className="text-muted-foreground mb-4">{content.introPara3}</p>
            </section>

            {/* Recognizing Emergencies */}
            <section id="section-2" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                {content.recognizingTitle}
              </h2>

              <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: content.recognizingIntro }} />

              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4 text-destructive">{content.lifeThreatTitle}</h3>
                <ul className="space-y-3">
                  {content.lifeThreatItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4">{content.urgentTitle}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {content.urgentItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.expertInsight1 }} />
              </div>
            </section>

            {/* Immediate Steps */}
            <section id="section-3" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                {content.immediateTitle}
              </h2>

              <p className="text-muted-foreground mb-6">{content.immediateIntro}</p>

              <div className="space-y-4 mb-8">
                {[
                  { title: content.step1Title, text: content.step1Text },
                  { title: content.step2Title, text: content.step2Text },
                  { title: content.step3Title, text: content.step3Text },
                  { title: content.step4Title, text: content.step4Text },
                  { title: content.step5Title, text: content.step5Text },
                ].map((step, index) => (
                  <div key={index} className="bg-card border border-border p-5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{index + 1}</span>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-bold mb-3">{content.saveContactsTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.saveContactsIntro}</p>
                <ul className="space-y-2">
                  {content.saveContactsItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* First Aid */}
            <section id="section-4" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {content.firstAidTitle}
              </h2>

              <p className="text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: content.firstAidIntro }} />

              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4">{content.bleedingTitle}</h3>
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                  {content.bleedingSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4">{content.cprTitle}</h3>
                <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.cprImportant }} />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{content.cprDogsTitle}</h4>
                    <ol className="space-y-1 list-decimal list-inside text-sm text-muted-foreground">
                      {content.cprDogSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{content.cprCatsTitle}</h4>
                    <ol className="space-y-1 list-decimal list-inside text-sm text-muted-foreground">
                      {content.cprCatSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4">{content.chokingTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.chokingIntro}</p>
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                  {content.chokingSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.firstAidCourseRec }} />
              </div>
            </section>

            {/* Transportation */}
            <section id="section-5" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.transportTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.transportIntro}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">{content.transportDogsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.transportDogItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4">{content.transportCatsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.transportCatItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-4">{content.drivingTipsTitle}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {content.drivingTipsItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Common Emergencies */}
            <section id="section-6" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.commonTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.commonIntro}</p>

              {/* Heat Stroke */}
              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-2">{content.heatStrokeTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.heatStrokeIntro}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">{content.signsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.heatStrokeSigns.map((sign, index) => (
                        <li key={index}>• {sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.immediateActionLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.heatStrokeActions.map((action, index) => (
                        <li key={index}>• {action}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tick Fever */}
              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-2">{content.tickFeverTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.tickFeverIntro}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">{content.signsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.tickFeverSigns.map((sign, index) => (
                        <li key={index}>• {sign}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.preventionLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.tickFeverPrevention.map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Poisoning */}
              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-2">{content.poisoningTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.poisoningIntro}</p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">{content.foodToxinsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.foodToxins.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.householdLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.householdItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.plantsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.plantItems.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: content.poisoningWarning }} />
                </div>
              </div>

              {/* Road Accidents */}
              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-2">{content.roadAccidentTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.roadAccidentIntro}</p>
                <ul className="space-y-2 text-muted-foreground">
                  {content.roadAccidentItems.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.localContextQuote }} />
              </div>
            </section>

            {/* Vet Expectations */}
            <section id="section-7" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.vetExpectTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.vetExpectIntro}</p>

              <div className="space-y-4 mb-8">
                {[
                  { title: content.triageTitle, desc: content.triageDesc },
                  { title: content.examTitle, desc: content.examDesc },
                  { title: content.diagnosticsTitle, desc: content.diagnosticsDesc },
                  { title: content.treatmentTitle, desc: content.treatmentDesc },
                  { title: content.monitoringTitle, desc: content.monitoringDesc },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">{index + 1}</span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Costs */}
              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-lg mb-4">{content.costsTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.costsIntro}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Service</th>
                        <th className="text-left py-2">Price Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.costItems.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{item.service}</td>
                          <td className="py-2 font-semibold">{item.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">{content.costsNote}</p>
              </div>
            </section>

            {/* Insurance */}
            <section id="section-8" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {content.insuranceTitle}
              </h2>
              
              <p className="text-muted-foreground mb-6">{content.insuranceIntro}</p>

              <h3 className="font-bold text-lg mb-4">{content.insuranceProvidersTitle}</h3>
              <div className="space-y-4 mb-6">
                {content.insuranceProviders.map((provider, index) => (
                  <div key={index} className="bg-card border border-border p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-bold text-lg">{provider.name}</h4>
                      <span className="text-primary font-semibold">{provider.monthly}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{provider.coverage}</p>
                    <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                      {provider.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground italic">{provider.note}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-primary/5 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.coveredTitle}</h3>
                  <ul className="space-y-2">
                    {content.coveredItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-destructive/5 p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.notCoveredTitle}</h3>
                  <ul className="space-y-2">
                    {content.notCoveredItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-destructive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.insuranceTip }} />
              </div>

              <div className="bg-muted/50 p-6 rounded-xl">
                <h3 className="font-bold mb-4">{content.claimTitle}</h3>
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                  {content.claimSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Prevention */}
            <section id="section-9" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.preventionTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.preventionIntro}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.petProofTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.petProofItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.healthMaintenanceTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.healthMaintenanceItems.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="font-bold mb-4">{content.emergencyKitTitle}</h3>
                <p className="text-muted-foreground mb-4">{content.emergencyKitIntro}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">{content.firstAidSuppliesLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.firstAidSupplies.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.documentsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.documents.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{content.essentialsLabel}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {content.essentials.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.preparednessQuote }} />
              </div>
            </section>

            {/* FAQ */}
            <section id="section-10" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.conclusionTitle}</h2>
              <p className="text-muted-foreground mb-4">{content.conclusionPara1}</p>
              <p className="text-muted-foreground mb-6">{content.conclusionPara2}</p>

              <div className="bg-primary/10 p-6 rounded-xl">
                <h3 className="font-bold mb-4">{content.actionTitle}</h3>
                <ul className="space-y-2">
                  {content.actionItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Author */}
            <section className="border-t border-border pt-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">{content.authorBio}</p>
                </div>
              </div>
            </section>

            {/* Citations */}
            <section className="text-sm text-muted-foreground border-t border-border pt-8">
              <h3 className="font-bold mb-4">{content.citationsTitle}</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li id="citation-1">Department of Veterinary Services Malaysia (DVS). Annual Report 2023.</li>
                <li id="citation-2">Malaysian Veterinary Medical Association. Pet Emergency Response Survey 2023.</li>
                <li id="citation-3">Dr. Ahmad Razali, Emergency Veterinary Specialist, Universiti Putra Malaysia. Interview, 2024.</li>
                <li id="citation-4">Malaysian Animal Welfare Society. Pet First Aid Guidelines 2024.</li>
                <li id="citation-5">Oyen Pet Insurance Malaysia. Claims Data Report 2023.</li>
              </ol>
            </section>

          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

// Pet Food Brands Guide Component
const PetFoodBrandsGuide = () => {
  const { language } = useLanguage();
  const content = getNutritionGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.metaDescription,
    "image": "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=630&fit=crop",
    "author": {
      "@type": "Organization",
      "name": "PetCare Malaysia"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PetCare Malaysia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://petcaremalaysia.com/logo.png"
      }
    },
    "datePublished": "2024-12-10",
    "dateModified": "2024-12-10"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEOHead 
        title={content.metaTitle}
        description={content.metaDescription}
        path="/blog/pet-nutrition-guide-malaysia"
        language={language}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      <Header />
      
      <main className="min-h-screen bg-background pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              {content.backToBlog}
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
              {content.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              {content.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {content.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {content.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Stethoscope className="h-4 w-4" />
                {content.reviewedBy}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" /> {content.share}
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" /> {content.save}
                </Button>
              </div>
              <LanguageSwitcher />
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-10">
            <img loading="lazy" decoding="async" 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop" 
              alt={content.heroImageAlt}
              className="w-full h-auto rounded-2xl shadow-lg" 
            />
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              {content.heroImageCaption}
            </figcaption>
          </figure>

          {/* Quick Links Box */}
          <div className="bg-primary/10 p-6 rounded-xl mb-10">
            <h2 className="font-bold text-lg mb-2">{content.quickLinksTitle}</h2>
            <p className="text-muted-foreground mb-4">{content.quickLinksIntro}</p>
            <div className="flex flex-wrap gap-2">
              {content.quickLinksItems.map((item, index) => (
                <a key={index} href={`#section-${index + 3}`} className="px-3 py-1 bg-background rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/50 p-6 rounded-xl mb-10">
            <h2 className="font-bold text-lg mb-4">{content.tocTitle}</h2>
            <ol className="space-y-2 text-sm">
              {content.tocItems.map((item, index) => (
                <li key={index}>
                  <a href={`#nutrition-section-${index + 1}`} className="text-primary hover:underline">{item}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section id="nutrition-section-1" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Utensils className="h-6 w-6 text-primary" />
                {content.introTitle}
              </h2>
              
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introPara1 }} />
              <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: content.introPara2 }} />

              <div className="bg-primary/5 p-6 rounded-xl my-6">
                <h3 className="font-semibold mb-2">{content.keyStatLabel}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{content.keyStatValue}</p>
                <p className="text-sm text-muted-foreground">{content.keyStatDesc}</p>
              </div>

              <p className="text-muted-foreground mb-4">{content.introPara3}</p>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.expertInsight1 }} />
              </div>
            </section>

            {/* Understanding Labels */}
            <section id="nutrition-section-2" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                {content.labelsTitle}
              </h2>

              <p className="text-muted-foreground mb-6">{content.labelsIntro}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.labelComponentsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.labelComponents.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.ingredientsToAvoidTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.ingredientsToAvoid.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.localInsight1 }} />
              </div>
            </section>

            {/* Premium Brands */}
            <section id="nutrition-section-3" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                {content.premiumTitle}
              </h2>

              <p className="text-muted-foreground mb-6">{content.premiumIntro}</p>

              <div className="space-y-6">
                {content.brands.slice(0, 4).map((brand, index) => (
                  <div key={index} className="bg-card border border-border p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-xl">{brand.name}</h3>
                        {brand.badge && (
                          <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded mt-1 inline-block">{brand.badge}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{brand.origin}</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Price:</span>
                        <p className="font-semibold">{brand.priceRange}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Protein:</span>
                        <p className="font-semibold">{brand.proteinContent}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Best For:</span>
                        <p className="font-semibold">{brand.bestFor}</p>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">{brand.featuresLabel}</h4>
                    <ul className="grid md:grid-cols-2 gap-2 mb-4">
                      {brand.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm"><strong>Verdict:</strong> {brand.verdict}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.premiumExpertQuote }} />
              </div>
            </section>

            {/* Mid-Range Brands */}
            <section id="nutrition-section-4" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                {content.midRangeTitle}
              </h2>

              <p className="text-muted-foreground mb-6">{content.midRangeIntro}</p>

              <div className="space-y-6">
                {content.brands.slice(4, 8).map((brand, index) => (
                  <div key={index} className="bg-card border border-border p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl">{brand.name}</h3>
                      <span className="text-primary font-semibold">{brand.priceRange}</span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Protein:</span>
                        <p className="font-semibold">{brand.proteinContent}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Best For:</span>
                        <p className="font-semibold">{brand.bestFor}</p>
                      </div>
                    </div>

                    <ul className="flex flex-wrap gap-2 mb-4">
                      {brand.features.map((feature, i) => (
                        <li key={i} className="px-3 py-1 bg-muted text-sm rounded-full">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-muted-foreground"><strong>Verdict:</strong> {brand.verdict}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Budget Brands */}
            <section id="nutrition-section-5" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                {content.budgetTitle}
              </h2>

              <p className="text-muted-foreground mb-6">{content.budgetIntro}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {content.brands.slice(8, 12).map((brand, index) => (
                  <div key={index} className="bg-card border border-border p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">{brand.name}</h3>
                    <p className="text-primary font-semibold mb-3">{brand.priceRange}</p>
                    <p className="text-sm text-muted-foreground mb-3">Protein: {brand.proteinContent}</p>
                    <p className="text-sm text-muted-foreground">{brand.verdict}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Brands */}
            <section id="nutrition-section-6" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.localTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.localIntro}</p>

              <div className="grid md:grid-cols-2 gap-6">
                {content.brands.slice(12).map((brand, index) => (
                  <div key={index} className="bg-card border border-border p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">{brand.name}</h3>
                    <p className="text-primary font-semibold mb-3">{brand.priceRange}</p>
                    <p className="text-sm text-muted-foreground">{brand.verdict}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Special Diets */}
            <section id="nutrition-section-7" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{content.specialDietsTitle}</h2>
              <p className="text-muted-foreground mb-6">{content.specialDietsIntro}</p>

              <div className="space-y-4">
                <div className="bg-card border border-border p-5 rounded-xl">
                  <h3 className="font-bold mb-2">{content.puppyKittenTitle}</h3>
                  <p className="text-muted-foreground">{content.puppyKittenText}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <h3 className="font-bold mb-2">{content.seniorTitle}</h3>
                  <p className="text-muted-foreground">{content.seniorText}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <h3 className="font-bold mb-2">{content.weightManagementTitle}</h3>
                  <p className="text-muted-foreground">{content.weightManagementText}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <h3 className="font-bold mb-2">{content.sensitiveDigestionTitle}</h3>
                  <p className="text-muted-foreground">{content.sensitiveDigestionText}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-xl">
                  <h3 className="font-bold mb-2">{content.skinCoatTitle}</h3>
                  <p className="text-muted-foreground">{content.skinCoatText}</p>
                </div>
              </div>
            </section>

            {/* Where to Buy */}
            <section id="nutrition-section-8" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-primary" />
                {content.whereToBuyTitle}
              </h2>
              <p className="text-muted-foreground mb-6">{content.whereToBuyIntro}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.physicalStoresTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.physicalStores.map((store, index) => (
                      <li key={index}>• {store}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h3 className="font-bold mb-4">{content.onlinePlatformsTitle}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {content.onlinePlatforms.map((platform, index) => (
                      <li key={index}>• {platform}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-xl mb-6">
                <h3 className="font-bold mb-4">{content.moneySavingTitle}</h3>
                <ul className="space-y-2">
                  {content.moneySavingTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.localTip }} />
              </div>
            </section>

            {/* Insurance */}
            <section id="nutrition-section-9" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {content.insuranceTitle}
              </h2>
              
              <p className="text-muted-foreground mb-6">{content.insuranceIntro}</p>

              <div className="bg-card border border-border p-6 rounded-xl mb-6">
                <h3 className="font-bold mb-4">{content.rxCoverageTitle}</h3>
                <div className="space-y-3">
                  {content.rxCoverageItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {item.covered ? (
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-xl mb-6">
                <h3 className="font-bold mb-4">{content.maximizingTitle}</h3>
                <ul className="space-y-2">
                  {content.maximizingTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4 my-6">
                <p className="italic text-muted-foreground" dangerouslySetInnerHTML={{ __html: content.insuranceExpertQuote }} />
              </div>
            </section>

            {/* FAQ */}
            <section id="nutrition-section-10" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
              
              <Accordion type="single" collapsible className="w-full">
                {content.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`nutrition-faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Final Quote */}
            <div className="bg-primary/10 p-8 rounded-xl text-center mb-12">
              <p className="text-xl italic" dangerouslySetInnerHTML={{ __html: content.finalQuote }} />
            </div>

            {/* Author */}
            <section className="border-t border-border pt-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground">{content.authorBio}</p>
                </div>
              </div>
            </section>

            {/* Citations */}
            <section className="text-sm text-muted-foreground border-t border-border pt-8">
              <h3 className="font-bold mb-4">{content.citationsTitle}</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Department of Veterinary Services Malaysia (DVS). Pet Industry Report 2023.</li>
                <li>Association of American Feed Control Officials (AAFCO). Pet Food Labeling Guide 2024.</li>
                <li>Malaysian Pet Food Association. Market Analysis 2023.</li>
                <li>World Small Animal Veterinary Association (WSAVA). Nutrition Guidelines 2024.</li>
                <li>Oyen Pet Insurance Malaysia. Pet Health Coverage Report 2023.</li>
              </ol>
            </section>

          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

// Cluster article imports
import { EmergencySymptomsGuide } from '@/components/blog/EmergencySymptomsGuide';
import { PetEmergencyGuide } from '@/components/blog/PetEmergencyGuide';
import { VetDirectoryGuide } from '@/components/blog/VetDirectoryGuide';
import { FirstAidGuide } from '@/components/blog/FirstAidGuide';
import { TreatmentCostsGuide } from '@/components/blog/TreatmentCostsGuide';
import { PetPoisonsGuide } from '@/components/blog/PetPoisonsGuide';
import { DogEmergencyGuide } from '@/components/blog/DogEmergencyGuide';
import { CatEmergencyGuide } from '@/components/blog/CatEmergencyGuide';
import { HeatstrokeGuide } from '@/components/blog/HeatstrokeGuide';
import { ChokingGuide } from '@/components/blog/ChokingGuide';
import { AccidentGuide } from '@/components/blog/AccidentGuide';
import { InsuranceGuide } from '@/components/blog/InsuranceGuide';
import { PoisoningTreatmentGuide } from '@/components/blog/PoisoningTreatmentGuide';
import { EmergencyTransportGuide } from '@/components/blog/EmergencyTransportGuide';
import { PostEmergencyCareGuide } from '@/components/blog/PostEmergencyCareGuide';
import { EmergencyPreventionGuide } from '@/components/blog/EmergencyPreventionGuide';
import { InsuranceComparisonGuide } from '@/components/blog/InsuranceComparisonGuide';
import { CommonIllnessesGuide } from '@/components/blog/CommonIllnessesGuide';
import { GroomingTipsGuide } from '@/components/blog/GroomingTipsGuide';
import { VaccinationScheduleGuide } from '@/components/blog/VaccinationScheduleGuide';

const BlogPostPage = () => {
  const { slug, lang } = useParams();
  const navigate = useNavigate();

  // Redirect old slugs to correct ones
  useEffect(() => {
    if (slug && slugRedirects[slug]) {
      const correctSlug = slugRedirects[slug];
      const newPath = lang 
        ? `/${lang}/blog/${correctSlug}` 
        : `/blog/${correctSlug}`;
      navigate(newPath, { replace: true });
    }
  }, [slug, lang, navigate]);

  // If redirecting, show nothing while redirect happens
  if (slug && slugRedirects[slug]) {
    return null;
  }

  // Route to the appropriate blog post component
  if (slug === 'emergency-pet-care-guide') {
    return <EmergencyPetCareGuide />;
  }
  if (slug === 'pet-nutrition-guide-malaysia') {
    return <PetFoodBrandsGuide />;
  }
  if (slug === 'pet-emergency-symptoms-malaysia') {
    return <EmergencySymptomsGuide />;
  }
  if (slug === 'pet-emergency-guide-malaysia') {
    return <PetEmergencyGuide />;
  }
  if (slug === '24-hour-vet-directory-malaysia') {
    return <VetDirectoryGuide />;
  }
  if (slug === 'pet-emergency-first-aid-guide-malaysia') {
    return <FirstAidGuide />;
  }
  if (slug === 'pet-emergency-costs-malaysia') {
    return <TreatmentCostsGuide />;
  }
  if (slug === 'common-pet-poisons-malaysia') {
    return <PetPoisonsGuide />;
  }
  if (slug === 'dog-emergency-guide-malaysia') {
    return <DogEmergencyGuide />;
  }
  if (slug === 'cat-emergency-guide-malaysia') {
    return <CatEmergencyGuide />;
  }
  if (slug === 'pet-heatstroke-malaysia') {
    return <HeatstrokeGuide />;
  }
  if (slug === 'pet-choking-emergency-malaysia') {
    return <ChokingGuide />;
  }
  if (slug === 'pet-accident-emergency-malaysia') {
    return <AccidentGuide />;
  }
  if (slug === 'pet-insurance-malaysia') {
    return <InsuranceGuide />;
  }
  if (slug === 'pet-poisoning-treatment-malaysia') {
    return <PoisoningTreatmentGuide />;
  }
  if (slug === 'pet-emergency-transport-malaysia') {
    return <EmergencyTransportGuide />;
  }
  if (slug === 'post-emergency-pet-care-malaysia') {
    return <PostEmergencyCareGuide />;
  }
  if (slug === 'pet-emergency-prevention-malaysia') {
    return <EmergencyPreventionGuide />;
  }
  if (slug === 'pet-insurance-comparison') {
    return <InsuranceComparisonGuide />;
  }
  if (slug === 'common-pet-illnesses-malaysia') {
    return <CommonIllnessesGuide />;
  }
  if (slug === 'pet-grooming-tips') {
    return <GroomingTipsGuide />;
  }
  if (slug === 'vaccinations-schedule-pets') {
    return <VaccinationScheduleGuide />;
  }

  // Placeholder for other blog posts
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Coming Soon</h1>
          <p className="text-muted-foreground mb-6">This article is currently being written. Check back soon!</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;

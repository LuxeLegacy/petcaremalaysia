import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock, Globe, Star, AlertTriangle, CreditCard } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import { getVetDirectoryGuideContent } from '@/lib/blogTranslations';

interface VetClinic {
  name: string;
  location: string;
  phone: string;
  website?: string;
  hours: string;
  services: string[];
  whyChoose: string[];
  consultationFee: string;
  deposit: string;
  payment: string;
  parking?: string;
  review?: { rating: string; text: string };
}

const ClinicCard = ({ clinic, content }: { clinic: VetClinic; content: any }) => (
  <div className="bg-card border border-border p-6 rounded-xl mb-6">
    <h3 className="font-bold text-lg mb-4 text-primary">{clinic.name}</h3>
    
    <div className="grid md:grid-cols-2 gap-4 mb-4">
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
          <span>{clinic.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <a href={`tel:${clinic.phone.replace(/\s/g, '')}`} className="text-primary hover:underline font-medium">
            {clinic.phone}
          </a>
        </div>
        {clinic.website && (
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <span>{clinic.website}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium text-green-600">{clinic.hours}</span>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold text-sm text-muted-foreground mb-2">{content.servicesLabel}</h4>
        <ul className="text-sm space-y-1">
          {clinic.services.slice(0, 5).map((service, i) => (
            <li key={i}>• {service}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-muted/50 p-4 rounded-lg mb-4">
      <h4 className="font-semibold text-sm mb-2">{content.whyChoosePrefix} {clinic.name.split(' ')[0]}:</h4>
      <ul className="text-sm space-y-1">
        {clinic.whyChoose.map((reason, i) => (
          <li key={i}>✓ {reason}</li>
        ))}
      </ul>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">{content.consultationLabel}</div>
        <div className="font-semibold">{clinic.consultationFee}</div>
      </div>
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">{content.depositLabel}</div>
        <div className="font-semibold">{clinic.deposit}</div>
      </div>
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">{content.paymentLabel}</div>
        <div className="font-semibold text-xs">{clinic.payment}</div>
      </div>
    </div>

    {clinic.review && (
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-sm">{clinic.review.rating}</span>
        </div>
        <p className="text-sm text-muted-foreground italic">"{clinic.review.text}"</p>
      </div>
    )}
  </div>
);

export const VetDirectoryGuide = () => {
  const { language } = useLanguage();
  const content = getVetDirectoryGuideContent(language);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "24-Hour Veterinary Hospital Malaysia: Complete Emergency Vet Directory 2025",
    "description": "Find 24-hour emergency vet care in Malaysia.",
    "image": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=630&fit=crop",
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

  // Clinic data stays constant (not translated - names/addresses/phones don't change)
  const klangValleyClinics: VetClinic[] = [
    {
      name: "Animal Medical Center (AMC)",
      location: "19A, Jalan Tun Mohd Fuad 1, Taman Tun Dr Ismail, 60000 Kuala Lumpur",
      phone: "+603-7982 9199",
      website: "animalhospital.com.my",
      hours: "24/7/365 (TRUE 24-HOUR FACILITY)",
      services: ["Emergency and critical care (24-hour)", "Advanced surgery (orthopedic, soft tissue)", "ICU with ventilator support", "In-house laboratory and diagnostics", "Digital X-ray and ultrasound", "Blood transfusion services", "Specialist consultations"],
      whyChoose: ["Malaysia's FIRST accredited private veterinary hospital", "Only Malaysian hospital accredited by AAHA", "Board-certified emergency veterinarians on staff 24/7", "Most advanced ICU facilities in Malaysia"],
      consultationFee: "RM250-350",
      deposit: "RM1,000-3,000",
      payment: "Cash, credit card, debit card",
      parking: "Available on-site",
      review: { rating: "4.3/5", text: "Saved my dog's life after GDV bloat. Expensive but worth every ringgit." }
    },
    {
      name: "Gasing Veterinary Hospital",
      location: "2, Jalan 5/62A, Bandar Menjalara, 52200 Kuala Lumpur",
      phone: "+603-7957 2030",
      website: "gasingvet.com",
      hours: "24/7 emergency services",
      services: ["24-hour emergency care", "Critical care and ICU", "Emergency surgery", "Digital imaging (X-ray, ultrasound)", "In-house lab", "Oxygen therapy", "Hospitalization"],
      whyChoose: ["Established in 1995 (one of Malaysia's oldest 24-hour facilities)", "Experienced emergency team", "Well-equipped ICU", "Multiple veterinarians on night shifts"],
      consultationFee: "RM180-280",
      deposit: "RM500-2,000",
      payment: "Cash, credit card, online banking",
      review: { rating: "4.5/5", text: "Called at 2 AM for cat urinary obstruction. They were ready when we arrived." }
    },
    {
      name: "Starlight Veterinary Hospital",
      location: "USJ 21, Subang Jaya & Section 17, PJ",
      phone: "+6012-691 4745 (Subang) / +603-7932 8999 (PJ)",
      website: "starlight-vet.com.my",
      hours: "24/7 emergency services (both locations)",
      services: ["24-hour emergency and critical care", "Advanced surgical procedures", "ICU with monitoring", "Digital X-ray and ultrasound", "Endoscopy", "Specialist referrals"],
      whyChoose: ["Two convenient locations in Klang Valley", "Modern facilities with latest equipment", "Experienced emergency veterinarians", "Active social media presence with educational content"],
      consultationFee: "RM200-300",
      deposit: "RM800-2,500",
      payment: "Cash, card, online transfer",
      review: { rating: "4.4/5", text: "Brought my dog after being hit by car at midnight. Dr. Sarah was amazing." }
    },
    {
      name: "Windsor Animal Hospital",
      location: "23, Jalan Tengku Ampuan Zabedah C9/C, Seksyen 9, 40100 Shah Alam",
      phone: "+603-5191 1799",
      website: "windsor-animalhospital.com",
      hours: "24/7 emergency and critical care",
      services: ["24-hour emergency services", "Intensive care unit", "Emergency surgery", "Advanced diagnostics", "Oxygen therapy", "Blood transfusions"],
      whyChoose: ["Spacious modern facility", "Comprehensive emergency equipment", "Located in Shah Alam (convenient outside KL)", "Good track record with complex emergencies"],
      consultationFee: "RM220-320",
      deposit: "RM1,000-2,500",
      payment: "Cash, credit/debit cards",
      review: { rating: "4.2/5", text: "Emergency C-section at 4 AM. Mother and puppies all survived." }
    },
    {
      name: "St. Angel Animal Medical Centre",
      location: "1-2, Jalan Kasturi 3, Taman Kasturi, 68100 Kuala Lumpur",
      phone: "+603-4023 9299",
      website: "stangel.com.my",
      hours: "24/7 emergency services",
      services: ["24-hour emergency care", "Critical care unit", "Emergency surgery", "Imaging (X-ray, ultrasound)", "Laboratory diagnostics", "Multi-specialty consultations"],
      whyChoose: ["Strategic location near Jalan Ipoh", "Well-equipped emergency department", "Good for exotic pet emergencies", "Reasonable pricing"],
      consultationFee: "RM150-250",
      deposit: "RM600-2,000",
      payment: "Cash, credit card",
      review: { rating: "4.1/5", text: "Brought our rabbit at 11 PM with GI stasis. They have experience with exotics." }
    }
  ];

  const relatedArticleLinks = [
    "/blog/pet-emergency-guide-malaysia",
    "/blog/pet-emergency-transport-malaysia",
    "/blog/pet-emergency-costs-malaysia",
    "/blog/post-emergency-pet-care-malaysia",
  ];

  return (
    <ArticleLayout
      metaTitle={content.metaTitle}
      metaDescription={content.metaDescription}
      path="/blog/24-hour-vet-directory-malaysia"
      language={language}
      category={content.category}
      categoryColor="secondary"
      title={content.title}
      date={content.date}
      readTime={content.readTime}
      reviewedBy={content.reviewedBy}
      heroImage="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=600&fit=crop"
      heroImageAlt={content.heroImageAlt}
      heroImageCaption={content.heroImageCaption}
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title={content.emergencyTitle}
        text={content.emergencyText}
        buttonText={content.emergencyButton}
        buttonLink="/blog/pet-emergency-symptoms-malaysia"
      />

      <TLDRBox items={content.tldr} />

      <TableOfContents items={content.tocItems} />

      {/* Why Difficult Section */}
      <section id="why-difficult" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.whyDifficultTitle}</h2>
        
        <p className="text-muted-foreground mb-4">{content.whyDifficultP}</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {content.challenges.map((c: any, i: number) => (
            <div key={i} className="bg-muted/50 p-4 rounded-xl">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="text-sm font-medium">{content.verifiedNote}</p>
        </div>
      </section>

      {/* Klang Valley Section */}
      <section id="klang-valley" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          {content.klangValleyTitle}
        </h2>
        
        <p className="text-muted-foreground mb-6">{content.klangValleyIntro}</p>

        {klangValleyClinics.map((clinic, index) => (
          <ClinicCard key={index} clinic={clinic} content={content} />
        ))}
      </section>

      {/* Penang Section */}
      <section id="penang" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          {content.penangTitle}
        </h2>

        <ClinicCard content={content} clinic={{
          name: "Gill's Veterinary Clinic",
          location: "416, Jalan Burma, Pulau Tikus, 10350 George Town, Penang",
          phone: "+604-228 8735 / +6012-498 8735 (Emergency)",
          website: "gillsvet.com",
          hours: "24/7 emergency services",
          services: ["24-hour emergency care", "Critical care unit", "Emergency surgery", "Digital diagnostics", "Hospitalization", "Specialist consultations"],
          whyChoose: ["Penang's PRIMARY 24-hour emergency facility", "Serving North Peninsular Malaysia", "Experienced with tropical diseases", "Only true 24/7 option in Penang"],
          consultationFee: "RM180-280",
          deposit: "RM800-2,500",
          payment: "Cash, card",
          review: { rating: "4.4/5", text: "Only place open at 3 AM in Penang when my cat had urinary blockage." }
        }} />
      </section>

      {/* Johor Section */}
      <section id="johor" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          {content.johorTitle}
        </h2>

        <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl mb-6">
          <p className="text-sm">
            <AlertTriangle className="h-4 w-4 inline mr-2 text-yellow-600" />
            {content.johorWarning}
          </p>
        </div>

        <ClinicCard content={content} clinic={{
          name: "Pets City Veterinary Clinic",
          location: "12, Jalan Setia 5/1, Taman Setia Indah, 81100 Johor Bahru",
          phone: "+607-361 1823 / +6012-789 4567 (Emergency)",
          hours: "24/7 emergency hotline (on-call service)",
          services: ["Emergency consultations (on-call)", "Basic emergency care", "Referrals for complex cases"],
          whyChoose: ["On-call emergency services available", "Good for initial assessment", "Will refer to larger hospitals if needed"],
          consultationFee: "RM150-250",
          deposit: "RM500-1,500",
          payment: "Cash, card"
        }} />
      </section>

      {/* Melaka Section */}
      <section id="melaka" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          {content.melakaTitle}
        </h2>

        <ClinicCard content={content} clinic={{
          name: "KimVets: Animal & Veterinary Clinic Melaka",
          location: "No. 21 & 23, Jalan Tun Ali, 75350 Melaka",
          phone: "+606-283 7998 / +6012-622 7998 (Emergency)",
          website: "kimvets.com.my",
          hours: "24-hour emergency services",
          services: ["24-hour emergency hotline", "Emergency consultations", "Basic emergency care", "Surgery (scheduled)", "Digital X-ray"],
          whyChoose: ["Melaka's primary emergency option", "24-hour hotline available", "Experienced team"],
          consultationFee: "RM120-220",
          deposit: "RM500-1,500",
          payment: "Cash, card"
        }} />
      </section>

      {/* Before Going Section */}
      <section id="before-going" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.beforeGoingTitle}</h2>

        <div className="space-y-4">
          {content.beforeGoingSteps.map((step: any, i: number) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                {i === 2 && <CreditCard className="h-4 w-4" />}
                {step.title}
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {step.items.map((item: string, j: number) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-4">
          {content.learnFirstAidText} <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">{content.learnFirstAidLink}</InternalLink> {content.learnFirstAidAfter}
        </p>
      </section>

      {/* Cost Comparison Section */}
      <section id="cost-comparison" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">{content.costComparisonTitle}</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                {content.costTableHeaders.map((h: string, i: number) => (
                  <th key={i} className="text-left p-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.costTableRows.map((row: string[], i: number) => (
                <tr key={i} className={`border-t border-border ${i % 2 === 1 ? 'bg-muted/20' : ''}`}>
                  {row.map((cell: string, j: number) => (
                    <td key={j} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          {content.costDetailText} <InternalLink to="/blog/pet-emergency-costs-malaysia">{content.costDetailLink}</InternalLink>.
        </p>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{content.faqTitle}</h2>
        
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
        
        <p className="text-muted-foreground mb-4">{content.conclusionP}</p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">{content.actionTitle}</h3>
          <ul className="space-y-2">
            {content.actionItems.map((item: string, i: number) => (
              <li key={i}>✓ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CostCTA variant={2} />

      <RelatedArticles articles={content.relatedArticles.map((a: any, i: number) => ({
        to: relatedArticleLinks[i],
        title: a.title,
        description: a.description,
      }))} />
    </ArticleLayout>
  );
};

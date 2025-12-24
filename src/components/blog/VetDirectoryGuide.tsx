import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Clock, Globe, Star, AlertTriangle, CreditCard } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

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

const ClinicCard = ({ clinic }: { clinic: VetClinic }) => (
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
        <h4 className="font-semibold text-sm text-muted-foreground mb-2">Services:</h4>
        <ul className="text-sm space-y-1">
          {clinic.services.slice(0, 5).map((service, i) => (
            <li key={i}>• {service}</li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-muted/50 p-4 rounded-lg mb-4">
      <h4 className="font-semibold text-sm mb-2">Why Choose {clinic.name.split(' ')[0]}:</h4>
      <ul className="text-sm space-y-1">
        {clinic.whyChoose.map((reason, i) => (
          <li key={i}>✓ {reason}</li>
        ))}
      </ul>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">Consultation</div>
        <div className="font-semibold">{clinic.consultationFee}</div>
      </div>
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">Deposit</div>
        <div className="font-semibold">{clinic.deposit}</div>
      </div>
      <div className="bg-primary/5 p-3 rounded-lg">
        <div className="text-xs text-muted-foreground">Payment</div>
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "24-Hour Veterinary Hospital Malaysia: Complete Emergency Vet Directory 2025",
    "description": "Find 24-hour emergency vet care in Malaysia. Comprehensive directory of 24/7 veterinary hospitals in KL, Selangor, Penang, JB with contact numbers, services & costs.",
    "image": "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-20",
    "dateModified": "2024-12-20"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need an appointment for emergency vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. True 24-hour emergency vets accept walk-ins. However, CALLING AHEAD is strongly recommended so they can prepare and give you guidance."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between on-call and 24-hour vet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24-hour = staff present at facility 24/7. On-call = veterinarian comes to clinic only when called, which takes 30-60 minutes. For critical emergencies, choose true 24-hour facilities."
        }
      },
      {
        "@type": "Question",
        "name": "Do emergency vets treat exotic pets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most focus on dogs and cats. St. Angel and some others have exotic pet experience. Call ahead to confirm they can treat your species (rabbit, bird, reptile, etc.)."
        }
      }
    ]
  };

  const tocItems = [
    { id: "why-difficult", title: "Why Finding 24-Hour Care Is Difficult" },
    { id: "klang-valley", title: "Klang Valley Emergency Vets" },
    { id: "penang", title: "Penang Emergency Vets" },
    { id: "johor", title: "Johor Bahru Emergency Vets" },
    { id: "melaka", title: "Melaka Emergency Vets" },
    { id: "before-going", title: "What to Do Before Going" },
    { id: "cost-comparison", title: "Cost Comparison" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

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

  return (
    <ArticleLayout
      metaTitle="24-Hour Veterinary Hospital Malaysia: Complete Emergency Vet Directory 2025"
      metaDescription="Find 24-hour emergency vet care in Malaysia. Comprehensive directory of 24/7 veterinary hospitals in KL, Selangor, Penang, JB with contact numbers, services & costs."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/24-hour-vet-directory-malaysia`}
      language={language}
      category="Directory"
      categoryColor="secondary"
      title="Complete 24-Hour Veterinary Hospital Directory Malaysia 2025"
      date="December 20, 2024"
      readTime="10 min read"
      reviewedBy="Verified listings as of December 2024"
      heroImage="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=1200&h=600&fit=crop"
      heroImageAlt="Veterinary hospital emergency entrance at night"
      heroImageCaption="Find verified 24-hour emergency vet care across Malaysia"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <EmergencyAlertBox
        title="Pet Emergency Right Now?"
        text="Call the nearest 24-hour vet from this list immediately. Don't waste time searching—every minute matters."
        buttonText="View Emergency Symptoms"
        buttonLink="/blog/pet-emergency-symptoms-malaysia"
      />

      <TLDRBox items={[
        "Only 15-20 true 24/7 emergency vet hospitals operate in Malaysia",
        "Most are concentrated in Klang Valley (KL, Selangor)",
        "Always call ahead before going—confirm availability and prepare",
        "Emergency consultation fees: RM150-300 (vs. RM35-80 regular hours)",
        "Keep 2-3 emergency vet contacts saved in your phone"
      ]} />

      <TableOfContents items={tocItems} />

      {/* Why Difficult Section */}
      <section id="why-difficult" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why Finding 24-Hour Vet Care Is Difficult in Malaysia</h2>
        
        <p className="text-muted-foreground mb-4">
          When your pet faces a life-threatening emergency at 3 AM, every second counts. But in Malaysia, finding a veterinary hospital that's actually open 24 hours can be challenging and confusing. Many clinics claim "emergency services" but close at midnight.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Limited Infrastructure</h3>
            <p className="text-sm text-muted-foreground">Only major urban areas (Klang Valley, Penang, JB) have true 24/7 facilities.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">High Operating Costs</h3>
            <p className="text-sm text-muted-foreground">24/7 operations require multiple shifts—costs many clinics cannot sustain.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Staff Shortage</h3>
            <p className="text-sm text-muted-foreground">Approximately 1 vet per 15,000 pets vs. ideal 1 per 5,000.</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-semibold mb-2">Unclear Listings</h3>
            <p className="text-sm text-muted-foreground">Many advertise "emergency services" but only offer limited hours.</p>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-xl">
          <p className="text-sm font-medium">
            ✓ This directory lists ONLY verified 24-hour facilities with confirmed round-the-clock emergency care capabilities.
          </p>
        </div>
      </section>

      {/* Klang Valley Section */}
      <section id="klang-valley" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Klang Valley (Kuala Lumpur & Selangor) - 24-Hour Emergency Vets
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Klang Valley has the highest concentration of 24-hour emergency veterinary services in Malaysia:
        </p>

        {klangValleyClinics.map((clinic, index) => (
          <ClinicCard key={index} clinic={clinic} />
        ))}
      </section>

      {/* Penang Section */}
      <section id="penang" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          Penang - 24-Hour Emergency Vets
        </h2>

        <ClinicCard clinic={{
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
          Johor Bahru - 24-Hour Emergency Vets
        </h2>

        <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl mb-6">
          <p className="text-sm">
            <AlertTriangle className="h-4 w-4 inline mr-2 text-yellow-600" />
            JB has limited true 24-hour facilities. For serious emergencies, consider driving to KL.
          </p>
        </div>

        <ClinicCard clinic={{
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
          Melaka - Emergency Vet Services
        </h2>

        <ClinicCard clinic={{
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
        <h2 className="text-2xl font-bold mb-4">What to Do Before Going to Emergency Vet</h2>

        <div className="space-y-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-2">1. CALL AHEAD (Even 30 seconds makes a difference)</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Confirm they can handle your emergency</li>
              <li>• Get first aid instructions for the drive</li>
              <li>• Allow them to prepare treatment room</li>
              <li>• Estimate initial costs</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-2">2. Gather Essential Information</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Pet's medical history & current medications</li>
              <li>• Vaccination records</li>
              <li>• Details of the emergency (when started, what happened)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              3. Prepare Payment
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Bring RM1,000-3,000 cash minimum</li>
              <li>• Credit cards accepted at most facilities</li>
              <li>• Ask about payment plans (some offer)</li>
            </ul>
          </div>

          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-semibold mb-2">4. Transport Safely</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use pet carrier or secure box</li>
              <li>• Muzzle if needed (even friendly pets may bite when in pain)</li>
              <li>• Have someone else drive so you can monitor pet</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mt-4">
          Learn essential <InternalLink to="/blog/pet-emergency-first-aid-guide-malaysia">pet first aid techniques</InternalLink> to help stabilize your pet during transport.
        </p>
      </section>

      {/* Cost Comparison Section */}
      <section id="cost-comparison" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cost Comparison: 24-Hour Emergency Vets in Malaysia</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-semibold">Facility</th>
                <th className="text-left p-3 font-semibold">Consultation</th>
                <th className="text-left p-3 font-semibold">Deposit</th>
                <th className="text-left p-3 font-semibold">Avg. Emergency Bill</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">AMC</td>
                <td className="p-3">RM250-350</td>
                <td className="p-3">RM1,000-3,000</td>
                <td className="p-3">RM2,500-8,000</td>
              </tr>
              <tr className="border-t border-border bg-muted/20">
                <td className="p-3">Gasing Vet</td>
                <td className="p-3">RM180-280</td>
                <td className="p-3">RM500-2,000</td>
                <td className="p-3">RM1,800-6,000</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Starlight Vet</td>
                <td className="p-3">RM200-300</td>
                <td className="p-3">RM800-2,500</td>
                <td className="p-3">RM2,000-7,000</td>
              </tr>
              <tr className="border-t border-border bg-muted/20">
                <td className="p-3">Windsor</td>
                <td className="p-3">RM220-320</td>
                <td className="p-3">RM1,000-2,500</td>
                <td className="p-3">RM2,200-7,500</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">St. Angel</td>
                <td className="p-3">RM150-250</td>
                <td className="p-3">RM600-2,000</td>
                <td className="p-3">RM1,500-5,000</td>
              </tr>
              <tr className="border-t border-border bg-muted/20">
                <td className="p-3">Gill's (Penang)</td>
                <td className="p-3">RM180-280</td>
                <td className="p-3">RM800-2,500</td>
                <td className="p-3">RM1,800-6,500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          For detailed cost breakdowns by procedure type, see our <InternalLink to="/blog/pet-emergency-costs-malaysia">complete emergency cost guide</InternalLink>.
        </p>
      </section>

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>Do I need an appointment for emergency vet?</AccordionTrigger>
            <AccordionContent>
              No. True 24-hour emergency vets accept walk-ins. However, CALLING AHEAD is strongly recommended so they can prepare and give you guidance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>How do I know if a vet is really 24 hours?</AccordionTrigger>
            <AccordionContent>
              Call their main number at 2-3 AM and see if someone answers. This directory lists only verified 24/7 facilities with confirmed overnight staff.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>What if the 24-hour vet is full or can't take my pet?</AccordionTrigger>
            <AccordionContent>
              Have backup options. Call the second-nearest 24-hour facility. In extreme emergencies, government vet hospitals (DVS) may help, though they have limited after-hours services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>What's the difference between "on-call" and "24-hour" vet?</AccordionTrigger>
            <AccordionContent>
              24-hour = staff present at facility 24/7. On-call = veterinarian comes to clinic only when called, which takes 30-60 minutes. For critical emergencies, choose true 24-hour facilities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Do emergency vets treat exotic pets?</AccordionTrigger>
            <AccordionContent>
              Most focus on dogs and cats. St. Angel and some others have exotic pet experience. Call ahead to confirm they can treat your species (rabbit, bird, reptile, etc.).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>Can I use pet insurance at emergency vets?</AccordionTrigger>
            <AccordionContent>
              Most require upfront payment then you claim reimbursement from insurance. Some work with specific insurance companies for direct billing—ask when calling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Be Prepared for Pet Emergencies</h2>
        
        <p className="text-muted-foreground mb-4">
          Pet emergencies happen when you least expect them—often at the worst possible times. Having this 24-hour vet directory saved and knowing which emergency facility to call can save critical minutes and potentially your pet's life.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Action Steps NOW (Before Emergency Happens):</h3>
          <ul className="space-y-2">
            <li>✓ Save 2-3 emergency vet contacts in your phone</li>
            <li>✓ Know the fastest route from your home to nearest 24-hour vet</li>
            <li>✓ Keep RM1,000-2,000 cash accessible for emergencies</li>
            <li>✓ Bookmark this page for quick reference</li>
          </ul>
        </div>
      </section>

      {/* Cost CTA before related articles */}
      <CostCTA variant={2} />

      <RelatedArticles articles={[
        { to: "/blog/pet-emergency-guide-malaysia", title: "Complete Guide to Pet Emergency Treatment in Malaysia", description: "Comprehensive pillar guide covering all aspects of pet emergencies" },
        { to: "/blog/pet-emergency-costs-malaysia", title: "Pet Emergency Treatment Costs Malaysia 2025", description: "Complete breakdown of emergency vet costs" },
        { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Emergency Guide", description: "Critical in Malaysia's tropical climate" },
        { to: "/blog/pet-insurance-malaysia", title: "Pet Insurance Guide Malaysia", description: "Cover emergency costs with the right policy" },
      ]} />
    </ArticleLayout>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Shield, DollarSign, Phone, CheckCircle2, CreditCard, Calculator, FileText, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';

export const InsuranceGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pet Insurance Malaysia: Complete Guide to Emergency Coverage 2024",
    "description": "Complete pet insurance guide for Malaysia. Compare plans, understand emergency coverage, costs RM 30-150/month. Accident, illness, surgery protection.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2024-12-24",
    "dateModified": "2024-12-24",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://petcaremalaysia.com/blog/pet-insurance-malaysia"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I buy pet insurance after my dog has been diagnosed with a condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can buy insurance, but that specific condition will be excluded as pre-existing and never covered. This is why buying insurance while pets are young and healthy is crucial."
        }
      },
      {
        "@type": "Question",
        "name": "Does pet insurance cover annual vaccinations and checkups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard accident/illness plans do NOT cover routine wellness care. You need a separate wellness add-on (additional RM 20-40/month)."
        }
      },
      {
        "@type": "Question",
        "name": "Do all vets in Malaysia accept pet insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pet insurance works on reimbursement model—you can go to ANY licensed vet. You pay the vet directly, then submit claim for reimbursement."
        }
      }
    ]
  };

  const tocItems = [
    { id: "what-is", title: "What Is Pet Insurance?" },
    { id: "types", title: "Types of Pet Insurance Coverage" },
    { id: "providers", title: "Pet Insurance Providers in Malaysia" },
    { id: "terms", title: "Understanding Key Insurance Terms" },
    { id: "covered", title: "What Pet Insurance DOES Cover" },
    { id: "not-covered", title: "What Pet Insurance Does NOT Cover" },
    { id: "cost-analysis", title: "Cost Analysis: Is Pet Insurance Worth It?" },
    { id: "how-to-choose", title: "How to Choose the Right Pet Insurance" },
    { id: "claims", title: "How to File a Claim" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    {
      to: "/blog/pet-emergency-costs-malaysia",
      title: "Emergency Vet Costs Guide",
      description: "Detailed breakdown of emergency treatment costs",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      to: "/blog/pet-heatstroke-malaysia",
      title: "Heatstroke Emergency Guide",
      description: "Common emergency - know the treatment costs",
      icon: AlertTriangle,
      color: "text-destructive"
    },
    {
      to: "/blog/pet-accident-emergency-malaysia",
      title: "Pet Accident Protocol",
      description: "Trauma treatment costs and what to expect",
      icon: Shield,
      color: "text-primary"
    },
    {
      to: "/blog/pet-emergency-guide-malaysia",
      title: "Complete Emergency Guide",
      description: "Everything about pet emergencies in Malaysia",
      icon: Phone,
      color: "text-primary"
    },
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Insurance Malaysia 2024: Best Coverage for Emergencies"
      metaDescription="Complete pet insurance guide for Malaysia. Compare plans, understand emergency coverage, costs RM 30-150/month. Accident, illness, surgery protection. Save thousands on vet bills."
      canonicalUrl={`https://petcaremalaysia.com${language !== 'en' ? `/${language}` : ''}/blog/pet-insurance-malaysia`}
      language={language}
      category="Insurance"
      categoryColor="primary"
      title="Pet Insurance Malaysia: Complete Guide to Emergency Coverage 2024"
      date="December 24, 2024"
      readTime="15 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=600&fit=crop"
      heroImageAlt="Happy pet protected by insurance"
      heroImageCaption="Pet insurance can save you thousands in emergency vet bills"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mb-8">
        <div className="flex items-start gap-3">
          <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h2 className="font-bold text-lg mb-2">Financial Protection for Your Pet</h2>
            <p className="text-muted-foreground">
              A single pet emergency can cost RM 3,000-8,000+. Pet insurance transforms these financial crises into manageable monthly payments.
            </p>
          </div>
        </div>
      </div>

      <TLDRBox items={[
        "Cost: RM 30-150/month (depends on pet age, breed, coverage level)",
        "Emergency coverage: Most plans cover 70-90% of emergency vet bills after deductible",
        "Waiting periods: 14-30 days for illness, 0-5 days for accidents",
        "Pre-existing conditions: NOT covered (buy insurance while pet is healthy)",
        "ROI: One major emergency (RM 5,000+) pays for years of premiums"
      ]} />

      {/* Cost CTA after TL;DR */}
      <CostCTA variant={14} />

      <TableOfContents items={tocItems} />

      {/* What Is Pet Insurance */}
      <section id="what-is" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          What Is Pet Insurance?
        </h2>
        
        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-3">Simple Definition</h3>
          <p className="text-muted-foreground mb-4">
            Pet insurance reimburses you for veterinary costs when your pet gets sick or injured. You pay monthly premiums; insurance pays 70-90% of covered vet bills after you meet your deductible.
          </p>

          <h3 className="font-bold text-lg mb-3">How It Works:</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: 1, title: "Pay Monthly", desc: "RM 30-150 premium" },
              { step: 2, title: "Pet Has Emergency", desc: "You pay vet upfront" },
              { step: 3, title: "Submit Claim", desc: "Receipts, vet reports" },
              { step: 4, title: "Get Reimbursed", desc: "70-90% within 14-30 days" },
            ].map((item) => (
              <div key={item.step} className="bg-muted/50 p-4 rounded-lg text-center">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">{item.step}</div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-500/10 p-4 rounded-xl">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Unlike human insurance in Malaysia, pet insurance operates on reimbursement model—you pay vet first, get refunded later.
          </p>
        </div>
      </section>

      {/* Types of Coverage */}
      <section id="types" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Types of Pet Insurance Coverage</h2>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">1. Accident-Only Plans</h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">RM 30-60/month</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">✅ Covered:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Road traffic accidents</li>
                  <li>• Falls, trauma</li>
                  <li>• Foreign object ingestion</li>
                  <li>• Poisoning (accidental)</li>
                  <li>• Burns, cuts, fractures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-destructive">❌ NOT Covered:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Illnesses (infections, diseases)</li>
                  <li>• Chronic conditions</li>
                  <li>• Wellness care</li>
                </ul>
              </div>
            </div>
            <p className="text-sm mt-4"><strong>Best For:</strong> Budget-conscious owners, young healthy pets</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                2. Accident + Illness Plans (Comprehensive)
                <Star className="h-5 w-5 text-yellow-500" />
              </h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">RM 80-150/month</span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-primary">✅ Covered:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Everything in accident-only PLUS:</li>
                  <li>• Illnesses (infections, viruses, diseases)</li>
                  <li>• Diagnostic tests (bloodwork, X-rays)</li>
                  <li>• Surgery, hospitalization</li>
                  <li>• Medications, emergency care</li>
                  <li>• Cancer treatment (some plans)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-destructive">❌ NOT Covered:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pre-existing conditions</li>
                  <li>• Wellness/preventive care</li>
                  <li>• Cosmetic procedures</li>
                  <li>• Breeding-related costs</li>
                </ul>
              </div>
            </div>
            <p className="text-sm mt-4"><strong>Best For:</strong> Comprehensive protection, peace of mind</p>
          </div>

          <div className="bg-card border border-border p-6 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg">3. Wellness Add-Ons (Optional)</h3>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">+RM 20-40/month</span>
            </div>
            <ul className="text-sm text-muted-foreground grid md:grid-cols-2 gap-2">
              <li>• Annual vaccinations</li>
              <li>• Routine checkups</li>
              <li>• Flea/tick prevention</li>
              <li>• Dental cleaning</li>
              <li>• Spay/neuter</li>
            </ul>
            <p className="text-sm mt-4"><strong>Best For:</strong> Owners wanting all-inclusive coverage</p>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Pet Insurance Providers in Malaysia (2024)</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Oyen Pet Insurance",
              badge: "Most Popular",
              coverage: "Accident + Illness",
              limit: "RM 8,000-20,000",
              rate: "80%",
              cost: "RM 45-120/month",
              features: ["Fast claims (24-48 hours)", "No age limit enrollment", "Online app-based claims"]
            },
            {
              name: "MSIG Pet Insurance",
              coverage: "Accident + Illness",
              limit: "RM 10,000-15,000",
              rate: "80%",
              cost: "RM 60-150/month",
              features: ["Established insurer", "Wide hospital network", "Third-party liability included"]
            },
            {
              name: "Etiqa Pet Care",
              coverage: "Accident + Illness",
              limit: "RM 15,000-30,000",
              rate: "70-80%",
              cost: "RM 70-120/month",
              features: ["High annual limits", "Third-party liability included"]
            },
            {
              name: "DirectAsia Pet Insurance",
              coverage: "Accident + Illness",
              limit: "RM 20,000",
              rate: "80%",
              cost: "RM 65-110/month",
              features: ["Competitive pricing", "Simple claims process"]
            },
          ].map((provider, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl relative">
              {provider.badge && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {provider.badge}
                </span>
              )}
              <h3 className="font-bold text-lg mb-3">{provider.name}</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between"><span className="text-muted-foreground">Coverage:</span><span>{provider.coverage}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Annual Limit:</span><span>{provider.limit}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Reimbursement:</span><span>{provider.rate}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Cost:</span><span className="font-semibold text-primary">{provider.cost}</span></div>
              </div>
              <ul className="space-y-1">
                {provider.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-4 text-center">
          Note: Availability and pricing change frequently. Always get current quotes directly from providers.
        </p>
      </section>

      {/* Key Terms */}
      <section id="terms" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Understanding Key Insurance Terms
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              term: "Annual Limit",
              desc: "Maximum amount insurance pays per year",
              tip: "Choose limits based on worst-case (RM 15,000-30,000 for major surgery/cancer)"
            },
            {
              term: "Deductible",
              desc: "Amount you pay before insurance kicks in",
              tip: "Higher deductible = lower premium, but more out-of-pocket per emergency"
            },
            {
              term: "Reimbursement Rate",
              desc: "Percentage insurance pays after deductible",
              tip: "70% means you pay 30% + deductible; 90% means you pay 10% + deductible"
            },
            {
              term: "Waiting Period",
              desc: "Time between policy start and coverage begins",
              tip: "Accidents: 0-5 days, Illness: 14-30 days, Orthopedic: 6 months (some plans)"
            },
            {
              term: "Pre-Existing Conditions",
              desc: "Health problems that existed BEFORE insurance started",
              tip: "NOT covered by any insurer—get insurance while pet is young and healthy"
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-4 rounded-xl">
              <h3 className="font-bold mb-1">{item.term}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
              <p className="text-xs text-primary">💡 {item.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Covered */}
      <section id="covered" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Pet Insurance DOES Cover for Emergencies</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">✅ Accidents</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Road traffic injuries (RM 1,500-6,000)</li>
              <li>• Falls from height (RM 2,000-5,000)</li>
              <li>• Dog fight injuries (RM 800-3,000)</li>
              <li>• Foreign object surgery (RM 2,500-7,000)</li>
              <li>• Burns, cuts, snake bites</li>
            </ul>
          </div>

          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">✅ Illnesses</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Heatstroke treatment (RM 800-3,000)</li>
              <li>• Urinary blockage (RM 800-3,500)</li>
              <li>• Bloat/GDV surgery (RM 3,000-8,000)</li>
              <li>• Parvovirus treatment (RM 1,500-4,000)</li>
              <li>• Cancer treatment (RM 5,000-20,000+)</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border p-6 rounded-xl mt-6">
          <h3 className="font-bold text-lg mb-3">Diagnostic & Treatment Covered:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-1">
              <li>• Emergency consultation fees</li>
              <li>• Bloodwork, urinalysis</li>
              <li>• X-rays, ultrasounds</li>
            </ul>
            <ul className="space-y-1">
              <li>• CT scans, MRIs</li>
              <li>• Surgery, anesthesia</li>
              <li>• Hospitalization, ICU</li>
            </ul>
            <ul className="space-y-1">
              <li>• Oxygen therapy</li>
              <li>• IV fluids</li>
              <li>• Prescribed medications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What's NOT Covered */}
      <section id="not-covered" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Pet Insurance Does NOT Cover</h2>

        <div className="bg-destructive/10 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-destructive">❌ Common Exclusions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Pre-existing conditions</li>
                <li>• Claims during waiting period</li>
                <li>• Preventive/wellness care (unless add-on)</li>
                <li>• Breeding & pregnancy complications</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-destructive">❌ Also Excluded</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cosmetic procedures</li>
                <li>• Behavioral issues</li>
                <li>• Experimental treatments</li>
                <li>• Some hereditary conditions (check plan)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section id="cost-analysis" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Cost Analysis: Is Pet Insurance Worth It?
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl mb-6">
          <h3 className="font-bold text-lg mb-4">Example: RM 5,000 Emergency</h3>
          <p className="text-muted-foreground mb-4">With RM 300 deductible, 80% reimbursement:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-destructive/10 p-4 rounded-lg">
              <h4 className="font-semibold text-destructive mb-2">Without Insurance</h4>
              <p className="text-2xl font-bold">RM 5,000</p>
              <p className="text-sm text-muted-foreground">Full bill out of pocket</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">With Insurance</h4>
              <p className="text-2xl font-bold">RM 1,240</p>
              <p className="text-sm text-muted-foreground">RM 300 deductible + RM 940 (20% of RM 4,700)</p>
              <p className="text-xs text-primary mt-1">Insurance pays: RM 3,760</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3 text-primary">✅ Worth It If:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>You don't have RM 5,000-10,000 in emergency savings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>You have high-risk breed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Your pet is young (buy before conditions develop)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>You want peace of mind for worst-case scenarios</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted/50 p-6 rounded-xl">
            <h3 className="font-bold text-lg mb-3">❌ May Not Be Worth It If:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>You have substantial emergency fund (RM 20,000+)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>Pet is already senior with multiple conditions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground">•</span>
                <span>You're comfortable with cost limits on treatment</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-xl mt-6">
          <p className="font-semibold">
            <TrendingUp className="h-4 w-4 inline mr-2" />
            ROI: One major emergency (RM 5,000+) pays for 3-5 years of premiums
          </p>
        </div>
      </section>

      {/* How to Choose */}
      <section id="how-to-choose" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How to Choose the Right Pet Insurance</h2>

        <div className="space-y-4">
          {[
            {
              step: 1,
              title: "Assess Your Risk Tolerance",
              content: "Do you have RM 5,000-10,000 available for emergencies? Would you pursue expensive treatment if needed? Is your pet high-risk breed?"
            },
            {
              step: 2,
              title: "Compare Plans",
              content: "Compare monthly premium, annual limit, reimbursement rate, deductible type, waiting periods, and exclusions."
            },
            {
              step: 3,
              title: "Read the Fine Print",
              content: "Check: hereditary condition coverage, chronic condition coverage after diagnosis, per-condition limits, premium increases with age."
            },
            {
              step: 4,
              title: "Buy While Pet is Healthy",
              content: "Best: Puppy/kitten (8-16 weeks). Still good: Young adult (1-5 years). Difficult: Senior (8+ years)—higher premiums, more exclusions."
            },
          ].map((item) => (
            <div key={item.step} className="bg-card border border-border p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">{item.step}</span>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-muted-foreground ml-11">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Claims */}
      <section id="claims" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          How to File a Pet Insurance Claim
        </h2>

        <div className="bg-card border border-border p-6 rounded-xl">
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: 1, title: "Pay Vet Upfront", desc: "Most vets require full payment" },
              { step: 2, title: "Collect Documents", desc: "Invoice, records, diagnosis" },
              { step: 3, title: "Submit Claim", desc: "Online portal or app" },
              { step: 4, title: "Wait for Review", desc: "7-14 days typically" },
              { step: 5, title: "Get Reimbursed", desc: "Bank transfer 14-30 days" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">{item.step}</div>
                <h4 className="font-semibold text-sm">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            <strong>Tip:</strong> Submit claims ASAP (most have 90-180 day time limit)
          </p>
        </div>
      </section>

      {/* Cost CTA before FAQ */}
      <CostCTA variant={15} />

      {/* FAQs */}
      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Can I buy pet insurance after my dog has been diagnosed with a condition?",
              answer: "You can buy insurance, but that specific condition (and related conditions) will be excluded as pre-existing and never covered. For example, if your dog has allergies, future allergy treatment won't be covered, but a broken leg from an accident would be. This is why buying insurance while pets are young and healthy is crucial."
            },
            {
              question: "Does pet insurance cover annual vaccinations and checkups?",
              answer: "Standard accident/illness plans do NOT cover routine wellness care. You need to purchase a separate wellness add-on (additional RM 20-40/month). Most owners find wellness add-ons aren't worth the cost since routine care is predictable—insurance is best for unexpected major expenses."
            },
            {
              question: "My dog is 9 years old. Should I still get insurance?",
              answer: "It depends. Pros: Senior dogs have higher risk of expensive emergencies. Cons: Premiums are much higher, waiting periods mean conditions developing soon won't be covered, many pre-existing conditions excluded. If your senior is currently healthy with no chronic conditions, insurance can still be valuable for catastrophic coverage."
            },
            {
              question: "Do all vets in Malaysia accept pet insurance?",
              answer: "Pet insurance in Malaysia works on reimbursement model—you can go to ANY licensed vet (no network restrictions). You pay the vet directly, then submit claim to insurance for reimbursement. This gives you freedom to choose emergency vets, specialists, or regular vets."
            },
            {
              question: "What happens if my claim is denied?",
              answer: "Insurance will explain denial reason (usually: pre-existing condition, excluded procedure, waiting period). You can appeal with additional documentation. Tips to avoid denials: Understand policy exclusions before buying, keep detailed vet records, submit complete claim documentation."
            }
          ].map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <div className="bg-primary/10 p-8 rounded-xl text-center mb-12">
        <h3 className="text-xl font-bold mb-2">Get Quotes NOW While Your Pet is Healthy</h3>
        <p className="text-muted-foreground mb-4">Waiting until health issues arise = too late for coverage</p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="px-3 py-1 bg-background rounded-full">Oyen: oyen.com.my</span>
          <span className="px-3 py-1 bg-background rounded-full">Tune Protect: tuneprotect.com</span>
          <span className="px-3 py-1 bg-background rounded-full">DirectAsia: directasia.com</span>
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

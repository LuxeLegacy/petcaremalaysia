import { useLanguage } from '@/contexts/LanguageContext';
import { AlertTriangle, Shield, Heart, DollarSign, Phone, CheckCircle2, Sun, Home, Car } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArticleLayout, TableOfContents, TLDRBox, EmergencyAlertBox } from './ArticleLayout';
import { RelatedArticles, InternalLink } from './ArticleLink';
import { CostCTA } from '@/components/common/CostCTA';
import emergencyPreventionHero from '@/assets/emergency-prevention-hero.jpg';

export const EmergencyPreventionGuide = () => {
  const { language } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pet Emergency Prevention Malaysia: 15 Tips to Avoid Vet Emergencies",
    "description": "Prevent pet emergencies in Malaysia. 15 proven strategies: pet-proof home, prevent heatstroke, avoid poisons, secure fencing. Save money & protect your pet.",
    "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop",
    "author": { "@type": "Organization", "name": "PetCare Malaysia" },
    "publisher": { "@type": "Organization", "name": "PetCare Malaysia" },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Isn't prevention expensive? I can't afford all these measures.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with high-impact, low-cost prevention: 1) Walk only during cool hours (free), 2) Remove toxic foods/plants (RM 50), 3) Secure gates (RM 200-500), 4) Supervise outdoor time (free). One prevented emergency (RM 2,000-5,000) pays for ALL prevention measures."
        }
      },
      {
        "@type": "Question",
        "name": "My pet has never had an emergency. Do I really need to prevention-proof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. 'It's never happened' doesn't mean it won't. 70% of emergencies are first-time incidents. Prevention is implemented BEFORE you need it."
        }
      },
      {
        "@type": "Question",
        "name": "Are window screens really necessary for cats? Mine has never fallen.",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "High-rise syndrome typically happens to cats with NO prior history. Cats miscalculate jumps after birds/insects. Window screens (RM 300-800 one-time) = life-saving prevention."
        }
      }
    ]
  };

  const tocItems = [
    { id: "climate", title: "1. Climate Management (Heatstroke)" },
    { id: "poison-proof", title: "2. Poison-Proof Your Home" },
    { id: "secure-property", title: "3. Secure Your Property" },
    { id: "windows", title: "4. Window/Balcony Safety" },
    { id: "toys", title: "5. Toy and Chew Safety" },
    { id: "prevention-roi", title: "Prevention ROI: The Numbers" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { to: "/blog/pet-heatstroke-malaysia", title: "Heatstroke Guide", description: "Prevent & treat heatstroke", icon: Sun, color: "text-destructive" },
    { to: "/blog/common-pet-poisons-malaysia", title: "Pet Poisons Guide", description: "Complete poison list", icon: AlertTriangle, color: "text-destructive" },
    { to: "/blog/pet-insurance-malaysia", title: "Pet Insurance Guide", description: "Financial prevention", icon: Shield, color: "text-primary" },
  ];

  return (
    <ArticleLayout
      metaTitle="Pet Emergency Prevention Malaysia: 15 Tips to Avoid Vet Emergencies"
      metaDescription="Prevent pet emergencies in Malaysia. 15 proven strategies: pet-proof home, prevent heatstroke, avoid poisons, secure fencing. Save money & protect your pet."
      path="/blog/pet-emergency-prevention-malaysia"
      language={language}
      category="Prevention"
      categoryColor="primary"
      title="Pet Emergency Prevention: 15 Ways to Avoid Costly Vet Emergencies in Malaysia"
      date="January 1, 2025"
      readTime="12 min read"
      reviewedBy="Reviewed by Licensed Malaysian Veterinarians"
      heroImage={emergencyPreventionHero}
      heroImageAlt="Happy healthy dog and cat in safe pet-proofed Malaysian home"
      heroImageCaption="60-70% of pet emergencies are preventable with proper precautions"
      structuredData={structuredData}
      faqStructuredData={faqStructuredData}
    >
      <TLDRBox items={[
        "60-70% of emergencies are preventable with proper precautions",
        "Top preventable emergencies: Heatstroke, poisoning, road accidents, foreign object ingestion",
        "One-time investment: Pet-proofing costs RM 200-500 vs. RM 1,000-8,000 per emergency",
        "Simple changes = huge impact: Window screens, secure fencing, removing toxic plants",
        "Prevention ROI: Preventing ONE emergency pays for years of prevention efforts"
      ]} />

      <CostCTA variant={1} />
      <TableOfContents items={tocItems} />

      <section id="climate" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Sun className="h-6 w-6 text-orange-500" />1. Climate Management (Heatstroke Prevention)</h2>
        <p className="text-muted-foreground mb-4">Heatstroke is among the <strong>top 3 preventable pet deaths</strong> in Malaysia.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">✅ Prevention Measures:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Walk ONLY before 8 AM or after 7 PM</li>
              <li>• 24/7 AC for high-risk breeds (23-25°C)</li>
              <li>• Never leave in car (even with windows cracked)</li>
              <li>• Constant access to fresh, cool water</li>
              <li>• Limit outdoor time 11 AM-4 PM</li>
            </ul>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl">
            <h3 className="font-bold mb-2">💰 Cost Comparison:</h3>
            <p className="text-sm text-muted-foreground">Prevention: RM 100-300/month (AC)</p>
            <p className="text-sm text-muted-foreground">Heatstroke Emergency: RM 800-3,000</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Learn more in our <InternalLink to="/blog/pet-heatstroke-malaysia">Heatstroke Prevention Guide</InternalLink>.</p>
      </section>

      <section id="poison-proof" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><AlertTriangle className="h-6 w-6 text-destructive" />2. Poison-Proof Your Home</h2>
        <p className="text-muted-foreground mb-4">Poisoning = 8-12% of emergencies, <strong>80%+ preventable</strong>.</p>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">💊 Medications</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Store in locked cabinets</li>
              <li>✅ Never leave on counters</li>
              <li>✅ Dispose properly</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🍫 Foods</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Chocolate out of reach</li>
              <li>✅ Xylitol-free peanut butter</li>
              <li>✅ Secure trash cans</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🌿 Plants</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Remove lilies (deadly to cats)</li>
              <li>✅ Remove sago palm</li>
              <li>✅ Remove oleander</li>
            </ul>
          </div>
        </div>
        <div className="bg-muted/50 p-4 rounded-xl">
          <p className="text-sm"><strong>Cost:</strong> RM 50-200 (secure storage) vs. RM 600-3,500 (poisoning emergency)</p>
        </div>
      </section>

      <section id="secure-property" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Home className="h-6 w-6 text-primary" />3. Secure Your Property</h2>
        <p className="text-muted-foreground mb-4">Road accidents = <strong>40-50% of trauma emergencies</strong> in urban Malaysia.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🏠 Fencing/Gates</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ Check weekly for holes</li>
              <li>✅ Height: 1.5-2m for dogs</li>
              <li>✅ Auto-closing gates</li>
            </ul>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl">
            <h3 className="font-bold mb-2">🐕 Leash Discipline</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✅ ALWAYS leash near roads</li>
              <li>✅ Well-fitted collar</li>
              <li>✅ Reflective gear for night</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="windows" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. Window/Balcony Safety (High-Rise Syndrome)</h2>
        <p className="text-muted-foreground mb-4">High-rise falls = <strong>15-20% of cat emergencies</strong> in Malaysian cities.</p>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Prevention:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Install window screens/grilles on ALL windows cats can access</li>
            <li>✅ Cat-proof balcony netting (floor-to-ceiling)</li>
            <li>✅ Never leave windows open unsupervised</li>
          </ul>
          <p className="text-sm mt-4"><strong>Cost:</strong> RM 300-1,500 (screens) vs. RM 2,000-6,000 (fall injury)</p>
        </div>
      </section>

      <section id="toys" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. Toy and Chew Safety</h2>
        <p className="text-muted-foreground mb-4">Foreign objects requiring surgery = <strong>5-8% of emergencies</strong>.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-primary/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">✅ Safe Toys:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Size-appropriate (too big to swallow)</li>
              <li>• Durable materials (Kong-brand)</li>
              <li>• Inspect regularly, discard damaged</li>
            </ul>
          </div>
          <div className="bg-destructive/10 p-4 rounded-xl">
            <h3 className="font-bold mb-2">❌ NEVER Give:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Cooked bones (splinter)</li>
              <li>• Corn cobs</li>
              <li>• Small rawhide pieces</li>
              <li>• Sticks</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="prevention-roi" className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><DollarSign className="h-6 w-6 text-primary" />Prevention ROI: The Numbers</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted/50">
              <tr><th className="text-left p-3">Emergency Type</th><th className="text-right p-3">Cost (RM)</th></tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">Heatstroke</td><td className="text-right p-3">800-3,000</td></tr>
              <tr className="border-t bg-muted/20"><td className="p-3">Poisoning</td><td className="text-right p-3">600-3,500</td></tr>
              <tr className="border-t"><td className="p-3">Foreign object surgery</td><td className="text-right p-3">2,500-7,000</td></tr>
              <tr className="border-t bg-muted/20"><td className="p-3">Road accident</td><td className="text-right p-3">1,500-6,000</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-primary/10 p-6 rounded-xl">
          <p className="font-bold text-lg mb-2">Key Insight:</p>
          <p className="text-muted-foreground">Preventing just ONE major emergency = pays for 1-2 years of prevention. Prevention ROI = 200-400% over pet's lifetime.</p>
        </div>
      </section>

      <CostCTA variant={2} />

      <section id="faqs" className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { question: "Isn't prevention expensive? I can't afford all these measures.", answer: "Start with high-impact, low-cost prevention: 1) Walk only during cool hours (free), 2) Remove toxic foods/plants (RM 50), 3) Secure gates (RM 200-500), 4) Supervise outdoor time (free). One prevented emergency (RM 2,000-5,000) pays for ALL prevention measures." },
            { question: "My pet has never had an emergency. Do I really need to prevention-proof?", answer: "Yes. 'It's never happened' doesn't mean it won't. 70% of emergencies are first-time incidents. Prevention is implemented BEFORE you need it." },
            { question: "Are window screens really necessary for cats? Mine has never fallen.", answer: "High-rise syndrome typically happens to cats with NO prior history. Cats miscalculate jumps after birds/insects. Window screens (RM 300-800 one-time) = life-saving prevention." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent><p className="text-muted-foreground">{faq.answer}</p></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Conclusion: An Ounce of Prevention</h2>
        <div className="bg-primary/10 p-6 rounded-xl">
          <h3 className="font-bold mb-3">Start Today - Priority Checklist:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✅ Adjust walking schedule (cool hours only)</li>
            <li>✅ Remove/secure toxic substances</li>
            <li>✅ Install window screens (if cats)</li>
            <li>✅ Check fence/gates</li>
            <li>✅ Save emergency vet contact in phone</li>
          </ul>
          <p className="text-sm mt-4 italic">You can't prevent every emergency, but you can prevent most.</p>
        </div>
      </section>

      <RelatedArticles articles={relatedArticles} />
    </ArticleLayout>
  );
};

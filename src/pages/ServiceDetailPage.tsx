import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PeopleAlsoAskSection } from '@/components/home/PeopleAlsoAskSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICE_DETAILS, ServiceSlug } from '@/lib/serviceDetails';
import {
  Phone, Heart, Scissors, Clock, Shield, ShoppingBag, PawPrint, ChevronRight, CheckCircle2,
} from 'lucide-react';
import NotFound from './NotFound';

const ICONS = {
  phone: Phone, heart: Heart, scissors: Scissors, clock: Clock,
  shield: Shield, shopping: ShoppingBag, paw: PawPrint,
};

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const detail = slug ? SERVICE_DETAILS[slug as ServiceSlug] : undefined;
  if (!detail) return <NotFound />;

  const c = detail[language];
  const Icon = ICONS[detail.iconKey];
  const path = `/services/${detail.slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEOHead title={c.metaTitle} description={c.metaDescription} path={path} language={language} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="gradient-hero py-16">
            <div className="container">
              <div className={`inline-flex p-4 rounded-xl ${detail.accent} mb-6`}>
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 max-w-3xl">
                {c.hero}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-8">{c.subhero}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to={c.ctaPrimaryHref}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
                >
                  {c.ctaPrimaryLabel}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
                <Link
                  to={c.ctaSecondaryHref}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-border bg-background font-semibold hover:bg-muted transition"
                >
                  {c.ctaSecondaryLabel}
                </Link>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="py-12 bg-background">
            <div className="container max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Why this matters</h2>
                  <ul className="space-y-3">
                    {c.problem.map((p, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <span className="text-destructive shrink-0">✕</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">What we do about it</h2>
                  <ul className="space-y-3">
                    {c.solution.map((p, i) => (
                      <li key={i} className="flex gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cost snippet */}
          <section className="py-10 bg-muted/40">
            <div className="container max-w-4xl">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl font-semibold mb-3">Typical cost in Malaysia (RM)</h2>
                <p className="text-muted-foreground">{c.costSnippet}</p>
              </div>
            </div>
          </section>

          {/* Bullets */}
          <section className="py-10 bg-background">
            <div className="container max-w-4xl">
              <ul className="grid sm:grid-cols-3 gap-4">
                {c.bullets.map((b, i) => (
                  <li key={i} className="bg-card rounded-xl p-4 shadow-card text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 bg-muted/40">
            <div className="container max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQ</h2>
              <div className="space-y-4">
                {c.faq.map((f, i) => (
                  <details key={i} className="bg-card rounded-xl p-5 shadow-card">
                    <summary className="font-semibold cursor-pointer">{f.q}</summary>
                    <p className="mt-3 text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-12 bg-background">
            <div className="container max-w-3xl text-center">
              <Link
                to={c.ctaPrimaryHref}
                className="inline-flex items-center justify-center px-6 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
              >
                {c.ctaPrimaryLabel}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>

          <PeopleAlsoAskSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetailPage;

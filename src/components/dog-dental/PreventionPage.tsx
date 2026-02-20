import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DentalBreadcrumb } from './DentalBreadcrumb';
import { InternalLinkFunnel } from './InternalLinkFunnel';
import { DentalSchemaMarkup } from './DentalSchemaMarkup';
import type { DentalPreventionPage as PreventionType } from '@/data/dog-dental/types';

interface Props { data: PreventionType; }

export const PreventionPage = ({ data }: Props) => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={`/dog-dental-disease/prevention/${data.slug}`} language={language} />
      <DentalSchemaMarkup page={data} breadcrumbItems={[
        { name: 'Home', url: 'https://petcaremalaysia.com' },
        { name: 'Dog Dental Disease', url: 'https://petcaremalaysia.com/dog-dental-disease' },
        { name: 'Prevention', url: '#' },
        { name: data.title, url: `https://petcaremalaysia.com/dog-dental-disease/prevention/${data.slug}` },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <DentalBreadcrumb category="prevention" pageTitle={data.title} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          <section className="mb-8">
            {data.overview.split('\n\n').map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>)}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Why It Matters</h2>
            <p className="text-muted-foreground">{data.whyItMatters}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">How To</h2>
            <p className="text-muted-foreground">{data.howTo}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Recommended Frequency</h2>
            <p className="text-muted-foreground">{data.frequency}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.commonMistakes.map((m, i) => <li key={i} className="text-muted-foreground">{m}</li>)}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Veterinary Recommendations</h2>
            <p className="text-muted-foreground">{data.vetRecommendations}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <InternalLinkFunnel title="Related Pages" links={data.relatedLinks} />

          <div className="bg-card border border-border rounded-xl p-5 mt-8">
            <h3 className="font-bold">Reviewed by {data.author.name}</h3>
            <p className="text-sm text-muted-foreground">{data.author.credentials}</p>
            <p className="text-xs text-muted-foreground mt-2">Last updated: {data.dateModified}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

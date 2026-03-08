import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DentalBreadcrumb } from './DentalBreadcrumb';
import { InternalLinkFunnel } from './InternalLinkFunnel';
import { DentalSchemaMarkup } from './DentalSchemaMarkup';
import { AEOGEOSections } from './AEOGEOSections';
import type { DentalDiagnosisPage as DiagnosisType } from '@/data/dog-dental/types';

interface Props { data: DiagnosisType; }

export const DiagnosisPage = ({ data }: Props) => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={`/dog-dental-disease/diagnosis/${data.slug}`} language={language} />
      <DentalSchemaMarkup page={data} breadcrumbItems={[
        { name: 'Home', url: 'https://petcaremalaysia.com' },
        { name: 'Dog Dental Disease', url: 'https://petcaremalaysia.com/dog-dental-disease' },
        { name: 'Diagnostics', url: '#' },
        { name: data.title, url: `https://petcaremalaysia.com/dog-dental-disease/diagnosis/${data.slug}` },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <DentalBreadcrumb category="diagnosis" pageTitle={data.title} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          <AEOGEOSections data={data} position="top" />

          <section className="mb-8">
            {data.overview.split('\n\n').map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>)}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What It Involves</h2>
            <p className="text-muted-foreground">{data.whatItInvolves}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">When It's Recommended</h2>
            <p className="text-muted-foreground">{data.whenRecommended}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What It Reveals</h2>
            <p className="text-muted-foreground">{data.whatItReveals}</p>
          </section>

          <InternalLinkFunnel title="Associated Conditions" links={data.associatedConditions} />

          <AEOGEOSections data={data} position="bottom" />

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

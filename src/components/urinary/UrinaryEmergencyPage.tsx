import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UrinaryBreadcrumb } from './UrinaryBreadcrumb';
import { UrinarySchemaMarkup } from './UrinarySchemaMarkup';
import { UrinaryAEOGEOSections } from './UrinaryAEOGEOSections';
import { InternalLinkFunnel } from '@/components/dog-dental/InternalLinkFunnel';
import { AlertTriangle } from 'lucide-react';
import type { UrinaryEmergencyPage as EmergencyType } from '@/data/urinary/types';

interface Props { data: EmergencyType; }

export const UrinaryEmergencyPage = ({ data }: Props) => {
  const { language } = useLanguage();
  const species = data.species !== 'general' ? data.species : undefined;
  const seoPath = species
    ? `/urinary-tract-disease/${species}/${data.slug.replace(`${species}-`, '')}`
    : `/urinary-tract-disease/${data.slug}`;

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={seoPath} language={language} />
      <UrinarySchemaMarkup page={data} breadcrumbItems={[
        { name: 'Home', url: 'https://petcaremalaysia.com' },
        { name: 'Urinary Tract Disease', url: 'https://petcaremalaysia.com/urinary-tract-disease' },
        ...(species ? [{ name: species === 'cats' ? 'Cats' : 'Dogs', url: `https://petcaremalaysia.com/urinary-tract-disease/${species}` }] : []),
        { name: data.title, url: `https://petcaremalaysia.com${seoPath}` },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <UrinaryBreadcrumb species={species} category="emergency" pageTitle={data.title} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          <UrinaryAEOGEOSections data={data} position="top" />

          <section className="mb-8">
            {data.overview.split('\n\n').map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>)}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Signs</h2>
            <div className="space-y-3">
              {data.emergencySigns.map((s, i) => (
                <div key={i} className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{s.sign}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{s.description}</p>
                      <p className="text-sm font-medium text-destructive">{s.urgency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">What To Do Now</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {data.immediateActions.map((a, i) => <li key={i} className="text-muted-foreground">{a}</li>)}
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">When to See a Vet</h2>
            <p className="text-muted-foreground">{data.whenToSeeVet}</p>
          </section>

          <UrinaryAEOGEOSections data={data} position="bottom" />

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

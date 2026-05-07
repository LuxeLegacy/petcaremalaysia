import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UrinaryBreadcrumb } from './UrinaryBreadcrumb';
import { UrinaryEmergencyOverride } from './UrinaryEmergencyOverride';
import { UrinarySchemaMarkup } from './UrinarySchemaMarkup';
import { UrinaryAEOGEOSections } from './UrinaryAEOGEOSections';
import { InternalLinkFunnel } from '@/components/dog-dental/InternalLinkFunnel';
import { UrinaryCTA } from './UrinaryCTA';
import { QuickAnswerBox } from '@/components/common/QuickAnswerBox';
import { VetDisclaimer } from '@/components/common/VetDisclaimer';
import { MalaysiaCostTable } from '@/components/common/MalaysiaCostTable';
import type { UrinaryConditionPage as ConditionType } from '@/data/urinary/types';

interface Props { data: ConditionType; }

export const UrinaryConditionPage = ({ data }: Props) => {
  const { language } = useLanguage();
  const species = data.species !== 'general' ? data.species : undefined;
  const slugPart = data.slug.replace(`${data.species}-conditions-`, '');
  const seoPath = species ? `/urinary-tract-disease/${species}/conditions/${slugPart}` : `/urinary-tract-disease/conditions/${data.slug}`;

  const hasRedFlags = data.redFlags.some(f =>
    /cannot urinate|no urine|blocked|obstruction|vomiting|collapse|lethargy|crying/i.test(f)
  );

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={seoPath} language={language} />
      <UrinarySchemaMarkup page={data} breadcrumbItems={[
        { name: 'Home', url: 'https://petcaremalaysia.com' },
        { name: 'Urinary Tract Disease', url: 'https://petcaremalaysia.com/urinary-tract-disease' },
        ...(species ? [{ name: species === 'cats' ? 'Cats' : 'Dogs', url: `https://petcaremalaysia.com/urinary-tract-disease/${species}` }] : []),
        { name: 'Conditions', url: '#' },
        { name: data.title, url: `https://petcaremalaysia.com${seoPath}` },
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <UrinaryBreadcrumb species={species} category="conditions" pageTitle={data.title} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          {hasRedFlags && <UrinaryEmergencyOverride species={species as 'cats' | 'dogs' | undefined} />}

          <UrinaryAEOGEOSections data={data} position="top" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Overview</h2>
            {data.overview.split('\n\n').map((p, i) => <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>)}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Common Signs</h2>
            <ul className="list-disc pl-5 space-y-1">
              {data.signs.map((s, i) => <li key={i} className="text-muted-foreground">{s}</li>)}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Severity Staging</h2>
            <div className="space-y-3">
              {data.severityStages.map((s, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground">{s.stage}</h3>
                  <p className="text-sm text-muted-foreground">{s.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Red Flags</h2>
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <ul className="list-disc pl-5 space-y-1">
                {data.redFlags.map((f, i) => <li key={i} className="text-muted-foreground">{f}</li>)}
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">How Veterinarians Diagnose</h2>
            <p className="text-muted-foreground">{data.diagnosisOverview}</p>
          </section>

          <InternalLinkFunnel title="Treatment Options" links={data.treatmentCategories} />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Recovery Expectations</h2>
            <p className="text-muted-foreground">{data.recoveryExpectations}</p>
          </section>

          <UrinaryCTA variant={3} />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Long-Term Prevention</h2>
            <p className="text-muted-foreground">{data.prevention}</p>
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

          <UrinaryCTA variant={8} />

          <InternalLinkFunnel title="Related Pages" links={data.relatedLinks} />

          <MalaysiaCostTable tableKey="urinary-workup" />

          <div className="bg-card border border-border rounded-xl p-5 mt-8">
            <h3 className="font-bold">Reviewed by {data.author.name}</h3>
            <p className="text-sm text-muted-foreground">{data.author.credentials}</p>
            <p className="text-xs text-muted-foreground mt-2">Last updated: {data.dateModified}</p>
          </div>

          <VetDisclaimer />
        </div>
      </main>
      <Footer />
    </>
  );
};

import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { UrinaryBreadcrumb } from './UrinaryBreadcrumb';
import { UrinarySchemaMarkup } from './UrinarySchemaMarkup';
import { UrinaryAEOGEOSections } from './UrinaryAEOGEOSections';
import { InternalLinkFunnel } from '@/components/dog-dental/InternalLinkFunnel';
import { UrinaryCTA } from './UrinaryCTA';
import type { UrinaryHubPage as HubType } from '@/data/urinary/types';

interface Props { data: HubType; }

export const UrinaryHubPageComponent = ({ data }: Props) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;
  const speciesPath = data.species !== 'general' ? `/${data.species}` : '';
  const seoPath = `/urinary-tract-disease${speciesPath}`;

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={seoPath} language={language} />
      <UrinarySchemaMarkup page={data} breadcrumbItems={[
        { name: 'Home', url: 'https://petcaremalaysia.com' },
        { name: 'Urinary Tract Disease', url: 'https://petcaremalaysia.com/urinary-tract-disease' },
        ...(data.species !== 'general' ? [{ name: data.species === 'cats' ? 'Cats' : 'Dogs', url: `https://petcaremalaysia.com/urinary-tract-disease/${data.species}` }] : []),
      ]} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <UrinaryBreadcrumb species={data.species !== 'general' ? data.species : undefined} category="hub" pageTitle={data.title} />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 mb-8">
            <p className="font-semibold text-destructive mb-2">{data.emergencyBanner.text}</p>
            <Link to={`${prefix}${data.emergencyBanner.linkPath}`} className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
              {data.emergencyBanner.linkText} →
            </Link>
          </div>

          <UrinaryAEOGEOSections data={data} position="top" />

          <div className="prose prose-lg max-w-none mb-8">
            {data.overview.split('\n\n').map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {data.categoryCards.map((card) => (
              <Link key={card.path} to={`${prefix}${card.path}`} className="block p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all">
                <div className="text-2xl mb-2">{card.icon}</div>
                <h2 className="font-bold text-foreground mb-1">{card.title}</h2>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Link>
            ))}
          </div>

          <UrinaryCTA variant={0} />

          <UrinaryAEOGEOSections data={data} position="bottom" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <UrinaryCTA variant={5} />

          <InternalLinkFunnel title="Related Resources" links={data.relatedLinks} />

          <div className="bg-card border border-border rounded-xl p-5 mt-8">
            <h3 className="font-bold text-foreground mb-1">Reviewed by {data.author.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{data.author.credentials}</p>
            <p className="text-sm text-muted-foreground">{data.author.bio}</p>
            <p className="text-xs text-muted-foreground mt-2">Last updated: {data.dateModified}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

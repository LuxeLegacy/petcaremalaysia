import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DentalBreadcrumb } from './DentalBreadcrumb';
import { EmergencyOverride } from './EmergencyOverride';
import { InternalLinkFunnel } from './InternalLinkFunnel';
import { DentalSchemaMarkup } from './DentalSchemaMarkup';
import { AEOGEOSections } from './AEOGEOSections';
import type { DentalHubPage as HubPageType } from '@/data/dog-dental/types';

interface DentalHubPageProps {
  data: HubPageType;
}

export const DentalHubPage = ({ data }: DentalHubPageProps) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;

  return (
    <>
      <SEOHead
        title={data.seo.metaTitle}
        description={data.seo.metaDescription}
        path="/dog-dental-disease"
        language={language}
      />
      <DentalSchemaMarkup
        page={data}
        breadcrumbItems={[
          { name: 'Home', url: 'https://petcaremalaysia.com' },
          { name: 'Dog Dental Disease', url: 'https://petcaremalaysia.com/dog-dental-disease' },
        ]}
      />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <DentalBreadcrumb category="hub" pageTitle={data.title} />

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{data.title}</h1>

          {/* Emergency Banner */}
          <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 mb-8">
            <p className="font-semibold text-destructive mb-2">{data.emergencyBanner.text}</p>
            <Link
              to={`${prefix}/dog-dental-disease/emergency-signs`}
              className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
            >
              {data.emergencyBanner.linkText} →
            </Link>
          </div>

          <AEOGEOSections data={data} position="top" />

          {/* Overview */}
          <div className="prose prose-lg max-w-none mb-8">
            {data.overview.split('\n\n').map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {data.categoryCards.map((card) => (
              <Link
                key={card.path}
                to={`${prefix}${card.path}`}
                className="block p-5 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <h2 className="font-bold text-foreground mb-1">{card.title}</h2>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Link>
            ))}
          </div>

          <AEOGEOSections data={data} position="bottom" />

          {/* FAQs */}
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

          {/* Related Links */}
          <InternalLinkFunnel title="Related Resources" links={data.relatedLinks} />

          {/* Author Box */}
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

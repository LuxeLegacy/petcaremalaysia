import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuickAnswerBox } from '@/components/common/QuickAnswerBox';
import { VetDisclaimer } from '@/components/common/VetDisclaimer';
import { AlertTriangle, ArrowRight, BarChart3, BookOpen, CheckCircle, DollarSign, MapPin } from 'lucide-react';
import type { AuthorityHubPage } from '@/data/authority/types';

interface Props {
  data: AuthorityHubPage;
  basePath: string;
}

const LABELS = {
  en: { overview: 'Overview', explore: 'Explore This Topic', faqs: 'Frequently Asked Questions', stats: 'Veterinary Statistics', costs: 'Estimated Costs in Malaysia', malaysia: 'Malaysia-Specific Considerations', citations: 'Citations & Sources', reviewed: 'Reviewed by', updated: 'Last updated', tldr: 'TL;DR — Key Points', quickFacts: 'Quick Facts', keyTakeaways: 'Key Takeaways', home: 'Home' },
  ms: { overview: 'Gambaran Keseluruhan', explore: 'Terokai Topik Ini', faqs: 'Soalan Lazim', stats: 'Statistik Veterinar', costs: 'Anggaran Kos di Malaysia', malaysia: 'Pertimbangan Khusus Malaysia', citations: 'Rujukan & Sumber', reviewed: 'Disemak oleh', updated: 'Kemas kini terakhir', tldr: 'Ringkasan — Perkara Penting', quickFacts: 'Fakta Pantas', keyTakeaways: 'Perkara Utama', home: 'Laman Utama' },
  zh: { overview: '概述', explore: '探索此主题', faqs: '常见问题', stats: '兽医统计数据', costs: '马来西亚估计费用', malaysia: '马来西亚特定考量', citations: '参考资料', reviewed: '审核人', updated: '最后更新', tldr: '重点摘要', quickFacts: '快速事实', keyTakeaways: '重点摘要', home: '主页' },
};

export const AuthorityHub = ({ data, basePath }: Props) => {
  const { language } = useLanguage();
  const L = LABELS[language] || LABELS.en;
  const prefix = language === 'en' ? '' : `/${language}`;
  const canonicalUrl = `https://petcaremalaysia.com${prefix}${basePath}`;

  const hubSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': canonicalUrl,
        url: canonicalUrl,
        name: data.title,
        description: data.seo.metaDescription,
        inLanguage: language,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
      },
      {
        '@type': 'ItemList',
        itemListElement: data.categoryCards.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.title,
          url: `https://petcaremalaysia.com${prefix}${c.path}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: L.home, item: `https://petcaremalaysia.com${prefix}/` },
          { '@type': 'ListItem', position: 2, name: data.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead title={data.seo.metaTitle} description={data.seo.metaDescription} path={basePath} language={language} lastUpdated={data.dateModified} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(hubSchema)}</script>
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
            <Link to={`${prefix}/`} className="hover:text-primary">{L.home}</Link>
            {' / '}
            <span className="text-foreground">{data.title}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{data.title}</h1>

          {/* Emergency banner */}
          <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-foreground mb-3">{data.emergencyBanner.text}</p>
                <Link
                  to={`${prefix}${data.emergencyBanner.linkPath}`}
                  className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
                >
                  {data.emergencyBanner.linkText} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <QuickAnswerBox answer={data.snippetForAI} />

          {data.tldr?.length > 0 && (
            <div className="bg-muted/40 rounded-xl p-5 mb-8">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                {L.tldr}
              </h2>
              <ul className="space-y-2">
                {data.tldr.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.quickFacts?.length > 0 && (
            <div className="bg-accent/30 rounded-xl p-5 mb-8">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                {L.quickFacts}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.quickFacts.map((f, i) => (
                  <div key={i} className="bg-background/60 rounded-lg p-3">
                    <p className="text-xs font-medium text-muted-foreground">{f.label}</p>
                    <p className="text-sm font-semibold text-foreground">{f.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{L.overview}</h2>
            {data.overview.split('\n\n').map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
            ))}
          </section>

          {/* Category cards */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">{L.explore}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.categoryCards.map((c, i) => (
                <Link
                  key={i}
                  to={`${prefix}${c.path}`}
                  className="block bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/40 transition"
                >
                  <div className="text-3xl mb-2">{c.icon}</div>
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Stats */}
          {data.statistics && data.statistics.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                {L.stats}
              </h2>
              <div className="space-y-3">
                {data.statistics.map((s, i) => (
                  <div key={i} className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-foreground font-medium">{s.stat}</p>
                    <p className="text-xs text-muted-foreground mt-1">Source: {s.source}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.costRange && data.costRange.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                {L.costs}
              </h2>
              <div className="bg-muted/30 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {data.costRange.map((c, i) => (
                      <tr key={i} className="border-t border-border">
                        <td className="p-3 text-muted-foreground">{c.item}</td>
                        <td className="p-3 font-medium text-foreground">{c.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {data.malaysiaContext && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {L.malaysia}
              </h2>
              <div className="bg-accent/20 border border-accent/40 rounded-xl p-5">
                <p className="text-muted-foreground leading-relaxed">{data.malaysiaContext}</p>
              </div>
            </section>
          )}

          {data.keyTakeaways && data.keyTakeaways.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{L.keyTakeaways}</h2>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <ul className="space-y-2">
                  {data.keyTakeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span className="text-muted-foreground">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{L.faqs}</h2>
            <div className="space-y-4">
              {data.faqs.map((f, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-1">{f.question}</h3>
                  <p className="text-sm text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {data.citations && data.citations.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                {L.citations}
              </h2>
              <ol className="space-y-3 list-decimal pl-5">
                {data.citations.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{c.title}</span>
                    {' — '}
                    <span>{c.source} ({c.year})</span>
                    {c.url && (
                      <>
                        {' '}
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[Link]</a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="bg-card border border-border rounded-xl p-5 mt-8">
            <h3 className="font-bold">{L.reviewed} {data.author.name}</h3>
            <p className="text-sm text-muted-foreground">{data.author.credentials}</p>
            <p className="text-xs text-muted-foreground mt-2">{L.updated}: {data.dateModified}</p>
          </div>

          <VetDisclaimer />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthorityHub;

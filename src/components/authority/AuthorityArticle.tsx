import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { QuickAnswerBox } from '@/components/common/QuickAnswerBox';
import { VetDisclaimer } from '@/components/common/VetDisclaimer';
import { AlertTriangle, BookOpen, BarChart3, MapPin, DollarSign, CheckCircle } from 'lucide-react';
import type { AuthorityPage, AuthorityArticlePage } from '@/data/authority/types';

interface Props {
  data: AuthorityArticlePage;
  /** Base path of the hub, e.g. '/dog-skin-problems'. */
  basePath: string;
  /** Hub display title for breadcrumb. */
  hubTitle: string;
}

const LABELS = {
  en: {
    overview: 'Overview',
    whenToSeeVet: 'When to See a Vet',
    keyTakeaways: 'Key Takeaways',
    faqs: 'Frequently Asked Questions',
    related: 'Related Resources',
    stats: 'Veterinary Statistics',
    costs: 'Estimated Costs in Malaysia',
    malaysia: 'Malaysia-Specific Considerations',
    citations: 'Citations & Sources',
    reviewed: 'Reviewed by',
    updated: 'Last updated',
    emergency: 'Emergency Warning',
    emergencyDesc: 'If your pet shows red-flag signs below — facial swelling, refusal to eat, repeated vomiting, blood, collapse, or difficulty breathing — this can be a medical emergency.',
    findVet: 'Find Emergency Vet',
    callWhatsApp: 'WhatsApp Pet Helpline',
    tldr: 'TL;DR — Key Points',
    quickFacts: 'Quick Facts',
    home: 'Home',
  },
  ms: {
    overview: 'Gambaran Keseluruhan',
    whenToSeeVet: 'Bila Perlu Jumpa Doktor Haiwan',
    keyTakeaways: 'Perkara Utama',
    faqs: 'Soalan Lazim',
    related: 'Sumber Berkaitan',
    stats: 'Statistik Veterinar',
    costs: 'Anggaran Kos di Malaysia',
    malaysia: 'Pertimbangan Khusus Malaysia',
    citations: 'Rujukan & Sumber',
    reviewed: 'Disemak oleh',
    updated: 'Kemas kini terakhir',
    emergency: 'Amaran Kecemasan',
    emergencyDesc: 'Jika haiwan peliharaan anda menunjukkan tanda bahaya — bengkak muka, enggan makan, muntah berulang, darah, pengsan, atau sesak nafas — ini boleh menjadi kecemasan perubatan.',
    findVet: 'Cari Vet Kecemasan',
    callWhatsApp: 'WhatsApp Talian Bantuan',
    tldr: 'Ringkasan — Perkara Penting',
    quickFacts: 'Fakta Pantas',
    home: 'Laman Utama',
  },
  zh: {
    overview: '概述',
    whenToSeeVet: '何时就医',
    keyTakeaways: '重点摘要',
    faqs: '常见问题',
    related: '相关资源',
    stats: '兽医统计数据',
    costs: '马来西亚估计费用',
    malaysia: '马来西亚特定考量',
    citations: '参考资料',
    reviewed: '审核人',
    updated: '最后更新',
    emergency: '紧急警告',
    emergencyDesc: '如果您的宠物出现红色警示信号——脸部肿胀、拒食、反复呕吐、出血、昏倒或呼吸困难——这可能是医疗紧急情况。',
    findVet: '寻找急诊兽医',
    callWhatsApp: 'WhatsApp 宠物热线',
    tldr: '重点摘要',
    quickFacts: '快速事实',
    home: '主页',
  },
};

const WHATSAPP_URL = 'https://wa.me/60115695​9227'.replace('​', '');

export const AuthorityArticle = ({ data, basePath, hubTitle }: Props) => {
  const { language } = useLanguage();
  const L = LABELS[language] || LABELS.en;
  const prefix = language === 'en' ? '' : `/${language}`;
  const fullPath = `${basePath}${data.categorySlug ? '/' + data.categorySlug : ''}/${data.slug}`;
  const canonicalUrl = `https://petcaremalaysia.com${prefix}${fullPath}`;

  // Build a single consolidated FAQPage + Article JSON-LD
  const articleSchema = {
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
        author: {
          '@type': 'Person',
          name: data.author.name,
          jobTitle: data.author.credentials,
        },
        about: {
          '@type': 'MedicalCondition',
          name: data.title,
        },
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
          { '@type': 'ListItem', position: 2, name: hubTitle, item: `https://petcaremalaysia.com${prefix}${basePath}` },
          { '@type': 'ListItem', position: 3, name: data.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={data.seo.metaTitle}
        description={data.seo.metaDescription}
        path={fullPath}
        language={language}
        lastUpdated={data.dateModified}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
            <Link to={`${prefix}/`} className="hover:text-primary">{L.home}</Link>
            {' / '}
            <Link to={`${prefix}${basePath}`} className="hover:text-primary">{hubTitle}</Link>
            {' / '}
            <span className="text-foreground">{data.title}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{data.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">{data.category}</p>

          {data.hasEmergencyOverride && (
            <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 my-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-destructive text-lg mb-1">⚠️ {L.emergency}</h3>
                  <p className="text-sm text-foreground mb-3">{L.emergencyDesc}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      to={`${prefix}/emergency-guide`}
                      className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
                    >
                      {L.findVet}
                    </Link>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90"
                    >
                      {L.callWhatsApp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <QuickAnswerBox answer={data.snippetForAI} />

          {/* TL;DR */}
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

          {/* Quick Facts */}
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

          {/* Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{L.overview}</h2>
            {data.overview.split('\n\n').map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
            ))}
          </section>

          {/* Prose sections */}
          {data.sections?.map((s, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-2xl font-bold mb-3">{s.heading}</h2>
              {s.body.split('\n\n').map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
              ))}
            </section>
          ))}

          {/* Bullet sections */}
          {data.bulletSections?.map((s, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-2xl font-bold mb-3">{s.heading}</h2>
              {s.intro && <p className="text-muted-foreground mb-3">{s.intro}</p>}
              <div className={s.redFlag ? 'bg-destructive/5 border border-destructive/20 rounded-lg p-4' : ''}>
                <ul className="list-disc pl-5 space-y-1">
                  {s.items.map((it, j) => (
                    <li key={j} className="text-muted-foreground">{it}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* When to see a vet */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{L.whenToSeeVet}</h2>
            <p className="text-muted-foreground leading-relaxed">{data.whenToSeeVet}</p>
          </section>

          {/* Statistics */}
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

          {/* Cost range */}
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

          {/* Malaysia context */}
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

          {/* Key takeaways */}
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

          {/* FAQ */}
          {data.faqs.length > 0 && (
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
          )}

          {/* Citations */}
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
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          [Link]
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Related links */}
          {data.relatedLinks.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{L.related}</h2>
              <ul className="space-y-2">
                {data.relatedLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={`${prefix}${l.path}`} className="text-primary hover:underline">
                      → {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Author */}
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

export default AuthorityArticle;

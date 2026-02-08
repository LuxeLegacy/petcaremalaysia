import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { DirectAnswerBox } from './DirectAnswerBox';
import { QuickFactsBox } from './QuickFactsBox';
import { ComparisonTable } from './ComparisonTable';
import { LocalResources } from './LocalResources';
import { InsuranceInfo } from './InsuranceInfo';
import { CitationsSection } from './CitationsSection';
import { AuthorBox } from './AuthorBox';
import { RelatedQuestions } from './RelatedQuestions';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PAAArticle } from '@/lib/paaTypes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

interface PAAArticlePageProps {
  article: PAAArticle;
}

export const PAAArticlePage = ({ article }: PAAArticlePageProps) => {
  const { language } = useLanguage();
  const langPrefix = language === 'en' ? '' : `/${language}`;

  // Build schema markup
  const schemas = buildSchemas(article, langPrefix);

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.seo.metaDescription}
        path={`/qa/article/${article.slug}`}
        language={language}
        lastUpdated={article.dateModified}
      />
      <Helmet>
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <article className="container max-w-[900px] py-8 px-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to={`${langPrefix}/`}>Home</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to={`${langPrefix}/qa`}>Q&A</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* H1 */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a73e8] mb-2">{article.title}</h1>
          <p className="text-xs text-muted-foreground mb-4">
            Published {article.datePublished} · Updated {article.dateModified}
          </p>

          {/* Direct Answer (FIRST) */}
          <DirectAnswerBox answer={article.directAnswer} />

          {/* TL;DR */}
          <div className="bg-[#e8f4fd] rounded-lg p-5 my-6">
            <h2 className="text-base font-bold text-blue-900 mb-2">📝 TL;DR</h2>
            <p className="text-sm text-blue-950">{article.tldr}</p>
          </div>

          {/* Quick Facts */}
          <QuickFactsBox facts={article.quickFacts} />

          {/* Table of Contents */}
          <nav className="my-6 rounded-lg border border-border p-4">
            <h2 className="font-bold mb-2">📑 Table of Contents</h2>
            <ol className="list-decimal list-inside space-y-1 text-sm text-primary">
              <li><a href="#detailed-answer" className="hover:underline">Detailed Answer</a></li>
              <li><a href="#key-factors" className="hover:underline">Key Factors</a></li>
              {article.steps.length > 0 && <li><a href="#step-by-step" className="hover:underline">Step-by-Step Guide</a></li>}
              <li><a href="#pro-tips" className="hover:underline">Pro Tips</a></li>
              <li><a href="#common-mistakes" className="hover:underline">Common Mistakes</a></li>
              <li><a href="#cost-comparison" className="hover:underline">Costs & Timeline</a></li>
              <li><a href="#related-questions" className="hover:underline">Related Questions</a></li>
              <li><a href="#local-resources" className="hover:underline">Local Resources</a></li>
              <li><a href="#insurance" className="hover:underline">Insurance Information</a></li>
              <li><a href="#citations" className="hover:underline">Citations</a></li>
            </ol>
          </nav>

          {/* Detailed Answer */}
          <section id="detailed-answer" className="my-8">
            <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#1a73e8] text-foreground">📖 Detailed Answer</h2>
            <div className="prose prose-sm max-w-none text-foreground leading-relaxed whitespace-pre-line">
              {article.detailedAnswer}
            </div>
          </section>

          {/* Key Factors */}
          <section id="key-factors" className="my-8">
            <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#1a73e8] text-foreground">🔑 Key Factors</h2>
            <ul className="space-y-2">
              {article.keyFactors.map((f, i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Step-by-Step */}
          {article.steps.length > 0 && (
            <section id="step-by-step" className="my-8">
              <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#1a73e8] text-foreground">📋 Step-by-Step Guide</h2>
              <ol className="space-y-4">
                {article.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Pro Tips */}
          {article.proTips.length > 0 && (
            <section id="pro-tips" className="bg-[#e8f4fd] rounded-lg p-5 my-8">
              <h2 className="text-base font-bold text-blue-900 mb-3">💡 Pro Tips</h2>
              <ul className="space-y-2">
                {article.proTips.map((tip, i) => (
                  <li key={i} className="text-sm text-blue-950 flex gap-2">
                    <span>✅</span> {tip}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Common Mistakes */}
          {article.commonMistakes.length > 0 && (
            <section id="common-mistakes" className="my-8">
              <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-[#1a73e8] text-foreground">⚠️ Common Mistakes</h2>
              <ul className="space-y-2">
                {article.commonMistakes.map((m, i) => (
                  <li key={i} className="text-sm flex gap-2 text-red-700">
                    <span>❌</span> {m}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Cost Comparison */}
          <div id="cost-comparison">
            <ComparisonTable rows={article.costComparison} />
          </div>

          {/* Related Questions */}
          <div id="related-questions">
            <RelatedQuestions questions={article.relatedQuestions} langPrefix={langPrefix} />
          </div>

          {/* Local Resources */}
          <div id="local-resources">
            <LocalResources resources={article.localResources} />
          </div>

          {/* Insurance */}
          <div id="insurance">
            <InsuranceInfo
              covered={article.insurance?.covered}
              exclusions={article.insurance?.exclusions}
              claimSteps={article.insurance?.claimSteps}
            />
          </div>

          {/* Citations */}
          <div id="citations">
            <CitationsSection citations={article.citations} />
          </div>

          {/* Author */}
          <AuthorBox author={article.author} />
        </article>
      </main>

      <Footer />
    </>
  );
};

function buildSchemas(article: PAAArticle, langPrefix: string) {
  const baseUrl = 'https://petcaremalaysia.com';
  const articleUrl = `${baseUrl}${langPrefix}/qa/article/${article.slug}`;
  const schemas: Record<string, unknown>[] = [];

  // 1. FAQPage
  if (article.relatedQuestions.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.relatedQuestions.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.briefAnswer },
      })),
    });
  }

  // 2. Article
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    author: { '@type': 'Person', name: article.author.name },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    publisher: { '@type': 'Organization', name: 'Malaysia Pet Care Hub' },
    mainEntityOfPage: articleUrl,
  });

  // 3. HowTo (if steps exist)
  if (article.steps.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: article.title,
      step: article.steps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.title,
        text: s.description,
      })),
    });
  }

  // 4. QAPage
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'QAPage',
    mainEntity: {
      '@type': 'Question',
      name: article.title,
      acceptedAnswer: { '@type': 'Answer', text: article.directAnswer },
    },
  });

  // 5. WebPage with Speakable
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: article.title,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.direct-answer-first'],
    },
    url: articleUrl,
  });

  // 6. BreadcrumbList
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Q&A', item: `${baseUrl}${langPrefix}/qa` },
      { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
    ],
  });

  return schemas;
}

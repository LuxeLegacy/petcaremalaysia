import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { allArticles } from '@/data/paa';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, ChevronRight, BookOpen } from 'lucide-react';
import type { PAAArticle } from '@/lib/paaTypes';

const getArticlePath = (article: PAAArticle) => {
  const prefix = article.lang === 'en' ? '' : `/${article.lang}`;
  return `${prefix}/qa/article/${article.slug}`;
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { language } = useLanguage();
  const q = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const lower = q.toLowerCase();
    return allArticles
      .filter(a => a.lang === language)
      .filter(a =>
        a.title.toLowerCase().includes(lower) ||
        a.tldr.toLowerCase().includes(lower) ||
        a.category.toLowerCase().includes(lower) ||
        a.seo.keywords.some(k => k.toLowerCase().includes(lower))
      );
  }, [q, language]);

  return (
    <>
      <SEOHead
        title={q ? `Search: "${q}" — PetCare Malaysia` : 'Search Pet Care Guides — PetCare Malaysia'}
        description={`Find answers to "${q}" from our 60+ verified pet care guides covering costs, health, and emergency care in Malaysia.`}
        path="/search"
        language={language}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-background">
          <div className="container max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span>/</span>
                <span>Search</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {q ? <>Search results for <span className="text-primary">"{q}"</span></> : 'Search Pet Care Guides'}
              </h1>
              {q && (
                <p className="text-muted-foreground">
                  {results.length} {results.length === 1 ? 'result' : 'results'} found
                </p>
              )}
            </div>

            {/* Search input */}
            <form method="get" className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  name="q"
                  defaultValue={q}
                  type="text"
                  placeholder="Search pet care guides..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </form>

            {/* Results */}
            {q && results.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium mb-2">No results found for "{q}"</p>
                <p className="text-sm">Try different keywords or <Link to="/qa" className="text-primary hover:underline">browse all articles</Link>.</p>
              </div>
            )}

            {results.length > 0 && (
              <div className="grid gap-4">
                {results.map(article => (
                  <Link
                    key={article.slug}
                    to={getArticlePath(article)}
                    className="group p-5 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 flex gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium mb-2">
                        {article.category.replace(/-/g, ' ')}
                      </span>
                      <h2 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.tldr}</p>
                      <p className="text-xs text-primary font-medium mt-2">{article.quickFacts.avgCost}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            )}

            {!q && (
              <div className="text-center py-16 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>Enter a keyword above to search 60+ pet care guides.</p>
                <Link to="/qa" className="text-primary hover:underline text-sm mt-2 inline-block">
                  Or browse all articles →
                </Link>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SearchPage;

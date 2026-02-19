import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { allArticles } from '@/data/paa';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, BookOpen } from 'lucide-react';
import type { PAAArticle } from '@/lib/paaTypes';

const CATEGORY_META: Record<string, { label: string; description: string }> = {
  'pet-insurance': { label: 'Pet Insurance', description: 'Compare pet insurance plans, costs and coverage in Malaysia.' },
  'dog-care': { label: 'Dog Care', description: 'Dog breeds, training, grooming, vaccines and more for Malaysian dog owners.' },
  'cat-care': { label: 'Cat Care', description: 'Everything you need to know about caring for cats in Malaysia.' },
  'vet-care': { label: 'Vet Care', description: 'Vet visit costs, dental care, and veterinary services in Malaysia.' },
  'pet-nutrition': { label: 'Pet Nutrition', description: 'Best pet food brands, feeding guides and nutrition tips for Malaysia.' },
  'grooming': { label: 'Grooming', description: 'Dog and cat grooming costs, tips and services in Malaysia.' },
  'pet-health': { label: 'Pet Health', description: 'Senior pet care, microchipping, allergies and health guides for Malaysia.' },
  'pet-adoption': { label: 'Pet Adoption', description: 'How to adopt a pet in Malaysia — shelters, costs and process.' },
  'pet-travel': { label: 'Pet Travel', description: 'Pet travel requirements, pet-friendly hotels and transport in Malaysia.' },
  'pet-care': { label: 'Pet Care', description: 'General pet care guides covering boarding, licensing and more in Malaysia.' },
  'veterinary-services': { label: 'Veterinary Services', description: 'Veterinary services directory and cost guides in Malaysia.' },
};

const getArticlePath = (article: PAAArticle) => {
  const prefix = article.lang === 'en' ? '' : `/${article.lang}`;
  return `${prefix}/qa/article/${article.slug}`;
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();

  const meta = slug ? CATEGORY_META[slug] : null;
  const label = meta?.label ?? (slug?.replace(/-/g, ' ') ?? 'Category');
  const description = meta?.description ?? `Browse all ${label} articles for Malaysian pet owners.`;

  const articles = allArticles
    .filter(a => a.lang === language && a.category === slug);

  // Fallback to EN if no articles in current language
  const displayArticles = articles.length > 0
    ? articles
    : allArticles.filter(a => a.lang === 'en' && a.category === slug);

  return (
    <>
      <SEOHead
        title={`${label} Guides — PetCare Malaysia`}
        description={description}
        path={`/category/${slug}`}
        language={language}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 bg-background">
          <div className="container max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/qa" className="hover:text-primary">Pet Care Q&A</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{label}</span>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <BookOpen className="h-3.5 w-3.5" />
                {displayArticles.length} {displayArticles.length === 1 ? 'article' : 'articles'}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{label}</h1>
              <p className="text-muted-foreground max-w-2xl">{description}</p>
            </div>

            {/* Articles Grid */}
            {displayArticles.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {displayArticles.map(article => (
                  <Link
                    key={article.slug}
                    to={getArticlePath(article)}
                    className="group p-5 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <h2 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.tldr}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary font-medium">{article.quickFacts.avgCost}</span>
                      <span className="text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                        Read <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>No articles found for this category yet.</p>
                <Link to="/qa" className="text-primary hover:underline text-sm mt-2 inline-block">
                  Browse all articles →
                </Link>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10 pt-8 border-t border-border">
              <Link to="/qa" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                ← Browse all pet care guides
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CategoryPage;

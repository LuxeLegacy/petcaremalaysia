import { useParams, Navigate, useLocation } from 'react-router-dom';
import { PAAArticlePage } from '@/components/paa/PAAArticlePage';
import NotFound from './NotFound';
import type { PAAArticle } from '@/lib/paaTypes';

// Side-effect import: registers all articles into the registry
import '@/data/paa';

// Article registry — import article data files here as they are created
const articleRegistry: Record<string, PAAArticle> = {};

// Legacy slug → current slug 301-style redirects (preserves SEO from old backlinks)
const SLUG_REDIRECTS: Record<string, string> = {
  'what-vaccines-dogs-need-malaysia': 'what-vaccines-do-dogs-need-malaysia',
};

/**
 * Register articles at runtime (called from data modules).
 */
export function registerPAAArticles(articles: PAAArticle[]) {
  articles.forEach((a) => {
    articleRegistry[a.slug] = a;
  });
}

const PAAArticleRouter = () => {
  const { slug, lang } = useParams<{ slug: string; lang?: string }>();
  const location = useLocation();

  if (slug && SLUG_REDIRECTS[slug]) {
    const newSlug = SLUG_REDIRECTS[slug];
    const prefix = lang ? `/${lang}` : '';
    return <Navigate to={`${prefix}/qa/article/${newSlug}${location.search}`} replace />;
  }

  if (!slug || !articleRegistry[slug]) {
    return <NotFound />;
  }

  return <PAAArticlePage article={articleRegistry[slug]} />;
};

export default PAAArticleRouter;

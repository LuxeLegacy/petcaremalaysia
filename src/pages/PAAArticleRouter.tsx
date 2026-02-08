import { useParams } from 'react-router-dom';
import { PAAArticlePage } from '@/components/paa/PAAArticlePage';
import NotFound from './NotFound';
import type { PAAArticle } from '@/lib/paaTypes';

// Side-effect import: registers all articles into the registry
import '@/data/paa';

// Article registry — import article data files here as they are created
const articleRegistry: Record<string, PAAArticle> = {};

/**
 * Register articles at runtime (called from data modules).
 */
export function registerPAAArticles(articles: PAAArticle[]) {
  articles.forEach((a) => {
    articleRegistry[a.slug] = a;
  });
}

const PAAArticleRouter = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !articleRegistry[slug]) {
    return <NotFound />;
  }

  return <PAAArticlePage article={articleRegistry[slug]} />;
};

export default PAAArticleRouter;

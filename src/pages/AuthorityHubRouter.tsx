import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { findAuthorityPage, type AuthorityHubConfig, type AuthorityHubPage, type AuthorityArticlePage } from '@/data/authority/types';
import { AuthorityHub } from '@/components/authority/AuthorityHub';
import { AuthorityArticle } from '@/components/authority/AuthorityArticle';
import NotFound from './NotFound';

interface Props {
  config: AuthorityHubConfig;
  hubTitle: { en: string; ms: string; zh: string };
}

/**
 * Generic router for any authority hub.
 * Handles:
 *   /:basePath                          → hub page
 *   /:basePath/:slug                    → standalone (e.g. emergency-signs)
 *   /:basePath/:category/:slug          → article inside a category
 * The `:lang` prefix is resolved via LanguageContext.
 */
const AuthorityHubRouter = ({ config, hubTitle }: Props) => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>();
  const { language } = useLanguage();

  let targetSlug = 'hub';
  if (category && slug) targetSlug = slug;
  else if (category && !slug) targetSlug = category;

  const page = findAuthorityPage(config, targetSlug, language);
  if (!page) return <NotFound />;

  if (page.kind === 'hub') {
    return <AuthorityHub data={page as AuthorityHubPage} basePath={config.basePath} />;
  }
  return (
    <AuthorityArticle
      data={page as AuthorityArticlePage}
      basePath={config.basePath}
      hubTitle={hubTitle[language] || hubTitle.en}
    />
  );
};

export default AuthorityHubRouter;

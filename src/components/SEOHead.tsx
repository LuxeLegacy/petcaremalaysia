import { Helmet } from 'react-helmet-async';
import { Language } from '@/lib/translations';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string; // e.g., "/selangor/kajang", "/blog", "/"
  language: Language;
  lastUpdated?: string;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  language,
  lastUpdated = new Date().toISOString().split('T')[0],
  noIndex = false,
}) => {
  const baseUrl = 'https://petcaremalaysia.com';
  
  // Normalize path (handle root and trailing slashes)
  const normalizedPath = path === '/' ? '' : path.replace(/\/$/, '');
  
  // Generate canonical URL based on current language
  // English = no prefix, other languages = with prefix
  const canonicalUrl = language === 'en' 
    ? `${baseUrl}${normalizedPath}`
    : `${baseUrl}/${language}${normalizedPath}`;
  
  // hreflang URLs are always consistent
  const hreflangUrls = {
    en: `${baseUrl}${normalizedPath}`,
    ms: `${baseUrl}/ms${normalizedPath}`,
    zh: `${baseUrl}/zh${normalizedPath}`,
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="PetCare Malaysia" />
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : language === 'ms' ? 'ms_MY' : 'en_MY'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* hreflang tags */}
      <link rel="alternate" hrefLang="en" href={hreflangUrls.en} />
      <link rel="alternate" hrefLang="ms" href={hreflangUrls.ms} />
      <link rel="alternate" hrefLang="zh" href={hreflangUrls.zh} />
      <link rel="alternate" hrefLang="x-default" href={hreflangUrls.en} />
      
      {/* Last modified */}
      <meta name="last-modified" content={lastUpdated} />
      
    </Helmet>
  );
};

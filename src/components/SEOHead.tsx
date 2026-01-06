import { Helmet } from 'react-helmet-async';
import { CityData } from '@/lib/cityData';
import { Language } from '@/lib/translations';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  city?: CityData;
  language: Language;
  lastUpdated?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  city,
  language,
  lastUpdated = new Date().toISOString().split('T')[0],
}) => {
  const baseUrl = 'https://petcaremalaysia.com';
  
  const hreflangUrls = city ? {
    en: `${baseUrl}/en/${city.stateSlug}/${city.slug}`,
    ms: `${baseUrl}/ms/${city.stateSlug}/${city.slug}`,
    zh: `${baseUrl}/zh/${city.stateSlug}/${city.slug}`,
  } : {
    en: `${baseUrl}/en`,
    ms: `${baseUrl}/ms`,
    zh: `${baseUrl}/zh`,
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
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

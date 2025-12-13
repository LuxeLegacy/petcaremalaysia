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

  const structuredData = city ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": canonicalUrl,
    "name": `Pet Care ${city.name}`,
    "description": description,
    "url": canonicalUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "3.1390",
      "longitude": "101.6869"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$-$$"
  } : null;

  const breadcrumbData = city ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": city.state,
        "item": `${baseUrl}/${city.stateSlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": canonicalUrl
      }
    ]
  } : null;

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
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}
    </Helmet>
  );
};

import { Helmet } from 'react-helmet-async';
import type { DentalPageBase, DentalFAQ } from '@/data/dog-dental/types';

interface DentalSchemaMarkupProps {
  page: DentalPageBase;
  breadcrumbItems: { name: string; url: string }[];
}

export const DentalSchemaMarkup = ({ page, breadcrumbItems }: DentalSchemaMarkupProps) => {
  const baseUrl = 'https://petcaremalaysia.com';

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: page.title,
    description: page.seo.metaDescription,
    author: {
      '@type': 'Person',
      name: page.author.name,
      description: page.author.credentials,
    },
    publisher: {
      '@type': 'Organization',
      name: 'PetCare Malaysia',
      url: baseUrl,
    },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/dog-dental-disease`,
    },
  };

  // Add Speakable schema for voice assistant extraction
  if (page.snippetForAI) {
    articleSchema.speakable = {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-ai-snippet]', 'h1'],
    };
  }

  // Add citation references
  if (page.citations && page.citations.length > 0) {
    articleSchema.citation = page.citations.map(c => ({
      '@type': 'CreativeWork',
      name: c.title,
      publisher: { '@type': 'Organization', name: c.source },
      url: c.url,
      datePublished: c.year,
    }));
  }

  const faqSchema = page.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${baseUrl}/dog-dental-disease/${page.slug}#faq`,
    mainEntity: page.faqs.map((faq: DentalFAQ) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

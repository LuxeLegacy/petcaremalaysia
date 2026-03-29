import { Helmet } from 'react-helmet-async';
import type { UrinaryPageBase, UrinaryFAQ } from '@/data/urinary/types';

interface Props {
  page: UrinaryPageBase;
  breadcrumbItems: { name: string; url: string }[];
}

export const UrinarySchemaMarkup = ({ page, breadcrumbItems }: Props) => {
  const baseUrl = 'https://petcaremalaysia.com';

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: page.title,
    description: page.seo.metaDescription,
    author: { '@type': 'Person', name: page.author.name, description: page.author.credentials },
    publisher: { '@type': 'Organization', name: 'PetCare Malaysia', url: baseUrl },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${baseUrl}/urinary-tract-disease` },
  };

  if (page.snippetForAI) {
    articleSchema.speakable = { '@type': 'SpeakableSpecification', cssSelector: ['[data-ai-snippet]', 'h1'] };
  }

  if (page.citations && page.citations.length > 0) {
    articleSchema.citation = page.citations.map(c => ({
      '@type': 'CreativeWork', name: c.title,
      publisher: { '@type': 'Organization', name: c.source }, url: c.url, datePublished: c.year,
    }));
  }

  const faqSchema = page.faqs.length > 0 ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq: UrinaryFAQ) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, i) => ({
      '@type': 'ListItem', position: i + 1, name: item.name, item: item.url,
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

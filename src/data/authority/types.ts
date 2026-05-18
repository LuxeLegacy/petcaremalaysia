import type { Language } from '@/lib/translations';

/**
 * Generic authority-hub content schema.
 * Used by Dog Skin Problems, Dog Vomiting & Diarrhea, and Cat Dental Disease hubs.
 * Mirrors the data shape of the Dog Dental hub but consolidated to a single
 * page type so we can author breadth quickly while keeping AEO/GEO features.
 */

export interface AuthorityFAQ {
  question: string;
  answer: string;
}

export interface AuthorityLink {
  label: string;
  path: string;
}

export interface AuthorityCitation {
  title: string;
  source: string;
  url: string;
  year: string;
}

export interface AuthorityAuthor {
  name: string;
  credentials: string;
  bio: string;
}

export interface AuthoritySEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface AuthorityCard {
  title: string;
  description: string;
  path: string;
  icon: string;
}

/** A free-form prose section rendered as <h2> + paragraph(s). */
export interface AuthoritySection {
  heading: string;
  /** Paragraphs separated by blank lines OR an array of paragraphs. */
  body: string;
}

/** Bullet list section with H2 heading. */
export interface AuthorityBulletSection {
  heading: string;
  items: string[];
  /** Optional intro paragraph rendered above the list. */
  intro?: string;
  /** When true, render with destructive styling (red flags). */
  redFlag?: boolean;
}

export type AuthorityPageKind = 'hub' | 'article';

export interface AuthorityPageBase {
  slug: string; // 'hub' for hub page, otherwise URL slug
  kind: AuthorityPageKind;
  /** Category label shown in breadcrumb & used as a logical grouping. */
  category: string;
  /** Category slug used in the URL between hub and slug, e.g. 'conditions' */
  categorySlug?: string;
  lang: Language;
  title: string;
  /** Short AI-snippet answer (1-3 sentences). */
  snippetForAI: string;
  tldr: string[];
  quickFacts: { label: string; value: string }[];
  malaysiaContext?: string;
  statistics?: { stat: string; source: string }[];
  costRange?: { item: string; range: string }[];
  citations?: AuthorityCitation[];
  keyTakeaways?: string[];
  /** Whether this page should trigger the prominent emergency override banner. */
  hasEmergencyOverride?: boolean;
  /** Main prose intro paragraph(s). */
  overview: string;
  /** Ordered content sections (prose). */
  sections?: AuthoritySection[];
  /** Ordered bullet/checklist sections. */
  bulletSections?: AuthorityBulletSection[];
  faqs: AuthorityFAQ[];
  seo: AuthoritySEO;
  author: AuthorityAuthor;
  datePublished: string;
  dateModified: string;
  relatedLinks: AuthorityLink[];
}

export interface AuthorityHubPage extends AuthorityPageBase {
  kind: 'hub';
  /** Hub-only: cards linking out to articles. */
  categoryCards: AuthorityCard[];
  emergencyBanner: { text: string; linkText: string; linkPath: string };
}

export interface AuthorityArticlePage extends AuthorityPageBase {
  kind: 'article';
  /** When to escalate to a vet (short paragraph). */
  whenToSeeVet: string;
}

export type AuthorityPage = AuthorityHubPage | AuthorityArticlePage;

/** Shape held in each hub registry. */
export interface AuthorityHubConfig {
  /** Base URL segment, e.g. 'dog-skin-problems'. */
  basePath: string;
  /** All pages across all languages (hub + articles). */
  pages: AuthorityPage[];
}

/** Helper: lookup a page in a hub by slug + language with EN fallback. */
export function findAuthorityPage(
  config: AuthorityHubConfig,
  slug: string,
  lang: Language,
): AuthorityPage | undefined {
  return (
    config.pages.find((p) => p.slug === slug && p.lang === lang) ||
    config.pages.find((p) => p.slug === slug && p.lang === 'en')
  );
}

/** Helper: get hub page for a language. */
export function findAuthorityHub(
  config: AuthorityHubConfig,
  lang: Language,
): AuthorityPage | undefined {
  return findAuthorityPage(config, 'hub', lang);
}

/** Helper: list every (categorySlug, slug) for sitemap generation (EN list). */
export function listAuthoritySlugs(config: AuthorityHubConfig): {
  categorySlug?: string;
  slug: string;
}[] {
  return config.pages
    .filter((p) => p.lang === 'en')
    .map((p) => ({ categorySlug: p.categorySlug, slug: p.slug }));
}

import type { Language } from '@/lib/translations';

export type UrinaryCategory = 'hub' | 'emergency' | 'symptoms' | 'conditions';
export type UrinarySpecies = 'cats' | 'dogs' | 'general';

export interface UrinaryFAQ {
  question: string;
  answer: string;
}

export interface UrinaryLink {
  label: string;
  path: string;
}

export interface UrinaryAuthor {
  name: string;
  credentials: string;
  bio: string;
}

export interface UrinarySEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface UrinaryCitation {
  title: string;
  source: string;
  url: string;
  year: string;
}

export interface UrinaryPageBase {
  slug: string;
  category: UrinaryCategory;
  species: UrinarySpecies;
  lang: Language;
  title: string;
  overview: string;
  faqs: UrinaryFAQ[];
  seo: UrinarySEO;
  author: UrinaryAuthor;
  datePublished: string;
  dateModified: string;
  relatedLinks: UrinaryLink[];
  // AEO/GEO enrichment
  snippetForAI?: string;
  tldr?: string[];
  quickFacts?: { label: string; value: string }[];
  malaysiaContext?: string;
  statistics?: { stat: string; source: string }[];
  costRange?: { item: string; range: string }[];
  citations?: UrinaryCitation[];
  keyTakeaways?: string[];
}

export interface UrinaryHubPage extends UrinaryPageBase {
  category: 'hub';
  categoryCards: { title: string; description: string; path: string; icon: string }[];
  emergencyBanner: { text: string; linkText: string; linkPath: string };
}

export interface UrinaryEmergencyPage extends UrinaryPageBase {
  category: 'emergency';
  emergencySigns: { sign: string; description: string; urgency: string }[];
  immediateActions: string[];
  whenToSeeVet: string;
}

export interface UrinarySymptomPage extends UrinaryPageBase {
  category: 'symptoms';
  whatItIndicates: string;
  urinaryVsOtherCauses: string;
  emergencyRedFlags: string[];
  severityRouting: UrinaryLink[];
  vetEvaluation: string;
  carePathways: UrinaryLink[];
}

export interface UrinaryConditionPage extends UrinaryPageBase {
  category: 'conditions';
  signs: string[];
  severityStages: { stage: string; description: string }[];
  redFlags: string[];
  diagnosisOverview: string;
  treatmentCategories: UrinaryLink[];
  recoveryExpectations: string;
  prevention: string;
  whenToSeeVet: string;
}

export type UrinaryPage =
  | UrinaryHubPage
  | UrinaryEmergencyPage
  | UrinarySymptomPage
  | UrinaryConditionPage;

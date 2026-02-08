export interface PAAQuickFacts {
  avgCost: string;
  timeRequired: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  professionalNeeded: 'Yes' | 'No' | 'Recommended';
  insuranceCoverage: string;
}

export interface PAAComparisonRow {
  option: string;
  costRange: string;
  timeRequired: string;
  bestFor: string;
  prosCons: string;
}

export interface PAAResource {
  name: string;
  detail: string;
  url?: string;
}

export interface PAAResourceGroup {
  emergencyContacts: PAAResource[];
  governmentResources: PAAResource[];
  animalWelfare: PAAResource[];
}

export interface PAAInsurance {
  covered: string[];
  exclusions: string[];
  claimSteps: string[];
}

export interface PAACitation {
  source: string;
  title: string;
  publication: string;
  year: string;
  url?: string;
}

export interface PAAAuthor {
  name: string;
  credentials: string;
  bio: string;
  avatarUrl?: string;
}

export interface PAARelatedQuestion {
  question: string;
  briefAnswer: string;
  slug: string;
}

export interface PAAStep {
  title: string;
  description: string;
}

export interface PAAArticle {
  id: number;
  slug: string;
  category: string;
  lang: 'en' | 'ms' | 'zh';
  title: string;
  directAnswer: string;
  tldr: string;
  quickFacts: PAAQuickFacts;
  detailedAnswer: string;
  keyFactors: string[];
  steps: PAAStep[];
  proTips: string[];
  commonMistakes: string[];
  costComparison: PAAComparisonRow[];
  relatedQuestions: PAARelatedQuestion[];
  localResources?: PAAResourceGroup;
  insurance?: PAAInsurance;
  citations: PAACitation[];
  author: PAAAuthor;
  seo: {
    metaDescription: string;
    keywords: string[];
  };
  datePublished: string;
  dateModified: string;
}

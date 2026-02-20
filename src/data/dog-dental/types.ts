import type { Language } from '@/lib/translations';

export type DentalCategory = 'hub' | 'conditions' | 'symptoms' | 'severity' | 'emergency' | 'diagnosis' | 'treatments' | 'recovery' | 'prevention';

export interface DentalFAQ {
  question: string;
  answer: string;
}

export interface DentalLink {
  label: string;
  path: string;
}

export interface DentalAuthor {
  name: string;
  credentials: string;
  bio: string;
}

export interface DentalSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface DentalPageBase {
  slug: string;
  category: DentalCategory;
  lang: Language;
  title: string;
  overview: string;
  faqs: DentalFAQ[];
  seo: DentalSEO;
  author: DentalAuthor;
  datePublished: string;
  dateModified: string;
  relatedLinks: DentalLink[];
}

export interface DentalHubPage extends DentalPageBase {
  category: 'hub';
  categoryCards: { title: string; description: string; path: string; icon: string }[];
  emergencyBanner: { text: string; linkText: string };
}

export interface DentalConditionPage extends DentalPageBase {
  category: 'conditions';
  signs: string[];
  severityStages: { stage: string; description: string }[];
  redFlags: string[];
  diagnosisOverview: string;
  treatmentCategories: DentalLink[];
  recoveryExpectations: string;
  prevention: string;
  whenToSeeVet: string;
}

export interface DentalSymptomPage extends DentalPageBase {
  category: 'symptoms';
  whatItIndicates: string;
  oralVsOtherCauses: string;
  emergencyRedFlags: string[];
  severityRouting: DentalLink[];
  vetEvaluation: string;
  carePathways: DentalLink[];
}

export interface DentalSeverityPage extends DentalPageBase {
  category: 'severity';
  progression: { stage: string; description: string; action: string }[];
  associatedConditions: DentalLink[];
  associatedTreatments: DentalLink[];
}

export interface DentalEmergencyPage extends DentalPageBase {
  category: 'emergency';
  emergencySigns: { sign: string; description: string; urgency: string }[];
  immediateActions: string[];
  whenToSeeVet: string;
}

export interface DentalDiagnosisPage extends DentalPageBase {
  category: 'diagnosis';
  whatItInvolves: string;
  whenRecommended: string;
  whatItReveals: string;
  associatedConditions: DentalLink[];
}

export interface DentalTreatmentPage extends DentalPageBase {
  category: 'treatments';
  whatItInvolves: string;
  whenRecommended: string;
  benefits: string[];
  risksAndConsiderations: string;
  followUpCare: string;
  associatedConditions: DentalLink[];
}

export interface DentalRecoveryPage extends DentalPageBase {
  category: 'recovery';
  timeline: { phase: string; duration: string; description: string }[];
  dietaryModifications: string;
  warningSignsDuringRecovery: string[];
  followUpSchedule: string;
}

export interface DentalPreventionPage extends DentalPageBase {
  category: 'prevention';
  whyItMatters: string;
  howTo: string;
  frequency: string;
  commonMistakes: string[];
  vetRecommendations: string;
}

export type DentalPage =
  | DentalHubPage
  | DentalConditionPage
  | DentalSymptomPage
  | DentalSeverityPage
  | DentalEmergencyPage
  | DentalDiagnosisPage
  | DentalTreatmentPage
  | DentalRecoveryPage
  | DentalPreventionPage;

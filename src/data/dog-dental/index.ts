import type { DentalPage, DentalCategory } from './types';
import type { Language } from '@/lib/translations';

// English imports
import { enHub } from './en/hub';
import { enConditionsPlaque } from './en/conditions-plaque';
import { enConditionsGingivitis } from './en/conditions-gingivitis';
import { enConditionsPeriodontal } from './en/conditions-periodontal';
import { enConditionsAbscess } from './en/conditions-abscess';
import { enSymptomsBadBreath } from './en/symptoms-bad-breath';
import { enSymptomsRedGums } from './en/symptoms-red-gums';
import { enSymptomsSwollenGums } from './en/symptoms-swollen-gums';
import { enSymptomsBleedingGums } from './en/symptoms-bleeding-gums';
import { enSymptomsDroppingFood } from './en/symptoms-dropping-food';
import { enSymptomsPawingMouth } from './en/symptoms-pawing-mouth';
import { enSymptomsFacialSwelling } from './en/symptoms-facial-swelling';
import { enSeverityEarly } from './en/severity-early';
import { enSeverityModerate } from './en/severity-moderate';
import { enSeverityAdvanced } from './en/severity-advanced';
import { enEmergencySigns } from './en/emergency-signs';
import { enWhenToSeeVet } from './en/when-to-see-vet';
import { enDiagnosisOralExam } from './en/diagnosis-oral-exam';
import { enDiagnosisDentalProbing } from './en/diagnosis-dental-probing';
import { enDiagnosisDentalXrays } from './en/diagnosis-dental-xrays';
import { enTreatmentsProfessionalCleaning } from './en/treatments-professional-cleaning';
import { enTreatmentsToothExtraction } from './en/treatments-tooth-extraction';
import { enTreatmentsAntibioticTherapy } from './en/treatments-antibiotic-therapy';
import { enTreatmentsPainManagement } from './en/treatments-pain-management';
import { enTreatmentsPreventiveCare } from './en/treatments-preventive-care';
import { enRecoveryPostProcedure } from './en/recovery-post-procedure';
import { enRecoveryHealingTimeline } from './en/recovery-healing-timeline';
import { enRecoveryMonitoring } from './en/recovery-monitoring';
import { enPreventionBrushing } from './en/prevention-brushing';
import { enPreventionCheckups } from './en/prevention-checkups';
import { enPreventionDiet } from './en/prevention-diet';

// Registry of all dental pages
const allPages: DentalPage[] = [
  enHub,
  enConditionsPlaque, enConditionsGingivitis, enConditionsPeriodontal, enConditionsAbscess,
  enSymptomsBadBreath, enSymptomsRedGums, enSymptomsSwollenGums, enSymptomsBleedingGums,
  enSymptomsDroppingFood, enSymptomsPawingMouth, enSymptomsFacialSwelling,
  enSeverityEarly, enSeverityModerate, enSeverityAdvanced,
  enEmergencySigns, enWhenToSeeVet,
  enDiagnosisOralExam, enDiagnosisDentalProbing, enDiagnosisDentalXrays,
  enTreatmentsProfessionalCleaning, enTreatmentsToothExtraction, enTreatmentsAntibioticTherapy,
  enTreatmentsPainManagement, enTreatmentsPreventiveCare,
  enRecoveryPostProcedure, enRecoveryHealingTimeline, enRecoveryMonitoring,
  enPreventionBrushing, enPreventionCheckups, enPreventionDiet,
];

// Lookup by slug and language (falls back to English)
export function getDentalPage(slug: string, lang: Language): DentalPage | undefined {
  return allPages.find(p => p.slug === slug && p.lang === lang)
    || allPages.find(p => p.slug === slug && p.lang === 'en');
}

// Get hub page for a language
export function getDentalHub(lang: Language): DentalPage | undefined {
  return getDentalPage('hub', lang);
}

// Get all pages for a category and language
export function getDentalPagesByCategory(category: DentalCategory, lang: Language): DentalPage[] {
  const pages = allPages.filter(p => p.category === category && p.lang === lang);
  if (pages.length > 0) return pages;
  return allPages.filter(p => p.category === category && p.lang === 'en');
}

// Get all slugs for sitemap generation
export function getAllDentalSlugs(): { category: DentalCategory; slug: string }[] {
  return allPages
    .filter(p => p.lang === 'en')
    .map(p => ({ category: p.category, slug: p.slug }));
}

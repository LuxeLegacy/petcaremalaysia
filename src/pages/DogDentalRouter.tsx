import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getDentalPage, getDentalHub } from '@/data/dog-dental';
import type { DentalPage } from '@/data/dog-dental/types';
import { DentalHubPage } from '@/components/dog-dental/DentalHubPageComponent';
import { ConditionPage } from '@/components/dog-dental/ConditionPage';
import { SymptomPage } from '@/components/dog-dental/SymptomPage';
import { TreatmentPage } from '@/components/dog-dental/TreatmentPage';
import { SeverityPage } from '@/components/dog-dental/SeverityPage';
import { DiagnosisPage } from '@/components/dog-dental/DiagnosisPage';
import { EmergencyPage } from '@/components/dog-dental/EmergencyPage';
import { RecoveryPage } from '@/components/dog-dental/RecoveryPage';
import { PreventionPage } from '@/components/dog-dental/PreventionPage';
import NotFound from './NotFound';

// Map special standalone slugs
const standaloneSlugMap: Record<string, string> = {
  'emergency-signs': 'emergency-signs',
  'when-to-see-a-vet': 'when-to-see-a-vet',
};

const DogDentalRouter = () => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>();
  const { language } = useLanguage();

  let page: DentalPage | undefined;

  if (!category && !slug) {
    // Hub page: /dog-dental-disease
    page = getDentalHub(language);
  } else if (category && !slug) {
    // Standalone pages like /dog-dental-disease/emergency-signs
    const mappedSlug = standaloneSlugMap[category];
    if (mappedSlug) {
      page = getDentalPage(mappedSlug, language);
    }
  } else if (category && slug) {
    // Category pages like /dog-dental-disease/conditions/plaque-buildup
    page = getDentalPage(slug, language);
  }

  if (!page) return <NotFound />;

  switch (page.category) {
    case 'hub':
      return <DentalHubPage data={page as any} />;
    case 'conditions':
      return <ConditionPage data={page as any} />;
    case 'symptoms':
      return <SymptomPage data={page as any} />;
    case 'treatments':
      return <TreatmentPage data={page as any} />;
    case 'severity':
      return <SeverityPage data={page as any} />;
    case 'diagnosis':
      return <DiagnosisPage data={page as any} />;
    case 'emergency':
      return <EmergencyPage data={page as any} />;
    case 'recovery':
      return <RecoveryPage data={page as any} />;
    case 'prevention':
      return <PreventionPage data={page as any} />;
    default:
      return <NotFound />;
  }
};

export default DogDentalRouter;

import { useParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getUrinaryPage, getUrinaryHub } from '@/data/urinary';
import type { UrinaryPage } from '@/data/urinary/types';
import { UrinaryHubPageComponent } from '@/components/urinary/UrinaryHubPageComponent';
import { UrinaryEmergencyPage } from '@/components/urinary/UrinaryEmergencyPage';
import { UrinarySymptomPage } from '@/components/urinary/UrinarySymptomPage';
import { UrinaryConditionPage } from '@/components/urinary/UrinaryConditionPage';
import NotFound from './NotFound';

// Slug mapping: URL segments → data slug
// /urinary-tract-disease → hub
// /urinary-tract-disease/cats → cats-hub
// /urinary-tract-disease/dogs → dogs-hub
// /urinary-tract-disease/emergency-signs → emergency-signs
// /urinary-tract-disease/cats/emergency-signs → cats-emergency-signs
// /urinary-tract-disease/cats/emergency-signs/blocked-cat → cats-emergency-blocked-cat
// /urinary-tract-disease/cats/when-to-see-a-vet → cats-when-to-see-a-vet
// /urinary-tract-disease/cats/symptoms/blood-in-urine → cats-symptoms-blood-in-urine
// /urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis → cats-conditions-feline-idiopathic-cystitis
// /urinary-tract-disease/dogs/emergency-signs/cant-urinate → dogs-emergency-cant-urinate

const UrinaryRouter = () => {
  const { a, b, c } = useParams<{ a?: string; b?: string; c?: string }>();
  const { language } = useLanguage();

  let page: UrinaryPage | undefined;

  if (!a && !b && !c) {
    // /urinary-tract-disease → root hub
    page = getUrinaryHub(language);
  } else if (a && !b && !c) {
    // /urinary-tract-disease/cats → cats-hub
    // /urinary-tract-disease/dogs → dogs-hub
    // /urinary-tract-disease/emergency-signs → emergency-signs
    if (a === 'cats' || a === 'dogs') {
      page = getUrinaryPage(`${a}-hub`, language);
    } else {
      page = getUrinaryPage(a, language);
    }
  } else if (a && b && !c) {
    // /urinary-tract-disease/cats/emergency-signs → cats-emergency-signs
    // /urinary-tract-disease/cats/when-to-see-a-vet → cats-when-to-see-a-vet
    if (a === 'cats' || a === 'dogs') {
      page = getUrinaryPage(`${a}-${b}`, language);
    }
  } else if (a && b && c) {
    // /urinary-tract-disease/cats/emergency-signs/blocked-cat → cats-emergency-blocked-cat
    // /urinary-tract-disease/cats/symptoms/blood-in-urine → cats-symptoms-blood-in-urine
    // /urinary-tract-disease/cats/conditions/feline-idiopathic-cystitis → cats-conditions-feline-idiopathic-cystitis
    if (a === 'cats' || a === 'dogs') {
      page = getUrinaryPage(`${a}-${b}-${c}`, language);
    }
  }

  if (!page) return <NotFound />;

  switch (page.category) {
    case 'hub':
      return <UrinaryHubPageComponent data={page as any} />;
    case 'emergency':
      return <UrinaryEmergencyPage data={page as any} />;
    case 'symptoms':
      return <UrinarySymptomPage data={page as any} />;
    case 'conditions':
      return <UrinaryConditionPage data={page as any} />;
    default:
      return <NotFound />;
  }
};

export default UrinaryRouter;

import type { UrinaryPage, UrinaryCategory } from './types';
import type { Language } from '@/lib/translations';

import { enHub } from './en/hub';
import { enCatsHub } from './en/cats-hub';
import { enDogsHub } from './en/dogs-hub';
import { enEmergencySigns } from './en/emergency-signs';
import { enCatsEmergencySigns } from './en/cats-emergency-signs';
import { enCatsBlockedCat } from './en/cats-emergency-blocked-cat';
import { enCatsWhenToSeeVet } from './en/cats-when-to-see-a-vet';
import { enDogsEmergencySigns } from './en/dogs-emergency-signs';
import { enDogsEmergencyCantUrinate } from './en/dogs-emergency-cant-urinate';
import { enDogsWhenToSeeVet } from './en/dogs-when-to-see-a-vet';
import { enCatsSymptomsBloodInUrine } from './en/cats-symptoms-blood-in-urine';
import { enCatsSymptomsStraining } from './en/cats-symptoms-straining-to-urinate';
import { enCatsSymptomsFrequentUrinations } from './en/cats-symptoms-frequent-small-urinations';
import { enCatsSymptomsNotPassingUrine } from './en/cats-symptoms-not-passing-urine';
import { enDogsSymptomsBloodInUrine } from './en/dogs-symptoms-blood-in-urine';
import { enDogsSymptomsStraining } from './en/dogs-symptoms-straining-to-urinate';
import { enDogsSymptomsFrequentUrinations } from './en/dogs-symptoms-frequent-small-urinations';
import { enCatsConditionsFIC } from './en/cats-conditions-feline-idiopathic-cystitis';
import { enCatsConditionsUrethralObstruction } from './en/cats-conditions-urethral-obstruction';
import { enDogsConditionsUTI } from './en/dogs-conditions-bacterial-cystitis-uti';

const allPages: UrinaryPage[] = [
  enHub, enCatsHub, enDogsHub,
  enEmergencySigns, enCatsEmergencySigns, enCatsBlockedCat, enCatsWhenToSeeVet,
  enDogsEmergencySigns, enDogsEmergencyCantUrinate, enDogsWhenToSeeVet,
  enCatsSymptomsBloodInUrine, enCatsSymptomsStraining, enCatsSymptomsFrequentUrinations, enCatsSymptomsNotPassingUrine,
  enDogsSymptomsBloodInUrine, enDogsSymptomsStraining, enDogsSymptomsFrequentUrinations,
  enCatsConditionsFIC, enCatsConditionsUrethralObstruction, enDogsConditionsUTI,
];

export function getUrinaryPage(slug: string, lang: Language): UrinaryPage | undefined {
  return allPages.find(p => p.slug === slug && p.lang === lang)
    || allPages.find(p => p.slug === slug && p.lang === 'en');
}

export function getUrinaryHub(lang: Language): UrinaryPage | undefined {
  return getUrinaryPage('hub', lang);
}

export function getUrinaryPagesByCategory(category: UrinaryCategory, lang: Language): UrinaryPage[] {
  const pages = allPages.filter(p => p.category === category && p.lang === lang);
  if (pages.length > 0) return pages;
  return allPages.filter(p => p.category === category && p.lang === 'en');
}

export function getAllUrinarySlugs(): { category: UrinaryCategory; slug: string }[] {
  return allPages.filter(p => p.lang === 'en').map(p => ({ category: p.category, slug: p.slug }));
}

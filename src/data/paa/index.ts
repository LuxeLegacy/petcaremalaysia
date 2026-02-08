import { petInsuranceCostArticle } from './en-pet-insurance-cost';
import { bestDogBreedsArticle } from './en-best-dog-breeds';
import { petAdoptionArticle } from './en-pet-adoption';
import { dogVaccinesArticle } from './en-dog-vaccines';
import { groomingCostArticle } from './en-grooming-cost';
import { msPetInsuranceCostArticle } from './ms-pet-insurance-cost';
import { msBestDogBreedsArticle } from './ms-best-dog-breeds';
import { msPetAdoptionArticle } from './ms-pet-adoption';
import { msDogVaccinesArticle } from './ms-dog-vaccines';
import { msGroomingCostArticle } from './ms-grooming-cost';
import { zhPetInsuranceCostArticle } from './zh-pet-insurance-cost';
import { zhBestDogBreedsArticle } from './zh-best-dog-breeds';
import { zhPetAdoptionArticle } from './zh-pet-adoption';
import { zhDogVaccinesArticle } from './zh-dog-vaccines';
import { zhGroomingCostArticle } from './zh-grooming-cost';
import { registerPAAArticles } from '@/pages/PAAArticleRouter';

const allArticles = [
  petInsuranceCostArticle,
  bestDogBreedsArticle,
  petAdoptionArticle,
  dogVaccinesArticle,
  groomingCostArticle,
  msPetInsuranceCostArticle,
  msBestDogBreedsArticle,
  msPetAdoptionArticle,
  msDogVaccinesArticle,
  msGroomingCostArticle,
  zhPetInsuranceCostArticle,
  zhBestDogBreedsArticle,
  zhPetAdoptionArticle,
  zhDogVaccinesArticle,
  zhGroomingCostArticle,
];

registerPAAArticles(allArticles);

export { allArticles };

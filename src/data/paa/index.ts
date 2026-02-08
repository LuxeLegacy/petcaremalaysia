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
];

registerPAAArticles(allArticles);

export { allArticles };

import { petInsuranceCostArticle } from './en-pet-insurance-cost';
import { bestDogBreedsArticle } from './en-best-dog-breeds';
import { petAdoptionArticle } from './en-pet-adoption';
import { dogVaccinesArticle } from './en-dog-vaccines';
import { groomingCostArticle } from './en-grooming-cost';
import { registerPAAArticles } from '@/pages/PAAArticleRouter';

const allArticles = [
  petInsuranceCostArticle,
  bestDogBreedsArticle,
  petAdoptionArticle,
  dogVaccinesArticle,
  groomingCostArticle,
];

registerPAAArticles(allArticles);

export { allArticles };

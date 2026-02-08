import { petInsuranceCostArticle } from './en-pet-insurance-cost';
import { bestDogBreedsArticle } from './en-best-dog-breeds';
import { petAdoptionArticle } from './en-pet-adoption';
import { dogVaccinesArticle } from './en-dog-vaccines';
import { groomingCostArticle } from './en-grooming-cost';
import { vetVisitCostArticle } from './en-vet-visit-cost';
import { catCareArticle } from './en-cat-care';
import { petFoodBrandsArticle } from './en-pet-food-brands';
import { fleaTreatmentArticle } from './en-flea-treatment';
import { petTravelArticle } from './en-pet-travel';
import { msPetInsuranceCostArticle } from './ms-pet-insurance-cost';
import { msBestDogBreedsArticle } from './ms-best-dog-breeds';
import { msPetAdoptionArticle } from './ms-pet-adoption';
import { msDogVaccinesArticle } from './ms-dog-vaccines';
import { msGroomingCostArticle } from './ms-grooming-cost';
import { msVetVisitCostArticle } from './ms-vet-visit-cost';
import { msCatCareArticle } from './ms-cat-care';
import { msPetFoodBrandsArticle } from './ms-pet-food-brands';
import { msFleaTreatmentArticle } from './ms-flea-treatment';
import { msPetTravelArticle } from './ms-pet-travel';
import { zhPetInsuranceCostArticle } from './zh-pet-insurance-cost';
import { zhBestDogBreedsArticle } from './zh-best-dog-breeds';
import { zhPetAdoptionArticle } from './zh-pet-adoption';
import { zhDogVaccinesArticle } from './zh-dog-vaccines';
import { zhGroomingCostArticle } from './zh-grooming-cost';
import { zhVetVisitCostArticle } from './zh-vet-visit-cost';
import { zhCatCareArticle } from './zh-cat-care';
import { zhPetFoodBrandsArticle } from './zh-pet-food-brands';
import { zhFleaTreatmentArticle } from './zh-flea-treatment';
import { zhPetTravelArticle } from './zh-pet-travel';
import { registerPAAArticles } from '@/pages/PAAArticleRouter';

const allArticles = [
  petInsuranceCostArticle,
  bestDogBreedsArticle,
  petAdoptionArticle,
  dogVaccinesArticle,
  groomingCostArticle,
  vetVisitCostArticle,
  catCareArticle,
  petFoodBrandsArticle,
  fleaTreatmentArticle,
  petTravelArticle,
  msPetInsuranceCostArticle,
  msBestDogBreedsArticle,
  msPetAdoptionArticle,
  msDogVaccinesArticle,
  msGroomingCostArticle,
  msVetVisitCostArticle,
  msCatCareArticle,
  msPetFoodBrandsArticle,
  msFleaTreatmentArticle,
  msPetTravelArticle,
  zhPetInsuranceCostArticle,
  zhBestDogBreedsArticle,
  zhPetAdoptionArticle,
  zhDogVaccinesArticle,
  zhGroomingCostArticle,
  zhVetVisitCostArticle,
  zhCatCareArticle,
  zhPetFoodBrandsArticle,
  zhFleaTreatmentArticle,
  zhPetTravelArticle,
];

registerPAAArticles(allArticles);

export { allArticles };

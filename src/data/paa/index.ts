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
import { petBoardingCostArticle } from './en-pet-boarding-cost';
import { petDentalCareArticle } from './en-pet-dental-care';
import { petMicrochippingArticle } from './en-pet-microchipping';
import { petTrainingCostArticle } from './en-pet-training-cost';
import { seniorPetCareArticle } from './en-senior-pet-care';
import { petAllergyTreatmentArticle } from './en-pet-allergy-treatment';
import { petSpayingNeuteringArticle } from './en-pet-spaying-neutering';
import { petFirstAidKitArticle } from './en-pet-first-aid-kit';
import { petLicensingArticle } from './en-pet-licensing';
import { petFriendlyHotelsArticle } from './en-pet-friendly-hotels';

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
import { msPetBoardingCostArticle } from './ms-pet-boarding-cost';
import { msPetDentalCareArticle } from './ms-pet-dental-care';
import { msPetMicrochippingArticle } from './ms-pet-microchipping';
import { msPetTrainingCostArticle } from './ms-pet-training-cost';
import { msSeniorPetCareArticle } from './ms-senior-pet-care';
import { msPetAllergyTreatmentArticle } from './ms-pet-allergy-treatment';
import { msPetSpayingNeuteringArticle } from './ms-pet-spaying-neutering';
import { msPetFirstAidKitArticle } from './ms-pet-first-aid-kit';
import { msPetLicensingArticle } from './ms-pet-licensing';
import { msPetFriendlyHotelsArticle } from './ms-pet-friendly-hotels';

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
import { zhPetBoardingCostArticle } from './zh-pet-boarding-cost';
import { zhPetDentalCareArticle } from './zh-pet-dental-care';
import { zhPetMicrochippingArticle } from './zh-pet-microchipping';
import { zhPetTrainingCostArticle } from './zh-pet-training-cost';
import { zhSeniorPetCareArticle } from './zh-senior-pet-care';
import { zhPetAllergyTreatmentArticle } from './zh-pet-allergy-treatment';
import { zhPetSpayingNeuteringArticle } from './zh-pet-spaying-neutering';
import { zhPetFirstAidKitArticle } from './zh-pet-first-aid-kit';
import { zhPetLicensingArticle } from './zh-pet-licensing';
import { zhPetFriendlyHotelsArticle } from './zh-pet-friendly-hotels';

import { registerPAAArticles } from '@/pages/PAAArticleRouter';

const allArticles = [
  // EN (20)
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
  petBoardingCostArticle,
  petDentalCareArticle,
  petMicrochippingArticle,
  petTrainingCostArticle,
  seniorPetCareArticle,
  petAllergyTreatmentArticle,
  petSpayingNeuteringArticle,
  petFirstAidKitArticle,
  petLicensingArticle,
  petFriendlyHotelsArticle,
  // MS (20)
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
  msPetBoardingCostArticle,
  msPetDentalCareArticle,
  msPetMicrochippingArticle,
  msPetTrainingCostArticle,
  msSeniorPetCareArticle,
  msPetAllergyTreatmentArticle,
  msPetSpayingNeuteringArticle,
  msPetFirstAidKitArticle,
  msPetLicensingArticle,
  msPetFriendlyHotelsArticle,
  // ZH (20)
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
  zhPetBoardingCostArticle,
  zhPetDentalCareArticle,
  zhPetMicrochippingArticle,
  zhPetTrainingCostArticle,
  zhSeniorPetCareArticle,
  zhPetAllergyTreatmentArticle,
  zhPetSpayingNeuteringArticle,
  zhPetFirstAidKitArticle,
  zhPetLicensingArticle,
  zhPetFriendlyHotelsArticle,
];

registerPAAArticles(allArticles);

export { allArticles };

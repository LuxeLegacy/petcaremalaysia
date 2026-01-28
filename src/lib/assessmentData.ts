// Assessment data structures and options

export interface AssessmentQuestion {
  id: string;
  step: number;
  questionKey: string;
  type: 'single' | 'multi' | 'dropdown' | 'text' | 'photos';
  options?: AssessmentOption[];
}

export interface AssessmentOption {
  value: string;
  labelKey: string;
  icon?: string;
}

// Dog breeds list
export const dogBreeds = [
  'Mixed Breed',
  'Labrador Retriever',
  'German Shepherd',
  'Golden Retriever',
  'Bulldog',
  'Poodle',
  'Beagle',
  'Rottweiler',
  'Yorkshire Terrier',
  'Boxer',
  'Dachshund',
  'Siberian Husky',
  'Shih Tzu',
  'Doberman Pinscher',
  'Great Dane',
  'Chihuahua',
  'Pomeranian',
  'Border Collie',
  'Australian Shepherd',
  'Cavalier King Charles Spaniel',
  'Maltese',
  'Cocker Spaniel',
  'Schnauzer',
  'Pug',
  'Corgi',
  'Boston Terrier',
  'Akita',
  'Bernese Mountain Dog',
  'Shetland Sheepdog',
  'Havanese',
  'Other',
];

// Cat breeds list
export const catBreeds = [
  'Mixed Breed / Domestic',
  'Persian',
  'Maine Coon',
  'Siamese',
  'Ragdoll',
  'Bengal',
  'British Shorthair',
  'Abyssinian',
  'Scottish Fold',
  'Sphynx',
  'Birman',
  'Oriental Shorthair',
  'Russian Blue',
  'Norwegian Forest Cat',
  'Devon Rex',
  'Burmese',
  'American Shorthair',
  'Exotic Shorthair',
  'Tonkinese',
  'Himalayan',
  'Other',
];

// Health conditions
export const healthConditions = [
  { value: 'heart_disease', labelKey: 'assessment.conditions.heart_disease' },
  { value: 'diabetes', labelKey: 'assessment.conditions.diabetes' },
  { value: 'kidney_disease', labelKey: 'assessment.conditions.kidney_disease' },
  { value: 'allergies', labelKey: 'assessment.conditions.allergies' },
  { value: 'cancer', labelKey: 'assessment.conditions.cancer' },
  { value: 'arthritis', labelKey: 'assessment.conditions.arthritis' },
  { value: 'none', labelKey: 'assessment.conditions.none' },
];

// All assessment questions
export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: 'petType',
    step: 1,
    questionKey: 'assessment.questions.pet_type',
    type: 'single',
    options: [
      { value: 'dog', labelKey: 'assessment.options.dog', icon: '🐕' },
      { value: 'cat', labelKey: 'assessment.options.cat', icon: '🐈' },
    ],
  },
  {
    id: 'breed',
    step: 2,
    questionKey: 'assessment.questions.breed',
    type: 'dropdown',
  },
  {
    id: 'age',
    step: 3,
    questionKey: 'assessment.questions.age',
    type: 'single',
    options: [
      { value: 'puppy_kitten', labelKey: 'assessment.options.age.puppy_kitten' },
      { value: 'young_adult', labelKey: 'assessment.options.age.young_adult' },
      { value: 'adult', labelKey: 'assessment.options.age.adult' },
      { value: 'senior', labelKey: 'assessment.options.age.senior' },
    ],
  },
  {
    id: 'sex',
    step: 4,
    questionKey: 'assessment.questions.sex',
    type: 'single',
    options: [
      { value: 'male', labelKey: 'assessment.options.male', icon: '♂️' },
      { value: 'female', labelKey: 'assessment.options.female', icon: '♀️' },
    ],
  },
  {
    id: 'fixed',
    step: 5,
    questionKey: 'assessment.questions.fixed',
    type: 'single',
    options: [
      { value: 'yes', labelKey: 'assessment.options.yes' },
      { value: 'no', labelKey: 'assessment.options.no' },
      { value: 'not_sure', labelKey: 'assessment.options.not_sure' },
    ],
  },
  {
    id: 'weight',
    step: 6,
    questionKey: 'assessment.questions.weight',
    type: 'single',
    options: [
      { value: 'small', labelKey: 'assessment.options.weight.small' },
      { value: 'medium', labelKey: 'assessment.options.weight.medium' },
      { value: 'large', labelKey: 'assessment.options.weight.large' },
      { value: 'extra_large', labelKey: 'assessment.options.weight.extra_large' },
    ],
  },
  {
    id: 'conditions',
    step: 7,
    questionKey: 'assessment.questions.conditions',
    type: 'multi',
    options: healthConditions,
  },
  {
    id: 'ingestion',
    step: 8,
    questionKey: 'assessment.questions.ingestion',
    type: 'single',
    options: [
      { value: 'chocolate', labelKey: 'assessment.options.ingestion.chocolate', icon: '🍫' },
      { value: 'medication', labelKey: 'assessment.options.ingestion.medication', icon: '💊' },
      { value: 'plants', labelKey: 'assessment.options.ingestion.plants', icon: '🌿' },
      { value: 'chemicals', labelKey: 'assessment.options.ingestion.chemicals', icon: '⚠️' },
      { value: 'none', labelKey: 'assessment.options.ingestion.none', icon: '✓' },
    ],
  },
  {
    id: 'environment',
    step: 9,
    questionKey: 'assessment.questions.environment',
    type: 'single',
    options: [
      { value: 'indoor', labelKey: 'assessment.options.environment.indoor', icon: '🏠' },
      { value: 'outdoor', labelKey: 'assessment.options.environment.outdoor', icon: '🌳' },
      { value: 'both', labelKey: 'assessment.options.environment.both', icon: '🏡' },
    ],
  },
  {
    id: 'insured',
    step: 10,
    questionKey: 'assessment.questions.insured',
    type: 'single',
    options: [
      { value: 'yes', labelKey: 'assessment.options.yes' },
      { value: 'no', labelKey: 'assessment.options.no' },
      { value: 'not_sure', labelKey: 'assessment.options.not_sure' },
    ],
  },
  {
    id: 'mainSymptom',
    step: 11,
    questionKey: 'assessment.questions.main_symptom',
    type: 'single',
    options: [
      { value: 'vomiting', labelKey: 'assessment.options.symptoms.vomiting' },
      { value: 'diarrhea', labelKey: 'assessment.options.symptoms.diarrhea' },
      { value: 'not_eating', labelKey: 'assessment.options.symptoms.not_eating' },
      { value: 'limping', labelKey: 'assessment.options.symptoms.limping' },
      { value: 'other', labelKey: 'assessment.options.symptoms.other' },
    ],
  },
  {
    id: 'painLevel',
    step: 12,
    questionKey: 'assessment.questions.pain_level',
    type: 'single',
    options: [
      { value: 'none', labelKey: 'assessment.options.pain.none' },
      { value: 'mild', labelKey: 'assessment.options.pain.mild' },
      { value: 'moderate', labelKey: 'assessment.options.pain.moderate' },
      { value: 'severe', labelKey: 'assessment.options.pain.severe' },
    ],
  },
  {
    id: 'breathing',
    step: 13,
    questionKey: 'assessment.questions.breathing',
    type: 'single',
    options: [
      { value: 'normal', labelKey: 'assessment.options.breathing.normal' },
      { value: 'labored', labelKey: 'assessment.options.breathing.labored' },
      { value: 'rapid', labelKey: 'assessment.options.breathing.rapid' },
      { value: 'weak', labelKey: 'assessment.options.breathing.weak' },
    ],
  },
  {
    id: 'alertness',
    step: 14,
    questionKey: 'assessment.questions.alertness',
    type: 'single',
    options: [
      { value: 'alert', labelKey: 'assessment.options.alertness.alert' },
      { value: 'lethargic', labelKey: 'assessment.options.alertness.lethargic' },
      { value: 'disoriented', labelKey: 'assessment.options.alertness.disoriented' },
      { value: 'unresponsive', labelKey: 'assessment.options.alertness.unresponsive' },
    ],
  },
  {
    id: 'bleeding',
    step: 15,
    questionKey: 'assessment.questions.bleeding',
    type: 'single',
    options: [
      { value: 'none', labelKey: 'assessment.options.bleeding.none' },
      { value: 'minor', labelKey: 'assessment.options.bleeding.minor' },
      { value: 'moderate', labelKey: 'assessment.options.bleeding.moderate' },
      { value: 'severe', labelKey: 'assessment.options.bleeding.severe' },
    ],
  },
  {
    id: 'duration',
    step: 16,
    questionKey: 'assessment.questions.duration',
    type: 'single',
    options: [
      { value: 'just_now', labelKey: 'assessment.options.duration.just_now' },
      { value: '1_6_hours', labelKey: 'assessment.options.duration.1_6_hours' },
      { value: '6_24_hours', labelKey: 'assessment.options.duration.6_24_hours' },
      { value: 'more_24_hours', labelKey: 'assessment.options.duration.more_24_hours' },
    ],
  },
  {
    id: 'summary',
    step: 17,
    questionKey: 'assessment.questions.summary',
    type: 'text',
  },
];

export const TOTAL_STEPS = 17;

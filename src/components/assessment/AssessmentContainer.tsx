import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/hooks/useAssessment';
import { useLanguage } from '@/contexts/LanguageContext';
import { AssessmentProgress } from './AssessmentProgress';
import { AssessmentHeader } from './AssessmentHeader';
import { EntryScreen } from './EntryScreen';
import { QuestionCard } from './QuestionCard';
import { OptionButton } from './OptionButton';
import { OptionCheckbox } from './OptionCheckbox';
import { BreedSelector } from './BreedSelector';
import { SummaryScreen } from './SummaryScreen';
import { ContactCollectionForm } from './ContactCollectionForm';
import { ResultsDisplay } from './ResultsDisplay';
import { assessmentQuestions, TOTAL_STEPS } from '@/lib/assessmentData';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export function AssessmentContainer() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    state,
    urgencyResult,
    updateField,
    setZipcode,
    toggleCondition,
    nextStep,
    prevStep,
    calculateResults,
    reset,
    addPhotos,
    removePhoto,
    isStepValid,
    totalSteps,
  } = useAssessment();

  const handleSingleSelect = (field: string, value: string) => {
    updateField(field as any, value);
    // Auto-advance for single select questions
    setTimeout(() => nextStep(), 200);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const result = calculateResults();
      
      // Save to database
      const { error } = await supabase.from('assessment_leads').insert({
        user_name: state.userName,
        user_email: state.userEmail,
        user_phone: state.userPhone || null,
        pet_name: state.petName,
        zipcode: state.zipcode,
        city: state.city,
        state: state.state,
        assessment_data: {
          petType: state.petType,
          breed: state.breed,
          age: state.age,
          sex: state.sex,
          fixed: state.fixed,
          weight: state.weight,
          conditions: state.conditions,
          ingestion: state.ingestion,
          environment: state.environment,
          insured: state.insured,
          mainSymptom: state.mainSymptom,
          painLevel: state.painLevel,
          breathing: state.breathing,
          alertness: state.alertness,
          bleeding: state.bleeding,
          duration: state.duration,
          description: state.description,
        },
        urgency_level: result.level,
        urgency_score: result.score,
      });

      if (error) {
        console.error('Error saving assessment:', error);
        toast.error('Failed to save assessment. Please try again.');
      }

      setShowResults(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRestart = () => {
    reset();
    setShowResults(false);
    navigate(language === 'en' ? '/assessment' : `/${language}/assessment`);
  };

  // Show results page
  if (showResults && urgencyResult) {
    return (
      <div className="min-h-screen bg-muted/30 py-8 px-4">
        <ResultsDisplay
          state={state}
          urgencyResult={urgencyResult}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // Entry screen (step 0)
  if (state.currentStep === 0) {
    return (
      <EntryScreen
        zipcode={state.zipcode}
        city={state.city}
        state={state.state}
        onZipcodeChange={setZipcode}
        onStart={nextStep}
      />
    );
  }

  // Contact collection (step 18)
  if (state.currentStep === TOTAL_STEPS + 1) {
    return (
      <div className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-lg mx-auto space-y-4">
          <AssessmentProgress currentStep={state.currentStep - 1} totalSteps={totalSteps} />
          <ContactCollectionForm
            userName={state.userName}
            userEmail={state.userEmail}
            userPhone={state.userPhone}
            petName={state.petName}
            onUpdate={(field, value) => updateField(field as any, value)}
            onBack={prevStep}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    );
  }

  // Question screens (steps 1-17)
  const currentQuestion = assessmentQuestions.find(
    (q) => q.step === state.currentStep
  );

  if (!currentQuestion) {
    return null;
  }

  const renderQuestionContent = () => {
    switch (currentQuestion.id) {
      case 'petType':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={option.value === 'dog' ? 'Dog' : 'Cat'}
            icon={option.icon}
            isSelected={state.petType === option.value}
            onClick={() => handleSingleSelect('petType', option.value)}
          />
        ));

      case 'breed':
        return (
          <>
            <BreedSelector
              petType={state.petType}
              value={state.breed}
              onChange={(breed) => {
                updateField('breed', breed);
                setTimeout(() => nextStep(), 200);
              }}
            />
          </>
        );

      case 'age':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getAgeLabel(option.value)}
            isSelected={state.age === option.value}
            onClick={() => handleSingleSelect('age', option.value)}
          />
        ));

      case 'sex':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={option.value === 'male' ? 'Male' : 'Female'}
            icon={option.icon}
            isSelected={state.sex === option.value}
            onClick={() => handleSingleSelect('sex', option.value)}
          />
        ));

      case 'fixed':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getYesNoLabel(option.value)}
            isSelected={state.fixed === option.value}
            onClick={() => handleSingleSelect('fixed', option.value)}
          />
        ));

      case 'weight':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getWeightLabel(option.value)}
            isSelected={state.weight === option.value}
            onClick={() => handleSingleSelect('weight', option.value)}
          />
        ));

      case 'conditions':
        return (
          <>
            {currentQuestion.options?.map((option) => (
              <OptionCheckbox
                key={option.value}
                label={getConditionLabel(option.value)}
                isChecked={state.conditions.includes(option.value)}
                onChange={() => toggleCondition(option.value)}
              />
            ))}
            <button
              onClick={nextStep}
              disabled={state.conditions.length === 0}
              className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-lg font-medium disabled:opacity-50"
            >
              Continue
            </button>
          </>
        );

      case 'ingestion':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getIngestionLabel(option.value)}
            icon={option.icon}
            isSelected={state.ingestion === option.value}
            onClick={() => handleSingleSelect('ingestion', option.value)}
          />
        ));

      case 'environment':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getEnvironmentLabel(option.value)}
            icon={option.icon}
            isSelected={state.environment === option.value}
            onClick={() => handleSingleSelect('environment', option.value)}
          />
        ));

      case 'insured':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getYesNoLabel(option.value)}
            isSelected={state.insured === option.value}
            onClick={() => handleSingleSelect('insured', option.value)}
          />
        ));

      case 'mainSymptom':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getSymptomLabel(option.value)}
            isSelected={state.mainSymptom === option.value}
            onClick={() => handleSingleSelect('mainSymptom', option.value)}
          />
        ));

      case 'painLevel':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getPainLabel(option.value)}
            isSelected={state.painLevel === option.value}
            onClick={() => handleSingleSelect('painLevel', option.value)}
          />
        ));

      case 'breathing':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getBreathingLabel(option.value)}
            isSelected={state.breathing === option.value}
            onClick={() => handleSingleSelect('breathing', option.value)}
          />
        ));

      case 'alertness':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getAlertnessLabel(option.value)}
            isSelected={state.alertness === option.value}
            onClick={() => handleSingleSelect('alertness', option.value)}
          />
        ));

      case 'bleeding':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getBleedingLabel(option.value)}
            isSelected={state.bleeding === option.value}
            onClick={() => handleSingleSelect('bleeding', option.value)}
          />
        ));

      case 'duration':
        return currentQuestion.options?.map((option) => (
          <OptionButton
            key={option.value}
            label={getDurationLabel(option.value)}
            isSelected={state.duration === option.value}
            onClick={() => handleSingleSelect('duration', option.value)}
          />
        ));

      case 'summary':
        return (
          <SummaryScreen
            state={state}
            onDescriptionChange={(desc) => updateField('description', desc)}
            onAddPhotos={addPhotos}
            onRemovePhoto={removePhoto}
            onBack={prevStep}
            onNext={nextStep}
          />
        );

      default:
        return null;
    }
  };

  // Summary screen has its own layout
  if (currentQuestion.id === 'summary') {
    return (
      <div className="min-h-screen bg-muted/30 py-8 px-4">
        <div className="max-w-lg mx-auto space-y-4">
          <AssessmentProgress currentStep={state.currentStep} totalSteps={totalSteps} />
          <AssessmentHeader currentStep={state.currentStep} totalSteps={totalSteps} />
          {renderQuestionContent()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8 px-4">
      <div className="max-w-lg mx-auto space-y-4">
        <AssessmentProgress currentStep={state.currentStep} totalSteps={totalSteps} />
        <AssessmentHeader currentStep={state.currentStep} totalSteps={totalSteps} />
        <QuestionCard
          question={getQuestionText(currentQuestion.id)}
          onBack={prevStep}
          showBack={state.currentStep > 1}
        >
          {renderQuestionContent()}
        </QuestionCard>
        <p className="text-xs text-center text-muted-foreground">
          Powered by 2.3M ER cases + Board-certified vet protocols
        </p>
      </div>
    </div>
  );
}

// Helper functions for labels
function getQuestionText(questionId: string): string {
  const questions: Record<string, string> = {
    petType: 'What type of pet do you have?',
    breed: 'What breed is your pet?',
    age: 'How old is your pet?',
    sex: "What is your pet's sex?",
    fixed: 'Is your pet spayed/neutered?',
    weight: "What is your pet's weight?",
    conditions: 'Does your pet have any existing health conditions?',
    ingestion: 'Has your pet recently ingested anything unusual?',
    environment: 'Where does your pet typically stay?',
    insured: 'Is your pet insured?',
    mainSymptom: "What is your pet's main symptom?",
    painLevel: 'How much pain does your pet appear to be in?',
    breathing: 'Is your pet breathing normally?',
    alertness: 'Is your pet alert and responsive?',
    bleeding: 'Is there any bleeding?',
    duration: 'How long has this been happening?',
  };
  return questions[questionId] || '';
}

function getAgeLabel(value: string): string {
  const labels: Record<string, string> = {
    puppy_kitten: 'Puppy/Kitten (0-1 year)',
    young_adult: 'Young Adult (1-3 years)',
    adult: 'Adult (3-7 years)',
    senior: 'Senior (7+ years)',
  };
  return labels[value] || value;
}

function getYesNoLabel(value: string): string {
  const labels: Record<string, string> = {
    yes: 'Yes',
    no: 'No',
    not_sure: 'Not sure',
  };
  return labels[value] || value;
}

function getWeightLabel(value: string): string {
  const labels: Record<string, string> = {
    small: 'Small (<5kg)',
    medium: 'Medium (5-10kg)',
    large: 'Large (10-25kg)',
    extra_large: 'Extra Large (25kg+)',
  };
  return labels[value] || value;
}

function getConditionLabel(value: string): string {
  const labels: Record<string, string> = {
    heart_disease: 'Heart disease',
    diabetes: 'Diabetes',
    kidney_disease: 'Kidney disease',
    allergies: 'Allergies',
    cancer: 'Cancer',
    arthritis: 'Arthritis',
    none: 'None known',
  };
  return labels[value] || value;
}

function getIngestionLabel(value: string): string {
  const labels: Record<string, string> = {
    chocolate: 'Chocolate',
    medication: 'Medication',
    plants: 'Plants',
    chemicals: 'Chemicals/Poison',
    none: 'None/Unknown',
  };
  return labels[value] || value;
}

function getEnvironmentLabel(value: string): string {
  const labels: Record<string, string> = {
    indoor: 'Indoor only',
    outdoor: 'Outdoor only',
    both: 'Both indoor/outdoor',
  };
  return labels[value] || value;
}

function getSymptomLabel(value: string): string {
  const labels: Record<string, string> = {
    vomiting: 'Vomiting',
    diarrhea: 'Diarrhea',
    not_eating: 'Not eating',
    limping: 'Limping/Lameness',
    other: 'Other symptoms',
  };
  return labels[value] || value;
}

function getPainLabel(value: string): string {
  const labels: Record<string, string> = {
    none: 'No visible pain',
    mild: 'Mild discomfort',
    moderate: 'Moderate pain',
    severe: 'Severe pain/distress',
  };
  return labels[value] || value;
}

function getBreathingLabel(value: string): string {
  const labels: Record<string, string> = {
    normal: 'Yes, normal',
    labored: 'Labored/difficult',
    rapid: 'Very rapid',
    weak: 'Weak/shallow',
  };
  return labels[value] || value;
}

function getAlertnessLabel(value: string): string {
  const labels: Record<string, string> = {
    alert: 'Fully alert',
    lethargic: 'Lethargic/weak',
    disoriented: 'Disoriented/confused',
    unresponsive: 'Unresponsive',
  };
  return labels[value] || value;
}

function getBleedingLabel(value: string): string {
  const labels: Record<string, string> = {
    none: 'None',
    minor: 'Minor/controlled',
    moderate: 'Moderate',
    severe: 'Severe/uncontrolled',
  };
  return labels[value] || value;
}

function getDurationLabel(value: string): string {
  const labels: Record<string, string> = {
    just_now: 'Just now (<30 minutes)',
    '1_6_hours': '1-6 hours',
    '6_24_hours': '6-24 hours',
    more_24_hours: 'More than 24 hours',
  };
  return labels[value] || value;
}

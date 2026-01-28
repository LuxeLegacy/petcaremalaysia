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
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const {
    state,
    urgencyResult,
    updateField,
    setLocation,
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

      // Send email notification
      try {
        const emailResponse = await supabase.functions.invoke('send-assessment-email', {
          body: {
            userName: state.userName,
            userEmail: state.userEmail,
            userPhone: state.userPhone,
            petName: state.petName,
            city: state.city,
            state: state.state,
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
            urgencyLevel: result.level,
            urgencyScore: result.score,
          },
        });
        
        if (emailResponse.error) {
          console.error('Error sending email:', emailResponse.error);
        } else {
          console.log('Assessment email sent successfully');
        }
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't block the flow if email fails
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

  // Helper functions using translations
  const getQuestionText = (questionId: string): string => {
    const questions: Record<string, string> = {
      petType: t.assessment.questions.petType,
      breed: t.assessment.questions.breed,
      age: t.assessment.questions.age,
      sex: t.assessment.questions.sex,
      fixed: t.assessment.questions.fixed,
      weight: t.assessment.questions.weight,
      conditions: t.assessment.questions.conditions,
      ingestion: t.assessment.questions.ingestion,
      environment: t.assessment.questions.environment,
      insured: t.assessment.questions.insured,
      mainSymptom: t.assessment.questions.mainSymptom,
      painLevel: t.assessment.questions.painLevel,
      breathing: t.assessment.questions.breathing,
      alertness: t.assessment.questions.alertness,
      bleeding: t.assessment.questions.bleeding,
      duration: t.assessment.questions.duration,
    };
    return questions[questionId] || '';
  };

  const getAgeLabel = (value: string): string => {
    const labels: Record<string, string> = {
      puppy_kitten: t.assessment.options.age.puppyKitten,
      young_adult: t.assessment.options.age.youngAdult,
      adult: t.assessment.options.age.adult,
      senior: t.assessment.options.age.senior,
    };
    return labels[value] || value;
  };

  const getYesNoLabel = (value: string): string => {
    const labels: Record<string, string> = {
      yes: t.assessment.options.yes,
      no: t.assessment.options.no,
      not_sure: t.assessment.options.notSure,
    };
    return labels[value] || value;
  };

  const getWeightLabel = (value: string): string => {
    const labels: Record<string, string> = {
      small: t.assessment.options.weight.small,
      medium: t.assessment.options.weight.medium,
      large: t.assessment.options.weight.large,
      extra_large: t.assessment.options.weight.extraLarge,
    };
    return labels[value] || value;
  };

  const getConditionLabel = (value: string): string => {
    const labels: Record<string, string> = {
      heart_disease: t.assessment.options.conditions.heartDisease,
      diabetes: t.assessment.options.conditions.diabetes,
      kidney_disease: t.assessment.options.conditions.kidneyDisease,
      allergies: t.assessment.options.conditions.allergies,
      cancer: t.assessment.options.conditions.cancer,
      arthritis: t.assessment.options.conditions.arthritis,
      none: t.assessment.options.conditions.none,
    };
    return labels[value] || value;
  };

  const getIngestionLabel = (value: string): string => {
    const labels: Record<string, string> = {
      chocolate: t.assessment.options.ingestion.chocolate,
      medication: t.assessment.options.ingestion.medication,
      plants: t.assessment.options.ingestion.plants,
      chemicals: t.assessment.options.ingestion.chemicals,
      none: t.assessment.options.ingestion.none,
    };
    return labels[value] || value;
  };

  const getEnvironmentLabel = (value: string): string => {
    const labels: Record<string, string> = {
      indoor: t.assessment.options.environment.indoor,
      outdoor: t.assessment.options.environment.outdoor,
      both: t.assessment.options.environment.both,
    };
    return labels[value] || value;
  };

  const getSymptomLabel = (value: string): string => {
    const labels: Record<string, string> = {
      vomiting: t.assessment.options.symptoms.vomiting,
      diarrhea: t.assessment.options.symptoms.diarrhea,
      not_eating: t.assessment.options.symptoms.notEating,
      limping: t.assessment.options.symptoms.limping,
      other: t.assessment.options.symptoms.other,
    };
    return labels[value] || value;
  };

  const getPainLabel = (value: string): string => {
    const labels: Record<string, string> = {
      none: t.assessment.options.pain.none,
      mild: t.assessment.options.pain.mild,
      moderate: t.assessment.options.pain.moderate,
      severe: t.assessment.options.pain.severe,
    };
    return labels[value] || value;
  };

  const getBreathingLabel = (value: string): string => {
    const labels: Record<string, string> = {
      normal: t.assessment.options.breathing.normal,
      labored: t.assessment.options.breathing.labored,
      rapid: t.assessment.options.breathing.rapid,
      weak: t.assessment.options.breathing.weak,
    };
    return labels[value] || value;
  };

  const getAlertnessLabel = (value: string): string => {
    const labels: Record<string, string> = {
      alert: t.assessment.options.alertness.alert,
      lethargic: t.assessment.options.alertness.lethargic,
      disoriented: t.assessment.options.alertness.disoriented,
      unresponsive: t.assessment.options.alertness.unresponsive,
    };
    return labels[value] || value;
  };

  const getBleedingLabel = (value: string): string => {
    const labels: Record<string, string> = {
      none: t.assessment.options.bleeding.none,
      minor: t.assessment.options.bleeding.minor,
      moderate: t.assessment.options.bleeding.moderate,
      severe: t.assessment.options.bleeding.severe,
    };
    return labels[value] || value;
  };

  const getDurationLabel = (value: string): string => {
    const labels: Record<string, string> = {
      just_now: t.assessment.options.duration.justNow,
      '1_6_hours': t.assessment.options.duration.hours1to6,
      '6_24_hours': t.assessment.options.duration.hours6to24,
      more_24_hours: t.assessment.options.duration.more24hours,
    };
    return labels[value] || value;
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
        city={state.city}
        state={state.state}
        onStateChange={(newState) => setLocation('', newState)}
        onCityChange={(newCity) => updateField('city', newCity)}
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
            label={option.value === 'dog' ? t.assessment.options.dog : t.assessment.options.cat}
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
            label={option.value === 'male' ? t.assessment.options.male : t.assessment.options.female}
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
              {t.assessment.navigation.continue}
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
          {t.assessment.entry.trustBadge}
        </p>
      </div>
    </div>
  );
}

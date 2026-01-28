import { useLanguage } from '@/contexts/LanguageContext';

interface AssessmentHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export function AssessmentHeader({ currentStep, totalSteps }: AssessmentHeaderProps) {
  const { t } = useLanguage();
  
  if (currentStep === 0) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <span className="text-sm text-muted-foreground font-medium">
        {t.assessment.navigation.step} {currentStep} {t.assessment.navigation.of} {totalSteps}
      </span>
    </div>
  );
}

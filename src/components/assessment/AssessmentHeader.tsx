interface AssessmentHeaderProps {
  currentStep: number;
  totalSteps: number;
}

export function AssessmentHeader({ currentStep, totalSteps }: AssessmentHeaderProps) {
  if (currentStep === 0) {
    return null;
  }

  return (
    <div className="flex justify-end">
      <span className="text-sm text-muted-foreground font-medium">
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  );
}

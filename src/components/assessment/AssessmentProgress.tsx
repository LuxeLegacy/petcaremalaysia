import { Progress } from '@/components/ui/progress';

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function AssessmentProgress({ currentStep, totalSteps }: AssessmentProgressProps) {
  const progress = currentStep === 0 ? 0 : (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <Progress value={progress} className="h-2" />
    </div>
  );
}

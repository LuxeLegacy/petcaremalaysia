import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UrgencyIndicator } from './UrgencyIndicator';
import { InsuranceSection } from './InsuranceSection';
import { AffiliateProductsSection } from './AffiliateProductsSection';
import { OwnProductsSection } from './OwnProductsSection';
import { NearbyVetsSection } from './NearbyVetsSection';
import { UrgencyResult, getUrgencyHeadline } from '@/lib/assessmentLogic';
import { AssessmentState } from '@/hooks/useAssessment';
import { RefreshCw, Printer, Share2 } from 'lucide-react';

interface ResultsDisplayProps {
  state: AssessmentState;
  urgencyResult: UrgencyResult;
  onRestart: () => void;
}

export function ResultsDisplay({
  state,
  urgencyResult,
  onRestart,
}: ResultsDisplayProps) {
  const { headline, subheadline } = getUrgencyHeadline(
    urgencyResult.level,
    state.petName,
    state.userName
  );

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Pet Emergency Assessment for ${state.petName}`,
          text: `${state.petName}'s emergency assessment: ${urgencyResult.level} urgency`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      {/* Urgency Banner */}
      <UrgencyIndicator
        level={urgencyResult.level}
        headline={headline}
        subheadline={subheadline}
      />

      {/* Pet & User Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground block">Your Name</span>
              <span className="font-medium">{state.userName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Email</span>
              <span className="font-medium">{state.userEmail}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Pet's Name</span>
              <span className="font-medium">{state.petName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Pet Type</span>
              <span className="font-medium capitalize">
                {state.petType === 'dog' ? '🐕 Dog' : '🐈 Cat'}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block">Breed</span>
              <span className="font-medium">{state.breed}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">Location</span>
              <span className="font-medium">{state.city}, {state.state}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Actions */}
      <Card className={urgencyResult.borderColor.replace('border', 'border-l-4 border')}>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground">
            📋 Recommended Actions
          </h3>
          <ol className="space-y-3">
            {urgencyResult.actions.map((action, index) => (
              <li key={index} className="flex gap-3">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${urgencyResult.bgColor} ${urgencyResult.color}`}>
                  {index + 1}
                </span>
                <span className="text-foreground">{action}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Nearby Emergency Vets */}
      <NearbyVetsSection city={state.city} state={state.state} />

      {/* Insurance CTA */}
      <InsuranceSection petName={state.petName} />

      {/* Affiliate Products */}
      <AffiliateProductsSection petName={state.petName} />

      {/* Own Products */}
      <OwnProductsSection />

      {/* Actions Bar */}
      <div className="flex flex-wrap gap-3 justify-center pt-6 border-t">
        <Button variant="outline" onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Print Results
        </Button>
        {navigator.share && (
          <Button variant="outline" onClick={handleShare} className="gap-2">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
        )}
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          New Assessment
        </Button>
      </div>

      {/* Footer */}
      <p className="text-xs text-center text-muted-foreground pt-4">
        This assessment is for informational purposes only and does not replace professional veterinary advice.
        Always consult a licensed veterinarian for proper diagnosis and treatment.
      </p>
    </div>
  );
}

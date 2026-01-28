import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UrgencyIndicator } from './UrgencyIndicator';
import { InsuranceSection } from './InsuranceSection';
import { AffiliateProductsSection } from './AffiliateProductsSection';
import { OwnProductsSection } from './OwnProductsSection';
import { NearbyVetsSection } from './NearbyVetsSection';
import { UrgencyResult, getUrgencyHeadline } from '@/lib/assessmentLogic';
import { AssessmentState } from '@/hooks/useAssessment';
import { useLanguage } from '@/contexts/LanguageContext';
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
  const { t } = useLanguage();
  
  const { headline, subheadline } = getUrgencyHeadline(
    urgencyResult.level,
    state.petName,
    state.userName,
    {
      critical: t.assessment.results.critical,
      high: t.assessment.results.high,
      moderate: t.assessment.results.moderate,
      low: t.assessment.results.low,
    }
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

  // Get translated actions based on urgency level
  const getTranslatedActions = () => {
    switch (urgencyResult.level) {
      case 'CRITICAL':
        return t.assessment.results.actions.critical;
      case 'HIGH':
        return t.assessment.results.actions.high;
      case 'MODERATE':
        return t.assessment.results.actions.moderate;
      case 'LOW':
        return t.assessment.results.actions.low;
    }
  };

  const translatedActions = getTranslatedActions();

  const getPetTypeLabel = () => {
    return state.petType === 'dog' 
      ? `🐕 ${t.assessment.options.dog}` 
      : `🐈 ${t.assessment.options.cat}`;
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
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.yourName}</span>
              <span className="font-medium">{state.userName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.email}</span>
              <span className="font-medium">{state.userEmail}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.petName}</span>
              <span className="font-medium">{state.petName}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.petType}</span>
              <span className="font-medium capitalize">{getPetTypeLabel()}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.breed}</span>
              <span className="font-medium">{state.breed}</span>
            </div>
            <div>
              <span className="text-muted-foreground block">{t.assessment.results.petSummary.location}</span>
              <span className="font-medium">{state.city}, {state.state}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Actions */}
      <Card className={urgencyResult.borderColor.replace('border', 'border-l-4 border')}>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-bold text-foreground">
            {t.assessment.results.actions.title}
          </h3>
          <ol className="space-y-3">
            {translatedActions.map((action, index) => (
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
          {t.assessment.results.buttons.print}
        </Button>
        {navigator.share && (
          <Button variant="outline" onClick={handleShare} className="gap-2">
            <Share2 className="w-4 h-4" />
            {t.assessment.results.buttons.share}
          </Button>
        )}
        <Button variant="outline" onClick={onRestart} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          {t.assessment.results.buttons.newAssessment}
        </Button>
      </div>

      {/* Footer */}
      <p className="text-xs text-center text-muted-foreground pt-4">
        {t.assessment.results.disclaimer}
      </p>
    </div>
  );
}

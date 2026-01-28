import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InsuranceSectionProps {
  petName: string;
}

export function InsuranceSection({ petName }: InsuranceSectionProps) {
  const { t } = useLanguage();
  
  const title = t.assessment.results.insurance.title.replace('{petName}', petName.toUpperCase());
  
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {title}
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-foreground font-medium">
            {t.assessment.results.insurance.subtitle}
          </p>
        </div>

        <div className="bg-background/50 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-foreground">
            {t.assessment.results.insurance.benefit1}
          </p>
          <p className="text-sm font-medium text-foreground">
            {t.assessment.results.insurance.benefit2}
          </p>
          <p className="text-sm font-medium text-foreground">
            {t.assessment.results.insurance.benefit3}
          </p>
        </div>

        <Button className="w-full h-12 text-base font-semibold gap-2">
          {t.assessment.results.insurance.cta}
          <ArrowRight className="w-4 h-4" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          {t.assessment.results.insurance.trustBadge}
        </p>
      </CardContent>
    </Card>
  );
}

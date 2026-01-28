import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AffiliateProductsSectionProps {
  petName: string;
}

export function AffiliateProductsSection({ petName }: AffiliateProductsSectionProps) {
  const { t } = useLanguage();
  
  const title = t.assessment.results.affiliateProducts.title.replace('{petName}', petName.toUpperCase());
  
  return (
    <Card className="border border-border">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Package className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {title}
          </h3>
        </div>

        <p className="text-muted-foreground">
          {t.assessment.results.affiliateProducts.subtitle}
        </p>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <p className="text-muted-foreground font-medium">
            {t.assessment.results.affiliateProducts.comingSoon}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {t.assessment.results.affiliateProducts.comingSoonSubtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

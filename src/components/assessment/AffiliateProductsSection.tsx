import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

interface AffiliateProductsSectionProps {
  petName: string;
}

export function AffiliateProductsSection({ petName }: AffiliateProductsSectionProps) {
  return (
    <Card className="border border-border">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted rounded-lg">
            <Package className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            🏥 ESSENTIAL SUPPLIES FOR {petName.toUpperCase()}'S RECOVERY
          </h3>
        </div>

        <p className="text-muted-foreground">
          Products recommended by board-certified vets to help your pet recover faster...
        </p>

        <div className="bg-muted/50 rounded-lg p-8 text-center">
          <p className="text-muted-foreground font-medium">
            Coming Soon
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            We're curating the best pet health products for you
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

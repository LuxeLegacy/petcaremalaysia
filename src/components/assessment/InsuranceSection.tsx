import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight } from 'lucide-react';

interface InsuranceSectionProps {
  petName: string;
}

export function InsuranceSection({ petName }: InsuranceSectionProps) {
  return (
    <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            🛡️ PROTECT {petName.toUpperCase()} FROM FUTURE EMERGENCIES
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-foreground font-medium">
            Most Malaysian pet owners discover pet insurance <span className="text-destructive font-bold">AFTER</span> a RM3,000+ vet bill.
          </p>
          <p className="text-muted-foreground">
            Don't be one of them. Compare the best pet insurance plans in Malaysia and get coverage starting from just RM50/month.
          </p>
        </div>

        <div className="bg-background/50 rounded-lg p-4 space-y-2">
          <p className="text-sm font-medium text-foreground">
            ✓ Emergency vet visits covered up to RM50,000/year
          </p>
          <p className="text-sm font-medium text-foreground">
            ✓ Surgery, hospitalization & medication included
          </p>
          <p className="text-sm font-medium text-foreground">
            ✓ Claims processed in 3-5 working days
          </p>
        </div>

        <Button className="w-full h-12 text-base font-semibold gap-2">
          Compare Insurance Plans
          <ArrowRight className="w-4 h-4" />
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Trusted by 50,000+ Malaysian pet owners
        </p>
      </CardContent>
    </Card>
  );
}

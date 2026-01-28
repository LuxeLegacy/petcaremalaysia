import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download } from 'lucide-react';

export function OwnProductsSection() {
  return (
    <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            📘 FREE PET EMERGENCY GUIDE
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-foreground font-medium">
            Download our 47-page guide every Malaysian pet owner needs.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Step-by-step first aid instructions</li>
            <li>✓ Common emergency symptoms checklist</li>
            <li>✓ 24-hour emergency vet directory by state</li>
            <li>✓ Poison control quick reference</li>
          </ul>
        </div>

        <Button variant="outline" className="w-full h-12 text-base font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Download className="w-4 h-4" />
          Get Free Guide
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Instant PDF download • No spam, ever
        </p>
      </CardContent>
    </Card>
  );
}

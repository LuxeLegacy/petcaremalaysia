import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function OwnProductsSection() {
  const { t } = useLanguage();
  
  return (
    <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {t.assessment.results.ownProducts.title}
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-foreground font-medium">
            {t.assessment.results.ownProducts.subtitle}
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{t.assessment.results.ownProducts.benefit1}</li>
            <li>{t.assessment.results.ownProducts.benefit2}</li>
            <li>{t.assessment.results.ownProducts.benefit3}</li>
            <li>{t.assessment.results.ownProducts.benefit4}</li>
          </ul>
        </div>

        <Button variant="outline" className="w-full h-12 text-base font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Download className="w-4 h-4" />
          {t.assessment.results.ownProducts.cta}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          {t.assessment.results.ownProducts.note}
        </p>
      </CardContent>
    </Card>
  );
}

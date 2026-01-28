import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Gift, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function OwnProductsSection() {
  const { language } = useLanguage();
  
  const guidePath = language === 'en' ? '/emergency-guide' : `/${language}/emergency-guide`;
  
  return (
    <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-background to-primary/5 overflow-hidden">
      <CardContent className="p-6 space-y-4">
        {/* Header with Gift Badge */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                🎁 FREE Pet Emergency Guide
              </h3>
              <p className="text-xs text-muted-foreground">
                47-page comprehensive resource
              </p>
            </div>
          </div>
          <div className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
            FREE
          </div>
        </div>

        {/* Value Proposition */}
        <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg">
          <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
            <Gift className="w-4 h-4 inline mr-1" />
            Normally RM49 — <span className="font-bold">FREE</span> for Assessment Completers!
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">
            What's Inside:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span>Step-by-step CPR & First Aid for dogs and cats</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span>Complete poison control reference (foods, plants, chemicals)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span>24-Hour vet directory for ALL Malaysian states</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
              <span>Emergency preparedness checklists & templates</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <Link to={guidePath} className="block">
          <Button className="w-full h-12 text-base font-bold gap-2 bg-primary hover:bg-primary/90">
            <Gift className="w-5 h-5" />
            Get Your FREE Guide Now
          </Button>
        </Link>

        <p className="text-xs text-center text-muted-foreground">
          ✓ Instant access • ✓ Print-ready • ✓ No signup required
        </p>
      </CardContent>
    </Card>
  );
}

import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface QuestionCardProps {
  question: string;
  subtitle?: string;
  children: ReactNode;
  onBack?: () => void;
  showBack?: boolean;
}

export function QuestionCard({
  question,
  subtitle,
  children,
  onBack,
  showBack = true,
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-0">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground leading-tight">
            {question}
          </h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="space-y-3">{children}</div>

        {showBack && onBack && (
          <div className="pt-4 border-t">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

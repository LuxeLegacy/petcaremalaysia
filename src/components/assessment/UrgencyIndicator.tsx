import { UrgencyLevel } from '@/lib/assessmentLogic';
import { cn } from '@/lib/utils';
import { AlertTriangle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface UrgencyIndicatorProps {
  level: UrgencyLevel;
  headline: string;
  subheadline: string;
}

export function UrgencyIndicator({ level, headline, subheadline }: UrgencyIndicatorProps) {
  const config = {
    CRITICAL: {
      icon: AlertTriangle,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      textColor: 'text-red-700',
      iconColor: 'text-red-600',
    },
    HIGH: {
      icon: AlertCircle,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-700',
      iconColor: 'text-orange-600',
    },
    MODERATE: {
      icon: Clock,
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      textColor: 'text-yellow-700',
      iconColor: 'text-yellow-600',
    },
    LOW: {
      icon: CheckCircle,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      textColor: 'text-green-700',
      iconColor: 'text-green-600',
    },
  };

  const { icon: Icon, bgColor, borderColor, textColor, iconColor } = config[level];

  return (
    <div className={cn('rounded-xl border-2 p-6', bgColor, borderColor)}>
      <div className="flex items-start gap-4">
        <div className={cn('p-3 rounded-full', bgColor)}>
          <Icon className={cn('w-8 h-8', iconColor)} />
        </div>
        <div className="flex-1 space-y-2">
          <h1 className={cn('text-2xl font-bold', textColor)}>
            {headline}
          </h1>
          <p className={cn('text-lg', textColor, 'opacity-90')}>
            {subheadline}
          </p>
        </div>
      </div>
    </div>
  );
}

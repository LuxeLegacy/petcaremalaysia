import { ReactNode } from 'react';
import { AlertTriangle, AlertCircle, Info, Skull } from 'lucide-react';

type WarningType = 'warning' | 'danger' | 'critical' | 'info' | 'caution';

interface WarningBoxProps {
  type: WarningType;
  title?: string;
  children: ReactNode;
}

const styles: Record<WarningType, { bg: string; border: string; icon: typeof AlertTriangle; iconColor: string }> = {
  warning: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    border: 'border-amber-500',
    icon: AlertTriangle,
    iconColor: 'text-amber-600 dark:text-amber-400'
  },
  danger: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    border: 'border-red-500',
    icon: AlertCircle,
    iconColor: 'text-red-600 dark:text-red-400'
  },
  critical: {
    bg: 'bg-red-100 dark:bg-red-950/50',
    border: 'border-red-600',
    icon: Skull,
    iconColor: 'text-red-700 dark:text-red-500'
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    border: 'border-blue-500',
    icon: Info,
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  caution: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    border: 'border-orange-500',
    icon: AlertTriangle,
    iconColor: 'text-orange-600 dark:text-orange-400'
  }
};

export function WarningBox({ type, title, children }: WarningBoxProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-4 rounded-r-lg my-4`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${style.iconColor}`} />
        <div className="flex-1">
          {title && (
            <h4 className={`font-bold mb-1 ${style.iconColor}`}>
              {title}
            </h4>
          )}
          <div className="text-foreground/90 text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from '@/lib/utils';

interface OptionButtonProps {
  label: string;
  icon?: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function OptionButton({
  label,
  icon,
  isSelected,
  onClick,
  disabled = false,
}: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-full p-4 rounded-lg border-2 text-left transition-all duration-200',
        'flex items-center gap-3 min-h-[56px]',
        'hover:border-primary/50 hover:bg-primary/5',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        isSelected
          ? 'border-primary bg-primary/10 text-primary font-medium'
          : 'border-border bg-card text-foreground',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      {icon && <span className="text-2xl flex-shrink-0">{icon}</span>}
      <span className="text-base">{label}</span>
    </button>
  );
}

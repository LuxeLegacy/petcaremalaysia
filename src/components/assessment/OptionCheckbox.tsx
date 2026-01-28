import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

interface OptionCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export function OptionCheckbox({
  label,
  isChecked,
  onChange,
  disabled = false,
}: OptionCheckboxProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      disabled={disabled}
      className={cn(
        'w-full p-4 rounded-lg border-2 text-left transition-all duration-200',
        'flex items-center gap-3 min-h-[56px]',
        'hover:border-primary/50 hover:bg-primary/5',
        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        isChecked
          ? 'border-primary bg-primary/10'
          : 'border-border bg-card',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={onChange}
        className="pointer-events-none"
      />
      <span className={cn(
        'text-base',
        isChecked ? 'text-primary font-medium' : 'text-foreground'
      )}>
        {label}
      </span>
    </button>
  );
}

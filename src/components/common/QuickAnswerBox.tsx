import { Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuickAnswerBoxProps {
  /** Plain text or already-translated answer (1-3 sentences). */
  answer: string;
  /** Optional title override. */
  title?: string;
}

const LABELS = {
  en: 'Quick Answer',
  ms: 'Jawapan Pantas',
  zh: '快速答案',
};

/**
 * Pastel-pink "Quick Answer" snippet card for AI/Google snippet capture.
 * Place near the top of medical/cost/how-to pages.
 */
export const QuickAnswerBox: React.FC<QuickAnswerBoxProps> = ({ answer, title }) => {
  const { language } = useLanguage();
  const label = title || LABELS[language] || LABELS.en;
  return (
    <aside
      className="my-6 rounded-2xl border border-primary/30 bg-primary/10 p-5 md:p-6 shadow-sm"
      aria-label={label}
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {label}
        </span>
      </div>
      <p className="text-base md:text-lg leading-relaxed text-foreground font-medium">
        {answer}
      </p>
    </aside>
  );
};

export default QuickAnswerBox;

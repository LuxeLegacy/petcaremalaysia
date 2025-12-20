import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { Language } from '@/lib/translations';

const languageLabels: Record<Language, string> = {
  en: 'English',
  ms: 'Bahasa Malaysia',
  zh: '中文',
};

const languageShortLabels: Record<Language, string> = {
  en: 'EN',
  ms: 'BM',
  zh: '中文',
};

interface LanguageSwitcherProps {
  variant?: 'inline' | 'dropdown';
  showLabel?: boolean;
}

export const LanguageSwitcher = ({ variant = 'inline', showLabel = true }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {showLabel && (
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Globe className="h-4 w-4" />
          </span>
        )}
        <div className="flex gap-1">
          {(Object.keys(languageLabels) as Language[]).map((lang) => (
            <Button
              key={lang}
              variant={language === lang ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage(lang)}
              className="text-xs px-3"
            >
              {languageShortLabels[lang]}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

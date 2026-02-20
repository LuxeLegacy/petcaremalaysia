import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const EmergencyOverride = () => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;

  return (
    <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-destructive text-lg mb-1">⚠️ Emergency Warning</h3>
          <p className="text-sm text-foreground mb-3">
            If your dog is showing facial swelling, refusal to eat, fever, or bleeding that won't stop — these may be signs of a dental emergency.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
              to={`${prefix}/dog-dental-disease/emergency-signs`}
              className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Check Emergency Signs
            </Link>
            <Link
              to={`${prefix}/emergency-guide`}
              className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Find Emergency Vet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  species?: 'cats' | 'dogs';
}

export const UrinaryEmergencyOverride = ({ species }: Props) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;
  const emergencyPath = species
    ? `${prefix}/urinary-tract-disease/${species}/emergency-signs`
    : `${prefix}/urinary-tract-disease/emergency-signs`;

  const warningText = species === 'cats'
    ? 'If your cat cannot urinate at all, is crying in the litter box, or is lethargic — this is a life-threatening emergency. Urethral obstruction can be fatal within 24–72 hours.'
    : species === 'dogs'
    ? 'If your dog is straining to urinate without producing urine, vomiting, or showing abdominal pain — seek emergency veterinary care immediately.'
    : 'If your pet cannot urinate, is straining without producing urine, or is lethargic — this may be a life-threatening emergency requiring immediate veterinary care.';

  return (
    <div className="bg-destructive/10 border-2 border-destructive rounded-xl p-5 my-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-destructive text-lg mb-1">⚠️ Emergency Warning</h3>
          <p className="text-sm text-foreground mb-3">{warningText}</p>
          <div className="flex flex-wrap gap-2">
            <Link to={emergencyPath} className="inline-flex items-center gap-1 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Check Emergency Signs
            </Link>
            <Link to={`${prefix}/emergency-guide`} className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              Find Emergency Vet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

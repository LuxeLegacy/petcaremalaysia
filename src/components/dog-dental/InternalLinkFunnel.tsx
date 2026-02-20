import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import type { DentalLink } from '@/data/dog-dental/types';

interface InternalLinkFunnelProps {
  title?: string;
  links: DentalLink[];
}

export const InternalLinkFunnel = ({ title = 'Next Steps', links }: InternalLinkFunnelProps) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;

  if (links.length === 0) return null;

  return (
    <div className="bg-muted/50 rounded-xl p-5 my-6">
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={`${prefix}${link.path}`}
            className="flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowRight className="h-4 w-4 flex-shrink-0" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { hubsData } from '@/lib/cityData';
import { MessageCircleQuestion, BookOpen } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const topHubs = hubsData.slice(0, 8);

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg">🐾</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                PetCare<span className="text-primary">MY</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Malaysia's trusted resource for pet care services. Find vets, emergency care, grooming, and more near you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.services}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/emergency" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.emergency.title}
                </Link>
              </li>
              <li>
                <Link to="/services/vet" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.vet.title}
                </Link>
              </li>
              <li>
                <Link to="/services/grooming" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.grooming.title}
                </Link>
              </li>
              <li>
                <Link to="/services/adoption" className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.adoption.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.locations}</h3>
            <ul className="space-y-2 text-sm">
              {topHubs.map((hub) => (
                <li key={hub.slug}>
                  <Link 
                    to={`/${hub.stateSlug}/${hub.cities[0]?.slug || hub.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {hub.name.replace(' Hub', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="/qa" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <MessageCircleQuestion className="h-4 w-4" />
                  Pet Care Q&A
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Blog
                </Link>
              </li>
              <li>
                <a 
                  href="https://petsurgerycost.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors flex items-center gap-2 font-medium"
                >
                  💰 Pet Surgery Costs
                </a>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <h4 className="font-medium text-sm">{t.nav.emergency}</h4>
              <a 
                href="tel:+60123456789" 
                className="flex items-center gap-2 text-destructive font-semibold hover:underline"
              >
                📞 +60 12-345 6789
              </a>
              <p className="text-xs text-muted-foreground">
                24/7 Emergency Hotline
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

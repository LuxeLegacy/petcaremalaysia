import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Menu, X, Globe, Phone, MessageCircleQuestion } from 'lucide-react';
import { useState } from 'react';
import { Language } from '@/lib/translations';

const languageLabels: Record<Language, string> = {
  en: 'English',
  ms: 'Bahasa Malaysia',
  zh: '中文',
};

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle language switch by navigating to the equivalent URL in the new language
  const handleLanguageSwitch = (newLang: Language) => {
    const currentPath = location.pathname;
    
    // Remove current language prefix if present
    let basePath = currentPath;
    if (currentPath.startsWith('/ms')) {
      basePath = currentPath.slice(3) || '/';
    } else if (currentPath.startsWith('/zh')) {
      basePath = currentPath.slice(3) || '/';
    }
    
    // Add new language prefix
    const newPath = newLang === 'en' ? basePath : `/${newLang}${basePath === '/' ? '' : basePath}`;
    
    setLanguage(newLang);
    navigate(newPath);
  };

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/locations', label: t.nav.locations },
    { href: '/blog', label: 'Blog' },
    { href: '/qa', label: 'Pet Q&A', icon: MessageCircleQuestion },
    { href: '/about', label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="PetCare Malaysia" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Emergency button - desktop */}
          <Button 
            variant="destructive" 
            size="sm" 
            className="hidden sm:flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">{t.nav.emergency}</span>
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{languageLabels[language]}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {(Object.keys(languageLabels) as Language[]).map((lang) => (
                <DropdownMenuItem 
                  key={lang}
                  onClick={() => handleLanguageSwitch(lang)}
                  className={language === lang ? 'bg-accent' : ''}
                >
                  {languageLabels[lang]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="destructive" 
              className="mt-2 w-full"
            >
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.emergency}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

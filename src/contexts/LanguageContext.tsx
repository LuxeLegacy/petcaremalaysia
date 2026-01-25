import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, Translations, getTranslations } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to detect language from URL path
const getLanguageFromPath = (pathname: string): Language => {
  if (pathname.startsWith('/ms')) return 'ms';
  if (pathname.startsWith('/zh')) return 'zh';
  return 'en';
};

// Inner component that uses useLocation (requires being inside Router)
const LanguageProviderInner: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [language, setLanguage] = useState<Language>(() => getLanguageFromPath(location.pathname));

  // Sync language state with URL path on route changes
  useEffect(() => {
    const detectedLang = getLanguageFromPath(location.pathname);
    if (detectedLang !== language) {
      setLanguage(detectedLang);
    }
  }, [location.pathname]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleSetLanguage, 
        t: getTranslations(language) 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Wrapper that can be used outside Router (for backward compatibility)
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <LanguageProviderInner>{children}</LanguageProviderInner>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

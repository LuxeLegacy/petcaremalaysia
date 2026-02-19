import { useState, useMemo, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { allArticles } from '@/data/paa';
import { useLanguage } from '@/contexts/LanguageContext';
import type { PAAArticle } from '@/lib/paaTypes';

const getArticlePath = (article: PAAArticle) => {
  const prefix = article.lang === 'en' ? '' : `/${article.lang}`;
  return `${prefix}/qa/article/${article.slug}`;
};

export const PAASearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    return allArticles
      .filter(a => a.lang === language)
      .filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.seo.keywords.some(k => k.toLowerCase().includes(q))
      )
      .slice(0, 6);
  }, [query, language]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const prefix = language === 'en' ? '' : `/${language}`;
    navigate(`${prefix}/search?q=${encodeURIComponent(query.trim())}`);
    setIsOpen(false);
    setQuery('');
  };

  const handleSelect = (article: PAAArticle) => {
    navigate(getArticlePath(article));
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search pet care questions..."
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm text-sm"
          autoComplete="off"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(''); setIsOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Autocomplete dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-elevated z-50 overflow-hidden">
          {suggestions.map(article => (
            <button
              key={article.slug}
              type="button"
              onClick={() => handleSelect(article)}
              className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b border-border/50 last:border-b-0"
            >
              <div className="text-sm font-medium line-clamp-1">{article.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{article.quickFacts.avgCost}</div>
            </button>
          ))}
          <button
            type="button"
            onClick={handleSearch as unknown as React.MouseEventHandler}
            className="w-full text-left px-4 py-3 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            <Search className="h-3.5 w-3.5" />
            Search all results for "{query}"
          </button>
        </div>
      )}
    </div>
  );
};

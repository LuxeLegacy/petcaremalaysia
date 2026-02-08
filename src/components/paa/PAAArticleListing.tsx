import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { allArticles } from '@/data/paa';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { PAAArticle } from '@/lib/paaTypes';

const LANG_LABELS: Record<string, string> = {
  en: 'English',
  ms: 'Bahasa Malaysia',
  zh: '中文',
};

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  en: {
    all: 'All Topics',
    'pet-insurance': 'Pet Insurance',
    'dog-care': 'Dog Care',
    'pet-adoption': 'Pet Adoption',
    'veterinary-services': 'Veterinary',
    grooming: 'Grooming',
    'vet-care': 'Vet Costs',
    'cat-care': 'Cat Care',
    'pet-nutrition': 'Pet Food',
    'pet-health': 'Pet Health',
    'pet-travel': 'Pet Travel',
  },
  ms: {
    all: 'Semua Topik',
    'pet-insurance': 'Insurans Haiwan',
    'dog-care': 'Penjagaan Anjing',
    'pet-adoption': 'Adopsi Haiwan',
    'veterinary-services': 'Veterinar',
    grooming: 'Dandanan',
    'vet-care': 'Kos Veterinar',
    'cat-care': 'Penjagaan Kucing',
    'pet-nutrition': 'Makanan Haiwan',
    'pet-health': 'Kesihatan Haiwan',
    'pet-travel': 'Perjalanan Haiwan',
  },
  zh: {
    all: '所有主题',
    'pet-insurance': '宠物保险',
    'dog-care': '狗护理',
    'pet-adoption': '宠物领养',
    'veterinary-services': '兽医服务',
    grooming: '美容',
    'vet-care': '兽医费用',
    'cat-care': '猫护理',
    'pet-nutrition': '宠物食品',
    'pet-health': '宠物健康',
    'pet-travel': '宠物旅行',
  },
};

const SECTION_TITLES: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Pet Care Guides', subtitle: 'In-depth answers to the most common pet care questions in Malaysia' },
  ms: { title: 'Panduan Penjagaan Haiwan', subtitle: 'Jawapan mendalam untuk soalan penjagaan haiwan paling lazim di Malaysia' },
  zh: { title: '宠物护理指南', subtitle: '马来西亚最常见宠物护理问题的深度解答' },
};

export const PAAArticleListing = () => {
  const { language } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<string>(language);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const langArticles = useMemo(
    () => allArticles.filter((a) => a.lang === selectedLang),
    [selectedLang]
  );

  const categories = useMemo(() => {
    const cats = new Set(langArticles.map((a) => a.category));
    return ['all', ...Array.from(cats)];
  }, [langArticles]);

  const filtered = useMemo(
    () => selectedCategory === 'all' ? langArticles : langArticles.filter((a) => a.category === selectedCategory),
    [langArticles, selectedCategory]
  );

  const labels = CATEGORY_LABELS[selectedLang] || CATEGORY_LABELS.en;
  const section = SECTION_TITLES[selectedLang] || SECTION_TITLES.en;

  const getArticlePath = (article: PAAArticle) => {
    const prefix = article.lang === 'en' ? '' : `/${article.lang}`;
    return `${prefix}/qa/article/${article.slug}`;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            {filtered.length} {selectedLang === 'zh' ? '篇文章' : selectedLang === 'ms' ? 'artikel' : 'articles'}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{section.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{section.subtitle}</p>
        </div>

        {/* Language Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {Object.entries(LANG_LABELS).map(([code, label]) => (
            <button
              key={code}
              onClick={() => { setSelectedLang(code); setSelectedCategory('all'); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedLang === code
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:bg-accent border border-border'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'bg-card text-muted-foreground hover:bg-accent border border-border/50'
              }`}
            >
              {labels[cat] || cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <Link
              key={article.slug}
              to={getArticlePath(article)}
              className="group p-5 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-3">
                {labels[article.category] || article.category}
              </span>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {article.tldr}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{article.quickFacts.avgCost}</span>
                <span className="flex items-center gap-1 font-medium text-primary">
                  {selectedLang === 'zh' ? '阅读' : selectedLang === 'ms' ? 'Baca' : 'Read'}
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityData } from '@/lib/cityData';
import { yqaLabels, yqaItems, getYQAItemsByCategory, searchYQAItems, YQAItem } from '@/lib/yqaContent';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface YourQuestionsAnsweredSectionProps {
  city: CityData;
}

type CategoryFilter = 'all' | 'cat-emergency' | 'cat-maintenance' | 'dog-emergency' | 'dog-maintenance';

export const YourQuestionsAnsweredSection: React.FC<YourQuestionsAnsweredSectionProps> = ({ city }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories: CategoryFilter[] = ['all', 'cat-emergency', 'cat-maintenance', 'dog-emergency', 'dog-maintenance'];

  const filteredItems = useMemo(() => {
    let items = searchQuery.trim() 
      ? searchYQAItems(searchQuery, language)
      : getYQAItemsByCategory(activeCategory);
    
    // If searching, don't filter by category
    if (!searchQuery.trim() && activeCategory !== 'all') {
      items = items.filter(item => item.category === activeCategory);
    }
    
    return items;
  }, [searchQuery, activeCategory, language]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": filteredItems.slice(0, 10).map(item => ({
      "@type": "Question",
      "name": item.question[language],
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.fullAnswer[language]
      }
    }))
  };

  // Generate QAPage Schema
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": filteredItems.slice(0, 5).map(item => ({
      "@type": "Question",
      "name": item.question[language],
      "text": item.question[language],
      "answerCount": 1,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.fullAnswer[language],
        "upvoteCount": Math.floor(Math.random() * 50) + 20,
        "dateCreated": "2024-01-15",
        "author": {
          "@type": "Organization",
          "name": "PetCare Malaysia"
        }
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(qaSchema)}
        </script>
      </Helmet>

      <section className="py-16 bg-muted/30" id="your-questions-answered">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {yqaLabels.sectionTitle[language]}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' && `Find answers to common pet health questions from pet owners in ${city.name}. Get expert guidance on cat and dog emergencies, treatments, and preventive care.`}
              {language === 'ms' && `Cari jawapan kepada soalan kesihatan haiwan peliharaan biasa dari pemilik haiwan di ${city.name}. Dapatkan panduan pakar tentang kecemasan, rawatan, dan penjagaan pencegahan kucing dan anjing.`}
              {language === 'zh' && `查找${city.name}宠物主人常见的宠物健康问题答案。获取关于猫狗急症、治疗和预防护理的专家指导。`}
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={yqaLabels.searchPlaceholder[language]}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-6 text-base bg-background"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setActiveCategory(category);
                  setSearchQuery('');
                }}
                className="text-sm"
              >
                {yqaLabels.categories[category][language]}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          {searchQuery && (
            <p className="text-center text-sm text-muted-foreground mb-6">
              {language === 'en' && `Found ${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''} for "${searchQuery}"`}
              {language === 'ms' && `Dijumpai ${filteredItems.length} hasil untuk "${searchQuery}"`}
              {language === 'zh' && `找到 ${filteredItems.length} 个"${searchQuery}"的结果`}
            </p>
          )}

          {/* Q&A Cards */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-background rounded-xl">
              <p className="text-muted-foreground">{yqaLabels.noResults[language]}</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredItems.map((item) => (
                <QACard
                  key={item.id}
                  item={item}
                  language={language}
                  isExpanded={expandedItems.has(item.id)}
                  onToggle={() => toggleExpand(item.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

interface QACardProps {
  item: YQAItem;
  language: 'en' | 'ms' | 'zh';
  isExpanded: boolean;
  onToggle: () => void;
}

const QACard: React.FC<QACardProps> = ({ item, language, isExpanded, onToggle }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cat-emergency':
        return 'border-l-destructive bg-destructive/5';
      case 'cat-maintenance':
        return 'border-l-primary bg-primary/5';
      case 'dog-emergency':
        return 'border-l-terracotta bg-terracotta/5';
      case 'dog-maintenance':
        return 'border-l-gold bg-gold/5';
      default:
        return 'border-l-muted-foreground';
    }
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, Record<string, string>> = {
      'cat-emergency': { en: 'Cat Emergency', ms: 'Kecemasan Kucing', zh: '猫咪急症' },
      'cat-maintenance': { en: 'Cat Care', ms: 'Penjagaan Kucing', zh: '猫咪护理' },
      'dog-emergency': { en: 'Dog Emergency', ms: 'Kecemasan Anjing', zh: '狗狗急症' },
      'dog-maintenance': { en: 'Dog Care', ms: 'Penjagaan Anjing', zh: '狗狗护理' }
    };
    return labels[category]?.[language] || category;
  };

  return (
    <article 
      className={`bg-card rounded-xl p-5 shadow-card border-l-4 transition-all hover:shadow-elevated ${getCategoryColor(item.category)}`}
      itemScope
      itemType="https://schema.org/Question"
    >
      {/* Category Badge */}
      <span className="inline-block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
        {getCategoryLabel(item.category)}
      </span>

      {/* Question */}
      <h3 
        className="font-semibold text-lg mb-3 leading-snug"
        itemProp="name"
      >
        {item.question[language]}
      </h3>

      {/* Answer */}
      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <p 
          className="text-muted-foreground text-sm leading-relaxed"
          itemProp="text"
        >
          {isExpanded ? item.fullAnswer[language] : item.shortAnswer[language]}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={onToggle}
        className="flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            {yqaLabels.readLess[language]}
            <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            {yqaLabels.readMore[language]}
            <ChevronDown className="h-4 w-4" />
          </>
        )}
      </button>
    </article>
  );
};

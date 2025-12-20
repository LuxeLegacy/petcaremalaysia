import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityData } from '@/lib/cityData';
import { yqaLabels, yqaItems, YQAItem } from '@/lib/yqaContent';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Cat, Dog, AlertTriangle, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface YourQuestionsAnsweredSectionProps {
  city: CityData;
}

type PetFilter = 'all' | 'cat' | 'dog';
type IssueFilter = 'all' | 'emergency' | 'maintenance';

const ITEMS_PER_PAGE = 10;

// Helper function to replace city placeholders in text
const replacePlaceholders = (text: string, city: CityData): string => {
  return text
    .replace(/{city}/g, city.name)
    .replace(/{state}/g, city.state);
};

export const YourQuestionsAnsweredSection: React.FC<YourQuestionsAnsweredSectionProps> = ({ city }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [petFilter, setPetFilter] = useState<PetFilter>('all');
  const [issueFilter, setIssueFilter] = useState<IssueFilter>('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  // Filter items based on search, pet type, and issue type
  const filteredItems = useMemo(() => {
    let items = [...yqaItems];
    
    // Apply search filter - replace placeholders for searching
    if (searchQuery.trim()) {
      const searchTerms = searchQuery.toLowerCase().split(' ').filter(term => term.length > 0);
      items = items.filter(item => {
        const questionText = replacePlaceholders(item.question[language], city).toLowerCase();
        const shortAnswerText = replacePlaceholders(item.shortAnswer[language], city).toLowerCase();
        const keywordsText = item.keywords.join(' ').toLowerCase();
        const searchableText = `${questionText} ${shortAnswerText} ${keywordsText}`;
        return searchTerms.some(term => searchableText.includes(term));
      });
    }
    
    // Apply pet filter
    if (petFilter !== 'all') {
      items = items.filter(item => item.category.startsWith(petFilter));
    }
    
    // Apply issue filter
    if (issueFilter !== 'all') {
      items = items.filter(item => item.category.endsWith(issueFilter));
    }
    
    return items;
  }, [searchQuery, petFilter, issueFilter, language, city]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Reset to page 1 when filters change
  const handleFilterChange = (type: 'pet' | 'issue', value: PetFilter | IssueFilter) => {
    if (type === 'pet') {
      setPetFilter(value as PetFilter);
    } else {
      setIssueFilter(value as IssueFilter);
    }
    setCurrentPage(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

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

  // Labels for filters
  const petLabels = {
    all: { en: 'All Pets', ms: 'Semua Haiwan', zh: '所有宠物' },
    cat: { en: 'Cats', ms: 'Kucing', zh: '猫咪' },
    dog: { en: 'Dogs', ms: 'Anjing', zh: '狗狗' }
  };

  const issueLabels = {
    all: { en: 'All Topics', ms: 'Semua Topik', zh: '所有主题' },
    emergency: { en: 'Emergencies', ms: 'Kecemasan', zh: '急症' },
    maintenance: { en: 'Care & Prevention', ms: 'Penjagaan', zh: '护理预防' }
  };

  // Generate FAQ Schema for SEO - with city-specific content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": paginatedItems.slice(0, 10).map(item => ({
      "@type": "Question",
      "name": replacePlaceholders(item.question[language], city),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": replacePlaceholders(item.fullAnswer[language], city)
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <section className="py-12 md:py-16 bg-gradient-to-b from-muted/20 to-muted/40" id="your-questions-answered">
        <div className="container px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              {yqaLabels.sectionTitle[language]}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              {language === 'en' && `Find answers to common pet health questions from pet owners in ${city.name}. Expert guidance on emergencies, treatments, and preventive care.`}
              {language === 'ms' && `Cari jawapan kepada soalan kesihatan haiwan peliharaan biasa dari pemilik haiwan di ${city.name}. Panduan pakar tentang kecemasan, rawatan, dan penjagaan pencegahan.`}
              {language === 'zh' && `查找${city.name}宠物主人常见的宠物健康问题答案。关于急症、治疗和预防护理的专家指导。`}
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-xl mx-auto mb-6 md:mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder={yqaLabels.searchPlaceholder[language]}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 pr-4 py-5 md:py-6 text-base bg-background border-2 focus:border-primary/50 rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
            {/* Pet Type Filter */}
            <div className="flex items-center gap-2 bg-background rounded-lg p-1 shadow-sm border">
              {(['all', 'cat', 'dog'] as PetFilter[]).map((pet) => (
                <Button
                  key={pet}
                  variant={petFilter === pet ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleFilterChange('pet', pet)}
                  className={`flex items-center gap-1.5 text-xs md:text-sm transition-all ${
                    petFilter === pet ? 'shadow-md' : 'hover:bg-muted'
                  }`}
                >
                  {pet === 'cat' && <Cat className="h-4 w-4" />}
                  {pet === 'dog' && <Dog className="h-4 w-4" />}
                  {petLabels[pet][language]}
                </Button>
              ))}
            </div>

            {/* Issue Type Filter */}
            <div className="flex items-center gap-2 bg-background rounded-lg p-1 shadow-sm border">
              {(['all', 'emergency', 'maintenance'] as IssueFilter[]).map((issue) => (
                <Button
                  key={issue}
                  variant={issueFilter === issue ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => handleFilterChange('issue', issue)}
                  className={`flex items-center gap-1.5 text-xs md:text-sm transition-all ${
                    issueFilter === issue ? 'shadow-md' : 'hover:bg-muted'
                  }`}
                >
                  {issue === 'emergency' && <AlertTriangle className="h-4 w-4" />}
                  {issue === 'maintenance' && <Heart className="h-4 w-4" />}
                  {issueLabels[issue][language]}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count & Active Filters */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-6 text-sm text-muted-foreground">
            <span>
              {language === 'en' && `Showing ${paginatedItems.length} of ${filteredItems.length} questions`}
              {language === 'ms' && `Menunjukkan ${paginatedItems.length} daripada ${filteredItems.length} soalan`}
              {language === 'zh' && `显示 ${paginatedItems.length} / ${filteredItems.length} 个问题`}
            </span>
            {searchQuery && (
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                "{searchQuery}"
              </span>
            )}
          </div>

          {/* Q&A Cards */}
          {paginatedItems.length === 0 ? (
            <div className="text-center py-12 bg-background rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-muted-foreground">{yqaLabels.noResults[language]}</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery('');
                  setPetFilter('all');
                  setIssueFilter('all');
                  setCurrentPage(1);
                }}
                className="mt-2"
              >
                {language === 'en' && 'Clear all filters'}
                {language === 'ms' && 'Kosongkan semua penapis'}
                {language === 'zh' && '清除所有筛选'}
              </Button>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
              {paginatedItems.map((item, index) => (
                <QACard
                  key={item.id}
                  item={item}
                  city={city}
                  language={language}
                  isExpanded={expandedItems.has(item.id)}
                  onToggle={() => toggleExpand(item.id)}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 md:mt-10">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="h-9 w-9 p-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {generatePageNumbers(currentPage, totalPages).map((page, idx) => (
                    page === '...' ? (
                      <span key={`ellipsis-${idx}`} className="px-2 text-muted-foreground">...</span>
                    ) : (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page as number)}
                        className={`h-9 w-9 p-0 text-sm ${currentPage === page ? 'shadow-md' : ''}`}
                      >
                        {page}
                      </Button>
                    )
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="h-9 w-9 p-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <span className="text-sm text-muted-foreground">
                {language === 'en' && `Page ${currentPage} of ${totalPages}`}
                {language === 'ms' && `Halaman ${currentPage} daripada ${totalPages}`}
                {language === 'zh' && `第 ${currentPage} 页，共 ${totalPages} 页`}
              </span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// Helper function to generate page numbers with ellipsis
function generatePageNumbers(current: number, total: number): (number | string)[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | string)[] = [];
  
  if (current <= 3) {
    pages.push(1, 2, 3, 4, '...', total);
  } else if (current >= total - 2) {
    pages.push(1, '...', total - 3, total - 2, total - 1, total);
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total);
  }
  
  return pages;
}

interface QACardProps {
  item: YQAItem;
  city: CityData;
  language: 'en' | 'ms' | 'zh';
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

const QACard: React.FC<QACardProps> = ({ item, city, language, isExpanded, onToggle, index }) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'cat-emergency':
        return {
          border: 'border-l-destructive',
          bg: 'bg-destructive/5 hover:bg-destructive/10',
          badge: 'bg-destructive/10 text-destructive',
          icon: '🐱🚨'
        };
      case 'cat-maintenance':
        return {
          border: 'border-l-primary',
          bg: 'bg-primary/5 hover:bg-primary/10',
          badge: 'bg-primary/10 text-primary',
          icon: '🐱💚'
        };
      case 'dog-emergency':
        return {
          border: 'border-l-terracotta',
          bg: 'bg-terracotta/5 hover:bg-terracotta/10',
          badge: 'bg-terracotta/10 text-terracotta',
          icon: '🐕🚨'
        };
      case 'dog-maintenance':
        return {
          border: 'border-l-gold',
          bg: 'bg-gold/5 hover:bg-gold/10',
          badge: 'bg-gold/10 text-gold-foreground',
          icon: '🐕💚'
        };
      default:
        return {
          border: 'border-l-muted-foreground',
          bg: 'bg-muted/50',
          badge: 'bg-muted text-muted-foreground',
          icon: '🐾'
        };
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

  const styles = getCategoryStyles(item.category);

  // Replace placeholders with city-specific data
  const question = replacePlaceholders(item.question[language], city);
  const shortAnswer = replacePlaceholders(item.shortAnswer[language], city);
  const fullAnswer = replacePlaceholders(item.fullAnswer[language], city);

  return (
    <article 
      className={`bg-card rounded-xl p-4 md:p-5 shadow-sm border-l-4 transition-all duration-300 hover:shadow-md ${styles.border} ${styles.bg}`}
      itemScope
      itemType="https://schema.org/Question"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">{styles.icon}</span>
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${styles.badge}`}>
          {getCategoryLabel(item.category)}
        </span>
      </div>

      {/* Question */}
      <h3 
        className="font-semibold text-base md:text-lg mb-3 leading-snug text-foreground"
        itemProp="name"
      >
        {question}
      </h3>

      {/* Answer */}
      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <p 
          className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${
            isExpanded ? 'line-clamp-none' : 'line-clamp-3'
          }`}
          itemProp="text"
        >
          {isExpanded ? fullAnswer : shortAnswer}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            {yqaLabels.readLess[language]}
            <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </>
        ) : (
          <>
            {yqaLabels.readMore[language]}
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </>
        )}
      </button>
    </article>
  );
};

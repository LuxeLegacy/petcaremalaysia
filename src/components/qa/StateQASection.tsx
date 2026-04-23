import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, ChevronDown, ChevronUp, MapPin, Info, Loader2 } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getCitiesByState } from '@/lib/cityData';
import type { Language } from '@/lib/translations';

// Lightweight row (no `answer` — fetched lazily)
interface QAListItem {
  id: string;
  keyword: string;
  question: string;
  category: string;
  priority: number | null;
  city_slug: string | null;
}

interface CityCount {
  city_slug: string;
  count: number;
  name: string;
}

interface StateQASectionProps {
  stateSlug: string;
  stateName: string;
}

const CATEGORY_LABELS: Record<string, Record<Language, string>> = {
  emergency: { en: 'Emergency', ms: 'Kecemasan', zh: '紧急' },
  symptoms: { en: 'Symptoms', ms: 'Gejala', zh: '症状' },
  toxins: { en: 'Toxins', ms: 'Toksin', zh: '毒素' },
  first_aid: { en: 'First Aid', ms: 'Pertolongan Cemas', zh: '急救' },
  prevention: { en: 'Prevention', ms: 'Pencegahan', zh: '预防' },
  general: { en: 'General', ms: 'Umum', zh: '一般' },
};

const CATEGORY_COLORS: Record<string, string> = {
  emergency: 'bg-destructive/10 text-destructive',
  symptoms: 'bg-amber-500/10 text-amber-600',
  toxins: 'bg-purple-500/10 text-purple-600',
  first_aid: 'bg-blue-500/10 text-blue-600',
  prevention: 'bg-green-500/10 text-green-600',
  general: 'bg-gray-500/10 text-gray-600',
};

const i18n = {
  searchPlaceholder: {
    en: 'Search by keyword, symptom, or treatment (e.g., poisoning, seizures, bleeding...)',
    ms: 'Cari mengikut kata kunci, gejala, atau rawatan (cth., keracunan, sawan, pendarahan...)',
    zh: '按关键词、症状或治疗搜索（如中毒、癫痫、出血...）',
  },
  popularSearches: { en: 'Popular searches:', ms: 'Carian popular:', zh: '热门搜索：' },
  allCities: { en: 'All Cities', ms: 'Semua Bandar', zh: '所有城市' },
  all: { en: 'All', ms: 'Semua', zh: '全部' },
  showing: { en: 'Showing', ms: 'Menunjukkan', zh: '显示' },
  of: { en: 'of', ms: 'daripada', zh: '/' },
  questions: { en: 'questions', ms: 'soalan', zh: '个问题' },
  noMatch: { en: 'No questions match your search.', ms: 'Tiada soalan sepadan dengan carian anda.', zh: '没有与您的搜索匹配的问题。' },
  noData: { en: 'No Q&A available for', ms: 'Tiada S&J tersedia untuk', zh: '暂无问答适用于' },
  yet: { en: 'yet. Check back soon!', ms: 'lagi. Sila semak semula nanti!', zh: '。请稍后再来！' },
  showMore: { en: 'Show More', ms: 'Tunjuk Lagi', zh: '显示更多' },
  showLess: { en: 'Show Less', ms: 'Tunjuk Kurang', zh: '显示更少' },
  fallbackBanner: {
    en: 'Showing English Q&A. Translation coming soon.',
    ms: 'Memaparkan S&J dalam Bahasa Inggeris. Terjemahan akan datang.',
    zh: '显示英文问答。翻译即将推出。',
  },
  loadError: {
    en: 'The list is taking longer than expected. Please try again.',
    ms: 'Senarai mengambil masa lebih lama daripada jangkaan. Sila cuba lagi.',
    zh: '加载时间超出预期，请重试。',
  },
  retry: { en: 'Try Again', ms: 'Cuba Lagi', zh: '重试' },
  loadingAnswer: { en: 'Loading answer...', ms: 'Memuatkan jawapan...', zh: '加载答案中...' },
};

const POPULAR_SEARCHES = [
  'poisoning', 'seizures', 'bleeding', 'breathing', 'heatstroke',
  'snake bite', 'vomiting', 'diarrhea', 'choking', 'burns'
];

const ITEMS_PER_PAGE = 10;

// Lightweight list fetch via edge function — bypasses PostgREST gateway 504s.
const fetchListViaEdge = async (
  stateSlug: string,
  language: string,
): Promise<{ data: QAListItem[] | null; isFallback: boolean; error: any }> => {
  try {
    const { data, error } = await supabase.functions.invoke('get-state-qa-list', {
      body: { stateSlug, language, limit: 500, offset: 0 },
    });
    if (error) return { data: null, isFallback: false, error };
    return {
      data: (data?.data ?? []) as QAListItem[],
      isFallback: !!data?.isFallback,
      error: null,
    };
  } catch (err) {
    return { data: null, isFallback: false, error: err };
  }
};

export const StateQASection = ({ stateSlug, stateName }: StateQASectionProps) => {
  const { language } = useLanguage();
  const [qaData, setQaData] = useState<QAListItem[]>([]);
  const [answerCache, setAnswerCache] = useState<Record<string, string>>({});
  const [loadingAnswerIds, setLoadingAnswerIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [cityCounts, setCityCounts] = useState<CityCount[]>([]);
  const [isFallback, setIsFallback] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const stateCities = useMemo(() => getCitiesByState(stateSlug), [stateSlug]);

  const stateNameMap: Record<string, string> = useMemo(() => ({
    'selangor': 'Selangor',
    'kuala-lumpur': 'Kuala Lumpur',
    'johor': 'Johor',
    'penang': 'Penang',
    'perak': 'Perak',
    'sarawak': 'Sarawak',
    'sabah': 'Sabah',
    'melaka': 'Melaka',
    'kedah': 'Kedah',
    'pahang': 'Pahang',
    'kelantan': 'Kelantan',
    'terengganu': 'Terengganu',
    'negeri-sembilan': 'Negeri Sembilan',
    'perlis': 'Perlis',
  }), []);

  useEffect(() => {
    let cancelled = false;
    const fetchQAs = async () => {
      setLoading(true);
      setIsFallback(false);
      setHasError(false);

      const { data, isFallback: fb, error } = await fetchListViaEdge(stateSlug, language);

      if (cancelled) return;

      if (error) {
        console.error('Error fetching Q&A list:', error);
        setHasError(true);
        setQaData([]);
      } else {
        if (fb) setIsFallback(true);
        const resultData = data || [];
        setQaData(resultData);
        const counts: Record<string, number> = {};
        resultData.forEach((q) => {
          if (q.city_slug) counts[q.city_slug] = (counts[q.city_slug] || 0) + 1;
        });
        const cityCountList: CityCount[] = stateCities
          .map((city) => ({
            city_slug: city.slug,
            name: city.name,
            count: counts[city.slug] || 0,
          }))
          .sort((a, b) => b.count - a.count);
        setCityCounts(cityCountList);
      }
      setLoading(false);
    };

    fetchQAs();
    return () => {
      cancelled = true;
    };
  }, [stateSlug, stateName, language, stateNameMap, stateCities, reloadKey]);

  // Lazy-load a single answer when its accordion item opens
  const loadAnswer = useCallback(async (id: string) => {
    if (answerCache[id] !== undefined || loadingAnswerIds.has(id)) return;
    setLoadingAnswerIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    try {
      const { data, error } = await supabase.functions.invoke('get-qa-answer', {
        body: { id },
      });
      if (!error && data?.answer) {
        setAnswerCache((prev) => ({ ...prev, [id]: data.answer }));
      } else if (error) {
        console.error('Error fetching answer:', error);
      }
    } catch (err) {
      console.error('Error fetching answer:', err);
    } finally {
      setLoadingAnswerIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }, [answerCache, loadingAnswerIds]);

  const handleAccordionChange = useCallback((value: string) => {
    if (value) loadAnswer(value);
  }, [loadAnswer]);

  const categories = useMemo(() => {
    const cats = new Set(qaData.map(q => q.category));
    return Array.from(cats);
  }, [qaData]);

  const baseFilteredQAs = useMemo(() => {
    let filtered = qaData;
    if (selectedCity !== 'all') {
      filtered = filtered.filter(q => q.city_slug === selectedCity);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        q =>
          q.question.toLowerCase().includes(query) ||
          q.keyword.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [qaData, searchQuery, selectedCity]);

  const filteredQAs = useMemo(() => {
    if (selectedCategory) {
      return baseFilteredQAs.filter(q => q.category === selectedCategory);
    }
    return baseFilteredQAs;
  }, [baseFilteredQAs, selectedCategory]);

  const visibleQAs = filteredQAs.slice(0, visibleItems);
  const hasMore = visibleItems < filteredQAs.length;

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="text-center py-12 bg-destructive/5 border border-destructive/20 rounded-2xl space-y-4">
        <p className="text-foreground/80 max-w-md mx-auto">{i18n.loadError[language]}</p>
        <Button onClick={() => setReloadKey((k) => k + 1)} variant="outline">
          {i18n.retry[language]}
        </Button>
      </div>
    );
  }

  if (qaData.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/30 rounded-2xl">
        <p className="text-muted-foreground">
          {i18n.noData[language]} {stateName} {i18n.yet[language]}
        </p>
      </div>
    );
  }

  const getCatLabel = (cat: string) => {
    const labels = CATEGORY_LABELS[cat];
    return labels ? labels[language] : cat;
  };

  const getCatColor = (cat: string) => CATEGORY_COLORS[cat] || 'bg-gray-500/10 text-gray-600';

  return (
    <div className="space-y-6">
      {isFallback && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/50 border border-accent text-sm text-accent-foreground">
          <Info className="h-4 w-4 shrink-0" />
          {i18n.fallbackBanner[language]}
        </div>
      )}

      <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          <Input
            placeholder={i18n.searchPlaceholder[language]}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
            className="pl-12 pr-4 py-6 text-base sm:text-lg bg-background border-2 border-border focus:border-primary rounded-xl"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setVisibleItems(ITEMS_PER_PAGE);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>

        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">{i18n.popularSearches[language]}</p>
          <div className="flex flex-wrap gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => {
                  setSearchQuery(term);
                  setVisibleItems(ITEMS_PER_PAGE);
                }}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  searchQuery.toLowerCase() === term.toLowerCase()
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-muted/50 text-muted-foreground border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                }`}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {cityCounts.length > 0 && (
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Select
              value={selectedCity}
              onValueChange={(value) => {
                setSelectedCity(value);
                setVisibleItems(ITEMS_PER_PAGE);
              }}
            >
              <SelectTrigger className="w-full sm:w-[240px] bg-background">
                <SelectValue placeholder="Select city/town" />
              </SelectTrigger>
              <SelectContent className="bg-background z-50">
                <SelectItem value="all">{i18n.allCities[language]} ({qaData.length})</SelectItem>
                {cityCounts.map((city) => (
                  <SelectItem key={city.city_slug} value={city.city_slug}>
                    {city.name} {city.count > 0 ? `(${city.count})` : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex flex-wrap gap-2 flex-1">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory(null);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
          >
            {i18n.all[language]} ({baseFilteredQAs.length})
          </Button>
          {categories.map((cat) => {
            const count = baseFilteredQAs.filter(q => q.category === cat).length;
            return (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleItems(ITEMS_PER_PAGE);
                }}
              >
                {getCatLabel(cat)} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        {i18n.showing[language]} {visibleQAs.length} {i18n.of[language]} {filteredQAs.length} {i18n.questions[language]}
      </p>

      {filteredQAs.length === 0 ? (
        <div className="text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground">{i18n.noMatch[language]}</p>
        </div>
      ) : (
        <>
          <Accordion type="single" collapsible className="space-y-3" onValueChange={handleAccordionChange}>
            {visibleQAs.map((qa, index) => {
              const showCTA = (index + 1) % 5 === 0 && index < visibleQAs.length - 1;
              const answer = answerCache[qa.id];
              const isLoadingAnswer = loadingAnswerIds.has(qa.id);
              return (
                <div key={qa.id}>
                  <AccordionItem
                    value={qa.id}
                    className="bg-card rounded-xl border border-border/50 px-4 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-start gap-3 text-left">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getCatColor(qa.category)}`}>
                          {getCatLabel(qa.category)}
                        </span>
                        <span className="font-medium text-foreground">{qa.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0">
                      <div className="prose prose-sm max-w-none text-muted-foreground pl-[70px]">
                        {answer ? (
                          answer
                        ) : isLoadingAnswer ? (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>{i18n.loadingAnswer[language]}</span>
                          </div>
                        ) : (
                          <Skeleton className="h-16 w-full rounded-md" />
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {showCTA && <CostCTA variant={Math.floor(index / 5)} />}
                </div>
              );
            })}
          </Accordion>

          <CostCTA variant={visibleQAs.length % 10} />

          <div className="flex justify-center gap-4 pt-4">
            {hasMore && (
              <Button
                variant="outline"
                onClick={() => setVisibleItems((prev) => prev + ITEMS_PER_PAGE)}
                className="gap-2"
              >
                {i18n.showMore[language]} <ChevronDown className="h-4 w-4" />
              </Button>
            )}
            {visibleItems > ITEMS_PER_PAGE && (
              <Button
                variant="ghost"
                onClick={() => setVisibleItems(ITEMS_PER_PAGE)}
                className="gap-2"
              >
                {i18n.showLess[language]} <ChevronUp className="h-4 w-4" />
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

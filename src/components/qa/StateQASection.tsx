import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, ChevronDown, ChevronUp, MapPin, Info, Loader2, AlertCircle } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getCitiesByState } from '@/lib/cityData';
import type { Language } from '@/lib/translations';

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

interface ListCacheEntry {
  rows: QAListItem[];
  nextOffset: number | null;
  isFallback: boolean;
  effectiveLanguage: string;
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

const STATE_NAME_MAP: Record<string, string[]> = {
  selangor: ['Selangor'],
  'kuala-lumpur': ['Kuala Lumpur', 'W.P. Kuala Lumpur', 'WP Kuala Lumpur'],
  johor: ['Johor'],
  penang: ['Penang', 'Pulau Pinang'],
  perak: ['Perak'],
  sarawak: ['Sarawak'],
  sabah: ['Sabah'],
  melaka: ['Melaka', 'Malacca'],
  kedah: ['Kedah'],
  pahang: ['Pahang'],
  kelantan: ['Kelantan'],
  terengganu: ['Terengganu'],
  'negeri-sembilan': ['Negeri Sembilan'],
  perlis: ['Perlis'],
  labuan: ['Labuan', 'F.T. Labuan', 'WP Labuan'],
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
  loaded: { en: 'loaded so far', ms: 'dimuatkan setakat ini', zh: '已加载' },
  questions: { en: 'questions', ms: 'soalan', zh: '个问题' },
  noMatch: { en: 'No questions match your search.', ms: 'Tiada soalan sepadan dengan carian anda.', zh: '没有与您的搜索匹配的问题。' },
  noData: { en: 'No Q&A available for', ms: 'Tiada S&J tersedia untuk', zh: '暂无问答适用于' },
  yet: { en: 'yet. Check back soon!', ms: 'lagi. Sila semak semula nanti!', zh: '。请稍后再来！' },
  showMore: { en: 'Load More Questions', ms: 'Muat Lagi Soalan', zh: '加载更多问题' },
  showLess: { en: 'Show Less', ms: 'Tunjuk Kurang', zh: '显示更少' },
  fallbackBanner: {
    en: 'Showing English Q&A. Translation coming soon.',
    ms: 'Memaparkan S&J dalam Bahasa Inggeris. Terjemahan akan datang.',
    zh: '显示英文问答。翻译即将推出。',
  },
  batchError: {
    en: "Couldn't load this batch. The other answers above are still available.",
    ms: 'Tidak dapat memuat kelompok ini. Jawapan di atas masih tersedia.',
    zh: '此批次加载失败。上方其他答案仍然可用。',
  },
  initialLoadingMessage: {
    en: 'Loading questions...',
    ms: 'Memuatkan soalan...',
    zh: '正在加载问题...',
  },
  retry: { en: 'Try Again', ms: 'Cuba Lagi', zh: '重试' },
  loadingAnswer: { en: 'Loading answer...', ms: 'Memuatkan jawapan...', zh: '加载答案中...' },
  answerError: {
    en: 'Could not load this answer. Please try again.',
    ms: 'Tidak dapat memuat jawapan ini. Sila cuba lagi.',
    zh: '无法加载此答案，请重试。',
  },
};

const POPULAR_SEARCHES = [
  'poisoning',
  'seizures',
  'bleeding',
  'breathing',
  'heatstroke',
  'snake bite',
  'vomiting',
  'diarrhea',
  'choking',
  'burns',
];

const BATCH_SIZE = 50;
const INITIAL_BATCH_SIZE = 20;
const ITEMS_PER_PAGE = 10;
const MAX_RETRIES = 2;
const LIST_TIMEOUT_MS = 6000;
const ANSWER_TIMEOUT_MS = 5000;

const listCache = new Map<string, ListCacheEntry>();
const answerCache = new Map<string, string>();

function withTimeout<T>(promise: PromiseLike<T>, ms: number, label = 'request'): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    Promise.resolve(promise).then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      },
    );
  });
}

async function fetchListBatch(
  stateSlug: string,
  language: string,
  offset: number,
): Promise<{
  rows: QAListItem[];
  nextOffset: number | null;
  isFallback: boolean;
  effectiveLanguage: string;
  error: string | null;
}> {
  const stateCandidates = STATE_NAME_MAP[stateSlug] || [stateSlug];

  const batchSize = offset === 0 ? INITIAL_BATCH_SIZE : BATCH_SIZE;

  const runQuery = async (lang: string) => {
    const queryPromise = supabase
      .from('pet_qa_keywords')
      .select('id, keyword, question, category, priority, city_slug')
      .in('state', stateCandidates)
      .eq('language', lang)
      .order('priority', { ascending: false })
      .order('id', { ascending: true })
      .range(offset, offset + batchSize - 1);

    return withTimeout(queryPromise, LIST_TIMEOUT_MS, 'pet_qa_keywords list');
  };

  let lastErr: unknown = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const primary = await runQuery(language);
      if (primary.error) {
        lastErr = primary.error;
      } else {
        const primaryRows = (primary.data ?? []) as QAListItem[];
        if (offset === 0 && primaryRows.length === 0 && language !== 'en') {
          const fallback = await runQuery('en');
          if (fallback.error) {
            lastErr = fallback.error;
          } else {
            const rows = (fallback.data ?? []) as QAListItem[];
            return {
              rows,
              nextOffset: rows.length === batchSize ? offset + batchSize : null,
              isFallback: rows.length > 0,
              effectiveLanguage: rows.length > 0 ? 'en' : language,
              error: null,
            };
          }
        } else {
          return {
            rows: primaryRows,
            nextOffset: primaryRows.length === batchSize ? offset + batchSize : null,
            isFallback: false,
            effectiveLanguage: language,
            error: null,
          };
        }
      }
    } catch (err) {
      lastErr = err;
    }

    if (attempt < MAX_RETRIES) {
      await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)));
    }
  }

  return {
    rows: [],
    nextOffset: null,
    isFallback: false,
    effectiveLanguage: language,
    error: (lastErr && typeof lastErr === 'object' && 'message' in lastErr
      ? String((lastErr as { message?: string }).message)
      : String(lastErr || 'request failed')),
  };
}

export const StateQASection = ({ stateSlug, stateName }: StateQASectionProps) => {
  const { language } = useLanguage();
  const cacheKey = `${stateSlug}|${language}`;
  const cached = listCache.get(cacheKey);

  const [qaData, setQaData] = useState<QAListItem[]>(() => cached?.rows ?? []);
  const [nextOffset, setNextOffset] = useState<number | null>(() => cached?.nextOffset ?? 0);
  const [isFallback, setIsFallback] = useState<boolean>(() => cached?.isFallback ?? false);
  const [effectiveLanguage, setEffectiveLanguage] = useState<string>(() => cached?.effectiveLanguage ?? language);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [answerErrors, setAnswerErrors] = useState<Record<string, boolean>>({});
  const [loadingAnswerIds, setLoadingAnswerIds] = useState<Set<string>>(new Set());
  const [initialLoading, setInitialLoading] = useState<boolean>(() => !cached);
  const [initialError, setInitialError] = useState<string | null>(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [batchError, setBatchError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [reloadKey, setReloadKey] = useState(0);

  const stateCities = useMemo(() => getCitiesByState(stateSlug), [stateSlug]);

  const persistCache = useCallback(
    (rows: QAListItem[], offset: number | null, fallback: boolean, langUsed: string) => {
      listCache.set(cacheKey, {
        rows,
        nextOffset: offset,
        isFallback: fallback,
        effectiveLanguage: langUsed,
      });
    },
    [cacheKey],
  );

  useEffect(() => {
    let cancelled = false;
    const currentCache = listCache.get(cacheKey);

    if (currentCache && currentCache.rows.length > 0) {
      setQaData(currentCache.rows);
      setNextOffset(currentCache.nextOffset);
      setIsFallback(currentCache.isFallback);
      setEffectiveLanguage(currentCache.effectiveLanguage);
      setInitialLoading(false);
      setInitialError(null);
      return;
    }

    const run = async () => {
      setInitialLoading(true);
      setInitialError(null);
      const result = await fetchListBatch(stateSlug, language, 0);
      if (cancelled) return;

      if (result.error && result.rows.length === 0) {
        setQaData([]);
        setNextOffset(null);
        setIsFallback(false);
        setEffectiveLanguage(language);
        setInitialError(result.error);
      } else {
        setQaData(result.rows);
        setNextOffset(result.nextOffset);
        setIsFallback(result.isFallback);
        setEffectiveLanguage(result.effectiveLanguage);
        persistCache(result.rows, result.nextOffset, result.isFallback, result.effectiveLanguage);
      }
      setInitialLoading(false);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [cacheKey, language, persistCache, reloadKey, stateSlug]);

  const handleRetryInitial = useCallback(() => {
    listCache.delete(cacheKey);
    setQaData([]);
    setNextOffset(0);
    setIsFallback(false);
    setEffectiveLanguage(language);
    setInitialError(null);
    setReloadKey((value) => value + 1);
  }, [cacheKey, language]);

  const loadMoreFromServer = useCallback(async () => {
    if (nextOffset === null || loadingMore) return;

    setLoadingMore(true);
    setBatchError(null);
    const result = await fetchListBatch(stateSlug, effectiveLanguage, nextOffset);

    if (result.error && result.rows.length === 0) {
      setBatchError(result.error);
    } else {
      const merged = [...qaData, ...result.rows];
      setQaData(merged);
      setNextOffset(result.nextOffset);
      setIsFallback(result.isFallback || isFallback);
      setEffectiveLanguage(result.effectiveLanguage);
      persistCache(merged, result.nextOffset, result.isFallback || isFallback, result.effectiveLanguage);
    }

    setLoadingMore(false);
  }, [effectiveLanguage, isFallback, loadingMore, nextOffset, persistCache, qaData, stateSlug]);

  const loadAnswer = useCallback(
    async (id: string) => {
      if (answers[id] !== undefined) return;
      if (answerCache.has(id)) {
        setAnswers((prev) => ({ ...prev, [id]: answerCache.get(id)! }));
        return;
      }
      if (loadingAnswerIds.has(id)) return;

      setLoadingAnswerIds((prev) => {
        const next = new Set(prev);
        next.add(id);
        return next;
      });
      setAnswerErrors((prev) => ({ ...prev, [id]: false }));

      try {
        const { data, error } = await supabase
          .from('pet_qa_keywords')
          .select('answer')
          .eq('id', id)
          .maybeSingle();

        if (!error && data?.answer) {
          answerCache.set(id, data.answer);
          setAnswers((prev) => ({ ...prev, [id]: data.answer }));
        } else {
          setAnswerErrors((prev) => ({ ...prev, [id]: true }));
        }
      } catch {
        setAnswerErrors((prev) => ({ ...prev, [id]: true }));
      } finally {
        setLoadingAnswerIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    },
    [answers, loadingAnswerIds],
  );

  const handleAccordionChange = useCallback(
    (value: string) => {
      if (value) loadAnswer(value);
    },
    [loadAnswer],
  );

  const cityCounts = useMemo<CityCount[]>(() => {
    const counts: Record<string, number> = {};
    qaData.forEach((q) => {
      if (q.city_slug) counts[q.city_slug] = (counts[q.city_slug] || 0) + 1;
    });
    return stateCities
      .map((city) => ({
        city_slug: city.slug,
        name: city.name,
        count: counts[city.slug] || 0,
      }))
      .sort((a, b) => b.count - a.count);
  }, [qaData, stateCities]);

  const categories = useMemo(() => {
    const cats = new Set(qaData.map((q) => q.category));
    return Array.from(cats);
  }, [qaData]);

  const baseFilteredQAs = useMemo(() => {
    let filtered = qaData;
    if (selectedCity !== 'all') {
      filtered = filtered.filter((q) => q.city_slug === selectedCity);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (q) => q.question.toLowerCase().includes(query) || q.keyword.toLowerCase().includes(query),
      );
    }
    return filtered;
  }, [qaData, searchQuery, selectedCity]);

  const filteredQAs = useMemo(() => {
    if (selectedCategory) {
      return baseFilteredQAs.filter((q) => q.category === selectedCategory);
    }
    return baseFilteredQAs;
  }, [baseFilteredQAs, selectedCategory]);

  const visibleQAs = filteredQAs.slice(0, visibleItems);
  const hasMoreLocal = visibleItems < filteredQAs.length;
  const hasMoreServer = nextOffset !== null;

  const getCatLabel = (cat: string) => {
    const labels = CATEGORY_LABELS[cat];
    return labels ? labels[language] : cat;
  };

  const getCatColor = (cat: string) => CATEGORY_COLORS[cat] || 'bg-gray-500/10 text-gray-600';

  if (initialLoading && qaData.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          {i18n.initialLoadingMessage[language]}
        </div>
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (initialError && qaData.length === 0) {
    return (
      <div className="text-center py-10 px-6 bg-destructive/5 border border-destructive/20 rounded-2xl space-y-4">
        <AlertCircle className="h-8 w-8 text-destructive mx-auto" />
        <p className="text-foreground/80 max-w-md mx-auto">{i18n.batchError[language]}</p>
        <Button onClick={handleRetryInitial} variant="outline">
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
                <SelectItem value="all">
                  {i18n.allCities[language]} ({qaData.length})
                </SelectItem>
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
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => {
              setSelectedCategory(null);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
          >
            {i18n.all[language]} ({baseFilteredQAs.length})
          </Button>
          {categories.map((cat) => {
            const count = baseFilteredQAs.filter((q) => q.category === cat).length;
            return (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
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
        {i18n.showing[language]} {visibleQAs.length} / {filteredQAs.length} {i18n.questions[language]}
        {hasMoreServer && ` (${qaData.length} ${i18n.loaded[language]})`}
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
              const answer = answers[qa.id];
              const isLoadingAnswer = loadingAnswerIds.has(qa.id);
              const hasAnswerError = !!answerErrors[qa.id];
              return (
                <div key={qa.id}>
                  <AccordionItem
                    value={qa.id}
                    className="bg-card rounded-xl border border-border/50 px-4 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-start gap-3 text-left">
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getCatColor(
                            qa.category,
                          )}`}
                        >
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
                        ) : hasAnswerError ? (
                          <div className="flex items-center gap-3">
                            <span className="text-destructive text-sm">{i18n.answerError[language]}</span>
                            <Button size="sm" variant="outline" onClick={() => loadAnswer(qa.id)}>
                              {i18n.retry[language]}
                            </Button>
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

          {batchError && (
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-destructive/5 border border-destructive/20 text-sm">
              <span className="text-foreground/80">{i18n.batchError[language]}</span>
              <Button size="sm" variant="outline" onClick={loadMoreFromServer}>
                {i18n.retry[language]}
              </Button>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {hasMoreLocal && (
              <Button
                variant="outline"
                onClick={() => setVisibleItems((prev) => prev + ITEMS_PER_PAGE)}
                className="gap-2"
              >
                {i18n.showMore[language]} <ChevronDown className="h-4 w-4" />
              </Button>
            )}
            {!hasMoreLocal && hasMoreServer && (
              <Button
                variant="outline"
                onClick={loadMoreFromServer}
                disabled={loadingMore}
                className="gap-2"
              >
                {loadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : <ChevronDown className="h-4 w-4" />}
                {i18n.showMore[language]}
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

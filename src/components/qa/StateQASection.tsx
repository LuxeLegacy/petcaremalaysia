import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getCitiesByState } from '@/lib/cityData';

interface QAKeyword {
  id: string;
  keyword: string;
  question: string;
  answer: string;
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

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  emergency: { label: 'Emergency', color: 'bg-destructive/10 text-destructive' },
  symptoms: { label: 'Symptoms', color: 'bg-amber-500/10 text-amber-600' },
  toxins: { label: 'Toxins', color: 'bg-purple-500/10 text-purple-600' },
  first_aid: { label: 'First Aid', color: 'bg-blue-500/10 text-blue-600' },
  prevention: { label: 'Prevention', color: 'bg-green-500/10 text-green-600' },
  general: { label: 'General', color: 'bg-gray-500/10 text-gray-600' },
};

const ITEMS_PER_PAGE = 10;

const POPULAR_SEARCHES = [
  'poisoning', 'seizures', 'bleeding', 'breathing', 'heatstroke', 
  'snake bite', 'vomiting', 'diarrhea', 'choking', 'burns'
];

export const StateQASection = ({ stateSlug, stateName }: StateQASectionProps) => {
  const { language } = useLanguage();
  const [qaData, setQaData] = useState<QAKeyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [cityCounts, setCityCounts] = useState<CityCount[]>([]);

  // Get cities for this state from static data
  const stateCities = useMemo(() => getCitiesByState(stateSlug), [stateSlug]);

  // State name mapping
  const stateNameMap: Record<string, string> = useMemo(() => ({
    'selangor': 'Selangor',
    'kuala-lumpur': 'W.P. Kuala Lumpur',
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
  }), []);

  useEffect(() => {
    const fetchQAs = async () => {
      setLoading(true);
      const stateValue = stateNameMap[stateSlug] || stateName;
      
      // Fetch all Q&As for the state
      const { data, error } = await supabase
        .from('pet_qa_keywords')
        .select('id, keyword, question, answer, category, priority, city_slug')
        .eq('state', stateValue)
        .eq('language', language)
        .order('priority', { ascending: false });

      if (error) {
        console.error('Error fetching Q&A:', error);
        setQaData([]);
      } else {
        setQaData(data || []);
        
        // Calculate city counts from fetched data
        const counts: Record<string, number> = {};
        (data || []).forEach(q => {
          if (q.city_slug) {
            counts[q.city_slug] = (counts[q.city_slug] || 0) + 1;
          }
        });
        
        // Map to city count objects with names from static data
        const cityCountList: CityCount[] = stateCities.map(city => ({
          city_slug: city.slug,
          name: city.name,
          count: counts[city.slug] || 0
        })).sort((a, b) => b.count - a.count);
        
        setCityCounts(cityCountList);
      }
      setLoading(false);
    };

    fetchQAs();
  }, [stateSlug, stateName, language, stateNameMap, stateCities]);

  const categories = useMemo(() => {
    const cats = new Set(qaData.map(q => q.category));
    return Array.from(cats);
  }, [qaData]);

  const filteredQAs = useMemo(() => {
    let filtered = qaData;

    // Filter by city first
    if (selectedCity !== 'all') {
      filtered = filtered.filter(q => q.city_slug === selectedCity);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        q =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.keyword.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    return filtered;
  }, [qaData, searchQuery, selectedCategory, selectedCity]);

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

  if (qaData.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/30 rounded-2xl">
        <p className="text-muted-foreground">
          No Q&A available for {stateName} yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Bar - Full Width & Prominent */}
      <div className="bg-card border border-border/50 rounded-2xl p-4 sm:p-6 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
          <Input
            placeholder="Search by keyword, symptom, or treatment (e.g., poisoning, seizures, bleeding...)"
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
        
        {/* Popular Searches */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
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

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* City Dropdown */}
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
                <SelectItem value="all">All Cities ({qaData.length})</SelectItem>
                {cityCounts.map((city) => (
                  <SelectItem key={city.city_slug} value={city.city_slug}>
                    {city.name} {city.count > 0 ? `(${city.count})` : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 flex-1">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory(null);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
          >
            All ({filteredQAs.length})
          </Button>
          {categories.map((cat) => {
            const catInfo = CATEGORY_LABELS[cat] || { label: cat, color: 'bg-gray-500/10 text-gray-600' };
            const count = filteredQAs.filter(q => q.category === cat).length;
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
                {catInfo.label} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        Showing {visibleQAs.length} of {filteredQAs.length} questions
      </p>

      {/* Q&A Accordion */}
      {filteredQAs.length === 0 ? (
        <div className="text-center py-8 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground">No questions match your search.</p>
        </div>
      ) : (
        <>
          <Accordion type="single" collapsible className="space-y-3">
            {visibleQAs.map((qa, index) => {
              const catInfo = CATEGORY_LABELS[qa.category] || { label: qa.category, color: 'bg-gray-500/10 text-gray-600' };
              const showCTA = (index + 1) % 5 === 0 && index < visibleQAs.length - 1;
              return (
                <div key={qa.id}>
                  <AccordionItem
                    value={qa.id}
                    className="bg-card rounded-xl border border-border/50 px-4 data-[state=open]:shadow-card"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-start gap-3 text-left">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${catInfo.color}`}>
                          {catInfo.label}
                        </span>
                        <span className="font-medium text-foreground">{qa.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-0">
                      <div className="prose prose-sm max-w-none text-muted-foreground pl-[70px]">
                        {qa.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  {showCTA && <QACostCTA variant={Math.floor(index / 5)} />}
                </div>
              );
            })}
          </Accordion>
          
          {/* Bottom CTA */}
          <QACostCTA variant={visibleQAs.length % 10} />

          {/* Show More/Less */}
          <div className="flex justify-center gap-4 pt-4">
            {hasMore && (
              <Button
                variant="outline"
                onClick={() => setVisibleItems((prev) => prev + ITEMS_PER_PAGE)}
                className="gap-2"
              >
                Show More <ChevronDown className="h-4 w-4" />
              </Button>
            )}
            {visibleItems > ITEMS_PER_PAGE && (
              <Button
                variant="ghost"
                onClick={() => setVisibleItems(ITEMS_PER_PAGE)}
                className="gap-2"
              >
                Show Less <ChevronUp className="h-4 w-4" />
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

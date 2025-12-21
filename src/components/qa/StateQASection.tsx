import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { QACostCTA } from './QACostCTA';

interface QAKeyword {
  id: string;
  keyword: string;
  question: string;
  answer: string;
  category: string;
  priority: number | null;
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

export const StateQASection = ({ stateSlug, stateName }: StateQASectionProps) => {
  const { language } = useLanguage();
  const [qaData, setQaData] = useState<QAKeyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchQAs = async () => {
      setLoading(true);
      
      // Map state slug to state name for query
      const stateNameMap: Record<string, string> = {
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
      };
      
      const stateValue = stateNameMap[stateSlug] || stateName;
      
      const { data, error } = await supabase
        .from('pet_qa_keywords')
        .select('id, keyword, question, answer, category, priority')
        .eq('state', stateValue)
        .eq('language', language)
        .order('priority', { ascending: false });

      if (error) {
        console.error('Error fetching Q&A:', error);
        setQaData([]);
      } else {
        setQaData(data || []);
      }
      setLoading(false);
    };

    fetchQAs();
  }, [stateSlug, stateName, language]);

  const categories = useMemo(() => {
    const cats = new Set(qaData.map(q => q.category));
    return Array.from(cats);
  }, [qaData]);

  const filteredQAs = useMemo(() => {
    let filtered = qaData;

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
  }, [qaData, searchQuery, selectedCategory]);

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
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
            className="pl-10"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setSelectedCategory(null);
              setVisibleItems(ITEMS_PER_PAGE);
            }}
          >
            All ({qaData.length})
          </Button>
          {categories.map((cat) => {
            const catInfo = CATEGORY_LABELS[cat] || { label: cat, color: 'bg-gray-500/10 text-gray-600' };
            const count = qaData.filter(q => q.category === cat).length;
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

import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityData } from '@/lib/cityData';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, MessageCircleQuestion, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface QAKeyword {
  id: string;
  keyword: string;
  question: string;
  answer: string;
  category: string;
  priority: number;
}

interface DatabaseQASectionProps {
  city: CityData;
}

const CATEGORY_LABELS: Record<string, { label: string; color: string }> = {
  'emergency-general': { label: 'Emergency', color: 'bg-destructive/10 text-destructive border-destructive/20' },
  'emergency-location': { label: 'Location', color: 'bg-primary/10 text-primary border-primary/20' },
  'symptom-urgent': { label: 'Symptoms', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' },
  'toxin-ingestion': { label: 'Toxins', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
  'cost-logistics': { label: 'Costs', color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
  'transport-triage': { label: 'Transport', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
};

const ITEMS_PER_PAGE = 10;

export const DatabaseQASection: React.FC<DatabaseQASectionProps> = ({ city }) => {
  const { t } = useLanguage();
  const [qaData, setQaData] = useState<QAKeyword[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchQAs = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('pet_qa_keywords')
          .select('id, keyword, question, answer, category, priority')
          .eq('state', city.state)
          .eq('language', 'en')
          .order('priority', { ascending: false });

        if (error) throw error;
        setQaData(data || []);
      } catch (error) {
        console.error('Error fetching Q&A data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQAs();
  }, [city.state]);

  const categories = useMemo(() => {
    const cats = new Set(qaData.map(q => q.category));
    return Array.from(cats).filter(Boolean);
  }, [qaData]);

  const filteredQAs = useMemo(() => {
    let filtered = qaData;

    if (selectedCategory) {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        q =>
          q.question.toLowerCase().includes(query) ||
          q.answer.toLowerCase().includes(query) ||
          q.keyword.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [qaData, searchQuery, selectedCategory]);

  const visibleQAs = filteredQAs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredQAs.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
  };

  // Generate FAQPage schema for LLMs
  const faqSchema = useMemo(() => {
    if (filteredQAs.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: filteredQAs.slice(0, 50).map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer,
        },
      })),
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.qa-question', '.qa-answer'],
      },
    };
  }, [filteredQAs]);

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Skeleton className="h-10 w-64 mb-6" />
          <Skeleton className="h-12 w-full mb-4" />
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (qaData.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30" id="pet-qa">
      {/* FAQPage Schema for LLMs */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageCircleQuestion className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Pet Emergency Q&A for {city.state}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {filteredQAs.length} questions answered • Tap to expand
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions... e.g., 'dog ate chocolate' or 'cat not peeing'"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All ({qaData.length})
            </Button>
            {categories.map(cat => {
              const config = CATEGORY_LABELS[cat] || { label: cat, color: 'bg-muted' };
              const count = qaData.filter(q => q.category === cat).length;
              return (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory !== cat ? config.color : ''}
                >
                  {config.label} ({count})
                </Button>
              );
            })}
          </div>
        </div>

        {/* Q&A Accordion */}
        {filteredQAs.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-xl border">
            <MessageCircleQuestion className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No questions match your search.</p>
            <Button
              variant="link"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <>
            <Accordion type="single" collapsible className="space-y-2">
              {visibleQAs.map((qa, index) => {
                const categoryConfig = CATEGORY_LABELS[qa.category] || {
                  label: qa.category,
                  color: 'bg-muted',
                };

                return (
                  <AccordionItem
                    key={qa.id}
                    value={qa.id}
                    className="bg-card border rounded-lg px-4 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex flex-col items-start gap-2 text-left pr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge
                            variant="outline"
                            className={`text-xs ${categoryConfig.color}`}
                          >
                            {categoryConfig.label}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            #{index + 1}
                          </span>
                        </div>
                        <h3 className="font-medium text-foreground qa-question">
                          {qa.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-muted-foreground leading-relaxed qa-answer">
                        {qa.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {/* Load More / Show Less */}
            <div className="flex justify-center gap-4 mt-6">
              {hasMore && (
                <Button variant="outline" onClick={handleShowMore} className="gap-2">
                  <ChevronDown className="h-4 w-4" />
                  Show More ({filteredQAs.length - visibleCount} remaining)
                </Button>
              )}
              {visibleCount > ITEMS_PER_PAGE && (
                <Button variant="ghost" onClick={handleShowLess} className="gap-2">
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

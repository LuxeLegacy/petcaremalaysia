import { useState, useRef, useEffect } from 'react';
import { CityData } from '@/lib/cityData';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Send, 
  Loader2, 
  Sparkles,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AskPetQuestionProps {
  city: CityData;
}

interface QAResponse {
  answer: string;
  matchedKeywords: Array<{
    question: string;
    category: string;
  }>;
}

const suggestedQuestions = [
  "What are the symptoms of cat UTI?",
  "How often should I vaccinate my dog?",
  "My pet ate something toxic, what should I do?",
  "How to prevent tick infestation?",
  "What's the best diet for senior cats?",
  "How to calm an anxious pet?",
];

export const AskPetQuestion: React.FC<AskPetQuestionProps> = ({ city }) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<QAResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [response]);

  const handleSubmit = async (questionText: string) => {
    if (!questionText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ask-pet-question`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            question: questionText,
            citySlug: city.slug,
            state: city.state,
            language: language,
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 429) {
          throw new Error('Too many requests. Please wait a moment and try again.');
        }
        if (res.status === 402) {
          throw new Error('Service temporarily unavailable. Please try again later.');
        }
        throw new Error(errorData.error || 'Failed to get response');
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuestion = (q: string) => {
    setQuestion(q);
    handleSubmit(q);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            AI-Powered Pet Care Assistant
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ask About Pet Care in {city.name}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant answers about pet health, local vets, emergency care, and more. 
            Our AI assistant is trained on pet care best practices for Malaysian pet owners.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-card rounded-2xl shadow-elevated p-6 mb-8">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(question);
            }}
            className="flex gap-3"
          >
            <div className="relative flex-1">
              <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Ask any pet care question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="h-14 px-6 rounded-xl gap-2"
              disabled={isLoading || !question.trim()}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Ask
                </>
              )}
            </Button>
          </form>

          {/* Suggested Questions */}
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Popular questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.slice(0, 4).map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestedQuestion(q)}
                  disabled={isLoading}
                  className="text-sm bg-muted hover:bg-muted/80 px-3 py-1.5 rounded-full transition-colors disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-destructive">Unable to get answer</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="bg-card rounded-2xl shadow-card p-8 text-center">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Analyzing your question...</p>
            <p className="text-sm text-muted-foreground mt-1">
              Finding the best answer for {city.name} pet owners
            </p>
          </div>
        )}

        {/* Response */}
        {response && !isLoading && (
          <div ref={responseRef} className="bg-card rounded-2xl shadow-elevated p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Response</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored for pet owners in {city.name}, {city.state}
                </p>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              {response.answer.split('\n').map((paragraph, i) => (
                paragraph.trim() && (
                  <p key={i} className="text-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {response.matchedKeywords.length > 0 && (
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-3">Related topics:</p>
                <div className="flex flex-wrap gap-2">
                  {response.matchedKeywords.map((k, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-muted px-3 py-1.5 rounded-full"
                    >
                      {k.category}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 p-4 bg-muted/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong>Disclaimer:</strong> This AI assistant provides general pet care information. 
                Always consult a qualified veterinarian for medical advice, diagnosis, or treatment.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

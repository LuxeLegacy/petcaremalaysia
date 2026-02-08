import { Link } from 'react-router-dom';
import type { PAARelatedQuestion } from '@/lib/paaTypes';

interface RelatedQuestionsProps {
  questions: PAARelatedQuestion[];
  langPrefix?: string;
}

export const RelatedQuestions = ({ questions, langPrefix = '' }: RelatedQuestionsProps) => {
  if (!questions.length) return null;

  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-[#1a73e8] text-foreground">
        ❓ Related Questions
      </h2>
      <div className="space-y-3">
        {questions.map((q, i) => (
          <Link
            key={i}
            to={`${langPrefix}/qa/article/${q.slug}`}
            className="block rounded-lg border border-border p-4 hover:bg-accent/50 transition-colors"
          >
            <p className="font-semibold text-primary mb-1">{q.question}</p>
            <p className="text-sm text-muted-foreground">{q.briefAnswer}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

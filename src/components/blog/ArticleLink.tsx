import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ArticleLinkProps {
  to: string;
  title: string;
  description?: string;
  variant?: 'card' | 'inline';
}

export const ArticleLink = ({ to, title, description, variant = 'inline' }: ArticleLinkProps) => {
  if (variant === 'card') {
    return (
      <Link 
        to={to} 
        className="group block p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h4>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={to} 
      className="inline-flex items-center text-primary hover:underline font-medium"
    >
      {title}
      <ChevronRight className="h-4 w-4 ml-1" />
    </Link>
  );
};

export const RelatedArticles = ({ articles }: { articles: { to: string; title: string; description?: string }[] }) => {
  return (
    <div className="bg-muted/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-lg mb-4">📚 Related Articles</h3>
      <div className="space-y-3">
        {articles.map((article, index) => (
          <ArticleLink key={index} {...article} variant="card" />
        ))}
      </div>
    </div>
  );
};

export const InternalLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className="text-primary hover:underline font-medium">
      {children}
    </Link>
  );
};

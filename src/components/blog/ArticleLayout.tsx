import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, Share2, Bookmark, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Language } from '@/lib/translations';
import { SEOHead } from '@/components/SEOHead';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface ArticleLayoutProps {
  children: React.ReactNode;
  metaTitle: string;
  metaDescription: string;
  path: string; // e.g., "/blog/my-article-slug"
  language: Language;
  category: string;
  categoryColor?: 'destructive' | 'primary' | 'secondary';
  title: string;
  date: string;
  readTime: string;
  reviewedBy?: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCaption?: string;
  structuredData?: object;
  faqStructuredData?: object;
}

export const ArticleLayout = ({
  children,
  metaTitle,
  metaDescription,
  path,
  language,
  category,
  categoryColor = 'primary',
  title,
  date,
  readTime,
  reviewedBy,
  heroImage,
  heroImageAlt,
  heroImageCaption,
  structuredData,
  faqStructuredData,
}: ArticleLayoutProps) => {
  const categoryClasses = {
    destructive: 'bg-destructive text-destructive-foreground',
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
  };

  return (
    <>
      <SEOHead
        title={metaTitle}
        description={metaDescription}
        path={path}
        language={language}
      />
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
      {faqStructuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      )}

      <Header />

      <main className="min-h-screen bg-background pt-20">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryClasses[categoryColor]}`}>
              {category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
              {reviewedBy && (
                <span className="flex items-center gap-1">
                  <Stethoscope className="h-4 w-4" />
                  {reviewedBy}
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" /> Save
                </Button>
              </div>
              <LanguageSwitcher />
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-10">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            {heroImageCaption && (
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                {heroImageCaption}
              </figcaption>
            )}
          </figure>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export const TableOfContents = ({ items }: { items: { id: string; title: string }[] }) => {
  return (
    <nav className="bg-muted/50 p-6 rounded-xl mb-10">
      <h2 className="font-bold text-lg mb-4">📑 Table of Contents</h2>
      <ol className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-primary hover:underline">
              {index + 1}. {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export const TLDRBox = ({ items }: { items: string[] }) => {
  return (
    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-10">
      <h2 className="font-bold text-lg mb-3">⚡ TL;DR - Key Takeaways</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const EmergencyAlertBox = ({ title, text, buttonText, buttonLink }: { 
  title: string; 
  text: string; 
  buttonText: string; 
  buttonLink: string;
}) => {
  return (
    <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-10">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🚨</span>
        <div>
          <h2 className="font-bold text-lg mb-2">{title}</h2>
          <p className="mb-3">{text}</p>
          <Button variant="destructive" asChild>
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

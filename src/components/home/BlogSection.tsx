import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    slug: 'emergency-pet-care-guide',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '5 min',
    date: '2024-12-15',
    titleKey: 'post1Title',
    excerptKey: 'post1Excerpt',
  },
  {
    id: 2,
    slug: 'pet-nutrition-guide-malaysia',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop',
    category: 'Nutrition',
    readTime: '8 min',
    date: '2024-12-10',
    titleKey: 'post2Title',
    excerptKey: 'post2Excerpt',
  },
  {
    id: 3,
    slug: 'pet-insurance-comparison',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=250&fit=crop',
    category: 'Insurance',
    readTime: '6 min',
    date: '2024-12-05',
    titleKey: 'post3Title',
    excerptKey: 'post3Excerpt',
  },
];

export const BlogSection = () => {
  const { t } = useLanguage();

  const blogTranslations: Record<string, string> = {
    post1Title: t.blog?.post1Title || 'What to Do in a Pet Emergency: A Complete Guide',
    post1Excerpt: t.blog?.post1Excerpt || 'Learn the critical steps to take when your pet faces a medical emergency. Every second counts.',
    post2Title: t.blog?.post2Title || 'Best Pet Food Brands Available in Malaysia',
    post2Excerpt: t.blog?.post2Excerpt || 'A comprehensive guide to choosing the right nutrition for your dog or cat in Malaysia.',
    post3Title: t.blog?.post3Title || 'Pet Insurance in Malaysia: Oyen vs MSIG Compared',
    post3Excerpt: t.blog?.post3Excerpt || 'We break down the costs, coverage, and benefits of the top pet insurance providers.',
  };

  return (
    <section className="py-20 bg-secondary/30" id="blog">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            {t.blog?.badge || 'Pet Care Tips'}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.blog?.title || 'Latest from Our Blog'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.blog?.subtitle || 'Expert advice, tips, and guides to help you take better care of your furry friends'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={post.image}
                  alt={blogTranslations[post.titleKey]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-MY', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {blogTranslations[post.titleKey]}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {blogTranslations[post.excerptKey]}
                </p>
                
                <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.blog?.readMore || 'Read More'} <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline">
            <Link to="/blog">
              {t.blog?.viewAll || 'View All Articles'} <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

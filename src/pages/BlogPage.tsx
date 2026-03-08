import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Clock, ChevronRight, BookOpen, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { getBlogListingTranslations } from '@/lib/blogTranslations/blogListingTranslations';

const blogPosts = [
  {
    id: 0,
    slug: 'pet-emergency-guide-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '20 min',
    date: '2024-12-20',
    titleKey: 'postPillarTitle',
    excerptKey: 'postPillarExcerpt',
    featured: true,
  },
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
    id: 7,
    slug: 'pet-emergency-symptoms-malaysia',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '8 min',
    date: '2024-12-20',
    titleKey: 'postSymptomsTitle',
    excerptKey: 'postSymptomsExcerpt',
  },
  {
    id: 8,
    slug: '24-hour-vet-directory-malaysia',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '10 min',
    date: '2024-12-20',
    titleKey: 'postDirectoryTitle',
    excerptKey: 'postDirectoryExcerpt',
  },
  {
    id: 9,
    slug: 'pet-emergency-first-aid-guide-malaysia',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '9 min',
    date: '2024-12-20',
    titleKey: 'postFirstAidTitle',
    excerptKey: 'postFirstAidExcerpt',
  },
  {
    id: 10,
    slug: 'pet-emergency-costs-malaysia',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '8 min',
    date: '2024-12-20',
    titleKey: 'postCostsTitle',
    excerptKey: 'postCostsExcerpt',
  },
  {
    id: 11,
    slug: 'common-pet-poisons-malaysia',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '7 min',
    date: '2024-12-20',
    titleKey: 'postPoisonsTitle',
    excerptKey: 'postPoisonsExcerpt',
  },
  {
    id: 12,
    slug: 'dog-emergency-guide-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '12 min',
    date: '2024-12-24',
    titleKey: 'postDogEmergencyTitle',
    excerptKey: 'postDogEmergencyExcerpt',
  },
  {
    id: 13,
    slug: 'cat-emergency-guide-malaysia',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '12 min',
    date: '2024-12-24',
    titleKey: 'postCatEmergencyTitle',
    excerptKey: 'postCatEmergencyExcerpt',
  },
  {
    id: 14,
    slug: 'pet-heatstroke-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '12 min',
    date: '2024-12-24',
    titleKey: 'postHeatstrokeTitle',
    excerptKey: 'postHeatstrokeExcerpt',
  },
  {
    id: 15,
    slug: 'pet-choking-emergency-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '10 min',
    date: '2024-12-24',
    titleKey: 'postChokingTitle',
    excerptKey: 'postChokingExcerpt',
  },
  {
    id: 16,
    slug: 'pet-accident-emergency-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '14 min',
    date: '2024-12-24',
    titleKey: 'postAccidentTitle',
    excerptKey: 'postAccidentExcerpt',
  },
  {
    id: 17,
    slug: 'pet-insurance-malaysia',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=250&fit=crop',
    category: 'Insurance',
    readTime: '15 min',
    date: '2024-12-24',
    titleKey: 'postInsuranceGuideTitle',
    excerptKey: 'postInsuranceGuideExcerpt',
  },
  {
    id: 18,
    slug: 'pet-poisoning-treatment-malaysia',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '12 min',
    date: '2024-12-24',
    titleKey: 'postPoisoningTreatmentTitle',
    excerptKey: 'postPoisoningTreatmentExcerpt',
  },
  {
    id: 19,
    slug: 'pet-emergency-transport-malaysia',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop',
    category: 'Emergency',
    readTime: '10 min',
    date: '2024-12-24',
    titleKey: 'postEmergencyTransportTitle',
    excerptKey: 'postEmergencyTransportExcerpt',
  },
  {
    id: 20,
    slug: 'post-emergency-pet-care-malaysia',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&h=250&fit=crop',
    category: 'Health',
    readTime: '11 min',
    date: '2024-12-24',
    titleKey: 'postPostEmergencyCareTitle',
    excerptKey: 'postPostEmergencyCareExcerpt',
  },
  {
    id: 21,
    slug: 'pet-emergency-prevention-malaysia',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=250&fit=crop',
    category: 'Health',
    readTime: '13 min',
    date: '2024-12-24',
    titleKey: 'postEmergencyPreventionTitle',
    excerptKey: 'postEmergencyPreventionExcerpt',
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
    readTime: '12 min',
    date: '2025-01-05',
    titleKey: 'post3Title',
    excerptKey: 'post3Excerpt',
  },
  {
    id: 4,
    slug: 'common-pet-illnesses-malaysia',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=250&fit=crop',
    category: 'Health',
    readTime: '10 min',
    date: '2024-11-28',
    titleKey: 'post4Title',
    excerptKey: 'post4Excerpt',
  },
  {
    id: 5,
    slug: 'pet-grooming-tips',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=250&fit=crop',
    category: 'Grooming',
    readTime: '8 min',
    date: '2024-11-20',
    titleKey: 'post5Title',
    excerptKey: 'post5Excerpt',
  },
  {
    id: 6,
    slug: 'vaccinations-schedule-pets',
    image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=250&fit=crop',
    category: 'Health',
    readTime: '10 min',
    date: '2024-11-15',
    titleKey: 'post6Title',
    excerptKey: 'post6Excerpt',
  },
];

const categories = ['All', 'Emergency', 'Nutrition', 'Insurance', 'Health', 'Grooming', 'Dental'];

const BlogPage = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogTranslations = getBlogListingTranslations(language);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <SEOHead
        title={t.blog?.pageTitle || 'Pet Care Blog | PetCare Malaysia'}
        description={t.blog?.pageDescription || 'Expert pet care tips, guides, and advice for Malaysian pet owners. Learn about pet health, nutrition, grooming, and more.'}
        path="/blog"
        language={language}
      />
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              {t.blog?.badge || 'Pet Care Tips'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.blog?.pageHeading || 'Pet Care Blog'}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t.blog?.subtitle || 'Expert advice, tips, and guides to help you take better care of your furry friends'}
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {t.blog?.filterBy || 'Filter by category'}:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category === 'All' ? (t.blog?.allCategories || 'All') : category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Dog Dental Disease Hub Promo */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <Link to="/dog-dental-disease" className="block group">
              <div className="bg-muted/50 rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🦷</span>
                  <h2 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {language === 'zh' ? '狗牙科疾病完整指南' : language === 'ms' ? 'Panduan Lengkap Penyakit Gigi Anjing' : 'Dog Dental Disease: Complete Authority Guide'}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {language === 'zh'
                    ? '30+页专业指南：症状识别、严重程度评估、诊断方法、治疗方案和预防策略。'
                    : language === 'ms'
                    ? '30+ halaman panduan pakar: simptom, keterukan, diagnosis, rawatan dan pencegahan penyakit gigi anjing.'
                    : '30+ expert pages covering symptoms, severity stages, diagnosis, treatments, recovery, and prevention.'}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-2">
                  {language === 'zh' ? '浏览指南' : language === 'ms' ? 'Layari Panduan' : 'Explore the Guide'} <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {t.blog?.showingResults || 'Showing'} {filteredPosts.length} {t.blog?.articles || 'articles'}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <article
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={blogTranslations[post.titleKey]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
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
                    
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blogTranslations[post.titleKey]}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {blogTranslations[post.excerptKey]}
                    </p>
                    
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      {t.blog?.readMore || 'Read More'} <ChevronRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {t.blog?.noArticles || 'No articles found in this category.'}
              </p>
            </div>
          )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;

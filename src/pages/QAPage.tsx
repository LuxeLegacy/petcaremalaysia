import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { MessageCircleQuestion, MapPin, ChevronRight } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';

// Malaysian states with their data
const MALAYSIAN_STATES = [
  { name: 'Selangor', slug: 'selangor', hasData: true },
  { name: 'W.P. Kuala Lumpur', slug: 'kuala-lumpur', hasData: false },
  { name: 'Johor', slug: 'johor', hasData: false },
  { name: 'Penang', slug: 'penang', hasData: false },
  { name: 'Perak', slug: 'perak', hasData: false },
  { name: 'Sarawak', slug: 'sarawak', hasData: false },
  { name: 'Sabah', slug: 'sabah', hasData: false },
  { name: 'Melaka', slug: 'melaka', hasData: false },
  { name: 'Kedah', slug: 'kedah', hasData: false },
  { name: 'Pahang', slug: 'pahang', hasData: false },
  { name: 'Kelantan', slug: 'kelantan', hasData: false },
  { name: 'Terengganu', slug: 'terengganu', hasData: false },
];

const QAPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title="Pet Emergency Q&A - Malaysia | PetCareMY"
        description="Get instant answers to 150+ pet emergency and care questions across Malaysia. Find expert advice for Selangor, Kuala Lumpur, Penang, Johor and more."
        path="/qa"
        language={language}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                <MessageCircleQuestion className="h-4 w-4" />
                Pet Care Knowledge Base
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Pet Emergency Q&A
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Get instant answers to common pet emergency and care questions. 
                Expert advice organized by state across Malaysia.
              </p>
            </div>
          </div>
        </section>

        {/* States Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {MALAYSIAN_STATES.map((state) => (
                <StateQACard key={state.slug} state={state} />
              ))}
            </div>
          </div>

          {/* Cost CTA */}
          <div className="max-w-4xl mx-auto mt-8">
            <CostCTA variant={11} />
          </div>
        </section>

        {/* FAQ Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where can I find pet emergency Q&A in Malaysia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PetCareMY provides pet emergency Q&A for all major states in Malaysia including Selangor, Kuala Lumpur, Penang, Johor, and more. Currently, Selangor has 145+ questions available."
                  }
                }
              ]
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
};

interface StateQACardProps {
  state: {
    name: string;
    slug: string;
    hasData: boolean;
  };
}

const StateQACard = ({ state }: StateQACardProps) => {
  if (state.hasData) {
    return (
      <Link
        to={`/qa/${state.slug}`}
        className="group p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            145+ Q&A
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {state.name}
        </h2>
        
        <p className="text-sm text-muted-foreground mb-4">
          Pet emergency and care questions specific to {state.name}
        </p>
        
        <div className="flex items-center text-sm font-medium text-primary">
          View Q&A <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  return (
    <div className="p-6 rounded-2xl bg-card/50 border border-dashed border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-muted">
          <MapPin className="h-6 w-6 text-muted-foreground" />
        </div>
        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          Coming Soon
        </span>
      </div>
      
      <h2 className="text-xl font-semibold mb-2 text-muted-foreground">
        {state.name}
      </h2>
      
      <p className="text-sm text-muted-foreground/70">
        Q&A for {state.name} will be available soon
      </p>
    </div>
  );
};

export default QAPage;

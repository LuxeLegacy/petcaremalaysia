import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { StateQASection } from '@/components/qa/StateQASection';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion, ChevronLeft, MapPin } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';

// Malaysian states configuration
const STATES_CONFIG: Record<string, { name: string; hasData: boolean }> = {
  'selangor': { name: 'Selangor', hasData: true },
  'kuala-lumpur': { name: 'W.P. Kuala Lumpur', hasData: false },
  'johor': { name: 'Johor', hasData: false },
  'penang': { name: 'Penang', hasData: false },
  'perak': { name: 'Perak', hasData: false },
  'sarawak': { name: 'Sarawak', hasData: false },
  'sabah': { name: 'Sabah', hasData: false },
  'melaka': { name: 'Melaka', hasData: false },
  'kedah': { name: 'Kedah', hasData: false },
  'pahang': { name: 'Pahang', hasData: false },
  'kelantan': { name: 'Kelantan', hasData: false },
  'terengganu': { name: 'Terengganu', hasData: false },
};

const StateQAPage = () => {
  const { state: stateSlug } = useParams<{ state: string }>();
  const { language } = useLanguage();

  const stateConfig = stateSlug ? STATES_CONFIG[stateSlug] : null;

  if (!stateConfig) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-16">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">State not found</h1>
            <Button asChild>
              <Link to="/qa">Back to Q&A Hub</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`Pet Emergency Q&A for ${stateConfig.name} | PetCareMY`}
        description={`Get instant answers to pet emergency and care questions in ${stateConfig.name}, Malaysia. Expert advice on symptoms, first aid, toxins, and more.`}
        path={`/qa/${stateSlug}`}
        language={language}
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-hero py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <Link 
                to="/qa" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm mb-6 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Back to Q&A Hub
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary-foreground/10">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium">
                  {stateConfig.hasData ? '145+ Questions' : 'Coming Soon'}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Pet Emergency Q&A for {stateConfig.name}
              </h1>
              
              <p className="text-lg text-primary-foreground/90 max-w-2xl">
                Find answers to common pet emergencies and care questions specific to {stateConfig.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Q&A Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {stateConfig.hasData ? (
                <StateQASection stateSlug={stateSlug!} stateName={stateConfig.name} />
              ) : (
                <div className="text-center py-16 bg-muted/30 rounded-2xl">
                  <MessageCircleQuestion className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Pet Q&A for {stateConfig.name} is currently being prepared. 
                    Check back soon for expert answers to pet care questions.
                  </p>
                  <Button asChild>
                    <Link to="/qa">Explore Other States</Link>
                  </Button>
                </div>
              )}
            </div>

            {/* Cost CTA */}
            <div className="mt-8">
              <CostCTA variant={12} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default StateQAPage;

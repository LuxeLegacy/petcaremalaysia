import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { MessageCircleQuestion, MapPin, ChevronRight } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { PAAArticleListing } from '@/components/paa/PAAArticleListing';
import type { Language } from '@/lib/translations';

const MALAYSIAN_STATES = [
  { name: 'Selangor', slug: 'selangor', hasData: true, qaCount: '258+' },
  { name: 'W.P. Kuala Lumpur', slug: 'kuala-lumpur', hasData: false, qaCount: '' },
  { name: 'Johor', slug: 'johor', hasData: true, qaCount: '220+' },
  { name: 'Penang', slug: 'penang', hasData: false, qaCount: '' },
  { name: 'Perak', slug: 'perak', hasData: false, qaCount: '' },
  { name: 'Negeri Sembilan', slug: 'negeri-sembilan', hasData: false, qaCount: '' },
  { name: 'Sarawak', slug: 'sarawak', hasData: false, qaCount: '' },
  { name: 'Sabah', slug: 'sabah', hasData: false, qaCount: '' },
  { name: 'Melaka', slug: 'melaka', hasData: false, qaCount: '' },
  { name: 'Kedah', slug: 'kedah', hasData: false, qaCount: '' },
  { name: 'Pahang', slug: 'pahang', hasData: false, qaCount: '' },
  { name: 'Kelantan', slug: 'kelantan', hasData: false, qaCount: '' },
  { name: 'Terengganu', slug: 'terengganu', hasData: false, qaCount: '' },
  { name: 'Perlis', slug: 'perlis', hasData: false, qaCount: '' },
];

const i18n = {
  badge: { en: 'Pet Care Knowledge Base', ms: 'Pangkalan Pengetahuan Haiwan', zh: '宠物护理知识库' },
  title: { en: 'Pet Emergency Q&A', ms: 'Soalan & Jawapan Kecemasan Haiwan', zh: '宠物急症问答' },
  subtitle: {
    en: 'Get instant answers to common pet emergency and care questions. Expert advice organized by state across Malaysia.',
    ms: 'Dapatkan jawapan segera kepada soalan kecemasan dan penjagaan haiwan. Nasihat pakar disusun mengikut negeri di seluruh Malaysia.',
    zh: '获取常见宠物急症和护理问题的即时答案。专家建议按马来西亚各州整理。',
  },
  qaCount: { en: '145+ Q&A', ms: '145+ S&J', zh: '145+ 问答' },
  comingSoon: { en: 'Coming Soon', ms: 'Akan Datang', zh: '即将推出' },
  viewQA: { en: 'View Q&A', ms: 'Lihat S&J', zh: '查看问答' },
  petQAFor: {
    en: (s: string) => `Pet emergency and care questions specific to ${s}`,
    ms: (s: string) => `Soalan kecemasan dan penjagaan haiwan khusus untuk ${s}`,
    zh: (s: string) => `${s}专属宠物急症和护理问题`,
  },
  qaForSoon: {
    en: (s: string) => `Q&A for ${s} will be available soon`,
    ms: (s: string) => `S&J untuk ${s} akan tersedia tidak lama lagi`,
    zh: (s: string) => `${s}的问答即将推出`,
  },
  seoTitle: { en: 'Pet Emergency Q&A - Malaysia | PetCareMY', ms: 'Soalan & Jawapan Kecemasan Haiwan - Malaysia | PetCareMY', zh: '宠物急症问答 - 马来西亚 | PetCareMY' },
  seoDesc: {
    en: 'Get instant answers to 150+ pet emergency and care questions across Malaysia. Find expert advice for Selangor, Kuala Lumpur, Penang, Johor and more.',
    ms: 'Dapatkan jawapan segera kepada 150+ soalan kecemasan haiwan di seluruh Malaysia.',
    zh: '获取马来西亚150+宠物急症和护理问题的即时答案。',
  },
};

const QAPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={i18n.seoTitle[language]}
        description={i18n.seoDesc[language]}
        path="/qa"
        language={language}
      />
      <Header />

      <main className="min-h-screen bg-background">
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
                <MessageCircleQuestion className="h-4 w-4" />
                {i18n.badge[language]}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {i18n.title[language]}
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                {i18n.subtitle[language]}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {MALAYSIAN_STATES.map((state) => (
                <StateQACard key={state.slug} state={state} language={language} />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <CostCTA variant={11} />
          </div>
        </section>

        <PAAArticleListing />

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
  state: { name: string; slug: string; hasData: boolean; qaCount: string };
  language: Language;
}

const StateQACard = ({ state, language }: StateQACardProps) => {
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
            {i18n.qaCount[language]}
          </span>
        </div>

        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {state.name}
        </h2>

        <p className="text-sm text-muted-foreground mb-4">
          {i18n.petQAFor[language](state.name)}
        </p>

        <div className="flex items-center text-sm font-medium text-primary">
          {i18n.viewQA[language]} <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/qa/${state.slug}`}
      className="group p-6 rounded-2xl bg-card/50 border border-dashed border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-muted">
          <MapPin className="h-6 w-6 text-muted-foreground" />
        </div>
        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
          {i18n.comingSoon[language]}
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-muted-foreground group-hover:text-foreground transition-colors">
        {state.name}
      </h2>

      <p className="text-sm text-muted-foreground/70">
        {i18n.qaForSoon[language](state.name)}
      </p>
    </Link>
  );
};

export default QAPage;

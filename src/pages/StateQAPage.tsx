import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { StateQASection } from '@/components/qa/StateQASection';
import { StateProfileFallback } from '@/components/qa/StateProfileFallback';
import { Button } from '@/components/ui/button';
import { ChevronLeft, MapPin } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { STATE_PROFILES } from '@/data/qa/stateProfiles';
import type { Language } from '@/lib/translations';

const STATES_CONFIG: Record<string, { name: string; hasData: boolean }> = {
  'selangor': { name: 'Selangor', hasData: true },
  'kuala-lumpur': { name: 'W.P. Kuala Lumpur', hasData: true },
  'johor': { name: 'Johor', hasData: true },
  'penang': { name: 'Penang', hasData: false },
  'perak': { name: 'Perak', hasData: false },
  'sarawak': { name: 'Sarawak', hasData: false },
  'sabah': { name: 'Sabah', hasData: false },
  'melaka': { name: 'Melaka', hasData: false },
  'kedah': { name: 'Kedah', hasData: false },
  'pahang': { name: 'Pahang', hasData: false },
  'kelantan': { name: 'Kelantan', hasData: false },
  'terengganu': { name: 'Terengganu', hasData: false },
  'negeri-sembilan': { name: 'Negeri Sembilan', hasData: false },
  'perlis': { name: 'Perlis', hasData: false },
};

const i18n = {
  backToHub: { en: 'Back to Q&A Hub', ms: 'Kembali ke Hab S&J', zh: '返回问答中心' },
  questionsCount: { en: '145+ Questions', ms: '145+ Soalan', zh: '145+ 问题' },
  localGuide: { en: 'Local Pet Emergency Guide', ms: 'Panduan Kecemasan Tempatan', zh: '本地宠物急症指南' },
  title: {
    en: (s: string) => `Pet Emergency Q&A for ${s}`,
    ms: (s: string) => `Soalan & Jawapan Kecemasan Haiwan untuk ${s}`,
    zh: (s: string) => `${s}宠物急症问答`,
  },
  subtitle: {
    en: (s: string) => `Find answers to common pet emergencies and care questions specific to ${s}.`,
    ms: (s: string) => `Cari jawapan kepada soalan kecemasan dan penjagaan haiwan peliharaan khusus untuk ${s}.`,
    zh: (s: string) => `查找${s}常见宠物急症和护理问题的答案。`,
  },
  stateNotFound: { en: 'State not found', ms: 'Negeri tidak dijumpai', zh: '未找到州属' },
};

// Build SEO title/description from a state profile when present (unique per state).
const buildSEO = (
  stateSlug: string,
  stateName: string,
  language: Language,
): { title: string; description: string } => {
  const profile = STATE_PROFILES[stateSlug];

  if (profile) {
    const topRisk = profile.topRisks[0]?.split(/[,—-]/)[0]?.trim() || 'pet emergencies';
    const titles: Record<Language, string> = {
      en: `${profile.name} Pet Emergency Guide — DVS Contacts, ${profile.capital} Vets & Local Risks`,
      ms: `Panduan Kecemasan Haiwan ${profile.name} — Kenalan DVS, Vet ${profile.capital} & Risiko Tempatan`,
      zh: `${profile.name}宠物急症指南 — 兽医局联系、${profile.capital}诊所与本地风险`,
    };
    const descriptions: Record<Language, string> = {
      en: `Local pet emergency resources for ${profile.name}: DVS contact, ${profile.clinicCount} registered clinics, top risks (${topRisk}), and answers tailored to ${profile.capital} pet owners.`,
      ms: `Sumber kecemasan haiwan tempatan untuk ${profile.name}: kenalan DVS, ${profile.clinicCount} klinik berdaftar, risiko utama (${topRisk}), dan jawapan disesuaikan untuk pemilik haiwan ${profile.capital}.`,
      zh: `${profile.name}本地宠物急症资源：兽医局联系、${profile.clinicCount}间注册诊所、主要风险（${topRisk}）以及为${profile.capital}宠物主人量身定制的解答。`,
    };
    return { title: `${titles[language]} | PetCareMY`, description: descriptions[language] };
  }

  // High-volume DB-backed states
  const titles: Record<Language, string> = {
    en: `Pet Emergency Q&A for ${stateName} | PetCareMY`,
    ms: `S&J Kecemasan Haiwan untuk ${stateName} | PetCareMY`,
    zh: `${stateName}宠物急症问答 | PetCareMY`,
  };
  const descriptions: Record<Language, string> = {
    en: `Get instant answers to pet emergency and care questions in ${stateName}, Malaysia. Expert advice on symptoms, first aid, toxins, and more.`,
    ms: `Dapatkan jawapan segera untuk soalan kecemasan haiwan di ${stateName}, Malaysia. Nasihat pakar tentang gejala, pertolongan cemas, toksin, dan lebih lagi.`,
    zh: `获取${stateName}（马来西亚）宠物急症问题的即时答案。专家提供有关症状、急救、毒素等的建议。`,
  };
  return { title: titles[language], description: descriptions[language] };
};

const StateQAPage = () => {
  const { state: stateSlug } = useParams<{ state: string }>();
  const { language } = useLanguage();

  const stateConfig = stateSlug ? STATES_CONFIG[stateSlug] : null;

  if (!stateConfig || !stateSlug) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background py-16">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">{i18n.stateNotFound[language]}</h1>
            <Button asChild>
              <Link to="/qa">{i18n.backToHub[language]}</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const profile = STATE_PROFILES[stateSlug];
  const seo = buildSEO(stateSlug, stateConfig.name, language);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={`/qa/${stateSlug}`}
        language={language}
      />
      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="gradient-hero py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/qa"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                {i18n.backToHub[language]}
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/15">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary/15 text-foreground text-sm font-medium">
                  {stateConfig.hasData ? i18n.questionsCount[language] : i18n.localGuide[language]}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {i18n.title[language](stateConfig.name)}
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl">
                {i18n.subtitle[language](stateConfig.name)}
              </p>
            </div>
          </div>
        </section>

        {/* Q&A Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {stateConfig.hasData ? (
                <StateQASection stateSlug={stateSlug} stateName={stateConfig.name} />
              ) : profile ? (
                <StateProfileFallback profile={profile} language={language} />
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-2xl">
                  <p className="text-muted-foreground">
                    Content for {stateConfig.name} coming soon.
                  </p>
                </div>
              )}
            </div>

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

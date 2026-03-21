import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { StateQASection } from '@/components/qa/StateQASection';
import { Button } from '@/components/ui/button';
import { MessageCircleQuestion, ChevronLeft, MapPin, Phone, ExternalLink, Stethoscope, Shield } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
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
  comingSoon: { en: 'Coming Soon', ms: 'Akan Datang', zh: '即将推出' },
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
  seoTitle: (s: string) => `Pet Emergency Q&A for ${s} | PetCareMY`,
  seoDesc: (s: string) => `Get instant answers to pet emergency and care questions in ${s}, Malaysia. Expert advice on symptoms, first aid, toxins, and more.`,
  stateNotFound: { en: 'State not found', ms: 'Negeri tidak dijumpai', zh: '未找到州属' },
  exploreOther: { en: 'Explore Other States', ms: 'Terokai Negeri Lain', zh: '探索其他州属' },
  // Fallback section
  fallbackHeading: {
    en: (s: string) => `Pet Emergency Resources for ${s}`,
    ms: (s: string) => `Sumber Kecemasan Haiwan untuk ${s}`,
    zh: (s: string) => `${s}宠物急症资源`,
  },
  fallbackDesc: {
    en: (s: string) => `While dedicated Q&A content for ${s} is being prepared, here are essential resources for pet owners.`,
    ms: (s: string) => `Sementara kandungan S&J khusus untuk ${s} sedang disediakan, berikut adalah sumber penting untuk pemilik haiwan.`,
    zh: (s: string) => `在为${s}准备专属问答内容时，以下是宠物主人的重要资源。`,
  },
  emergencyContacts: { en: 'Emergency Contacts', ms: 'Kenalan Kecemasan', zh: '紧急联系' },
  nationalQA: { en: 'Most Asked Across Malaysia', ms: 'Paling Banyak Ditanya di Malaysia', zh: '马来西亚最热门问题' },
  startAssessment: { en: 'Start Emergency Assessment', ms: 'Mulakan Penilaian Kecemasan', zh: '开始紧急评估' },
  assessmentDesc: {
    en: 'Not sure if it\'s an emergency? Use our free assessment tool.',
    ms: 'Tidak pasti sama ada ia kecemasan? Gunakan alat penilaian percuma kami.',
    zh: '不确定是否紧急？使用我们的免费评估工具。',
  },
  viewSelangorQA: { en: 'View Selangor Q&A (145+ questions)', ms: 'Lihat S&J Selangor (145+ soalan)', zh: '查看雪兰莪问答（145+问题）' },
};

const EMERGENCY_CONTACTS = [
  { name: 'Emergency Services', number: '999' },
  { name: 'DVS Malaysia (Veterinary Services)', number: '+603-8870 2000', url: 'https://www.dvs.gov.my' },
  { name: 'SPCA Selangor', number: '+603-4256 5312', url: 'https://www.spca.org.my' },
  { name: 'PAWS Malaysia', number: '+603-7846 1087', url: 'https://www.paws.org.my' },
];

const NATIONAL_QA = [
  { q: 'What should I do if my pet is poisoned?', a: 'If you suspect poisoning, remove the source immediately. Do NOT induce vomiting unless advised by a vet. Call your nearest emergency vet clinic right away. Bring any packaging of the suspected toxin.' },
  { q: 'How do I know if my pet needs emergency care?', a: 'Signs include difficulty breathing, uncontrolled bleeding, seizures, collapse, severe vomiting/diarrhea, inability to urinate, or obvious pain. When in doubt, call your vet immediately.' },
  { q: 'What are the signs of heatstroke in pets?', a: 'Excessive panting, drooling, red gums, vomiting, staggering, and collapse. Move your pet to a cool area, apply lukewarm (not cold) water, and seek emergency veterinary care immediately.' },
  { q: 'Is chocolate really toxic to dogs?', a: 'Yes. Chocolate contains theobromine which is toxic to dogs. Dark chocolate is most dangerous. Symptoms include vomiting, diarrhea, rapid breathing, and seizures. Seek veterinary help immediately.' },
  { q: 'How do I perform first aid on a bleeding pet?', a: 'Apply firm, direct pressure with a clean cloth. Do not remove the cloth if blood soaks through — add more layers. Keep the wound elevated if possible and transport to a vet immediately.' },
  { q: 'What human foods are dangerous for pets?', a: 'Grapes/raisins, onions, garlic, xylitol (sugar-free gum), macadamia nuts, alcohol, caffeine, and cooked bones are all dangerous. Keep these out of reach and contact your vet if ingested.' },
];

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

  return (
    <>
      <SEOHead
        title={i18n.seoTitle(stateConfig.name)}
        description={i18n.seoDesc(stateConfig.name)}
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
                  {stateConfig.hasData ? i18n.questionsCount[language] : i18n.comingSoon[language]}
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
                <StateQASection stateSlug={stateSlug!} stateName={stateConfig.name} />
              ) : (
                <NoDataFallback stateName={stateConfig.name} language={language} />
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

const NoDataFallback = ({ stateName, language }: { stateName: string; language: Language }) => (
  <div className="space-y-8">
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-3">{i18n.fallbackHeading[language](stateName)}</h2>
      <p className="text-muted-foreground max-w-lg mx-auto">{i18n.fallbackDesc[language](stateName)}</p>
    </div>

    {/* Emergency Contacts */}
    <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Phone className="h-5 w-5 text-destructive" />
        {i18n.emergencyContacts[language]}
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {EMERGENCY_CONTACTS.map((c) => (
          <div key={c.name} className="flex items-center justify-between bg-background rounded-xl px-4 py-3 border border-border/50">
            <div>
              <p className="font-medium text-sm">{c.name}</p>
              <p className="text-primary font-semibold">{c.number}</p>
            </div>
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Assessment CTA */}
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
      <div className="p-3 rounded-xl bg-primary/10">
        <Stethoscope className="h-6 w-6 text-primary" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <p className="text-muted-foreground text-sm">{i18n.assessmentDesc[language]}</p>
      </div>
      <Button asChild>
        <Link to="/assessment">{i18n.startAssessment[language]}</Link>
      </Button>
    </div>

    {/* National Q&A */}
    <div>
      <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-primary" />
        {i18n.nationalQA[language]}
      </h3>
      <div className="space-y-3">
        {NATIONAL_QA.map((item, idx) => (
          <details key={idx} className="bg-card rounded-xl border border-border/50 px-5 py-4 group">
            <summary className="font-medium cursor-pointer list-none flex items-center justify-between text-foreground">
              {item.q}
              <ChevronLeft className="h-4 w-4 -rotate-90 group-open:rotate-90 transition-transform shrink-0 ml-2 text-muted-foreground" />
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>

    {/* Links */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button variant="outline" asChild>
        <Link to="/qa/selangor">{i18n.viewSelangorQA[language]}</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link to="/qa">{i18n.exploreOther[language]}</Link>
      </Button>
    </div>
  </div>
);

export default StateQAPage;

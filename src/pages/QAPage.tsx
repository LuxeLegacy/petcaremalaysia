import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { MessageCircleQuestion, MapPin, ChevronRight } from 'lucide-react';
import { CostCTA } from '@/components/common/CostCTA';
import { PAAArticleListing } from '@/components/paa/PAAArticleListing';
import type { Language } from '@/lib/translations';

type StateBadgeKind = 'qa' | 'guide';

interface StateEntry {
  name: string;
  slug: string;
  badgeKind: StateBadgeKind;
  qaCount?: string;
}

const MALAYSIAN_STATES: StateEntry[] = [
  { name: 'Selangor', slug: 'selangor', badgeKind: 'qa', qaCount: '258+' },
  { name: 'W.P. Kuala Lumpur', slug: 'kuala-lumpur', badgeKind: 'qa', qaCount: '258+' },
  { name: 'Johor', slug: 'johor', badgeKind: 'qa', qaCount: '220+' },
  { name: 'Penang', slug: 'penang', badgeKind: 'guide' },
  { name: 'Perak', slug: 'perak', badgeKind: 'guide' },
  { name: 'Negeri Sembilan', slug: 'negeri-sembilan', badgeKind: 'guide' },
  { name: 'Sarawak', slug: 'sarawak', badgeKind: 'guide' },
  { name: 'Sabah', slug: 'sabah', badgeKind: 'guide' },
  { name: 'Melaka', slug: 'melaka', badgeKind: 'guide' },
  { name: 'Kedah', slug: 'kedah', badgeKind: 'guide' },
  { name: 'Pahang', slug: 'pahang', badgeKind: 'guide' },
  { name: 'Kelantan', slug: 'kelantan', badgeKind: 'guide' },
  { name: 'Terengganu', slug: 'terengganu', badgeKind: 'guide' },
  { name: 'Perlis', slug: 'perlis', badgeKind: 'guide' },
];

const i18n = {
  badge: { en: 'Pet Care Knowledge Base', ms: 'Pangkalan Pengetahuan Haiwan', zh: '宠物护理知识库' },
  title: { en: 'Pet Emergency Q&A', ms: 'Soalan & Jawapan Kecemasan Haiwan', zh: '宠物急症问答' },
  subtitle: {
    en: 'Get instant answers to common pet emergency and care questions. Expert advice organized by state across Malaysia.',
    ms: 'Dapatkan jawapan segera kepada soalan kecemasan dan penjagaan haiwan. Nasihat pakar disusun mengikut negeri di seluruh Malaysia.',
    zh: '获取常见宠物急症和护理问题的即时答案。专家建议按马来西亚各州整理。',
  },
  localGuide: { en: 'Local Guide', ms: 'Panduan Tempatan', zh: '本地指南' },
  viewQA: { en: 'View Q&A', ms: 'Lihat S&J', zh: '查看问答' },
  viewGuide: { en: 'View Guide', ms: 'Lihat Panduan', zh: '查看指南' },
  hubsTitle: { en: 'Authority Care Hubs', ms: 'Hab Penjagaan Pakar', zh: '权威护理中心' },
  hubsSubtitle: {
    en: 'Deep-dive trilingual guides covering symptoms, diagnosis, treatment, and Malaysian costs.',
    ms: 'Panduan mendalam tiga bahasa: gejala, diagnosis, rawatan, dan kos di Malaysia.',
    zh: '深入的三语指南，涵盖症状、诊断、治疗及马来西亚费用。',
  },
  petQAFor: {
    en: (s: string) => `Pet emergency and care questions specific to ${s}`,
    ms: (s: string) => `Soalan kecemasan dan penjagaan haiwan khusus untuk ${s}`,
    zh: (s: string) => `${s}专属宠物急症和护理问题`,
  },
  petGuideFor: {
    en: (s: string) => `Local emergency vet contacts and pet care guide for ${s}`,
    ms: (s: string) => `Kenalan vet kecemasan tempatan dan panduan penjagaan haiwan untuk ${s}`,
    zh: (s: string) => `${s}本地急诊兽医联系方式与宠物护理指南`,
  },
  seoTitle: { en: 'Pet Emergency Q&A - Malaysia | PetCareMY', ms: 'Soalan & Jawapan Kecemasan Haiwan - Malaysia | PetCareMY', zh: '宠物急症问答 - 马来西亚 | PetCareMY' },
  seoDesc: {
    en: 'Get instant answers to 150+ pet emergency and care questions across Malaysia. Find expert advice for Selangor, Kuala Lumpur, Penang, Johor and more.',
    ms: 'Dapatkan jawapan segera kepada 150+ soalan kecemasan haiwan di seluruh Malaysia.',
    zh: '获取马来西亚150+宠物急症和护理问题的即时答案。',
  },
};

interface AuthorityHubEntry {
  path: string;
  title: { en: string; ms: string; zh: string };
  desc: { en: string; ms: string; zh: string };
}

const AUTHORITY_HUBS: AuthorityHubEntry[] = [
  {
    path: '/cat-dental-disease',
    title: { en: 'Cat Dental Disease', ms: 'Penyakit Gigi Kucing', zh: '猫牙科疾病' },
    desc: {
      en: 'Gingivitis, FORL, stomatitis. Scaling RM350–RM800, extractions RM1,200–RM3,500.',
      ms: 'Gingivitis, FORL, stomatitis. Penskalaan RM350–RM800, pencabutan RM1,200–RM3,500.',
      zh: '牙龈炎、FORL、口炎。洗牙RM350–RM800，拔牙RM1,200–RM3,500。',
    },
  },
  {
    path: '/dog-dental-disease',
    title: { en: 'Dog Dental Disease', ms: 'Penyakit Gigi Anjing', zh: '狗牙科疾病' },
    desc: {
      en: 'Periodontal disease affects 80%+ of dogs over age 3. Symptoms, costs, prevention.',
      ms: 'Penyakit periodontal menjejaskan 80%+ anjing berusia 3+ tahun. Gejala, kos, pencegahan.',
      zh: '牙周病影响超过80%的3岁以上狗只。症状、费用、预防。',
    },
  },
  {
    path: '/dog-skin-problems',
    title: { en: 'Dog Skin Problems', ms: 'Masalah Kulit Anjing', zh: '狗皮肤问题' },
    desc: {
      en: 'Hot spots, allergies, mange, fungal infections in Malaysian humidity.',
      ms: 'Bintik panas, alahan, kudis, jangkitan kulat dalam kelembapan Malaysia.',
      zh: '马来西亚潮湿气候下的热斑、过敏、疥癣、真菌感染。',
    },
  },
  {
    path: '/dog-vomiting-diarrhea',
    title: { en: 'Dog Vomiting & Diarrhea', ms: 'Muntah & Cirit Anjing', zh: '狗呕吐与腹泻' },
    desc: {
      en: 'When to wait, when to rush. Causes, home care limits, and red-flag symptoms.',
      ms: 'Bila tunggu, bila bergegas. Punca, had penjagaan rumah, dan gejala bahaya.',
      zh: '何时等待，何时紧急就医。病因、家庭护理极限及危险信号。',
    },
  },
];


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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-foreground text-sm font-medium mb-6">
                <MessageCircleQuestion className="h-4 w-4" />
                {i18n.badge[language]}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {i18n.title[language]}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    "text": "PetCareMY provides pet emergency Q&A and local guides for all 14 states in Malaysia including Selangor, Kuala Lumpur, Penang, Johor, and more."
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
  state: StateEntry;
  language: Language;
}

const StateQACard = ({ state, language }: StateQACardProps) => {
  const isQA = state.badgeKind === 'qa';
  const badgeLabel = isQA ? `${state.qaCount} Q&A` : i18n.localGuide[language];
  const description = isQA ? i18n.petQAFor[language](state.name) : i18n.petGuideFor[language](state.name);
  const ctaLabel = isQA ? i18n.viewQA[language] : i18n.viewGuide[language];

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
          {badgeLabel}
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {state.name}
      </h2>

      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>

      <div className="flex items-center text-sm font-medium text-primary">
        {ctaLabel} <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default QAPage;

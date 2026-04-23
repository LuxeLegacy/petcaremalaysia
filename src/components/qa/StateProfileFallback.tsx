import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ExternalLink, Stethoscope, Shield, MapPin, AlertTriangle, ChevronLeft, Cloud, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { StateProfile } from '@/data/qa/stateProfiles';
import type { Language } from '@/lib/translations';

interface StateProfileFallbackProps {
  profile: StateProfile;
  language: Language;
}

const i18n = {
  localContacts: { en: 'Local Emergency Contacts', ms: 'Kenalan Kecemasan Tempatan', zh: '本地紧急联系' },
  topRisks: { en: 'Top Pet Risks in', ms: 'Risiko Haiwan Teratas di', zh: '州内主要宠物风险：' },
  caseStudy: { en: 'Local Case Study', ms: 'Kajian Kes Tempatan', zh: '本地案例分享' },
  stateQAs: { en: 'Common Pet Emergency Questions in', ms: 'Soalan Kecemasan Haiwan Lazim di', zh: '州内常见宠物急症问答：' },
  nearestHub: { en: 'Nearest 24-Hour Emergency Hub', ms: 'Hab Kecemasan 24-Jam Terdekat', zh: '最近的24小时急诊枢纽' },
  hubDistance: { en: 'Distance', ms: 'Jarak', zh: '距离' },
  startAssessment: { en: 'Start Free Emergency Assessment', ms: 'Mulakan Penilaian Percuma', zh: '开始免费紧急评估' },
  assessmentDesc: {
    en: "Not sure if it's an emergency? Use our free 60-second triage tool.",
    ms: 'Tidak pasti kecemasan? Gunakan alat triase 60-saat percuma kami.',
    zh: '不确定是否紧急？使用我们的60秒免费分诊工具。',
  },
  exploreOther: { en: 'Explore Other States', ms: 'Terokai Negeri Lain', zh: '探索其他州属' },
  clinicCount: { en: 'registered vet clinics', ms: 'klinik vet berdaftar', zh: '间注册兽医诊所' },
  consultRange: { en: 'consultation', ms: 'konsultasi', zh: '门诊费' },
  capital: { en: 'Capital', ms: 'Ibu negeri', zh: '州府' },
  climate: { en: 'Climate', ms: 'Iklim', zh: '气候' },
};

export const StateProfileFallback = ({ profile, language }: StateProfileFallbackProps) => {
  const content = profile.content[language] || profile.content.en;

  // FAQ schema for unique state Q&As
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://petcaremalaysia.com/qa/${profile.slug}#faq`,
    mainEntity: content.qas.slice(0, 6).map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: { '@type': 'Answer', text: qa.a },
    })),
  };

  // Article schema for the state profile
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://petcaremalaysia.com/qa/${profile.slug}#article`,
    headline: `Pet Emergency Guide for ${profile.name}, Malaysia`,
    description: content.intro.slice(0, 160),
    author: { '@type': 'Organization', name: 'PetCare Malaysia' },
    publisher: { '@type': 'Organization', name: 'PetCare Malaysia' },
    inLanguage: language,
    about: { '@type': 'Place', name: profile.name },
  };

  return (
    <div className="space-y-8">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Intro paragraph */}
      <div className="bg-card border border-border/50 rounded-2xl p-6 lg:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" />
            {i18n.capital[language]}: <strong className="text-foreground">{profile.capital}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="h-4 w-4 text-primary" />
            {profile.clinicCount} {i18n.clinicCount[language]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Cloud className="h-4 w-4 text-primary" />
            {profile.consultationRange} {i18n.consultRange[language]}
          </span>
        </div>
        <p className="text-foreground/90 leading-relaxed">{content.intro}</p>
      </div>

      {/* Top Risks */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
          {i18n.topRisks[language]} {profile.name}
        </h3>
        <ul className="space-y-2">
          {profile.topRisks.map((risk, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="text-amber-600 mt-1 shrink-0">•</span>
              <span>{risk}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Local Emergency Contacts */}
      <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <Phone className="h-5 w-5 text-destructive" />
          {i18n.localContacts[language]}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {profile.contacts.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between bg-background rounded-xl px-4 py-3 border border-border/50"
            >
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{c.name}</p>
                <a href={`tel:${c.number.replace(/[^+\d]/g, '')}`} className="text-primary font-semibold hover:underline">
                  {c.number}
                </a>
              </div>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary shrink-0 ml-3"
                  aria-label={`Visit ${c.name} website`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Case Study */}
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
          <Shield className="h-5 w-5 text-primary" />
          {i18n.caseStudy[language]}
        </h3>
        <p className="text-foreground/85 leading-relaxed text-sm italic">{content.caseStudy}</p>
      </div>

      {/* State-specific Q&As */}
      <div>
        <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <Stethoscope className="h-5 w-5 text-primary" />
          {i18n.stateQAs[language]} {profile.name}
        </h3>
        <div className="space-y-3">
          {content.qas.map((qa, idx) => (
            <details
              key={idx}
              className="bg-card rounded-xl border border-border/50 px-5 py-4 group"
            >
              <summary className="font-medium cursor-pointer list-none flex items-center justify-between text-foreground gap-3">
                <span>{qa.q}</span>
                <ChevronLeft className="h-4 w-4 -rotate-90 group-open:rotate-90 transition-transform shrink-0 text-muted-foreground" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{qa.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* Nearest 24/7 Hub */}
      <div className="bg-accent/40 border border-accent rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="p-3 rounded-xl bg-primary/15">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium mb-1">
            {i18n.nearestHub[language]}
          </p>
          <p className="font-semibold text-foreground">{profile.nearestHub.name}</p>
          <p className="text-sm text-muted-foreground">
            {i18n.hubDistance[language]}: {profile.nearestHub.distance}
          </p>
        </div>
        {profile.nearestHub.slug !== profile.slug && (
          <Button asChild variant="outline">
            <Link to={`/qa/${profile.nearestHub.slug}`}>
              {profile.nearestHub.name} Q&A
            </Link>
          </Button>
        )}
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

      {/* Explore other */}
      <div className="text-center pt-4">
        <Button variant="outline" asChild>
          <Link to="/qa">{i18n.exploreOther[language]}</Link>
        </Button>
      </div>
    </div>
  );
};

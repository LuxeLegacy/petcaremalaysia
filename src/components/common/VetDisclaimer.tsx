import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TEXT = {
  en: {
    title: 'Veterinary Disclaimer',
    body: 'Educational content only — not a substitute for professional veterinary advice. Always consult a licensed Malaysian veterinarian (DVS-registered) before acting on any information here. For emergencies, call your nearest 24/7 vet immediately.',
  },
  ms: {
    title: 'Penafian Veterinar',
    body: 'Kandungan pendidikan sahaja — bukan ganti nasihat veterinar profesional. Sentiasa rujuk doktor haiwan berlesen di Malaysia (berdaftar DVS) sebelum bertindak. Untuk kecemasan, hubungi vet 24/7 terdekat dengan segera.',
  },
  zh: {
    title: '兽医免责声明',
    body: '仅供教育用途——不能代替专业兽医建议。请在采取任何行动前咨询马来西亚持牌（DVS注册）兽医。如遇紧急情况，请立即联系最近的24/7兽医。',
  },
};

export const VetDisclaimer: React.FC = () => {
  const { language } = useLanguage();
  const t = TEXT[language] || TEXT.en;
  return (
    <aside
      className="my-8 rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm"
      role="note"
      aria-label={t.title}
    >
      <div className="flex items-start gap-3">
        <ShieldAlert className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <p className="font-semibold text-foreground mb-1">{t.title}</p>
          <p className="text-muted-foreground leading-relaxed">{t.body}</p>
        </div>
      </div>
    </aside>
  );
};

export default VetDisclaimer;

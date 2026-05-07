import { useLanguage } from '@/contexts/LanguageContext';
import { getCostTable, COST_TIER_LABELS, type CostTier } from '@/data/malaysia-vet-costs';

interface MalaysiaCostTableProps {
  /** Key into COST_TABLES (e.g. 'dental-cleaning', 'urinary-workup', 'general-vet') */
  tableKey: string;
  /** Optional caption override */
  caption?: string;
}

const HEADINGS = {
  en: { service: 'Service', range: 'Estimated cost (RM)', tier: 'Tier' },
  ms: { service: 'Perkhidmatan', range: 'Anggaran kos (RM)', tier: 'Peringkat' },
  zh: { service: '服务', range: '估计费用 (RM)', tier: '层级' },
};

const DEFAULT_CAPTION = {
  en: 'Malaysia vet cost guide — typical 2025 ranges',
  ms: 'Panduan kos vet Malaysia — julat tipikal 2025',
  zh: '马来西亚兽医费用指南 — 2025年典型范围',
};

export const MalaysiaCostTable: React.FC<MalaysiaCostTableProps> = ({ tableKey, caption }) => {
  const { language } = useLanguage();
  const rows = getCostTable(tableKey);
  if (!rows) return null;
  const h = HEADINGS[language] || HEADINGS.en;
  const cap = caption || DEFAULT_CAPTION[language] || DEFAULT_CAPTION.en;
  const tiers: CostTier[] = ['kl', 'suburban', 'kampung'];

  return (
    <figure className="my-8 overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <caption className="px-4 py-3 text-left text-base font-semibold text-foreground bg-primary/5">
          {cap}
        </caption>
        <thead>
          <tr className="bg-muted/50 text-left">
            <th className="px-4 py-2 font-semibold">{h.service}</th>
            {tiers.map((t) => (
              <th key={t} className="px-4 py-2 font-semibold whitespace-nowrap">
                {COST_TIER_LABELS[t][language] || COST_TIER_LABELS[t].en}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-4 py-2 font-medium">
                {row.service[language] || row.service.en}
              </td>
              {tiers.map((t) => {
                const [lo, hi] = row.ranges[t];
                return (
                  <td key={t} className="px-4 py-2 text-muted-foreground whitespace-nowrap">
                    RM{lo}–RM{hi}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
};

export default MalaysiaCostTable;

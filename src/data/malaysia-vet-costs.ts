/**
 * Single source of truth for Malaysia vet cost tables.
 * Used by MalaysiaCostTable component on dental/urinary/PAA pages.
 * Numbers based on PetCareMY internal directory + DVS subsidised rates (2025).
 */

export type CostTier = 'kl' | 'suburban' | 'kampung';

export interface CostRow {
  service: { en: string; ms: string; zh: string };
  /** RM range as [low, high] per tier */
  ranges: Record<CostTier, [number, number]>;
}

export const COST_TIER_LABELS: Record<CostTier, { en: string; ms: string; zh: string }> = {
  kl: { en: 'KL / PJ premium', ms: 'KL / PJ premium', zh: '吉隆坡/八打灵' },
  suburban: { en: 'Suburban / state capital', ms: 'Pinggir bandar / ibu negeri', zh: '郊区/州首府' },
  kampung: { en: 'Kampung / DVS subsidised', ms: 'Kampung / disubsidi DVS', zh: '乡村/DVS补贴' },
};

export const COST_TABLES: Record<string, CostRow[]> = {
  'dental-cleaning': [
    {
      service: { en: 'Scale & polish (no extractions)', ms: 'Pembersihan & penggilap', zh: '洁牙与抛光' },
      ranges: { kl: [600, 1200], suburban: [400, 800], kampung: [200, 500] },
    },
    {
      service: { en: 'Dental X-rays (full mouth)', ms: 'X-ray gigi (mulut penuh)', zh: '全口牙科X光' },
      ranges: { kl: [200, 500], suburban: [150, 350], kampung: [80, 200] },
    },
    {
      service: { en: 'Tooth extraction (per tooth)', ms: 'Cabut gigi (setiap gigi)', zh: '拔牙（每颗）' },
      ranges: { kl: [80, 250], suburban: [60, 180], kampung: [30, 100] },
    },
    {
      service: { en: 'General anaesthesia', ms: 'Bius umum', zh: '全身麻醉' },
      ranges: { kl: [200, 500], suburban: [150, 350], kampung: [80, 200] },
    },
  ],
  'urinary-workup': [
    {
      service: { en: 'Urinalysis', ms: 'Ujian urin', zh: '尿液分析' },
      ranges: { kl: [80, 180], suburban: [60, 130], kampung: [30, 80] },
    },
    {
      service: { en: 'Abdominal X-ray', ms: 'X-ray abdomen', zh: '腹部X光' },
      ranges: { kl: [150, 350], suburban: [120, 250], kampung: [60, 150] },
    },
    {
      service: { en: 'Abdominal ultrasound', ms: 'Ultrasound abdomen', zh: '腹部超声' },
      ranges: { kl: [200, 500], suburban: [150, 350], kampung: [80, 200] },
    },
    {
      service: { en: 'Urinary catheter (blocked cat)', ms: 'Kateter urin (kucing tersumbat)', zh: '尿道导管' },
      ranges: { kl: [800, 2000], suburban: [600, 1500], kampung: [300, 900] },
    },
    {
      service: { en: 'Hospitalisation per night', ms: 'Hospital semalaman', zh: '住院每晚' },
      ranges: { kl: [200, 500], suburban: [150, 350], kampung: [80, 200] },
    },
  ],
  'general-vet': [
    {
      service: { en: 'Standard consultation', ms: 'Konsultasi standard', zh: '标准咨询' },
      ranges: { kl: [60, 120], suburban: [40, 80], kampung: [5, 30] },
    },
    {
      service: { en: 'Emergency consultation (after hours)', ms: 'Konsultasi kecemasan', zh: '急诊咨询' },
      ranges: { kl: [200, 500], suburban: [150, 350], kampung: [80, 200] },
    },
    {
      service: { en: 'Vaccination (per shot)', ms: 'Vaksinasi (setiap suntikan)', zh: '疫苗（每针）' },
      ranges: { kl: [60, 150], suburban: [40, 100], kampung: [20, 60] },
    },
    {
      service: { en: 'Spay / neuter', ms: 'Pensterilan', zh: '绝育' },
      ranges: { kl: [400, 1000], suburban: [250, 600], kampung: [100, 300] },
    },
    {
      service: { en: 'Microchipping', ms: 'Mikrochip', zh: '微芯片' },
      ranges: { kl: [80, 150], suburban: [60, 120], kampung: [30, 80] },
    },
  ],
};

export function getCostTable(key: string): CostRow[] | null {
  return COST_TABLES[key] ?? null;
}

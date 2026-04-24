import { STATE_QA_DATA as johorData } from './johor';
import { STATE_QA_DATA as kualaLumpurData } from './kuala-lumpur';
import { STATE_QA_DATA as selangorData } from './selangor';

export interface StaticStateQAItem {
  id: string;
  keyword: string;
  question: string;
  answer: string;
  category: string;
  priority: number | null;
  city_slug: string | null;
}

export const STATIC_STATE_QA_BY_SLUG: Record<string, StaticStateQAItem[]> = {
  johor: [...johorData] as StaticStateQAItem[],
  'kuala-lumpur': [...kualaLumpurData] as StaticStateQAItem[],
  selangor: [...selangorData] as StaticStateQAItem[],
};
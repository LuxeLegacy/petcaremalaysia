import type { PAAQuickFacts } from '@/lib/paaTypes';
import { DollarSign, Clock, BarChart3, UserCheck, Shield } from 'lucide-react';

interface QuickFactsBoxProps {
  facts: PAAQuickFacts;
}

const items = [
  { key: 'avgCost' as const, label: 'Average Cost', icon: DollarSign },
  { key: 'timeRequired' as const, label: 'Time Required', icon: Clock },
  { key: 'difficulty' as const, label: 'Difficulty Level', icon: BarChart3 },
  { key: 'professionalNeeded' as const, label: 'Professional Needed', icon: UserCheck },
  { key: 'insuranceCoverage' as const, label: 'Insurance Coverage', icon: Shield },
];

export const QuickFactsBox = ({ facts }: QuickFactsBoxProps) => (
  <div className="bg-[#fff3cd] rounded-lg p-6 my-6">
    <h2 className="text-lg font-bold text-amber-900 mb-4">📊 Quick Facts</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex items-start gap-3 bg-white/60 rounded-md p-3">
          <Icon className="h-5 w-5 text-amber-700 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-medium text-amber-800">{label}</p>
            <p className="text-sm font-semibold text-amber-950">{facts[key]}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

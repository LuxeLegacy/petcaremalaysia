import type { PAAInsurance } from '@/lib/paaTypes';

const defaults: PAAInsurance = {
  covered: [
    'Accident-related injuries and emergency care',
    'Hospitalization and surgery costs',
    'Diagnostic tests (X-rays, blood work)',
  ],
  exclusions: [
    'Pre-existing conditions',
    'Routine vaccinations and wellness checks',
    'Breeding-related costs',
  ],
  claimSteps: [
    'Contact your insurance provider within 24-48 hours',
    'Obtain vet records and itemized bills',
    'Submit claim form with documentation',
    'Follow up within 7-10 working days',
  ],
};

interface InsuranceInfoProps {
  covered?: string[];
  exclusions?: string[];
  claimSteps?: string[];
}

export const InsuranceInfo = ({ covered, exclusions, claimSteps }: InsuranceInfoProps) => {
  const c = covered ?? defaults.covered;
  const e = exclusions ?? defaults.exclusions;
  const s = claimSteps ?? defaults.claimSteps;

  return (
    <section className="bg-[#fff8e1] rounded-lg p-6 my-8">
      <h2 className="text-xl font-bold text-amber-900 mb-4">🛡️ Insurance Information</h2>

      <div className="mb-4">
        <h3 className="text-base font-bold text-green-800 mb-2">✅ Typically Covered</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-green-950">
          {c.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div className="bg-[#ffebee] border-l-4 border-[#c62828] rounded-r-lg p-4 mb-4">
        <h3 className="text-base font-bold text-red-900 mb-2">⚠️ Common Exclusions</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-red-950">
          {e.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-base font-bold text-amber-900 mb-2">📋 How to File a Claim</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-amber-950">
          {s.map((step, i) => <li key={i}>{step}</li>)}
        </ol>
      </div>
    </section>
  );
};

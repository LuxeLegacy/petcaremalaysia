import type { PAAResourceGroup } from '@/lib/paaTypes';

const defaultResources: PAAResourceGroup = {
  emergencyContacts: [
    { name: 'Emergency Services', detail: '999' },
    { name: 'DVS Malaysia (Veterinary Services)', detail: '+603-8870 2000', url: 'https://www.dvs.gov.my' },
  ],
  governmentResources: [
    { name: 'Department of Veterinary Services', detail: 'dvs.gov.my', url: 'https://www.dvs.gov.my' },
    { name: 'Malaysian Veterinary Association', detail: 'msava.org', url: 'https://msava.org' },
  ],
  animalWelfare: [
    { name: 'SPCA Selangor', detail: 'spca.org.my', url: 'https://www.spca.org.my' },
    { name: 'PAWS Malaysia', detail: 'paws.org.my', url: 'https://www.paws.org.my' },
    { name: 'PetFinder Malaysia', detail: 'petfinder.my', url: 'https://www.petfinder.my' },
  ],
};

interface LocalResourcesProps {
  resources?: PAAResourceGroup;
}

const ResourceList = ({ title, icon, items }: { title: string; icon: string; items: PAAResourceGroup[keyof PAAResourceGroup] }) => (
  <div className="mb-4 last:mb-0">
    <h3 className="text-base font-bold text-green-900 mb-2">{icon} {title}</h3>
    <ul className="space-y-1.5">
      {items.map((r, i) => (
        <li key={i} className="text-sm text-green-950">
          <strong>{r.name}:</strong>{' '}
          {r.url ? (
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-900">{r.detail}</a>
          ) : (
            r.detail
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const LocalResources = ({ resources }: LocalResourcesProps) => {
  const data = resources ?? defaultResources;
  return (
    <section className="bg-[#e8f5e9] rounded-lg p-6 my-8">
      <h2 className="text-xl font-bold text-green-900 mb-4">📍 Local Resources in Malaysia</h2>
      <ResourceList title="Emergency Contacts" icon="🚨" items={data.emergencyContacts} />
      <ResourceList title="Government Resources" icon="🏛️" items={data.governmentResources} />
      <ResourceList title="Animal Welfare Organizations" icon="🤝" items={data.animalWelfare} />
    </section>
  );
};

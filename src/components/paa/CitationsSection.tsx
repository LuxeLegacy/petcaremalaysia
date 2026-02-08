import type { PAACitation } from '@/lib/paaTypes';

interface CitationsSectionProps {
  citations: PAACitation[];
}

export const CitationsSection = ({ citations }: CitationsSectionProps) => {
  if (!citations.length) return null;

  return (
    <section className="bg-[#f5f5f5] rounded-lg p-6 my-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📚 Citations & References</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
        {citations.map((c, i) => (
          <li key={i}>
            <cite className="font-medium">{c.source}</cite>.{' '}
            &ldquo;{c.title}.&rdquo; <em>{c.publication}</em>, {c.year}.
            {c.url && (
              <>
                {' '}
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                  Link
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

import { BookOpen, BarChart3, MapPin, DollarSign, Lightbulb, CheckCircle } from 'lucide-react';
import type { UrinaryPageBase, UrinaryCitation } from '@/data/urinary/types';

interface Props {
  data: UrinaryPageBase;
  position: 'top' | 'bottom';
}

export const UrinaryAEOGEOSections = ({ data, position }: Props) => {
  if (position === 'top') {
    return (
      <>
        {data.snippetForAI && (
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8" data-ai-snippet="true">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-sm text-primary mb-1">Quick Answer</p>
                <p className="text-foreground leading-relaxed">{data.snippetForAI}</p>
              </div>
            </div>
          </div>
        )}
        {data.tldr && data.tldr.length > 0 && (
          <div className="bg-muted/40 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" /> TL;DR — Key Points
            </h2>
            <ul className="space-y-2">
              {data.tldr.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">•</span><span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {data.quickFacts && data.quickFacts.length > 0 && (
          <div className="bg-accent/30 rounded-xl p-5 mb-8">
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" /> Quick Facts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.quickFacts.map((fact, i) => (
                <div key={i} className="bg-background/60 rounded-lg p-3">
                  <p className="text-xs font-medium text-muted-foreground">{fact.label}</p>
                  <p className="text-sm font-semibold text-foreground">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {data.statistics && data.statistics.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" /> Veterinary Statistics
          </h2>
          <div className="space-y-3">
            {data.statistics.map((s, i) => (
              <div key={i} className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-foreground font-medium">{s.stat}</p>
                <p className="text-xs text-muted-foreground mt-1">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {data.costRange && data.costRange.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" /> Estimated Costs in Malaysia
          </h2>
          <div className="bg-muted/30 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-muted/50"><th className="text-left p-3 font-semibold text-foreground">Service</th><th className="text-left p-3 font-semibold text-foreground">Price Range (RM)</th></tr></thead>
              <tbody>
                {data.costRange.map((c, i) => (
                  <tr key={i} className="border-t border-border"><td className="p-3 text-muted-foreground">{c.item}</td><td className="p-3 font-medium text-foreground">{c.range}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      {data.malaysiaContext && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" /> Malaysia-Specific Considerations
          </h2>
          <div className="bg-accent/20 border border-accent/40 rounded-xl p-5">
            <p className="text-muted-foreground leading-relaxed">{data.malaysiaContext}</p>
          </div>
        </section>
      )}
      {data.keyTakeaways && data.keyTakeaways.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <ul className="space-y-2">
              {data.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" /><span className="text-muted-foreground">{t}</span></li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {data.citations && data.citations.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" /> Citations & Resources
          </h2>
          <ol className="space-y-3 list-decimal pl-5">
            {data.citations.map((c: UrinaryCitation, i: number) => (
              <li key={i} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{c.title}</span> — <span>{c.source} ({c.year})</span>
                {c.url && <> <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[Link]</a></>}
              </li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
};

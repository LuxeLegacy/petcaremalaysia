import { ReactNode } from 'react';

interface GuideSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function GuideSection({ id, title, children, className = '' }: GuideSectionProps) {
  return (
    <section id={id} className={`py-8 scroll-mt-20 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

interface SubsectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Subsection({ title, children, className = '' }: SubsectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="text-xl font-bold text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}

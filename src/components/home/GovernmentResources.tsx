import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Fingerprint, Plane, FileText, ExternalLink } from 'lucide-react';

export const GovernmentResources = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: Building2,
      title: t.government.dvs,
      desc: t.government.dvsDesc,
      link: 'https://www.dvs.gov.my',
      linkText: 'dvs.gov.my',
    },
    {
      icon: Fingerprint,
      title: t.government.microchip,
      desc: t.government.microchipDesc,
      link: 'https://www.dvs.gov.my/dvs/resources/user_1/DVS_2021/Perkhidmatan/Microchip/',
      linkText: 'DVS Microchip Info',
    },
    {
      icon: Plane,
      title: t.government.importExport,
      desc: t.government.importExportDesc,
      link: 'https://www.maqis.gov.my',
      linkText: 'maqis.gov.my',
    },
    {
      icon: FileText,
      title: t.government.licensing,
      desc: t.government.licensingDesc,
      link: 'https://www.dbkl.gov.my',
      linkText: 'Local Council Websites',
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="government">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            Official Government Resources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.government.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.government.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {resources.map((resource, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {resource.desc}
                  </p>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                  >
                    {resource.linkText}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Government Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GovernmentOrganization',
              name: 'Department of Veterinary Services Malaysia',
              alternateName: 'DVS Malaysia',
              url: 'https://www.dvs.gov.my',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MY',
              },
            }),
          }}
        />
      </div>
    </section>
  );
};

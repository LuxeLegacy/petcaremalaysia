import { MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CityData } from '@/lib/cityData';

const COPY = {
  en: { title: 'Vets near me — map', open: 'Open in Google Maps', search: 'vet clinic' },
  ms: { title: 'Vet berdekatan saya — peta', open: 'Buka dalam Google Maps', search: 'klinik vet' },
  zh: { title: '附近兽医 — 地图', open: '在Google地图中打开', search: '兽医诊所' },
};

interface Props {
  city: CityData;
}

export const CityMapEmbed: React.FC<Props> = ({ city }) => {
  const { language } = useLanguage();
  const t = COPY[language] || COPY.en;
  const query = encodeURIComponent(`${t.search} ${city.name} ${city.state} Malaysia`);
  const embedSrc = `https://www.google.com/maps?q=${query}&output=embed`;
  const openHref = `https://www.google.com/maps/search/${query}`;

  return (
    <section className="py-10 bg-background" aria-labelledby="map-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 id="map-heading" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
              <MapPin className="h-5 w-5 text-primary" />
              {t.title}: {city.name}
            </h2>
            <a
              href={openHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              {t.open} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-border shadow-sm aspect-video">
            <iframe
              title={`${t.title} ${city.name}`}
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityMapEmbed;

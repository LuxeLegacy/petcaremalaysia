import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface Props {
  species?: string;
  category?: string;
  pageTitle: string;
}

const speciesLabels: Record<string, string> = { cats: 'Cats', dogs: 'Dogs' };
const categoryLabels: Record<string, string> = {
  symptoms: 'Symptoms', conditions: 'Conditions', emergency: 'Emergency',
};

export const UrinaryBreadcrumb = ({ species, category, pageTitle }: Props) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;
  const base = `${prefix}/urinary-tract-disease`;

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild><Link to={`${prefix}/`}>Home</Link></BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild><Link to={base}>Urinary Tract Disease</Link></BreadcrumbLink>
        </BreadcrumbItem>
        {species && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to={`${base}/${species}`}>{speciesLabels[species] || species}</Link></BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {category && category !== 'hub' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{categoryLabels[category] || category}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface DentalBreadcrumbProps {
  category?: string;
  pageTitle: string;
}

const categoryLabels: Record<string, string> = {
  conditions: 'Conditions',
  symptoms: 'Symptoms',
  severity: 'Severity',
  emergency: 'Emergency',
  diagnosis: 'Diagnostics',
  treatments: 'Treatments',
  recovery: 'Recovery',
  prevention: 'Prevention',
};

export const DentalBreadcrumb = ({ category, pageTitle }: DentalBreadcrumbProps) => {
  const { language } = useLanguage();
  const prefix = language === 'en' ? '' : `/${language}`;

  return (
    <Breadcrumb className="mb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`${prefix}/`}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to={`${prefix}/dog-dental-disease`}>Dog Dental Disease</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {category && category !== 'hub' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{categoryLabels[category] || category}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {category !== 'hub' && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

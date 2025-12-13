import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, Clock, AlertTriangle, Star } from 'lucide-react';
import { VetClinic } from '@/hooks/useVetClinics';

interface ClinicFiltersProps {
  clinics: VetClinic[];
  onFilteredClinics: (clinics: VetClinic[]) => void;
}

const ALL_SERVICES = [
  'General Care',
  'Surgery',
  'Dental',
  'Grooming',
  'Boarding',
  'Emergency',
  'Vaccination',
  'X-Ray',
  'Laboratory',
];

export const ClinicFilters: React.FC<ClinicFiltersProps> = ({ clinics, onFilteredClinics }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [is24Hours, setIs24Hours] = useState(false);
  const [isEmergency, setIsEmergency] = useState(false);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const applyFilters = (
    query: string,
    hours24: boolean,
    emergency: boolean,
    rating: number | null,
    services: string[]
  ) => {
    let filtered = [...clinics];

    // Search by name or address
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.address.toLowerCase().includes(q)
      );
    }

    // 24-hour filter
    if (hours24) {
      filtered = filtered.filter((c) => c.is_24_hours);
    }

    // Emergency filter
    if (emergency) {
      filtered = filtered.filter((c) => c.is_emergency);
    }

    // Rating filter
    if (rating !== null) {
      filtered = filtered.filter((c) => c.rating && c.rating >= rating);
    }

    // Services filter
    if (services.length > 0) {
      filtered = filtered.filter((c) =>
        services.some((s) => c.services?.includes(s))
      );
    }

    onFilteredClinics(filtered);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    applyFilters(value, is24Hours, isEmergency, minRating, selectedServices);
  };

  const toggle24Hours = () => {
    const newValue = !is24Hours;
    setIs24Hours(newValue);
    applyFilters(searchQuery, newValue, isEmergency, minRating, selectedServices);
  };

  const toggleEmergency = () => {
    const newValue = !isEmergency;
    setIsEmergency(newValue);
    applyFilters(searchQuery, is24Hours, newValue, minRating, selectedServices);
  };

  const handleRatingFilter = (rating: number | null) => {
    const newValue = minRating === rating ? null : rating;
    setMinRating(newValue);
    applyFilters(searchQuery, is24Hours, isEmergency, newValue, selectedServices);
  };

  const toggleService = (service: string) => {
    const newServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    setSelectedServices(newServices);
    applyFilters(searchQuery, is24Hours, isEmergency, minRating, newServices);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setIs24Hours(false);
    setIsEmergency(false);
    setMinRating(null);
    setSelectedServices([]);
    onFilteredClinics(clinics);
  };

  const hasActiveFilters =
    searchQuery || is24Hours || isEmergency || minRating !== null || selectedServices.length > 0;

  return (
    <div className="bg-card rounded-xl p-4 mb-6 shadow-soft space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search clinics by name or address..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={is24Hours ? 'default' : 'outline'}
          size="sm"
          onClick={toggle24Hours}
          className="gap-1.5"
        >
          <Clock className="h-3.5 w-3.5" />
          24/7 Open
        </Button>
        <Button
          variant={isEmergency ? 'destructive' : 'outline'}
          size="sm"
          onClick={toggleEmergency}
          className="gap-1.5"
        >
          <AlertTriangle className="h-3.5 w-3.5" />
          Emergency
        </Button>
        <Button
          variant={minRating === 4 ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleRatingFilter(4)}
          className="gap-1.5"
        >
          <Star className="h-3.5 w-3.5" />
          4+ Rating
        </Button>
        <Button
          variant={minRating === 4.5 ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleRatingFilter(4.5)}
          className="gap-1.5"
        >
          <Star className="h-3.5 w-3.5" />
          4.5+ Rating
        </Button>
      </div>

      {/* Service Filters */}
      <div className="flex flex-wrap gap-1.5">
        {ALL_SERVICES.map((service) => (
          <Badge
            key={service}
            variant={selectedServices.includes(service) ? 'default' : 'outline'}
            className="cursor-pointer hover:bg-primary/80 transition-colors"
            onClick={() => toggleService(service)}
          >
            {service}
          </Badge>
        ))}
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground gap-1.5"
        >
          <X className="h-3.5 w-3.5" />
          Clear all filters
        </Button>
      )}
    </div>
  );
};

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface NearbyVetsSectionProps {
  city: string;
  state: string;
}

// Placeholder emergency vets data
const getEmergencyVets = (city: string, state: string) => [
  {
    name: `${city} Emergency Veterinary Clinic`,
    address: `123 Main Street, ${city}, ${state}`,
    phone: '+60 3-1234 5678',
    is24Hours: true,
    distance: '2.3 km',
  },
  {
    name: `${state} Animal Hospital`,
    address: `456 Pet Lane, ${city}, ${state}`,
    phone: '+60 3-8765 4321',
    is24Hours: true,
    distance: '4.1 km',
  },
  {
    name: 'PetCare Emergency Center',
    address: `789 Vet Road, ${city}, ${state}`,
    phone: '+60 3-5555 1234',
    is24Hours: false,
    distance: '5.8 km',
  },
];

export function NearbyVetsSection({ city, state }: NearbyVetsSectionProps) {
  const vets = getEmergencyVets(city, state);

  return (
    <Card className="border border-border">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <MapPin className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Emergency Vets Near You
              </h3>
              <p className="text-sm text-muted-foreground">
                {city}, {state}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {vets.map((vet, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-lg p-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">{vet.name}</h4>
                  <p className="text-sm text-muted-foreground">{vet.address}</p>
                </div>
                <span className="text-xs bg-background px-2 py-1 rounded-full text-muted-foreground">
                  {vet.distance}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm">
                {vet.is24Hours && (
                  <span className="flex items-center gap-1 text-green-600">
                    <Clock className="w-4 h-4" />
                    24 Hours
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 gap-2"
                  onClick={() => window.open(`tel:${vet.phone.replace(/\s/g, '')}`, '_self')}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(vet.address)}`, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Directions
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Always call ahead to confirm availability and operating hours
        </p>
      </CardContent>
    </Card>
  );
}

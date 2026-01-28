import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Phone, Clock, ExternalLink, Star, Globe, AlertTriangle } from 'lucide-react';
import { useVetClinics } from '@/hooks/useVetClinics';

interface NearbyVetsSectionProps {
  city: string;
  state: string;
}

export function NearbyVetsSection({ city, state }: NearbyVetsSectionProps) {
  const { data: clinics, isLoading, error } = useVetClinics(city, state);

  // Sort: emergency clinics first, then by rating
  const sortedClinics = clinics
    ?.slice()
    .sort((a, b) => {
      if (a.is_emergency && !b.is_emergency) return -1;
      if (!a.is_emergency && b.is_emergency) return 1;
      return (b.rating ?? 0) - (a.rating ?? 0);
    })
    .slice(0, 5);

  if (isLoading) {
    return (
      <Card className="border border-border">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !sortedClinics || sortedClinics.length === 0) {
    return (
      <Card className="border border-border">
        <CardContent className="p-6 space-y-4">
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

          <div className="bg-muted/50 rounded-lg p-6 text-center space-y-3">
            <AlertTriangle className="w-10 h-10 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">
              No veterinary clinics found in our database for {city}, {state}.
            </p>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open(`https://www.google.com/maps/search/emergency+vet+${encodeURIComponent(city)}+${encodeURIComponent(state)}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Search on Google Maps
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

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
          {sortedClinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-muted/50 rounded-lg p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-semibold text-foreground">{clinic.name}</h4>
                    {clinic.is_emergency && (
                      <Badge variant="destructive" className="text-xs">
                        Emergency
                      </Badge>
                    )}
                    {clinic.is_24_hours && (
                      <Badge className="bg-green-600 hover:bg-green-700 text-xs">
                        24 Hours
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{clinic.address}</p>
                </div>
                {clinic.rating && (
                  <div className="flex items-center gap-1 text-sm bg-background px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{clinic.rating}</span>
                    {clinic.review_count && (
                      <span className="text-muted-foreground">({clinic.review_count})</span>
                    )}
                  </div>
                )}
              </div>

              {clinic.services && clinic.services.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {clinic.services.slice(0, 4).map((service, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                  {clinic.services.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{clinic.services.length - 4} more
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex gap-2 flex-wrap">
                {clinic.phone && (
                  <Button
                    size="sm"
                    className="flex-1 gap-2"
                    onClick={() => window.open(`tel:${clinic.phone?.replace(/\s/g, '')}`, '_self')}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(clinic.address)}`, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Directions
                </Button>
                {clinic.website && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open(clinic.website!, '_blank')}
                  >
                    <Globe className="w-4 h-4" />
                    Website
                  </Button>
                )}
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

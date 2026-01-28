import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { getStates, getCitiesByState } from '@/lib/locationUtils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface EntryScreenProps {
  city: string;
  state: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
  onStart: () => void;
}

export function EntryScreen({
  city,
  state,
  onStateChange,
  onCityChange,
  onStart,
}: EntryScreenProps) {
  const states = getStates();
  const cities = state ? getCitiesByState(state) : [];
  const isValid = !!state && !!city;

  const handleStateChange = (newState: string) => {
    onStateChange(newState);
    onCityChange(''); // Reset city when state changes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onStart();
    }
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <CardContent className="p-8 space-y-6">
          {/* Urgency Badge */}
          <div className="flex items-center justify-center gap-2 text-destructive bg-destructive/10 rounded-full py-2 px-4 mx-auto w-fit">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Every minute counts</span>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-foreground">
              Free Pet Emergency Assessment
            </h1>
            <p className="text-muted-foreground">
              Get instant triage recommendations from certified vet protocols
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium text-foreground">
                Select your state
              </label>
              <Select value={state} onValueChange={handleStateChange}>
                <SelectTrigger id="state" className="h-12 text-base">
                  <SelectValue placeholder="Choose state..." />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {states.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-foreground">
                Select your city
              </label>
              <Select 
                value={city} 
                onValueChange={onCityChange}
                disabled={!state}
              >
                <SelectTrigger id="city" className="h-12 text-base">
                  <SelectValue placeholder={state ? "Choose city..." : "Select state first"} />
                </SelectTrigger>
                <SelectContent className="bg-background z-50">
                  {cities.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {state && city && (
              <p className="text-sm text-muted-foreground">
                📍 {city}, {state}
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold"
              disabled={!isValid}
            >
              Start Free Assessment
            </Button>
          </form>

          {/* Trust Badge */}
          <p className="text-xs text-center text-muted-foreground">
            Powered by 2.3M ER cases + Board-certified vet protocols
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

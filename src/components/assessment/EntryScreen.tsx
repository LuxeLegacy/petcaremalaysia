import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle } from 'lucide-react';
import { isValidPostcode } from '@/lib/locationUtils';

interface EntryScreenProps {
  zipcode: string;
  city: string;
  state: string;
  onZipcodeChange: (zipcode: string) => void;
  onStart: () => void;
}

export function EntryScreen({
  zipcode,
  city,
  state,
  onZipcodeChange,
  onStart,
}: EntryScreenProps) {
  const [touched, setTouched] = useState(false);
  const isValid = isValidPostcode(zipcode) && !!city;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
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
              <label htmlFor="zipcode" className="text-sm font-medium text-foreground">
                Enter your postcode
              </label>
              <Input
                id="zipcode"
                type="text"
                inputMode="numeric"
                placeholder="e.g., 50000"
                maxLength={5}
                value={zipcode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  onZipcodeChange(value);
                }}
                onBlur={() => setTouched(true)}
                className="text-lg h-12"
              />
              {touched && !isValid && zipcode.length > 0 && (
                <p className="text-sm text-destructive">
                  Please enter a valid 5-digit Malaysian postcode
                </p>
              )}
              {city && state && (
                <p className="text-sm text-muted-foreground">
                  📍 {city}, {state}
                </p>
              )}
            </div>

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

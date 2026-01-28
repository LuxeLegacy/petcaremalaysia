import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Clock, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react';
import { getStates, getCitiesByState } from '@/lib/locationUtils';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const OTHER_CITY_VALUE = '__other__';

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
  const { t } = useLanguage();
  const states = getStates();
  const cities = state ? getCitiesByState(state) : [];
  const [isOtherCity, setIsOtherCity] = useState(false);
  const [customCity, setCustomCity] = useState('');
  
  const isValid = !!state && (isOtherCity ? !!customCity.trim() : !!city);

  const handleStateChange = (newState: string) => {
    onStateChange(newState);
    onCityChange('');
    setIsOtherCity(false);
    setCustomCity('');
  };

  const handleCitySelect = (value: string) => {
    if (value === OTHER_CITY_VALUE) {
      setIsOtherCity(true);
      onCityChange('');
    } else {
      setIsOtherCity(false);
      setCustomCity('');
      onCityChange(value);
    }
  };

  const handleCustomCityChange = (value: string) => {
    setCustomCity(value);
    onCityChange(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onStart();
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-8">
      {/* Fear-based headline above form */}
      <div className="max-w-2xl text-center mb-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-destructive bg-destructive/10 rounded-full py-2 px-4 animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm font-bold uppercase tracking-wide">{t.assessment.entry.badgeText}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
          {t.assessment.entry.headline} <span className="text-destructive">{t.assessment.entry.headlineHighlight}</span>
          <br />
          <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
            {t.assessment.entry.subheadline}
          </span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          <strong className="text-foreground">{t.assessment.entry.factLabel}</strong> {t.assessment.entry.factText}
          <span className="text-destructive font-semibold"> {t.assessment.entry.factHighlight} </span>
          {t.assessment.entry.factText.includes('to see') ? 'to see if symptoms improved.' : ''}
        </p>
      </div>

      <Card className="w-full max-w-md shadow-2xl border-2 border-destructive/20">
        <CardContent className="p-8 space-y-6">
          {/* FOMO Counter */}
          <div className="bg-gradient-to-r from-primary/10 to-destructive/10 rounded-lg p-4 text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Users className="w-5 h-5" />
              <span className="text-2xl font-black">{t.assessment.entry.fomoCount}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.assessment.entry.fomoText}
            </p>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase">{t.assessment.entry.freeLabel}</span>
            </div>
            <h2 className="text-xl font-bold text-foreground">
              {t.assessment.entry.formTitle}
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium text-foreground">
                {t.assessment.entry.stateLabel}
              </label>
              <Select value={state} onValueChange={handleStateChange}>
                <SelectTrigger id="state" className="h-12 text-base">
                  <SelectValue placeholder={t.assessment.entry.statePlaceholder} />
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
                {t.assessment.entry.cityLabel}
              </label>
              {isOtherCity ? (
                <div className="space-y-2">
                  <Input
                    id="custom-city"
                    type="text"
                    value={customCity}
                    onChange={(e) => handleCustomCityChange(e.target.value)}
                    placeholder={t.assessment.entry.otherCityPlaceholder || "Enter your city name"}
                    className="h-12 text-base"
                    autoFocus
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsOtherCity(false);
                      setCustomCity('');
                      onCityChange('');
                    }}
                    className="text-xs text-muted-foreground"
                  >
                    ← {t.assessment.entry.backToList || "Back to city list"}
                  </Button>
                </div>
              ) : (
                <Select 
                  value={city} 
                  onValueChange={handleCitySelect}
                  disabled={!state}
                >
                  <SelectTrigger id="city" className="h-12 text-base">
                    <SelectValue placeholder={state ? t.assessment.entry.cityPlaceholder : t.assessment.entry.cityDisabled} />
                  </SelectTrigger>
                  <SelectContent className="bg-background z-50 max-h-60">
                    {cities.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                    <SelectItem value={OTHER_CITY_VALUE} className="text-primary font-medium border-t mt-1 pt-2">
                      {t.assessment.entry.otherCity || "Other city not listed..."}
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            </div>

            {state && (city || customCity) && (
              <p className="text-sm text-muted-foreground">
                {t.assessment.entry.findingVets} {isOtherCity ? customCity : city}, {state}...
              </p>
            )}

            <Button
              type="submit"
              className="w-full h-14 text-lg font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg"
              disabled={!isValid}
            >
              {t.assessment.entry.ctaButton}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground">
              <Clock className="w-3 h-3 inline mr-1" />
              {t.assessment.entry.ctaTime}
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="border-t pt-4 space-y-3">
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">{t.assessment.entry.trust1Bold}</strong> {t.assessment.entry.trust1Text}
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">{t.assessment.entry.trust2Bold}</strong> {t.assessment.entry.trust2Text}
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">{t.assessment.entry.trust3Bold}</strong> {t.assessment.entry.trust3Text}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Bar */}
      <div className="max-w-2xl mt-8 grid grid-cols-3 gap-4 text-center">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-1 text-primary">
            <TrendingUp className="w-4 h-4" />
            <span className="text-xl font-black">{t.assessment.entry.stat1Value}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.assessment.entry.stat1Label}</p>
        </div>
        <div className="space-y-1">
          <div className="text-xl font-black text-primary">{t.assessment.entry.stat2Value}</div>
          <p className="text-xs text-muted-foreground">{t.assessment.entry.stat2Label}</p>
        </div>
        <div className="space-y-1">
          <div className="text-xl font-black text-primary">{t.assessment.entry.stat3Value}</div>
          <p className="text-xs text-muted-foreground">{t.assessment.entry.stat3Label}</p>
        </div>
      </div>

      {/* Fear-based footer */}
      <div className="max-w-xl mt-8 text-center p-4 bg-destructive/5 rounded-lg border border-destructive/20">
        <p className="text-sm text-muted-foreground">
          <strong className="text-destructive">{t.assessment.entry.warningTitle}</strong> {t.assessment.entry.warningStory}
          <br /><br />
          <span className="text-foreground font-medium">{t.assessment.entry.warningConclusion}</span>
        </p>
      </div>
    </div>
  );
}

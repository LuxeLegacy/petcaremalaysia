import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Camera, X, Check, Upload, ImagePlus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLanguage } from '@/contexts/LanguageContext';
import { AssessmentState } from '@/hooks/useAssessment';

interface SummaryScreenProps {
  state: AssessmentState;
  onDescriptionChange: (description: string) => void;
  onAddPhotos: (files: FileList) => void;
  onRemovePhoto: (index: number) => void;
  onBack: () => void;
  onNext: () => void;
}

export function SummaryScreen({
  state,
  onDescriptionChange,
  onAddPhotos,
  onRemovePhoto,
  onBack,
  onNext,
}: SummaryScreenProps) {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const isMobile = useIsMobile();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onAddPhotos(e.target.files);
      
      // Generate previews
      Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setPreviews((prev) => [...prev, event.target!.result as string]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemovePhoto = (index: number) => {
    onRemovePhoto(index);
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Label helper functions using translations
  const getAgeLabel = (age: string) => {
    const labels: Record<string, string> = {
      puppy_kitten: t.assessment.options.age.puppyKitten,
      young_adult: t.assessment.options.age.youngAdult,
      adult: t.assessment.options.age.adult,
      senior: t.assessment.options.age.senior,
    };
    return labels[age] || age;
  };

  const getWeightLabel = (weight: string) => {
    const labels: Record<string, string> = {
      small: t.assessment.options.weight.small,
      medium: t.assessment.options.weight.medium,
      large: t.assessment.options.weight.large,
      extra_large: t.assessment.options.weight.extraLarge,
    };
    return labels[weight] || weight;
  };

  const getFixedLabel = (fixed: string | null) => {
    const labels: Record<string, string> = {
      yes: t.assessment.options.yes,
      no: t.assessment.options.no,
      not_sure: t.assessment.options.notSure,
    };
    return fixed ? labels[fixed] || fixed : '-';
  };

  const getConditionsLabel = (conditions: string[]) => {
    const labels: Record<string, string> = {
      heart_disease: t.assessment.options.conditions.heartDisease,
      diabetes: t.assessment.options.conditions.diabetes,
      kidney_disease: t.assessment.options.conditions.kidneyDisease,
      allergies: t.assessment.options.conditions.allergies,
      cancer: t.assessment.options.conditions.cancer,
      arthritis: t.assessment.options.conditions.arthritis,
      none: t.assessment.options.conditions.none,
    };
    return conditions.map((c) => labels[c] || c).join(', ') || '-';
  };

  const getIngestionLabel = (ingestion: string) => {
    const labels: Record<string, string> = {
      chocolate: t.assessment.options.ingestion.chocolate,
      medication: t.assessment.options.ingestion.medication,
      plants: t.assessment.options.ingestion.plants,
      chemicals: t.assessment.options.ingestion.chemicals,
      none: t.assessment.options.ingestion.none,
    };
    return labels[ingestion] || ingestion || '-';
  };

  const getEnvironmentLabel = (environment: string) => {
    const labels: Record<string, string> = {
      indoor: t.assessment.options.environment.indoor,
      outdoor: t.assessment.options.environment.outdoor,
      both: t.assessment.options.environment.both,
    };
    return labels[environment] || environment || '-';
  };

  const getInsuredLabel = (insured: string | null) => {
    const labels: Record<string, string> = {
      yes: t.assessment.options.yes,
      no: t.assessment.options.no,
      not_sure: t.assessment.options.notSure,
    };
    return insured ? labels[insured] || insured : '-';
  };

  const getSymptomLabel = (symptom: string) => {
    const labels: Record<string, string> = {
      vomiting: t.assessment.options.symptoms.vomiting,
      diarrhea: t.assessment.options.symptoms.diarrhea,
      not_eating: t.assessment.options.symptoms.notEating,
      limping: t.assessment.options.symptoms.limping,
      other: t.assessment.options.symptoms.other,
    };
    return labels[symptom] || symptom || '-';
  };

  const getPainLabel = (pain: string) => {
    const labels: Record<string, string> = {
      none: t.assessment.options.pain.none,
      mild: t.assessment.options.pain.mild,
      moderate: t.assessment.options.pain.moderate,
      severe: t.assessment.options.pain.severe,
    };
    return labels[pain] || pain || '-';
  };

  const getBreathingLabel = (breathing: string) => {
    const labels: Record<string, string> = {
      normal: t.assessment.options.breathing.normal,
      rapid: t.assessment.options.breathing.rapid,
      labored: t.assessment.options.breathing.labored,
      weak: t.assessment.options.breathing.weak,
    };
    return labels[breathing] || breathing || '-';
  };

  const getAlertnessLabel = (alertness: string) => {
    const labels: Record<string, string> = {
      alert: t.assessment.options.alertness.alert,
      lethargic: t.assessment.options.alertness.lethargic,
      disoriented: t.assessment.options.alertness.disoriented,
      unresponsive: t.assessment.options.alertness.unresponsive,
    };
    return labels[alertness] || alertness || '-';
  };

  const getBleedingLabel = (bleeding: string) => {
    const labels: Record<string, string> = {
      none: t.assessment.options.bleeding.none,
      minor: t.assessment.options.bleeding.minor,
      moderate: t.assessment.options.bleeding.moderate,
      severe: t.assessment.options.bleeding.severe,
    };
    return labels[bleeding] || bleeding || '-';
  };

  const getDurationLabel = (duration: string) => {
    const labels: Record<string, string> = {
      just_now: t.assessment.options.duration.justNow,
      '1_6_hours': t.assessment.options.duration.hours1to6,
      '6_24_hours': t.assessment.options.duration.hours6to24,
      more_24_hours: t.assessment.options.duration.more24hours,
    };
    return labels[duration] || duration || '-';
  };

  const getPetTypeLabel = (petType: string | null) => {
    if (!petType) return '-';
    return petType === 'dog' ? t.assessment.options.dog : t.assessment.options.cat;
  };

  const getSexLabel = (sex: string | null) => {
    if (!sex) return '-';
    return sex === 'male' ? t.assessment.options.male : t.assessment.options.female;
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-0">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            {t.assessment.questions.summary}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.assessment.questions.summarySubtitle}
          </p>
        </div>

        {/* Location */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>📍</span>
            {t.assessment.results.petSummary.location}
          </h3>
          <p className="text-sm">{state.city}, {state.state}</p>
        </div>

        {/* Pet Profile */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>{state.petType === 'dog' ? '🐕' : '🐈'}</span>
            {t.assessment.results.petSummary.petType}
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">{t.assessment.results.petSummary.petType}:</span>{' '}
              <span className="capitalize font-medium">{getPetTypeLabel(state.petType)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.results.petSummary.breed}:</span>{' '}
              <span className="font-medium">{state.breed || '-'}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.age}:</span>{' '}
              <span className="font-medium">{getAgeLabel(state.age)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.sex}:</span>{' '}
              <span className="capitalize font-medium">{getSexLabel(state.sex)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.weight}:</span>{' '}
              <span className="font-medium">{getWeightLabel(state.weight)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.fixed}:</span>{' '}
              <span className="font-medium">{getFixedLabel(state.fixed)}</span>
            </div>
          </div>
        </div>

        {/* Health Background */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>🩺</span>
            {t.assessment.questions.conditions}
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.conditions}:</span>{' '}
              <span className="font-medium">{getConditionsLabel(state.conditions)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.ingestion}:</span>{' '}
              <span className="font-medium">{getIngestionLabel(state.ingestion)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.environment}:</span>{' '}
              <span className="font-medium">{getEnvironmentLabel(state.environment)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.insured}:</span>{' '}
              <span className="font-medium">{getInsuredLabel(state.insured)}</span>
            </div>
          </div>
        </div>

        {/* Current Symptoms */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>⚠️</span>
            {t.assessment.questions.mainSymptom}
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.mainSymptom}:</span>{' '}
              <span className="font-medium">{getSymptomLabel(state.mainSymptom)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.painLevel}:</span>{' '}
              <span className="font-medium">{getPainLabel(state.painLevel)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.duration}:</span>{' '}
              <span className="font-medium">{getDurationLabel(state.duration)}</span>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>💓</span>
            {t.assessment.questions.breathing}
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.breathing}:</span>{' '}
              <span className="font-medium">{getBreathingLabel(state.breathing)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.alertness}:</span>{' '}
              <span className="font-medium">{getAlertnessLabel(state.alertness)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">{t.assessment.questions.bleeding}:</span>{' '}
              <span className="font-medium">{getBleedingLabel(state.bleeding)}</span>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <ImagePlus className="w-4 h-4" />
            {t.assessment.questions.photoLabel}
          </label>
          <p className="text-xs text-muted-foreground">
            {t.assessment.questions.descriptionPlaceholder}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {state.photos.map((_, index) => (
              <div
                key={index}
                className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted border border-border"
              >
                {previews[index] && (
                  <img
                    src={previews[index]}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
                <button
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1 shadow-md hover:bg-destructive/90 transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {state.photos.length < 5 && (
              <div className="flex gap-2">
                {isMobile && (
                  <button
                    onClick={() => cameraInputRef.current?.click()}
                    className="w-24 h-24 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    <Camera className="w-6 h-6 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Camera</span>
                  </button>
                )}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-24 h-24 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <Upload className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{isMobile ? 'Gallery' : 'Upload'}</span>
                </button>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {t.assessment.questions.descriptionLabel}
          </label>
          <Textarea
            placeholder={t.assessment.questions.descriptionPlaceholder}
            value={state.description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.assessment.navigation.back}
          </Button>
          <Button onClick={onNext} className="gap-2">
            <Check className="w-4 h-4" />
            {t.assessment.navigation.continue}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

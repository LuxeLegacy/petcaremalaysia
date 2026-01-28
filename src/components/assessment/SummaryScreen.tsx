import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Camera, X, Check, Upload, ImagePlus } from 'lucide-react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

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

  // Label helper functions
  const getAgeLabel = (age: string) => {
    const labels: Record<string, string> = {
      puppy_kitten: 'Puppy/Kitten (0-1 year)',
      young_adult: 'Young Adult (1-3 years)',
      adult: 'Adult (3-7 years)',
      senior: 'Senior (7+ years)',
    };
    return labels[age] || age;
  };

  const getWeightLabel = (weight: string) => {
    const labels: Record<string, string> = {
      small: 'Small (<5kg)',
      medium: 'Medium (5-10kg)',
      large: 'Large (10-25kg)',
      extra_large: 'Extra Large (25kg+)',
    };
    return labels[weight] || weight;
  };

  const getFixedLabel = (fixed: string | null) => {
    const labels: Record<string, string> = {
      yes: 'Yes',
      no: 'No',
      not_sure: 'Not sure',
    };
    return fixed ? labels[fixed] || fixed : '-';
  };

  const getConditionsLabel = (conditions: string[]) => {
    const labels: Record<string, string> = {
      heart_disease: 'Heart disease',
      diabetes: 'Diabetes',
      kidney_disease: 'Kidney disease',
      allergies: 'Allergies',
      cancer: 'Cancer',
      arthritis: 'Arthritis',
      none: 'None known',
    };
    return conditions.map((c) => labels[c] || c).join(', ') || '-';
  };

  const getIngestionLabel = (ingestion: string) => {
    const labels: Record<string, string> = {
      chocolate: 'Chocolate',
      medication: 'Medication',
      plants: 'Plants',
      chemicals: 'Chemicals/Poison',
      none: 'None/Unknown',
    };
    return labels[ingestion] || ingestion || '-';
  };

  const getEnvironmentLabel = (environment: string) => {
    const labels: Record<string, string> = {
      indoor: 'Indoor only',
      outdoor: 'Outdoor only',
      both: 'Both indoor/outdoor',
    };
    return labels[environment] || environment || '-';
  };

  const getInsuredLabel = (insured: string | null) => {
    const labels: Record<string, string> = {
      yes: 'Yes',
      no: 'No',
      not_sure: 'Not sure',
    };
    return insured ? labels[insured] || insured : '-';
  };

  const getSymptomLabel = (symptom: string) => {
    const labels: Record<string, string> = {
      vomiting: 'Vomiting',
      diarrhea: 'Diarrhea',
      not_eating: 'Not eating',
      limping: 'Limping/Lameness',
      other: 'Other symptoms',
    };
    return labels[symptom] || symptom || '-';
  };

  const getPainLabel = (pain: string) => {
    const labels: Record<string, string> = {
      none: 'No visible pain',
      mild: 'Mild discomfort',
      moderate: 'Moderate pain',
      severe: 'Severe pain/distress',
    };
    return labels[pain] || pain || '-';
  };

  const getBreathingLabel = (breathing: string) => {
    const labels: Record<string, string> = {
      normal: 'Yes, normal',
      rapid: 'Rapid/Shallow',
      labored: 'Labored/Difficulty',
      stopped: 'Not breathing',
    };
    return labels[breathing] || breathing || '-';
  };

  const getAlertnessLabel = (alertness: string) => {
    const labels: Record<string, string> = {
      alert: 'Alert & Responsive',
      lethargic: 'Lethargic/Weak',
      disoriented: 'Disoriented/Confused',
      unresponsive: 'Unresponsive',
    };
    return labels[alertness] || alertness || '-';
  };

  const getBleedingLabel = (bleeding: string) => {
    const labels: Record<string, string> = {
      none: 'No bleeding',
      minor: 'Minor bleeding',
      moderate: 'Moderate bleeding',
      severe: 'Severe/Heavy bleeding',
    };
    return labels[bleeding] || bleeding || '-';
  };

  const getDurationLabel = (duration: string) => {
    const labels: Record<string, string> = {
      just_now: 'Just now (< 1 hour)',
      today: 'Today (1-24 hours)',
      few_days: 'Few days (1-3 days)',
      week_plus: 'A week or more',
    };
    return labels[duration] || duration || '-';
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-0">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Review & Add Details
          </h2>
          <p className="text-sm text-muted-foreground">
            Review all information and add photos or additional details
          </p>
        </div>

        {/* Location */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>📍</span>
            Location
          </h3>
          <p className="text-sm">{state.city}, {state.state}</p>
        </div>

        {/* Pet Profile */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>{state.petType === 'dog' ? '🐕' : '🐈'}</span>
            Pet Profile
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Type:</span>{' '}
              <span className="capitalize font-medium">{state.petType}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Breed:</span>{' '}
              <span className="font-medium">{state.breed || '-'}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Age:</span>{' '}
              <span className="font-medium">{getAgeLabel(state.age)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sex:</span>{' '}
              <span className="capitalize font-medium">{state.sex || '-'}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Weight:</span>{' '}
              <span className="font-medium">{getWeightLabel(state.weight)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Spayed/Neutered:</span>{' '}
              <span className="font-medium">{getFixedLabel(state.fixed)}</span>
            </div>
          </div>
        </div>

        {/* Health Background */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>🩺</span>
            Health Background
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Existing Conditions:</span>{' '}
              <span className="font-medium">{getConditionsLabel(state.conditions)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Recent Ingestion:</span>{' '}
              <span className="font-medium">{getIngestionLabel(state.ingestion)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Environment:</span>{' '}
              <span className="font-medium">{getEnvironmentLabel(state.environment)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Insurance:</span>{' '}
              <span className="font-medium">{getInsuredLabel(state.insured)}</span>
            </div>
          </div>
        </div>

        {/* Current Symptoms */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>⚠️</span>
            Current Symptoms
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Main Symptom:</span>{' '}
              <span className="font-medium">{getSymptomLabel(state.mainSymptom)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Pain Level:</span>{' '}
              <span className="font-medium">{getPainLabel(state.painLevel)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Duration:</span>{' '}
              <span className="font-medium">{getDurationLabel(state.duration)}</span>
            </div>
          </div>
        </div>

        {/* Vital Signs */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-3">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>💓</span>
            Vital Signs
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted-foreground">Breathing:</span>{' '}
              <span className="font-medium">{getBreathingLabel(state.breathing)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Alertness:</span>{' '}
              <span className="font-medium">{getAlertnessLabel(state.alertness)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Bleeding:</span>{' '}
              <span className="font-medium">{getBleedingLabel(state.bleeding)}</span>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground flex items-center gap-2">
            <ImagePlus className="w-4 h-4" />
            Upload Photos (optional, max 5)
          </label>
          <p className="text-xs text-muted-foreground">
            Add photos of your pet's condition to help the vet better understand the situation
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
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-24 h-24 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Upload className="w-6 h-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Add Photo</span>
              </button>
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
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Additional Details (optional)
          </label>
          <Textarea
            placeholder="Tell us more about your pet's symptoms, behavior changes, or any other concerns..."
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
            Back
          </Button>
          <Button onClick={onNext} className="gap-2">
            <Check className="w-4 h-4" />
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

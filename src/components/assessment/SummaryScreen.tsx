import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Camera, X, Check } from 'lucide-react';
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
      const newPreviews: string[] = [];
      Array.from(e.target.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            newPreviews.push(event.target.result as string);
            setPreviews([...previews, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemovePhoto = (index: number) => {
    onRemovePhoto(index);
    setPreviews(previews.filter((_, i) => i !== index));
  };

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

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-0">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Review & Add Details
          </h2>
          <p className="text-sm text-muted-foreground">
            Confirm your pet's information and describe what's happening
          </p>
        </div>

        {/* Pet Summary */}
        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
          <h3 className="font-medium text-foreground flex items-center gap-2">
            <span>{state.petType === 'dog' ? '🐕' : '🐈'}</span>
            Pet Summary
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-muted-foreground">Type:</span>{' '}
              <span className="capitalize">{state.petType}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Breed:</span>{' '}
              <span>{state.breed}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Age:</span>{' '}
              <span>{getAgeLabel(state.age)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Sex:</span>{' '}
              <span className="capitalize">{state.sex}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Weight:</span>{' '}
              <span>{getWeightLabel(state.weight)}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Location:</span>{' '}
              <span>{state.city}, {state.state}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Describe what's happening (optional)
          </label>
          <Textarea
            placeholder="Tell us more about your pet's symptoms, behavior changes, or any other concerns..."
            value={state.description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            className="min-h-[120px] resize-none"
          />
        </div>

        {/* Photo Upload */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Add photos (optional, max 5)
          </label>
          <div className="flex flex-wrap gap-2">
            {state.photos.map((_, index) => (
              <div
                key={index}
                className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted"
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
                  className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            {state.photos.length < 5 && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-20 h-20 rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <Camera className="w-6 h-6 text-muted-foreground" />
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

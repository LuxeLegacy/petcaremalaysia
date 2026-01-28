import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  userName: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
  userEmail: z.string().trim().email('Please enter a valid email').max(255, 'Email is too long'),
  userPhone: z.string().trim().max(20, 'Phone number is too long').optional(),
  petName: z.string().trim().min(1, "Pet's name is required").max(50, 'Name is too long'),
});

interface ContactCollectionFormProps {
  userName: string;
  userEmail: string;
  userPhone: string;
  petName: string;
  onUpdate: (field: string, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export function ContactCollectionForm({
  userName,
  userEmail,
  userPhone,
  petName,
  onUpdate,
  onBack,
  onSubmit,
  isSubmitting = false,
}: ContactCollectionFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = () => {
    try {
      contactSchema.parse({ userName, userEmail, userPhone, petName });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ userName: true, userEmail: true, petName: true });
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg border-0">
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Almost there! 🎉
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter your details to receive your personalized assessment results
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Name */}
          <div className="space-y-2">
            <label htmlFor="userName" className="text-sm font-medium text-foreground">
              Your Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="userName"
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => onUpdate('userName', e.target.value)}
              onBlur={() => handleBlur('userName')}
              className="h-12"
            />
            {touched.userName && errors.userName && (
              <p className="text-sm text-destructive">{errors.userName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="userEmail" className="text-sm font-medium text-foreground">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id="userEmail"
              type="email"
              placeholder="your@email.com"
              value={userEmail}
              onChange={(e) => onUpdate('userEmail', e.target.value)}
              onBlur={() => handleBlur('userEmail')}
              className="h-12"
            />
            {touched.userEmail && errors.userEmail && (
              <p className="text-sm text-destructive">{errors.userEmail}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="userPhone" className="text-sm font-medium text-foreground">
              Phone Number <span className="text-muted-foreground">(optional)</span>
            </label>
            <Input
              id="userPhone"
              type="tel"
              placeholder="+60 12-345 6789"
              value={userPhone}
              onChange={(e) => onUpdate('userPhone', e.target.value)}
              onBlur={() => handleBlur('userPhone')}
              className="h-12"
            />
            {touched.userPhone && errors.userPhone && (
              <p className="text-sm text-destructive">{errors.userPhone}</p>
            )}
          </div>

          {/* Pet Name */}
          <div className="space-y-2">
            <label htmlFor="petName" className="text-sm font-medium text-foreground">
              Pet's Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="petName"
              type="text"
              placeholder="What's your pet's name?"
              value={petName}
              onChange={(e) => onUpdate('petName', e.target.value)}
              onBlur={() => handleBlur('petName')}
              className="h-12"
            />
            {touched.petName && errors.petName && (
              <p className="text-sm text-destructive">{errors.petName}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between pt-4 border-t">
            <Button
              type="button"
              variant="ghost"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button type="submit" disabled={isSubmitting} className="gap-2">
              {isSubmitting ? 'Processing...' : 'Get My Results'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </form>

        <p className="text-xs text-center text-muted-foreground">
          Your information is secure and will never be shared with third parties.
        </p>
      </CardContent>
    </Card>
  );
}

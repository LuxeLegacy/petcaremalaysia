import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Gift, 
  CheckCircle, 
  AlertTriangle, 
  Shield, 
  Clock,
  Users,
  Loader2
} from 'lucide-react';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const emailSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
});

interface GuideEmailCaptureProps {
  onSuccess: () => void;
}

export function GuideEmailCapture({ onSuccess }: GuideEmailCaptureProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const result = emailSchema.safeParse({ name, email });
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Store lead in database
      const { error } = await supabase.from('assessment_leads').insert({
        user_name: result.data.name,
        user_email: result.data.email,
        pet_name: 'Guide Download',
        urgency_level: 'guide_download',
        assessment_data: { source: 'emergency_guide_page' },
      });

      if (error) throw error;

      // Store in localStorage to remember access
      localStorage.setItem('guide_access_granted', 'true');
      localStorage.setItem('guide_user_email', result.data.email);

      toast({
        title: "Access Granted!",
        description: "Enjoy your FREE Pet Emergency Guide.",
      });

      onSuccess();
    } catch (error) {
      console.error('Error saving lead:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        {/* Urgency Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            78% of Pet Deaths Are Preventable With This Knowledge
          </div>
        </div>

        {/* Main Headline - Dan Kennedy Style */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            "My Cat Almost Died Because I Didn't Know 
            <span className="text-primary"> ONE Simple Trick...</span>"
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Get the <span className="font-bold text-foreground">47-Page Pet Emergency Guide</span> that 
            <span className="text-destructive font-bold"> could save your pet's life tonight</span>
          </p>
        </div>

        {/* Social Proof Counter */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              <span className="font-bold text-primary">3,847</span> Malaysian pet owners downloaded this week
            </span>
          </div>
        </div>

        <Card className="border-2 border-primary shadow-2xl overflow-hidden">
          {/* Value Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Gift className="w-5 h-5" />
              <span className="font-bold text-lg">INSTANT FREE ACCESS</span>
            </div>
            <p className="text-sm opacity-90">
              Normally Sold for <span className="line-through">RM49</span> — 
              <span className="font-bold"> FREE for a Limited Time</span>
            </p>
          </div>

          <CardContent className="p-6 md:p-8">
            {/* What You'll Get */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                What's Inside This Life-Saving Guide:
              </h3>
              <div className="grid gap-3">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Step-by-Step Pet CPR</span>
                    <p className="text-sm text-muted-foreground">Know exactly what to do in the first 60 seconds — most owners freeze and lose precious time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">The "Poison Emergency" Cheat Sheet</span>
                    <p className="text-sm text-muted-foreground">47 common household items that are DEADLY to pets (including 3 "healthy" foods)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">24-Hour Vet Directory (ALL States)</span>
                    <p className="text-sm text-muted-foreground">Every emergency clinic in Malaysia with phone numbers you can call at 3AM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">The "Golden Hour" Warning Signs</span>
                    <p className="text-sm text-muted-foreground">12 symptoms that mean "GET TO VET NOW" vs "can wait until morning"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fear Story */}
            <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
              <p className="text-sm text-amber-800 dark:text-amber-200 italic">
                <AlertTriangle className="w-4 h-4 inline mr-1" />
                "Last month, a pet owner in KL lost their dog because they thought chocolate was 'just a little bit.' 
                The vet said <span className="font-bold">if they'd known the symptoms to watch for, they would have made it in time.</span> 
                Don't let this happen to you."
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Your Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Gift className="w-5 h-5 mr-2" />
                    YES! Send Me The FREE Guide Now
                  </>
                )}
              </Button>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Instant access • No credit card required</span>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>No Spam Ever</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Scarcity */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            ⚠️ <span className="font-medium">Warning:</span> We may start charging RM49 for this guide soon. 
            Get your free copy while it's still available.
          </p>
        </div>
      </div>
    </div>
  );
}

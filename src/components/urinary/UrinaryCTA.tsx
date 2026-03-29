import { AlertTriangle, ArrowRight, DollarSign, Users, Clock, Heart, Shield } from 'lucide-react';

interface UrinaryCTAProps {
  variant?: number;
}

const CTA_VARIATIONS = [
  {
    headline: "Your Pet's Urinary Problem Could Turn DEADLY in Hours",
    subtext: "Don't wait until it's too late. Get expert guidance now.",
    button: "Check Symptoms Now",
    icon: AlertTriangle,
  },
  {
    headline: "WARNING: 73% of Pet Owners Miss These Urinary Emergency Signs",
    subtext: "One missed sign = one dead pet. Are you paying attention?",
    button: "Don't Miss the Signs",
    icon: AlertTriangle,
  },
  {
    headline: "Save RM500–RM3,000 by Catching Urinary Issues Early",
    subtext: "Early detection = cheaper treatment. Smart owners act fast.",
    button: "Start Free Assessment",
    icon: DollarSign,
  },
  {
    headline: "Free Emergency Assessment That Could Save Your Pet's Life",
    subtext: "No cost. No obligation. Just answers when you need them most.",
    button: "Get Free Assessment",
    icon: Shield,
  },
  {
    headline: "4,200+ Malaysian Pet Owners Already Used This Emergency Tool",
    subtext: "They got answers in 60 seconds. Why haven't you?",
    button: "Join Them Now",
    icon: Users,
  },
  {
    headline: "This Free Pet Health Tool Won't Be Free Forever",
    subtext: "Access it now while it's still available.",
    button: "Get Access Now",
    icon: Clock,
  },
  {
    headline: "FACT: Blocked Cat Treatment Costs RM800–RM4,000 in Malaysia",
    subtext: "Knowing the signs early saves your pet AND your wallet.",
    button: "Learn the Warning Signs",
    icon: DollarSign,
  },
  {
    headline: "FACT: 1 in 4 Male Cats Will Have a Urinary Emergency",
    subtext: "Is your cat next? Check symptoms now.",
    button: "Check Your Cat Now",
    icon: AlertTriangle,
  },
  {
    headline: "Love Your Pet? Prove It. Check Their Symptoms Now.",
    subtext: "Real pet parents don't guess. They get answers.",
    button: "Get Answers Now",
    icon: Heart,
  },
  {
    headline: "60 Seconds Could Save Your Pet's Life",
    subtext: "Our free emergency checker tells you what to do next.",
    button: "Start in 60 Seconds",
    icon: Clock,
  },
];

export const UrinaryCTA = ({ variant }: UrinaryCTAProps) => {
  const selectedVariant = variant !== undefined
    ? CTA_VARIATIONS[variant % CTA_VARIATIONS.length]
    : CTA_VARIATIONS[Math.floor(Math.random() * CTA_VARIATIONS.length)];

  const Icon = selectedVariant.icon;

  return (
    <a
      href="https://petcaremalaysia.com/"
      className="group block my-8"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-cyan-950/30 p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-shrink-0 p-3 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            <Icon className="h-6 w-6" />
          </div>

          <div className="flex-1 space-y-1">
            <h4 className="font-bold text-lg text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              🚨 {selectedVariant.headline}
            </h4>
            <p className="text-muted-foreground text-sm">
              {selectedVariant.subtext}
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/30 group-hover:shadow-xl group-hover:shadow-emerald-500/40 transition-all duration-300 group-hover:scale-105">
              {selectedVariant.button}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

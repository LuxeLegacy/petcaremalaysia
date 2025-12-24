import { ExternalLink, AlertTriangle, ArrowRight, DollarSign, TrendingUp, Users, Clock } from 'lucide-react';

interface CostCTAProps {
  variant?: number;
}

// 20 powerful Gary Halbert / Dan Kennedy style CTAs using FEAR, GREED, FOMO, and FACTS
const CTA_VARIATIONS = [
  // FEAR-based CTAs
  {
    headline: "EXPOSED: The Hidden Cost Your Vet Will NEVER Tell You",
    subtext: "97% of Malaysian pet owners overpay for surgery. Don't be their next victim.",
    button: "Reveal the Real Costs Now",
    icon: AlertTriangle,
  },
  {
    headline: "WARNING: Malaysian Vets Have NO Price Regulation",
    subtext: "Same surgery. Different clinic. RM2,000 price difference. Are you being overcharged?",
    button: "Check If You're Overpaying",
    icon: AlertTriangle,
  },
  {
    headline: "Your Vet Quoted RM3,000? Some Pay RM800 for the Same Surgery",
    subtext: "The price gap is REAL. One click reveals if you're getting ripped off.",
    button: "See the Price Difference",
    icon: DollarSign,
  },
  {
    headline: "STOP! Don't Sign That Surgery Consent Form Yet",
    subtext: "What you don't know about vet pricing could cost you thousands.",
    button: "Check Prices First",
    icon: AlertTriangle,
  },
  {
    headline: "The Painful Truth About Pet Surgery Costs in Malaysia",
    subtext: "Clinics hope you never see this price comparison. Here it is.",
    button: "Expose the Truth",
    icon: AlertTriangle,
  },
  // GREED-based CTAs
  {
    headline: "Save RM500-RM2,000 On Your Pet's Surgery",
    subtext: "Smart Malaysian pet owners compare prices first. Do you?",
    button: "Start Saving Now",
    icon: DollarSign,
  },
  {
    headline: "What If You Could Pay HALF What Others Pay?",
    subtext: "Same quality care. Half the price. It's not a myth—it's knowing where to look.",
    button: "Find Lower Prices",
    icon: TrendingUp,
  },
  {
    headline: "Keep Your Money. Get the Same Surgery.",
    subtext: "Why pay RM2,500 when the clinic 10 minutes away charges RM900?",
    button: "Compare Clinic Prices",
    icon: DollarSign,
  },
  {
    headline: "That Extra RM1,000? Use It for Your Pet's Recovery Instead",
    subtext: "Overpaying for surgery means less money for aftercare. Compare now.",
    button: "Save Money Today",
    icon: DollarSign,
  },
  // FOMO-based CTAs
  {
    headline: "2,347 Malaysian Pet Owners Already Know These Prices",
    subtext: "They saved money. They got better care. What's stopping you?",
    button: "Join Them Now",
    icon: Users,
  },
  {
    headline: "BREAKING: Vets Are Asking Us to Remove This Price List",
    subtext: "See why clinics don't want you to compare prices. Before it's gone.",
    button: "View Before It's Removed",
    icon: Clock,
  },
  {
    headline: "This Price Guide Won't Stay Online Forever",
    subtext: "Clinics hate transparency. Access the real costs while you still can.",
    button: "Get Access Now",
    icon: Clock,
  },
  {
    headline: "Other Pet Owners Are Already Using This to Save Thousands",
    subtext: "The secret to fair pricing is out. Don't be the last to know.",
    button: "Don't Miss Out",
    icon: Users,
  },
  // FACT-based CTAs
  {
    headline: "FACT: Spay Surgery Costs RM180 at Clinic A, RM650 at Clinic B",
    subtext: "Same procedure. Same city. 3.6x price difference. Which are you paying?",
    button: "See Full Price Breakdown",
    icon: DollarSign,
  },
  {
    headline: "FACT: Tumor Removal in Malaysia: RM400 to RM3,500",
    subtext: "The clinic you choose determines your bill. Choose wisely.",
    button: "Compare Tumor Surgery Costs",
    icon: DollarSign,
  },
  {
    headline: "47 Clinics. 23 Procedures. Real Prices.",
    subtext: "The most comprehensive pet surgery cost database in Malaysia.",
    button: "Browse the Database",
    icon: DollarSign,
  },
  {
    headline: "We Asked 47 Clinics How Much They Charge",
    subtext: "The results shocked us. Prepare to be surprised.",
    button: "See the Results",
    icon: TrendingUp,
  },
  // Mixed emotion CTAs
  {
    headline: "Love Your Pet? Then Don't Overpay for Their Surgery.",
    subtext: "Caring owners get informed. Informed owners save money.",
    button: "Get Informed Now",
    icon: DollarSign,
  },
  {
    headline: "Your Pet Deserves the Best Care—at a Fair Price",
    subtext: "Best care ≠ highest price. Compare and prove it.",
    button: "Find Fair Prices",
    icon: DollarSign,
  },
  {
    headline: "Before Your Pet Goes Under the Knife, See This",
    subtext: "1 minute of research = RM1,000+ saved. Worth it?",
    button: "Check Prices in 60 Seconds",
    icon: Clock,
  },
];

export const CostCTA = ({ variant }: CostCTAProps) => {
  const selectedVariant = variant !== undefined 
    ? CTA_VARIATIONS[variant % CTA_VARIATIONS.length] 
    : CTA_VARIATIONS[Math.floor(Math.random() * CTA_VARIATIONS.length)];

  const Icon = selectedVariant.icon;

  return (
    <a
      href="https://petsurgerycost.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block my-8"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30 p-6 transition-all duration-300 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Warning icon */}
          <div className="flex-shrink-0 p-3 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
            <Icon className="h-6 w-6" />
          </div>
          
          {/* Content */}
          <div className="flex-1 space-y-1">
            <h4 className="font-bold text-lg text-foreground group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
              🚨 {selectedVariant.headline}
            </h4>
            <p className="text-muted-foreground text-sm">
              {selectedVariant.subtext}
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <span className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/40 transition-all duration-300 group-hover:scale-105">
              {selectedVariant.button}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <ExternalLink className="h-3 w-3 opacity-70" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

// Compact text link version for inline use
interface CostTextLinkProps {
  variant?: number;
}

const TEXT_LINK_VARIATIONS = [
  "💰 Check if you're overpaying for pet surgery →",
  "⚠️ WARNING: Are you overpaying for surgery? Check real prices →",
  "🔥 2,300+ Malaysians saved money with this. See how →",
  "📊 Compare 47 clinic prices before your pet's surgery →",
  "💵 Same surgery, different prices. Find the best deal →",
  "🚨 Vet quoted high? Compare prices first →",
  "📉 Save RM500-2,000 on pet surgery. Here's how →",
  "⏰ 60 seconds to check if you're overpaying →",
];

export const CostTextLink = ({ variant }: CostTextLinkProps) => {
  const selectedText = variant !== undefined 
    ? TEXT_LINK_VARIATIONS[variant % TEXT_LINK_VARIATIONS.length] 
    : TEXT_LINK_VARIATIONS[Math.floor(Math.random() * TEXT_LINK_VARIATIONS.length)];

  return (
    <a
      href="https://petsurgerycost.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors hover:underline"
    >
      {selectedText}
      <ExternalLink className="h-3 w-3" />
    </a>
  );
};

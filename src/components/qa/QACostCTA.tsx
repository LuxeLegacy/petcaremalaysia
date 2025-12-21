import { ExternalLink, AlertTriangle, ArrowRight } from 'lucide-react';

interface QACostCTAProps {
  variant?: number;
}

const CTA_VARIATIONS = [
  {
    headline: "EXPOSED: The Hidden Cost Your Vet Will NEVER Tell You",
    subtext: "97% of Malaysian pet owners overpay for surgery. Don't be their next victim.",
    button: "Click Here to Reveal the Real Costs",
  },
  {
    headline: "STOP Getting Ripped Off by Outrageous Vet Bills",
    subtext: "Before you sign that surgery consent form, know what it SHOULD cost.",
    button: "Reveal Hidden Costs Now",
  },
  {
    headline: "WARNING: Your Vet May Be Overcharging You By 300%",
    subtext: "The one number every pet owner MUST know before surgery day.",
    button: "See the Secret Price List",
  },
  {
    headline: "Don't Let Your Love For Your Pet Cost You a Fortune",
    subtext: "Smart pet owners know the real surgery costs. Do you?",
    button: "Get the Inside Scoop",
  },
  {
    headline: "The Shocking Truth About Pet Surgery Prices in Malaysia",
    subtext: "What clinics hope you'll never discover about their pricing.",
    button: "Expose the Truth Now",
  },
  {
    headline: "URGENT: Read This BEFORE Your Pet's Surgery",
    subtext: "One click could save you thousands of ringgit.",
    button: "Discover What Vets Hide",
  },
  {
    headline: "Are You Paying 3X Too Much for Pet Surgery?",
    subtext: "Most pet owners are. Here's how to know for sure.",
    button: "Check the Real Prices",
  },
  {
    headline: "The Pet Surgery Price Secret Vets Don't Want You to Know",
    subtext: "Finally revealed: What your pet's procedure REALLY costs.",
    button: "Unlock the Price Guide",
  },
  {
    headline: "ATTENTION Pet Owners: Stop Overpaying for Surgery",
    subtext: "The price difference between clinics will SHOCK you.",
    button: "See the Price Comparison",
  },
  {
    headline: "Before You Pay That Vet Bill, See This First",
    subtext: "What informed pet owners check before every surgery.",
    button: "Reveal the Hidden Numbers",
  },
];

export const QACostCTA = ({ variant }: QACostCTAProps) => {
  const selectedVariant = variant !== undefined 
    ? CTA_VARIATIONS[variant % CTA_VARIATIONS.length] 
    : CTA_VARIATIONS[Math.floor(Math.random() * CTA_VARIATIONS.length)];

  return (
    <a
      href="https://petsurgerycost.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block my-6"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30 p-6 transition-all duration-300 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Warning icon */}
          <div className="flex-shrink-0 p-3 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-6 w-6" />
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

import { Link } from 'react-router-dom';
import { Shield, Dog, Cat, Stethoscope, Leaf, Scissors, Syringe, Heart, Plane, Bug, ShoppingBag, AlertTriangle } from 'lucide-react';
import { allArticles } from '@/data/paa';

const CATEGORIES = [
  { slug: 'pet-insurance', label: 'Pet Insurance', icon: Shield, color: 'text-blue-600 bg-blue-50' },
  { slug: 'dog-care', label: 'Dog Care', icon: Dog, color: 'text-amber-600 bg-amber-50' },
  { slug: 'cat-care', label: 'Cat Care', icon: Cat, color: 'text-purple-600 bg-purple-50' },
  { slug: 'vet-care', label: 'Vet Care', icon: Stethoscope, color: 'text-green-600 bg-green-50' },
  { slug: 'pet-nutrition', label: 'Pet Nutrition', icon: Leaf, color: 'text-emerald-600 bg-emerald-50' },
  { slug: 'grooming', label: 'Grooming', icon: Scissors, color: 'text-pink-600 bg-pink-50' },
  { slug: 'pet-health', label: 'Pet Health', icon: Syringe, color: 'text-red-600 bg-red-50' },
  { slug: 'pet-adoption', label: 'Adoption', icon: Heart, color: 'text-rose-600 bg-rose-50' },
  { slug: 'pet-travel', label: 'Pet Travel', icon: Plane, color: 'text-sky-600 bg-sky-50' },
  { slug: 'pet-care', label: 'Pet Care', icon: Bug, color: 'text-orange-600 bg-orange-50' },
  { slug: 'pet-nutrition', label: 'Pet Food', icon: ShoppingBag, color: 'text-teal-600 bg-teal-50' },
  { slug: 'veterinary-services', label: 'Emergency', icon: AlertTriangle, color: 'text-destructive bg-destructive/10' },
];

// Deduplicate to avoid repeated slugs — pick unique ones
const uniqueCategories = CATEGORIES.filter((c, i, arr) => arr.findIndex(x => x.slug === c.slug) === i);

export const PAACategoryCards = () => {
  // Count EN articles per category
  const enArticles = allArticles.filter(a => a.lang === 'en');
  const countMap: Record<string, number> = {};
  enArticles.forEach(a => {
    countMap[a.category] = (countMap[a.category] || 0) + 1;
  });

  // Build display list: use unique category slugs present in actual articles
  const presentCategories = Array.from(new Set(enArticles.map(a => a.category)));
  const displayList = [
    ...CATEGORIES.filter(c => presentCategories.includes(c.slug)),
    // Fill remaining slots with unmatched CATEGORIES entries (for visual completeness)
    ...CATEGORIES.filter(c => !presentCategories.includes(c.slug)),
  ].slice(0, 12);

  return (
    <section className="py-14 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Browse Pet Care Topics</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            In-depth guides across 60+ pet care topics — vetted by Malaysian veterinary professionals
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayList.map((cat) => {
            const Icon = cat.icon;
            const count = countMap[cat.slug] || 0;
            return (
              <Link
                key={`${cat.slug}-${cat.label}`}
                to={`/category/${cat.slug}`}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`p-3 rounded-xl ${cat.color} mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {cat.label}
                </span>
                {count > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {count} {count === 1 ? 'article' : 'articles'}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

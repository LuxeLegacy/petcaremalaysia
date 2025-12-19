import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Quote, MapPin, Users } from 'lucide-react';

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonials.testimonial1,
      author: t.testimonials.testimonial1Author,
      location: t.testimonials.testimonial1Location,
      rating: 5,
    },
    {
      text: t.testimonials.testimonial2,
      author: t.testimonials.testimonial2Author,
      location: t.testimonials.testimonial2Location,
      rating: 5,
    },
    {
      text: t.testimonials.testimonial3,
      author: t.testimonials.testimonial3Author,
      location: t.testimonials.testimonial3Location,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 gradient-warm" id="testimonials">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            {t.testimonials.served}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PetCare Malaysia',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '23000',
                bestRating: '5',
                worstRating: '1',
              },
              review: testimonials.map((t) => ({
                '@type': 'Review',
                author: {
                  '@type': 'Person',
                  name: t.author,
                },
                reviewBody: t.text,
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: t.rating,
                  bestRating: '5',
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

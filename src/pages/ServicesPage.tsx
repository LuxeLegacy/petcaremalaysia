import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PeopleAlsoAskSection } from '@/components/home/PeopleAlsoAskSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Heart, Scissors, Clock, Shield, ShoppingBag, ChevronRight } from 'lucide-react';

const ServicesPage = () => {
  const { language, t } = useLanguage();

  const services = [
    { 
      icon: Phone, 
      title: t.services.emergency.title, 
      desc: t.services.emergency.desc, 
      href: '/services/emergency', 
      color: 'text-destructive bg-destructive/10',
      fullDesc: 'When seconds count, our network of 24/7 emergency veterinary clinics across Malaysia is ready to help. From trauma care to critical interventions, our partner clinics are equipped with the latest medical technology and staffed by experienced emergency veterinarians.'
    },
    { 
      icon: Heart, 
      title: t.services.vet.title, 
      desc: t.services.vet.desc, 
      href: '/services/vet', 
      color: 'text-primary bg-primary/10',
      fullDesc: 'Regular health check-ups, vaccinations, dental care, and preventive treatments keep your pet healthy. Our network includes general practice vets, specialists, and mobile vet services for convenient home visits.'
    },
    { 
      icon: Scissors, 
      title: t.services.grooming.title, 
      desc: t.services.grooming.desc, 
      href: '/services/grooming', 
      color: 'text-accent bg-accent/10',
      fullDesc: 'Professional grooming is essential in Malaysia\'s tropical climate. From basic baths and nail trims to full spa treatments, our partner groomers are certified and experienced with all breeds and coat types.'
    },
    { 
      icon: Clock, 
      title: t.services.boarding.title, 
      desc: t.services.boarding.desc, 
      href: '/services/boarding', 
      color: 'text-sage bg-sage/10',
      fullDesc: 'Traveling or need temporary care? Our boarding partners offer safe, comfortable, and fun stays for your pets. From luxury pet hotels to home-based care, find the perfect option for your furry friend.'
    },
    { 
      icon: Heart, 
      title: t.services.adoption.title, 
      desc: t.services.adoption.desc, 
      href: '/services/adoption', 
      color: 'text-terracotta bg-terracotta/10',
      fullDesc: 'Give a loving home to a pet in need. We partner with verified shelters and rescue organizations across Malaysia. Find dogs, cats, rabbits, and other animals looking for their forever families.'
    },
    { 
      icon: Shield, 
      title: t.services.insurance.title, 
      desc: t.services.insurance.desc, 
      href: '/services/insurance', 
      color: 'text-primary bg-primary/10',
      fullDesc: 'Protect your pet and your finances with comprehensive pet insurance. Compare plans from leading providers, understand coverage options, and find the right policy for your pet\'s needs.'
    },
    { 
      icon: ShoppingBag, 
      title: t.services.food.title, 
      desc: t.services.food.desc, 
      href: '/services/nutrition', 
      color: 'text-gold bg-gold/10',
      fullDesc: 'Quality nutrition is the foundation of your pet\'s health. Find premium pet food brands, specialty diets for allergies or health conditions, and get nutrition advice from veterinary nutritionists.'
    },
  ];

  return (
    <>
      <SEOHead
        title="Pet Care Services in Malaysia — Vets, Grooming, Emergency & More | PetCare Malaysia"
        description="Explore all pet care services available across Malaysia. From 24/7 emergency vets to grooming, boarding, adoption, and pet insurance."
        path="/services"
        language={language}
      />
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          {/* Hero */}
          <section className="gradient-hero py-16">
            <div className="container">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t.services.title}
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl">
                Comprehensive pet care services across Malaysia. 
                From emergency veterinary care to grooming, boarding, and adoption.
              </p>
            </div>
          </section>

          {/* Services List */}
          <section className="py-16 bg-background">
            <div className="container">
              <div className="space-y-8">
                {services.map((service, i) => (
                  <div
                    key={service.href}
                    className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className={`shrink-0 p-4 rounded-xl ${service.color} self-start`}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                        <p className="text-muted-foreground mb-4">{service.fullDesc}</p>
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-primary font-medium hover:underline"
                        >
                          Explore {service.title}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* People Also Ask Section */}
          <PeopleAlsoAskSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;

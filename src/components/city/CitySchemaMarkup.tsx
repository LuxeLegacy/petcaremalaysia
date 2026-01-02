import { CityData } from '@/lib/cityData';
import { getCityMetadata, getDVSOffice, getLocalCouncil } from '@/lib/cityContent';

interface CitySchemaMarkupProps {
  city: CityData;
}

export const CitySchemaMarkup = ({ city }: CitySchemaMarkupProps) => {
  const metadata = getCityMetadata(city.slug);
  const dvsOffice = getDVSOffice(city.state);
  const council = getLocalCouncil(city.slug, city.state);

  // Place schema for the city itself
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${city.name}, ${city.state}`,
    "description": `Pet care services and veterinary clinics in ${city.name}, ${city.state}, Malaysia. Find 24/7 emergency vets, grooming, pet food, and adoption services.`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": metadata.coordinates.lat,
      "longitude": metadata.coordinates.lng
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "MY"
    },
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": city.state,
      "containedInPlace": {
        "@type": "Country",
        "name": "Malaysia"
      }
    }
  };

  // LocalBusiness schema for pet services in the area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}#petservices`,
    "name": `Pet Care Services in ${city.name}`,
    "description": `Find veterinary clinics, pet grooming, emergency vets, and pet services in ${city.name}, ${city.state}. Serving ${metadata.population.toLocaleString()} residents with comprehensive pet care.`,
    "url": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}`,
    "telephone": "+60 12-345 6789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": metadata.coordinates.lat,
      "longitude": metadata.coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state
      }
    },
    "priceRange": metadata.vetPriceTier === 'premium' ? "$$$" : metadata.vetPriceTier === 'budget' ? "$" : "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": Math.round(metadata.population * 0.001)
    }
  };

  // VeterinaryCare schema
  const veterinaryCareSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}#vetcare`,
    "name": `Veterinary Services in ${city.name}`,
    "description": `24/7 emergency veterinary care and regular vet services in ${city.name}. Emergency consultations from RM${metadata.avgEmergencyVetCost.min}, regular check-ups from RM${metadata.avgConsultationCost.min}.`,
    "url": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}`,
    "telephone": "+60 12-345 6789",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": metadata.coordinates.lat,
      "longitude": metadata.coordinates.lng
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Veterinary Care",
        "description": `24/7 emergency pet care in ${city.name}. Handle trauma, poisoning, and critical conditions.`
      },
      {
        "@type": "MedicalProcedure",
        "name": "Routine Check-up",
        "description": `Regular health examinations and vaccinations for pets in ${city.name}.`
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pet Surgery",
        "description": `Surgical procedures including spaying, neutering, and emergency surgery in ${city.name}.`
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dental Care",
        "description": `Pet dental cleaning and oral health services in ${city.name}.`
      }
    ],
    "medicalSpecialty": ["Emergency Medicine", "General Practice", "Surgery", "Dentistry"],
    "isAcceptingNewPatients": true,
    "priceRange": `RM${metadata.avgConsultationCost.min} - RM${metadata.avgEmergencyVetCost.max}`
  };

  // GovernmentOffice schema for DVS
  const governmentOfficeSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentOffice",
    "name": dvsOffice.name,
    "description": `Department of Veterinary Services office for ${city.state}. Handles pet registration, microchipping, and animal welfare.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": dvsOffice.address,
      "addressRegion": city.state,
      "addressCountry": "MY"
    },
    "telephone": dvsOffice.phone,
    "email": dvsOffice.email,
    "areaServed": {
      "@type": "State",
      "name": city.state,
      "containedInPlace": {
        "@type": "Country",
        "name": "Malaysia"
      }
    }
  };

  // Service schema for pet services offered
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Pet Care Services in ${city.name}`,
    "description": `Comprehensive pet care services in ${city.name} including emergency vets, grooming, boarding, and pet food. Serving pet owners in ${metadata.areaType} ${city.name}.`,
    "provider": {
      "@type": "Organization",
      "name": "PetCare Malaysia",
      "url": "https://petcaremalaysia.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Pet Services in ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Veterinary Care",
            "description": `24/7 emergency vet services in ${city.name}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": metadata.avgEmergencyVetCost.min,
            "priceCurrency": "MYR",
            "minPrice": metadata.avgEmergencyVetCost.min,
            "maxPrice": metadata.avgEmergencyVetCost.max
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Veterinary Consultation",
            "description": `Regular vet check-ups in ${city.name}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": metadata.avgConsultationCost.min,
            "priceCurrency": "MYR",
            "minPrice": metadata.avgConsultationCost.min,
            "maxPrice": metadata.avgConsultationCost.max
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pet Grooming",
            "description": `Professional pet grooming in ${city.name}`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": metadata.avgGroomingCost.min,
            "priceCurrency": "MYR",
            "minPrice": metadata.avgGroomingCost.min,
            "maxPrice": metadata.avgGroomingCost.max
          }
        }
      ]
    }
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://petcaremalaysia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": city.state,
        "item": `https://petcaremalaysia.com/${city.stateSlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}`
      }
    ]
  };

  // WebPage schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Pet Care Services in ${city.name}, ${city.state} | PetCare Malaysia`,
    "description": `Find 24/7 emergency vets, pet clinics, grooming, and pet services in ${city.name}. ${metadata.petRisks.slice(0, 2).join(', ')} are common risks. Emergency vet costs RM${metadata.avgEmergencyVetCost.min}-${metadata.avgEmergencyVetCost.max}.`,
    "url": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}`,
    "inLanguage": ["en", "ms", "zh"],
    "isPartOf": {
      "@type": "WebSite",
      "name": "PetCare Malaysia",
      "url": "https://petcaremalaysia.com"
    },
    "about": {
      "@type": "Thing",
      "name": `Pet Care in ${city.name}`,
      "description": `Pet care services and veterinary resources for ${city.name}, ${city.state}`
    },
    "mentions": [
      {
        "@type": "Organization",
        "name": council.name,
        "alternateName": council.shortName,
        "url": council.website
      },
      {
        "@type": "GovernmentOrganization",
        "name": dvsOffice.name
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".emergency-info"]
    }
  };

  // Consolidated FAQPage schema - combines all Q&A from different sections
  const topRisks = metadata.petRisks.slice(0, 3);
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // City-specific PAA questions
      {
        "@type": "Question",
        "name": `How much does a vet cost in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Vet consultations in ${city.name} cost RM${metadata.avgConsultationCost.min}-RM${metadata.avgConsultationCost.max}. Emergency visits are higher at RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. ${metadata.vetPriceTier === 'premium' ? 'As a premium area, prices here are above average.' : metadata.vetPriceTier === 'budget' ? 'Prices here are more affordable than city centers.' : 'Prices are comparable to similar areas.'} Pet grooming starts from RM${metadata.avgGroomingCost.min}.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I register my dog in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Dog registration in ${city.name} is handled by ${council.name} (${council.shortName}). License fee: ${council.dogLicenseFee} (or ${council.spayedFee} if spayed/neutered). Dogs must also be microchipped (RM50-RM100). Visit ${council.website} or their office with your dog's vaccination records.`
        }
      },
      {
        "@type": "Question",
        "name": `What are the pet health risks in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pet owners in ${city.name} should watch for: ${topRisks.join(', ')}. The ${metadata.areaType} environment also sees humidity-related skin issues and heatstroke risks. Regular vet check-ups every 6 months are recommended.`
        }
      },
      {
        "@type": "Question",
        "name": `Where is the DVS office near ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The nearest Department of Veterinary Services office for ${city.name} is ${dvsOffice.name} at ${dvsOffice.address}. Contact: ${dvsOffice.phone} or ${dvsOffice.email}. They handle pet microchipping, health certificates, and import/export permits.`
        }
      },
      {
        "@type": "Question",
        "name": `Is there a 24-hour vet near ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${metadata.nearestMajorCity ? `The nearest 24/7 emergency vet is ${metadata.distanceToHub} away in ${metadata.nearestMajorCity}.` : `Yes, ${city.name} has multiple 24/7 emergency veterinary clinics.`} Emergency vet costs in ${city.name} range from RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. Save emergency contacts before you need them.`
        }
      },
      {
        "@type": "Question",
        "name": `How much is pet grooming in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Pet grooming in ${city.name} costs RM${metadata.avgGroomingCost.min}-RM${metadata.avgGroomingCost.max} depending on pet size and services. Basic bath starts at RM${metadata.avgGroomingCost.min}. Full grooming with haircut, nail trim, and ear cleaning costs more.`
        }
      },
      // Common pet emergency questions
      {
        "@type": "Question",
        "name": `What should I do if my pet is having an emergency in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Stay calm and assess your pet's condition. For life-threatening emergencies like difficulty breathing, severe bleeding, or collapse, go to the nearest 24/7 emergency vet immediately. In ${city.name}, emergency vet visits cost RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}. Call ahead if possible so they can prepare for your arrival.`
        }
      },
      {
        "@type": "Question",
        "name": `What are signs my pet needs emergency care?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Seek emergency vet care if your pet shows: difficulty breathing, pale/blue gums, inability to stand, severe bleeding, bloated abdomen, seizures, loss of consciousness, suspected poisoning, trauma from accident, or inability to urinate. Don't wait - these conditions can be life-threatening.`
        }
      },
      {
        "@type": "Question",
        "name": `My cat is not eating - is this an emergency?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A cat not eating for more than 24-48 hours can be serious, especially for overweight cats at risk of hepatic lipidosis (fatty liver disease). If accompanied by lethargy, vomiting, or hiding, see a vet urgently. In ${city.name}, consultations start at RM${metadata.avgConsultationCost.min}.`
        }
      },
      {
        "@type": "Question",
        "name": `My dog ate chocolate - what should I do?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Chocolate is toxic to dogs. Dark chocolate and baking chocolate are most dangerous. Contact a vet immediately, especially if your dog ate a significant amount. Note what type, how much, and your dog's weight. Symptoms include vomiting, diarrhea, rapid breathing, and seizures. In ${city.name}, emergency visits cost RM${metadata.avgEmergencyVetCost.min}-RM${metadata.avgEmergencyVetCost.max}.`
        }
      }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".qa-question", ".qa-answer"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(veterinaryCareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governmentOfficeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </>
  );
};

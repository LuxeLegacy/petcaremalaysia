import { CityData } from '@/lib/cityData';
import { getCityMetadata, getDVSOffice, getLocalCouncil } from '@/lib/cityContent';
import { GeneratedFAQ } from '@/lib/cityContentGenerator';

interface CitySchemaMarkupProps {
  city: CityData;
  faqs: GeneratedFAQ[];
}

export const CitySchemaMarkup = ({ city, faqs }: CitySchemaMarkupProps) => {
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
    "telephone": "+60 11-5695 9227",
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

  // Consolidated FAQPage schema - uses FAQs passed from parent to match displayed content
  // Limited to 10 FAQs (Google's recommendation) with unique @id to prevent duplication
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://petcaremalaysia.com/${city.stateSlug}/${city.slug}#faq`,
    "mainEntity": faqs.slice(0, 10).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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

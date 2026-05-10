export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": "https://puravidasanantonio.com",
    "name": "Pura Vida Chiropractic",
    "alternateName": "Pura Vida Quiropráctica",
    "url": "https://puravidasanantonio.com",
    "logo": "/images/puravidalogo.png",
    "image": "/images/dr-foss-adjusting-patient.webp",
    "description": "Bilingual chiropractic clinic in San Antonio, TX specializing in SOT chiropractic, SoftWave therapy, shockwave therapy, Class IV laser, auto injury, and pediatric/prenatal care. Dr. Dan Foss, DC — 23+ years experience.",
    "telephone": "+12106851994",
    "email": "dfossdc@yahoo.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2318 NW Military Hwy #103",
      "addressLocality": "San Antonio",
      "addressRegion": "TX",
      "postalCode": "78231",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.5397,
      "longitude": -98.5617,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
        "opens": "07:00",
        "closes": "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "description": "Additional times by appointment",
        "dayOfWeek": ["Wednesday", "Friday", "Saturday"],
      },
    ],
    "sameAs": [
      "https://www.facebook.com/puravidasanantonio/",
      "https://www.instagram.com/puravidasatx/",
      "https://www.youtube.com/@puravidadc",
      "https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio",
      "https://www.healthgrades.com/providers/daniel-foss-2h2pq",
      "https://www.yellowpages.com/san-antonio-tx/mip/pura-vida-chiropractic-472722413",
      "https://www.google.com/maps/place/Pura+Vida+Chiropractic/@29.5275,-98.5647,17z",
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card",
    "areaServed": [
      "San Antonio TX",
      "Castle Hills TX",
      "Stone Oak TX",
      "Alamo Heights TX",
      "Leon Valley TX",
      "Helotes TX",
      "Shavano Park TX",
      "Boerne TX",
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+12106851994",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"],
        "areaServed": "US-TX",
      },
    ],
    "knowsLanguage": ["English", "Spanish"],
    "hasMap": "https://maps.google.com/?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX",
    "founder": {
      "@type": "Person",
      "name": "Dr. Daniel Foss",
      "jobTitle": "Doctor of Chiropractic",
      "description": "Advanced SOT Certified through SORSI, 23+ years experience, bilingual English/Spanish",
      "alumniOf": "Western States Chiropractic College",
      "knowsLanguage": ["English", "Spanish"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

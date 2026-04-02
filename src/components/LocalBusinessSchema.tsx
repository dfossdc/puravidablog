export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": "https://puravidasanantonio.com",
    "name": "Pura Vida Chiropractic",
    "alternateName": "Pura Vida Quiropráctica",
    "url": "https://puravidasanantonio.com",
    "logo": "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractic-San-Antonio-TX-Pura-Vida-Chiropractic-Logo.webp",
    "image": "https://www.puravidasanantonio.com/wp-content/uploads/2026/03/Chiropractor-San-Antonio-TX-Dan-Foss-Adjusting-A-Patient-HP.webp",
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
    ],
    "sameAs": [
      "https://www.facebook.com/puravidasanantonio/",
      "https://www.instagram.com/puravidasatx/",
      "https://www.youtube.com/@puravidasanantonio",
      "https://www.yelp.com/biz/pura-vida-chiropractic-san-antonio",
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Insurance",
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
    "medicalSpecialty": "Chiropractic",
    "availableLanguage": ["English", "Spanish"],
    "hasMap": "https://maps.google.com/?q=Pura+Vida+Chiropractic+2318+NW+Military+Hwy+San+Antonio+TX",
    "founder": {
      "@type": "Person",
      "name": "Dr. Dan Foss",
      "jobTitle": "Doctor of Chiropractic",
      "description": "Advanced SOT Certified through SORSI, 23+ years experience, bilingual English/Spanish",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Pura Vida Chiropractic",
    "url": "https://puravidasanantonio.com",
    "telephone": "(210) 685-1994",
    "image": "https://puravidasanantonio.com/images/logo.svg",
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
    "priceRange": "$$",
    "description":
      "Bilingual chiropractic clinic in San Antonio specializing in SOT, SoftWave, shockwave, Class IV laser, auto injury, and pediatric/prenatal care.",
    "medicalSpecialty": "Chiropractic",
    "sameAs": [
      "https://puravidasanantonio.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8f9fa" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.75rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", marginBottom: "1rem" }}>
            404 — Page Not Found
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>
            This page doesn&apos;t exist
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "2rem", maxWidth: "28rem", lineHeight: 1.6 }}>
            The link you followed may be outdated or the page may have moved.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/en"
              style={{
                background: "#1a5c38",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Go to Home (EN)
            </Link>
            <Link
              href="/es"
              style={{
                background: "#1a5c38",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Ir al Inicio (ES)
            </Link>
          </div>
          <p style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#9ca3af" }}>
            Pura Vida Chiropractic · San Antonio, TX ·{" "}
            <a href="tel:2106851994" style={{ color: "#1a5c38" }}>(210) 685-1994</a>
          </p>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pura Vida Chiropractic San Antonio TX",
  description:
    "Privacy policy for Pura Vida Chiropractic in San Antonio, TX. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA.",
  alternates: {
    canonical: "https://puravidasanantonio.com/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 80px", fontFamily: "Georgia, 'Times New Roman', serif", color: "#212934", lineHeight: 1.8 }}>

      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#146BA6" }}>
        Privacy Policy
      </h1>
      <p style={{ fontSize: 14, color: "#555", marginBottom: 40 }}>
        Effective Date: January 1, 2025 &nbsp;|&nbsp; Last Updated: April 1, 2025
      </p>

      <p style={{ marginBottom: 24 }}>
        Pura Vida Chiropractic (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), located at 2318 NW Military Hwy, Suite 103, San Antonio, TX 78231, is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>puravidasanantonio.com</strong>, use our online scheduling tools, or contact our office.
      </p>
      <p style={{ marginBottom: 40 }}>
        Please read this policy carefully. By using our website or services, you agree to the practices described below. If you do not agree, please discontinue use of our website.
      </p>

      {/* ── 1 ── */}
      <Section title="1. HIPAA Notice and Protected Health Information">
        <p>
          As a chiropractic healthcare provider, Pura Vida Chiropractic is subject to the Health Insurance Portability and Accountability Act of 1996 (<strong>HIPAA</strong>). We maintain a separate <strong>Notice of Privacy Practices</strong> that governs how we use and disclose your Protected Health Information (PHI) in connection with your clinical care. That notice is provided to all patients at the time of their first visit and is available upon request at our office.
        </p>
        <p>
          This website Privacy Policy applies to information collected through our website and digital communications and is separate from our HIPAA Notice of Privacy Practices. If you are a patient of Pura Vida Chiropractic, both documents apply to you.
        </p>
      </Section>

      {/* ── 2 ── */}
      <Section title="2. Information We Collect">
        <h3 style={h3Style}>A. Information You Provide Directly</h3>
        <p>We collect information you voluntarily submit through our website, including:</p>
        <ul style={ulStyle}>
          <li><strong>Contact forms and intake questionnaires:</strong> name, email address, phone number, mailing address, and the nature of your health concern or inquiry.</li>
          <li><strong>Online appointment scheduling:</strong> name, date of birth, email address, phone number, and appointment preferences submitted through our scheduling platform (Schedulista).</li>
          <li><strong>Email and phone inquiries:</strong> any information you include when you contact us directly.</li>
          <li><strong>New patient forms:</strong> health history, insurance information, and consent documents submitted prior to your first visit.</li>
        </ul>

        <h3 style={h3Style}>B. Information Collected Automatically</h3>
        <p>When you visit our website, we and our third-party service providers may automatically collect:</p>
        <ul style={ulStyle}>
          <li><strong>Log data:</strong> IP address, browser type and version, operating system, referring URL, pages visited, and date/time of your visit.</li>
          <li><strong>Device information:</strong> device type, screen resolution, and unique device identifiers.</li>
          <li><strong>Cookies and similar tracking technologies:</strong> we use cookies to analyze website traffic, remember your preferences, and improve your experience. See Section 6 for details.</li>
        </ul>

        <h3 style={h3Style}>C. Information from Third Parties</h3>
        <p>We may receive information about you from third-party platforms such as Facebook, Google, and review platforms when you interact with our advertisements or profiles on those services.</p>
      </Section>

      {/* ── 3 ── */}
      <Section title="3. How We Use Your Information">
        <p>We use the information we collect for the following purposes:</p>
        <ul style={ulStyle}>
          <li>To schedule appointments and communicate with you regarding your care</li>
          <li>To respond to your inquiries, questions, and requests</li>
          <li>To send appointment reminders, health tips, and other communications you have requested</li>
          <li>To process and verify insurance information</li>
          <li>To improve our website, services, and patient experience</li>
          <li>To analyze website traffic and user behavior through analytics tools</li>
          <li>To comply with applicable laws and regulations, including HIPAA</li>
          <li>To protect the security and integrity of our website and business operations</li>
          <li>To run targeted advertising campaigns on platforms such as Facebook and Google (using non-health data only — see Section 5)</li>
        </ul>
        <p>
          We do not sell your personal information to third parties. We do not use your Protected Health Information for marketing purposes without your explicit written authorization.
        </p>
      </Section>

      {/* ── 4 ── */}
      <Section title="4. Sharing of Information">
        <p>We may share your information in the following limited circumstances:</p>

        <h3 style={h3Style}>A. Service Providers</h3>
        <p>We share information with trusted third-party vendors who assist us in operating our website and providing services, including:</p>
        <ul style={ulStyle}>
          <li><strong>Schedulista</strong> — online appointment scheduling platform</li>
          <li><strong>Vercel</strong> — website hosting and content delivery</li>
          <li><strong>Google Analytics</strong> — website traffic analysis</li>
          <li><strong>Facebook / Meta</strong> — advertising and audience analytics</li>
          <li><strong>FormSubmit.co</strong> — contact form submission processing</li>
          <li><strong>Email and practice management software</strong> used in our office operations</li>
        </ul>
        <p>These providers are contractually required to use your information only as directed by us and to maintain appropriate security measures.</p>

        <h3 style={h3Style}>B. Legal Requirements</h3>
        <p>We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe in good faith that such disclosure is necessary to protect the rights, property, or safety of Pura Vida Chiropractic, our patients, or the public.</p>

        <h3 style={h3Style}>C. Business Transfers</h3>
        <p>In the event of a merger, acquisition, or sale of our practice, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership.</p>

        <h3 style={h3Style}>D. With Your Consent</h3>
        <p>We may share your information with your explicit consent for purposes not described in this policy.</p>
      </Section>

      {/* ── 5 ── */}
      <Section title="5. Advertising and Remarketing">
        <p>
          We use Facebook Pixel and Google Ads conversion tracking to measure the effectiveness of our advertising campaigns. These tools may place cookies on your device to track actions taken on our website (such as completing a contact form or scheduling an appointment) and to serve relevant ads to users who have visited our site.
        </p>
        <p>
          <strong>We do not share Protected Health Information (PHI) with advertising platforms.</strong> Any custom audiences created for advertising purposes use only general contact information (such as email or phone number) provided voluntarily by website visitors, never clinical health data.
        </p>
        <p>
          You may opt out of interest-based advertising at any time through:
        </p>
        <ul style={ulStyle}>
          <li>Facebook Ad Preferences: <em>facebook.com/ads/preferences</em></li>
          <li>Google Ads Settings: <em>adssettings.google.com</em></li>
          <li>Network Advertising Initiative opt-out: <em>optout.networkadvertising.org</em></li>
        </ul>
      </Section>

      {/* ── 6 ── */}
      <Section title="6. Cookies and Tracking Technologies">
        <p>Our website uses the following types of cookies:</p>
        <ul style={ulStyle}>
          <li><strong>Strictly necessary cookies:</strong> required for the website to function properly (e.g., session management, security).</li>
          <li><strong>Analytics cookies:</strong> help us understand how visitors interact with our website (Google Analytics). Data is aggregated and anonymized.</li>
          <li><strong>Marketing cookies:</strong> used to track visitors across websites for advertising purposes (Facebook Pixel, Google Ads).</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set. Note that disabling certain cookies may affect the functionality of our website.
        </p>
      </Section>

      {/* ── 7 ── */}
      <Section title="7. Data Security">
        <p>
          We implement industry-standard technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
        </p>
        <ul style={ulStyle}>
          <li>SSL/TLS encryption for all data transmitted to and from our website</li>
          <li>Secure hosting infrastructure through Vercel with enterprise-grade security</li>
          <li>Access controls limiting who within our practice can access patient data</li>
          <li>Regular security reviews and updates</li>
        </ul>
        <p>
          No method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security. In the event of a data breach affecting your personal information, we will notify you as required by applicable law.
        </p>
      </Section>

      {/* ── 8 ── */}
      <Section title="8. Data Retention">
        <p>
          We retain personal information collected through our website for as long as necessary to fulfill the purposes described in this policy, or as required by law. Patient health records are retained in accordance with Texas state law requirements for healthcare providers (a minimum of 10 years for adult patients, or until age 21 for minor patients, whichever is longer). Website analytics data is retained for a period of 26 months.
        </p>
      </Section>

      {/* ── 9 ── */}
      <Section title="9. Your Privacy Rights">
        <p>Depending on your location and applicable law, you may have the following rights regarding your personal information:</p>
        <ul style={ulStyle}>
          <li><strong>Access:</strong> request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> request correction of inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> request deletion of your personal information, subject to certain legal exceptions.</li>
          <li><strong>Opt-out of marketing:</strong> unsubscribe from marketing emails at any time using the unsubscribe link in any email or by contacting us directly.</li>
          <li><strong>Data portability:</strong> request a copy of your data in a portable format where technically feasible.</li>
        </ul>
        <p>
          <strong>Texas Residents:</strong> Texas law provides certain privacy rights for residents. You may submit a request to exercise any of the above rights by contacting us using the information in Section 12.
        </p>
        <p>
          <strong>HIPAA Rights (Patients):</strong> As a patient, you have additional rights regarding your Protected Health Information as described in our Notice of Privacy Practices, including the right to access, amend, and request restrictions on disclosures of your health information.
        </p>
      </Section>

      {/* ── 10 ── */}
      <Section title="10. Children's Privacy">
        <p>
          Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13 without verifiable parental consent. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately and we will take steps to delete such information.
        </p>
        <p>
          For pediatric chiropractic patients under 18, all online scheduling and form submissions must be completed by a parent or legal guardian.
        </p>
      </Section>

      {/* ── 11 ── */}
      <Section title="11. Third-Party Links">
        <p>
          Our website may contain links to third-party websites, including scheduling platforms, review sites, social media profiles, and insurance portals. This Privacy Policy applies only to our website. We are not responsible for the privacy practices of third-party websites and encourage you to review their privacy policies before providing any personal information.
        </p>
      </Section>

      {/* ── 12 ── */}
      <Section title="12. Contact Us">
        <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
        <div style={{ background: "#f4f8fc", border: "1px solid #dde6ec", borderRadius: 6, padding: "20px 24px", margin: "16px 0", fontSize: 15 }}>
          <strong>Pura Vida Chiropractic</strong><br />
          Dr. Dan Foss, DC<br />
          2318 NW Military Hwy, Suite 103<br />
          San Antonio, TX 78231<br /><br />
          <strong>Phone:</strong> (210) 685-1994<br />
          <strong>Email:</strong> dfossdc@yahoo.com<br />
          <strong>Website:</strong> puravidasanantonio.com
        </div>
        <p>
          We will respond to all privacy-related requests within 30 days of receipt.
        </p>
      </Section>

      {/* ── 13 ── */}
      <Section title="13. Changes to This Privacy Policy">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
        </p>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #dde6ec", margin: "48px 0 24px" }} />
      <p style={{ fontSize: 13, color: "#777", textAlign: "center" }}>
        &copy; 2025 Pura Vida Chiropractic &mdash; San Antonio, TX &mdash; All rights reserved
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#146BA6", marginBottom: 14, paddingBottom: 6, borderBottom: "2px solid #e8f0f7" }}>
        {title}
      </h2>
      <div style={{ fontSize: 15 }}>{children}</div>
    </section>
  );
}

const h3Style: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
  color: "#212934",
  margin: "20px 0 8px",
};

const ulStyle: React.CSSProperties = {
  paddingLeft: 24,
  margin: "8px 0 16px",
  lineHeight: 1.9,
};

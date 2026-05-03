import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Pura Vida San Antonio",
  description:
    "Política de privacidad de Pura Vida Chiropractic en San Antonio, TX. Conozca cómo recopilamos, usamos y protegemos su información personal y de salud de acuerdo con HIPAA.",
  alternates: {
    canonical: "https://puravidasanantonio.com/privacy/es",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPageEs() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "60px 24px 80px", fontFamily: "Georgia, 'Times New Roman', serif", color: "#212934", lineHeight: 1.8 }}>

      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#146BA6" }}>
        Política de Privacidad
      </h1>
      <p style={{ fontSize: 14, color: "#555", marginBottom: 40 }}>
        Fecha de vigencia: 1 de enero de 2025 &nbsp;|&nbsp; Última actualización: 1 de abril de 2025
      </p>

      <p style={{ marginBottom: 24 }}>
        Pura Vida Chiropractic (&ldquo;nosotros&rdquo; o &ldquo;nuestro&rdquo;), ubicado en 2318 NW Military Hwy, Suite 103, San Antonio, TX 78231, está comprometido con proteger la privacidad y seguridad de su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y resguardamos su información cuando visita nuestro sitio web en <strong>puravidasanantonio.com</strong>, usa nuestras herramientas de programación en línea, o se comunica con nuestra oficina.
      </p>
      <p style={{ marginBottom: 40 }}>
        Por favor lea esta política detenidamente. Al usar nuestro sitio web o servicios, usted acepta las prácticas descritas a continuación. Si no está de acuerdo, por favor deje de usar nuestro sitio web.
      </p>

      {/* ── 1 ── */}
      <Section title="1. Aviso HIPAA e Información de Salud Protegida">
        <p>
          Como proveedor de servicios de quiropráctica, Pura Vida Chiropractic está sujeto a la Ley de Portabilidad y Responsabilidad del Seguro Médico de 1996 (<strong>HIPAA</strong>). Mantenemos un <strong>Aviso de Prácticas de Privacidad</strong> separado que rige cómo usamos y divulgamos su Información de Salud Protegida (ISP) en relación con su atención clínica. Dicho aviso se entrega a todos los pacientes en su primera visita y está disponible a petición en nuestra oficina.
        </p>
        <p>
          Esta Política de Privacidad del sitio web aplica a la información recopilada a través de nuestro sitio web y comunicaciones digitales, y es independiente de nuestro Aviso de Prácticas de Privacidad de HIPAA. Si usted es paciente de Pura Vida Chiropractic, ambos documentos le aplican.
        </p>
      </Section>

      {/* ── 2 ── */}
      <Section title="2. Información que Recopilamos">
        <h3 style={h3Style}>A. Información que Usted Proporciona Directamente</h3>
        <p>Recopilamos información que usted envía voluntariamente a través de nuestro sitio web, incluyendo:</p>
        <ul style={ulStyle}>
          <li><strong>Formularios de contacto y cuestionarios de ingreso:</strong> nombre, correo electrónico, número de teléfono, dirección postal y la naturaleza de su consulta o problema de salud.</li>
          <li><strong>Programación de citas en línea:</strong> nombre, fecha de nacimiento, correo electrónico, número de teléfono y preferencias de cita enviadas a través de nuestra plataforma de programación (Schedulista).</li>
          <li><strong>Consultas por correo electrónico y teléfono:</strong> cualquier información que incluya cuando se comunique directamente con nosotros.</li>
          <li><strong>Formularios de nuevos pacientes:</strong> historial médico, información de seguro y documentos de consentimiento enviados antes de su primera visita.</li>
        </ul>

        <h3 style={h3Style}>B. Información Recopilada Automáticamente</h3>
        <p>Cuando visita nuestro sitio web, nosotros y nuestros proveedores de servicios externos podemos recopilar automáticamente:</p>
        <ul style={ulStyle}>
          <li><strong>Datos de registro:</strong> dirección IP, tipo y versión de navegador, sistema operativo, URL de referencia, páginas visitadas y fecha/hora de su visita.</li>
          <li><strong>Información del dispositivo:</strong> tipo de dispositivo, resolución de pantalla e identificadores únicos del dispositivo.</li>
          <li><strong>Cookies y tecnologías de seguimiento similares:</strong> usamos cookies para analizar el tráfico del sitio web, recordar sus preferencias y mejorar su experiencia. Consulte la Sección 6 para más detalles.</li>
        </ul>

        <h3 style={h3Style}>C. Información de Terceros</h3>
        <p>Podemos recibir información sobre usted de plataformas de terceros como Facebook, Google y plataformas de reseñas cuando interactúa con nuestros anuncios o perfiles en esos servicios.</p>
      </Section>

      {/* ── 3 ── */}
      <Section title="3. Cómo Usamos Su Información">
        <p>Usamos la información que recopilamos para los siguientes fines:</p>
        <ul style={ulStyle}>
          <li>Para programar citas y comunicarnos con usted sobre su atención</li>
          <li>Para responder a sus consultas, preguntas y solicitudes</li>
          <li>Para enviar recordatorios de citas, consejos de salud y otras comunicaciones que haya solicitado</li>
          <li>Para procesar y verificar información de seguro</li>
          <li>Para mejorar nuestro sitio web, servicios y experiencia del paciente</li>
          <li>Para analizar el tráfico del sitio web y el comportamiento de los usuarios mediante herramientas de análisis</li>
          <li>Para cumplir con las leyes y regulaciones aplicables, incluyendo HIPAA</li>
          <li>Para proteger la seguridad e integridad de nuestro sitio web y operaciones comerciales</li>
          <li>Para ejecutar campañas publicitarias segmentadas en plataformas como Facebook y Google (usando solo datos no relacionados con la salud — consulte la Sección 5)</li>
        </ul>
        <p>
          No vendemos su información personal a terceros. No usamos su Información de Salud Protegida con fines de mercadeo sin su autorización escrita explícita.
        </p>
      </Section>

      {/* ── 4 ── */}
      <Section title="4. Compartir Información">
        <p>Podemos compartir su información en las siguientes circunstancias limitadas:</p>

        <h3 style={h3Style}>A. Proveedores de Servicios</h3>
        <p>Compartimos información con proveedores externos de confianza que nos ayudan a operar nuestro sitio web y brindar servicios, incluyendo:</p>
        <ul style={ulStyle}>
          <li><strong>Schedulista</strong> — plataforma de programación de citas en línea</li>
          <li><strong>Vercel</strong> — alojamiento del sitio web y distribución de contenido</li>
          <li><strong>Google Analytics</strong> — análisis de tráfico del sitio web</li>
          <li><strong>Facebook / Meta</strong> — publicidad y análisis de audiencia</li>
          <li><strong>FormSubmit.co</strong> — procesamiento de envíos de formularios de contacto</li>
          <li><strong>Software de correo electrónico y gestión de consultas</strong> utilizado en las operaciones de nuestra oficina</li>
        </ul>
        <p>Estos proveedores están contractualmente obligados a usar su información solo según nuestras instrucciones y a mantener medidas de seguridad adecuadas.</p>

        <h3 style={h3Style}>B. Requisitos Legales</h3>
        <p>Podemos divulgar su información si así lo requiere la ley, una orden judicial o una autoridad gubernamental, o si creemos de buena fe que dicha divulgación es necesaria para proteger los derechos, la propiedad o la seguridad de Pura Vida Chiropractic, nuestros pacientes o el público.</p>

        <h3 style={h3Style}>C. Transferencias Comerciales</h3>
        <p>En caso de una fusión, adquisición o venta de nuestra práctica, su información puede transferirse como parte de esa transacción. Le notificaremos por correo electrónico y/o mediante un aviso prominente en nuestro sitio web sobre cualquier cambio de propiedad.</p>

        <h3 style={h3Style}>D. Con Su Consentimiento</h3>
        <p>Podemos compartir su información con su consentimiento explícito para fines no descritos en esta política.</p>
      </Section>

      {/* ── 5 ── */}
      <Section title="5. Publicidad y Remarketing">
        <p>
          Usamos Facebook Pixel y el seguimiento de conversiones de Google Ads para medir la efectividad de nuestras campañas publicitarias. Estas herramientas pueden colocar cookies en su dispositivo para rastrear las acciones realizadas en nuestro sitio web (como completar un formulario de contacto o programar una cita) y para mostrar anuncios relevantes a usuarios que han visitado nuestro sitio.
        </p>
        <p>
          <strong>No compartimos Información de Salud Protegida (ISP) con plataformas publicitarias.</strong> Cualquier audiencia personalizada creada con fines publicitarios usa únicamente información de contacto general (como correo electrónico o número de teléfono) proporcionada voluntariamente por los visitantes del sitio web, nunca datos clínicos de salud.
        </p>
        <p>
          Puede optar por no recibir publicidad basada en intereses en cualquier momento a través de:
        </p>
        <ul style={ulStyle}>
          <li>Preferencias de anuncios de Facebook: <em>facebook.com/ads/preferences</em></li>
          <li>Configuración de anuncios de Google: <em>adssettings.google.com</em></li>
          <li>Exclusión voluntaria de la Network Advertising Initiative: <em>optout.networkadvertising.org</em></li>
        </ul>
      </Section>

      {/* ── 6 ── */}
      <Section title="6. Cookies y Tecnologías de Seguimiento">
        <p>Nuestro sitio web utiliza los siguientes tipos de cookies:</p>
        <ul style={ulStyle}>
          <li><strong>Cookies estrictamente necesarias:</strong> requeridas para que el sitio web funcione correctamente (p. ej., gestión de sesiones, seguridad).</li>
          <li><strong>Cookies de análisis:</strong> nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web (Google Analytics). Los datos son agregados y anonimizados.</li>
          <li><strong>Cookies de marketing:</strong> usadas para rastrear a los visitantes en todos los sitios web con fines publicitarios (Facebook Pixel, Google Ads).</li>
        </ul>
        <p>
          Puede controlar las cookies a través de la configuración de su navegador. La mayoría de los navegadores le permiten rechazar cookies, eliminar cookies existentes o recibir notificaciones cuando se establece una cookie. Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad de nuestro sitio web.
        </p>
      </Section>

      {/* ── 7 ── */}
      <Section title="7. Seguridad de Datos">
        <p>
          Implementamos medidas de seguridad técnicas y organizativas estándar de la industria para proteger su información personal contra el acceso, divulgación, alteración o destrucción no autorizados. Estas medidas incluyen:
        </p>
        <ul style={ulStyle}>
          <li>Cifrado SSL/TLS para todos los datos transmitidos hacia y desde nuestro sitio web</li>
          <li>Infraestructura de alojamiento segura a través de Vercel con seguridad de nivel empresarial</li>
          <li>Controles de acceso que limitan quién dentro de nuestra práctica puede acceder a los datos de los pacientes</li>
          <li>Revisiones y actualizaciones de seguridad periódicas</li>
        </ul>
        <p>
          Ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por usar medios comercialmente aceptables para proteger su información, no podemos garantizar seguridad absoluta. En caso de una violación de datos que afecte su información personal, le notificaremos según lo requiera la ley aplicable.
        </p>
      </Section>

      {/* ── 8 ── */}
      <Section title="8. Retención de Datos">
        <p>
          Conservamos la información personal recopilada a través de nuestro sitio web durante el tiempo necesario para cumplir con los fines descritos en esta política, o según lo requiera la ley. Los registros de salud de los pacientes se conservan de acuerdo con los requisitos de la ley estatal de Texas para proveedores de atención médica (un mínimo de 10 años para pacientes adultos, o hasta los 21 años para pacientes menores de edad, lo que sea más largo). Los datos de análisis del sitio web se conservan durante un período de 26 meses.
        </p>
      </Section>

      {/* ── 9 ── */}
      <Section title="9. Sus Derechos de Privacidad">
        <p>Dependiendo de su ubicación y la ley aplicable, usted puede tener los siguientes derechos con respecto a su información personal:</p>
        <ul style={ulStyle}>
          <li><strong>Acceso:</strong> solicitar una copia de la información personal que tenemos sobre usted.</li>
          <li><strong>Corrección:</strong> solicitar la corrección de información inexacta o incompleta.</li>
          <li><strong>Eliminación:</strong> solicitar la eliminación de su información personal, sujeto a ciertas excepciones legales.</li>
          <li><strong>Exclusión de marketing:</strong> cancelar la suscripción a correos electrónicos de marketing en cualquier momento usando el enlace de cancelación en cualquier correo electrónico o comunicándose con nosotros directamente.</li>
          <li><strong>Portabilidad de datos:</strong> solicitar una copia de sus datos en un formato portátil cuando sea técnicamente factible.</li>
        </ul>
        <p>
          <strong>Residentes de Texas:</strong> La ley de Texas otorga ciertos derechos de privacidad a los residentes. Puede enviar una solicitud para ejercer cualquiera de los derechos anteriores comunicándose con nosotros usando la información en la Sección 12.
        </p>
        <p>
          <strong>Derechos HIPAA (Pacientes):</strong> Como paciente, usted tiene derechos adicionales con respecto a su Información de Salud Protegida según se describe en nuestro Aviso de Prácticas de Privacidad, incluyendo el derecho a acceder, enmendar y solicitar restricciones sobre las divulgaciones de su información de salud.
        </p>
      </Section>

      {/* ── 10 ── */}
      <Section title="10. Privacidad de los Niños">
        <p>
          Nuestro sitio web no está dirigido a niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años sin el consentimiento verificable de los padres. Si usted es padre o tutor y cree que su hijo nos ha proporcionado información personal, comuníquese con nosotros de inmediato y tomaremos medidas para eliminar dicha información.
        </p>
        <p>
          Para pacientes pediátricos de quiropráctica menores de 18 años, toda la programación en línea y el envío de formularios deben ser completados por un padre o tutor legal.
        </p>
      </Section>

      {/* ── 11 ── */}
      <Section title="11. Enlaces a Terceros">
        <p>
          Nuestro sitio web puede contener enlaces a sitios web de terceros, incluyendo plataformas de programación, sitios de reseñas, perfiles de redes sociales y portales de seguros. Esta Política de Privacidad aplica únicamente a nuestro sitio web. No somos responsables de las prácticas de privacidad de sitios web de terceros y le recomendamos revisar sus políticas de privacidad antes de proporcionar cualquier información personal.
        </p>
      </Section>

      {/* ── 12 ── */}
      <Section title="12. Contáctenos">
        <p>Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad o nuestras prácticas de privacidad, comuníquese con nosotros:</p>
        <div style={{ background: "#f4f8fc", border: "1px solid #dde6ec", borderRadius: 6, padding: "20px 24px", margin: "16px 0", fontSize: 15 }}>
          <strong>Pura Vida Chiropractic</strong><br />
          Dr. Dan Foss, DC<br />
          2318 NW Military Hwy, Suite 103<br />
          San Antonio, TX 78231<br /><br />
          <strong>Teléfono:</strong> (210) 685-1994<br />
          <strong>Correo electrónico:</strong> dfossdc@yahoo.com<br />
          <strong>Sitio web:</strong> puravidasanantonio.com
        </div>
        <p>
          Responderemos a todas las solicitudes relacionadas con la privacidad dentro de los 30 días posteriores a su recepción.
        </p>
      </Section>

      {/* ── 13 ── */}
      <Section title="13. Cambios a Esta Política de Privacidad">
        <p>
          Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas, tecnología, requisitos legales u otros factores. Cuando realicemos cambios importantes, actualizaremos la fecha de &ldquo;Última actualización&rdquo; en la parte superior de esta página. Le recomendamos revisar esta política periódicamente. Su uso continuado de nuestro sitio web después de cualquier cambio constituye su aceptación de la política actualizada.
        </p>
      </Section>

      <hr style={{ border: "none", borderTop: "1px solid #dde6ec", margin: "48px 0 24px" }} />
      <p style={{ fontSize: 13, color: "#777", textAlign: "center" }}>
        &copy; 2025 Pura Vida Chiropractic &mdash; San Antonio, TX &mdash; Todos los derechos reservados
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

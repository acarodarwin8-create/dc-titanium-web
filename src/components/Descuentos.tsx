const BENEFICIOS = [
  { titulo: "Grupos Profesionales", desc: "Inscríbete con 3+ colegas y obtén 15% de descuento grupal.", dato: "-15%" },
  { titulo: "Paquete Completo", desc: "Lleva 2 o más cursos y accede a precio de paquete especial.", dato: "-30%" },
  { titulo: "Alumni DC Titanium", desc: "Egresados obtienen 20% en todos los cursos siguientes.", dato: "-20%" },
];

export default function Descuentos() {
  return (
    <section id="descuentos" style={{ background: "#F8F5EF", padding: "6rem 2rem", borderTop: "1px solid #F0DBA0", borderBottom: "1px solid #F0DBA0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#B8952E", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            BENEFICIOS EXCLUSIVOS
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.5rem)", fontWeight: 800, color: "#0B0C10", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Invierte en tu desarrollo profesional
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
            Accede a descuentos exclusivos para ingenieros que toman su carrera en serio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem", marginBottom: "3rem" }}>
          {BENEFICIOS.map((b) => (
            <div
              key={b.titulo}
              className="card-glass-gold"
              style={{ background: "white", borderRadius: "14px", padding: "2rem", border: "1.5px solid #F0DBA0" }}
            >
              <span style={{ display: "inline-block", fontSize: "2.1rem", fontWeight: 900, color: "#B8952E", fontFamily: "JetBrains Mono,monospace", letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
                {b.dato}
              </span>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0B0C10", marginBottom: "0.75rem" }}>{b.titulo}</h3>
              <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.95rem 2.25rem", borderRadius: "10px", background: "#25D366", color: "white", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(37,211,102,0.35)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.44.79 3.06 1.2 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z" />
            </svg>
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

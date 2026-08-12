const BULLETS = [
  "Proyectos reales bajo ACI 318-25 y NEC-SE-DS",
  "Herramientas de producción profesional",
  "Scripts y automatización que ahorran horas de trabajo",
  "Comunidad activa de ingenieros en Ecuador",
];

const METRICAS = [
  { v: "+5", l: "AÑOS" },
  { v: "+87", l: "SCRIPTS" },
  { v: "+312", l: "ESTUDIANTES" },
  { v: "+9", l: "PROYECTOS" },
];

function CheckDorado() {
  return (
    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "#FEF9EE", border: "1px solid #F0DBA0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8952E" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

export default function QuienesSomos() {
  return (
    <section id="conocenos" style={{ background: "#FFFFFF", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* IZQUIERDA */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              SOBRE NOSOTROS
            </p>
            <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 800, color: "#0B0C10", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              No enseñamos teoría de libro de texto.
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#4B5563", marginBottom: "2rem" }}>
              Enseñamos la práctica de la oficina de diseño a la obra real. Fundada por ingenieros en ejercicio, DC Titanium Builders nace para cerrar la brecha entre el modelado digital y la seguridad estructural de alto rendimiento.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.25rem" }}>
              {BULLETS.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <CheckDorado />
                  <span style={{ fontSize: "0.95rem", color: "#374151", fontWeight: 500 }}>{b}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              style={{ display: "inline-block", padding: "0.9rem 2.1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", color: "white", background: "linear-gradient(135deg,#B8952E,#D4AF72)", boxShadow: "0 4px 16px rgba(180,149,46,0.35)", textDecoration: "none" }}
            >
              Conoce Nuestra Historia
            </a>
          </div>

          {/* DERECHA */}
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
              <div style={{ position: "relative", width: "300px", height: "300px", maxWidth: "100%" }}>
                <div style={{ position: "absolute", inset: "-16px", borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,114,0.25),transparent 70%)" }} />
                <img
                  src="/Logo_V8_Premium_Serio.png"
                  alt="DC Titanium Builders"
                  width={300}
                  height={300}
                  className="tilt-3d-soft"
                  style={{ position: "relative", width: "300px", height: "300px", maxWidth: "100%", borderRadius: "50%", objectFit: "cover", border: "3px solid #D4AF72", boxShadow: "0 20px 50px rgba(180,149,46,0.25)" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2" style={{ gap: "1.5rem" }}>
              {METRICAS.map((m) => (
                <div key={m.l} style={{ textAlign: "center", background: "#F8F5EF", borderRadius: "12px", padding: "1.5rem 1rem", border: "1px solid #F0DBA0" }}>
                  <p style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", fontWeight: 900, color: "#B8952E", fontFamily: "JetBrains Mono,monospace", letterSpacing: "-0.02em", marginBottom: "0.3rem" }}>
                    {m.v}
                  </p>
                  <p style={{ fontSize: "0.7rem", color: "#6B7280", fontWeight: 600, letterSpacing: "0.04em" }}>{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { testimonios, resumenResenas } from "@/content/testimonios";

function Estrellas() {
  return (
    <div style={{ display: "flex", gap: "0.15rem", color: "#D4AF72" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Resenas() {
  return (
    <section id="resenas" style={{ background: "#F8F9FA", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]" style={{ gap: "3rem" }}>
          {/* IZQUIERDA */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              OPINIONES
            </p>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0B0C10", marginBottom: "0.75rem" }}>{resumenResenas.calificacion}</h3>
            <Estrellas />
            <p style={{ fontSize: "0.9rem", color: "#6B7280", marginTop: "0.75rem" }}>
              A base de {resumenResenas.totalResenas} reseñas — <strong style={{ color: "#374151" }}>{resumenResenas.fuente}</strong>
            </p>
          </div>

          {/* DERECHA — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
            {testimonios.map((r) => (
              <div key={r.nombre} className="card-glass-gold" style={{ background: "white", borderRadius: "14px", border: "1px solid #EEECE6", padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg,#D4AF72,#B8952E)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>
                    {r.nombre.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0B0C10" }}>{r.nombre}</p>
                    <p style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{r.fecha}</p>
                  </div>
                </div>
                <Estrellas />
                <p style={{ fontSize: "0.85rem", color: "#4B5563", lineHeight: 1.7, marginTop: "0.9rem" }}>{r.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

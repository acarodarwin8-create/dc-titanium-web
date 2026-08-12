import { BENEFICIOS_ITEMS as ITEMS } from "@/content/empresa";

export default function Beneficios() {
  return (
    <section id="comunidad" style={{ background: "#0B0C10", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            VENTAJA COMPETITIVA
          </p>
          <h2 style={{ fontSize: "clamp(1.9rem,3vw,2.5rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em" }}>
            Por qué elegir DC Titanium Builders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem" }}>
          {ITEMS.map((it) => (
            <div
              key={it.titulo}
              className="card-glass-gold"
              style={{ background: "#141821", border: "1px solid rgba(212,175,114,0.25)", borderRadius: "14px", padding: "2rem 1.5rem" }}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(212,175,114,0.12)", border: "1px solid rgba(212,175,114,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", color: "#D4AF72", marginBottom: "1.5rem" }}>
                {it.icono}
              </div>
              <h3 style={{ fontSize: "0.85rem", fontWeight: 700, color: "white", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>{it.titulo}</h3>
              <p style={{ fontSize: "0.85rem", color: "#9CA3AF", lineHeight: 1.7 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

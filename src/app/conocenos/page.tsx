import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conócenos",
  description: "DC Titanium Builders S.A. — la firma que construye ingenieros de producción.",
};

const PROYECTO_STATS = [
  { label: "Pisos", valor: "9 + subsuelo" },
  { label: "Sistema", valor: "SMF" },
  { label: "Zona sísmica", valor: "VI" },
  { label: "Normativa", valor: "ACI 318-25" },
];

const STATS = [
  { valor: "5,956", label: "vigas analizadas" },
  { valor: "0.0187 OK", label: "deriva máxima" },
  { valor: "87+", label: "scripts en producción" },
];

const SOFTWARE_LAB = [
  { nombre: "TB Script PRO", desc: "Automatización despiece acero Revit" },
  { nombre: "CivilControl Pro", desc: "Metrados y presupuestos automatizados" },
  { nombre: "Titanium Hydro", desc: "Cálculo redes hidrosanitarias NEC-HS" },
];

export default function ConocenosPage() {
  return (
    <main style={{ background: "#0A0A0F", minHeight: "100vh", paddingTop: "108px" }}>
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#8B949E", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "#8B949E", textDecoration: "none" }}>Inicio</Link>
          <span>›</span>
          <span style={{ color: "#C9A84C" }}>Conócenos</span>
        </div>

        <span className="tb-badge-norm">DC TITANIUM BUILDERS S.A.</span>

        <h1 style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.15, margin: "1.25rem 0 3.5rem" }}>
          La firma que construye <span style={{ color: "#C9A84C" }}>ingenieros de producción</span>
        </h1>

        {/* Mision / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem", marginBottom: "4rem" }}>
          <div className="tb-glass-card" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#C9A84C", marginBottom: "1rem" }}>Misión</h2>
            <p style={{ fontSize: "0.95rem", color: "#E6EDF3", lineHeight: 1.75 }}>
              Cerrar la brecha entre el modelado digital y la seguridad estructural de alto rendimiento, formando ingenieros capaces de resolver proyectos reales bajo normativa vigente, no ejercicios de aula.
            </p>
          </div>
          <div className="tb-glass-card" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#C9A84C", marginBottom: "1rem" }}>Visión</h2>
            <p style={{ fontSize: "0.95rem", color: "#E6EDF3", lineHeight: 1.75 }}>
              Ser la referencia de formación en ingeniería estructural y BIM del Ecuador, con una comunidad de ingenieros de producción reconocidos por la calidad técnica de su trabajo.
            </p>
          </div>
        </div>

        {/* Proyecto flagship */}
        <div className="tb-glass-card" style={{ padding: "2.5rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono,monospace", color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>PROYECTO FLAGSHIP</p>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.5rem" }}>Edificio Titanium Quitumbe</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "1.25rem" }}>
            {PROYECTO_STATS.map((s) => (
              <div key={s.label} style={{ padding: "1rem", borderRadius: "10px", background: "#161B22", border: "1px solid #21262D" }}>
                <p style={{ fontSize: "0.65rem", color: "#8B949E", marginBottom: "0.35rem" }}>{s.label}</p>
                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF" }}>{s.valor}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1.5rem", marginBottom: "4rem" }}>
          {STATS.map((s) => (
            <div key={s.label} className="tb-glass-card" style={{ padding: "1.5rem", textAlign: "center" }}>
              <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace", marginBottom: "0.3rem" }}>{s.valor}</p>
              <p style={{ fontSize: "0.78rem", color: "#8B949E" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Software Lab */}
        <p style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono,monospace", color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>SOFTWARE LAB</p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.25rem", marginBottom: "4rem" }}>
          {SOFTWARE_LAB.map((s) => (
            <div key={s.nombre} className="tb-glass-card" style={{ padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>{s.nombre}</h3>
              <p style={{ fontSize: "0.85rem", color: "#8B949E", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://tiktok.com/@titanium_building"
            target="_blank"
            rel="noopener noreferrer"
            className="tb-glass-card"
            style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 600 }}
          >
            TikTok @titanium_building
          </a>
          <a
            href="https://youtube.com/@DCTitaniumBuilders"
            target="_blank"
            rel="noopener noreferrer"
            className="tb-glass-card"
            style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 600 }}
          >
            YouTube @DCTitaniumBuilders
          </a>
        </div>
      </section>
    </main>
  );
}

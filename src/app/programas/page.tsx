import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programas de Especialización",
  description: "Rutas de formación completas con proyectos reales bajo normativa ACI 318-25 y NEC-SE-DS.",
};

type Programa = {
  icono: string;
  titulo: string;
  normativa: string[];
  software: string[];
  duracion: string;
  horas: string;
  descripcion: string;
  modulos: string;
  lecciones: string;
  precio: string;
  href: string;
};

const PROGRAMAS: Programa[] = [
  {
    icono: "🏛️",
    titulo: "Máster Ingeniería Estructural Sísmica",
    normativa: ["ACI 318-25", "NEC-SE-DS"],
    software: ["ETABS", "SAP2000", "SAFE"],
    duracion: "6 meses",
    horas: "240 horas",
    descripcion: "Domina el diseño sísmico completo desde predimensionamiento hasta despiece automatizado",
    modulos: "8 módulos",
    lecciones: "48 lecciones",
    precio: "desde $399 USD",
    href: "/programas/master-estructural",
  },
  {
    icono: "🔷",
    titulo: "Especialización BIM 360",
    normativa: ["Autodesk Certified", "ISO 19650"],
    software: ["Revit", "Navisworks", "CYPE", "Speckle"],
    duracion: "4 meses",
    horas: "160 horas",
    descripcion: "Gestión BIM federada desde modelado hasta coordinación de especialidades y entrega digital",
    modulos: "6 módulos",
    lecciones: "36 lecciones",
    precio: "desde $299 USD",
    href: "/programas/especializacion-bim",
  },
  {
    icono: "⚡",
    titulo: "Diplomado Automatización AEC",
    normativa: ["Python", "C#", "Dynamo"],
    software: ["Python", "Dynamo", "C#", "Revit API"],
    duracion: "3 meses",
    horas: "120 horas",
    descripcion: "Automatiza planos, metrados y despiece con scripts profesionales de producción real",
    modulos: "5 módulos",
    lecciones: "30 lecciones",
    precio: "desde $199 USD",
    href: "/programas/diplomado-automatizacion",
  },
];

const STATS = [
  { valor: "312+", label: "Ingenieros" },
  { valor: "95%", label: "Empleabilidad" },
  { valor: "ACI 318-25", label: "Normativa" },
  { valor: "100%", label: "Proyectos Reales" },
];

export default function ProgramasPage() {
  return (
    <main style={{ background: "#0A0A0F", minHeight: "100vh", paddingTop: "108px" }}>
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#8B949E", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "#8B949E", textDecoration: "none" }}>Inicio</Link>
          <span>›</span>
          <span style={{ color: "#C9A84C" }}>Programas</span>
        </div>

        <span className="tb-badge-norm">FORMACIÓN ESPECIALIZADA AEC</span>

        <h1 style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.1, margin: "1.25rem 0 1.25rem" }}>
          Programas de <span style={{ color: "#C9A84C" }}>Especialización</span> Elite
        </h1>

        <p style={{ fontSize: "1.05rem", color: "#8B949E", maxWidth: "620px", lineHeight: 1.75, marginBottom: "2rem" }}>
          Rutas de formación completas con proyectos reales bajo normativa ACI 318-25 y NEC-SE-DS.
        </p>

        <div className="tb-gold-line" style={{ marginBottom: "3.5rem" }} />

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem", marginBottom: "5rem" }}>
          {PROGRAMAS.map((p) => (
            <div key={p.titulo} className="tb-glass-card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>{p.icono}</span>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                {p.normativa.map((n) => (
                  <span key={n} className="tb-badge-norm">{n}</span>
                ))}
              </div>

              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem", lineHeight: 1.35 }}>{p.titulo}</h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                {p.software.map((s) => (
                  <span key={s} style={{ fontSize: "0.68rem", fontWeight: 600, fontFamily: "JetBrains Mono,monospace", color: "#8B949E", background: "#161B22", border: "1px solid #21262D", borderRadius: "999px", padding: "0.2rem 0.6rem" }}>{s}</span>
                ))}
              </div>

              <p style={{ fontSize: "0.78rem", color: "#8B949E", marginBottom: "1rem" }}>{p.duracion} | {p.horas}</p>

              <p style={{ fontSize: "0.88rem", color: "#E6EDF3", lineHeight: 1.65, marginBottom: "1.25rem" }}>{p.descripcion}</p>

              <p style={{ fontSize: "0.75rem", color: "#8B949E", marginBottom: "1.5rem" }}>{p.modulos} | {p.lecciones}</p>

              <div style={{ marginTop: "auto" }}>
                <p style={{ fontSize: "1.05rem", fontWeight: 800, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace", marginBottom: "1rem" }}>{p.precio}</p>
                <Link href={p.href} className="tb-btn-primary" style={{ textDecoration: "none", display: "block", textAlign: "center" }}>
                  Ver Temario Completo →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "1rem" }}>
            POR QUÉ ELEGIR UN PROGRAMA MASTER
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem", marginBottom: "4rem" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace", marginBottom: "0.3rem" }}>{s.valor}</p>
              <p style={{ fontSize: "0.75rem", color: "#8B949E" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="tb-glass-card" style={{ padding: "2.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "1.5rem" }}>¿No sabes qué programa elegir?</h2>
          <a
            href="https://wa.me/593999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.85rem 2rem", borderRadius: "999px", background: "#25D366", color: "white", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
          >
            Habla con un Asesor por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

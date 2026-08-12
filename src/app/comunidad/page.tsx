import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "El ecosistema de ingenieros de elite de DC Titanium Builders.",
};

type Item = {
  icono: string;
  titulo: string;
  descripcion: string;
  dato: string;
  cta: string;
  href: string;
  externo?: boolean;
};

const ITEMS: Item[] = [
  {
    icono: "📚",
    titulo: "Biblioteca Premium",
    descripcion: "Plantillas .RTE, Scripts Dynamo, Memorias de cálculo",
    dato: "300+ recursos | Actualización mensual",
    cta: "Acceder Gratis →",
    href: "/comunidad/biblioteca",
  },
  {
    icono: "💬",
    titulo: "Foro Técnico",
    descripcion: "Consultas estructurales, resolución entre pares",
    dato: "+1,200 consultas resueltas",
    cta: "Unirse al Foro →",
    href: "/comunidad/foro",
  },
  {
    icono: "🎓",
    titulo: "Galería de Proyectos",
    descripcion: "Proyectos reales de egresados DC Titanium",
    dato: "Portafolio de alumnos",
    cta: "Ver Galería →",
    href: "/comunidad/galeria",
  },
  {
    icono: "📺",
    titulo: "Canal YouTube",
    descripcion: "Tutoriales gratuitos semanales",
    dato: "@DCTitaniumBuilders | +87 videos",
    cta: "Suscribirse →",
    href: "https://youtube.com/@DCTitaniumBuilders",
    externo: true,
  },
];

export default function ComunidadPage() {
  return (
    <main style={{ background: "#0A0A0F", minHeight: "100vh", paddingTop: "108px" }}>
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#8B949E", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "#8B949E", textDecoration: "none" }}>Inicio</Link>
          <span>›</span>
          <span style={{ color: "#C9A84C" }}>Comunidad</span>
        </div>

        <span className="tb-badge-norm">COMUNIDAD DC TITANIUM</span>

        <h1 style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.15, margin: "1.25rem 0 3.5rem" }}>
          El ecosistema de <span style={{ color: "#C9A84C" }}>ingenieros de élite</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
          {ITEMS.map((it) => (
            <div key={it.titulo} className="tb-glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{it.icono}</span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem" }}>{it.titulo}</h3>
              <p style={{ fontSize: "0.95rem", color: "#8B949E", lineHeight: 1.7, marginBottom: "1rem" }}>{it.descripcion}</p>
              <p style={{ fontSize: "0.75rem", color: "#C9A84C", fontFamily: "JetBrains Mono,monospace", marginBottom: "1.5rem" }}>{it.dato}</p>
              <Link
                href={it.href}
                target={it.externo ? "_blank" : undefined}
                rel={it.externo ? "noopener noreferrer" : undefined}
                className="tb-btn-primary"
                style={{ textDecoration: "none", display: "inline-block", marginTop: "auto", width: "fit-content" }}
              >
                {it.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

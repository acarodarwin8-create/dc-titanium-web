"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Capa } from "./BuildingCanvas3D";
import { HERO_NORMATIVAS as NORMATIVAS, HERO_METRICAS as METRICAS, HERO_SOFTWARE_STACK as SOFTWARE, HERO_CAPAS as CAPAS } from "@/content/empresa";
import { CURSO_MAS_POPULAR } from "@/content/cursos";
import { programas } from "@/content/programas";
import { SOFTWARE_ICONOS } from "./SoftwareIcons";
import { IMAGENES } from "@/lib/imagenes";

const BuildingCanvas3D = dynamic(() => import("./BuildingCanvas3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0D1117]">
      <span style={{ width: "28px", height: "28px", border: "2px solid #21262D", borderTopColor: "#C9A84C", borderRadius: "50%" }} className="animate-spin" />
    </div>
  ),
});

type Slide = { tipo: "imagen" } | { tipo: "texto"; eyebrow: string; titulo: string; sub: string };

const programaDestacado = programas[0];

const SLIDES: Slide[] = [
  { tipo: "imagen" },
  {
    tipo: "texto",
    eyebrow: "CURSO MÁS POPULAR",
    titulo: CURSO_MAS_POPULAR.nombre,
    sub: `${CURSO_MAS_POPULAR.estudiantes}+ estudiantes certificados · desde $${CURSO_MAS_POPULAR.precio} USD`,
  },
  {
    tipo: "texto",
    eyebrow: "SOFTWARE LAB",
    titulo: "Domina ETABS, Revit y Advance Steel",
    sub: "Herramientas de producción profesional, no de salón de clases.",
  },
  {
    tipo: "texto",
    eyebrow: "PROGRAMAS MÁSTER",
    titulo: programaDestacado.nombre,
    sub: `${programaDestacado.duracion} · ${programaDestacado.descripcion}`,
  },
];

export default function Hero() {
  const [capa, setCapa] = useState<Capa>("analitico");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="w-full" style={{ background: "#0A0A0F" }}>
      {/* BLOQUE SUPERIOR — carrusel edge-to-edge. aspectRatio respeta la proporción real
          del banner (2752x1536) para que object-fit:cover nunca recorte el texto
          "DC TITANIUM BUILDERS" incrustado en la imagen en pantallas angostas;
          maxHeight limita el alto en desktop igual que antes. */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "2752 / 1536", maxHeight: "70vh", overflow: "hidden" }}>
        {SLIDES.map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: slide === i ? 1 : 0,
              transition: "opacity 0.7s ease",
              pointerEvents: slide === i ? "auto" : "none",
            }}
          >
            {s.tipo === "imagen" ? (
              <>
                <Image
                  src={IMAGENES.hero.slide1}
                  alt="DC Titanium Builders — la ingeniería del mañana, edificada hoy"
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-gradient-to-b from-[#0A0A0F]/20 via-transparent to-[#0A0A0F]" style={{ position: "absolute", inset: 0 }} />
              </>
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0A0A0F 0%,#161B22 60%,#0A0A0F 100%)", display: "flex", alignItems: "center" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%", padding: "0 1.5rem", paddingBottom: "3rem" }}>
                  <span className="tb-badge-norm">{s.eyebrow}</span>
                  <h2 className="text-2xl md:text-4xl font-black" style={{ color: "#FFFFFF", margin: "0.9rem 0 0.6rem", maxWidth: "720px", lineHeight: 1.2 }}>
                    {s.titulo}
                  </h2>
                  <p className="text-sm md:text-base" style={{ color: "#8B949E", maxWidth: "560px" }}>{s.sub}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* La imagen ya trae "DC TITANIUM BUILDERS" y el tagline incrustados: solo agregamos los badges de normativa, sin repetir el texto. Se mantienen visibles en todos los slides. */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 1.5rem 3rem", zIndex: 2, pointerEvents: "none" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {NORMATIVAS.map((n) => (
                <span key={n} className="tb-badge-norm">{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div style={{ position: "absolute", right: "1.5rem", bottom: "1.25rem", display: "flex", gap: "0.4rem", zIndex: 3 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={"Ver slide " + (i + 1)}
              onClick={() => setSlide(i)}
              style={{
                width: slide === i ? "22px" : "7px",
                height: "7px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                background: slide === i ? "#C9A84C" : "rgba(255,255,255,0.35)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* BLOQUE INFERIOR */}
      <div className="max-w-7xl mx-auto" style={{ padding: "4rem 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: "3.5rem", alignItems: "center" }}>
          {/* IZQUIERDA — 60% */}
          <div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight" style={{ letterSpacing: "-0.02em", marginBottom: "1.25rem", color: "#FFFFFF" }}>
              La ingeniería estructural del{" "}
              <span className="text-[#C9A84C]">futuro,</span> calculada hoy.
            </h1>

            <p className="text-[#8B949E] text-sm md:text-base" style={{ lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "540px" }}>
              Capacítate en Cálculo Estructural, BIM y Automatización con proyectos reales bajo normativa ACI 318-25 y NEC-SE-DS. Herramientas de producción, no de salón de clases.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
              <a href="#cursos" className="tb-btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
                Acelera tu Carrera Estructural
              </a>
              <a
                href="#cursos"
                className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0F]"
                style={{ padding: "0.75rem 1.5rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease" }}
              >
                Ver Programas Master
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", paddingBottom: "1.5rem", borderBottom: "1px solid #21262D" }}>
              {METRICAS.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace" }}>{m.valor}</span>
                  <span style={{ fontSize: "0.7rem", color: "#8B949E", textTransform: "uppercase", letterSpacing: "0.06em" }}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA — 40%: viewport 3D */}
          <div>
            <div className="tb-glass-card" style={{ height: "420px", overflow: "hidden" }}>
              <BuildingCanvas3D capa={capa} />
            </div>

            <div className="backdrop-blur-md bg-[#161B22]/60 border border-[#21262D] rounded-xl" style={{ display: "flex", gap: "0.25rem", padding: "0.3rem", marginTop: "0.85rem" }}>
              {CAPAS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCapa(c.id)}
                  className={
                    capa === c.id
                      ? "bg-[#C9A84C] text-[#0A0A0F] rounded-lg font-medium text-sm"
                      : "text-[#8B949E] hover:text-white rounded-lg text-sm"
                  }
                  style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", padding: "0.5rem", border: "none", cursor: "pointer", background: capa === c.id ? undefined : "transparent", transition: "all 0.2s" }}
                >
                  <span>{c.icono}</span>
                  <span className="hidden sm:inline">{c.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH STACK ROW */}
      <div style={{ background: "#0D1117", borderTop: "1px solid #C9A84C" }}>
        <div className="max-w-7xl mx-auto" style={{ padding: "1.75rem 1.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
          {SOFTWARE.map((s) => {
            const icono = SOFTWARE_ICONOS[s];
            return (
              <span
                key={s}
                className="bg-[#161B22] border border-[#21262D] text-[#8B949E] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.4rem 1.1rem 0.4rem 0.4rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 600, fontFamily: "JetBrains Mono,monospace", transition: "all 0.2s" }}
              >
                {icono && (
                  <span
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: icono.color + "1a",
                      border: "1px solid " + icono.color + "40",
                      color: icono.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <icono.Icono width={14} height={14} />
                  </span>
                )}
                {s}
              </span>
            );
          })}
        </div>
      </div>

      {/* Divisor sutil de cierre */}
      <div style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }} />
    </section>
  );
}

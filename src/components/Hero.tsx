"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const BuildingCanvas3D = dynamic(() => import("./BuildingCanvas3D"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0D1117" }}>
      <span style={{ width: "28px", height: "28px", border: "2px solid #21262D", borderTopColor: "#C9A84C", borderRadius: "50%" }} className="animate-spin" />
    </div>
  ),
});

const METRICAS = [
  { valor: "5,956", label: "vigas" },
  { valor: "9", label: "pisos" },
  { valor: "ACI 318-25", label: "normativa" },
  { valor: "VI", label: "zona sísmica" },
];

const SOFTWARE = ["ETABS", "Revit", "Advance Steel", "Dynamo", "Python"];

function EstrellaDorada() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#D4AF72">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Hero() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = bannerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      setOffset((clamped - 0.5) * 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" style={{ background: "#FBFBFD", paddingTop: "108px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "linear-gradient(135deg,#FBFBFD 0%,#F8F5EF 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "5%", right: "5%", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,114,0.10) 0%,transparent 70%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 2rem 5rem", width: "100%" }}>
        {/* Portada / banner de marca */}
        <div
          ref={bannerRef}
          className="tilt-3d-soft"
          style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 30px 70px rgba(11,12,16,0.28)", marginBottom: "3.5rem", background: "#0B0C10" }}
        >
          <img
            src="/Gemini_Generated_Image_kq0x2ukq0x2ukq0x.png"
            alt="DC Titanium Builders — La ingenieria del manana, edificada hoy"
            style={{ width: "100%", height: "auto", display: "block", transform: `translateY(${offset}px) scale(1.08)`, transition: "transform 0.05s linear" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: "3.5rem", alignItems: "center" }}>
          {/* IZQUIERDA — 60% */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", padding: "0.45rem 1rem", borderRadius: "999px", background: "#FEF9EE", border: "1px solid #F0DBA0", marginBottom: "1.75rem" }}>
              <span className="animate-pulse" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D4AF72", display: "inline-block" }} />
              <EstrellaDorada />
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#92400E", letterSpacing: "0.04em" }}>
                +312 ingenieros capacitados en Ecuador
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "#0B0C10" }}>
              La ingeniería estructural del{" "}
              <span style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A,#F0DFAE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                futuro
              </span>
              , calculada hoy.
            </h1>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#4B5563", marginBottom: "2.25rem", maxWidth: "540px" }}>
              Capacítate en Cálculo Estructural, BIM y Automatización con proyectos reales bajo normativa ACI 318-25 y NEC-SE-DS. Herramientas de producción, no de salón de clases.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.75rem" }}>
              <a href="#cursos" style={{ padding: "0.9rem 2.1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", color: "white", background: "linear-gradient(135deg,#B8952E,#D4AF72)", boxShadow: "0 4px 16px rgba(180,149,46,0.35)", textDecoration: "none", display: "inline-block" }}>
                Acelera tu Carrera Estructural
              </a>
              <a href="#cursos" style={{ padding: "0.9rem 2.1rem", borderRadius: "8px", fontWeight: 600, fontSize: "0.9rem", color: "#0B0C10", background: "transparent", border: "1.5px solid #0B0C10", textDecoration: "none", display: "inline-block" }}>
                Ver Programas Master
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", paddingBottom: "2rem", marginBottom: "2rem", borderBottom: "1px solid #EEECE6" }}>
              {METRICAS.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#B8952E", fontFamily: "JetBrains Mono,monospace" }}>{m.valor}</span>
                  <span style={{ fontSize: "0.78rem", color: "#6B7280" }}>{m.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {SOFTWARE.map((s) => (
                <span key={s} style={{ padding: "0.4rem 0.9rem", borderRadius: "6px", background: "#F8F9FA", border: "1px solid #EEECE6", fontSize: "0.75rem", fontWeight: 600, color: "#374151", fontFamily: "JetBrains Mono,monospace" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* DERECHA — 40%: viewport 3D del edificio */}
          <div className="tilt-3d" style={{ position: "relative", height: "480px", borderRadius: "16px", overflow: "hidden", background: "#0B0C10", border: "1px solid #1E293B", boxShadow: "0 24px 60px rgba(11,12,16,0.3)" }}>
            <BuildingCanvas3D />
          </div>
        </div>
      </div>
    </section>
  );
}

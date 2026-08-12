"use client";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Capa } from "./BuildingCanvas3D";
import { HERO_NORMATIVAS as NORMATIVAS, HERO_METRICAS as METRICAS, HERO_SOFTWARE_STACK as SOFTWARE, HERO_CAPAS as CAPAS } from "@/content/empresa";

const BuildingCanvas3D = dynamic(() => import("./BuildingCanvas3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0D1117]">
      <span style={{ width: "28px", height: "28px", border: "2px solid #21262D", borderTopColor: "#C9A84C", borderRadius: "50%" }} className="animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const [capa, setCapa] = useState<Capa>("analitico");

  return (
    <section id="inicio" className="w-full" style={{ background: "#0A0A0F" }}>
      {/* BLOQUE SUPERIOR — imagen edge-to-edge */}
      <div style={{ position: "relative", width: "100%", height: "85vh" }}>
        <Image
          src="/Gemini_Generated_Image_kq0x2ukq0x2ukq0x.png"
          alt="DC Titanium Builders — la ingeniería del mañana, edificada hoy"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="bg-gradient-to-b from-[#0A0A0F]/20 via-transparent to-[#0A0A0F]" style={{ position: "absolute", inset: 0 }} />

        {/* La imagen ya trae "DC TITANIUM BUILDERS" y el tagline incrustados: solo agregamos los badges de normativa, sin repetir el texto. */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "0 1.5rem 3rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {NORMATIVAS.map((n) => (
                <span key={n} className="tb-badge-norm">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOQUE INFERIOR */}
      <div className="max-w-7xl mx-auto" style={{ padding: "4rem 1.5rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]" style={{ gap: "3.5rem", alignItems: "center" }}>
          {/* IZQUIERDA — 60% */}
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight" style={{ letterSpacing: "-0.02em", marginBottom: "1.5rem", color: "#FFFFFF" }}>
              La ingeniería estructural del{" "}
              <span className="text-[#C9A84C]">futuro,</span> calculada hoy.
            </h1>

            <p className="text-[#8B949E] text-lg" style={{ lineHeight: 1.75, marginBottom: "2.25rem", maxWidth: "540px" }}>
              Capacítate en Cálculo Estructural, BIM y Automatización con proyectos reales bajo normativa ACI 318-25 y NEC-SE-DS. Herramientas de producción, no de salón de clases.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.75rem" }}>
              <a href="#cursos" className="tb-btn-primary" style={{ textDecoration: "none", display: "inline-block" }}>
                Acelera tu Carrera Estructural
              </a>
              <a
                href="#cursos"
                className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0F]"
                style={{ padding: "0.75rem 2rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease" }}
              >
                Ver Programas Master
              </a>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", paddingBottom: "2rem", borderBottom: "1px solid #21262D" }}>
              {METRICAS.map((m) => (
                <div key={m.label} style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace" }}>{m.valor}</span>
                  <span style={{ fontSize: "0.78rem", color: "#8B949E" }}>{m.label}</span>
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
          {SOFTWARE.map((s) => (
            <span
              key={s}
              className="bg-[#161B22] border border-[#21262D] text-[#8B949E] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]"
              style={{ padding: "0.5rem 1.1rem", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 600, fontFamily: "JetBrains Mono,monospace", transition: "all 0.2s" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { CURSOS, NIVEL_COLOR } from "@/data/cursos";

const DETALLE: Record<number, { titulo: string; badge: string; tags: string[]; slug: string }> = {
  1: { titulo: "ETABS", badge: "CSI Certified", tags: ["SMF Sísmico", "Muros Cortante", "Análisis Espectral"], slug: "etabs-avanzado" },
  2: { titulo: "Revit Estructural", badge: "Autodesk Certified", tags: ["Modelado 3D", "TB Script PRO", "Despiece Auto"], slug: "revit-estructural" },
  3: { titulo: "Advance Steel", badge: "AISC 360/341", tags: ["Conexiones", "Soldadura", "Detallado BIM"], slug: "advance-steel" },
  5: { titulo: "Python & Dynamo", badge: "Automatización", tags: ["Scripts", "Revit API", "Metrados Auto"], slug: "python-dynamo" },
  4: { titulo: "SAP2000", badge: "CSI Certified", tags: ["Análisis Dinámico", "Espectral", "No Lineal"], slug: "sap2000" },
  6: { titulo: "ETABS + SAFE", badge: "Cimentaciones", tags: ["Zapatas", "Losas", "Plateas", "Resortes"], slug: "etabs-safe" },
};

const ORDEN_CARDS = [1, 2, 3, 5, 4, 6];
const NIVELES = ["Todos", "Básico", "Intermedio", "Avanzado", "Experto"];

export default function CursosPage() {
  const [filtro, setFiltro] = useState("Todos");

  const cursos = ORDEN_CARDS.map((id) => CURSOS.find((c) => c.id === id)!).filter((c) => filtro === "Todos" || c.nivel === filtro);

  return (
    <main style={{ background: "#0A0A0F", minHeight: "100vh", paddingTop: "108px" }}>
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <span className="tb-badge-norm">CURSOS POR SOFTWARE</span>

        <h1 style={{ fontSize: "clamp(2.25rem,4.5vw,3.5rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.15, margin: "1.25rem 0 2rem" }}>
          Domina las herramientas que <span style={{ color: "#C9A84C" }}>usa la industria</span>
        </h1>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {NIVELES.map((n) => (
            <button
              key={n}
              onClick={() => setFiltro(n)}
              className={filtro === n ? "bg-[#C9A84C] text-[#0A0A0F]" : "text-[#8B949E] hover:text-white"}
              style={{ padding: "0.5rem 1.1rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 600, border: filtro === n ? "1px solid #C9A84C" : "1px solid #21262D", background: filtro === n ? undefined : "#161B22", cursor: "pointer", transition: "all 0.2s" }}
            >
              {n}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
          {cursos.map((c) => {
            const d = DETALLE[c.id];
            const desc = c.original ? Math.round((1 - c.precio / c.original) * 100) : 0;
            return (
              <div key={c.id} className="tb-glass-card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace" }}>{d.titulo}</span>
                  <span style={{ fontSize: "0.6rem", fontWeight: 700, color: NIVEL_COLOR[c.nivel] || "#8B949E", border: "1px solid " + (NIVEL_COLOR[c.nivel] || "#8B949E"), borderRadius: "999px", padding: "0.15rem 0.55rem" }}>{c.nivel}</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.9rem" }}>
                  <span className="tb-badge-norm">{d.badge}</span>
                  <span style={{ fontSize: "0.72rem", color: "#8B949E", alignSelf: "center" }}>{c.horas}h</span>
                  <span style={{ fontSize: "0.72rem", color: "#8B949E", alignSelf: "center" }}>{c.lecciones} lecciones</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {d.tags.map((t) => (
                    <span key={t} style={{ fontSize: "0.7rem", color: "#E6EDF3", background: "#161B22", border: "1px solid #21262D", borderRadius: "6px", padding: "0.25rem 0.6rem" }}>{t}</span>
                  ))}
                </div>

                <div style={{ marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace" }}>${c.precio} USD</span>
                    {desc > 0 && <span style={{ fontSize: "0.85rem", color: "#8B949E", textDecoration: "line-through" }}>${c.original}</span>}
                  </div>
                  <Link href={"/cursos/" + d.slug} className="tb-btn-primary" style={{ textDecoration: "none", display: "block", textAlign: "center" }}>
                    Ver Hoja Técnica →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

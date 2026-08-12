"use client";
import { useState } from "react";

const IMAGENES = [
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600", label: "Edificio Titanium Quitumbe" },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600", label: "Torre Residencial SMF" },
];

export default function Portafolio() {
  const [activo, setActivo] = useState(0);

  return (
    <section id="portafolio" style={{ background: "#FFFFFF", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* IZQUIERDA */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              PROYECTOS REALES
            </p>
            <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 800, color: "#0A0A0A", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Portafolio de proyectos
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", marginBottom: "2rem" }}>
              Cada curso se construye a partir de proyectos ejecutados en la vida real: edificios sismorresistentes, torres residenciales y modelos BIM federados que nuestros estudiantes analizan paso a paso.
            </p>
            <a
              href="#contacto"
              style={{ display: "inline-block", padding: "0.9rem 2.1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", color: "white", background: "linear-gradient(135deg,#B8952E,#D4AF72)", boxShadow: "0 4px 16px rgba(180,149,46,0.35)", textDecoration: "none" }}
            >
              Ver Portafolio
            </a>
          </div>

          {/* DERECHA — slider */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: "18px", overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.12)", border: "1px solid #F0EDE8" }}>
              <img src={IMAGENES[activo].src} alt={IMAGENES[activo].label} style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 60%,rgba(10,10,10,0.7) 100%)" }} />
              <p style={{ position: "absolute", left: "1.5rem", bottom: "1.25rem", color: "white", fontWeight: 700, fontSize: "1rem" }}>{IMAGENES[activo].label}</p>

              <button
                aria-label="Anterior"
                onClick={() => setActivo((a) => (a - 1 + IMAGENES.length) % IMAGENES.length)}
                style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A0A0A" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => setActivo((a) => (a + 1) % IMAGENES.length)}
                style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", width: "38px", height: "38px", borderRadius: "50%", background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0A0A0A" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.25rem" }}>
              {IMAGENES.map((img, i) => (
                <button
                  key={img.src}
                  aria-label={"Ver " + img.label}
                  onClick={() => setActivo(i)}
                  style={{ width: i === activo ? "24px" : "8px", height: "8px", borderRadius: "999px", background: i === activo ? "#D4AF72" : "#E5E7EB", border: "none", cursor: "pointer", transition: "all 0.25s" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

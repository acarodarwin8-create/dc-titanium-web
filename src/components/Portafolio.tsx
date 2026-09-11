// src/components/Portafolio.tsx
// ============================================================
// Sección Portafolio — Haute Elegance v2.0 (Ultra-Executive)
// Fondo: Onyx Noir #070708 — según mapa de fondos
// Slider interactivo con controles dorados y métricas dinámicas
// ============================================================
"use client";

import { useState } from "react";
import Link from "next/link";
import { IMAGENES } from "@/lib/imagenes";

const SLIDES = [
    {
        src: IMAGENES.portafolio.titaniumQuitumbe.renderExterior1,
        label: "Edificio Titanium Quitumbe",
        subtitulo: "Pórticos Especiales a Momento (SMF) — ACI 318-19 · NEC-SE-DS",
        tag: "PROYECTO INSIGNIA",
        stats: [
            { valor: "9", label: "Pisos" },
            { valor: "5,956", label: "Vigas Mapped" },
            { valor: "ACI 318-19", label: "Normativa" },
        ],
    },
    {
        src: IMAGENES.portafolio.proyecto2.render1,
        label: "Torre Residencial SMF",
        subtitulo: "Modelado BIM Federado — Revit + ETABS + CYPECAD",
        tag: "PROYECTO EJECUTADO",
        stats: [
            { valor: "12", label: "Niveles" },
            { valor: "LOD 400", label: "Detalle BIM" },
            { valor: "NEC-15", label: "Sismorresistente" },
        ],
    },
];

export default function Portafolio() {
    const [activo, setActivo] = useState(0);
    const slide = SLIDES[activo];

    return (
        <section
            id="portafolio"
            style={{
                background: "var(--obsidian, #070708)",
                padding: "6rem 1.5rem",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid rgba(140,109,70,0.18)",
                borderBottom: "1px solid rgba(140,109,70,0.18)",
            }}
        >
            {/* Halo ambiental dorado de fondo */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-120px",
                    transform: "translateY(-50%)",
                    width: "550px",
                    height: "550px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* ── IZQUIERDA — Información del Proyecto ── */}
                    <div>
                        {/* Eyebrow Badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.35rem 0.85rem",
                                borderRadius: "999px",
                                border: "1px solid rgba(212,175,55,0.3)",
                                background: "rgba(212,175,55,0.06)",
                                marginBottom: "1.25rem",
                            }}
                        >
                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: "var(--gold-primary, #D4AF37)",
                                    boxShadow: "0 0 8px #D4AF37",
                                }}
                            />
                            <span
                                style={{
                                    fontSize: "0.68rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                    color: "var(--gold-primary, #D4AF37)",
                                    letterSpacing: "0.12em",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                                INGENIERÍA APLICADA EN OBRA
                            </span>
                        </div>

                        {/* Título */}
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                                fontWeight: 800,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                letterSpacing: "-0.03em",
                                marginBottom: "1.25rem",
                                lineHeight: 1.18,
                            }}
                        >
                            Portafolio de{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Proyectos Reales
                            </span>
                        </h2>

                        {/* Descripción */}
                        <p
                            style={{
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                color: "var(--titanium, #9E9A92)",
                                marginBottom: "2rem",
                                maxWidth: "480px",
                            }}
                        >
                            Nuestros programas académicos se articulan sobre edificaciones reales calculadas y construidas: diseños sismorresistentes, análisis dinámicos espectrales y modelos BIM federados listos para aprobación e inspección en obra.
                        </p>

                        {/* Métricas dinámicas sincronizadas con el slide activo */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "1rem",
                                marginBottom: "2.25rem",
                                padding: "1.25rem 1.5rem",
                                background: "rgba(22,22,25,0.85)",
                                backdropFilter: "blur(12px)",
                                borderRadius: "14px",
                                border: "1px solid rgba(140,109,70,0.3)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                            }}
                        >
                            {slide.stats.map((s) => (
                                <div key={s.label} style={{ textAlign: "center" }}>
                                    <p
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 900,
                                            color: "var(--gold-primary, #D4AF37)",
                                            fontFamily: "JetBrains Mono, monospace",
                                            textShadow: "0 0 16px rgba(212,175,55,0.35)",
                                            lineHeight: 1.1,
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        {s.valor}
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.62rem",
                                            color: "var(--titanium, #9E9A92)",
                                            fontFamily: "JetBrains Mono, monospace",
                                            letterSpacing: "0.06em",
                                            textTransform: "uppercase",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Botón Principal */}
                        <Link
                            href="#contacto"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                padding: "0.95rem 2.25rem",
                                borderRadius: "8px",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                color: "var(--obsidian, #070708)",
                                background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
                                textDecoration: "none",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.45), 0 6px 20px rgba(0,0,0,0.3)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.25)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Explorar Proyectos
                            <span style={{ fontSize: "1.1rem" }}>→</span>
                        </Link>
                    </div>

                    {/* ── DERECHA — Visor Slider ── */}
                    <div>
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "20px",
                                overflow: "hidden",
                                border: "1px solid rgba(140,109,70,0.3)",
                                boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 30px rgba(212,175,55,0.1)",
                                background: "#000",
                            }}
                        >
                            {/* Render / Imagen */}
                            <img
                                src={slide.src}
                                alt={slide.label}
                                style={{
                                    width: "100%",
                                    height: "450px",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "opacity 0.4s ease, transform 0.4s ease",
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(180deg, rgba(7,7,8,0.15) 0%, rgba(7,7,8,0.85) 100%)",
                                    pointerEvents: "none",
                                }}
                            />

                            {/* Tag Badge Top Left */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "1.25rem",
                                    left: "1.25rem",
                                    padding: "0.35rem 0.85rem",
                                    borderRadius: "999px",
                                    background: "rgba(212,175,55,0.15)",
                                    border: "1px solid rgba(212,175,55,0.4)",
                                    backdropFilter: "blur(8px)",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "0.62rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        color: "var(--gold-primary, #D4AF37)",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                    }}
                                >
                                    {slide.tag}
                                </span>
                            </div>

                            {/* Información Bottom Left */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: "1.5rem",
                                    right: "6.5rem",
                                    bottom: "1.5rem",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "var(--ivory-pearl, #F2F0EB)",
                                        fontWeight: 700,
                                        fontSize: "1.2rem",
                                        marginBottom: "0.3rem",
                                        textShadow: "0 2px 10px rgba(0,0,0,0.7)",
                                    }}
                                >
                                    {slide.label}
                                </h3>
                                <p
                                    style={{
                                        color: "var(--gold-primary, #D4AF37)",
                                        fontSize: "0.75rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        opacity: 0.9,
                                    }}
                                >
                                    {slide.subtitulo}
                                </p>
                            </div>

                            {/* Controles de Navegación del Slider */}
                            <button
                                aria-label="Proyecto anterior"
                                onClick={() => setActivo((a) => (a - 1 + SLIDES.length) % SLIDES.length)}
                                style={{
                                    position: "absolute",
                                    right: "4.5rem",
                                    bottom: "1.5rem",
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "50%",
                                    background: "rgba(7,7,8,0.75)",
                                    border: "1px solid rgba(212,175,55,0.35)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--gold-primary, #D4AF37)",
                                    backdropFilter: "blur(8px)",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(212,175,55,0.2)";
                                    e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(7,7,8,0.75)";
                                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button
                                aria-label="Siguiente proyecto"
                                onClick={() => setActivo((a) => (a + 1) % SLIDES.length)}
                                style={{
                                    position: "absolute",
                                    right: "1.25rem",
                                    bottom: "1.5rem",
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "50%",
                                    background: "rgba(7,7,8,0.75)",
                                    border: "1px solid rgba(212,175,55,0.35)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--gold-primary, #D4AF37)",
                                    backdropFilter: "blur(8px)",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "rgba(212,175,55,0.2)";
                                    e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(7,7,8,0.75)";
                                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)";
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Dots Indicadores de Navegación */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "0.5rem",
                                marginTop: "1.5rem",
                            }}
                        >
                            {SLIDES.map((s, i) => (
                                <button
                                    key={s.label}
                                    aria-label={"Ver " + s.label}
                                    onClick={() => setActivo(i)}
                                    style={{
                                        width: i === activo ? "32px" : "10px",
                                        height: "8px",
                                        borderRadius: "999px",
                                        background: i === activo
                                            ? "var(--gold-primary, #D4AF37)"
                                            : "rgba(140,109,70,0.3)",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        boxShadow: i === activo
                                            ? "0 0 10px rgba(212,175,55,0.6)"
                                            : "none",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

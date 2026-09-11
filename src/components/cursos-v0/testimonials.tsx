// src/components/cursos-v0/testimonials.tsx
// ============================================================
// Testimonios y Reseñas — Haute Elegance v2.0 (Ultra-Executive)
// Tarjetas glassmórficas con distintivo tipográfico y halos dorados
// ============================================================
"use client";

import React from "react";
import type { TestimonioCurso } from "@/content/cursos-detalle";
import { IconStar, IconQuote } from "./icons";

interface TestimonialsProps {
    testimonios: TestimonioCurso[];
    rating: number;
    totalReseñas: number;
}

export function Testimonials({
    testimonios = [],
    rating,
    totalReseñas,
}: TestimonialsProps) {
    return (
        <section
            style={{
                position: "relative",
                borderRadius: "20px",
                border: "1px solid rgba(140, 109, 70, 0.3)",
                background:
                    "linear-gradient(160deg, rgba(22, 22, 25, 0.88) 0%, rgba(13, 16, 24, 0.95) 100%)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:
                    "0 20px 50px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(212, 175, 55, 0.12)",
                padding: "2.25rem 2rem",
                overflow: "hidden",
            }}
        >
            {/* Halo ambiental dorado de fondo */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            {/* Cabecera de Sección */}
            <div
                style={{
                    marginBottom: "1.75rem",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Eyebrow Badge */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "999px",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        background: "rgba(212, 175, 55, 0.06)",
                        marginBottom: "0.85rem",
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
                        RESEÑAS Y RECONOCIMIENTO PROFESIONAL
                    </span>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                            fontWeight: 800,
                            color: "var(--ivory-pearl, #F2F0EB)",
                            letterSpacing: "-0.02em",
                            margin: 0,
                            lineHeight: 1.2,
                        }}
                    >
                        Lo que Dicen{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Nuestros Ingenieros y Alumnos
                        </span>
                    </h2>

                    {/* Métricas Globales de Satisfacción */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.4rem 0.9rem",
                            borderRadius: "8px",
                            background: "rgba(7, 7, 8, 0.6)",
                            border: "1px solid rgba(140, 109, 70, 0.25)",
                            fontSize: "0.82rem",
                            fontFamily: "JetBrains Mono, monospace",
                            color: "var(--titanium, #9E9A92)",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-flex",
                                width: "16px",
                                height: "16px",
                                color: "var(--gold-primary, #D4AF37)",
                                filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.4))",
                            }}
                        >
                            <IconStar />
                        </span>
                        <span
                            style={{
                                fontWeight: 800,
                                color: "var(--gold-primary, #D4AF37)",
                            }}
                        >
                            {rating}
                        </span>
                        <span>· {totalReseñas.toLocaleString("es")} reseñas</span>
                    </div>
                </div>
            </div>

            {/* Grid de Testimonios */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.25rem",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {testimonios.map((t, idx) => {
                    const iniciales = t.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("");

                    return (
                        <figure
                            key={idx}
                            style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "14px",
                                border: "1px solid rgba(140, 109, 70, 0.22)",
                                background: "rgba(7, 7, 8, 0.55)",
                                padding: "1.5rem",
                                margin: 0,
                                backdropFilter: "blur(8px)",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.45)";
                                e.currentTarget.style.background = "rgba(212, 175, 55, 0.04)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow =
                                    "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(212, 175, 55, 0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.22)";
                                e.currentTarget.style.background = "rgba(7, 7, 8, 0.55)";
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/* Marca de Agua: Comilla Decorativa */}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "1.25rem",
                                    right: "1.25rem",
                                    width: "32px",
                                    height: "32px",
                                    color: "var(--gold-primary, #D4AF37)",
                                    opacity: 0.15,
                                    display: "inline-flex",
                                    pointerEvents: "none",
                                }}
                            >
                                <IconQuote />
                            </span>

                            {/* Puntuación individual por estrellas */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.25rem",
                                    marginBottom: "1rem",
                                }}
                            >
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            display: "inline-flex",
                                            width: "15px",
                                            height: "15px",
                                            color:
                                                i < t.rating
                                                    ? "var(--gold-primary, #D4AF37)"
                                                    : "rgba(140, 109, 70, 0.25)",
                                            filter:
                                                i < t.rating
                                                    ? "drop-shadow(0 0 4px rgba(212, 175, 55, 0.3))"
                                                    : "none",
                                        }}
                                    >
                                        <IconStar />
                                    </span>
                                ))}
                            </div>

                            {/* Cita textual del alumno */}
                            <blockquote
                                style={{
                                    flex: 1,
                                    fontSize: "0.88rem",
                                    lineHeight: 1.65,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    margin: "0 0 1.25rem 0",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                }}
                            >
                                “{t.texto}”
                            </blockquote>

                            {/* Pie de Testimonio: Avatar Gold + Credenciales */}
                            <figcaption
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.85rem",
                                    borderTop: "1px solid rgba(140, 109, 70, 0.15)",
                                    paddingTop: "1rem",
                                }}
                            >
                                <span
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        background:
                                            "linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(140, 109, 70, 0.1))",
                                        border: "1px solid rgba(212, 175, 55, 0.4)",
                                        color: "var(--gold-primary, #D4AF37)",
                                        fontSize: "0.82rem",
                                        fontWeight: 800,
                                        fontFamily: "JetBrains Mono, monospace",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        boxShadow: "0 0 10px rgba(212, 175, 55, 0.15)",
                                    }}
                                >
                                    {iniciales}
                                </span>

                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span
                                        style={{
                                            fontSize: "0.88rem",
                                            fontWeight: 700,
                                            color: "var(--ivory-pearl, #F2F0EB)",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {t.nombre}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.75rem",
                                            color: "var(--titanium, #9E9A92)",
                                            fontFamily: "JetBrains Mono, monospace",
                                            marginTop: "2px",
                                        }}
                                    >
                                        {t.cargo} · {t.empresa}
                                    </span>
                                </div>
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
}

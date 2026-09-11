// src/components/cursos-v0/what-you-learn.tsx
// ============================================================
// Sección Lo Que Aprenderás — Haute Elegance v2.0 (Ultra-Executive)
// Tarjetas individuales con Glassmorphism, halo ambiental dorado
// y micro-interacciones hover de alta precisión.
// ============================================================
"use client";

import React from "react";
import { IconCheck } from "./icons";

interface WhatYouLearnProps {
    items: string[];
}

export function WhatYouLearn({ items = [] }: WhatYouLearnProps) {
    if (!items || items.length === 0) return null;

    return (
        <section
            style={{
                position: "relative",
                borderRadius: "20px",
                border: "1px solid rgba(140, 109, 70, 0.3)",
                background: "linear-gradient(160deg, rgba(22,22,25,0.85) 0%, rgba(13,16,24,0.92) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.12)",
                padding: "2.5rem 2rem",
                overflow: "hidden",
            }}
        >
            {/* Halo ambiental dorado de fondo */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "-70px",
                    right: "-70px",
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            {/* Cabecera de la sección */}
            <div style={{ marginBottom: "2rem", position: "relative", zIndex: 2 }}>
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
                        COMPETENCIAS DE ALTO RENDIMIENTO
                    </span>
                </div>

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
                    Lo que{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Aprenderás y Dominarás
                    </span>
                </h2>
            </div>

            {/* Grid interactivo de competencias */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1rem",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "1rem",
                            padding: "1.1rem 1.25rem",
                            borderRadius: "14px",
                            background: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(140, 109, 70, 0.18)",
                            backdropFilter: "blur(8px)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.45)";
                            e.currentTarget.style.background = "rgba(212, 175, 55, 0.04)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                                "0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(212, 175, 55, 0.08)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.18)";
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        {/* Contenedor del Icono Check en Oro Ejecutivo */}
                        <div
                            style={{
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "rgba(212, 175, 55, 0.12)",
                                border: "1px solid rgba(212, 175, 55, 0.35)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                color: "var(--gold-primary, #D4AF37)",
                                boxShadow: "0 0 10px rgba(212, 175, 55, 0.15)",
                                marginTop: "2px",
                            }}
                        >
                            <span style={{ display: "inline-flex", width: "14px", height: "14px" }}>
                                <IconCheck />
                            </span>
                        </div>

                        {/* Texto descriptivo de la competencia */}
                        <span
                            style={{
                                fontSize: "0.9rem",
                                lineHeight: 1.6,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                fontWeight: 500,
                            }}
                        >
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

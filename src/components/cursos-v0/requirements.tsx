// src/components/cursos-v0/requirements.tsx
// ============================================================
// Requisitos y Audiencia Objetivo — Haute Elegance v2.0
// Tarjetas duales con Glassmorphism, bordes dorados reactivos
// y badges tipográficos de nivel ejecutivo.
// ============================================================
"use client";

import React from "react";

interface RequirementsProps {
    requisitos?: string[];
    paraQuien?: string[];
}

export function Requirements({
    requisitos = [],
    paraQuien = [],
}: RequirementsProps) {
    return (
        <section
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "1.75rem",
                position: "relative",
            }}
        >
            {/* ── Tarjeta 1: Requisitos Previos ── */}
            <div
                style={{
                    position: "relative",
                    borderRadius: "20px",
                    border: "1px solid rgba(140, 109, 70, 0.3)",
                    background:
                        "linear-gradient(160deg, rgba(22,22,25,0.85) 0%, rgba(13,16,24,0.92) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow:
                        "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.12)",
                    padding: "2.25rem 2rem",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                    e.currentTarget.style.boxShadow =
                        "0 24px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(212, 175, 55, 0.12)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.3)";
                    e.currentTarget.style.boxShadow =
                        "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.12)";
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
                        PRERREQUISITOS TÉCNICOS
                    </span>
                </div>

                {/* Título de Sección */}
                <h2
                    style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "var(--ivory-pearl, #F2F0EB)",
                        letterSpacing: "-0.02em",
                        marginBottom: "1.5rem",
                        lineHeight: 1.25,
                    }}
                >
                    Requisitos del{" "}
                    <span
                        style={{
                            background:
                                "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Programa
                    </span>
                </h2>

                {/* Lista de Requisitos */}
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    {requisitos.map((req, idx) => (
                        <li
                            key={idx}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.85rem",
                                fontSize: "0.88rem",
                                lineHeight: 1.6,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                background: "rgba(255, 255, 255, 0.02)",
                                border: "1px solid rgba(140, 109, 70, 0.15)",
                                padding: "0.85rem 1rem",
                                borderRadius: "10px",
                                transition: "all 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                                e.currentTarget.style.background = "rgba(212, 175, 55, 0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.15)";
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                            }}
                        >
                            <span
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    background: "rgba(212, 175, 55, 0.15)",
                                    border: "1px solid rgba(212, 175, 55, 0.35)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    color: "var(--gold-primary, #D4AF37)",
                                    fontSize: "0.68rem",
                                    fontWeight: 900,
                                    marginTop: "2px",
                                }}
                            >
                                ✓
                            </span>
                            <span>{req}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Tarjeta 2: ¿Para quién es? ── */}
            <div
                style={{
                    position: "relative",
                    borderRadius: "20px",
                    border: "1px solid rgba(140, 109, 70, 0.3)",
                    background:
                        "linear-gradient(160deg, rgba(22,22,25,0.85) 0%, rgba(13,16,24,0.92) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow:
                        "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.12)",
                    padding: "2.25rem 2rem",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.5)";
                    e.currentTarget.style.boxShadow =
                        "0 24px 60px rgba(0, 0, 0, 0.75), 0 0 30px rgba(212, 175, 55, 0.12)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.3)";
                    e.currentTarget.style.boxShadow =
                        "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.12)";
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
                        PERFIL DEL PROFESIONAL
                    </span>
                </div>

                {/* Título de Sección */}
                <h2
                    style={{
                        fontSize: "1.4rem",
                        fontWeight: 800,
                        color: "var(--ivory-pearl, #F2F0EB)",
                        letterSpacing: "-0.02em",
                        marginBottom: "1.5rem",
                        lineHeight: 1.25,
                    }}
                >
                    ¿A Quién Está{" "}
                    <span
                        style={{
                            background:
                                "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Dirigido?
                    </span>
                </h2>

                {/* Lista de Destinatarios */}
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    {paraQuien.map((p, idx) => (
                        <li
                            key={idx}
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "0.85rem",
                                fontSize: "0.88rem",
                                lineHeight: 1.6,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                background: "rgba(255, 255, 255, 0.02)",
                                border: "1px solid rgba(140, 109, 70, 0.15)",
                                padding: "0.85rem 1rem",
                                borderRadius: "10px",
                                transition: "all 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.4)";
                                e.currentTarget.style.background = "rgba(212, 175, 55, 0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.15)";
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                            }}
                        >
                            <span
                                style={{
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    background: "rgba(212, 175, 55, 0.15)",
                                    border: "1px solid rgba(212, 175, 55, 0.35)",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    color: "var(--gold-primary, #D4AF37)",
                                    fontSize: "0.68rem",
                                    fontWeight: 900,
                                    marginTop: "2px",
                                }}
                            >
                                →
                            </span>
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

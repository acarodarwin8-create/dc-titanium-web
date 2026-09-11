// src/components/cursos-v0/instructor-section.tsx
// ============================================================
// Perfil del Instructor — Haute Elegance v2.0 (Ultra-Executive)
// ============================================================
"use client";

import React from "react";
import type { InstructorCurso } from "@/content/cursos-detalle";
import { cursos } from "@/content/cursos";
import { IconStar, IconMessage, IconUsers, IconBadgeCheck } from "./icons";

interface InstructorSectionProps {
    instructor: InstructorCurso;
    rating: number;
    totalReseñas: number;
}

export function InstructorSection({
    instructor,
    rating,
    totalReseñas,
}: InstructorSectionProps) {
    const totalEstudiantes = cursos.reduce((sum, c) => sum + (c.estudiantes || 0), 0);
    const totalCursos = cursos.filter((c) => c.activo).length;

    const stats = [
        { Icon: IconStar, label: "Calificación", value: rating },
        { Icon: IconMessage, label: "Reseñas", value: totalReseñas.toLocaleString("es") },
        { Icon: IconUsers, label: "Estudiantes", value: totalEstudiantes.toLocaleString("es") },
        { Icon: IconBadgeCheck, label: "Cursos", value: totalCursos },
    ];

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
                    left: "-60px",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

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
                    marginBottom: "1rem",
                    position: "relative",
                    zIndex: 2,
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
                    LIDERAZGO Y MENTORÍA EXPERTA
                </span>
            </div>

            <h2
                style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
                    fontWeight: 800,
                    color: "var(--ivory-pearl, #F2F0EB)",
                    letterSpacing: "-0.02em",
                    margin: "0 0 1.75rem 0",
                    lineHeight: 1.2,
                    position: "relative",
                    zIndex: 2,
                }}
            >
                Instructor{" "}
                <span
                    style={{
                        background:
                            "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Principal
                </span>
            </h2>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.75rem",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                {/* Header del Instructor: Foto + Datos */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "1.5rem",
                    }}
                >
                    {/* Foto de Perfil con Anillo Dorado Ejecutivo */}
                    <div
                        style={{
                            position: "relative",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            padding: "3px",
                            background:
                                "linear-gradient(135deg, var(--gold-primary, #D4AF37), rgba(140, 109, 70, 0.3))",
                            boxShadow: "0 0 25px rgba(212, 175, 55, 0.25)",
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={instructor.imagen}
                            alt={instructor.nombre}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "block",
                                background: "#161619",
                            }}
                        />
                    </div>

                    {/* Nombre y Cargo */}
                    <div style={{ flex: 1, minWidth: "240px" }}>
                        <h3
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                fontSize: "1.3rem",
                                fontWeight: 800,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                margin: 0,
                            }}
                        >
                            {instructor.nombre}
                            <span
                                style={{
                                    display: "inline-flex",
                                    width: "20px",
                                    height: "20px",
                                    color: "var(--gold-primary, #D4AF37)",
                                    filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.4))",
                                }}
                            >
                                <IconBadgeCheck />
                            </span>
                        </h3>

                        <p
                            style={{
                                margin: "0.35rem 0 0 0",
                                fontSize: "0.88rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                fontWeight: 600,
                            }}
                        >
                            {instructor.titulo} · {instructor.empresa}
                        </p>
                    </div>
                </div>

                {/* Grid de Métricas y Estadísticas */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                        gap: "0.85rem",
                    }}
                >
                    {stats.map(({ Icon, label, value }) => (
                        <div
                            key={label}
                            style={{
                                borderRadius: "12px",
                                border: "1px solid rgba(140, 109, 70, 0.22)",
                                background: "rgba(7, 7, 8, 0.55)",
                                padding: "0.85rem 1rem",
                                backdropFilter: "blur(8px)",
                                transition: "all 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.45)";
                                e.currentTarget.style.background = "rgba(212, 175, 55, 0.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.22)";
                                e.currentTarget.style.background = "rgba(7, 7, 8, 0.55)";
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    fontSize: "0.72rem",
                                    color: "var(--titanium, #9E9A92)",
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-flex",
                                        width: "14px",
                                        height: "14px",
                                        color: "var(--gold-primary, #D4AF37)",
                                    }}
                                >
                                    <Icon />
                                </span>
                                <span>{label}</span>
                            </div>
                            <div
                                style={{
                                    marginTop: "0.35rem",
                                    fontSize: "1.2rem",
                                    fontWeight: 800,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                            >
                                {value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Biografía */}
                <p
                    style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        color: "var(--titanium, #9E9A92)",
                        margin: 0,
                    }}
                >
                    {instructor.bio}
                </p>

                {/* Lista de Proyectos y Credenciales */}
                {instructor.proyectos && instructor.proyectos.length > 0 && (
                    <div
                        style={{
                            borderTop: "1px solid rgba(140, 109, 70, 0.2)",
                            paddingTop: "1.25rem",
                            marginTop: "0.5rem",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "0.7rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "0.85rem",
                            }}
                        >
                            PROYECTOS Y TRAYECTORIA DESTACADA:
                        </span>
                        <ul
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.65rem",
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                            }}
                        >
                            {instructor.proyectos.map((p, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "0.75rem",
                                        fontSize: "0.86rem",
                                        color: "var(--ivory-pearl, #F2F0EB)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            width: "16px",
                                            height: "16px",
                                            color: "var(--gold-primary, #D4AF37)",
                                            flexShrink: 0,
                                            marginTop: "2px",
                                        }}
                                    >
                                        <IconBadgeCheck />
                                    </span>
                                    <span>{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}

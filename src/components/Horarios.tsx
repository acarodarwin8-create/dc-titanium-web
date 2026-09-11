// src/components/Horarios.tsx
// ============================================================
// Sección Horarios — Haute Elegance v2.0 (Alta Gama)
// Conectado 100% a variables CSS de globals.css
// Efectos: tabla ejecutiva, glow dorado, micro-interacciones
// ============================================================
"use client";

import Link from "next/link";
import { cursos } from "@/content/cursos";
import { horarios } from "@/content/horarios";
import { useCart } from "@/context/CartContext";

export default function Horarios() {
    const { addItem } = useCart();

    return (
        <section
            id="horarios"
            style={{
                background: "var(--graphite-silk, #161619)",
                padding: "5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo decorativo izquierda */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "-120px",
                    transform: "translateY(-50%)",
                    width: "450px",
                    height: "450px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── IZQUIERDA — Texto Explicativo ── */}
                    <div>
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
                                CUPOS LIMITADOS • GRUPOS EXCLUSIVOS
                            </span>
                        </div>

                        <h2
                            style={{
                                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                                fontWeight: 800,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                letterSpacing: "-0.03em",
                                marginBottom: "1.5rem",
                                lineHeight: 1.2,
                            }}
                        >
                            Horarios activos{" "}
                            <span
                                style={{
                                    background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                esta temporada
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                color: "var(--titanium, #9E9A92)",
                                marginBottom: "2.25rem",
                                maxWidth: "480px",
                            }}
                        >
                            Nuestros cursos en vivo se dictan en grupos reducidos para garantizar resolución de dudas en tiempo real y asesoría técnica personalizada. Elige el horario que mejor se adapte a tu semana laboral y asegura tu cupo con anticipación.
                        </p>

                        <Link
                            href="#cursos"
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
                            Ver catálogo de especialidades
                            <span style={{ fontSize: "1.1rem" }}>→</span>
                        </Link>
                    </div>

                    {/* ── DERECHA — Tabla Ejecutiva Dark ── */}
                    <div
                        style={{
                            background: "var(--graphite-silk, #161619)",
                            borderRadius: "16px",
                            border: "1px solid rgba(140,109,70,0.3)",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.08)",
                            overflow: "hidden",
                        }}
                    >
                        {/* Encabezado del contenedor */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #0B0C10, #1E293B)",
                                padding: "1.25rem 1.5rem",
                                borderBottom: "1px solid rgba(140,109,70,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "0.72rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                    color: "var(--gold-primary, #D4AF37)",
                                    letterSpacing: "0.12em",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                                CRONOGRAMA DE CLASES EN VIVO
                            </p>
                            <span
                                style={{
                                    fontSize: "0.65rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                    color: "var(--titanium, #9E9A92)",
                                    background: "rgba(255,255,255,0.05)",
                                    padding: "0.2rem 0.6rem",
                                    borderRadius: "4px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                }}
                            >
                                UTC-5 (Quito / Bogotá / Lima)
                            </span>
                        </div>

                        {/* Tabla con scroll horizontal en móviles */}
                        <div style={{ overflowX: "auto" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "580px" }}>
                                <thead>
                                    <tr style={{ borderBottom: "1px solid rgba(140,109,70,0.2)", background: "rgba(7,7,8,0.4)" }}>
                                        {["Curso", "Días", "Horario", "Duración", "Inicio", "Acción"].map((h) => (
                                            <th
                                                key={h}
                                                style={{
                                                    textAlign: "left",
                                                    padding: "1rem 1.1rem",
                                                    fontSize: "0.65rem",
                                                    color: "var(--gold-primary, #D4AF37)",
                                                    fontFamily: "JetBrains Mono, monospace",
                                                    letterSpacing: "0.1em",
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {horarios.map((h, i) => {
                                        const curso = cursos.find((c) => c.id === h.cursoId);
                                        return (
                                            <tr
                                                key={h.nombre}
                                                style={{
                                                    background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(212,175,55,0.02)",
                                                    borderBottom: "1px solid rgba(140,109,70,0.12)",
                                                    transition: "all 0.25s ease",
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.08)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLElement).style.background =
                                                        i % 2 === 0 ? "rgba(255,255,255,0.01)" : "rgba(212,175,55,0.02)";
                                                }}
                                            >
                                                <td
                                                    style={{
                                                        padding: "1rem 1.1rem",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 700,
                                                        color: "var(--ivory-pearl, #F2F0EB)",
                                                    }}
                                                >
                                                    {h.nombre}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 1.1rem",
                                                        fontSize: "0.78rem",
                                                        color: "var(--titanium, #9E9A92)",
                                                        fontFamily: "JetBrains Mono, monospace",
                                                    }}
                                                >
                                                    {h.dias}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 1.1rem",
                                                        fontSize: "0.78rem",
                                                        color: "var(--titanium, #9E9A92)",
                                                        fontFamily: "JetBrains Mono, monospace",
                                                    }}
                                                >
                                                    {h.horario}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 1.1rem",
                                                        fontSize: "0.78rem",
                                                        fontWeight: 700,
                                                        color: "var(--gold-primary, #D4AF37)",
                                                        fontFamily: "JetBrains Mono, monospace",
                                                    }}
                                                >
                                                    {h.duracion}
                                                </td>
                                                <td
                                                    style={{
                                                        padding: "1rem 1.1rem",
                                                        fontSize: "0.78rem",
                                                        color: "var(--titanium, #9E9A92)",
                                                        fontFamily: "JetBrains Mono, monospace",
                                                    }}
                                                >
                                                    {h.inicio}
                                                </td>
                                                <td style={{ padding: "1rem 1.1rem" }}>
                                                    {curso && (
                                                        <button
                                                            onClick={() =>
                                                                addItem({
                                                                    id: curso.id,
                                                                    titulo: curso.nombre,
                                                                    precio: curso.precio,
                                                                    software: curso.software,
                                                                })
                                                            }
                                                            style={{
                                                                padding: "0.5rem 1rem",
                                                                borderRadius: "6px",
                                                                background: "rgba(212,175,55,0.05)",
                                                                color: "var(--gold-primary, #D4AF37)",
                                                                fontSize: "0.72rem",
                                                                fontWeight: 700,
                                                                border: "1px solid rgba(212,175,55,0.4)",
                                                                cursor: "pointer",
                                                                whiteSpace: "nowrap",
                                                                fontFamily: "JetBrains Mono, monospace",
                                                                transition: "all 0.25s ease",
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.background = "rgba(212,175,55,0.18)";
                                                                e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                                                                e.currentTarget.style.boxShadow = "0 0 14px rgba(212,175,55,0.3)";
                                                                e.currentTarget.style.transform = "translateY(-1px)";
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.background = "rgba(212,175,55,0.05)";
                                                                e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                                                                e.currentTarget.style.boxShadow = "none";
                                                                e.currentTarget.style.transform = "translateY(0)";
                                                            }}
                                                        >
                                                            Inscribirme →
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

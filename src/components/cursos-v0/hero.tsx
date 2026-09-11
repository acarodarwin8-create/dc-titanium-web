// src/components/cursos-v0/hero.tsx
// ============================================================
// Hero Masterclass App Grade — DC Titanium Builders v3.0
// Estilo: Cyber-Engineering, Blueprint Mesh, Metallic Gold Glow
// ============================================================
"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Curso } from "@/content/cursos";
import type { CursoDetalle } from "@/content/cursos-detalle";
import { VideoModal } from "./video-modal";

// ── Íconos Vectoriales Directos de Alta Precisión ───────────
function IconStar() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function IconPlay() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function IconVerified() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}

function IconDownload() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}

function IconShare() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
    );
}

interface HeroProps {
    curso: Curso;
    detalle: CursoDetalle;
}

export default function Hero({ curso, detalle }: HeroProps) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const c = curso as Record<string, any>;
    const d = detalle as Record<string, any>;

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2200);
        }
    };

    const handleBrochureDownload = () => {
        alert(`Descargando Ficha Técnica Ejecutiva (PDF): ${c.nombre || "Programa Especializado"}`);
    };

    return (
        <>
            <section
                style={{
                    position: "relative",
                    background: "#070708",
                    backgroundImage: `
            radial-gradient(circle at 15% 10%, rgba(212, 175, 55, 0.18) 0%, transparent 45%),
            radial-gradient(circle at 85% 90%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            linear-gradient(to right, rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "100% 100%, 100% 100%, 36px 36px, 36px 36px",
                    borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
                    paddingTop: "2.2rem",
                    paddingBottom: "4.5rem",
                    overflow: "hidden",
                }}
            >
                {/* Haz fotónico ambiental */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: "-120px",
                        left: "25%",
                        width: "700px",
                        height: "350px",
                        background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15), transparent 70%)",
                        filter: "blur(60px)",
                        pointerEvents: "none",
                    }}
                />

                <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }} className="px-4 md:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                        <div className="lg:col-span-2">

                            {/* Breadcrumb Táctico */}
                            <div style={{ marginBottom: "1.25rem" }}>
                                <nav
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.55rem",
                                        fontSize: "0.74rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        color: "#9E9A92",
                                        background: "rgba(18, 18, 22, 0.85)",
                                        padding: "0.38rem 0.95rem",
                                        borderRadius: "8px",
                                        border: "1px solid rgba(212, 175, 55, 0.2)",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                                        backdropFilter: "blur(12px)",
                                    }}
                                >
                                    <Link href="/" style={{ color: "#9E9A92", textDecoration: "none", transition: "color 0.2s" }}>
                                        Inicio
                                    </Link>
                                    <span style={{ color: "rgba(212,175,55,0.4)" }}>/</span>
                                    <Link href="/cursos" style={{ color: "#9E9A92", textDecoration: "none", transition: "color 0.2s" }}>
                                        Cursos & Masters
                                    </Link>
                                    <span style={{ color: "rgba(212,175,55,0.4)" }}>/</span>
                                    <span style={{ color: "#D4AF37", fontWeight: 700 }}>
                                        {c.categoria || "Especialización BIM & Estructuras"}
                                    </span>
                                </nav>
                            </div>

                            {/* Badges de Certificación y Nivel Técnico */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginBottom: "1.5rem" }}>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.45rem",
                                        padding: "0.38rem 0.9rem",
                                        borderRadius: "8px",
                                        background: "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(212,175,55,0.06))",
                                        border: "1px solid #D4AF37",
                                        color: "#F0D78C",
                                        fontSize: "0.72rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 800,
                                        letterSpacing: "0.06em",
                                        boxShadow: "0 0 20px rgba(212,175,55,0.25)",
                                    }}
                                >
                                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 8px #10B981" }} />
                                    {d.badge || "AISC 360-22 / AISC 341-22 COMPLIANT"}
                                </span>

                                <span
                                    style={{
                                        padding: "0.38rem 0.9rem",
                                        borderRadius: "8px",
                                        background: "rgba(22, 22, 27, 0.9)",
                                        border: "1px solid rgba(255, 255, 255, 0.12)",
                                        color: "#F2F0EB",
                                        fontSize: "0.72rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 600,
                                    }}
                                >
                                    Nivel: {c.nivel || "Experto / Avanzado"}
                                </span>

                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem",
                                        padding: "0.38rem 0.9rem",
                                        borderRadius: "8px",
                                        background: "rgba(16, 185, 129, 0.12)",
                                        border: "1px solid rgba(16, 185, 129, 0.35)",
                                        color: "#10B981",
                                        fontSize: "0.72rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 700,
                                    }}
                                >
                                    <IconVerified /> Certificación Profesional
                                </span>
                            </div>

                            {/* Título de Alto Rendimiento */}
                            <h1
                                style={{
                                    fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)",
                                    fontWeight: 900,
                                    lineHeight: 1.06,
                                    letterSpacing: "-0.03em",
                                    color: "#F2F0EB",
                                    marginBottom: "1.15rem",
                                    textShadow: "0 10px 40px rgba(0,0,0,0.9)",
                                }}
                            >
                                {c.nombre || "Advance Steel: Conexiones Estructurales"}
                            </h1>

                            {/* Subtítulo Técnico */}
                            <p
                                style={{
                                    fontSize: "clamp(1.05rem, 1.9vw, 1.22rem)",
                                    lineHeight: 1.6,
                                    color: "#9E9A92",
                                    marginBottom: "1.85rem",
                                    maxWidth: "840px",
                                    fontWeight: 400,
                                }}
                            >
                                {d.subtitulo || "Diseño, detallado y optimización de conexiones metálicas bajo códigos AISC 360, AISC 341 y AWS D1.1 con integración BIM avanzada."}
                            </p>

                            {/* Stack de Herramientas y Normativas */}
                            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.55rem", marginBottom: "2.25rem" }}>
                                <span style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono, monospace", color: "#D4AF37", fontWeight: 800, marginRight: "0.3rem", letterSpacing: "0.05em" }}>
                                    STACK TÉCNICO:
                                </span>
                                {["Advance Steel 2026", "AISC 360-22", "AISC 341-22", "Revit Link API", "CNC/NC Export"].map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            fontSize: "0.73rem",
                                            fontFamily: "JetBrains Mono, monospace",
                                            color: "#F2F0EB",
                                            background: "rgba(18, 18, 22, 0.95)",
                                            border: "1px solid rgba(212, 175, 55, 0.35)",
                                            borderRadius: "6px",
                                            padding: "0.28rem 0.7rem",
                                            boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
                                        }}
                                    >
                                        ⚡ {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Consola Modular de KPIs App Grade */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                                    gap: "0.85rem",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                {/* Tarjeta 1: Rating */}
                                <div
                                    style={{
                                        padding: "1.1rem 1.25rem",
                                        borderRadius: "14px",
                                        background: "linear-gradient(145deg, rgba(22,22,27,0.95) 0%, rgba(12,12,15,0.98) 100%)",
                                        border: "1px solid rgba(212, 175, 55, 0.28)",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace", color: "#9E9A92", letterSpacing: "0.05em" }}>VALORACIÓN</div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", marginTop: "0.35rem" }}>
                                        <span style={{ color: "#F59E0B", display: "flex" }}><IconStar /></span>
                                        <strong style={{ color: "#F2F0EB", fontSize: "1.25rem", fontWeight: 900 }}>{c.rating || "4.9"}</strong>
                                        <span style={{ fontSize: "0.75rem", color: "#9E9A92" }}>({d.totalReseñas || 61})</span>
                                    </div>
                                </div>

                                {/* Tarjeta 2: Inscritos */}
                                <div
                                    style={{
                                        padding: "1.1rem 1.25rem",
                                        borderRadius: "14px",
                                        background: "linear-gradient(145deg, rgba(22,22,27,0.95) 0%, rgba(12,12,15,0.98) 100%)",
                                        border: "1px solid rgba(212, 175, 55, 0.28)",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace", color: "#9E9A92", letterSpacing: "0.05em" }}>INGENIEROS EN VIVO</div>
                                    <div style={{ color: "#F2F0EB", fontWeight: 900, fontSize: "1.25rem", marginTop: "0.35rem", letterSpacing: "-0.02em" }}>
                                        {c.estudiantes || 140}+ <span style={{ fontSize: "0.75rem", color: "#10B981", fontWeight: 700 }}>Activos</span>
                                    </div>
                                </div>

                                {/* Tarjeta 3: Docente Senior */}
                                <div
                                    style={{
                                        padding: "1.1rem 1.25rem",
                                        borderRadius: "14px",
                                        background: "linear-gradient(145deg, rgba(22,22,27,0.95) 0%, rgba(12,12,15,0.98) 100%)",
                                        border: "1px solid rgba(212, 175, 55, 0.28)",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                                    }}
                                >
                                    <div style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace", color: "#9E9A92", letterSpacing: "0.05em" }}>INSTRUCTOR SENIOR</div>
                                    <div style={{ color: "#D4AF37", fontWeight: 800, fontSize: "0.98rem", marginTop: "0.45rem", fontFamily: "JetBrains Mono, monospace" }}>
                                        {d.instructor?.nombre || "Ing. Darwin Acaro Z."}
                                    </div>
                                </div>
                            </div>

                            {/* Barra de Acciones Principales (Demo 3D, Brochure, Compartir) */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
                                <button
                                    type="button"
                                    onClick={() => setIsVideoOpen(true)}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        padding: "0.8rem 1.6rem",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #D4AF37 0%, #F0D78C 100%)",
                                        color: "#070708",
                                        fontSize: "0.88rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 900,
                                        cursor: "pointer",
                                        border: "none",
                                        boxShadow: "0 0 25px rgba(212,175,55,0.4), 0 4px 15px rgba(0,0,0,0.4)",
                                        transition: "transform 0.2s ease, boxShadow 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-1.5px)";
                                        e.currentTarget.style.boxShadow = "0 0 35px rgba(212,175,55,0.6), 0 6px 20px rgba(0,0,0,0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 0 25px rgba(212,175,55,0.4), 0 4px 15px rgba(0,0,0,0.4)";
                                    }}
                                >
                                    <IconPlay /> REPRODUCIR DEMO 3D
                                </button>

                                <button
                                    type="button"
                                    onClick={handleBrochureDownload}
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.55rem",
                                        padding: "0.8rem 1.3rem",
                                        borderRadius: "10px",
                                        background: "rgba(22, 22, 27, 0.9)",
                                        border: "1px solid rgba(212, 175, 55, 0.35)",
                                        color: "#F2F0EB",
                                        fontSize: "0.84rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "#D4AF37";
                                        e.currentTarget.style.color = "#D4AF37";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.35)";
                                        e.currentTarget.style.color = "#F2F0EB";
                                    }}
                                >
                                    <IconDownload /> TEMARIO TÉCNICO (PDF)
                                </button>

                                <button
                                    type="button"
                                    onClick={handleShare}
                                    title="Copiar enlace del programa"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        padding: "0.8rem 1.1rem",
                                        borderRadius: "10px",
                                        background: "rgba(22, 22, 27, 0.9)",
                                        border: "1px solid rgba(212, 175, 55, 0.35)",
                                        color: copied ? "#10B981" : "#9E9A92",
                                        fontSize: "0.84rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    <IconShare /> {copied ? "COPIADO" : "COMPARTIR"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Reproductor de Video HD Integrado */}
            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                nombreCurso={c.nombre || "Advance Steel: Conexiones Estructurales"}
                tituloLeccion="Demo de Detallado 3D y Automatización de Conexiones"
            />
        </>
    );
}

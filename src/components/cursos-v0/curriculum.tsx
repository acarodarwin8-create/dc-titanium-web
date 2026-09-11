// src/components/cursos-v0/curriculum.tsx
// ============================================================
// Sílabo y Contenido del Curso — Haute Elegance v2.0 (Ultra-Executive)
// Conexión Interactiva Directa con el Reproductor HD (VideoModal)
// ============================================================
"use client";

import React, { useState } from "react";
import type { Curso } from "@/content/cursos";
import type { ModuloCurso, LeccionCurso } from "@/content/cursos-detalle";
import { IconChevronDown, IconPlayCircle, IconFileVideo } from "./icons";
import { VideoModal } from "./video-modal";

const ICONO_LECCION: Record<LeccionCurso["tipo"], string> = {
    video: "▶",
    practica: "⚡",
    recurso: "📐",
    quiz: "✓",
};

interface CurriculumProps {
    modulos?: ModuloCurso[];
    curso: Curso;
}

export function Curriculum({ modulos = [], curso }: CurriculumProps) {
    const [open, setOpen] = useState<number[]>([0]);
    const [activeLesson, setActiveLesson] = useState<{
        titulo: string;
        url?: string;
    } | null>(null);

    const allOpen = modulos.length > 0 && open.length === modulos.length;

    function toggle(i: number) {
        setOpen((prev) =>
            prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
        );
    }

    function toggleAll() {
        setOpen(allOpen ? [] : modulos.map((_, i) => i));
    }

    function openPreviewLesson(leccion: LeccionCurso) {
        if (leccion.preview) {
            setActiveLesson({
                titulo: leccion.titulo,
                url: (leccion as { videoUrl?: string }).videoUrl,
            });
        }
    }

    return (
        <>
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
                        bottom: "-80px",
                        left: "-80px",
                        width: "300px",
                        height: "300px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />

                {/* Cabecera y Controles */}
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        gap: "1.25rem",
                        marginBottom: "1.5rem",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <div>
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
                                marginBottom: "0.75rem",
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
                                ESTRUCTURA Y MÓDULOS DE ESTUDIO
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
                            Contenido del{" "}
                            <span
                                style={{
                                    background:
                                        "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Programa Especializado
                            </span>
                        </h2>
                    </div>

                    {/* Botón de Expandir / Contraer Todo */}
                    <button
                        type="button"
                        onClick={toggleAll}
                        style={{
                            padding: "0.5rem 1.1rem",
                            borderRadius: "8px",
                            border: "1px solid rgba(212, 175, 55, 0.35)",
                            background: "rgba(212, 175, 55, 0.08)",
                            color: "var(--gold-primary, #D4AF37)",
                            fontSize: "0.78rem",
                            fontFamily: "JetBrains Mono, monospace",
                            fontWeight: 700,
                            letterSpacing: "0.04em",
                            cursor: "pointer",
                            transition: "all 0.25s ease",
                            boxShadow: "0 0 12px rgba(212, 175, 55, 0.1)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(212, 175, 55, 0.18)";
                            e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                            e.currentTarget.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.25)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(212, 175, 55, 0.08)";
                            e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.35)";
                            e.currentTarget.style.boxShadow = "0 0 12px rgba(212, 175, 55, 0.1)";
                        }}
                    >
                        {allOpen ? "⤺ CONTRAER TODO" : "⤻ EXPANDIR TODO"}
                    </button>
                </div>

                {/* Barra Resumen de Métricas */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1.25rem",
                        padding: "0.6rem 1.25rem",
                        borderRadius: "10px",
                        background: "rgba(7, 7, 8, 0.6)",
                        border: "1px solid rgba(140, 109, 70, 0.2)",
                        fontSize: "0.78rem",
                        fontFamily: "JetBrains Mono, monospace",
                        color: "var(--titanium, #9E9A92)",
                        marginBottom: "1.75rem",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    <span>
                        <strong style={{ color: "var(--ivory-pearl, #F2F0EB)" }}>
                            {modulos.length}
                        </strong>{" "}
                        Módulos
                    </span>
                    <span style={{ color: "rgba(140,109,70,0.4)" }}>|</span>
                    <span>
                        <strong style={{ color: "var(--ivory-pearl, #F2F0EB)" }}>
                            {curso.lecciones}
                        </strong>{" "}
                        Lecciones
                    </span>
                    <span style={{ color: "rgba(140,109,70,0.4)" }}>|</span>
                    <span>
                        <strong style={{ color: "var(--gold-primary, #D4AF37)" }}>
                            {curso.horas}h
                        </strong>{" "}
                        Duración Total
                    </span>
                </div>

                {/* Lista Principal de Módulos (Acordeón) */}
                <div
                    style={{
                        borderRadius: "14px",
                        border: "1px solid rgba(140, 109, 70, 0.25)",
                        overflow: "hidden",
                        background: "rgba(7, 7, 8, 0.5)",
                        position: "relative",
                        zIndex: 2,
                    }}
                >
                    {modulos.map((modulo, i) => {
                        const isOpen = open.includes(i);
                        return (
                            <div
                                key={modulo.id}
                                style={{
                                    borderBottom:
                                        i === modulos.length - 1
                                            ? "none"
                                            : "1px solid rgba(140, 109, 70, 0.18)",
                                    transition: "background 0.3s ease",
                                }}
                            >
                                {/* Botón Encabezado de Módulo */}
                                <button
                                    type="button"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.1rem 1.5rem",
                                        textAlign: "left",
                                        background: isOpen
                                            ? "rgba(212, 175, 55, 0.05)"
                                            : "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "all 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!isOpen) {
                                            e.currentTarget.style.background =
                                                "rgba(255, 255, 255, 0.025)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!isOpen) {
                                            e.currentTarget.style.background = "transparent";
                                        }
                                    }}
                                >
                                    {/* Chevron Rotatorio */}
                                    <span
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: isOpen
                                                ? "rgba(212, 175, 55, 0.2)"
                                                : "rgba(22, 22, 25, 0.8)",
                                            border: isOpen
                                                ? "1px solid var(--gold-primary, #D4AF37)"
                                                : "1px solid rgba(140, 109, 70, 0.3)",
                                            color: "var(--gold-primary, #D4AF37)",
                                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                            transition:
                                                "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <span style={{ display: "inline-flex", width: "16px", height: "16px" }}>
                                            <IconChevronDown />
                                        </span>
                                    </span>

                                    {/* Título del Módulo */}
                                    <span
                                        style={{
                                            flex: 1,
                                            fontWeight: 700,
                                            fontSize: "0.98rem",
                                            color: isOpen
                                                ? "var(--gold-light, #F0D78C)"
                                                : "var(--ivory-pearl, #F2F0EB)",
                                            letterSpacing: "-0.01em",
                                            transition: "color 0.25s ease",
                                        }}
                                    >
                                        {modulo.titulo}
                                    </span>

                                    {/* Detalle secundario del Módulo */}
                                    <span
                                        className="hidden sm:inline-flex"
                                        style={{
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            fontSize: "0.72rem",
                                            fontFamily: "JetBrains Mono, monospace",
                                            color: "var(--titanium, #9E9A92)",
                                            background: "rgba(22, 22, 25, 0.7)",
                                            padding: "0.3rem 0.75rem",
                                            borderRadius: "6px",
                                            border: "1px solid rgba(140, 109, 70, 0.2)",
                                        }}
                                    >
                                        {modulo.lecciones.length} lecciones · {modulo.duracion}
                                    </span>
                                </button>

                                {/* Contenido Desplegable Animado */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                                        transition:
                                            "grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                >
                                    <div style={{ overflow: "hidden" }}>
                                        <div
                                            style={{
                                                borderTop: "1px solid rgba(140, 109, 70, 0.15)",
                                                background: "rgba(0, 0, 0, 0.3)",
                                                padding: "0.5rem 0",
                                            }}
                                        >
                                            {/* Lista de Lecciones */}
                                            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                                                {modulo.lecciones.map((leccion) => (
                                                    <li
                                                        key={leccion.id}
                                                        onClick={() => openPreviewLesson(leccion)}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.85rem",
                                                            padding: "0.75rem 1.5rem 0.75rem 3.25rem",
                                                            fontSize: "0.86rem",
                                                            borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                                                            transition: "all 0.2s ease",
                                                            cursor: leccion.preview ? "pointer" : "default",
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            if (leccion.preview) {
                                                                e.currentTarget.style.background =
                                                                    "rgba(212, 175, 55, 0.08)";
                                                            } else {
                                                                e.currentTarget.style.background =
                                                                    "rgba(255, 255, 255, 0.02)";
                                                            }
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background = "transparent";
                                                        }}
                                                    >
                                                        {/* Ícono de Estado de Lección */}
                                                        <span
                                                            style={{
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                flexShrink: 0,
                                                            }}
                                                        >
                                                            {leccion.preview ? (
                                                                <span
                                                                    style={{
                                                                        display: "inline-flex",
                                                                        width: "18px",
                                                                        height: "18px",
                                                                        color: "var(--gold-primary, #D4AF37)",
                                                                        filter:
                                                                            "drop-shadow(0 0 6px rgba(212,175,55,0.4))",
                                                                    }}
                                                                >
                                                                    <IconPlayCircle />
                                                                </span>
                                                            ) : (
                                                                <span
                                                                    style={{
                                                                        display: "inline-flex",
                                                                        width: "18px",
                                                                        height: "18px",
                                                                        color: "var(--titanium, #9E9A92)",
                                                                        opacity: 0.7,
                                                                    }}
                                                                >
                                                                    <IconFileVideo />
                                                                </span>
                                                            )}
                                                        </span>

                                                        {/* Título de la Lección y Símbolo de Tipo */}
                                                        <span
                                                            style={{
                                                                flex: 1,
                                                                color: "var(--ivory-pearl, #F2F0EB)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                            }}
                                                        >
                                                            <span
                                                                style={{
                                                                    fontSize: "0.72rem",
                                                                    opacity: 0.85,
                                                                    color: "var(--gold-primary, #D4AF37)",
                                                                    fontFamily: "JetBrains Mono, monospace",
                                                                }}
                                                            >
                                                                {ICONO_LECCION[leccion.tipo]}
                                                            </span>
                                                            <span>{leccion.titulo}</span>
                                                        </span>

                                                        {/* Badge de Vista Previa Interactivo */}
                                                        {leccion.preview && (
                                                            <span
                                                                style={{
                                                                    borderRadius: "999px",
                                                                    background: "rgba(212, 175, 55, 0.15)",
                                                                    border: "1px solid rgba(212, 175, 55, 0.4)",
                                                                    padding: "0.2rem 0.65rem",
                                                                    fontSize: "0.68rem",
                                                                    fontWeight: 800,
                                                                    color: "var(--gold-primary, #D4AF37)",
                                                                    fontFamily: "JetBrains Mono, monospace",
                                                                    letterSpacing: "0.04em",
                                                                    boxShadow: "0 0 10px rgba(212, 175, 55, 0.2)",
                                                                    whiteSpace: "nowrap",
                                                                    transition: "all 0.2s ease",
                                                                }}
                                                            >
                                                                ▶ Vista previa
                                                            </span>
                                                        )}

                                                        {/* Duración de la lección */}
                                                        <span
                                                            style={{
                                                                fontSize: "0.75rem",
                                                                fontFamily: "JetBrains Mono, monospace",
                                                                color: "var(--titanium, #9E9A92)",
                                                                whiteSpace: "nowrap",
                                                            }}
                                                        >
                                                            {leccion.duracion}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Chips de Recursos y Archivos Adjuntos */}
                                            {modulo.recursos && modulo.recursos.length > 0 && (
                                                <div
                                                    style={{
                                                        padding: "0.85rem 1.5rem 0.5rem 3.25rem",
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        alignItems: "center",
                                                        gap: "0.5rem",
                                                        borderTop: "1px solid rgba(140, 109, 70, 0.1)",
                                                        marginTop: "0.25rem",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "0.65rem",
                                                            fontFamily: "JetBrains Mono, monospace",
                                                            color: "var(--gold-primary, #D4AF37)",
                                                            fontWeight: 700,
                                                            letterSpacing: "0.08em",
                                                            textTransform: "uppercase",
                                                            width: "100%",
                                                            marginBottom: "0.2rem",
                                                            display: "block",
                                                        }}
                                                    >
                                                        INSUMOS Y ARCHIVOS ADJUNTOS:
                                                    </span>
                                                    {modulo.recursos.map((archivo) => (
                                                        <span
                                                            key={archivo}
                                                            style={{
                                                                fontSize: "0.72rem",
                                                                fontFamily: "JetBrains Mono, monospace",
                                                                color: "var(--ivory-pearl, #F2F0EB)",
                                                                background: "rgba(22, 22, 25, 0.85)",
                                                                border: "1px solid rgba(212, 175, 55, 0.25)",
                                                                borderRadius: "6px",
                                                                padding: "0.25rem 0.6rem",
                                                                display: "inline-flex",
                                                                alignItems: "center",
                                                                gap: "0.35rem",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                                            }}
                                                        >
                                                            <span style={{ color: "var(--gold-primary, #D4AF37)" }}>
                                                                📎
                                                            </span>
                                                            {archivo}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Reproductor de Video HD Conectado Dinámicamente */}
            <VideoModal
                isOpen={!!activeLesson}
                onClose={() => setActiveLesson(null)}
                nombreCurso={curso.nombre}
                tituloLeccion={activeLesson?.titulo}
                videoUrl={activeLesson?.url}
            />
        </>
    );
}

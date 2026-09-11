// src/components/cursos-v0/purchase-panel.tsx
// ============================================================
// Panel de Compra Executive — DC Titanium Builders v3.0
// Estilo: Cyber-Engineering, Multi-Fallback Image Engine, Interactive Video
// ============================================================
"use client";

import React, { useState } from "react";
import type { Curso } from "@/content/cursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import { IMAGENES } from "@/lib/imagenes";
import { VideoModal } from "./video-modal";
import {
    IconPlay,
    IconInfinity,
    IconSmartphone,
    IconAward,
    IconFileText,
    IconDownload,
    IconHeart,
    IconShield,
    IconClock,
} from "./icons";

interface PurchasePanelProps {
    curso: Curso;
    imagen?: string;
    rutaInstruccionImagen?: string;
    hotmartUrl: string;
}

export function PurchasePanel({
    curso,
    imagen,
    hotmartUrl,
}: PurchasePanelProps) {
    const [wished, setWished] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    const { items, moneda, addItem, toggleCart } = useCart();

    const enCarrito = items.some((i) => i.id === curso.id);
    const precioOriginal = curso.precioOriginal ?? curso.precio;
    const descuento =
        precioOriginal > curso.precio
            ? Math.round((1 - curso.precio / precioOriginal) * 100)
            : 0;

    // Resolución de la imagen con Fallback al mapa de IMAGENES o al Logo Oficial
    const rutaImagenFinal =
        imagen ||
        IMAGENES.cursos[curso.id] ||
        IMAGENES.logo ||
        "/Logo_V8_Premium_Serio.png";

    const includes = [
        { Icon: IconClock, label: `${curso.horas || 24} horas de video bajo demanda HD` },
        { Icon: IconFileText, label: `${curso.lecciones || 48} lecciones y recursos descargables` },
        { Icon: IconDownload, label: `Modelos ${curso.software?.[0] || "BIM"} & Scripts listos para usar` },
        { Icon: IconSmartphone, label: "Acceso multiplataforma (Móvil, Tablet, PC)" },
        { Icon: IconInfinity, label: "Acceso ilimitado de por vida" },
        { Icon: IconAward, label: "Certificado de Finalización Firmado" },
    ];

    function inscribirse() {
        addItem({
            id: curso.id,
            titulo: curso.nombre,
            precio: curso.precio,
            software: curso.software || [],
        });
        toggleCart(true);
    }

    return (
        <>
            <div
                id="panel-compra"
                style={{
                    position: "relative",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid rgba(212, 175, 55, 0.35)",
                    background: "linear-gradient(165deg, rgba(22, 22, 27, 0.96) 0%, rgba(10, 10, 12, 0.99) 100%)",
                    boxShadow: "0 30px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(212, 175, 55, 0.12)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                }}
            >
                {/* ── Luz Ambiental Trasera ── */}
                <div
                    aria-hidden
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "180px",
                        background: "radial-gradient(circle at 90% 10%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                />

                {/* ── Reproductor Flotante Interactivo Anti-Fallo ── */}
                <div
                    onClick={() => setIsVideoOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/9",
                        overflow: "hidden",
                        cursor: "pointer",
                        zIndex: 2,
                        background: "#0E0E12",
                    }}
                >
                    {!imageError ? (
                        <img
                            src={rutaImagenFinal}
                            alt="" /* Se deja el alt vacío para NUNCA dibujar texto feo si falla */
                            onError={() => setImageError(true)}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                                filter: isHovered ? "brightness(0.85) scale(1.04)" : "brightness(0.75) scale(1)",
                                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                        />
                    ) : (
                        /* Portada Generada Dinámicamente si la imagen no existe en public/ */
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(7,7,8,0.98) 100%)",
                                padding: "1.5rem",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={IMAGENES.logo}
                                alt="Logo"
                                style={{ width: "45px", height: "45px", marginBottom: "0.5rem", opacity: 0.8 }}
                            />
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                    color: "#D4AF37",
                                    fontWeight: 800,
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {curso.nombre}
                            </span>
                        </div>
                    )}

                    {/* Overlay de Degradado CAD */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg, rgba(7,7,8,0.3) 0%, rgba(7,7,8,0.85) 100%)",
                        }}
                    />

                    {/* Badge HD 60 FPS */}
                    <div
                        style={{
                            position: "absolute",
                            top: "0.85rem",
                            left: "0.85rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.45rem",
                            padding: "0.3rem 0.7rem",
                            borderRadius: "6px",
                            background: "rgba(10, 10, 12, 0.85)",
                            border: "1px solid rgba(212, 175, 55, 0.4)",
                            backdropFilter: "blur(8px)",
                            fontSize: "0.65rem",
                            fontFamily: "JetBrains Mono, monospace",
                            fontWeight: 800,
                            color: "#D4AF37",
                            letterSpacing: "0.05em",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
                        }}
                    >
                        <span
                            style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: "#10B981",
                                boxShadow: "0 0 8px #10B981",
                            }}
                        />
                        DEMO HD 60 FPS
                    </div>

                    {/* Duración */}
                    <div
                        style={{
                            position: "absolute",
                            top: "0.85rem",
                            right: "0.85rem",
                            padding: "0.3rem 0.65rem",
                            borderRadius: "6px",
                            background: "rgba(0,0,0,0.75)",
                            border: "1px solid rgba(255,255,255,0.15)",
                            fontSize: "0.65rem",
                            fontFamily: "JetBrains Mono, monospace",
                            color: "#F2F0EB",
                        }}
                    >
                        ⏱ {curso.horas || 24}h
                    </div>

                    {/* Play Center */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                        }}
                    >
                        <div
                            style={{
                                width: "68px",
                                height: "68px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #D4AF37 0%, #F0D78C 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: isHovered
                                    ? "0 0 50px rgba(212,175,55,0.9), 0 0 15px rgba(255,255,255,0.8)"
                                    : "0 0 30px rgba(212,175,55,0.4)",
                                transform: isHovered ? "scale(1.12)" : "scale(1)",
                                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                                color: "#070708",
                            }}
                        >
                            <span style={{ display: "inline-flex", width: "28px", height: "28px", marginLeft: "4px" }}>
                                <IconPlay />
                            </span>
                        </div>

                        <div
                            style={{
                                background: "rgba(10, 10, 12, 0.9)",
                                border: "1px solid rgba(212, 175, 55, 0.35)",
                                padding: "0.35rem 1rem",
                                borderRadius: "999px",
                                fontSize: "0.68rem",
                                fontWeight: 800,
                                fontFamily: "JetBrains Mono, monospace",
                                color: "#F2F0EB",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                            }}
                        >
                            {isHovered ? "▶ REPRODUCIR AHORA" : "REPRODUCIR VISTA PREVIA"}
                        </div>
                    </div>
                </div>

                {/* ── Detalle del Programa, Precios y CTA ── */}
                <div style={{ padding: "1.75rem", position: "relative", zIndex: 2 }}>

                    {/* Precios */}
                    <div style={{ marginBottom: "1.5rem" }}>
                        <div style={{ fontSize: "0.68rem", fontFamily: "JetBrains Mono, monospace", color: "#9E9A92", marginBottom: "0.35rem" }}>
                            INVERSIÓN DEL PROGRAMA:
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.85rem" }}>
                            <span
                                style={{
                                    fontSize: "2.3rem",
                                    fontWeight: 900,
                                    color: "#D4AF37",
                                    fontFamily: "JetBrains Mono, monospace",
                                    lineHeight: 1,
                                    textShadow: "0 0 25px rgba(212,175,55,0.35)",
                                }}
                            >
                                {formatPrice(curso.precio, moneda)}
                            </span>

                            {precioOriginal > curso.precio && (
                                <span
                                    style={{
                                        fontSize: "1rem",
                                        color: "#9E9A92",
                                        textDecoration: "line-through",
                                        fontFamily: "JetBrains Mono, monospace",
                                    }}
                                >
                                    {formatPrice(precioOriginal, moneda)}
                                </span>
                            )}

                            {descuento > 0 && (
                                <span
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 800,
                                        color: "#10B981",
                                        background: "rgba(16,185,129,0.15)",
                                        border: "1px solid rgba(16,185,129,0.4)",
                                        borderRadius: "6px",
                                        padding: "0.2rem 0.55rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                    }}
                                >
                                    -{descuento}% OFF
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Botones */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "1.35rem" }}>
                        <button
                            type="button"
                            onClick={inscribirse}
                            disabled={enCarrito}
                            style={{
                                width: "100%",
                                padding: "1rem",
                                borderRadius: "12px",
                                border: "none",
                                background: enCarrito
                                    ? "rgba(158,154,146,0.18)"
                                    : "linear-gradient(135deg, #D4AF37 0%, #F0D78C 100%)",
                                color: enCarrito ? "#9E9A92" : "#070708",
                                fontSize: "0.92rem",
                                fontWeight: 900,
                                cursor: enCarrito ? "default" : "pointer",
                                letterSpacing: "0.06em",
                                transition: "all 0.3s ease",
                                boxShadow: enCarrito ? "none" : "0 4px 25px rgba(212,175,55,0.35)",
                                fontFamily: "JetBrains Mono, monospace",
                            }}
                            onMouseEnter={(e) => {
                                if (!enCarrito) {
                                    e.currentTarget.style.boxShadow = "0 0 35px rgba(212,175,55,0.6), 0 6px 20px rgba(0,0,0,0.4)";
                                    e.currentTarget.style.transform = "translateY(-1.5px)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!enCarrito) {
                                    e.currentTarget.style.boxShadow = "0 4px 25px rgba(212,175,55,0.35)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }
                            }}
                        >
                            {enCarrito ? "✓ EN TU CARRITO DE COMPRA" : "INSCRIBIRME AL PROGRAMA"}
                        </button>

                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <a
                                href={hotmartUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    flex: 1,
                                    padding: "0.8rem",
                                    borderRadius: "10px",
                                    border: "1px solid rgba(212, 175, 55, 0.35)",
                                    background: "rgba(22,22,27,0.8)",
                                    textAlign: "center",
                                    fontSize: "0.82rem",
                                    fontWeight: 700,
                                    color: "#F2F0EB",
                                    textDecoration: "none",
                                    transition: "all 0.25s ease",
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#D4AF37";
                                    e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.35)";
                                    e.currentTarget.style.background = "rgba(22,22,27,0.8)";
                                }}
                            >
                                Checkout Hotmart
                            </a>

                            <button
                                type="button"
                                onClick={() => setWished((w) => !w)}
                                aria-pressed={wished}
                                aria-label="Guardar en favoritos"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    flexShrink: 0,
                                    borderRadius: "10px",
                                    border: "1px solid rgba(212, 175, 55, 0.35)",
                                    background: wished ? "rgba(212,175,55,0.18)" : "rgba(22,22,27,0.8)",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: wished ? "#D4AF37" : "#9E9A92",
                                    transition: "all 0.25s ease",
                                }}
                            >
                                <span style={{ display: "inline-flex", width: "20px", height: "20px" }}>
                                    <IconHeart />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Garantía */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            fontSize: "0.76rem",
                            color: "#9E9A92",
                            textAlign: "center",
                            marginBottom: "1.5rem",
                            padding: "0.5rem",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        <span style={{ display: "inline-flex", width: "16px", height: "16px", color: "#D4AF37" }}>
                            <IconShield />
                        </span>
                        Garantía Incondicional de 7 días (100% Reembolsable)
                    </div>

                    <div
                        style={{
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
                            marginBottom: "1.25rem",
                        }}
                    />

                    {/* Qué incluye */}
                    <h3
                        style={{
                            fontSize: "0.78rem",
                            fontWeight: 800,
                            color: "#F2F0EB",
                            marginBottom: "1rem",
                            letterSpacing: "0.08em",
                            fontFamily: "JetBrains Mono, monospace",
                            textTransform: "uppercase",
                        }}
                    >
                        EL PROGRAMA INCLUYE:
                    </h3>

                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.8rem",
                            marginBottom: "1.5rem",
                            padding: 0,
                            listStyle: "none",
                        }}
                    >
                        {includes.map(({ Icon, label }) => (
                            <li
                                key={label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    fontSize: "0.82rem",
                                    color: "#9E9A92",
                                    lineHeight: 1.4,
                                }}
                            >
                                <span
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                        flexShrink: 0,
                                        color: "#D4AF37",
                                        display: "inline-flex",
                                    }}
                                >
                                    <Icon />
                                </span>
                                <span>{label}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Métodos de Pago */}
                    <div
                        style={{
                            borderTop: "1px solid rgba(212,175,55,0.18)",
                            paddingTop: "1.1rem",
                            textAlign: "center",
                            fontSize: "0.68rem",
                            color: "#9E9A92",
                            fontFamily: "JetBrains Mono, monospace",
                            letterSpacing: "0.05em",
                        }}
                    >
                        🔒 Pago Seguro SSL • Visa • Mastercard • PayPal
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                nombreCurso={curso.nombre}
                tituloLeccion="Demostración Técnica e Introducción al Programa"
            />
        </>
    );
}

// src/components/Galeria.tsx
// ============================================================
// Sección Galería — Haute Elegance v2.0 (Alta Gama Executive)
// Fondo: Royal Obsidian #10141F — según mapa de fondos
// Conectado 100% a variables CSS de globals.css y recursos
// ============================================================
"use client";

import { useState } from "react";
import type { Recurso } from "@/lib/recursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import { whatsappHref } from "@/content/empresa";

const FILTROS = ["Todos", "Gratis", "Premium"] as const;
const TRACK_URL = process.env.NEXT_PUBLIC_RECURSOS_API_URL;

function registrarDescarga(id: string) {
    if (!TRACK_URL) return;
    fetch(`${TRACK_URL}?action=download&id=${encodeURIComponent(id)}`, { mode: "no-cors" }).catch(() => { });
}

// ── Placeholder de Alto Rendimiento AEC ───────────────────────
function ImagenPlaceholder({ titulo, categoria }: { titulo: string; categoria: string }) {
    return (
        <div
            style={{
                width: "100%",
                height: "220px",
                background: "linear-gradient(135deg, #070708 0%, #161619 50%, #0D1018 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Retícula Técnica CAD/BIM de Fondo */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%),
            linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: "100% 100%, 20px 20px, 20px 20px",
                }}
            />

            {/* Ícono Estructural Elegante */}
            <div
                style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-primary, #D4AF37)",
                    fontSize: "1.6rem",
                    position: "relative",
                    boxShadow: "0 0 20px rgba(212,175,55,0.15)",
                }}
            >
                📐
            </div>

            <div style={{ textAlign: "center", position: "relative", padding: "0 1rem" }}>
                <p
                    style={{
                        fontSize: "0.68rem",
                        fontFamily: "JetBrains Mono, monospace",
                        color: "var(--gold-primary, #D4AF37)",
                        letterSpacing: "0.12em",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                    }}
                >
                    {categoria || "RECURSO TÉCNICO"}
                </p>
                <p
                    style={{
                        fontSize: "0.62rem",
                        color: "var(--titanium, #9E9A92)",
                        fontFamily: "JetBrains Mono, monospace",
                        letterSpacing: "0.06em",
                        opacity: 0.7,
                    }}
                >
                    TITANIUM BUILDERS • MODELO BIM
                </p>
            </div>
        </div>
    );
}

export default function Galeria({ recursos }: { recursos: Recurso[] }) {
    const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");
    const [preview, setPreview] = useState<Recurso | null>(null);
    const { moneda } = useCart();

    const filtrados = recursos.filter((g) => {
        if (filtro === "Gratis") return g.tipo === "gratis";
        if (filtro === "Premium") return g.tipo === "pago";
        return true;
    });

    return (
        <section
            id="galeria"
            style={{
                background: "var(--royal-obsidian, #10141F)",
                padding: "6rem 1.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo ambiental dorado */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "-150px",
                    right: "-150px",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>

                {/* ── Encabezado Principal ── */}
                <div style={{ marginBottom: "3.5rem" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "999px",
                            border: "1px solid rgba(212,175,55,0.3)",
                            background: "rgba(212,175,55,0.06)",
                            marginBottom: "1rem",
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
                            RECURSOS & DESCARGAS PROFESIONALES
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(2rem, 3.5vw, 2.85rem)",
                            fontWeight: 800,
                            color: "var(--ivory-pearl, #F2F0EB)",
                            letterSpacing: "-0.03em",
                            marginBottom: "1rem",
                            lineHeight: 1.2,
                        }}
                    >
                        Renders, Planos y{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Plantillas de Cálculo
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "var(--titanium, #9E9A92)",
                            maxWidth: "600px",
                            lineHeight: 1.7,
                        }}
                    >
                        Descarga recursos gratuitos de proyectos reales o adquiere paquetes premium con plantillas parametrizadas, hojas de cálculo y modelos 3D BIM listos para producción.
                    </p>
                </div>

                {/* ── Filtros Glassmorphic ── */}
                <div style={{ display: "flex", gap: "0.6rem", marginBottom: "3rem", flexWrap: "wrap" }}>
                    {FILTROS.map((f) => {
                        const activo = filtro === f;
                        return (
                            <button
                                key={f}
                                onClick={() => setFiltro(f)}
                                style={{
                                    padding: "0.5rem 1.4rem",
                                    borderRadius: "8px",
                                    fontSize: "0.82rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    border: "1px solid",
                                    borderColor: activo ? "var(--gold-primary, #D4AF37)" : "rgba(140,109,70,0.3)",
                                    background: activo
                                        ? "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))"
                                        : "rgba(22,22,25,0.6)",
                                    color: activo ? "var(--gold-primary, #D4AF37)" : "var(--titanium, #9E9A92)",
                                    boxShadow: activo ? "0 0 18px rgba(212,175,55,0.2)" : "none",
                                    transition: "all 0.3s ease",
                                    fontFamily: "JetBrains Mono, monospace",
                                    letterSpacing: "0.04em",
                                }}
                                onMouseEnter={(e) => {
                                    if (!activo) {
                                        e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
                                        e.currentTarget.style.color = "var(--ivory-pearl, #F2F0EB)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!activo) {
                                        e.currentTarget.style.borderColor = "rgba(140,109,70,0.3)";
                                        e.currentTarget.style.color = "var(--titanium, #9E9A92)";
                                    }
                                }}
                            >
                                {f}
                            </button>
                        );
                    })}
                </div>

                {/* ── Grid de Recursos ── */}
                {filtrados.length === 0 ? (
                    <div
                        style={{
                            padding: "3rem",
                            borderRadius: "16px",
                            background: "rgba(22,22,25,0.6)",
                            border: "1px dashed rgba(140,109,70,0.3)",
                            textAlign: "center",
                        }}
                    >
                        <p
                            style={{
                                color: "var(--titanium, #9E9A92)",
                                fontSize: "0.9rem",
                                fontFamily: "JetBrains Mono, monospace",
                            }}
                        >
                            Aún no hay recursos disponibles en la categoría seleccionada.
                        </p>
                    </div>
                ) : (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                        style={{ gap: "1.75rem" }}
                    >
                        {filtrados.map((g) => (
                            <div
                                key={g.id}
                                className="card-glass-gold"
                                style={{
                                    background: "rgba(22,22,25,0.85)",
                                    backdropFilter: "blur(12px)",
                                    borderRadius: "16px",
                                    border: "1px solid rgba(140,109,70,0.25)",
                                    overflow: "hidden",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
                                    e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.12), 0 20px 40px rgba(0,0,0,0.5)";
                                    e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "rgba(140,109,70,0.25)";
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                {/* Media Header */}
                                <div style={{ position: "relative" }}>
                                    {g.imagen ? (
                                        <img
                                            src={g.imagen}
                                            alt={g.titulo}
                                            style={{
                                                width: "100%",
                                                height: "220px",
                                                objectFit: "cover",
                                                display: "block",
                                            }}
                                        />
                                    ) : (
                                        <ImagenPlaceholder titulo={g.titulo} categoria={g.categoria} />
                                    )}

                                    {/* Badge Tipo (Gratis / Premium) */}
                                    <span
                                        style={{
                                            position: "absolute",
                                            top: "0.85rem",
                                            left: "0.85rem",
                                            padding: "0.3rem 0.85rem",
                                            borderRadius: "999px",
                                            fontSize: "0.62rem",
                                            fontWeight: 800,
                                            letterSpacing: "0.08em",
                                            fontFamily: "JetBrains Mono, monospace",
                                            color: g.tipo === "gratis" ? "#10B981" : "var(--gold-primary, #D4AF37)",
                                            background: g.tipo === "gratis"
                                                ? "rgba(16,185,129,0.15)"
                                                : "rgba(212,175,55,0.15)",
                                            border: g.tipo === "gratis"
                                                ? "1px solid rgba(16,185,129,0.35)"
                                                : "1px solid rgba(212,175,55,0.35)",
                                            backdropFilter: "blur(8px)",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                        }}
                                    >
                                        {g.tipo === "gratis" ? "GRATUITO" : "PREMIUM"}
                                    </span>
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "0.65rem",
                                                color: "var(--titanium, #9E9A92)",
                                                fontFamily: "JetBrains Mono, monospace",
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                                marginBottom: "0.6rem",
                                            }}
                                        >
                                            {g.categoria}{g.tipoArchivo ? " • " + g.tipoArchivo.toUpperCase() : ""}
                                        </p>
                                        <h3
                                            style={{
                                                fontSize: "1.05rem",
                                                fontWeight: 700,
                                                color: "var(--ivory-pearl, #F2F0EB)",
                                                marginBottom: "1.25rem",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {g.titulo}
                                        </h3>
                                    </div>

                                    {/* Acciones */}
                                    {g.tipo === "gratis" ? (
                                        <button
                                            onClick={() => setPreview(g)}
                                            style={{
                                                width: "100%",
                                                padding: "0.7rem 1.25rem",
                                                borderRadius: "8px",
                                                background: "transparent",
                                                color: "var(--gold-primary, #D4AF37)",
                                                fontSize: "0.82rem",
                                                fontWeight: 700,
                                                border: "1px solid rgba(212,175,55,0.4)",
                                                cursor: "pointer",
                                                fontFamily: "JetBrains Mono, monospace",
                                                transition: "all 0.25 ease",
                                                letterSpacing: "0.03em",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                                                e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                                                e.currentTarget.style.boxShadow = "0 0 15px rgba(212,175,55,0.2)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "transparent";
                                                e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            Ver / Descargar →
                                        </button>
                                    ) : (
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                gap: "0.75rem",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: "1.3rem",
                                                    fontWeight: 900,
                                                    color: "var(--gold-primary, #D4AF37)",
                                                    fontFamily: "JetBrains Mono, monospace",
                                                    textShadow: "0 0 18px rgba(212,175,55,0.3)",
                                                }}
                                            >
                                                {formatPrice(g.precio, moneda)}
                                            </span>

                                            <a
                                                href={g.linkCompra || whatsappHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    padding: "0.65rem 1.25rem",
                                                    borderRadius: "8px",
                                                    background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                                    color: "var(--obsidian, #070708)",
                                                    fontSize: "0.82rem",
                                                    fontWeight: 700,
                                                    textDecoration: "none",
                                                    whiteSpace: "nowrap",
                                                    boxShadow: "0 4px 15px rgba(212,175,55,0.25)",
                                                    transition: "all 0.3s ease",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 0 25px rgba(212,175,55,0.45)";
                                                    e.currentTarget.style.transform = "translateY(-1px)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(212,175,55,0.25)";
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                }}
                                            >
                                                Adquirir Ahora
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Lightbox Modal Executive ── */}
            {preview && (
                <div
                    onClick={() => setPreview(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(7,7,8,0.92)",
                        backdropFilter: "blur(16px)",
                        zIndex: 300,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1.5rem",
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: "min(820px, 100%)",
                            background: "linear-gradient(160deg, rgba(22,22,25,0.95), rgba(13,16,24,0.98))",
                            borderRadius: "20px",
                            overflow: "hidden",
                            border: "1px solid rgba(212,175,55,0.35)",
                            boxShadow: "0 35px 90px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.15)",
                        }}
                    >
                        {/* Visor Multimedia */}
                        {preview.tipoArchivo === "video" ? (
                            <video
                                controls
                                poster={preview.imagen}
                                src={preview.linkArchivo}
                                style={{ width: "100%", maxHeight: "60vh", display: "block", background: "#000" }}
                            />
                        ) : preview.imagen ? (
                            <img
                                src={preview.imagen}
                                alt={preview.titulo}
                                style={{ width: "100%", maxHeight: "60vh", objectFit: "cover", display: "block" }}
                            />
                        ) : (
                            <ImagenPlaceholder titulo={preview.titulo} categoria={preview.categoria} />
                        )}

                        {/* Footer de Acciones del Lightbox */}
                        <div
                            style={{
                                padding: "1.75rem 2rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "1rem",
                                flexWrap: "wrap",
                                borderTop: "1px solid rgba(140,109,70,0.25)",
                                background: "rgba(10,10,12,0.8)",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: "0.68rem",
                                        color: "var(--gold-primary, #D4AF37)",
                                        fontFamily: "JetBrains Mono, monospace",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        marginBottom: "0.3rem",
                                    }}
                                >
                                    {preview.categoria}
                                </p>
                                <h3
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        color: "var(--ivory-pearl, #F2F0EB)",
                                    }}
                                >
                                    {preview.titulo}
                                </h3>
                            </div>

                            <div style={{ display: "flex", gap: "0.75rem" }}>
                                <a
                                    href={preview.linkArchivo}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => registrarDescarga(preview.id)}
                                    style={{
                                        padding: "0.75rem 1.75rem",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                        color: "var(--obsidian, #070708)",
                                        fontWeight: 700,
                                        fontSize: "0.88rem",
                                        textDecoration: "none",
                                        boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
                                        transition: "all 0.25s ease",
                                    }}
                                >
                                    ↓ Descargar Recurso
                                </a>

                                <button
                                    onClick={() => setPreview(null)}
                                    style={{
                                        padding: "0.75rem 1.5rem",
                                        borderRadius: "10px",
                                        border: "1px solid rgba(140,109,70,0.35)",
                                        background: "transparent",
                                        color: "var(--titanium, #9E9A92)",
                                        fontWeight: 600,
                                        fontSize: "0.88rem",
                                        cursor: "pointer",
                                        transition: "all 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
                                        e.currentTarget.style.color = "var(--ivory-pearl, #F2F0EB)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(140,109,70,0.35)";
                                        e.currentTarget.style.color = "var(--titanium, #9E9A92)";
                                    }}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

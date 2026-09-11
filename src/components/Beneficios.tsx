// src/components/Beneficios.tsx
// ============================================================
// Sección Beneficios — Haute Elegance v2.0 (Alta Gama)
// Fondo: Royal Obsidian #10141F — según mapa de fondos
// Conectado 100% a variables CSS de globals.css
// ============================================================
"use client";

import { BENEFICIOS_ITEMS as ITEMS } from "@/content/empresa";

export default function Beneficios() {
    return (
        <section
            id="comunidad"
            style={{
                background: "var(--royal-obsidian, #10141F)",
                padding: "5.5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo decorativo central */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "650px",
                    height: "650px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>

                {/* ── Encabezado centrado ── */}
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
                            VENTAJA COMPETITIVA AEC
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                            fontWeight: 800,
                            color: "var(--ivory-pearl, #F2F0EB)",
                            letterSpacing: "-0.03em",
                            lineHeight: 1.2,
                        }}
                    >
                        Por qué elegir{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            DC Titanium Builders
                        </span>
                    </h2>
                </div>

                {/* ── Grid de tarjetas ── */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    style={{ gap: "1.5rem" }}
                >
                    {ITEMS.map((it) => (
                        <div
                            key={it.titulo}
                            className="card-glass-gold"
                            style={{
                                background: "rgba(22,22,25,0.85)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(140,109,70,0.25)",
                                borderRadius: "16px",
                                padding: "2.25rem 1.5rem",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
                                e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.12), 0 20px 40px rgba(0,0,0,0.5)";
                                e.currentTarget.style.transform = "translateY(-4px)";
                                const topBar = e.currentTarget.querySelector(".gold-hover-bar") as HTMLElement;
                                if (topBar) topBar.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140,109,70,0.25)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                                const topBar = e.currentTarget.querySelector(".gold-hover-bar") as HTMLElement;
                                if (topBar) topBar.style.opacity = "0";
                            }}
                        >
                            {/* Línea dorada superior al hover */}
                            <div
                                className="gold-hover-bar"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: "linear-gradient(90deg, transparent, var(--gold-primary, #D4AF37), transparent)",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                }}
                            />

                            {/* Ícono */}
                            <div
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "12px",
                                    background: "rgba(212,175,55,0.08)",
                                    border: "1px solid rgba(212,175,55,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.5rem",
                                    color: "var(--gold-primary, #D4AF37)",
                                    marginBottom: "1.5rem",
                                    boxShadow: "0 0 15px rgba(212,175,55,0.08)",
                                }}
                            >
                                {it.icono}
                            </div>

                            {/* Título */}
                            <h3
                                style={{
                                    fontSize: "0.92rem",
                                    fontWeight: 700,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    letterSpacing: "0.02em",
                                    marginBottom: "0.75rem",
                                }}
                            >
                                {it.titulo}
                            </h3>

                            {/* Descripción */}
                            <p
                                style={{
                                    fontSize: "0.85rem",
                                    color: "var(--titanium, #9E9A92)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {it.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

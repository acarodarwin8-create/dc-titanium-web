// src/components/QuienesSomos.tsx
// ============================================================
// Sección Quiénes Somos — Haute Elegance v2.0 (Alta Gama)
// Fondo: #0D1018 (Between) — según mapa de fondos
// Conectado 100% a variables CSS de globals.css
// ============================================================
"use client";

import Link from "next/link";
import { QUIENES_SOMOS_BULLETS as BULLETS, QUIENES_SOMOS_METRICAS as METRICAS } from "@/content/empresa";

// ── Check dorado premium ─────────────────────────────────────
function CheckDorado() {
    return (
        <span style={{
            width: "24px", height: "24px",
            borderRadius: "50%",
            background: "rgba(212,175,55,0.1)",
            border: "1px solid rgba(212,175,55,0.4)",
            display: "flex", alignItems: "center",
            justifyContent: "center", flexShrink: 0,
            boxShadow: "0 0 10px rgba(212,175,55,0.15)",
            transition: "all 0.3s ease",
        }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="var(--gold-primary, #D4AF37)" strokeWidth="3">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </span>
    );
}

export default function QuienesSomos() {
    return (
        <section
            id="conocenos"
            style={{
                background: "var(--between, #0D1018)",
                padding: "5.5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo decorativo derecha */}
            <div aria-hidden style={{
                position: "absolute", top: "-100px", right: "-100px",
                width: "550px", height: "550px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* ── IZQUIERDA — Texto Explicativo ── */}
                    <div>
                        {/* Eyebrow */}
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "999px",
                            border: "1px solid rgba(212,175,55,0.3)",
                            background: "rgba(212,175,55,0.06)",
                            marginBottom: "1.25rem",
                        }}>
                            <span style={{
                                width: "6px", height: "6px", borderRadius: "50%",
                                background: "var(--gold-primary, #D4AF37)",
                                boxShadow: "0 0 8px #D4AF37",
                            }} />
                            <span style={{
                                fontSize: "0.68rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                letterSpacing: "0.12em",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}>
                                SOBRE NOSOTROS • FILOSOFÍA AEC
                            </span>
                        </div>

                        {/* Título */}
                        <h2 style={{
                            fontSize: "clamp(2rem,3.5vw,2.75rem)",
                            fontWeight: 800,
                            color: "var(--ivory-pearl, #F2F0EB)",
                            letterSpacing: "-0.03em",
                            marginBottom: "1.5rem",
                            lineHeight: 1.2,
                        }}>
                            No enseñamos teoría{" "}
                            <span style={{
                                background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                de libro de texto.
                            </span>
                        </h2>

                        {/* Descripción */}
                        <p style={{
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "var(--titanium, #9E9A92)",
                            marginBottom: "1.5rem",
                            maxWidth: "500px",
                        }}>
                            Enseñamos la práctica real de la oficina de cálculo estructural a la obra.
                            Fundada por ingenieros en ejercicio, DC Titanium Builders nace para cerrar
                            la brecha entre el modelado digital avanzado (BIM) y la seguridad estructural
                            de alto rendimiento bajo normativas vigentes.
                        </p>

                        {/* Línea decorativa dorada */}
                        <div style={{
                            width: "64px", height: "2px",
                            background: "linear-gradient(90deg, var(--gold-primary, #D4AF37), transparent)",
                            marginBottom: "1.75rem",
                            borderRadius: "2px",
                        }} />

                        {/* Bullets */}
                        <div style={{
                            display: "flex", flexDirection: "column",
                            gap: "1.1rem", marginBottom: "2.25rem",
                        }}>
                            {BULLETS.map((b) => (
                                <div key={b} style={{
                                    display: "flex", alignItems: "center",
                                    gap: "0.9rem",
                                }}>
                                    <CheckDorado />
                                    <span style={{
                                        fontSize: "0.95rem",
                                        color: "var(--ivory-pearl, #F2F0EB)",
                                        fontWeight: 500,
                                        opacity: 0.9,
                                    }}>
                                        {b}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="#contacto"
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
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.45), 0 6px 20px rgba(0,0,0,0.3)";
                                e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.25)";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            Conoce Nuestra Historia
                            <span style={{ fontSize: "1.1rem" }}>→</span>
                        </Link>
                    </div>

                    {/* ── DERECHA — Logo + Métricas ── */}
                    <div>
                        {/* Logo circular con halo dorado */}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "3.5rem",
                        }}>
                            <div style={{ position: "relative", width: "300px", height: "300px", maxWidth: "100%" }}>
                                {/* Halo exterior */}
                                <div style={{
                                    position: "absolute", inset: "-24px",
                                    borderRadius: "50%",
                                    background: "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)",
                                }} />
                                {/* Anillo giratorio decorativo */}
                                <div style={{
                                    position: "absolute", inset: "-10px",
                                    borderRadius: "50%",
                                    border: "1px dashed rgba(212,175,55,0.3)",
                                }} />
                                <img
                                    src="/Logo_V8_Premium_Serio.png"
                                    alt="DC Titanium Builders"
                                    className="tilt-3d-soft"
                                    style={{
                                        position: "relative",
                                        width: "300px", height: "300px",
                                        maxWidth: "100%",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "3px solid var(--gold-primary, #D4AF37)",
                                        boxShadow: "0 0 45px rgba(212,175,55,0.25), 0 20px 50px rgba(0,0,0,0.6)",
                                        transition: "all 0.3s ease",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.boxShadow = "0 0 65px rgba(212,175,55,0.45), 0 20px 50px rgba(0,0,0,0.7)";
                                        e.currentTarget.style.transform = "scale(1.02)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.boxShadow = "0 0 45px rgba(212,175,55,0.25), 0 20px 50px rgba(0,0,0,0.6)";
                                        e.currentTarget.style.transform = "scale(1)";
                                    }}
                                />
                            </div>
                        </div>

                        {/* Métricas */}
                        <div
                            className="grid grid-cols-2 sm:grid-cols-4"
                            style={{
                                gap: "1rem",
                                padding: "1.75rem 1.25rem",
                                background: "rgba(22,22,25,0.8)",
                                backdropFilter: "blur(12px)",
                                borderRadius: "16px",
                                border: "1px solid rgba(140,109,70,0.3)",
                                boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                            }}
                        >
                            {METRICAS.map((m, i) => (
                                <div
                                    key={m.l}
                                    style={{
                                        textAlign: "center",
                                        padding: "0 0.5rem",
                                        borderLeft: i > 0 ? "1px solid rgba(212,175,55,0.18)" : "none",
                                    }}
                                >
                                    <p style={{
                                        fontSize: "clamp(1.75rem,2.8vw,2.25rem)",
                                        fontWeight: 900,
                                        color: "var(--gold-primary, #D4AF37)",
                                        fontFamily: "JetBrains Mono, monospace",
                                        letterSpacing: "-0.02em",
                                        marginBottom: "0.3rem",
                                        textShadow: "0 0 20px rgba(212,175,55,0.35)",
                                    }}>
                                        {m.v}
                                    </p>
                                    <p style={{
                                        fontSize: "0.65rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "var(--titanium, #9E9A92)",
                                        fontWeight: 600,
                                    }}>
                                        {m.l}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

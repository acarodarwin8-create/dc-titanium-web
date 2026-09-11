// src/components/Descuentos.tsx
// ============================================================
// Sección Descuentos — Haute Elegance v2.0 (Alta Gama)
// Fondo: Onyx Noir #070708 — según mapa de fondos
// Botón WhatsApp: dorado — paleta Haute Elegance
// ============================================================
"use client";

import { DESCUENTOS_ITEMS as BENEFICIOS, whatsappHref } from "@/content/empresa";

export default function Descuentos() {
    return (
        <section
            id="descuentos"
            style={{
                background: "var(--obsidian, #070708)",
                padding: "5.5rem 1.5rem",
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid rgba(140,109,70,0.18)",
                borderBottom: "1px solid rgba(140,109,70,0.18)",
            }}
        >
            {/* Halo decorativo superior derecho */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: "-100px",
                    right: "-100px",
                    width: "550px",
                    height: "550px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>

                {/* ── Encabezado ── */}
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
                            BENEFICIOS & DESCUENTOS EXCLUSIVOS
                        </span>
                    </div>

                    <h2
                        style={{
                            fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
                            fontWeight: 800,
                            color: "var(--ivory-pearl, #F2F0EB)",
                            letterSpacing: "-0.03em",
                            marginBottom: "1rem",
                            lineHeight: 1.2,
                        }}
                    >
                        Invierte en tu{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            desarrollo profesional
                        </span>
                    </h2>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "var(--titanium, #9E9A92)",
                            maxWidth: "580px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Accede a tarifas y facilidades de pago diseñadas para ingenieros, proyectistas y calculistas estructurales comprometidos con la excelencia.
                    </p>
                </div>

                {/* ── Tarjetas de descuento ── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: "1.75rem", marginBottom: "3.5rem" }}
                >
                    {BENEFICIOS.map((b) => (
                        <div
                            key={b.titulo}
                            className="card-glass-gold"
                            style={{
                                background: "rgba(22,22,25,0.85)",
                                backdropFilter: "blur(12px)",
                                borderRadius: "16px",
                                padding: "2.25rem 2rem",
                                border: "1px solid rgba(140,109,70,0.25)",
                                position: "relative",
                                overflow: "hidden",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                display: "flex",
                                flexDirection: "column",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(212,175,55,0.6)";
                                e.currentTarget.style.boxShadow = "0 0 35px rgba(212,175,55,0.12), 0 20px 40px rgba(0,0,0,0.5)";
                                e.currentTarget.style.transform = "translateY(-4px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(140,109,70,0.25)";
                                e.currentTarget.style.boxShadow = "none";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            {/* Línea dorada superior decorativa */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "15%",
                                    right: "15%",
                                    height: "1px",
                                    background: "linear-gradient(90deg, transparent, var(--gold-primary, #D4AF37), transparent)",
                                    opacity: 0.6,
                                }}
                            />

                            {/* Porcentaje / Valor destacado */}
                            <span
                                style={{
                                    display: "inline-block",
                                    fontSize: "2.75rem",
                                    fontWeight: 900,
                                    color: "var(--gold-primary, #D4AF37)",
                                    fontFamily: "JetBrains Mono, monospace",
                                    letterSpacing: "-0.02em",
                                    marginBottom: "1rem",
                                    textShadow: "0 0 25px rgba(212,175,55,0.35)",
                                }}
                            >
                                {b.dato}
                            </span>

                            {/* Título */}
                            <h3
                                style={{
                                    fontSize: "1.15rem",
                                    fontWeight: 700,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    marginBottom: "0.75rem",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {b.titulo}
                            </h3>

                            {/* Descripción */}
                            <p
                                style={{
                                    fontSize: "0.88rem",
                                    color: "var(--titanium, #9E9A92)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Botón WhatsApp — Paleta Haute Elegance ── */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "1rem 2.5rem",
                            borderRadius: "10px",
                            background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                            color: "var(--obsidian, #070708)",
                            fontWeight: 700,
                            fontSize: "0.92rem",
                            textDecoration: "none",
                            boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 30px rgba(212,175,55,0.45), 0 6px 20px rgba(0,0,0,0.3)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.25)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.44.79 3.06 1.2 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z" />
                        </svg>
                        Reservar Cupo por WhatsApp
                    </a>
                </div>

            </div>
        </section>
    );
}

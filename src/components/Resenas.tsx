// src/components/Resenas.tsx
// ============================================================
// Sección Reseñas — Haute Elegance v1.0
// Fondo: Graphite Silk #161619 — según mapa de fondos
// ============================================================
"use client";
import { testimonios, resumenResenas } from "@/content/testimonios";

function Estrellas({ size = 16 }: { size?: number }) {
    return (
        <div style={{ display: "flex", gap: "0.2rem" }}>
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width={size} height={size} viewBox="0 0 24 24"
                    style={{ color: "#D4AF37", fill: "#D4AF37", filter: "drop-shadow(0 0 4px rgba(212,175,55,0.4))" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function Resenas() {
    return (
        <section
            id="resenas"
            style={{
                background: "var(--slate-deep)",
                padding: "6rem 2rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo superior central */}
            <div aria-hidden style={{
                position: "absolute", top: "-200px", left: "50%",
                transform: "translateX(-50%)",
                width: "900px", height: "500px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

                {/* ── Encabezado ── */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.4rem 1.2rem", borderRadius: "9999px",
                        border: "1px solid rgba(212,175,55,0.3)",
                        background: "rgba(212,175,55,0.05)",
                        marginBottom: "1.5rem",
                    }}>
                        <span style={{
                            width: "7px", height: "7px", borderRadius: "50%",
                            background: "var(--gold-primary)",
                            boxShadow: "0 0 8px rgba(212,175,55,0.6)",
                        }} />
                        <span style={{
                            fontSize: "0.68rem",
                            fontFamily: "JetBrains Mono,monospace",
                            color: "var(--gold-primary)",
                            letterSpacing: "0.15em",
                            fontWeight: 700,
                        }}>
                            TESTIMONIOS VERIFICADOS
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: "clamp(2rem,4vw,3rem)",
                        fontWeight: 800,
                        color: "var(--ivory-pearl)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.15,
                        marginBottom: "1rem",
                    }}>
                        Lo que dicen quienes ya{" "}
                        <span style={{
                            background: "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            transformaron su carrera
                        </span>
                    </h2>
                    <p style={{
                        fontSize: "1rem",
                        color: "var(--titanium)",
                        maxWidth: "520px",
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}>
                        Ingenieros reales, proyectos reales, resultados que se ven al día siguiente en obra.
                    </p>
                </div>

                {/* ── Layout: Panel KPI + Tarjetas ── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "300px 1fr",
                    gap: "2.5rem",
                    alignItems: "start",
                }}
                    className="grid-cols-1 lg:grid-cols-[340px_1fr]"
                >

                    {/* ── Panel KPI izquierdo ── */}
                    <div style={{
                        background: "linear-gradient(160deg, rgba(22,22,25,0.95) 0%, rgba(10,10,15,0.98) 100%)",
                        border: "1px solid rgba(212,175,55,0.25)",
                        borderRadius: "20px",
                        padding: "2.5rem 2rem",
                        position: "sticky",
                        top: "100px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.1)",
                    }}>
                        {/* Label */}
                        <p style={{
                            fontSize: "0.65rem",
                            fontFamily: "JetBrains Mono,monospace",
                            color: "var(--gold-primary)",
                            letterSpacing: "0.15em",
                            marginBottom: "1.5rem",
                            opacity: 0.8,
                        }}>
                            EVALUACIÓN GLOBAL
                        </p>

                        {/* Número grande */}
                        <div style={{
                            display: "flex", alignItems: "baseline",
                            gap: "0.75rem", marginBottom: "0.75rem",
                        }}>
                            <span style={{
                                fontSize: "2rem",
                                letterSpacing: "-0.02em",
                                fontWeight: 900,
                                color: "var(--gold-primary)",
                                fontFamily: "JetBrains Mono,monospace",
                                lineHeight: 1,
                                textShadow: "0 0 40px rgba(212,175,55,0.35)",
                                display: "block",
                                overflow: "visible",
                                whiteSpace: "nowrap",
                            }}>
                                {"4.9"}
                            </span>
                            <div>
                                <p style={{
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    color: "var(--ivory-pearl)",
                                }}>
                                    Excelente
                                </p>
                                <p style={{
                                    fontSize: "0.72rem",
                                    color: "var(--titanium)",
                                    fontFamily: "JetBrains Mono,monospace",
                                }}>
                                    de 5.0 máximo
                                </p>
                            </div>
                        </div>

                        {/* Estrellas grandes */}
                        <div style={{ marginBottom: "2rem" }}>
                            <Estrellas size={22} />
                        </div>

                        {/* Separador */}
                        <div style={{
                            height: "1px",
                            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
                            marginBottom: "1.75rem",
                        }} />

                        {/* Métricas */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                            {[
                                { label: "Reseñas verificadas", value: `${resumenResenas?.totalResenas || "87"}` },
                                { label: "Tasa de recomendación", value: "99.4%" },
                                { label: "Fuente", value: resumenResenas?.fuente || "Google" },
                            ].map((m) => (
                                <div key={m.label} style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "0.78rem",
                                }}>
                                    <span style={{ color: "var(--titanium)" }}>{m.label}</span>
                                    <span style={{
                                        color: "var(--ivory-pearl)",
                                        fontFamily: "JetBrains Mono,monospace",
                                        fontWeight: 600,
                                    }}>
                                        {m.value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Badge verificado */}
                        <div style={{
                            padding: "0.9rem 1rem",
                            borderRadius: "12px",
                            background: "rgba(212,175,55,0.05)",
                            border: "1px solid rgba(212,175,55,0.2)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                        }}>
                            <span style={{ position: "relative", flexShrink: 0 }}>
                                <span style={{
                                    display: "block",
                                    width: "10px", height: "10px",
                                    borderRadius: "50%",
                                    background: "#22C55E",
                                    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                                }} />
                            </span>
                            <p style={{
                                fontSize: "0.72rem",
                                fontFamily: "JetBrains Mono,monospace",
                                color: "var(--titanium)",
                                lineHeight: 1.5,
                            }}>
                                <span style={{ color: "var(--gold-primary)", fontWeight: 700 }}>
                                    Comunidad activa
                                </span>{" "}
                                — Evaluaciones reales de ingenieros en Ecuador y Latam.
                            </p>
                        </div>
                    </div>

                    {/* ── Grid de tarjetas ── */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "1.25rem",
                    }}>
                        {testimonios.map((r, idx) => (
                            <div
                                key={r.nombre || idx}
                                style={{
                                    background: "rgba(10,10,15,0.7)",
                                    backdropFilter: "blur(16px)",
                                    borderRadius: "16px",
                                    border: "1px solid rgba(140,109,70,0.2)",
                                    padding: "1.75rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(212,175,55,0.1), 0 16px 40px rgba(0,0,0,0.5)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(140,109,70,0.2)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.3)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }}
                            >
                                {/* Línea dorada superior al hover */}
                                <div style={{
                                    position: "absolute", top: 0, left: "15%", right: "15%",
                                    height: "1px",
                                    background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
                                }} />

                                {/* Avatar + nombre */}
                                <div style={{
                                    display: "flex", alignItems: "center",
                                    gap: "0.75rem", marginBottom: "1rem",
                                }}>
                                    <div style={{
                                        width: "46px", height: "46px",
                                        borderRadius: "50%",
                                        background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "var(--obsidian)",
                                        fontWeight: 800, fontSize: "1.1rem",
                                        flexShrink: 0,
                                        boxShadow: "0 0 14px rgba(212,175,55,0.25)",
                                    }}>
                                        {r.nombre?.charAt(0)}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{
                                            fontSize: "0.88rem",
                                            fontWeight: 700,
                                            color: "var(--ivory-pearl)",
                                            marginBottom: "0.1rem",
                                        }}>
                                            {r.nombre}
                                        </p>
                                        <p style={{
                                            fontSize: "0.68rem",
                                            color: "var(--titanium)",
                                            fontFamily: "JetBrains Mono,monospace",
                                        }}>
                                            Ing. Civil / Proyectista
                                        </p>
                                    </div>
                                    <span style={{
                                        fontSize: "0.6rem",
                                        fontFamily: "JetBrains Mono,monospace",
                                        color: "var(--gold-primary)",
                                        padding: "0.25rem 0.6rem",
                                        borderRadius: "4px",
                                        border: "1px solid rgba(212,175,55,0.2)",
                                        background: "rgba(212,175,55,0.06)",
                                        whiteSpace: "nowrap",
                                    }}>
                                        BIM & AEC
                                    </span>
                                </div>

                                {/* Estrellas */}
                                <div style={{ marginBottom: "0.9rem" }}>
                                    <Estrellas />
                                </div>

                                {/* Texto */}
                                <p style={{
                                    fontSize: "0.84rem",
                                    color: "var(--titanium)",
                                    lineHeight: 1.75,
                                    fontStyle: "italic",
                                }}>
                                    "{r.texto}"
                                </p>

                                {/* Footer verificado */}
                                <div style={{
                                    marginTop: "1.25rem",
                                    paddingTop: "1rem",
                                    borderTop: "1px solid rgba(140,109,70,0.15)",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                    <span style={{
                                        display: "flex", alignItems: "center", gap: "0.4rem",
                                        fontSize: "0.68rem",
                                        fontFamily: "JetBrains Mono,monospace",
                                        color: "#22C55E",
                                        fontWeight: 600,
                                    }}>
                                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor" strokeWidth="3">
                                            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Alumno verificado
                                    </span>
                                    <span style={{
                                        fontSize: "0.68rem",
                                        color: "var(--titanium)",
                                        fontFamily: "JetBrains Mono,monospace",
                                    }}>
                                        {r.fecha || "Reciente"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

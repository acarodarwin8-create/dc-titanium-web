// src/components/CursosDestacados.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { cursos, NIVEL_COLOR } from "@/content/cursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import { IMAGENES } from "@/lib/imagenes";
import ImagenPlaceholder from "@/components/ui/ImagenPlaceholder";

// ─────────────────────────────────────────────────────────────
// Paleta Haute Elegance — importada desde variables CSS globales
// NUNCA escribir hex directamente aquí
// ─────────────────────────────────────────────────────────────
const C = {
    bg: "var(--obsidian)",        // #070708 Onyx Noir
    card: "var(--slate-deep)",      // #161619 Graphite Silk
    border: "var(--slate-border)",    // #8C6D46 Bronze Patina
    gold: "var(--gold-primary)",    // #D4AF37 Champagne Gold
    goldLight: "var(--gold-light)",      // #E2C87A
    ivory: "var(--ivory-pearl)",     // #F2F0EB
    muted: "var(--titanium)",        // #9E9A92 Sterling Taupe
    error: "#EF4444",
    white: "#FFFFFF",
} as const

export default function CursosDestacados() {
    const [filtroNivel, setFiltroNivel] = useState("Todos");
    const { items, moneda, addItem } = useCart();
    const activos = cursos.filter((c) => c.activo);
    const filtrados = filtroNivel === "Todos"
        ? activos
        : activos.filter((c) => c.nivel === filtroNivel);

    return (
        <section id="cursos" style={{ background: C.bg, padding: "4rem 1.5rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                {/* ── Encabezado de sección ── */}
                <div style={{ marginBottom: "3rem" }}>
                    <p style={{
                        fontSize: "0.7rem",
                        fontFamily: "JetBrains Mono,monospace",
                        color: C.gold,
                        letterSpacing: "0.1em",
                        marginBottom: "0.75rem"
                    }}>
                        FORMACION ESPECIALIZADA AEC
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem,3vw,2.75rem)",
                        fontWeight: 800,
                        color: C.ivory,
                        letterSpacing: "-0.03em",
                        marginBottom: "1rem"
                    }}>
                        Cursos de Ingeniería{" "}
                        <span style={{
                            background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Elite
                        </span>
                    </h2>
                    <p style={{
                        fontSize: "1rem",
                        color: C.muted,
                        maxWidth: "560px",
                        lineHeight: 1.7
                    }}>
                        Capacitación con proyectos reales, normativa vigente ACI 318-25,
                        NEC-SE-DS, AISC 360 y herramientas de producción.
                    </p>
                </div>

                {/* ── Filtros de nivel ── */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
                    {["Todos", "Básico", "Intermedio", "Avanzado", "Experto"].map((n) => (
                        <button
                            key={n}
                            onClick={() => setFiltroNivel(n)}
                            style={{
                                padding: "0.4rem 1rem",
                                borderRadius: "6px",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                border: "1.5px solid",
                                borderColor: filtroNivel === n ? C.gold : C.border,
                                background: filtroNivel === n
                                    ? "rgba(212,175,55,0.1)"
                                    : "rgba(255,255,255,0.03)",
                                color: filtroNivel === n ? C.gold : C.muted,
                                transition: "all 0.2s",
                            }}
                        >
                            {n}
                        </button>
                    ))}
                </div>

                {/* ── Grid de tarjetas ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: "1.5rem" }}>
                    {filtrados.map((c) => {
                        const desc = c.precioOriginal
                            ? Math.round((1 - c.precio / c.precioOriginal) * 100)
                            : 0;
                        const enCarrito = items.some((i) => i.id === c.id);
                        return (
                            <div key={c.id} className="card-glass-gold" style={{
                                background: C.card,
                                borderRadius: "12px",
                                border: `1.5px solid ${C.border}`,
                                overflow: "hidden"
                            }}>
                                {/* Imagen del curso */}
                                <div style={{ position: "relative", width: "100%", height: "160px" }}>
                                    <ImagenPlaceholder
                                        src={IMAGENES.cursos[c.slug]}
                                        alt={c.nombre}
                                        fill
                                        className="object-cover"
                                        rutaInstruccion={`public/imagenes/cursos/${c.slug}.jpg`}
                                    />
                                </div>

                                {/* Banner de software */}
                                <div style={{
                                    background: `linear-gradient(135deg, #0B0C10, #1E293B)`,
                                    padding: "2rem 1.5rem",
                                    position: "relative",
                                    minHeight: "120px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end"
                                }}>
                                    {desc > 0 && (
                                        <span style={{
                                            position: "absolute", top: "1rem", right: "1rem",
                                            background: C.error, color: C.white,
                                            fontSize: "0.65rem", fontWeight: 700,
                                            padding: "0.2rem 0.5rem", borderRadius: "4px"
                                        }}>
                                            -{desc}%
                                        </span>
                                    )}
                                    <p style={{
                                        fontSize: "1.5rem", fontWeight: 800,
                                        color: c.color,
                                        fontFamily: "JetBrains Mono,monospace",
                                        marginBottom: "0.25rem"
                                    }}>
                                        {c.software[0]}
                                    </p>
                                    {c.software.length > 1 && (
                                        <p style={{
                                            fontSize: "0.65rem", color: C.muted,
                                            fontFamily: "JetBrains Mono,monospace"
                                        }}>
                                            + {c.software.slice(1).join(" / ")}
                                        </p>
                                    )}
                                    {c.certificacion && (
                                        <span style={{
                                            position: "absolute", bottom: "1rem", left: "1rem",
                                            background: "rgba(212,175,55,0.15)",
                                            border: "1px solid rgba(212,175,55,0.3)",
                                            color: C.gold,
                                            fontSize: "0.6rem", fontFamily: "JetBrains Mono,monospace",
                                            padding: "0.2rem 0.5rem", borderRadius: "4px"
                                        }}>
                                            {c.certificacion}
                                        </span>
                                    )}
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div style={{ padding: "1.25rem" }}>
                                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                                        <span style={{
                                            fontSize: "0.65rem", fontWeight: 600,
                                            color: NIVEL_COLOR[c.nivel] || C.muted,
                                            background: (NIVEL_COLOR[c.nivel] || C.muted) + "22",
                                            padding: "0.2rem 0.5rem", borderRadius: "4px",
                                            fontFamily: "JetBrains Mono,monospace"
                                        }}>
                                            {c.nivel}
                                        </span>
                                        <span style={{
                                            fontSize: "0.65rem", color: C.muted,
                                            fontFamily: "JetBrains Mono,monospace",
                                            alignSelf: "center"
                                        }}>
                                            {c.modalidad}
                                        </span>
                                    </div>

                                    <Link href={`/cursos/${c.slug}`} style={{ textDecoration: "none" }}>
                                        <h3 style={{
                                            fontSize: "0.95rem", fontWeight: 700,
                                            color: C.ivory,
                                            marginBottom: "0.5rem", lineHeight: 1.4
                                        }}>
                                            {c.nombre}
                                        </h3>
                                    </Link>

                                    <p style={{
                                        fontSize: "0.8rem", color: C.muted,
                                        marginBottom: "1rem", lineHeight: 1.5
                                    }}>
                                        {c.descripcion}
                                    </p>

                                    {/* Métricas */}
                                    <div style={{
                                        display: "flex", gap: "1rem",
                                        fontSize: "0.72rem", color: C.muted,
                                        fontFamily: "JetBrains Mono,monospace",
                                        paddingBottom: "1rem",
                                        borderBottom: `1px solid ${C.border}`,
                                        marginBottom: "1rem"
                                    }}>
                                        <span>{c.rating} stars</span>
                                        <span>{c.lecciones} lec</span>
                                        <span>{c.horas}h</span>
                                        <span>{c.estudiantes} est</span>
                                    </div>

                                    {/* Precio y botón */}
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <div>
                                            <span style={{
                                                fontSize: "1.4rem", fontWeight: 800,
                                                color: C.gold,
                                                fontFamily: "JetBrains Mono,monospace"
                                            }}>
                                                {formatPrice(c.precio, moneda)}
                                            </span>
                                            {c.precioOriginal && (
                                                <span style={{
                                                    fontSize: "0.8rem", color: C.muted,
                                                    textDecoration: "line-through", marginLeft: "0.5rem"
                                                }}>
                                                    {formatPrice(c.precioOriginal, moneda)}
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => addItem({
                                                id: c.id, titulo: c.nombre,
                                                precio: c.precio, software: c.software
                                            })}
                                            disabled={enCarrito}
                                            style={{
                                                padding: "0.5rem 1rem",
                                                borderRadius: "6px",
                                                background: enCarrito
                                                    ? "rgba(158,154,146,0.15)"
                                                    : `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
                                                color: enCarrito ? C.muted : "#0A0A0F",
                                                fontSize: "0.8rem", fontWeight: 600,
                                                border: "none",
                                                cursor: enCarrito ? "default" : "pointer",
                                            }}
                                        >
                                            {enCarrito ? "En el carrito" : "Agregar al Carrito"}
                                        </button>
                                    </div>

                                    <Link
                                        href={`/cursos/${c.slug}`}
                                        style={{
                                            display: "block", textAlign: "center",
                                            marginTop: "0.75rem", fontSize: "0.78rem",
                                            fontWeight: 600, color: C.gold,
                                            textDecoration: "none"
                                        }}
                                    >
                                        Ver curso completo →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

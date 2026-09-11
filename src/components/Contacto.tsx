// src/components/Contacto.tsx
// ============================================================
// Sección Contacto — Haute Elegance v1.0
// Fondo: #0D1018 Between — según mapa de fondos
// Formulario: glassmorphism oscuro con acentos dorados
// ============================================================
"use client";
import { useState, type CSSProperties } from "react";
import { cursos } from "@/content/cursos";
import { PAISES } from "@/content/empresa";

// ── Estilos base de inputs conectados a paleta ───────────────
const inputStyle: CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    borderRadius: "8px",
    border: "1px solid rgba(140,109,70,0.3)",
    fontSize: "0.9rem",
    color: "#F2F0EB",
    background: "rgba(255,255,255,0.04)",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle: CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#9E9A92",
    marginBottom: "0.5rem",
    fontFamily: "JetBrains Mono, monospace",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
};

export default function Contacto() {
    const [enviado, setEnviado] = useState(false);
    const [focused, setFocused] = useState<string | null>(null);

    const getFocusStyle = (id: string): CSSProperties =>
        focused === id
            ? {
                borderColor: "rgba(212,175,55,0.6)",
                boxShadow: "0 0 0 3px rgba(212,175,55,0.08)",
                background: "rgba(212,175,55,0.04)",
            }
            : {};

    return (
        <section
            id="contacto"
            style={{
                background: "var(--between, #0D1018)",
                padding: "6rem 1.5rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo decorativo central */}
            <div aria-hidden style={{
                position: "absolute", top: "-150px", left: "50%",
                transform: "translateX(-50%)",
                width: "800px", height: "500px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative" }}>

                {/* ── Encabezado ── */}
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.4rem 1.2rem", borderRadius: "9999px",
                        border: "1px solid rgba(212,175,55,0.3)",
                        background: "rgba(212,175,55,0.05)",
                        marginBottom: "1.25rem",
                    }}>
                        <span style={{
                            width: "6px", height: "6px", borderRadius: "50%",
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
                            CONTÁCTANOS
                        </span>
                    </div>

                    <h2 style={{
                        fontSize: "clamp(2rem,3.5vw,2.75rem)",
                        fontWeight: 800,
                        color: "var(--ivory-pearl)",
                        letterSpacing: "-0.03em",
                        marginBottom: "0.75rem",
                        lineHeight: 1.2,
                    }}>
                        Hablemos de tu{" "}
                        <span style={{ color: "#D4AF37" }}>
                            próximo proyecto
                        </span>
                    </h2>
                    <p style={{
                        fontSize: "0.95rem",
                        color: "var(--titanium)",
                        maxWidth: "440px",
                        margin: "0 auto",
                        lineHeight: 1.7,
                    }}>
                        Cuéntanos en qué área necesitas crecer — te respondemos en menos de 24 horas.
                    </p>
                </div>

                {/* ── Formulario ── */}
                <form
                    onSubmit={(e) => { e.preventDefault(); setEnviado(true); }}
                    style={{
                        background: "linear-gradient(160deg, rgba(22,22,25,0.9) 0%, rgba(10,10,15,0.95) 100%)",
                        borderRadius: "20px",
                        border: "1px solid rgba(140,109,70,0.25)",
                        boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.08)",
                        padding: "2.75rem",
                        backdropFilter: "blur(20px)",
                    }}
                >
                    {/* Nombre + Celular */}
                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
                        <div>
                            <label style={labelStyle} htmlFor="nombre">Nombre completo</label>
                            <input
                                id="nombre" name="nombre" type="text" required
                                placeholder="Tu nombre"
                                style={{ ...inputStyle, ...getFocusStyle("nombre") }}
                                onFocus={() => setFocused("nombre")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                        <div>
                            <label style={labelStyle} htmlFor="celular">Celular</label>
                            <input
                                id="celular" name="celular" type="tel" required
                                placeholder="+593 99 999 9999"
                                style={{ ...inputStyle, ...getFocusStyle("celular") }}
                                onFocus={() => setFocused("celular")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                    </div>

                    {/* Email + País */}
                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
                        <div>
                            <label style={labelStyle} htmlFor="email">Email</label>
                            <input
                                id="email" name="email" type="email" required
                                placeholder="tucorreo@ejemplo.com"
                                style={{ ...inputStyle, ...getFocusStyle("email") }}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                        <div>
                            <label style={labelStyle} htmlFor="pais">País</label>
                            <select
                                id="pais" name="pais" required defaultValue=""
                                style={{ ...inputStyle, ...getFocusStyle("pais"), cursor: "pointer" }}
                                onFocus={() => setFocused("pais")}
                                onBlur={() => setFocused(null)}
                            >
                                <option value="" disabled style={{ background: "#161619" }}>
                                    Selecciona tu país
                                </option>
                                {PAISES.map((p) => (
                                    <option key={p} value={p} style={{ background: "#161619", color: "#F2F0EB" }}>{p}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Curso de interés */}
                    <div style={{ marginBottom: "1.25rem" }}>
                        <label style={labelStyle} htmlFor="curso">Curso de interés</label>
                        <select
                            id="curso" name="curso" required defaultValue=""
                            style={{ ...inputStyle, ...getFocusStyle("curso"), cursor: "pointer" }}
                            onFocus={() => setFocused("curso")}
                            onBlur={() => setFocused(null)}
                        >
                            <option value="" disabled style={{ background: "#161619" }}>
                                Selecciona una opción
                            </option>
                            {cursos.map((c) => (
                                <option key={c.id} value={c.nombre}
                                    style={{ background: "#161619", color: "#F2F0EB" }}>
                                    {c.nombre}
                                </option>
                            ))}
                            <option value="Otro" style={{ background: "#161619", color: "#F2F0EB" }}>
                                Otro / no estoy seguro
                            </option>
                        </select>
                    </div>

                    {/* Mensaje */}
                    <div style={{ marginBottom: "2rem" }}>
                        <label style={labelStyle} htmlFor="mensaje">Mensaje</label>
                        <textarea
                            id="mensaje" name="mensaje" required rows={4}
                            placeholder="Cuéntanos qué necesitas..."
                            style={{ ...inputStyle, ...getFocusStyle("mensaje"), resize: "vertical" }}
                            onFocus={() => setFocused("mensaje")}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    {/* Botón enviar */}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "1rem",
                            borderRadius: "10px",
                            border: "none",
                            background: "linear-gradient(135deg, #D4AF37, #E2C87A)",
                            color: "#070708",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            cursor: "pointer",
                            boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
                            transition: "box-shadow 0.3s ease, transform 0.2s ease",
                            letterSpacing: "0.02em",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.45), 0 6px 20px rgba(0,0,0,0.3)";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(212,175,55,0.25)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        {enviado ? "✓ Mensaje enviado" : "Enviar Mensaje"}
                    </button>

                    {/* Badges de confianza */}
                    <div style={{
                        display: "flex", flexWrap: "wrap",
                        justifyContent: "center", gap: "0.6rem",
                        marginTop: "1.5rem",
                    }}>
                        {[
                            { icon: "🔒", label: "SSL Seguro" },
                            { icon: "💬", label: "WhatsApp Directo" },
                            { icon: "⚡", label: "Respuesta en 24h" },
                        ].map((b) => (
                            <span key={b.label} style={{
                                display: "inline-flex", alignItems: "center", gap: "0.35rem",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                color: "var(--titanium)",
                                border: "1px solid rgba(140,109,70,0.2)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.85rem",
                                background: "rgba(212,175,55,0.03)",
                                fontFamily: "JetBrains Mono,monospace",
                            }}>
                                {b.icon} {b.label}
                            </span>
                        ))}
                    </div>

                    {/* Mensaje de éxito */}
                    {enviado && (
                        <div style={{
                            marginTop: "1.5rem",
                            padding: "1rem",
                            borderRadius: "10px",
                            background: "rgba(27,67,50,0.3)",
                            border: "1px solid rgba(27,67,50,0.5)",
                            textAlign: "center",
                        }}>
                            <p style={{
                                fontSize: "0.88rem",
                                color: "#4ADE80",
                                fontWeight: 600,
                                fontFamily: "JetBrains Mono,monospace",
                            }}>
                                ✓ Mensaje recibido — te contactaremos en menos de 24h.
                            </p>
                        </div>
                    )}
                </form>

            </div>
        </section>
    );
}

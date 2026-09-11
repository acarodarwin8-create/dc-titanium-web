// src/components/Footer.tsx
// ============================================================
// Footer DC Titanium — Haute Elegance v1.0
// Conectado 100% a variables CSS de globals.css
// Efectos: pasarelas internacionales, bordes bronce, glow dorado
// ============================================================
"use client";

import Link from "next/link";
import {
    VisaIcon,
    MastercardIcon,
    PayPalIcon,
    EfectivoIcon,
    TransferIcon,
    LockIcon
} from "./PaymentIcons";
import {
    nombreCorto,
    descripcionCorta,
    anioCopyright,
    empresa,
    REDES_SOCIALES as REDES,
    FOOTER_COLUMNAS as COLUMNAS,
    FOOTER_NORMATIVAS as NORMATIVAS,
} from "@/content/empresa";

export default function Footer() {
    return (
        <footer
            style={{
                background: "var(--obsidian, #070708)",
                color: "var(--titanium, #9E9A92)",
                padding: "5rem 2rem 2.5rem",
                borderTop: "1px solid rgba(140,109,70,0.25)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Halo decorativo — esquina inferior derecha */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    bottom: "-120px",
                    right: "-120px",
                    width: "450px",
                    height: "450px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>

                {/* ── ROW 1: Logo + Redes ── */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{
                        gap: "2.5rem",
                        marginBottom: "3.5rem",
                        paddingBottom: "3.5rem",
                        borderBottom: "1px solid rgba(140,109,70,0.18)",
                        alignItems: "center",
                    }}
                >
                    {/* Logo y descripción */}
                    <div>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.85rem",
                                marginBottom: "1.25rem",
                                textDecoration: "none",
                            }}
                        >
                            <img
                                src="/Logo_V8_Premium_Serio.png"
                                alt="DC Titanium Builders"
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "1.5px solid var(--gold-primary, #D4AF37)",
                                    transition: "filter 0.3s ease, transform 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(212,175,55,0.6))";
                                    e.currentTarget.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = "none";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            />
                            <span
                                style={{
                                    fontWeight: 800,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    fontSize: "1.1rem",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {nombreCorto}
                            </span>
                        </Link>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                lineHeight: 1.8,
                                color: "var(--titanium, #9E9A92)",
                                maxWidth: "420px",
                            }}
                        >
                            {descripcionCorta}
                        </p>
                    </div>

                    {/* Redes sociales */}
                    <div
                        className="md:items-end"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "1rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "0.68rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                letterSpacing: "0.15em",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}
                        >
                            SÍGUENOS
                        </p>
                        <div style={{ display: "flex", gap: "0.85rem" }}>
                            {REDES.map((r) => (
                                <a
                                    key={r.nombre}
                                    href={r.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={r.nombre}
                                    style={{
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "50%",
                                        border: "1px solid rgba(212,175,55,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--gold-primary, #D4AF37)",
                                        transition: "all 0.3s ease",
                                        background: "rgba(212,175,55,0.05)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                                        e.currentTarget.style.boxShadow = "0 0 16px rgba(212,175,55,0.4)";
                                        e.currentTarget.style.transform = "translateY(-3px)";
                                        e.currentTarget.style.background = "rgba(212,175,55,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.background = "rgba(212,175,55,0.05)";
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={r.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── ROW 2: Columnas de links ── */}
                <div
                    className="grid grid-cols-2 lg:grid-cols-4"
                    style={{ gap: "2.5rem", marginBottom: "3.5rem" }}
                >
                    {COLUMNAS.map((col) => (
                        <div key={col.titulo}>
                            <p
                                style={{
                                    fontSize: "0.78rem",
                                    fontWeight: 800,
                                    color: "var(--ivory-pearl, #F2F0EB)",
                                    marginBottom: "1.25rem",
                                    letterSpacing: "0.08em",
                                    fontFamily: "JetBrains Mono, monospace",
                                    textTransform: "uppercase",
                                }}
                            >
                                {col.titulo}
                            </p>
                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.7rem",
                                }}
                            >
                                {col.links.map((it) => (
                                    <li key={it.l}>
                                        <Link
                                            href={it.href}
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "var(--titanium, #9E9A92)",
                                                textDecoration: "none",
                                                transition: "all 0.2s ease",
                                                display: "inline-block",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = "var(--gold-primary, #D4AF37)";
                                                e.currentTarget.style.paddingLeft = "6px";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = "var(--titanium, #9E9A92)";
                                                e.currentTarget.style.paddingLeft = "0px";
                                            }}
                                        >
                                            {it.l}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── ROW 3: Pagos + Normativas ── */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{
                        gap: "2rem",
                        marginBottom: "3rem",
                        paddingTop: "2.5rem",
                        borderTop: "1px solid rgba(140,109,70,0.18)",
                    }}
                >
                    {/* Métodos de pago */}
                    <div>
                        <p
                            style={{
                                fontSize: "0.68rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                letterSpacing: "0.12em",
                                marginBottom: "0.85rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}
                        >
                            MÉTODOS DE PAGO
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "flex-end" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                                <VisaIcon />
                                <span style={{ fontSize: "0.55rem", fontFamily: "JetBrains Mono,monospace", color: "var(--titanium)", letterSpacing: "0.05em" }}>VISA</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                                <MastercardIcon />
                                <span style={{ fontSize: "0.55rem", fontFamily: "JetBrains Mono,monospace", color: "var(--titanium)", letterSpacing: "0.05em" }}>MASTERCARD</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                                <PayPalIcon />
                                <span style={{ fontSize: "0.55rem", fontFamily: "JetBrains Mono,monospace", color: "var(--titanium)", letterSpacing: "0.05em" }}>PAYPAL</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                                <EfectivoIcon />
                                <span style={{ fontSize: "0.55rem", fontFamily: "JetBrains Mono,monospace", color: "var(--titanium)", letterSpacing: "0.05em" }}>EFECTIVO</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
                                <TransferIcon />
                                <span style={{ fontSize: "0.55rem", fontFamily: "JetBrains Mono,monospace", color: "var(--titanium)", letterSpacing: "0.05em" }}>TRANSFERENCIA</span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginTop: "1rem",
                                fontSize: "0.7rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--titanium, #9E9A92)",
                            }}
                        >
                            <LockIcon color="var(--gold-primary, #D4AF37)" />
                            Conexión segura SSL 256-Bit Encrypted
                        </div>
                    </div>

                    {/* Normativas */}
                    <div>
                        <p
                            style={{
                                fontSize: "0.68rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                letterSpacing: "0.12em",
                                marginBottom: "0.85rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}
                        >
                            NORMATIVAS APLICADAS
                        </p>
                        <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                            {NORMATIVAS.map((n) => (
                                <span
                                    key={n}
                                    style={{
                                        padding: "0.4rem 0.85rem",
                                        borderRadius: "6px",
                                        border: "1px solid rgba(140,109,70,0.35)",
                                        fontSize: "0.68rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        fontWeight: 600,
                                        color: "var(--gold-primary, #D4AF37)",
                                        background: "rgba(212,175,55,0.05)",
                                        transition: "all 0.25s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-primary, #D4AF37)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.12)";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(212,175,55,0.2)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(140,109,70,0.35)";
                                        (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.05)";
                                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                    }}
                                >
                                    {n}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── ROW 4: Copyright ── */}
                <div
                    style={{
                        borderTop: "1px solid rgba(140,109,70,0.18)",
                        paddingTop: "1.75rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ fontSize: "0.82rem", color: "var(--titanium, #9E9A92)" }}>
                        © {anioCopyright} {empresa.nombre} —{" "}
                        <span style={{ color: "var(--gold-primary, #D4AF37)", fontWeight: 600 }}>
                            {empresa.slogan}
                        </span>
                    </p>
                    <p
                        style={{
                            fontSize: "0.72rem",
                            color: "var(--titanium, #9E9A92)",
                            opacity: 0.6,
                            fontFamily: "JetBrains Mono, monospace",
                            letterSpacing: "0.05em",
                        }}
                    >
                        Haute Elegance v1.0
                    </p>
                </div>

            </div>
        </footer>
    );
}

// src/components/Navbar.tsx
// ============================================================
// Navbar DC Titanium — Haute Elegance v1.0
// Conectado 100% a variables CSS de globals.css
// Efectos: glassmorphism, glow dorado, animaciones suaves
// ============================================================
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { MONEDAS, type Moneda } from "@/lib/currency";
import { NAV_LINKS, empresa, whatsappHref } from "@/content/empresa";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";

// ── Íconos SVG inline ────────────────────────────────────────
function SearchIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="20" r="1" fill="currentColor" />
            <circle cx="18" cy="20" r="1" fill="currentColor" />
            <path d="M6 6L5 3H2" strokeLinecap="round" />
        </svg>
    );
}

function MenuIcon({ open }: { open: boolean }) {
    return (
        <div style={{
            width: "20px", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", gap: "5px"
        }}>
            <span style={{
                width: "20px", height: "2px",
                background: "var(--ivory-pearl)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
                display: "block",
            }} />
            <span style={{
                width: "20px", height: "2px",
                background: "var(--ivory-pearl)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                opacity: open ? 0 : 1,
                display: "block",
            }} />
            <span style={{
                width: "20px", height: "2px",
                background: "var(--ivory-pearl)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                display: "block",
            }} />
        </div>
    );
}

// ── Componente principal ─────────────────────────────────────
export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const { items, moneda, setMoneda, toggleCart } = useCart();

    // Detecta scroll para activar glassmorphism
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        h();
        window.addEventListener("scroll", h, { passive: true });
        return () => window.removeEventListener("scroll", h);
    }, []);

    // Bloquea scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    // Atajo de teclado Ctrl+K para abrir búsqueda
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const isActive = (href: string) =>
        pathname === href || pathname.startsWith(href + "/");

    return (
        <>
            <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>

                {/* ── Top bar informativa ── */}
                <div
                    className="hidden sm:block"
                    style={{
                        background: "var(--obsidian)",
                        color: "var(--titanium)",
                        padding: "0.4rem 2rem",
                        borderBottom: "1px solid rgba(140,109,70,0.25)",
                        fontSize: "0.72rem",
                    }}
                >
                    <div style={{
                        maxWidth: "1280px", margin: "0 auto",
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        {/* Selector de moneda */}
                        <select
                            value={moneda}
                            onChange={(e) => setMoneda(e.target.value as Moneda)}
                            aria-label="Seleccionar moneda"
                            style={{
                                background: "transparent",
                                color: "var(--titanium)",
                                border: "none", outline: "none",
                                fontSize: "0.72rem", cursor: "pointer",
                            }}
                        >
                            {MONEDAS.map((m) => (
                                <option key={m} value={m}
                                    style={{ background: "var(--slate-deep)", color: "var(--ivory-pearl)" }}>
                                    {m}
                                </option>
                            ))}
                        </select>

                        {/* Contacto */}
                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                            <a
                                href={"mailto:" + empresa.email}
                                style={{
                                    color: "var(--titanium)", textDecoration: "none",
                                    transition: "color 0.2s"
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = "var(--ivory-pearl)"}
                                onMouseLeave={e => e.currentTarget.style.color = "var(--titanium)"}
                            >
                                {empresa.email}
                            </a>

                            <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "var(--gold-primary)",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    transition: "color 0.2s, text-shadow 0.2s",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = "var(--gold-light)";
                                    e.currentTarget.style.textShadow = "0 0 12px rgba(212,175,55,0.5)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = "var(--gold-primary)";
                                    e.currentTarget.style.textShadow = "none";
                                }}
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Navbar principal ── */}
                <div
                    className={scrolled || mobileOpen ? "backdrop-blur-xl" : ""}
                    style={{
                        background: scrolled || mobileOpen
                            ? "rgba(7,7,8,0.92)"
                            : "transparent",
                        borderBottom: scrolled || mobileOpen
                            ? "1px solid rgba(140,109,70,0.2)"
                            : "1px solid transparent",
                        boxShadow: scrolled || mobileOpen
                            ? "0 8px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(212,175,55,0.05)"
                            : "none",
                        transition: "background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
                    }}
                >
                    <div style={{
                        maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
                        height: scrolled ? "64px" : "72px",
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between",
                        transition: "height 0.3s ease",
                    }}>

                        {/* ── Logo ── */}
                        <Link href="/" style={{
                            textDecoration: "none",
                            display: "flex", alignItems: "center", gap: "0.75rem"
                        }}>
                            <div
                                style={{
                                    position: "relative",
                                    transition: "filter 0.3s ease",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.filter =
                                        "drop-shadow(0 0 12px rgba(212,175,55,0.6))";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.filter = "none";
                                }}
                            >
                                <img
                                    src="/Logo_V8_Premium_Serio.png"
                                    alt="DC Titanium Builders"
                                    className="logo-3d"
                                    style={{
                                        width: "48px", height: "48px",
                                        borderRadius: "50%", objectFit: "cover",
                                        border: "1.5px solid var(--gold-primary)",
                                        flexShrink: 0,
                                    }}
                                />
                            </div>
                            <span
                                className="hidden sm:inline"
                                style={{
                                    fontWeight: 700, fontSize: "1.02rem",
                                    color: "var(--ivory-pearl)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                DC Titanium{" "}
                                <span style={{ color: "var(--gold-primary)" }}>Builders</span>
                            </span>
                        </Link>

                        {/* ── Links de navegación desktop ── */}
                        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "1.75rem", display: "flex" }}>
                            {NAV_LINKS.map((link) => {
                                const active = isActive(link.href);
                                const hovered = hoveredLink === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.href)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        style={{
                                            fontSize: "0.82rem",
                                            fontWeight: 500,
                                            whiteSpace: "nowrap",
                                            textDecoration: "none",
                                            padding: "0.5rem 0",
                                            color: active
                                                ? "var(--gold-primary)"
                                                : hovered
                                                    ? "var(--ivory-pearl)"
                                                    : "var(--titanium)",
                                            borderBottom: active
                                                ? "2px solid var(--gold-primary)"
                                                : "2px solid transparent",
                                            textShadow: active
                                                ? "0 0 20px rgba(212,175,55,0.4)"
                                                : "none",
                                            transition: "color 0.2s ease, text-shadow 0.2s ease, border-color 0.2s ease",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* ── Acciones: buscar, carrito, CTA ── */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>

                            {/* Botón buscar */}
                            <button
                                aria-label="Buscar (Ctrl+K)"
                                onClick={() => setSearchOpen(true)}
                                className="hidden sm:flex"
                                style={{
                                    width: "40px", height: "40px",
                                    borderRadius: "50%", border: "none",
                                    background: "transparent",
                                    alignItems: "center", justifyContent: "center",
                                    cursor: "pointer",
                                    color: "var(--titanium)",
                                    transition: "color 0.2s, background 0.2s",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = "var(--gold-primary)";
                                    e.currentTarget.style.background = "rgba(212,175,55,0.08)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = "var(--titanium)";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                <SearchIcon />
                            </button>

                            {/* Botón carrito con badge contador */}
                            <button
                                aria-label="Abrir carrito"
                                onClick={() => toggleCart(true)}
                                style={{
                                    position: "relative",
                                    width: "40px", height: "40px",
                                    borderRadius: "50%", border: "none",
                                    background: "transparent",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    cursor: "pointer",
                                    color: "var(--titanium)",
                                    transition: "color 0.2s, background 0.2s",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = "var(--gold-primary)";
                                    e.currentTarget.style.background = "rgba(212,175,55,0.08)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = "var(--titanium)";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                <CartIcon />
                                {items.length > 0 && (
                                    <span style={{
                                        position: "absolute", top: "2px", right: "2px",
                                        minWidth: "17px", height: "17px",
                                        borderRadius: "999px",
                                        background: "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                                        color: "var(--obsidian)",
                                        fontSize: "0.62rem", fontWeight: 800,
                                        display: "flex", alignItems: "center",
                                        justifyContent: "center", padding: "0 3px",
                                        boxShadow: "0 0 8px rgba(212,175,55,0.5)",
                                    }}>
                                        {items.length}
                                    </span>
                                )}
                            </button>

                            {/* Botón CTA principal — Inscribirse */}
                            <a
                                href="#contacto"
                                className="hidden md:inline-block"
                                style={{
                                    padding: "0.6rem 1.4rem",
                                    borderRadius: "8px",
                                    background: "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                                    color: "var(--obsidian)",
                                    fontWeight: 700, fontSize: "0.85rem",
                                    textDecoration: "none",
                                    marginLeft: "0.25rem",
                                    transition: "box-shadow 0.3s ease, transform 0.2s ease",
                                    boxShadow: "0 0 0 rgba(212,175,55,0)",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.4), 0 4px 12px rgba(0,0,0,0.3)";
                                    e.currentTarget.style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.boxShadow = "0 0 0 rgba(212,175,55,0)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                Inscribirse
                            </a>

                            {/* Botón menú hamburguesa móvil */}
                            <button
                                aria-label="Abrir menú"
                                onClick={() => setMobileOpen((v) => !v)}
                                className="flex lg:hidden"
                                style={{
                                    width: "40px", height: "40px",
                                    background: "transparent", border: "none",
                                    cursor: "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}
                            >
                                <MenuIcon open={mobileOpen} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Menú móvil ── */}
                {mobileOpen && (
                    <div
                        className="flex lg:hidden"
                        style={{
                            borderTop: "1px solid rgba(140,109,70,0.2)",
                            background: "rgba(7,7,8,0.97)",
                            backdropFilter: "blur(20px)",
                            padding: "1.25rem 2rem 2rem",
                            flexDirection: "column",
                            gap: "0.25rem",
                            maxHeight: "calc(100vh - 72px)",
                            overflowY: "auto",
                        }}
                    >
                        {NAV_LINKS.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    style={{
                                        display: "flex", alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "0.85rem 0", fontSize: "1rem",
                                        fontWeight: 500,
                                        color: active ? "var(--gold-primary)" : "var(--ivory-pearl)",
                                        textDecoration: "none",
                                        borderBottom: "1px solid rgba(140,109,70,0.15)",
                                        transition: "color 0.2s",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <button
                            onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
                            style={{
                                display: "flex", alignItems: "center", gap: "0.6rem",
                                padding: "0.85rem 0", fontSize: "1rem", fontWeight: 500,
                                color: "var(--ivory-pearl)",
                                background: "none", border: "none",
                                textAlign: "left", cursor: "pointer",
                            }}
                        >
                            <SearchIcon /> Buscar
                        </button>

                        <a
                            href="#contacto"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                marginTop: "1.25rem",
                                padding: "0.85rem 1.5rem",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                                color: "var(--obsidian)",
                                fontWeight: 700, fontSize: "0.9rem",
                                textDecoration: "none", textAlign: "center",
                                boxShadow: "0 0 20px rgba(212,175,55,0.2)",
                            }}
                        >
                            Inscribirse
                        </a>
                    </div>
                )}
            </header>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <CartDrawer />
        </>
    );
}

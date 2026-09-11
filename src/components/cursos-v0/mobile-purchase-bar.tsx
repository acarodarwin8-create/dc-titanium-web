// src/components/cursos-v0/mobile-purchase-bar.tsx
// ============================================================
// Barra Flotante Móvil de Compra — Haute Elegance v2.0 (Ultra-Executive)
// ============================================================
"use client";

import React from "react";
import type { Curso } from "@/content/cursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

interface MobilePurchaseBarProps {
    curso: Curso;
}

export function MobilePurchaseBar({ curso }: MobilePurchaseBarProps) {
    const { items, moneda, addItem, toggleCart } = useCart();
    const enCarrito = items.some((i) => i.id === curso.id);

    const precioOriginal = curso.precioOriginal ?? curso.precio;
    const descuento =
        precioOriginal > curso.precio
            ? Math.round((1 - curso.precio / precioOriginal) * 100)
            : 0;

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
        <div
            className="fixed inset-x-0 bottom-0 z-50 block lg:hidden"
            style={{
                background: "rgba(7, 7, 8, 0.94)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderTop: "1px solid rgba(140, 109, 70, 0.35)",
                boxShadow:
                    "0 -10px 30px rgba(0, 0, 0, 0.8), 0 -1px 0 rgba(212, 175, 55, 0.15)",
                padding: "0.75rem 1.25rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                }}
            >
                {/* Desglose de Precio Móvil */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                        <span
                            style={{
                                fontSize: "1.35rem",
                                fontWeight: 900,
                                color: "var(--gold-primary, #D4AF37)",
                                fontFamily: "JetBrains Mono, monospace",
                                lineHeight: 1,
                                textShadow: "0 0 12px rgba(212, 175, 55, 0.3)",
                            }}
                        >
                            {formatPrice(curso.precio, moneda)}
                        </span>
                        {descuento > 0 && (
                            <span
                                style={{
                                    fontSize: "0.62rem",
                                    fontWeight: 800,
                                    color: "#10B981",
                                    background: "rgba(16, 185, 129, 0.12)",
                                    border: "1px solid rgba(16, 185, 129, 0.3)",
                                    borderRadius: "4px",
                                    padding: "0.1rem 0.35rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                            >
                                -{descuento}%
                            </span>
                        )}
                    </div>

                    {precioOriginal > curso.precio && (
                        <span
                            style={{
                                fontSize: "0.72rem",
                                color: "var(--titanium, #9E9A92)",
                                textDecoration: "line-through",
                                fontFamily: "JetBrains Mono, monospace",
                            }}
                        >
                            {formatPrice(precioOriginal, moneda)}
                        </span>
                    )}
                </div>

                {/* Botón CTA Ejecutivo Móvil */}
                <button
                    type="button"
                    onClick={inscribirse}
                    disabled={enCarrito}
                    style={{
                        flex: 1,
                        padding: "0.85rem 1rem",
                        borderRadius: "10px",
                        border: "none",
                        background: enCarrito
                            ? "rgba(158, 154, 146, 0.15)"
                            : "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                        color: enCarrito ? "var(--titanium, #9E9A92)" : "var(--obsidian, #070708)",
                        fontSize: "0.82rem",
                        fontWeight: 800,
                        cursor: enCarrito ? "default" : "pointer",
                        letterSpacing: "0.04em",
                        transition: "all 0.25s ease",
                        boxShadow: enCarrito ? "none" : "0 4px 18px rgba(212, 175, 55, 0.3)",
                        fontFamily: "JetBrains Mono, monospace",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                        if (!enCarrito) {
                            e.currentTarget.style.boxShadow =
                                "0 0 24px rgba(212, 175, 55, 0.5), 0 4px 12px rgba(0,0,0,0.4)";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!enCarrito) {
                            e.currentTarget.style.boxShadow = "0 4px 18px rgba(212, 175, 55, 0.3)";
                        }
                    }}
                >
                    {enCarrito ? "✓ EN TU CARRITO" : "INSCRIBIRME AHORA"}
                </button>
            </div>
        </div>
    );
}

"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import { empresa } from "@/content/empresa";
import { EfectivoIcon, TransferIcon, LockIcon } from "./PaymentIcons";

const IVA_TASA = 0.15;

export default function CartDrawer() {
  const { items, isOpen, moneda, cuponCodigo, descuentoPorcentaje, removeItem, toggleCart, applyCoupon } = useCart();
  const [cupon, setCupon] = useState("");
  const [cuponError, setCuponError] = useState(false);

  const subtotal = items.reduce((sum, c) => sum + c.precio, 0);
  const descuento = Math.round(subtotal * (descuentoPorcentaje / 100));
  const iva = Math.round((subtotal - descuento) * IVA_TASA);
  const total = subtotal - descuento + iva;

  const handleCupon = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = applyCoupon(cupon);
    setCuponError(!ok);
    if (ok) setCupon("");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => toggleCart(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(11,12,16,0.6)",
          backdropFilter: "blur(2px)",
          zIndex: 200,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(420px,100%)",
          background: "#FBFBFD",
          zIndex: 201,
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.2)",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", borderBottom: "1px solid #E5E7EB" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0B0C10" }}>Tu Carrito ({items.length})</h2>
          <button
            aria-label="Cerrar carrito"
            onClick={() => toggleCart(false)}
            style={{ width: "34px", height: "34px", borderRadius: "50%", border: "1px solid #E5E7EB", background: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#F8F5EF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF72" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="20" r="1" fill="#D4AF72" /><circle cx="18" cy="20" r="1" fill="#D4AF72" /><path d="M6 6L5 3H2" strokeLinecap="round" /></svg>
            </div>
            <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0B0C10", marginBottom: "0.5rem" }}>Tu carrito está vacío</p>
            <p style={{ fontSize: "0.85rem", color: "#6B7280", marginBottom: "1.5rem" }}>Explora nuestros cursos de ingeniería y agrega el que más te convenga.</p>
            <a
              href="#cursos"
              onClick={() => toggleCart(false)}
              style={{ padding: "0.75rem 1.75rem", borderRadius: "8px", background: "linear-gradient(135deg,#D4AF72,#B8952E)", color: "white", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}
            >
              Ver Cursos
            </a>
          </div>
        ) : (
          <>
            <div style={{ flex: 1, overflowY: "auto", padding: "1.25rem 1.5rem" }}>
              {items.map((c) => (
                <div key={c.id} style={{ display: "flex", gap: "0.9rem", marginBottom: "1.1rem", paddingBottom: "1.1rem", borderBottom: "1px solid #F0EDE8" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "8px", background: "linear-gradient(135deg,#0B0C10,#1E293B)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#D4AF72", fontFamily: "JetBrains Mono,monospace" }}>{c.software[0].slice(0, 4)}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0B0C10", lineHeight: 1.3, marginBottom: "0.35rem" }}>{c.titulo}</p>
                    <p style={{ fontSize: "0.85rem", fontWeight: 800, color: "#B8952E", fontFamily: "JetBrains Mono,monospace" }}>{formatPrice(c.precio, moneda)}</p>
                  </div>
                  <button
                    aria-label={"Quitar " + c.titulo}
                    onClick={() => removeItem(c.id)}
                    style={{ alignSelf: "flex-start", background: "transparent", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "0.25rem" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" /></svg>
                  </button>
                </div>
              ))}

              <form onSubmit={handleCupon} style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                <input
                  value={cupon}
                  onChange={(e) => { setCupon(e.target.value); setCuponError(false); }}
                  placeholder="Código de descuento"
                  style={{ flex: 1, padding: "0.65rem 0.85rem", borderRadius: "8px", border: "1.5px solid #E5E7EB", fontSize: "0.8rem", outline: "none" }}
                />
                <button type="submit" style={{ padding: "0.65rem 1rem", borderRadius: "8px", border: "1.5px solid #0B0C10", background: "white", fontSize: "0.8rem", fontWeight: 700, cursor: "pointer" }}>
                  Aplicar
                </button>
              </form>
              {cuponError && <p style={{ fontSize: "0.75rem", color: "#DC2626", marginTop: "0.5rem" }}>Código inválido. Prueba con TITANIUM-ELITE.</p>}
              {cuponCodigo && <p style={{ fontSize: "0.75rem", color: "#065F46", marginTop: "0.5rem" }}>Cupón {cuponCodigo} aplicado: -{descuentoPorcentaje}%</p>}
            </div>

            {/* Resumen */}
            <div style={{ padding: "1.25rem 1.5rem", borderTop: "1px solid #E5E7EB", background: "white" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#6B7280", marginBottom: "0.4rem" }}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal, moneda)}</span>
              </div>
              {descuentoPorcentaje > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#065F46", marginBottom: "0.4rem" }}>
                  <span>Descuento ({descuentoPorcentaje}%)</span>
                  <span>-{formatPrice(descuento, moneda)}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#6B7280", marginBottom: "0.4rem" }}>
                <span>IVA 15% Ecuador</span>
                <span>{formatPrice(iva, moneda)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.05rem", fontWeight: 800, color: "#0B0C10", marginTop: "0.6rem", paddingTop: "0.6rem", borderTop: "1px solid #F0EDE8" }}>
                <span>Total</span>
                <span>{formatPrice(total, moneda)}</span>
              </div>

              <div style={{ marginTop: "1.1rem" }}>
                <p style={{ textAlign: "center", fontSize: "0.62rem", color: "#9CA3AF", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>FORMAS DE PAGO</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.4rem" }}>
                  <EfectivoIcon />
                  <TransferIcon />
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", margin: "1rem 0", fontSize: "0.7rem", color: "#6B7280" }}>
                <LockIcon />
                Conexión segura SSL 256-Bit
              </div>

              <a
                href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
                  "Hola, quiero coordinar el pago de mi pedido:\n" +
                    items.map((i) => "- " + i.titulo).join("\n") +
                    `\nTotal: ${formatPrice(total, moneda)}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => toggleCart(false)}
                style={{ display: "block", textAlign: "center", padding: "0.95rem", borderRadius: "8px", background: "rgb(214,186,134)", color: "#0B0C10", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", marginBottom: "0.65rem" }}
              >
                Coordinar Pago por WhatsApp →
              </a>
              <button
                onClick={() => toggleCart(false)}
                style={{ width: "100%", padding: "0.9rem", borderRadius: "8px", border: "1.5px solid #E5E7EB", background: "transparent", fontWeight: 600, fontSize: "0.85rem", color: "#374151", cursor: "pointer" }}
              >
                Seguir comprando
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

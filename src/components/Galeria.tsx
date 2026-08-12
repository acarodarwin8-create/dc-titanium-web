"use client";
import { useState } from "react";
import { GALERIA, type GaleriaItem } from "@/data/galeria";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

const FILTROS = ["Todos", "Gratis", "Premium"] as const;

export default function Galeria() {
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");
  const [preview, setPreview] = useState<GaleriaItem | null>(null);
  const { items, moneda, addItem } = useCart();

  const filtrados = GALERIA.filter((g) => {
    if (filtro === "Gratis") return g.tipo === "gratis";
    if (filtro === "Premium") return g.tipo === "pago";
    return true;
  });

  return (
    <section id="galeria" style={{ background: "#F8F9FA", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            GALERÍA DE RECURSOS
          </p>
          <h2 style={{ fontSize: "clamp(2rem,3vw,2.75rem)", fontWeight: 800, color: "#0B0C10", letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Renders, planos y plantillas
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7 }}>
            Descarga recursos gratuitos de nuestros proyectos o adquiere paquetes premium con plantillas, planos y renders listos para producción.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: 500,
                cursor: "pointer",
                border: "1.5px solid",
                borderColor: filtro === f ? "#D4AF72" : "#E5E7EB",
                background: filtro === f ? "#FEF9EE" : "white",
                color: filtro === f ? "#92400E" : "#6B7280",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
          {filtrados.map((g) => {
            const enCarrito = items.some((i) => i.id === g.id);
            return (
              <div key={g.id} className="card-glass-gold" style={{ background: "white", borderRadius: "12px", border: "1.5px solid #EEECE6", overflow: "hidden" }}>
                <div style={{ position: "relative" }}>
                  <img src={g.imagen} alt={g.titulo} style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} />
                  <span
                    style={{
                      position: "absolute",
                      top: "0.85rem",
                      left: "0.85rem",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "999px",
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      color: g.tipo === "gratis" ? "#065F46" : "#92400E",
                      background: g.tipo === "gratis" ? "rgba(6,95,70,0.1)" : "rgba(212,175,114,0.9)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {g.tipo === "gratis" ? "GRATIS" : "PREMIUM"}
                  </span>
                </div>

                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.65rem", color: "#9CA3AF", fontFamily: "JetBrains Mono,monospace", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                    {g.categoria}
                  </p>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "1.1rem", lineHeight: 1.4 }}>{g.titulo}</h3>

                  {g.tipo === "gratis" ? (
                    <button
                      onClick={() => setPreview(g)}
                      style={{ width: "100%", padding: "0.6rem 1rem", borderRadius: "6px", background: "#0B0C10", color: "white", fontSize: "0.8rem", fontWeight: 600, border: "none", cursor: "pointer" }}
                    >
                      Ver / Descargar
                    </button>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
                      <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "#B8952E", fontFamily: "JetBrains Mono,monospace" }}>
                        {formatPrice(g.precio, moneda)}
                      </span>
                      <button
                        onClick={() => addItem({ id: g.id, titulo: g.titulo, precio: g.precio, software: g.software })}
                        disabled={enCarrito}
                        style={{
                          padding: "0.5rem 1rem",
                          borderRadius: "6px",
                          background: enCarrito ? "#F3F4F6" : "linear-gradient(135deg,#B8952E,#D4AF72)",
                          color: enCarrito ? "#6B7280" : "white",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          border: "none",
                          cursor: enCarrito ? "default" : "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {enCarrito ? "En el carrito" : "Agregar al Carrito"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox para items gratis */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(11,12,16,0.85)", backdropFilter: "blur(4px)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ width: "min(760px,100%)", background: "#FBFBFD", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
            <img src={preview.imagen} alt={preview.titulo} style={{ width: "100%", maxHeight: "60vh", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <p style={{ fontSize: "0.65rem", color: "#9CA3AF", fontFamily: "JetBrains Mono,monospace", marginBottom: "0.3rem" }}>{preview.categoria}</p>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0B0C10" }}>{preview.titulo}</h3>
              </div>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={preview.imagen}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "0.7rem 1.4rem", borderRadius: "8px", background: "linear-gradient(135deg,#D4AF72,#B8952E)", color: "white", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}
                >
                  Descargar
                </a>
                <button
                  onClick={() => setPreview(null)}
                  style={{ padding: "0.7rem 1.4rem", borderRadius: "8px", border: "1.5px solid #E5E7EB", background: "white", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

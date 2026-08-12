"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { CURSOS } from "@/data/cursos";
import { SCRIPTS } from "@/data/recursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { moneda, addItem, toggleCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const q = query.trim().toLowerCase();

  const cursosFiltrados = useMemo(() => {
    if (!q) return CURSOS.slice(0, 4);
    return CURSOS.filter(
      (c) => c.titulo.toLowerCase().includes(q) || c.software.some((s) => s.toLowerCase().includes(q)) || c.nivel.toLowerCase().includes(q)
    );
  }, [q]);

  const scriptsFiltrados = useMemo(() => {
    if (!q) return [];
    return SCRIPTS.filter((s) => s.nombre.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));
  }, [q]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(11,12,16,0.75)",
        backdropFilter: "blur(4px)",
        zIndex: 300,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10vh 1.5rem 2rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(600px,100%)", background: "#FBFBFD", borderRadius: "14px", boxShadow: "0 24px 60px rgba(0,0,0,0.4)", overflow: "hidden" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "1.1rem 1.25rem", borderBottom: "1px solid #E5E7EB" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" /></svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca cursos, software o scripts..."
            style={{ flex: 1, border: "none", outline: "none", fontSize: "1.05rem", background: "transparent", color: "#0B0C10" }}
          />
          <span style={{ fontSize: "0.7rem", color: "#9CA3AF", border: "1px solid #E5E7EB", borderRadius: "4px", padding: "0.15rem 0.4rem", fontFamily: "JetBrains Mono,monospace" }}>ESC</span>
        </div>

        <div style={{ maxHeight: "55vh", overflowY: "auto", padding: "0.75rem" }}>
          {cursosFiltrados.length === 0 && scriptsFiltrados.length === 0 && (
            <p style={{ padding: "2rem 1rem", textAlign: "center", fontSize: "0.9rem", color: "#9CA3AF" }}>Sin resultados para &quot;{query}&quot;</p>
          )}

          {cursosFiltrados.length > 0 && (
            <>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", padding: "0.5rem 0.75rem" }}>CURSOS</p>
              {cursosFiltrados.map((c) => (
                <div
                  key={c.id}
                  style={{ display: "flex", alignItems: "center", gap: "0.9rem", padding: "0.75rem", borderRadius: "10px", cursor: "pointer" }}
                  className="hover:bg-black/5"
                  onClick={() => {
                    addItem(c);
                    onClose();
                    toggleCart(true);
                  }}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "linear-gradient(135deg,#0B0C10,#1E293B)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "0.55rem", fontWeight: 800, color: "#D4AF72", fontFamily: "JetBrains Mono,monospace" }}>{c.software[0].slice(0, 4)}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0B0C10" }}>{c.titulo}</p>
                    <p style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{c.nivel} — {c.software.join(" / ")}</p>
                  </div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#B8952E", fontFamily: "JetBrains Mono,monospace" }}>{formatPrice(c.precio, moneda)}</span>
                </div>
              ))}
            </>
          )}

          {scriptsFiltrados.length > 0 && (
            <>
              <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#9CA3AF", letterSpacing: "0.08em", padding: "0.9rem 0.75rem 0.5rem" }}>SCRIPTS Y RECURSOS</p>
              {scriptsFiltrados.map((s) => (
                <div key={s.nombre} style={{ display: "flex", flexDirection: "column", padding: "0.75rem", borderRadius: "10px" }}>
                  <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0B0C10" }}>{s.nombre}</p>
                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>{s.desc}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

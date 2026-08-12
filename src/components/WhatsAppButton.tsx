"use client";
import { useEffect, useState } from "react";
import { empresa, whatsappFrases } from "@/content/empresa";

const OPCIONES = [
  { titulo: "Inscripción", desc: "Regístrate ahora y asegura tu cupo", mensaje: "Hola, quiero inscribirme en un curso de DC Titanium Builders." },
  { titulo: "Asesoría", desc: "Habla con un asesor sobre tu proyecto", mensaje: "Hola, me gustaría recibir asesoría sobre sus programas." },
];

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.85L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.727.885.918-3.636-.235-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [pulse] = useState(true);
  const [visible, setVisible] = useState(false);
  const [fraseIdx, setFraseIdx] = useState(0);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => setFraseIdx((i) => (i + 1) % whatsappFrases.length), 3500);
    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50 }}>
      {panelOpen && (
        <div
          className="tb-glass-card"
          style={{ position: "absolute", bottom: "72px", right: 0, width: "min(300px, calc(100vw - 48px))", overflow: "hidden" }}
        >
          <div style={{ background: "#25D366", padding: "0.85rem 1.1rem", display: "flex", alignItems: "center", gap: "0.6rem", color: "white", fontWeight: 700, fontSize: "0.9rem" }}>
            <WhatsAppIcon size={20} />
            Iniciar conversación
          </div>
          {OPCIONES.map((o) => (
            <a
              key={o.titulo}
              href={`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(o.mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setPanelOpen(false)}
              style={{ display: "flex", gap: "0.75rem", alignItems: "center", padding: "0.85rem 1.1rem", borderTop: "1px solid #21262D", textDecoration: "none" }}
            >
              <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#25D366" }}>
                <WhatsAppIcon size={17} />
              </span>
              <span>
                <p style={{ fontWeight: 700, fontSize: "0.85rem", color: "#FFFFFF" }}>{o.titulo}</p>
                <p style={{ fontSize: "0.72rem", color: "#8B949E" }}>{o.desc}</p>
              </span>
            </a>
          ))}
        </div>
      )}

      <button
        onClick={() => setPanelOpen((v) => !v)}
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center gap-2
          bg-[#25D366] text-white px-4 py-3 rounded-full
          shadow-[0_4px_24px_rgba(37,211,102,0.4)]
          hover:shadow-[0_4px_32px_rgba(37,211,102,0.6)]
          hover:scale-105 transition-all duration-300"
      >
        {/* Punto rojo titilando */}
        {pulse && !panelOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
          </span>
        )}

        <WhatsAppIcon />
        <span className="text-sm font-semibold">{whatsappFrases[fraseIdx]}</span>
      </button>
    </div>
  );
}

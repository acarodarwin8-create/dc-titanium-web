"use client";
import { useState, type FormEvent } from "react";
import { empresa } from "@/content/empresa";

function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.65rem 0.85rem",
  borderRadius: "8px",
  border: "1px solid #21262D",
  background: "#0D1117",
  color: "#FFFFFF",
  fontSize: "0.85rem",
  outline: "none",
  fontFamily: "inherit",
};

export default function WelcomeChat() {
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [curso, setCurso] = useState("");

  const iniciarChat = (e: FormEvent) => {
    e.preventDefault();
    const mensaje =
      `Hola, soy ${nombre}.\n` +
      `Teléfono: ${telefono}\n` +
      `Correo: ${correo}\n` +
      `Curso de interés: ${curso}`;
    window.open(`https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chatea con nosotros"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "24px",
          zIndex: 50,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.4)",
          background: "linear-gradient(135deg,#C9A84C,#8B6914)",
          color: "#0A0A0F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 30px rgba(201,168,76,0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(201,168,76,0.35)";
        }}
      >
        <ChatIcon />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 49, background: "rgba(10,10,15,0.55)", backdropFilter: "blur(2px)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="tb-glass-card"
            style={{
              position: "fixed",
              bottom: "92px",
              left: "24px",
              width: "min(340px, calc(100vw - 48px))",
              overflow: "hidden",
              zIndex: 50,
            }}
          >
            <div style={{ background: "linear-gradient(135deg,#C9A84C,#8B6914)", padding: "1.25rem 1.5rem" }}>
              <p style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0A0A0F", marginBottom: "0.35rem" }}>
                Bienvenido a {empresa.nombre}
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(10,10,15,0.75)" }}>
                Indícanos tus datos y curso de interés
              </p>
            </div>

            <form onSubmit={iniciarChat} style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <input required placeholder="Nombre completo" style={inputStyle} value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <input required placeholder="Número telefónico" style={inputStyle} value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              <input required type="email" placeholder="Correo" style={inputStyle} value={correo} onChange={(e) => setCorreo(e.target.value)} />
              <input required placeholder="Curso de interés" style={inputStyle} value={curso} onChange={(e) => setCurso(e.target.value)} />
              <button
                type="submit"
                style={{
                  marginTop: "0.25rem",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  border: "none",
                  background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
                  color: "#0A0A0F",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.03em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Iniciar Chat
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

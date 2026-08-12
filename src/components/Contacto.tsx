"use client";
import { useState, type CSSProperties } from "react";
import { CURSOS } from "@/data/cursos";

const PAISES = ["Ecuador", "Colombia", "Perú", "México", "Chile", "Argentina", "España", "Otro"];

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.85rem 1rem",
  borderRadius: "8px",
  border: "1.5px solid #E5E7EB",
  fontSize: "0.9rem",
  color: "#111827",
  background: "white",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "0.5rem",
};

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="contacto" style={{ background: "#F8F9FA", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            CONTACTO
          </p>
          <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 800, color: "#0B0C10", letterSpacing: "-0.03em" }}>
            Escríbenos
          </h2>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEnviado(true);
          }}
          style={{ background: "white", borderRadius: "16px", border: "1px solid #EEECE6", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", padding: "2.5rem" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle} htmlFor="nombre">Nombre completo</label>
              <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="celular">Celular</label>
              <input id="celular" name="celular" type="tel" required placeholder="+593 99 999 9999" style={inputStyle} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.25rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="tucorreo@ejemplo.com" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle} htmlFor="pais">País</label>
              <select id="pais" name="pais" required defaultValue="" style={{ ...inputStyle, cursor: "pointer" }}>
                <option value="" disabled>Selecciona tu país</option>
                {PAISES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={labelStyle} htmlFor="curso">Curso de interés</label>
            <select id="curso" name="curso" required defaultValue="" style={{ ...inputStyle, cursor: "pointer" }}>
              <option value="" disabled>Selecciona una opcion</option>
              {CURSOS.map((c) => (
                <option key={c.id} value={c.titulo}>{c.titulo}</option>
              ))}
              <option value="Otro / no estoy seguro">Otro / no estoy seguro</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.75rem" }}>
            <label style={labelStyle} htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" required rows={4} placeholder="Cuéntanos qué necesitas" style={{ ...inputStyle, resize: "vertical" }} />
          </div>

          <button
            type="submit"
            style={{ width: "100%", padding: "0.95rem", borderRadius: "8px", border: "none", background: "linear-gradient(135deg,#B8952E,#D4AF72)", color: "white", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", boxShadow: "0 4px 16px rgba(180,149,46,0.35)" }}
          >
            Enviar Mensaje
          </button>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.6rem", marginTop: "1.25rem" }}>
            {["SSL Seguro", "WhatsApp Directo", "Respuesta en 24h"].map((b) => (
              <span key={b} style={{ fontSize: "0.68rem", fontWeight: 600, color: "#6B7280", border: "1px solid #E5E7EB", borderRadius: "999px", padding: "0.3rem 0.75rem" }}>
                {b}
              </span>
            ))}
          </div>

          {enviado && (
            <p style={{ marginTop: "1rem", textAlign: "center", fontSize: "0.85rem", color: "#065F46", fontWeight: 600 }}>
              Gracias, recibimos tu mensaje. Te contactaremos pronto.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

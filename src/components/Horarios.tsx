"use client";
import { cursos } from "@/content/cursos";
import { horarios } from "@/content/horarios";
import { useCart } from "@/context/CartContext";

export default function Horarios() {
  const { addItem } = useCart();

  return (
    <section id="horarios" style={{ background: "#F8F9FA", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* IZQUIERDA */}
          <div>
            <p style={{ fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              CUPOS LIMITADOS
            </p>
            <h2 style={{ fontSize: "clamp(2rem,3.5vw,2.75rem)", fontWeight: 800, color: "#0B0C10", letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Horarios activos esta temporada
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#6B7280", marginBottom: "1.5rem" }}>
              Nuestros cursos en vivo se dictan en grupos reducidos para garantizar acompañamiento cercano. Elige el horario que mejor se adapte a tu semana laboral y reserva tu cupo con anticipación.
            </p>
            <a
              href="#cursos"
              style={{ display: "inline-block", padding: "0.9rem 2.1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", color: "white", background: "linear-gradient(135deg,#B8952E,#D4AF72)", boxShadow: "0 4px 16px rgba(180,149,46,0.35)", textDecoration: "none" }}
            >
              Ver todos los horarios
            </a>
          </div>

          {/* DERECHA — tabla */}
          <div style={{ background: "white", borderRadius: "14px", border: "1px solid #EEECE6", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            <div style={{ background: "linear-gradient(135deg,#0B0C10,#1E293B)", padding: "1.25rem 1.5rem" }}>
              <p style={{ fontSize: "0.75rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72", letterSpacing: "0.08em" }}>CURSOS EN VIVO DISPONIBLES</p>
            </div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "560px" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #EEECE6" }}>
                    {["Curso", "Días", "Horario", "Duración", "Inicio", ""].map((h) => (
                      <th key={h} style={{ textAlign: "left", padding: "0.9rem 1.1rem", fontSize: "0.65rem", color: "#9CA3AF", fontFamily: "JetBrains Mono,monospace", letterSpacing: "0.06em", fontWeight: 600 }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((h, i) => {
                    const curso = cursos.find((c) => c.id === h.cursoId);
                    return (
                      <tr key={h.nombre} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA", borderBottom: "1px solid #F5F5F5" }}>
                        <td style={{ padding: "1rem 1.1rem", fontSize: "0.82rem", fontWeight: 700, color: "#0B0C10" }}>{h.nombre}</td>
                        <td style={{ padding: "1rem 1.1rem", fontSize: "0.78rem", color: "#6B7280", fontFamily: "JetBrains Mono,monospace" }}>{h.dias}</td>
                        <td style={{ padding: "1rem 1.1rem", fontSize: "0.78rem", color: "#6B7280", fontFamily: "JetBrains Mono,monospace" }}>{h.horario}</td>
                        <td style={{ padding: "1rem 1.1rem", fontSize: "0.78rem", fontWeight: 600, color: "#B8952E", fontFamily: "JetBrains Mono,monospace" }}>{h.duracion}</td>
                        <td style={{ padding: "1rem 1.1rem", fontSize: "0.78rem", color: "#6B7280", fontFamily: "JetBrains Mono,monospace" }}>{h.inicio}</td>
                        <td style={{ padding: "1rem 1.1rem" }}>
                          {curso && (
                            <button
                              onClick={() => addItem({ id: curso.id, titulo: curso.nombre, precio: curso.precio, software: curso.software })}
                              style={{ padding: "0.4rem 0.85rem", borderRadius: "6px", background: "#0B0C10", color: "white", fontSize: "0.72rem", fontWeight: 600, border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
                            >
                              Inscribirme a este Curso
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

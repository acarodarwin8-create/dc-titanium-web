import { VisaIcon, MastercardIcon, PayPalIcon, TransferIcon, LockIcon } from "./PaymentIcons";

const REDES = [
  { nombre: "YouTube", href: "https://youtube.com/@DCTitaniumBuilders", path: "M23 12s0-3.6-.46-5.3a3 3 0 00-2.1-2.1C18.9 4 12 4 12 4s-6.9 0-8.44.6a3 3 0 00-2.1 2.1C1 8.4 1 12 1 12s0 3.6.46 5.3a3 3 0 002.1 2.1C5.1 20 12 20 12 20s6.9 0 8.44-.6a3 3 0 002.1-2.1C23 15.6 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" },
  { nombre: "Instagram", href: "https://instagram.com/dctitaniumbuilders", path: "M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.6.07 4.85s0 3.6-.07 4.85c-.15 3.2-1.66 4.77-4.92 4.92-1.25.06-1.6.07-4.85.07s-3.6 0-4.85-.07c-3.26-.15-4.77-1.72-4.92-4.92C2.16 15.6 2.15 15.25 2.15 12s0-3.6.08-4.85C2.38 3.94 3.9 2.38 7.15 2.27 8.4 2.21 8.75 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z" },
  { nombre: "LinkedIn", href: "https://linkedin.com/company/dctitaniumbuilders", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z" },
  { nombre: "TikTok", href: "https://tiktok.com/@titanium_building", path: "M16.6 2h-3.3v13.2a2.7 2.7 0 11-2.7-2.7c.24 0 .48.03.7.08V9.2a5.9 5.9 0 00-.7-.04A5.9 5.9 0 1016.6 15V8.3a8.2 8.2 0 004.9 1.6V6.6a4.9 4.9 0 01-4.9-4.6z" },
];

const COLUMNAS = [
  { titulo: "Servicios", links: [{ l: "BIM Management", href: "#comunidad" }, { l: "Ingeniería Estructural", href: "#cursos" }, { l: "Automatización", href: "#comunidad" }] },
  { titulo: "Software Lab", links: [{ l: "TB Script PRO", href: "#comunidad" }, { l: "CivilControl Pro", href: "#comunidad" }, { l: "Titanium Hydro", href: "#comunidad" }] },
  { titulo: "Empresa", links: [{ l: "Nuestra Historia", href: "#conocenos" }, { l: "Equipo", href: "#conocenos" }, { l: "Portafolio", href: "#portafolio" }, { l: "Galería de Recursos", href: "#galeria" }, { l: "Contacto", href: "#contacto" }] },
  { titulo: "Legal", links: [{ l: "Términos y Condiciones", href: "#" }, { l: "Política de Privacidad", href: "#" }, { l: "Política de Cookies", href: "#" }] },
];
const NORMATIVAS = ["ACI 318-25", "NEC-SE-DS", "NEC-HS", "INEN"];

export default function Footer() {
  return (
    <footer style={{ background: "#0B0C10", color: "#9CA3AF", padding: "4.5rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #1F2937", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <img src="/Logo_V8_Premium_Serio.png" alt="DC Titanium Builders" width={44} height={44} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "1px solid #D4AF72" }} />
              <span style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>DC Titanium Builders</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "#6B7280", maxWidth: "380px" }}>
              Plataforma educativa AEC: ingeniería estructural, modelado BIM y automatización — Quito, Ecuador.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.9rem" }} className="md:items-end">
            <p style={{ fontSize: "0.72rem", fontFamily: "JetBrains Mono,monospace", color: "#4B5563", letterSpacing: "0.08em" }}>SÍGUENOS</p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {REDES.map((r) => (
                <a
                  key={r.nombre}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={r.nombre}
                  style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #D4AF72", display: "flex", alignItems: "center", justifyContent: "center", color: "#D4AF72" }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d={r.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "2rem", marginBottom: "3rem" }}>
          {COLUMNAS.map((col) => (
            <div key={col.titulo}>
              <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "white", marginBottom: "1rem" }}>{col.titulo}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                {col.links.map((it) => (
                  <li key={it.l}>
                    <a href={it.href} style={{ fontSize: "0.85rem", color: "#6B7280", textDecoration: "none" }}>{it.l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.5rem", marginBottom: "2.5rem", paddingTop: "2rem", borderTop: "1px solid #1F2937" }}>
          <div>
            <p style={{ fontSize: "0.65rem", fontFamily: "JetBrains Mono,monospace", color: "#4B5563", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>MÉTODOS DE PAGO</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <VisaIcon />
              <MastercardIcon />
              <PayPalIcon />
              <TransferIcon />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.65rem", color: "#6B7280" }}>
              <LockIcon color="#D4AF72" />
              Garantía de Pago Seguro SSL 256-Bit
            </div>
          </div>
          <div>
            <p style={{ fontSize: "0.65rem", fontFamily: "JetBrains Mono,monospace", color: "#4B5563", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>NORMATIVAS APLICADAS</p>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {NORMATIVAS.map((n) => (
                <span key={n} style={{ padding: "0.35rem 0.75rem", borderRadius: "6px", border: "1px solid #262626", fontSize: "0.65rem", fontFamily: "JetBrains Mono,monospace", color: "#D4AF72" }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 4 */}
        <div style={{ borderTop: "1px solid #1F2937", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#4B5563" }}>2026 DC Titanium Builders S.A. — La ingeniería es nuestro lenguaje.</p>
        </div>
      </div>
    </footer>
  );
}

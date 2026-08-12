import { EfectivoIcon, TransferIcon, LockIcon } from "./PaymentIcons";
import { nombreCorto, descripcionCorta, anioCopyright, empresa, REDES_SOCIALES as REDES, FOOTER_COLUMNAS as COLUMNAS, FOOTER_NORMATIVAS as NORMATIVAS } from "@/content/empresa";

export default function Footer() {
  return (
    <footer style={{ background: "#0B0C10", color: "#9CA3AF", padding: "4.5rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid #1F2937", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <img src="/Logo_V8_Premium_Serio.png" alt="DC Titanium Builders" width={44} height={44} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", border: "1px solid #D4AF72" }} />
              <span style={{ fontWeight: 700, color: "white", fontSize: "1rem" }}>{nombreCorto}</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "#6B7280", maxWidth: "380px" }}>
              {descripcionCorta}
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
              <EfectivoIcon />
              <TransferIcon />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.9rem", fontSize: "0.65rem", color: "#6B7280" }}>
              <LockIcon color="#D4AF72" />
              Conexión segura SSL 256-Bit
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
          <p style={{ fontSize: "0.8rem", color: "#4B5563" }}>{anioCopyright} {empresa.nombre} — {empresa.slogan}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { MONEDAS, type Moneda } from "@/lib/currency";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";

const TABS = ["Programas & Masters", "Cursos por Software", "Software Lab", "Comunidad"] as const;
type Tab = (typeof TABS)[number];

type Programa = {
  titulo: string;
  normativa: string;
  software: string[];
  duracion: string;
  preview: string;
  previewLabel: string;
};

const PROGRAMAS: Programa[] = [
  {
    titulo: "Máster en Ingeniería Estructural Sísmica",
    normativa: "ACI 318-25 / NEC-SE-DS",
    software: ["🏗️ ETABS", "📊 SAP2000", "🧱 SAFE"],
    duracion: "6 meses",
    preview: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80",
    previewLabel: "Edificio Titanium Quitumbe — SMF 9 pisos",
  },
  {
    titulo: "Especialización BIM",
    normativa: "ISO 19650",
    software: ["🏛️ Revit", "🗂️ Navisworks", "📐 CYPE", "🔗 Speckle"],
    duracion: "4 meses",
    preview: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",
    previewLabel: "Modelo BIM federado — Torre residencial",
  },
  {
    titulo: "Diplomado Automatización AEC",
    normativa: "Clean Code Standards",
    software: ["🐍 Python", "⚙️ Dynamo", "#️⃣ C# / Revit API"],
    duracion: "3 meses",
    preview: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=560&fit=crop&q=80",
    previewLabel: "Script de armado automático — TB Script PRO",
  },
];

const CURSOS_SOFTWARE = [
  { software: "ETABS", desc: "Pórticos SMF, Muros Cortante, Análisis Espectral", nivel: "Experto" as const },
  { software: "Revit", desc: "Modelado Estructural + Despiece Automatizado", nivel: "Intermedio" as const },
  { software: "Advance Steel", desc: "Conexiones AISC 360/341", nivel: "Experto" as const },
  { software: "Python & Dynamo", desc: "Automatización BIM", nivel: "Intermedio" as const },
  { software: "Tekla / CYPE", desc: "Modelado Avanzado", nivel: "Intermedio" as const },
  { software: "SAP2000", desc: "Análisis No Lineal", nivel: "Experto" as const },
];

const NIVEL_BADGE: Record<string, string> = {
  "Básico": "#3FB950",
  Intermedio: "#C9A84C",
  Experto: "#F85149",
};

const SOFTWARE_LAB = [
  { nombre: "TB Script PRO", desc: "Automatización despiece acero Revit", badge: "Revit API + C#", precio: "$49.99 USD" },
  { nombre: "CivilControl Pro", desc: "Metrados y presupuestos automatizados", badge: "Web App", precio: null },
  { nombre: "Titanium Hydro", desc: "Cálculo redes hidrosanitarias NEC-HS", badge: "NEC-HS", precio: null },
  { nombre: "Predimensionador Web 3D", desc: "Herramienta gratuita online", badge: "Gratis", precio: null },
];

const COMUNIDAD_ITEMS = [
  { label: "Biblioteca de Plantillas .RTE & Scripts", desc: "Descarga gratuita", href: "#galeria", icono: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6" },
  { label: "Foro de Consultas Técnicas", desc: "Resuelve dudas con la comunidad", href: "#comunidad", icono: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" },
  { label: "Galería de Proyectos de Egresados", desc: "Trabajos reales de alumnos", href: "#galeria", icono: "M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zM3 16l5-5 4 4 4-5 5 6" },
  { label: "Canal YouTube @DCTitaniumBuilders", desc: "Tutoriales y clases gratis", href: "https://youtube.com/@DCTitaniumBuilders", icono: "M23 12s0-3.6-.46-5.3a3 3 0 00-2.1-2.1C18.9 4 12 4 12 4s-6.9 0-8.44.6a3 3 0 00-2.1 2.1C1 8.4 1 12 1 12s0 3.6.46 5.3a3 3 0 002.1 2.1C5.1 20 12 20 12 20s6.9 0 8.44-.6a3 3 0 002.1-2.1C23 15.6 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z" },
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: "0.3rem", transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" strokeLinecap="round" /></svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="20" r="1" fill="currentColor" /><circle cx="18" cy="20" r="1" fill="currentColor" /><path d="M6 6L5 3H2" strokeLinecap="round" /></svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openTab, setOpenTab] = useState<Tab | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hoveredPrograma, setHoveredPrograma] = useState(0);

  const { items, moneda, setMoneda, toggleCart } = useCart();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const previewActivo = PROGRAMAS[hoveredPrograma];

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Top bar */}
        <div style={{ background: "#0A0A0F", color: "#8B949E", padding: "0.4rem 2rem", borderBottom: "1px solid #21262D" }} className="hidden sm:block">
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.72rem" }}>
            <select
              value={moneda}
              onChange={(e) => setMoneda(e.target.value as Moneda)}
              aria-label="Seleccionar moneda"
              style={{ background: "transparent", color: "#8B949E", border: "none", outline: "none", fontSize: "0.72rem", cursor: "pointer" }}
            >
              {MONEDAS.map((m) => (
                <option key={m} value={m} style={{ color: "#0A0A0F" }}>{m}</option>
              ))}
            </select>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <a href="mailto:info@dctitanium.com" style={{ color: "#8B949E", textDecoration: "none" }}>info@dctitanium.com</a>
              <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 600 }}>WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div
          className="backdrop-blur-xl"
          style={{
            background: scrolled || mobileOpen || openTab ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.75)",
            borderBottom: "1px solid #21262D",
            transition: "background 0.3s ease",
          }}
          onMouseLeave={() => setOpenTab(null)}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href="#inicio" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <img
                src="/Logo_V8_Premium_Serio.png"
                alt="DC Titanium Builders"
                width={48}
                height={48}
                className="logo-3d"
                style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", border: "1px solid #C9A84C", flexShrink: 0 }}
              />
              <span style={{ fontWeight: 700, fontSize: "1.02rem", color: "#FFFFFF", letterSpacing: "-0.02em" }} className="hidden sm:inline">
                DC Titanium <span style={{ color: "#C9A84C" }}>Builders</span>
              </span>
            </a>

            <nav style={{ alignItems: "center", gap: "1.75rem" }} className="hidden lg:flex">
              {TABS.map((tab) => (
                <div key={tab} onMouseEnter={() => setOpenTab(tab)}>
                  <button
                    style={{ display: "flex", alignItems: "center", fontSize: "0.82rem", fontWeight: 500, color: openTab === tab ? "#E8C96A" : "#8B949E", background: "none", border: "none", cursor: "pointer", padding: "0.5rem 0", whiteSpace: "nowrap" }}
                  >
                    {tab}
                    <Chevron open={openTab === tab} />
                  </button>
                </div>
              ))}
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                aria-label="Buscar (Ctrl+K)"
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex"
                style={{ width: "40px", height: "40px", borderRadius: "50%", border: "none", background: "transparent", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#8B949E" }}
              >
                <SearchIcon />
              </button>

              <button
                aria-label="Abrir carrito"
                onClick={() => toggleCart(true)}
                style={{ position: "relative", width: "40px", height: "40px", borderRadius: "50%", border: "none", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#8B949E" }}
              >
                <CartIcon />
                {items.length > 0 && (
                  <span style={{ position: "absolute", top: "2px", right: "2px", minWidth: "17px", height: "17px", borderRadius: "999px", background: "linear-gradient(135deg,#C9A84C,#E8C96A)", color: "#0A0A0F", fontSize: "0.62rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px" }}>
                    {items.length}
                  </span>
                )}
              </button>

              <a
                href="#contacto"
                className="hidden md:inline-block"
                style={{ padding: "0.6rem 1.4rem", borderRadius: "8px", background: "linear-gradient(135deg,#C9A84C,#E8C96A)", color: "#0A0A0F", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", marginLeft: "0.25rem" }}
              >
                Inscribirse
              </a>

              <button
                aria-label="Abrir menu"
                onClick={() => setMobileOpen((v) => !v)}
                className="flex lg:hidden"
                style={{ width: "40px", height: "40px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", background: "transparent", border: "none", cursor: "pointer" }}
              >
                <span style={{ width: "20px", height: "2px", background: "#FFFFFF", transition: "all 0.25s", transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
                <span style={{ width: "20px", height: "2px", background: "#FFFFFF", transition: "all 0.25s", opacity: mobileOpen ? 0 : 1 }} />
                <span style={{ width: "20px", height: "2px", background: "#FFFFFF", transition: "all 0.25s", transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
              </button>
            </div>
          </div>

          {/* MEGA MENU PANEL — glassmorphism flotante */}
          <div
            className="hidden lg:block backdrop-blur-xl bg-[#0D1117]/95 border border-[#21262D] rounded-2xl shadow-2xl transition-all duration-200 w-[850px]"
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(100% + 10px)",
              transform: openTab ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-8px)",
              padding: "1.75rem",
              opacity: openTab ? 1 : 0,
              pointerEvents: openTab ? "auto" : "none",
              maxHeight: "calc(100vh - 110px)",
              overflowY: "auto",
            }}
          >
            {openTab === "Programas & Masters" && (
              <div style={{ display: "flex", gap: "1.5rem" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {PROGRAMAS.map((p, i) => (
                    <a
                      key={p.titulo}
                      href="#cursos"
                      onMouseEnter={() => setHoveredPrograma(i)}
                      style={{
                        display: "block",
                        padding: "1rem 1.1rem",
                        borderRadius: "12px",
                        border: "1px solid " + (hoveredPrograma === i ? "#C9A84C" : "#21262D"),
                        background: hoveredPrograma === i ? "rgba(201,168,76,0.08)" : "transparent",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{ display: "inline-block", marginBottom: "0.5rem", fontSize: "0.6rem", fontWeight: 700, color: "#E8C96A", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "999px", padding: "0.15rem 0.55rem", letterSpacing: "0.04em" }}>
                        {p.normativa}
                      </span>
                      <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>{p.titulo}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.6rem" }}>
                        {p.software.map((s) => (
                          <span key={s} style={{ fontSize: "0.7rem", color: "#8B949E", fontFamily: "JetBrains Mono,monospace" }}>{s}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "0.72rem", color: "#8B949E" }}>Duración: {p.duracion}</span>
                        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#C9A84C" }}>Ver Temario →</span>
                      </div>
                    </a>
                  ))}
                </div>

                <div style={{ width: "260px", flexShrink: 0 }}>
                  <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #21262D", position: "relative" }}>
                    <img src={previewActivo.preview} alt={previewActivo.previewLabel} style={{ width: "100%", height: "280px", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(10,10,15,0.9) 100%)" }} />
                    <p style={{ position: "absolute", left: "0.9rem", right: "0.9rem", bottom: "0.85rem", fontSize: "0.75rem", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.4 }}>
                      {previewActivo.previewLabel}
                    </p>
                  </div>
                  <p style={{ fontSize: "0.65rem", color: "#8B949E", marginTop: "0.6rem", textAlign: "center" }}>Preview de proyecto real</p>
                </div>
              </div>
            )}

            {openTab === "Cursos por Software" && (
              <div className="grid grid-cols-3" style={{ gap: "1rem" }}>
                {CURSOS_SOFTWARE.map((c) => (
                  <a
                    key={c.software}
                    href="#cursos"
                    style={{ display: "flex", flexDirection: "column", gap: "0.6rem", padding: "1.1rem", borderRadius: "12px", border: "1px solid #21262D", background: "#161B22", textDecoration: "none" }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF", fontFamily: "JetBrains Mono,monospace" }}>{c.software}</span>
                      <span style={{ fontSize: "0.6rem", fontWeight: 700, color: NIVEL_BADGE[c.nivel], border: "1px solid " + NIVEL_BADGE[c.nivel], borderRadius: "999px", padding: "0.12rem 0.5rem" }}>{c.nivel}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#8B949E", lineHeight: 1.5 }}>{c.desc}</p>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", marginTop: "auto" }}>Ver Hoja Técnica →</span>
                  </a>
                ))}
              </div>
            )}

            {openTab === "Software Lab" && (
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {SOFTWARE_LAB.map((t) => (
                  <div key={t.nombre} style={{ padding: "1.1rem", borderRadius: "12px", border: "1px solid #21262D", background: "#161B22" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <p style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>{t.nombre}</p>
                      <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "#E8C96A", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "999px", padding: "0.12rem 0.5rem", whiteSpace: "nowrap" }}>{t.badge}</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#8B949E", lineHeight: 1.5, marginBottom: "0.75rem" }}>{t.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#C9A84C", fontFamily: "JetBrains Mono,monospace" }}>{t.precio ?? "Ver Detalles"}</span>
                      <a href="#comunidad" style={{ fontSize: "0.75rem", fontWeight: 600, color: "#C9A84C", textDecoration: "none" }}>
                        {t.precio ? "Comprar →" : "Ver Detalles →"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {openTab === "Comunidad" && (
              <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                {COMUNIDAD_ITEMS.map((l) => (
                  <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem", borderRadius: "12px", border: "1px solid #21262D", background: "#161B22", textDecoration: "none" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: "0.15rem" }}><path d={l.icono} strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div>
                      <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.2rem" }}>{l.label}</p>
                      <p style={{ fontSize: "0.72rem", color: "#8B949E" }}>{l.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="flex lg:hidden" style={{ borderTop: "1px solid #21262D", background: "#0D1117", padding: "1.25rem 2rem 2rem", flexDirection: "column", gap: "0.25rem", maxHeight: "calc(100vh - 72px)", overflowY: "auto" }}>
            {TABS.map((tab) => (
              <a
                key={tab}
                href={"#" + (tab === "Programas & Masters" ? "cursos" : tab === "Cursos por Software" ? "cursos" : tab === "Software Lab" ? "comunidad" : "comunidad")}
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 0", fontSize: "1rem", fontWeight: 500, color: "#FFFFFF", textDecoration: "none", borderBottom: "1px solid #21262D" }}
              >
                {tab}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); setSearchOpen(true); }}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.85rem 0", fontSize: "1rem", fontWeight: 500, color: "#FFFFFF", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}
            >
              <SearchIcon /> Buscar
            </button>
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: "1.25rem", padding: "0.85rem 1.5rem", borderRadius: "8px", background: "linear-gradient(135deg,#C9A84C,#E8C96A)", color: "#0A0A0F", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", textAlign: "center" }}
            >
              Inscribirse
            </a>
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
    </>
  );
}

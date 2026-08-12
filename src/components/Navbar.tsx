"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { MONEDAS, type Moneda } from "@/lib/currency";
import { NAV_LINKS, empresa, whatsappHref } from "@/content/empresa";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";

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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

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
              <a href={"mailto:" + empresa.email} style={{ color: "#8B949E", textDecoration: "none" }}>{empresa.email}</a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 600 }}>WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div
          className="backdrop-blur-xl"
          style={{
            background: scrolled || mobileOpen ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.75)",
            borderBottom: "1px solid #21262D",
            transition: "background 0.3s ease",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
            </Link>

            <nav style={{ alignItems: "center", gap: "1.75rem" }} className="hidden lg:flex">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={active ? "text-[#C9A84C]" : "text-[#8B949E] hover:text-white transition-colors"}
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      textDecoration: "none",
                      padding: "0.5rem 0",
                      borderBottom: active ? "2px solid #C9A84C" : "2px solid transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="flex lg:hidden" style={{ borderTop: "1px solid #21262D", background: "#0D1117", padding: "1.25rem 2rem 2rem", flexDirection: "column", gap: "0.25rem", maxHeight: "calc(100vh - 72px)", overflowY: "auto" }}>
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 0", fontSize: "1rem", fontWeight: 500, color: active ? "#C9A84C" : "#FFFFFF", textDecoration: "none", borderBottom: "1px solid #21262D" }}
                >
                  {link.label}
                </Link>
              );
            })}
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

"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="https://wa.me/593999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp: ¿Tienes dudas sobre un curso?"
      className="fixed bottom-6 right-6 z-50"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        padding: "0.85rem 1.25rem",
        borderRadius: "999px",
        background: "#25D366",
        color: "white",
        fontWeight: 600,
        fontSize: "0.85rem",
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <span style={{ position: "relative", width: "26px", height: "26px", flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.44.79 3.06 1.2 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.15-4.9-4.34-.14-.19-1.17-1.56-1.17-2.98s.73-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2.01 1.11 1 2.05 1.31 2.34 1.46.29.15.46.13.63-.08.17-.21.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.65.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36z" />
        </svg>
        <span
          className="animate-ping"
          style={{ position: "absolute", top: "-2px", right: "-2px", width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }}
        />
        <span style={{ position: "absolute", top: "-2px", right: "-2px", width: "10px", height: "10px", borderRadius: "50%", background: "#EF4444" }} />
      </span>
      <span className="hidden sm:inline">¿Tienes dudas sobre un curso?</span>
    </a>
  );
}

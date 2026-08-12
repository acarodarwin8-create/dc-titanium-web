import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata: Metadata = {
  title: "DC Titanium Builders | Ingeniería BIM Elite",
  description: "Capacitación especializada en cálculo estructural, modelado BIM y automatización AEC",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

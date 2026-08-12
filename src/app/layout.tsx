import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata: Metadata = {
  metadataBase: new URL("https://01proyectonextjs.vercel.app"),
  title: {
    default: "DC Titanium Builders | Ingeniería Estructural y BIM — Ecuador",
    template: "%s | DC Titanium Builders",
  },
  description:
    "Capacítate en Cálculo Estructural ACI 318-25, Modelado BIM y Automatización " +
    "con Python y Dynamo. Proyectos reales del Edificio Titanium Quitumbe. Quito, Ecuador.",
  keywords: [
    "ingeniería estructural", "BIM", "ETABS", "Revit", "ACI 318-25",
    "NEC-SE-DS", "AISC 360", "cursos ingeniería Ecuador", "Dynamo Python",
    "modelado estructural", "DC Titanium Builders",
  ],
  authors: [{ name: "DC Titanium Builders S.A.", url: "https://01proyectonextjs.vercel.app" }],
  creator: "DC Titanium Builders S.A.",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://01proyectonextjs.vercel.app",
    siteName: "DC Titanium Builders",
    title: "DC Titanium Builders | Ingeniería Estructural y BIM",
    description:
      "Plataforma educativa AEC de élite. Cálculo estructural, BIM y " +
      "automatización con proyectos reales bajo ACI 318-25 y NEC-SE-DS.",
    images: [
      {
        url: "/Logo_V8_Premium_Serio.png",
        width: 1200,
        height: 630,
        alt: "DC Titanium Builders — Ingeniería Estructural y BIM Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Titanium Builders | Ingeniería Estructural y BIM",
    description: "Cursos de ingeniería estructural, BIM y automatización. Ecuador.",
    images: ["/Logo_V8_Premium_Serio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/Logo_V8_Premium_Serio.png",
    apple: "/Logo_V8_Premium_Serio.png",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}

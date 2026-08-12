import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import CursosDestacados from "@/components/CursosDestacados";
import Descuentos from "@/components/Descuentos";
import Beneficios from "@/components/Beneficios";
import Horarios from "@/components/Horarios";
import Portafolio from "@/components/Portafolio";
import Galeria from "@/components/Galeria";
import Resenas from "@/components/Resenas";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <main>
        <Navbar />
        <Hero />
        <QuienesSomos />
        <CursosDestacados />
        <Descuentos />
        <Beneficios />
        <Horarios />
        <Portafolio />
        <Galeria />
        <Resenas />
        <Contacto />
        <Footer />
      </main>
    </CartProvider>
  );
}

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

export default function Home() {
  return (
    <main>
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
    </main>
  );
}

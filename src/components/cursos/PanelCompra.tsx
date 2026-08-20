"use client";

import ImagenPlaceholder from "@/components/ui/ImagenPlaceholder";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import { empresa } from "@/content/empresa";
import type { Curso } from "@/content/cursos";

export default function PanelCompra({
  curso,
  imagen,
  rutaInstruccionImagen,
}: {
  curso: Curso;
  imagen: string;
  rutaInstruccionImagen: string;
}) {
  const { items, moneda, addItem, toggleCart } = useCart();
  const enCarrito = items.some((i) => i.id === curso.id);
  const descuento = curso.precioOriginal ? Math.round((1 - curso.precio / curso.precioOriginal) * 100) : 0;

  const whatsappCurso = `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero reservar mi cupo en el curso "${curso.nombre}"`
  )}`;

  function inscribirse() {
    addItem({ id: curso.id, titulo: curso.nombre, precio: curso.precio, software: curso.software });
    toggleCart(true);
  }

  return (
    <aside id="panel-compra" className="lg:sticky lg:top-28">
      <div className="tb-glass-card overflow-hidden">
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <ImagenPlaceholder
            src={imagen}
            alt={curso.nombre}
            fill
            className="object-cover"
            rutaInstruccion={rutaInstruccionImagen}
          />
        </div>

        <div className="p-6">
          {descuento > 0 && (
            <span className="inline-block mb-3 text-xs font-bold text-[#0A0A0F] bg-[#C9A84C] px-2.5 py-1 rounded-full">
              -{descuento}% POR TIEMPO LIMITADO
            </span>
          )}

          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-3xl font-black text-[#C9A84C] font-mono">{formatPrice(curso.precio, moneda)}</span>
            {curso.precioOriginal > curso.precio && (
              <span className="text-base text-[#8B949E] line-through">{formatPrice(curso.precioOriginal, moneda)}</span>
            )}
          </div>

          <button
            type="button"
            onClick={inscribirse}
            disabled={enCarrito}
            className="w-full mb-3 py-4 px-8 rounded-lg font-bold text-[#0A0A0F] bg-[#C9A84C] hover:bg-[#D4AF72] transition-colors disabled:opacity-60 disabled:cursor-default"
          >
            {enCarrito ? "Ya está en tu carrito ✓" : "INSCRIBIRME AHORA"}
          </button>

          <a
            href={whatsappCurso}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-6 py-3 px-8 rounded-lg text-center font-semibold border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
          >
            Reservar por WhatsApp
          </a>

          <ul className="flex flex-col gap-2.5 mb-6 text-sm text-[#E6EDF3]">
            <li className="flex items-center gap-2">
              <span className="text-[#C9A84C]">✓</span> {curso.horas} horas de video HD
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C9A84C]">✓</span> {curso.lecciones} lecciones descargables
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C9A84C]">✓</span> Acceso de por vida
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C9A84C]">✓</span> Certificado DC Titanium
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#C9A84C]">✓</span> Acceso comunidad privada
            </li>
          </ul>

          <p className="text-xs text-[#8B949E] text-center mb-4 pt-4 border-t border-white/10">
            🛡 7 días de garantía o devolución
          </p>

          <p className="text-[10px] text-[#8B949E]/70 text-center tracking-wide">
            Visa · Mastercard · Transferencia · Efectivo
          </p>
        </div>
      </div>
    </aside>
  );
}

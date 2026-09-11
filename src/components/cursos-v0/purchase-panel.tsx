"use client";

import { useState } from "react";
import type { Curso } from "@/content/cursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";
import ImagenPlaceholder from "@/components/ui/ImagenPlaceholder";
import {
  IconPlay,
  IconInfinity,
  IconSmartphone,
  IconAward,
  IconFileText,
  IconDownload,
  IconHeart,
  IconShield,
  IconClock,
} from "./icons";

export function PurchasePanel({
  curso,
  imagen,
  rutaInstruccionImagen,
  hotmartUrl,
}: {
  curso: Curso;
  imagen: string;
  rutaInstruccionImagen: string;
  hotmartUrl: string;
}) {
  const [wished, setWished] = useState(false);
  const { items, moneda, addItem, toggleCart } = useCart();
  const enCarrito = items.some((i) => i.id === curso.id);
  const descuento = curso.precioOriginal ? Math.round((1 - curso.precio / curso.precioOriginal) * 100) : 0;

  const includes = [
    { Icon: IconClock, label: `${curso.horas} horas de video bajo demanda` },
    { Icon: IconFileText, label: `${curso.lecciones} lecciones y recursos descargables` },
    { Icon: IconDownload, label: `Modelos ${curso.software[0]} listos para usar` },
    { Icon: IconSmartphone, label: "Acceso en móvil, tablet y escritorio" },
    { Icon: IconInfinity, label: "Acceso de por vida" },
    { Icon: IconAward, label: "Certificado de finalización" },
  ];

  function inscribirse() {
    addItem({ id: curso.id, titulo: curso.nombre, precio: curso.precio, software: curso.software });
    toggleCart(true);
  }

  return (
    <div id="panel-compra" className="overflow-hidden rounded-xl border border-[#21262D] bg-[#111827] shadow-2xl shadow-black/40">
      <div className="group relative block aspect-video w-full overflow-hidden">
        <ImagenPlaceholder
          src={imagen}
          alt={curso.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          rutaInstruccion={rutaInstruccionImagen}
        />
        <span className="pointer-events-none absolute inset-0 bg-[#0A0A0F]/40" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-[#C9A84C] text-[#0A0A0F] shadow-lg">
            <IconPlay className="ml-1 size-7" />
          </span>
        </span>
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0A0A0F]/80 px-3 py-1 text-xs font-medium text-[#F8FAFC] backdrop-blur-sm">
          Ver vista previa
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold text-[#F8FAFC]">{formatPrice(curso.precio, moneda)}</span>
          {curso.precioOriginal > curso.precio && (
            <span className="pb-1 text-base text-[#8B949E] line-through">{formatPrice(curso.precioOriginal, moneda)}</span>
          )}
          {descuento > 0 && (
            <span className="mb-1 rounded-md bg-[#C9A84C]/15 px-2 py-0.5 text-xs font-semibold text-[#C9A84C]">
              -{descuento}%
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3">
          <button
            type="button"
            onClick={inscribirse}
            disabled={enCarrito}
            className="w-full rounded-lg bg-[#C9A84C] py-3 text-base font-semibold text-[#0A0A0F] transition-all hover:bg-[#D4AF72] active:scale-[0.99] disabled:opacity-60 disabled:active:scale-100"
          >
            {enCarrito ? "Ya está en tu carrito ✓" : "INSCRIBIRME AHORA"}
          </button>
          <div className="flex gap-3">
            <a
              href={hotmartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-[#21262D] bg-[#161B22] py-3 text-center text-sm font-medium text-[#E6EDF3] transition-colors hover:border-[#C9A84C]/50 hover:bg-[#21262D]"
            >
              Comprar en Hotmart
            </a>
            <button
              type="button"
              onClick={() => setWished((w) => !w)}
              aria-pressed={wished}
              aria-label="Guardar en favoritos"
              className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-[#21262D] bg-[#161B22] text-[#E6EDF3] transition-colors hover:border-[#C9A84C]/50 hover:bg-[#21262D]"
            >
              <IconHeart className="size-5" fill={wished ? "#C9A84C" : "none"} />
            </button>
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[#8B949E]">
          <IconShield className="size-4 text-[#C9A84C]/70" />
          Garantía de 7 días o devolución
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <h3 className="text-sm font-semibold text-[#F8FAFC]">Este curso incluye</h3>
          <ul className="mt-3 flex flex-col gap-3">
            {includes.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-3 text-sm text-[#8B949E]">
                <Icon className="mt-0.5 size-4 shrink-0 text-[#C9A84C]/80" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-center text-[10px] text-[#8B949E]/70 tracking-wide border-t border-white/10 pt-4">
          Visa · Mastercard · PayPal · Transferencia · Efectivo
        </p>
      </div>
    </div>
  );
}

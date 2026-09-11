"use client";

import type { Curso } from "@/content/cursos";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/currency";

export function MobilePurchaseBar({ curso }: { curso: Curso }) {
  const { items, moneda, addItem, toggleCart } = useCart();
  const enCarrito = items.some((i) => i.id === curso.id);

  function inscribirse() {
    addItem({ id: curso.id, titulo: curso.nombre, precio: curso.precio, software: curso.software });
    toggleCart(true);
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#21262D] bg-[#0A0A0F]/95 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#F8FAFC]">{formatPrice(curso.precio, moneda)}</span>
          {curso.precioOriginal > curso.precio && (
            <span className="text-xs text-[#8B949E] line-through">{formatPrice(curso.precioOriginal, moneda)}</span>
          )}
        </div>
        <button
          type="button"
          onClick={inscribirse}
          disabled={enCarrito}
          className="ml-auto flex-1 rounded-lg bg-[#C9A84C] py-3 text-sm font-semibold text-[#0A0A0F] transition-all hover:bg-[#D4AF72] active:scale-[0.99] disabled:opacity-60"
        >
          {enCarrito ? "En tu carrito ✓" : "INSCRIBIRME AHORA"}
        </button>
      </div>
    </div>
  );
}

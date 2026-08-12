"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Moneda } from "@/lib/currency";

// Forma minima que debe cumplir cualquier producto comprable (cursos, items de galeria, etc.)
export type CartItem = {
  id: number;
  titulo: string;
  precio: number;
  software: string[];
};

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  moneda: Moneda;
  cuponCodigo: string | null;
  descuentoPorcentaje: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  toggleCart: (force?: boolean) => void;
  setMoneda: (m: Moneda) => void;
  applyCoupon: (code: string) => boolean;
};

const STORAGE_KEY = "dctitanium_cart_v1";
const CUPONES: Record<string, number> = { TITANIUM20: 20, "TITANIUM-ELITE": 20 };

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [moneda, setMonedaState] = useState<Moneda>("USD");
  const [cuponCodigo, setCuponCodigo] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.items)) setItems(parsed.items);
        if (parsed.moneda) setMonedaState(parsed.moneda);
        if (parsed.cuponCodigo) setCuponCodigo(parsed.cuponCodigo);
      }
    } catch {
      // localStorage no disponible o datos corruptos: se ignora y arranca vacío
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, moneda, cuponCodigo }));
  }, [items, moneda, cuponCodigo, hydrated]);

  const addItem = (item: CartItem) => {
    setItems((prev) => (prev.some((c) => c.id === item.id) ? prev : [...prev, item]));
    setIsOpen(true);
  };

  const removeItem = (id: number) => setItems((prev) => prev.filter((c) => c.id !== id));

  const clearCart = () => {
    setItems([]);
    setCuponCodigo(null);
  };

  const toggleCart = (force?: boolean) => setIsOpen((prev) => (typeof force === "boolean" ? force : !prev));

  const setMoneda = (m: Moneda) => setMonedaState(m);

  const applyCoupon = (code: string) => {
    const normalizado = code.trim().toUpperCase();
    if (CUPONES[normalizado]) {
      setCuponCodigo(normalizado);
      return true;
    }
    return false;
  };

  const descuentoPorcentaje = cuponCodigo ? CUPONES[cuponCodigo] ?? 0 : 0;

  return (
    <CartContext.Provider
      value={{ items, isOpen, moneda, cuponCodigo, descuentoPorcentaje, addItem, removeItem, clearCart, toggleCart, setMoneda, applyCoupon }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de CartProvider");
  return ctx;
}

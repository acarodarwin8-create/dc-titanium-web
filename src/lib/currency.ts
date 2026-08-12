export type Moneda = "USD" | "EUR" | "COP" | "PEN";

export const TASAS: Record<Moneda, number> = {
  USD: 1,
  EUR: 0.92,
  COP: 4100,
  PEN: 3.7,
};

export const SIMBOLOS: Record<Moneda, string> = {
  USD: "$",
  EUR: "€",
  COP: "$",
  PEN: "S/",
};

export const MONEDAS: Moneda[] = ["USD", "EUR", "COP", "PEN"];

export function formatPrice(usd: number, moneda: Moneda): string {
  const valor = Math.round(usd * TASAS[moneda]);
  return SIMBOLOS[moneda] + valor.toLocaleString("en-US");
}

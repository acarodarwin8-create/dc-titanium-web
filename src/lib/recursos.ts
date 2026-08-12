// Recursos de la Galeria (videos, imagenes, documentos, hojas) leidos desde
// una Google Sheet administrada por Darwin. Si no hay Sheet configurado
// (NEXT_PUBLIC_RECURSOS_API_URL vacio), se usa el catalogo estatico de
// src/data/galeria.ts para que el sitio siga funcionando igual que hoy.

import { GALERIA } from "@/data/galeria";

export type Recurso = {
  id: string;
  titulo: string;
  categoria: string;
  tipoArchivo: string; // video | imagen | documento | hoja | render...
  tipo: "gratis" | "pago";
  precio: number;
  imagen: string; // portada/miniatura
  linkArchivo: string; // descarga directa (solo recursos gratis)
  linkCompra: string; // link de Hotmart (solo recursos pagos)
  descargas: number;
};

const API_URL = process.env.NEXT_PUBLIC_RECURSOS_API_URL;

function str(v: unknown): string {
  return v === undefined || v === null ? "" : String(v).trim();
}

function num(v: unknown): number {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function normalizarFila(row: Record<string, unknown>): Recurso {
  return {
    id: str(row.id),
    titulo: str(row.titulo),
    categoria: str(row.categoria),
    tipoArchivo: str(row.tipoArchivo) || "archivo",
    tipo: str(row.tipo).toLowerCase() === "pago" ? "pago" : "gratis",
    precio: num(row.precio),
    imagen: str(row.imagen),
    linkArchivo: str(row.linkArchivo),
    linkCompra: str(row.linkCompra),
    descargas: num(row.descargas),
  };
}

function recursosEstaticos(): Recurso[] {
  return GALERIA.map((g) => ({
    id: String(g.id),
    titulo: g.titulo,
    categoria: g.categoria,
    tipoArchivo: "imagen",
    tipo: g.tipo,
    precio: g.precio,
    imagen: g.imagen,
    linkArchivo: g.imagen,
    linkCompra: "",
    descargas: 0,
  }));
}

export async function obtenerRecursos(): Promise<Recurso[]> {
  if (!API_URL) return recursosEstaticos();
  try {
    const res = await fetch(API_URL, { next: { revalidate: 300 } });
    if (!res.ok) return recursosEstaticos();
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return recursosEstaticos();
    return data.map(normalizarFila);
  } catch {
    return recursosEstaticos();
  }
}

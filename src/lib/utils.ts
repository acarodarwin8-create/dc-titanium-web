// Utilidades genericas compartidas por componentes.

// Combina clases de Tailwind condicionalmente sin depender de librerias externas.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

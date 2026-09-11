// src/constants/colors.ts
// ============================================================
// PALETA HAUTE ELEGANCE v1.0 — DC Titanium Builders
// ============================================================
// REGLA DE ORO: NUNCA escriba un color hex directamente
// en un componente. Siempre importe desde aquí:
// import { COLORS } from '@/constants/colors'
//
// REGLA 60-30-10:
//   60% → Fondos base (Onyx, Graphite, Navy)
//   30% → Acento primario (Champagne Gold, Bronze)
//   10% → Tipografía y estados (Ivory, Taupe, Emerald...)
// ============================================================

export const COLORS = {

  // ── BASE 60% — Fondos estructurales ──────────────────────

  // Fondo principal de toda la app. Negro con micro-subtono
  // cálido — más profundo y lujoso que el negro puro.
  onyxNoir:        '#070708',

  // Fondo de tarjetas y contenedores modulares.
  // Separa visualmente del fondo sin perder elegancia.
  graphiteSilk:    '#161619',

  // Secciones alternas (tabla de horarios, paneles analíticos).
  // Azul noche casi negro — profundidad ejecutiva.
  royalObsidian:   '#10141F',

  // ── ACENTO 30% — Identidad de marca ──────────────────────

  // Oro champán clásico — color de marca DC Titanium.
  // Botones principales, badges, métricas clave.
  champagneGold:   '#D4AF37',

  // Oro más claro para hover y estados activos.
  goldLight:       '#E2C87A',

  // Bronce envejecido para bordes, separadores y contornos.
  // Enmarca secciones con distinción sin competir con el oro.
  bronzePatina:    '#8C6D46',

  // ── TIPOGRAFÍA 10% — Lectura de alta gama ─────────────────

  // Blanco marfil cálido — textos principales.
  // Sustituye al blanco clínico. Lectura elegante y relajada.
  ivoryPearl:      '#F2F0EB',

  // Gris taupe plateado — textos secundarios, subtítulos,
  // etiquetas y metadatos de precisión.
  sterlingTaupe:   '#9E9A92',

  // Plata fría metálica — reemplaza al rose gold.
  // Complementa el oro con autoridad técnica.
  platinumSilver:  '#E8E8EC',

  // ── ESTADOS FUNCIONALES ───────────────────────────────────

  // Verde esmeralda británico profundo.
  // Validaciones correctas, badges "GRATIS", confirmaciones.
  emeraldHeritage: '#1B4332',

  // Vino tinto aterciopelado.
  // Solo para badges exclusivos o alertas de distinción.
  // ADVERTENCIA: usar con criterio — máximo 2-3 veces por página.
  burgundyVelvet:  '#6B2D3C',

  // Rojo funcional para errores críticos de formulario.
  error:           '#EF4444',

  // Azul informativo para links y tooltips secundarios.
  info:            '#3B82F6',

} as const

// ============================================================
// TIPO DERIVADO
// Permite tipar props que reciben un color de la paleta.
// Ejemplo de uso en un componente:
//   interface ButtonProps { color: ColorKey }
// Solo acepta claves válidas — TypeScript rechaza cualquier
// color inventado fuera de esta paleta.
// ============================================================
export type ColorKey = keyof typeof COLORS

// src/types/ui.ts
// ============================================================
// TIPOS GENÉRICOS DE INTERFAZ — DC Titanium
// Props reutilizables para todos los componentes UI atómicos.
// Importar desde aquí — nunca definir tipos locales en componentes.
// ============================================================

// ── BOTÓN ─────────────────────────────────────────────────────

// Variantes visuales del botón — cada una tiene estilos distintos
export type ButtonVariant =
    | 'primary'    // Fondo oro champán — acción principal
    | 'secondary'  // Borde dorado, fondo transparente — acción secundaria
    | 'ghost'      // Sin borde ni fondo — acción terciaria
    | 'danger'     // Rojo — acciones destructivas

// Tamaños disponibles para el botón
export type ButtonSize =
    | 'sm'   // Pequeño — para badges o acciones compactas
    | 'md'   // Mediano — uso general
    | 'lg'   // Grande — CTAs principales del hero

// Props completas del componente Button
export interface ButtonProps {
    label: string
    variant?: ButtonVariant
    size?: ButtonSize
    href?: string           // Si existe, renderiza como <a> en vez de <button>
    onClick?: () => void
    disabled?: boolean
    fullWidth?: boolean     // Si true, ocupa el 100% del contenedor
    icon?: React.ReactNode  // Ícono opcional a la izquierda del label
}

// ── BADGE ─────────────────────────────────────────────────────

// Variantes de color para el componente Badge
export type BadgeVariant =
    | 'gold'      // Dorado — niveles, destacados
    | 'green'     // Verde esmeralda — "GRATIS", éxito
    | 'burgundy'  // Vino — badges exclusivos
    | 'gray'      // Gris neutro — metadata, estados secundarios

// Props del componente Badge
export interface BadgeProps {
    label: string
    variant?: BadgeVariant
}

// ── SECTION TITLE ─────────────────────────────────────────────

// Props del componente SectionTitle — encabezado de cada sección
export interface SectionTitleProps {
    // Etiqueta pequeña sobre el título (ej: 'FORMACIÓN ESPECIALIZADA AEC')
    eyebrow?: string

    // Título principal de la sección
    title: string

    // Parte del título que va en color dorado
    // Ejemplo: title='La ingeniería del' highlight='futuro'
    highlight?: string

    // Subtítulo o descripción bajo el título
    subtitle?: string

    // Alineación del bloque completo
    align?: 'left' | 'center' | 'right'
}

// ── GENÉRICOS ─────────────────────────────────────────────────

// Props base que heredan todos los componentes de sección
export interface SectionProps {
    // ID para navegación por ancla (ej: id='cursos')
    id?: string
    className?: string
}

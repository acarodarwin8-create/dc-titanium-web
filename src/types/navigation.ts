// src/types/navigation.ts
// ============================================================
// TIPOS DE DATOS — Navegación DC Titanium
// Define la forma de los links del Navbar y Footer.
// Importar siempre desde aquí — nunca crear tipos locales.
// ============================================================

// ── NAVBAR ────────────────────────────────────────────────────

// Representa un ítem del menú principal de navegación
export interface NavItem {
    // Texto visible en el menú
    label: string

    // Ruta de destino (ej: '/cursos', '/programas')
    href: string

    // Si es true, abre en pestaña nueva (links externos)
    external?: boolean

    // Submenú desplegable — opcional
    // Si existe, al hacer hover aparece un dropdown
    children?: NavSubItem[]
}

// Representa un ítem dentro de un submenú desplegable
export interface NavSubItem {
    label: string
    href: string
    // Descripción corta visible bajo el label en el dropdown
    description?: string
}

// ── FOOTER ────────────────────────────────────────────────────

// Representa una columna completa del Footer
export interface FooterColumn {
    // Título de la columna (ej: 'Servicios', 'Empresa')
    title: string

    // Lista de links dentro de esa columna
    links: FooterLink[]
}

// Representa un link individual dentro del Footer
export interface FooterLink {
    label: string
    href: string
    external?: boolean
}

// ── REDES SOCIALES ────────────────────────────────────────────

// Representa un ícono de red social en el Footer
export interface SocialLink {
    // Nombre de la red (ej: 'YouTube', 'Instagram')
    platform: string

    // URL completa del perfil
    url: string

    // Nombre del ícono a renderizar (para la librería de íconos)
    icon: string
}

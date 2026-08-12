// EDITAR AQUÍ para cambiar los datos de la empresa en toda la web.

export const empresa = {
  nombre: 'DC Titanium Builders S.A.',
  slogan: 'La ingeniería del mañana, edificada hoy.',
  email: 'info@dctitanium.com',
  whatsapp: '593999999999',   // ← CAMBIAR por número real
  whatsappMensaje: '¿Tienes dudas sobre un curso?',
  ubicacion: 'Quito, Ecuador',

  redes: {
    youtube: 'https://youtube.com/@DCTitaniumBuilders',
    tiktok: 'https://tiktok.com/@titanium_building',
    instagram: 'https://instagram.com/dctitaniumbuilders',
    linkedin: 'https://linkedin.com/company/dctitaniumbuilders',
  },

  stats: {
    ingenieros: 312,
    scripts: 87,
    anos: 5,
    proyectos: 9,
    vigas: 5956,
    pisos: 9,
  },

  proyectoFlagship: {
    nombre: 'Edificio Titanium Quitumbe',
    sistema: 'SMF Sísmico',
    deriva: '0.0187 OK',
    avance: 94,
    pisos: 9,
    normativa: 'ACI 318-25 / NEC-SE-DS',
    zonasismica: 'VI',
  },
};

// ---- Derivados de `empresa` (una sola fuente de verdad, sin duplicar datos) ----

export const nombreCorto = empresa.nombre.replace(/\s*S\.A\.$/, '');
export const whatsappHref = `https://wa.me/${empresa.whatsapp}`;
export const anioCopyright = 2026;
export const descripcionCorta = 'Plataforma educativa AEC: ingeniería estructural, modelado BIM y automatización — Quito, Ecuador.';

const ICONOS_REDES: Record<string, string> = {
  youtube: "M23 12s0-3.6-.46-5.3a3 3 0 00-2.1-2.1C18.9 4 12 4 12 4s-6.9 0-8.44.6a3 3 0 00-2.1 2.1C1 8.4 1 12 1 12s0 3.6.46 5.3a3 3 0 002.1 2.1C5.1 20 12 20 12 20s6.9 0 8.44-.6a3 3 0 002.1-2.1C23 15.6 23 12 23 12zM10 15.5v-7l6 3.5-6 3.5z",
  instagram: "M12 2.2c3.2 0 3.6 0 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.25.07 1.6.07 4.85s0 3.6-.07 4.85c-.15 3.2-1.66 4.77-4.92 4.92-1.25.06-1.6.07-4.85.07s-3.6 0-4.85-.07c-3.26-.15-4.77-1.72-4.92-4.92C2.16 15.6 2.15 15.25 2.15 12s0-3.6.08-4.85C2.38 3.94 3.9 2.38 7.15 2.27 8.4 2.21 8.75 2.2 12 2.2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z",
  linkedin: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.11 20.45H3.56V9h3.55v11.45z",
  tiktok: "M16.6 2h-3.3v13.2a2.7 2.7 0 11-2.7-2.7c.24 0 .48.03.7.08V9.2a5.9 5.9 0 00-.7-.04A5.9 5.9 0 1016.6 15V8.3a8.2 8.2 0 004.9 1.6V6.6a4.9 4.9 0 01-4.9-4.6z",
};

export const REDES_SOCIALES = Object.entries(empresa.redes).map(([nombre, href]) => ({
  nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
  href,
  path: ICONOS_REDES[nombre],
}));

export const NAV_LINKS = [
  { label: "Programas & Masters", href: "/programas" },
  { label: "Cursos por Software", href: "/cursos" },
  { label: "Comunidad", href: "/comunidad" },
  { label: "Conócenos", href: "/conocenos" },
];

// ---- Hero ----
export const HERO_NORMATIVAS = ["ACI 318-25", "NEC-SE-DS", "AISC 360/341"];

export const HERO_METRICAS = [
  { valor: empresa.stats.vigas.toLocaleString("es-EC"), label: "vigas" },
  { valor: String(empresa.stats.pisos), label: "pisos" },
  { valor: empresa.proyectoFlagship.normativa.split(" / ")[0], label: "normativa" },
  { valor: empresa.proyectoFlagship.zonasismica, label: "zona sísmica" },
];

export const HERO_SOFTWARE_STACK = ["ETABS", "Revit", "Advance Steel", "Dynamo", "Python", "SAP2000"];

export const HERO_CAPAS = [
  { id: "analitico" as const, icono: "📐", label: "Modelo Analítico" },
  { id: "armado" as const, icono: "🏗️", label: "Armado Rebar" },
  { id: "bim" as const, icono: "🏢", label: "BIM Final" },
];

// ---- Quienes Somos ----
export const QUIENES_SOMOS_BULLETS = [
  "Proyectos reales bajo ACI 318-25 y NEC-SE-DS",
  "Herramientas de producción profesional",
  "Scripts y automatización que ahorran horas de trabajo",
  "Comunidad activa de ingenieros en Ecuador",
];

export const QUIENES_SOMOS_METRICAS = [
  { v: "+" + empresa.stats.anos, l: "AÑOS" },
  { v: "+" + empresa.stats.scripts, l: "SCRIPTS" },
  { v: "+" + empresa.stats.ingenieros, l: "ESTUDIANTES" },
  { v: "+" + empresa.stats.proyectos, l: "PROYECTOS" },
];

// ---- Beneficios (ventaja competitiva) ----
export const BENEFICIOS_ITEMS = [
  { icono: "⚙", titulo: "SOFTWARE PROFESIONAL", desc: "ETABS, Revit, Advance Steel, SAP2000, SAFE, Dynamo." },
  { icono: "◈", titulo: "CERTIFICACIÓN OFICIAL", desc: "Autodesk Certified, CSI Certified, constancias DC Titanium." },
  { icono: "⬡", titulo: "COMUNIDAD ACTIVA", desc: "Grupo privado, foros, LinkedIn, TikTok, YouTube." },
  { icono: "⌬", titulo: "RECURSOS PREMIUM", desc: "Scripts TB PRO, plantillas .rte, tutoriales exclusivos." },
];

// ---- Descuentos ----
export const DESCUENTOS_ITEMS = [
  { titulo: "Grupos Profesionales", desc: "Inscríbete con 3+ colegas y obtén 15% de descuento grupal.", dato: "-15%" },
  { titulo: "Paquete Completo", desc: "Lleva 2 o más cursos y accede a precio de paquete especial.", dato: "-30%" },
  { titulo: "Alumni DC Titanium", desc: "Egresados obtienen 20% en todos los cursos siguientes.", dato: "-20%" },
];

// ---- Contacto ----
export const PAISES = ["Ecuador", "Colombia", "Perú", "México", "Chile", "Argentina", "España", "Otro"];

// ---- Footer ----
export const FOOTER_COLUMNAS = [
  { titulo: "Servicios", links: [{ l: "BIM Management", href: "#comunidad" }, { l: "Ingeniería Estructural", href: "#cursos" }, { l: "Automatización", href: "#comunidad" }] },
  { titulo: "Software Lab", links: [{ l: "TB Script PRO", href: "#comunidad" }, { l: "CivilControl Pro", href: "#comunidad" }, { l: "Titanium Hydro", href: "#comunidad" }] },
  { titulo: "Empresa", links: [{ l: "Nuestra Historia", href: "#conocenos" }, { l: "Equipo", href: "#conocenos" }, { l: "Portafolio", href: "#portafolio" }, { l: "Galería de Recursos", href: "#galeria" }, { l: "Contacto", href: "#contacto" }] },
  { titulo: "Legal", links: [{ l: "Términos y Condiciones", href: "#" }, { l: "Política de Privacidad", href: "#" }, { l: "Política de Cookies", href: "#" }] },
];

export const FOOTER_NORMATIVAS = ["ACI 318-25", "NEC-SE-DS", "NEC-HS", "INEN"];

// ---- Comunidad (/comunidad) ----
export const COMUNIDAD_ITEMS = [
  {
    icono: "📚",
    titulo: "Biblioteca Premium",
    descripcion: "Plantillas .RTE, Scripts Dynamo, Memorias de cálculo",
    dato: "300+ recursos | Actualización mensual",
    cta: "Acceder Gratis →",
    href: "/comunidad/biblioteca",
  },
  {
    icono: "💬",
    titulo: "Foro Técnico",
    descripcion: "Consultas estructurales, resolución entre pares",
    dato: "+1,200 consultas resueltas",
    cta: "Unirse al Foro →",
    href: "/comunidad/foro",
  },
  {
    icono: "🎓",
    titulo: "Galería de Proyectos",
    descripcion: "Proyectos reales de egresados DC Titanium",
    dato: "Portafolio de alumnos",
    cta: "Ver Galería →",
    href: "/comunidad/galeria",
  },
  {
    icono: "📺",
    titulo: "Canal YouTube",
    descripcion: "Tutoriales gratuitos semanales",
    dato: "@DCTitaniumBuilders | +87 videos",
    cta: "Suscribirse →",
    href: "https://youtube.com/@DCTitaniumBuilders",
    externo: true,
  },
];

// ---- Conocenos (/conocenos) ----
export const MISION = "Cerrar la brecha entre el modelado digital y la seguridad estructural de alto rendimiento, formando ingenieros capaces de resolver proyectos reales bajo normativa vigente, no ejercicios de aula.";

export const VISION = "Ser la referencia de formación en ingeniería estructural y BIM del Ecuador, con una comunidad de ingenieros de producción reconocidos por la calidad técnica de su trabajo.";

export const PROYECTO_STATS = [
  { label: "Pisos", valor: `${empresa.proyectoFlagship.pisos} + subsuelo` },
  { label: "Sistema", valor: empresa.proyectoFlagship.sistema },
  { label: "Zona sísmica", valor: empresa.proyectoFlagship.zonasismica },
  { label: "Normativa", valor: empresa.proyectoFlagship.normativa.split(" / ")[0] },
  { label: "Avance de obra", valor: `${empresa.proyectoFlagship.avance}%` },
];

export const CONOCENOS_STATS = [
  { valor: empresa.stats.vigas.toLocaleString("es-EC"), label: "vigas analizadas" },
  { valor: empresa.proyectoFlagship.deriva, label: "deriva máxima" },
  { valor: empresa.stats.scripts + "+", label: "scripts en producción" },
];

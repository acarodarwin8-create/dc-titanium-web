// ============================================================
// DC TITANIUM BUILDERS — CONFIGURACIÓN CENTRAL DE IMÁGENES
// ============================================================
// INSTRUCCIÓN: Para reemplazar una imagen, solo cambia la ruta
// de string aquí. El cambio se refleja en todo el sitio automáticamente
// SIEMPRE QUE el componente use IMAGENES en vez de una ruta hardcodeada.
// Formatos recomendados: .webp (mejor) o .jpg
// Tamaños recomendados indicados en cada sección
// ============================================================

export const IMAGENES = {
  // ── LOGO ──────────────────────────────────────────────────
  logo: "/Logo_V8_Premium_Serio.png", // NO CAMBIAR — logo oficial

  // ── HERO PRINCIPAL (slider) ────────────────────────────────
  // Tamaño recomendado: 1920x1080px
  hero: {
    slide1: "/imagenes/hero/hero-principal.jpg",
    slide2: "/imagenes/hero/hero-slide-2.jpg",
    slide3: "/imagenes/hero/hero-slide-3.jpg",
  },

  // ── PORTAFOLIO — EDIFICIO TITANIUM QUITUMBE ───────────────
  // Tamaño recomendado: 1200x800px
  portafolio: {
    titaniumQuitumbe: {
      renderExterior1: "/imagenes/portafolio/edificio-titanium-quitumbe/render-exterior-01.jpg",
      renderExterior2: "/imagenes/portafolio/edificio-titanium-quitumbe/render-exterior-02.jpg",
      renderInterior1: "/imagenes/portafolio/edificio-titanium-quitumbe/render-interior-01.jpg",
      renderInterior2: "/imagenes/portafolio/edificio-titanium-quitumbe/render-interior-02.jpg",
      planoEstructural: "/imagenes/portafolio/edificio-titanium-quitumbe/plano-estructural.jpg",
      modeloEtabs: "/imagenes/portafolio/edificio-titanium-quitumbe/modelo-etabs.jpg",
      modeloRevit: "/imagenes/portafolio/edificio-titanium-quitumbe/modelo-revit.jpg",
      modeloBim: "/imagenes/portafolio/edificio-titanium-quitumbe/modelo-bim-federado.jpg",
    },
    proyecto2: {
      render1: "/imagenes/portafolio/proyecto-2/render-01.jpg",
      render2: "/imagenes/portafolio/proyecto-2/render-02.jpg",
    },
  },

  // ── CURSOS (thumbnails) ────────────────────────────────────
  // Tamaño recomendado: 800x450px (ratio 16:9)
  // Claves = slug real del curso en src/content/cursos.ts
  cursos: {
    "etabs-avanzado": "/imagenes/cursos/etabs-avanzado.jpg",
    "revit-estructural": "/imagenes/cursos/revit-estructural.jpg",
    "advance-steel": "/imagenes/cursos/advance-steel.jpg",
    "sap2000": "/imagenes/cursos/sap2000.jpg",
    "python-dynamo": "/imagenes/cursos/python-dynamo.jpg",
    "etabs-safe": "/imagenes/cursos/etabs-safe.jpg",
  } as Record<string, string>,

  // ── EQUIPO ─────────────────────────────────────────────────
  // Tamaño recomendado: 400x400px (cuadrada)
  equipo: {
    darwin: "/imagenes/equipo/darwin-acaro.jpg",
    instructor2: "/imagenes/equipo/instructor-2.jpg",
  },

  // ── SOFTWARE LAB ───────────────────────────────────────────
  // Tamaño recomendado: 1200x700px
  softwareLab: {
    tbScriptPro: "/imagenes/software-lab/tb-script-pro.jpg",
    civilControl: "/imagenes/software-lab/civilcontrol-pro.jpg",
    titaniumHydro: "/imagenes/software-lab/titanium-hydro.jpg",
  },

  // ── RECURSOS / GALERÍA ─────────────────────────────────────
  // Tamaño recomendado: 800x600px
  // Nota: la galeria en /comunidad usa src/data/galeria.ts, no estas rutas.
  recursos: {
    renderTorre: "/imagenes/recursos/render-torre-titanium.jpg",
    modeloBim: "/imagenes/recursos/modelo-bim-federado.jpg",
    vistaInterior: "/imagenes/recursos/vista-interior-smf.jpg",
    setCompleto: "/imagenes/recursos/set-completo-quitumbe.jpg",
    plantillaRevit: "/imagenes/recursos/plantilla-revit-rte.jpg",
    coleccionRenders: "/imagenes/recursos/coleccion-renders.jpg",
  },

  // ── OPEN GRAPH (redes sociales) ────────────────────────────
  // Tamaño OBLIGATORIO: exactamente 1200x630px
  og: {
    principal: "/imagenes/og/og-image.jpg",
    cursoEtabs: "/imagenes/og/og-curso-etabs.jpg",
    cursoRevit: "/imagenes/og/og-curso-revit.jpg",
  },
};

# AGENTS.md — DC Titanium Builders Web
# Contexto operacional para Claude Code en VS Code

## 1. IDENTIDAD DEL PROYECTO

**Firma:** DC Titanium Builders S.A. — Quito, Ecuador  
**Producto:** Plataforma LMS + Portafolio de ingeniería estructural  
**Stack:** Next.js 16.3 (App Router) + TypeScript + Tailwind CSS + PostCSS  
**Puerto local:** `localhost:3000` | Network: `192.168.100.67:3000`  
**Turbopack activo** (Next.js dev con `--turbo`)

---

## 2. ESTRUCTURA DE ARCHIVOS

```
D:\09_DC_TITANIUM_LABS_(DESARROLLO_DE_SOFTWARE)\09.07_Web_DC_Titanium_(LMS)\
└── 01_proyecto_nextjs\
    ├── src\
    │   ├── app\
    │   │   ├── layout.tsx          ← Root layout, fuentes globales
    │   │   ├── page.tsx            ← Homepage (importa Hero, Navbar, etc.)
    │   │   └── globals.css         ← CSS global + variables de paleta
    │   └── components\
    │       ├── Hero.tsx            ← Hero section principal
    │       ├── Navbar.tsx          ← Navbar con dropdowns
    │       └── [otros].tsx
    ├── public\
    │   ├── Logo_V8_Premium_Serio.png   ← Logo oficial DC Titanium
    │   └── Gemini_Generated_Image_kq...png  ← Imagen banner actual
    ├── package.json
    ├── postcss.config.js           ← NO hay tailwind.config.js standalone
    ├── tsconfig.json
    └── AGENTS.md                   ← Este archivo
```

**REGLA CRÍTICA:** No existe `tailwind.config.js` separado. Tailwind se configura vía `postcss.config.js` y directivas en `globals.css`. No crear `tailwind.config.js` nuevo.

**Limpiar caché Turbopack si hay errores:**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

---

## 3. PALETA TB ÉLITE (ESTÁNDAR DE MARCA — USAR SIEMPRE)

Esta paleta es el estándar oficial de DC Titanium Builders. Aplicar en TODOS los componentes.

```css
/* TB Élite 10-Color Palette */
--tb-gold-primary:    #C9A84C;   /* Dorado principal — CTAs, acentos */
--tb-gold-light:      #E8C96A;   /* Dorado claro — hover states */
--tb-gold-dark:       #8B6914;   /* Dorado oscuro — pressed states */
--tb-obsidian:        #0A0A0F;   /* Negro profundo — fondos hero */
--tb-slate-deep:      #0D1117;   /* Slate oscuro — fondos sección */
--tb-slate-mid:       #161B22;   /* Slate medio — cards */
--tb-slate-light:     #21262D;   /* Slate claro — borders, dividers */
--tb-titanium:        #8B949E;   /* Gris titanio — texto secundario */
--tb-white-pure:      #FFFFFF;   /* Blanco puro — texto principal */
--tb-white-soft:      #E6EDF3;   /* Blanco suave — texto body */
```

**Gradiente de marca:**
```css
background: linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%);
```

---

## 4. TIPOGRAFÍA

- **Display/Headings:** `font-family: 'Inter', sans-serif` — peso 700-900
- **Body:** `font-family: 'Inter', sans-serif` — peso 400-500
- **Código/técnico:** `font-family: 'JetBrains Mono', monospace`
- Importar fuentes vía `next/font/google` en `layout.tsx`

---

## 5. PROYECTO REFERENCIA — EDIFICIO TITANIUM QUITUMBE

Datos reales del proyecto flagship para usar en contenido de cursos/portafolio:

```
Nombre:       Edificio Titanium Quitumbe
Pisos:        9 + subsuelo
Sistema:      SMF (Special Moment Frame)
Zona sísmica: VI (NEC-SE-DS)
Normativa:    ACI 318-25 / NEC-SE-DS
Software:     ETABS + SAFE + Revit 2026
Vigas:        5,956 registros extraídos (ETABS)
Deriva máx:   0.0187 (OK — límite NEC 0.02)
```

---

## 6. PRODUCTOS SOFTWARE (para Software Lab / mega-menú)

| Producto | Descripción | Link |
|---|---|---|
| TB Script PRO | Automatización despiece acero en Revit (Dynamo/CPython3) | hotmart.com |
| CivilControl Pro | Metrados y presupuestos de obra (Excel VBA, 18 hojas) | interno |
| Titanium Hydro | Cálculo redes hidrosanitarias (HTML/JS standalone) | web |
| TB Elite Suite | Plugin C# Revit 2026, 8 tabs, 86 comandos | interno |

**Precio TB Script PRO:** $49.99 USD  
**Hotlink:** `https://go.hotmart.com/F107029491P`

---

## 7. CURSOS Y PROGRAMAS (para mega-menú Navbar)

### Programas Master
- **Máster Ingeniería Estructural Sísmica** — ACI 318-25 / NEC-SE-DS / ETABS + SAP2000 + SAFE
- **Especialización BIM** — Revit + Navisworks + CYPE + Speckle
- **Diplomado Automatización AEC** — Python + Dynamo + C# para Revit

### Cursos por Software
- ETABS: Pórticos SMF, Muros cortante, Análisis espectral
- Revit: Modelado estructural, despiece automatizado
- Advance Steel: Conexiones bajo AISC 360/341
- Python & Dynamo: Automatización BIM
- Tekla / CYPE: Modelado avanzado

---

## 8. CONVENCIONES DE CÓDIGO

### TypeScript / React
```tsx
// SIEMPRE usar 'use client' en componentes con hooks/eventos
'use client';

// Interfaces con prefijo I o nombre descriptivo
interface NavItem { label: string; href: string; }

// Clases Tailwind: mobile-first, luego md: lg: xl:
// NO usar estilos inline salvo para variables CSS dinámicas
```

### Tailwind — clases de marca más usadas
```
// Fondos
bg-[#0A0A0F]  bg-[#0D1117]  bg-[#161B22]

// Texto dorado
text-[#C9A84C]  text-[#E8C96A]

// Borders
border-[#C9A84C]/30  border-[#21262D]

// Glassmorphism estándar DC Titanium
backdrop-blur-xl bg-[#0D1117]/95 border border-[#21262D] rounded-2xl shadow-2xl

// CTA button principal
bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] font-bold
hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all duration-300
```

---

## 9. COMPONENTES ACTUALES Y SU ESTADO

### Navbar.tsx
- Tiene dropdowns básicos: Programas, Cursos, Comunidad, Conócenos
- **PENDIENTE:** Convertir a mega-paneles glassmorphism (850px ancho, 4 columnas)
- Usa `useState` para toggle de menú móvil
- Logo: `/public/Logo_V8_Premium_Serio.png`

### Hero.tsx
- Actualmente: imagen Gemini de banner + dashboard técnico lateral
- **PENDIENTE:** Viewport 3D con Three.js (lazy-loaded con `next/dynamic`)
- Floating toggle bar de 3 capas (Analítico / Rebar / BIM)
- Tipografía minimalista con copywriting técnico

### globals.css
- Contiene variables CSS de paleta TB Élite
- Importa fuentes globales
- Estilos de scrollbar personalizados

---

## 10. PATRONES DE IMPLEMENTACIÓN APROBADOS

### Mega-menú glassmorphism
```tsx
// Estructura aprobada para mega-paneles
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px]
  backdrop-blur-xl bg-[#0D1117]/95 border border-[#21262D] 
  rounded-2xl p-6 shadow-2xl z-50
  grid grid-cols-3 gap-6">
```

### Three.js en Hero (lazy-load obligatorio)
```tsx
// SIEMPRE lazy-load para no afectar LCP
const BuildingCanvas = dynamic(() => import('./BuildingCanvas3D'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0D1117]" />
});
```

### Floating toggle bar
```tsx
<div className="backdrop-blur-md bg-slate-900/40 border border-slate-700/50
  rounded-xl p-1 flex gap-1">
  {layers.map(layer => (
    <button key={layer.id} onClick={() => setActiveLayer(layer.id)}
      className={activeLayer === layer.id 
        ? 'bg-[#C9A84C] text-[#0A0A0F] px-4 py-2 rounded-lg font-medium text-sm'
        : 'text-[#8B949E] px-4 py-2 rounded-lg text-sm hover:text-white'}>
      {layer.icon} {layer.label}
    </button>
  ))}
</div>
```

---

## 11. RUTAS DE SUB-PÁGINAS PLANIFICADAS

```
/cursos/etabs-avanzado
/cursos/revit-estructural
/cursos/advance-steel
/cursos/python-dynamo
/programas/master-estructural
/programas/especializacion-bim
/programas/diplomado-automatizacion
/software/tb-script-pro
/software/civilcontrol-pro
/software/titanium-hydro
/comunidad/biblioteca
/comunidad/foro
```

---

## 12. REGLAS GENERALES PARA CLAUDE CODE

1. **NUNCA usar `npm install` sin confirmar** — el proyecto tiene dependencias fijas
2. **SIEMPRE verificar que el servidor corra** antes de hacer cambios de configuración
3. **NO tocar `postcss.config.js`** — configuración crítica de Tailwind
4. **NO usar `any` en TypeScript** sin justificación técnica
5. **SIEMPRE aplicar paleta TB Élite** — nunca colores genéricos de Tailwind (blue-500, etc.)
6. **Componentes con estado → `'use client'`** en primera línea obligatorio
7. **Imágenes → usar `next/image`** con `priority` en hero
8. **Three.js → SIEMPRE `next/dynamic` con `ssr: false`**
9. **Al modificar Navbar o Hero** → verificar en mobile (375px) y desktop (1440px)
10. **Glassmorphism** → `backdrop-blur-xl` requiere elemento detrás con color

---

## 13. COMANDOS ÚTILES

```powershell
# Arrancar dev server
npm run dev

# Limpiar caché Turbopack (si hay errores raros)
Remove-Item -Recurse -Force .next; npm run dev

# Build de producción
npm run build

# Verificar tipos TypeScript
npx tsc --noEmit

# Instalar Three.js cuando sea necesario
npm install three @types/three @react-three/fiber @react-three/drei
```

---

## 14. PRÓXIMAS TAREAS PRIORIZADAS

### FASE 1 (Inmediata) — Navbar Mega-Menús
- [ ] Rediseñar Navbar.tsx con 4 mega-paneles glassmorphism
- [ ] Pestaña "Programas & Masters" — 3 rutas con preview dinámico
- [ ] Pestaña "Cursos por Software" — grid de tarjetas con logos
- [ ] Pestaña "Software Lab" — 4 herramientas TB
- [ ] Pestaña "Comunidad" — biblioteca, foro, galería
- [ ] Responsive: menú hamburguesa en mobile

### FASE 2 (Semana 2) — Hero 3D
- [ ] Instalar Three.js + @react-three/fiber + @react-three/drei
- [ ] Crear BuildingCanvas3D.tsx — wireframe edificio SMF isométrico
- [ ] Floating toggle bar con 3 capas (Analítico / Rebar / BIM Final)
- [ ] Fallback imagen si WebGL no disponible
- [ ] Optimizar para LCP < 2.5s

### FASE 3 (Semana 3-4) — Sub-páginas
- [ ] Template de curso individual con accordion de temario
- [ ] Rutas dinámicas `/cursos/[slug]`
- [ ] Visor 3D en páginas de curso
- [ ] Botón descarga de syllabus PDF

---

*AGENTS.md — DC Titanium Builders S.A. | Actualizado: 2026*
*NO modificar este archivo sin autorización del Ing. Darwin Acaro*

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

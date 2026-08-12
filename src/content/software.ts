// Herramientas del Software Lab DC Titanium (mega-menu, /conocenos, buscador).

export interface SoftwareTool {
  id: string;
  nombre: string;
  descripcion: string;
  precio?: number;
  link?: string;
  slug: string;
}

export const softwareLab: SoftwareTool[] = [
  {
    id: "tb-script-pro",
    nombre: "TB Script PRO",
    descripcion: "Automatización de armado de acero de refuerzo en Revit",
    precio: 49.99,
    link: "https://go.hotmart.com/F107029491P",
    slug: "tb-script-pro",
  },
  {
    id: "civilcontrol-pro",
    nombre: "CivilControl Pro",
    descripcion: "Presupuestos y control de obra automatizado",
    slug: "civilcontrol-pro",
  },
  {
    id: "titanium-hydro",
    nombre: "Titanium Hydro",
    descripcion: "Cálculo hidráulico y sanitario para proyectos AEC",
    slug: "titanium-hydro",
  },
  {
    id: "tb-elite-suite",
    nombre: "TB Elite Suite",
    descripcion: "Plugin C# para Revit 2026 — 8 pestañas, 86 comandos",
    slug: "tb-elite-suite",
  },
];

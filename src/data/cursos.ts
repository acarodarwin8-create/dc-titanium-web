export type Curso = {
  id: number;
  titulo: string;
  subtitulo: string;
  software: string[];
  nivel: "Básico" | "Intermedio" | "Avanzado" | "Experto";
  formato: string;
  precio: number;
  original: number;
  horas: number;
  lecciones: number;
  estudiantes: number;
  rating: number;
  cert: string;
};

export const CURSOS: Curso[] = [
  {
    id: 1,
    titulo: "ETABS Avanzado: Pórticos SMF Sísmicos",
    subtitulo: "Diseño completo ACI 318-25 y NEC-SE-DS con Python",
    software: ["ETABS", "Python"],
    nivel: "Avanzado",
    formato: "Asíncrono",
    precio: 149,
    original: 249,
    horas: 32,
    lecciones: 87,
    estudiantes: 312,
    rating: 4.9,
    cert: "CSI Certified",
  },
  {
    id: 2,
    titulo: "Revit + Dynamo: Armado Automático BIM",
    subtitulo: "Scripts TB Script PRO para acero de refuerzo",
    software: ["Revit", "Dynamo", "Python"],
    nivel: "Intermedio",
    formato: "Asíncrono",
    precio: 99,
    original: 179,
    horas: 24,
    lecciones: 64,
    estudiantes: 528,
    rating: 4.8,
    cert: "Autodesk Certified",
  },
  {
    id: 3,
    titulo: "Advance Steel: Conexiones Estructurales",
    subtitulo: "Diseño AISC 360 y AISC 341 con detallado BIM",
    software: ["Advance Steel"],
    nivel: "Experto",
    formato: "En Vivo",
    precio: 199,
    original: 329,
    horas: 40,
    lecciones: 95,
    estudiantes: 187,
    rating: 5.0,
    cert: "Autodesk Certified",
  },
  {
    id: 4,
    titulo: "SAP2000: Análisis Dinámico y Espectral",
    subtitulo: "Espectros de respuesta y análisis tiempo-historia",
    software: ["SAP2000"],
    nivel: "Avanzado",
    formato: "Asíncrono",
    precio: 129,
    original: 219,
    horas: 28,
    lecciones: 72,
    estudiantes: 204,
    rating: 4.8,
    cert: "CSI Certified",
  },
  {
    id: 5,
    titulo: "Dynamo + Python: Automatización Paramétrica",
    subtitulo: "Flujos paramétricos para producción BIM a escala",
    software: ["Dynamo", "Python"],
    nivel: "Intermedio",
    formato: "Asíncrono",
    precio: 89,
    original: 149,
    horas: 20,
    lecciones: 48,
    estudiantes: 266,
    rating: 4.7,
    cert: "Autodesk Certified",
  },
  {
    id: 6,
    titulo: "ETABS + SAFE: Diseño de Cimentaciones",
    subtitulo: "Zapatas, losas y plateas sobre resortes de suelo",
    software: ["ETABS", "SAFE"],
    nivel: "Avanzado",
    formato: "En Vivo",
    precio: 139,
    original: 229,
    horas: 26,
    lecciones: 60,
    estudiantes: 158,
    rating: 4.9,
    cert: "CSI Certified",
  },
];

export const SOFTWARE_CHIPS = ["ETABS", "Revit", "Advance Steel", "Dynamo", "Python", "SAP2000"];

export const NIVEL_COLOR: Record<string, string> = {
  "Básico": "#065F46",
  Intermedio: "#1D4ED8",
  Avanzado: "#92400E",
  Experto: "#7C3AED",
};

export const CURSO_MAS_POPULAR = CURSOS.reduce((a, b) => (b.estudiantes > a.estudiantes ? b : a));

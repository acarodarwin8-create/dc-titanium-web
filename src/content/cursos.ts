// Contenido editable del catalogo de cursos.
// Este archivo es el UNICO lugar donde se editan los cursos.
// Cuando se modifica, la pagina se actualiza automaticamente.

export interface Curso {
  id: string;
  nombre: string;
  software: string[];
  nivel: 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto';
  modalidad: 'Asíncrono' | 'En Vivo';
  certificacion: string;
  horas: number;
  lecciones: number;
  estudiantes: number;
  rating: number;
  precio: number;
  precioOriginal: number;
  descripcion: string;
  tags: string[];
  slug: string;
  color: string;          // Color del badge
  activo: boolean;
  fechaInicio?: string;
  horario?: string;
  dias?: string;
}

export const cursos: Curso[] = [
  {
    id: '1',
    nombre: 'ETABS Avanzado: Pórticos SMF Sísmicos',
    software: ['ETABS', 'Python'],
    nivel: 'Avanzado',
    modalidad: 'Asíncrono',
    certificacion: 'CSI Certified',
    horas: 32,
    lecciones: 87,
    estudiantes: 312,
    rating: 4.9,
    precio: 149,
    precioOriginal: 249,
    descripcion: 'Diseño completo ACI 318-25 y NEC-SE-DS con Python',
    tags: ['SMF Sísmico', 'Muros Cortante', 'Análisis Espectral'],
    slug: 'etabs-avanzado',
    color: '#C9A84C',
    activo: true,
    fechaInicio: '1 Sep 2026',
    horario: '19:00-21:00',
    dias: 'Lun-Mié',
  },
  {
    id: '2',
    nombre: 'Revit + Dynamo: Armado Automático BIM',
    software: ['Revit', 'Dynamo', 'Python'],
    nivel: 'Intermedio',
    modalidad: 'Asíncrono',
    certificacion: 'Autodesk Certified',
    horas: 24,
    lecciones: 64,
    estudiantes: 528,
    rating: 4.8,
    precio: 99,
    precioOriginal: 179,
    descripcion: 'Scripts TB Script PRO para acero de refuerzo',
    tags: ['Modelado 3D', 'TB Script PRO', 'Despiece Auto'],
    slug: 'revit-estructural',
    color: '#3B82F6',
    activo: true,
    fechaInicio: '8 Sep 2026',
    horario: '18:00-20:00',
    dias: 'Mar-Jue',
  },
  {
    id: '3',
    nombre: 'Advance Steel: Conexiones Estructurales',
    software: ['Advance Steel'],
    nivel: 'Experto',
    modalidad: 'En Vivo',
    certificacion: 'Autodesk Certified',
    horas: 40,
    lecciones: 95,
    estudiantes: 187,
    rating: 5.0,
    precio: 199,
    precioOriginal: 329,
    descripcion: 'Diseño AISC 360 y AISC 341 con detallado BIM',
    tags: ['Conexiones', 'AISC 360/341', 'Detallado BIM'],
    slug: 'advance-steel',
    color: '#EF4444',
    activo: true,
    fechaInicio: '6 Sep 2026',
    horario: '09:00-12:00',
    dias: 'Sáb-Dom',
  },
  {
    id: '4',
    nombre: 'SAP2000: Análisis Dinámico y Espectral',
    software: ['SAP2000'],
    nivel: 'Avanzado',
    modalidad: 'Asíncrono',
    certificacion: 'CSI Certified',
    horas: 28,
    lecciones: 72,
    estudiantes: 204,
    rating: 4.8,
    precio: 129,
    precioOriginal: 219,
    descripcion: 'Espectros de respuesta y análisis tiempo-historia',
    tags: ['Análisis Dinámico', 'Espectral', 'No Lineal'],
    slug: 'sap2000',
    color: '#8B5CF6',
    activo: true,
  },
  {
    id: '5',
    nombre: 'Dynamo + Python: Automatización Paramétrica',
    software: ['Dynamo', 'Python'],
    nivel: 'Intermedio',
    modalidad: 'Asíncrono',
    certificacion: 'Autodesk Certified',
    horas: 20,
    lecciones: 48,
    estudiantes: 266,
    rating: 4.7,
    precio: 89,
    precioOriginal: 149,
    descripcion: 'Flujos paramétricos para producción BIM a escala',
    tags: ['Scripts', 'Revit API', 'Metrados Auto'],
    slug: 'python-dynamo',
    color: '#10B981',
    activo: true,
  },
  {
    id: '6',
    nombre: 'ETABS + SAFE: Diseño de Cimentaciones',
    software: ['ETABS', 'SAFE'],
    nivel: 'Avanzado',
    modalidad: 'En Vivo',
    certificacion: 'CSI Certified',
    horas: 26,
    lecciones: 60,
    estudiantes: 158,
    rating: 4.9,
    precio: 139,
    precioOriginal: 229,
    descripcion: 'Zapatas, losas y plateas sobre resortes de suelo',
    tags: ['Zapatas', 'Losas', 'Plateas', 'Resortes'],
    slug: 'etabs-safe',
    color: '#F59E0B',
    activo: true,
  },
];

// Orden de presentacion en la pagina /cursos (puede diferir del orden del catalogo).
export const ORDEN_CURSOS_PAGINA = ['1', '2', '3', '5', '4', '6'];

export const NIVELES = ['Básico', 'Intermedio', 'Avanzado', 'Experto'] as const;

export const SOFTWARE_CHIPS = ['ETABS', 'Revit', 'Advance Steel', 'Dynamo', 'Python', 'SAP2000'];

// Color de referencia por nivel (independiente del color de marca por curso).
export const NIVEL_COLOR: Record<string, string> = {
  "Básico": "#065F46",
  Intermedio: "#1D4ED8",
  Avanzado: "#92400E",
  Experto: "#7C3AED",
};

export const CURSO_MAS_POPULAR = cursos.reduce((a, b) => (b.estudiantes > a.estudiantes ? b : a));

// Contenido editable de los programas de especializacion (rutas /programas).
// Cambia precios, duracion o agrega programas aqui sin tocar componentes.

export interface Programa {
  id: string;
  nombre: string;
  icono: string;
  normativas: string[];
  software: string[];
  duracion: string;
  horas: number;
  modulos: number;
  lecciones: number;
  precio: number;
  descripcion: string;
  slug: string;
  proyecto: string;   // Proyecto real que se desarrolla
}

export const programas: Programa[] = [
  {
    id: '1',
    nombre: 'Máster Ingeniería Estructural Sísmica',
    icono: '🏛️',
    normativas: ['ACI 318-25', 'NEC-SE-DS', 'AISC 360'],
    software: ['ETABS', 'SAP2000', 'SAFE', 'Revit'],
    duracion: '6 meses',
    horas: 240,
    modulos: 8,
    lecciones: 48,
    precio: 399,
    descripcion: 'Domina el diseño sísmico completo desde predimensionamiento hasta despiece automatizado',
    slug: 'master-estructural',
    proyecto: 'Edificio Titanium Quitumbe — 9 pisos SMF',
  },
  {
    id: '2',
    nombre: 'Especialización BIM 360',
    icono: '🔷',
    normativas: ['ISO 19650', 'BIM Level 2'],
    software: ['Revit', 'Navisworks', 'CYPE', 'Speckle'],
    duracion: '4 meses',
    horas: 160,
    modulos: 6,
    lecciones: 36,
    precio: 299,
    descripcion: 'Gestión BIM federada desde modelado hasta coordinación de especialidades',
    slug: 'especializacion-bim',
    proyecto: 'Modelo BIM federado multidisciplinar',
  },
  {
    id: '3',
    nombre: 'Diplomado Automatización AEC',
    icono: '⚡',
    normativas: ['ACI 318-25', 'NEC-SE-DS'],
    software: ['Python', 'Dynamo', 'C#', 'Revit API'],
    duracion: '3 meses',
    horas: 120,
    modulos: 5,
    lecciones: 30,
    precio: 199,
    descripcion: 'Automatiza planos, metrados y despiece con scripts profesionales de producción real',
    slug: 'diplomado-automatizacion',
    proyecto: 'Suite de scripts TB para producción',
  },
];

export const PROGRAMAS_STATS = [
  { valor: "312+", label: "Ingenieros" },
  { valor: "95%", label: "Empleabilidad" },
  { valor: "ACI 318-25", label: "Normativa" },
  { valor: "100%", label: "Proyectos Reales" },
];

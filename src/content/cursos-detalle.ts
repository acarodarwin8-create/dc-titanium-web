// Contenido extendido para la pagina individual de cada curso (/cursos/[slug]).
// Los datos cuantitativos (precio, horas, lecciones, estudiantes, rating,
// certificacion, software) se leen de src/content/cursos.ts — la unica fuente
// de verdad para esos campos — para que el listado y la pagina de detalle
// nunca queden desincronizados. Aqui solo vive el contenido enriquecido que
// no existe en cursos.ts: subtitulo, temario, instructor, testimonios, FAQ.

import { cursos } from "./cursos";
import { IMAGENES } from "@/lib/imagenes";

export interface LeccionCurso {
  id: number;
  titulo: string;
  duracion: string;
  tipo: "video" | "practica" | "recurso" | "quiz";
  preview: boolean;
}

export interface ModuloCurso {
  id: number;
  titulo: string;
  duracion: string;
  lecciones: LeccionCurso[];
}

export interface InstructorCurso {
  nombre: string;
  titulo: string;
  empresa: string;
  bio: string;
  proyectos: string[];
  imagen: string;
}

export interface TestimonioCurso {
  nombre: string;
  cargo: string;
  empresa: string;
  texto: string;
  rating: number;
  fecha: string;
}

export interface PreguntaCurso {
  pregunta: string;
  respuesta: string;
}

export interface CursoDetalle {
  slug: string;
  subtitulo: string;
  ultimaActualizacion: string;
  idioma: string;
  totalReseñas: number;
  normativas: string[];
  loAprenderas: string[];
  requisitos: string[];
  paraQuien: string[];
  instructor: InstructorCurso;
  modulos: ModuloCurso[];
  testimonios: TestimonioCurso[];
  preguntasFrecuentes: PreguntaCurso[];
  hotmartUrl: string;
}

const DARWIN: InstructorCurso = {
  nombre: "Ing. Darwin Acaro",
  titulo: "Ingeniero Civil · Fundador DC Titanium Builders",
  empresa: "DC Titanium Builders S.A.",
  bio: "Lidera el diseño estructural del Edificio Titanium Quitumbe (9 pisos + subsuelo, sistema SMF, zona sísmica VI), con más de 5,956 elementos de vigas analizados bajo ACI 318-25 y NEC-SE-DS. Desarrolla scripts de automatización en Python y Dynamo para ETABS, SAFE y Revit usados en producción por su propio equipo de cálculo.",
  proyectos: [
    "Edificio Titanium Quitumbe — 9 pisos + subsuelo, SMF, zona sísmica VI",
    "TB Script PRO — automatización de despiece de acero en Revit (Dynamo/CPython3)",
    "CivilControl Pro — metrados y presupuestos de obra (18 hojas)",
  ],
  imagen: IMAGENES.equipo.darwin,
};

export const CURSOS_DETALLE: CursoDetalle[] = [
  {
    slug: "etabs-avanzado",
    subtitulo: "Diseño completo de edificios sismorresistentes bajo ACI 318-25 y NEC-SE-DS con automatización Python",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 84,
    normativas: ["ACI 318-25", "NEC-SE-DS", "ASCE 7-22"],
    loAprenderas: [
      "Modelar pórticos SMF de 5-15 pisos con cargas sísmicas reales Zona VI Ecuador",
      "Verificar derivas de piso según NEC-SE-DS (límite 0.02)",
      "Diseñar vigas y columnas bajo ACI 318-25 con chequeo biaxial",
      "Automatizar extracción de resultados con Python y DatabaseTables API",
      "Generar reportes PDF profesionales con python-docx",
      "Interpretar diagramas de interacción P-M para columnas",
      "Configurar espectro de diseño NEC para suelo tipo D Zona VI",
      "Exportar planos DXF con anotaciones ACI desde Python",
    ],
    requisitos: [
      "Conocimientos básicos de resistencia de materiales",
      "ETABS instalado (versión 2019 o superior)",
      "Python 3.8+ instalado (se explica desde cero en el curso)",
      "Conocimiento básico de Excel",
    ],
    paraQuien: [
      "Ingenieros civiles y estructurales que trabajan en Ecuador o Latinoamérica",
      "Profesionales que quieren dominar el diseño sísmico con software profesional",
      "Consultores que necesitan automatizar sus reportes de cálculo",
      "Estudiantes de posgrado en ingeniería estructural",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Fundamentos del Diseño Sísmico NEC",
        duracion: "3h 20min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Normativa NEC-SE-DS: Zonas sísmicas Ecuador", duracion: "25min", tipo: "video", preview: true },
          { id: 3, titulo: "Espectro de diseño: suelo tipo D Zona VI", duracion: "30min", tipo: "video", preview: false },
          { id: 4, titulo: "Combinaciones de carga ASCE 7-22", duracion: "20min", tipo: "video", preview: false },
          { id: 5, titulo: "Práctica: Configurar espectro en ETABS", duracion: "45min", tipo: "practica", preview: false },
          { id: 6, titulo: "Quiz Módulo 1", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Modelación del Pórtico SMF en ETABS",
        duracion: "6h 45min",
        lecciones: [
          { id: 7, titulo: "Geometría y grillas del edificio", duracion: "35min", tipo: "video", preview: false },
          { id: 8, titulo: "Definición de materiales ACI 318-25", duracion: "25min", tipo: "video", preview: false },
          { id: 9, titulo: "Secciones de vigas y columnas", duracion: "40min", tipo: "video", preview: false },
          { id: 10, titulo: "Cargas gravitacionales y sísmicas", duracion: "50min", tipo: "video", preview: false },
          { id: 11, titulo: "Análisis modal con 15 modos Ritz", duracion: "30min", tipo: "video", preview: false },
          { id: 12, titulo: "Práctica: Modelo completo Edificio 9 pisos", duracion: "120min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Verificación de Derivas y Resistencia",
        duracion: "5h 10min",
        lecciones: [
          { id: 13, titulo: "Derivas de piso: lectura e interpretación", duracion: "35min", tipo: "video", preview: false },
          { id: 14, titulo: "Chequeo drift máximo NEC (0.02)", duracion: "25min", tipo: "video", preview: false },
          { id: 15, titulo: "Diseño de vigas: corte y momento ACI", duracion: "45min", tipo: "video", preview: false },
          { id: 16, titulo: "Diseño de columnas: interacción biaxial P-M", duracion: "60min", tipo: "video", preview: false },
          { id: 17, titulo: "Práctica: Verificación completa edificio", duracion: "90min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Automatización Python + ETABS API",
        duracion: "8h 30min",
        lecciones: [
          { id: 18, titulo: "Conexión Python-ETABS con comtypes", duracion: "30min", tipo: "video", preview: false },
          { id: 19, titulo: "Extracción de fuerzas con DatabaseTables", duracion: "45min", tipo: "video", preview: false },
          { id: 20, titulo: "Procesamiento de 5,956 registros de vigas", duracion: "60min", tipo: "practica", preview: false },
          { id: 21, titulo: "Generación automática de reportes PDF", duracion: "75min", tipo: "video", preview: false },
          { id: 22, titulo: "Exportación DXF con ezdxf", duracion: "45min", tipo: "video", preview: false },
          { id: 23, titulo: "Proyecto final: Pipeline completo automatizado", duracion: "180min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 5,
        titulo: "Entregables y Documentación Profesional",
        duracion: "4h 15min",
        lecciones: [
          { id: 24, titulo: "Memoria de cálculo estructural ACI", duracion: "45min", tipo: "video", preview: false },
          { id: 25, titulo: "Planos estructurales en AutoCAD", duracion: "60min", tipo: "video", preview: false },
          { id: 26, titulo: "Reporte ejecutivo para cliente", duracion: "30min", tipo: "video", preview: false },
          { id: 27, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 28, titulo: "Examen final de certificación", duracion: "45min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Carlos M.", cargo: "Ingeniero Estructural", empresa: "Constructora Andina", texto: "El curso me cambió la forma de trabajar. Lo que antes me tomaba 3 días ahora lo hago en 2 horas con Python.", rating: 5, fecha: "hace 2 meses" },
      { nombre: "Ana R.", cargo: "Consultora BIM", empresa: "Independiente", texto: "La mejor explicación de NEC-SE-DS que he visto. Los ejemplos con el edificio real hacen toda la diferencia.", rating: 5, fecha: "hace 3 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿Necesito saber Python para tomar este curso?", respuesta: "No. El módulo 4 empieza desde cero con Python. Solo necesitas tener instalado Python 3.8+." },
      { pregunta: "¿El curso incluye el software ETABS?", respuesta: "No incluye licencia de ETABS. Puedes usar la versión de prueba de CSI o una licencia institucional." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida. Incluye todas las actualizaciones futuras sin costo adicional." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/etabs-avanzado-dc-titanium",
  },
  {
    slug: "revit-estructural",
    subtitulo: "Modelado estructural en Revit y automatización de armado de acero con Dynamo y Python",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 143,
    normativas: ["ACI 318-25", "NEC-SE-DS"],
    loAprenderas: [
      "Modelar estructuras de hormigón armado en Revit con familias paramétricas",
      "Vincular el modelo analítico de ETABS con Revit para coordinación BIM",
      "Automatizar el despiece de acero de refuerzo con Dynamo",
      "Programar scripts Python dentro de nodos Dynamo (CPython3)",
      "Generar planillas de armado y metrados automáticos",
      "Configurar TB Script PRO para despiece masivo de vigas y columnas",
      "Exportar tablas de cuantificación de acero a Excel",
      "Detectar interferencias entre acero y encofrado con Navisworks",
    ],
    requisitos: [
      "Revit 2022 o superior instalado",
      "Conocimientos básicos de modelado BIM",
      "No se requiere experiencia previa en Dynamo ni Python",
      "Nociones básicas de detallado de acero de refuerzo",
    ],
    paraQuien: [
      "Modeladores BIM que quieren dar el salto a la automatización",
      "Ingenieros estructurales que revisan planos de armado",
      "Dibujantes técnicos que producen planillas de acero manualmente",
      "Equipos de oficina técnica que buscan reducir horas de despiece",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Modelado Estructural en Revit",
        duracion: "4h 10min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Familias paramétricas de vigas y columnas", duracion: "35min", tipo: "video", preview: true },
          { id: 3, titulo: "Vínculo con modelo analítico ETABS", duracion: "40min", tipo: "video", preview: false },
          { id: 4, titulo: "Práctica: Modelo estructural completo", duracion: "90min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Fundamentos de Dynamo",
        duracion: "5h 30min",
        lecciones: [
          { id: 5, titulo: "Interfaz y nodos básicos de Dynamo", duracion: "30min", tipo: "video", preview: false },
          { id: 6, titulo: "Listas y estructuras de datos", duracion: "40min", tipo: "video", preview: false },
          { id: 7, titulo: "Nodos CPython3 dentro de Dynamo", duracion: "45min", tipo: "video", preview: false },
          { id: 8, titulo: "Práctica: Script de conteo de elementos", duracion: "60min", tipo: "practica", preview: false },
          { id: 9, titulo: "Quiz Módulo 2", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Automatización de Despiece con TB Script PRO",
        duracion: "6h 20min",
        lecciones: [
          { id: 10, titulo: "Instalación y configuración de TB Script PRO", duracion: "20min", tipo: "video", preview: false },
          { id: 11, titulo: "Despiece automático de vigas", duracion: "50min", tipo: "video", preview: false },
          { id: 12, titulo: "Despiece automático de columnas", duracion: "50min", tipo: "video", preview: false },
          { id: 13, titulo: "Generación de planillas de armado", duracion: "45min", tipo: "video", preview: false },
          { id: 14, titulo: "Proyecto final: Despiece de edificio completo", duracion: "150min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Metrados y Coordinación BIM",
        duracion: "3h 45min",
        lecciones: [
          { id: 15, titulo: "Exportación de cuantificación de acero a Excel", duracion: "30min", tipo: "video", preview: false },
          { id: 16, titulo: "Detección de interferencias en Navisworks", duracion: "40min", tipo: "video", preview: false },
          { id: 17, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 18, titulo: "Examen final de certificación", duracion: "40min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Pablo T.", cargo: "Modelador BIM", empresa: "Grupo Constructor Andes", texto: "TB Script PRO nos ahorra días enteros de despiece manual. El curso explica cada script paso a paso.", rating: 5, fecha: "hace 1 mes" },
      { nombre: "María F.", cargo: "Dibujante Técnico", empresa: "Independiente", texto: "Nunca había tocado Dynamo y ahora automatizo mis propias planillas de armado. Excelente curso.", rating: 5, fecha: "hace 4 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿Necesito comprar TB Script PRO aparte?", respuesta: "El curso incluye una licencia de TB Script PRO durante la duración del curso para practicar con las lecciones." },
      { pregunta: "¿Funciona con versiones anteriores de Revit?", respuesta: "El curso está grabado en Revit 2026, pero los conceptos y scripts funcionan desde Revit 2022 en adelante." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida, incluyendo actualizaciones futuras del curso." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/revit-estructural-dc-titanium",
  },
  {
    slug: "advance-steel",
    subtitulo: "Diseño y detallado de conexiones metálicas bajo AISC 360 y AISC 341 con modelado BIM",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 61,
    normativas: ["AISC 360", "AISC 341"],
    loAprenderas: [
      "Modelar estructuras metálicas completas en Advance Steel",
      "Diseñar conexiones apernadas y soldadas bajo AISC 360",
      "Verificar conexiones sismorresistentes bajo AISC 341",
      "Generar planos de taller y montaje automáticos",
      "Configurar listas de materiales (BOM) para fabricación",
      "Detallar placas base y anclajes a cimentación",
      "Exportar modelos a formatos compatibles con CNC",
      "Coordinar el modelo de acero con estructuras de hormigón",
    ],
    requisitos: [
      "Advance Steel instalado (versión 2022 o superior)",
      "Conocimientos básicos de diseño en acero estructural",
      "Nociones de AutoCAD (Advance Steel se ejecuta sobre AutoCAD)",
      "Experiencia previa en modelado 3D es deseable pero no obligatoria",
    ],
    paraQuien: [
      "Ingenieros estructurales especializados en acero",
      "Detallistas y modeladores de estructuras metálicas",
      "Fabricantes de estructuras que preparan planos de taller",
      "Consultores que diseñan conexiones sismorresistentes",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Modelado de Estructuras Metálicas",
        duracion: "7h 00min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Interfaz y flujo de trabajo de Advance Steel", duracion: "30min", tipo: "video", preview: true },
          { id: 3, titulo: "Modelado de pórticos y arriostramientos", duracion: "60min", tipo: "video", preview: false },
          { id: 4, titulo: "Práctica: Nave industrial completa", duracion: "120min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Diseño de Conexiones AISC 360",
        duracion: "9h 15min",
        lecciones: [
          { id: 5, titulo: "Conexiones apernadas a corte", duracion: "45min", tipo: "video", preview: false },
          { id: 6, titulo: "Conexiones a momento soldadas", duracion: "60min", tipo: "video", preview: false },
          { id: 7, titulo: "Placas base y anclajes a cimentación", duracion: "45min", tipo: "video", preview: false },
          { id: 8, titulo: "Práctica: Diseño de conexiones típicas", duracion: "150min", tipo: "practica", preview: false },
          { id: 9, titulo: "Quiz Módulo 2", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Conexiones Sismorresistentes AISC 341",
        duracion: "8h 30min",
        lecciones: [
          { id: 10, titulo: "Requisitos sísmicos para pórticos especiales (SMF)", duracion: "50min", tipo: "video", preview: false },
          { id: 11, titulo: "Conexiones precalificadas RBS", duracion: "55min", tipo: "video", preview: false },
          { id: 12, titulo: "Verificación de zona panel", duracion: "40min", tipo: "video", preview: false },
          { id: 13, titulo: "Proyecto final: Conexión sísmica certificada", duracion: "180min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Planos de Taller y Fabricación",
        duracion: "5h 45min",
        lecciones: [
          { id: 14, titulo: "Generación automática de planos de taller", duracion: "50min", tipo: "video", preview: false },
          { id: 15, titulo: "Listas de materiales (BOM) para fabricación", duracion: "35min", tipo: "video", preview: false },
          { id: 16, titulo: "Exportación a formatos CNC", duracion: "40min", tipo: "video", preview: false },
          { id: 17, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 18, titulo: "Examen final de certificación", duracion: "45min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Jorge S.", cargo: "Ingeniero de Acero", empresa: "Metalúrgica del Pacífico", texto: "El nivel de detalle en las conexiones sísmicas AISC 341 es de otro nivel. Se nota que el instructor las diseña en la vida real.", rating: 5, fecha: "hace 2 meses" },
      { nombre: "Verónica L.", cargo: "Detallista Estructural", empresa: "Independiente", texto: "Pasé de tardar días en un plano de taller a horas. Curso exigente pero vale cada minuto.", rating: 5, fecha: "hace 5 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿Se puede tomar sin experiencia previa en Advance Steel?", respuesta: "Sí, el módulo 1 cubre la interfaz y el flujo de trabajo desde cero." },
      { pregunta: "¿El curso cubre AutoCAD también?", respuesta: "Se asumen conocimientos básicos de AutoCAD, ya que Advance Steel se ejecuta sobre esa plataforma." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida, incluyendo actualizaciones futuras del curso." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/advance-steel-dc-titanium",
  },
  {
    slug: "sap2000",
    subtitulo: "Análisis dinámico, espectral y tiempo-historia de estructuras bajo ASCE 7-22 y NEC-SE-DS",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 57,
    normativas: ["NEC-SE-DS", "ASCE 7-22"],
    loAprenderas: [
      "Modelar estructuras especiales (puentes, torres, naves) en SAP2000",
      "Configurar análisis de espectro de respuesta multimodal",
      "Ejecutar análisis tiempo-historia no lineal",
      "Interpretar resultados de análisis dinámico para diseño",
      "Aplicar amortiguamiento y disipadores de energía",
      "Verificar estabilidad y efectos P-Delta",
      "Configurar combinaciones de carga dinámicas",
      "Exportar reportes técnicos de análisis dinámico",
    ],
    requisitos: [
      "SAP2000 instalado (versión 22 o superior)",
      "Conocimientos de análisis estructural estático",
      "Nociones básicas de dinámica de estructuras",
      "Excel para postprocesamiento de resultados",
    ],
    paraQuien: [
      "Ingenieros estructurales que diseñan estructuras especiales",
      "Consultores de proyectos con requisitos de análisis dinámico avanzado",
      "Profesionales que preparan estudios de vulnerabilidad sísmica",
      "Estudiantes de posgrado en dinámica estructural",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Fundamentos de Análisis Dinámico",
        duracion: "4h 00min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Grados de libertad dinámicos", duracion: "30min", tipo: "video", preview: true },
          { id: 3, titulo: "Modos de vibración y periodos naturales", duracion: "35min", tipo: "video", preview: false },
          { id: 4, titulo: "Práctica: Modelo de torre en SAP2000", duracion: "90min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Análisis de Espectro de Respuesta",
        duracion: "5h 45min",
        lecciones: [
          { id: 5, titulo: "Configuración del espectro NEC-SE-DS", duracion: "35min", tipo: "video", preview: false },
          { id: 6, titulo: "Combinación modal CQC y SRSS", duracion: "30min", tipo: "video", preview: false },
          { id: 7, titulo: "Efectos P-Delta y estabilidad", duracion: "40min", tipo: "video", preview: false },
          { id: 8, titulo: "Práctica: Espectro multimodal completo", duracion: "120min", tipo: "practica", preview: false },
          { id: 9, titulo: "Quiz Módulo 2", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Análisis Tiempo-Historia No Lineal",
        duracion: "6h 30min",
        lecciones: [
          { id: 10, titulo: "Registros sísmicos y escalamiento", duracion: "40min", tipo: "video", preview: false },
          { id: 11, titulo: "No linealidad de materiales y disipadores", duracion: "50min", tipo: "video", preview: false },
          { id: 12, titulo: "Amortiguamiento de Rayleigh", duracion: "30min", tipo: "video", preview: false },
          { id: 13, titulo: "Proyecto final: Análisis tiempo-historia completo", duracion: "180min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Reportes y Entregables Técnicos",
        duracion: "3h 20min",
        lecciones: [
          { id: 14, titulo: "Interpretación de resultados para diseño", duracion: "35min", tipo: "video", preview: false },
          { id: 15, titulo: "Reporte técnico de análisis dinámico", duracion: "40min", tipo: "video", preview: false },
          { id: 16, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 17, titulo: "Examen final de certificación", duracion: "40min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Ricardo P.", cargo: "Ingeniero Estructural", empresa: "Estudio Sísmico EC", texto: "El módulo de tiempo-historia no lineal es justo lo que necesitaba para mis proyectos de puentes. Muy bien explicado.", rating: 5, fecha: "hace 3 meses" },
      { nombre: "Daniela V.", cargo: "Consultora Estructural", empresa: "Independiente", texto: "Por fin entendí la diferencia entre CQC y SRSS de forma práctica, no solo teórica.", rating: 4, fecha: "hace 6 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿El curso requiere conocimientos avanzados de dinámica estructural?", respuesta: "Se recomienda tener nociones básicas de dinámica; el módulo 1 repasa los fundamentos necesarios." },
      { pregunta: "¿Incluye registros sísmicos reales?", respuesta: "Sí, se trabaja con registros sísmicos escalados según la normativa vigente." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida, incluyendo actualizaciones futuras del curso." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/sap2000-dc-titanium",
  },
  {
    slug: "python-dynamo",
    subtitulo: "Flujos de automatización paramétrica en Revit con Dynamo y Python para producción BIM a escala",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 98,
    normativas: [],
    loAprenderas: [
      "Programar scripts Python para automatizar tareas repetitivas en Revit",
      "Diseñar flujos paramétricos con Dynamo desde cero",
      "Conectar Dynamo con la Revit API para manipular elementos",
      "Automatizar metrados y cuantificación de materiales",
      "Crear familias paramétricas controladas por datos externos (Excel)",
      "Generar reportes automáticos de producción BIM",
      "Depurar y optimizar scripts para proyectos grandes",
      "Empaquetar scripts reutilizables como paquetes de Dynamo",
    ],
    requisitos: [
      "Revit instalado (versión 2021 o superior)",
      "No se requiere experiencia previa en programación",
      "Conocimientos básicos de modelado BIM",
      "Excel para manejo de datos externos",
    ],
    paraQuien: [
      "Modeladores BIM que buscan automatizar tareas repetitivas",
      "Ingenieros y arquitectos que quieren aprender a programar aplicado a BIM",
      "Equipos de producción que manejan proyectos de gran escala",
      "Profesionales que ya tomaron el curso de Revit y quieren profundizar en automatización",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Fundamentos de Programación para BIM",
        duracion: "3h 30min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Lógica de programación con nodos Dynamo", duracion: "30min", tipo: "video", preview: true },
          { id: 3, titulo: "Sintaxis básica de Python aplicada a BIM", duracion: "40min", tipo: "video", preview: false },
          { id: 4, titulo: "Práctica: Primer script de automatización", duracion: "60min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Dynamo + Revit API",
        duracion: "6h 15min",
        lecciones: [
          { id: 5, titulo: "Introducción a la Revit API", duracion: "40min", tipo: "video", preview: false },
          { id: 6, titulo: "Consultar y filtrar elementos del modelo", duracion: "45min", tipo: "video", preview: false },
          { id: 7, titulo: "Modificar parámetros en lote", duracion: "50min", tipo: "video", preview: false },
          { id: 8, titulo: "Práctica: Actualización masiva de parámetros", duracion: "120min", tipo: "practica", preview: false },
          { id: 9, titulo: "Quiz Módulo 2", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Automatización de Metrados y Reportes",
        duracion: "5h 20min",
        lecciones: [
          { id: 10, titulo: "Cuantificación automática de materiales", duracion: "45min", tipo: "video", preview: false },
          { id: 11, titulo: "Vínculo con Excel para datos externos", duracion: "40min", tipo: "video", preview: false },
          { id: 12, titulo: "Familias paramétricas controladas por datos", duracion: "50min", tipo: "video", preview: false },
          { id: 13, titulo: "Proyecto final: Pipeline de metrados automatizado", duracion: "150min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Buenas Prácticas y Empaquetado",
        duracion: "2h 50min",
        lecciones: [
          { id: 14, titulo: "Depuración y manejo de errores", duracion: "35min", tipo: "video", preview: false },
          { id: 15, titulo: "Empaquetar scripts como paquetes reutilizables", duracion: "40min", tipo: "video", preview: false },
          { id: 16, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 17, titulo: "Examen final de certificación", duracion: "40min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Esteban G.", cargo: "Coordinador BIM", empresa: "Oficina Técnica Andina", texto: "Nunca había programado y ahora automatizo procesos que le tomaban horas a mi equipo. Curso muy bien estructurado.", rating: 5, fecha: "hace 1 mes" },
      { nombre: "Lucía N.", cargo: "Arquitecta BIM", empresa: "Independiente", texto: "La explicación de la Revit API es clarísima, algo que no encontré en ningún otro curso en español.", rating: 5, fecha: "hace 4 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿Es necesario saber programar antes de este curso?", respuesta: "No, el módulo 1 enseña la lógica de programación desde cero, tanto en Dynamo como en Python." },
      { pregunta: "¿Es lo mismo que el curso de Revit + Dynamo?", respuesta: "No. Ese curso se enfoca en despiece de acero; este profundiza en automatización general con Python y la Revit API." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida, incluyendo actualizaciones futuras del curso." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/python-dynamo-dc-titanium",
  },
  {
    slug: "etabs-safe",
    subtitulo: "Diseño de cimentaciones —zapatas, losas y plateas sobre resortes de suelo— con ETABS y SAFE",
    ultimaActualizacion: "Agosto 2026",
    idioma: "Español",
    totalReseñas: 52,
    normativas: ["ACI 318-25", "NEC-SE-DS"],
    loAprenderas: [
      "Exportar reacciones de ETABS a SAFE para diseño de cimentación",
      "Diseñar zapatas aisladas y combinadas bajo ACI 318-25",
      "Modelar plateas de cimentación sobre resortes de suelo (subgrade)",
      "Calibrar el coeficiente de balasto a partir de estudios de suelo",
      "Verificar punzonamiento en losas y plateas",
      "Diseñar vigas de cimentación y contrapisos",
      "Interpretar asentamientos diferenciales admisibles NEC-SE-DS",
      "Generar planos de cimentación con despiece de acero",
    ],
    requisitos: [
      "ETABS y SAFE instalados (versión 2019 o superior)",
      "Modelo estructural básico de un edificio (se entrega uno de práctica)",
      "Conocimientos de diseño en hormigón armado ACI 318-25",
      "Nociones básicas de mecánica de suelos",
    ],
    paraQuien: [
      "Ingenieros estructurales que diseñan cimentaciones",
      "Consultores geotécnicos que colaboran con equipos estructurales",
      "Profesionales que quieren dominar el flujo ETABS → SAFE",
      "Estudiantes de posgrado en geotecnia y estructuras",
    ],
    instructor: DARWIN,
    modulos: [
      {
        id: 1,
        titulo: "Interacción Suelo-Estructura",
        duracion: "3h 45min",
        lecciones: [
          { id: 1, titulo: "Introducción al curso y recursos", duracion: "8min", tipo: "video", preview: true },
          { id: 2, titulo: "Coeficiente de balasto y resortes de suelo", duracion: "35min", tipo: "video", preview: true },
          { id: 3, titulo: "Exportación de reacciones ETABS → SAFE", duracion: "30min", tipo: "video", preview: false },
          { id: 4, titulo: "Práctica: Vínculo de modelos ETABS-SAFE", duracion: "90min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 2,
        titulo: "Diseño de Zapatas",
        duracion: "5h 20min",
        lecciones: [
          { id: 5, titulo: "Zapatas aisladas: dimensionamiento", duracion: "40min", tipo: "video", preview: false },
          { id: 6, titulo: "Zapatas combinadas y excéntricas", duracion: "45min", tipo: "video", preview: false },
          { id: 7, titulo: "Verificación de punzonamiento", duracion: "35min", tipo: "video", preview: false },
          { id: 8, titulo: "Práctica: Diseño completo de zapatas", duracion: "120min", tipo: "practica", preview: false },
          { id: 9, titulo: "Quiz Módulo 2", duracion: "15min", tipo: "quiz", preview: false },
        ],
      },
      {
        id: 3,
        titulo: "Plateas de Cimentación",
        duracion: "6h 00min",
        lecciones: [
          { id: 10, titulo: "Modelado de plateas sobre resortes de suelo", duracion: "45min", tipo: "video", preview: false },
          { id: 11, titulo: "Diseño por franjas de diseño (design strips)", duracion: "50min", tipo: "video", preview: false },
          { id: 12, titulo: "Verificación de asentamientos diferenciales", duracion: "35min", tipo: "video", preview: false },
          { id: 13, titulo: "Proyecto final: Platea de edificio de 9 pisos", duracion: "150min", tipo: "practica", preview: false },
        ],
      },
      {
        id: 4,
        titulo: "Entregables de Cimentación",
        duracion: "3h 10min",
        lecciones: [
          { id: 14, titulo: "Vigas de cimentación y contrapisos", duracion: "35min", tipo: "video", preview: false },
          { id: 15, titulo: "Planos de cimentación con despiece", duracion: "45min", tipo: "video", preview: false },
          { id: 16, titulo: "Recursos descargables del curso", duracion: "15min", tipo: "recurso", preview: false },
          { id: 17, titulo: "Examen final de certificación", duracion: "40min", tipo: "quiz", preview: false },
        ],
      },
    ],
    testimonios: [
      { nombre: "Fernando A.", cargo: "Ingeniero Geotécnico-Estructural", empresa: "Suelos & Cimientos EC", texto: "El flujo ETABS-SAFE quedó clarísimo. Antes lo hacía a mano y perdía mucho tiempo recalculando.", rating: 5, fecha: "hace 2 meses" },
      { nombre: "Gabriela O.", cargo: "Ingeniera Estructural", empresa: "Constructora del Valle", texto: "El módulo de plateas sobre resortes de suelo con el edificio Quitumbe como ejemplo es oro puro.", rating: 5, fecha: "hace 4 meses" },
    ],
    preguntasFrecuentes: [
      { pregunta: "¿Necesito tener el estudio de suelos para el curso?", respuesta: "No, se entrega un estudio de suelos de ejemplo para practicar. El curso enseña cómo calibrar el coeficiente de balasto con datos reales." },
      { pregunta: "¿El curso incluye el modelo de ETABS de práctica?", respuesta: "Sí, se entrega el modelo estructural del edificio de práctica para vincularlo a SAFE." },
      { pregunta: "¿Cuánto tiempo tengo acceso al curso?", respuesta: "Acceso de por vida, incluyendo actualizaciones futuras del curso." },
      { pregunta: "¿Puedo obtener factura?", respuesta: "Sí. DC Titanium Builders S.A. emite factura electrónica válida en Ecuador." },
    ],
    hotmartUrl: "https://hotmart.com/product/etabs-safe-dc-titanium",
  },
];

export function getCursoDetalle(slug: string) {
  const detalle = CURSOS_DETALLE.find((c) => c.slug === slug);
  const base = cursos.find((c) => c.slug === slug);
  if (!detalle || !base) return null;
  return { base, detalle };
}

export function getSlugsCursos() {
  return CURSOS_DETALLE.map((c) => c.slug);
}

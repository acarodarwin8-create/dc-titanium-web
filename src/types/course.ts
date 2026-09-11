// src/types/course.ts
// ============================================================
// TIPOS DE DATOS — Cursos DC Titanium
// Define la forma exacta de un curso en toda la aplicación.
// Ningún componente inventa sus propias interfaces de curso.
// ============================================================

// Niveles de dificultad disponibles en la plataforma
export type CourseLevel = 'Básico' | 'Intermedio' | 'Avanzado' | 'Experto'

// Modalidad de dictado del curso
export type CourseModality = 'Asíncrono' | 'En Vivo'

// Categorías de software — para el filtro de la sección cursos
export type CourseSoftware =
  | 'ETABS'
  | 'Revit'
  | 'Advance Steel'
  | 'SAP2000'
  | 'Dynamo'
  | 'SAFE'
  | 'Python'

// ── INTERFAZ PRINCIPAL ────────────────────────────────────────
// Representa un curso completo tal como aparece en la web.
// Cada campo tiene un comentario explicando su uso.
export interface Course {
  // Identificador único — usado como key en listas React
  id: string

  // Título completo del curso
  title: string

  // Descripción corta para la tarjeta
  description: string

  // Software principal que se enseña
  software: CourseSoftware

  // Etiqueta adicional (ej: '+ Python', '+ Dynamo')
  softwareTag?: string

  // Nivel de dificultad
  level: CourseLevel

  // Modalidad: en vivo o grabado
  modality: CourseModality

  // Precio actual en USD
  price: number

  // Precio original antes del descuento (para mostrar tachado)
  originalPrice: number

  // Porcentaje de descuento calculado automáticamente
  discountPercent: number

  // Calificación promedio (ej: 4.9)
  rating: number

  // Número de lecciones
  lessons: number

  // Duración total en horas
  hours: number

  // Número de estudiantes inscritos
  students: number

  // Certificación oficial (ej: 'Autodesk Certified', 'CSI Certified')
  certification: string

  // Ruta a la imagen de portada del curso
  image?: string

  // Si es true, aparece badge "NUEVO" en la tarjeta
  isNew?: boolean

  // Si es true, aparece badge "DESTACADO"
  isFeatured?: boolean
}

// ── TIPO PARA FILTROS ─────────────────────────────────────────
// Representa cada opción del filtro de cursos en la UI
export interface CourseFilter {
  label: string        // Texto visible en el botón
  value: string        // Valor para comparar con Course.level
}

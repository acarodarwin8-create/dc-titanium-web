// Reseñas de estudiantes mostradas en la seccion "Opiniones" de la homepage.

export interface Testimonio {
  nombre: string;
  fecha: string;
  texto: string;
}

export const testimonios: Testimonio[] = [
  { nombre: "Carlos M.", fecha: "hace 2 meses", texto: "El curso de ETABS me cambió la vida profesional. Los scripts de Python me ahorran 3 horas por proyecto." },
  { nombre: "Ana R.", fecha: "hace 3 meses", texto: "Nunca había visto explicar ACI 318-25 de forma tan práctica. Apliqué lo aprendido al día siguiente en obra." },
  { nombre: "Pedro L.", fecha: "hace 1 mes", texto: "DC Titanium tiene el mejor contenido de ingeniería estructural en Ecuador. Vale cada centavo." },
];

export const resumenResenas = {
  calificacion: "Excelente",
  totalResenas: 87,
  fuente: "Google",
};

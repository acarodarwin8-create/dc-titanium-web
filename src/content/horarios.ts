// Horarios de cursos en vivo. Se derivan de los campos fechaInicio/horario/dias
// de src/content/cursos.ts para que un solo lugar (cursos.ts) siga siendo la
// fuente de verdad: basta con editar un curso para que su horario aparezca aqui.

import { cursos } from "./cursos";

export interface HorarioCurso {
  cursoId: string;
  nombre: string;
  dias: string;
  horario: string;
  duracion: string;
  inicio: string;
}

export const horarios: HorarioCurso[] = cursos
  .filter((c) => c.activo && c.horario && c.dias && c.fechaInicio)
  .map((c) => ({
    cursoId: c.id,
    nombre: c.nombre,
    dias: c.dias as string,
    horario: c.horario as string,
    duracion: c.horas + "h",
    inicio: c.fechaInicio as string,
  }));

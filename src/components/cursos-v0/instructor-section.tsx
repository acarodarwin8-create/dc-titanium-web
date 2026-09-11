import type { InstructorCurso } from "@/content/cursos-detalle";
import { cursos } from "@/content/cursos";
import ImagenPlaceholder from "@/components/ui/ImagenPlaceholder";
import { IconStar, IconMessage, IconUsers, IconBadgeCheck } from "./icons";

export function InstructorSection({
  instructor,
  rating,
  totalReseñas,
}: {
  instructor: InstructorCurso;
  rating: number;
  totalReseñas: number;
}) {
  const totalEstudiantes = cursos.reduce((sum, c) => sum + c.estudiantes, 0);
  const totalCursos = cursos.filter((c) => c.activo).length;

  const stats = [
    { Icon: IconStar, label: "Calificación", value: rating },
    { Icon: IconMessage, label: "Reseñas", value: totalReseñas.toLocaleString("es") },
    { Icon: IconUsers, label: "Estudiantes", value: totalEstudiantes.toLocaleString("es") },
    { Icon: IconBadgeCheck, label: "Cursos", value: totalCursos },
  ];

  return (
    <section>
      <h2 className="mb-2 text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">Instructor</h2>
      <div className="rounded-xl border border-[#21262D] bg-[#111827] p-6 md:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="relative size-28 shrink-0 overflow-hidden rounded-full ring-2 ring-[#C9A84C]/40">
            <ImagenPlaceholder
              src={instructor.imagen}
              alt={instructor.nombre}
              fill
              className="object-cover"
              rutaInstruccion="public/imagenes/equipo/darwin-acaro.jpg"
            />
          </div>

          <div className="flex-1">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[#F8FAFC]">
              {instructor.nombre}
              <IconBadgeCheck className="size-5 text-[#C9A84C]" />
            </h3>
            <p className="mt-1 text-sm text-[#C9A84C]">
              {instructor.titulo} · {instructor.empresa}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ Icon, label, value }) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <dt className="flex items-center gap-1.5 text-xs text-[#8B949E]">
                    <Icon className="size-3.5 text-[#C9A84C]/70" />
                    {label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-[#F8FAFC]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-[#8B949E] text-pretty">{instructor.bio}</p>

        <ul className="mt-5 flex flex-col gap-2.5">
          {instructor.proyectos.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-[#8B949E]">
              <IconBadgeCheck className="mt-0.5 size-4 shrink-0 text-[#C9A84C]/80" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

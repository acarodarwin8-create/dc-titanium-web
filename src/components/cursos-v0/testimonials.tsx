import type { TestimonioCurso } from "@/content/cursos-detalle";
import { IconStar, IconQuote } from "./icons";

export function Testimonials({
  testimonios,
  rating,
  totalReseñas,
}: {
  testimonios: TestimonioCurso[];
  rating: number;
  totalReseñas: number;
}) {
  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">
          Lo que dicen los estudiantes
        </h2>
        <span className="flex items-center gap-1.5 text-sm text-[#8B949E]">
          <IconStar className="size-4 text-[#C9A84C]" fill="currentColor" />
          <span className="font-semibold text-[#C9A84C]">{rating}</span>
          calificación del curso · {totalReseñas.toLocaleString("es")} reseñas
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {testimonios.map((t) => (
          <figure key={t.nombre} className="relative flex flex-col rounded-xl border border-[#21262D] bg-[#111827] p-6">
            <IconQuote className="absolute right-5 top-5 size-8 text-[#C9A84C]/15" />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="size-4 text-[#C9A84C]" fill={i < t.rating ? "currentColor" : "none"} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[#8B949E] text-pretty">
              &ldquo;{t.texto}&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-[#C9A84C]/15 text-sm font-semibold text-[#C9A84C]">
                {t.nombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </span>
              <span>
                <span className="block text-sm font-medium text-[#F8FAFC]">{t.nombre}</span>
                <span className="block text-xs text-[#8B949E]">
                  {t.cargo} · {t.empresa}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

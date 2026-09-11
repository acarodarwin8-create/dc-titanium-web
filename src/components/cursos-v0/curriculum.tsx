"use client";

import { useState } from "react";
import type { Curso } from "@/content/cursos";
import type { ModuloCurso, LeccionCurso } from "@/content/cursos-detalle";
import { IconChevronDown, IconPlayCircle, IconFileVideo } from "./icons";

const ICONO_LECCION: Record<LeccionCurso["tipo"], string> = {
  video: "▶",
  practica: "🔧",
  recurso: "📄",
  quiz: "✓",
};

export function Curriculum({ modulos, curso }: { modulos: ModuloCurso[]; curso: Curso }) {
  const [open, setOpen] = useState<number[]>([0]);
  const allOpen = open.length === modulos.length;

  function toggle(i: number) {
    setOpen((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  }

  return (
    <section>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">Contenido del curso</h2>
        <button
          type="button"
          onClick={() => setOpen(allOpen ? [] : modulos.map((_, i) => i))}
          className="text-sm font-medium text-[#C9A84C] underline-offset-4 transition-colors hover:underline"
        >
          {allOpen ? "Contraer todo" : "Expandir todo"}
        </button>
      </div>

      <p className="mb-4 text-sm text-[#8B949E]">
        {modulos.length} módulos · {curso.lecciones} lecciones · {curso.horas} h de duración total
      </p>

      <div className="overflow-hidden rounded-xl border border-[#21262D] bg-[#111827]">
        {modulos.map((modulo, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={modulo.id} className="border-b border-white/10 last:border-b-0">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-white/5"
              >
                <IconChevronDown
                  className={`size-5 shrink-0 text-[#C9A84C] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
                <span className="flex-1 font-medium text-[#F8FAFC]">{modulo.titulo}</span>
                <span className="hidden text-xs text-[#8B949E] sm:block">
                  {modulo.lecciones.length} lecciones · {modulo.duracion}
                </span>
              </button>

              <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <ul className="border-t border-white/5 bg-black/20">
                    {modulo.lecciones.map((leccion) => (
                      <li
                        key={leccion.id}
                        className="flex items-center gap-3 py-3 pl-12 pr-5 text-sm transition-colors hover:bg-white/5"
                      >
                        {leccion.preview ? (
                          <IconPlayCircle className="size-4 shrink-0 text-[#C9A84C]" />
                        ) : (
                          <IconFileVideo className="size-4 shrink-0 text-[#8B949E]" />
                        )}
                        <span className="flex-1 text-[#8B949E]">
                          <span className="mr-1.5">{ICONO_LECCION[leccion.tipo]}</span>
                          {leccion.titulo}
                        </span>
                        {leccion.preview && (
                          <span className="rounded bg-[#C9A84C]/10 px-2 py-0.5 text-xs font-medium text-[#C9A84C]">
                            Vista previa
                          </span>
                        )}
                        <span className="text-xs tabular-nums text-[#8B949E]">{leccion.duracion}</span>
                      </li>
                    ))}
                    {modulo.recursos.length > 0 && (
                      <li className="flex flex-wrap gap-2 py-3 pl-12 pr-5">
                        {modulo.recursos.map((archivo) => (
                          <span
                            key={archivo}
                            className="text-xs text-[#8B949E] bg-[#161B22] border border-[#21262D] rounded px-2 py-1 font-mono"
                          >
                            📎 {archivo}
                          </span>
                        ))}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

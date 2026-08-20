import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NIVEL_COLOR } from "@/content/cursos";
import { getCursoDetalle, getSlugsCursos, type LeccionCurso } from "@/content/cursos-detalle";
import { IMAGENES } from "@/lib/imagenes";
import ImagenPlaceholder from "@/components/ui/ImagenPlaceholder";
import Acordeon, { type AcordeonItem } from "@/components/ui/Acordeon";
import Estrellas from "@/components/cursos/Estrellas";
import PanelCompra from "@/components/cursos/PanelCompra";

const ICONO_LECCION: Record<LeccionCurso["tipo"], string> = {
  video: "▶",
  practica: "🔧",
  recurso: "📄",
  quiz: "✓",
};

export function generateStaticParams() {
  return getSlugsCursos().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const datos = getCursoDetalle(slug);
  if (!datos) return {};
  const { base, detalle } = datos;
  const imagen = IMAGENES.cursos[slug];

  return {
    title: `${base.nombre} | DC Titanium Builders`,
    description: detalle.subtitulo,
    openGraph: {
      title: base.nombre,
      description: detalle.subtitulo,
      images: [{ url: imagen, width: 800, height: 450 }],
    },
  };
}

export default async function CursoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const datos = getCursoDetalle(slug);
  if (!datos) notFound();
  const { base: curso, detalle } = datos;

  const imagen = IMAGENES.cursos[slug];
  const colorNivel = NIVEL_COLOR[curso.nivel] || "#8B949E";
  const totalModulos = detalle.modulos.length;

  const itemsTemario: AcordeonItem[] = detalle.modulos.map((modulo) => ({
    id: modulo.id,
    header: (
      <div className="flex items-center gap-4 min-w-0">
        <span className="shrink-0 w-8 h-8 rounded-full bg-[#161B22] border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold flex items-center justify-center">
          {modulo.id}
        </span>
        <div className="min-w-0">
          <p className="text-white font-semibold text-sm truncate">{modulo.titulo}</p>
          <p className="text-[#8B949E] text-xs mt-0.5">
            {modulo.lecciones.length} lecciones · {modulo.duracion}
          </p>
        </div>
      </div>
    ),
    content: (
      <ul className="flex flex-col gap-1 border-t border-white/10 pt-3">
        {modulo.lecciones.map((leccion) => (
          <li key={leccion.id} className="flex items-center justify-between gap-3 py-1.5">
            <span className="flex items-center gap-2.5 min-w-0 text-sm text-[#E6EDF3]">
              <span className="text-[#C9A84C] shrink-0">{ICONO_LECCION[leccion.tipo]}</span>
              <span className="truncate">{leccion.titulo}</span>
              {leccion.preview && (
                <span className="shrink-0 text-[10px] font-bold text-[#0A0A0F] bg-[#C9A84C] px-1.5 py-0.5 rounded">
                  PREVIEW GRATIS
                </span>
              )}
            </span>
            <span className="shrink-0 text-xs text-[#8B949E] font-mono">{leccion.duracion}</span>
          </li>
        ))}
      </ul>
    ),
  }));

  const itemsFaq: AcordeonItem[] = detalle.preguntasFrecuentes.map((p, i) => ({
    id: i,
    header: <p className="text-white font-semibold text-sm">{p.pregunta}</p>,
    content: <p className="text-[#8B949E] text-sm leading-relaxed">{p.respuesta}</p>,
  }));

  return (
    <main style={{ background: "#0A0A0F", minHeight: "100vh" }}>
      {/* SECCION 1+2 — Hero + Panel de compra */}
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #0B1929 55%, #0A0A0F 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
          <nav className="text-xs text-[#8B949E] mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/cursos" className="hover:text-[#C9A84C] transition-colors">
              Cursos
            </Link>
            <span>/</span>
            <span className="text-[#E6EDF3]">{curso.nombre}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            <div>
              <span
                className="inline-block text-xs font-bold rounded-full px-3 py-1 mb-4"
                style={{ color: colorNivel, border: `1px solid ${colorNivel}`, background: colorNivel + "15" }}
              >
                {curso.nivel}
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
                {curso.nombre}
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl mb-6" style={{ lineHeight: 1.7 }}>
                {detalle.subtitulo}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Estrellas rating={curso.rating} />
                <span className="text-[#C9A84C] font-bold text-sm">{curso.rating}</span>
                <span className="text-[#8B949E] text-sm">({detalle.totalReseñas} reseñas)</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {detalle.normativas.map((n) => (
                  <span key={n} className="tb-badge-norm">
                    {n}
                  </span>
                ))}
                {curso.software.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold text-[#8B949E] bg-[#161B22] border border-[#21262D] rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
                <span className="text-xs font-semibold text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full px-3 py-1">
                  {curso.certificacion}
                </span>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-sm text-[#8B949E]">
                <span>
                  <strong className="text-white">{curso.estudiantes}+</strong> estudiantes
                </span>
                <span>
                  <strong className="text-white">{curso.lecciones}</strong> lecciones
                </span>
                <span>
                  <strong className="text-white">{curso.horas}h</strong> de duración
                </span>
                <span>
                  Actualizado <strong className="text-white">{detalle.ultimaActualizacion}</strong>
                </span>
                <span>
                  Idioma <strong className="text-white">{detalle.idioma}</strong>
                </span>
              </div>
            </div>

            <PanelCompra curso={curso} imagen={imagen} rutaInstruccionImagen={`public/imagenes/cursos/${slug}.jpg`} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
          <div className="flex flex-col gap-16">
            {/* SECCION 3 — Lo que aprenderás */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Lo que aprenderás</h2>
              <div className="tb-glass-card p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {detalle.loAprenderas.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-0.5 shrink-0">✓</span>
                    <span className="text-sm text-[#E6EDF3]" style={{ lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCION 4 — Temario completo */}
            <section>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
                <h2 className="text-3xl font-bold text-white">Temario completo</h2>
                <span className="text-sm text-[#8B949E]">
                  {totalModulos} módulos · {curso.lecciones} lecciones · {curso.horas}h totales
                </span>
              </div>
              <Acordeon items={itemsTemario} abrirPrimero />
            </section>

            {/* Requisitos + Para quién */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Requisitos</h3>
                <ul className="flex flex-col gap-2.5">
                  {detalle.requisitos.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-[#8B949E]">
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">¿Para quién es este curso?</h3>
                <ul className="flex flex-col gap-2.5">
                  {detalle.paraQuien.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-[#8B949E]">
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* SECCION 5 — Instructor */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Tu instructor</h2>
              <div className="tb-glass-card p-6 flex flex-col sm:flex-row gap-6">
                <div style={{ position: "relative", width: "96px", height: "96px" }} className="shrink-0 rounded-full overflow-hidden">
                  <ImagenPlaceholder
                    src={detalle.instructor.imagen}
                    alt={detalle.instructor.nombre}
                    fill
                    className="object-cover"
                    rutaInstruccion="public/imagenes/equipo/darwin-acaro.jpg"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{detalle.instructor.nombre}</h3>
                  <p className="text-[#C9A84C] text-sm mb-3">
                    {detalle.instructor.titulo} · {detalle.instructor.empresa}
                  </p>
                  <p className="text-sm text-[#8B949E] mb-4" style={{ lineHeight: 1.7 }}>
                    {detalle.instructor.bio}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {detalle.instructor.proyectos.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#8B949E]">
                        <span className="text-[#C9A84C] mt-0.5 shrink-0">◆</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* SECCION 6 — Testimonios */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Lo que dicen los estudiantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {detalle.testimonios.map((t) => (
                  <div key={t.nombre} className="tb-glass-card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-[#161B22] border border-[#C9A84C]/30 text-[#C9A84C] font-bold text-sm flex items-center justify-center shrink-0">
                        {t.nombre.charAt(0)}
                      </span>
                      <div>
                        <p className="text-white font-semibold text-sm">{t.nombre}</p>
                        <p className="text-[#8B949E] text-xs">
                          {t.cargo} · {t.empresa}
                        </p>
                      </div>
                    </div>
                    <Estrellas rating={t.rating} size={14} />
                    <p className="text-sm text-[#E6EDF3] mt-3 mb-3" style={{ lineHeight: 1.6 }}>
                      &ldquo;{t.texto}&rdquo;
                    </p>
                    <p className="text-xs text-[#8B949E]">{t.fecha}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECCION 7 — Preguntas Frecuentes */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Preguntas frecuentes</h2>
              <Acordeon items={itemsFaq} />
            </section>
          </div>

          {/* Columna derecha vacía en desktop para alinear con el panel de compra sticky del hero */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* SECCION 8 — CTA final */}
      <section
        className="border-t"
        style={{ background: "#0A0A0F", borderColor: "rgba(201,168,76,0.2)" }}
      >
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="tb-glass-card p-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-6">
              ¿Listo para dominar {curso.nombre}?
            </h2>
            <Link
              href="#panel-compra"
              className="inline-block tb-btn-primary"
              style={{ padding: "1rem 2.5rem", fontSize: "0.9rem" }}
            >
              INSCRIBIRME AHORA — ${curso.precio} USD
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

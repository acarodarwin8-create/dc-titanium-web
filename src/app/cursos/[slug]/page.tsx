import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCursoDetalle, getSlugsCursos } from "@/content/cursos-detalle";
import { IMAGENES } from "@/lib/imagenes";
import { Hero } from "@/components/cursos-v0/hero";
import { PurchasePanel } from "@/components/cursos-v0/purchase-panel";
import { WhatYouLearn } from "@/components/cursos-v0/what-you-learn";
import { Curriculum } from "@/components/cursos-v0/curriculum";
import { Requirements } from "@/components/cursos-v0/requirements";
import { InstructorSection } from "@/components/cursos-v0/instructor-section";
import { Testimonials } from "@/components/cursos-v0/testimonials";
import { MobilePurchaseBar } from "@/components/cursos-v0/mobile-purchase-bar";

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

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-28">
      <Hero curso={curso} detalle={detalle} />

      <main className="relative mx-auto max-w-7xl px-4 pb-24 md:px-8 lg:pb-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-10">
          {/* Contenido izquierda */}
          <div className="flex flex-col gap-12 py-10 lg:col-span-2">
            <WhatYouLearn items={detalle.loAprenderas} />
            <Curriculum modulos={detalle.modulos} curso={curso} />
            <Requirements requisitos={detalle.requisitos} paraQuien={detalle.paraQuien} />
            <InstructorSection instructor={detalle.instructor} rating={curso.rating} totalReseñas={detalle.totalReseñas} />
            <Testimonials testimonios={detalle.testimonios} rating={curso.rating} totalReseñas={detalle.totalReseñas} />
          </div>

          {/* Panel compra derecha, sticky, flota sobre el hero */}
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-24 -mt-56 pb-10">
              <PurchasePanel
                curso={curso}
                imagen={imagen}
                rutaInstruccionImagen={`public/imagenes/cursos/${slug}.jpg`}
                hotmartUrl={detalle.hotmartUrl}
              />
            </div>
          </aside>
        </div>
      </main>

      <MobilePurchaseBar curso={curso} />
    </div>
  );
}

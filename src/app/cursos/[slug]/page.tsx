// src/app/cursos/[slug]/page.tsx
// ============================================================
// Página Detalle de Curso — Haute Elegance v2.0 Ultra-Executive
// Layout de Alta Gama con Halo Ambiental y Panel Sticky Superpuesto
// ============================================================
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCursoDetalle, getSlugsCursos } from "@/content/cursos-detalle";
import { IMAGENES } from "@/lib/imagenes";
import Hero from "@/components/cursos-v0/hero";
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
        <div
            style={{
                minHeight: "100vh",
                background: "var(--obsidian, #070708)",
                paddingTop: "clamp(6.5rem, 10vh, 8.5rem)", // Margen dinámico para librar Navbar totalmente
                position: "relative",
                overflowX: "hidden",
            }}
        >
            {/* Halo ambiental dorado superior para profundidad de marca */}
            <div
                aria-hidden
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    maxWidth: "1400px",
                    height: "600px",
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            {/* Hero Principal */}
            <div style={{ position: "relative", zIndex: 2 }}>
                <Hero curso={curso} detalle={detalle} />
            </div>

            {/* Contenedor Principal en Grid */}
            <main
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1280px",
                    margin: "0 auto",
                }}
                className="px-4 pb-24 md:px-8 lg:pb-20"
            >
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Columna Izquierda: Secciones de Contenido del Curso */}
                    <div className="flex flex-col gap-14 py-8 lg:col-span-2">
                        <WhatYouLearn items={detalle.loAprenderas} />
                        <Curriculum modulos={detalle.modulos} curso={curso} />
                        <Requirements
                            requisitos={detalle.requisitos}
                            paraQuien={detalle.paraQuien}
                        />
                        <InstructorSection
                            instructor={detalle.instructor}
                            rating={curso.rating}
                            totalReseñas={detalle.totalReseñas}
                        />
                        <Testimonials
                            testimonios={detalle.testimonios}
                            rating={curso.rating}
                            totalReseñas={detalle.totalReseñas}
                        />
                    </div>

                    {/* Columna Derecha: Panel de Compra Sticky Superpuesto */}
                    <aside className="hidden lg:col-span-1 lg:block">
                        <div
                            style={{
                                position: "sticky",
                                top: "6.5rem", // Alineación con el Auto-Hide del Navbar
                                marginTop: "-14rem", // Desplazamiento negativo para flotar sobre el Hero
                                paddingBottom: "2.5rem",
                                zIndex: 10,
                            }}
                        >
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

            {/* Barra Flotante para Dispositivos Móviles */}
            <MobilePurchaseBar curso={curso} />
        </div>
    );
}

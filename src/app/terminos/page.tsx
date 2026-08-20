import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de la plataforma DC Titanium Builders.",
};

export default function TerminosPage() {
  return (
    <main className="min-h-[80vh] bg-[#0A0A0F] px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-[#C9A84C] mb-3">DC TITANIUM BUILDERS S.A.</p>
        <h1 className="text-3xl font-bold text-white mb-2">Términos y Condiciones</h1>
        <p className="text-sm text-[#8B949E] mb-10">Última actualización: 2026</p>

        <div className="tb-glass-card p-8 space-y-8 text-[#E6EDF3] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">1. Objeto del servicio</h2>
            <p>
              DC Titanium Builders S.A. ("la Empresa"), con domicilio en Quito, Ecuador, ofrece a
              través de esta plataforma cursos, programas de formación y recursos digitales en
              ingeniería estructural, BIM y automatización AEC ("los Servicios"). El acceso y uso
              de la plataforma implica la aceptación plena de estos Términos y Condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">2. Condiciones de uso de los cursos</h2>
            <p>
              El acceso a un curso se otorga de forma personal e intransferible al usuario que
              realizó la compra o se registró en el programa. El usuario se compromete a utilizar
              los materiales exclusivamente con fines de aprendizaje personal, respetando el
              temario, plazos y condiciones de acceso indicados en cada curso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">3. Política de no reembolso</h2>
            <p>
              Las compras de cursos y programas son reembolsables únicamente dentro de los{" "}
              <strong className="text-white">7 días calendario posteriores a la compra</strong>,
              siempre que el consumo del contenido no supere el 20% del curso. Pasado ese plazo, o
              superado dicho consumo, no se procesarán reembolsos, salvo excepciones previstas en
              la Ley Orgánica de Defensa del Consumidor del Ecuador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">4. Propiedad intelectual</h2>
            <p>
              Todo el contenido de la plataforma —videos, documentos, plantillas, código,
              modelos BIM, imágenes y material didáctico— es propiedad exclusiva de DC Titanium
              Builders S.A. o de sus licenciantes. Queda prohibida su reproducción, distribución,
              modificación o explotación comercial sin autorización expresa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">5. Prohibición de compartir credenciales</h2>
            <p>
              Cada cuenta es personal e intransferible. Queda prohibido compartir usuario y
              contraseña, o el acceso a contenido pago, con terceros. DC Titanium Builders S.A. se
              reserva el derecho de suspender cuentas que incumplan esta condición, sin derecho a
              reembolso.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">6. Jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República del Ecuador,
              incluyendo la Ley Orgánica de Defensa del Consumidor y el Código Orgánico Monetario
              y Financiero (LORCPM) en lo que corresponda. Cualquier controversia se someterá a los
              jueces competentes del cantón Quito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">7. Contacto</h2>
            <p>
              Para consultas relacionadas con estos términos, escríbenos a{" "}
              <a href="mailto:info@dctitanium.com" className="text-[#C9A84C] hover:text-[#E8C96A] transition-colors">
                info@dctitanium.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

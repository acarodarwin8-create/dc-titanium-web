import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y tratamiento de datos personales de DC Titanium Builders.",
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-[80vh] bg-[#0A0A0F] px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-[#C9A84C] mb-3">DC TITANIUM BUILDERS S.A.</p>
        <h1 className="text-3xl font-bold text-white mb-2">Política de Privacidad</h1>
        <p className="text-sm text-[#8B949E] mb-10">
          Conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador
        </p>

        <div className="tb-glass-card p-8 space-y-8 text-[#E6EDF3] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">1. Datos que recopilamos</h2>
            <p>
              Recopilamos los datos que nos proporcionas directamente al registrarte, comprar un
              curso o contactarnos: nombre, correo electrónico, y datos de facturación cuando
              corresponda. También registramos información técnica básica de uso de la
              plataforma (páginas visitadas, progreso en cursos) para mejorar el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">2. Cómo usamos tus datos</h2>
            <p>
              Utilizamos tus datos exclusivamente para: gestionar tu acceso a la plataforma y los
              cursos adquiridos, procesar pagos y facturación, enviarte comunicaciones relacionadas
              con tu formación, y mejorar la calidad de nuestros Servicios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">3. No vendemos tus datos</h2>
            <p>
              DC Titanium Builders S.A. no vende, alquila ni comparte tus datos personales con
              terceros para fines comerciales ajenos a la prestación del Servicio. Solo
              compartimos información con proveedores estrictamente necesarios para operar la
              plataforma (por ejemplo, procesadores de pago), bajo obligaciones de
              confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">4. Tus derechos</h2>
            <p>
              De acuerdo con la LOPDP, tienes derecho a acceder, rectificar, actualizar y solicitar
              la eliminación de tus datos personales en cualquier momento, así como a oponerte a su
              tratamiento u oportar tu revocatoria del consentimiento otorgado. Puedes ejercer
              estos derechos escribiendo a{" "}
              <a href="mailto:info@dctitanium.com" className="text-[#C9A84C] hover:text-[#E8C96A] transition-colors">
                info@dctitanium.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">5. Seguridad</h2>
            <p>
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra
              accesos no autorizados, pérdida o alteración, incluyendo cifrado de sesiones y
              control de acceso a contenido protegido.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">6. Contacto</h2>
            <p>
              Para cualquier consulta sobre el tratamiento de tus datos personales, contáctanos en{" "}
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

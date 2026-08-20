import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Qué cookies utiliza DC Titanium Builders y cómo desactivarlas.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-[80vh] bg-[#0A0A0F] px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-widest text-[#C9A84C] mb-3">DC TITANIUM BUILDERS S.A.</p>
        <h1 className="text-3xl font-bold text-white mb-2">Política de Cookies</h1>
        <p className="text-sm text-[#8B949E] mb-10">Última actualización: 2026</p>

        <div className="tb-glass-card p-8 space-y-8 text-[#E6EDF3] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">1. Qué cookies usamos</h2>
            <p className="mb-4">
              Utilizamos un número reducido de cookies, estrictamente necesarias para el
              funcionamiento de la plataforma:
            </p>
            <ul className="space-y-2 list-disc list-inside text-[#8B949E]">
              <li>
                <span className="text-white font-medium">dc_session</span> — cookie de sesión,
                necesaria para mantener tu inicio de sesión y proteger el acceso a tus cursos.
              </li>
              <li>
                <span className="text-white font-medium">dc_aviso_legal_aceptado</span> —
                almacenada en tu navegador (localStorage), recuerda que ya aceptaste el aviso de
                contenido protegido dentro de un curso.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">2. Para qué las usamos</h2>
            <p>
              Estas cookies son de carácter técnico: no se usan con fines publicitarios ni de
              seguimiento entre sitios. Su único propósito es permitir que puedas iniciar sesión,
              navegar por tus cursos y mantener tu progreso durante la sesión.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#E8C96A] mb-3">3. Cómo desactivarlas</h2>
            <p>
              Puedes bloquear o eliminar estas cookies desde la configuración de tu navegador. Ten
              en cuenta que, al ser cookies estrictamente necesarias, desactivarlas impedirá que
              puedas iniciar sesión o acceder a contenido protegido de la plataforma.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";
import { obtenerSesion } from "@/lib/security/session";
import DashboardShell from "@/components/dashboard/DashboardShell";

const CURSOS_EJEMPLO = [
  { id: 1, nombre: "Máster Ingeniería Estructural Sísmica", progreso: 68 },
  { id: 2, nombre: "ETABS: Pórticos SMF", progreso: 32 },
  { id: 3, nombre: "Python & Dynamo: Automatización BIM", progreso: 90 },
];

export default async function DashboardPage() {
  const sesion = await obtenerSesion();
  if (!sesion) {
    redirect("/login");
  }

  return (
    <DashboardShell nombreUsuario={sesion}>
      <h1 className="text-2xl font-bold text-white mb-1">Bienvenido, {sesion}</h1>
      <p className="text-[#8B949E] mb-8">Continúa donde lo dejaste</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CURSOS_EJEMPLO.map((curso) => (
          <div key={curso.id} className="tb-glass-card overflow-hidden">
            <div className="h-36 bg-[#161B22] flex items-center justify-center text-[#8B949E] text-xs px-4 text-center">
              {curso.nombre}
            </div>
            <div className="p-5">
              <h3 className="text-white font-semibold text-sm mb-3">{curso.nombre}</h3>
              <div className="h-1.5 bg-[#21262D] rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]"
                  style={{ width: `${curso.progreso}%` }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#8B949E]">{curso.progreso}% completado</span>
                <button className="text-xs font-semibold text-[#0A0A0F] bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] px-4 py-2 rounded-lg hover:from-[#E8C96A] hover:to-[#C9A84C] transition-all">
                  Continuar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

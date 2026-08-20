import { redirect } from "next/navigation";
import { obtenerSesion } from "@/lib/security/session";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default async function PerfilPage() {
  const sesion = await obtenerSesion();
  if (!sesion) {
    redirect("/login");
  }

  return (
    <DashboardShell nombreUsuario={sesion}>
      <h1 className="text-2xl font-bold text-white mb-8">Mi Perfil</h1>
      <div className="tb-glass-card max-w-lg p-8">
        <div className="space-y-5">
          <div>
            <span className="block text-xs text-[#8B949E] mb-1">Nombre</span>
            <span className="block text-white font-medium">{sesion}</span>
          </div>
          <div>
            <span className="block text-xs text-[#8B949E] mb-1">Cuenta</span>
            <span className="block text-white font-medium">Alumno DC Titanium</span>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

import { redirect } from "next/navigation";
import { obtenerSesion } from "@/lib/security/session";
import DashboardShell from "@/components/dashboard/DashboardShell";
import AvisoLegal from "@/components/ui/AvisoLegal";

export default async function CursoProtegidoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const sesion = await obtenerSesion();
  if (!sesion) {
    redirect("/login");
  }

  const { slug } = await params;

  return (
    <DashboardShell nombreUsuario={sesion}>
      <AvisoLegal />
      <h1 className="text-2xl font-bold text-white mb-2">Curso: {slug}</h1>
      <p className="text-[#8B949E]">Contenido protegido del curso.</p>
    </DashboardShell>
  );
}

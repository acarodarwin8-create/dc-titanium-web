import Link from "next/link";
import Image from "next/image";
import { cerrarSesion } from "@/lib/security/session";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Mis Cursos", href: "/dashboard" },
  { label: "Perfil", href: "/perfil" },
];

export default function DashboardShell({
  nombreUsuario,
  children,
}: {
  nombreUsuario: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[80vh] bg-[#0A0A0F] flex flex-col md:flex-row">
      <aside className="w-full md:w-64 md:min-h-[80vh] border-b md:border-b-0 md:border-r border-[#21262D] bg-[#0D1117] p-6 flex md:flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Image src="/Logo_V8_Premium_Serio.png" alt="DC Titanium Builders" width={36} height={36} />
            <span className="text-white font-bold text-sm">DC Titanium</span>
          </div>
          <nav className="hidden md:flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2.5 rounded-lg text-sm text-[#8B949E] hover:text-white hover:bg-[#161B22] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <form action={cerrarSesion} className="md:mt-8">
          <button
            type="submit"
            className="w-full px-4 py-2.5 rounded-lg text-sm text-[#8B949E] hover:text-[#E8C96A] border border-[#21262D] hover:border-[#C9A84C]/40 transition-colors"
          >
            Cerrar Sesión — {nombreUsuario}
          </button>
        </form>
      </aside>

      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}

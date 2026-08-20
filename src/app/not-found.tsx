import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#0A0A0F] px-4 py-16">
      <div className="tb-glass-card w-full max-w-md p-10 text-center">
        <Image
          src="/Logo_V8_Premium_Serio.png"
          alt="DC Titanium Builders"
          width={72}
          height={72}
          className="mx-auto mb-6"
        />
        <p className="text-6xl font-black bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-xl font-bold text-white mb-3">
          Esta página no existe — pero tu carrera estructural sí tiene futuro
        </h1>
        <p className="text-sm text-[#8B949E] mb-8">
          Revisa la dirección o vuelve al inicio para seguir explorando cursos y programas.
        </p>
        <Link href="/" className="tb-btn-primary inline-block">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}

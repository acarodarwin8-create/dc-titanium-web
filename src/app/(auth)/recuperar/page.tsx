"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RecuperarPage() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  function manejarSubmit(evento: React.FormEvent) {
    evento.preventDefault();
    console.log("[DC Titanium] Recuperar contraseña submit:", { email });
    setEnviado(true);
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#0A0A0F] px-4 py-16">
      <div className="tb-glass-card w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Image src="/Logo_V8_Premium_Serio.png" alt="DC Titanium Builders" width={72} height={72} />
          <h1 className="mt-4 text-2xl font-bold text-white">Recuperar contraseña</h1>
          <p className="text-sm text-[#8B949E] mt-1 text-center">
            Ingresa tu correo y te enviaremos instrucciones para restablecerla
          </p>
        </div>

        {enviado ? (
          <div className="text-center">
            <p className="text-sm text-[#E8C96A]">
              Si el correo existe en nuestro sistema, recibirás un enlace de recuperación en breve.
            </p>
            <Link
              href="/login"
              className="inline-block mt-6 text-[#C9A84C] hover:text-[#E8C96A] font-medium transition-colors"
            >
              Volver a iniciar sesión
            </Link>
          </div>
        ) : (
          <form onSubmit={manejarSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm text-[#8B949E] mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#161B22] border border-[#21262D] rounded-lg px-4 py-3 text-white placeholder:text-[#8B949E]/50 focus:border-[#C9A84C]/50 outline-none transition-colors"
                placeholder="tu@correo.com"
              />
            </div>
            <button type="submit" className="tb-btn-primary w-full">
              Enviar instrucciones
            </button>
          </form>
        )}

        <p className="text-center text-sm text-[#8B949E] mt-6">
          <Link href="/login" className="text-[#C9A84C] hover:text-[#E8C96A] font-medium transition-colors">
            ← Volver a iniciar sesión
          </Link>
        </p>
      </div>
    </main>
  );
}

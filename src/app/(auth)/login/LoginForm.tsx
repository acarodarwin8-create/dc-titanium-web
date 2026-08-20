"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { iniciarSesionTemporal } from "@/lib/security/session";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const destino = searchParams.get("next") || "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);

  async function manejarSubmit(evento: React.FormEvent) {
    evento.preventDefault();
    console.log("[DC Titanium] Login submit:", { email, password });
    setCargando(true);
    await iniciarSesionTemporal(email.split("@")[0] || "Alumno", destino);
  }

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#0A0A0F] px-4 py-16">
      <div className="tb-glass-card w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Image src="/Logo_V8_Premium_Serio.png" alt="DC Titanium Builders" width={72} height={72} />
          <h1 className="mt-4 text-2xl font-bold text-white">Bienvenido de vuelta</h1>
          <p className="text-sm text-[#8B949E] mt-1">Ingresa a tu cuenta DC Titanium</p>
        </div>

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
          <div>
            <label htmlFor="password" className="block text-sm text-[#8B949E] mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#161B22] border border-[#21262D] rounded-lg px-4 py-3 text-white placeholder:text-[#8B949E]/50 focus:border-[#C9A84C]/50 outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/recuperar" className="text-xs text-[#C9A84C] hover:text-[#E8C96A] transition-colors">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button type="submit" disabled={cargando} className="tb-btn-primary w-full disabled:opacity-60">
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <p className="text-center text-sm text-[#8B949E] mt-6">
          ¿No tienes cuenta?{" "}
          <Link href="/registro" className="text-[#C9A84C] hover:text-[#E8C96A] font-medium transition-colors">
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
}

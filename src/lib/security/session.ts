"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SESSION_COOKIE = "dc_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 dias

// Sesion temporal basada en cookie, sin backend real.
// Sustituir por Supabase Auth cuando se integre.
export async function iniciarSesionTemporal(nombre: string, destino: string = "/dashboard") {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, nombre.trim() || "Alumno DC Titanium", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  redirect(destino);
}

export async function cerrarSesion() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/login");
}

export async function obtenerSesion() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}

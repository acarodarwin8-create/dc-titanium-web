import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "dc_session";

// Rutas que requieren sesion activa
const RUTAS_PROTEGIDAS = ["/dashboard", "/perfil"];

// Rutas de auth: si ya hay sesion, se redirige al dashboard
const RUTAS_AUTH = ["/login", "/registro"];

function coincideRuta(pathname: string, rutas: string[]) {
  return rutas.some((ruta) => pathname === ruta || pathname.startsWith(`${ruta}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get(SESSION_COOKIE)?.value;

  if (coincideRuta(pathname, RUTAS_PROTEGIDAS) && !session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (coincideRuta(pathname, RUTAS_AUTH) && session) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|mp4|pdf)$).*)",
  ],
};

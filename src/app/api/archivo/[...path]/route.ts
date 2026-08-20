import { NextRequest, NextResponse } from "next/server";
import { readFile, stat } from "fs/promises";
import path from "path";

const DIRECTORIO_PRIVADO = path.join(process.cwd(), "private");
const SESSION_COOKIE = "dc_session";

const TIPOS_MIME: Record<string, string> = {
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  if (!session) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const { path: segmentos } = await params;

  const segmentoInvalido = segmentos.some(
    (segmento) => segmento === ".." || segmento.includes("/") || segmento.includes("\\")
  );
  if (segmentoInvalido) {
    return NextResponse.json({ error: "Ruta invalida" }, { status: 400 });
  }

  const rutaArchivo = path.join(DIRECTORIO_PRIVADO, ...segmentos);
  if (!rutaArchivo.startsWith(DIRECTORIO_PRIVADO)) {
    return NextResponse.json({ error: "Ruta invalida" }, { status: 400 });
  }

  try {
    const info = await stat(rutaArchivo);
    if (!info.isFile()) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    const buffer = await readFile(rutaArchivo);
    const extension = path.extname(rutaArchivo).toLowerCase();
    const tipoMime = TIPOS_MIME[extension] ?? "application/octet-stream";

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": tipoMime,
        "Content-Disposition": "inline",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "No encontrado" }, { status: 404 });
  }
}

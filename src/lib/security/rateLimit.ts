// Limitador de peticiones en memoria (por instancia del proceso).
// Suficiente para bloquear abuso basico en dev/single-instance.
// Para produccion con multiples instancias, sustituir por un store compartido (ej. Redis).

interface RegistroLimite {
  conteo: number;
  expira: number;
}

interface OpcionesLimite {
  limite: number;
  ventanaMs: number;
}

const almacen = new Map<string, RegistroLimite>();

export function verificarLimite(
  identificador: string,
  { limite, ventanaMs }: OpcionesLimite
): { permitido: boolean; restante: number } {
  const ahora = Date.now();
  const registro = almacen.get(identificador);

  if (!registro || registro.expira < ahora) {
    almacen.set(identificador, { conteo: 1, expira: ahora + ventanaMs });
    return { permitido: true, restante: limite - 1 };
  }

  if (registro.conteo >= limite) {
    return { permitido: false, restante: 0 };
  }

  registro.conteo += 1;
  return { permitido: true, restante: limite - registro.conteo };
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CLAVE_STORAGE = "dc_aviso_legal_aceptado";

export default function AvisoLegal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const aceptado = window.localStorage.getItem(CLAVE_STORAGE);
    if (!aceptado) {
      setVisible(true);
    }
  }, []);

  function aceptar() {
    window.localStorage.setItem(CLAVE_STORAGE, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0F]/90 backdrop-blur-sm p-4">
      <div className="tb-glass-card w-full max-w-md p-8 text-center">
        <Image
          src="/Logo_V8_Premium_Serio.png"
          alt="DC Titanium Builders"
          width={64}
          height={64}
          className="mx-auto mb-4"
        />
        <h2 className="text-lg font-bold text-white mb-3">Contenido Protegido</h2>
        <p className="text-sm text-[#8B949E] leading-relaxed mb-6">
          Este contenido es propiedad exclusiva de DC Titanium Builders S.A. Queda
          prohibida su reproducción, distribución o descarga sin autorización. El
          acceso está vinculado a tu cuenta personal.
        </p>
        <button onClick={aceptar} className="tb-btn-primary w-full">
          Entendido — Ingresar al curso
        </button>
      </div>
    </div>
  );
}

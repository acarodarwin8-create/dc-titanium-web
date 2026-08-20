"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  rutaInstruccion?: string;
} & ({ fill: true; width?: never; height?: never } | { fill?: false; width: number; height: number });

export default function ImagenPlaceholder(props: Props) {
  const { src, alt, className, rutaInstruccion } = props;
  const [error, setError] = useState(false);
  const nombreArchivo = src.split("/").pop() ?? src;

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center p-4 rounded-xl border border-[#C9A84C]/30 w-full h-full ${className ?? ""}`}
        style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #0B1929 100%)" }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="1.5"
          className="mb-3 opacity-80"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <p className="text-xs font-medium text-[#E8C96A]">{nombreArchivo}</p>
        {rutaInstruccion && (
          <p className="text-[10px] text-[#8B949E] mt-2 leading-relaxed">
            Reemplazar en {rutaInstruccion}
          </p>
        )}
      </div>
    );
  }

  if (props.fill) {
    return <Image src={src} alt={alt} fill className={className} onError={() => setError(true)} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={props.width}
      height={props.height}
      className={className}
      onError={() => setError(true)}
    />
  );
}

"use client";

import { useState, type ReactNode } from "react";

export interface AcordeonItem {
  id: string | number;
  header: ReactNode;
  content: ReactNode;
}

export default function Acordeon({
  items,
  abrirPrimero = false,
}: {
  items: AcordeonItem[];
  abrirPrimero?: boolean;
}) {
  const [abierto, setAbierto] = useState<string | number | null>(
    abrirPrimero && items[0] ? items[0].id : null
  );

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
        const expandido = abierto === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-xl border bg-[#0D1117] transition-colors ${
              expandido ? "border-[#C9A84C]/40" : "border-white/10 hover:border-[#C9A84C]/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setAbierto(expandido ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 p-4 text-left"
            >
              {item.header}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                className="shrink-0 transition-transform duration-300"
                style={{ transform: expandido ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expandido ? "3000px" : "0px" }}
            >
              <div className="px-4 pb-4">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

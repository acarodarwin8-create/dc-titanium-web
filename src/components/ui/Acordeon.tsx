"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
            className={`rounded-xl border bg-[#0D1117] transition-colors overflow-hidden ${
              expandido ? "border-[#C9A84C]/40" : "border-white/10 hover:border-[#C9A84C]/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setAbierto(expandido ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 p-4 text-left"
            >
              {item.header}
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="2"
                className="shrink-0"
                animate={{ rotate: expandido ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {expandido && (
                <motion.div
                  key="contenido"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-4 pb-4">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

import { IconCheck } from "./icons";

export function WhatYouLearn({ items }: { items: string[] }) {
  return (
    <section className="rounded-xl border border-[#21262D] bg-[#111827] p-6 md:p-8">
      <h2 className="text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">Lo que aprenderás</h2>
      <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/15">
              <IconCheck className="size-3 text-[#C9A84C]" />
            </span>
            <span className="text-sm leading-relaxed text-[#8B949E]">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

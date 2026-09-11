export function Requirements({ requisitos, paraQuien }: { requisitos: string[]; paraQuien: string[] }) {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-5 text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">Requisitos</h2>
        <ul className="flex flex-col gap-3">
          {requisitos.map((req) => (
            <li key={req} className="flex items-start gap-3 text-sm leading-relaxed text-[#8B949E]">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-5 text-xl font-semibold tracking-tight text-[#F8FAFC] md:text-2xl">¿Para quién es?</h2>
        <ul className="flex flex-col gap-3">
          {paraQuien.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-[#8B949E]">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#C9A84C]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

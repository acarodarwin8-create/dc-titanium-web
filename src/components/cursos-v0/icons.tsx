// Iconos inline (stroke 24x24, estilo lucide) — sin dependencia de lucide-react.

type IconProps = { className?: string; fill?: string };

const base = { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function IconStar({ className, fill = "none" }: IconProps) {
  return (
    <svg className={className} {...base} fill={fill}>
      <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.4l-5.9 3.2 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M3 3v18h18" />
      <path d="M7 16v-4M12 16V8M17 16v-7" />
    </svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconPlay({ className, fill = "currentColor" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function IconInfinity({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M18.5 8a4 4 0 1 0 0 8 6 6 0 0 0 0-8zM5.5 8a4 4 0 1 1 0 8 6 6 0 0 1 0-8z" />
    </svg>
  );
}

export function IconSmartphone({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function IconAward({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

export function IconFileText({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}

export function IconDownload({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function IconHeart({ className, fill = "none" }: IconProps) {
  return (
    <svg className={className} {...base} fill={fill}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconPlayCircle({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 8.5v7l6-3.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFileVideo({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M10 12.5v4l3.5-2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMessage({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function IconBadgeCheck({ className }: IconProps) {
  return (
    <svg className={className} {...base} fill="none">
      <path d="M12 2l2.6 1.5 3-.3 1.1 2.8 2.8 1.1-.3 3L23 12l-1.8 2.4.3 3-2.8 1.1-1.1 2.8-3-.3L12 22l-2.6-1.5-3 .3-1.1-2.8-2.8-1.1.3-3L1 12l1.8-2.4-.3-3 2.8-1.1L6.4 2.7l3 .3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 6C6.5 6 4 8.5 4 11.5S6.5 17 9.5 17v-2c-1.7 0-3-1.3-3-3h3V6zm10 0c-3 0-5.5 2.5-5.5 5.5S16.5 17 19.5 17v-2c-1.7 0-3-1.3-3-3h3V6z" />
    </svg>
  );
}

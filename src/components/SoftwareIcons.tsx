// Iconos del stack de software mostrado en el Hero.
//
// Revit y Python usan el trazado oficial de Simple Icons (CC0, pensado
// explícitamente para identificar compatibilidad con la marca/producto:
// https://github.com/simple-icons/simple-icons).
//
// ETABS, SAP2000, Advance Steel y Dynamo no tienen un icono de marca de uso
// libre disponible, así que se diseñaron glifos propios que representan el
// paradigma real de cada herramienta (modelo de edificio, análisis de
// cerchas, perfil de acero I, programación visual por nodos) en vez de
// copiar un logo con derechos reservados.

import type { SVGProps } from "react";

function IconoRevit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 22.665H2.994c-.519 0-.838-.293-.835-.723.001.042.002-.148.003-.463.142-.083.283-.165.427-.247l.078-.045.07-.058.015-.013.127-.078 1.294-.804h1.134c3.35 0 11.817 0 16.548.007.159 0 .631 0 1.002-.371.371-.372.37-.853.37-1.011-.008-2.057-.001-4.109.005-6.16.008-2.39.016-4.86 0-7.298v-.063l.61-.007c.169-.003.143.197.143.296.014 5.68-.02 11.36.015 17.038zM14.326 8.982c.006-.281.006-.56.006-.859-.009-.5-.395-1.055-.916-1.055-.435 0-.919.006-1.432.006v3.01h1.432c.52 0 .9-.584.91-1.102zM3.887 19.234 3.853 1.363l.007-.025.026-.003h17.313c.51.232.943.56 1.033 1.16.023 1.052 0 1.896 0 2.854.001.023-.002.036 0 .059.03 4.489-.022 8.963-.005 13.453 0 .285-.072.38-.37.38-5.99-.008-17.97-.007-17.97-.007zm5.624-3.971h2.395l.057-.051v-3.5c.316.001.57-.005.787-.005.075 0 .348.075.449.286.36.757.692 1.531 1.125 2.25.583.967 1.704 1.204 2.469 1.204.528 0 .528-.024.528-.245 0-.423-.006-.935-.006-1.374-.403-.039-.734-.163-.929-.541-.362-.705-.74-1.401-1.119-2.114.248-.072.218-.057.302-.092.859-.357 1.139-.951 1.213-1.71.05-.503.059-1.144.025-1.395-.112-.833-.378-1.454-1.036-1.932-.773-.562-1.678-.657-2.582-.687a62.395 62.395 0 0 0-3.678.012v9.894zm-5.658-13.9C1.631 2.64.98 3.087.223 3.513.025 3.622 0 3.895 0 4.1l.02 17.45c.575-.357 3.293-1.96 3.867-2.316L3.853 1.363z" />
    </svg>
  );
}

function IconoPython(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  );
}

function IconoETABS(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="10.5" y1="3" x2="10.5" y2="21" />
    </svg>
  );
}

function IconoSAP2000(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 18h20" />
      <path d="M2 18 7 6l5 12 5-12 5 12" />
    </svg>
  );
}

function IconoAdvanceSteel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" {...props}>
      <line x1="6" y1="4" x2="18" y2="4" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="6" y1="20" x2="18" y2="20" />
    </svg>
  );
}

function IconoDynamo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" {...props}>
      <circle cx="5" cy="6" r="2" fill="currentColor" stroke="none" />
      <circle cx="5" cy="18" r="2" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="2" fill="currentColor" stroke="none" />
      <line x1="7" y1="6.6" x2="17" y2="11.3" />
      <line x1="7" y1="17.4" x2="17" y2="12.7" />
    </svg>
  );
}

export const SOFTWARE_ICONOS: Record<string, { Icono: (p: SVGProps<SVGSVGElement>) => React.JSX.Element; color: string }> = {
  ETABS: { Icono: IconoETABS, color: "#C9A84C" },
  Revit: { Icono: IconoRevit, color: "#3B82F6" },
  "Advance Steel": { Icono: IconoAdvanceSteel, color: "#EF4444" },
  Dynamo: { Icono: IconoDynamo, color: "#10B981" },
  Python: { Icono: IconoPython, color: "#F59E0B" },
  SAP2000: { Icono: IconoSAP2000, color: "#8B5CF6" },
};

import pathlib, os

base = pathlib.Path("src")

# ── globals.css ──────────────────────────────────────────────
(base / "app/globals.css").write_text('''@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { background: #FFFFFF; color: #0A0A0A; font-family: "Inter", system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
::selection { background: rgba(180,145,80,0.2); }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-thumb { background: #D4AF72; border-radius: 4px; }
''', encoding="utf-8")
print("OK globals.css")

# ── layout.tsx ───────────────────────────────────────────────
(base / "app/layout.tsx").write_text('''import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "DC Titanium Builders | Ingenieria BIM Elite",
  description: "Capacitacion especializada en calculo estructural, modelado BIM y automatizacion AEC",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
''', encoding="utf-8")
print("OK layout.tsx")

# ── page.tsx ─────────────────────────────────────────────────
(base / "app/page.tsx").write_text('''"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cursos from "@/components/Cursos";
import Servicios from "@/components/Servicios";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cursos />
      <Servicios />
      <Footer />
    </main>
  );
}
''', encoding="utf-8")
print("OK page.tsx")

# ── Navbar.tsx ───────────────────────────────────────────────
(base / "components/Navbar.tsx").write_text('''"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #F0EDE8" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 2rem",height:"68px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <Link href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"0.75rem"}}>
          <div style={{width:"32px",height:"32px",background:"linear-gradient(135deg,#D4AF72,#B8952E)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span style={{color:"white",fontWeight:800,fontSize:"0.875rem"}}>DC</span>
          </div>
          <span style={{fontWeight:700,fontSize:"1rem",color:"#0A0A0A",letterSpacing:"-0.02em"}}>DC Titanium <span style={{color:"#D4AF72"}}>Builders</span></span>
        </Link>
        <nav style={{display:"flex",alignItems:"center",gap:"2rem"}}>
          {["Cursos","Software","Portafolio","Recursos"].map(n => (
            <Link key={n} href={"/"+n.toLowerCase()} style={{fontSize:"0.875rem",fontWeight:500,color:"#4B5563",textDecoration:"none"}}>{n}</Link>
          ))}
          <Link href="/cursos" style={{padding:"0.5rem 1.25rem",borderRadius:"6px",background:"linear-gradient(135deg,#D4AF72,#B8952E)",color:"white",fontWeight:600,fontSize:"0.875rem",textDecoration:"none",boxShadow:"0 2px 8px rgba(180,149,46,0.3)"}}>
            Inscribirse
          </Link>
        </nav>
      </div>
    </header>
  );
}
''', encoding="utf-8")
print("OK Navbar.tsx")

# ── Hero.tsx ─────────────────────────────────────────────────
(base / "components/Hero.tsx").write_text('''"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const PARAMS = [
  {l:"Sistema estructural", v:"SMF - Portico Especial",    c:"#B8952E"},
  {l:"Normativa",           v:"ACI 318-25 / NEC-SE-DS",    c:"#374151"},
  {l:"Niveles",             v:"9 pisos + subsuelo",         c:"#374151"},
  {l:"Zona sismica",        v:"VI - Alta demanda",          c:"#92400E"},
  {l:"Vigas procesadas",    v:"5,956 registros",            c:"#065F46"},
  {l:"Deriva maxima",       v:"0.0187  <  0.020  OK",       c:"#065F46"},
];

const METRICAS = [
  {v:"5,956", l:"Vigas ETABS"},
  {v:"9+",    l:"Pisos SMF"},
  {v:"87+",   l:"Scripts TB"},
  {v:"ACI",   l:"318-25"},
];

const RUTAS = [
  {t:"Calculo Estructural",  d:"ETABS / SAP2000 / ACI 318-25 / NEC", dot:"#D4AF72"},
  {t:"Modelado BIM",         d:"Revit / Navisworks / Advance Steel",  dot:"#9CA3AF"},
  {t:"Automatizacion AEC",   d:"Dynamo / Python / C# / Revit API",    dot:"#60A5FA"},
];

export default function Hero() {
  return (
    <section style={{background:"#FAFAFA",minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:"68px",position:"relative",overflow:"hidden"}}>

      {/* Fondo decorativo sutil */}
      <div style={{position:"absolute",top:0,right:0,width:"55%",height:"100%",background:"linear-gradient(135deg,#FAFAFA 0%,#F5F0E8 100%)",zIndex:0}} />
      <div style={{position:"absolute",top:"10%",right:"5%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(212,175,114,0.08) 0%,transparent 70%)",zIndex:0}} />

      <div style={{position:"relative",zIndex:1,maxWidth:"1280px",margin:"0 auto",padding:"4rem 2rem",width:"100%"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"5rem",alignItems:"center"}}>

          {/* IZQUIERDA */}
          <div>
            {/* Badge */}
            <div style={{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.375rem 0.875rem",borderRadius:"999px",background:"#FEF9EE",border:"1px solid #F0DBA0",marginBottom:"1.75rem"}}>
              <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"#D4AF72",display:"inline-block"}} />
              <span style={{fontSize:"0.7rem",fontWeight:600,color:"#92400E",letterSpacing:"0.06em",fontFamily:"JetBrains Mono,monospace"}}>PLATAFORMA EDUCATIVA AEC — DC TITANIUM BUILDERS</span>
            </div>

            {/* Titulo */}
            <h1 style={{fontSize:"clamp(2.5rem,4vw,3.75rem)",fontWeight:900,lineHeight:1.05,letterSpacing:"-0.04em",marginBottom:"1.5rem",color:"#0A0A0A"}}>
              Ingenieria de<br />
              <span style={{background:"linear-gradient(135deg,#B8952E,#D4AF72,#E8CC96)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Alto Rendimiento</span><br />
              en el Mundo BIM
            </h1>

            {/* Descripcion */}
            <p style={{fontSize:"1.05rem",lineHeight:1.75,color:"#6B7280",marginBottom:"2rem",maxWidth:"480px"}}>
              Capacitacion especializada en calculo estructural, modelado BIM y automatizacion AEC. Proyectos reales, normativa vigente ACI 318-25 y NEC-SE-DS.
            </p>

            {/* CTAs */}
            <div style={{display:"flex",gap:"1rem",marginBottom:"3rem",flexWrap:"wrap"}}>
              <Link href="/cursos" style={{padding:"0.875rem 2rem",borderRadius:"8px",fontWeight:700,fontSize:"0.9rem",color:"white",background:"linear-gradient(135deg,#B8952E,#D4AF72)",boxShadow:"0 4px 16px rgba(180,149,46,0.35)",textDecoration:"none",display:"inline-block"}}>
                Explorar Cursos
              </Link>
              <Link href="/recursos" style={{padding:"0.875rem 2rem",borderRadius:"8px",fontWeight:600,fontSize:"0.9rem",color:"#374151",background:"white",border:"1.5px solid #E5E7EB",textDecoration:"none",display:"inline-block",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                Recursos Gratis
              </Link>
            </div>

            {/* Metricas */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1.5rem",paddingTop:"2rem",borderTop:"1px solid #F0EDE8"}}>
              {METRICAS.map(m=>(
                <div key={m.l}>
                  <p style={{fontSize:"1.5rem",fontWeight:800,color:"#B8952E",marginBottom:"0.25rem",fontFamily:"JetBrains Mono,monospace"}}>{m.v}</p>
                  <p style={{fontSize:"0.75rem",color:"#9CA3AF",fontWeight:500}}>{m.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DERECHA — Dashboard Card */}
          <div style={{position:"relative"}}>
            {/* Sombra decorativa */}
            <div style={{position:"absolute",inset:"-8px",borderRadius:"20px",background:"linear-gradient(135deg,rgba(212,175,114,0.15),rgba(212,175,114,0.05))",zIndex:0}} />

            <div style={{position:"relative",zIndex:1,borderRadius:"16px",background:"white",border:"1px solid #F0EDE8",boxShadow:"0 20px 60px rgba(0,0,0,0.08),0 4px 16px rgba(180,149,46,0.1)",overflow:"hidden"}}>

              {/* Header dorado */}
              <div style={{background:"linear-gradient(135deg,#0A0A0A,#1A1A2E)",padding:"1.25rem 1.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <div>
                  <p style={{fontSize:"0.62rem",fontFamily:"JetBrains Mono,monospace",color:"#D4AF72",letterSpacing:"0.1em",marginBottom:"0.25rem"}}>EDIFICIO TITANIUM QUITUMBE</p>
                  <p style={{fontSize:"0.875rem",fontWeight:600,color:"white"}}>Analisis Estructural SMF</p>
                </div>
                <span style={{padding:"0.25rem 0.625rem",borderRadius:"4px",background:"rgba(212,175,114,0.15)",border:"1px solid rgba(212,175,114,0.3)",fontSize:"0.6rem",fontFamily:"JetBrains Mono,monospace",color:"#D4AF72",display:"flex",alignItems:"center",gap:"0.375rem"}}>
                  <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#4ADE80",display:"inline-block"}} />
                  LIVE
                </span>
              </div>

              {/* Parametros */}
              <div style={{padding:"0.5rem 0"}}>
                {PARAMS.map((r,i)=>(
                  <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.625rem 1.5rem",background:i%2===0?"#FAFAFA":"white"}}>
                    <span style={{fontSize:"0.72rem",color:"#9CA3AF",fontFamily:"JetBrains Mono,monospace"}}>{r.l}</span>
                    <span style={{fontSize:"0.72rem",fontWeight:600,color:r.c,fontFamily:"JetBrains Mono,monospace"}}>{r.v}</span>
                  </div>
                ))}
              </div>

              {/* Barra progreso */}
              <div style={{padding:"1rem 1.5rem",borderTop:"1px solid #F5F5F5"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
                  <span style={{fontSize:"0.7rem",color:"#9CA3AF",fontFamily:"JetBrains Mono,monospace"}}>Avance del modelo</span>
                  <span style={{fontSize:"0.7rem",fontWeight:700,color:"#B8952E",fontFamily:"JetBrains Mono,monospace"}}>94%</span>
                </div>
                <div style={{height:"5px",borderRadius:"999px",background:"#F5F5F5",overflow:"hidden"}}>
                  <div style={{width:"94%",height:"100%",borderRadius:"999px",background:"linear-gradient(90deg,#B8952E,#D4AF72)"}} />
                </div>
              </div>

              {/* Rutas */}
              <div style={{padding:"1rem 1.5rem",borderTop:"1px solid #F5F5F5"}}>
                <p style={{fontSize:"0.6rem",fontFamily:"JetBrains Mono,monospace",color:"#9CA3AF",letterSpacing:"0.1em",marginBottom:"0.75rem"}}>RUTAS DE APRENDIZAJE</p>
                {RUTAS.map((r,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem 0.75rem",borderRadius:"6px",background:"#FAFAFA",border:"1px solid #F0EDE8",marginBottom:"0.4rem",cursor:"pointer"}}>
                    <div style={{width:"6px",height:"6px",borderRadius:"50%",background:r.dot,flexShrink:0}} />
                    <div>
                      <p style={{fontSize:"0.75rem",fontWeight:600,color:"#111827",margin:"0 0 0.1rem 0"}}>{r.t}</p>
                      <p style={{fontSize:"0.65rem",color:"#9CA3AF",fontFamily:"JetBrains Mono,monospace",margin:0}}>{r.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK Hero.tsx")

# ── Cursos.tsx ───────────────────────────────────────────────
(base / "components/Cursos.tsx").write_text('''"use client";
import { useState } from "react";
import Link from "next/link";

const CURSOS = [
  {id:1,titulo:"ETABS Avanzado: Porticos SMF Sismicos",subtitulo:"Diseno completo ACI 318-25 y NEC-SE-DS con Python",software:["ETABS","Python"],nivel:"Avanzado",formato:"Asincrono",precio:149,original:249,horas:32,lecciones:87,estudiantes:312,rating:4.9,cert:"CSI Certified"},
  {id:2,titulo:"Revit + Dynamo: Armado Automatico BIM",subtitulo:"Scripts TB Script PRO para acero de refuerzo",software:["Revit","Dynamo","Python"],nivel:"Intermedio",formato:"Asincrono",precio:99,original:179,horas:24,lecciones:64,estudiantes:528,rating:4.8,cert:"Autodesk Certified"},
  {id:3,titulo:"Advance Steel: Conexiones Estructurales",subtitulo:"Diseno AISC 360 y AISC 341 con detallado BIM",software:["Advance Steel"],nivel:"Experto",formato:"En Vivo",precio:199,original:329,horas:40,lecciones:95,estudiantes:187,rating:5.0,cert:"Autodesk Certified"},
];

const NIVEL_COLOR: Record<string,string> = {
  "Basico":"#065F46","Intermedio":"#1D4ED8","Avanzado":"#92400E","Experto":"#7C3AED"
};

export default function Cursos() {
  const [filtroNivel, setFiltroNivel] = useState("Todos");
  const filtrados = filtroNivel === "Todos" ? CURSOS : CURSOS.filter(c => c.nivel === filtroNivel);

  return (
    <section style={{background:"white",padding:"6rem 2rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>

        {/* Header */}
        <div style={{marginBottom:"3rem"}}>
          <p style={{fontSize:"0.7rem",fontFamily:"JetBrains Mono,monospace",color:"#D4AF72",letterSpacing:"0.1em",marginBottom:"0.75rem"}}>FORMACION ESPECIALIZADA AEC</p>
          <h2 style={{fontSize:"clamp(2rem,3vw,2.75rem)",fontWeight:800,color:"#0A0A0A",letterSpacing:"-0.03em",marginBottom:"1rem"}}>
            Cursos de <span style={{background:"linear-gradient(135deg,#B8952E,#D4AF72)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Elite</span>
          </h2>
          <p style={{fontSize:"1rem",color:"#6B7280",maxWidth:"560px",lineHeight:1.7}}>
            Capacitacion con proyectos reales, normativa vigente ACI 318-25, NEC-SE-DS, AISC 360 y herramientas de produccion.
          </p>
        </div>

        {/* Filtros */}
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"2.5rem",flexWrap:"wrap"}}>
          {["Todos","Basico","Intermedio","Avanzado","Experto"].map(n=>(
            <button key={n} onClick={()=>setFiltroNivel(n)} style={{padding:"0.4rem 1rem",borderRadius:"6px",fontSize:"0.8rem",fontWeight:500,cursor:"pointer",border:"1.5px solid",borderColor:filtroNivel===n?"#D4AF72":"#E5E7EB",background:filtroNivel===n?"#FEF9EE":"white",color:filtroNivel===n?"#92400E":"#6B7280",transition:"all 0.2s"}}>
              {n}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
          {filtrados.map(c=>{
            const desc = c.original ? Math.round((1-c.precio/c.original)*100) : 0;
            return (
              <div key={c.id} style={{background:"white",borderRadius:"12px",border:"1.5px solid #F0EDE8",boxShadow:"0 2px 12px rgba(0,0,0,0.04)",overflow:"hidden",transition:"all 0.25s",cursor:"pointer"}}>
                {/* Card header */}
                <div style={{background:"linear-gradient(135deg,#0A0A0A,#1A1A2E)",padding:"2rem 1.5rem",position:"relative",minHeight:"120px",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                  {desc>0 && <span style={{position:"absolute",top:"1rem",right:"1rem",background:"#EF4444",color:"white",fontSize:"0.65rem",fontWeight:700,padding:"0.2rem 0.5rem",borderRadius:"4px"}}>-{desc}%</span>}
                  <p style={{fontSize:"1.5rem",fontWeight:800,color:"#D4AF72",fontFamily:"JetBrains Mono,monospace",marginBottom:"0.25rem"}}>{c.software[0]}</p>
                  {c.software.length>1 && <p style={{fontSize:"0.65rem",color:"#6B7280",fontFamily:"JetBrains Mono,monospace"}}>+ {c.software.slice(1).join(" / ")}</p>}
                  {c.cert && <span style={{position:"absolute",bottom:"1rem",left:"1rem",background:"rgba(212,175,114,0.15)",border:"1px solid rgba(212,175,114,0.3)",color:"#D4AF72",fontSize:"0.6rem",fontFamily:"JetBrains Mono,monospace",padding:"0.2rem 0.5rem",borderRadius:"4px"}}>{c.cert}</span>}
                </div>

                {/* Card body */}
                <div style={{padding:"1.25rem"}}>
                  <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem",flexWrap:"wrap"}}>
                    <span style={{fontSize:"0.65rem",fontWeight:600,color:NIVEL_COLOR[c.nivel]||"#374151",background:NIVEL_COLOR[c.nivel]+"15",padding:"0.2rem 0.5rem",borderRadius:"4px",fontFamily:"JetBrains Mono,monospace"}}>{c.nivel}</span>
                    <span style={{fontSize:"0.65rem",color:"#9CA3AF",fontFamily:"JetBrains Mono,monospace",alignSelf:"center"}}>{c.formato}</span>
                  </div>
                  <h3 style={{fontSize:"0.95rem",fontWeight:700,color:"#111827",marginBottom:"0.5rem",lineHeight:1.4}}>{c.titulo}</h3>
                  <p style={{fontSize:"0.8rem",color:"#9CA3AF",marginBottom:"1rem",lineHeight:1.5}}>{c.subtitulo}</p>
                  <div style={{display:"flex",gap:"1rem",fontSize:"0.72rem",color:"#9CA3AF",fontFamily:"JetBrains Mono,monospace",paddingBottom:"1rem",borderBottom:"1px solid #F5F5F5",marginBottom:"1rem"}}>
                    <span>{c.rating} stars</span>
                    <span>{c.lecciones} lec</span>
                    <span>{c.horas}h</span>
                    <span>{c.estudiantes} est</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                      <span style={{fontSize:"1.5rem",fontWeight:800,color:"#B8952E",fontFamily:"JetBrains Mono,monospace"}}></span>
                      {c.original && <span style={{fontSize:"0.8rem",color:"#D1D5DB",textDecoration:"line-through",marginLeft:"0.5rem"}}></span>}
                    </div>
                    <Link href={"/cursos/"+c.id} style={{padding:"0.5rem 1rem",borderRadius:"6px",background:"linear-gradient(135deg,#B8952E,#D4AF72)",color:"white",fontSize:"0.8rem",fontWeight:600,textDecoration:"none"}}>
                      Ver Curso
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK Cursos.tsx")

# ── Servicios.tsx ────────────────────────────────────────────
(base / "components/Servicios.tsx").write_text('''"use client";

const SERVICIOS = [
  {icon:"◈",titulo:"BIM Management",desc:"Coordinacion de modelos federados bajo ISO 19650. Revit, Navisworks, Advance Steel.",items:["Modelado multidisciplinario","Estandares TB-BIM-STD","Coordinacion Navisworks"]},
  {icon:"⬡",titulo:"Ingenieria Estructural",desc:"Diseno y verificacion de sistemas sismorresistentes bajo normativa vigente.",items:["ACI 318-25 y NEC-SE-DS","Porticos SMF Zona VI","ETABS / SAP2000 / SAFE"]},
  {icon:"⌬",titulo:"Automatizacion AEC",desc:"Herramientas propias que convierten procesos manuales en scripts auditables.",items:["TB Script PRO - Dynamo/Python","CivilControl Pro - presupuestos","Titanium Hydro - hidraulica"]},
];

export default function Servicios() {
  return (
    <section style={{background:"#FAFAFA",padding:"6rem 2rem",borderTop:"1px solid #F0EDE8"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"3.5rem"}}>
          <p style={{fontSize:"0.7rem",fontFamily:"JetBrains Mono,monospace",color:"#D4AF72",letterSpacing:"0.1em",marginBottom:"0.75rem"}}>QUE HACEMOS</p>
          <h2 style={{fontSize:"clamp(1.75rem,3vw,2.5rem)",fontWeight:800,color:"#0A0A0A",letterSpacing:"-0.03em"}}>
            Tres disciplinas, un solo flujo de trabajo.
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.5rem"}}>
          {SERVICIOS.map((s,i)=>(
            <div key={i} style={{background:"white",borderRadius:"12px",padding:"2rem",border:"1.5px solid #F0EDE8",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"}}>
              <div style={{fontSize:"1.75rem",marginBottom:"1rem",color:"#D4AF72"}}>{s.icon}</div>
              <h3 style={{fontSize:"1.1rem",fontWeight:700,color:"#111827",marginBottom:"0.625rem"}}>{s.titulo}</h3>
              <p style={{fontSize:"0.875rem",color:"#6B7280",lineHeight:1.7,marginBottom:"1.25rem"}}>{s.desc}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.375rem"}}>
                {s.items.map((item,j)=>(
                  <li key={j} style={{fontSize:"0.8rem",color:"#374151",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                    <span style={{width:"5px",height:"5px",borderRadius:"50%",background:"#D4AF72",display:"inline-block",flexShrink:0}} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
''', encoding="utf-8")
print("OK Servicios.tsx")

# ── Footer.tsx ───────────────────────────────────────────────
(base / "components/Footer.tsx").write_text('''import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{background:"#0A0A0A",color:"#9CA3AF",padding:"4rem 2rem 2rem"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"3rem",marginBottom:"3rem"}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
              <div style={{width:"32px",height:"32px",background:"linear-gradient(135deg,#D4AF72,#B8952E)",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{color:"white",fontWeight:800,fontSize:"0.875rem"}}>DC</span>
              </div>
              <span style={{fontWeight:700,color:"white"}}>DC Titanium Builders</span>
            </div>
            <p style={{fontSize:"0.875rem",lineHeight:1.7,color:"#6B7280",maxWidth:"280px"}}>BIM management, ingenieria estructural y automatizacion — Quito, Ecuador.</p>
          </div>
          {[
            {t:"Servicios",links:["BIM Management","Ingenieria Estructural","Automatizacion"]},
            {t:"Software Lab",links:["TB Script PRO","CivilControl Pro","Titanium Hydro"]},
            {t:"Empresa",links:["Portafolio","Cursos","Contacto"]},
          ].map((col,i)=>(
            <div key={i}>
              <p style={{fontSize:"0.8rem",fontWeight:600,color:"white",marginBottom:"1rem"}}>{col.t}</p>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                {col.links.map((l,j)=>(
                  <li key={j}><Link href="#" style={{fontSize:"0.85rem",color:"#6B7280",textDecoration:"none"}}>{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{borderTop:"1px solid #1F2937",paddingTop:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <p style={{fontSize:"0.8rem",color:"#4B5563"}}>2026 DC Titanium Builders S.A. — Todos los derechos reservados.</p>
          <div style={{display:"flex",gap:"1.5rem"}}>
            {["ACI 318-25","NEC-SE-DS","NEC-HS","INEN"].map(n=>(
              <span key={n} style={{fontSize:"0.65rem",fontFamily:"JetBrains Mono,monospace",color:"#4B5563"}}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
''', encoding="utf-8")
print("OK Footer.tsx")

print("\n=== TODOS LOS ARCHIVOS CREADOS ===")

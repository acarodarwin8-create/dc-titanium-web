"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import type { Group } from "three";

type Capa = "analitico" | "armado" | "bim";

const GRID_X = [0, 5, 10];
const GRID_Z = [0, 6];
const NIVELES = 10;
const ALTURA_NIVEL = 2.4;
const NIVEL_Y = Array.from({ length: NIVELES }, (_, i) => (i - 1) * ALTURA_NIVEL);
const CENTRO: [number, number, number] = [5, 8.4, 3];

const ORO = "#C9A84C";
const ORO_CLARO = "#E8C96A";
const TITANIO = "#8B949E";
const REBAR = "#E8590C";

function detectarWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function Edificio({ capa }: { capa: Capa }) {
  const grupoRef = useRef<Group>(null);

  const columnas = useMemo(() => {
    const out: [number, number, number][] = [];
    for (const x of GRID_X) for (const z of GRID_Z) out.push([x, (NIVEL_Y[0] + NIVEL_Y[NIVELES - 1]) / 2, z]);
    return out;
  }, []);

  const vigas = useMemo(() => {
    const out: { pos: [number, number, number]; len: number; rotY: number }[] = [];
    for (const y of NIVEL_Y) {
      for (let i = 0; i < GRID_X.length - 1; i++) {
        for (const z of GRID_Z) {
          const x0 = GRID_X[i];
          const x1 = GRID_X[i + 1];
          out.push({ pos: [(x0 + x1) / 2, y, z], len: x1 - x0, rotY: 0 });
        }
      }
      for (let j = 0; j < GRID_Z.length - 1; j++) {
        for (const x of GRID_X) {
          const z0 = GRID_Z[j];
          const z1 = GRID_Z[j + 1];
          out.push({ pos: [x, y, (z0 + z1) / 2], len: z1 - z0, rotY: Math.PI / 2 });
        }
      }
    }
    return out;
  }, []);

  const losas = useMemo(() => NIVEL_Y.slice(1), []);

  const altura = NIVEL_Y[NIVELES - 1] - NIVEL_Y[0];

  return (
    <group ref={grupoRef} position={[-CENTRO[0], -CENTRO[1], -CENTRO[2]]}>
      {/* Columnas */}
      {columnas.map((p, i) => (
        <mesh key={"col-" + i} position={p}>
          <boxGeometry args={[0.28, altura, 0.28]} />
          {capa === "analitico" ? (
            <meshBasicMaterial color={ORO} wireframe />
          ) : capa === "armado" ? (
            <meshStandardMaterial color={TITANIO} metalness={0.4} roughness={0.6} />
          ) : (
            <meshStandardMaterial color={ORO} metalness={0.75} roughness={0.3} />
          )}
        </mesh>
      ))}

      {/* Rebar solo en capa armado */}
      {capa === "armado" &&
        columnas.map((p, i) => (
          <group key={"rebar-" + i} position={p}>
            {[
              [0.09, 0.09],
              [-0.09, 0.09],
              [0.09, -0.09],
              [-0.09, -0.09],
            ].map(([ox, oz], j) => (
              <mesh key={j} position={[ox, 0, oz]}>
                <cylinderGeometry args={[0.02, 0.02, altura, 6]} />
                <meshStandardMaterial color={REBAR} metalness={0.2} roughness={0.5} />
              </mesh>
            ))}
            {NIVEL_Y.map((y, k) => (
              <mesh key={"est-" + k} position={[0, y - NIVEL_Y[0] - altura / 2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.13, 0.012, 6, 12]} />
                <meshStandardMaterial color={REBAR} metalness={0.2} roughness={0.5} />
              </mesh>
            ))}
          </group>
        ))}

      {/* Vigas */}
      {vigas.map((v, i) => (
        <mesh key={"viga-" + i} position={v.pos} rotation={[0, v.rotY, 0]}>
          <boxGeometry args={[v.len, 0.22, 0.22]} />
          {capa === "analitico" ? (
            <meshBasicMaterial color={ORO_CLARO} wireframe />
          ) : capa === "armado" ? (
            <meshStandardMaterial color={TITANIO} metalness={0.4} roughness={0.6} />
          ) : (
            <meshStandardMaterial color={ORO} metalness={0.75} roughness={0.3} />
          )}
        </mesh>
      ))}

      {/* Losas — solo capa BIM */}
      {capa === "bim" &&
        losas.map((y, i) => (
          <mesh key={"losa-" + i} position={[(GRID_X[0] + GRID_X[GRID_X.length - 1]) / 2, y - 0.15, (GRID_Z[0] + GRID_Z[GRID_Z.length - 1]) / 2]}>
            <boxGeometry args={[GRID_X[GRID_X.length - 1] - GRID_X[0] + 0.6, 0.08, GRID_Z[GRID_Z.length - 1] - GRID_Z[0] + 0.6]} />
            <meshPhysicalMaterial color="#E8F0FF" transparent opacity={0.18} roughness={0.1} metalness={0} transmission={0.4} />
          </mesh>
        ))}
    </group>
  );
}

function Escena({ capa }: { capa: Capa }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[15, 20, 10]} intensity={1.1} color="#FFFFFF" />
      <directionalLight position={[-10, 8, -10]} intensity={0.35} color={ORO} />
      <Edificio capa={capa} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.7}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  );
}

const CAPAS: { id: Capa; icono: string; label: string }[] = [
  { id: "analitico", icono: "📐", label: "Modelo Analítico" },
  { id: "armado", icono: "🏗️", label: "Armado Rebar" },
  { id: "bim", icono: "🏢", label: "BIM Final" },
];

export default function BuildingCanvas3D() {
  const [capa, setCapa] = useState<Capa>("analitico");
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    setWebgl(detectarWebGL());
  }, []);

  if (webgl === null) {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0D1117" }}>
        <span style={{ width: "28px", height: "28px", border: "2px solid #21262D", borderTopColor: "#C9A84C", borderRadius: "50%" }} className="animate-spin" />
      </div>
    );
  }

  if (!webgl) {
    return (
      <div style={{ width: "100%", height: "100%", padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0D1117", border: "1px solid #21262D", borderRadius: "16px" }}>
        <p style={{ fontSize: "0.62rem", fontFamily: "JetBrains Mono,monospace", color: "#C9A84C", letterSpacing: "0.1em", marginBottom: "0.6rem" }}>EDIFICIO TITANIUM QUITUMBE</p>
        <p style={{ fontSize: "0.8rem", color: "#8B949E", lineHeight: 1.6 }}>
          Vista 3D no disponible en este navegador. Sistema SMF Sísmico — 9 pisos + subsuelo, ACI 318-25 / NEC-SE-DS.
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden", background: "radial-gradient(circle at 50% 30%,#161B22,#0A0A0F)" }}>
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <OrthographicCamera makeDefault position={[22, 16, 22]} zoom={26} near={0.1} far={200} />
        <Escena capa={capa} />
      </Canvas>

      {/* Toggle bar flotante glassmorphism */}
      <div
        className="backdrop-blur-xl bg-[#0D1117]/80 border border-[#21262D] rounded-full"
        style={{ position: "absolute", left: "50%", bottom: "1rem", transform: "translateX(-50%)", display: "flex", gap: "0.25rem", padding: "0.3rem" }}
      >
        {CAPAS.map((c) => (
          <button
            key={c.id}
            onClick={() => setCapa(c.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 0.85rem",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              background: capa === c.id ? "linear-gradient(135deg,#C9A84C,#E8C96A)" : "transparent",
              color: capa === c.id ? "#0A0A0F" : "#8B949E",
              fontSize: "0.68rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
          >
            <span>{c.icono}</span>
            <span className="hidden sm:inline">{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

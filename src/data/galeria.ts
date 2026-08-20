import { IMAGENES } from "@/lib/imagenes";

export type GaleriaItem = {
  id: number;
  titulo: string;
  categoria: string;
  tipo: "gratis" | "pago";
  precio: number;
  imagen: string;
  software: string[];
};

export const GALERIA: GaleriaItem[] = [
  {
    id: 101,
    titulo: "Render Torre Titanium Quitumbe",
    categoria: "Render 3D",
    tipo: "gratis",
    precio: 0,
    imagen: IMAGENES.recursos.renderTorre,
    software: ["RENDER"],
  },
  {
    id: 102,
    titulo: "Modelo BIM Federado: Edificio Corporativo",
    categoria: "Modelo BIM",
    tipo: "gratis",
    precio: 0,
    imagen: IMAGENES.recursos.modeloBim,
    software: ["BIM"],
  },
  {
    id: 103,
    titulo: "Vista Interior: Torre Residencial SMF",
    categoria: "Render Interior",
    tipo: "gratis",
    precio: 0,
    imagen: IMAGENES.recursos.vistaInterior,
    software: ["RENDER"],
  },
  {
    id: 104,
    titulo: "Set Completo: Render + Planos Edificio Quitumbe",
    categoria: "Paquete Premium",
    tipo: "pago",
    precio: 29,
    imagen: IMAGENES.recursos.setCompleto,
    software: ["BIM", "RENDER"],
  },
  {
    id: 105,
    titulo: "Plantilla Revit .rte Certificada DC Titanium",
    categoria: "Plantilla Revit",
    tipo: "pago",
    precio: 19,
    imagen: IMAGENES.recursos.plantillaRevit,
    software: ["REVIT"],
  },
  {
    id: 106,
    titulo: "Colección 20 Renders Arquitectónicos AEC",
    categoria: "Colección Renders",
    tipo: "pago",
    precio: 39,
    imagen: IMAGENES.recursos.coleccionRenders,
    software: ["RENDER"],
  },
];
